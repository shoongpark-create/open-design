---
name: fashion-positioning-map
description: |
  Brand **positioning map** as a single HTML file. Plots the brand and its
  competitor set on a 2x2 axis chart (default: BASIC ↔ ACCENT × NEW BASIC ↔
  TREND, the K-young-casual industry standard, but axes are configurable).
  Ships a competitor logo / wordmark library, a target-quadrant reading,
  and a one-line strategic intent. Use when the brief asks for a
  "positioning map", "포지셔닝 맵", "브랜드 좌표", "경쟁 좌표", "competitive
  map", "brand placement", or any 2x2 brand-coordinate visual.
triggers:
  - "positioning map"
  - "brand map"
  - "brand placement"
  - "competitive map"
  - "포지셔닝 맵"
  - "브랜드 좌표"
  - "경쟁 좌표"
  - "perceptual map"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 18
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "Build a 27SS WACKYWILLY positioning map: x-axis BASIC ↔ ACCENT, y-axis NEW BASIC ↔ TREND, plot WACKYWILLY UNI and WOMEN both above center, competitors include CECILIE BAHNSEN, Miu Miu, Madhappy, Sandy Liang, Doublet, Saint Mxxxxxx, AAPE, AURALEE, BAPE, Stussy, Supreme, A.PRESSE, Comme des Garçons GIRL, LLEGE, Human Made, Shushu/Tong."
---

# Fashion Positioning Map Skill

Produce a single-file HTML **brand positioning map** — the 2x2 visual a
brand director uses to align design / merchandising / marketing on the
same competitive coordinate system. It is **internal-facing**: the
audience is the leadership team and any new joiner who needs to absorb
the brand's strategic position in 30 seconds.

The map answers four questions:

1. **Where do we sit?** (the brand's own placement, with a label and
   short rationale)
2. **Who is in our quadrant?** (direct competitors in the same square)
3. **Who is *next* to us?** (adjacent quadrant brands — the ones we
   could drift toward / away from)
