# 스타일링 보드 레이아웃 (3종)

세 가지 리듬 중 **하나**를 Step 2에서 선택해 `<main id="styling-board">` 안에 붙여 넣으세요. 한 보드 안에서 리듬을 섞지 마세요.

여기서 사용하는 클래스(`.track-strip`, `.look-grid`, `.figure-card` 등)는 `assets/template.html`에 미리 정의되어 있습니다. 새 클래스명을 발명하지 마세요.

---

## 리듬 A — Single-row track (기본값, ≤14 룩)

판기가 10~14개 룩을 가지고, 팀이 전체 판기를 한눈에 보고 싶을 때. 축 라벨이 위에 가로 트랙 스트립으로 위치.

```html
<header class="board-header" data-od-id="header">
  <div class="board-meta">
    <span class="season">[REPLACE 27SS]</span>
    <span class="period">[REPLACE S1 (1-2월)]</span>
    <span class="line">[REPLACE UNI]</span>
    <span class="status">[REPLACE v1]</span>
  </div>
  <h1 class="thesis">[REPLACE 1줄 판기 명제 + 앵커 아이템 — 예: "신학기 아우터 스타일링 — 코튼 집업 점퍼 + 윈드브레이커 중심"]</h1>
</header>

<section class="track-strip" aria-label="Axis track" data-od-id="track">
  <span class="axis-label" data-axis="basic">BASIC</span>
  <span class="axis-label" data-axis="new-basic">NEW BASIC</span>
  <span class="axis-label" data-axis="trend">TREND</span>
  <span class="axis-label" data-axis="accent">ACCENT</span>
</section>

<section class="look-grid look-grid--row" aria-label="Looks" data-od-id="looks">
  <figure class="figure-card" data-axis="basic">
    <span class="axis-dot" aria-hidden="true"></span>
    <span class="look-number">01</span>
    <div class="image-frame" data-fallback="images/look-01-basic.png를 생성하세요">
      <img src="images/look-01-basic.png" alt="Look 01" />
    </div>
    <figcaption>[REPLACE 앵커 아이템 + 스타일링 무브 1개 — 예: "박시 핏 코튼 집업 + 워시드 데님"]</figcaption>
    <div class="chip-strip" aria-label="Look colors">
      <span class="chip" style="background:[hex]"></span>
      <span class="chip" style="background:[hex]"></span>
      <span class="chip" style="background:[hex]"></span>
    </div>
  </figure>
  <!-- 룩별 .figure-card 반복; data-axis로 축 도트 컬러 매칭 -->
</section>
```

**언제 쓰나**: 표준 K-young-casual 판기 (S1/S2/S3/S4 각 10~14개 룩). 와키윌리 27SS S1 UNI 13 룩이 이 리듬.

---

## 리듬 B — Two-row stagger (15~18 룩)

행 1 = BASIC + NEW BASIC, 행 2 = TREND + ACCENT. 각 행은 자체 트랙 스트립. 판기가 바쁘고 single row가 피규어를 가독성 이하로 축소시킬 때.

```html
<section class="track-strip track-strip--paired" aria-label="Foundation track">
  <span class="axis-label" data-axis="basic">BASIC</span>
  <span class="axis-label" data-axis="new-basic">NEW BASIC</span>
</section>

<section class="look-grid look-grid--row" aria-label="Foundation looks">
  <!-- 6~10개 BASIC + NEW BASIC figure-card -->
</section>

<section class="track-strip track-strip--paired" aria-label="Direction track">
  <span class="axis-label" data-axis="trend">TREND</span>
  <span class="axis-label" data-axis="accent">ACCENT</span>
</section>

<section class="look-grid look-grid--row" aria-label="Direction looks">
  <!-- 5~8개 TREND + ACCENT figure-card -->
</section>
```

**언제 쓰나**: WOMEN 라인 시즌처럼 룩 개수가 15~18개로 많을 때. S2(3-4월) 풀시즌처럼 모든 축이 풍부한 판기.

---

## 리듬 C — Quartet sections (축당 4개 이상)

4개 명명된 섹션을 수직 스택. 각 축이 자체 블록. 각 축이 4개 이상 룩을 가지고 팀이 축별 캡션 밀도 원할 때(예: 내부 MD 리뷰).

