# New Lineup Layouts

Three rhythms. Pick **one** in Step 2 and paste into
`<main id="new-lineup">`. Always finish with the SKU table and the
optional bridge / anti-pattern / open-decisions tail blocks.

---

## Rhythm A — Mosaic + chip strip (default)

Image mosaic at top showing the series mood (4–6 images of varying
sizes). Chip strip below shows one square per category with SKU count.

```html
<header class="nl-header">
  <div class="nl-meta">
    <span class="season">[REPLACE 27SS]</span>
    <span class="line">[REPLACE WOMEN]</span>
    <span class="status">[REPLACE concept]</span>
    <span class="date">[REPLACE 2026-04-29]</span>
  </div>
  <h1 class="lineup-name">[REPLACE 폴카 도트 시리즈]</h1>
  <p class="thesis">[REPLACE one paragraph: anchor + intent + bridge role + what it replaces]</p>
</header>

<section class="nl-mosaic" aria-label="Series mood mosaic">
  <figure class="mosaic-tile mosaic-tile--lg"><div class="image-frame" data-fallback="Generate images/lineup-mood-01.png with imagegen"><img src="images/lineup-mood-01.png" alt="mood 01" /></div></figure>
  <figure class="mosaic-tile mosaic-tile--sm"><div class="image-frame" data-fallback="Generate images/lineup-mood-02.png with imagegen"><img src="images/lineup-mood-02.png" alt="mood 02" /></div></figure>
  <figure class="mosaic-tile mosaic-tile--sm"><div class="image-frame" data-fallback="Generate images/lineup-mood-03.png with imagegen"><img src="images/lineup-mood-03.png" alt="mood 03" /></div></figure>
  <figure class="mosaic-tile mosaic-tile--md"><div class="image-frame" data-fallback="Generate images/lineup-mood-04.png with imagegen"><img src="images/lineup-mood-04.png" alt="mood 04" /></div></figure>
  <!-- repeat 4–6 mosaic-tiles in mixed sizes -->
</section>

<section class="nl-chip-strip" aria-label="Category chip strip">
  <article class="chip-card" data-category="tee">
    <div class="image-frame chip-thumb" data-fallback="Generate images/lineup-tee-01.png with imagegen"><img src="images/lineup-tee-01.png" alt="tee" /></div>
    <h3>Tee</h3>
    <p class="sku">[REPLACE 3 SKU]</p>
  </article>
  <!-- repeat per category in spread -->
</section>
```

---

## Rhythm B — Hero + grid

One large hero composition (the signature look of the series), category
grid below with 4–8 item cards. Use when the series has a clear hero
silhouette that defines it.

```html
<section class="nl-hero" aria-label="Series hero">
  <div class="image-frame hero-frame" data-fallback="Generate images/lineup-hero.png with imagegen"><img src="images/lineup-hero.png" alt="series hero" /></div>
  <p class="hero-note">[REPLACE 1-line: what this hero look does]</p>
</section>

<section class="nl-item-grid" aria-label="Items">
  <article class="item-card" data-category="tee">
    <div class="image-frame"><img src="images/lineup-tee-01.png" alt="" /></div>
    <h3>Tee — [REPLACE]</h3>
    <p class="item-note">[REPLACE 1-line]</p>
  </article>
  <!-- 4–8 item-cards -->
</section>
```

---

## Rhythm C — Item card grid

Straight category-by-category card grid; use when SKU count is high
(>14) and the mood reads through volume.

```html
<section class="nl-item-grid nl-item-grid--dense" aria-label="Items">
  <article class="item-card item-card--dense" data-category="tee">
    <div class="image-frame"><img src="images/lineup-tee-01.png" alt="" /></div>
    <h3>[REPLACE item name]</h3>
    <p class="item-note">[REPLACE 1-line]</p>
  </article>
  <!-- 8–18 item-cards in a dense grid -->
</section>
```

---

## Always-on tail blocks

```html
<section class="sku-table" aria-label="Category × SKU plan">
  <h2>Category × SKU plan</h2>
  <table>
    <thead><tr><th>Category</th><th>SKU</th><th>Carryover</th><th>Target lot</th><th>Tier</th></tr></thead>
    <tbody>
      <tr><td>Tee</td><td>[3]</td><td>[new / 1 from 26FW]</td><td>[1,500]</td><td>[TREND]</td></tr>
      <!-- one row per category in spread; total row at bottom -->
      <tr class="total"><td>Total</td><td>[N]</td><td>—</td><td>—</td><td>—</td></tr>
    </tbody>
  </table>
</section>

<section class="bridge-map" aria-label="Bridge map">
  <h2>Bridge map (UNI ↔ WOMEN)</h2>
  <ul>
    <li>[Item] → adapted for [other line] by [adaptation note]</li>
  </ul>
</section>

<section class="anti-pattern" aria-label="Anti-pattern">
  <h2>Anti-pattern</h2>
  <ul>
    <li>[REPLACE — what this series is *not*]</li>
    <!-- 3–7 bullets -->
  </ul>
</section>

<section class="open-decisions" aria-label="Open decisions">
  <h2>Open / next decisions</h2>
  <ul>
    <li>[Decision] · owner: [name] · by: [YYYY-MM-DD]</li>
  </ul>
</section>
```

If a tail block has no entries (e.g. zero bridge items), omit the
entire `<section>` rather than emitting a stub heading.
