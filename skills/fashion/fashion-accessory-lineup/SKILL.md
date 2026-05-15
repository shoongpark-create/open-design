---
name: fashion-accessory-lineup
description: |
  K-패션 브랜드의 **시즌 액세서리 라인업**(가방 / 모자 / 신발 / 양말 / 벨트 / 키링 등)을 단일 HTML 파일로 생성하는 스킬입니다.
  의류 `fashion-styling-board`의 액세서리 대응 문서이며, BASIC↔ACCENT 4축이 아닌 **셰이프 패밀리(shape family)** 단위로 카테고리를 그룹화합니다.
  예: 신학기 백팩 = Light String / Round Zipper / Round Pocket 3개 패밀리. 각 패밀리에 SKU 2~5개가 들어가고, 시즌 시그니처 액센트(키링 캐릭터, 포인트 라벨, 컬러 웨빙 등)가 패밀리 간 연결고리로 작동합니다.
  사용자가 "액세서리 라인업", "악세사리 라인업", "가방 라인", "모자 라인", "슈즈 라인업", "신학기 백팩 라인", "캡 라인", "ACC 라인업"을 언급하면 활성화하세요.
triggers:
  - "액세서리 라인업"
  - "악세사리 라인업"
  - "가방 라인"
  - "백팩 라인"
  - "모자 라인"
  - "캡 라인"
  - "슈즈 라인업"
  - "신발 라인"
  - "신학기 백팩"
  - "ACC 라인업"
  - "accessory lineup"
  - "bag lineup"
  - "cap lineup"
  - "shoes lineup"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 23
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "와키윌리(WACKYWILLY) 27SS 신학기 백팩 라인업을 만들어주세요. 셰이프 패밀리 3종(Light String / Round Zipper / Round Pocket), 패밀리당 SKU 3개. 히어로 패밀리는 Round Pocket이고, 시그니처 액센트는 캐릭터 키링 + 그래픽 펜 포인트 디테일입니다."
---

# 패션 액세서리 라인업 스킬

K-패션 브랜드의 **시즌 액세서리 라인업**을 단일 HTML 파일로 생성합니다. 한 번에 **한 개 카테고리**(가방 또는 모자 또는 신발 등)만 다룹니다. 의류 라인업 문서(`fashion-styling-board`, `fashion-new-lineup`)의 액세서리 대응 문서이며, 의류가 BASIC↔ACCENT 4축으로 그룹화되는 반면 액세서리는 **셰이프 패밀리(shape family)** 단위로 그룹화됩니다.

라인업이 답하는 4가지 질문:

1. **이번 시즌에 어떤 셰이프 패밀리가 존재하는가?** (예: 신학기 백팩 = Light String / Round Zipper / Round Pocket)
2. **각 패밀리에 어떤 SKU가 들어가는가?** (실제 기획 아이템 + 이미지 + 1줄 스펙)
3. **시즌 시그니처 액센트는 어디에 나타나는가?** (캐릭터 키링, 그래픽 펜 포인트, 컬러 웨빙 등 — 그래픽 디렉션과 연결)
4. **패밀리별 MD 운영·생산 계획은?** (SKU 수, 타겟 LOT, 히어로 지정, 컬러 스토리 링크, 캐리오버 비중)

이 문서는 `fashion-season-strategy`(시즌 카테고리 히어로 지정)와 `fashion-imc-calendar`(롤아웃 타이밍) 사이에 위치합니다.

## 환경 호환성

이 스킬은 모든 LLM 환경에서 동일하게 사용할 수 있습니다.

- **Claude 환경(Claude.ai · Claude Code)**: 결과물을 `<artifact>` 태그로 감싸 출력합니다.
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 HTML 코드 블록으로 출력합니다.
- **OpenDesign 환경**: frontmatter의 `od:` 블록과 본문에서 권장하는 `data-od-id` 속성을 활용하면 인라인 코멘트·미리보기 기능을 사용할 수 있습니다. 다른 환경에서는 일반 `id` 속성으로 대체하거나 생략 가능합니다.