```html
<section class="axis-block" data-axis="basic">
  <header class="axis-header"><h2>BASIC</h2><p class="axis-note">[REPLACE 이 판기에서 BASIC의 역할 1줄 — 예: "정상판매율 견인하는 데일리 베이스. 코튼 집업 + 워시드 데님 셋업"]</p></header>
  <div class="look-grid look-grid--row">
    <!-- BASIC figure-card만 -->
  </div>
</section>

<section class="axis-block" data-axis="new-basic">
  <header class="axis-header"><h2>NEW BASIC</h2><p class="axis-note">[REPLACE]</p></header>
  <div class="look-grid look-grid--row"></div>
</section>

<section class="axis-block" data-axis="trend">
  <header class="axis-header"><h2>TREND</h2><p class="axis-note">[REPLACE]</p></header>
  <div class="look-grid look-grid--row"></div>
</section>

<section class="axis-block" data-axis="accent">
  <header class="axis-header"><h2>ACCENT</h2><p class="axis-note">[REPLACE — ACCENT는 희소함 유지. 룩당 1개 스타일링 무브만]</p></header>
  <div class="look-grid look-grid--row"></div>
</section>
```

**언제 쓰나**: 내부 MD 리뷰 회의용. 각 축에 깊은 라쇼날 캡션이 필요한 보드. 또는 분기별 SKU 분포 검토.

---

## 공통 꼬리 블록 (3종 모두 동일하게 사용)

```html
<section class="axis-summary" aria-label="Axis count" data-od-id="summary">
  <h2>Axis count</h2>
  <table>
    <thead><tr><th>Axis</th><th>Count</th><th>%</th><th>Target</th><th>Δ</th></tr></thead>
    <tbody>
      <tr><td>BASIC</td><td>[REPLACE 4]</td><td>[REPLACE 31%]</td><td>[REPLACE 25%]</td><td>[REPLACE +6]</td></tr>
      <tr><td>NEW BASIC</td><td>[REPLACE 3]</td><td>[REPLACE 23%]</td><td>[REPLACE 25%]</td><td>[REPLACE -2]</td></tr>
      <tr><td>TREND</td><td>[REPLACE 4]</td><td>[REPLACE 31%]</td><td>[REPLACE 35%]</td><td>[REPLACE -4]</td></tr>
      <tr><td>ACCENT</td><td>[REPLACE 2]</td><td>[REPLACE 15%]</td><td>[REPLACE 15%]</td><td>[REPLACE 0]</td></tr>
      <tr class="total"><td>Total</td><td>[REPLACE 13]</td><td>100%</td><td>100%</td><td>0</td></tr>
    </tbody>
  </table>
</section>

<section class="carryover-map" aria-label="Carryover map" data-od-id="carryover">
  <h2>Carryover from previous period</h2>
  <ul>
    <li>[REPLACE Look 01] ← [REPLACE 26FW S4 Look 07] · [REPLACE 정상판매율 92%로 베스트셀러 연장]</li>
    <li>[REPLACE Look 05] ← [REPLACE 26FW S3 Look 04] · [REPLACE 컬러 추가 리뉴얼]</li>
  </ul>
</section>

<section class="open-decisions" aria-label="Open decisions" data-od-id="open-decisions">
  <h2>Open / Next Decisions</h2>
  <ul>
    <li>[REPLACE ACCENT Look 12 — 셋업 vs 단품 결정] · owner: [REPLACE 디자인실장] · by: [REPLACE 2026-05-15]</li>
  </ul>
</section>
```

꼬리 블록에 항목이 없으면(예: 캐리오버 0개) 해당 `<section>` 전체를 생략하세요. 빈 헤딩만 남기지 마세요.

---

## 리듬 선택 가이드 요약

| 상황 | 권장 리듬 |
|---|---|
| 10~14 룩, 표준 판기 (기본) | **A — Single-row track** |
| 15~18 룩, WOMEN/풀시즌 | **B — Two-row stagger** |
| 축당 4개 이상, 내부 MD 리뷰 | **C — Quartet sections** |
| ACC 라인 (가방/모자/신발) — 5~10 룩 | **A** (단축 트랙) |

선택한 리듬을 Step 2에서 한 문장으로 선언하세요.
