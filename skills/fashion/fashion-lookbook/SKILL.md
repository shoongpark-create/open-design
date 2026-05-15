---
name: fashion-lookbook
description: |
  K-패션 브랜드의 **시즌 룩북**을 단일 HTML 파일로 생성하는 스킬입니다.
  히어로 커버 → 컬렉션 스토리 → 6~8개의 룩 그리드 → 디테일/팔레트/소재 →
  라인 시트(라인업)까지 한 시즌의 비주얼 카탈로그를 에디토리얼 톤으로 빌드합니다.
  이미지는 LLM 환경에서 사용 가능한 이미지 생성 도구로 만들어 프로젝트 로컬에 저장합니다.
  사용자가 "룩북", "컬렉션 룩북", "시즌 캠페인", "fashion lookbook", "lookbook",
  "collection", "라인 시트", "MD 룩북"을 언급하면 활성화하세요.
triggers:
  - "룩북"
  - "컬렉션 룩북"
  - "시즌 캠페인"
  - "시즌 기획"
  - "라인 시트"
  - "MD 룩북"
  - "바이어 프리뷰"
  - "lookbook"
  - "fashion lookbook"
  - "collection lookbook"
  - "season campaign"
  - "line sheet"
od:
  mode: prototype
  platform: desktop
  scenario: marketing
  category: fashion
  featured: 12
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "와키윌리(WACKYWILLY) 27SS WOMEN 룩북을 만들어주세요. 컬렉션 명 'Seoul Lightness', 라이트 테일러링 + 워시드 뉴트럴 + 시트러스 액센트 1, 6 룩, 서울 스튜디오 무드, 바이어 프리뷰용. 자사몰 + 무신사 동시 론칭 기준으로 라인업 시트까지 포함."
---

# 패션 룩북 스킬

K-패션 브랜드의 **시즌 룩북**을 단일 HTML 파일로 생성합니다. 컬렉션 스토리, 캠페인 컨셉, 바이어 프리뷰, MD/디자인 기획 리뷰 등 **비주얼 디렉션**이 필요한 산출물입니다. UI 박스가 아니라 진짜 화보 룩북의 톤으로 작성합니다.

이 문서의 청중은 **MD실, 마케팅실, 바이어, 입점 채널 담당, 대표**입니다. 한국 패션기업에서는 보통 디자인 실장이 컨셉을 잡고 룩북 작가 또는 화보 디렉터와 협업해 만든 결과물을 한 페이지로 정리해 시즌 시작 1~2개월 전 컨셉/판매 회의에서 공유합니다.

룩북은 네 가지 질문을 동시에 답합니다.

1. **시즌의 핵심 무드는 무엇인가?** (Editorial story — 단 1줄로 정의되는 시즌 명제)
2. **어떤 룩이 시즌을 대표하는가?** (6~8개의 룩 — 히어로 / 커머셜 / 레이어 / 스테이트먼트 / 엔트리 / 클로징)
3. **각 룩의 상품 정보는?** (룩별 카테고리, 컬러, 소재, 핏, occasion, drop, 가격대)
4. **이 컬렉션을 어디서 판매할 것인가?** (자사몰 / 무신사 / 29CM / 팝업 등 채널 정의)

이 룩북은 **fashion-styling-board**(내부 락 단계)에서 이미 확정된 룩을 화보화한 결과물입니다. 룩북에서 새 룩을 만들지 마세요.

## 환경 호환성

이 스킬은 모든 LLM 환경에서 동일하게 사용할 수 있습니다.

- **Claude 환경(Claude.ai · Claude Code)**: 결과물을 `<artifact>` 태그로 감싸 출력합니다.
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 HTML 코드 블록으로 출력합니다.
- **OpenDesign 환경**: frontmatter의 `od:` 블록과 본문에서 권장하는 `data-od-id` 속성을 활용하면 인라인 코멘트·미리보기 기능을 사용할 수 있습니다. 다른 환경에서는 일반 `id` 속성으로 대체하거나 생략 가능합니다.

이미지 생성 도구는 환경에 따라 다릅니다. 자세한 정책은 `../_shared/imagegen.md`를 참고하세요.

