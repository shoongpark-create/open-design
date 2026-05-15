---
name: fashion-new-lineup
description: |
  **New series / line-up expansion** as a single HTML file. Documents one
  specific *new lineup* a season is launching — a polka-dot series, a
  ribbon/ruffle series, an essential line expansion, a new-basic redefinition,
  a women neo-basic ruffle series, etc. Each lineup has its own thesis,
  cross-category mosaic (top / bottom / outer / accessory / setup), SKU plan,
  and bridge-line role. Use when the brief asks for a "new lineup", "신규
  라인업", "시리즈 확장", "에센셜 라인 확장", "뉴베이직 재정의", "리본
  러플 시리즈", "폴카도트 시리즈", or any mid-season series rollout.
triggers:
  - "new lineup"
  - "series expansion"
  - "essential line"
  - "신규 라인업"
  - "시리즈 확장"
  - "에센셜 라인 확장"
  - "뉴베이직 재정의"
  - "리본 러플"
  - "폴카도트"
  - "lineup rollout"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 17
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "Build a 27SS WOMEN polka-dot series lineup for WACKYWILLY: tee + raglan + cardigan + skirt + denim + hoodie + cap, 12 SKU target, retro-girlish anchor, bridge to UNI on tee + cap."
---

# Fashion New Lineup Skill

Produce a single-file HTML **new lineup document** for one specific series
the season is launching — *not* the whole season's lineup. Each lineup is
its own page; the season-deck binds them together.

A new lineup answers four questions:

1. **What is this series?** (anchor motif / detail / silhouette /
   functional story + 1-line thesis)
2. **How does it spread across categories?** (which item families carry
   the series, which do not)
3. **Why does it earn its slot?** (replaces underperforming carryover /
   captures rising trend / extends best-seller / bridges UNI ↔ WOMEN)
4. **What is the SKU + lot plan?** (SKU count, carryover ratio, target
   lot per item)

Examples of lineups (from K-young-casual studios):

- Polka-dot series (jersey + knit + denim + outer + accessory)
- Ribbon / ruffle series (hoodie + tee + denim + overall + lace)
- Essential line expansion (basic tees + crop tops + dresses with
  pastel + lovely print)
- New-basic redefinition (familiar + one different element)
- Women neo-basic ruffle expansion with pigment-wash
- Bridge collab capsule

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
fashion-new-lineup/
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
2. Read [`../_shared/imagegen.md`](../_shared/imagegen.md).
3. Read `references/layouts.md` and pick a mosaic rhythm.
4. Read `references/checklist.md`.
5. Read the active `DESIGN.md`, `fashion-color-story` (if any),
   `fashion-fabric-board` (if any), `fashion-graphic-direction` (if any).
   Lineup pieces inherit from these — do not invent new colors / fabrics
   / graphics here.

### Step 1 — Clarify the lineup

Ask in the first discovery form if not provided:

- Season name (e.g. 27SS)
- Lineup name in brand's own words (e.g. "폴카 도트 시리즈", "리본·러플
  시리즈", "우먼 에센셜 라인 확장", "유니 뉴베이직 정의 정립")
- Anchor — motif (polka dot, ribbon, ruffle), detail (raw hem, scallop),
  silhouette (relaxed boxy), or functional story (Sorona Cool tee
  capsule)
