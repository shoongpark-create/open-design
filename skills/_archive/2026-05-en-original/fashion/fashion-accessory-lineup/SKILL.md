---
name: fashion-accessory-lineup
description: |
  Season **accessory line-up** (가방 / 모자 / 신발) as a single HTML file.
  The accessory analog of `fashion-styling-board` — splits each accessory
  category into shape families (e.g. backpack: Light String / Round Zipper
  / Round Pocket) and lays out the season's planned items per shape with
  upgrade notes, hero callouts, and the fan-character / point-detail
  graphic accent set. Use when the brief asks for "accessory lineup",
  "악세사리 라인업", "가방 라인", "모자 라인", "슈즈 라인업", "신학기
  백팩 라인", "캡 라인", or any non-apparel category line-up doc.
triggers:
  - "accessory lineup"
  - "accessory line"
  - "bag lineup"
  - "cap lineup"
  - "shoes lineup"
  - "악세사리 라인업"
  - "가방 라인"
  - "모자 라인"
  - "슈즈 라인업"
  - "신학기 백팩"
  - "캡 라인"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 23
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "Build a 27SS WACKYWILLY accessory bag lineup: 신학기 백팩 = 3 shape families (Light String / Round Zipper / Round Pocket), each with 3 SKUs. Hero items have character keyring callout and graphic-pen point detail."
---

# Fashion Accessory Lineup Skill

Produce a single-file HTML **season accessory line-up** for one
accessory category at a time (가방 / 모자 / 신발 / 양말 / etc.). The
accessory analog of `fashion-styling-board` — but accessories don't sit
on the BASIC ↔ ACCENT axis; they group by **shape family** within the
category.

The lineup answers four questions:

1. **What shape families exist this season?** (e.g. for 신학기 백팩:
   Light String, Round Zipper, Round Pocket)
2. **What SKUs sit under each family?** (the actual planned items, with
   image and 1-line spec)
3. **Where does the season's signature accent show up?** (e.g.
   character keyring, graphic-pen point, color webbing — the moves
   that connect the line to the brand's graphic direction)
4. **What is the merch / production plan per family?** (SKU count,
   target lot, hero designation, color story link)

It sits between `fashion-season-strategy` (which names the category
hero categories) and `fashion-imc-calendar` (which times the rollout).

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
fashion-accessory-lineup/
├── SKILL.md
├── assets/
│   └── template.html
└── references/
    ├── shape-families.md
    ├── layouts.md
    └── checklist.md
```

## Workflow

### Step 0 — Pre-flight

1. Read `assets/template.html` end-to-end.
2. Read [`../_shared/imagegen.md`](../_shared/imagegen.md).
3. Read `references/shape-families.md` — canonical shape-family library
   per accessory category.
4. Read `references/layouts.md` and pick a layout.
5. Read `references/checklist.md`.
6. Read the active `DESIGN.md`, `fashion-color-story` (if any),
   `fashion-graphic-direction` (if any). Accessory accents inherit
   from the graphic direction's character / point-label / color
   point themes.

### Step 1 — Clarify the lineup

Ask in the first discovery form if not provided:

- Season name (e.g. 27SS)
- Accessory category — pick **one**: 가방 (bag) / 모자 (cap) / 신발
  (shoes) / 양말 (socks) / 벨트 (belt) / 머플러 (scarf) / 키링
  (keyring/charm)
- Sub-segment within the category (when applicable) — e.g. for bag:
  신학기 백팩 / 데일리 크로스백 / 토트 / 미니 / 우먼 백; for cap:
  볼캡 / 버킷 / 비니 / 메쉬 캡; for shoes: 스니커즈 / 샌들 /
  슬라이드
- Shape families — pick 2–4 from `references/shape-families.md` or
  define new
- SKU per family — typical 2–5 per shape family
- Hero family designation — which shape family is the season's
  campaign hero (max 1 per lineup)
- Signature accent set — character keyring, graphic-pen point,
  color webbing, branded point-label, jelly hardware, etc. (pulled
  from `fashion-graphic-direction` when it exists)
- Carryover ratio — 0% / 30% / 50% (extending best-sellers)

### Step 2 — Pick a layout

Pick **one** rhythm from `references/layouts.md`:

- **Shape-family columns** (default) — each shape family is a column
  with header, SKU stack below
- **Family blocks stacked** — each family is a horizontal block with
  header + SKU row; use when SKU per family is high (5+)
- **Hero + minor families** — hero family takes top half of the page,
  remaining families below in compact format

State the chosen layout in one sentence.

### Step 3 — Generate accessory item imagery

For every SKU, generate one product shot. Default `1024x1024`
(square) on neutral background. Save with names matching family +
sku index:

```
images/bag-light-string-01.png
images/bag-light-string-02.png
images/bag-round-zipper-01.png
…
images/cap-ball-01.png
…
images/shoes-sneaker-01.png
…
images/accent-charm-01.png   (signature accent set, optional)
```

Per-image prompt shape (bag example):

```
Use case: design / accessory-lineup
Asset type: accessory product shot
Category: [bag | cap | shoes | socks | belt | scarf | keyring]
Shape family: [REPLACE — e.g. Light String backpack]
Subject: a single [accessory] item, [shape detail — e.g. backpack with
  drawstring closure, padded shoulder straps, side mesh pockets],
  centered on neutral light-grey ground (#e8e6dc), no model
Color: [pull from active color story — name primary color and any
  webbing accent color]
Materials/textures: [nylon / canvas / leather / mesh + finish
  description]
Style/medium: editorial product photography, soft daylight, ~10%
  margin, subtle shadow under item
Composition/framing: square 1024x1024, centered
Constraints: no logos (unless the accent point label IS the subject),
  no readable text, no watermark
Avoid: glamour shot lighting, fake gradient, busy background, on-model
```

For **signature accent images** (charm, point label, color webbing
detail), use the same prompt shape but tighten subject to a macro
close-up.

### Step 4 — Compose the lineup

Copy `assets/template.html` to `index.html`. Replace `[REPLACE]`
tokens, bind active `DESIGN.md` tokens into `:root`, then paste the
chosen rhythm into `<main id="accessory-lineup">`.

Required sections, in order:

1. **Header strip** — season + category + sub-segment + status + lock
   date.
2. **Lineup thesis** — one paragraph: anchor + intent + bridge role
   (when applicable).
3. **Shape-family layout** — chosen rhythm body (see layouts.md).
4. **Signature accent strip** (when accents are part of the lineup)
   — small horizontal strip showing the season's accent set
   (charm / point-label / color webbing) used across families.
5. **Family × SKU table** — per family: SKU count, hero flag, target
   lot, color tier, carryover note.
6. **Open / next decisions** — what still needs locking, owner, by when.

### Step 5 — Self-check

Run `references/checklist.md`. Every shape family must carry header
+ SKU stack + at least 1 image. Hero family flag must appear in
exactly one family per lineup (or zero, never two). Page must still
render if any image fails by showing the styled fallback.

## Output contract

```
<artifact identifier="fashion-accessory-lineup-slug" type="text/html" title="Accessory Lineup Title">
<!doctype html>
<html>...</html>
</artifact>
```

One sentence before the artifact, nothing after.
