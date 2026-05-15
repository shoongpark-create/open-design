---
name: fashion-lookbook
description: |
  Fashion collection lookbook as a single HTML file. Builds an editorial
  season story with AI-generated campaign/look imagery, color/material notes,
  product cards, and a line-up spread. Use when the brief asks for a
  "fashion lookbook", "collection lookbook", "season campaign", "룩북",
  "컬렉션", "시즌 기획", or fashion merchandising presentation.
triggers:
  - "fashion lookbook"
  - "lookbook"
  - "collection"
  - "season campaign"
  - "fashion campaign"
  - "line sheet"
  - "룩북"
  - "컬렉션"
  - "시즌 기획"
  - "패션"
od:
  mode: prototype
  platform: desktop
  scenario: marketing
  category: fashion
  featured: 12
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "Design a 27SS womenswear lookbook: lightweight tailoring, washed neutrals, one citrus accent, 6 looks, editorial Seoul studio mood."
---

# Fashion Lookbook Skill

Produce a single-file HTML fashion lookbook with project-local raster imagery
generated through the project `imagegen` built-in authenticated path. This skill is for
collection stories, campaign concepts, buyer previews, and merch/design
planning decks that need visual fashion direction, not just UI boxes.

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
fashion-lookbook/
├── SKILL.md
├── assets/
│   └── template.html
└── references/
    ├── trend-research.md
    ├── layouts.md
    └── checklist.md
```

## Workflow

### Step 0 — Pre-flight

1. Read `assets/template.html` end-to-end.
2. Read [`../_shared/imagegen.md`](../_shared/imagegen.md) — the shared
   project imagegen policy (built-in `image_gen` only; no API/ima2/ComfyUI).
3. Read `references/trend-research.md` so the output reflects current fashion
   and digital-commerce expectations instead of generic editorial styling.
4. Read `references/layouts.md` and choose a spread rhythm before writing.
5. Read `references/checklist.md`.
6. Read the active DESIGN.md. Map its palette and type rules to the template's
   `:root` variables. If the active DESIGN.md is a product/UI system, translate
   it into fashion terms: accent → seasonal pop color, surface → paper/card,
   muted → care-label/caption tone, foreground → editorial ink.

### Step 1 — Clarify the collection

If the user did not provide these, ask in the first discovery form:

- Season / capsule name
- Audience and channel (buyer preview, DTC launch, internal MD, campaign)
- Gender/category and item families
- Number of looks (default 6)
- Mood references (atelier, street, resort, outdoor, office, K-fashion, etc.)
- Any hard constraints: colors, materials, silhouettes, price tier, must-use SKUs

### Step 2 — Plan the editorial rhythm

Pick one rhythm from `references/layouts.md`:

- **Capsule preview**: cover → story → 6 looks → line-up → palette/materials → CTA
- **Buyer edit**: cover → merchandising notes → 8 looks → line sheet → delivery drops
- **Campaign concept**: cover → hero image → story → 4 looks → channel crops → closing

State the chosen rhythm in one sentence before generating images.

Then pick one **trend lens** from `references/trend-research.md` and use it to
discipline all decisions:

- Soft femininity / romance
- Dark romance / undone craft
- Spots, checks, and animal-coded prints
- Fitted and cinched tailoring
- Icy tones / dusty pastels
- Smarter minimalism with expressive detail
- Well-being / ease / emotional utility

Do not mix more than two trend lenses unless the user explicitly asks for a
maximal, eclectic collection.

### Step 3 — Generate look imagery (project imagegen path)

Use the shared project imagegen policy in
[`../_shared/imagegen.md`](../_shared/imagegen.md). Generate every look with
the built-in `image_gen` tool through the current authenticated Codex session.
Do not use API/CLI fallback, `ima2`, or local ComfyUI. If built-in generation
is unavailable, keep the styled fallback block rather than switching engines.

Create an `images/` folder beside `index.html` and save final assets with stable
names:

```
images/cover-look.png
images/look-01.png
images/look-02.png
images/look-03.png
images/look-04.png
images/look-05.png
images/look-06.png
```

For each image, write a compact `imagegen` prompt using this shape:

```
Use case: ads-marketing
Asset type: fashion lookbook image
Primary request: [season/capsule] look [number], [garment + silhouette]
Scene/backdrop: [studio / street / showroom / natural light set]
Subject: fashion model wearing [specific outfit], full garment visible
Style/medium: editorial fashion photography
Composition/framing: vertical 4:5, full-body or three-quarter crop, usable margins
Lighting/mood: [mood from brief]
Color palette: [active design system colors translated to apparel palette]
Materials/textures: [fabric, finish, drape]
Constraints: no logos, no readable text, no watermark, no distorted hands, no extra limbs
Avoid: runway crowd, busy background, cropped shoes unless specified
```

If the user supplies real product photos, treat them as reference/edit targets
according to the imagegen rules instead of inventing new garments.

### Step 4 — Compose the lookbook

Copy `assets/template.html` to `index.html`. Replace the `[REPLACE]` tokens,
bind the DESIGN.md tokens into `:root`, then paste the chosen sections from
`references/layouts.md` into `<main id="lookbook">`.

Required sections:

1. Cover with hero image, season title, date, channel, and collection thesis.
2. Story spread explaining silhouette, material, and consumer moment.
3. Look grid with 4-8 looks, each using a generated image, look number, item
   family, key material, color, and merchandising note.
4. Palette/material board with color chips and textile notes.
5. Shoppable/editorial detail strip with fit, styling, and accessory notes.
6. Line-up / range plan with item names, delivery drop, price tier, and
   machine-readable product metadata.

### Step 5 — Self-check

Run `references/checklist.md` before emitting. Every image must have a local
relative path, every look must have product-specific copy, and the page must
still work if an image fails by showing a styled fallback block.

## Output contract

Emit between `<artifact>` tags:

```
<artifact identifier="fashion-lookbook-slug" type="text/html" title="Collection Lookbook Title">
<!doctype html>
<html>...</html>
</artifact>
```

One sentence before the artifact, nothing after.
