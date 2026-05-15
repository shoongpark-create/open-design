---
name: fashion-styling-board
description: |
  K-패션 브랜드의 **시즌 스타일링 보드**를 단일 HTML 파일로 생성하는 스킬입니다.
  한 시즌의 룩들을 풀바디 컷아웃 그리드로 모아, 4개 브랜드 축(BASIC / NEW BASIC /
  TREND / ACCENT)에 분포시키고 판기별(S1 Jan-Feb, S2 Mar-Apr, S3 May, S4 Jun-Jul)
  로 분할해 정리합니다. **룩북 촬영 전** 시즌의 실루엣 밸런스를 정렬하는
  내부 MD/디자인 리뷰 문서입니다. 사용자가 "스타일링 보드", "유니 스타일링",
  "우먼 스타일링", "S1 스타일링", "판기별 스타일링", "월별 스타일링",
  "styling board", "look matrix"를 언급하면 활성화하세요.
triggers:
  - "스타일링 보드"
  - "유니 스타일링"
  - "우먼 스타일링"
  - "S1 스타일링"
  - "S2 스타일링"
  - "판기별 스타일링"
  - "월별 스타일링"
  - "라인업 스타일링"
  - "styling board"
  - "season styling"
  - "selling period styling"
  - "look matrix"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 13
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "와키윌리(WACKYWILLY) 27SS S1 (1-2월) UNI 스타일링 보드를 만들어주세요. 13 룩 across BASIC / NEW BASIC / TREND / ACCENT. 시즌 컨셉 '90s STREET RAW'. 앵커 아이템 코튼 집업 점퍼 + 윈드브레이커. 워시드 데님 베이스. 분포 목표 4 BASIC / 3 NEW BASIC / 4 TREND / 2 ACCENT."
---

# 패션 스타일링 보드 스킬

K-패션 브랜드의 **시즌 스타일링 보드**를 단일 HTML 파일로 생성합니다. 한국 어패럴 디자인 스튜디오가 룩북 촬영 전, 라인 시트 가격 책정 전에 한 판기(selling period)의 실루엣 밸런스를 락하는 **내부용** 문서입니다.

스타일링 보드는 네 가지 질문을 동시에 답합니다.

1. **이 판기의 룩 밸런스는?** (BASIC / NEW BASIC / TREND / ACCENT 4축의 룩 개수 분포)
2. **어떤 실루엣 / 아이템 패밀리가 판기의 앵커인가?** (1~2개 hero item — 예: "S1 = 코튼 집업 점퍼", "S3 = 빈티지 그래픽 티")
3. **각 룩이 자기 슬롯을 차지하는가?** (두 룩이 같은 일을 하지 않음. ACCENT는 희소함 유지)
4. **이 판기는 이전/이후와 어떻게 연결되는가?** (캐리오버 실루엣, 콘트라스트 아이템)

`fashion-concept-board`(시즌 영역)와 `fashion-lookbook`(소비자용 캠페인) 사이에 위치합니다. 스타일링 보드가 락되면 룩북은 선택된 룩만 화보화하고, 라인 시트는 그것의 가격을 책정합니다.

## 환경 호환성

이 스킬은 모든 LLM 환경에서 동일하게 사용할 수 있습니다.

- **Claude 환경(Claude.ai · Claude Code)**: 결과물을 `<artifact>` 태그로 감싸 출력합니다.
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 HTML 코드 블록으로 출력합니다.
- **OpenDesign 환경**: frontmatter의 `od:` 블록과 `data-od-id` 속성을 활용하면 인라인 코멘트·미리보기 기능을 사용할 수 있습니다.

이미지 생성 도구는 환경에 따라 다릅니다. 자세한 정책은 `../_shared/imagegen.md`를 참고하세요.

## 출력 언어 정책

사용자가 한국어로 작성하거나 브랜드/맥락이 한국 K-패션이라면, 산출물 카피는 **한국 패션 비즈니스 등록(register)**을 따릅니다.

- 4축 라벨은 영문 그대로 유지 (`BASIC`, `NEW BASIC`, `TREND`, `ACCENT`). K-young-casual BTA 분류의 업계 표준.
- 판기 라벨은 영문 + 한국어 병기 (`S1 (1-2월)`, `S2 (3-4월)`, `S3 (5월)`, `S4 (6-7월)`).
- 라인 라벨은 영문 (`UNI`, `WOMEN`, `KIDS`, `ACC`).
- 룩 캡션은 짧고 구체적인 한국어 + 영어 산업용어 혼용 (예: `박시 핏 코튼 집업 + 워시드 데님`, `시어 오버셔츠 + paper-touch 스커트`).
- 카피, 결정 노트는 **명사구 종결** (예: `적용`, `전환`, `확보 사유`, `owner 확인`).

