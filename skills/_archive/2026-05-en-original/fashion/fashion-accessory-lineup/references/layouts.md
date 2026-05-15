# Accessory Lineup Layouts

Three rhythms. Pick **one** in Step 2 and paste into
`<main id="accessory-lineup">`.

---

## Rhythm A — Shape-family columns (default)

Each shape family is a column with a header and a SKU stack below.

```html
<header class="al-header">
  <div class="al-meta">
    <span class="season">[REPLACE 27SS]</span>
    <span class="category">[REPLACE 가방]</span>
    <span class="segment">[REPLACE 신학기 백팩]</span>
    <span class="status">[REPLACE v1]</span>
    <span class="date">[REPLACE 2026-04-29]</span>
  </div>
  <h1 class="title">[REPLACE 신학기 백팩]</h1>
  <p class="thesis">[REPLACE 기능적인 스트링 디테일과 그래픽/와펜 포인트로 세가지 뉴 유형의 실용적인 신학기 백팩 라인]</p>
</header>

<section class="family-columns" aria-label="Shape families">
  <article class="family-col" data-family="light-string">
    <header class="family-header">
      <span class="family-tag">SHAPE 01</span>
      <h2 class="family-name">[REPLACE LIGHT STRING]</h2>
      <p class="family-note">[REPLACE 1-line silhouette cue]</p>
    </header>
    <div class="sku-stack">
      <figure class="sku-card">
        <div class="image-frame" data-fallback="Generate images/bag-light-string-01.png with imagegen"><img src="images/bag-light-string-01.png" alt="" /></div>
        <figcaption><strong>[REPLACE SKU name]</strong> · [REPLACE 1-line spec]</figcaption>
      </figure>
      <!-- 2–5 sku-cards -->
    </div>
  </article>

  <article class="family-col" data-family="round-zipper">
    <header class="family-header">
      <span class="family-tag">SHAPE 02</span>
      <h2 class="family-name">[REPLACE ROUND ZIPPER]</h2>
      <p class="family-note">[REPLACE]</p>
    </header>
    <div class="sku-stack"><!-- sku-cards --></div>
  </article>

  <article class="family-col" data-family="round-pocket">
    <header class="family-header">
      <span class="family-tag">SHAPE 03</span>
      <h2 class="family-name">[REPLACE ROUND POCKET]</h2>
      <p class="family-note">[REPLACE]</p>
    </header>
    <div class="sku-stack"><!-- sku-cards --></div>
  </article>
</section>
```

---

## Rhythm B — Family blocks stacked

Each family is a horizontal block with header + SKU row. Use when
SKU per family is high (5+).

```html
<section class="family-stack" aria-label="Shape families">
  <article class="family-block">
    <header class="family-header"><h2>[REPLACE family name]</h2><p>[REPLACE family note]</p></header>
    <div class="sku-row">
      <figure class="sku-card sku-card--row"><!-- ... --></figure>
      <!-- 5+ sku-cards in a horizontal row -->
    </div>
  </article>
  <!-- repeat per family -->
</section>
```

---

## Rhythm C — Hero + minor families

Hero family takes the top half (large product hero + small SKU strip);
remaining families below in compact format.

```html
<section class="al-hero" data-hero-family="round-pocket">
  <div class="image-frame hero-frame" data-fallback="Generate images/bag-hero.png with imagegen"><img src="images/bag-hero.png" alt="" /></div>
  <div class="hero-meta">
    <span class="hero-flag">SEASON HERO</span>
    <h2>[REPLACE hero family name]</h2>
    <p>[REPLACE hero family thesis]</p>
    <div class="hero-sku-strip">
      <figure class="sku-card sku-card--small"><!-- ... --></figure>
      <!-- minor SKUs of the hero family -->
    </div>
  </div>
</section>

<section class="family-columns family-columns--compact" aria-label="Other families">
  <!-- 1–3 minor family-col, smaller scale -->
</section>
```

---

## Optional — Signature accent strip

Place between layout body and the SKU table when accents (charm /
point-label / color webbing) are part of the lineup.

```html
<section class="accent-strip" aria-label="Signature accent set">
  <h2>Signature accent set</h2>
  <p class="accent-note">[REPLACE — accents pulled from active graphic-direction; used across families to bridge to brand world]</p>
  <div class="accent-row">
    <figure><div class="image-frame" data-fallback="Generate images/accent-charm-01.png with imagegen"><img src="images/accent-charm-01.png" alt="" /></div><figcaption>[REPLACE — Kiky charm]</figcaption></figure>
    <figure><div class="image-frame" data-fallback="Generate images/accent-pointlabel-01.png with imagegen"><img src="images/accent-pointlabel-01.png" alt="" /></div><figcaption>[REPLACE — woven point label]</figcaption></figure>
    <figure><div class="image-frame" data-fallback="Generate images/accent-webbing-01.png with imagegen"><img src="images/accent-webbing-01.png" alt="" /></div><figcaption>[REPLACE — color webbing]</figcaption></figure>
  </div>
</section>
```

---

## Always-on tail blocks

```html
<section class="sku-table" aria-label="Family × SKU plan">
  <h2>Family × SKU plan</h2>
  <table>
    <thead><tr><th>Family</th><th>SKU</th><th>Hero</th><th>Target lot</th><th>Color tier</th><th>Carryover</th></tr></thead>
    <tbody>
      <tr><td>[Light String]</td><td>[3]</td><td>—</td><td>[1,200]</td><td>[BASIC]</td><td>[new]</td></tr>
      <!-- one row per family; mark hero with ● in Hero column -->
      <tr class="total"><td>Total</td><td>[N]</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
    </tbody>
  </table>
</section>

<section class="open-decisions" aria-label="Open decisions">
  <h2>Open / next decisions</h2>
  <ul>
    <li>[Decision] · owner: [name] · by: [YYYY-MM-DD]</li>
  </ul>
</section>
```
