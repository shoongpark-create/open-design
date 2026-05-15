# 액세서리 라인업 레이아웃 (3종)

세 가지 리듬 중 **하나**를 Step 2에서 선택하여 `<main id="accessory-lineup">` 안에 붙여 넣으세요.

OpenDesign 환경에서 인라인 코멘트 모드를 사용하려면 주요 섹션에 `data-od-id` 속성을 추가하세요. 다른 환경에서는 일반 `id` 속성으로 충분합니다.

---

## 리듬 A — 셰이프 패밀리 컬럼 (기본값)

각 셰이프 패밀리가 하나의 컬럼이 되고, 컬럼 아래에 SKU 카드를 세로로 쌓습니다. 가장 보편적인 형태로, 신학기 백팩·캡·키링 라인업에 적합합니다.

```html
<header class="al-header">
  <div class="al-meta">
    <span class="season">[REPLACE 27SS]</span>
    <span class="category">[REPLACE 가방]</span>
    <span class="segment">[REPLACE 신학기 백팩]</span>
    <span class="status">[REPLACE v1]</span>
    <span class="date">[REPLACE 2026-04-29]</span>
  </div>
  <h1 class="title">[REPLACE 신학기 백팩]</h1>
  <p class="thesis">[REPLACE — 예: 기능적인 스트링 디테일과 그래픽/와펜 포인트로 세 가지 뉴 유형의 실용적인 신학기 백팩 라인]</p>
</header>

<section class="family-columns" aria-label="셰이프 패밀리">
  <article class="family-col" data-family="light-string">
    <header class="family-header">
      <span class="family-tag">SHAPE 01</span>
      <h2 class="family-name">[REPLACE LIGHT STRING]</h2>
      <p class="family-note">[REPLACE — 실루엣 한 줄 묘사. 예: 드로스트링 클로저, 패디드 스트랩, 메쉬 사이드 포켓]</p>
    </header>
    <div class="sku-stack">
      <figure class="sku-card">
        <div class="image-frame" data-fallback="images/bag-light-string-01.png 이미지 생성 필요"><img src="images/bag-light-string-01.png" alt="" /></div>
        <figcaption><strong>[REPLACE SKU 명]</strong> · [REPLACE — 1줄 스펙. 예: 나일론, 컬러 웨빙, 키링 후크]</figcaption>
      </figure>
      <!-- SKU 카드 2~5개 -->
    </div>
  </article>

  <article class="family-col" data-family="round-zipper">
    <header class="family-header">
      <span class="family-tag">SHAPE 02</span>
      <h2 class="family-name">[REPLACE ROUND ZIPPER]</h2>
      <p class="family-note">[REPLACE — 예: 전면 라운드 곡선 지퍼, 워드마크/캐릭터 자수 배치]</p>
    </header>
    <div class="sku-stack"><!-- SKU 카드 --></div>
  </article>

  <article class="family-col" data-family="round-pocket">
    <header class="family-header">
      <span class="family-tag">SHAPE 03</span>
      <h2 class="family-name">[REPLACE ROUND POCKET]</h2>
      <p class="family-note">[REPLACE — 예: 전면 라운드 포켓 패널, 캐릭터 키링과 페어]</p>
    </header>
    <div class="sku-stack"><!-- SKU 카드 --></div>
  </article>
</section>
```

**언제 쓰나**: 라인업의 표준 기본값. 패밀리 3~4개, 패밀리당 SKU 2~4개. 신학기 백팩·볼캡 라인·키링 라인업에 적합.

---

## 리듬 B — 패밀리 블록 스택드

각 패밀리가 가로 블록이 되고, 블록 안에 SKU 카드를 가로 행으로 배치. 패밀리당 SKU 5개 이상이거나 A4 인쇄 출력용일 때 사용.

```html
<section class="family-stack" aria-label="셰이프 패밀리">
  <article class="family-block">
    <header class="family-header">
      <h2>[REPLACE 패밀리명 — 예: VOLCAP CLASSIC]</h2>
      <p>[REPLACE — 패밀리 한 줄 묘사]</p>
    </header>
    <div class="sku-row">
      <figure class="sku-card sku-card--row"><!-- 가로 행 SKU 카드 --></figure>
      <!-- 가로 행 SKU 5개 이상 -->
    </div>
  </article>
  <!-- 패밀리당 반복 -->
</section>
```

**언제 쓰나**: 패밀리당 SKU 5개 이상으로 컬럼 스택이 길어질 때. 또는 A4 가로 인쇄·내부 발주 회의용.

---

## 리듬 C — 히어로 + 마이너 패밀리

시즌 캠페인 히어로 패밀리가 상단 절반을 큰 제품컷 + 작은 SKU 스트립으로 차지하고, 나머지 마이너 패밀리는 하단 컴팩트 컬럼에 배치.

