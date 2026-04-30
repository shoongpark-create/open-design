# Fashion Concept Board Layouts

Paste these sections into `<main id="concept-board">` in
`assets/template.html`. Keep class names unchanged; edit copy, image paths,
and table rows only. The order is load-bearing — concept boards must
sequence emotion → evidence → exploration → discipline.

## 1. Cover

```html
<section class="section cover-grid" data-od-id="cover">
  <div>
    <p class="kicker">[SEASON] · CONCEPT BOARD</p>
    <h1 class="display">[Season Title]</h1>
    <p class="thesis">[One-sentence territory thesis: "27SS lives in the humid 6am commute, with a dry industrial dusty pop."]</p>
    <p class="meta cover-meta">[Brand] · [Author] · [Date] · [Status: v1 / v2 / locked]</p>
  </div>
  <figure class="image-frame cover-image" data-fallback="Generate images/cover-mood.png with imagegen">
    <img src="images/cover-mood.png" alt="[Cover mood image]" />
  </figure>
</section>
```

## 2. Keyword Cloud

Use class `kw-loud / kw-mid / kw-soft` to weight emphasis. Loud = season's
load-bearing keyword.

```html
<section class="section keyword-cloud" data-od-id="keywords">
  <p class="kicker">Season keywords</p>
  <div class="kw-grid">
    <span class="kw kw-loud">[Keyword 1]</span>
    <span class="kw kw-loud">[Keyword 2]</span>
    <span class="kw kw-mid">[Keyword 3]</span>
    <span class="kw kw-mid">[Keyword 4]</span>
    <span class="kw kw-soft">[Keyword 5]</span>
    <span class="kw kw-soft">[Keyword 6]</span>
    <span class="kw kw-soft">[Keyword 7]</span>
  </div>
</section>
```

## 3. Thesis Statement

```html
<section class="section thesis-block" data-od-id="thesis">
  <div>
    <p class="kicker">Territory</p>
    <h2 class="h2">[The territory headline — one editorial sentence, not corporate.]</h2>
  </div>
  <div class="thesis-copy">
    <p class="lead">[Paragraph 1: who is the customer this season, where are they, what moment is this collection living inside.]</p>
    <p>[Paragraph 2: the primary tonality and what the contrast/tension tonality is, in plain language.]</p>
    <p>[Paragraph 3: why now — the cultural / commercial / brand-internal reason this territory makes sense for 27SS specifically.]</p>
  </div>
</section>
```

## 4. Mood Grid (12 images, role-tagged)

Use `data-image-role` to tag each image as scene / gesture / texture / light
/ garment-fragment / anti.

```html
<section class="section" data-od-id="mood-grid">
  <p class="kicker">Mood territory</p>
  <h2 class="h2" style="margin-bottom: 28px;">12 images that map the season's mood — not 12 outfit previews.</h2>
  <div class="mood-grid">
    <figure class="mood-card" data-image-role="scene"><div class="image-frame" data-fallback="Generate images/mood-01.png with imagegen"><img src="images/mood-01.png" alt="[scene]" /></div><figcaption><span class="role-tag">scene</span><p>[One line: where, when, weather.]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="scene"><div class="image-frame" data-fallback="Generate images/mood-02.png with imagegen"><img src="images/mood-02.png" alt="[scene]" /></div><figcaption><span class="role-tag">scene</span><p>[One line.]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="gesture"><div class="image-frame" data-fallback="Generate images/mood-03.png with imagegen"><img src="images/mood-03.png" alt="[gesture]" /></div><figcaption><span class="role-tag">gesture</span><p>[One line.]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="gesture"><div class="image-frame" data-fallback="Generate images/mood-04.png with imagegen"><img src="images/mood-04.png" alt="[gesture]" /></div><figcaption><span class="role-tag">gesture</span><p>[One line.]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="texture"><div class="image-frame" data-fallback="Generate images/mood-05.png with imagegen"><img src="images/mood-05.png" alt="[texture]" /></div><figcaption><span class="role-tag">texture</span><p>[One line.]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="texture"><div class="image-frame" data-fallback="Generate images/mood-06.png with imagegen"><img src="images/mood-06.png" alt="[texture]" /></div><figcaption><span class="role-tag">texture</span><p>[One line.]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="light"><div class="image-frame" data-fallback="Generate images/mood-07.png with imagegen"><img src="images/mood-07.png" alt="[light]" /></div><figcaption><span class="role-tag">light</span><p>[One line.]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="light"><div class="image-frame" data-fallback="Generate images/mood-08.png with imagegen"><img src="images/mood-08.png" alt="[light]" /></div><figcaption><span class="role-tag">light</span><p>[One line.]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="texture"><div class="image-frame" data-fallback="Generate images/mood-09.png with imagegen"><img src="images/mood-09.png" alt="[texture]" /></div><figcaption><span class="role-tag">texture</span><p>[One line.]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="garment-fragment"><div class="image-frame" data-fallback="Generate images/mood-10.png with imagegen"><img src="images/mood-10.png" alt="[fragment]" /></div><figcaption><span class="role-tag">fragment</span><p>[One line.]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="garment-fragment"><div class="image-frame" data-fallback="Generate images/mood-11.png with imagegen"><img src="images/mood-11.png" alt="[fragment]" /></div><figcaption><span class="role-tag">fragment</span><p>[One line.]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="gesture"><div class="image-frame" data-fallback="Generate images/mood-12.png with imagegen"><img src="images/mood-12.png" alt="[gesture]" /></div><figcaption><span class="role-tag">gesture</span><p>[One line.]</p></figcaption></figure>
  </div>
</section>
```

