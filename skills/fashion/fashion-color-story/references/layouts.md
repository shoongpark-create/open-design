# 컬러 스토리 레이아웃 (12개 섹션)

이 섹션들을 `assets/template.html`의 `<main id="color-story">` 안에 붙여 넣으세요. 클래스 이름은 유지하고, 컬러 코드·패브릭 페어링·매트릭스 셀만 편집합니다. **섹션 순서는 하중 부담(load-bearing)** — 문서는 의도 → 한눈에 보기 → 구조 → 디테일 → 계획 → QC → 규율 → 연속성 흐름으로 시퀀스되어야 합니다.

OpenDesign 환경에서 인라인 코멘트 모드를 사용하려면 주요 섹션에 `data-od-id` 속성을 추가하세요. 다른 환경에서는 일반 `id` 속성으로 충분합니다.

## 1. 커버 (Cover)

```html
<section class="section cover-grid" data-od-id="cover">
  <div>
    <p class="kicker">[시즌 코드 — 예: 27SS] · COLOR STORY</p>
    <h1 class="display">[REPLACE 팔레트 명 — 예: HUMID COMMUTE]</h1>
    <p class="thesis">[REPLACE — 한 문장 팔레트 thesis. 예: "27SS 팔레트는 도시 출근 무드를 메인 캐리오버 3 + 더스티 시즌 4 + 드라이 팝 액센트 1로 잡는다."]</p>
    <p class="meta cover-meta">[브랜드명] · [작성자] · LOCK 일자 [YYYY-MM-DD] · 상태 [v1 / v2 / locked]</p>
  </div>
  <figure class="palette-preview">
    <div class="preview-strip">
      <span class="preview-chip" style="background:[HEX-1];"></span>
      <span class="preview-chip" style="background:[HEX-2];"></span>
      <span class="preview-chip" style="background:[HEX-3];"></span>
      <span class="preview-chip" style="background:[HEX-4];"></span>
      <span class="preview-chip" style="background:[HEX-5];"></span>
      <span class="preview-chip" style="background:[HEX-6];"></span>
      <span class="preview-chip" style="background:[HEX-7];"></span>
      <span class="preview-chip" style="background:[HEX-8];"></span>
    </div>
    <p class="meta preview-caption">총 [N]컬러 · 메인 [N] · 시즌 [N] · 액센트 [N]</p>
  </figure>
</section>
```

## 2. 테제 (Thesis)

```html
<section class="section thesis-block" data-od-id="thesis">
  <div>
    <p class="kicker">Why this palette</p>
    <h2 class="h2">[REPLACE — 팔레트 thesis 헤드라인 1문장]</h2>
  </div>
  <div class="thesis-copy">
    <p class="lead">[단락 1: 컨셉 보드 영역으로 역추적. 이 팔레트가 *무엇을 위한* 것인지]</p>
    <p>[단락 2: 계층 논리. 왜 메인/시즌/액센트가 이 비중으로 분리됐는지]</p>
    <p>[단락 3: 이전 시즌 대비 변경점. 채널·고객 관점 정당화]</p>
  </div>
</section>
```

## 3. 마스터 그리드 (Master Grid)

```html
<section class="section" data-od-id="master-grid">
  <p class="kicker">Master palette · 모든 컬러 한눈에</p>
  <h2 class="h2" style="margin-bottom: 28px;">[N] colors at a glance.</h2>
  <div class="master-grid">
    <article class="master-chip" data-tier="main">
      <div class="chip-swatch" style="background:[HEX];"></div>
      <div class="chip-info">
        <h3 class="chip-name">[감성 이름 — 예: humid linen ivory]</h3>
        <p class="meta chip-code">[#XXXXXX] · [TCX 코드]</p>
        <p class="meta chip-tier">main</p>
      </div>
    </article>
    <!-- 메인 칩 추가, 시즌 칩, 액센트 칩 순서로 반복 -->
  </div>
</section>
```

## 4. 계층 + 비율 바 (Hierarchy + Proportion Bar)