## 출력 언어 정책

사용자가 한국어로 작성하거나 브랜드/맥락이 한국 K-패션이라면, 산출물 카피는 **한국 패션 비즈니스 등록(register)**을 따릅니다.

- 모든 라벨을 한국어로 직역하지 마세요. 한국 패션 현장에서 실제로 쓰는 영어 산업용어는 그대로 유지합니다.
- 유지하는 용어 예시: SKU · 룩 · 핏 · 실루엣 · 컬러웨이 · BTA · UNI/WOMEN · S1~S4 판기 · 캐리오버 · drop · setup · 셋업 · target lot · 캡슐 · 라인업 · 라인 시트.
- 섹션 라벨과 표 헤더는 영문 혼용 허용: `Collection story`, `Key looks`, `Fit / styling proof`, `Range plan`, `Search tags` 등.
- `락 리뷰`처럼 어색한 한글 음차 대신 `LOCK REVIEW`처럼 영문 그대로 유지하는 편이 자연스럽습니다.
- 이미지 생성 프롬프트는 영어로 작성해도 됩니다. 그러나 화면에 보이는 캡션·폴백 텍스트는 한국 패션 등록을 따라야 합니다.
- 룩북 카피의 시즌 명제·캠페인 라인은 짧고 시각적이어야 합니다(예: "워시드 / 가볍게 / 하루를 정하기 전에"). 보고서 성격의 라인업 시트, HTML 주석, 결정 로그는 **명사구 종결**을 선호합니다.

## 타이포그래피

프로젝트 루트의 `DESIGN.md` 타이포그래피 토큰을 사용하세요. 한국 K-패션 브랜드 표준 폰트인 **Pretendard Variable**을 본문·테이블·UI·결정 로그 기본 폰트로 두는 것을 권장합니다.

산출물 1개당 디스플레이 폰트 하나를 골라 `--font-display` CSS 변수로 바인딩합니다. 룩북은 보통 **에디토리얼 성격**이므로 다음을 권장합니다.

| 룩북 톤 | 권장 디스플레이 폰트 토큰 |
|---|---|
| 로맨틱 / 소프트 / 우먼 컨템포러리 | `--font-display-romance` (Grandiflora One, Hahmlet, 본명조, 노토 세리프 KR) |
| 스트릿 / 캠페인 / 강한 키비주얼 | `--font-display-street` (Black Han Sans, G마켓 산스) |
| 위트 / 캐릭터 IP / 팬덤 | `--font-display-play` (Bagel Fat One) |
| MD 운영 자료 (라인 시트 중심) | `--font-display-report` (Paperlogy, Wanted Sans, SUIT) |

테이블 본문, 라인 시트 행, 코드, 날짜, 파일명, owner/by 필드에는 디스플레이 폰트를 쓰지 말고 `--font-sans` 또는 `--font-mono`를 유지하세요.

`DESIGN.md`에 디스플레이 토큰이 정의되어 있지 않다면 위 표를 참고해 사용자에게 톤을 확인한 뒤 결정합니다.

## 폴더 구조

```
fashion-lookbook/
├── SKILL.md              ← 이 파일
├── assets/
│   └── template.html     ← 시작 템플릿 (복사해서 index.html로 사용)
├── example.html          ← 27SS Seoul Lightness 참고 예시
└── references/
    ├── layouts.md        ← 룩북 섹션 7종 (커버/스토리/룩그리드/디테일/팔레트/라인시트/CTA)
    ├── checklist.md      ← 자체 검수 기준
    └── trend-research.md ← 시즌별 패션 트렌드 렌즈 8종 + 디지털 룩북 규칙
```

## 작업 흐름

### Step 0 — 사전 점검

