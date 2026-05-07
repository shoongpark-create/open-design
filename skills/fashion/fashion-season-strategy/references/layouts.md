# Season Strategy Layouts

Three rhythms. Pick **one** and paste into `<main id="season-strategy">`.

---

## Rhythm A — Pillars row + heroes row (default)

```html
<header class="ss-header">
  <div class="ss-meta">
    <span class="season">[REPLACE 27SS]</span>
    <span class="line">[REPLACE ACC]</span>
    <span class="status">[REPLACE locked]</span>
    <span class="date">[REPLACE 2026-04-29]</span>
  </div>
  <h1 class="title">[REPLACE 27SS 전략 3축]</h1>
</header>

<section class="pillars-row" aria-label="Strategic pillars">
  <article class="pillar-card" data-pillar="01">
    <span class="pillar-tag">전략 축 01</span>
    <h2 class="pillar-title">[REPLACE 시장 대응력 강화]</h2>
    <p class="pillar-desc">[REPLACE 27SS QR 30%로 확대 / In-Season 기획(Spot 대응) 13스타일 목표 : 가방/모자/기타품목]</p>
    <div class="pillar-chips">
      <span class="chip chip--dark">[REPLACE In-Season 기획]</span>
      <span class="chip">[REPLACE 주간 QR]</span>
    </div>
  </article>

  <article class="pillar-card" data-pillar="02">
    <span class="pillar-tag">전략 축 02</span>
    <h2 class="pillar-title">[REPLACE 캐리오버 상품 리뉴얼]</h2>
    <p class="pillar-desc">[REPLACE]</p>
    <div class="pillar-chips">
      <span class="chip">[REPLACE 디자인 리뉴얼]</span>
      <span class="chip">[REPLACE 트렌드 반영]</span>
    </div>
  </article>

  <article class="pillar-card" data-pillar="03">
    <span class="pillar-tag">전략 축 03</span>
    <h2 class="pillar-title">[REPLACE 판기별 IMC 히어로 육성]</h2>
    <p class="pillar-desc">[REPLACE]</p>
    <div class="pillar-chips">
      <span class="chip chip--accent">[REPLACE 히어로 집중]</span>
    </div>
  </article>
</section>

<header class="block-header"><h2>[REPLACE 27SS 시즌 주력 아이템]</h2></header>

<section class="heroes-row" aria-label="Hero categories">
  <article class="hero-card" data-category="bag">
    <h3 class="hero-name">가방</h3>
    <p class="hero-line">[REPLACE 신학기 리뉴얼 + 데일리백 구성 강화]</p>
    <ul class="hero-tactics">
      <li>[REPLACE 신학기 백팩 디자인 업그레이드 (용량, 스타일 디자인) → 라운드 지퍼형]</li>
      <li>[REPLACE 데일리 가방 구성을 통한 소비 타겟 확대]</li>
    </ul>
  </article>

  <article class="hero-card" data-category="cap">
    <h3 class="hero-name">모자</h3>
    <p class="hero-line">[REPLACE 뉴 히어로 육성을 통한 평균 LOT 상향화]</p>
    <ul class="hero-tactics">
      <li>[REPLACE]</li>
    </ul>
  </article>

  <article class="hero-card" data-category="shoes">
    <h3 class="hero-name">신발</h3>
    <p class="hero-line">[REPLACE 뉴 키테 + 하절기 샌들/슬라이드 구성]</p>
    <ul class="hero-tactics">
      <li>[REPLACE]</li>
    </ul>
  </article>
</section>
```

---

## Rhythm B — Pillars stack + heroes grid

Pillars on the left as a vertical stack; heroes as a 2x2 grid on the
right. Use when each card carries long copy.

```html
<div class="ss-grid ss-grid--stack-and-grid">
  <section class="pillars-stack" aria-label="Strategic pillars"><!-- 3 pillar-card --></section>
  <section class="heroes-grid" aria-label="Hero categories"><!-- 2x2 hero-card --></section>
</div>
```

---

## Rhythm C — Single-column

For print A4 portrait. Pillars then heroes stacked vertically.

```html
<section class="pillars-stack pillars-stack--print"><!-- 3 pillar-card --></section>
<section class="heroes-stack heroes-stack--print"><!-- N hero-card --></section>
```

---

## Always-on tail blocks

```html
<section class="alignment-table" aria-label="Cross-functional alignment">
  <h2>Pillar × Team</h2>
  <table>
    <thead><tr><th>Pillar</th><th>Design</th><th>MD</th><th>Marketing</th><th>Supply</th></tr></thead>
    <tbody>
      <tr><td>[Pillar 01]</td><td>○</td><td>●</td><td>○</td><td></td></tr>
      <!-- ● = lead, ○ = contributor; one row per pillar -->
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
