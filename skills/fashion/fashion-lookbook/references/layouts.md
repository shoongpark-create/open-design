# Fashion Lookbook Layouts

Paste these sections into `<main id="lookbook">` in `assets/template.html`.
Keep class names unchanged; edit copy, image paths, and table rows only.

## 1. Cover

```html
<section class="section hero-grid" data-od-id="cover">
  <div>
    <p class="kicker">[SEASON] · [COLLECTION TYPE]</p>
    <h1 class="display">[Collection Name]</h1>
    <p class="lead" style="margin-top: 22px;">[One-sentence seasonal thesis: audience, silhouette, material mood, and why now.]</p>
    <p class="meta" style="margin-top: 28px;">[Drop / Date] · [Market] · [Look count] looks</p>
  </div>
  <figure class="image-frame cover-image" data-fallback="Generate images/cover-look.png with imagegen">
    <img src="images/cover-look.png" alt="[Collection hero look]" />
  </figure>
</section>
```

## 2. Story Spread

```html
<section class="section story-grid" data-od-id="story">
  <div>
    <p class="kicker">Collection story</p>
    <h2 class="h2">[Editorial story headline]</h2>
  </div>
  <div class="story-copy">
    <p class="lead">[Explain the consumer moment, styling attitude, and how the capsule should feel in motion.]</p>
    <p>[Specific paragraph about silhouettes: proportions, fit, lengths, layering logic.]</p>
    <p>[Specific paragraph about materials: fabric hand, texture, finish, climate, care/value cue.]</p>
    <p class="quote">[Short campaign line or buyer-facing quote.]</p>
  </div>
</section>
```

## 3. Six-Look Grid

```html
<section class="section" data-od-id="looks">
  <p class="kicker">Key looks</p>
  <h2 class="h2" style="margin-bottom: 28px;">Six looks that define the capsule</h2>
  <div class="look-grid">
    <article class="look-card" data-od-id="look-01" data-item-family="[SKU family]" data-color="[Color]" data-material="[Material]" data-fit="[Fit]" data-occasion="[Occasion]">
      <figure class="image-frame" data-fallback="Generate images/look-01.png with imagegen"><img src="images/look-01.png" alt="Look 01" /></figure>
      <div class="look-info">
        <div class="look-head"><h3 class="look-title">Look 01</h3><span class="meta">[SKU family]</span></div>
        <p class="look-note">[Garment, color, fabric, fit, occasion, styling note, merchandising role.]</p>
      </div>
    </article>
    <article class="look-card" data-od-id="look-02" data-item-family="[SKU family]" data-color="[Color]" data-material="[Material]" data-fit="[Fit]" data-occasion="[Occasion]">
      <figure class="image-frame" data-fallback="Generate images/look-02.png with imagegen"><img src="images/look-02.png" alt="Look 02" /></figure>
      <div class="look-info">
        <div class="look-head"><h3 class="look-title">Look 02</h3><span class="meta">[SKU family]</span></div>
        <p class="look-note">[Garment, color, fabric, fit, occasion, styling note, merchandising role.]</p>
      </div>
    </article>
    <article class="look-card" data-od-id="look-03" data-item-family="[SKU family]" data-color="[Color]" data-material="[Material]" data-fit="[Fit]" data-occasion="[Occasion]">
      <figure class="image-frame" data-fallback="Generate images/look-03.png with imagegen"><img src="images/look-03.png" alt="Look 03" /></figure>
      <div class="look-info">
        <div class="look-head"><h3 class="look-title">Look 03</h3><span class="meta">[SKU family]</span></div>
        <p class="look-note">[Garment, color, fabric, fit, occasion, styling note, merchandising role.]</p>
      </div>
    </article>
    <article class="look-card" data-od-id="look-04" data-item-family="[SKU family]" data-color="[Color]" data-material="[Material]" data-fit="[Fit]" data-occasion="[Occasion]">
      <figure class="image-frame" data-fallback="Generate images/look-04.png with imagegen"><img src="images/look-04.png" alt="Look 04" /></figure>
      <div class="look-info">
        <div class="look-head"><h3 class="look-title">Look 04</h3><span class="meta">[SKU family]</span></div>
        <p class="look-note">[Garment, color, fabric, fit, occasion, styling note, merchandising role.]</p>
      </div>
    </article>
    <article class="look-card" data-od-id="look-05" data-item-family="[SKU family]" data-color="[Color]" data-material="[Material]" data-fit="[Fit]" data-occasion="[Occasion]">
      <figure class="image-frame" data-fallback="Generate images/look-05.png with imagegen"><img src="images/look-05.png" alt="Look 05" /></figure>
      <div class="look-info">
        <div class="look-head"><h3 class="look-title">Look 05</h3><span class="meta">[SKU family]</span></div>
        <p class="look-note">[Garment, color, fabric, fit, occasion, styling note, merchandising role.]</p>
      </div>
    </article>
    <article class="look-card" data-od-id="look-06" data-item-family="[SKU family]" data-color="[Color]" data-material="[Material]" data-fit="[Fit]" data-occasion="[Occasion]">
      <figure class="image-frame" data-fallback="Generate images/look-06.png with imagegen"><img src="images/look-06.png" alt="Look 06" /></figure>
      <div class="look-info">
        <div class="look-head"><h3 class="look-title">Look 06</h3><span class="meta">[SKU family]</span></div>
        <p class="look-note">[Garment, color, fabric, fit, occasion, styling note, merchandising role.]</p>
      </div>
    </article>
  </div>
</section>
```

