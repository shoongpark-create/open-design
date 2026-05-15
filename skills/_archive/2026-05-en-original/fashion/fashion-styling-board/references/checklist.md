# Styling Board Checklist

Run before emitting `<artifact>`. Hard gates are P0; do not ship without them.

## P0 — Hard gates

- [ ] Header strip lists season, selling period (S#), month range, category
  line, look count, and lock status (v1 / v2 / locked).
- [ ] One-line period thesis is present and names at least one anchor item.
- [ ] Axis track strip is rendered above the look grid with all four labels:
  BASIC, NEW BASIC, TREND, ACCENT.
- [ ] Every look has an axis dot, a look number (zero-padded `01`…`NN`),
  and a 1-line caption that mentions an anchor item or a styling move.
- [ ] Every `<img src="images/look-NN-AXIS.png">` resolves to a file the
  agent actually wrote in `images/` this run. No orphan references.
- [ ] If any image generation failed, the matching `<figure>` falls back to
  the styled placeholder block (CSS in template) — never a broken `<img>`.
- [ ] Axis count summary numbers add up to the total look count declared in
  the header strip.
- [ ] No external image URLs, no base64 data URIs, no absolute paths. All
  imagery is project-local under `images/`.
- [ ] No logos or readable brand text on any styling figure (verify the
  prompt's `Constraints:` line was honored).

## P1 — Quality bars

- [ ] Each look's color chip strip carries 3–4 colors from the active
  palette only — no improvised shades.
- [ ] ACCENT axis carries no more than 20% of looks (target: 10–15%).
- [ ] No two looks share the same anchor item *and* same axis. (Two
  identical jumpers in BASIC = one to drop.)
- [ ] Carryover map exists when at least one look is marked as carried
  from a prior period; otherwise omit the section, do not stub it.
- [ ] Captions are concrete, not generic — "boxy fit cotton zip-up over
  washed denim" beats "casual layering".

## P2 — Polish

- [ ] All figures use the same lighting / background treatment so the
  silhouettes read as one set.
- [ ] Track strip dot colors come from the active design system palette
  (no rainbow defaults).
- [ ] Open / next decisions list has owner + date for every entry, or the
  section is omitted.
- [ ] Period thesis is one sentence, not a paragraph.
