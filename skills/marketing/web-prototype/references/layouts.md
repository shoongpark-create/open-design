# K-패션 자사몰 웹 프로토타입 레이아웃

**붙여넣기 가능한 8가지 섹션 스켈레톤.** `assets/template.html`의 `<main id="content">`에 드롭. 섹션을 처음부터 쓰지 말고 — 가장 가까운 레이아웃을 골라 붙인 뒤 카피를 K-패션 톤으로 교체.

## 사전 점검 (붙이기 전 1회)

1. **`assets/template.html`을 읽으세요** — `<style>` 블록 끝까지. 아래에서 사용하는 모든 클래스가 거기 존재해야 합니다. 누락이 있다면 인라인 정의보다 `<style>`에 추가.
2. **카피를 쓰기 전에 섹션 리스트를 고르세요.** K-패션 페이지별 기본 리듬:
   - **자사몰 메인**: 1 히어로 → 3 키 아이템 트리플렛 → 4 시즌 통계 또는 5 풀쿼트 → 4 매거진 스플릿 → 6 사전예약 CTA → 푸터
   - **룩북 페이지**: 1 히어로 센터 → 2 매거진 그리드 → 5 디자이너 풀쿼트 → 4 정상판매율 통계 → 6 CTA
   - **팝업 안내**: 1 히어로 센터 → 위치·운영시간 그리드 → 라인업 → 6 예약 CTA
   - **콜라보 페이지**: 1 히어로 스플릿 → 콜라보 스토리 → 3 컬렉션 트리플렛 → 카운트다운 CTA
   - **사전예약 단일**: 1 히어로 센터 → 2 키 아이템 스플릿 → 8 프리오더 비교 → 6 CTA
3. **액센트 1개, 화면당 최대 2회.** 히어로 아이브로우와 1차 CTA가 이미 사용 중 — 3번째는 신중히.

## 클래스 인벤토리 (`template.html`에 정의되어 있어야 함)

> `section` `container` `hero` `hero-center` `hero-split` `hero-cta` `eyebrow` `lead` `h1` `h2` `h3` `meta` `num` `btn` `btn-primary` `btn-secondary` `btn-ghost` `btn-arrow` `card` `card-flat` `card-rule` `feature` `feature-mark` `stat` `stat-num` `stat-label` `stat-unit` `quote` `quote-mark` `quote-author` `pill` `tag` `field` `input` `textarea` `ds-table` `num-col` `ph-img` `square` `portrait` `wide` `rule` `rule-strong` `grid-2` `grid-3` `grid-4` `grid-2-1` `grid-1-2` `row` `row-between` `stack` `log-row` `pull` `topnav` `pagefoot`

리스트에 없는 클래스가 필요하면 `<style>`에 먼저 정의하거나 `style="…"` 인라인 사용. 절대 CSS 없는 전역 클래스를 발명하지 말 것.

---

## Layout 1 — 히어로, 센터

페이지가 한 문장 시즌 헤드라인으로 시작할 때 사용 (대부분의 자사몰 메인, 룩북 페이지, 캠페인 페이지). 아이브로우 1개, h1 1개 (영문 헤드라인 ≤ 8단어 또는 한국어 ≤ 14자), 데크 1줄, CTA 2개.

```html
<section class="section hero" data-od-id="hero">
  <div class="container hero-center">
    <p class="eyebrow">27SS · LOOKBOOK</p>
    <h1>On Spring, and Silence.</h1>
    <p class="lead">27SS, 마뗑킴이 봄을 가장 조용히 입는 방법. 사전예약은 05/22까지.</p>
    <div class="hero-cta">
      <button class="btn btn-primary">사전예약 신청</button>
      <button class="btn btn-secondary">룩북 보기</button>
    </div>
  </div>
</section>
```

## Layout 2 — 히어로, 스플릿 (텍스트 + 비주얼)

룩북 컷·키비주얼·모델 풀샷이 실제로 있을 때 사용. 좌측 카피, 우측 `ph-img` 자리표시자(나중에 룩북 컷으로 교체).

```html
<section class="section" data-od-id="hero-split">
  <div class="container hero-split">
    <div>
      <p class="eyebrow">27SS · KEY ITEM</p>
      <h1>가장 조용한 한 벌.</h1>
      <p class="lead" style="margin-top: 20px;">햇살이 닿으면 천천히 결을 따라 번지는 셔츠. 봄날의 첫 한 벌. 프리오더 ₩89,000 (정가 ₩128,000).</p>
      <div class="hero-cta" style="margin-top: 28px;">
        <button class="btn btn-primary">사전예약 신청</button>
        <button class="btn btn-ghost btn-arrow">디자이너 노트 읽기</button>
      </div>
    </div>
    <div class="ph-img portrait" aria-label="모델 풀샷 자리">[ 모델 풀샷 · 3:4 · 사진 이호인 ]</div>
  </div>
</section>
```

## Layout 3 — 키 아이템 트리플렛

