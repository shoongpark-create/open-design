---
name: fashion-fit-system
description: |
  K-패션 브랜드의 **핏 시스템(핏 체계) 레퍼런스 시트**를 단일 HTML 파일로 생성하는 스킬입니다.
  UNI / WOMEN 라인의 반팔 / 롱슬리브 / 스웻 / 아우터 / 하의 카테고리에서 브랜드의 핏 명명법(슬림 / 레귤러 / 오버 /
  세미오버 / 크롭 등), 각 핏이 가리키는 실루엣, 카테고리 × 라인 페어링을 LOCK합니다.
  같은 실루엣을 세 가지 다른 이름으로 부르는 혼선을 끝내려는 핏룸과 패턴 팀의 표준 문서.
  사용자가 "핏 체계", "핏 정비", "핏 가이드", "사이즈 체계", "실루엣 체계"를 언급하면 활성화하세요.
triggers:
  - "핏 체계"
  - "핏 정비"
  - "핏 가이드"
  - "실루엣 체계"
  - "사이즈 체계"
  - "fit system"
  - "fit guide"
  - "fit chart"
  - "fit nomenclature"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 22
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "와키윌리 핏 시스템을 LOCK해주세요. UNI = 슬림 / 레귤러 / 오버 (반팔, 롱슬리브, 스웻 카테고리). WOMEN = 슬림 베이비 / 레귤러 / 세미오버 (반팔, 롱슬리브, 스웻). 통합 명명법 + 바디 길이 명명 규칙 LOCK."
---

# 패션 핏 시스템 스킬

K-패션 브랜드의 **핏 시스템 레퍼런스 시트**를 단일 HTML 파일로 생성합니다. 모든 카테고리·라인에 대한 핏·길이·실루엣 작업 명명법을 LOCK하는 운영 문서. **내부 + 공급사 대상** — 청중은 디자이너, 패턴팀, 핏룸, 공급사 샘플실.

시트가 답하는 3가지 질문:

1. **이 브랜드의 어휘에 어떤 핏이 존재하는가?** (canonical 세트 — 일반적으로 UNI: 슬림 / 레귤러 / 오버; WOMEN: 슬림 베이비 / 레귤러 / 세미오버)
2. **각 핏을 입었을 때 어떻게 보이는가?** (핏 × 카테고리당 calibration figure — 팀의 공유 시각 표준)
3. **길이 / 핏 / 카테고리 전반에 통합된 명명은 무엇인가?** (혼선 방지 룰북: 크롭 vs 크롭핏 vs 크롭베이비, 슬리브 길이 vs 바디 길이 명명)

**영구 문서** — 매년 1회 또는 브랜드가 실루엣 경계를 재정의할 때만 개정. 시즌 산출물 아님.

## 환경 호환성

이 스킬은 모든 LLM 환경에서 동일하게 사용할 수 있습니다.

- **Claude 환경(Claude.ai · Claude Code)**: 결과물을 `<artifact>` 태그로 감싸 출력합니다.
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 HTML 코드 블록으로 출력합니다.
- **OpenDesign 환경**: frontmatter의 `od:` 블록과 본문에서 권장하는 `data-od-id` 속성을 활용하면 인라인 코멘트·미리보기 기능을 사용할 수 있습니다. 다른 환경에서는 일반 `id` 속성으로 대체하거나 생략 가능합니다.

본문 작업 흐름은 모든 LLM이 자력으로 따라할 수 있도록 명시적으로 작성되어 있습니다. 디자인 시스템 파일이 자동 주입되지 않는 환경이라면, 사용자에게 `DESIGN.md` 경로나 기본 톤을 묻고 진행하세요.

## 출력 언어 정책

사용자가 한국어로 작성하거나 브랜드/맥락이 한국 K-패션이라면, 산출물 카피는 **한국 패션 비즈니스 등록(register)**을 따릅니다.

- 유지하는 용어: SKU · UNI / WOMEN · 핏 · 실루엣 · 슬림 / 레귤러 / 오버 / 세미오버 / 슬림 베이비 / 크롭 / 롱 · BTA · 캐리오버 · 라글란 · 헨리 · 셋업 · 사입가율 · 정상판매율.
- 카테고리 라벨은 한국어 우선: 반팔 / 롱슬리브 / 스웻 / 아우터 / 후디 / 니트 / 데님 / 팬츠 / 쇼츠 / 스커트 / 원피스.
- 섹션 라벨과 표 헤더는 영문 혼용 허용: `Future state matrix`, `Naming rules`, `Open Decisions`.
- 본문 카피, 표 해석, HTML 주석, 결정 노트는 **명사구 종결** 선호. 예: `통합 적용`, `사용 금지`, `공급사 발주서 병기`, `LOCK 완료`.

## 타이포그래피

