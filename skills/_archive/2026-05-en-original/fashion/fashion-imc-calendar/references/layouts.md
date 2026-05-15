# IMC Calendar Layouts

Three rhythms. Pick **one** in Step 2 and paste into
`<main id="imc-calendar">`.

---

## Rhythm A — Bands above + month track below (default)

```html
<header class="ic-header">
  <div class="ic-meta">
    <span class="season">[REPLACE 27SS]</span>
    <span class="line">[REPLACE ACC]</span>
    <span class="status">[REPLACE locked]</span>
    <span class="date">[REPLACE 2026-04-29]</span>
  </div>
  <h1 class="title">SEASON IMC</h1>
</header>

<section class="band-block" aria-label="Category bands">
  <article class="band-card" data-band="bag">
    <div class="band-kpi">
      <span class="band-key">BAG</span>
      <strong class="band-headline">[REPLACE 49 SKU (-22 SKU), 생산 금액 45억, 비중 49% (-6%p)]</strong>
    </div>
    <div class="band-chip"><span class="chip">[REPLACE 비효율 아이템 제거, SKU 압축]</span></div>
    <ul class="band-tactics">
      <li>[REPLACE 리뉴얼 신학기, 신규 데일리백 판매 집중]</li>
      <li>[REPLACE 우먼스 가방 IMC 마케팅 콘텐츠 강화, 히어로 발굴]</li>
      <li>[REPLACE 유니/우먼스 가방 In-Season 구성 4~5스타일]</li>
    </ul>
  </article>
  <!-- repeat 2–5 band-cards -->
</section>

<section class="month-track" aria-label="Month track">
  <div class="month-axis">
    <span>January</span><span>February</span><span>March</span><span>April</span><span>May</span><span>June</span><span>July</span>
  </div>
  <div class="hero-row">
    <article class="hero-tile" data-month="01">
      <div class="image-frame" data-fallback="Generate images/hero-01.png with imagegen"><img src="images/hero-01.png" alt="hero 01" /></div>
      <h3 class="hero-name">[REPLACE All-Day Backpack]</h3>
      <span class="hero-tag">[REPLACE Backpack]</span>
    </article>
    <!-- 5–9 hero-tiles aligned to months -->
  </div>
</section>

<section class="rollout-banner" aria-label="Rollout headline">
  <h2>[REPLACE 판기별 주력상품-콘텐츠-VM-프로모션 등의 '히어로 육성' 집중]</h2>
</section>
```

---

## Rhythm B — Month-first matrix

```html
<section class="matrix-block" aria-label="Month × Category matrix">
  <table>
    <thead>
      <tr><th></th><th>Jan</th><th>Feb</th><th>Mar</th><th>Apr</th><th>May</th><th>Jun</th><th>Jul</th></tr>
    </thead>
    <tbody>
      <tr><th data-band="bag">BAG</th><td>[hero or icon]</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
      <tr><th data-band="cap">CAP</th><td></td><td></td><td>[hero]</td><td>[hero]</td><td>[hero]</td><td></td><td></td></tr>
      <tr><th data-band="shoes">SHOES</th><td></td><td></td><td>[hero]</td><td></td><td></td><td>[hero]</td><td>[hero]</td></tr>
    </tbody>
  </table>
</section>
```

---

## Rhythm C — Tactic-rail format

Left rail per band with KPI; right side is the month timeline. Compact
A4 landscape.

```html
<div class="ic-grid ic-grid--rail-and-timeline">
  <aside class="band-rail">
    <article class="band-card band-card--rail" data-band="bag"><!-- ... --></article>
    <!-- 2–5 band-cards stacked -->
  </aside>
  <section class="month-track month-track--right"><!-- month axis + hero row --></section>
</div>
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
