---
name: fashion-graphic-direction
description: |
  K-패션 브랜드의 **시즌 그래픽 디렉션**을 단일 HTML 파일로 생성하는 스킬입니다.
  티셔츠 / 프린트 / 자수 / 포인트 라벨 / 심볼 / 워드마크 시즌성 — 한국 의류 스튜디오가
  개별 아트워크 의뢰 *이전*에 디자이너와 그래픽 공급사를 정렬시키는 문서.
  사용자가 "그래픽 방향성", "시즌 그래픽", "프린트 방향", "심볼/워드마크", "캐릭터 그래픽",
  "포인트 라벨", "자수 디렉션"을 언급하면 활성화하세요.
triggers:
  - "그래픽 방향성"
  - "시즌 그래픽"
  - "프린트 방향"
  - "심볼"
  - "워드마크"
  - "캐릭터 그래픽"
  - "포인트 라벨"
  - "자수 디렉션"
  - "graphic direction"
  - "graphic board"
  - "season graphic"
  - "print direction"
  - "embroidery direction"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 15
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "와키윌리 27SS 그래픽 디렉션을 만들어주세요. 6개 테마 — 빈티지 카툰 티, 그래피티 스프레이, 라인 드로잉 카모, 캔디 카모, 레트로 젤리-코어, 포인트 라벨/자카드. 시즌 심볼 + 워드마크 젤리 트리트먼트 LOCK."
---

# 패션 그래픽 디렉션 스킬

K-패션 브랜드의 **시즌 그래픽 디렉션**을 단일 HTML 파일로 생성합니다. 개별 아이템 아트워크 파일 *이전*에 시즌의 그래픽 언어를 LOCK하는 문서. **내부용** — 청중은 디자이너, 그래픽 스튜디오, 자수 공급사, 포인트 라벨 벤더.

그래픽 디렉션이 답하는 4가지 질문:

1. **이번 시즌에 속한 그래픽 테마는 무엇인가?** (3~8개 명명된 테마 + 각 1줄 thesis + 레퍼런스 세트)
2. **각 테마는 어떻게 등장하는가?** (티 프린트, 자수, 올오버 패턴, 스티커, 포인트 라벨, 자카드, 하드웨어 인그레이빙)
3. **시즌 심볼 + 워드마크 트리트먼트는?** (이번 시즌만의 jelly / chrome / pixel / 손글씨 변형 LOCK)
4. **그래픽 anti-direction은 무엇인가?** (시즌이 명시적으로 거절하는 테마 — Y2K 블링, AI-슬롭 sparkle, 제너릭 이모지 등)

`fashion-concept-board`(영역)와 개별 아이템 아트워크 파일 사이에 위치. LOCK 후에는 샘플실과 그래픽 스튜디오가 이 한 페이지에서 직접 브리프.

## 환경 호환성

이 스킬은 모든 LLM 환경에서 동일하게 사용할 수 있습니다.

- **Claude 환경(Claude.ai · Claude Code)**: 결과물을 `<artifact>` 태그로 감싸 출력합니다.
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 HTML 코드 블록으로 출력합니다.
- **OpenDesign 환경**: frontmatter의 `od:` 블록과 본문에서 권장하는 `data-od-id` 속성을 활용하면 인라인 코멘트·미리보기 기능을 사용할 수 있습니다. 다른 환경에서는 일반 `id` 속성으로 대체하거나 생략 가능합니다.

본문 작업 흐름은 모든 LLM이 자력으로 따라할 수 있도록 명시적으로 작성되어 있습니다. 디자인 시스템 파일이 자동 주입되지 않는 환경이라면, 사용자에게 `DESIGN.md` 경로나 기본 톤을 묻고 진행하세요.

## 출력 언어 정책

사용자가 한국어로 작성하거나 브랜드/맥락이 한국 K-패션이라면, 산출물 카피는 **한국 패션 비즈니스 등록(register)**을 따릅니다.

