---
name: fashion-imc-calendar
description: |
  Season **IMC (Integrated Marketing Communication) calendar** as a single
  HTML file. Maps month-by-month hero items, SKU/생산금액/비중 per
  category band, and the 7-step "주력상품 - 콘텐츠 - VM - 프로모션 일원화"
  hero-rollout track. The document a brand director hands to marketing,
  visual-merchandising, and supply teams to align IMC firing per selling
  period. Use when the brief asks for "IMC 캘린더", "히어로 캘린더",
  "월별 IMC", "판기별 캠페인", "주력 아이템 캘린더", or any month-grid
  marketing-and-supply alignment for a season.
triggers:
  - "IMC calendar"
  - "campaign calendar"
  - "hero calendar"
  - "월별 IMC"
  - "IMC 캘린더"
  - "히어로 캘린더"
  - "판기별 캠페인"
  - "주력 아이템 캘린더"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 21
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "Build a 27SS IMC calendar for WACKYWILLY ACC: Jan-Jul months, 3 category bands (BAG 49 SKU / CAP 40 SKU / SHOES 19 SKU), 7 hero IMC slots (All-Day Backpack, Daily Easy Bag, New Kitte, New 27 LO.FL, American Vintage, Airy Kitte, Keep Cool)."
---

# Fashion IMC Calendar Skill

Produce a single-file HTML **season IMC calendar** — the month-grid that
shows what the brand is firing in marketing-and-supply terms across the
season. It is **internal + agency-facing**: the audience is the
marketing team, the agency, the visual-merchandising team, and the
supply team.

The calendar answers four questions:

1. **What is the SKU / production picture per category?** (one row per
   category band: BAG / CAP / SHOES / TOP / OUTER / etc., with SKU,
   생산금액, 비중, and YoY delta)
2. **What is the per-category strategic move this season?** (one
   tactic note per category band)
3. **What is the month-by-month hero IMC item?** (one tile per
   hero slot: name, image/icon, item type)
4. **How does each pillar from `fashion-season-strategy` map into a
   month?** (the rollout track at the bottom)

It downstream-binds `fashion-season-strategy`: pillars become months.

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
fashion-imc-calendar/
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
2. Read [`../_shared/imagegen.md`](../_shared/imagegen.md) — only used
   for hero IMC item icons if requested.
3. Read `references/layouts.md` and pick a layout.
4. Read `references/checklist.md`.
5. Read the active `DESIGN.md`.
6. Read `fashion-season-strategy` if it exists for this season — the
   IMC calendar is its tactical extension, not an independent doc.

### Step 1 — Clarify the calendar

Ask in the first discovery form if not provided:

- Season name (e.g. 27SS)
- Line / segment — UNI / WOMEN / ACC / KIDS
- Months covered — typical SS = Jan-Jul; FW = Aug-Jan
- Category bands — 2–5 rows (BAG / CAP / SHOES / TOP / OUTER / …);
  each carries SKU count, YoY delta, 생산금액, 비중, YoY 비중 delta,
  and a 1-line strategic move
- Hero IMC slots — 5–9 tiles spanning the months, each with name,
  item type tag, and either an icon or imagegen prompt for an item
  thumbnail
- Bottom rollout track — single banner with the season's IMC headline
  (e.g. "판기별 주력상품-콘텐츠-VM-프로모션 등의 '히어로 육성' 집중")

### Step 2 — Pick a layout

Pick **one** rhythm from `references/layouts.md`:

- **Bands above + month track below** (default) — category bands
  stacked at top with KPI strip; month track at the bottom with hero
  tiles
- **Month-first matrix** — months as columns, categories as rows,
  hero items as cells; use when the question is "what's happening
  *this* month across categories"
- **Tactic-rail format** — left rail per band (with KPI), right side
  is the month timeline; use for compact A4 landscape

State the chosen layout in one sentence.

### Step 3 — Compose the calendar

Copy `assets/template.html` to `index.html`. Replace `[REPLACE]`
tokens, bind active `DESIGN.md` tokens into `:root`, then paste the
chosen rhythm into `<main id="imc-calendar">`.

Required sections, in order:

1. **Header strip** — season + line + status + lock date.
2. **Category band block** — 2–5 bands; each with KPI line (SKU,
   생산금액, 비중 with deltas), short strategic chip, and 2–4
   bullet tactics.
3. **Month track** — Jan-Jul timeline with one hero IMC tile per slot
   (5–9 tiles); each tile: image / icon, name, item-type tag.
4. **Rollout track banner** — full-width banner restating the IMC
   headline.
5. **Open / next decisions** — what still needs locking, owner, by when.

### Step 4 — Self-check

Run `references/checklist.md`. Bands must total ≥ 100% in 비중
(allowing rounding). Hero tiles must equal the number of slots
declared in Step 1. Bottom rollout track must sit at the visual
foot of the calendar.

## Output contract

```
<artifact identifier="fashion-imc-calendar-slug" type="text/html" title="Season IMC Calendar Title">
<!doctype html>
<html>...</html>
</artifact>
```

One sentence before the artifact, nothing after.
