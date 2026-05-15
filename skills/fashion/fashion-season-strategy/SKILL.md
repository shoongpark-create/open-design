---
name: fashion-season-strategy
description: |
  K-패션 브랜드의 **시즌 전략서**(시즌 전략 카드)를 단일 HTML 파일로 생성하는
  스킬입니다. 시즌의 3대 전략 축(예: 시장 대응력 강화 / 캐리오버 상품 리뉴얼 /
  판기별 IMC 히어로 육성)과 카테고리별 시즌 주력 아이템(가방 / 모자 / 신발 등)을
  락하는 1페이지 문서입니다. 브랜드 디렉터가 디자인 · MD · 마케팅을 시즌의
  *목적*에 정렬할 때 사용합니다. 사용자가 "시즌 전략", "전략 3축", "전략 축",
  "시즌 주력 아이템", "season strategy", "season pillars"를 언급하면 활성화하세요.
triggers:
  - "시즌 전략"
  - "전략 3축"
  - "전략 축"
  - "시즌 주력 아이템"
  - "히어로 아이템"
  - "시즌 포커스"
  - "season strategy"
  - "season pillars"
  - "strategic pillars"
  - "hero item"
  - "season focus"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 20
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "와키윌리(WACKYWILLY) ACC 27SS 시즌 전략을 만들어주세요. 3대 전략 축: ① 시장 대응력 강화 (27SS QR 30%, In-Season SPOT 13스타일), ② 캐리오버 상품 리뉴얼, ③ 판기별 IMC 히어로 육성. 시즌 주력 아이템: 가방(신학기 리뉴얼 + 데일리백), 모자(뉴 히어로 평균 LOT 상향화), 신발(뉴 키테 + 하절기 샌들/슬라이드)."
---

# 패션 시즌 전략 스킬

K-패션 브랜드의 **시즌 전략 카드**를 단일 HTML 파일로 생성합니다. 브랜드 디렉터가 시즌 기획 시작 시점에 디자인 · MD · 마케팅에 전달하는 1페이지 문서입니다. **내부용** 산출물이며, 청중은 크로스 팩셔널 팀 + 시즌 의도에 정렬해야 하는 협력사(에이전시, 공급사)입니다.

이 카드는 네 가지 질문을 답합니다.

1. **이 시즌은 무엇을 위한가?** (3대 전략 축 — 시즌 의도를 구성하는 운영 축. 예: 시장 대응력 강화, 캐리오버 리뉴얼, 히어로 육성)
2. **어디에 베팅을 집중할 것인가?** (히어로 카테고리 카드, 상품 패밀리당 하나 — 가방 / 모자 / 신발 / 외투 등)
3. **각 축의 전술 콘텐츠는?** (칩: In-Season 기획, 주간 QR, 디자인 리뉴얼 등)
4. **각 히어로 카테고리의 플랜은?** (1줄 전략 + 불릿 전술)

`fashion-brand-roadmap`(영구)과 시즌별 덱 모듈(컨셉, 컬러, 패브릭, 라인업 등) 사이에 위치합니다.

## 환경 호환성

이 스킬은 모든 LLM 환경에서 동일하게 사용할 수 있습니다.

- **Claude 환경(Claude.ai · Claude Code)**: 결과물을 `<artifact>` 태그로 감싸 출력합니다.
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 HTML 코드 블록으로 출력합니다.
- **OpenDesign 환경**: frontmatter의 `od:` 블록과 `data-od-id` 속성을 활용하면 인라인 코멘트·미리보기 기능을 사용할 수 있습니다.

이미지 생성은 **선택적**입니다 (이 카드는 텍스트/아이콘 중심).

## 출력 언어 정책

사용자가 한국어로 작성하거나 브랜드/맥락이 한국 K-패션이라면, 산출물 카피는 **한국 패션 비즈니스 등록(register)**을 따릅니다.

- 전략 축 이름은 한국어 (예: `시장 대응력 강화`, `캐리오버 상품 리뉴얼`, `판기별 IMC 히어로 육성`). 영문 자동 번역 금지.
- 메트릭은 영문 약자 + 단위 (예: `QR 30%`, `In-Season SPOT 13스타일`, `LOT 상향화`, `target lot 1,500 pcs`).
- 히어로 카테고리는 한국어 (예: `가방`, `모자`, `신발`, `외투`). 영문 병기 가능.
- 칩 라벨은 영문 가능 (예: `In-Season 기획`, `주간 QR`, `디자인 리뉴얼`, `히어로 집중`).
- 카피, 표 해석, 결정 노트는 **명사구 종결** (예: `적용`, `전환`, `확보 사유`, `owner 확인`).