4. **What is our strategic intent?** (the one-line direction of motion
   for the season, e.g. "stay center, push slightly toward ACCENT
   without crossing into TREND-extreme")

## Output language

Keep this skill's instructions in English. For user-facing artifact copy,
default to a Korean fashion-business register when the user writes in Korean or
the brand/context is Korean. Do not fully translate every label into Korean.
Use natural Korean noun-phrase report style for strategy, rationale, caveats,
owner notes, and decisions; keep established industry English or mixed terms when they are
the normal working language. Typical terms to keep include SKU, new lineup,
mood, lookbook, styling, fit, silhouette, colorway, carryover, target lot, drop,
bridge, category, item, setup, BASIC/TREND/ACCENT, BTA, UNI/WOMEN, S1~S4,
fabric/graphic names, season codes, and file paths. Section labels and table
headers may be mixed, e.g. `Category × SKU Plan`, `Bridge Map`, `Open
Decisions`, `Anti-pattern · 하지 않을 것`. Avoid awkward literal Hangulization
such as `락 리뷰` when `LOCK REVIEW` is clearer. Image-generation prompts may
stay in English; visible captions and fallback text should match the artifact
register: Korean phrases with accepted fashion-business English terms. For
report-style artifacts, prefer noun-phrase endings in Korean body copy, table
interpretation, HTML comments, revision logs, and decision notes (e.g. `적용`, `전환`, `확보 사유`, `사용 금지`,
`owner 확인`, `sample check 완료`, `Local ComfyUI 미사용`) instead of stiff
finite endings such as `~이다`, `~한다`, or `~하였다`.

## Typography

Use the active `DESIGN.md` WACKYWILLY type system. Keep `Pretendard Variable`
as the default body, table, UI, and decision-log font. Choose exactly one point
font token per artifact and bind `--font-display` to it: `--font-display-report`
for operational decks, line-up docs, roadmaps, and internal presentations;
`--font-display-romance` for WACKYLILY, romantic street, soft editorial,
lookbook, and mood-board artifacts; `--font-display-street` for strong street,
launch, promo, and key-visual directions; `--font-display-play` for character
IP, fandom goods, and witty campaign moments. Do not use point fonts for table
body, long notes, revision logs, SKU rows, code, dates, filenames, or owner/by
fields; keep those in `--font-sans` or `--font-mono`.

## Resource map

```
fashion-positioning-map/
├── SKILL.md
├── assets/
│   └── template.html
└── references/
    ├── axis-presets.md
    ├── layouts.md
    └── checklist.md
```

## Workflow

### Step 0 — Pre-flight

1. Read `assets/template.html` end-to-end.
2. Read `references/axis-presets.md` — the 6 common axis pairings.
3. Read `references/layouts.md` and pick a layout.
4. Read `references/checklist.md`.
5. Read the active `DESIGN.md`. Bind type and color tokens.
6. Image generation is **optional** for this skill. The default map
   uses **CSS-rendered wordmark text** for each brand, not raster
   images. Only generate imagery if the user attaches logo assets and
   asks for a logo-set version. If used, follow
   [`../_shared/imagegen.md`](../_shared/imagegen.md).

### Step 1 — Clarify the map

Ask in the first discovery form if not provided:

- Season name (e.g. 27SS) — if season-agnostic, mark "perpetual"
- Brand name and lines plotted (e.g. "WACKYWILLY UNI", "WACKYWILLY
  WOMEN", or single point "WACKYWILLY")
- Axes — pick from `references/axis-presets.md` or define custom:
  - Default x: BASIC ↔ ACCENT
  - Default y: NEW BASIC ↔ TREND (or TREND at top, NEW BASIC at bottom)
- Competitor set — list 8–18 brands; minimum 8 for a credible map
- Quadrant for each competitor (when known) — or ask the agent to
  place using public-knowledge cues
- One-line strategic intent (e.g. "감도 높은 트렌디함에 위트를 더한,
  합리적인 가격의 스트릿 브랜드")
- Per-line sub-positioning notes (e.g. "유니: 뉴베이직 라인을 신선하고
  세련되게 재정의 / 우먼: 뉴베이직을 보강해 안정적 볼륨 유지")
- Whether to render with wordmark text (default) or with attached logo
  images

### Step 2 — Pick a layout

Pick **one** rhythm from `references/layouts.md`:

- **Centered map + side notes** (default) — the 2x2 map centered on the
  page; brand intent + per-line notes in a sidebar to the right
- **Map + table** — map on top, competitor table below with each brand,
  quadrant, and 1-line "what they do" note
- **Map + comparison strip** — map on top, comparison strip below with
  3–4 nearest neighbors and their differentiator vs. our brand

State the chosen rhythm in one sentence.

### Step 3 — Plot points

For each brand, place a `<span class="brand-point">` at coordinates
`(x, y)` using percentages, where:

- `x = 0%` is the left axis label, `x = 100%` is the right axis label
- `y = 0%` is the top axis label, `y = 100%` is the bottom axis label

Calibration:

- "Pure BASIC" lives at `x ≈ 5–15%`; "pure ACCENT" lives at
  `x ≈ 85–95%`; mainstream center at `x ≈ 50%`.
- "Pure TREND" lives at `y ≈ 5–15%` (top); "pure NEW BASIC" lives at
  `y ≈ 85–95%` (bottom).
- Use the WACKYWILLY 27SS deck as a calibration reference: WACKYWILLY
  UNI sits roughly center-right and slightly above center
  (~`x:55%, y:45%` for UNI, `~x:55%, y:55%` for WOMEN).

Our own brand point uses the brand's symbol or wordmark; competitor
points use canonical wordmark text.

### Step 4 — Render the map

Copy `assets/template.html` to `index.html`. Replace `[REPLACE]`
tokens, bind active `DESIGN.md` tokens into `:root`, then paste the
chosen rhythm from `references/layouts.md` into
`<main id="positioning-map">`.

Required sections, in order:

1. **Header strip** — season (or "perpetual") + brand + status (v1 /
   v2 / locked) + lock date.
2. **Strategic intent** — one sentence above the map.
3. **2x2 map** — the chart with axis labels at the four sides, crosshair
   in the middle, brand points plotted as `<span class="brand-point">`.
4. **Per-line notes** (when ≥2 lines plotted) — a short note per line
   explaining the position rationale.
5. **Competitor table** — every plotted brand with: name, quadrant,
   1-line "what they do", optional URL. (Only required for "Map +
   table" rhythm; optional otherwise.)
6. **Adjacent neighbors strip** (only for "Map + comparison strip"
   rhythm) — 3–4 nearest competitors with a 1-line differentiator vs.
   our brand.
7. **Open / next decisions** — what still needs locking, owner, by when.

### Step 5 — Self-check

Run `references/checklist.md` before emitting. Every plotted brand
must carry a name and coordinates within the 0–100% box. Our brand
point must be visually distinguished from competitors. Page must still
render in a print-friendly way (no critical content cut off in
landscape A4).

## Output contract

Emit between `<artifact>` tags:

```
<artifact identifier="fashion-positioning-map-slug" type="text/html" title="Brand Positioning Map Title">
<!doctype html>
<html>...</html>
</artifact>
```

One sentence before the artifact, nothing after.
