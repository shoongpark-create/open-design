---
name: fashion-concept-board
description: |
  Season concept / mood board as a single HTML file. The upstream document
  designers build *before* picking colors, materials, silhouettes, or styles —
  it sets the season's territory: keywords, mood references, tone dials, and
  seed signals. Use when the brief asks for a "concept board", "mood board",
  "season concept", "키오프", "시즌 컨셉", "무드보드", "27SS 컨셉",
  "season kickoff", or any creative-direction artifact that *precedes*
  lookbook / line-up / tech pack work.
triggers:
  - "concept board"
  - "mood board"
  - "season concept"
  - "season kickoff"
  - "creative direction"
  - "design brief"
  - "season territory"
  - "컨셉보드"
  - "무드보드"
  - "시즌 컨셉"
  - "시즌 키오프"
  - "크리에이티브 디렉션"
  - "기획안"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 11
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "Build a 27SS concept board for a Seoul young-casual brand: thesis 'humid early summer commute, dusty pop accent', 7 keywords, 12 mood images, 6 color seeds, 6 material seeds, 5 silhouette seeds."
---

# Fashion Concept Board Skill

Produce a single-file HTML **season concept board** — the document a design
studio builds at the very start of a season to declare *what this season feels
like before any product decision is made*. It is the parent document of every
later season artifact: the lookbook, the line-up, the tech pack. It is
**internal-facing**: the audience is the designer, the team, and the brand
director, not the buyer or the consumer.

The concept board exists to answer four questions:

1. **What season-shaped story are we telling?** (one-line thesis)
2. **What mood territory belongs to this season?** (mood images, references)
3. **What raw signals do we expect to follow?** (color / material / silhouette
   / detail *seeds* — not yet finalized palettes or specs)
4. **What are we deliberately not doing?** (anti-direction, off-territory list)

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
fashion-concept-board/
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
   project imagegen policy. Concept boards always need imagery, generated with
   the built-in authenticated `image_gen` path only.
3. Read `references/trend-research.md` so the concept territory connects to
   actual season trend data (WGSN/Coloro 27SS keywords, K-DTC reality) instead
   of a generic Pinterest dump.
4. Read `references/layouts.md` and pick a board rhythm before writing.
5. Read `references/checklist.md`.
5. Read the active `DESIGN.md`. Map its palette and type rules to the
   template's `:root` variables. If `DESIGN.md` describes a product/UI system,
   translate it into editorial fashion terms: accent → seasonal pop, surface →
   paper/curatorial card, muted → caption/footnote tone, foreground →
   editorial ink.

### Step 1 — Clarify the season

If the user did not provide these, ask in the first discovery form. **Do not
guess** — concept boards are useless when the brand voice is invented.

- Season / capsule name (e.g. 27SS, 27SS Capsule 1)
- Brand tone in 1–3 adjectives (e.g. "quiet, dry, slightly ironic")
- Target customer one-liner (who is wearing this season — age, city, ritual)
- 3–7 concept keywords (English or Korean both fine; prefer concrete words
  over abstract "modern / minimal")
