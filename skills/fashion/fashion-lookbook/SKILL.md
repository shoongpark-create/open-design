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
generated through the `ima2` image engine when available. This skill is for
collection stories, campaign concepts, buyer previews, and merch/design
planning decks that need visual fashion direction, not just UI boxes.

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
2. Read `references/trend-research.md` so the output reflects current fashion
   and digital-commerce expectations instead of generic editorial styling.
3. Read `references/layouts.md` and choose a spread rhythm before writing.
4. Read `references/checklist.md`.
5. Read the active DESIGN.md. Map its palette and type rules to the template's
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

### Step 3 — Generate look imagery with ima2/imagegen

Use the local `ima2` image engine whenever the lookbook needs original
campaign/look images. Prefer the Open Design daemon bridge if available:

```
POST /api/projects/<projectId>/imagegen/ima2/generate
```

with JSON `{ "prompt": "...", "name": "images/look-01.png", "quality": "medium", "size": "1024x1536", "moderation": "low" }`.

If you are working directly in the project folder and the daemon bridge is not
available, use the `ima2` CLI instead:

```
ima2 gen "<prompt>" -o images/look-01.png --model gpt-5.4 --moderation low
```

`ima2 serve` must already be running and Codex/ChatGPT OAuth must be logged in.
Generate project-bound raster assets, then reference them from the HTML. Do not
leave referenced images in an external or temporary location.

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

For each image, write a compact ima2/imagegen prompt using this shape:

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
