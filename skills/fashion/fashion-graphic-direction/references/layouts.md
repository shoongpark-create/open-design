# Graphic Direction Layouts

Two rhythms. Pick **one** in Step 2 and paste into
`<main id="graphic-direction">`. Always finish with the tail blocks.

---

## Rhythm A — Theme stack (default, 3–6 themes)

Themes stack vertically; each theme card is full-width with header strip,
thesis, surface tags, and a 4–6 tile cluster.

```html
<header class="gd-header">
  <div class="gd-meta">
    <span class="season">[REPLACE 27SS]</span>
    <span class="brand">[REPLACE WACKYWILLY]</span>
    <span class="status">[REPLACE v1]</span>
    <span class="date">[REPLACE 2026-04-29]</span>
  </div>
  <h1 class="thesis">[REPLACE one-sentence direction thesis]</h1>
  <p class="thesis-body">[REPLACE one paragraph connecting this graphic posture to the concept board territory]</p>
</header>

<section class="theme-stack" aria-label="Themes">
  <article class="theme-card" data-theme-index="01">
    <header class="theme-header">
      <h2 class="theme-name">[REPLACE 빈티지 카툰 그래픽 티셔츠]</h2>
      <p class="theme-thesis">[REPLACE 1-line thesis]</p>
      <ul class="surface-tags" aria-label="Application surfaces">
        <li class="tag">tee print</li>
        <li class="tag">sweat print</li>
        <li class="tag">patch</li>
      </ul>
      <div class="theme-meta">
        <span class="carry">[carryover: new]</span>
        <span class="studio">[studio: TBD]</span>
      </div>
    </header>
    <div class="theme-cluster">
      <figure class="theme-tile">
        <div class="image-frame" data-fallback="Generate images/theme-01-cartoon-01.png with imagegen"><img src="images/theme-01-cartoon-01.png" alt="cartoon 01" /></div>
        <figcaption>[REPLACE 1-line note]</figcaption>
      </figure>
      <!-- repeat 4–6 theme-tiles -->
    </div>
  </article>

  <!-- repeat .theme-card per theme -->
</section>
```

---

## Rhythm B — Theme grid (5–8 themes, denser)

Theme cards in a 2-column grid, each card more compact, cluster shrunk
to 4 tiles. Use when the direction carries 5+ themes and stacking would
make the page too tall.

```html
<section class="theme-grid" aria-label="Themes">
  <article class="theme-card theme-card--compact" data-theme-index="01">
    <header class="theme-header">
      <h2 class="theme-name">[REPLACE]</h2>
      <p class="theme-thesis">[REPLACE]</p>
      <ul class="surface-tags"><!-- tag chips --></ul>
    </header>
    <div class="theme-cluster theme-cluster--quad"><!-- 4 theme-tiles --></div>
  </article>
  <!-- repeat 5–8 cards -->
</section>
```

---

## Symbol & Wordmark block (optional)

Insert after the theme block when Step 4 was triggered. Skip entirely
when the season carries no new symbol / wordmark treatment.

```html
<section class="symbol-wordmark" aria-label="Symbol & Wordmark">
  <h2>Symbol & Wordmark — [REPLACE treatment, e.g. Jelly]</h2>
  <p>[REPLACE one-line lockup thesis]</p>

  <div class="sw-grid">
    <div class="sw-cluster">
      <h3>Symbol study</h3>
      <div class="sw-tiles">
        <figure><div class="image-frame" data-fallback="Generate images/symbol-01.png with imagegen"><img src="images/symbol-01.png" alt="symbol 01" /></div></figure>
        <!-- 3–6 tiles -->
      </div>
    </div>
    <div class="sw-cluster">
      <h3>Wordmark study</h3>
      <div class="sw-tiles">
        <figure><div class="image-frame" data-fallback="Generate images/wordmark-01.png with imagegen"><img src="images/wordmark-01.png" alt="wordmark 01" /></div></figure>
      </div>
    </div>
    <div class="sw-cluster">
      <h3>Lockup variants</h3>
      <div class="sw-tiles">
        <figure><div class="image-frame" data-fallback="Generate images/lockup-01.png with imagegen"><img src="images/lockup-01.png" alt="lockup 01" /></div></figure>
      </div>
    </div>
  </div>
</section>
```

---

## Always-on tail blocks

```html
<section class="surface-matrix" aria-label="Application surface matrix">
  <h2>Theme × Surface matrix</h2>
  <table>
    <thead><tr><th>Theme</th><th>Tee</th><th>Sweat</th><th>Embroidery</th><th>All-over</th><th>Sticker</th><th>Point label</th><th>Woven tag</th><th>Hardware</th></tr></thead>
    <tbody>
      <tr><td>[Theme 01]</td><td>●</td><td>●</td><td></td><td></td><td>●</td><td></td><td></td><td></td></tr>
      <!-- one row per theme; mark with ● or empty -->
    </tbody>
  </table>
</section>

<section class="anti-direction" aria-label="Anti-direction">
  <h2>Anti-direction</h2>
  <ul>
    <li>[REPLACE — e.g. no Y2K chrome glitter]</li>
    <li>[REPLACE — e.g. no AI-slop sparkle background]</li>
    <li>[REPLACE — e.g. no generic emoji icons]</li>
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