본문 작업 흐름은 모든 LLM이 자력으로 따라할 수 있도록 명시적으로 작성되어 있습니다. 디자인 시스템 파일이 자동 주입되지 않는 환경이라면, 사용자에게 `DESIGN.md` 경로나 기본 톤을 묻고 진행하세요.

## 출력 언어 정책

사용자가 한국어로 작성하거나 브랜드/맥락이 한국 K-패션이라면, 산출물 카피는 **한국 패션 비즈니스 등록(register)**을 따릅니다.

- 모든 라벨을 한국어로 직역하지 마세요. 한국 패션 현장에서 실제로 쓰는 영어 산업용어는 그대로 유지합니다.
- 유지하는 용어 예시: SKU · BTA(Basic/Trend/Accent) · UNI/WOMEN · S1~S4 판기 · 캐리오버 · QR · SPOT · 타겟 LOT · MOQ · 컬러웨이 · 셋업 · 키 아이템 · 히어로 아이템.
- 액세서리 카테고리 용어는 한국어 우선: 가방 · 모자 · 신발 · 양말 · 벨트 · 머플러 · 키링 · 참(charm).
- 셰이프 패밀리 이름은 영문 그대로 유지가 자연스러움: Light String · Round Zipper · Round Pocket · 볼캡 · 버킷 · 메쉬 캡 등.
- 섹션 라벨과 표 헤더는 영문 혼용 허용: `Family × SKU Plan`, `Open Decisions`, `Anti-pattern · 하지 않을 것` 등.
- 이미지 생성 프롬프트는 영어로 작성해도 됩니다. 그러나 화면에 보이는 캡션·폴백 텍스트는 한국 패션 등록을 따릅니다.
- 보고서 성격 산출물의 본문 카피, 표 해석, HTML 주석, 결정 노트는 **명사구 종결**을 선호합니다. 예: `적용`, `전환`, `확보 사유`, `사용 금지`, `owner 확인`, `sample check 완료`, `Local ComfyUI 미사용`. 딱딱한 `~이다`, `~한다`, `~하였다`는 피하세요.

## 타이포그래피

프로젝트 루트의 `DESIGN.md` 타이포그래피 토큰을 사용하세요. 한국 K-패션 표준 폰트인 **Pretendard Variable**을 본문·테이블·UI·결정 로그 기본 폰트로 두는 것을 권장합니다.

산출물 1개당 디스플레이 폰트 하나를 골라 `--font-display` CSS 변수로 바인딩합니다. 액세서리 라인업은 **운영 덱 성격**이므로 `--font-display-report`를 기본값으로 사용합니다. 단, 라인업이 캐릭터 IP·팬덤 굿즈 성격이 강하면 `--font-display-play`로 전환을 고려하세요.

| 산출물 성격 | 권장 디스플레이 폰트 토큰 (예시) |
|---|---|
| 운영 덱, 라인업 문서(기본) | `--font-display-report` (Paperlogy, Wanted Sans, SUIT 등) |
| 룩북·무드보드 톤이 강한 액세서리 | `--font-display-romance` (Grandiflora One, 본명조) |
| 스트릿·캠페인 액세서리 키비주얼 | `--font-display-street` (Black Han Sans, G마켓 산스) |
| 캐릭터 IP·팬덤 굿즈·키링 | `--font-display-play` (Bagel Fat One, 한손글씨) |

테이블 본문, 긴 노트, SKU 행, 코드, 날짜, 파일명, owner/by 필드에는 디스플레이 폰트를 쓰지 말고 `--font-sans` 또는 `--font-mono`를 유지하세요.

## 폴더 구조

```
fashion-accessory-lineup/
├── SKILL.md              ← 이 파일
├── assets/
│   └── template.html     ← 시작 템플릿 (복사해서 index.html로 사용)
└── references/
    ├── shape-families.md ← 카테고리별 셰이프 패밀리 라이브러리
    ├── layouts.md        ← 레이아웃 리듬 3종
    └── checklist.md      ← 자체 검수 기준
```

