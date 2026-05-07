# Fabric Board Layouts

Three layouts. Pick **one** in Step 2 and paste into
`<main id="fabric-board">`. Always finish with the lab-dip status table
and open decisions tail blocks.

---

## Layout A — Two-column line split (default)

UNI block on the left, WOMEN block on the right, functional block
spanning full width below. Use when both lines are roughly balanced.

```html
<header class="fb-header">
  <div class="fb-meta">
    <span class="season">[REPLACE 27SS]</span>
    <span class="lines">[REPLACE UNI · WOMEN]</span>
    <span class="status">[REPLACE v1]</span>
    <span class="date">[REPLACE 2026-04-29]</span>
  </div>
  <h1 class="thesis">[REPLACE one-paragraph fabric posture, 1–3 sentences]</h1>
</header>

<section class="fb-functional" aria-label="Functional fabrics">
  <header class="block-header">
    <h2>Functional fabrics</h2>
    <p>[REPLACE one-line: function-first communication policy this season]</p>
  </header>
  <div class="fabric-grid fabric-grid--functional">
    <article class="fabric-card fabric-card--functional" data-fabric="sorona-cool">
      <h3 class="fabric-name">[REPLACE 소로나쿨 싱글저지]</h3>
      <ul class="fabric-meta">
        <li><span>Function</span>[REPLACE]</li>
        <li><span>Brand</span>[Sorona]</li>
        <li><span>Use</span>[REPLACE]</li>
      </ul>
      <div class="fabric-imagery">
        <figure><div class="image-frame" data-fallback="Generate images/func-01-sorona-cool.png with imagegen"><img src="images/func-01-sorona-cool.png" alt="Sorona Cool swatch" /></div><figcaption>swatch</figcaption></figure>
        <figure><div class="image-frame" data-fallback="Generate images/func-01-sorona-cool-hangtag.png with imagegen"><img src="images/func-01-sorona-cool-hangtag.png" alt="Sorona Cool hangtag" /></div><figcaption>hangtag</figcaption></figure>
      </div>
    </article>
    <!-- repeat 2–4 fabric-card--functional -->
  </div>
</section>

<div class="fb-line-split">
  <section class="fb-line" data-line="uni" aria-label="UNI structural fabrics">
    <header class="block-header"><h2>UNI · Structural</h2></header>
    <div class="fabric-grid fabric-grid--structural">
      <article class="fabric-card" data-fabric="waffle">
        <h3 class="fabric-name">[REPLACE 와플 저지]</h3>
        <ul class="fabric-meta">
          <li><span>Hand</span>[REPLACE]</li>
          <li><span>Knit</span>[waffle]</li>
          <li><span>Use</span>[REPLACE]</li>
        </ul>
        <div class="fabric-imagery">
          <figure><div class="image-frame" data-fallback="Generate images/uni-fabric-01-waffle.png with imagegen"><img src="images/uni-fabric-01-waffle.png" alt="waffle swatch" /></div><figcaption>swatch</figcaption></figure>
          <figure><div class="image-frame" data-fallback="Generate images/uni-fabric-01-waffle-worn.png with imagegen"><img src="images/uni-fabric-01-waffle-worn.png" alt="waffle worn" /></div><figcaption>worn</figcaption></figure>
        </div>
      </article>
      <!-- repeat 4–6 -->
    </div>
  </section>

  <section class="fb-line" data-line="women" aria-label="WOMEN structural fabrics">
    <header class="block-header"><h2>WOMEN · Structural</h2></header>
    <div class="fabric-grid fabric-grid--structural">
      <!-- 4–6 fabric-card -->
    </div>
  </section>
</div>
```

---

## Layout B — Stacked by line

UNI block top, WOMEN block middle, functional block bottom. Use when
the season is line-imbalanced (UNI dominant or WOMEN dominant) and you
want the dominant line first.

Same building blocks as Layout A, but stack UNI / WOMEN sections
vertically and put the functional block at the bottom.

---

## Layout C — Functional-first

Functional block at top with hangtag mocks shown large; UNI + WOMEN
structural blocks below as a two-column split. Use when the season's
value driver is function (heat-tech summer, sustainability capsule).

Reorder: functional block first (full width, mocks larger), then
two-column line split.

---

## Always-on tail blocks

```html
<section class="approval-status" aria-label="Lab-dip / approval status">
  <h2>Lab-dip / approval status</h2>
  <table>
    <thead><tr><th>Fabric</th><th>Status</th><th>Supplier</th><th>Lead time</th><th>Note</th></tr></thead>
    <tbody>
      <tr><td>[Fabric name]</td><td>[for-info / lab-dip / bulk / approved]</td><td>[supplier]</td><td>[lead]</td><td>[note]</td></tr>
      <!-- one row per fabric -->
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
