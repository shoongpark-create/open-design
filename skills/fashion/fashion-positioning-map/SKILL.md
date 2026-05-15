---
name: fashion-positioning-map
description: |
  K-패션 브랜드의 **브랜드 포지셔닝 맵**을 단일 HTML 파일로 생성하는 스킬입니다.
  브랜드와 경쟁사 셋을 2x2 축 차트에 플롯합니다(기본 축: BASIC ↔ ACCENT × 
  NEW BASIC ↔ TREND — K-young-casual 업계 표준. 축은 설정 가능).
  경쟁 브랜드 워드마크 라이브러리, 타겟 쿼드런트 해석, 1줄 전략 의도를 포함합니다.
  사용자가 "포지셔닝 맵", "브랜드 좌표", "경쟁 좌표", "positioning map",
  "competitive map", "brand placement"를 언급하면 활성화하세요.
triggers:
  - "포지셔닝 맵"
  - "브랜드 좌표"
  - "경쟁 좌표"
  - "브랜드 배치"
  - "지각 맵"
  - "positioning map"
  - "brand map"
  - "brand placement"
  - "competitive map"
  - "perceptual map"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 18
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "와키윌리(WACKYWILLY) 27SS 포지셔닝 맵을 만들어주세요. x축 BASIC ↔ ACCENT, y축 NEW BASIC ↔ TREND. UNI와 WOMEN을 모두 중앙 위쪽에 플롯. 경쟁사: 마뗑킴, 마르디메크르디, 아더에러, 키르시, 무신사 스탠다드, 디스이즈네버댓, 폴라플로우, IAB STUDIO, OY, 87MM, 라이프워크, 인스턴트펑크. 전략 의도: '감도 높은 트렌디함에 위트를 더한, 합리적인 가격의 스트릿 브랜드'."
---

# 패션 포지셔닝 맵 스킬

K-패션 브랜드의 **브랜드 포지셔닝 맵**을 단일 HTML 파일로 생성합니다. 디자인 / MD / 마케팅을 동일한 경쟁 좌표계에 정렬하는 2x2 비주얼이며 **내부용** 산출물입니다. 청중은 리더십 팀과 30초 안에 브랜드의 전략적 위치를 흡수해야 하는 신규 입사자입니다.

포지셔닝 맵은 네 가지 질문을 답합니다.

1. **우리는 어디에 있는가?** (자사 브랜드의 좌표 + 짧은 라쇼날)
2. **누가 우리 쿼드런트에 있는가?** (같은 사분면의 직접 경쟁사)
3. **누가 우리 *옆에* 있는가?** (인접 쿼드런트 — 우리가 드리프트할 수 있는 방향)
4. **이번 시즌 우리의 전략 의도는?** (시즌 운동 방향 1줄 — 예: "중앙 유지하되 ACCENT 쪽으로 약간 푸시, 단 TREND-extreme까지 건너가지 않음")

## 환경 호환성

이 스킬은 모든 LLM 환경에서 동일하게 사용할 수 있습니다.

- **Claude 환경(Claude.ai · Claude Code)**: 결과물을 `<artifact>` 태그로 감싸 출력합니다.
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 HTML 코드 블록으로 출력합니다.
- **OpenDesign 환경**: frontmatter의 `od:` 블록과 `data-od-id` 속성을 활용하면 인라인 코멘트·미리보기 기능을 사용할 수 있습니다.

이미지 생성은 **선택적**입니다(이 스킬의 기본 렌더링은 CSS 워드마크 텍스트).

## 출력 언어 정책

사용자가 한국어로 작성하거나 브랜드/맥락이 한국 K-패션이라면, 산출물 카피는 **한국 패션 비즈니스 등록(register)**을 따릅니다.

- 축 라벨은 영문 그대로 유지(`BASIC`, `NEW BASIC`, `TREND`, `ACCENT`, `VALUE`, `PREMIUM` 등). K-young-casual 업계 표준.
- 경쟁 브랜드명은 **브랜드의 정식 표기** 그대로 — 자동 대문자화 금지. 예: `miu miu`(소문자), `PLAY CDG`(대문자), `마뗑킴`(한글), `Mardi Mercredi`(영문 혼용).
- 쿼드런트 라벨은 영문(NW / NE / SW / SE) 그대로.
- 전략 의도 카피는 한국어로, 명사구 종결(예: `감도 높은 트렌디함에 위트를 더한, 합리적인 가격의 스트릿 브랜드`).
- 라인별 노트는 한국어 + 영어 산업용어 혼용(예: `유니: 뉴베이직 라인을 신선하고 세련되게 재정의해 기본물 매출 회복, 트렌드 아이템 병행 전개로 볼륨 재확보`).

## 타이포그래피

프로젝트 루트의 `DESIGN.md` 타이포그래피 토큰을 사용하세요. **Pretendard Variable**을 본문·테이블·UI 기본 폰트로 둡니다.

포지셔닝 맵은 **운영 덱 성격**이므로 `--font-display-report`(Paperlogy, Wanted Sans, SUIT)를 기본값으로 사용합니다. 브랜드 워드마크는 각 경쟁 브랜드의 *카노니컬 표기*를 따르며, 시스템 폰트로 렌더링합니다(워드마크 폰트를 임포트하지 마세요 — 가짜 로고로 오인될 수 있음).