1. 이 스킬 폴더의 `assets/template.html`을 처음부터 끝까지 읽으세요.
2. `../_shared/imagegen.md`(공용 이미지 생성 정책)을 읽으세요. LLM 환경에 따라 사용 가능한 이미지 생성 도구를 선택합니다.
3. `references/trend-research.md`를 읽어 현재 시즌에 적합한 **트렌드 렌즈**(소프트 페미니티, 다크 로맨스, 점/체크/애니멀 프린트, 핏티드 테일러링, 아이시 톤, 스마트 미니멀, 웰빙/이즈 등)를 인지하세요.
4. `references/layouts.md`를 읽고 사용할 스프레드 리듬(캡슐 프리뷰 / 바이어 에디트 / 캠페인 컨셉)을 가늠하세요.
5. `references/checklist.md`를 읽어 P0/P1/P2 검수 기준을 미리 인지하세요.
6. 프로젝트 루트의 `DESIGN.md`(또는 등가 디자인 토큰 파일)를 읽고, 색상·타이포 토큰을 `:root` CSS 변수로 바인딩하세요. 파일이 자동 주입되지 않는 환경이라면 사용자에게 경로나 기본 톤을 물어 진행합니다. 디자인 시스템이 제품/UI용이라면 패션 등록으로 번역하세요. 액센트 → 시즌 팝 컬러, 서피스 → 페이퍼/카드, 뮤트 → 케어라벨/캡션 톤, 포어그라운드 → 에디토리얼 잉크.

### Step 1 — 컬렉션 정보 수집

다음 항목이 사용자 입력에 빠져 있으면 첫 발견 폼에서 함께 물어보세요.

- 시즌 / 캡슐 이름 (예: 27SS, 27SS Drop 01, 27SS Seoul Lightness)
- 청중 + 채널 (자사몰 론칭 / 무신사 입점 / 29CM 입점 / 바이어 프리뷰 / MD 내부 리뷰 / 팝업)
- 카테고리 + 아이템 패밀리 (예: UNI 셋업 중심, WOMEN 드레스 중심)
- 룩 개수 (기본 6개; 4~8 허용)
- 무드 레퍼런스 (서울 스튜디오, 스트릿, 리조트, 아웃도어, 오피스, 90s 등)
- 하드 제약 (컬러, 소재, 실루엣, 가격대, 반드시 포함되어야 하는 SKU)

### Step 2 — 에디토리얼 리듬 + 트렌드 렌즈 선택

`references/layouts.md`에서 **스프레드 리듬 1개**를 선택합니다.

- **캡슐 프리뷰** (기본) — 커버 → 스토리 → 6 룩 → 라인업 → 팔레트/소재 → CTA
- **바이어 에디트** — 커버 → MD 노트 → 8 룩 → 라인 시트 → 입고 drops
- **캠페인 컨셉** — 커버 → 히어로 이미지 → 스토리 → 4 룩 → 채널 크롭(자사몰/무신사/SNS) → 클로징

다음으로 `references/trend-research.md`에서 **트렌드 렌즈 1개**를 선택해 모든 의사결정의 기준선으로 삼습니다.

- 소프트 페미니티 / 로맨스
- 다크 로맨스 / 언던 크래프트
- 점, 체크, 애니멀 코드 프린트
- 핏티드 + 신치드 테일러링
- 아이시 톤 / 더스티 파스텔
- 스마트 미니멀리즘 (디테일 있는)
- 웰빙 / 이즈 / 정서적 유틸리티

사용자가 명시적으로 "맥시멀한, 절충적인 컬렉션"을 요청하지 않는 한 트렌드 렌즈는 1개, 많아도 2개까지만 혼합합니다.

선택한 리듬과 렌즈를 한 문장으로 선언하세요. 예: "캡슐 프리뷰 리듬 + 아이시 톤 렌즈로 진행합니다."

### Step 3 — 룩 이미지 생성 (이미지 생성 도구)

`../_shared/imagegen.md`의 공용 정책을 따르세요. LLM 환경에서 사용 가능한 이미지 생성 도구를 사용해 모든 룩 이미지를 생성합니다.

`index.html` 옆에 `images/` 폴더를 만들고 안정적인 파일명으로 저장하세요.

```
images/cover-look.png
images/look-01.png
images/look-02.png
images/look-03.png
images/look-04.png
images/look-05.png
images/look-06.png
```

각 이미지에 대해 다음 형식의 컴팩트한 프롬프트를 작성합니다(영어 가능).