## 작업 흐름

### Step 0 — 사전 점검

1. 이 스킬 폴더의 `assets/template.html`을 처음부터 끝까지 읽으세요.
2. `references/shape-families.md`를 읽어 카테고리별 셰이프 패밀리 라이브러리를 인지하세요.
3. `references/layouts.md`를 읽고 사용할 리듬 3종(A/B/C) 중 어느 것을 쓸지 가늠하세요.
4. `references/checklist.md`를 읽어 P0/P1/P2 검수 기준을 미리 인지하세요.
5. 프로젝트 루트의 `DESIGN.md`(또는 등가 디자인 토큰 파일)와 가용한 시즌 산출물(`fashion-color-story`, `fashion-graphic-direction`)을 읽고 토큰을 `:root` CSS 변수로 바인딩하세요. 액세서리 액센트는 그래픽 디렉션의 캐릭터·포인트 라벨·컬러 포인트 테마를 상속합니다. 파일이 자동 주입되지 않는 환경이라면 사용자에게 경로나 기본 톤을 물어 진행합니다.
6. 이미지 생성은 **선택**입니다. SKU 제품컷을 명시적으로 요청받았을 때만 생성하세요. LLM 환경별로 사용 가능한 이미지 생성 도구를 사용하고, 결과는 프로젝트 내 `images/` 폴더에 의미 있는 파일명으로 저장합니다.

### Step 1 — 라인업 정보 수집

다음 항목이 사용자 입력에 빠져 있으면 첫 발견 폼에서 함께 물어보세요.

- 시즌 코드 (예: 27SS, 26FW)
- 액세서리 카테고리 — **1개만** 선택: 가방 / 모자 / 신발 / 양말 / 벨트 / 머플러 / 키링·참
- 카테고리 내 서브 세그먼트 (해당 시) — 예: 가방의 경우 신학기 백팩 / 데일리 크로스백 / 토트 / 미니 / 우먼 백, 모자의 경우 볼캡 / 버킷 / 비니 / 메쉬 캡, 신발의 경우 스니커즈 / 샌들 / 슬라이드
- 셰이프 패밀리 — `references/shape-families.md`에서 2~4개 선택 또는 신규 정의
- 패밀리당 SKU 수 — 일반적으로 2~5개
- 히어로 패밀리 지정 — 시즌 캠페인 히어로 (라인업당 최대 1개)
- 시그니처 액센트 세트 — 캐릭터 키링, 그래픽 펜 포인트, 컬러 웨빙, 자카드 포인트 라벨, 젤리 하드웨어 등 (`fashion-graphic-direction`에서 상속)
- 캐리오버 비중 — 0% / 30% / 50% (베스트셀러 연장 여부)

### Step 2 — 리듬 선택

`references/layouts.md`에서 **1개**를 선택합니다.

- **리듬 A · 셰이프 패밀리 컬럼 (기본)** — 각 패밀리가 컬럼이 되고, 컬럼 아래에 SKU 스택을 쌓는 형태. 가장 보편적
- **리듬 B · 패밀리 블록 스택드** — 각 패밀리가 가로 블록이 되고, 블록 안에 SKU 가로 행. 패밀리당 SKU 5개 이상일 때
- **리듬 C · 히어로 + 마이너 패밀리** — 히어로 패밀리가 상단 절반을 차지하고, 마이너 패밀리는 하단 컴팩트 컬럼

선택한 리듬을 한 문장으로 선언하세요.

### Step 3 — 액세서리 이미지 생성 (선택)

이미지 생성이 가능한 환경이고 사용자가 SKU 제품컷을 요청한 경우, 모든 SKU에 대해 제품컷 1장씩 생성하세요. 기본값은 1024x1024 정사각형, 중립 배경. 파일명은 패밀리 + 인덱스 규칙을 따릅니다.

