---
name: fashion-new-lineup
description: |
  K-패션 브랜드의 **신규 라인업 / 시리즈 확장**을 단일 HTML 파일로 정리하는 스킬입니다.
  시즌이 출시하는 *특정* 신규 라인업 1개(폴카 도트 시리즈, 리본·러플 시리즈, 에센셜
  라인 확장, 뉴베이직 재정의, 우먼 네오 베이직 러플 시리즈 등)를 명제 · 카테고리
  모자이크(top / bottom / outer / accessory / setup) · SKU 플랜 · 브릿지 역할로
  문서화합니다. 사용자가 "신규 라인업", "시리즈 확장", "에센셜 라인 확장",
  "뉴베이직 재정의", "리본 러플 시리즈", "폴카도트 시리즈", "new lineup",
  "series expansion"을 언급하면 활성화하세요.
triggers:
  - "신규 라인업"
  - "시리즈 확장"
  - "에센셜 라인 확장"
  - "뉴베이직 재정의"
  - "리본 러플"
  - "폴카도트"
  - "캡슐"
  - "라인업 롤아웃"
  - "new lineup"
  - "series expansion"
  - "essential line"
  - "lineup rollout"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 17
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "와키윌리(WACKYWILLY) 27SS WOMEN 폴카 도트 시리즈 라인업을 만들어주세요. 티셔츠 + 라글란 + 가디건 + 스커트 + 데님 + 후디 + 캡, SKU 12개 타겟, 레트로 걸리쉬 무드 앵커, 유니 라인과는 티셔츠 + 캡에서 브릿지. 캐리오버 30% 적용."
---

# 패션 신규 라인업 스킬

K-패션 브랜드의 **신규 라인업 문서**를 단일 HTML 파일로 생성합니다. 시즌이 출시하는 **특정 시리즈 1개**가 대상이며, 시즌 전체 라인업은 아닙니다. 각 라인업이 자신의 페이지를 갖고, 시즌 합본 덱(`fashion-season-deck`)이 이들을 묶습니다.

신규 라인업 문서는 네 가지 질문을 답합니다.

1. **이 시리즈가 무엇인가?** (앵커 — 모티프 / 디테일 / 실루엣 / 기능 스토리 + 1줄 명제)
2. **카테고리에 어떻게 전개되는가?** (어떤 아이템 패밀리가 이 시리즈를 담고, 어떤 게 안 담는지)
3. **왜 이 슬롯에 들어가는가?** (정상판매율 낮은 캐리오버 대체 / 상승 트렌드 캡처 / 베스트셀러 확장 / UNI ↔ WOMEN 브릿지)
4. **SKU + LOT 플랜은?** (SKU 개수, 캐리오버 비율, 아이템당 타겟 LOT)

K-young-casual 스튜디오에서 운영하는 라인업 예시:

- 폴카 도트 시리즈 (저지 + 니트 + 데님 + 아우터 + 액세서리)
- 리본 / 러플 시리즈 (후디 + 티셔츠 + 데님 + 오버롤 + 레이스)
- 에센셜 라인 확장 (베이직 티셔츠 + 크롭탑 + 드레스 + 파스텔 + 러블리 프린트)
- 뉴베이직 재정의 (익숙한 것 + 한 가지 다른 요소)
- 우먼 네오 베이직 러플 확장 + 피그먼트 워시
- 브릿지 콜라보 캡슐

## 환경 호환성

이 스킬은 모든 LLM 환경에서 동일하게 사용할 수 있습니다.

- **Claude 환경(Claude.ai · Claude Code)**: 결과물을 `<artifact>` 태그로 감싸 출력합니다.
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 HTML 코드 블록으로 출력합니다.
- **OpenDesign 환경**: frontmatter의 `od:` 블록과 본문에서 권장하는 `data-od-id` 속성을 활용하면 인라인 코멘트·미리보기 기능을 사용할 수 있습니다.

이미지 생성 도구는 환경에 따라 다릅니다. 자세한 정책은 `../_shared/imagegen.md`를 참고하세요.

## 출력 언어 정책

사용자가 한국어로 작성하거나 브랜드/맥락이 한국 K-패션이라면, 산출물 카피는 **한국 패션 비즈니스 등록(register)**을 따릅니다.