- 유지하는 용어: SKU · 캐리오버 · 포인트 라벨 · 자카드(우븐 태그) · 자수 · 워드마크 · 심볼 · 락업(lockup) · 캡슐 · IP · 사입가율.
- 테마 이름은 한국어 + 영문 혼용 자연스러움: `빈티지 카툰`, `그래피티 스프레이 + 스티커`, `라인 드로잉 카모`, `캔디 카모`, `레트로 젤리-코어`, `Retro Jelly`, `Vintage Athletic`.
- 적용 표면(application surface) 라벨은 영문 그대로: `tee print`, `sweat print`, `embroidery`, `all-over pattern`, `sticker`, `point label`, `woven tag`, `hardware engraving`.
- 본문 카피, 표 해석, HTML 주석은 **명사구 종결** 선호. 예: `적용`, `사용 금지`, `studio 미배정`, `자수 발주 LOCK`.

## 타이포그래피

프로젝트 루트의 `DESIGN.md` 타이포그래피 토큰 사용. 본문·테이블·UI 기본 폰트는 **Pretendard Variable**. 그래픽 디렉션은 산출물 성격이 다양 — 캐릭터 IP·팬덤 굿즈 시즌은 `--font-display-play`, 스트릿·런칭 시즌은 `--font-display-street`, 로맨틱 시즌은 `--font-display-romance`, 일반 운영 덱은 `--font-display-report` 사용. 1개 산출물당 1개 디스플레이 폰트 선택.

테이블 본문, 표 해석, owner/by 필드에는 디스플레이 폰트를 쓰지 말고 `--font-sans` 또는 `--font-mono` 유지.

## 폴더 구조

```
fashion-graphic-direction/
├── SKILL.md              ← 이 파일
├── assets/
│   └── template.html
└── references/
    ├── theme-library.md  ← 12개 테마 라이브러리
    ├── layouts.md        ← 레이아웃 2종
    └── checklist.md      ← 자체 검수 기준
```

## 작업 흐름

### Step 0 — 사전 점검

1. 이 스킬 폴더의 `assets/template.html`을 처음부터 끝까지 읽으세요.
2. `references/theme-library.md`를 읽고 12개 테마 라이브러리(예시 무브 + `use when` 노트)를 인지하세요.
3. `references/layouts.md`를 읽고 레이아웃 리듬을 가늠하세요.
4. `references/checklist.md`를 읽으세요.
5. 프로젝트 루트의 `DESIGN.md`(또는 등가 디자인 토큰 파일)와 가용한 `fashion-concept-board`, `fashion-color-story`를 읽으세요. 테마는 팔레트에 바인딩되어야 — 그래픽 컬러 선택은 템플릿 기본값이 아닌 LOCK된 컬러 스토리에서 옴.
6. 이미지 생성은 환경별 가용 도구 사용. 미생성 시 폴백 텍스트로 자연스럽게 대체.

### Step 1 — 디렉션 정보 수집

다음이 빠지면 첫 발견 폼에서 물어보세요.

- 시즌 코드 (예: 27SS)
- 브랜드 페르소나 1~2 형용사 (예: `위트, 유머, 레트로 경향`)
- 테마 수 목표 — 기본 5~7, 3~8 범위 허용
- 적용 표면 — 적용 항목 체크: 티 프린트, 스웻 프린트, 자수, 올오버 패턴, 자카드, 포인트 라벨/스티커, 하드웨어 인그레이빙, 패키징
- 시즌이 신규 심볼 / 워드마크 트리트먼트 LOCK 여부 (yes / no)
- 이전 시즌 캐리오버 테마 — 이름 리스트
- Anti-direction — 3~7개 명시적 "no" 테마
- 그래픽 스튜디오 / 자수 공급사 (알려진 경우)

### Step 2 — 테마 선택

`references/theme-library.md`에서 **3~8개 테마** 선택, 또는 동일 형태로 신규 정의:

- **테마 이름** — 짧고, 환기적, 브랜드 내부용 (예: `빈티지 카툰`, `그래피티 스프레이 + 스티커`, `라인 드로잉 카모`, `캔디 카모`, `레트로 젤리-코어`)
- **Thesis** — 이번 시즌에 이 테마가 무엇을 위한 것인지 1줄
- **적용 표면 세트** — 해당 표면 체크
- **레퍼런스 클러스터** — 레퍼런스 이미지 4~6장
- **캐리오버 노트** — new / carried / evolved
- **스튜디오 배정** — 어느 그래픽 스튜디오가 owner (선택)

