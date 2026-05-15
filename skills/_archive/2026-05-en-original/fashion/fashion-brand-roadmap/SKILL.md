---
name: fashion-brand-roadmap
description: |
  Brand **roadmap pyramid** as a single HTML file. The 4-tier pyramid a
  brand director uses to lock the brand's identity from North Star
  (abstract aspiration) → Principles (action rules) → Characters (how
  customers perceive us) → Foundation (the founding keywords). Internal,
  perpetual document; revised once per fiscal year, not once per season.
  Use when the brief asks for a "brand roadmap", "브랜드 로드맵", "북극성",
  "north star", "브랜드 피라미드", "브랜드 정체성 정립", "Foundation/
  Characters/Principles/North Star".
triggers:
  - "brand roadmap"
  - "brand pyramid"
  - "north star"
  - "brand identity"
  - "브랜드 로드맵"
  - "북극성"
  - "브랜드 피라미드"
  - "브랜드 정체성"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 19
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "Build a brand roadmap pyramid for WACKYWILLY: North Star = '상품력으로 신뢰를 / 트렌드로 감도를 / IP로 독창성을 / 고객에게 즐거움을'; Principles = 팬덤·존중·새로운시도·트렌드리딩; Characters = 재미있는·따라하고싶은·신뢰할수있는·K-아이돌; Foundation = 아이피·프로덕트·라이프스타일·플레이."
---

# Fashion Brand Roadmap Skill

Produce a single-file HTML **brand roadmap pyramid** — the 4-tier visual
that locks a brand's identity at the North Star / Principles / Characters
/ Foundation levels. It is **internal-facing**: the audience is the
brand director, the leadership team, every new joiner. It is **not** a
seasonal artifact; revise once per fiscal year unless a major reposition
happens mid-cycle.

The roadmap answers four questions at once:

1. **What is the abstract end-state?** (North Star — the brand the
   customer feels, not the products)
2. **What action rules unlock it?** (Principles — the 3–6 behavior
   rules every team applies)
3. **How are we perceived in concrete terms?** (Characters — 4–6
   adjectives or short phrases customers actually say)
4. **What were the founding keywords?** (Foundation — the original
   building blocks; never deleted, sometimes evolved)

It is the **parent** of every other internal artifact: positioning
maps, season strategies, season concepts all inherit from this.

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
fashion-brand-roadmap/
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
2. Read `references/layouts.md` and pick a pyramid rhythm.
3. Read `references/checklist.md`.
4. Read the active `DESIGN.md`. Bind type and color tokens.
5. Image generation is **optional**. The default uses CSS-rendered
   pyramid with text only. Generate a single background mood image
   (the pyramid backdrop) only if explicitly requested. If used,
   follow [`../_shared/imagegen.md`](../_shared/imagegen.md).

### Step 1 — Clarify the roadmap

Ask in the first discovery form if not provided:

- Brand name and brand mark / wordmark
- Effective year (e.g. 2026, FY26, 27SS-revised)
- North Star — 2–4 short clauses; the abstract end-state
- Principles — 3–6 short action verbs / verb phrases
- Characters — 4–6 customer-perceived adjectives or short phrases
- Foundation — 3–5 founding keywords (the original building blocks)
- Optional: background mood image (yes / no; default no)
- Highlight tier — which tier is currently being emphasized for the
  effective year (default: Characters)

### Step 2 — Pick a rhythm

Pick **one** rhythm from `references/layouts.md`:

- **Classic 4-tier pyramid** (default) — symmetric pyramid, North Star
  at apex, Foundation at base, with annotation rail on the left
- **Stacked-blocks pyramid** — wider base, distinct blocks per tier;
  use when each tier carries 5+ items
- **Annotated frame** — pyramid on the right, full per-tier annotation
  panels on the left; use when the audience needs full context (board
  meetings, strategy reviews)

State the chosen rhythm in one sentence.

### Step 3 — Compose the roadmap

Copy `assets/template.html` to `index.html`. Replace `[REPLACE]`
tokens, bind active `DESIGN.md` tokens into `:root`, then paste the
chosen rhythm from `references/layouts.md` into
`<main id="brand-roadmap">`.

Required sections, in order:

1. **Header strip** — brand + effective year + status (locked /
   draft) + lock date.
2. **Roadmap pyramid** — the 4-tier visual with all tier labels and
   tier content. Highlighted tier carries an accent treatment.
3. **Per-tier annotation** — one paragraph per tier explaining the
   tier's role, with examples or anchors.
4. **Cross-reference** — a short list of where this roadmap shows up
   in seasonal artifacts (positioning map, season strategy, season
   concept boards). Helps new joiners follow the dependency chain.
5. **Revision log** — table of prior versions with date and 1-line
   change note.

### Step 4 — Self-check

Run `references/checklist.md`. Every tier must carry text content;
North Star must read as aspirational, not operational; Principles
must read as action verbs; Characters must read as adjectives /
phrases customers would say; Foundation keywords must be founding
keywords (not new additions).

## Output contract

```
<artifact identifier="fashion-brand-roadmap-slug" type="text/html" title="Brand Roadmap Title">
<!doctype html>
<html>...</html>
</artifact>
```

One sentence before the artifact, nothing after.