```
Use case: ads-marketing
Asset type: fashion lookbook image
Primary request: [시즌/캡슐] look [번호], [의류 + 실루엣]
Scene/backdrop: [스튜디오 / 스트릿 / 쇼룸 / 자연광 세트]
Subject: fashion model wearing [구체적 outfit], full garment visible
Style/medium: editorial fashion photography
Composition/framing: vertical 4:5, full-body or three-quarter crop, usable margins
Lighting/mood: [브리프의 무드]
Color palette: [DESIGN.md 컬러를 의류 컬러로 번역 — "chalk cotton", "iced blue poplin" 등]
Materials/textures: [패브릭, 핸드필, 드레이프]
Constraints: no logos, no readable text, no watermark, no distorted hands, no extra limbs
Avoid: runway crowd, busy background, cropped shoes unless specified
```

사용자가 실제 상품 사진을 제공한 경우, 새 의류를 생성하지 말고 그 사진을 참조/편집 대상으로 사용하세요.

### Step 4 — 룩북 구성

`assets/template.html`을 `index.html`로 복사한 뒤:

1. `[REPLACE …]` 토큰을 사용자 입력으로 치환합니다.
2. `DESIGN.md` 토큰을 `:root`에 바인딩합니다.
3. 선택한 리듬을 `references/layouts.md`에서 복사해 `<main id="lookbook">` 안에 붙입니다.

**필수 섹션 (순서대로):**

1. **커버** — 히어로 이미지, 시즌 타이틀, drop 일자, 채널, 컬렉션 명제(1줄)
2. **스토리 스프레드** — 실루엣·소재·소비자 모멘트 설명. 캠페인 라인(quote) 포함
3. **룩 그리드** — 4~8개 룩, 각 룩에 이미지 + 룩 번호 + 아이템 패밀리 + 키 소재 + 컬러 + MD 노트
4. **팔레트/소재 보드** — 컬러 칩 + 소재 노트 (소재명을 의류명처럼: "chalk cotton", "iced blue poplin")
5. **에디토리얼 디테일 스트립** — 핏 / 무브먼트 / 액세서리 노트
6. **라인업 / 라인 시트** — 룩 번호 × 히어로 아이템 × 컬러 × 소재 × 핏 × occasion × drop × 가격대 × 검색 태그 (MD 리뷰용 머신리더블 메타데이터)
7. **클로징 CTA** — 다음 단계 (샘플 확정 / 바이어 미팅 / 자사몰 일정 / 무신사 입점 일정)

**OpenDesign 환경에서 사용 시:** 각 섹션에 `data-od-id` 속성을 추가하면 인라인 코멘트 모드를 사용할 수 있습니다. 다른 환경에서는 일반 `id` 속성으로 대체하거나 생략 가능합니다. 예: `<section class="section hero-grid" data-od-id="cover">` 또는 `<section class="section hero-grid" id="cover">`.

### Step 5 — 자체 검수

`references/checklist.md`의 P0/P1/P2 기준을 한 항목씩 직접 확인하세요.

- 모든 이미지가 프로젝트 로컬 상대 경로 (`images/look-NN.png`)
- 외부 URL · base64 · 임시 폴더(`$CODEX_HOME`, `/tmp` 등) 참조 없음
- 모든 룩에 상품별 카피 (아이템 패밀리, 컬러, 소재, MD 역할) 존재
- 모든 룩에 시맨틱 구매 데이터 (핏, occasion, drop, 가격대, 검색 태그) 존재
- 선택한 트렌드 렌즈가 실루엣, 컬러, 텍스처, 카피, 이미지 프롬프트에 일관되게 반영
- 이미지 생성 실패 시 폴백 블록 (CSS 그라데이션 / 데이터-폴백 메시지)으로 자동 대체
- 가짜 브랜드 로고, 이미지 안 읽히는 텍스트, 워터마크 없음

## 한국 K-패션 브랜드 사례 (참고)

룩북 작성 시 참고할 K-패션 룩북 패턴.