선택 테마 리스트를 이미지 생성 전에 한 문장으로 선언:

> "27SS 그래픽 디렉션: 6개 테마 — 빈티지 카툰 티, 그래피티 스프레이 + 스티커, 라인 드로잉 카모, 캔디 카모, 레트로 젤리-코어, 컬러드 포인트 라벨 / 자카드."

### Step 3 — 테마 레퍼런스 클러스터 생성

테마당 **레퍼런스 이미지 4~6장** 생성, *테마의 풀 표면 세트* spanning (티 프린트 + 자수 샘플 + 올오버 패턴 스트립 해당 시). 기본 1024×1024. 파일명:

```
images/theme-01-cartoon-01.png … images/theme-01-cartoon-06.png
images/theme-02-graffiti-01.png …
images/theme-03-camo-01.png …
…
```

이미지 1개당 영문 프롬프트 예시:

```
Use case: design / graphic-direction
Asset type: graphic-theme reference (no model)
Theme: [REPLACE 테마 이름]
Application surface: [tee print | embroidery | all-over pattern |
  sticker | point label | woven tag | hardware engraving]
Visual subject: [실제 그래픽 — 모티프, 라인 무게, 구성 묘사;
  올오버 패턴은 리피트 유닛 묘사]
Style/medium: editorial flat-lay or close-up; 티 프린트는 플랫 가먼트 영역;
  자수는 스티칭 텍스처; 자카드는 위브 스와치 스케일
Color palette: [컬러 스토리에서; 그래픽 컬러는 주로 ACCENT 또는 TREND 티어]
Composition/framing: square 1024x1024, centered, ~10% margin, 클러스터 내 일관 앵글
Lighting/mood: soft daylight, no hard shadows
Constraints: no third-party brand text, no readable real-world brand
  marks, no watermark, no AI-slop chrome glitter, no fake gradient sky
Avoid: aggressive purple gradient, generic emoji, stock-vector look,
  clipart aesthetic, busy backgrounds
```

사용자가 자체 레퍼런스(빈티지 티 사진, 스티커 시트, 라벨 스캔)를 첨부하면 edit / extend 레퍼런스로 처리 — 재상상 금지.

### Step 4 — 심볼 / 워드마크 시즌성 (선택)

시즌이 신규 심볼 또는 워드마크 트리트먼트 LOCK 시 (Step 1) 전용 **Symbol & Wordmark** 블록 추가. 생성:

- **심볼 스터디** — 이번 시즌 트리트먼트의 브랜드 심볼 변형 3~6개 (jelly, chrome, pixel, hand-drawn, embossed). `images/symbol-01.png` … `images/symbol-06.png`
- **워드마크 스터디** — 동일 트리트먼트의 브랜드 워드마크 변형 3~6개. `images/wordmark-01.png` …
- **락업 변형** — 어패럴, 패키징, IMC에 적합한 심볼+워드마크 락업 2~3개. `images/lockup-01.png` …

### Step 5 — 디렉션 구성

`assets/template.html`을 `index.html`로 복사. `[REPLACE]` 토큰 치환, `DESIGN.md` 토큰을 `:root`에 바인딩, 선택 리듬을 `references/layouts.md`에서 `<main id="graphic-direction">` 안에 붙임.

**필수 섹션 (순서대로):**

1. **헤더 스트립** — 시즌 + 브랜드 + 디렉션 상태(v1 / v2 / locked) + LOCK 일자
2. **디렉션 thesis** — 시즌 그래픽 자세 한 단락 + 컨셉 보드 영역과의 연결
3. **테마 그리드** — 3~8 테마 카드. 각 카드: 이름, thesis, 적용 표면 태그, 레퍼런스 클러스터, 캐리오버 노트, 선택 스튜디오 배정
4. **Symbol & Wordmark** (선택) — 심볼 스터디 + 워드마크 스터디 + 락업 변형. 시즌이 신규 트리트먼트 없으면 블록 전체 생략
5. **적용 표면 매트릭스** — 테마 × 표면 표, 어떤 테마가 어떤 표면에 등장하는지 마킹. 0 테마 표면은 스킵 후보, 0 표면 테마는 드롭 후보
6. **Anti-direction** — 3~7 bullet — 이번 시즌이 *아닌* 것
7. **Open / Next Decisions** — LOCK 필요한 것, owner, by when