프로젝트 루트의 `DESIGN.md` 타이포그래피 토큰 사용. 본문·테이블·UI 기본 폰트는 **Pretendard Variable**. 핏 시스템은 **운영 덱 성격**이므로 디스플레이 폰트는 `--font-display-report`를 기본값으로 사용합니다.

테이블 본문, 핏 매트릭스 셀, 핏 이름, 공급사 명, owner/by 필드에는 디스플레이 폰트를 쓰지 말고 `--font-sans` 또는 `--font-mono` 유지.

## 폴더 구조

```
fashion-fit-system/
├── SKILL.md              ← 이 파일
├── assets/
│   └── template.html
└── references/
    ├── layouts.md
    └── checklist.md
```

## 작업 흐름

### Step 0 — 사전 점검

1. 이 스킬 폴더의 `assets/template.html`을 처음부터 끝까지 읽으세요.
2. `references/layouts.md`를 읽고 레이아웃을 가늠하세요.
3. `references/checklist.md`를 읽으세요.
4. 프로젝트 루트의 `DESIGN.md`(또는 등가 디자인 토큰 파일)를 읽으세요. 핏 시트는 브랜드 톤 중립(매트릭스 주도)이므로 DESIGN.md는 주로 타입과 룰 컬러를 기여. 파일이 자동 주입되지 않는 환경이라면 사용자에게 경로를 물어 진행합니다.
5. Calibration figure(핏 calibration 이미지) 생성은 선택. 환경별 가용 이미지 생성 도구 사용. 이미지 미생성 시 폴백 텍스트로 자연스럽게 대체.

### Step 1 — 시스템 정보 수집

다음이 빠지면 첫 발견 폼에서 물어보세요.

- 브랜드 이름
- 커버 라인 — UNI만, WOMEN만, 또는 양쪽 (기본 양쪽)
- 카테고리 커버리지 — {반팔, 롱슬리브, 스웻, 아우터, 후디, 니트, 데님, 팬츠, 쇼츠, 스커트, 원피스} 중 선택, 최소 3개
- 라인당 핏 사다리 — 일반 UNI 3단(슬림 / 레귤러 / 오버), 일반 WOMEN 3단(슬림 베이비 / 레귤러 / 세미오버). 2~4단 허용. 각 단계는 canonical 이름 + 1줄 실루엣 설명
- 길이 명명 규칙 — 바디 길이(레귤러 / 롱 / 크롭)와 슬리브 길이(반팔 / 롱슬리브 / 라글란) 각 1개 룰
- 수정 대상 이슈 — 해결하려는 알려진 명명 문제 (예: `크롭 단어 공식 사용으로 사이즈 인지 혼선 발생 → 정리`)

### Step 2 — 레이아웃 선택

`references/layouts.md`에서 **1개** 선택:

- **리듬 A · 현재 vs. 향후 나란히 (1차 시점 기본)** — 좌측 컬럼은 현재 상태 + 플래그된 문제, 우측 컬럼은 타겟 상태
- **리듬 B · 향후 상태 매트릭스 (LOCK 후 개정용)** — 카테고리 × 핏 단계 × 라인 매트릭스만
- **리듬 C · 카테고리별 시트 (매우 와이드 커버리지)** — 카테고리당 1 섹션, 핏 사다리를 worn calibration figure로

선택 레이아웃을 한 문장으로 선언.

### Step 3 — Calibration figure 생성 (선택이지만 권장)

핏 × 카테고리 × 라인 셀당 **calibration figure**(이 핏의 대표 가먼트만 입은 풀 보디 컷아웃) 생성. 패턴팀이 `우리 브랜드에서 오버사이즈 스웻은 어떻게 생긴 것인가`를 리뷰 간에 정렬할 때 사용.

이미지 수 빠르게 증가: 3 핏 × 3 카테고리 × 2 라인 = 18장. 1차 문서는 **해결된 향후 상태**에만 calibration figure 생성, 레거시 현재 상태는 현재 상태 카탈로그 사진 스크린샷으로 대체 가능.

기본 사이즈 1024×1536. 파일명:

```
images/uni-short-slim.png
images/uni-short-regular.png
images/uni-short-oversize.png
images/uni-long-slim.png
…
images/women-short-slim-baby.png
…
```

이미지 1개당 영문 프롬프트 예시:

```
Use case: design / fit-system
Asset type: fit-calibration figure (cut-out, full-body)
Subject: a single fashion model standing, full-length, neutral pose,
  arms relaxed, eye-level camera; gender per line (UNI = neutral
  masculine; WOMEN = neutral feminine)
Garment: a representative [category] in [fit] fit, plain solid color,
  no graphic, no logo, neutral neckline
Color: solid neutral (offwhite / light grey / soft beige) — fit must
  read clearly without distraction
Bottom: neutral basic (jeans for UNI, basic skirt or jeans for WOMEN)
  not part of the fit study
Style/medium: editorial cut-out, transparent or seamless paper neutral
Composition/framing: vertical 4:5, full body, ~5% margin
Constraints: no logos, no readable text, no watermark, single subject
Avoid: aggressive pose, runway pose, half-body, beauty retouching
```

