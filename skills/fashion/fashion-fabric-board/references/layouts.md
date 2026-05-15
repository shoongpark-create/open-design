# 패브릭 보드 레이아웃 (3종)

세 가지 레이아웃 중 **하나**를 Step 2에서 선택하여 `<main id="fabric-board">` 안에 붙여 넣으세요. 항상 랩딥 상태 표 + Open Decisions 꼬리 블록으로 마무리.

OpenDesign 환경에서 인라인 코멘트 모드를 사용하려면 주요 섹션에 `data-od-id` 속성을 추가하세요. 다른 환경에서는 일반 `id` 속성으로 충분합니다.

---

## 레이아웃 A — 두 컬럼 라인 분할 (기본값)

UNI 블록 좌측, WOMEN 블록 우측, 기능성 블록 풀 폭 하단. 두 라인이 대체로 균형 잡힌 시즌에 사용.

```html
<header class="fb-header">
  <div class="fb-meta">
    <span class="season">[REPLACE 27SS]</span>
    <span class="lines">[REPLACE UNI · WOMEN]</span>
    <span class="status">[REPLACE v1]</span>
    <span class="date">[REPLACE 2026-04-29]</span>
  </div>
  <h1 class="thesis">[REPLACE — 1~3 문장 패브릭 자세. 예: 27SS는 라이트 + 기능성에 기댐. WOMEN 라인에는 로맨틱 도트/레이스 서포트.]</h1>
</header>

<section class="fb-functional" aria-label="기능성 패브릭">
  <header class="block-header">
    <h2>Functional fabrics</h2>
    <p>[REPLACE — 한 줄: 이번 시즌 function-first 커뮤니케이션 정책]</p>
  </header>
  <div class="fabric-grid fabric-grid--functional">
    <article class="fabric-card fabric-card--functional" data-fabric="sorona-cool">
      <h3 class="fabric-name">[REPLACE 소로나쿨 싱글저지]</h3>
      <ul class="fabric-meta">
        <li><span>Function</span>[REPLACE — 쿨터치, 친환경 소로나 + 합섬 블렌드]</li>
        <li><span>Brand</span>[Sorona]</li>
        <li><span>Use</span>[REPLACE — 여름 티/슬리브리스/라이트 아우터]</li>
      </ul>
      <div class="fabric-imagery">
        <figure>
          <div class="image-frame" data-fallback="images/func-01-sorona-cool.png 이미지 생성 필요">
            <img src="images/func-01-sorona-cool.png" alt="소로나쿨 스와치" />
          </div>
          <figcaption>swatch</figcaption>
        </figure>
        <figure>
          <div class="image-frame" data-fallback="images/func-01-sorona-cool-hangtag.png 이미지 생성 필요">
            <img src="images/func-01-sorona-cool-hangtag.png" alt="소로나쿨 행택" />
          </div>
          <figcaption>hangtag</figcaption>
        </figure>
      </div>
    </article>
    <!-- 2~4 fabric-card--functional 반복 -->
  </div>
</section>

<div class="fb-line-split">
  <section class="fb-line" data-line="uni" aria-label="UNI 구조 패브릭">
    <header class="block-header"><h2>UNI · Structural</h2></header>
    <div class="fabric-grid fabric-grid--structural">
      <article class="fabric-card" data-fabric="waffle">
        <h3 class="fabric-name">[REPLACE 와플 저지]</h3>
        <ul class="fabric-meta">
          <li><span>Hand</span>[REPLACE — 소프트, 입체감, 라이트 미드 웨이트]</li>
          <li><span>Knit</span>[waffle]</li>
          <li><span>Use</span>[REPLACE — UNI 헨리/오버셔츠]</li>
        </ul>
        <div class="fabric-imagery">
          <figure>
            <div class="image-frame" data-fallback="images/uni-fabric-01-waffle.png 이미지 생성 필요">
              <img src="images/uni-fabric-01-waffle.png" alt="와플 스와치" />
            </div>
            <figcaption>swatch</figcaption>
          </figure>
          <figure>
            <div class="image-frame" data-fallback="images/uni-fabric-01-waffle-worn.png 이미지 생성 필요">
              <img src="images/uni-fabric-01-waffle-worn.png" alt="와플 착장" />
            </div>
            <figcaption>worn</figcaption>
          </figure>
        </div>
      </article>
      <!-- 4~6 반복 -->
    </div>
  </section>

  <section class="fb-line" data-line="women" aria-label="WOMEN 구조 패브릭">
    <header class="block-header"><h2>WOMEN · Structural</h2></header>
    <div class="fabric-grid fabric-grid--structural">
      <!-- 4~6 fabric-card. WOMEN 라인은 도트/러블리 프린트/폴리 우라기리/레이스 등 -->
    </div>
  </section>
</div>
```

**언제 쓰나**: 두 라인 균형, 보드 표준 기본값.

---

## 레이아웃 B — 라인별 스택드

UNI 블록 상단, WOMEN 블록 중간, 기능성 블록 하단. 시즌이 라인 불균형(UNI 지배 또는 WOMEN 지배)이며 지배 라인 우선 표시 원할 때.

레이아웃 A와 동일 빌딩 블록, UNI / WOMEN 섹션을 세로 스택, 기능성 블록을 하단에 배치.

**언제 쓰나**: 와키윌리처럼 UNI 라인이 시즌 주축인 경우, 또는 WOMEN 라인이 캡슐 컬렉션 성격일 때.

---

## 레이아웃 C — Functional-first

기능성 블록 상단에 행택 mock 크게 표시; UNI + WOMEN 구조 블록 하단 두 컬럼 분할. 시즌 가치 동인이 기능 스토리(히트테크 여름, 지속가능성 캡슐)일 때.

재배치: 기능성 블록 먼저(풀 폭, mock 크게), 그 다음 두 컬럼 라인 분할.

**언제 쓰나**: 무신사 스탠다드형 가성비 기능성 어필 시즌, 또는 여름 쿨링 캠페인 중심 시즌.

---

## 공통 꼬리 블록 (3종 모두 동일 사용)

```html
<section class="approval-status" aria-label="랩딥 / 승인 상태">
  <h2>Lab-dip / approval status</h2>
  <table>
    <thead>
      <tr>
        <th>Fabric</th>
        <th>Status</th>
        <th>Supplier</th>
        <th>Lead time</th>
        <th>Note</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>[패브릭 이름]</td>
        <td>[for-info / lab-dip pending / bulk pending / approved]</td>
        <td>[공급사 이름]</td>
        <td>[리드타임, 예: 25일]</td>
        <td>[노트]</td>
      </tr>
      <!-- 패브릭당 1행 반복 -->
    </tbody>
  </table>
</section>

<section class="open-decisions" aria-label="오픈 결정">
  <h2>Open / Next Decisions</h2>
  <ul>
    <li>[결정 사항 — 예: 소로나쿨 공급사 lead time 1주 단축 가능 여부 확인] · owner: [이름] · by: [YYYY-MM-DD]</li>
    <li>[행택 자카드 디자인 확정] · owner: [그래픽팀장] · by: [YYYY-MM-DD]</li>
  </ul>
</section>
```

## 레이아웃 선택 가이드 요약

| 상황 | 권장 레이아웃 |
|---|---|
| UNI / WOMEN 균형, 표준 시즌 | **A — 두 컬럼 라인 분할** |
| 한 라인이 지배, 우선 표시 필요 | **B — 라인별 스택드** |
| 기능성·지속가능성 캠페인 중심 시즌 | **C — Functional-first** |

선택 레이아웃을 작업 흐름 Step 2에서 한 문장으로 선언하세요.
