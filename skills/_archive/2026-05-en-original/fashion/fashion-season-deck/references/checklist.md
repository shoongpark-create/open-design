# Season Deck Checklist

P0 are hard gates.

## P0

- [ ] Slide 1 is `slide--cover` and carries brand mark + season title
  + division attribution + date.
- [ ] Slide 2 is `slide--toc` and lists every slide present in the
  deck (or every chapter, when paginated).
- [ ] Final slide is `slide--end` with E.O.D. card.
- [ ] Section dividers (`slide--divider`) appear before their
  grouped slides — not after, not buried mid-group.
- [ ] Every `slide--embed` carries `data-source="<skill-name>"` so
  the upstream artifact is traceable.
- [ ] Every `slide--embed` body holds the upstream module's `<main>`
  content scoped to the slide (no global CSS leaks across slides).
- [ ] Every `slide--placeholder` names the missing upstream skill +
  the artifact it is missing.
- [ ] Slide count is in the 30–50 range for a full season; ACC-only
  decks may run 20–30. Decks padded to >50 slides with empty
  placeholders fail this gate.
- [ ] Page numbers appear in slide footers (or `data-page-num` is
  set), so paginated print works.
- [ ] No external image URLs across any embedded slide. All imagery
  is project-local under `images/` per upstream module.

## P1

- [ ] Embedded slides preserve the upstream module's CSS via scoped
  selectors (e.g. `.slide[data-source="fashion-color-story"] :is(...)`).
- [ ] Slide attribution chips appear in the footer of every embed
  slide.
- [ ] Cover style matches the brand's existing deck convention (full-
  bleed photo / brand-color block / minimal type).
- [ ] When the deck is ACC-only, the slide order follows the
  ACC-substitution table in `slide-order.md`.
- [ ] Divider slides carry only the chapter title (and optionally a
  brand mark) — no body content.

## P2

- [ ] Navigation buttons (↑ ↓ or ← →) are present and keyboard-
  shortcuts work (arrow keys + space).
- [ ] Print-A4-landscape rhythm exports cleanly (`@page` set, slides
  break on page boundaries).
- [ ] Slide counter (current / total) is accurate at runtime.
- [ ] EOD card matches the brand's closing convention (e.g. "감사합니다").
