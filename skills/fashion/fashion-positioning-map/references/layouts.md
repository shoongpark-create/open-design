# 포지셔닝 맵 레이아웃 (3종)

세 가지 리듬 중 **하나**를 Step 2에서 선택해 `<main id="positioning-map">` 안에 붙여 넣으세요.

OpenDesign 환경에서 인라인 코멘트 모드를 사용하려면 주요 섹션에 `data-od-id` 속성을 추가하세요.

---

## 리듬 A — Centered map + side notes (기본값)

2x2 맵 중앙 + 우측 사이드바에 전략 의도 + 라인별 노트. 자사 브랜드가 1~3개 점을 가질 때, 청중이 리더십 / 신규 입사자일 때.

```html
<header class="pm-header" data-od-id="header">
  <div class="pm-meta">
    <span class="season">[REPLACE 27SS]</span>
    <span class="brand">[REPLACE 와키윌리]</span>
    <span class="status">[REPLACE v1]</span>
    <span class="date">[REPLACE 2026-04-29]</span>
  </div>
  <h1 class="intent">▼ [REPLACE 1줄 전략 의도 — 예: "감도 높은 트렌디함에 위트를 더한, 합리적인 가격의 스트릿 브랜드"]</h1>
</header>

<div class="pm-grid pm-grid--map-and-side">
  <section class="pm-map" aria-label="Positioning map" data-od-id="map">
    <div class="map-frame" data-axis-x-left="BASIC" data-axis-x-right="ACCENT" data-axis-y-top="TREND" data-axis-y-bottom="NEW BASIC">
      <span class="axis-label axis-label--top">TREND</span>
      <span class="axis-label axis-label--bottom">NEW BASIC</span>
      <span class="axis-label axis-label--left">BASIC</span>
      <span class="axis-label axis-label--right">ACCENT</span>
      <div class="crosshair-h"></div>
      <div class="crosshair-v"></div>

      <!-- 자사 브랜드 점 (visually distinct) -->
      <span class="brand-point brand-point--self brand-point--uni" style="--x:55%; --y:45%">와키윌리 UNI</span>
      <span class="brand-point brand-point--self brand-point--women" style="--x:55%; --y:55%">와키윌리 WOMEN</span>

      <!-- 경쟁사 (K-young-casual 예시) -->
      <span class="brand-point" style="--x:10%; --y:80%">무신사 스탠다드</span>
      <span class="brand-point" style="--x:5%; --y:90%">UNIQLO</span>
      <span class="brand-point" style="--x:25%; --y:40%">폴라플로우</span>
      <span class="brand-point" style="--x:30%; --y:65%">라이프워크</span>
      <span class="brand-point" style="--x:35%; --y:50%">마뗑킴</span>
      <span class="brand-point" style="--x:50%; --y:30%">87MM</span>
      <span class="brand-point" style="--x:55%; --y:35%">KIRSH</span>
      <span class="brand-point" style="--x:65%; --y:30%">Mardi Mercredi</span>
      <span class="brand-point" style="--x:65%; --y:25%">디스이즈네버댓</span>
      <span class="brand-point" style="--x:75%; --y:35%">OY</span>
      <span class="brand-point" style="--x:75%; --y:15%">ADER ERROR</span>
      <span class="brand-point" style="--x:80%; --y:20%">IAB STUDIO</span>
      <span class="brand-point" style="--x:80%; --y:25%">인스턴트펑크</span>
      <!-- 8~18개 경쟁사 점 -->
    </div>
  </section>

  <aside class="pm-notes" aria-label="Per-line notes" data-od-id="notes">
    <h2>Per-line notes</h2>
    <article>
      <h3>UNI</h3>
      <p>[REPLACE 뉴베이직 라인을 신선하고 세련되게 재정의해 기본물 매출 회복, 트렌드 아이템 병행 전개로 볼륨 재확보]</p>
    </article>
    <article>
      <h3>WOMEN</h3>
      <p>[REPLACE 뉴베이직을 보강해 안정적 볼륨 유지. 트렌드, 액센트 강화로 감도와 확장성 동시 확보]</p>
    </article>
    <article>
      <h3>UNI ↔ WOMEN</h3>
      <p>[REPLACE 유니와 우먼이 분리되지 않고 하나의 브랜드로 인식되도록 톤과 방향성 통합 정리]</p>
    </article>
  </aside>
</div>
```

---

## 리듬 B — Map + competitor table

맵 상단 + 경쟁사 표(브랜드, 쿼드런트, 1줄 "무엇을 하는지") 하단. 청중이 경쟁 셋을 한 번에 흡수해야 할 때(예: 신규 입사자 온보딩).

