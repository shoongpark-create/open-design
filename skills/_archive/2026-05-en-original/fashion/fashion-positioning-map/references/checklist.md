# Positioning Map Checklist

Run before emitting `<artifact>`. P0 are hard gates.

## P0 — Hard gates

- [ ] Header carries season (or "perpetual"), brand, status, lock date.
- [ ] Strategic intent sentence is present above the map.
- [ ] Map carries all 4 axis labels (top / bottom / left / right) and
  a center crosshair.
- [ ] Competitor set has ≥ 8 brands plotted. Below 8 is not a credible
  positioning map.
- [ ] Every plotted brand uses coordinates within the 0–100% box (no
  point clipped off the map).
- [ ] Our brand point uses a visually distinct treatment (filled chip,
  brand color, slightly larger) vs. competitor wordmarks.
- [ ] No two brand points overlap by more than 50% (re-place collisions
  with a slight offset; collisions destroy legibility).
- [ ] Default rendering uses CSS-rendered wordmark text, not raster
  logo images. If the user attached real logos and asked for an
  image-set version, every `<img src="...">` must resolve to a file
  the agent wrote in `images/`.

## P1 — Quality bars

- [ ] Per-line notes explain why each plotted point sits where it does
  (when ≥2 lines plotted).
- [ ] Each competitor placement is consistent with the brand's public
  identity (e.g. Supreme should not sit in NEW BASIC).
- [ ] Quadrant labels (NW / NE / SW / SE) in the competitor table
  match the actual coordinates plotted.
- [ ] Strategic intent uses the brand's own language; do not paraphrase
  into generic English.
- [ ] When using the default "BASIC ↔ ACCENT × NEW BASIC ↔ TREND"
  axes, the WACKYWILLY 27SS deck calibration is honored (TREND at
  top, NEW BASIC at bottom).

## P2 — Polish

- [ ] Map is readable on landscape A4 print without cutting off
  brand names at the right edge.
- [ ] Competitor wordmarks use the brand's own canonical spelling
  (e.g. "miu miu" lowercase, "PLAY CDG" uppercase) — do not
  auto-capitalize.
- [ ] No more than 3 brands cluster in any 10x10% map cell — if more,
  drop redundant placements.
- [ ] Open / next decisions list has owner + date for every entry, or
  the section is omitted entirely.
