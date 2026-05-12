# Fashion Concept Board Checklist

A concept board is upstream of every other season artifact — if it is vague,
the whole season inherits the vagueness. Run this gate before emitting.

## P0 — Must pass

- The artifact is a single self-contained HTML file. The only external
  references are local images under `images/` accessed by relative paths.
- All mood / cover / seed images are project-local. **No external URLs.**
- The cover and every mood image either ships a real generated PNG or shows
  the styled fallback with the original imagegen prompt. No empty placeholder
  ships as final.
- The thesis is one sentence and includes both **primary tonality** and
  **tension/contrast tonality** — not just a single mood word.
- The keyword cloud has **5–10** keywords. Loud-weight keywords (`kw-loud`)
  are the season's load-bearing words; there are at most 3 loud keywords.
- The mood grid has **9–16 images** with `data-image-role` tagging across
  these roles: scene / gesture / texture / light / garment-fragment.
- **No more than 25%** of the mood grid is full-outfit / model-styled imagery.
  A concept board is not a lookbook preview.
- Color seeds use **emotional names** (e.g. "humid linen ivory"), not pure
  HEX labels or generic "Pantone TPG 12-3434".
- Material seeds describe **hand-feel / drape / finish**, not just
  composition (e.g. "washed cotton with body" is fine; "cotton 100%" alone
  is not).
- Silhouette seeds are pinned to **category** (shirts / outer / pants /
  knit / etc.). A floating "boxy" without category is rejected.
- Anti-territory has 3–7 explicit "no" items. An empty anti-territory means
  the season has no point of view.
- Open Questions has at least 3 next decisions with a date or week.
- Active `DESIGN.md` tokens are translated into the `:root` variables.
- No fake brand logos, no readable generated text inside images, no
  watermark, no AI-generated catalog-style poses.
- Every major section has `data-od-id`.

## P1 — Strong concept board

- The thesis explicitly names the **customer moment** (who, where, when,
  doing what) — not just an aesthetic adjective.
- The mood grid feels like *territory* rather than a Pinterest pull —
  someone unfamiliar with the brand could describe the season's atmosphere
  from the grid alone.
- The reference shelf includes at least one Korean / East-Asian anchor (a
  Korean designer, photographer, era, or location) — concept boards for
  Korean young-casual brands that reference only Western culture feel
  imported.
- Tone dials are **specific decisions**, not balanced 50/50 placeholders.
  At least 3 of the dials lean clearly to one side.
- Color seeds, material seeds, silhouette seeds, and detail seeds are
  internally consistent — a "humid commute" thesis with "satin chiffon"
  material seeds is rejected.
- The board shows **one clear contrast** somewhere (e.g. soft material seed
  paired with industrial detail seed) — too much agreement is suspicious.
- Mood grid lighting / color temperature is coherent — not 12 unrelated
  imagegen outputs glued together.

## P2 — Polish

- Cover image has breathing room for title overlay; the title does not
  collide with image focal points.
- Keyword cloud spacing varies organically (no obvious grid).
- Dial positions feel deliberate — no two dials sit at the exact same
  position.
- Reference shelf cards balance Western and East-Asian anchors.
- The board is printable on A3 landscape without breaking the mood grid
  flow (CSS print media query honors the section boundaries).
- Mobile reflow keeps mood images above their captions, and seed lists
  retain readability without horizontal scroll.

## Image-role coverage table (P0 verification helper)

When reviewing the mood grid, count by role and confirm coverage:

| Role | Required count | Notes |
| --- | --- | --- |
| scene | 2–3 | place / time / weather, no model focus |
| gesture | 2–3 | body fragment, mid-action |
| texture | 2–3 | material close-up, no full garment |
| light | 2–3 | window / wall / sky / lamp — pure color/temp |
| garment-fragment | 1–2 | collar / cuff / hem detail |
| anti-territory | 0–1 | optional contrast, must be small |

If any required category is missing, regenerate before emitting.
