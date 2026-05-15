# Season Deck Layouts

Three rhythms. Pick **one** in Step 2 and assemble slides accordingly.
The slide-order is fixed by `slide-order.md`; this file just defines
how each slide presents.

---

## Rhythm A — Vertical scroll-snap (default)

Slides stack vertically, full-screen each, scroll-snap aligned. Arrow
keys (↑ ↓) and Space navigate.

```html
<body class="deck deck--scroll-vertical">
  <nav class="deck-nav" aria-label="Deck navigation">
    <button data-cmd="prev" aria-label="Previous slide">↑</button>
    <span class="deck-counter"><span data-current>1</span> / <span data-total>44</span></span>
    <button data-cmd="next" aria-label="Next slide">↓</button>
  </nav>

  <section class="slide slide--cover">
    <header class="cover-header"><span class="brand-mark">[mark]</span><h1>27SS 디자인 기획안</h1></header>
    <footer><p>와키윌리 디자인실 · 2026.04.29</p></footer>
  </section>

  <section class="slide slide--toc">
    <h2>CONTENTS</h2>
    <ol class="toc-list">
      <li>로드맵 / 포지셔닝 맵</li>
      <li>시즌 컨셉 / 무드 보드</li>
      <li>컬러 / 소재</li>
      <li>스타일링</li>
      <li>키 아이템</li>
      <li>신규 라인업</li>
      <li>그래픽</li>
      <li>브랜드 구조 점검 및 재정비</li>
      <li>브랜드 전략</li>
    </ol>
  </section>

  <section class="slide slide--divider" data-chapter="color-material">
    <h2>컬러 / 소재</h2>
  </section>

  <section class="slide slide--embed" data-source="fashion-color-story">
    <header class="slide-header"><span class="slide-num">9</span><h2>컬러 구성</h2></header>
    <div class="slide-body">
      <!-- PASTE the <main> content from the color story artifact, scoped -->
    </div>
    <footer class="slide-footer">
      <span class="slide-attribution">via <code>fashion-color-story</code></span>
      <span class="page-num">09</span>
    </footer>
  </section>

  <!-- repeat slides per slide-order.md -->

  <section class="slide slide--placeholder" data-missing-source="fashion-key-item-sheet">
    <h2>키 아이템 시트 (대기)</h2>
    <p>Source artifact missing for <code>fashion-key-item-sheet · 코튼 집업 점퍼</code>. Run the skill in this project folder, then re-bind.</p>
  </section>

  <section class="slide slide--end">
    <h1>E.O.D.</h1>
    <p>감사합니다</p>
  </section>
</body>
```

---

## Rhythm B — Horizontal scroll-snap (Keynote-feel)

Same slide markup; deck container uses `overflow-x: auto;` and
`scroll-snap-type: x mandatory;`.

```html
<body class="deck deck--scroll-horizontal">
  <!-- same slides as Rhythm A -->
</body>
```

The arrow keys map to ← / → instead of ↑ / ↓ (the agent should
inline a 30-line vanilla-JS handler for this).

---

## Rhythm C — Print-A4-landscape (PDF intent)

Each slide is exactly one A4 landscape page. Use this when the
output will be printed or exported as PDF.

```html
<body class="deck deck--print">
  <section class="slide slide--print">
    <!-- ... -->
  </section>
  <!-- ... -->
</body>
```

In CSS, set `@page { size: A4 landscape; margin: 0; }` and on
`.slide--print` set `width: 297mm; height: 210mm; page-break-after:
always`.

---

## Common slide kinds

Every slide carries one of these `data-kind` attributes (or class
modifier) for consistent navigation behavior and CSS:

| `data-kind` | Class modifier | Use |
|---|---|---|
| `cover` | `slide--cover` | Slide 1 only |
| `toc` | `slide--toc` | Slide 2 only |
| `divider` | `slide--divider` | Chapter break before a section group |
| `embed` | `slide--embed` | Wraps the body of an upstream module artifact |
| `inline` | `slide--inline` | Project-bound content (e.g. label guide, brand strategy) |
| `placeholder` | `slide--placeholder` | When the upstream module artifact is missing |
| `end` | `slide--end` | Final E.O.D. slide |

## Always-on metadata

Every embed slide should carry:

```html
<section class="slide slide--embed"
         data-source="<skill-name>"
         data-source-version="<artifact lock version, e.g. v2-locked>"
         data-source-artifact-id="<artifact identifier, e.g. fashion-color-story-27ss>">
```

This metadata makes it possible to traceback to the standalone
artifact via the slide attribution chip and (later) auto-refresh
when the source artifact is regenerated.
