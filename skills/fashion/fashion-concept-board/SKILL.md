---
name: fashion-concept-board
description: |
  K-패션 브랜드의 **시즌 컨셉 / 무드 보드**를 단일 HTML 파일로 생성하는 스킬입니다.
  컬러·소재·실루엣·스타일을 *결정하기 전에* 디자인실이 만드는 상위 문서이며,
  시즌의 영역(territory)을 선언합니다 — 키워드, 무드 레퍼런스, 톤 다이얼, 시드(seed) 시그널.
  사용자가 "컨셉보드", "무드보드", "시즌 컨셉", "시즌 키오프", "27SS 컨셉", "크리에이티브 디렉션",
  "기획안"을 언급하거나 룩북·라인업·테크팩 작업 *이전*의 크리에이티브 디렉션 산출물을 요청하면 활성화하세요.
triggers:
  - "컨셉보드"
  - "컨셉 보드"
  - "무드보드"
  - "무드 보드"
  - "시즌 컨셉"
  - "시즌 키오프"
  - "크리에이티브 디렉션"
  - "기획안"
  - "concept board"
  - "mood board"
  - "season concept"
  - "season kickoff"
  - "creative direction"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 11
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "마르디 메크르디(Mardi Mercredi) 27SS 컨셉 보드를 만들어주세요. thesis: '습한 6월 출근길 무드 + 드라이 팝 액센트', 키워드 7개, 무드 이미지 12장, 컬러 시드 6개, 소재 시드 6개, 실루엣 시드 5개."
---

# 패션 컨셉 보드 스킬

K-패션 브랜드의 **시즌 컨셉 / 무드 보드**를 단일 HTML 파일로 생성합니다. 디자인실이 시즌의 가장 처음 시점에 만드는 산출물로, 어떤 상품 결정도 이루어지기 *전에* "이번 시즌이 어떤 느낌인가"를 선언합니다. 모든 이후 시즌 산출물의 **상위 문서**입니다 — 룩북, 라인업, 테크팩, 컬러 스토리, 패브릭 보드 등 전부가 컨셉 보드의 영역(territory)을 상속받습니다. **내부용** 문서이며 청중은 디자이너·팀·브랜드 디렉터입니다 (바이어·소비자가 아님).

컨셉 보드가 답하는 4가지 질문:

1. **이번 시즌은 어떤 형태의 스토리를 말하는가?** (한 줄 thesis)
2. **이 시즌에 속한 무드 영역은 무엇인가?** (무드 이미지, 레퍼런스)
3. **어떤 raw 시그널을 따라갈 예정인가?** (컬러 / 소재 / 실루엣 / 디테일 *시드* — 아직 LOCK된 팔레트나 스펙 아님)
4. **의도적으로 하지 않을 것은 무엇인가?** (Anti-territory, off-territory 리스트)

## 환경 호환성

이 스킬은 모든 LLM 환경에서 동일하게 사용할 수 있습니다.

- **Claude 환경(Claude.ai · Claude Code)**: 결과물을 `<artifact>` 태그로 감싸 출력합니다.
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 HTML 코드 블록으로 출력합니다.
- **OpenDesign 환경**: frontmatter의 `od:` 블록과 본문에서 권장하는 `data-od-id` 속성을 활용하면 인라인 코멘트·미리보기 기능을 사용할 수 있습니다. 다른 환경에서는 일반 `id` 속성으로 대체하거나 생략 가능합니다.

본문 작업 흐름은 모든 LLM이 자력으로 따라할 수 있도록 명시적으로 작성되어 있습니다. 디자인 시스템 파일이 자동 주입되지 않는 환경이라면, 사용자에게 `DESIGN.md` 경로나 기본 톤을 묻고 진행하세요.

## 출력 언어 정책

사용자가 한국어로 작성하거나 브랜드/맥락이 한국 K-패션이라면, 산출물 카피는 **한국 패션 비즈니스 등록(register)**을 따릅니다.