```html
<section class="section hierarchy" data-od-id="hierarchy">
  <p class="kicker">Hierarchy</p>
  <h2 class="h2" style="margin-bottom: 28px;">[메인 %] / [시즌 %] / [액센트 %] — 팔레트 비중.</h2>
  <div class="proportion-bar" role="img" aria-label="팔레트 비율 바">
    <div class="proportion-segment" data-tier="main" style="--share: 60%;"><span class="meta">main · 60%</span></div>
    <div class="proportion-segment" data-tier="season" style="--share: 30%;"><span class="meta">season · 30%</span></div>
    <div class="proportion-segment" data-tier="accent" style="--share: 10%;"><span class="meta">accent · 10%</span></div>
  </div>
  <div class="tier-blocks">
    <div class="tier-block" data-tier="main">
      <h3 class="tier-title">Main · [N] colors</h3>
      <p class="lead tier-desc">[1줄 — 브랜드 세이프 캐리오버. 베이직 친화. 전체 컬렉션 앵커]</p>
      <div class="tier-chips">
        <span class="tier-chip" style="background:[HEX];" title="[이름]"></span>
        <!-- 메인 칩 반복 -->
      </div>
    </div>
    <div class="tier-block" data-tier="season">
      <h3 class="tier-title">Season · [N] colors</h3>
      <p class="lead tier-desc">[1줄 — 이번 시즌의 무드 컬러. 새로운 베팅]</p>
      <div class="tier-chips"><!-- 시즌 칩 반복 --></div>
    </div>
    <div class="tier-block" data-tier="accent">
      <h3 class="tier-title">Accent · [N] colors</h3>
      <p class="lead tier-desc">[1줄 — 드라이 팝 / 무신사 썸네일 앵커 / 단호한 대비]</p>
      <div class="tier-chips"><!-- 액센트 칩 반복 --></div>
    </div>
  </div>
</section>
```

## 5. 컬러별 디테일 스프레드 (Per-Color Detail Spread)

컬러 1개당 1 블록 반복. `data-tier`로 섹션 보더·액센트 컬러 코드.

```html
<section class="section color-detail" data-od-id="color-[slug]" data-tier="[main|season|accent]">
  <div class="color-head">
    <div class="color-swatch-large" style="background:[HEX];" aria-label="[컬러 이름]"></div>
    <div class="color-meta">
      <p class="meta">[티어] · [carryover|new]</p>
      <h3 class="h3 color-name">[감성 이름 — 예: stone blue 6am]</h3>
      <p class="lead color-tagline">[1줄 사용 규칙 — 예: "브래스 하드웨어와 페어", "새틴 팝과 절대 페어 금지"]</p>
    </div>
  </div>
  <div class="color-codes">
    <table class="code-table">
      <tbody>
        <tr><th>HEX</th><td>[#XXXXXX]</td></tr>
        <tr><th>RGB</th><td>[R, G, B]</td></tr>
        <tr><th>Pantone TCX</th><td>[19-3911 TCX · Iron]</td></tr>
        <tr><th>Pantone TPG</th><td>[19-3911 TPG] (인쇄 / 룩북 전용)</td></tr>
        <tr><th>Coloro</th><td>[125-28-38] (선택)</td></tr>
      </tbody>
    </table>
  </div>
  <div class="color-fabric">
    <p class="kicker">Fabric pairings</p>
    <ul class="fabric-list">
      <li>[소재 이름] — [핸드 / 드레이프 노트. 예: 워시드 코튼 100% — 드라이 핸드]</li>
      <li>[소재 이름] — [핸드 / 드레이프 노트]</li>
      <li>[소재 이름] — [핸드 / 드레이프 노트]</li>
    </ul>
  </div>
  <div class="color-rules">
    <p class="kicker">Use rules</p>
    <ul class="rule-list">
      <li><span class="rule-tag rule-do">use</span>[이 컬러가 옳은 선택일 때]</li>
      <li><span class="rule-tag rule-dont">avoid</span>[이 컬러를 절대 쓰지 말아야 할 때]</li>
      <li><span class="rule-tag rule-do">pair</span>[하드웨어 / 트림 / 스티치 페어]</li>
    </ul>
  </div>
</section>
```

## 6. 카테고리 × 컬러 매트릭스