```html
<section class="pm-map pm-map--full" aria-label="Positioning map" data-od-id="map">
  <!-- 리듬 A와 동일한 .map-frame -->
</section>

<section class="pm-table" aria-label="Competitor table" data-od-id="competitor-table">
  <h2>Competitor table</h2>
  <table>
    <thead><tr><th>Brand</th><th>Quadrant</th><th>What they do</th><th>URL</th></tr></thead>
    <tbody>
      <tr><td>마뗑킴</td><td>W 중앙</td><td>[REPLACE 미니멀 러프 시크, 텍스트 로고 중심, 대표 SNS 직접 큐레이션]</td><td>matinkim.com</td></tr>
      <tr><td>Mardi Mercredi</td><td>NE</td><td>[REPLACE 프렌치 감성, 플라워 그래픽 시그니처, 셀럽 친화]</td><td>mardimercredi.com</td></tr>
      <tr><td>ADER ERROR</td><td>NE</td><td>[REPLACE 컨셉추얼, 블루 키컬러, 글로벌 편집숍 진출]</td><td>adererror.com</td></tr>
      <tr><td>KIRSH</td><td>NE 중앙</td><td>[REPLACE 영 컬처, 체리 심볼, 비비드 컬러]</td><td>kirshofficial.com</td></tr>
      <tr><td>무신사 스탠다드</td><td>SW</td><td>[REPLACE 베이직, 가성비, 한국적 핏, 무신사 단독]</td><td>store.musinsa.com/standard</td></tr>
      <!-- 경쟁사별 한 행씩 -->
    </tbody>
  </table>
</section>
```

---

## 리듬 C — Map + comparison strip (nearest neighbors)

맵 상단 + 최근접 경쟁사 3~4개의 차별화 포인트 하단. 청중이 디자인/MD이고 "누구와 닮았고, 어떻게 다른가"를 알고 싶을 때.

```html
<section class="pm-map pm-map--full" aria-label="Positioning map" data-od-id="map"><!-- ... --></section>

<section class="pm-neighbors" aria-label="Nearest neighbors" data-od-id="neighbors">
  <h2>Nearest neighbors</h2>
  <div class="neighbor-grid">
    <article class="neighbor-card">
      <h3>[REPLACE KIRSH]</h3>
      <p class="neighbor-note">[REPLACE 영 컬처, 체리 심볼, 비비드, K-아이돌 친화]</p>
      <p class="neighbor-diff"><strong>자사 대비 차별화:</strong> [REPLACE 우리는 위트 + 캐릭터 IP 중심, KIRSH는 비비드 영 컬처 중심. 같은 NE에 있지만 모티프 톤이 다름]</p>
    </article>
    <article class="neighbor-card">
      <h3>[REPLACE Mardi Mercredi]</h3>
      <p class="neighbor-note">[REPLACE 프렌치 감성, 플라워 그래픽 시그니처]</p>
      <p class="neighbor-diff"><strong>자사 대비 차별화:</strong> [REPLACE 우리는 K-아이돌 친화 + 위트, 마르디는 셀럽 친화 + 사랑스러움. 가격대 유사하나 무드 분리]</p>
    </article>
    <!-- 3~4개 neighbor-card -->
  </div>
</section>
```

---

## 공통 꼬리 블록

```html
<section class="open-decisions" aria-label="Open decisions" data-od-id="open-decisions">
  <h2>Open / Next Decisions</h2>
  <ul>
    <li>[REPLACE WOMEN 좌표 — 더 ACCENT 쪽으로 보낼지 검토] · owner: [REPLACE 브랜드 디렉터] · by: [REPLACE 2026-05-15]</li>
    <li>[REPLACE 경쟁사 셋에 글로벌 브랜드(스튜시, 슈프림 등) 추가 검토] · owner: [REPLACE MD실장] · by: [REPLACE 2026-05-20]</li>
  </ul>
</section>
```

---

## 리듬 선택 가이드 요약

| 상황 | 권장 리듬 |
|---|---|
| 일반 시즌 락 검토, 1~3개 자사 점 | **A — Centered map + side notes** |
| 신규 입사자 온보딩, 풀 경쟁 셋 흡수 | **B — Map + competitor table** |
| 디자인/MD 워크숍, 차별화 포인트 비교 | **C — Map + comparison strip** |
| 이사회 / IR 자료 | **B** + 추가 부록 |

선택한 리듬을 Step 2에서 한 문장으로 선언하세요.
