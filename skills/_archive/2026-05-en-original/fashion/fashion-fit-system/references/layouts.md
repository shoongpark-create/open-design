# Fit System Layouts

Three rhythms. Pick **one** in Step 2 and paste into
`<main id="fit-system">`.

---

## Rhythm A — Side-by-side current vs. future (default for first-pass)

```html
<header class="fs-header">
  <div class="fs-meta">
    <span class="brand">[REPLACE WACKYWILLY]</span>
    <span class="version">[REPLACE v2.0]</span>
    <span class="status">[REPLACE locked]</span>
    <span class="date">[REPLACE 2026-04-29]</span>
  </div>
  <h1 class="title">[REPLACE 핏 기준 현황 및 문제점 / 핏 체계 재정비]</h1>
  <p class="thesis">[REPLACE one paragraph: issues being resolved and change direction]</p>
</header>

<div class="fs-grid fs-grid--two-col">
  <section class="fs-state fs-state--current" aria-label="Current state">
    <h2>현재</h2>
    <table class="fit-matrix fit-matrix--current">
      <thead><tr><th rowspan="2">Line</th><th colspan="3">반팔</th><th colspan="3">롱슬리브</th><th colspan="3">스웻</th></tr>
        <tr><th>fit</th><th>fit</th><th>fit</th><th>fit</th><th>fit</th><th>fit</th><th>fit</th><th>fit</th><th>fit</th></tr>
      </thead>
      <tbody>
        <tr><th>UNI</th><td>[REPLACE 세미오버]</td><td>[REPLACE 오버]</td><td>—</td><td>[REPLACE 세미오버]</td><td>[REPLACE 오버]</td><td>—</td><td>[REPLACE 세미오버]</td><td>[REPLACE 오버]</td><td class="flag">[REPLACE 크롭오버]</td></tr>
        <tr><th>WOMEN</th><td>[REPLACE 크롭]</td><td>[REPLACE 세미크롭]</td><td>[REPLACE 레귤러]</td><td>[REPLACE 슬림]</td><td>[REPLACE 스탠다드]</td><td>[REPLACE 레귤러]</td><td class="flag">[REPLACE 크롭]</td><td>[REPLACE 레귤러]</td><td>[REPLACE 세미오버]</td></tr>
      </tbody>
    </table>
  </section>

  <section class="fs-state fs-state--future" aria-label="Future state">
    <h2>향후</h2>
    <table class="fit-matrix fit-matrix--future">
      <thead><tr><th rowspan="2">Line</th><th colspan="3">반팔</th><th colspan="3">롱슬리브</th><th colspan="3">스웻</th></tr>
        <tr><th>슬림</th><th>레귤러</th><th>오버</th><th>슬림</th><th>레귤러</th><th>오버</th><th>슬림</th><th>레귤러</th><th>오버</th></tr>
      </thead>
      <tbody>
        <tr><th>UNI</th>
          <td><div class="image-frame" data-fallback="Generate images/uni-short-slim.png with imagegen"><img src="images/uni-short-slim.png" alt="UNI 반팔 슬림" /></div></td>
          <td><div class="image-frame" data-fallback="Generate images/uni-short-regular.png with imagegen"><img src="images/uni-short-regular.png" alt="UNI 반팔 레귤러" /></div></td>
          <td><div class="image-frame" data-fallback="Generate images/uni-short-oversize.png with imagegen"><img src="images/uni-short-oversize.png" alt="UNI 반팔 오버" /></div></td>
          <td><div class="image-frame" data-fallback="Generate images/uni-long-slim.png with imagegen"><img src="images/uni-long-slim.png" alt="UNI 롱 슬림" /></div></td>
          <td><div class="image-frame" data-fallback="Generate images/uni-long-regular.png with imagegen"><img src="images/uni-long-regular.png" alt="UNI 롱 레귤러" /></div></td>
          <td><div class="image-frame" data-fallback="Generate images/uni-long-oversize.png with imagegen"><img src="images/uni-long-oversize.png" alt="UNI 롱 오버" /></div></td>
          <td>—</td>
          <td><div class="image-frame" data-fallback="Generate images/uni-sweat-regular.png with imagegen"><img src="images/uni-sweat-regular.png" alt="UNI 스웻 레귤러" /></div></td>
          <td><div class="image-frame" data-fallback="Generate images/uni-sweat-oversize.png with imagegen"><img src="images/uni-sweat-oversize.png" alt="UNI 스웻 오버" /></div></td>
        </tr>
        <tr><th>WOMEN</th>
          <td><div class="image-frame" data-fallback="Generate images/women-short-slim-baby.png with imagegen"><img src="images/women-short-slim-baby.png" alt="WOMEN 반팔 슬림 베이비" /></div></td>
          <td><div class="image-frame" data-fallback="Generate images/women-short-regular.png with imagegen"><img src="images/women-short-regular.png" alt="WOMEN 반팔 레귤러" /></div></td>
          <td><div class="image-frame" data-fallback="Generate images/women-short-semi-oversize.png with imagegen"><img src="images/women-short-semi-oversize.png" alt="WOMEN 반팔 세미오버" /></div></td>
          <td><div class="image-frame" data-fallback="Generate images/women-long-slim.png with imagegen"><img src="images/women-long-slim.png" alt="WOMEN 롱 슬림" /></div></td>
          <td><div class="image-frame" data-fallback="Generate images/women-long-regular.png with imagegen"><img src="images/women-long-regular.png" alt="WOMEN 롱 레귤러" /></div></td>
          <td><div class="image-frame" data-fallback="Generate images/women-long-semi-oversize.png with imagegen"><img src="images/women-long-semi-oversize.png" alt="WOMEN 롱 세미오버" /></div></td>
          <td>—</td>
          <td><div class="image-frame" data-fallback="Generate images/women-sweat-regular.png with imagegen"><img src="images/women-sweat-regular.png" alt="WOMEN 스웻 레귤러" /></div></td>
          <td><div class="image-frame" data-fallback="Generate images/women-sweat-semi-oversize.png with imagegen"><img src="images/women-sweat-semi-oversize.png" alt="WOMEN 스웻 세미오버" /></div></td>
        </tr>
      </tbody>
    </table>
  </section>
</div>
```