### Step 4 — 시트 구성

`assets/template.html`을 `index.html`로 복사. `[REPLACE]` 토큰 치환, `DESIGN.md` 토큰을 `:root`에 바인딩, 선택 리듬을 `references/layouts.md`에서 `<main id="fit-system">` 안에 붙임.

**필수 섹션 (순서대로):**

1. **헤더 스트립** — 브랜드 + 버전 + 상태 + LOCK 일자
2. **시스템 thesis** — 해결되는 이슈와 변경 방향 한 단락
3. **현재 상태 매트릭스** (Side-by-side 레이아웃만) — 카테고리 × 핏 × 라인 + 현재 명명, 재정의되는 행 플래그
4. **향후 상태 매트릭스** — 카테고리 × 핏 × 라인 + LOCK된 명명 + calibration figure (생성된 경우)
5. **명명 규칙 블록** — 통합 규칙 bullet 리스트 (길이 명명, 핏 명명, 금지 동의어, 공급사 측 등가)
6. **Open / Next Decisions** — LOCK 필요한 것, owner, by when

**OpenDesign 환경에서 사용 시:** 각 섹션에 `data-od-id` 속성을 추가하면 인라인 코멘트 모드를 사용할 수 있습니다.

### Step 5 — 자체 검수

`references/checklist.md`의 기준을 한 항목씩 직접 확인하세요. 향후 상태 매트릭스는 모든 카테고리 × 핏 단계 × 라인 셀을 나열해야 합니다. 명명 규칙에 최소 1개 `banned synonym` 항목 필수. Calibration figure 생성 시 모두 동일 라이팅 / 배경 사용 필수.

## 한국 K-패션 브랜드 사례 (참고)

핏 시스템 작성 시 참고할 K-패션 브랜드 핏 패턴.

| 브랜드 | UNI 핏 사다리 | WOMEN 핏 사다리 | 특이점 |
|---|---|---|---|
| **무신사 스탠다드** | 슬림 / 레귤러 / 오버 (한국적 핏 강조) | 슬림 / 레귤러 / 루즈 | 한국 표준 사이즈 가이드 |
| **마뗑킴** | 레귤러 / 오버 (2단계 미니멀) | 슬림 베이비 / 레귤러 | 일관된 핏 운영 |
| **아더에러** | 오버 위주 (도시적 박시) | 오버 위주 | 시그니처 오버사이즈 |
| **와키윌리** | 슬림 / 레귤러 / 오버 | 슬림 베이비 / 레귤러 / 세미오버 | UNI/WOMEN 페어링 표준 |
| **시야쥬** | 레귤러 / 루즈 | 슬림 / 레귤러 | 차분한 톤 핏 |

## 한국 패션기업 조직 R&R 메모

핏 시스템은 **디자인실 패턴팀 + 핏룸**이 작성하는 한국 패션기업 표준 흐름.

- **패턴실장 / 패턴팀**: 핏 사다리 정의, 핏별 실루엣 표준화, 샘플 핏 검수
- **디자인 실장**: 핏 명명 LOCK, 시즌 컨셉 정합성 검토
- **핏 모델 / 핏룸**: 실측 검증, calibration figure 촬영
- **MD실**: 핏별 카테고리 운영 정책 (오버사이즈 비중 등)
- **생산실**: 공급사 측 핏 명명 등가 매핑, 발주서 표준화

## 시즌 사이클 내 위치

핏 시스템은 **시즌 사이클과 무관한 영구 문서**. 매년 1회 또는 브랜드 실루엣 재정의 시점에 개정.

```
[연 1회 개정 — 시즌 무관]
    ↓ 모든 시즌 패턴 작업이 상속
[fashion-styling-board] (시즌 시작 3~4개월 전)
[fashion-new-lineup] (시즌 시작 3개월 전)
[fashion-key-item-sheet] (시즌 시작 3개월 전)
[샘플 발주 / 핏 검수] (시즌 시작 4~5개월 전부터)
[품평회] (1차 샘플 입고 시점, 시즌 시작 4개월 전)
```

핏 시스템 개정 시 모든 진행 중 샘플의 핏 명명을 신규 시스템과 정합시켜야 합니다.

## 출력 규약

단일 HTML 문서를 결과물로 출력하세요.

- **Claude 환경**: `<artifact>` 태그로 감싸세요.
  ```
  <artifact identifier="fashion-fit-system-slug" type="text/html" title="핏 시스템 제목">
  <!doctype html>
  <html>...</html>
  </artifact>
  ```
- **그 외 환경**: 표준 마크다운 HTML 코드 블록으로 출력하세요.

출력 앞에 한 문장 요약을, 뒤에는 아무것도 덧붙이지 마세요.
