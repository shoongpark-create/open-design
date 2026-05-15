# 시즌 전략 레이아웃 (3종)

세 가지 리듬 중 **하나**를 Step 2에서 선택해 `<main id="season-strategy">` 안에 붙여 넣으세요.

OpenDesign 환경에서 인라인 코멘트 모드를 사용하려면 주요 섹션에 `data-od-id` 속성을 추가하세요.

---

## 리듬 A — Pillars row + heroes row (기본값)

상단에 3개 축 카드 가로 배치, 그 아래 히어로 카테고리 카드 가로 배치.

```html
<header class="ss-header" data-od-id="header">
  <div class="ss-meta">
    <span class="season">[REPLACE 27SS]</span>
    <span class="line">[REPLACE ACC]</span>
    <span class="status">[REPLACE locked]</span>
    <span class="date">[REPLACE 2026-04-29]</span>
  </div>
  <h1 class="title">[REPLACE 27SS 전략 3축]</h1>
</header>

<section class="pillars-row" aria-label="Strategic pillars" data-od-id="pillars">
  <article class="pillar-card" data-pillar="01">
    <span class="pillar-tag">전략 축 01</span>
    <h2 class="pillar-title">[REPLACE 시장 대응력 강화]</h2>
    <p class="pillar-desc">[REPLACE 27SS QR 30%로 확대 / In-Season 기획(SPOT 대응) 13스타일 목표: 가방/모자/기타 품목]</p>
    <div class="pillar-chips">
      <span class="chip chip--dark">[REPLACE In-Season 기획]</span>
      <span class="chip">[REPLACE 주간 QR]</span>
    </div>
  </article>

  <article class="pillar-card" data-pillar="02">
    <span class="pillar-tag">전략 축 02</span>
    <h2 class="pillar-title">[REPLACE 캐리오버 상품 리뉴얼]</h2>
    <p class="pillar-desc">[REPLACE 26FW 정상판매율 낮았던 캐리오버 상품의 디자인 재정의. 트렌드 반영 + 컬러 추가 + 핏 조정]</p>
    <div class="pillar-chips">
      <span class="chip">[REPLACE 디자인 리뉴얼]</span>
      <span class="chip">[REPLACE 트렌드 반영]</span>
    </div>
  </article>

  <article class="pillar-card" data-pillar="03">
    <span class="pillar-tag">전략 축 03</span>
    <h2 class="pillar-title">[REPLACE 판기별 IMC 히어로 육성]</h2>
    <p class="pillar-desc">[REPLACE S1~S4 판기별 hero item 1개씩 IMC 캠페인 집중 노출. 자사몰 + 무신사 + 라이브커머스 연계]</p>
    <div class="pillar-chips">
      <span class="chip chip--accent">[REPLACE 히어로 집중]</span>
    </div>
  </article>
</section>

<header class="block-header"><h2>[REPLACE 27SS 시즌 주력 아이템]</h2></header>

<section class="heroes-row" aria-label="Hero categories" data-od-id="heroes">
  <article class="hero-card" data-category="bag">
    <h3 class="hero-name">가방</h3>
    <p class="hero-line">[REPLACE 신학기 리뉴얼 + 데일리백 구성 강화]</p>
    <ul class="hero-tactics">
      <li>[REPLACE 신학기 백팩 디자인 업그레이드 (용량, 스타일) → 라운드 지퍼형]</li>
      <li>[REPLACE 데일리 가방 구성 확대로 소비 타겟 확장]</li>
      <li>[REPLACE 사입가율 ↑ — 목표 28%]</li>
    </ul>
  </article>

  <article class="hero-card" data-category="cap">
    <h3 class="hero-name">모자</h3>
    <p class="hero-line">[REPLACE 뉴 히어로 육성을 통한 평균 LOT 상향화]</p>
    <ul class="hero-tactics">
      <li>[REPLACE 신규 캡 1개 hero 지정 → 평균 LOT 1,500 pcs → 2,200 pcs 상향]</li>
      <li>[REPLACE 버킷 + 워시드 캡 확장]</li>
    </ul>
  </article>

  <article class="hero-card" data-category="shoes">
    <h3 class="hero-name">신발</h3>
    <p class="hero-line">[REPLACE 뉴 키테 + 하절기 샌들/슬라이드 구성]</p>
    <ul class="hero-tactics">
      <li>[REPLACE 키테 스타일 신규 1개 hero 추가]</li>
      <li>[REPLACE 하절기 샌들/슬라이드 2개 SKU (raw / strap)]</li>
    </ul>
  </article>
</section>
```

