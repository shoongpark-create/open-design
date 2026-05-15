---
name: fashion-key-item-sheet
description: |
  K-패션 브랜드의 **시즌 키 아이템 시트(앵커 아이템 1개당 1페이지)**를 단일 HTML 파일로 생성하는 스킬입니다.
  한국 의류 스튜디오의 `컬러 / 디테일 / 패턴 / 패브릭 / 아트워크` 5-슬라이스 스프레드 형식.
  좌측에 인물 컴포지션(워크 레퍼런스 5~6장 + 무드 콜라주), 우측에 선택 슬라이스 클러스터.
  사용자가 "키 아이템", "키 아이템 시트", "코튼 집업 시트", "그래픽 티 시트", "데님 셋업", "가디건 시트"를
  언급하거나 샘플실 브리핑을 견인하는 단일 아이템 딥 다이브를 요청하면 활성화하세요.
triggers:
  - "키 아이템"
  - "키 아이템 시트"
  - "아이템 시트"
  - "코튼 집업"
  - "그래픽 티"
  - "데님 셋업"
  - "가디건 시트"
  - "스웻 셋업"
  - "앵커 아이템"
  - "key item"
  - "key item sheet"
  - "anchor item"
  - "item deep dive"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 14
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "와키윌리 27SS '코튼 집업 점퍼' 키 아이템 시트를 만들어주세요. 좌측 worn 레퍼런스 6장, 우측 슬라이스 = Washing / Pattern / Artwork. 컬러는 27SS 컬러 스토리에서 가져오기."
---

# 패션 키 아이템 시트 스킬

K-패션 브랜드의 **키 아이템 시트**를 단일 HTML 파일로 생성합니다. 앵커 아이템 1개당 1페이지 — 한국 의류 디자인 스튜디오가 1차 프로토 커팅 전에 샘플실에 핸드오프하는 문서. **내부용** — 청중은 디자이너, MD, 공급사 샘플실 매니저 (바이어·소비자 아님).

키 아이템 시트가 단일 아이템에 대해 답하는 4가지 질문:

1. **이 아이템의 worn reality는 무엇인가?** (5~6 figure가 변형 입은 — 실루엣, 핏, 레이어링 — 경쟁사/영감 세트에서 풀)
2. **어떤 디자인 차원을 탐색하는가?** ({Color, Detail, Pattern, Fabric, Artwork} 중 선택 서브셋)
3. **각 차원에 대한 시각 증거는?** (슬라이스당 3~4 레퍼런스 이미지 + 각각 `여기서 무엇을 가져갈 것인지` 1줄)
4. **MD/생산 노트는?** (타겟 컬러웨이, 타겟 LOT, 캐리오버 결정, 유지할 시그니처 디테일)

**단일 아이템 문서** — 2개 아이템을 한 시트에 절대 합치지 마세요. 아이템당 1 시트, 필요 시 `fashion-season-deck`에서 체인.

## 환경 호환성

이 스킬은 모든 LLM 환경에서 동일하게 사용할 수 있습니다.

- **Claude 환경(Claude.ai · Claude Code)**: 결과물을 `<artifact>` 태그로 감싸 출력합니다.
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 HTML 코드 블록으로 출력합니다.
- **OpenDesign 환경**: frontmatter의 `od:` 블록과 본문에서 권장하는 `data-od-id` 속성을 활용하면 인라인 코멘트·미리보기 기능을 사용할 수 있습니다. 다른 환경에서는 일반 `id` 속성으로 대체하거나 생략 가능합니다.

본문 작업 흐름은 모든 LLM이 자력으로 따라할 수 있도록 명시적으로 작성되어 있습니다. 디자인 시스템 파일이 자동 주입되지 않는 환경이라면, 사용자에게 `DESIGN.md` 경로나 기본 톤을 묻고 진행하세요.

## 출력 언어 정책

사용자가 한국어로 작성하거나 브랜드/맥락이 한국 K-패션이라면, 산출물 카피는 **한국 패션 비즈니스 등록(register)**을 따릅니다.

- 유지하는 용어: SKU · 컬러웨이 · 타겟 LOT · 캐리오버 · 시그니처 디테일 · 워싱 · 핏 · 실루엣 · 셋업 · 프로토 · 1차 샘플 · 사입가율 · 정상판매율 · 판기 S1~S4 · BTA · UNI/WOMEN.
- 슬라이스 이름은 영문 유지: Color / Detail / Pattern / Fabric / Artwork. 또는 한국어 매핑(Washing → 컬러 서브, Embroidery → 아트워크).
- 아이템 이름은 한국어 우선: `코튼 집업 점퍼`, `시그니처 그래픽 티셔츠`, `데님라이크 스웻 셋업`, `러플 원피스`.
- 본문 카피, 표 해석, HTML 주석은 **명사구 종결** 선호. 예: `타겟 LOT 1,200`, `프로토 마감일 적용`, `signature embroidery 유지`, `Sorona Cool 적용`.

