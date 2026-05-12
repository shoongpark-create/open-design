---
name: fashion-color-story
description: |
  Locked seasonal color palette as a single HTML reference sheet. Converts
  the exploratory color seeds from a concept board into a definitive working
  palette: Pantone TCX codes, fabric pairings, main/season/accent hierarchy
  with 60/30/10 proportion, category × color distribution matrix, and
  dyeing-lot QC notes. Use when the brief asks for a "color story",
  "color palette", "season palette", "Pantone reference", "컬러 스토리",
  "시즌 팔레트", "컬러 팔레트", or "컬러 차트", or any artifact that
  *locks* a season's colors after concept work and before line-up build.
triggers:
  - "color story"
  - "color palette"
  - "seasonal palette"
  - "season palette"
  - "Pantone reference"
  - "TCX palette"
  - "color guide"
  - "color chart"
  - "컬러 스토리"
  - "컬러 팔레트"
  - "시즌 팔레트"
  - "팬톤"
  - "컬러 차트"
  - "컬러 가이드"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 10
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "Lock the 27SS color palette for a Seoul young-casual brand: 8 colors total (3 main carryover, 4 season, 1 dry pop accent), Pantone TCX codes, fabric pairings, category × color distribution for shirts/outer/pants/knits/dresses."
---

# Fashion Color Story Skill

Produce a single-file HTML **season color story** — the document a design
studio uses to *lock* a season's color palette after the concept board
exploration. The color story is the **source of truth** for which colors
appear in the season, what their Pantone TCX codes are, what proportion
they hold, how they distribute across categories, and what tolerance the
dyeing supplier must hit.

A color story serves three audiences:

1. **Designer + MD** — to align on what colors will exist this season and
   in what proportion.
2. **Dyeing supplier / fabric mill** — to send the exact TCX codes with
   approved tolerance ranges.
3. **Internal QC + production** — to compare against received fabric
   batches at lot approval.

