# Fashion Color Story Checklist

A color story is downstream of the concept board and upstream of every
sample. If the codes drift here, the entire season drifts. Run this gate
before emitting.

## P0 — Must pass

- The artifact is a single self-contained HTML file. The only external
  references are local images under `images/` accessed by relative paths.
- Every locked color has **HEX + Pantone TCX code with TCX color name**
  (e.g. `19-3911 TCX · Iron`). Missing TCX is a P0 failure.
- Every TCX code uses the format `XX-XXXX TCX` (5 digits, hyphenated, TCX
  suffix). `Pantone 19-3911` without `TCX` is rejected.
- Color count is between **6 and 12** total. Fewer than 6 is a thin
  palette; more than 12 is unmerchandisable for K-young-casual.
- Every color is assigned **exactly one tier**: main / season / accent.
- The hierarchy proportion bar visually matches the declared structure
  (60/30/10 declared = 60/30/10 rendered).
- The category × color matrix has at least 4 categories and every category
  has at least one non-empty cell. A category with zero colorways is a
  matrix error.
- The accent tier appears in **2 or fewer** categories — accent leakage
  across all categories breaks accent function.
- Anti-palette has **3 or more** explicit "no" entries with reasons.
- Active `DESIGN.md` typography / spacing tokens are bound into `:root`.
  Color tokens are derived from the locked palette, not the design system.
- Every major section has `data-od-id`.
- No fake brand logos, no readable generated text inside any chip, no
  watermark.

## P1 — Strong color story

- Every locked color has a **fabric pairings** list with at least 2
  materials. Colors without fabric context are abstract.
- Every locked color has at least one **use rule** — a "use when" or
  "avoid when" line. Without a rule, downstream decisions guess.
- Color names are emotional + memorable (e.g. "humid linen ivory", not
  "Color 03" or just the TCX name).
- Carryover colors are explicitly tagged as carryover with prior-season
  source ("from 26FW", "from 26SS").
- The QC section specifies tolerance per tier (main ≤ 1.0, season ≤ 1.5,
  accent ≤ 2.0 typical) — a single global tolerance is a P1 weakness.
- The QC section names the lab-dip approval flow (3-strike with D65 +
  TL84 light boxes).
- Linkage to concept board is explicit — the thesis paragraph names the
  concept-board territory or seed it derives from.
- TCX vs. TPG distinction is correctly stated (TCX for fabric only).

## P2 — Polish

- Master grid chips are visually generous (≥ 80px swatch height) so the
  document is scan-readable on a wall print.
- Per-color detail spreads use a wide swatch (≥ 280px height) so the team
  can compare against printed TCX swatch under retail lighting.
- The proportion bar uses tier-coded colors that the eye can map to the
  master grid quickly.
- Code tables use a monospace font for HEX / TCX / Coloro codes (the
  industry standard so codes can be copy-paste verified at a glance).
- The print CSS media query keeps each color detail spread on its own
  page — color story is regularly printed for wall reference.
- Mobile reflow keeps swatch + code side-by-side at minimum width 480px;
  below that, swatch stacks above code.
- One imagegen mood thumbnail is included **only** for accent or season
  colors that benefit from textile context. Main carryover tier should
  not need imagery — code + fabric pairing list is enough.

## Domain-specific gotchas to verify

- **TCX vs. TPG** — every code labeled `TPG` must be flagged "paper /
  lookbook only — never fabric matching".
- **Coloro codes** — if shown, they are reference, not production. State
  this where Coloro appears.
- **Carryover sell-through cue** — if available from prior-season data,
  cite a real number ("26FW navy: 78% sell-through, top-3"). If not
  available, write "(sell-through pending)".
- **Anti-palette specificity** — vague "no bright colors" is rejected.
  "no fluorescents because Musinsa thumbnail wash" is accepted.
- **Brand main carryover** — if the brand has a permanent main color
  (e.g. brand-defining navy), the master grid must include it. Skipping
  brand-main breaks brand continuity even if the season pivots elsewhere.
