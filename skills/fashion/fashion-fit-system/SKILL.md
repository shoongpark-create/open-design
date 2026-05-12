---
name: fashion-fit-system
description: |
  Brand **fit-system reference sheet** as a single HTML file. Locks the
  brand's fit nomenclature across UNI / WOMEN lines for short-sleeve /
  long-sleeve / sweat / outer / bottom: which fit names exist (slim /
  regular / oversize / semi-oversize / crop / etc.), which silhouettes
  they refer to, and which are paired across category × line. The
  document a fit-room and pattern team uses to stop calling the same
  silhouette by three different names. Use when the brief asks for
  "fit system", "fit guide", "핏 체계", "핏 정비", "핏 가이드", "사이즈
  체계", "실루엣 체계", "fit nomenclature".
triggers:
  - "fit system"
  - "fit guide"
  - "fit chart"
  - "fit nomenclature"
  - "핏 체계"
  - "핏 정비"
  - "핏 가이드"
  - "실루엣 체계"
  - "사이즈 체계"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 22
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "Build a WACKYWILLY fit system: UNI = slim / regular / oversize across short-sleeve, long-sleeve, sweat; WOMEN = slim baby fit / regular / semi-oversize across short-sleeve, long-sleeve, sweat; lock unified names + length naming."
---

# Fashion Fit System Skill

Produce a single-file HTML **fit-system reference sheet** — the
operational document a fashion brand uses to lock the working
nomenclature for fit, length, and silhouette across all categories and
lines. It is **internal + supplier-facing**: the audience is the
designer, the pattern team, the fit-room, and the supplier sample
room.

The sheet answers three questions:

1. **What fits exist in this brand's vocabulary?** (canonical set —
   typically slim / regular / oversize for UNI; slim baby / regular /
   semi-oversize for WOMEN)
2. **What does each fit look like worn?** (a calibration figure per
   fit per category, so the team has a shared visual standard)
3. **What naming is unified across length / fit / category?** (the
   "혼선 방지" rule book: 크롭 vs 크롭핏 vs 크롭베이비, sleeve length
   vs body length naming)

It is **perpetual** — revised once per fiscal year or whenever the
brand redefines its silhouette boundaries — not seasonal.

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
fashion-fit-system/
├── SKILL.md
├── assets/
│   └── template.html
└── references/
    ├── layouts.md
    └── checklist.md
```

## Workflow

### Step 0 — Pre-flight

1. Read `assets/template.html` end-to-end.
2. Read [`../_shared/imagegen.md`](../_shared/imagegen.md) — used for
   calibration figure generation.
3. Read `references/layouts.md` and pick a layout.
4. Read `references/checklist.md`.
5. Read the active `DESIGN.md`. The fit sheet is brand-tone-neutral
   (matrix-led), so DESIGN.md mostly contributes type and rule color.

### Step 1 — Clarify the system

Ask in the first discovery form if not provided:

- Brand name
- Lines covered — UNI only, WOMEN only, or both (default both)
- Category coverage — pick from {short-sleeve, long-sleeve, sweat,
  outer, hoodie, knit, denim, pants, shorts, skirt, dress}; minimum 3
- Fit ladder per line — typical UNI 3-step (slim / regular /
  oversize); typical WOMEN 3-step (slim baby / regular / semi-oversize).
  Allow 2–4 steps. Each step has canonical name + 1-line silhouette
  description.
- Length naming convention — one rule for body length (regular /
  long / cropped) and one rule for sleeve length (regular / long /
  raglan)
- Issues to fix — list known nomenclature problems being resolved
  (e.g. "크롭 단어 공식 사용으로 사이즈 인지 혼선 발생 → 정리")

### Step 2 — Pick a layout

Pick **one** rhythm from `references/layouts.md`:

- **Side-by-side current vs. future** (default for first-pass) — left
  column shows current state with problems flagged, right column
  shows target state
- **Matrix-only future state** (for revisions after lock) — matrix
  by category × fit step × line
- **Per-category sheets** (for very wide coverage) — one section per
  category, fit ladder shown as worn calibration figures

State the chosen layout in one sentence.

### Step 3 — Generate calibration figures (optional but recommended)

For each fit × category × line cell, generate a **calibration figure**
(full-body cut-out wearing only this fit's representative garment).
The pattern team uses these to align "what does *oversized sweat* look
like in our brand" across reviews.

Image count grows fast: 3 fits × 3 categories × 2 lines = 18 images.
For first-pass docs, generate calibration figures only for the
**resolved future state**, not the legacy current state — a
screenshot of a current-state catalog photo can substitute for the
left column.

Default size `1024x1536`. Save as:

```
images/uni-short-slim.png
images/uni-short-regular.png
images/uni-short-oversize.png
images/uni-long-slim.png
…
images/women-short-slim-baby.png
…
```

Per-image prompt shape:

```
Use case: design / fit-system
Asset type: fit-calibration figure (cut-out, full-body)
Subject: a single fashion model standing, full-length, neutral pose,
  arms relaxed, eye-level camera; gender per line (UNI = neutral
  masculine; WOMEN = neutral feminine)
Garment: a representative [category] in [fit] fit, plain solid color,
  no graphic, no logo, neutral neckline
Color: solid neutral (offwhite / light grey / soft beige) — fit must
  read clearly without distraction
Bottom: neutral basic (jeans for UNI, basic skirt or jeans for WOMEN)
  not part of the fit study
Style/medium: editorial cut-out, transparent or seamless paper neutral
Composition/framing: vertical 4:5, full body, ~5% margin
Constraints: no logos, no readable text, no watermark, single subject
Avoid: aggressive pose, runway pose, half-body, beauty retouching
```

### Step 4 — Compose the sheet

Copy `assets/template.html` to `index.html`. Replace `[REPLACE]`
tokens, bind active `DESIGN.md` tokens into `:root`, then paste the
chosen rhythm into `<main id="fit-system">`.

Required sections, in order:

1. **Header strip** — brand + version + status + lock date.
2. **System thesis** — one paragraph stating the issues being
   resolved and the change direction.
3. **Current state matrix** (only for "Side-by-side" layout) —
   category × fit × line with current naming, flag rows being
   redefined.
4. **Future state matrix** — category × fit × line with locked
   naming + calibration figures (when generated).
5. **Naming rule block** — bullet list of unified rules (length
   naming, fit naming, banned synonyms, supplier-side equivalents).
6. **Open / next decisions** — what still needs locking, owner, by
   when.

### Step 5 — Self-check

Run `references/checklist.md`. Future-state matrix must list every
category × fit step × line cell. Naming rules must include at least
one "banned synonym" entry. Calibration figures (if generated) must
all use the same lighting / background.

## Output contract

```
<artifact identifier="fashion-fit-system-slug" type="text/html" title="Fit System Title">
<!doctype html>
<html>...</html>
</artifact>
```

One sentence before the artifact, nothing after.
