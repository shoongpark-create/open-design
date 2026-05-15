---
name: fashion-fabric-board
description: |
  K-패션 브랜드의 **시즌 패브릭 보드(소재 방향성)**를 단일 HTML 파일로 생성하는 스킬입니다.
  시즌의 패브릭 어휘를 UNI / WOMEN 라인 양쪽에 LOCK합니다 — 구조 패브릭(와플 / 슬럽 / 립 / 크리즈체크 /
  시어서커 / 메쉬 / 레이스 / 도트 저지), 기능성 패브릭(소로나쿨, 소로나 폴리머, 아스킨, 라이트 나일론, 쿨맥스, 린넨라이크),
  현장에서 기능을 전달하는 행택 / 포인트 라벨 자산. 한국 의류 스튜디오가 샘플 커팅 전에 패브릭 밀·공장 샘플실에 넘기는 문서.
  사용자가 "패브릭 보드", "소재 방향성", "유니 소재", "우먼 소재", "기능성 소재", "행택", "피쳐 라벨"을 언급하면 활성화하세요.
triggers:
  - "패브릭 보드"
  - "소재 방향성"
  - "유니 소재"
  - "우먼 소재"
  - "기능성 소재"
  - "행택"
  - "피쳐 라벨"
  - "원단 보드"
  - "fabric board"
  - "fabric direction"
  - "material board"
  - "functional fabric"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 16
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "와키윌리 27SS 패브릭 보드를 만들어주세요. UNI 블록(와플 / 슬럽 / 립 저지 + 크리즈 체크 + 시어서커 + CN 올오버)과 WOMEN 블록(와플 / 도트 / 러블리 프린트 저지 + 폴리 우라기리 + 체크 시어서커 + 폴리 메쉬). 기능성 패브릭 블록: 소로나쿨, 아스킨, 소로나 폴리머, 라이트 나일론 UV+생활방수."
---

# 패션 패브릭 보드 스킬

K-패션 브랜드의 **시즌 패브릭 보드**를 단일 HTML 파일로 생성합니다. 공장 샘플실이 커팅을 시작하기 전에 시즌 패브릭 어휘를 LOCK하는 문서입니다. **내부 + 공장 대상** — 청중은 디자이너, MD, 패브릭 에이전트, 밀.

패브릭 보드가 답하는 4가지 질문:

1. **이번 시즌의 패브릭 어휘는 무엇인가?** (구조 패브릭 + 핸드필 디스크립터 + 권장 용도)
2. **이번 시즌이 기대는 기능성 패브릭은 무엇인가?** (쿨링, 모이스처, UV, 폴리머 기반, 리사이클드 + 각각의 행택 자산)
3. **UNI와 WOMEN이 어떻게 분기하는가?** (UNI = 유틸리티/구조, WOMEN = 로맨틱/도트/레이스/시어)
4. **고객이 기능을 어떻게 경험하는가?** (행택 비주얼, 포인트 라벨, 매장 POP — 기능은 *가시적*이어야 가치 동인 작동)

`fashion-concept-board`와 `fashion-key-item-sheet` 사이에 위치: 컨셉 보드가 영역, 패브릭 보드가 소재 LOCK, 키 아이템 시트가 소재를 구체 아이템에 바인딩.

## 환경 호환성

이 스킬은 모든 LLM 환경에서 동일하게 사용할 수 있습니다.

- **Claude 환경(Claude.ai · Claude Code)**: 결과물을 `<artifact>` 태그로 감싸 출력합니다.
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 HTML 코드 블록으로 출력합니다.
- **OpenDesign 환경**: frontmatter의 `od:` 블록과 본문에서 권장하는 `data-od-id` 속성을 활용하면 인라인 코멘트·미리보기 기능을 사용할 수 있습니다. 다른 환경에서는 일반 `id` 속성으로 대체하거나 생략 가능합니다.

본문 작업 흐름은 모든 LLM이 자력으로 따라할 수 있도록 명시적으로 작성되어 있습니다. 디자인 시스템 파일이 자동 주입되지 않는 환경이라면, 사용자에게 `DESIGN.md` 경로나 기본 톤을 묻고 진행하세요.

## 출력 언어 정책