- 라인업 이름은 **브랜드의 실제 사용 표기** 그대로(예: "폴카 도트 시리즈", "리본·러플 시리즈", "우먼 에센셜 라인 확장", "유니 뉴베이직 정의 정립"). 영문 직역 금지.
- 유지하는 용어: SKU · 카테고리 · 아이템 · 셋업 · 캐리오버 · QR · SPOT · target lot · BTA · UNI/WOMEN · S1~S4 · 정상판매율 · 회전율 · 사입가율 · 마진율.
- 섹션 라벨은 영문 혼용 허용: `Category × SKU Plan`, `Bridge Map`, `Anti-pattern · 하지 않을 것`, `Open Decisions`.
- 카피, 표 해석, HTML 주석, 결정 노트는 **명사구 종결**(예: `적용`, `전환`, `확보 사유`, `사용 금지`, `owner 확인`, `sample check 완료`).

## 타이포그래피

프로젝트 루트의 `DESIGN.md` 타이포그래피 토큰을 사용하세요. **Pretendard Variable**을 본문·테이블·UI·결정 로그 기본 폰트로 둡니다.

신규 라인업 문서는 보통 **MD 운영 자료** 성격이므로 `--font-display-report`(Paperlogy, Wanted Sans, SUIT)를 기본값으로 사용합니다.

| 라인업 톤 | 권장 디스플레이 폰트 토큰 |
|---|---|
| 캐릭터 IP, 위트 시리즈 (폴카 도트, 캐릭터) | `--font-display-play` |
| 로맨틱 / 우먼 캡슐 (러플, 레이스) | `--font-display-romance` |
| 스트릿 / 시그니처 (그래픽 티) | `--font-display-street` |
| 에센셜 / 뉴베이직 / 정규 운영 | `--font-display-report` |

테이블 본문, SKU 행, 코드, 날짜, 파일명, owner 필드는 디스플레이 폰트 금지. `--font-sans` 또는 `--font-mono` 유지.

## 폴더 구조

```
fashion-new-lineup/
├── SKILL.md
├── assets/
│   └── template.html
└── references/
    ├── layouts.md
    └── checklist.md
```

## 작업 흐름

### Step 0 — 사전 점검

1. `assets/template.html`을 처음부터 끝까지 읽으세요.
2. `../_shared/imagegen.md`(공용 이미지 생성 정책)을 읽으세요.
3. `references/layouts.md`를 읽고 모자이크 리듬을 가늠하세요.
4. `references/checklist.md`를 읽어 검수 기준을 인지하세요.
5. 프로젝트 루트의 `DESIGN.md`(또는 등가 디자인 토큰 파일)와 시즌 산출물을 읽으세요. `fashion-color-story`, `fashion-fabric-board`, `fashion-graphic-direction`이 있다면 거기서 컬러·소재·그래픽을 **상속**받습니다. 라인업 문서에서 새 컬러/소재/그래픽을 발명하지 마세요.

### Step 1 — 라인업 정보 수집

다음 항목이 사용자 입력에 빠져 있으면 첫 발견 폼에서 함께 물어보세요.

- 시즌명 (예: 27SS)
- **라인업 이름** — 브랜드의 실제 표기 (예: "폴카 도트 시리즈", "리본·러플 시리즈", "우먼 에센셜 라인 확장", "유니 뉴베이직 정의 정립")
- **앵커** — 모티프(폴카 도트, 리본, 러플), 디테일(raw hem, scallop), 실루엣(릴렉스드 박시), 기능(Sorona Cool 티 캡슐) 중 하나
- 라인 — UNI / WOMEN / KIDS / cross-line
- **1줄 라인업 명제** (예: "레트로 걸리쉬 무드를 와키윌리만의 위트 있는 컬러와 스타일링으로 라인업")
- **카테고리 전개** — {tee, sweat, raglan, knit, cardigan, outer (jacket / hoodie / windbreaker), denim, easy-denim setup, pants, skirt, dress, accessory (cap / bag / scarf / charm)} 중 최소 3개, 권장 5~8개
- **SKU 개수 타겟** — 시리즈당 보통 8~18개
- **캐리오버 비율** — 0% (전체 신상) / 30% / 50% (베스트셀러 확장)
- **브릿지 역할** — 이 라인업이 두 라인을 브릿지하는가(UNI ↔ WOMEN, 라인 ↔ KIDS)? 그렇다면 브릿지 아이템을 명명
- **Anti-pattern** — 이 시리즈가 *아닌* 것 (예: "Y2K 라인스톤 금지", "셔츠 외 오버사이즈 박시 금지")