**OpenDesign 환경에서 사용 시:** 각 섹션에 `data-od-id` 속성을 추가하면 인라인 코멘트 모드를 사용할 수 있습니다.

### Step 6 — 자체 검수

`references/checklist.md`의 기준을 한 항목씩 직접 확인하세요. 모든 테마 카드가 이름 + thesis + 4~6 레퍼런스 타일 + 최소 1개 적용 표면 태그 보유. Anti-direction에 ≥3 항목. 이미지 실패 시 폴백 텍스트로 페이지 작동 확인.

## 한국 K-패션 브랜드 사례 (참고)

| 브랜드 | 그래픽 패턴 | 시그니처 |
|---|---|---|
| **마뗑킴** | 텍스트 로고 + 미니멀 워드마크 트리트먼트 | 메탈 자카드 라벨 |
| **마르디 메크르디** | 플라워 마르디 그래픽 (영구 캐리오버) | 플라워 자카드, 컬러 패치 |
| **아더에러** | 테트라이트 로고 + 글리치 그래픽 | 블루 키컬러, 기하학 그래픽 |
| **키르시** | 체리 심볼 + 비비드 컬러 그래픽 | 체리 자카드, 패치 |
| **와키윌리** | 캐릭터 IP 그래픽 + 시즌 워드마크 젤리 트리트먼트 | 캐릭터 자수, 그래픽 펜 포인트 |
| **무신사 스탠다드** | 미니멀 우븐 라벨 | 베이직 워드마크 |

## 한국 패션기업 조직 R&R 메모

그래픽 디렉션은 **디자인실 그래픽팀**이 작성하는 한국 패션기업 표준 흐름.

- **디자인실 그래픽팀 / AD (Art Director)**: 테마 큐레이션, 심볼/워드마크 트리트먼트 디자인, 그래픽 스튜디오 컨택
- **디자인 실장**: 디렉션 thesis LOCK, 컨셉 보드와의 정합성 검토
- **MD실**: 적용 표면 매트릭스 검토 (라인업 그래픽 배분 정합)
- **마케팅실**: 캠페인 키비주얼·IMC 그래픽 활용 계획
- **생산실**: 자수 공급사·자카드 공장 컨택, 비용·리드타임 협의

## 시즌 사이클 내 위치

그래픽 디렉션은 **시즌 시작 약 2~3개월 전** 작성 (라인업 LOCK 후, 룩북 직전).

```
[시즌 시작 5~6개월 전] fashion-concept-board (영역)
       ↓
[시즌 시작 3개월 전] fashion-new-lineup, fashion-key-item-sheet
       ↓
[시즌 시작 2~3개월 전] ★ fashion-graphic-direction (이 문서)
                      → 자수·자카드 공장 발주, 그래픽 스튜디오 작업 시작
       ↓
[시즌 시작 2개월 전] 본생산 (그래픽 적용 가먼트)
       ↓
[시즌 시작 1~2개월 전] fashion-lookbook (그래픽 디렉션 가먼트 화보)
       ↓
[시즌 시작 2개월 전] fashion-imc-calendar (캠페인 키비주얼 그래픽 활용)
```

## 출력 규약

단일 HTML 문서를 결과물로 출력하세요.

- **Claude 환경**: `<artifact>` 태그로 감싸세요.
  ```
  <artifact identifier="fashion-graphic-direction-slug" type="text/html" title="시즌 그래픽 디렉션 제목">
  <!doctype html>
  <html>...</html>
  </artifact>
  ```
- **그 외 환경**: 표준 마크다운 HTML 코드 블록으로 출력하세요.

출력 앞에 한 문장 요약을, 뒤에는 아무것도 덧붙이지 마세요.
