# 신규 라인업 레이아웃 (3종)

세 가지 리듬 중 **하나**를 Step 2에서 선택해 `<main id="new-lineup">` 안에 붙여 넣으세요. 항상 꼬리 블록(Category × SKU 표 + 선택적 Bridge Map / Anti-pattern / Open Decisions)을 마지막에 추가합니다.

OpenDesign 환경에서 인라인 코멘트 모드를 사용하려면 주요 섹션에 `data-od-id` 속성을 추가하세요.

---

## 리듬 A — Mosaic + chip strip (기본값)

상단에 이미지 모자이크(4~6개 이미지, 크기 혼합)로 시리즈 무드 노출. 하단 칩 스트립은 카테고리별 SKU 개수를 보여줍니다.

```html
<header class="nl-header" data-od-id="header">
  <div class="nl-meta">
    <span class="season">[REPLACE 27SS]</span>
    <span class="line">[REPLACE WOMEN]</span>
    <span class="status">[REPLACE concept]</span>
    <span class="date">[REPLACE 2026-04-29]</span>
  </div>
  <h1 class="lineup-name">[REPLACE 폴카 도트 시리즈]</h1>
  <p class="thesis">[REPLACE 한 문단 — 앵커 + 의도 + 브릿지 역할 + 무엇을 대체하는지. 예: "레트로 걸리쉬 무드를 와키윌리만의 위트 있는 컬러와 스타일링으로 라인업. 26FW 정상판매율 낮았던 단색 라글란 캐리오버 대체. UNI ↔ WOMEN 브릿지: 티셔츠와 캡에서 도트 사이즈만 조정해 양쪽 라인 모두 전개"]</p>
</header>

<section class="nl-mosaic" aria-label="Series mood mosaic" data-od-id="mosaic">
  <figure class="mosaic-tile mosaic-tile--lg"><div class="image-frame" data-fallback="images/lineup-mood-01.png를 생성하세요"><img src="images/lineup-mood-01.png" alt="mood 01" /></div></figure>
  <figure class="mosaic-tile mosaic-tile--sm"><div class="image-frame" data-fallback="images/lineup-mood-02.png를 생성하세요"><img src="images/lineup-mood-02.png" alt="mood 02" /></div></figure>
  <figure class="mosaic-tile mosaic-tile--sm"><div class="image-frame" data-fallback="images/lineup-mood-03.png를 생성하세요"><img src="images/lineup-mood-03.png" alt="mood 03" /></div></figure>
  <figure class="mosaic-tile mosaic-tile--md"><div class="image-frame" data-fallback="images/lineup-mood-04.png를 생성하세요"><img src="images/lineup-mood-04.png" alt="mood 04" /></div></figure>
  <!-- 4~6개 mosaic-tile 반복, 크기 혼합 (lg / md / sm) -->
</section>

<section class="nl-chip-strip" aria-label="Category chip strip" data-od-id="chip-strip">
  <article class="chip-card" data-category="tee">
    <div class="image-frame chip-thumb" data-fallback="images/lineup-tee-01.png를 생성하세요"><img src="images/lineup-tee-01.png" alt="tee" /></div>
    <h3>티셔츠</h3>
    <p class="sku">[REPLACE 3 SKU]</p>
  </article>
  <article class="chip-card" data-category="raglan">
    <div class="image-frame chip-thumb" data-fallback="images/lineup-raglan-01.png를 생성하세요"><img src="images/lineup-raglan-01.png" alt="raglan" /></div>
    <h3>라글란</h3>
    <p class="sku">[REPLACE 2 SKU]</p>
  </article>
  <article class="chip-card" data-category="knit">
    <div class="image-frame chip-thumb" data-fallback="images/lineup-knit-01.png를 생성하세요"><img src="images/lineup-knit-01.png" alt="knit" /></div>
    <h3>가디건</h3>
    <p class="sku">[REPLACE 2 SKU]</p>
  </article>
  <!-- 전개 카테고리별 chip-card 반복 -->
</section>
```

**언제 쓰나**: 시리즈 무드가 시각적으로 강할 때 (폴카 도트, 리본, 그래픽 시리즈). 카테고리 전개가 5개 이상.

---

## 리듬 B — Hero + grid

하나의 큰 히어로 컴포지션(시리즈의 시그니처 룩)이 위에, 아래 4~8개 아이템 카드 그리드. 시리즈에 명확한 히어로 실루엣이 있을 때 사용.

```html
<section class="nl-hero" aria-label="Series hero" data-od-id="hero">
  <div class="image-frame hero-frame" data-fallback="images/lineup-hero.png를 생성하세요"><img src="images/lineup-hero.png" alt="series hero" /></div>
  <p class="hero-note">[REPLACE 이 히어로 룩이 시리즈를 어떻게 정의하는지 1줄]</p>
</section>

<section class="nl-item-grid" aria-label="Items" data-od-id="items">
  <article class="item-card" data-category="tee">
    <div class="image-frame"><img src="images/lineup-tee-01.png" alt="" /></div>
    <h3>티셔츠 — [REPLACE 폴카 도트 박시 티]</h3>
    <p class="item-note">[REPLACE 1줄 — 예: "3mm 도트, 컴팩트 코튼, BTA 티어 = TREND"]</p>
  </article>
  <article class="item-card" data-category="raglan">
    <div class="image-frame"><img src="images/lineup-raglan-01.png" alt="" /></div>
    <h3>라글란 — [REPLACE]</h3>
    <p class="item-note">[REPLACE]</p>
  </article>
  <!-- 4~8개 item-card -->
</section>
```

