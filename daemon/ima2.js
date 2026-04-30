import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const DEFAULT_SERVER_URL = 'http://127.0.0.1:3333';
const LOOPBACK_HOSTS = new Set(['127.0.0.1', 'localhost', '::1']);

export async function discoverIma2Server(env = process.env) {
  const candidates = [];
  if (env.IMA2_SERVER) candidates.push(env.IMA2_SERVER);

  const advertised = await readAdvertiseFile(env);
  if (advertised && typeof advertised === 'object') {
    if (advertised.backend?.url) candidates.push(advertised.backend.url);
    if (advertised.url) candidates.push(advertised.url);
    if (advertised.port) candidates.push(`http://127.0.0.1:${advertised.port}`);
  }
  candidates.push(DEFAULT_SERVER_URL);

  const seen = new Set();
  for (const candidate of candidates) {
    try {
      const url = normalizeLoopbackOrigin(candidate);
      if (seen.has(url)) continue;
      seen.add(url);
      return url;
    } catch {
      // Ignore invalid candidates and keep walking the discovery chain.
    }
  }
  return null;
}

export async function getIma2Status() {
  const serverUrl = await discoverIma2Server();
  if (!serverUrl) return { ok: false, serverUrl: null, error: 'No valid local ima2 server URL found' };
  try {
    const resp = await fetch(`${serverUrl}/api/health`, {
      headers: { 'X-ima2-client': 'open-design' },
    });
    if (!resp.ok) {
      return { ok: false, serverUrl, error: `ima2 health returned HTTP ${resp.status}` };
    }
    const data = await resp.json().catch(() => ({}));
    return { ok: true, serverUrl, data };
  } catch (err) {
    return { ok: false, serverUrl, error: err?.message || String(err) };
  }
}

export async function generateIma2Image({
  prompt,
  serverUrl,
  quality = 'medium',
  size = '1024x1024',
  format = 'png',
  moderation = 'low',
  model,
  mode = 'auto',
  webSearchEnabled = true,
  references = [],
  timeoutMs = 180000,
}) {
  const cleanPrompt = String(prompt || '').trim();
  if (!cleanPrompt) throw new Error('prompt required');
  const baseUrl = serverUrl
    ? normalizeLoopbackOrigin(serverUrl)
    : await discoverIma2Server();
  if (!baseUrl) throw new Error('No valid local ima2 server URL found');

  const body = {
    prompt: cleanPrompt,
    quality,
    size,
    format,
    moderation,
    mode,
    webSearchEnabled: Boolean(webSearchEnabled),
    references: Array.isArray(references) ? references : [],
    provider: 'oauth',
  };
  if (model) body.model = model;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const resp = await fetch(`${baseUrl}/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-ima2-client': 'open-design',
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    const text = await resp.text();
    let data;
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      throw new Error(`ima2 returned invalid JSON: ${text.slice(0, 240)}`);
    }
    if (!resp.ok) {
      throw new Error(data?.error || data?.message || `ima2 returned HTTP ${resp.status}`);
    }
    if (data?.error || data?.code) {
      const detail = [data.error, data.code, data.upstreamType]
        .filter(Boolean)
        .join(' ');
      throw new Error(detail || 'ima2 returned an error response');
    }
    return { serverUrl: baseUrl, data };
  } finally {
    clearTimeout(timeout);
  }
}

export function decodeImageDataUrl(dataUrl) {
  if (typeof dataUrl !== 'string' || !dataUrl.startsWith('data:image/')) {
    throw new Error('ima2 response did not include an image data URL');
  }
  const match = /^data:image\/([a-zA-Z0-9.+-]+);base64,(.+)$/.exec(dataUrl);
  if (!match) throw new Error('ima2 image data URL is invalid');
  const ext = normalizeImageExt(match[1]);
  return {
    ext,
    buffer: Buffer.from(match[2], 'base64'),
  };
}

async function readAdvertiseFile(env) {
  const candidates = [];
  if (env.IMA2_ADVERTISE_FILE) candidates.push(env.IMA2_ADVERTISE_FILE);
  if (env.IMA2_CONFIG_DIR) candidates.push(path.join(env.IMA2_CONFIG_DIR, 'server.json'));
  candidates.push(path.join(os.homedir(), '.ima2', 'server.json'));
  for (const candidate of candidates) {
    try {
      const raw = await fs.readFile(candidate, 'utf8');
      return JSON.parse(raw);
    } catch {
      // Try next candidate.
    }
  }
  return null;
}

function normalizeLoopbackOrigin(raw) {
  const parsed = new URL(String(raw || '').trim());
  if (parsed.protocol !== 'http:') throw new Error('ima2 server URL must use http');
  if (parsed.username || parsed.password) {
    throw new Error('ima2 server URL must not include credentials');
  }
  if (parsed.pathname !== '/' || parsed.search || parsed.hash) {
    throw new Error('ima2 server URL must be an origin only');
  }
  if (!LOOPBACK_HOSTS.has(parsed.hostname)) {
    throw new Error('ima2 server URL must point to a loopback host');
  }
  if (!parsed.port) throw new Error('ima2 server URL must include a port');
  const host = parsed.hostname === '::1' ? '[::1]' : parsed.hostname;
  return `http://${host}:${parsed.port}`;
}

function normalizeImageExt(raw) {
  const value = String(raw || '').toLowerCase();
  if (value === 'jpeg' || value === 'jpg') return 'jpg';
  if (value === 'webp') return 'webp';
  return 'png';
}