3개 키 아이템 셀. 작은 `<h2>`로 행을 프레이밍. 모든 헤딩에 아이콘을 달지 말고 — 셀당 모노라인 시그니처 마크 1개. 또는 K-패션 톤으로 모델 부분 컷(`.ph-img.square`) 사용.

```html
<section class="section" data-od-id="key-items">
  <div class="container stack" style="gap: 56px;">
    <div style="max-width: 36ch;">
      <p class="eyebrow">27SS · KEY ITEMS</p>
      <h2>이번 시즌, 가장 먼저 만나야 할 세 가지.</h2>
    </div>
    <div class="grid-3">
      <div class="feature card-flat">
        <div class="ph-img square" aria-label="키 아이템 1">[ 키 아이템 1 · 1:1 ]</div>
        <h3 style="margin-top: 16px;">사일런트 코튼 셔츠</h3>
        <p>봄날의 가장 조용한 한 벌. 코튼 100%, 워싱 후 자연스러운 결.</p>
        <p class="meta" style="margin-top: 8px;">₩128,000 · 프리오더가 ₩89,000</p>
      </div>
      <div class="feature card-flat">
        <div class="ph-img square" aria-label="키 아이템 2">[ 키 아이템 2 · 1:1 ]</div>
        <h3 style="margin-top: 16px;">슬로 베이지 트라우저</h3>
        <p>매트하게 떨어지는 면 100% 트라우저. 4가지 컬러웨이.</p>
        <p class="meta" style="margin-top: 8px;">₩148,000 · 프리오더가 ₩99,000</p>
      </div>
      <div class="feature card-flat">
        <div class="ph-img square" aria-label="키 아이템 3">[ 키 아이템 3 · 1:1 ]</div>
        <h3 style="margin-top: 16px;">매트 김 니트 카디건</h3>
        <p>매트 김의 시그니처 실루엣 — 6년째 매 시즌 돌아오는 캐리오버.</p>
        <p class="meta" style="margin-top: 8px;">₩168,000 · 프리오더가 ₩119,000</p>
      </div>
    </div>
  </div>
</section>
```

## Layout 4 — 시즌 통계 행

K-패션 KPI가 실제로 있을 때 사용. 3개 통계 최대 — 4개는 브로셔 느낌. **수치를 발명하지 말 것.** 데이터 없으면 다른 레이아웃 선택.

```html
<section class="section" data-od-id="stats">
  <div class="container">
    <p class="eyebrow" style="margin-bottom: 40px;">BY THE NUMBERS · 26SS 결산</p>
    <div class="grid-3">
      <div class="stat">
        <div class="stat-num num">82<span class="stat-unit">%</span></div>
        <p class="stat-label">26SS 정상판매율 — 카테고리 평균 65% 대비 +17%p.</p>
      </div>
      <div class="stat">
        <div class="stat-num num">12,400</div>
        <p class="stat-label">26SS 룩북 페이지 사전 방문자. 사전예약 전환율 18.2%.</p>
      </div>
      <div class="stat">
        <div class="stat-num num">6<span class="stat-unit">회</span></div>
        <p class="stat-label">시즌 재고 회전수. 캐리오버 캡슐 라인의 시그니처 회전율.</p>
      </div>
    </div>
  </div>
</section>
```

## Layout 5 — 디자이너 풀쿼트

디자이너·대표 발언 1개. 절제 사용 — 페이지당 1개, 연속 2개 금지.

```html
<section class="section" data-od-id="quote">
  <div class="container" style="max-width: 800px;">
    <div class="quote-mark">"</div>
    <blockquote class="quote">옷은 가장 조용한 자기소개입니다. 27SS는 봄을 가장 조용히 입는 방법에 관한 시즌이에요.</blockquote>
    <p class="quote-author">— 매트 김, MATIN KIM 디자이너 · 27SS LOOKBOOK 노트</p>
  </div>
</section>
```

## Layout 6 — 사전예약 CTA (마무리)

페이지를 결정적 행동 1개로 마무리. 센터 정렬, 충분한 여백, 1차 버튼 1개. 페이지에 다른 버튼이 없을 때만 2차 추가.

```html
<section class="section" data-od-id="cta-strip" style="text-align: center;">
  <div class="container" style="max-width: 600px;">
    <h2>27SS, 가장 먼저 입어보세요.</h2>
    <p class="lead" style="margin: 16px auto 32px;">프리오더는 05/22까지. MEMBERS GOLD 이상은 24시간 우선 신청 가능합니다.</p>
    <button class="btn btn-primary">사전예약 신청</button>
  </div>
</section>
```

콜라보 페이지의 카운트다운 CTA 변형:

```html
<section class="section" data-od-id="cta-countdown" style="text-align: center;">
  <div class="container" style="max-width: 600px;">
    <p class="eyebrow">WACKYWILLY × IP COLLAB</p>
    <h2>05/27 11:00 KST · 발매까지 D-12.</h2>
    <p class="lead" style="margin: 16px auto 32px;">한정 800 LOT. MEMBERS는 24시간 우선 접근.</p>
    <div class="hero-cta" style="justify-content: center;">
      <button class="btn btn-primary">알림 신청</button>
      <button class="btn btn-secondary">콜라보 스토리 보기</button>
    </div>
  </div>
</section>
```