- Cultural / era / musical / cinematic / architectural reference seeds (e.g.
  "early-1990s Tokyo CDJ booths", "Hammershøi interiors", "Frank Ocean Blonde
  era", "Seoul 6 a.m. humidity")
- Customer story for the season — what moment or ritual?
- Explicit differentiation from the *previous* season (what is the contrast?)
- Any hard constraints (must keep brand color X, must continue best-seller
  silhouette Y, must support category Z)

### Step 2 — Pick a tone direction

Pick **exactly one primary tonality** and **one tension/contrast tonality**
from `references/trend-research.md`. The combination is the territory; a single
mood is too thin, three or more is incoherent.

State the chosen `primary × tension` pair in one sentence before generating
images. Example:

> "27SS territory: *humid early-summer commute* (primary) × *slight industrial
> dryness* (tension)."

### Step 3 — Generate mood imagery (project imagegen path)

A concept board needs **9–16 mood images** that span the territory rather than
all looking like product shots. Aim for variety across these *image roles*:

- 2–3 **scene** images (place, time of day, weather, atmosphere)
- 2–3 **gesture / body** images (hand, walking, sitting, mid-action — *not*
  full styled outfit)
- 2–3 **texture / material** images (close-up fabric, surface, finish)
- 2–3 **light / color moment** images (a window, a lamp, a sky, a wall — pure
  color and light study)
- 1–2 **garment fragment** images (collar, cuff, hem, drape detail — *not* a
  full look)
- 1 **anti-territory** image is allowed — an image of *what we are not*, kept
  small as a footnote (optional)

This image-role variety is what makes a concept board feel like territory and
not a lookbook preview.

Use the shared project imagegen policy in
[`../_shared/imagegen.md`](../_shared/imagegen.md). Generate each mood image
with the built-in `image_gen` tool through the current authenticated Codex
session. Do not use API/CLI fallback, `ima2`, or local ComfyUI. Square or
near-square mood images are preferred.

Save assets in a project-local `images/` folder with stable names:

```
images/cover-mood.png
images/mood-01.png … images/mood-12.png
images/seed-color-01.png  (optional, for color-mood pairs)
images/seed-silhouette-01.png … images/seed-silhouette-04.png  (optional)
images/anti-territory-01.png  (optional, only if used)
```

For each mood image, write a compact `imagegen` prompt using this shape (note: this
is **not** a model-wearing-clothes prompt — that is the lookbook's job):

```
Use case: editorial / mood-board
Asset type: season concept mood image
Image role: [scene | gesture | texture | light | garment-fragment]
Primary subject: [the actual subject — a window, a hand, a fabric, a wall]
Scene/backdrop: [place + time of day + weather]
Style/medium: editorial / documentary / still life — not catalog
Composition/framing: [tight close-up | mid | environmental wide]
Lighting/mood: [warm 6am | grey overcast | hard direct | soft window]
Color palette: [translate active design tokens to physical color names]
Materials/textures: [if material/garment image: fabric, finish, drape]
Constraints: no logos, no readable text, no watermark, no model-walking-pose,
  no full styled outfit, no beauty-shot framing
Avoid: catalog-pose, runway crowd, studio backdrop seamless white
```

### Step 4 — Compose seed signals (NOT finalized)

After mood, build the **seed signal blocks**. Critical: these are *exploratory
bets*, not finalized palettes / spec sheets. Use words like "leaning",
"watching", "candidate", "trial". A finalized palette comes later in
`fashion-color-story`; a finalized fabric list comes later in
`fashion-material-swatch`.

For each of the four seed dimensions, write 4–8 entries:

- **Color seeds** — emotional color names paired with material context, e.g.
  "*humid linen ivory*", "*dusty 6am sky blue*", "*weathered terracotta*",
  "*industrial charcoal*". Optionally pair with a HEX hint for the chip.
- **Material seeds** — fabric *intentions* with hand-feel descriptors, not yet
  vendor-locked, e.g. "*washed cotton with body*", "*technical nylon, dry
  hand*", "*silk-cotton blend, slight transparency*".
- **Silhouette seeds** — silhouette *keywords* pinned to category, e.g.
  "*shirts: relaxed boxy with shoulder definition*", "*pants: trousers, not
  too tapered*", "*outer: quiet structured short coat*".
- **Detail seeds** — detail *moves* the season is exploring, e.g. "*one
  visible utility pocket*", "*horn button instead of plastic*", "*raw selvedge
  hem*", "*single embroidery moment per look*".

### Step 5 — Tone dials

Add 4–6 tone dials (visual sliders) showing where the season sits between
opposing axes. Examples:

- *muted ↔ saturated*
- *structured ↔ fluid*
- *masculine ↔ feminine*
- *quiet ↔ loud*
- *retro ↔ contemporary*
- *industrial ↔ romantic*

Each dial is a single decision the team has aligned on. Do not include axes
the user has not picked — empty dials are noise.

### Step 6 — Anti-territory list

3–7 short bullet points of **what this season is deliberately not doing**.
These come up often in real concept reviews and rarely make it into formal
documents. Examples:

- "no Y2K nostalgia"
- "no Pinterest cottagecore"
- "no logo-on-front merchandise tee"
- "no fluorescents"
- "no oversized boxy fit beyond 27SS shirt"

### Step 7 — Compose the concept board

Copy `assets/template.html` to `index.html`. Replace the `[REPLACE]` tokens,
bind the `DESIGN.md` tokens into `:root`, then paste the chosen sections from
`references/layouts.md` into `<main id="concept-board">`.

Required sections (in this order):

1. **Cover** — season + brand + one-line thesis + date + author.
2. **Keyword cloud** — 5–10 concept keywords with visual emphasis (size /
   weight / color) — the louder words are the load-bearing keywords.
3. **Thesis statement** — one paragraph explaining the season territory.
4. **Mood grid** — 9–16 mood images with role labels (scene / gesture / etc.).
5. **Reference shelf** — named cultural / era / artist / film references with
   one-line "why this".
6. **Tone dials** — 4–6 axis sliders.
7. **Color seeds** — 4–8 chips with emotional names + material context.
8. **Material seeds** — 4–8 fabric intentions with hand-feel words.
9. **Silhouette seeds** — 4–8 silhouette keywords pinned to category.
10. **Detail seeds** — 4–8 detail moves.
11. **Anti-territory** — 3–7 bullet points of what this is *not*.
12. **Open questions / next decisions** — short list of what comes next
    (e.g. "lock color palette by 2026.10.15", "fabric trip to Dongdaemun
    week of …", "first sample brief draft 2026.11.01").

### Step 8 — Self-check

Run `references/checklist.md` before emitting. Every mood image must have a
local relative path; every keyword/seed must be specific enough that someone
not in the meeting could understand the season. The page must still work if
an image fails by showing a styled fallback block with the original imagegen
prompt.

## Output contract

Emit between `<artifact>` tags:

```
<artifact identifier="fashion-concept-board-slug" type="text/html" title="Season Concept Board Title">
<!doctype html>
<html>...</html>
</artifact>
```

One sentence before the artifact, nothing after.
