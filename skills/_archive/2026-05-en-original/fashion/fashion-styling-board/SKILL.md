---
name: fashion-styling-board
description: |
  Season styling board as a single HTML file. Groups one season's looks into a
  full-body cut-out grid arranged across the 4 brand axes (BASIC / NEW BASIC /
  TREND / ACCENT) and split by selling period (S1 Jan-Feb, S2 Mar-Apr, S3 May,
  S4 Jun-Jul). The internal MD/design-review document a brand uses to align
  silhouette balance across a season *before* the lookbook is shot. Use when
  the brief asks for a "styling board", "스타일링 보드", "유니 스타일링",
  "우먼 스타일링", "S1 스타일링", "판기별 스타일링", "월별 스타일링", or any
  axis-tracked look matrix that precedes campaign work.
triggers:
  - "styling board"
  - "season styling"
  - "selling period styling"
  - "S1 styling"
  - "S2 styling"
  - "look matrix"
  - "스타일링 보드"
  - "유니 스타일링"
  - "우먼 스타일링"
  - "판기별 스타일링"
  - "월별 스타일링"
  - "라인업 스타일링"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 13
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "Build a 27SS S1 (Jan-Feb) UNI styling board for WACKYWILLY: 13 looks across BASIC / NEW BASIC / TREND / ACCENT, theme '90s STREET RAW', anchor items cotton zip-up jumper and windbreaker, washed denim base."
---

# Fashion Styling Board Skill

Produce a single-file HTML **season styling board** — the internal-facing
document a Korean fashion design studio uses to lock the silhouette balance
of a single selling period before the lookbook is shot or the line-up is
priced.

The styling board answers four questions at once:

1. **What is this period's look balance?** (count per BASIC / NEW BASIC /
   TREND / ACCENT axis)
2. **Which silhouette / item families anchor the period?** (the 1–2 hero
   items the period is built around — e.g. "S1 = cotton zip-up jumper",
   "S3 = vintage graphic tee")
3. **Does each look earn its slot?** (no two looks doing the same job;
   accent staying scarce)
4. **How does this period transition from / into the next?** (carryover
   silhouette, contrast item)

It sits between `fashion-concept-board` (territory) and `fashion-lookbook`
(consumer-facing campaign): once the styling board is locked, the lookbook
just photographs the chosen looks; the line sheet just costs them.

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
fashion-styling-board/
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
2. Read [`../_shared/imagegen.md`](../_shared/imagegen.md) — the shared
   project imagegen policy. Styling shots default to vertical full-body
   framing.
3. Read `references/layouts.md` and pick a grid rhythm before writing.
4. Read `references/checklist.md`.
5. Read the active `DESIGN.md`. Map its palette and type rules to the
   template's `:root` variables. The 4-axis track strip uses the brand's
   accent for the active axis dot — bind that color now, not later.
6. **Read the season's concept board if one exists.** A styling board with
   no concept territory behind it is just a Pinterest dump. If a
   `fashion-concept-board` artifact exists for this season, read its
   thesis, keywords, and silhouette seeds. If a `fashion-color-story`
   artifact exists, treat its locked palette as the only allowed colors.

### Step 1 — Clarify the period

Ask in the first discovery form if not provided:

- Season name (e.g. 27SS, 27FW)
- Selling period — S1 (Jan-Feb), S2 (Mar-Apr), S3 (May), S4 (Jun-Jul), or
  a custom split. State which months belong to the period.
- Category line — UNI, WOMEN, KIDS, or a combined view
- One-line period thesis (e.g. "신학기 아우터 스타일링 — 코튼 점퍼 중심")
- 1–2 anchor items the period is built around
- Total look count target (13 for UNI default, 15 for WOMEN default; allow
  10–18 range)
- Axis distribution target — default 25/25/35/15 (BASIC / NEW BASIC /
  TREND / ACCENT) but allow 30/30/30/10 (conservative period) or
  20/20/40/20 (trend-heavy capsule)
- Carryover policy — which looks come from the previous period; mark them
- Any hard constraints (must-include best-seller silhouette, banned items)

### Step 2 — Pick the grid rhythm

Pick **one** rhythm from `references/layouts.md`:

- **Single-row track** — all looks in a single horizontal row, axis labels
  above as a track strip. Default for ≤14 looks.
- **Two-row stagger** — looks split into two rows; row 1 carries
  BASIC + NEW BASIC, row 2 carries TREND + ACCENT. Default for 15–18 looks.