```
images/bag-light-string-01.png
images/bag-light-string-02.png
images/bag-round-zipper-01.png
…
images/cap-ball-01.png
…
images/shoes-sneaker-01.png
…
images/accent-charm-01.png   (시그니처 액센트 세트, 선택)
```

SKU 1개당 영문 프롬프트 예시(가방):

```
Use case: design / accessory-lineup
Asset type: accessory product shot
Category: [bag | cap | shoes | socks | belt | scarf | keyring]
Shape family: [예: Light String backpack]
Subject: a single [accessory] item, [예: backpack with drawstring closure,
  padded shoulder straps, side mesh pockets],
  centered on neutral light-grey ground (#e8e6dc), no model
Color: [컬러 스토리에서 메인 컬러 + 웨빙 액센트 컬러 명시]
Materials/textures: [nylon / canvas / leather / mesh + finish]
Style/medium: editorial product photography, soft daylight, ~10% margin
Composition/framing: square 1024x1024, centered
Constraints: no logos (액센트 포인트 라벨 자체가 피사체일 때만 예외), no
  readable text, no watermark
Avoid: glamour lighting, fake gradient, busy background, on-model
```

시그니처 액센트(키링·포인트 라벨·컬러 웨빙) 이미지는 같은 프롬프트 형태로 매크로 클로즈업으로 생성하세요.

이미지 생성이 불가능한 환경이라면, 템플릿의 폴백 텍스트(`data-fallback="..."`)로 자연스럽게 대체됩니다.

### Step 4 — 라인업 구성

`assets/template.html`을 `index.html`로 복사한 뒤:

1. `[REPLACE …]` 토큰을 사용자 입력으로 치환합니다.
2. `DESIGN.md` 토큰을 `:root`에 바인딩합니다.
3. 선택한 리듬을 `references/layouts.md`에서 복사해 `<main id="accessory-lineup">` 안에 붙입니다.

**필수 섹션 (순서대로):**

1. **헤더 스트립** — 시즌 + 카테고리 + 서브 세그먼트 + 상태 + LOCK 일자
2. **라인업 테제(thesis)** — 한 문단: 앵커 + 의도 + 브릿지 역할(해당 시)
3. **셰이프 패밀리 레이아웃** — 선택한 리듬 본체
4. **시그니처 액센트 스트립** (액센트가 라인업에 포함될 때) — 시즌 액센트 세트(키링·포인트 라벨·컬러 웨빙)를 가로 스트립으로 표시
5. **패밀리 × SKU 표** — 패밀리별 SKU 수, 히어로 플래그, 타겟 LOT, 컬러 티어, 캐리오버 노트
6. **Open / Next Decisions** — 아직 LOCK되지 않은 결정, owner, by when

**OpenDesign 환경에서 사용 시:** 각 섹션에 `data-od-id` 속성을 추가하면 인라인 코멘트 모드를 사용할 수 있습니다. 다른 환경에서는 일반 `id` 속성으로 대체하거나 생략 가능합니다.

### Step 5 — 자체 검수

`references/checklist.md`의 P0/P1/P2 기준을 한 항목씩 직접 확인하세요. 모든 셰이프 패밀리가 헤더 + SKU 스택 + 이미지 최소 1장을 보유해야 하며, 히어로 패밀리 플래그는 라인업당 정확히 0개 또는 1개여야 합니다(절대 2개 이상 금지). 이미지 생성이 실패한 경우, 페이지가 폴백 텍스트로 자연스럽게 렌더링되는지 확인합니다.

## 한국 K-패션 브랜드 사례 (참고)

액세서리 라인업 작성 시 참고할 K-패션 브랜드 운영 패턴.