```html
<section class="section" data-od-id="category-matrix">
  <p class="kicker">Category × color distribution</p>
  <h2 class="h2" style="margin-bottom: 28px;">컬러가 카테고리에 어떻게 분포되는지.</h2>
  <div class="matrix-wrap">
    <table class="matrix">
      <thead>
        <tr>
          <th class="matrix-corner">Category</th>
          <th class="matrix-color"><span class="matrix-chip" style="background:[HEX];"></span><span class="meta">[이름]</span></th>
          <!-- 컬러당 1열 반복 -->
          <th class="matrix-total">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr><th>셔츠</th><td>[N]</td><td>[N]</td><td>[N]</td><td></td><td>[N]</td><td>[N]</td><td>[N]</td><td>[N]</td><td class="matrix-total">[합]</td></tr>
        <tr><th>아우터</th><td>[N]</td><td></td><td></td><td>[N]</td><td></td><td></td><td>[N]</td><td></td><td class="matrix-total">[합]</td></tr>
        <tr><th>팬츠</th><td>[N]</td><td>[N]</td><td>[N]</td><td></td><td>[N]</td><td></td><td></td><td></td><td class="matrix-total">[합]</td></tr>
        <tr><th>니트</th><td>[N]</td><td>[N]</td><td></td><td>[N]</td><td>[N]</td><td>[N]</td><td></td><td></td><td class="matrix-total">[합]</td></tr>
        <tr><th>스커트 / 원피스</th><td>[N]</td><td>[N]</td><td></td><td></td><td>[N]</td><td></td><td></td><td>[N]</td><td class="matrix-total">[합]</td></tr>
        <tr><th>액세서리</th><td>[N]</td><td></td><td></td><td>[N]</td><td></td><td></td><td>[N]</td><td></td><td class="matrix-total">[합]</td></tr>
        <tr class="matrix-totals"><th>Total per color</th><td>[합]</td><td>[합]</td><td>[합]</td><td>[합]</td><td>[합]</td><td>[합]</td><td>[합]</td><td>[합]</td><td class="matrix-grand">[총계]</td></tr>
      </tbody>
    </table>
  </div>
  <p class="meta matrix-note">빈 셀 = 카테고리에서 컬러 미사용. 셀 숫자 = 해당 카테고리 × 컬러 페어 컬러웨이 수.</p>
</section>
```

## 7. 스타일당 컬러웨이 수

```html
<section class="section" data-od-id="colorway-count">
  <p class="kicker">Colorway count per style</p>
  <h2 class="h2" style="margin-bottom: 28px;">Rule of thumb — 카테고리별 스타일당 컬러 수.</h2>
  <table class="count-table">
    <thead><tr><th>Category</th><th>스타일당 컬러웨이 수</th><th>사유</th></tr></thead>
    <tbody>
      <tr><td>셔츠</td><td>3~4</td><td>최고 캐리오버. 톱은 검색·전환 견인</td></tr>
      <tr><td>아우터</td><td>1~2</td><td>높은 원가 — 컬러웨이 리스크 제한</td></tr>
      <tr><td>팬츠</td><td>2~3</td><td>하의 앵커. 브랜드 메인 + 시즌 컬러 1</td></tr>
      <tr><td>니트</td><td>3~5</td><td>니트는 컬러 시프트 흡수 능력 좋음. 범위 캡처</td></tr>
      <tr><td>스커트 / 원피스</td><td>1~2</td><td>스테이트먼트 피스 — 실루엣당 1~2컬러</td></tr>
      <tr><td>액세서리</td><td>2~3</td><td>썸네일 가시성. 시즌 액센트 캐리 가능</td></tr>
    </tbody>
  </table>
</section>
```

## 8. TCX vs. TPG 노트

```html
<section class="section pantone-note" data-od-id="pantone-note">
  <div>
    <p class="kicker">Pantone systems</p>
    <h2 class="h2">TCX는 작업 표준. TPG는 종이 전용.</h2>
  </div>
  <div class="pantone-grid">
    <article class="pantone-card">
      <h3 class="h3">TCX · Textile Cotton Extended</h3>
      <p>염색 코튼 스와치. 패브릭 매칭, 랩딥 승인, LOT 수용의 표준. 약 2,625컬러. <strong>모든 공장 브리프에 TCX 사용</strong></p>
    </article>
    <article class="pantone-card">
      <h3 class="h3">TPG · Textile Paper Green</h3>
      <p>TCX의 인쇄 종이 버전. 약 40~60% 저렴. 동일 코드에서 TCX보다 약 15% 밝게 인쇄됨. <strong>인쇄 룩북 / 종이 프레젠테이션 전용. 패브릭 매칭 절대 금지</strong></p>
    </article>
  </div>
</section>
```

## 9. 염색 QC + Tolerance