### Step 2 — 모자이크 리듬 선택

`references/layouts.md`에서 **1개**를 선택합니다.

- **Mosaic + chip strip** (기본) — 상단 이미지 모자이크가 시리즈 무드 보여줌, 하단 카테고리 칩 스트립이 카테고리별 SKU 개수 표시
- **Hero + grid** — 큰 히어로 컴포지션(시그니처 룩) 위, 카테고리 그리드 4~8개 아이템 카드 아래
- **Item card grid** — 카테고리별 카드 그리드 직선 배치. SKU 개수가 많을 때(>14)와 무드를 볼륨으로 읽혀야 할 때

선택한 리듬을 한 문장으로 선언하세요. 예: "Mosaic + chip strip 리듬을 선택했습니다."

### Step 3 — 라인업 이미지 생성

전개되는 카테고리당 **2~4개의 레퍼런스 이미지**를 생성하세요 — 라인업 모티프가 그 아이템에 적용된 모습. 플랫레이/디테일은 1024x1024, 착장샷은 1024x1536 권장.

카테고리에 맞춰 안정적 파일명으로 저장:

```
images/lineup-tee-01.png … images/lineup-tee-04.png
images/lineup-knit-01.png …
images/lineup-denim-01.png …
images/lineup-outer-01.png …
images/lineup-accessory-01.png …
images/lineup-hero.png      (Hero + grid 레이아웃 전용)
images/lineup-mood-01.png … images/lineup-mood-04.png  (Mosaic 레이아웃 전용)
```

이미지 프롬프트 형식(영어 가능):

```
Use case: design / new-lineup
Asset type: [flat-lay garment | macro detail | worn category snapshot]
Lineup name: [REPLACE]
Anchor: [모티프 / 디테일 / 실루엣 / 기능 — Step 1에서 정한 앵커]
Item family: [tee / knit / cardigan / outer / denim / setup / accessory]
Visual subject: [앵커가 실제로 어떻게 표현되는지 구체적으로 — 
  "small all-over polka dot on cotton",
  "ribbon detail at neckline",
  "scallop hem on denim short"]
Style/medium: editorial flat-lay or close-up; consistent across the lineup so the series reads as one
Composition/framing: square 1024x1024 (or 1024x1536 for worn), centered, ~10% margin
Color palette: [active color story에서 가져오기 — 라인업은 보통 1~2개 팔레트 티어 내에 살아 있음]
Materials/textures: [active fabric board에서 가져오기]
Constraints: no logos, no readable third-party brand text, no watermark, no AI-slop sparkle
Avoid: aggressive saturation, fake gradient, busy background, runway pose, glamour-shot lighting
```

이미지 생성 도구는 LLM 환경에 따라 다릅니다(`../_shared/imagegen.md` 참고).

### Step 4 — 라인업 문서 구성

`assets/template.html`을 `index.html`로 복사한 뒤:

1. `[REPLACE …]` 토큰을 사용자 입력으로 치환합니다.
2. `DESIGN.md` 토큰을 `:root`에 바인딩합니다.
3. 선택한 리듬을 `references/layouts.md`에서 복사해 `<main id="new-lineup">` 안에 붙입니다.

**필수 섹션 (순서대로):**

1. **헤더 스트립** — 시즌 + 라인 + 라인업 이름 + 상태(concept / v1 / locked) + 락 일자
2. **라인업 명제** — 한 문단: 앵커 + 의도 + 브릿지 역할 + 무엇을 대체하는지
3. **모자이크 / 히어로 / 아이템 그리드** — 선택한 리듬의 본체(`layouts.md` 참조)
4. **Category × SKU 표** — 카테고리, SKU 개수, 캐리오버 노트, target lot, 컬러 티어(BASIC / TREND / ACCENT)
5. **Bridge Map** (Step 1에서 브릿지를 명명한 경우만) — 양쪽 라인을 모두 담당하는 아이템 + 각 라인용으로 어떻게 적응되는지
6. **Anti-pattern** — 이 시리즈가 *아닌* 것 3~7개 불릿
7. **Open / Next Decisions** — 아직 락이 안 된 항목, owner, by when

### Step 5 — 자체 검수

`references/checklist.md`의 P0/P1/P2 기준을 한 항목씩 확인하세요.