## 타이포그래피

프로젝트 루트의 `DESIGN.md` 타이포그래피 토큰 사용. 본문·테이블·UI 기본 폰트는 **Pretendard Variable**. 키 아이템 시트는 **운영 덱 성격**이므로 디스플레이 폰트는 `--font-display-report`를 기본값으로 사용합니다.

테이블 본문, MD 노트, 컬러웨이 수치, owner/by 필드에는 디스플레이 폰트를 쓰지 말고 `--font-sans` 또는 `--font-mono` 유지.

## 폴더 구조

```
fashion-key-item-sheet/
├── SKILL.md              ← 이 파일
├── assets/
│   └── template.html
└── references/
    ├── slices.md         ← 5 슬라이스 라이브러리 + 아이템 패밀리별 권장 조합
    ├── layouts.md        ← 컴포지션 2종
    └── checklist.md      ← 자체 검수 기준
```

## 작업 흐름

### Step 0 — 사전 점검

1. 이 스킬 폴더의 `assets/template.html`을 처음부터 끝까지 읽으세요.
2. `references/slices.md`를 읽고 어떤 슬라이스가 어떤 아이템 패밀리에 적용되는지 인지하세요.
3. `references/layouts.md`를 읽고 슬라이스 컴포지션을 가늠하세요.
4. `references/checklist.md`를 읽으세요.
5. 프로젝트 루트의 `DESIGN.md`(또는 등가 디자인 토큰 파일)와 가용한 `fashion-color-story`, `fashion-fabric-board`를 읽으세요. 슬라이스 콘텐츠는 이미 LOCK된 팔레트와 소재 이름을 참조해야 — 여기서 신규 발명 금지. 파일이 자동 주입되지 않는 환경이라면 사용자에게 경로를 물어 진행합니다.
6. Worn 레퍼런스·슬라이스 이미지 생성은 환경별 가용 도구 사용. 미생성 시 폴백 텍스트로 자연스럽게 대체.

### Step 1 — 아이템 정보 수집

다음이 빠지면 첫 발견 폼에서 물어보세요.

- 시즌 코드 (예: 27SS)
- 아이템 패밀리 — **단 1개만** 선택:
  - 아우터 (코튼 집업 점퍼, 윈드브레이커, 재킷 등)
  - 톱 (시그니처 그래픽 티, 빈티지 그래픽 티, 헨리, 폴로 등)
  - 니트 (가디건, 스웨터, 베스트 등)
  - 하의 (데님, 이지 데님 셋업, 스웻팬츠, 쇼츠 등)
  - 셋업 (데님라이크 스웻 셋업, 이지 데님 셋업, 트윈 셋 등)
  - 원피스 / 스커트
- 브랜드의 자체 표기 아이템 이름 (예: `코튼 집업 점퍼`, `시그니처 그래픽 티셔츠`, `데님라이크 스웻 셋업`)
- 1줄 아이템 thesis (예: `신학기 매출 전환을 노리는 캐주얼 아우터`)
- 판기 (S1/S2/S3/S4) + 타겟 LOT
- 캐리오버 결정 — 신규 개발 / 이전 시즌 캐리오버 / 시그니처 진화
- 슬라이스 선택 — {Color, Detail, Pattern, Fabric, Artwork} 중 **2~4 슬라이스** 선택. 히어로 아이템이 아니면 5개 모두 선택 금지
- Worn 레퍼런스 수 목표 — 기본 5~6 figure
- 하드 제약 (시그니처 디테일 X 유지, 브랜드 컬러 Y 유지, 금지 레퍼런스)

### Step 2 — 슬라이스 컴포지션 선택

`references/slices.md`에서 아이템 패밀리 기반으로 슬라이스 서브셋 선택. 선택한 컴포지션을 한 문장으로 선언:

> "27SS 코튼 집업 점퍼: 슬라이스 = Washing + Pattern + Artwork; 좌측 worn 레퍼런스 6장, 우측 슬라이스당 swatch 4장."

권장 기본값 (사유 있을 때만 오버라이드):

| 아이템 패밀리 | 기본 슬라이스 |
|---|---|
| 아우터 (코튼 집업, 재킷) | Washing · Pattern · Artwork |
| 톱 (시그니처 그래픽 티) | Artwork · Fabric |
| 톱 (빈티지 그래픽 티) | Graphic · Fabric (Pigment Dyeing 패브릭 노트) |
| 니트 (가디건, 스웨터) | Color · Pattern · Detail · Fabric |
| 하의 / 셋업 (이지 데님, 스웻 셋업) | Color · Detail · Fabric |
| 원피스 / 스커트 | Color · Detail · Pattern |

