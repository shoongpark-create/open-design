---
name: fashion-graphic-direction
description: |
  Season **graphic direction** as a single HTML file. Locks the season's
  graphic language for tees, prints, embroidery, point labels, symbols, and
  wordmark seasonality — the document a Korean apparel studio uses to align
  designers and graphic suppliers before any artwork is commissioned. Use
  when the brief asks for a "graphic direction", "graphic board", "그래픽
  방향성", "시즌 그래픽", "프린트 방향", "심볼/워드마크", "캐릭터 그래픽",
  or any artwork-axis lock that precedes per-item artwork files.
triggers:
  - "graphic direction"
  - "graphic board"
  - "season graphic"
  - "print direction"
  - "그래픽 방향성"
  - "시즌 그래픽"
  - "프린트 방향"
  - "심볼"
  - "워드마크"
  - "캐릭터 그래픽"
  - "embroidery direction"
  - "point label"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 15
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "Build a 27SS graphic direction for WACKYWILLY: 6 themes — vintage cartoon tee, graffiti spray, line-drawing camo, candy camo, retro jelly-core, point label/woven; lock the season symbol + wordmark jelly treatment."
---

# Fashion Graphic Direction Skill

Produce a single-file HTML **season graphic direction** — the document that
locks the season's graphic language *before* any per-item artwork file is
commissioned. It is **internal-facing**: the audience is the designer, the
graphic studio, the embroidery supplier, and the point-label vendor.

A graphic direction answers four questions:

1. **What graphic themes belong to this season?** (3–8 named themes, each
   with a 1-line thesis and reference set)
2. **How does each theme show up?** (tee print, embroidery, all-over
   pattern, sticker, point label, woven tag, hardware engraving)
3. **What is the season's symbol + wordmark treatment?** (lock the
   seasonal jelly / chrome / pixel / handwritten variant of the brand
   marks for this season only)
4. **What is the graphic anti-direction?** (themes the season explicitly
   refuses — Y2K bling, AI-slop sparkle, generic emoji, etc.)

It sits between `fashion-concept-board` (territory) and per-item artwork
files: once locked, the sample-room and graphic studio brief themselves
from this single page.

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
fashion-graphic-direction/
├── SKILL.md
├── assets/
│   └── template.html
└── references/
    ├── theme-library.md
    ├── layouts.md
    └── checklist.md
```

## Workflow

### Step 0 — Pre-flight

1. Read `assets/template.html` end-to-end.
2. Read [`../_shared/imagegen.md`](../_shared/imagegen.md).
3. Read `references/theme-library.md` — the 12-theme library with example
   moves and "use when" notes.
4. Read `references/layouts.md` and pick a layout rhythm.
5. Read `references/checklist.md`.
6. Read the active `DESIGN.md`, `fashion-concept-board` (if any), and
   `fashion-color-story` (if any). Themes must be palette-bound — graphic
   color choices come from the locked color story, not from the template
   defaults.

### Step 1 — Clarify the direction

Ask in the first discovery form if not provided:

- Season name (e.g. 27SS)
- Brand persona in 1–2 adjectives (e.g. "playful, witty, retro-leaning")
- Theme count target — default 5–7; allow 3–8 range
- Application surfaces — tick which apply: tee print, sweat print,
  embroidery, all-over pattern, woven label, point label / sticker,
  hardware engraving, packaging
- Whether the season locks a new symbol / wordmark treatment (yes / no)
- Carryover themes from prior season — list them by name
- Anti-direction — 3–7 explicit "no" themes
- Graphic studio / embroidery supplier (if known)

### Step 2 — Pick themes

Pick **3–8 themes** from `references/theme-library.md`, or define new
ones using the same shape:

- **Theme name** — short, evocative, brand-internal (e.g. "Vintage
  cartoon", "Graffiti spray + sticker", "Line-drawing camo", "Candy
  camo", "Retro jelly-core")
- **Thesis** — one line on what the theme is for this season
- **Application set** — tick applicable surfaces
- **Reference cluster** — 4–6 reference images
- **Carryover note** — new / carried / evolved
- **Studio assignment** — which graphic studio owns it (optional)

State the chosen theme list in one sentence before generating images:

> "27SS graphic direction: 6 themes — vintage cartoon tee, graffiti
> spray + sticker, line-drawing camo, candy camo, retro jelly-core,
> colored point label / woven."

### Step 3 — Generate theme reference clusters

For each theme, generate **4–6 reference images** that span the *theme's
full surface set* (a tee print + an embroidery sample + an all-over
pattern strip if applicable). Default `1024x1024`. Save with names:

```
images/theme-01-cartoon-01.png … images/theme-01-cartoon-06.png
images/theme-02-graffiti-01.png …
images/theme-03-camo-01.png …
…
```

Per-image prompt shape:

```
Use case: design / graphic-direction
Asset type: graphic-theme reference (no model)
Theme: [REPLACE theme name]
Application surface: [tee print | embroidery | all-over pattern |
  sticker | point label | woven tag | hardware engraving]