## 타이포그래피

프로젝트 루트의 `DESIGN.md` 타이포그래피 토큰을 사용하세요. **Pretendard Variable**을 본문·테이블·UI 기본 폰트로 둡니다.

시즌 전략 카드는 **운영 덱 성격**이므로 `--font-display-report`(Paperlogy, Wanted Sans, SUIT)를 기본값으로 사용합니다. 산출물 1개당 디스플레이 폰트 1개로 락하고, 테이블 본문 + 메트릭 + 라벨은 `--font-mono` 또는 `--font-sans`를 유지하세요.

## 폴더 구조

```
fashion-season-strategy/
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
2. `references/layouts.md`를 읽고 레이아웃을 선택하세요.
3. `references/checklist.md`를 읽어 검수 기준을 인지하세요.
4. 프로젝트 루트의 `DESIGN.md`를 읽고 색상·타이포 토큰을 `:root`에 바인딩하세요.
5. 이미지 생성은 **선택적**. 카테고리별 아이콘 이미지는 명시적 요청 시에만 생성.

### Step 1 — 전략 정보 수집

다음 항목이 사용자 입력에 빠져 있으면 첫 발견 폼에서 함께 물어보세요.

- 시즌명 (예: 27SS)
- 라인 / 세그먼트 — UNI / WOMEN / ACC / KIDS / 브랜드 전체
- **전략 축** — 정확히 3개 (K-young-casual 카노니컬). 각 축은 타이틀 + 1줄 설명 + 1~2개 메트릭 칩 보유
- **히어로 카테고리** — 2~4개 카드. 각 카드는 카테고리명 + 1줄 축 포커스 + 2~4개 불릿 전술 보유
- 정량 타겟 — 축별 메트릭(QR %, SKU 개수, LOT, 정상판매율) 가능한 경우
- 상태 — concept / locked / in-execution

### Step 2 — 레이아웃 선택

`references/layouts.md`에서 **1개**를 선택합니다.

- **Pillars row + heroes row** (기본) — 상단에 3개 축 카드 가로 배치, 중앙에 히어로 카테고리 카드 가로 배치
- **Pillars stack + heroes grid** — 좌측에 축 스택, 우측에 히어로 2x2 그리드. 각 카드가 긴 카피를 담을 때
- **Single-column** — 축 → 히어로 수직 스택. A4 세로 인쇄용

선택한 레이아웃을 한 문장으로 선언하세요.

### Step 3 — 카드 구성

`assets/template.html`을 `index.html`로 복사한 뒤:

1. `[REPLACE …]` 토큰을 치환합니다.
2. `DESIGN.md` 토큰을 `:root`에 바인딩합니다.
3. 선택한 리듬을 `references/layouts.md`에서 복사해 `<main id="season-strategy">` 안에 붙입니다.

**필수 섹션 (순서대로):**

1. **헤더 스트립** — 시즌 + 라인 + 상태 + 락 일자
2. **축 블록** — 3개 축 카드 (타이틀, 설명, 칩)
3. **히어로 카테고리 블록** — 2~4개 카테고리 카드 (이름, 1줄 축 포커스, 불릿 전술)
4. **크로스 팩셔널 정렬 표** — 각 축을 책임지는 팀 매핑 (디자인 / MD / 마케팅 / 공급)
5. **Open / Next Decisions** — 락 안 된 항목, owner, by when

### Step 4 — 자체 검수

`references/checklist.md`를 실행. 축은 정확히 3개. 히어로 카테고리는 2~4개. 각 축에 메트릭이 있는 경우 ≥ 1 메트릭 칩 표시. 크로스 팩셔널 정렬 표가 모든 축을 나열.

## 한국 K-패션 브랜드 시즌 전략 패턴 (참고)

| 브랜드 / 라인 | 3대 전략 축 예시 | 히어로 카테고리 |
|---|---|---|
| **와키윌리 27SS ACC** | ① 시장 대응력 강화 (QR 30%) / ② 캐리오버 리뉴얼 / ③ 판기별 IMC 히어로 육성 | 가방, 모자, 신발 |
| **무신사 스탠다드 SS** | ① 한국 핏 강화 / ② 베스트셀러 LOT 상향 / ③ 가성비 채널 확대 | 티셔츠, 데님, 셔츠 |
| **마뗑킴 SS** | ① 텍스트 로고 강화 / ② SNS 셀럽 노출 / ③ 자사몰 D2C 확장 | 셋업, 액세서리, 워시드 데님 |
| **마르디 메크르디 SS** | ① 플라워 시그니처 확장 / ② 해외 도매 확대 / ③ 셀럽 협업 | 그래픽 티셔츠, 가방, 셋업 |
| **키르시 SS** | ① 체리 IP 확장 / ② 영 컬처 캠페인 / ③ KIDS 라인 진입 | 셋업, 액세서리, 가방 |
| **아더에러 SS** | ① 글로벌 편집숍 확장 / ② 컨셉추얼 캡슐 / ③ 디지털 캠페인 | 그래픽 라인, 셋업, 액세서리 |

위 사례는 패턴 참고용입니다. 실제 산출물은 사용자 브랜드의 실제 운영 KPI(정상판매율, 회전율, QR 비율, target lot)에 맞춰 작성하세요.

## 한국 패션기업 조직 R&R 메모

시즌 전략은 **브랜드 디렉터 / 대표**가 주도하지만, 각 축의 owner는 다음과 같이 분담합니다.

- **브랜드 디렉터 / 대표**: 3대 축 초안 + 최종 승인
- **MD 실장**: 축 ①(시장 대응력 강화 — QR/SPOT/in-season 기획) lead
- **디자인 실장**: 축 ②(캐리오버 리뉴얼 — 디자인 재정의) lead
- **마케팅 실장**: 축 ③(판기별 IMC 히어로 육성 — 캠페인 + 라이브커머스) lead
- **생산 / 소재 담당**: 축별 LOT + 생산 리드타임 검토
- **자사몰 / 입점 채널 담당**: 히어로 카테고리의 판매 채널 전략 검토

크로스 팩셔널 정렬 표(`Pillar × Team`)는 위 R&R을 시각화한 것입니다. `●` = lead, `○` = contributor.

## 시즌 사이클 내 위치

시즌 전략은 시즌 시작 **6개월 전**에 락합니다. 시즌 사이클의 가장 초기 산출물 중 하나로, 모든 후속 산출물(컨셉 보드, 컬러 스토리, 라인업 등)의 의사결정 기준이 됩니다.

```
[fashion-brand-roadmap] (영구)
[fashion-positioning-map] (시즌 시작 6개월 전)
★ [fashion-season-strategy] (시즌 시작 6개월 전) ★
[fashion-concept-board] (시즌 시작 5개월 전) ← 컨셉이 축 ②, ③ 반영
[fashion-color-story], [fashion-fabric-board] (시즌 시작 4~5개월 전)
[fashion-styling-board] (시즌 시작 3~4개월 전) ← BTA 분포가 축 분포 반영
[fashion-new-lineup], [fashion-key-item-sheet] (시즌 시작 3개월 전) ← 히어로 카테고리 → 키 아이템 시트 1:1 매칭
[fashion-graphic-direction] (시즌 시작 2~3개월 전)
[fashion-lookbook] (시즌 시작 1~2개월 전)
[fashion-imc-calendar] (시즌 시작 2개월 전) ← 축 ③(IMC 히어로 육성)이 캘린더의 hero 슬롯
[fashion-season-deck] (시즌 시작 1개월 전)
```

시즌 전략이 바뀌면 후속 산출물 전체를 재점검해야 합니다.

## 출력 규약

단일 HTML 문서를 출력하세요.

- **Claude 환경(Claude.ai · Claude Code)**:
  ```
  <artifact identifier="fashion-season-strategy-slug" type="text/html" title="시즌 전략 제목">
  <!doctype html>
  <html>...</html>
  </artifact>
  ```
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 마크다운 HTML 코드 블록.

출력 앞에 한 문장 요약(예: "와키윌리 ACC 27SS 시즌 전략을 Pillars row + heroes row 리듬으로 작성했습니다."), 뒤에는 아무것도 덧붙이지 마세요.