## 타이포그래피

프로젝트 루트의 `DESIGN.md` 타이포그래피 토큰을 사용하세요. **Pretendard Variable**을 본문·테이블·UI 기본 폰트로 둡니다.

스타일링 보드는 **MD/디자인 운영 자료** 성격이므로 `--font-display-report`(Paperlogy, Wanted Sans, SUIT)를 기본값으로 사용합니다. 스타일링 카드의 룩 번호와 캡션은 `--font-mono` 또는 `--font-sans`를 유지하세요.

축 도트 색상은 `DESIGN.md`의 컬러 토큰에 바인딩하세요. 가능하면 시즌 컬러 스토리(`fashion-color-story`)의 BTA 컬러 매핑과 정합시키세요.

## 폴더 구조

```
fashion-styling-board/
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
2. `../_shared/imagegen.md`(공용 이미지 생성 정책)을 읽으세요. 스타일링 컷은 수직 풀바디 프레이밍 기본.
3. `references/layouts.md`를 읽고 그리드 리듬을 가늠하세요.
4. `references/checklist.md`를 읽어 검수 기준을 인지하세요.
5. 프로젝트 루트의 `DESIGN.md`를 읽고 색상·타이포 토큰을 `:root`에 바인딩하세요. 4축 트랙 스트립의 active 축 도트 색상은 브랜드 액센트 — 지금 바인딩.
6. **시즌의 컨셉 보드가 있으면 읽으세요.** 컨셉 영역(thesis, keywords, silhouette seeds) 없는 스타일링 보드는 핀터레스트 덤프일 뿐입니다. `fashion-color-story` 산출물이 있으면 락된 팔레트가 유일하게 허용되는 컬러로 작동.

### Step 1 — 판기 정보 수집

다음 항목이 사용자 입력에 빠져 있으면 첫 발견 폼에서 함께 물어보세요.

- 시즌명 (예: 27SS, 27FW)
- **판기** — S1 (1-2월), S2 (3-4월), S3 (5월), S4 (6-7월), 또는 커스텀. 판기에 속하는 월 명시.
- **카테고리 라인** — UNI, WOMEN, KIDS, 또는 결합 뷰
- **1줄 판기 명제** (예: "신학기 아우터 스타일링 — 코튼 점퍼 중심")
- **1~2개 앵커 아이템** 판기가 중심으로 삼는 것
- **총 룩 개수 타겟** (UNI 기본 13, WOMEN 기본 15; 10~18 범위 허용)
- **축 분포 타겟** — 기본 25/25/35/15 (BASIC / NEW BASIC / TREND / ACCENT). 30/30/30/10 (보수적 판기) 또는 20/20/40/20 (트렌드 헤비 캡슐) 허용
- **캐리오버 정책** — 이전 판기에서 가져오는 룩. 표시 필수
- 하드 제약 (반드시 포함되어야 할 베스트셀러 실루엣, 금지 아이템)

### Step 2 — 그리드 리듬 선택

`references/layouts.md`에서 **1개**를 선택합니다.

- **Single-row track** — 모든 룩을 1개 가로 행에 배치, 축 라벨이 위쪽 트랙 스트립. 기본값 (≤14 룩)
- **Two-row stagger** — 룩을 2개 행으로 분할. 행 1 = BASIC + NEW BASIC, 행 2 = TREND + ACCENT. 기본값 (15~18 룩)
- **Quartet sections** — 4개 명명된 섹션을 수직 스택, 각 축이 자체 블록 + 캡션 스트립. 각 축이 4개 이상 룩을 가질 때 + 팀이 캡션 밀도 원할 때

선택한 리듬을 한 문장으로 선언하세요. 예: "27SS S1 UNI: single-row track, 13 룩, 축 분포 4/3/4/2."

### Step 3 — 스타일링 컷아웃 생성 (풀바디)

스타일링 보드는 **룩당 1개의 컷아웃 피규어**, 머리부터 발끝까지, 깨끗한 투명/뉴트럴 배경에서 필요합니다 — 디자인 팀이 트랙 위에서 피규어를 정신적으로 드래그해 밸런스를 테스트하기 때문에 *글로시한 라이팅보다 플랫/일관된 실루엣이 중요*합니다.

`../_shared/imagegen.md`의 공용 정책을 따르세요. LLM 환경에서 사용 가능한 이미지 생성 도구를 사용합니다. `images/` 폴더에 룩 번호와 매칭되는 안정 파일명으로 저장:

```
images/look-01-basic.png
images/look-02-basic.png
images/look-03-newbasic.png
…
images/look-13-accent.png
```

각 룩 이미지에 대해 컴팩트 프롬프트 (영어 가능):

```
Use case: design / styling-board
Asset type: full-body cut-out figure for a season styling board
Primary subject: a single fashion model standing, full-length, neutral pose
  (slight contrapposto), arms relaxed, eye-level camera
