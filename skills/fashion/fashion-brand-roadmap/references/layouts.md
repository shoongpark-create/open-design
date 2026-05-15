# 브랜드 로드맵 레이아웃 (3종)

세 가지 리듬 중 **하나**를 Step 2에서 선택하여 `<main id="brand-roadmap">` 안에 붙여 넣으세요.

피라미드는 차트 라이브러리 없이 **CSS만으로** 구성합니다. 사다리꼴 div 스택 + apex는 `clip-path: polygon(50% 0, 100% 100%, 0 100%)`로 삼각형 처리.

OpenDesign 환경에서 인라인 코멘트 모드를 사용하려면 주요 섹션에 `data-od-id` 속성을 추가하세요. 다른 환경에서는 일반 `id` 속성으로 충분합니다.

---

## 리듬 A — 클래식 4단 피라미드 (기본값)

좌측 어노테이션 레일 + 우측 대칭 피라미드. 북극성이 정점에, 파운데이션이 기저에 위치합니다.

```html
<header class="br-header">
  <div class="br-meta">
    <span class="brand">[REPLACE 와키윌리]</span>
    <span class="year">[REPLACE FY26]</span>
    <span class="status">[REPLACE locked]</span>
    <span class="date">[REPLACE 2026-04-29]</span>
  </div>
</header>

<div class="br-grid br-grid--rail-and-pyramid">
  <aside class="br-rail" aria-label="단별 어노테이션 레일">
    <div class="rail-row" data-tier="north-star">
      <span class="rail-label">North Star</span>
      <span class="rail-note">[REPLACE 와키윌리의 궁극적 지향점 · 고객이 느끼는 브랜드의 "추상적이자 최종적" 모습]</span>
    </div>
    <div class="rail-row" data-tier="principles">
      <span class="rail-label">Principles</span>
      <span class="rail-note">[REPLACE 로드맵 실현을 위한 와키윌리의 "행동원칙"]</span>
    </div>
    <div class="rail-row" data-tier="characters">
      <span class="rail-label">Characters</span>
      <span class="rail-note">[REPLACE 고객들에게 비춰지는 와키윌리의 "구체적인" 모습]</span>
    </div>
    <div class="rail-row" data-tier="foundation">
      <span class="rail-label">Foundation</span>
      <span class="rail-note">[REPLACE 와키윌리의 "기초이자 시작"이었던 키워드]</span>
    </div>
  </aside>

  <section class="br-pyramid" aria-label="브랜드 피라미드">
    <div class="tier tier--apex" data-tier="north-star">
      <div class="apex-callout">
        <p>[REPLACE 상품력으로 신뢰를]</p>
        <p>[REPLACE 트렌드로 감도를]</p>
        <p>[REPLACE IP로 독창성을]</p>
        <p>[REPLACE 고객에게 즐거움을]</p>
      </div>
    </div>
    <div class="tier tier--principles" data-tier="principles">
      <div class="cell">[REPLACE 팬덤]</div>
      <div class="cell">[REPLACE 존중]</div>
      <div class="cell">[REPLACE 새로운시도]</div>
      <div class="cell">[REPLACE 트렌드리딩]</div>
    </div>
    <div class="tier tier--characters" data-tier="characters">
      <div class="cell">[REPLACE 재미있는]</div>
      <div class="cell">[REPLACE 따라하고싶은]</div>
      <div class="cell">[REPLACE 신뢰할수있는]</div>
      <div class="cell">[REPLACE K-아이돌]</div>
      <div class="cell cell--side">[REPLACE 캐릭터]</div>
      <div class="cell cell--side">[REPLACE 색감좋은]</div>
    </div>
    <div class="tier tier--foundation" data-tier="foundation">
      <div class="circle">[REPLACE 아이피]</div>
      <div class="circle">[REPLACE 프로덕트]</div>
      <div class="circle">[REPLACE 라이프스타일]</div>
      <div class="circle">[REPLACE 플레이]</div>
    </div>
  </section>
</div>
```

**언제 쓰나**: 일반적인 브랜드 로드맵 첫 작성·정기 개정 시 기본값.

---

## 리듬 B — 스택드 블록 피라미드

각 단을 독립 블록(직사각형)으로 표현. 한 단에 5개 이상 항목이 있을 때 또는 사다리꼴 시각 효과보다 정보 밀도가 더 중요할 때.