- Line — UNI / WOMEN / KIDS / cross-line
- One-line lineup thesis (e.g. "레트로 걸리쉬 무드를 와키윌리만의 위트 있는
  컬러와 스타일링으로 라인업")
- Categories spread — pick from {tee, sweat, raglan, knit, cardigan,
  outer (jacket / hoodie / windbreaker), denim, easy-denim setup,
  pants, skirt, dress, accessory (cap / bag / scarf / charm)}; minimum
  3, target 5–8
- SKU count target — typical 8–18 for a series
- Carryover ratio — 0% (all new) / 30% / 50% (extending best-sellers)
- Bridge role — does this lineup bridge two lines (UNI ↔ WOMEN, line ↔
  KIDS)? If yes, name the bridge items.
- Anti-pattern — what this series is *not* (e.g. "no Y2K rhinestones",
  "no oversized boxy beyond the shirt")

### Step 2 — Pick a mosaic rhythm

Pick **one** rhythm from `references/layouts.md`:

- **Mosaic + chip strip** (default) — image mosaic at top showing the
  series mood, item-family chip strip below with one square per
  category and SKU count
- **Hero + grid** — one large hero composition (the signature look),
  category grid below with 4–8 item cards
- **Item card grid** — straight category-by-category card grid; use
  when SKU count is high (>14) and the mood reads through volume

State the chosen rhythm in one sentence.

### Step 3 — Generate lineup imagery

For each category in the spread, generate **2–4 reference images** that
show the lineup motif applied to that item. Default `1024x1024` for
flat-lay / detail; `1024x1536` for any worn shot.

Save with names matching the category:

```
images/lineup-tee-01.png … images/lineup-tee-04.png
images/lineup-knit-01.png …
images/lineup-denim-01.png …
images/lineup-outer-01.png …
images/lineup-accessory-01.png …
images/lineup-hero.png      (only for Hero + grid layout)
images/lineup-mood-01.png … images/lineup-mood-04.png  (only for Mosaic layout)
```

Per-image prompt shape:

```
Use case: design / new-lineup
Asset type: [flat-lay garment | macro detail | worn category snapshot]
Lineup name: [REPLACE]
Anchor: [motif / detail / silhouette / function — pulled from Step 1]
Item family: [tee / knit / cardigan / outer / denim / setup / accessory]
Visual subject: [the actual item carrying the anchor — describe how the
  anchor shows up: small all-over polka dot on cotton, ribbon detail at
  neckline, scallop hem on denim short, etc.]
Style/medium: editorial flat-lay or close-up; consistent across the
  lineup so the series reads as one
Composition/framing: square 1024x1024 (or 1024x1536 for worn), centered,
  ~10% margin
Color palette: [pull from active color story; lineups usually live in
  one or two palette tiers — name them]
Materials/textures: [pull from active fabric board if one exists]
Constraints: no logos, no readable third-party brand text, no watermark,
  no AI-slop sparkle
Avoid: aggressive saturation, fake gradient, busy background, runway
  pose, glamour-shot lighting
```

### Step 4 — Compose the lineup document

Copy `assets/template.html` to `index.html`. Replace `[REPLACE]` tokens,
bind active `DESIGN.md` tokens into `:root`, then paste the chosen
rhythm into `<main id="new-lineup">`.

Required sections, in order:

1. **Header strip** — season + line + lineup name + status (concept /
   v1 / locked) + lock date.
2. **Lineup thesis** — one paragraph: anchor + intent + bridge role +
   what it replaces.
3. **Mosaic / hero / item-grid** — the chosen rhythm body (see
   layouts.md).
4. **Category × SKU table** — table with category, SKU count, carryover
   note, target lot, color tier (BASIC / TREND / ACCENT).
5. **Bridge map** (only if Step 1 named a bridge) — list of items that
   serve both lines, with note on how each is adapted.
6. **Anti-pattern** — 3–7 bullets of what this series is *not*.
7. **Open / next decisions** — what still needs locking, owner, by when.

### Step 5 — Self-check

Run `references/checklist.md` before emitting. Every category in the
spread must have at least 2 reference images and a chip-strip entry.
SKU table totals must match the SKU target stated in the thesis. Page
must still render if any image fails by showing the styled fallback.

## Output contract

Emit between `<artifact>` tags:

```
<artifact identifier="fashion-new-lineup-slug" type="text/html" title="New Lineup Title">
<!doctype html>
<html>...</html>
</artifact>
```

One sentence before the artifact, nothing after.
