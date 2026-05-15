---
name: fashion-fabric-board
description: |
  Season **fabric direction** as a single HTML file. Locks the season's
  fabric language across UNI / WOMEN lines: structural fabrics (waffle /
  slub / rib / crease-check / seersucker / mesh / lace / dot jersey),
  functional fabrics (Sorona Cool, Sorona Polymer, Askin, light nylon,
  Coolmax, Linen-like), and the hangtag / point-label assets that
  communicate function on the floor. The document a Korean apparel
  studio hands to fabric mills + supplier sample rooms before sample
  cutting. Use when the brief asks for "fabric board", "패브릭 보드",
  "소재 방향성", "유니 소재", "우먼 소재", "기능성 소재", "행택",
  "피쳐 라벨", or any pre-sample fabric lock.
triggers:
  - "fabric board"
  - "fabric direction"
  - "material board"
  - "functional fabric"
  - "패브릭 보드"
  - "소재 방향성"
  - "유니 소재"
  - "우먼 소재"
  - "기능성 소재"
  - "행택"
  - "피쳐 라벨"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 16
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "Build a 27SS fabric board for WACKYWILLY: UNI block (waffle / slub / rib jersey + crease-check + seersucker + CN allover) and WOMEN block (waffle / dot / lovely-print jersey + poly uragiri + check seersucker + poly mesh). Functional fabric block: Sorona Cool, Askin, Sorona Polymer, light nylon UV+water-repellent."
---

# Fashion Fabric Board Skill

Produce a single-file HTML **season fabric board** — the document that
locks the season's fabric vocabulary before the supplier sample room
starts cutting. It is **internal + supplier-facing**: the audience is
the designer, the merchandiser, the fabric agent, and the mill.

A fabric board answers four questions:

1. **What is the fabric vocabulary of this season?** (structural fabrics,
   each with hand-feel descriptor and recommended use)
2. **What functional fabrics are we leaning on this season?** (cooling,
   moisture, UV, polymer-based, recycled — each with its hangtag asset)
3. **How do UNI and WOMEN diverge?** (UNI tends utility / structure;
   WOMEN tends romantic / dot / lace / sheer)