**언제 쓰나**: 시리즈에 명확한 시그니처 실루엣이 있을 때 (예: 와키윌리 코튼 집업 점퍼 라인업, 우먼 셋업 라인업). 키 아이템 시트(`fashion-key-item-sheet`)와 연결 강함.

---

## 리듬 C — Item card grid

카테고리별 카드 그리드를 직선으로 배치. SKU 개수가 많을 때(>14)와 무드를 볼륨으로 읽혀야 할 때.

```html
<section class="nl-item-grid nl-item-grid--dense" aria-label="Items" data-od-id="items">
  <article class="item-card item-card--dense" data-category="tee">
    <div class="image-frame"><img src="images/lineup-tee-01.png" alt="" /></div>
    <h3>[REPLACE 아이템 이름]</h3>
    <p class="item-note">[REPLACE 1줄]</p>
  </article>
  <!-- 8~18개 item-card-dense 그리드 -->
</section>
```

**언제 쓰나**: 에센셜 라인 확장처럼 SKU가 많고(>14) 패턴 자체가 무드인 시리즈. 또는 무신사 단독 발매 라인업처럼 상세페이지에 들어갈 아이템을 한 번에 보여줄 때.

---

## 공통 꼬리 블록 (3종 모두 동일하게 사용)

```html
<section class="sku-table" aria-label="Category × SKU plan" data-od-id="sku-table">
  <h2>Category × SKU plan</h2>
  <table>
    <thead><tr><th>Category</th><th>SKU</th><th>Carryover</th><th>Target lot</th><th>BTA Tier</th></tr></thead>
    <tbody>
      <tr><td>티셔츠</td><td>[REPLACE 3]</td><td>[REPLACE new / 1 from 26FW]</td><td>[REPLACE 1,500 pcs]</td><td>[REPLACE TREND]</td></tr>
      <tr><td>라글란</td><td>[REPLACE 2]</td><td>[REPLACE 50% carryover · 26FW 베스트셀러 확장]</td><td>[REPLACE 1,200 pcs]</td><td>[REPLACE NEW BASIC]</td></tr>
      <tr><td>가디건</td><td>[REPLACE 2]</td><td>[REPLACE all new]</td><td>[REPLACE 800 pcs]</td><td>[REPLACE TREND]</td></tr>
      <tr><td>스커트</td><td>[REPLACE 2]</td><td>[REPLACE all new]</td><td>[REPLACE 600 pcs]</td><td>[REPLACE ACCENT]</td></tr>
      <tr><td>데님</td><td>[REPLACE 2]</td><td>[REPLACE all new]</td><td>[REPLACE 1,000 pcs]</td><td>[REPLACE TREND]</td></tr>
      <tr><td>캡</td><td>[REPLACE 1]</td><td>[REPLACE all new]</td><td>[REPLACE 700 pcs]</td><td>[REPLACE ACCENT]</td></tr>
      <!-- 전개 카테고리별 한 행씩 -->
      <tr class="total"><td>Total</td><td>[REPLACE 12]</td><td>—</td><td>—</td><td>—</td></tr>
    </tbody>
  </table>
</section>

<section class="bridge-map" aria-label="Bridge map" data-od-id="bridge-map">
  <h2>Bridge Map (UNI ↔ WOMEN)</h2>
  <ul>
    <li>[REPLACE 티셔츠 폴카 도트 → UNI는 5mm 도트 박시 핏 / WOMEN은 3mm 도트 슬림 핏으로 조정]</li>
    <li>[REPLACE 캡 폴카 도트 → 컬러 차이만으로 UNI/WOMEN 공용 운영]</li>
  </ul>
</section>

<section class="anti-pattern" aria-label="Anti-pattern" data-od-id="anti-pattern">
  <h2>Anti-pattern · 하지 않을 것</h2>
  <ul>
    <li>[REPLACE Y2K 라인스톤 사용 금지]</li>
    <li>[REPLACE 셔츠 외 오버사이즈 박시 핏 금지]</li>
    <li>[REPLACE 도트 + 체크 조합 금지 — 도트 단일 모티프 유지]</li>
    <!-- 3~7개 불릿 -->
  </ul>
</section>

<section class="open-decisions" aria-label="Open decisions" data-od-id="open-decisions">
  <h2>Open / Next Decisions</h2>
  <ul>
    <li>[REPLACE 도트 컬러 — 블랙 / 네이비 / 차콜 중 1차 샘플 후 확정] · owner: [REPLACE 디자인실장] · by: [REPLACE 2026-05-15]</li>
    <li>[REPLACE 라글란 캐리오버 SKU — 26FW의 어떤 컬러를 살릴지] · owner: [REPLACE MD실장] · by: [REPLACE 2026-05-20]</li>
  </ul>
</section>
```

꼬리 블록에 항목이 없으면(예: 브릿지 없는 시리즈) 해당 `<section>` 전체를 생략하세요. 비어 있는 헤딩만 남기지 마세요.

---

## 리듬 선택 가이드 요약

| 상황 | 권장 리듬 |
|---|---|
| 시리즈 무드가 시각적으로 강함 (도트, 리본, 그래픽) | **A — Mosaic + chip strip** |
| 시리즈에 명확한 히어로 실루엣 (집업 점퍼 등) | **B — Hero + grid** |
| SKU 개수 많음(>14), 패턴 자체가 무드 | **C — Item card grid** |
| 무신사 단독 발매용 (상세페이지 베이스) | **C** 또는 **A** |

선택한 리듬을 Step 2에서 한 문장으로 선언하세요.