- **Quartet sections** — four named sections stacked vertically, each
  axis its own block with its own caption strip. Default when each axis
  carries ≥4 looks and the team wants caption density.

State the chosen rhythm in one sentence before generating images.

> "27SS S1 UNI: single-row track, 13 looks, axis split 4/3/4/2."

### Step 3 — Generate styling cut-outs (full body)

A styling board needs **one cut-out figure per look**, head-to-toe, on a
clean transparent or neutral background — the design team mentally drags
each figure across the track to test balance, so flat / consistent
silhouettes matter more than glossy lighting.

Use the shared project imagegen policy
([`../_shared/imagegen.md`](../_shared/imagegen.md)). Generate each cut-out
with the built-in authenticated `image_gen` path only. Save project-local
copies into `images/` with stable names matching the look number:

```
images/look-01-basic.png
images/look-02-basic.png
images/look-03-newbasic.png
…
images/look-13-accent.png
```

For each look image, write a compact prompt using this shape:

```
Use case: design / styling-board
Asset type: full-body cut-out figure for a season styling board
Primary subject: a single fashion model standing, full-length, neutral pose
  (slight contrapposto), arms relaxed, eye-level camera
Look number: [N of total]
Axis: [BASIC | NEW BASIC | TREND | ACCENT]
Anchor item: [the period's hero item, e.g. cotton zip-up jumper]
Outfit (head to toe):
  - Headwear: [cap | beanie | bucket | none]
  - Top: [garment + silhouette + color from active palette]
  - Outer: [garment + silhouette + color] (omit for S3-S4 unless axis = ACCENT)
  - Bottom: [trousers / jeans / shorts / skirt + silhouette + color]
  - Footwear: [sneakers / boots / sandals + color]
  - Bag/accessory: [optional, axis-appropriate]
Style/medium: editorial cut-out, transparent background, soft even light
Composition/framing: vertical 4:5, full body in frame, head not cropped, feet
  not cropped, ~5% margin top/bottom
Lighting/mood: soft daylight, no hard shadows, no rim light, neutral cool
Color palette: [translate active DESIGN.md / color-story tokens to apparel
  color names — e.g. "Pop Pink 15-2215 TCX top, Light Grey Mel 15-4101 TCX
  bottom"]
Materials/textures: [pull from active fabric board if one exists]
Constraints: no logos, no readable text, no watermark, no distorted hands,
  no extra limbs, no face beauty retouching, no brand bag, single subject
Avoid: catalog-pose, runway crowd, studio backdrop seamless white, half-body
  crop, mid-stride pose
```

For ACCENT looks, allow one expressive styling move (a hat, a layered
graphic tee, a saturated bottom) — but only one per look, never stacked.

If the user supplies real product photos, treat them as reference / edit
targets per the imagegen rules instead of inventing new garments.

### Step 4 — Compose the styling board

Copy `assets/template.html` to `index.html`. Replace `[REPLACE]` tokens,
bind active `DESIGN.md` tokens into `:root`, then paste the chosen rhythm
from `references/layouts.md` into `<main id="styling-board">`.

Required sections, in order:

1. **Header strip** — season + period (S#) + month range + category line
   (UNI / WOMEN / KIDS) + look count + lock status (v1 / v2 / locked).
2. **Period thesis** — one sentence on what this period is, anchor items,
   carryover note.
3. **Axis track strip** — visual horizontal bar with the 4 axis labels;
   active dots above each look show which axis it belongs to.
4. **Look grid** — the figures, in the chosen rhythm, with:
   - look number (`01` … `N`)
   - axis dot (color from active palette)
   - 1-line caption: anchor item + 1 styling move
   - color chip strip (3–4 colors from this look)
5. **Axis count summary** — one row per axis with the count and percentage,
   plus a target-vs-actual delta if a target was set in Step 1.
6. **Carryover map** — list of look numbers carried from the previous
   period, with arrows back to source.
7. **Open / next decisions** — what still needs locking, who owns it,
   by when.

### Step 5 — Self-check

Run `references/checklist.md` before emitting. Every figure must have a
local relative path; every look must have an axis dot, a number, and a
1-line caption; the axis count summary must add up to the look total; the
page must still render if any image fails by showing the styled fallback
block.

## Output contract

Emit between `<artifact>` tags:

```
<artifact identifier="fashion-styling-board-slug" type="text/html" title="Season Styling Board Title">
<!doctype html>
<html>...</html>
</artifact>
```

One sentence before the artifact, nothing after.
