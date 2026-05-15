# Fit System Checklist

P0 are hard gates.

## P0

- [ ] Header carries brand, version, status, lock date.
- [ ] System thesis names the issues being resolved.
- [ ] Future-state matrix lists every category × fit step × line cell
  declared in Step 1; cells with no fit at that step show `—`, not
  empty.
- [ ] Fit step names per line are consistent with the canonical set
  (UNI: slim / regular / oversize; WOMEN: slim baby / regular /
  semi-oversize) or with an explicit reason for diverging.
- [ ] Naming rules block lists ≥ 1 banned synonym.
- [ ] If calibration figures were generated, every `<img src="...">`
  resolves to a file the agent wrote in `images/`. No orphan
  references.
- [ ] If any image generation failed, the matching cell falls back to
  the styled placeholder.

## P1

- [ ] Side-by-side layout flags every cell in the current state that
  is being redefined (use `.flag` class) so the change is legible at
  a glance.
- [ ] Naming rules use canonical Korean spelling (크롭 / 레귤러 /
  오버 / 슬림 / 슬림 베이비) consistently.
- [ ] Supplier-equivalent line is present for any name that diverges
  from common supplier vocabulary.

## P2

- [ ] Calibration figures (if generated) all use the same lighting,
  background, pose, and color treatment.
- [ ] Open / next decisions list has owner + date for every entry, or
  the section is omitted entirely.