Visual subject: [the actual graphic — describe motif, line weight,
  composition; if all-over pattern, describe repeat unit]
Style/medium: editorial flat-lay or close-up; for tee print, show the
  graphic on a flat-laid garment area; for embroidery, show stitching
  texture; for woven label, show weave at swatch scale
Color palette: [from active color story; graphic colors are usually
  ACCENT or TREND tier — name them by TCX]
Composition/framing: square 1024x1024, centered subject, ~10% margin,
  consistent flat-lay angle across the cluster
Lighting/mood: soft daylight, no hard shadows
Constraints: no third-party brand text, no readable real-world brand
  marks, no watermark, no AI-slop chrome glitter, no fake gradient sky
Avoid: aggressive purple gradient, generic emoji, stock-vector look,
  clipart aesthetic, busy backgrounds
```

If the user attaches their own reference (a vintage tee photo, a stickerl
sheet, a label scan), treat as edit / extend reference per imagegen rules
— do not re-imagine.

### Step 4 — Symbol / wordmark seasonality (optional)

If the season locks a new symbol or wordmark treatment (Step 1), add a
dedicated **Symbol & Wordmark** block. Generate:

- **Symbol study** — 3–6 variations of the brand symbol in this season's
  treatment (jelly, chrome, pixel, hand-drawn, embossed). Save as
  `images/symbol-01.png` … `images/symbol-06.png`.
- **Wordmark study** — 3–6 variations of the brand wordmark in the same
  treatment. Save as `images/wordmark-01.png` …
- **Lockup variants** — 2–3 symbol+wordmark lockups suitable for
  apparel, packaging, IMC. Save as `images/lockup-01.png` …

### Step 5 — Compose the direction

Copy `assets/template.html` to `index.html`. Replace `[REPLACE]` tokens,
bind active `DESIGN.md` tokens into `:root`, then paste the chosen rhythm
from `references/layouts.md` into `<main id="graphic-direction">`.

Required sections, in order:

1. **Header strip** — season + brand + direction status (v1 / v2 /
   locked) + lock date.
2. **Direction thesis** — one paragraph on the season's graphic posture
   and how it connects to the concept board territory.
3. **Theme grid** — 3–8 theme cards, each with name, thesis,
   application-surface tags, reference cluster, carryover note,
   optional studio assignment.
4. **Symbol & Wordmark** (optional) — symbol study + wordmark study +
   lockup variants. Skip block entirely if season carries no new
   treatment.
5. **Application surface matrix** — table of themes × surfaces, marking
   which themes appear on which surface. Surfaces with zero themes are
   candidates to skip; themes with zero surfaces are candidates to drop.
6. **Anti-direction** — 3–7 bullets of what this season is *not*.
7. **Open / next decisions** — what still needs locking, owner, by when.

### Step 6 — Self-check

Run `references/checklist.md` before emitting. Every theme card must
carry name + thesis + 4–6 reference tiles + at least one application-
surface tag. Anti-direction must list ≥ 3 items. Page must still render
if any image fails by showing the styled fallback.

## Output contract

Emit between `<artifact>` tags:

```
<artifact identifier="fashion-graphic-direction-slug" type="text/html" title="Season Graphic Direction Title">
<!doctype html>
<html>...</html>
</artifact>
```

One sentence before the artifact, nothing after.