```html
<section class="al-hero" data-hero-family="round-pocket">
  <div class="image-frame hero-frame" data-fallback="images/bag-hero.png 이미지 생성 필요"><img src="images/bag-hero.png" alt="" /></div>
  <div class="hero-meta">
    <span class="hero-flag">SEASON HERO</span>
    <h2>[REPLACE 히어로 패밀리명]</h2>
    <p>[REPLACE — 히어로 패밀리 thesis. 예: 27SS 캠페인 키비주얼에 등장하는 캐릭터 키링 페어 라운드 포켓 백팩]</p>
    <div class="hero-sku-strip">
      <figure class="sku-card sku-card--small"><!-- 히어로 패밀리의 마이너 SKU --></figure>
      <!-- 히어로 패밀리 내 작은 SKU들 -->
    </div>
  </div>
</section>

<section class="family-columns family-columns--compact" aria-label="기타 패밀리">
  <!-- 마이너 패밀리 1~3개, 컴팩트 스케일 -->
</section>
```

**언제 쓰나**: 시즌 캠페인이 단일 히어로 SKU/패밀리를 강력하게 푸시할 때. IMC 캘린더와 직접 연결되는 라인업. 와키윌리 캐릭터 IP 시즌, 마뗑킴 드롭 캠페인 시즌 등.

---

## 선택 — 시그니처 액센트 스트립

레이아웃 본체와 SKU 표 사이에 배치. 시즌 액센트 세트(키링·포인트 라벨·컬러 웨빙 등)가 라인업의 일부일 때 추가하세요.

```html
<section class="accent-strip" aria-label="시그니처 액센트 세트">
  <h2>Signature accent set</h2>
  <p class="accent-note">[REPLACE — 현재 그래픽 디렉션에서 가져온 액센트 세트. 패밀리 간 브랜드 월드 연결고리]</p>
  <div class="accent-row">
    <figure>
      <div class="image-frame" data-fallback="images/accent-charm-01.png 이미지 생성 필요"><img src="images/accent-charm-01.png" alt="" /></div>
      <figcaption>[REPLACE — 예: Kiky 캐릭터 키링]</figcaption>
    </figure>
    <figure>
      <div class="image-frame" data-fallback="images/accent-pointlabel-01.png 이미지 생성 필요"><img src="images/accent-pointlabel-01.png" alt="" /></div>
      <figcaption>[REPLACE — 예: 우븐 포인트 라벨]</figcaption>
    </figure>
    <figure>
      <div class="image-frame" data-fallback="images/accent-webbing-01.png 이미지 생성 필요"><img src="images/accent-webbing-01.png" alt="" /></div>
      <figcaption>[REPLACE — 예: 컬러 웨빙]</figcaption>
    </figure>
  </div>
</section>
```

---

## 공통 꼬리 블록 (3종 모두 동일하게 사용)

레이아웃 본체 아래에 항상 추가합니다.

```html
<section class="sku-table" aria-label="패밀리 × SKU 계획">
  <h2>Family × SKU Plan</h2>
  <table>
    <thead>
      <tr>
        <th>Family</th>
        <th>SKU</th>
        <th>Hero</th>
        <th>Target LOT</th>
        <th>Color tier</th>
        <th>Carryover</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>[Light String]</td>
        <td>[3]</td>
        <td>—</td>
        <td>[1,200]</td>
        <td>[BASIC]</td>
        <td>[new]</td>
      </tr>
      <!-- 패밀리당 1행, 히어로는 Hero 컬럼에 ● -->
      <tr class="total">
        <td>Total</td>
        <td>[N]</td>
        <td>—</td>
        <td>—</td>
        <td>—</td>
        <td>—</td>
      </tr>
    </tbody>
  </table>
</section>

<section class="open-decisions" aria-label="오픈 결정">
  <h2>Open / Next Decisions</h2>
  <ul>
    <li>[결정 사항 · 예: Round Pocket 패밀리 캐릭터 키링 컬러 2종 추가 여부] · owner: [이름] · by: [YYYY-MM-DD]</li>
    <li>[Light String 패밀리 컬러 웨빙 추가 색상 결정] · owner: [디자인실장] · by: [YYYY-MM-DD]</li>
  </ul>
</section>
```

---

## 리듬 선택 가이드 요약

| 상황 | 권장 리듬 |
|---|---|
| 패밀리 3~4개, 패밀리당 SKU 2~4개 | **A — 셰이프 패밀리 컬럼** |
| 패밀리당 SKU 5개 이상, A4 인쇄 출력 | **B — 패밀리 블록 스택드** |
| 단일 히어로 패밀리 캠페인 푸시 | **C — 히어로 + 마이너 패밀리** |

선택한 리듬을 작업 흐름 Step 2에서 한 문장으로 선언하세요. 예: "리듬 A 셰이프 패밀리 컬럼을 선택했습니다."