---

## Rhythm B — Matrix-only future state

For revisions after the system is locked. Drop the current-state
column and show only the future matrix at full width.

---

## Rhythm C — Per-category sheets

For very wide coverage (10+ categories). One section per category,
fit ladder shown as a horizontal worn-figure strip.

```html
<section class="category-section" data-category="short-sleeve">
  <h2>반팔</h2>
  <div class="fit-strip">
    <figure class="fit-fig">
      <div class="image-frame"><img src="images/uni-short-slim.png" alt="" /></div>
      <figcaption>슬림 · UNI</figcaption>
    </figure>
    <!-- fit ladder figures across line × fit -->
  </div>
</section>
```

---

## Always-on tail blocks

```html
<section class="naming-rules" aria-label="Naming rules">
  <h2>Naming rules · 통합 기준</h2>
  <ul>
    <li><strong>Body length</strong> — 크롭 / 레귤러 / 롱 (사용 금지: 스탠다드)</li>
    <li><strong>Sleeve length</strong> — 반팔 / 롱슬리브 / 라글란</li>
    <li><strong>Banned synonym</strong> — "크롭핏" → "슬림 베이비핏"으로 통합</li>
    <li><strong>Supplier equivalent</strong> — 우먼 "슬림 베이비" = 공급사 "Tight Crop"; 발주서에 두 명칭 병기</li>
    <!-- 5–10 unified rules -->
  </ul>
</section>

<section class="open-decisions" aria-label="Open decisions">
  <h2>Open / next decisions</h2>
  <ul>
    <li>[Decision] · owner: [name] · by: [YYYY-MM-DD]</li>
  </ul>
</section>
```
