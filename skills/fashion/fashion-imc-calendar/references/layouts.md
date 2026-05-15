# IMC 캘린더 레이아웃 (3종)

세 가지 리듬 중 **하나**를 Step 2에서 선택하여 `<main id="imc-calendar">` 안에 붙여 넣으세요.

OpenDesign 환경에서 인라인 코멘트 모드를 사용하려면 주요 섹션에 `data-od-id` 속성을 추가하세요. 다른 환경에서는 일반 `id` 속성으로 충분합니다.

---

## 리듬 A — 밴드 상단 + 월 트랙 하단 (기본)

```html
<header class="ic-header">
  <div class="ic-meta">
    <span class="season">[REPLACE 27SS]</span>
    <span class="line">[REPLACE ACC]</span>
    <span class="status">[REPLACE locked]</span>
    <span class="date">[REPLACE 2026-04-29]</span>
  </div>
  <h1 class="title">SEASON IMC</h1>
</header>

<section class="band-block" aria-label="카테고리 밴드">
  <article class="band-card" data-band="bag">
    <div class="band-kpi">
      <span class="band-key">BAG</span>
      <strong class="band-headline">[REPLACE 49 SKU (-22 SKU), 생산 금액 45억, 비중 49% (-6%p)]</strong>
    </div>
    <div class="band-chip"><span class="chip">[REPLACE 비효율 아이템 제거, SKU 압축]</span></div>
    <ul class="band-tactics">
      <li>[REPLACE 리뉴얼 신학기, 신규 데일리백 판매 집중]</li>
      <li>[REPLACE 우먼스 가방 IMC 마케팅 콘텐츠 강화, 히어로 발굴]</li>
      <li>[REPLACE 유니/우먼스 가방 In-Season 구성 4~5스타일]</li>
    </ul>
  </article>
  <article class="band-card" data-band="cap">
    <div class="band-kpi">
      <span class="band-key">CAP</span>
      <strong class="band-headline">[REPLACE 40 SKU (+4 SKU), 생산 금액 16억, 비중 31% (+5%p)]</strong>
    </div>
    <div class="band-chip"><span class="chip">[REPLACE 캐리오버 확대, 신규 디자인 강화]</span></div>
    <ul class="band-tactics">
      <li>[REPLACE 볼캡·버킷 캐리오버 정상판매율 80% 목표]</li>
      <li>[REPLACE 메쉬 캡 신규 디자인 3종 추가]</li>
    </ul>
  </article>
  <!-- 2~5 band-card 반복 -->
</section>

<section class="month-track" aria-label="월 트랙">
  <div class="month-axis">
    <span>January</span><span>February</span><span>March</span><span>April</span><span>May</span><span>June</span><span>July</span>
  </div>
  <div class="hero-row">
    <article class="hero-tile" data-month="01">
      <div class="image-frame" data-fallback="images/hero-01.png 이미지 생성 필요"><img src="images/hero-01.png" alt="hero 01" /></div>
      <h3 class="hero-name">[REPLACE All-Day Backpack]</h3>
      <span class="hero-tag">[REPLACE Backpack]</span>
    </article>
    <!-- 5~9 hero-tile, 월에 정렬 -->
  </div>
</section>

<section class="rollout-banner" aria-label="롤아웃 헤드라인">
  <h2>[REPLACE 판기별 주력상품-콘텐츠-VM-프로모션 등의 '히어로 육성' 집중]</h2>
</section>
```

**언제 쓰나**: 기본값, 카테고리 KPI + 월별 히어로 양쪽 가독성 필요.

---

## 리듬 B — 월-퍼스트 매트릭스

```html
<section class="matrix-block" aria-label="월 × 카테고리 매트릭스">
  <table>
    <thead>
      <tr><th></th><th>Jan</th><th>Feb</th><th>Mar</th><th>Apr</th><th>May</th><th>Jun</th><th>Jul</th></tr>
    </thead>
    <tbody>
      <tr><th data-band="bag">BAG</th><td>[히어로 또는 아이콘]</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
      <tr><th data-band="cap">CAP</th><td></td><td></td><td>[히어로]</td><td>[히어로]</td><td>[히어로]</td><td></td><td></td></tr>
      <tr><th data-band="shoes">SHOES</th><td></td><td></td><td>[히어로]</td><td></td><td></td><td>[히어로]</td><td>[히어로]</td></tr>
    </tbody>
  </table>
</section>
```

**언제 쓰나**: `이번 월에 카테고리 간 무엇이 일어나는가` 가시성 우선. 월별 회의 자료.

---

## 리듬 C — 택틱-레일 형식

좌측 레일에 밴드별 (KPI 포함), 우측에 월 타임라인. 컴팩트 A4 가로용.

```html
<div class="ic-grid ic-grid--rail-and-timeline">
  <aside class="band-rail">
    <article class="band-card band-card--rail" data-band="bag">
      <!-- band-kpi + chip + tactics -->
    </article>
    <!-- 2~5 band-card 스택 -->
  </aside>
  <section class="month-track month-track--right">
    <!-- 월 축 + hero-row -->
  </section>
</div>
```

**언제 쓰나**: A4 가로 인쇄, 임원 회의실 벽 출력용.

---

## 공통 꼬리 블록

```html
<section class="open-decisions" aria-label="오픈 결정">
  <h2>Open / Next Decisions</h2>
  <ul>
    <li>[결정 사항 — 예: 5월 가방 히어로 인플루언서 캐스팅 확정] · owner: [마케팅실장] · by: [YYYY-MM-DD]</li>
    <li>[6월 팝업스토어 위치 확정] · owner: [VMD] · by: [YYYY-MM-DD]</li>
  </ul>
</section>
```

## 리듬 선택 가이드 요약

| 상황 | 권장 리듬 |
|---|---|
| 표준 시즌 캘린더, 카테고리 KPI + 월별 히어로 양쪽 가독 | **A — 밴드 상단 + 월 트랙 하단** |
| 월별 회의 자료, `이번 월` 가시성 우선 | **B — 월-퍼스트 매트릭스** |
| A4 가로 인쇄·임원 벽 출력 | **C — 택틱-레일** |