```html
<section class="section qc-block" data-od-id="qc">
  <p class="kicker">Dyeing QC + tolerance</p>
  <h2 class="h2" style="margin-bottom: 24px;">공장 브리프 — TCX 코드와 함께 송부할 것.</h2>
  <div class="qc-grid">
    <article class="qc-card">
      <p class="kicker">Working standard</p>
      <h3 class="h3">Pantone TCX (패브릭)</h3>
      <p>이 컬러 스토리의 모든 코드는 TCX. TPG 코드(있을 때)는 인쇄물 참조 전용</p>
    </article>
    <article class="qc-card">
      <p class="kicker">Tolerance</p>
      <h3 class="h3">ΔE ≤ [1.0~2.0]</h3>
      <ul class="qc-list">
        <li><strong>브랜드 메인</strong> — ΔE ≤ 1.0 (예외 없음)</li>
        <li><strong>시즌</strong> — ΔE ≤ 1.5</li>
        <li><strong>액센트</strong> — ΔE ≤ 2.0</li>
      </ul>
    </article>
    <article class="qc-card">
      <p class="kicker">Lab-dip</p>
      <h3 class="h3">3-strike 승인</h3>
      <p>Strike 1 — 공장이 컬러당 3 스와치 송부(밝게 / 타겟 / 어둡게). D65 + TL84 하에서 비교. Strike 2 범위 좁힘. Strike 3 최종. 1라운드 5~10영업일</p>
    </article>
    <article class="qc-card">
      <p class="kicker">Bulk lot</p>
      <h3 class="h3">LOT별 head-to-head</h3>
      <p>모든 벌크 염색 LOT은 D65 + TL84 하에서 승인 Strike와 head-to-head 비교. 동일 TCX 브리프에서도 LOT 드리프트가 ΔE 2.0 초과 가능 — 공장 서면 LOCK</p>
    </article>
    <article class="qc-card">
      <p class="kicker">On near-miss</p>
      <h3 class="h3">Accept / re-strike / reject</h3>
      <p>Tolerance 내 — 수용. Tolerance 외 + 방향성 수정 가능 — re-strike (5~7일). Tolerance 외 + 수정 불가 — 거절 + 재염색 (10~14일 + 비용 추가)</p>
    </article>
    <article class="qc-card">
      <p class="kicker">Light source</p>
      <h3 class="h3">D65 + TL84 최소</h3>
      <p>D65 데일라이트 검증, TL84 매장 형광등 일반. 단일 광원 검토는 metamerism 은폐. 한국 D2C 매장은 대부분 TL84</p>
    </article>
  </div>
</section>
```

## 10. Anti-palette

```html
<section class="section anti-block" data-od-id="anti-palette">
  <div>
    <p class="kicker">Anti-palette</p>
    <h2 class="h2">[시즌]은 의도적으로 이 컬러들을 사용하지 않음.</h2>
  </div>
  <ul class="anti-list">
    <li>[형광 금지 — 무신사 썸네일 워시아웃 + 브랜드 충돌]</li>
    <li>[파우더 핑크 금지 — 26FW 이미 히어로로 사용, 고객 인식 "오래된 재고"]</li>
    <li>[순수 블랙 금지 — 브랜드 메인은 소프트 블랙 19-1102 TCX]</li>
    <li>[애시드 옐로우 금지 — 브랜드 행택 충돌]</li>
    <li>[리조트 코랄 금지 — 영역 외]</li>
  </ul>
</section>
```

## 11. 캐리오버 표

```html
<section class="section" data-od-id="carryover">
  <p class="kicker">Carryover from previous seasons</p>
  <h2 class="h2" style="margin-bottom: 28px;">연속성 체크 — 지속되는 컬러.</h2>
  <table class="carryover-table">
    <thead>
      <tr><th>Color</th><th>TCX</th><th>From</th><th>Sell-through cue</th><th>Status</th></tr>
    </thead>
    <tbody>
      <tr><td><span class="row-chip" style="background:[HEX];"></span>[이름]</td><td>[TCX]</td><td>26SS / 26FW</td><td>[정상판매율 %, 랭크, 또는 노트]</td><td>[carryover · main]</td></tr>
      <tr><td><span class="row-chip" style="background:[HEX];"></span>[이름]</td><td>[TCX]</td><td>26FW</td><td>[노트]</td><td>[carryover · main]</td></tr>
      <tr><td><span class="row-chip" style="background:[HEX];"></span>[이름]</td><td>[TCX]</td><td>26SS</td><td>[노트]</td><td>[carryover · main]</td></tr>
    </tbody>
  </table>
</section>
```

## 12. Open / Next Decisions

```html
<section class="section open-questions" data-od-id="next-decisions">
  <div>
    <p class="kicker">Open / next</p>
    <h2 class="h2">아직 LOCK 필요한 것, 일자.</h2>
  </div>
  <ol class="next-list">
    <li><span class="next-when">[YYYY-MM-DD]</span><span class="next-what">[결정 — 예: MD와 드라이 팝 액센트 saturation 확정]</span></li>
    <li><span class="next-when">[YYYY-MM-DD]</span><span class="next-what">[결정 — 예: 공장 랩딥 Strike 1 제출]</span></li>
    <li><span class="next-when">[YYYY-MM-DD]</span><span class="next-what">[결정 — 예: WGSN 트렌드 역추적용 Coloro 코드 LOCK]</span></li>
    <li><span class="next-when">[YYYY-MM-DD]</span><span class="next-what">[결정]</span></li>
  </ol>
</section>
```