사용자가 한국어로 작성하거나 브랜드/맥락이 한국 K-패션이라면, 산출물 카피는 **한국 패션 비즈니스 등록(register)**을 따릅니다.

- 유지하는 용어: SKU · 캐리오버 · UNI / WOMEN · BTA · 랩딥(lab-dip) · MOQ · MCQ · 핸드필 · 드레이프 · 행택 · 포인트 라벨 · 우라기리 · 쭈리 · 사입가율 · 정상판매율.
- 패브릭 이름은 한국어 + 영문 혼용 자연스러움: `와플 저지`, `슬럽 저지`, `소로나쿨 싱글저지`, `아스킨 싱글저지`, `폴리 우라기리`, `라이트 나일론`.
- 기능성 패브릭 인그리디언트 브랜드(Sorona, Askin, Coolmax, Creora)는 영문 그대로 — 실제 공급사 라이선스 행택이므로.
- 섹션 라벨과 표 헤더는 영문 혼용 허용: `Functional fabrics`, `UNI · Structural`, `Lab-dip Status`, `Open Decisions`.
- 본문 카피, 표 해석, HTML 주석, 결정 노트는 **명사구 종결** 선호. 예: `적용`, `랩딥 pending`, `벌크 승인 완료`, `행택 미적용 (캐리오버)`.

## 타이포그래피

프로젝트 루트의 `DESIGN.md` 타이포그래피 토큰 사용. 본문·테이블·UI 기본 폰트는 **Pretendard Variable**. 패브릭 보드는 **운영 덱 성격**이므로 디스플레이 폰트는 `--font-display-report`를 기본값으로 사용합니다.

테이블 본문, 패브릭 메타, SKU 행, 코드, 날짜, 파일명, owner/by 필드에는 디스플레이 폰트를 쓰지 말고 `--font-sans` 또는 `--font-mono` 유지.

## 폴더 구조

```
fashion-fabric-board/
├── SKILL.md              ← 이 파일
├── assets/
│   └── template.html
└── references/
    ├── fabric-library.md ← 구조/기능성 패브릭 라이브러리
    ├── layouts.md        ← 레이아웃 3종
    └── checklist.md      ← 자체 검수 기준
```

## 작업 흐름

### Step 0 — 사전 점검

1. 이 스킬 폴더의 `assets/template.html`을 처음부터 끝까지 읽으세요.
2. `references/fabric-library.md`를 읽고 핸드 디스크립터·권장 용도가 있는 패브릭 분류를 인지하세요.
3. `references/layouts.md`를 읽고 레이아웃을 가늠하세요.
4. `references/checklist.md`를 읽으세요.
5. 프로젝트 루트의 `DESIGN.md`(또는 등가 디자인 토큰 파일)와 가용한 `fashion-concept-board`, `fashion-color-story`를 읽으세요. 패브릭 컬러 참조는 LOCK된 컬러 스토리의 이름을 사용해야 합니다. 파일이 자동 주입되지 않는 환경이라면 사용자에게 경로나 기본 톤을 물어 진행합니다.
6. 패브릭 스와치 이미지 생성은 선택. 환경별 가용 이미지 생성 도구 사용. 이미지 미생성 시 폴백 텍스트(`data-fallback`)로 자연스럽게 대체.

### Step 1 — 보드 정보 수집

다음이 빠지면 첫 발견 폼에서 물어보세요.

- 시즌 코드 (예: 27SS)
- 커버 라인 — UNI만, WOMEN만, 또는 양쪽 (기본: 양쪽)
- 라인당 패브릭 수 목표 — 기본 구조 4~6 + 기능성 2~4; 3~8 범위 허용
- 기능성 패브릭 세트 — {소로나쿨 싱글저지, 소로나 폴리머 쭈리, 아스킨 싱글저지, Cool Cotton, 라이트 나일론 UV+생활방수, 쿨맥스 데님, 린넨라이크 데님, 리사이클 나일론, 기타} 중 선택; 행택 자산 보유 여부 마크
- 행택 정책 — 각 기능성 패브릭이 행택 mock을 문서에 포함하는가? (기본: 모든 기능성에 yes)
- 캐리오버 패브릭 — canonical 이름으로 리스트 (예: `26SS에서 소로나쿨 — 동일 공급사`)
- 랩딥 / 승인 상태 — for-info / 랩딥 pending / 벌크 pending / locked

