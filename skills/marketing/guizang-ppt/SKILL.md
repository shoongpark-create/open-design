---
name: guizang-ppt
description: |
  K-패션 브랜드의 **시즌 합본 덱 / 콜라보 제안서 / IR 자료 / 브랜드 분기 발표**를
  매거진 × 전자잉크 톤의 횡스크롤 단일 HTML PPT로 생성하는 스킬입니다.
  WebGL 플루이드 배경, 세리프 디스플레이 + 산세리프 본문 + 모노 메타,
  좌우 키보드/마우스/터치 스와이프, 챕터 막 페이지, 풀쿼트 페이지, 데이터
  대자보, 도판 그리드 등 영캐주얼 톤의 슬라이드 템플릿을 제공합니다.
  원본은 *guizang-ppt-skill*의 중국풍 미감 — 이 K-패션 버전은 와키윌리·
  마뗑킴·아더에러 같은 한국 영캐주얼 톤으로 재해석. 사용자가 "시즌 합본",
  "콜라보 제안서", "IR 자료", "브랜드 발표 덱", "27SS 합본"을 언급하면 활성화.
triggers:
  - "시즌 합본"
  - "시즌 합본 덱"
  - "콜라보 제안서"
  - "IR 자료"
  - "투자자 자료"
  - "브랜드 발표 덱"
  - "분기 발표"
  - "27SS 합본"
  - "deck"
  - "presentation"
  - "ppt"
od:
  mode: deck
  scenario: fashion
  category: fashion
  featured: 9
  default_for: deck
  upstream: "https://github.com/op7418/guizang-ppt-skill"
  preview:
    type: html
    entry: index.html
  design_system:
    requires: false
  example_prompt: "와키윌리 27SS 시즌 합본 덱을 만들어주세요 — 영캐주얼 매거진 톤. 받는 사람은 디자인실·MD실·마케팅실·대표. 25분 발표 분량, 22~24 페이지. 표지·시즌 컨셉·BTA 라인업·키 아이템·캠페인·매출 목표·다음 시즌 아웃룩 순서. 방향은 추천해주세요(Monocle / WIRED / Kinfolk / Domus / Lab 중 하나)."
---

# 패션 시즌 합본 덱 · 콜라보 제안서 · IR 자료 스킬

## 이 스킬이 만드는 것

**단일 HTML 파일** 형태의 횡스크롤 PPT. 비주얼 톤은 다음을 결합:

- **매거진 + 전자잉크** 혼합 톤
- **WebGL 플루이드 / 등고선 / 색분산 배경** (히어로 페이지만 노출)
- **세리프 디스플레이(Hahmlet · Grandiflora One · Noto Serif KR) + 산세리프 본문(Pretendard Variable · Noto Sans KR) + 모노 메타(IBM Plex Mono)**
- **Lucide 라인 아이콘** (이모지 금지)
- **좌우 키보드/마우스 휠/터치 스와이프** 네비게이션, ESC로 색인 오픈
- **테마 부드러운 인터폴레이션**: 히어로 페이지 진입 시 컬러·셰이더 부드럽게 전환

원본 *guizang-ppt-skill*의 중국풍 매거진 미감을 K-패션 영캐주얼 톤으로 재해석한 버전. 와키윌리 27SS 시즌 합본, 마뗑킴 콜라보 제안서, 아더에러 IR 자료, 분기 브랜드 발표 등에 적합.

## 사용 시점 (K-패션 맥락)

**적합한 시나리오**:
- 시즌 합본 덱 — 디자인실·MD실·마케팅실 종합 (모든 시즌 산출물 종합)
- 콜라보 제안서 — 양 브랜드 시그니처 톤을 한 덱에 — 와키x마뗑킴 / 마르디x아더 등
- IR 자료 — 투자자·이사회 대상, 시즌 매출 + 성장 스토리
- 분기 브랜드 발표 — 대표 → 전사 또는 외부 미디어 톤
- 매장 입점 제안 — 입점채널(무신사·29CM·W컨셉) 대상 PR 덱

**부적합한 시나리오**:
- 발주서·거래명세서 (인쇄 톤, 다른 스킬)
- 룩북 (4:5 이미지 중심, 다른 스킬)
- 일일 매장 매출 모니터링 (대시보드 스킬)

## 환경 호환성

이 스킬은 모든 LLM 환경에서 동일하게 사용할 수 있습니다.