Look number: [N of total]
Axis: [BASIC | NEW BASIC | TREND | ACCENT]
Anchor item: [판기의 hero item — 예: 코튼 집업 점퍼]
Outfit (head to toe):
  - Headwear: [cap | beanie | bucket | none]
  - Top: [의류 + 실루엣 + active 팔레트의 컬러]
  - Outer: [의류 + 실루엣 + 컬러] (S3-S4는 axis = ACCENT 아니면 생략)
  - Bottom: [트라우저 / 진 / 쇼츠 / 스커트 + 실루엣 + 컬러]
  - Footwear: [스니커즈 / 부츠 / 샌들 + 컬러]
  - Bag/accessory: [선택적, 축 적합]
Style/medium: editorial cut-out, transparent background, soft even light
Composition/framing: vertical 4:5, full body in frame, head not cropped, feet not cropped, ~5% margin top/bottom
Lighting/mood: soft daylight, no hard shadows, no rim light, neutral cool
Color palette: [active DESIGN.md / color-story 토큰을 의류 컬러명으로 번역 —
  "Pop Pink 15-2215 TCX top, Light Grey Mel 15-4101 TCX bottom"]
Materials/textures: [active fabric board가 있으면 가져오기]
Constraints: no logos, no readable text, no watermark, no distorted hands, no extra limbs, no face beauty retouching, no brand bag, single subject
Avoid: catalog-pose, runway crowd, studio backdrop seamless white, half-body crop, mid-stride pose
```

ACCENT 룩은 표현적 스타일링 무브 1개 허용 (모자, 레이어드 그래픽 티, 사쳐레이트 보텀) — 단, 룩당 1개만, 절대 쌓지 말 것.

사용자가 실제 상품 사진을 제공한 경우, 새 의류를 만들지 말고 그 사진을 참조/편집 대상으로 사용하세요.

### Step 4 — 스타일링 보드 구성

`assets/template.html`을 `index.html`로 복사한 뒤:

1. `[REPLACE …]` 토큰을 치환합니다.
2. `DESIGN.md` 토큰을 `:root`에 바인딩합니다.
3. 선택한 리듬을 `references/layouts.md`에서 복사해 `<main id="styling-board">` 안에 붙입니다.

**필수 섹션 (순서대로):**

1. **헤더 스트립** — 시즌 + 판기(S#) + 월 범위 + 카테고리 라인(UNI/WOMEN/KIDS) + 룩 개수 + 락 상태(v1/v2/locked)
2. **판기 명제** — 1문장 (판기가 무엇인지 + 앵커 아이템 + 캐리오버 노트)
3. **축 트랙 스트립** — 4축 라벨이 있는 가로 바. 룩 위 active 도트가 그 룩이 어느 축인지 표시
4. **룩 그리드** — 피규어, 선택한 리듬에 따라:
   - 룩 번호 (`01` … `N`)
   - 축 도트 (active 팔레트 컬러)
   - 1줄 캡션: 앵커 아이템 + 스타일링 무브 1개
   - 컬러 칩 스트립 (이 룩의 3~4개 컬러)
5. **축 카운트 요약** — 축당 1행 + 카운트 + 퍼센티지 + Step 1 타겟 대비 델타
6. **캐리오버 맵** — 이전 판기에서 가져온 룩 번호 리스트 + 소스 화살표
7. **Open / Next Decisions** — 락 안 된 항목, owner, by when

### Step 5 — 자체 검수

`references/checklist.md`의 기준을 한 항목씩 확인하세요.

- 모든 피규어가 로컬 상대 경로
- 모든 룩에 축 도트 + 번호 + 1줄 캡션
- 축 카운트 요약 합계 = 룩 총 개수
- 이미지 실패 시 폴백 블록 자동 노출
- ACCENT 비율 ≤ 20% (타겟 10~15%)

## 한국 K-패션 브랜드 스타일링 보드 패턴 (참고)

| 브랜드 / 라인 | 시즌 룩 개수 | 축 분포 권장 | 판기 운영 |
|---|---|---|---|
| **와키윌리 UNI 27SS** | 13 (S1) ~ 15 (S2) | 30/25/35/10 | S1~S4 4판기 |
| **와키윌리 WOMEN 27SS** | 15 (S1) ~ 18 (S2) | 25/25/35/15 | S1~S4 4판기 |
| **무신사 스탠다드 SS** | 10~12 (캡슐당) | 50/30/15/5 (베이직 강세) | S1+S2, S3+S4 2판기 |
| **마뗑킴 SS** | 12~15 | 30/30/25/15 | S1~S4 4판기 |
| **마르디 메크르디 SS** | 18~22 | 20/25/35/20 (트렌드/액센트 강세) | 월 단위 drop |
| **아더에러 SS** | 8~12 (시즌 컬렉션) | 15/15/40/30 (트렌드/액센트 강세) | 시즌 + 캡슐 |
| **KIDS 라인** | 8~12 | 40/40/15/5 (베이직 강세) | S1~S4 4판기 |

위 사례는 패턴 참고용입니다. 실제 산출물은 사용자 브랜드의 정상판매율 + 회전율 데이터에 기반한 축 분포로 작성하세요.

## 한국 패션기업 조직 R&R 메모

스타일링 보드는 **디자인실 + MD실** 합의로 락합니다. 검토 흐름:

- **디자인 실장 + 시즌 디자이너**: 룩별 실루엣, 축 분배, 스타일링 무브, 앵커 아이템 정의
- **MD 실장**: 축 분포가 정상판매율 데이터와 정합한지 검토 (BASIC/NEW BASIC 비중이 매출 견인하는 카테고리에 충분한지)
- **그래픽 디자이너**: ACCENT/TREND 룩에 그래픽이 포함된 경우 `fashion-graphic-direction`과 정합 확인
- **생산실**: 모든 룩이 실제 생산 가능한 패브릭 + 핏 + LOT으로 구성됐는지 검토
- **마케팅 실장**: hero item이 IMC 캘린더의 캠페인 슬롯과 매칭되는지 점검

산출물 헤더에 `status: locked` 표시 시 위 모든 검토자의 확인이 완료된 상태를 의미합니다.

## 시즌 사이클 내 위치

스타일링 보드는 시즌 시작 **3~4개월 전**에 락하는 산출물입니다. 룩북 촬영 + 라인 시트 가격 책정 + 신규 라인업 정의의 *upstream*입니다.

```
[fashion-brand-roadmap] (영구)
[fashion-positioning-map] (시즌 시작 6개월 전)
[fashion-season-strategy] (시즌 시작 6개월 전)
[fashion-concept-board] (시즌 시작 5개월 전)
[fashion-color-story], [fashion-fabric-board] (시즌 시작 4~5개월 전)
★ [fashion-styling-board] (시즌 시작 3~4개월 전) ★
[fashion-new-lineup], [fashion-key-item-sheet] (시즌 시작 3개월 전) ← 스타일링 보드의 룩이 라인업/키 아이템으로 분기
[fashion-graphic-direction] (시즌 시작 2~3개월 전)
[fashion-lookbook] (시즌 시작 1~2개월 전) ← 스타일링 보드의 룩만 촬영
[fashion-imc-calendar] (시즌 시작 2개월 전)
[fashion-season-deck] (시즌 시작 1개월 전)
```

판기별(S1~S4) 스타일링 보드 4개 × 라인(UNI/WOMEN) 2개 = 시즌당 **총 8개의 스타일링 보드**가 표준입니다 (와키윌리 27SS 덱 기준).

## 출력 규약

단일 HTML 문서를 출력하세요.

- **Claude 환경(Claude.ai · Claude Code)**:
  ```
  <artifact identifier="fashion-styling-board-slug" type="text/html" title="시즌 스타일링 보드 제목">
  <!doctype html>
  <html>...</html>
  </artifact>
  ```
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 마크다운 HTML 코드 블록.

출력 앞에 한 문장 요약(예: "와키윌리 27SS S1 UNI 스타일링 보드를 single-row track 리듬, 13 룩, 축 분포 4/3/4/2로 작성했습니다."), 뒤에는 아무것도 덧붙이지 마세요.