## 5. Reference Shelf

```html
<section class="section" data-od-id="references">
  <p class="kicker">Reference shelf</p>
  <h2 class="h2" style="margin-bottom: 28px;">Cultural anchors that prove this territory is not invented.</h2>
  <div class="reference-shelf">
    <article class="reference-card"><span class="meta">[Era / Year]</span><h3 class="ref-title">[Reference name]</h3><p>[One sentence on why this anchors the territory.]</p></article>
    <article class="reference-card"><span class="meta">[Era / Year]</span><h3 class="ref-title">[Reference name]</h3><p>[One sentence.]</p></article>
    <article class="reference-card"><span class="meta">[Era / Year]</span><h3 class="ref-title">[Reference name]</h3><p>[One sentence.]</p></article>
    <article class="reference-card"><span class="meta">[Era / Year]</span><h3 class="ref-title">[Reference name]</h3><p>[One sentence.]</p></article>
    <article class="reference-card"><span class="meta">[Era / Year]</span><h3 class="ref-title">[Reference name]</h3><p>[One sentence.]</p></article>
    <article class="reference-card"><span class="meta">[Era / Year]</span><h3 class="ref-title">[Reference name]</h3><p>[One sentence.]</p></article>
  </div>
</section>
```

## 6. Tone Dials

Each dial shows a single axis decision. Use `--dial-pos` (0–100) inline style
to position the marker. 50 = balanced; <50 leans left, >50 leans right.

```html
<section class="section dials" data-od-id="tone-dials">
  <p class="kicker">Tone dials</p>
  <h2 class="h2" style="margin-bottom: 28px;">Where this season sits on the axes we agreed on.</h2>
  <div class="dial-list">
    <div class="dial" style="--dial-pos: 28;">
      <div class="dial-axis"><span class="meta dial-left">muted</span><span class="meta dial-right">saturated</span></div>
      <div class="dial-track"><div class="dial-marker"></div></div>
      <p class="dial-note">[One line: why we sit here.]</p>
    </div>
    <div class="dial" style="--dial-pos: 65;">
      <div class="dial-axis"><span class="meta dial-left">structured</span><span class="meta dial-right">fluid</span></div>
      <div class="dial-track"><div class="dial-marker"></div></div>
      <p class="dial-note">[One line.]</p>
    </div>
    <div class="dial" style="--dial-pos: 42;">
      <div class="dial-axis"><span class="meta dial-left">quiet</span><span class="meta dial-right">loud</span></div>
      <div class="dial-track"><div class="dial-marker"></div></div>
      <p class="dial-note">[One line.]</p>
    </div>
    <div class="dial" style="--dial-pos: 30;">
      <div class="dial-axis"><span class="meta dial-left">retro</span><span class="meta dial-right">contemporary</span></div>
      <div class="dial-track"><div class="dial-marker"></div></div>
      <p class="dial-note">[One line.]</p>
    </div>
    <div class="dial" style="--dial-pos: 70;">
      <div class="dial-axis"><span class="meta dial-left">romantic</span><span class="meta dial-right">industrial</span></div>
      <div class="dial-track"><div class="dial-marker"></div></div>
      <p class="dial-note">[One line.]</p>
    </div>
  </div>
</section>
```

## 7. Color Seeds

```html
<section class="section seed-block" data-od-id="color-seeds">
  <div>
    <p class="kicker">Color seeds</p>
    <h2 class="h2">Exploratory colors — not the locked palette.</h2>
    <p class="lead" style="margin-top: 14px;">Final palette ships in fashion-color-story. Here we declare what we are watching.</p>
  </div>
  <div class="seed-chips">
    <div class="seed-chip"><div class="swatch" style="background:[HEX];"></div><div class="seed-meta"><span class="seed-name">[emotional name]</span><span class="meta">[material context]</span></div></div>
    <div class="seed-chip"><div class="swatch" style="background:[HEX];"></div><div class="seed-meta"><span class="seed-name">[emotional name]</span><span class="meta">[material context]</span></div></div>
    <div class="seed-chip"><div class="swatch" style="background:[HEX];"></div><div class="seed-meta"><span class="seed-name">[emotional name]</span><span class="meta">[material context]</span></div></div>
    <div class="seed-chip"><div class="swatch" style="background:[HEX];"></div><div class="seed-meta"><span class="seed-name">[emotional name]</span><span class="meta">[material context]</span></div></div>
    <div class="seed-chip"><div class="swatch" style="background:[HEX];"></div><div class="seed-meta"><span class="seed-name">[emotional name]</span><span class="meta">[material context]</span></div></div>
    <div class="seed-chip"><div class="swatch" style="background:[HEX];"></div><div class="seed-meta"><span class="seed-name">[emotional name]</span><span class="meta">[material context]</span></div></div>
  </div>
</section>
```