- **Claude 환경(Claude.ai · Claude Code)**: 결과물을 `<artifact>` 태그로 감싸 출력.
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 HTML 코드 블록으로 출력.
- **OpenDesign 환경**: `od:` frontmatter와 `data-od-id` 속성 사용 가능.

폰트·WebGL은 외부 CDN 사용. 라이브러리 의존성 없음.

## 출력 언어 정책

K-패션 시즌 발표 덱의 등록(register)을 따릅니다.

- **시즌 코드 유지**: 27SS / 26FW / S1 판기 / 1차 발주 / BTA / SKU.
- **K-패션 KPI 유지**: GMV / 정상판매율 / 재고자산회전율 / AOV / 사입가율 / ROAS.
- **통화 단위**: 원/만원/억. USD 환산 금지.
- **세리프 디스플레이는 한글**: Hahmlet, Grandiflora One, 노토 세리프 KR 권장. 영문 혼용은 Playfair Display.
- **본문은 명사구 종결** 권장 — "정판율 호조", "라인업 확장 검토", "콜라보 발매 계획", "오프라인 매장 확대".
- **카피 톤은 브랜드별로 다름**: 마뗑킴 친근 / 아더 신비 / 와키 재미.

## 작업 흐름

### Step 0 · 매거진 방향 선택 (필수 첫 단계)

6개 명확화 질문 *전에* 5개 매거진 방향에서 하나 선택. 각 방향은 "메인 컬러 / 추천 레이아웃 / chrome 톤 / 권장 슬라이드 수"를 패키지로 포함.

`references/styles.md`를 열어 5개 방향의 1줄 요약을 사용자에게 보여주고 선택:

```
1. Monocle Editorial · 국제 매거진 톤 ✦ 기본 추천
2. WIRED Tech · 데이터 + 엔지니어링
3. Kinfolk Slow · 슬로우 라이프 / 인문
4. Domus Architectural · 건축 / 공간감
5. Lab / Reference · 학술 + 공예 매뉴얼
```

K-패션 매핑 가이드:
- **시즌 합본 / 마뗑킴 톤** → Monocle Editorial (절제·국제·취향)
- **IR 자료 / 매출 보고** → WIRED Tech (데이터·엔지니어링·미래감)
- **마르디 콜라보 / 라이프스타일 캠페인** → Kinfolk Slow (인문·슬로우)
- **아더에러 / 컨템포러리 콜라보** → Domus Architectural (건축·공간)
- **연구·학술 발표 / 소재 개발 스토리** → Lab / Reference (방법론)

사용자가 "모르겠다, 추천"이라 하면 → **기본 Monocle Editorial**. 와키x마뗑킴 콜라보면 → Monocle. 27SS 매출 IR이면 → WIRED.

방향 선택 후 프로젝트 폴더에 `시즌-기록.md` 생성·갱신, 첫 행에 방향 + 컬러 + 받는 사람 + 시간 기록. **중도 방향 변경 금지** — 절반 가서 바꾸면 앞 작업 전부 폐기.

### Step 1 · 필요 사항 정리 (착수 전 필수)

대강의 주제만 받았다면 6개 질문으로 정렬:

| # | 질문 | 이유 |
|---|------|------|
| 1 | **받는 사람은 누구? 발표 장소?** (사내 종합 / 외부 IR / 콜라보 미팅) | 카피 톤·심도 결정 |
| 2 | **발표 시간?** | 15분 ≈ 10페이지, 30분 ≈ 20페이지, 45분 ≈ 25-30페이지 |
| 3 | **원본 자료 있는가?** (라인업 시트 / 시즌 결산 / 옛 덱 / 기사 링크) | 자료 있으면 그것 기반, 없으면 함께 작성 |
| 4 | **이미지·룩 컷 있는가?** | 배치 룰 아래 참조 |
| 5 | ~~**컬러 톤은?**~~ | ✓ Step 0 방향 선택 시 결정 완료 |
| 6 | **하드 제약 있는가?** (예: 매출 수치 비공개 / 콜라보 상대 미공개) | 재작업 방지 |

#### 시즌 합본 / 콜라보 제안서 아우트라인 (자료가 없을 때)

서사 아크 템플릿:

```
훅(Hook)         → 1페이지  : 강한 시즌 결과치 또는 콜라보 도발 ("정판율 78%", "처음 만나는 브랜드")
정조(Context)    → 1-2페이지: 브랜드 배경 / 시즌 컨셉 / 콜라보 배경
본체(Core)       → 8-12페이지: 라인업 / 키 아이템 / 캠페인 / 매출 등 핵심 콘텐츠
전환(Shift)      → 1페이지  : 다음 시즌 차별성 또는 콜라보 차별점
결말(Takeaway)   → 1-2페이지: 매출 목표 또는 콜라보 비전 / 행동 제안
```

`시즌-기록.md`에 아우트라인 저장 후 Step 2 진행.

#### 이미지 배치 (사용자에게 안내)

- **폴더 위치**: `프로젝트/27SS-합본/ppt/images/` (HTML과 동급)
- **명명**: `{페이지}-{의미}.{확장자}`. 예: `01-cover.jpg`, `06-key-item.jpg`, `12-campaign.jpg`
- **권장 규격**: 룩 컷 4:5, 매장 라운드 16:10, 키비주얼 16:9. 단장 1600px 이상.
- **누락 시**: 컬러 박스 placeholder로 구조 먼저, 이미지는 후처리.

### Step 2 · 템플릿 복사

`assets/template.html`을 프로젝트 폴더로 복사하고 `images/` 폴더 생성:

```bash
mkdir -p "프로젝트/27SS-합본/ppt/images"
cp "<SKILL_ROOT>/assets/template.html" "프로젝트/27SS-합본/ppt/index.html"
```

`template.html`은 **완전 실행 가능** — CSS, WebGL 셰이더, 슬라이드 JS, 폰트/아이콘 CDN 사전 셋업. `<main id="deck">` 안 3개 예시 슬라이드(표지·챕터 막·여백 페이지)만 교체.

#### 2.1 · 필수 변경 placeholder

복사 직후 즉시 변경 (안 그러면 브라우저 탭에 "[필수] 제목 교체"가 노출됨):

| 위치 | 원본 | 변경 |
|------|------|------|
| `<title>` | `[필수] 덱 제목으로 교체 · Deck Title` | 실제 덱 제목 (예: `와키윌리 27SS 시즌 합본 · WACKYWILLY 27SS Recap`) |

복사 후 첫 작업: `grep "[필수]"`로 모든 placeholder 교체 확인.

#### 2.2 · 컬러 테마 (5개 프리셋 · 커스텀 금지)

5개 사전 조합된 테마 중 하나만 선택. 자유 hex 금지.

| # | 테마 | 적합 |
|---|------|------|
| 1 | 🖋 잉크 클래식 | 일반·콜라보·시즌 합본 기본 |
| 2 | 🌊 인디고 자기 | 테크·연구·데이터·IR |
| 3 | 🌿 포레스트 잉크 | 자연·지속가능·인문·비픽션 |
| 4 | 🍂 카프 페이퍼 | 노스탤지어·인문·문학·독립 매거진 |
| 5 | 🌙 듄 | 아트·디자인·창의·갤러리 |

**조작**:
1. 콘텐츠 주제에 따라 추천 또는 사용자 선택
2. `references/themes.md`에서 해당 테마 `:root` 블록 확인
3. `assets/template.html`(복사본)의 `:root` 안 "테마 컬러" 주석 줄 전체 교체
4. 다른 CSS는 `var(--...)` 사용, 추가 변경 없음

**하드 규칙**:
- 한 덱에 한 테마. 중도 변경 금지
- 자유 hex 거부 — 5개 테마 보여주고 선택 권장
- 혼합 금지 (예: ink는 잉크, paper는 듄) — 시각 충돌

### Step 3 · 콘텐츠 채우기

#### 3.0 · 사전 점검: 클래스명이 template.html에 정의됐는지 확인 (중요)

`layouts.md`의 골격이 사용하는 클래스(`h-hero` / `h-xl` / `stat-card` / `pipeline` 등)가 `template.html`의 `<style>`에 존재하는지 확인. 누락 시 브라우저 fallback이 결과 망침.

**슬라이드 코드 작성 전**:

1. **`assets/template.html` Read** (최소 `<style>` 끝까지)
2. **layouts.md의 Pre-flight 리스트와 대조** — 사용할 클래스 모두 정의 확인
3. 누락된 클래스 있으면 **template.html의 `<style>`에 추가** — 슬라이드 inline 재정의 금지
4. **template.html이 유일한 클래스 출처** — 새 클래스 발명 금지. 커스텀은 `style="..."` inline.

