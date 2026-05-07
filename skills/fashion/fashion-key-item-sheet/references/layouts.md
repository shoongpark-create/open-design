# Key Item Sheet Layouts

Two compositions. Pick **one** in Step 2 and paste into
`<main id="key-item-sheet">`.

Both put the worn-reference collage on the **left** and the slice
clusters on the **right**. The split rests on the studio convention from
the WACKYWILLY 27SS deck — left = wear, right = build.

The classes used here (`.kis-grid`, `.worn-collage`, `.slice-cluster`,
etc.) are pre-defined in `assets/template.html`. Do not invent new class
names.

---

## Composition A — 50/50 split (default, 3 slices or fewer)

Left half: 5–6 worn figures collaged. Right half: 2–3 stacked slice
clusters, each with a label and 3–4 tiles.

```html
<header class="kis-header">
  <div class="kis-meta">
    <span class="season">[REPLACE 27SS]</span>
    <span class="family">[REPLACE Outer]</span>
    <span class="period">[REPLACE S1]</span>
    <span class="status">[REPLACE v1]</span>
  </div>
  <h1 class="item-name">[REPLACE 코튼 집업 점퍼]</h1>
  <p class="thesis">[REPLACE one-paragraph item thesis: why this item, what it replaces, target colorway count, target lot]</p>
</header>

<div class="kis-grid kis-grid--50-50">
  <section class="worn-collage" aria-label="Worn references">
    <h2 class="cluster-title">Worn reference</h2>
    <div class="worn-collage__grid">
      <figure class="worn-tile">
        <div class="image-frame" data-fallback="Generate images/worn-01.png with imagegen"><img src="images/worn-01.png" alt="Worn 01" /></div>
        <figcaption>[REPLACE 1-line takeaway]</figcaption>
      </figure>
      <!-- repeat 5–6 worn-tiles total -->
    </div>
  </section>

  <section class="slice-stack" aria-label="Slices">
    <article class="slice-cluster" data-slice="washing">
      <h3 class="cluster-title">Washing</h3>
      <div class="slice-cluster__grid">
        <figure class="slice-tile">
          <div class="image-frame" data-fallback="Generate images/slice-washing-01.png with imagegen"><img src="images/slice-washing-01.png" alt="Washing 01" /></div>
          <figcaption>[REPLACE 1-line note]</figcaption>
        </figure>
        <!-- repeat 3–4 slice-tiles -->
      </div>
    </article>

    <article class="slice-cluster" data-slice="pattern">
      <h3 class="cluster-title">Pattern</h3>
      <div class="slice-cluster__grid"><!-- 3–4 slice-tiles --></div>
    </article>

    <article class="slice-cluster" data-slice="artwork">
      <h3 class="cluster-title">Artwork</h3>
      <div class="slice-cluster__grid"><!-- 3–4 slice-tiles --></div>
    </article>
  </section>
</div>
```

---

## Composition B — 40/60 split (4 slices, hero item)

Use when the chosen slice subset is 4 (e.g. knits with Color · Pattern ·
Detail · Fabric). Left becomes a tighter 5-figure column; right becomes
a 2x2 slice grid.

```html
<div class="kis-grid kis-grid--40-60">
  <section class="worn-collage worn-collage--column" aria-label="Worn references">
    <h2 class="cluster-title">Worn reference</h2>
    <div class="worn-collage__grid worn-collage__grid--column">
      <figure class="worn-tile"><!-- ... --></figure>
      <!-- 5 worn-tiles in a single column -->
    </div>
  </section>

  <section class="slice-grid-2x2" aria-label="Slices">
    <article class="slice-cluster" data-slice="color">
      <h3 class="cluster-title">Color</h3>
      <div class="slice-cluster__grid"><!-- 3–4 slice-tiles --></div>
    </article>
    <article class="slice-cluster" data-slice="pattern">
      <h3 class="cluster-title">Pattern</h3>
      <div class="slice-cluster__grid"></div>
    </article>
    <article class="slice-cluster" data-slice="detail">
      <h3 class="cluster-title">Detail</h3>
      <div class="slice-cluster__grid"></div>
    </article>
    <article class="slice-cluster" data-slice="fabric">
      <h3 class="cluster-title">Fabric</h3>
      <div class="slice-cluster__grid"></div>
    </article>
  </section>
</div>
```

---

## Always-on tail blocks

Below either composition. Required by the checklist.

```html
<section class="merch-note" aria-label="Production / merch note">
  <h2>Production / merch note</h2>
  <dl>
    <dt>Target colorways</dt><dd>[REPLACE 4 — Light Grey Mel / Navy / Pop Pink / Retro Green]</dd>
    <dt>Target lot</dt><dd>[REPLACE 1,200 / SKU]</dd>
    <dt>Signature detail to keep</dt><dd>[REPLACE chest embroidery patch]</dd>
    <dt>Expected supplier</dt><dd>[REPLACE]</dd>
    <dt>Proto deadline</dt><dd>[REPLACE YYYY-MM-DD]</dd>
  </dl>
</section>

<section class="open-decisions" aria-label="Open decisions">
  <h2>Open / next decisions</h2>
  <ul>
    <li>[Decision] · owner: [name] · by: [YYYY-MM-DD]</li>
  </ul>
</section>
```