- 모든 라벨을 한국어로 직역하지 마세요. 한국 패션 현장에서 실제로 쓰는 영어 산업용어는 그대로 유지합니다.
- 유지하는 용어 예시: SKU · 룩북 · 스타일링 · 핏 · 실루엣 · 컬러웨이 · 시즌 코드 · BTA · UNI/WOMEN · 캐리오버 · 시드(seed) · 톤 다이얼 · 무드 그리드.
- 키워드 클라우드의 키워드는 영문 또는 한국어 모두 자연스러움. 추상 `모던 / 미니멀`보다 구체 단어 선호 (`습한 새벽 출근길`, `드라이 팝`, `세련된 위트`).
- 섹션 라벨과 표 헤더는 영문 혼용 허용: `Mood territory`, `Reference shelf`, `Anti-territory`, `Open Decisions` 등.
- 이미지 생성 프롬프트는 영어로 작성해도 됩니다. 화면 캡션·폴백 텍스트는 한국 패션 등록을 따릅니다.
- 본문 카피, 표 해석, HTML 주석, 결정 노트는 **명사구 종결**을 선호합니다. 예: `적용`, `해석`, `사용 금지`. 딱딱한 `~이다`, `~한다`는 피하세요.

## 타이포그래피

프로젝트 루트의 `DESIGN.md` 타이포그래피 토큰을 사용하세요. 본문·테이블·UI·결정 로그 기본 폰트는 **Pretendard Variable**.

컨셉 보드는 **무드보드·룩북 무드 산출물**이므로 디스플레이 폰트는 `--font-display-romance` (Grandiflora One, 본명조, Hahmlet)를 기본값으로 사용합니다. 단, 캐릭터 IP 컨셉(예: 와키윌리 시즌 컨셉)은 `--font-display-play`, 스트릿·런칭 키비주얼 컨셉은 `--font-display-street` 사용 가능.

테이블 본문, 긴 노트, 시드 디테일, 코드, 날짜, 파일명, owner/by 필드에는 디스플레이 폰트를 쓰지 말고 `--font-sans` 또는 `--font-mono` 유지.

## 폴더 구조

```
fashion-concept-board/
├── SKILL.md              ← 이 파일
├── assets/
│   └── template.html     ← 시작 템플릿 (복사해서 index.html로 사용)
└── references/
    ├── trend-research.md ← 톤 렌즈 8종, 시즌 트렌드 인풋, K-DTC 현실
    ├── layouts.md        ← 12개 섹션 레이아웃
    └── checklist.md      ← 자체 검수 기준
```

## 작업 흐름

### Step 0 — 사전 점검

1. 이 스킬 폴더의 `assets/template.html`을 처음부터 끝까지 읽으세요.
2. `references/trend-research.md`를 읽고 톤 렌즈 8종과 시즌 트렌드 인풋(WGSN/Coloro 27SS 키워드, K-DTC 현실)을 인지하세요.
3. `references/layouts.md`를 읽고 사용할 보드 리듬을 가늠하세요.
4. `references/checklist.md`를 읽어 P0/P1/P2 검수 기준을 미리 인지하세요.
5. 프로젝트 루트의 `DESIGN.md`(또는 등가 디자인 토큰 파일)를 읽고, 팔레트·타입 규칙을 템플릿 `:root` 변수에 매핑하세요. `DESIGN.md`가 프로덕트/UI 시스템을 기술한 경우, 에디토리얼 패션 용어로 번역: 액센트 → 시즌 팝, surface → 종이/큐레이션 카드, muted → 캡션/풋노트 톤, foreground → 에디토리얼 잉크. 파일이 자동 주입되지 않는 환경이라면 사용자에게 경로나 기본 톤을 물어 진행합니다.
6. 컨셉 보드는 **이미지가 필수**입니다. LLM 환경별로 사용 가능한 이미지 생성 도구(Claude 이미지 생성, DALL-E, Imagen, ComfyUI 등)를 사용하세요. 이미지 생성이 불가능한 환경이라면 폴백 텍스트(`data-fallback` 속성)로 자연스럽게 대체됩니다.

### Step 1 — 시즌 정보 수집

사용자가 다음을 제공하지 않으면 첫 발견 폼에서 함께 물어보세요. **추측하지 마세요** — 브랜드 보이스를 임의로 만들면 컨셉 보드는 무의미.