## 8. Material Seeds

```html
<section class="section seed-block" data-od-id="material-seeds">
  <div>
    <p class="kicker">Material seeds</p>
    <h2 class="h2">Fabric intentions — vendor not yet locked.</h2>
  </div>
  <ul class="seed-list">
    <li><span class="seed-name">[Fabric intention]</span><span class="seed-detail">[hand-feel / drape / finish — not vendor-locked]</span></li>
    <li><span class="seed-name">[Fabric intention]</span><span class="seed-detail">[hand-feel / drape / finish]</span></li>
    <li><span class="seed-name">[Fabric intention]</span><span class="seed-detail">[hand-feel / drape / finish]</span></li>
    <li><span class="seed-name">[Fabric intention]</span><span class="seed-detail">[hand-feel / drape / finish]</span></li>
    <li><span class="seed-name">[Fabric intention]</span><span class="seed-detail">[hand-feel / drape / finish]</span></li>
    <li><span class="seed-name">[Fabric intention]</span><span class="seed-detail">[hand-feel / drape / finish]</span></li>
  </ul>
</section>
```

## 9. Silhouette Seeds

```html
<section class="section seed-block" data-od-id="silhouette-seeds">
  <div>
    <p class="kicker">Silhouette seeds</p>
    <h2 class="h2">Silhouette directions, pinned to category.</h2>
  </div>
  <ul class="seed-list">
    <li><span class="seed-name">Shirts</span><span class="seed-detail">[silhouette keyword — relaxed boxy with shoulder definition]</span></li>
    <li><span class="seed-name">Outer</span><span class="seed-detail">[silhouette keyword]</span></li>
    <li><span class="seed-name">Pants</span><span class="seed-detail">[silhouette keyword]</span></li>
    <li><span class="seed-name">Skirts / Dresses</span><span class="seed-detail">[silhouette keyword]</span></li>
    <li><span class="seed-name">Knit</span><span class="seed-detail">[silhouette keyword]</span></li>
    <li><span class="seed-name">[Other category]</span><span class="seed-detail">[silhouette keyword]</span></li>
  </ul>
</section>
```

## 10. Detail Seeds

```html
<section class="section seed-block" data-od-id="detail-seeds">
  <div>
    <p class="kicker">Detail seeds</p>
    <h2 class="h2">Detail moves the season is exploring.</h2>
  </div>
  <ul class="seed-list">
    <li><span class="seed-name">[Detail category]</span><span class="seed-detail">[The move — e.g. horn button instead of plastic]</span></li>
    <li><span class="seed-name">[Detail category]</span><span class="seed-detail">[The move]</span></li>
    <li><span class="seed-name">[Detail category]</span><span class="seed-detail">[The move]</span></li>
    <li><span class="seed-name">[Detail category]</span><span class="seed-detail">[The move]</span></li>
    <li><span class="seed-name">[Detail category]</span><span class="seed-detail">[The move]</span></li>
    <li><span class="seed-name">[Detail category]</span><span class="seed-detail">[The move]</span></li>
  </ul>
</section>
```

## 11. Anti-Territory

```html
<section class="section anti-territory" data-od-id="anti-territory">
  <div>
    <p class="kicker">Anti-territory</p>
    <h2 class="h2">What 27SS is deliberately not.</h2>
  </div>
  <ul class="anti-list">
    <li>[no Y2K nostalgia]</li>
    <li>[no Pinterest cottagecore]</li>
    <li>[no logo-on-front merch tee]</li>
    <li>[no fluorescents]</li>
    <li>[no oversized boxy fit beyond shirt category]</li>
  </ul>
</section>
```

## 12. Open Questions / Next Decisions

```html
<section class="section open-questions" data-od-id="next-decisions">
  <div>
    <p class="kicker">Open / next</p>
    <h2 class="h2">What happens next, and by when.</h2>
  </div>
  <ol class="next-list">
    <li><span class="next-when">[Date]</span><span class="next-what">[Decision — e.g. lock color palette in fashion-color-story]</span></li>
    <li><span class="next-when">[Date]</span><span class="next-what">[Decision — e.g. fabric trip to Dongdaemun]</span></li>
    <li><span class="next-when">[Date]</span><span class="next-what">[Decision — e.g. first sample brief draft]</span></li>
    <li><span class="next-when">[Date]</span><span class="next-what">[Decision]</span></li>
  </ol>
</section>
```