### Step 2 — 레이아웃 선택

`references/layouts.md`에서 **1개** 선택:

- **레이아웃 A · 두 컬럼 라인 분할 (기본)** — UNI 좌측, WOMEN 우측, 기능성 블록 하단 풀 폭
- **레이아웃 B · 라인별 스택드** — UNI 상단, WOMEN 중간, 기능성 하단; 한 라인이 지배할 때
- **레이아웃 C · Functional-first** — 기능성 블록 상단(행택 mock 크게); UNI + WOMEN 하단; 시즌 가치 동인이 기능 스토리일 때(히트테크 여름)

선택 레이아웃 한 문장 선언.

### Step 3 — 패브릭 스와치 생성

이미지 생성이 가능한 환경에서 모든 패브릭에 대해 생성하세요:

- **스와치 클로즈업 1장** (정사각 1024×1024) — 패브릭 핸드 가시, 위브/텍스처 표시
- **착장 컨텍스트 이미지 1장** (정사각 1024×1024) — 이 패브릭 사용 가먼트 영역, 중립 조명, 풀 보디 없음. 제너릭 패브릭(베이직 싱글저지)은 스와치 단독 사용 가능

파일명 규칙:

```
images/uni-fabric-01-waffle.png
images/uni-fabric-01-waffle-worn.png
…
images/women-fabric-04-poly-mesh.png
…
images/func-01-sorona-cool.png
images/func-01-sorona-cool-hangtag.png
…
```

이미지 1개당 영문 프롬프트 예시:

```
Use case: design / fabric-board
Asset type: [swatch close-up | worn-context | hangtag mock]
Fabric name: [canonical 이름. 예: 와플 저지 (waffle jersey)]
Hand-feel: [soft / dry / crisp / structured / fluid]
Surface: [woven / knit / printed / textured]
Subject: [스와치: 위브 표시 플랫레이; 착장: 패브릭 사용 가먼트 영역(커프스, 헴, 어깨);
  행택: 공급사 행택 플랫레이 + 패브릭 옆]
Style/medium: editorial product photography, neutral background, soft daylight
Composition/framing: square 1024x1024, centered, ~10% margin
Color palette: [컬러 스토리에서 가져옴 — 대표 시즌 컬러로 표시, 화이트 아님]
Constraints: no logos (행택이 피사체 아닐 때), no readable text (행택 제외),
  no watermark, no AI-slop sparkle
Avoid: glamour lighting, hard color cast, fake gradient, busy background
```

기능성 행택의 경우 공급사 브랜드명(Sorona, Askin, Coolmax, Creora) 사용 — 실제 인그리디언트 브랜드, 라이선스 행택.

### Step 4 — 보드 구성

`assets/template.html`을 `index.html`로 복사. `[REPLACE]` 토큰 치환, `DESIGN.md` 토큰을 `:root`에 바인딩, 선택 레이아웃을 `references/layouts.md`에서 `<main id="fabric-board">` 안에 붙임.

**필수 섹션 (순서대로):**

1. **헤더 스트립** — 시즌 + 커버 라인 + 상태(v1 / v2 / locked) + LOCK 일자
2. **보드 thesis** — 시즌 패브릭 자세 한 단락 (예: `27SS는 라이트 + 기능성에 기댐, WOMEN 로맨틱 도트/레이스 서포트`)
3. **기능성 패브릭 블록** — 2~4 패브릭. 각각: 이름, 인그리디언트 브랜드(있으면), 기능 설명, 행택 mock, 권장 아이템 카테고리, 공급사(알려진 경우)
4. **UNI 구조 블록** — 4~6 패브릭. 각각: 이름, 핸드필, 위브/니트 타입, 스와치 이미지, 선택 착장 컨텍스트 이미지, 권장 카테고리
5. **WOMEN 구조 블록** — 동일 형태, 4~6 패브릭. 로맨틱 프린트/레이스는 여기
6. **랩딥 / 승인 상태 표** — 패브릭 × 상태(for-info / 랩딥 pending / 벌크 pending / approved) × 공급사 × 리드타임
7. **Open / Next Decisions** — LOCK 필요한 것, owner, by when

