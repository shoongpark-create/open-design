# Key Item Sheet Checklist

Run before emitting `<artifact>`. P0 are hard gates.

## P0 — Hard gates

- [ ] Header strip lists season, item family, brand item name, selling
  period, carryover status, and lock state.
- [ ] Item thesis is present and names target colorway count + target lot.
- [ ] Exactly **one** item family is on the page. Multiple items = split
  into multiple sheets.
- [ ] Slice subset has 2–4 entries (not 0, not 5). Each slice cluster
  carries 3–4 tiles.
- [ ] Each slice cluster's tiles obey its slice-shape rule from
  `references/slices.md` (Color = full garment hanger/flat-lay; Detail =
  macro construction; Pattern = swatch scale; Fabric = swatch close-up;
  Artwork = isolated graphic study).
- [ ] Worn-reference grid carries 5–6 figures, each with a 1-line
  takeaway.
- [ ] Every `<img src="...">` resolves to a file the agent actually wrote
  in `images/`. No orphan references.
- [ ] If any image generation failed, the matching `<figure>` falls back
  to the styled placeholder block — never a broken `<img>`.
- [ ] No external image URLs, no base64 data URIs, no absolute paths.
- [ ] All color references match the active `fashion-color-story` palette
  (or active `DESIGN.md` palette when no color story exists). No
  improvised TCX codes.

## P1 — Quality bars

- [ ] Slice selection follows the recommended composition for the item
  family in `references/slices.md`, *or* the agent stated a deliberate
  reason for diverging in the thesis.
- [ ] No banned slice combinations (Detail × Artwork on tees, Color ×
  Pattern when patterns include color variation).
- [ ] Production / merch note carries all five `<dt>` rows or omits
  unknown ones with `[TBD]` placeholder (never guesses suppliers).
- [ ] Worn references all use the same lighting / background treatment
  so they read as one set.
- [ ] Slice cluster titles use the canonical 5 names (Color / Detail /
  Pattern / Fabric / Artwork) or the documented synonym mapping.

## P2 — Polish

- [ ] Item name appears in the brand's own language (Korean if Korean
  brand) — do not auto-translate.
- [ ] One-line takeaways under worn figures are concrete construction
  notes, not mood adjectives.
- [ ] Thesis paragraph is one paragraph (≤ 5 sentences), not a treatise.
- [ ] Open / next decisions list has owner + date for every entry, or
  the section is omitted entirely.
