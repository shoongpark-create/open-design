---
name: fashion-season-deck
description: |
  **Season design plan deck** — a single HTML file that binds the season's
  full design plan (브랜드 로드맵 → 포지셔닝 → 시즌 전략 → IMC → 컨셉 →
  컬러 → 소재 → 스타일링 → 키 아이템 → 신규 라인업 → 그래픽 → 핏 / 라벨
  정비 → 브랜드 전략) into a slide-deck format styled like the
  WACKYWILLY 27SS internal review deck. Use when the brief asks for a
  "season deck", "디자인 기획안", "27SS 디자인 기획안", "시즌 종합 덱",
  "브랜드 시즌 합본", "design plan deck", "season planbook", or any
  cover-to-EOD season presentation that aggregates the smaller fashion
  modules.
triggers:
  - "season deck"
  - "season design plan"
  - "design plan deck"
  - "season planbook"
  - "디자인 기획안"
  - "시즌 디자인 기획안"
  - "27SS 디자인 기획안"
  - "시즌 종합 덱"
  - "브랜드 시즌 합본"
  - "design concept deck"
od:
  mode: deck
  platform: desktop
  scenario: design
  category: fashion
  featured: 24
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "Bind a 27SS WACKYWILLY design plan deck: cover, contents, brand roadmap, positioning map, season strategy (UNI + ACC), IMC calendar, season concept '90s STREET RAW', color story, fabric board (UNI/WOMEN/Functional), 4 styling boards (S1-S4) per line, 7 key item sheets, 6 graphic direction themes, fit system reset, label guide, brand volume strategy, EOD."
---

# Fashion Season Deck Skill

Produce a single-file HTML **season design plan deck** — the slide-by-
slide cover-to-EOD presentation a Korean apparel design studio assembles
at the start of a season. Each slide reuses or links to one of the
fashion module skills (concept-board, color-story, fabric-board,
styling-board, key-item-sheet, etc.); the deck is the *binder*, not a
new artifact set.

The deck answers two questions:

1. **What is the full design plan for this season?** (in slide order)
2. **How do the modules connect?** (which slide cites which artifact;
   inherited tokens carry through)

It is the **fashion-domain analog of `simple-deck` / `guizang-ppt`**,
specialized for K-young-casual season planning structure. Use deck
mode (horizontal scroll-snap or arrow-key navigation) and print-ready
section breaks.

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
fashion-season-deck/
├── SKILL.md
├── assets/
│   └── template.html
└── references/
    ├── slide-order.md
    ├── layouts.md
    └── checklist.md
```

## Workflow

### Step 0 — Pre-flight

1. Read `assets/template.html` end-to-end.
2. Read [`../_shared/imagegen.md`](../_shared/imagegen.md). Imagery
   per slide follows each module's per-skill defaults.
3. Read `references/slide-order.md` — the canonical slide ordering
   used in K-young-casual season decks (and matched to the WACKYWILLY
   27SS deck).
4. Read `references/layouts.md` and pick a deck rhythm.
5. Read `references/checklist.md`.
6. Read every active fashion artifact for this season — concept board,
   color story, fabric board, styling boards, key item sheets,
   graphic direction, new lineups, fit system, accessory lineup,
   season strategy, IMC calendar, positioning map, brand roadmap.
   Each becomes one or more slides.

### Step 1 — Clarify the deck

Ask in the first discovery form if not provided:

- Season name (e.g. 27SS)
- Brand + division (e.g. 와키윌리 디자인실 · 통합 악세 & 슈즈 디자인실)
- Slide ordering — pick canonical (default — see `slide-order.md`)
  or custom
- Lines covered — UNI / WOMEN / ACC / KIDS / brand-wide
- Source artifact list — which existing project artifacts to bind
  in. If a module's artifact does not exist, the deck either skips
  that slide *or* generates a minimal in-line slide with placeholder
  copy. State the policy.
- Cover style — full-bleed photo / brand-color block / minimal type
- Footer style — page numbers, division attribution, brand mark
- Output mode — single-file HTML only / HTML + PDF print intent

### Step 2 — Pick a rhythm

Pick **one** rhythm from `references/layouts.md`:

- **Slide-stack with scroll-snap** (default) — vertical slide stack
  with scroll-snap, full-screen each, arrow-key & space navigation
- **Horizontal scroll-snap** — horizontal slides, swipe / arrow
  navigation, closer to a Keynote feel
- **Print-A4-landscape** — paginated A4 landscape, optimized for
  exporting to PDF

State the chosen rhythm in one sentence.

### Step 3 — Bind module slides

For every section in `slide-order.md`, decide:

- **Use existing artifact** — embed the artifact's HTML body in the
  matching slide; preserve module CSS in a scoped wrapper
- **Generate minimal slide** — when no artifact exists, drop a
  placeholder slide that names what is missing and the recommended
  module skill to run next
- **Section divider** — for major chapter breaks (concept → product
  → strategy), insert a divider slide

Slide count target: **30–50** for a full season deck. Do not pad
beyond what the season carries.

### Step 4 — Compose the deck

Copy `assets/template.html` to `index.html`. Replace `[REPLACE]`
tokens, bind active `DESIGN.md` tokens into `:root`, then assemble
slides per the chosen rhythm.

Required slides, in order (skip when not applicable):

1. **Cover** — brand mark + season + division + date
2. **CONTENTS** — table of contents matching `slide-order.md`
3. **브랜드 로드맵** — embed `fashion-brand-roadmap`
4. **포지셔닝 맵** — embed `fashion-positioning-map`
5. **시즌 전략** — embed `fashion-season-strategy`
6. **시즌 IMC** — embed `fashion-imc-calendar`
7. **시즌 컨셉 / 무드보드** — embed `fashion-concept-board`
8. **컬러 / 소재 (간지)** — section divider
9. **컬러 구성** — embed `fashion-color-story`
10. **컬러 플레이** — additional editorial color spread (project-bound)
11. **소재 방향성** — embed `fashion-fabric-board`
12. **스타일링 (간지)** — section divider
13. **스타일링 보드** — embed each `fashion-styling-board` (S1–S4
    × UNI / WOMEN)
14. **키 아이템 (간지)** — section divider
15. **키 아이템 시트** — embed each `fashion-key-item-sheet` (one
    slide per item)
16. **신규 라인업 (간지)** — section divider
17. **신규 라인업** — embed each `fashion-new-lineup` (one slide
    per lineup)
18. **그래픽 (간지)** — section divider
19. **그래픽 방향성** — embed `fashion-graphic-direction`
20. **브랜드 구조 점검 / 재정비 (간지)** — section divider
21. **핏 체계** — embed `fashion-fit-system`
22. **메인 택 / 라벨 가이드** — separate slide with current vs.
    future label set (project-bound)
23. **브랜드 볼륨 성장 전략** — closing strategy slide
24. **E.O.D.** — End-of-deck card with thanks + division attribution

### Step 5 — Self-check

Run `references/checklist.md`. Cover and EOD are mandatory; CONTENTS
must list every slide present; section dividers must appear before
their grouped slides; every embedded module slide must carry an
attribution chip naming the source skill (so a viewer can trace back
to the standalone artifact).

## Output contract

```
<artifact identifier="fashion-season-deck-slug" type="text/html" title="Season Design Plan Deck Title">
<!doctype html>
<html>...</html>
</artifact>
```

One sentence before the artifact, nothing after.