자주 누락되는 클래스(필수 사전 확인):
`h-hero` / `h-xl` / `h-sub` / `h-md` / `lead` / `kicker` / `meta-row` / `stat-card` / `stat-label` / `stat-nb` / `stat-unit` / `stat-note` / `pipeline-section` / `pipeline-label` / `pipeline` / `step` / `step-nb` / `step-title` / `step-desc` / `grid-2-7-5` / `grid-2-6-6` / `grid-2-8-4` / `grid-3-3` / `grid-6` / `grid-3` / `grid-4` / `frame` / `frame-img` / `img-cap` / `callout` / `callout-src` / `chrome` / `foot`

#### 3.0.5 · 테마 리듬 계획 (클래스 사전 점검과 동등 중요)

**레이아웃 고르기 전**: 페이지별 테마 클래스(`hero dark` / `hero light` / `light` / `dark`) 리스트 작성.

**강제 규칙**:
- 모든 section은 `light` / `dark` / `hero light` / `hero dark` 중 하나
- 3페이지 연속 동일 테마 = 시각 피로 → 금지
- 8페이지 이상이면 `hero dark` 1개 이상 + `hero light` 1개 이상 필수
- `light` 본문만 있으면 안 됨 — `dark` 본문 1개 이상 포함
- 3-4페이지마다 hero(표지 / 막 / 질문 / 대인용) 1개 삽입

**생성 후 자가 점검**: `grep 'class="slide' index.html`로 테마 리듬 확인.

#### 3.1 · 레이아웃 선택

**처음부터 작성 금지**. `references/layouts.md`에 10개 골격 — 각각 완전 페이스트 가능한 `<section>` 코드:

| 레이아웃 | 용도 |
|---|---|
| 1. 표지 | 1페이지 |
| 2. 챕터 막 | 각 막 시작 |
| 3. 데이터 대자보 | 강한 수치 |
| 4. 좌문 우상 (Quote + Image) | 정체성 대비 / 스토리 |
| 5. 이미지 그리드 | 다이미지 비교 / 스크린샷 |
| 6. 2단 파이프라인 | 워크플로우 |
| 7. 질문 / 의문 페이지 | 막 끝 / 마무리 |
| 8. 대인용 페이지 (Big Quote) | 세리프 금구 / 테이크어웨이 |
| 9. 병렬 비교 (Before / After) | 옛 패턴 vs 새 패턴 |
| 10. 도판 + 사이드 텍스트 | 정보 밀도 높은 이미지+텍스트 |

레이아웃 선택 → 페이스트 → 카피·이미지 경로 교체. **3.0 사전 점검 필수.**

#### 3.2 · 이미지 비율 표준

원본 이상한 비율(예: 2592/1798) 절대 금지:

| 시나리오 | 권장 비율 |
|---|---|
| 좌문 우상 메인 이미지 | 16:10 또는 4:3 + `max-height:56vh` |
| 이미지 그리드 (다중 비교) | **고정 `height:26vh`** (aspect-ratio 금지) |
| 좌소상 + 우문 | 1:1 또는 3:2 |
| 풀스크린 키비주얼 | 16:9 + `max-height:64vh` |
| 이미지+텍스트 작은 삽화 | 3:2 또는 3:4 |

**이미지에 `align-self:end` 절대 금지** — 셀 하단으로 미끄러져 도구바에 가려짐. grid + `align-items:start` 사용.

컴포넌트 디테일(폰트·컬러·그리드·아이콘·callout·stat-card 등)은 `references/components.md`.

### Step 4 · 체크리스트 자가 점검

생성 후 `references/checklist.md` 한 항목씩 대조. P0(이모지·이미지 넘침·제목 줄바꿈·폰트 역할) 모두 통과 필수.

특히:
1. **대제목 세리프 폰트** — 산세리프 표시 시 99% Step 3.0 사전 점검 누락, `h-hero` 클래스 누락
2. **이미지 그리드는 `height:Nvh`만**, `aspect-ratio` 금지
3. **이미지 페이지 하단 누적 금지** — `align-self:end` 금지, grid + `align-items:start`
4. **이미지 표준 비율만** (16:10 / 4:3 / 3:2 / 1:1 / 16:9)
5. **한글 대제목 ≤ 5자 + `nowrap`** (한 글자 한 줄 방지)
6. **Lucide 사용, 이모지 금지**
7. **제목 세리프, 본문 산세리프, 메타 모노**

### Step 5 · 로컬 프리뷰

브라우저에서 `index.html` 열기. macOS:

```bash
open "프로젝트/27SS-합본/ppt/index.html"
```

