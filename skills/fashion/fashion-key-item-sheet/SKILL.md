---
name: fashion-key-item-sheet
description: |
  Single-page **key item sheet** for one season anchor item, built as the
  Korean apparel-studio "Color / Detail / Pattern / Fabric / Artwork" 5-slice
  spread used inside an internal design plan. Left side carries the human
  composition (5-6 worn references + mood collage); right side carries the
  selected slice clusters. Use when the brief asks for a "key item sheet",
  "키 아이템", "코튼 집업 시트", "그래픽 티 시트", "데님 셋업", "가디건
  시트", or any single-item deep dive that drives sample-room briefing.
triggers:
  - "key item"
  - "key item sheet"
  - "anchor item"
  - "item deep dive"
  - "키 아이템"
  - "아이템 시트"
  - "코튼 집업"
  - "그래픽 티"
  - "데님 셋업"
  - "가디건 시트"
  - "스웻 셋업"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 14
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "Build a 27SS key-item sheet for WACKYWILLY 'cotton zip-up jumper': 6 worn references on the left, slices = Washing / Pattern / Artwork on the right, palette pulled from the active 27SS color story."
---

# Fashion Key Item Sheet Skill

Produce a single-file HTML **key item sheet** — one anchor item, one page,
the document a Korean apparel design studio hands to the sample room before
the first proto is cut. It is **internal-facing**: the audience is the
designer, the merchandiser, and the supplier sample-room manager — not the
buyer or the consumer.

The key item sheet answers four questions about a single item:

1. **What is the worn reality of this item?** (5–6 figures wearing variants
   — silhouette, fit, layering — pulled from competitor / inspiration set)
2. **Which design dimensions are we exploring?** (a chosen subset of:
   Color, Detail, Pattern, Fabric, Artwork)
3. **What is the visual evidence for each dimension?** (3–4 reference
   images per slice, each with a one-line "what we are taking from this")
4. **What is the merch/production note?** (target colorways, target lots,
   carryover decision, signature detail to keep)

It is a **single item** document — never combine two items into one sheet.
Use one sheet per item; chain them in `fashion-season-deck` if needed.

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
fashion-key-item-sheet/
├── SKILL.md
├── assets/
│   └── template.html
└── references/
    ├── slices.md
    ├── layouts.md
    └── checklist.md
```

## Workflow

### Step 0 — Pre-flight

1. Read `assets/template.html` end-to-end.
2. Read [`../_shared/imagegen.md`](../_shared/imagegen.md) — the shared
   project imagegen policy.
3. Read `references/slices.md` to understand which slices apply to which
   item families.
4. Read `references/layouts.md` and pick a slice composition.
5. Read `references/checklist.md`.
6. Read the active `DESIGN.md`, `fashion-color-story` (if any), and
   `fashion-fabric-board` (if any). Slice content must reference the
   already-locked palette and material names — do not invent new ones here.

### Step 1 — Clarify the item

Ask in the first discovery form if not provided:

- Season name (e.g. 27SS)
- Item family — pick one and only one:
  - Outer (cotton zip-up jumper, windbreaker, jacket…)
  - Top (signature graphic tee, vintage graphic tee, henley, polo…)
  - Knit (cardigan, sweater, vest…)
  - Bottom (denim, easy denim setup, sweatpant, shorts…)
  - Setup (denim-like sweat setup, easy-denim setup, twin-set…)
  - Dress / skirt
- Item name in the brand's own words (e.g. "코튼 집업 점퍼", "시그니처
  그래픽 티셔츠", "데님라이크 스웻 셋업")
- One-line item thesis (e.g. "신학기 매출 전환을 노리는 캐주얼 아우터")
- Selling period (S1/S2/S3/S4) and target lot
- Carryover decision — new development / carryover from prior season /
  signature evolution
- Slice selection — pick **2–4 slices** from {Color, Detail, Pattern,
  Fabric, Artwork}; do not select all 5 unless the item is a hero
- Worn-reference count target — default 5–6 figures
- Hard constraints (must use signature detail X, must keep brand color Y,
  banned references)

### Step 2 — Pick a slice composition

Pick the right slice subset from `references/slices.md` based on item
family. State the chosen composition in one sentence:

> "27SS cotton zip-up jumper: slices = Washing + Pattern + Artwork; 6
> worn references on the left, 4 swatches per slice on the right."

Recommended defaults (override only with reason):

| Item family | Default slices |
|---|---|
| Outer (cotton zip-up, jacket) | Washing · Pattern · Artwork |
| Top (signature graphic tee) | Artwork · Fabric |
| Top (vintage graphic tee) | Graphic · Fabric (uses Pigment Dyeing as fabric note) |
| Knit (cardigan, sweater) | Color · Pattern · Detail · Fabric |
| Bottom / Setup (easy-denim, sweat setup) | Color · Detail · Fabric |
| Dress / Skirt | Color · Detail · Pattern |

### Step 3 — Generate worn-reference figures (left side)

The left side is a **mood collage** of 5–6 figures wearing the item or
close variants. The goal is silhouette / fit / layering reading at a
glance — not catalog beauty.

Use the shared project imagegen policy: generate each worn-reference figure
with the built-in authenticated `image_gen` path only. Save project-local
copies into `images/` with names matching the role:

```
images/worn-01.png … images/worn-06.png
```

Prompt shape per figure (tweak per item family):

```
Use case: design / key-item-sheet
Asset type: worn-reference figure (cut-out, full-body) for one anchor item
Primary subject: a single fashion model standing, full-length, neutral pose,
  arms relaxed, eye-level camera
