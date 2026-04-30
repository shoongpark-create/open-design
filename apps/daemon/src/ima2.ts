// ima2 (local image generation) bridge. The user runs an `ima2` server
// locally — usually via the `ima2-gen` workspace dependency — and we proxy
// requests through the daemon so skills like fashion-lookbook can ask for
// editorial imagery without needing the agent to know the server URL.
//
// Discovery walks IMA2_SERVER → ~/.ima2/server.json → 127.0.0.1:3333. The
// only accepted hosts are loopback addresses; the URL must be an origin
// with no credentials, query, or hash. Any value that fails normalization
// is silently skipped so a stale advertise file doesn't break startup.

import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const DEFAULT_SERVER_URL = 'http://127.0.0.1:3333';
const LOOPBACK_HOSTS = new Set(['127.0.0.1', 'localhost', '::1']);

type Env = NodeJS.ProcessEnv;

interface AdvertiseFile {
  url?: string;
  port?: number | string;
  backend?: { url?: string };
}

export interface Ima2StatusOk {
  ok: true;
  serverUrl: string;
  data: unknown;
}

export interface Ima2StatusErr {
  ok: false;
  serverUrl: string | null;
  error: string;
}

export type Ima2Status = Ima2StatusOk | Ima2StatusErr;

export interface Ima2GenerateInput {
  prompt: string;
  serverUrl?: string | null;
  quality?: 'low' | 'medium' | 'high';
  size?: string;
  format?: 'png' | 'jpg' | 'webp';
  moderation?: 'low' | 'auto';
  model?: string;
  mode?: 'auto' | 'direct';
  webSearchEnabled?: boolean;
  references?: string[];
  timeoutMs?: number;
}

export interface Ima2GenerateResult {
  serverUrl: string;
  data: {
    image?: string;
    filename?: string;
    requestId?: string;
    elapsed?: number | string;
    model?: string;
    size?: string;
    [key: string]: unknown;
  };
}

export async function discoverIma2Server(env: Env = process.env): Promise<string | null> {
  const candidates: string[] = [];
  if (env.IMA2_SERVER) candidates.push(env.IMA2_SERVER);

  const advertised = await readAdvertiseFile(env);
  if (advertised && typeof advertised === 'object') {
    if (advertised.backend?.url) candidates.push(advertised.backend.url);
    if (advertised.url) candidates.push(advertised.url);
    if (advertised.port) candidates.push(`http://127.0.0.1:${advertised.port}`);
  }
  candidates.push(DEFAULT_SERVER_URL);

  const seen = new Set<string>();
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

export async function getIma2Status(): Promise<Ima2Status> {
  const serverUrl = await discoverIma2Server();
  if (!serverUrl) {
    return { ok: false, serverUrl: null, error: 'No valid local ima2 server URL found' };
  }
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
    return { ok: false, serverUrl, error: errorMessage(err) };
  }
}

export async function generateIma2Image(input: Ima2GenerateInput): Promise<Ima2GenerateResult> {
  const {
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
  } = input;
  const cleanPrompt = String(prompt || '').trim();
  if (!cleanPrompt) throw new Error('prompt required');
  const baseUrl = serverUrl
    ? normalizeLoopbackOrigin(serverUrl)
    : await discoverIma2Server();
  if (!baseUrl) throw new Error('No valid local ima2 server URL found');

  const body: Record<string, unknown> = {
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
    let data: Record<string, unknown>;
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      throw new Error(`ima2 returned invalid JSON: ${text.slice(0, 240)}`);
    }
    if (!resp.ok) {
      throw new Error(
        (data?.error as string) ||
          (data?.message as string) ||
          `ima2 returned HTTP ${resp.status}`,
      );
    }
    if (data?.error || data?.code) {
      const detail = [data.error, data.code, data.upstreamType]
        .filter(Boolean)
        .join(' ');
      throw new Error(detail || 'ima2 returned an error response');
    }
    return { serverUrl: baseUrl, data: data as Ima2GenerateResult['data'] };
  } finally {
    clearTimeout(timeout);
  }
}

export interface DecodedImage {
  ext: 'png' | 'jpg' | 'webp';
  buffer: Buffer;
}

export function decodeImageDataUrl(dataUrl: unknown): DecodedImage {
  if (typeof dataUrl !== 'string' || !dataUrl.startsWith('data:image/')) {
    throw new Error('ima2 response did not include an image data URL');
  }
  const match = /^data:image\/([a-zA-Z0-9.+-]+);base64,(.+)$/.exec(dataUrl);
  if (!match || !match[1] || !match[2]) {
    throw new Error('ima2 image data URL is invalid');
  }
  const ext = normalizeImageExt(match[1]);
  return {
    ext,
    buffer: Buffer.from(match[2], 'base64'),
  };
}

async function readAdvertiseFile(env: Env): Promise<AdvertiseFile | null> {
  const candidates: string[] = [];
  if (env.IMA2_ADVERTISE_FILE) candidates.push(env.IMA2_ADVERTISE_FILE);
  if (env.IMA2_CONFIG_DIR) candidates.push(path.join(env.IMA2_CONFIG_DIR, 'server.json'));
  candidates.push(path.join(os.homedir(), '.ima2', 'server.json'));
  for (const candidate of candidates) {
    try {
      const raw = await fs.readFile(candidate, 'utf8');
      return JSON.parse(raw) as AdvertiseFile;
    } catch {
      // Try next candidate.
    }
  }
  return null;
}

function normalizeLoopbackOrigin(raw: unknown): string {
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

function normalizeImageExt(raw: unknown): DecodedImage['ext'] {
  const value = String(raw || '').toLowerCase();
  if (value === 'jpeg' || value === 'jpg') return 'jpg';
  if (value === 'webp') return 'webp';
  return 'png';
}

function errorMessage(err: unknown): string {
  if (err && typeof err === 'object' && 'message' in err) {
    const message = (err as { message?: unknown }).message;
    if (typeof message === 'string' && message) return message;
  }
  return String(err);
}