로컬 서버 불필요. 이미지는 상대경로 `images/xxx.png`.

### Step 6 · 반복

사용자 피드백에 따라 수정. 템플릿 CSS가 고도로 파라미터화 — 90%의 조정은 inline style (`font-size:Xvw` / `height:Yvh` / `gap:Zvh`).

---

## 리소스 파일 안내

```
guizang-ppt/
├── SKILL.md                 ← 이 파일
├── assets/
│   ├── template.html        ← 완전 실행 가능 템플릿 (시드 파일)
│   └── example-slides.html  ← 9페이지 예시 덱 (와키윌리 27SS 합본)
└── references/
    ├── styles.md            ← 5개 매거진 방향 (Monocle / WIRED / Kinfolk / Domus / Lab)
    ├── components.md        ← 컴포넌트 매뉴얼
    ├── layouts.md           ← 10개 레이아웃 골격 (페이스트 가능)
    ├── themes.md            ← 5개 컬러 테마 (선택만, 커스텀 금지)
    └── checklist.md         ← 품질 체크리스트 (P0/P1/P2/P3)
```

**로드 순서**:
1. 먼저 `SKILL.md` 읽고 전체 파악
2. **Step 0에서 `styles.md`** — 5개 방향 각각 컬러 + 레이아웃 + chrome 톤 패키지
3. Step 1 명확화 후 필요시 `themes.md` 컬러 디테일
4. **착수 전 `assets/template.html`의 `<style>` Read** — 클래스 유일 출처
5. `layouts.md` 레이아웃 선택 (상단 Pre-flight 클래스 리스트)
6. 디테일 조정 시 `components.md`
7. 생성 후 `checklist.md` 자가 점검

## 한국 K-패션 시즌 합본 덱 사례 (참고)

| 산출물 | 추천 방향 | 슬라이드 수 |
|---|---|---|
| 27SS 시즌 합본 (사내 종합) | Monocle Editorial | 22-24 |
| 26FW 결산 + 27SS 아웃룩 (대표 발표) | WIRED Tech | 18-22 |
| 와키x마뗑킴 콜라보 제안서 | Monocle Editorial | 15-18 |
| 아더x브랜드 콜라보 제안 | Domus Architectural | 18-20 |
| 시리즈 A IR 자료 | WIRED Tech | 20-25 |
| 마르디 라이프스타일 캠페인 | Kinfolk Slow | 18-22 |
| 소재 개발 스토리 발표 | Lab / Reference | 12-15 |

## 핵심 디자인 원칙 (철학)

K-패션 시즌 합본 덱의 5회 이상 반복에서 도출한 원칙:

1. **절제 > 기교** — WebGL 배경은 히어로 페이지만 노출, 본문은 거의 안 보임
2. **구조 > 장식** — 그림자·플로팅 카드·padding box 금지, **큰 글자 + 폰트 대비 + 그리드 여백**으로 정보 전달
3. **위계는 글자 크기 + 폰트 조합으로 정의** — 가장 큰 세리프 = 메인 제목, 중간 세리프 = 부제, 큰 산세리프 = 리드, 작은 산세리프 = 본문, 모노 = 메타
4. **이미지가 1순위** — 이미지는 하단만 자르고 상하좌우 완전 노출. 그리드 `height:Nvh` 고정, `aspect-ratio` 금지
5. **리듬은 hero 페이지로** — hero / non-hero 교차로 시각 피로 방지
6. **용어 통일** — SKU는 SKU, 캐리오버는 캐리오버, 한·영 혼용 번역 금지

## 출력 규약

단일 HTML 문서로 출력하세요.

- **Claude 환경**: `<artifact identifier="deck-slug" type="text/html" title="덱 제목"><!doctype html>...</artifact>`
- **그 외 환경**: ` ```html\n<!doctype html>...\n``` ` 코드 블록

출력 앞에 한 문장 ("와키윌리 27SS 시즌 합본 덱을 Monocle Editorial 방향으로 작성했습니다, 22페이지."). 뒤에는 아무것도 덧붙이지 마세요.

## 참고 작품

이 스킬의 비주얼 톤 참고:

- *guizang-ppt-skill* 원본 (歸藏, 中国语 PPT 스킬)
- *Monocle* 매거진의 판형
- 마뗑킴 27SS 룩북 (한국 영캐주얼 매거진 톤)
- 아더에러 시즌 발표 (글로벌 컨템포러리 신비감)
