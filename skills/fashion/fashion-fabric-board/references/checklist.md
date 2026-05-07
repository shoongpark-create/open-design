# Fabric Board Checklist

Run before emitting `<artifact>`. P0 are hard gates.

## P0 — Hard gates

- [ ] Header carries season, lines covered, status, lock date.
- [ ] Board thesis paragraph names the fabric posture in 1–3 sentences.
- [ ] Functional block carries 2–4 fabrics; each has function, ingredient
  brand (or "—"), use, hangtag mock or "no hangtag (carryover)".
- [ ] Each line block (UNI / WOMEN) carries 4–6 structural fabrics; each
  has hand, weave/knit, use, swatch image.
- [ ] Every `<img src="...">` resolves to a file the agent wrote in
  `images/`. No orphan references.
- [ ] If any image generation failed, the matching `<figure>` falls back
  to the styled placeholder.
- [ ] Lab-dip / approval status table lists every fabric on the page,
  one row each, with status from the canonical set (for-info / lab-dip
  pending / bulk pending / approved).
- [ ] No external image URLs, no base64, no absolute paths.
- [ ] Color references use color-story names; no improvised TCX codes.

## P1 — Quality bars

- [ ] Functional fabrics' hangtag mocks show the correct ingredient
  brand (Sorona, Askin, Coolmax, Creora) — do not invent a generic tag.
- [ ] No fabric appears in both UNI and WOMEN sections without a
  documented reason (line-shared fabric needs a note in `Use`).
- [ ] Carryover fabrics name the prior season ("carried from 26SS"),
  not "carried from last season".
- [ ] Each fabric card's "Recommended categories" tag uses canonical
  category names (top / outer / bottom / setup / dress / knit /
  accessory).
- [ ] No more than one fabric leans on the same functional brand
  without diverging hand (two Sorona Cool variants need different
  knit / blend / hand).

## P2 — Polish

- [ ] Swatch + worn-context images per fabric share lighting / framing
  so the board reads as one set.
- [ ] Sustainability story (recycled / Sorona) is mentioned only when
  there is a real backstory; do not paste a sustainability bullet for
  flavor.
- [ ] Open / next decisions list has owner + date for every entry, or
  the section is omitted entirely.
- [ ] Korean fabric names use the brand's working spelling (와플 저지,
  슬럽 저지) — do not auto-translate or romanize unless requested.