**OpenDesign 환경에서 사용 시:** 각 섹션에 `data-od-id` 속성을 추가하면 인라인 코멘트 모드를 사용할 수 있습니다. 다른 환경에서는 일반 `id` 속성으로 대체하거나 생략 가능합니다.

### Step 5 — 자체 검수

`references/checklist.md`의 P0/P1/P2 기준을 한 항목씩 직접 확인하세요. 모든 기능성 패브릭은 행택 mock 또는 `행택 미적용 (캐리오버)` 표시 필수. 모든 구조 패브릭은 스와치 + 핸드필 디스크립터 보유 필수. 이미지 실패 시 폴백 텍스트로 페이지 작동 확인.

## 한국 패션기업 조직 R&R 메모

패브릭 보드는 **디자인실 + 패브릭 담당(직물 MD)**이 합작 작성하는 한국 패션기업 표준 흐름.

- **디자인실 (수석 디자이너 + 패브릭 담당)**: 패브릭 어휘 선택, 핸드필 디스크립터 작성, 컨셉 보드와의 정합성
- **MD실**: 권장 카테고리·라인업 정합성 검토, 사입가율 기준 패브릭 선택 영향 평가
- **생산실 / 직물 MD**: 공장 컨택, MOQ·리드타임 협의, 랩딥 일정 관리, 행택 자산 라이선스 확인
- **마케팅실**: 행택·POP의 기능성 가시화 카피 검토 (포엣코어 톤)

## 시즌 사이클 내 위치

패브릭 보드는 **시즌 시작 약 4~5개월 전** 작성 (컨셉 보드 직후, 컬러 스토리와 동시 또는 직전).

```
[시즌 시작 5~6개월 전] fashion-concept-board
       ↓
[시즌 시작 4~5개월 전] ★ fashion-fabric-board (이 문서)
                      fashion-color-story (동시)
       ↓ 동대문 패브릭 트립 → 공장 컨택
[시즌 시작 4개월 전] 패브릭 발주, 랩딥 strike 1 시작
       ↓
[시즌 시작 3개월 전] fashion-new-lineup, fashion-key-item-sheet (패브릭 → 아이템 바인딩)
       ↓
[시즌 시작 2~3개월 전] fashion-graphic-direction (행택 디자인 LOCK)
       ↓
[시즌 시작 2개월 전] 본생산 시작 (벌크 LOT)
       ↓
[시즌 시작 1~2개월 전] fashion-lookbook (착장 화보)
```

## 한국 K-패션 브랜드 사례 (참고)

| 브랜드 | 패브릭 패턴 | 시그니처 |
|---|---|---|
| **마뗑킴** | 미니멀 구조 + 페이퍼-필 코튼 | 절제된 4~5 패브릭 운영 |
| **마르디 메크르디** | 다채로운 도트/플라워 저지 + 폴리 우라기리 | 시그니처 플라워 그래픽 |
| **무신사 스탠다드** | 베이직 코튼 + 기능성 행택 강조 | 가성비 기능성 (Sorona Cool, Cool Cotton) |
| **시야쥬** | 린넨, 워시드 코튼, 페이퍼-필 | 텍스처감 살린 미니멀 |
| **와키윌리** | UNI 구조 + WOMEN 러블리 + 캐릭터 자카드 | CN 올오버 캐릭터 프린트 |
| **인사일런스** | 도시적 모노톤 + 기능성 나일론 | 라이트 나일론, UV차단 |

## 출력 규약

단일 HTML 문서를 결과물로 출력하세요.

- **Claude 환경**: `<artifact>` 태그로 감싸세요.
  ```
  <artifact identifier="fashion-fabric-board-slug" type="text/html" title="시즌 패브릭 보드 제목">
  <!doctype html>
  <html>...</html>
  </artifact>
  ```
- **그 외 환경**: 표준 마크다운 HTML 코드 블록으로 출력하세요.

출력 앞에 한 문장 요약을, 뒤에는 아무것도 덧붙이지 마세요.