### Step 3 — Worn 레퍼런스 figure 생성 (좌측)

좌측은 5~6 figure의 **무드 콜라주**로, 아이템 또는 근접 변형을 입은 상태. 목표는 한눈에 실루엣 / 핏 / 레이어링 가독 — 카탈로그 뷰티 아님.

이미지 생성이 가능한 환경에서 `images/` 폴더에 저장:

```
images/worn-01.png … images/worn-06.png
```

figure당 영문 프롬프트 예시 (아이템 패밀리별 조정):

```
Use case: design / key-item-sheet
Asset type: worn-reference figure (cut-out, full-body) for one anchor item
Primary subject: a single fashion model standing, full-length, neutral pose,
  arms relaxed, eye-level camera
Anchor item (must be worn): [REPLACE — 예: cotton zip-up jumper, brushed
  cotton, semi-relaxed fit, washed wash-3]
Outfit balance:
  - Top/inner: [REPLACE — 앵커 아이템이 읽히도록 중립 유지]
  - Bottom: [REPLACE]
  - Footwear: [REPLACE]
  - Headwear: [선택]
Style/medium: editorial cut-out, transparent background or seamless paper
  beige #ebe6db, soft daylight
Composition/framing: vertical 4:5, full body in frame
Color palette: [컬러 스토리에서 가져옴; 액센트는 희소하게 유지]
Constraints: no logos, no readable text, no watermark, no distorted hands,
  no extra limbs, no face beauty retouching, single subject
Avoid: catalog-pose, runway crowd, half-body crop, mid-stride pose
```

사용자가 자체 상품 사진 또는 공급사 레퍼런스 첨부 시 edit / extend 레퍼런스로 처리 — 재상상 금지.

### Step 4 — 슬라이스 클러스터 생성 (우측)

선택한 슬라이스당 **3~4 레퍼런스 이미지** 생성. 슬라이스 프롬프트는 worn figure보다 더 타이트·근접. 기본 정사각 1024×1024.

파일명:

```
images/slice-color-01.png … images/slice-color-04.png
images/slice-detail-01.png …
images/slice-pattern-01.png …
images/slice-fabric-01.png …
images/slice-artwork-01.png …
```

슬라이스별 프롬프트 형태:

- **Color** (1024×1024): 행거 또는 플랫레이 풀 가먼트 컷, 이미지당 단일 컬러, 스와치 클린 라이팅, alt 텍스트에 컬러 이름 + TCX
- **Detail** (1024×1024): 1 구성 요소 매크로 클로즈업 (커프스, 헴, 포켓, 드로코드, 스티칭, 로 셀비지, 지퍼 풀). 프레임에 풀 가먼트 없음
- **Pattern** (1024×1024): 스와치 스케일 직조/프린트 패턴. 구조 패턴(와플, 케이블, 립 니트)은 위브 표시 패브릭 보드 앵글
- **Fabric** (1024×1024): 핸드와 드레이프 표시 패브릭 스와치 클로즈업. 선택 패브릭 이름 마이크로 태그 오버레이 (예: `Cool Cotton`, `Askin`, `Sorona`)
- **Artwork** (1024×1024): 그래픽 / 자수 / 패치 / 프린트 스터디 — 아트워크 자체, 가먼트 영역 또는 플랫레이에 고립

모든 이미지 프롬프트에 포함:

```
Constraints: no logos (아트워크가 브랜드 마크인 경우 제외), no
  readable third-party brand text, no watermark, no distorted features
Avoid: aggressive saturation, fake gradient lighting, AI-slop sparkle
```

### Step 5 — 시트 구성

`assets/template.html`을 `index.html`로 복사. `[REPLACE]` 토큰 치환, `DESIGN.md` 토큰을 `:root`에 바인딩, 선택 컴포지션을 `references/layouts.md`에서 `<main id="key-item-sheet">` 안에 붙임.

**필수 섹션 (순서대로):**

1. **헤더 스트립** — 시즌 + 아이템 패밀리 + 브랜드 아이템 이름 + 판기 + 캐리오버 상태 + LOCK 상태
2. **아이템 thesis** — 한 단락: 왜 이 아이템, 무엇을 대체/진화하는지, 타겟 컬러웨이 수, 타겟 LOT
3. **Worn 레퍼런스 그리드 (좌측)** — 5~6 figure 카드, 각각 1줄 takeaway (`relaxed shoulder, hem 힙본에 위치`)
4. **슬라이스 클러스터 (우측)** — 선택 슬라이스당 1 라벨 클러스터, 클러스터당 3~4 타일, 각 타일 이미지 + 1줄 노트
5. **Production / Merch 노트** — 타겟 컬러웨이 리스트, 유지할 시그니처 디테일, 예상 공급사(알려진 경우), 프로토 마감일
6. **Open / Next Decisions** — LOCK 필요한 것, owner, by when

