# Brand Roadmap Layouts

Three rhythms. Pick **one** in Step 2 and paste into
`<main id="brand-roadmap">`.

The pyramid is built from CSS — no chart library — using a stack of
trapezoid divs and a `clip-path` triangle for the apex.

---

## Rhythm A — Classic 4-tier pyramid (default)

Symmetric pyramid, North Star at apex, Foundation at base, annotation
rail on the left.

```html
<header class="br-header">
  <div class="br-meta">
    <span class="brand">[REPLACE WACKYWILLY]</span>
    <span class="year">[REPLACE FY26]</span>
    <span class="status">[REPLACE locked]</span>
    <span class="date">[REPLACE 2026-04-29]</span>
  </div>
</header>

<div class="br-grid br-grid--rail-and-pyramid">
  <aside class="br-rail" aria-label="Tier rail">
    <div class="rail-row" data-tier="north-star"><span class="rail-label">North Star</span><span class="rail-note">[REPLACE 와키윌리의 궁극적 지향점 / 고객이 느끼는 브랜드의 "추상적이자 최종적" 모습]</span></div>
    <div class="rail-row" data-tier="principles"><span class="rail-label">Principles</span><span class="rail-note">[REPLACE 로드맵 실현을 위한 와키윌리의 "행동원칙"]</span></div>
    <div class="rail-row" data-tier="characters"><span class="rail-label">Characters</span><span class="rail-note">[REPLACE 고객들에게 비춰지는 와키윌리의 "구체적인" 모습]</span></div>
    <div class="rail-row" data-tier="foundation"><span class="rail-label">Foundation</span><span class="rail-note">[REPLACE 와키윌리의 "기초이자 시작"이었던 키워드]</span></div>
  </aside>

  <section class="br-pyramid" aria-label="Brand pyramid">
    <div class="tier tier--apex" data-tier="north-star">
      <div class="apex-callout">
        <p>[REPLACE 상품력으로 신뢰를]</p>
        <p>[REPLACE 트렌드로 감도를]</p>
        <p>[REPLACE IP로 독창성을]</p>
        <p>[REPLACE 고객에게 즐거움을]</p>
      </div>
    </div>
    <div class="tier tier--principles" data-tier="principles">
      <div class="cell">[REPLACE 팬덤]</div>
      <div class="cell">[REPLACE 존중]</div>
      <div class="cell">[REPLACE 새로운시도]</div>
      <div class="cell">[REPLACE 트렌드리딩]</div>
    </div>
    <div class="tier tier--characters" data-tier="characters">
      <div class="cell">[REPLACE 재미있는]</div>
      <div class="cell">[REPLACE 따라하고싶은]</div>
      <div class="cell">[REPLACE 신뢰할수있는]</div>
      <div class="cell">[REPLACE K-아이돌]</div>
      <div class="cell cell--side">[REPLACE 캐릭터]</div>
      <div class="cell cell--side">[REPLACE 색감좋은]</div>
    </div>
    <div class="tier tier--foundation" data-tier="foundation">
      <div class="circle">[REPLACE 아이피]</div>
      <div class="circle">[REPLACE 프로덕트]</div>
      <div class="circle">[REPLACE 라이프스타일]</div>
      <div class="circle">[REPLACE 플레이]</div>
    </div>
  </section>
</div>
```

---

## Rhythm B — Stacked-blocks pyramid

Wider base, distinct blocks per tier; use when each tier carries 5+
items.

```html
<section class="br-pyramid br-pyramid--blocks" aria-label="Brand pyramid">
  <div class="block-tier" data-tier="north-star"><h3>North Star</h3><div class="block-grid"><!-- 1–4 cells --></div></div>
  <div class="block-tier" data-tier="principles"><h3>Principles</h3><div class="block-grid"><!-- 3–6 cells --></div></div>
  <div class="block-tier" data-tier="characters"><h3>Characters</h3><div class="block-grid"><!-- 4–6 cells --></div></div>
  <div class="block-tier" data-tier="foundation"><h3>Foundation</h3><div class="block-grid"><!-- 3–5 cells --></div></div>
</section>
```

---

## Rhythm C — Annotated frame

Pyramid on the right, full per-tier annotation panels on the left.
Use for board meetings.

```html
<div class="br-grid br-grid--annotation-and-pyramid">
  <section class="annotation-stack">
    <article data-tier="north-star"><h3>North Star</h3><p>[REPLACE — full paragraph]</p></article>
    <article data-tier="principles"><h3>Principles</h3><p>[REPLACE — full paragraph]</p></article>
    <article data-tier="characters"><h3>Characters</h3><p>[REPLACE — full paragraph]</p></article>
    <article data-tier="foundation"><h3>Foundation</h3><p>[REPLACE — full paragraph]</p></article>
  </section>
  <section class="br-pyramid"><!-- same pyramid as Rhythm A --></section>
</div>
```

---

## Always-on tail blocks

```html
<section class="cross-reference" aria-label="Cross-reference">
  <h2>Where this roadmap shows up</h2>
  <ul>
    <li><strong>Positioning map</strong> — Characters tier informs the map's strategic intent</li>
    <li><strong>Season strategy</strong> — Principles tier governs the 3 strategic pillars</li>
    <li><strong>Season concept board</strong> — Foundation keywords seed the territory</li>
    <li><strong>Graphic direction</strong> — Characters adjectives inform tone selection</li>
  </ul>
</section>

<section class="revision-log" aria-label="Revision log">
  <h2>Revision log</h2>
  <table>
    <thead><tr><th>Version</th><th>Date</th><th>Change</th></tr></thead>
    <tbody>
      <tr><td>v[N]</td><td>[YYYY-MM-DD]</td><td>[1-line change note]</td></tr>
    </tbody>
  </table>
</section>
```