- 카테고리 전개의 모든 카테고리에 최소 2개의 레퍼런스 이미지 + 칩 스트립 엔트리
- SKU 표 합계가 명제에 명시된 SKU 타겟과 일치
- 이미지 생성 실패 시 폴백 블록(CSS 그라데이션 / 데이터-폴백 메시지)으로 자동 대체
- Anti-pattern에 명시적 "아니다" 항목 최소 3개

## 한국 K-패션 브랜드 사례 (참고)

K-패션 신규 라인업 패턴.

| 브랜드 | 시그니처 라인업 | 앵커 | 브릿지 |
|---|---|---|---|
| **마르디 메크르디** | 플라워 마르디 시리즈 | 시그니처 플라워 그래픽 | UNI/WOMEN 통합 |
| **키르시 (KIRSH)** | 체리 시리즈 | 체리 심볼 모티프 | UNI/WOMEN/KIDS 전 라인 |
| **아더에러 (ADER ERROR)** | TETRIS 시리즈 | 컨셉추얼 그래픽 | 한정 캡슐 |
| **와키윌리** | 폴카 도트 시리즈, 캐릭터 IP 캡슐 | 위트 IP 또는 빈티지 그래픽 | 캐릭터 → 팬덤 라인 |
| **마뗑킴** | 텍스트 로고 셋업, 워시드 데님 | 미니멀 텍스트 시그니처 | UNI/WOMEN 통합 |
| **무신사 스탠다드** | 베이직 라인 (티셔츠, 데님, 셔츠) | 한국 표준 핏 | 라인 자체가 브랜드 정체성 |

위 사례는 카피·예시 참고용입니다. 실제 산출물은 사용자 브랜드의 라인업 명명 + 앵커로 작성하세요.

## 한국 패션기업 조직 R&R 메모

신규 라인업은 **MD실 + 디자인실** 합의로 만듭니다. 검토 흐름:

- **MD 실장**: 라인업 의도, SKU 타겟, target lot, 캐리오버 정합성 (정상판매율 + 회전율 기반)
- **디자인 실장 + 시즌 디자이너**: 앵커 정의, 카테고리별 디자인, anti-pattern
- **그래픽 디자이너**: 그래픽이 포함된 라인업의 경우, `fashion-graphic-direction`과 정합 확인
- **소재 담당 (생산실)**: 카테고리별 패브릭 가용성 + target lot 생산 가능성 검토
- **마케팅 실장**: 라인업 명제가 IMC 캘린더에서 어떻게 노출될지 점검
- **대표**: 시즌 전략(`fashion-season-strategy`)의 3대 축 중 어디에 속하는지 최종 확인

산출물 헤더에 `status: locked` 표시 시 위 모든 검토자의 확인이 완료된 상태를 의미합니다.

## 시즌 사이클 내 위치

신규 라인업은 시즌 시작 **3개월 전**에 락하는 산출물입니다.

```
[fashion-brand-roadmap] (영구)
[fashion-positioning-map] (시즌 시작 6개월 전)
[fashion-season-strategy] (시즌 시작 6개월 전)
[fashion-concept-board] (시즌 시작 5개월 전)
[fashion-color-story], [fashion-fabric-board] (시즌 시작 4~5개월 전)
[fashion-styling-board] (시즌 시작 3~4개월 전)
★ [fashion-new-lineup] (시즌 시작 3개월 전) ★
[fashion-key-item-sheet] (시즌 시작 3개월 전, 라인업 내 핵심 아이템 별도 시트)
[fashion-graphic-direction] (시즌 시작 2~3개월 전)
[fashion-lookbook] (시즌 시작 1~2개월 전)
[fashion-imc-calendar] (시즌 시작 2개월 전)
[fashion-season-deck] (모든 산출물 종합 후)
```

라인업은 시즌당 **3~7개** 정도가 표준입니다(K-young-casual 기준). 그 이상이면 SKU 분산으로 정상판매율이 떨어지고, 그 이하면 시즌 다양성이 부족해집니다.

## 출력 규약

단일 HTML 문서를 출력하세요.

- **Claude 환경(Claude.ai · Claude Code)**:
  ```
  <artifact identifier="fashion-new-lineup-slug" type="text/html" title="신규 라인업 제목">
  <!doctype html>
  <html>...</html>
  </artifact>
  ```
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 마크다운 HTML 코드 블록.

출력 앞에 한 문장 요약(예: "와키윌리 27SS WOMEN 폴카 도트 시리즈 라인업을 Mosaic + chip strip 리듬으로 작성했습니다."), 뒤에는 아무것도 덧붙이지 마세요.