- 시즌 / 캡슐 명 (예: 27SS, 27SS Capsule 1)
- 브랜드 톤 1~3 형용사 (예: `차분한, 드라이한, 살짝 위트 있는`)
- 타겟 고객 한 줄 (이번 시즌을 누가 입는가 — 연령, 도시, 의례)
- 3~7개 컨셉 키워드 (영어/한국어 모두 가능, 구체 단어 선호 — 추상 `모던 / 미니멀` 피함)
- 문화 / 시대 / 음악 / 영화 / 건축 레퍼런스 시드 (예: `90년대 초 도쿄 CDJ 부스`, `함머쇼이 인테리어`, `프랭크 오션 Blonde 시기`, `서울 6시 습도`)
- 시즌 고객 스토리 — 어떤 순간이나 의례?
- *이전* 시즌과의 명시적 차별화 (대비가 무엇인지?)
- 하드 제약 (브랜드 컬러 X 유지, 베스트셀러 실루엣 Y 지속, 카테고리 Z 지원 필수 등)

### Step 2 — 톤 방향 선택

`references/trend-research.md`에서 **정확히 1개 primary 톤** + **1개 tension/contrast 톤** 선택. 조합이 영역(territory). 단일 무드는 너무 얇고, 3개 이상은 비일관.

선택한 `primary × tension` 페어를 이미지 생성 전에 한 문장으로 선언하세요. 예:

> "27SS territory: *humid early-summer commute* (primary) × *slight industrial dryness* (tension)."

또는 한국어로:

> "27SS 영역: *습한 초여름 출근길* (primary) × *살짝 인더스트리얼 드라이함* (tension)."

### Step 3 — 무드 이미지 생성

컨셉 보드는 룩북 프리뷰처럼 모두 상품컷처럼 보이지 않고 영역을 spanning하는 **9~16장 무드 이미지**가 필요합니다. 다음 *이미지 역할(image roles)* 다양성 목표:

- 2~3장 **scene** (장소, 시간대, 날씨, 분위기)
- 2~3장 **gesture / body** (손, 걷는, 앉는, mid-action — 풀 스타일링 아웃핏 *아님*)
- 2~3장 **texture / material** (패브릭, 표면, 마감 클로즈업)
- 2~3장 **light / color moment** (창, 램프, 하늘, 벽 — 순수 컬러·라이트 스터디)
- 1~2장 **garment fragment** (칼라, 커프스, 헴, 드레이프 디테일 — 풀 룩 *아님*)
- 1장 **anti-territory** (선택) — *우리가 아닌 것* 이미지, 풋노트로 작게 유지

이 이미지 역할 다양성이 컨셉 보드를 룩북 프리뷰가 아닌 territory로 느껴지게 합니다.

이미지 파일은 프로젝트의 `images/` 폴더에 의미 있는 파일명으로 저장하세요:

```
images/cover-mood.png
images/mood-01.png … images/mood-12.png
images/seed-color-01.png  (선택, 컬러-무드 페어)
images/seed-silhouette-01.png … images/seed-silhouette-04.png  (선택)
images/anti-territory-01.png  (선택, 사용 시만)
```

무드 이미지 1개당 영문 프롬프트 예시 (모델 입은 옷 프롬프트 *아님* — 그건 룩북의 일):

```
Use case: editorial / mood-board
Asset type: season concept mood image
Image role: [scene | gesture | texture | light | garment-fragment]
Primary subject: [실제 피사체 — 창, 손, 패브릭, 벽]
Scene/backdrop: [장소 + 시간대 + 날씨]
Style/medium: editorial / documentary / still life — catalog 아님
Composition/framing: [tight close-up | mid | environmental wide]
Lighting/mood: [warm 6am | grey overcast | hard direct | soft window]
Color palette: [디자인 토큰을 물리적 컬러 이름으로 번역]
Materials/textures: [소재·의류 이미지인 경우: 패브릭, 마감, 드레이프]
Constraints: no logos, no readable text, no watermark, no model-walking-pose,
  no full styled outfit, no beauty-shot framing
Avoid: catalog-pose, runway crowd, studio backdrop seamless white
```