4. **How will the customer experience the function?** (hangtag visual,
   point-label, in-store POP — the function must be *visible* or it
   doesn't count as a value driver)

It sits between `fashion-concept-board` and `fashion-key-item-sheet`:
the concept board sets territory, the fabric board locks materials, the
key item sheet binds materials to specific items.

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
fashion-fabric-board/
├── SKILL.md
├── assets/
│   └── template.html
└── references/
    ├── fabric-library.md
    ├── layouts.md
    └── checklist.md
```

## Workflow

### Step 0 — Pre-flight

1. Read `assets/template.html` end-to-end.
2. Read [`../_shared/imagegen.md`](../_shared/imagegen.md).
3. Read `references/fabric-library.md` — the fabric taxonomy with hand
   descriptors and recommended use.
4. Read `references/layouts.md` and pick a layout.
5. Read `references/checklist.md`.
6. Read the active `DESIGN.md`, `fashion-concept-board` (if any), and
   `fashion-color-story` (if any). Fabric color references must use
   names from the locked color story.

### Step 1 — Clarify the board

Ask in the first discovery form if not provided:

- Season name (e.g. 27SS)
- Lines covered — UNI only, WOMEN only, or both (default: both)
- Fabric count target per line — default 4–6 structural + 2–4
  functional; allow 3–8 range
- Functional fabric set — pick from {Sorona Cool single jersey,
  Sorona Polymer fleece, Askin single jersey, Cool Cotton, light
  nylon UV+water-repellent, Coolmax denim, Linen-like denim, recycled
  nylon, others}; mark whether each carries a hangtag asset
- Hangtag policy — does each functional fabric require a hangtag mock
  in the document? (default: yes for all functional)
- Carryover fabrics — list by canonical name (e.g. "Sorona Cool from
  26SS — same supplier")
- Lab-dip / approval status — for-info / pending lab-dip / pending
  bulk approval / locked

### Step 2 — Pick a layout

Pick **one** rhythm from `references/layouts.md`:

- **Two-column line split** (default) — UNI block left, WOMEN block
  right, functional block below spanning full width
- **Stacked by line** — UNI block top, WOMEN block middle, functional
  block bottom; use when one line dominates
- **Functional-first** — functional block at top with hangtag mocks
  large; UNI + WOMEN below; use when the season's value driver is the
  functional story (e.g. heat-tech summer)

State the chosen layout in one sentence.

### Step 3 — Generate fabric swatches

For every fabric, generate:

- **1 swatch close-up** (square `1024x1024`) — the swatch hand visible,
  showing weave / texture
- **1 worn-context image** (square `1024x1024`) — a single garment area
  using this fabric, neutral lighting, no full body. Skip if the
  fabric is generic (basic single jersey) — use the swatch alone.

Save with stable names:

```
images/uni-fabric-01-waffle.png
images/uni-fabric-01-waffle-worn.png
…
images/women-fabric-04-poly-mesh.png
…
images/func-01-sorona-cool.png
images/func-01-sorona-cool-hangtag.png
…
```

Per-image prompt shape:

```
Use case: design / fabric-board
Asset type: [swatch close-up | worn-context | hangtag mock]
Fabric name: [REPLACE — canonical name from fabric-library.md]
Hand-feel: [REPLACE — soft / dry / crisp / structured / fluid]
Surface: [woven / knit / printed / textured]
Subject: [for swatch: fabric flat-lay at swatch scale showing weave;
  for worn: a garment area (cuff, hem, shoulder) using this fabric;
  for hangtag: the supplier's hangtag flat-lay with the fabric beside it]
Style/medium: editorial product photography, neutral background, soft
  daylight
Composition/framing: square 1024x1024, centered, ~10% margin
Color palette: [pull from active color story — fabric color shown in a
  representative season color, not white]
Constraints: no logos (unless hangtag is the subject), no readable text
  (unless hangtag is the subject), no watermark, no AI-slop sparkle
Avoid: glamour-shot lighting, hard color cast, fake gradient, busy
  background
```

For functional hangtags, the prompt may name the supplier brand
(Sorona, Askin, Coolmax, Creora) — these are real ingredient brands and
the studio uses their licensed hangtags.

### Step 4 — Compose the board

Copy `assets/template.html` to `index.html`. Replace `[REPLACE]`
tokens, bind active `DESIGN.md` tokens into `:root`, then paste the
chosen layout from `references/layouts.md` into `<main id="fabric-board">`.

Required sections, in order:

1. **Header strip** — season + lines covered + status (v1 / v2 /
   locked) + lock date.
2. **Board thesis** — one paragraph on the season's fabric posture
   (e.g. "27SS leans light + functional, with romantic dot/lace
   support on WOMEN").
3. **Functional fabric block** — 2–4 fabrics, each with: name,
   ingredient brand (if any), function description, hangtag mock,
   recommended item categories, supplier (if known).
4. **UNI structural block** — 4–6 fabrics, each with: name, hand-feel,
   weave / knit type, swatch image, optional worn-context image,
   recommended categories.
5. **WOMEN structural block** — same shape, 4–6 fabrics. Romantic
   prints / lace fall here.
6. **Lab-dip / approval status table** — fabric × status (for-info /
   lab-dip pending / bulk pending / approved) × supplier × lead time.
7. **Open / next decisions** — what still needs locking, owner, by when.

### Step 5 — Self-check

Run `references/checklist.md` before emitting. Every functional fabric
must carry a hangtag mock or be marked "no hangtag (carryover)". Every
structural fabric must carry a swatch + hand-feel descriptor. Page must
still render if any image fails by showing the styled fallback.

## Output contract

Emit between `<artifact>` tags:

```
<artifact identifier="fashion-fabric-board-slug" type="text/html" title="Season Fabric Board Title">
<!doctype html>
<html>...</html>
</artifact>
```

One sentence before the artifact, nothing after.