```html
<section class="br-pyramid br-pyramid--blocks" aria-label="브랜드 피라미드">
  <div class="block-tier" data-tier="north-star">
    <h3>North Star</h3>
    <div class="block-grid">
      <!-- 1~4개 셀: 북극성 절(clause) -->
    </div>
  </div>
  <div class="block-tier" data-tier="principles">
    <h3>Principles</h3>
    <div class="block-grid">
      <!-- 3~6개 셀: 행동원칙 -->
    </div>
  </div>
  <div class="block-tier" data-tier="characters">
    <h3>Characters</h3>
    <div class="block-grid">
      <!-- 4~6개 셀: 캐릭터 -->
    </div>
  </div>
  <div class="block-tier" data-tier="foundation">
    <h3>Foundation</h3>
    <div class="block-grid">
      <!-- 3~5개 셀: 파운데이션 -->
    </div>
  </div>
</section>
```

**언제 쓰나**: 캐릭터나 행동원칙이 6개 이상으로 많아 사다리꼴 안에 다 들어가지 않을 때. 또는 A4 인쇄 출력용.

---

## 리듬 C — 어노테이션 프레임

좌측에 단별 풀 어노테이션 단락, 우측에 피라미드. 풀 컨텍스트가 필요한 청중(이사회 미팅, 전략 리뷰, 신규 입사자 온보딩).

```html
<div class="br-grid br-grid--annotation-and-pyramid">
  <section class="annotation-stack">
    <article data-tier="north-star">
      <h3>North Star</h3>
      <p>[REPLACE — 풀 단락. 북극성이 왜 이 4개 절(clause)로 정해졌는지, 어떤 고객 인식 변화를 목표로 하는지 설명]</p>
    </article>
    <article data-tier="principles">
      <h3>Principles</h3>
      <p>[REPLACE — 풀 단락. 각 행동원칙이 어떤 의사결정 상황에서 어떻게 작동하는지 예시]</p>
    </article>
    <article data-tier="characters">
      <h3>Characters</h3>
      <p>[REPLACE — 풀 단락. 캐릭터 형용사가 고객 리서치·SNS 댓글·후기에서 어떻게 검증됐는지]</p>
    </article>
    <article data-tier="foundation">
      <h3>Foundation</h3>
      <p>[REPLACE — 풀 단락. 창업 키워드의 기원과 현재까지의 진화 경로]</p>
    </article>
  </section>
  <section class="br-pyramid" aria-label="브랜드 피라미드">
    <!-- 리듬 A와 동일한 피라미드 마크업 -->
  </section>
</div>
```

**언제 쓰나**: 이사회 발표용, 신규 입사자 온보딩 가이드, IR(투자자 관계) 자료. 또는 4단 어느 한 단에 풀 컨텍스트 설명이 필수일 때.

---

## 공통 꼬리 블록 (3종 모두 동일하게 사용)

피라미드 아래에 항상 추가합니다.

```html
<section class="cross-reference" aria-label="교차 참조">
  <h2>이 로드맵이 적용되는 시즌 산출물</h2>
  <ul>
    <li><strong>포지셔닝 맵</strong> — 캐릭터 단이 맵의 전략적 의도를 결정</li>
    <li><strong>시즌 전략서</strong> — 행동원칙 단이 시즌 3대 전략 축을 지배</li>
    <li><strong>시즌 컨셉 보드</strong> — 파운데이션 키워드가 시즌 테리토리의 출발점</li>
    <li><strong>그래픽 디렉션</strong> — 캐릭터 형용사가 그래픽 톤 선택의 기준</li>
    <li><strong>룩북</strong> — 북극성·캐릭터가 화보 톤매너의 최상위 기준</li>
    <li><strong>IMC 캘린더</strong> — 행동원칙이 캠페인 의사결정의 사고 기준</li>
  </ul>
</section>

<section class="revision-log" aria-label="리비전 로그">
  <h2>Revision Log</h2>
  <table>
    <thead>
      <tr><th>버전</th><th>일자</th><th>변경 내용 (1줄)</th><th>검토자</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>v[N]</td>
        <td>[YYYY-MM-DD]</td>
        <td>[1줄 변경 노트 · 예: 캐릭터에 "K-아이돌" 추가, "강한"을 "신뢰할수있는"으로 진화]</td>
        <td>[owner 확인]</td>
      </tr>
    </tbody>
  </table>
</section>
```

---

## 리듬 선택 가이드 요약

| 상황 | 권장 리듬 |
|---|---|
| 첫 작성, 표준 연 1회 개정 | **A — 클래식 4단** |
| 한 단에 항목 5개 이상, 정보 밀도 우선 | **B — 스택드 블록** |
| 이사회 발표, IR, 풀 컨텍스트 필요 | **C — 어노테이션 프레임** |
| A4 인쇄 출력용 | **B — 스택드 블록** |

선택한 리듬을 작업 흐름 Step 2에서 한 문장으로 선언하세요. 예: "리듬 A 클래식 4단 피라미드를 선택했습니다."