If the concept board's color section had **seeds** ("humid linen ivory",
"6am sky blue"), this document has **locked codes** ("Pantone 11-0507 TCX
Pristine", "Pantone 16-4109 TCX Stone Blue") with the seeds preserved as
naming.

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
fashion-color-story/
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
   project imagegen policy (used only if the user requests Step 8 mood
   thumbnails; default is no imagery).
3. Read `references/trend-research.md` for season trend inputs (WGSN/Coloro
   key colors, K-DTC saturation rules, TCX vs. TPG decisions).
4. Read `references/layouts.md` and pick a section set before writing.
5. Read `references/checklist.md`.
5. Read the active `DESIGN.md` and translate its tokens into `:root`.
   Important: a color story's accent color comes from *the season palette
   itself*, not from the design system. Bind the design system fonts and
   spacing, but leave color tokens to be derived from the locked palette.
6. **Read the season's concept board if one exists.** A color story without
   a concept board behind it is guessing. If the user has a concept-board
   artifact, ask for its file path or paste; map every locked color back to
   one of the concept board's color seeds.

### Step 1 — Clarify the palette

Ask in the first discovery form if not provided:

- Season / capsule name (e.g. 27SS, 27SS Capsule 1)
- Brand identity colors that are mandatory carryover (e.g. "navy 19-3911 is
  the brand's permanent main")
- Concept board source (file path, paste, or "no concept board — derive")
- Total color count target (8–12 typical for K-young-casual)
- Hierarchy structure: default 60/30/10 (main / season / accent) but allow
  50/35/15 (bolder season) or 70/25/5 (conservative)
- Categories to distribute across (shirts / outer / pants / knits /
  dresses / accessories — minimum 4)
- Whether colors will appear on printed materials (TPG codes needed) or
  fabric-only (TCX only)
- Dyeing supplier(s) and any known tolerance constraints (e.g. ΔE ≤ 1.5)
- Carryover count from previous season (typical 30–40% for young-casual)

### Step 2 — Pick the palette structure

Default young-casual structure:

| Tier | Share | Role | Typical count |
| --- | --- | --- | --- |
| **Main** | 55–65% | Brand-safe, high carryover, basics-friendly | 3–4 colors |
| **Season** | 25–35% | The season's mood colors — the new bets | 3–5 colors |
| **Accent** | 5–15% | One or two pop colors per season | 1–2 colors |

State the chosen structure in one sentence before writing.

> "27SS palette: 60/30/10 — 3 main carryover, 4 season, 1 dry pop accent."

### Step 3 — Lock each color

For every color, record (in this order):

1. **Emotional name** — the name the design team uses ("humid linen ivory",
   not "Color 03"). Pulled from the concept-board seed when one exists.
2. **HEX** — for digital / web display.
3. **Pantone TCX code + name** — the working standard for dyed fabric.
   Format: `19-3911 TCX · Iron`. Verify the code against an actual TCX book
   if uncertain — fabricated codes downstream of dyeing supplier briefs are
   the #1 cause of off-color batches.
4. **Coloro code** *(optional)* — WGSN-aligned 7-digit code if the brand
   uses WGSN trend data (e.g. `125-28-38`).
5. **NCS / RAL** *(optional)* — for hardware / non-fabric components.
6. **Tier** — main / season / accent.
7. **Fabric pairings** — which materials this color appears on, e.g.
   "*washed cotton, linen blend, light denim*". Pull from the active
   material list when one exists.
8. **Carryover status** — new / carryover-from-26FW / carryover-from-26SS.
   When carryover, link to the prior season's lock document if available.
9. **Use rules** — a one-line "use when / avoid when" note. Examples:
   "*pair with brass hardware*", "*never with satin pop accent*".

### Step 4 — Build the category × color matrix

A K-young-casual season usually distributes colors unevenly across
categories. Tops carry the most colorways; outer carries the fewest. Build
the matrix:

| Category | Main palette colors used | Season colors | Accent | Total colorways |
| --- | --- | --- | --- | --- |
| Shirts | All 3 main | 3 of 4 season | accent for 1 style | …

Use it to:

- Spot empty cells (a color with zero category usage is a candidate to
  drop).
- Spot overcrowded rows (a category running 7+ colors is hard to
  merchandise).
- Spot accent leakage (accent should be limited to 2–3 styles total).

### Step 5 — Write QC + tolerance notes

Capture for the dyeing supplier:

- **Working standard** — Pantone TCX (fabric). State explicitly.
- **TPG use** — only for printed lookbook / paper deliverables, never
  fabric matching. (TPG runs ~15% lighter than TCX on the same code; see
  trend-research for citations.)
- **Tolerance** — typical ΔE ≤ 1.5–2.0 for fashion. Set per-color if any
  are stricter (e.g. brand main navy must be ΔE ≤ 1.0).
- **Lot approval procedure** — first lot lab-dip 3 strikes, top-2 approved
  gets bulk-dyed, every bulk lot needs head-to-head comparison vs. master
  TCX swatch under D65 / TL84 lighting.
- **What to do on a near-miss** — accept (within tolerance), re-strike
  (~5–7 day delay), or reject (full re-dye, ~10–14 day delay, +cost).

### Step 6 — Anti-palette

3–7 explicit "no" entries. Reasons may include:

- Already used (26FW Powder Pink → not 27SS)
- Wrong saturation for territory ("no fluorescents")
- Brand-conflict (clashes with logo color)
- Channel-conflict (Musinsa thumbnails wash out a tone)

Anti-palette saves trim/embroidery decisions later — when in doubt, the
team checks if the color is in or out.

### Step 7 — Compose

Copy `assets/template.html` to `index.html`. Replace `[REPLACE]` tokens,
bind `DESIGN.md` tokens into `:root` (only typography / spacing — palette
comes from the locked colors), then paste sections from
`references/layouts.md` into `<main id="color-story">`.

Required sections, in order:

1. **Cover** — season + brand + palette name + status (v1 / v2 / locked) +
   lock date.
2. **Thesis** — one paragraph on why this palette serves this season's
   thesis (linked back to concept board).
3. **Master grid** — all colors at a glance with name + HEX + TCX in one
   chip.
4. **Hierarchy with proportion bar** — visual 60/30/10 bar above the tier
   blocks; main / season / accent grouped sections.
5. **Per-color detail spreads** — one wide spread per color: large swatch,
   codes table, fabric pairings, carryover status, use rules, optional
   imagegen mood image (1 small image per color is enough; no full looks).
6. **Category × color matrix** — the merchandising distribution table.
7. **Colorway count per style** — rule of thumb table (shirts 3–4 colorways,
   outer 1–2, knit 2–3, etc.).
8. **TCX vs. TPG note** — short reference paragraph.
9. **Dyeing QC + tolerance** — supplier-facing notes block.
10. **Anti-palette** — 3–7 bullets.
11. **Carryover from previous season** — short table cross-linking to
    prior-season lock document.
12. **Open / next decisions** — what still needs to be locked, by when.

### Step 8 — Optional: mood thumbnails

A color story does **not** need full mood imagery (that's the concept
board's job). At most 1 small mood image per locked color is helpful — and
only if the user explicitly asks. Default: pure CSS chips, no imagery.

If imagery is requested, follow the shared project imagegen policy in
[`../_shared/imagegen.md`](../_shared/imagegen.md): use the built-in
authenticated `image_gen` path only, then save project-local copies under
`images/color-XX.png`.

### Step 9 — Self-check

Run `references/checklist.md` before emitting. Every color must have HEX +
TCX, every category in the matrix must have at least one color, anti-palette
must list at least 3 items, and the proportion bar visual must match the
declared structure.

## Output contract

Emit between `<artifact>` tags:

```
<artifact identifier="fashion-color-story-slug" type="text/html" title="Season Color Story Title">
<!doctype html>
<html>...</html>
</artifact>
```

One sentence before the artifact, nothing after.