**OpenDesign 환경에서 사용 시:** 각 섹션에 `data-od-id` 속성을 추가하면 인라인 코멘트 모드를 사용할 수 있습니다.

### Step 6 — 자체 검수

`references/checklist.md`의 기준을 한 항목씩 직접 확인하세요. 모든 클러스터가 해당 슬라이스의 이미지 형태 규칙 준수. 모든 worn figure에 1줄 takeaway. 이미지 실패 시 폴백 텍스트로 페이지 작동 확인.

## 한국 K-패션 브랜드 사례 (참고)

키 아이템 시트 작성 시 참고할 K-패션 브랜드 키 아이템 운영 패턴.

| 브랜드 | 시즌 히어로 키 아이템 패턴 | 슬라이스 운영 |
|---|---|---|
| **마뗑킴** | 미니백, 텍스트 로고 후디 | Color · Detail (텍스트 로고 워싱) |
| **마르디 메크르디** | 플라워 마르디 카디건/스웻 | Artwork · Color · Pattern (시그니처 그래픽) |
| **아더에러** | 오버사이즈 코트, 블루 시그니처 아이템 | Color · Detail (테트라이트 로고) |
| **키르시** | 체리 그래픽 티, 패딩 | Artwork · Fabric |
| **와키윌리** | 코튼 집업, 신학기 백팩, 시그니처 그래픽 티 | Washing · Pattern · Artwork (점퍼), Color · Detail (백팩) |
| **무신사 스탠다드** | 베이직 티, 데님 셋업 | Color · Detail · Fabric (기능성 행택) |
| **시야쥬** | 린넨 셔츠, 워시드 코튼 베이직 | Color · Fabric · Detail |

## 한국 패션기업 조직 R&R 메모

키 아이템 시트는 **디자인실 + MD실 + 마케팅실 합작** 작성 (시즌 히어로 아이템).

- **수석 디자이너 / 디자인실장**: 슬라이스 큐레이션, 시그니처 디테일 결정, worn 레퍼런스 큐레이션
- **MD 실장**: 타겟 컬러웨이 수, 타겟 LOT, 사입가율 검토
- **마케팅 실장**: 키 아이템 IMC 캘린더 활용 계획 (시즌 히어로로 푸시할지)
- **생산실**: 공급사 선정, 프로토 마감일 합의, MOQ 검증
- **패턴실**: 핏 시스템 정합 검토, 1차 샘플 핏 검수

키 아이템 = MD실 + 디자인실 + 마케팅실 합작 (NotebookLM 리서치 인사이트). 노출 빈도 조절로 판매 유도.

## 시즌 사이클 내 위치

키 아이템 시트는 **시즌 시작 약 3개월 전** 작성 (라인업 LOCK 시점과 동시).

```
[시즌 시작 5~6개월 전] fashion-concept-board (영역)
       ↓
[시즌 시작 4~5개월 전] fashion-color-story (컬러 LOCK), fashion-fabric-board (소재 LOCK)
       ↓
[시즌 시작 3~4개월 전] fashion-styling-board (스타일링 보드)
       ↓
[시즌 시작 3개월 전] ★ fashion-key-item-sheet (이 문서, 시즌 히어로 1개당 1 시트)
                      fashion-new-lineup (전체 라인업)
                      fashion-accessory-lineup (ACC 라인업)
                      → 라인업 LOCK + 1차 샘플 발주
       ↓
[시즌 시작 2~3개월 전] fashion-graphic-direction (아트워크 슬라이스 그래픽 LOCK)
       ↓
[시즌 시작 1~2개월 전] fashion-lookbook (키 아이템 화보)
       ↓
[시즌 시작 2개월 전] fashion-imc-calendar (키 아이템 IMC 슬롯 배치)
```

## 출력 규약

단일 HTML 문서를 결과물로 출력하세요.

- **Claude 환경**: `<artifact>` 태그로 감싸세요.
  ```
  <artifact identifier="fashion-key-item-sheet-slug" type="text/html" title="키 아이템 시트 제목">
  <!doctype html>
  <html>...</html>
  </artifact>
  ```
- **그 외 환경**: 표준 마크다운 HTML 코드 블록으로 출력하세요.

출력 앞에 한 문장 요약을, 뒤에는 아무것도 덧붙이지 마세요.
