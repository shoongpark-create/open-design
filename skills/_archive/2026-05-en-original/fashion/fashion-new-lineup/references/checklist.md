# New Lineup Checklist

Run before emitting `<artifact>`. P0 are hard gates.

## P0 — Hard gates

- [ ] Header carries season, line, lineup name, status, lock date.
- [ ] Lineup thesis paragraph names the anchor + bridge role + what
  this series replaces.
- [ ] Categories spread carries 3+ categories (target 5–8).
- [ ] Each category in the spread has at least 2 reference images
  *and* a chip-strip / item-card entry.
- [ ] Every `<img src="...">` resolves to a file the agent wrote in
  `images/`. No orphan references.
- [ ] If any image generation failed, the matching `<figure>` falls
  back to the styled placeholder.
- [ ] SKU table totals match the SKU target stated in the thesis.
- [ ] Anti-pattern lists ≥ 3 explicit "no" entries.
- [ ] No external image URLs, no base64, no absolute paths.
- [ ] Color references use color-story names; fabric references use
  fabric-board names; graphic references use graphic-direction names.
  No invented vocabulary.

## P1 — Quality bars

- [ ] Lineup name appears in the brand's own language (Korean if
  Korean brand) — do not auto-translate.
- [ ] Anchor (motif / detail / silhouette / function) is concrete, not
  generic ("ribbon detail at neckline" beats "feminine accent").
- [ ] Bridge map exists when Step 1 named bridge items; otherwise the
  section is omitted, not stubbed.
- [ ] Per-category notes are construction-specific ("scallop hem on
  denim short", "all-over polka dot at 3mm scale on cotton") not
  mood-only.
- [ ] Carryover ratio in the thesis is honored by the SKU table's
  carryover column.

## P2 — Polish

- [ ] All lineup imagery shares lighting / framing so the series reads
  as one set.
- [ ] No more than two categories carry the same color tier (BASIC /
  TREND / ACCENT) without a documented reason.
- [ ] Open / next decisions list has owner + date for every entry, or
  the section is omitted entirely.
- [ ] Lineup thesis paragraph is one paragraph (≤ 5 sentences).