## 폴더 구조

```
fashion-positioning-map/
├── SKILL.md
├── assets/
│   └── template.html
└── references/
    ├── axis-presets.md   ← 6개 공통 축 쌍
    ├── layouts.md        ← 레이아웃 3종
    └── checklist.md
```

## 작업 흐름

### Step 0 — 사전 점검

1. `assets/template.html`을 처음부터 끝까지 읽으세요.
2. `references/axis-presets.md`를 읽어 6개 공통 축 쌍 중 어느 것을 쓸지 가늠하세요.
3. `references/layouts.md`를 읽고 레이아웃을 선택하세요.
4. `references/checklist.md`를 읽어 검수 기준을 인지하세요.
5. 프로젝트 루트의 `DESIGN.md`(또는 등가 디자인 토큰 파일)를 읽고 색상·타이포 토큰을 `:root`에 바인딩하세요.
6. 이미지 생성은 **선택적**입니다. 기본 출력은 CSS 워드마크 텍스트입니다. 사용자가 실제 로고 자산을 첨부하고 로고 셋 버전을 요청한 경우에만 이미지를 사용합니다(`../_shared/imagegen.md` 참고).

### Step 1 — 맵 정보 수집

다음 항목이 사용자 입력에 빠져 있으면 첫 발견 폼에서 함께 물어보세요.

- 시즌명 (예: 27SS) — 시즌 무관이면 "perpetual" 표기
- **브랜드명 + 플롯할 라인** (예: "와키윌리 UNI", "와키윌리 WOMEN" 별도 점, 또는 단일 점 "와키윌리")
- **축** — `references/axis-presets.md`에서 선택하거나 커스텀:
  - 기본 x: BASIC ↔ ACCENT
  - 기본 y: NEW BASIC ↔ TREND (또는 TREND 상단, NEW BASIC 하단)
- **경쟁사 셋** — 8~18개 브랜드. 최소 8개 (그보다 적으면 신뢰할 수 있는 맵 아님)
- 각 경쟁사의 쿼드런트 (알고 있을 때) — 또는 에이전트에게 공개 정보 기반 배치 위임
- **1줄 전략 의도** (예: "감도 높은 트렌디함에 위트를 더한, 합리적인 가격의 스트릿 브랜드")
- 라인별 서브 포지셔닝 노트 (예: "유니: 뉴베이직 라인을 신선하고 세련되게 재정의 / 우먼: 뉴베이직을 보강해 안정적 볼륨 유지")
- 워드마크 텍스트 렌더링(기본) 또는 첨부 로고 이미지 사용 여부

### Step 2 — 레이아웃 선택

`references/layouts.md`에서 **1개**를 선택합니다.

- **Centered map + side notes** (기본) — 2x2 맵 중앙 + 우측 사이드바에 전략 의도 + 라인별 노트
- **Map + table** — 맵 상단 + 경쟁사 표(브랜드, 쿼드런트, 1줄 "무엇을 하는지", URL) 하단
- **Map + comparison strip** — 맵 상단 + 최근접 경쟁사 3~4개의 차별화 포인트 하단

선택한 리듬을 한 문장으로 선언하세요.

### Step 3 — 좌표 플롯

각 브랜드를 `(x, y)` 좌표에 `<span class="brand-point">` 로 배치합니다 (% 단위):

- `x = 0%` 좌측 축 라벨, `x = 100%` 우측 축 라벨
- `y = 0%` 상단 축 라벨, `y = 100%` 하단 축 라벨

캘리브레이션 가이드:

- "순수 BASIC"은 `x ≈ 5–15%`에; "순수 ACCENT"는 `x ≈ 85–95%`에. 주류 중앙은 `x ≈ 50%`.
- "순수 TREND"는 `y ≈ 5–15%`(상단); "순수 NEW BASIC"은 `y ≈ 85–95%`(하단).
- 와키윌리 27SS 덱을 캘리브레이션 레퍼런스로 활용: UNI는 중앙 우측 + 약간 위(`~x:55%, y:45%`), WOMEN은 `~x:55%, y:55%`.

자사 브랜드 점은 브랜드 심볼/워드마크, 경쟁사 점은 카노니컬 워드마크 텍스트.

### Step 4 — 맵 렌더

`assets/template.html`을 `index.html`로 복사한 뒤:

1. `[REPLACE …]` 토큰을 치환합니다.
2. `DESIGN.md` 토큰을 `:root`에 바인딩합니다.
3. 선택한 리듬을 `references/layouts.md`에서 복사해 `<main id="positioning-map">` 안에 붙입니다.

**필수 섹션 (순서대로):**

