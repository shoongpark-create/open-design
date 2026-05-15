# IMC Calendar Checklist

P0 are hard gates.

## P0

- [ ] Header carries season, line, status, lock date.
- [ ] Category band block carries 2–5 bands. Each band has KPI line
  (SKU + 생산금액 + 비중 with deltas), strategic chip, and ≥ 2 bullet
  tactics.
- [ ] 비중 totals across all bands sum to ≥ 100% (or 100% ± 1% for
  rounding).
- [ ] Month track carries the months declared in Step 1 (typical SS:
  Jan-Jul).
- [ ] Hero IMC tile count equals the count declared in Step 1.
- [ ] Each hero tile carries name + item-type tag + image / icon.
- [ ] Bottom rollout banner is present at the visual foot.
- [ ] Every `<img src="...">` (if hero icons used) resolves to a file
  the agent wrote in `images/`. No orphan references.
- [ ] If any image generation failed, the matching tile falls back to
  the styled placeholder.

## P1

- [ ] Hero tiles fall in months consistent with the band's strategic
  chip (e.g. bag's "신학기 리뉴얼" hero falls in Jan-Feb).
- [ ] Pillar names from `fashion-season-strategy` (if it exists) show
  up in either the strategic chips or the rollout banner — the IMC
  calendar is its tactical extension, not an independent doc.
- [ ] YoY deltas use canonical sign convention (`-22 SKU`, `+4%p`).

## P2

- [ ] Month axis labels are full month names; tile alignment to month
  is visually clear (gridlines, ticks).
- [ ] Open / next decisions list has owner + date for every entry, or
  the section is omitted entirely.
