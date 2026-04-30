// Project files registry. Each project is a folder under
// <projectRoot>/.od/projects/<projectId>/. The frontend's project list
// (localStorage) carries metadata; this module is the single owner of the
// on-disk content (HTML artifacts, sketches, uploaded images, pasted text).
//
// All paths flowing in from HTTP handlers are validated against the project
// directory to prevent path traversal — see resolveSafe().

import { mkdir, readdir, readFile, rm, stat, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const FORBIDDEN_SEGMENT = /^\.\.?$/;

export function projectDir(projectsRoot, projectId) {
  if (!isSafeId(projectId)) throw new Error('invalid project id');
  return path.resolve(projectsRoot, projectId);
}

export async function ensureProject(projectsRoot, projectId) {
  const dir = projectDir(projectsRoot, projectId);
  await mkdir(dir, { recursive: true });
  return dir;
}

export async function listFiles(projectsRoot, projectId) {
  const dir = projectDir(projectsRoot, projectId);
  const out = [];
  await collectFiles(dir, '', out).catch((err) => {
    if (!err || err.code !== 'ENOENT') throw err;
  });
  // Newest first — matches the visual order users expect after generating.
  out.sort((a, b) => b.mtime - a.mtime);
  return out;
}

async function collectFiles(root, relDir, out) {
  const current = relDir ? path.join(root, relDir) : root;
  let entries = [];
  try {
    entries = await readdir(current, { withFileTypes: true });
  } catch (err) {
    if (err && err.code === 'ENOENT') return;
    throw err;
  }
  for (const e of entries) {
    if (e.name.startsWith('.')) continue;
    const rel = relDir ? `${relDir}/${e.name}` : e.name;
    const full = path.join(root, rel);
    if (e.isDirectory()) {
      await collectFiles(root, rel, out);
      continue;
    }
    if (!e.isFile()) continue;
    const st = await stat(full);
    out.push({
      name: rel,
      path: rel,
      type: 'file',
      size: st.size,
      mtime: st.mtimeMs,
      kind: kindFor(rel),
      mime: mimeFor(rel),
    });
  }
}

export async function readProjectFile(projectsRoot, projectId, name) {
  const dir = projectDir(projectsRoot, projectId);
  const file = resolveSafe(dir, name);
  const buf = await readFile(file);
  const st = await stat(file);
  return {
    buffer: buf,
    name: path.basename(file),
    size: st.size,
    mtime: st.mtimeMs,
    mime: mimeFor(file),
    kind: kindFor(file),
  };
}

export async function writeProjectFile(
  projectsRoot,
  projectId,
  name,
  body,
  { overwrite = true } = {},
) {
  const dir = await ensureProject(projectsRoot, projectId);
  const safeName = sanitizePath(name);
  const target = path.join(dir, safeName);
  if (!overwrite) {
    try {
      await stat(target);
      throw new Error('file already exists');
    } catch (err) {
      if (!err || err.code !== 'ENOENT') throw err;
    }
  }
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, body);
  const st = await stat(target);
  return {
    name: safeName,
    size: st.size,
    mtime: st.mtimeMs,
    kind: kindFor(safeName),
    mime: mimeFor(safeName),
  };
}

export async function deleteProjectFile(projectsRoot, projectId, name) {
  const dir = projectDir(projectsRoot, projectId);
  const file = resolveSafe(dir, name);
  await unlink(file);
}

export async function removeProjectDir(projectsRoot, projectId) {
  const dir = projectDir(projectsRoot, projectId);
  await rm(dir, { recursive: true, force: true });
}

function resolveSafe(dir, name) {
  if (typeof name !== 'string' || !name) {
    throw new Error('invalid file name');
  }
  const safeName = sanitizePath(name);
  const target = path.resolve(dir, safeName);
  if (!target.startsWith(dir + path.sep) && target !== dir) {
    throw new Error('path escapes project dir');
  }
  return target;
}

// Replace anything outside [A-Za-z0-9._-] with underscore. Spaces collapse
// to dashes (matches the kebab-case style used by the agent's slugs).
export function sanitizeName(raw) {
  const cleaned = String(raw ?? '')
    .replace(/[\\/]/g, '_')
    .replace(/\s+/g, '-')
    .replace(/[^A-Za-z0-9._-]/g, '_')
    .replace(/^\.+/, '_')
    .trim();
  return cleaned || `file-${Date.now()}`;
}

export function sanitizePath(raw) {
  const parts = String(raw ?? '')
    .split(/[\\/]+/)
    .map((part) => sanitizeName(part))
    .filter((part) => part && !FORBIDDEN_SEGMENT.test(part));
  if (parts.length === 0) return `file-${Date.now()}`;
  return parts.join('/');
}

function isSafeId(id) {
  return typeof id === 'string' && /^[A-Za-z0-9._-]{1,128}$/.test(id);
}

const EXT_MIME = {
  '.html': 'text/html; charset=utf-8',
  '.htm': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.cjs': 'text/javascript; charset=utf-8',
  '.ts': 'text/typescript; charset=utf-8',
  '.tsx': 'text/typescript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
};

export function mimeFor(name) {
  const ext = path.extname(name).toLowerCase();
  return EXT_MIME[ext] || 'application/octet-stream';
}

// Coarse kind buckets the frontend uses to pick a viewer.
export function kindFor(name) {
  // Editable sketches use a compound extension so they slot into the
  // "sketch" bucket while still being valid JSON on disk.
  if (name.endsWith('.sketch.json')) return 'sketch';
  const ext = path.extname(name).toLowerCase();
  if (ext === '.html' || ext === '.htm') return 'html';
  if (ext === '.svg') return 'sketch';
  if (['.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif'].includes(ext)) {
    if (name.startsWith('sketch-')) return 'sketch';
    return 'image';
  }
  if (['.md', '.txt'].includes(ext)) return 'text';
  if (['.js', '.mjs', '.cjs', '.ts', '.tsx', '.json', '.css'].includes(ext)) {
    return 'code';
  }
  return 'binary';
}