| 브랜드 | 강세 카테고리 | 시그니처 액센트 |
|---|---|---|
| **와키윌리 (WACKYWILLY)** | 신학기 백팩, 키링 | 캐릭터 키링(Kiky/Lilly/Leo 등), 그래픽 펜 포인트 |
| **마뗑킴 (Matin Kim)** | 토트, 미니백 | 텍스트 로고 자카드 라벨, 메탈 하드웨어 |
| **마르디 메크르디 (Mardi Mercredi)** | 토트, 캡, 키링 | 플라워 마르디 그래픽, 컬러 패치 |
| **아더에러 (ADER ERROR)** | 백팩, 캡 | 테트라이트 로고 메탈 디테일, 블루 키컬러 웨빙 |
| **키르시 (KIRSH)** | 캡, 키링, 양말 | 체리 심볼 자카드/패치, 비비드 컬러웨이 |
| **무신사 스탠다드** | 베이직 백팩, 양말 | 미니멀 우븐 라벨, 한국적 핏 캡 |

위 사례는 카피·예시 참고용입니다. 실제 산출물은 사용자 브랜드의 실제 액세서리 운영 정책으로 작성하세요.

## 한국 패션기업 조직 R&R 메모

액세서리 라인업은 **디자인실(ACC 담당)이 MD실과 합작해 작성**하는 것이 한국 패션기업의 표준입니다.

- **디자인실 (ACC 담당)**: 셰이프 패밀리 정의, SKU 디자인, 액센트 세트 설계 (시즌 그래픽 디렉션과 정합성 확인)
- **MD실**: SKU 수·타겟 LOT·컬러 티어·캐리오버 비중 결정, 카테고리 매출 목표
- **디자인 실장 / 브랜드 디렉터**: 히어로 패밀리 지정 승인, 시즌 컨셉 정합성 검토
- **마케팅실**: 히어로 패밀리 캠페인 활용 계획 (IMC 캘린더와 연결)
- **생산실**: 타겟 LOT 기반 OEM 발주, MOQ 확인, 납기 협의

산출물 헤더에 `status: locked` 표시 시 위 검토자의 확인이 완료된 상태를 의미합니다.

## 시즌 사이클 내 위치

액세서리 라인업은 **시즌 시작 약 3개월 전**에 작성합니다(의류 라인업 LOCK과 비슷한 시점).

```
[시즌 시작 6개월 전] fashion-season-strategy (액세서리 카테고리 히어로 지정)
       ↓
[시즌 시작 5개월 전] fashion-color-story, fashion-fabric-board
       ↓
[시즌 시작 3~4개월 전] fashion-styling-board (의류 스타일링 보드)
       ↓
[시즌 시작 3개월 전] ★ fashion-accessory-lineup (이 문서)
                    fashion-new-lineup (의류 라인업)
                    fashion-key-item-sheet (의류 + ACC 통합 히어로)
       ↓
[시즌 시작 2~3개월 전] fashion-graphic-direction (액센트 디테일 확정)
       ↓
[시즌 시작 2개월 전] fashion-imc-calendar (히어로 패밀리 캠페인 일정)
       ↓
[시즌 시작 1~2개월 전] fashion-lookbook (히어로 패밀리 화보 등장)
```

액세서리 라인업 LOCK 후에는 **MD실 발주서(P/O) 작성 → 생산실 OEM 발주 → 입고**의 표준 흐름으로 진행됩니다.

## 출력 규약

단일 HTML 문서(`<!doctype html>`부터 `</html>`까지)를 결과물로 출력하세요.

- **Claude 환경(Claude.ai · Claude Code)**: 결과물을 아래와 같이 `<artifact>` 태그로 감싸세요.
  ```
  <artifact identifier="fashion-accessory-lineup-slug" type="text/html" title="액세서리 라인업 제목">
  <!doctype html>
  <html>...</html>
  </artifact>
  ```
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 마크다운 HTML 코드 블록으로 출력하세요.
  ````
  ```html
  <!doctype html>
  <html>...</html>
  ```
  ````

출력 앞에 한 문장 요약(예: "와키윌리 27SS 신학기 백팩 라인업을 리듬 A로 작성했습니다.")을, 뒤에는 아무것도 덧붙이지 마세요.