Anchor item (must be worn): [REPLACE — e.g. cotton zip-up jumper, brushed
  cotton, semi-relaxed fit, washed wash-3]
Outfit balance:
  - Top/inner: [REPLACE — keep neutral so the anchor item reads]
  - Bottom: [REPLACE]
  - Footwear: [REPLACE]
  - Headwear: [optional]
Style/medium: editorial cut-out, transparent background or seamless paper
  beige #ebe6db, soft daylight
Composition/framing: vertical 4:5, full body in frame
Color palette: [pull from active color story; keep accent scarce]
Constraints: no logos, no readable text, no watermark, no distorted hands,
  no extra limbs, no face beauty retouching, single subject
Avoid: catalog-pose, runway crowd, half-body crop, mid-stride pose
```

If the user attaches their own product photo or supplier reference,
treat it as edit / extend reference per imagegen rules — do not
re-imagine.

### Step 4 — Generate slice clusters (right side)

For each chosen slice, generate **3–4 reference images**. Slice prompts
are tighter / closer than worn figures. Use square `1024x1024` by
default; slice-specific defaults below.

Save with names matching slice + index:

```
images/slice-color-01.png … images/slice-color-04.png
images/slice-detail-01.png … images/slice-detail-04.png
images/slice-pattern-01.png … images/slice-pattern-04.png
images/slice-fabric-01.png … images/slice-fabric-04.png
images/slice-artwork-01.png … images/slice-artwork-04.png
```

Per-slice prompt shape:

- **Color** (1024x1024): full garment shot on hanger or flat-lay, single
  color per image, swatch-clean lighting, color name + TCX in alt text.
- **Detail** (1024x1024): macro close-up of one constructional element
  (cuff, hem, pocket, drawcord, stitching, raw selvedge, zipper pull).
  No full garment in frame.
- **Pattern** (1024x1024): woven / printed pattern at swatch scale; if
  the pattern is structural (waffle, cable, ribbed knit), shoot at
  fabric-board angle showing weave.
- **Fabric** (1024x1024): fabric swatch close-up showing hand and drape;
  optional micro-tag of the fabric name overlay (e.g. "Cool Cotton",
  "Askin", "Sorona").
- **Artwork** (1024x1024): graphic / embroidery / patch / print study —
  the artwork itself, isolated on garment area or flat-lay.

For each image, include:

```
Constraints: no logos (unless artwork itself is the brand mark), no
  readable third-party brand text, no watermark, no distorted features
Avoid: aggressive saturation, fake gradient lighting, AI-slop sparkle
```

### Step 5 — Compose the sheet

Copy `assets/template.html` to `index.html`. Replace `[REPLACE]` tokens,
bind active `DESIGN.md` tokens into `:root`, then paste the chosen
composition from `references/layouts.md` into `<main id="key-item-sheet">`.

Required sections, in order:

1. **Header strip** — season + item family + brand item name + selling
   period + carryover status + lock state.
2. **Item thesis** — one paragraph: why this item, what it replaces /
   evolves from, target colorway count and target lot.
3. **Worn-reference grid (left)** — 5–6 figure cards, each with a 1-line
   takeaway ("relaxed shoulder, hem hits hipbone").
4. **Slice clusters (right)** — one labeled cluster per chosen slice, 3–4
   tiles per cluster, each tile with image + 1-line note.
5. **Production / merch note** — target colorways list, signature detail
   to keep, expected supplier (if known), proto deadline.
6. **Open / next decisions** — what still needs locking, owner, by when.

### Step 6 — Self-check

Run `references/checklist.md` before emitting. Every cluster must match
its slice's image-shape rules; every worn figure must have a 1-line
takeaway; the page must still render if any image fails by showing the
styled fallback.

## Output contract

Emit between `<artifact>` tags:

```
<artifact identifier="fashion-key-item-sheet-slug" type="text/html" title="Item Sheet Title">
<!doctype html>
<html>...</html>
</artifact>
```

One sentence before the artifact, nothing after.