## 4. Editorial Detail Strip

```html
<section class="section detail-strip" data-od-id="fit-styling-proof">
  <div>
    <p class="kicker">Fit / styling proof</p>
    <h2 class="h2">[One fit or styling idea that makes the collection commercially clear.]</h2>
  </div>
  <div class="detail-grid">
    <article class="detail-card"><span class="meta">Fit</span><p>[Waist, shoulder, length, volume, adjustability.]</p></article>
    <article class="detail-card"><span class="meta">Movement</span><p>[How the garment moves, layers, packs, or wears through a day.]</p></article>
    <article class="detail-card"><span class="meta">Accessory</span><p>[Jewelry, belt, shoe, bag, smart frame, or styling add-on opportunity.]</p></article>
  </div>
</section>
```

## 5. Palette And Materials

```html
<section class="section board" data-od-id="palette-materials">
  <div>
    <p class="kicker">Palette / materials</p>
    <h2 class="h2">Color must read like fabric, not a UI theme.</h2>
  </div>
  <div>
    <div class="chips">
      <div class="chip"><div class="swatch" style="background:[HEX];"></div><span class="meta">[Color name]</span></div>
      <div class="chip"><div class="swatch" style="background:[HEX];"></div><span class="meta">[Color name]</span></div>
      <div class="chip"><div class="swatch" style="background:[HEX];"></div><span class="meta">[Color name]</span></div>
      <div class="chip"><div class="swatch" style="background:[HEX];"></div><span class="meta">[Color name]</span></div>
    </div>
    <div class="material-list" style="margin-top: 28px;">
      <div class="material"><span class="meta">[Material]</span><p>[Hand feel, drape, finish, product use.]</p></div>
      <div class="material"><span class="meta">[Material]</span><p>[Hand feel, drape, finish, product use.]</p></div>
      <div class="material"><span class="meta">[Material]</span><p>[Hand feel, drape, finish, product use.]</p></div>
    </div>
  </div>
</section>
```

## 6. Line-Up Table

```html
<section class="section" data-od-id="lineup">
  <p class="kicker">Range plan</p>
  <h2 class="h2" style="margin-bottom: 28px;">Line-up for merchandising review</h2>
  <table class="line-sheet">
    <thead>
      <tr><th>Look</th><th>Hero item</th><th>Color</th><th>Material</th><th>Fit</th><th>Occasion</th><th>Delivery</th><th>Price tier</th><th>Search tags</th></tr>
    </thead>
    <tbody>
      <tr><td>01</td><td>[Item]</td><td>[Color]</td><td>[Material]</td><td>[Fit]</td><td>[Occasion]</td><td>[Drop]</td><td>[Tier]</td><td>[tags]</td></tr>
      <tr><td>02</td><td>[Item]</td><td>[Color]</td><td>[Material]</td><td>[Fit]</td><td>[Occasion]</td><td>[Drop]</td><td>[Tier]</td><td>[tags]</td></tr>
      <tr><td>03</td><td>[Item]</td><td>[Color]</td><td>[Material]</td><td>[Fit]</td><td>[Occasion]</td><td>[Drop]</td><td>[Tier]</td><td>[tags]</td></tr>
      <tr><td>04</td><td>[Item]</td><td>[Color]</td><td>[Material]</td><td>[Fit]</td><td>[Occasion]</td><td>[Drop]</td><td>[Tier]</td><td>[tags]</td></tr>
      <tr><td>05</td><td>[Item]</td><td>[Color]</td><td>[Material]</td><td>[Fit]</td><td>[Occasion]</td><td>[Drop]</td><td>[Tier]</td><td>[tags]</td></tr>
      <tr><td>06</td><td>[Item]</td><td>[Color]</td><td>[Material]</td><td>[Fit]</td><td>[Occasion]</td><td>[Drop]</td><td>[Tier]</td><td>[tags]</td></tr>
    </tbody>
  </table>
</section>
```

## 7. Closing CTA

```html
<section class="section cta" data-od-id="closing">
  <div>
    <p class="kicker">Next step</p>
    <h2 class="h2">[Approval / sample / buyer appointment headline]</h2>
    <p class="lead" style="margin-top: 18px;">[One sentence on what decision this lookbook is asking for.]</p>
  </div>
  <a class="button" href="#">[CTA label]</a>
</section>
```
