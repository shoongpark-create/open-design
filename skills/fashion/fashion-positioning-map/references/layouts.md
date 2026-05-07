# Positioning Map Layouts

Three rhythms. Pick **one** in Step 2 and paste into
`<main id="positioning-map">`.

---

## Rhythm A — Centered map + side notes (default)

The 2x2 map centered on the page; brand intent + per-line notes in a
sidebar to the right. Use when the brand has 1–3 plotted points and
the audience is leadership / new joiner.

```html
<header class="pm-header">
  <div class="pm-meta">
    <span class="season">[REPLACE 27SS]</span>
    <span class="brand">[REPLACE WACKYWILLY]</span>
    <span class="status">[REPLACE v1]</span>
    <span class="date">[REPLACE 2026-04-29]</span>
  </div>
  <h1 class="intent">▼ [REPLACE one-sentence strategic intent]</h1>
</header>

<div class="pm-grid pm-grid--map-and-side">
  <section class="pm-map" aria-label="Positioning map">
    <div class="map-frame" data-axis-x-left="BASIC" data-axis-x-right="ACCENT" data-axis-y-top="TREND" data-axis-y-bottom="NEW BASIC">
      <span class="axis-label axis-label--top">TREND</span>
      <span class="axis-label axis-label--bottom">NEW BASIC</span>
      <span class="axis-label axis-label--left">BASIC</span>
      <span class="axis-label axis-label--right">ACCENT</span>
      <div class="crosshair-h"></div>
      <div class="crosshair-v"></div>

      <!-- Brand points: position by --x and --y as percentages -->
      <span class="brand-point brand-point--self brand-point--uni" style="--x:55%; --y:45%">WACKYWILLY UNI</span>
      <span class="brand-point brand-point--self brand-point--women" style="--x:55%; --y:55%">WACKYWILLY WOMEN</span>

      <!-- Competitors -->
      <span class="brand-point" style="--x:25%; --y:18%">CECILIE BAHNSEN</span>
      <span class="brand-point" style="--x:38%; --y:25%">miu miu</span>
      <span class="brand-point" style="--x:30%; --y:40%">madhappy</span>
      <span class="brand-point" style="--x:65%; --y:25%">SANDY LIANG</span>
      <span class="brand-point" style="--x:80%; --y:18%">APEE</span>
      <span class="brand-point" style="--x:88%; --y:30%">SAINT Mxxxxxx</span>
      <span class="brand-point" style="--x:85%; --y:40%">doublet</span>
      <span class="brand-point" style="--x:25%; --y:55%">PLAY CDG</span>
      <span class="brand-point" style="--x:38%; --y:55%">BAPE</span>
      <span class="brand-point" style="--x:65%; --y:60%">SHUSHU/TONG</span>
      <span class="brand-point" style="--x:75%; --y:65%">A.PRESSE</span>
      <span class="brand-point" style="--x:83%; --y:62%">Stussy</span>
      <span class="brand-point" style="--x:88%; --y:55%">Supreme</span>
      <span class="brand-point" style="--x:25%; --y:70%">COMME des GARÇONS GIRL</span>
      <span class="brand-point" style="--x:30%; --y:80%">AURALEE</span>
      <span class="brand-point" style="--x:42%; --y:80%">LLEGE</span>
      <span class="brand-point" style="--x:60%; --y:70%">HUMAN MADE</span>
    </div>
  </section>

  <aside class="pm-notes" aria-label="Per-line notes">
    <h2>Per-line notes</h2>
    <article>
      <h3>UNI</h3>
      <p>[REPLACE — 뉴베이직 라인을 신선하고 세련되게 재정의하여 기본물 매출 회복, 트렌드 아이템 병행 전개로 볼륨 재확보]</p>
    </article>
    <article>
      <h3>WOMEN</h3>
      <p>[REPLACE — 뉴베이직을 보강해 안정적 볼륨 유지. 트렌드, 악센트 강화로 감도와 확장성 동시 확보]</p>
    </article>
    <article>
      <h3>UNI ↔ WOMEN</h3>
      <p>[REPLACE — 유니와 우먼이 분리되지 않고 하나의 브랜드로 인식되도록 톤과 방향성 통합 정리]</p>
    </article>
  </aside>
</div>
```

---

## Rhythm B — Map + competitor table

Map on top; competitor table below with each brand, quadrant, and 1-line
"what they do" note. Use when the audience needs to absorb the
competitive set in one read (e.g. new joiner onboarding).

```html
<section class="pm-map pm-map--full" aria-label="Positioning map">
  <!-- same .map-frame as Rhythm A -->
</section>

<section class="pm-table" aria-label="Competitor table">
  <h2>Competitor table</h2>
  <table>
    <thead><tr><th>Brand</th><th>Quadrant</th><th>What they do</th><th>URL</th></tr></thead>
    <tbody>
      <tr><td>[Brand]</td><td>[NW / NE / SW / SE]</td><td>[1-line]</td><td>[url or —]</td></tr>
      <!-- one row per competitor -->
    </tbody>
  </table>
</section>
```

---

## Rhythm C — Map + comparison strip (nearest neighbors)

Map on top; comparison strip below with 3–4 nearest competitors and
their differentiator vs. our brand. Use when the audience is design /
merch wanting to know "who do we look like, and how are we different".

```html
<section class="pm-map pm-map--full" aria-label="Positioning map"><!-- ... --></section>

<section class="pm-neighbors" aria-label="Nearest neighbors">
  <h2>Nearest neighbors</h2>
  <div class="neighbor-grid">
    <article class="neighbor-card">
      <h3>[Neighbor brand]</h3>
      <p class="neighbor-note">[REPLACE — what they do well]</p>
      <p class="neighbor-diff"><strong>Differentiator vs us:</strong> [REPLACE]</p>
    </article>
    <!-- 3–4 neighbor-cards -->
  </div>
</section>
```

---

## Always-on tail block

```html
<section class="open-decisions" aria-label="Open decisions">
  <h2>Open / next decisions</h2>
  <ul>
    <li>[Decision] · owner: [name] · by: [YYYY-MM-DD]</li>
  </ul>
</section>
```
