---
name: fashion-season-strategy
description: |
  Single-page **season strategy** card. Locks the season's 3 strategic
  pillars (e.g. 시장 대응력 강화 / 캐리오버 상품 리뉴얼 / 판기별 IMC
  히어로 육성) and the season's hero items per category (가방 / 모자 /
  신발 etc.). The document a brand director uses to align design,
  merchandising, and marketing on what the season is *for*. Use when
  the brief asks for a "season strategy", "시즌 전략", "전략 3축",
  "전략 축", "시즌 주력 아이템", or any pillar-and-hero strategy card
  that precedes detailed planning.
triggers:
  - "season strategy"
  - "season pillars"
  - "strategic pillars"
  - "시즌 전략"
  - "전략 3축"
  - "전략 축"
  - "시즌 주력 아이템"
  - "hero item"
  - "season focus"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 20
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "Build a 27SS season strategy for WACKYWILLY ACC: 3 pillars = 시장 대응력 강화 (27SS QR 30%, in-season 13 styles), 캐리오버 상품 리뉴얼, 판기별 IMC 히어로 육성. Hero categories: 가방 (신학기 리뉴얼 + 데일리백), 모자 (뉴 히어로 평균 LOT 상향화), 신발 (뉴 키테 + 하절기 샌들/슬라이드)."
---

# Fashion Season Strategy Skill

Produce a single-file HTML **season strategy card** — the 1-pager a
brand director hands to design, merchandising, and marketing at the
start of season planning. It is **internal-facing**: the audience is
the cross-functional team and any partner (agency, supplier) needing
to align with the season's intent.

The card answers four questions:

1. **What is the season for?** (3 strategic pillars — operational
   pillars that compose the season's intent, e.g. 시장대응력 강화,
   캐리오버 리뉴얼, 히어로 육성)
2. **Where do we focus the bet?** (hero category cards, one per
   product family — 가방 / 모자 / 신발 / 외투 / etc.)
3. **What is each pillar's tactical content?** (chips: in-season
   planning, weekly QR, design-renewal, etc.)
4. **What is each hero category's plan?** (1-line strategy + bullet
   tactics)

It sits between `fashion-brand-roadmap` (perpetual) and the
season-specific deck modules (concept, color, fabric, lineup, etc.).

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
fashion-season-strategy/
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
2. Read `references/layouts.md` and pick a layout.
3. Read `references/checklist.md`.
4. Read the active `DESIGN.md`. Bind type and color tokens.
5. Image generation is **optional** (the card is text/icon-led).
   Generate per-category icon imagery only if explicitly requested.

### Step 1 — Clarify the strategy

Ask in the first discovery form if not provided:

- Season name (e.g. 27SS)
- Line / segment — UNI / WOMEN / ACC / KIDS / brand-wide
- Strategic pillars — exactly 3 (canonical for K-young-casual). Each
  pillar carries: title, 1-line description, 1–2 metric chips.
- Hero categories — 2–4 cards. Each carries: category name, 1-line
  pillar focus, 2–4 bullet tactics.
- Quantitative targets — pillar metrics (QR %, SKU count, LOT, sell-through)
  if available
- Status — concept / locked / in-execution

### Step 2 — Pick a layout

Pick **one** rhythm from `references/layouts.md`:

- **Pillars row + heroes row** (default) — 3 pillar cards across the
  top, hero category cards across the middle
- **Pillars stack + heroes grid** — pillars stacked on the left,
  hero cards in a 2x2 grid on the right; use when each card carries
  long copy
- **Single-column** — pillars then heroes stacked vertically; use for
  print A4 portrait

State the chosen layout in one sentence.

### Step 3 — Compose the card

Copy `assets/template.html` to `index.html`. Replace `[REPLACE]`
tokens, bind active `DESIGN.md` tokens into `:root`, then paste the
chosen rhythm into `<main id="season-strategy">`.

Required sections, in order:

1. **Header strip** — season + line + status + lock date.
2. **Pillars block** — 3 pillar cards with title, description, chips.
3. **Hero categories block** — 2–4 category cards with name, 1-line
   pillar focus, bullet tactics.
4. **Cross-functional alignment** — table mapping each pillar to the
   teams that own it (design / MD / marketing / supply).
5. **Open / next decisions** — what still needs locking, owner, by when.

### Step 4 — Self-check

Run `references/checklist.md`. Pillars must be exactly 3; hero
categories must be 2–4; each pillar carries ≥ 1 metric chip when
metrics are available; cross-functional alignment table lists every
pillar.

## Output contract

```
<artifact identifier="fashion-season-strategy-slug" type="text/html" title="Season Strategy Title">
<!doctype html>
<html>...</html>
</artifact>
```

One sentence before the artifact, nothing after.
