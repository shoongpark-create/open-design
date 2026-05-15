#!/usr/bin/env bun
/**
 * md-to-image render script
 * Usage: bun run render.ts <input.md> <output_dir> [--preset card|wide|slide] [--width N] [--height N] [--font-scale N]
 */
import { writeFile, readFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { basename, join, dirname } from 'node:path'

// ── Args ──
const args = process.argv.slice(2)
const inputPath = args[0]
const outputDir = args[1] || '.'

if (!inputPath) {
  console.error('Usage: bun run render.ts <input.md> <output_dir> [options]')
  console.error('Options:')
  console.error('  --preset card|wide|slide   Page size preset (default: wide)')
  console.error('  --width N                  Custom page width in px')
  console.error('  --height N                 Custom page height in px')
  console.error('  --font-scale N             Font scale multiplier (default: 1.0)')
  console.error('  --format png|svg           Output format (default: png)')
  process.exit(1)
}

function getArg(name: string): string | undefined {
  const idx = args.indexOf(`--${name}`)
  return idx >= 0 ? args[idx + 1] : undefined
}

const preset = getArg('preset') || 'wide'
const customWidth = getArg('width') ? Number(getArg('width')) : undefined
const customHeight = getArg('height') ? Number(getArg('height')) : undefined
const fontScale = Number(getArg('font-scale') || '1.0')
const format = (getArg('format') || 'png') as 'png' | 'svg'

// ── Presets ──
const PRESETS: Record<string, { width: number; height: number; margin: number; h1: number; h2: number; body: number; code: number }> = {
  card: { width: 1080, height: 1440, margin: 72, h1: 52, h2: 38, body: 28, code: 24 },
  wide: { width: 1600, height: 1000, margin: 52, h1: 36, h2: 28, body: 20, code: 17 },
  slide: { width: 1920, height: 1080, margin: 64, h1: 44, h2: 32, body: 22, code: 18 },
}

const p = PRESETS[preset] || PRESETS.wide!
const pageW = customWidth || p.width
const pageH = customHeight || p.height
const s = fontScale

// ── Find marknative ──
const MARKNATIVE_DIR = join(dirname(decodeURIComponent(new URL(import.meta.url).pathname)), '..', '.marknative')

if (!existsSync(join(MARKNATIVE_DIR, 'node_modules'))) {
  console.error(`marknative not installed at ${MARKNATIVE_DIR}`)
  console.error('Run the install step first (see SKILL.md)')
  process.exit(1)
}

// ── Patch theme before importing ──
const themePath = join(MARKNATIVE_DIR, 'src/theme/default-theme.ts')
const themeContent = await readFile(themePath, 'utf-8')

const patchedTheme = themeContent.replace(
  /export const defaultTheme: DefaultTheme = \{[\s\S]*?\n\}/,
  `export const defaultTheme: DefaultTheme = {
  page: {
    width: ${pageW},
    height: ${pageH},
    margin: { top: ${Math.round(p.margin * 0.92)}, right: ${p.margin}, bottom: ${Math.round(p.margin * 0.92)}, left: ${p.margin} },
  },
  typography: {
    h1: { font: 'bold ${Math.round(p.h1 * s)}px sans-serif', lineHeight: ${Math.round(p.h1 * s * 1.4)} },
    h2: { font: 'bold ${Math.round(p.h2 * s)}px sans-serif', lineHeight: ${Math.round(p.h2 * s * 1.43)} },
    body: { font: '${Math.round(p.body * s)}px sans-serif', lineHeight: ${Math.round(p.body * s * 1.6)} },
    code: { font: '${Math.round(p.code * s)}px monospace', lineHeight: ${Math.round(p.code * s * 1.53)} },
  },
  blocks: {
    paragraph: { marginBottom: ${Math.round(16 * s)} },
    heading: { marginTop: ${Math.round(28 * s)}, marginBottom: ${Math.round(8 * s)} },
    list: { marginBottom: ${Math.round(16 * s)}, itemGap: ${Math.round(5 * s)}, indent: ${Math.round(28 * s)} },
    code: { marginBottom: ${Math.round(16 * s)}, padding: ${Math.round(16 * s)} },
    quote: { marginBottom: ${Math.round(12 * s)}, padding: ${Math.round(8 * s)} },
    table: { marginBottom: ${Math.round(16 * s)}, cellPadding: ${Math.round(12 * s)} },
    image: { marginBottom: ${Math.round(16 * s)} },
  },
}`
)

await writeFile(themePath, patchedTheme)

// ── Render ──
const { renderMarkdown } = await import(join(MARKNATIVE_DIR, 'src/index.ts'))

const markdown = await readFile(inputPath, 'utf-8')
await mkdir(outputDir, { recursive: true })

console.log(`Rendering: ${inputPath}`)
console.log(`Preset: ${preset} (${pageW}×${pageH}), font-scale: ${s}, format: ${format}`)

const pages = await renderMarkdown(markdown, { format })

const stem = basename(inputPath, '.md')
const ext = format

for (const [i, page] of pages.entries()) {
  const filename = join(outputDir, `${stem}_${String(i + 1).padStart(2, '0')}.${ext}`)
  if (format === 'png') {
    await writeFile(filename, page.data as Buffer)
  } else {
    await writeFile(filename, page.data as string)
  }
  console.log(`  → ${filename}`)
}

console.log(`Done: ${pages.length} page(s)`)