| 브랜드 | 룩북 톤 | 채널 | 특징 |
|---|---|---|---|
| **마뗑킴 (Matin Kim)** | 미니멀 러프 시크, 텍스트 로고 중심 | 자사몰 + 무신사 | 대표 SNS 직접 큐레이션, 라이프스타일 무드 |
| **마르디 메크르디 (Mardi Mercredi)** | 다채로운 컬러, 사랑스러운, 셀럽 친화 | 자사몰 + 글로벌 도매 | 플라워 마르디 그래픽 시그니처 |
| **아더에러 (ADER ERROR)** | 컨셉추얼, 글로벌, 신비감 | 자사몰 + 글로벌 편집숍 | 블루 키컬러, 컨셉 캠페인 룩북 |
| **키르시 (KIRSH)** | 비비드, 영 컬처, 발랄 | 자사몰 + 무신사 | 체리 심볼, 스트릿 무드 룩북 |
| **와키윌리 (WACKYWILLY)** | 위트, 캐릭터 IP, 따라하고 싶은 | 자사몰 + 무신사 + 29CM | 시즌 IP 그래픽, K-아이돌 무드 룩북 |
| **무신사 스탠다드** | 베이직, 신뢰, 한국적 핏 | 무신사 단독 | 모델 핏 중심, 가성비 명확 |

위 사례는 카피·예시 참고용입니다. 실제 산출물은 사용자 브랜드의 실제 톤매너로 작성하세요.

## 한국 패션기업 조직 R&R 메모

룩북은 **디자인실 + 마케팅실 + MD실**이 협업해 만들지만, 작성·검토·승인 흐름에는 다음 부서가 관여합니다.

- **디자인 실장 + 시즌 디자이너**: 컬렉션 명제, 룩별 무드, 이미지 생성 프롬프트
- **마케팅 실장 + 화보 디렉터**: 캠페인 라인, 채널별 크롭, IMC 연계
- **MD 실장**: 라인 시트, drop 일정, 가격대, 검색 태그 (자사몰/무신사 상품 등록과 연결)
- **대표 / 브랜드 디렉터**: 최종 승인. 컬렉션 명제가 브랜드 로드맵의 북극성과 정합한지 확인
- **포토 어시스턴트 / 스튜디오**: 이미지 생성 도구 결과물이 실 촬영을 대체할 수 있는지 검증

산출물 헤더에 `status: locked` 표시 시 위 모든 검토자의 확인이 완료된 상태를 의미합니다.

## 시즌 사이클 내 위치

룩북은 시즌 시작 **1~2개월 전**에 락하는 산출물입니다.

```
[fashion-brand-roadmap] (영구)
[fashion-positioning-map] (시즌 시작 6개월 전)
[fashion-season-strategy] (시즌 시작 6개월 전)
[fashion-concept-board] (시즌 시작 5개월 전)
[fashion-color-story], [fashion-fabric-board] (시즌 시작 4~5개월 전)
[fashion-styling-board] (시즌 시작 3~4개월 전) ← 룩 락
[fashion-new-lineup], [fashion-key-item-sheet] (시즌 시작 3개월 전)
[fashion-graphic-direction] (시즌 시작 2~3개월 전)
★ [fashion-lookbook] (시즌 시작 1~2개월 전) ★
[fashion-imc-calendar] (시즌 시작 2개월 전)
[fashion-season-deck] (모든 산출물 종합 후, 시즌 시작 1개월 전)
```

룩북에서 새 룩을 만들지 말고 styling-board에서 확정된 룩만 화보화하세요. 룩북이 락된 뒤에는 IMC 캘린더에서 채널별 노출 계획으로 이어집니다.

## 출력 규약

단일 HTML 문서(`<!doctype html>`부터 `</html>`까지)를 결과물로 출력하세요.

- **Claude 환경(Claude.ai · Claude Code)**: 결과물을 아래와 같이 `<artifact>` 태그로 감싸세요.
  ```
  <artifact identifier="fashion-lookbook-slug" type="text/html" title="컬렉션 룩북 제목">
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

출력 앞에 한 문장 요약(예: "와키윌리 27SS Seoul Lightness 룩북을 캡슐 프리뷰 리듬 + 아이시 톤 렌즈로 작성했습니다.")을, 뒤에는 아무것도 덧붙이지 마세요.