### Step 4 — 시드 시그널 구성 (LOCK 아님)

무드 이후 **시드 시그널 블록** 구성. 중요: 이들은 *탐색적 베팅*, 확정 팔레트/스펙 시트가 아님. `~경향`, `~watching`, `~candidate`, `~trial` 같은 단어 사용. LOCK된 팔레트는 이후 `fashion-color-story`에서, LOCK된 패브릭 리스트는 이후 `fashion-fabric-board`에서 옴.

네 가지 시드 차원에 4~8 항목씩:

- **컬러 시드** — 감성 컬러 이름 + 소재 컨텍스트 페어. 예: `humid linen ivory`, `dusty 6am sky blue`, `weathered terracotta`, `industrial charcoal`. 칩용 HEX 힌트 페어 가능
- **소재 시드** — 패브릭 *의도* + 핸드필 디스크립터. 아직 공장 LOCK 아님. 예: `body감 있는 워시드 코튼`, `드라이 핸드 테크니컬 나일론`, `실크-코튼 블렌드, 살짝 투명`
- **실루엣 시드** — 카테고리에 핀된 실루엣 *키워드*. 예: `셔츠: 어깨 정의된 릴랙스 박시`, `팬츠: 트라우저, 너무 테이퍼 아님`, `아우터: 콰이엇 스트럭처드 숏 코트`
- **디테일 시드** — 시즌이 탐색하는 디테일 *무브*. 예: `visible 유틸리티 포켓 1개`, `플라스틱 대신 호른 버튼`, `로 셀비지 헴`, `룩당 자수 모먼트 1개`

### Step 5 — 톤 다이얼

대립 축 사이에 시즌이 어디 위치하는지 보여주는 4~6 톤 다이얼(시각 슬라이더) 추가. 예시:

- *muted ↔ saturated*
- *structured ↔ fluid*
- *masculine ↔ feminine*
- *quiet ↔ loud*
- *retro ↔ contemporary*
- *industrial ↔ romantic*

각 다이얼은 팀이 정렬한 단일 결정. 사용자가 선택하지 않은 축은 포함 금지 — 빈 다이얼은 노이즈.

### Step 6 — Anti-territory 리스트

3~7개 짧은 bullet — **이번 시즌이 의도적으로 하지 않을 것**. 실제 컨셉 리뷰에서 자주 나오지만 공식 문서에 거의 들어가지 않음. 예시:

- `Y2K 노스탤지어 없음`
- `Pinterest 코티지코어 없음`
- `로고-앞면 머치 티 없음`
- `형광 컬러 없음`
- `27SS 셔츠 너머의 오버사이즈드 박시 핏 없음`

### Step 7 — 컨셉 보드 구성

`assets/template.html`을 `index.html`로 복사. `[REPLACE]` 토큰 치환, `DESIGN.md` 토큰을 `:root`에 바인딩, `references/layouts.md`에서 선택한 섹션을 `<main id="concept-board">` 안에 붙임.

**필수 섹션 (순서대로):**

1. **커버** — 시즌 + 브랜드 + 한 줄 thesis + 일자 + 작성자
2. **키워드 클라우드** — 5~10 컨셉 키워드 + 시각 강조 (크기/굵기/컬러). 가장 큰 단어가 load-bearing 키워드
3. **Thesis Statement** — 한 단락 영역 설명
4. **무드 그리드** — 9~16 무드 이미지 + 역할 라벨 (scene / gesture 등)
5. **레퍼런스 셸프** — 명명된 문화 / 시대 / 아티스트 / 영화 레퍼런스 + 한 줄 "왜 이것"
6. **톤 다이얼** — 4~6 축 슬라이더
7. **컬러 시드** — 4~8 칩 + 감성 이름 + 소재 컨텍스트
8. **소재 시드** — 4~8 패브릭 의도 + 핸드필
9. **실루엣 시드** — 4~8 카테고리에 핀된 실루엣 키워드
10. **디테일 시드** — 4~8 디테일 무브
11. **Anti-territory** — 3~7 bullet
12. **Open / Next Decisions** — 다음 결정 짧은 리스트 (예: `2026.10.15까지 컬러 팔레트 LOCK`, `동대문 패브릭 트립 ~주`, `1차 샘플 브리프 초안 2026.11.01`)