## Layout 7 — 매거진 로그 리스트 (저널 / 룩북 / 디자이너 노트 인덱스)

날짜 매거진 컬럼 리스트의 에디토리얼 레이아웃. 좌측 mono 날짜, 중간 제목 + 데크, 우측 카테고리. 박스가 아닌 상단 보더만 — 박스는 브로셔 느낌.

```html
<section class="section" data-od-id="log">
  <div class="container">
    <div class="row-between" style="margin-bottom: 32px;">
      <h2>최근 매거진</h2>
      <a class="btn btn-ghost btn-arrow" href="#">전체 보기</a>
    </div>
    <div>
      <article class="log-row">
        <span class="meta">2026.05.10</span>
        <div>
          <h3>봄, 가장 조용한 옷에 대하여</h3>
          <p style="margin: 4px 0 0; color: var(--muted); font-size: 14px;">매트 김 디자이너가 풀어낸 27SS 컨셉 비하인드.</p>
        </div>
        <span class="pull meta">SEASON STORY</span>
      </article>
      <article class="log-row">
        <span class="meta">2026.05.02</span>
        <div>
          <h3>27SS LOOKBOOK · 사진 이호인</h3>
          <p style="margin: 4px 0 0; color: var(--muted); font-size: 14px;">12개 룩으로 본 봄의 다섯 가지 색.</p>
        </div>
        <span class="pull meta">LOOKBOOK</span>
      </article>
      <article class="log-row">
        <span class="meta">2026.04.20</span>
        <div>
          <h3>성수동 BLOOM 팝업스토어 안내</h3>
          <p style="margin: 4px 0 0; color: var(--muted); font-size: 14px;">05/27 ~ 06/15, 성수동 1가. MEMBERS 우선 입장.</p>
        </div>
        <span class="pull meta">POP-UP</span>
      </article>
    </div>
  </div>
</section>
```

## Layout 8 — 프리오더 가격 비교 (프리오더가 vs 정상가)

헤어라인 보더, mono 숫자, 1개 열을 액센트 보더로 강조. 행 전체를 surface 컬러로 칠하지 말 것 — "테이블" 느낌이 납니다.

```html
<section class="section" data-od-id="pre-order">
  <div class="container">
    <div style="text-align: center; max-width: 36ch; margin: 0 auto 56px;">
      <p class="eyebrow">PRE-ORDER · 05/22 마감</p>
      <h2>프리오더 vs 정상가.</h2>
    </div>
    <table class="ds-table">
      <thead>
        <tr>
          <th>아이템</th>
          <th class="num-col">프리오더가</th>
          <th class="num-col">정상가</th>
          <th class="num-col">발매일</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>사일런트 코튼 셔츠</td><td class="num-col">₩89,000</td><td class="num-col">₩128,000</td><td class="num-col">05/27</td></tr>
        <tr><td>슬로 베이지 트라우저</td><td class="num-col">₩99,000</td><td class="num-col">₩148,000</td><td class="num-col">05/27</td></tr>
        <tr><td>매트 김 니트 카디건</td><td class="num-col">₩119,000</td><td class="num-col">₩168,000</td><td class="num-col">06/03</td></tr>
        <tr><td>린넨 셋업 (재킷 + 팬츠)</td><td class="num-col">₩249,000</td><td class="num-col">₩348,000</td><td class="num-col">06/03</td></tr>
        <tr style="border-top: 1px solid var(--fg);">
          <td><strong>평균 할인율</strong></td>
          <td class="num-col"><strong>-30%</strong></td>
          <td class="num-col">—</td>
          <td class="num-col"><strong>MEMBERS 24h 우선</strong></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
```

---

## 섹션 리듬 — 의심스러울 때

5섹션 자사몰 메인:
1. 히어로 (Layout 1 또는 2)
2. 키 아이템 (Layout 3)
3. 통계 *또는* 풀쿼트 (Layout 4 또는 5)
4. 스플릿 디테일 (커스텀, `grid-2-1` / `grid-1-2` 사용)
5. CTA + 푸터 (Layout 6)

4섹션 룩북/매거진 인덱스:
1. 히어로 센터 (Layout 1)
2. 매거진 로그 (Layout 7)
3. CTA + 푸터 (Layout 6)

연속 2개 통계 행, 연속 2개 풀쿼트, 연속 2개 키 아이템 트리플렛 — 모두 시각 피로. 교차로 배치.

## K-패션 페이지별 추천 매핑

| 페이지 종류 | 추천 레이아웃 조합 |
|---|---|
| 자사몰 메인 | 1 → 3 → 4 → 7 → 6 |
| 27SS 룩북 페이지 | 1 → 2 → 5 → 4 → 6 |
| 사전예약 단일 페이지 | 1 → 2 → 8 → 6 |
| 성수동 팝업 안내 | 1 → 그리드 → 7 → 6 |
| 콜라보 발매 페이지 | 2 → 5 → 3 → 카운트다운 CTA |
| 매거진 인덱스 | 1 → 7 → 6 |