**언제 쓰나**: 기본값. 3개 축 + 2~4개 히어로 카테고리의 표준 시즌 전략 카드.

---

## 리듬 B — Pillars stack + heroes grid

축이 좌측에 수직 스택, 히어로가 우측에 2x2 그리드. 각 카드가 긴 카피를 담을 때 사용.

```html
<div class="ss-grid ss-grid--stack-and-grid">
  <section class="pillars-stack" aria-label="Strategic pillars" data-od-id="pillars">
    <!-- 3개 pillar-card -->
  </section>
  <section class="heroes-grid" aria-label="Hero categories" data-od-id="heroes">
    <!-- 2x2 hero-card -->
  </section>
</div>
```

**언제 쓰나**: 각 축 또는 히어로 카드의 카피가 긴 경우 (예: 글로벌 진출 시즌처럼 전술이 많은 시즌).

---

## 리듬 C — Single-column

A4 세로 인쇄용. 축 → 히어로 수직 스택.

```html
<section class="pillars-stack pillars-stack--print" data-od-id="pillars"><!-- 3개 pillar-card --></section>
<section class="heroes-stack heroes-stack--print" data-od-id="heroes"><!-- N hero-card --></section>
```

**언제 쓰나**: 인쇄본 검토회 / 종이 인쇄용 / PDF 단일 컬럼 공유용.

---

## 공통 꼬리 블록

```html
<section class="alignment-table" aria-label="Cross-functional alignment" data-od-id="alignment">
  <h2>Pillar × Team</h2>
  <table>
    <thead><tr><th>Pillar</th><th>Design</th><th>MD</th><th>Marketing</th><th>Supply</th></tr></thead>
    <tbody>
      <tr><td>[REPLACE 시장 대응력 강화]</td><td>○</td><td>●</td><td>○</td><td>○</td></tr>
      <tr><td>[REPLACE 캐리오버 리뉴얼]</td><td>●</td><td>○</td><td></td><td>○</td></tr>
      <tr><td>[REPLACE 판기별 IMC 히어로]</td><td>○</td><td>○</td><td>●</td><td></td></tr>
      <!-- ● = lead, ○ = contributor; 축별 1행 -->
    </tbody>
  </table>
</section>

<section class="open-decisions" aria-label="Open decisions" data-od-id="open-decisions">
  <h2>Open / Next Decisions</h2>
  <ul>
    <li>[REPLACE 가방 신학기 백팩 1차 샘플 검토] · owner: [REPLACE 디자인실장] · by: [REPLACE 2026-05-15]</li>
    <li>[REPLACE 모자 hero LOT 상향 생산처 컨펌] · owner: [REPLACE 생산실장] · by: [REPLACE 2026-05-20]</li>
    <li>[REPLACE IMC 캘린더 hero 슬롯 4개 락] · owner: [REPLACE 마케팅실장] · by: [REPLACE 2026-05-25]</li>
  </ul>
</section>
```

---

## 리듬 선택 가이드 요약

| 상황 | 권장 리듬 |
|---|---|
| 표준 시즌 전략 락 (기본) | **A — Pillars row + heroes row** |
| 글로벌 진출 / 긴 카피 / 다중 전술 | **B — Pillars stack + heroes grid** |
| A4 세로 인쇄 / PDF 단일 컬럼 | **C — Single-column** |

선택한 레이아웃을 Step 2에서 한 문장으로 선언하세요.