**OpenDesign 환경에서 사용 시:** 각 섹션에 `data-od-id` 속성을 추가하면 인라인 코멘트 모드를 사용할 수 있습니다. 다른 환경에서는 일반 `id` 속성으로 대체하거나 생략 가능합니다.

### Step 8 — 자체 검수

`references/checklist.md`의 P0/P1/P2 기준을 한 항목씩 직접 확인하세요. 모든 무드 이미지가 로컬 상대 경로를 보유하고, 모든 키워드/시드가 회의에 없는 사람도 시즌을 이해할 수 있을 만큼 구체적이어야 합니다. 이미지 생성이 실패해도 페이지가 폴백 블록(원본 imagegen 프롬프트 표시)으로 작동해야 합니다.

## 한국 K-패션 브랜드 사례 (참고)

컨셉 보드 작성 시 참고할 K-패션 브랜드 영역 패턴.

| 브랜드 | 시즌 영역 패턴 | Primary × Tension |
|---|---|---|
| **마뗑킴** | 도시적 미니멀 + 친근 위트 | 콰이엇 도메스티시티 × 위트 |
| **마르디 메크르디** | 프렌치 데일리 럭셔리 + 다채로움 | 로맨틱 × 데일리 이지 |
| **아더에러** | 포스트 미니멀리즘 + 실험 | 인더스트리얼 크래프트 × 디지털 글리치 |
| **키르시** | 영 컬처 + 키치 | 유머러스 × 비비드 |
| **시야쥬** | 에센셜 + 타임리스 | 콰이엇 도메스티시티 × 패션-한 디테일 |
| **인사일런스** | 도시적 모노톤 | 콰이엇 도메스티시티 × 어반 코드 |
| **와키윌리** | 영캐주얼 + 캐릭터 IP + 팬덤 | 휴먼 위트 × K-아이돌 무드 |

## 한국 패션기업 조직 R&R 메모

컨셉 보드는 **디자인실(수석 디자이너 / 브랜드 디렉터)**이 작성하는 한국 패션기업 표준 흐름.

- **수석 디자이너 / 브랜드 디렉터**: thesis 작성, 톤 방향 선택, 무드 큐레이션
- **디자인 실장**: thesis 검토, 시드 시그널 정렬, 시즌 전략과의 정합성
- **MD 실장**: 시드 시그널 검토 (라인업 가능성·시장성 관점)
- **마케팅 실장**: 키워드·톤 검토 (IMC 캠페인 톤매너 정합성)
- **그래픽팀**: 무드 이미지 큐레이션 협업

## 시즌 사이클 내 위치

컨셉 보드는 **시즌 시작 약 5~6개월 전**에 작성합니다 (시즌 전략서 직후, 모든 디자인 작업의 출발점).

```
[시즌 시작 6~7개월 전] fashion-season-strategy
       ↓
[시즌 시작 5~6개월 전] ★ fashion-concept-board (이 문서)
       ↓ 모든 시즌 산출물의 상위
[시즌 시작 4~5개월 전] fashion-color-story, fashion-fabric-board
       ↓
[시즌 시작 3~4개월 전] fashion-styling-board
       ↓
[시즌 시작 3개월 전] fashion-new-lineup, fashion-key-item-sheet, fashion-accessory-lineup
       ↓
[시즌 시작 2~3개월 전] fashion-graphic-direction
       ↓
[시즌 시작 1~2개월 전] fashion-lookbook
       ↓
[시즌 시작 2개월 전] fashion-imc-calendar
       ↓
[시즌 시작 1개월 전] fashion-season-deck
```

## 출력 규약

단일 HTML 문서(`<!doctype html>`부터 `</html>`까지)를 결과물로 출력하세요.

- **Claude 환경(Claude.ai · Claude Code)**: 결과물을 `<artifact>` 태그로 감싸세요.
  ```
  <artifact identifier="fashion-concept-board-slug" type="text/html" title="시즌 컨셉 보드 제목">
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

출력 앞에 한 문장 요약을, 뒤에는 아무것도 덧붙이지 마세요.