1. **헤더 스트립** — 시즌(또는 "perpetual") + 브랜드 + 상태(v1 / v2 / locked) + 락 일자
2. **전략 의도** — 맵 위 한 문장
3. **2x2 맵** — 4면 축 라벨 + 중앙 십자선 + 브랜드 점들 (`<span class="brand-point">`로 플롯)
4. **라인별 노트** (2개 이상 라인 플롯 시) — 각 라인의 위치 라쇼날 짧은 노트
5. **경쟁사 표** — 모든 플롯된 브랜드 + 이름 + 쿼드런트 + 1줄 "무엇을 하는지" + URL (Map + table 리듬만 필수)
6. **인접 이웃 스트립** (Map + comparison strip 리듬만) — 3~4개 최근접 경쟁사 + 자사 대비 차별화
7. **Open / Next Decisions** — 락 안 된 항목, owner, by when

### Step 5 — 자체 검수

`references/checklist.md`의 P0/P1/P2 기준을 한 항목씩 확인하세요.

- 모든 플롯된 브랜드가 이름 + 0~100% 박스 내 좌표
- 자사 브랜드 점이 경쟁사와 시각적으로 구분(채워진 칩, 브랜드 컬러, 약간 큰 사이즈)
- 가로 A4 인쇄에서 우측 가장자리 잘림 없음

## 한국 K-패션 브랜드 사례 (참고)

K-young-casual / 스트릿 / 컨템포러리 브랜드의 BASIC↔ACCENT × NEW BASIC↔TREND 맵 배치 참고.

| 브랜드 | x (BASIC↔ACCENT) | y (NEW BASIC↔TREND) | 쿼드런트 |
|---|---|---|---|
| **무신사 스탠다드** | 10% (순수 BASIC) | 80% (NEW BASIC 강함) | SW |
| **마뗑킴 (Matin Kim)** | 35% | 50% (중앙) | W 중앙 |
| **마르디 메크르디** | 65% | 30% (TREND 쪽) | NE |
| **아더에러 (ADER ERROR)** | 75% | 15% (순수 TREND) | NE |
| **키르시 (KIRSH)** | 55% | 35% (TREND 쪽) | NE 중앙 |
| **와키윌리 UNI** | 55% | 45% | NE 중앙 |
| **와키윌리 WOMEN** | 55% | 55% (중앙 살짝 아래) | SE 경계 |
| **디스이즈네버댓** | 65% | 25% (TREND) | NE |
| **IAB STUDIO** | 80% | 20% (TREND ACCENT) | NE |
| **폴라플로우 (Pola Flow)** | 25% | 40% (TREND-leaning BASIC) | NW |
| **라이프워크** | 30% | 65% (NEW BASIC) | SW |
| **OY** | 75% | 35% | NE |
| **87MM** | 50% | 30% (TREND) | N 중앙 |
| **인스턴트펑크** | 80% | 25% (ACCENT TREND) | NE |
| **유니클로 (Uniqlo)** | 5% (순수 BASIC) | 90% (순수 NEW BASIC) | SW 코너 |

위 좌표는 *공개 인식 기반 예시*입니다. 실제 산출물은 사용자 브랜드의 자체 인식 + 시즌 의도에 맞춰 미세 조정하세요.

## 한국 패션기업 조직 R&R 메모

포지셔닝 맵은 **브랜드 디렉터 / 대표**가 정의하지만, 시즌 검토에는 다음 부서가 관여합니다.

- **브랜드 디렉터 / 대표**: 자사 브랜드 좌표, 전략 의도, 최종 승인
- **MD 실장**: 경쟁사 셋 정의 (실제 입점/판매 채널에서 부딪히는 브랜드)
- **마케팅 실장**: 캠페인 시점의 경쟁 인식 (SNS, 라이브커머스에서의 비교 대상)
- **디자인 실장**: 자사 라인(UNI/WOMEN)별 디자인 의도가 좌표에 반영되는지 검토
- **MD 팀원 / 영업**: 입점 채널(무신사, 29CM)의 카테고리 분류와 정합성 점검

산출물 헤더에 `status: locked` 표시 시 위 모든 검토자의 확인이 완료된 상태를 의미합니다.

## 시즌 사이클 내 위치

포지셔닝 맵은 시즌 시작 **6개월 전** (시즌 전략과 동일 시점)에 락하는 산출물입니다.

```
[fashion-brand-roadmap] (영구)
★ [fashion-positioning-map] (시즌 시작 6개월 전) ★
[fashion-season-strategy] (시즌 시작 6개월 전)
[fashion-concept-board] (시즌 시작 5개월 전)
... 이후 모든 시즌 산출물
```

포지셔닝 맵의 **자사 좌표 + 전략 의도**가 시즌 전략의 3대 축과 정합해야 합니다. 좌표가 바뀌면 시즌 전략의 모든 축을 재검토해야 합니다.

## 출력 규약

단일 HTML 문서를 출력하세요.

- **Claude 환경(Claude.ai · Claude Code)**:
  ```
  <artifact identifier="fashion-positioning-map-slug" type="text/html" title="브랜드 포지셔닝 맵 제목">
  <!doctype html>
  <html>...</html>
  </artifact>
  ```
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 마크다운 HTML 코드 블록.

출력 앞에 한 문장 요약(예: "와키윌리 27SS 포지셔닝 맵을 Centered map + side notes 리듬으로 작성했습니다."), 뒤에는 아무것도 덧붙이지 마세요.
