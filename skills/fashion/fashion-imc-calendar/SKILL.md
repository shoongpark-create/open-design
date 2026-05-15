---
name: fashion-imc-calendar
description: |
  K-패션 브랜드의 **시즌 IMC(Integrated Marketing Communication) 캘린더**를 단일 HTML 파일로 생성하는 스킬입니다.
  월별 히어로 아이템, 카테고리 밴드별 SKU/생산금액/비중, "주력상품-콘텐츠-VM-프로모션 일원화" 7단계 히어로 롤아웃 트랙을 매핑합니다.
  브랜드 디렉터가 마케팅 / VMD / 영업기획팀에 판기별 IMC 점화를 정렬시키기 위해 핸드오프하는 문서.
  사용자가 "IMC 캘린더", "히어로 캘린더", "월별 IMC", "판기별 캠페인", "주력 아이템 캘린더"를 언급하면 활성화하세요.
triggers:
  - "IMC 캘린더"
  - "히어로 캘린더"
  - "월별 IMC"
  - "판기별 캠페인"
  - "주력 아이템 캘린더"
  - "캠페인 캘린더"
  - "IMC calendar"
  - "campaign calendar"
  - "hero calendar"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  featured: 21
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "와키윌리 ACC 27SS IMC 캘린더를 만들어주세요. 1~7월, 3개 카테고리 밴드(BAG 49 SKU / CAP 40 SKU / SHOES 19 SKU), 7개 히어로 IMC 슬롯(All-Day Backpack, Daily Easy Bag, New Kitte, New 27 LO.FL, American Vintage, Airy Kitte, Keep Cool)."
---

# 패션 IMC 캘린더 스킬

K-패션 브랜드의 **시즌 IMC 캘린더**를 단일 HTML 파일로 생성합니다. 시즌 전체에 걸쳐 브랜드가 마케팅 + 영업 관점에서 점화하는 것을 보여주는 월별 그리드. **내부 + 에이전시 대상** — 청중은 마케팅팀, 에이전시, VMD팀, 영업기획팀.

캘린더가 답하는 4가지 질문:

1. **카테고리별 SKU / 생산 픽처는?** (카테고리 밴드당 1행: BAG / CAP / SHOES / TOP / OUTER 등 + SKU, 생산금액, 비중, YoY 델타)
2. **이번 시즌 카테고리별 전략적 무브는?** (카테고리 밴드당 1 택틱 노트)
3. **월별 히어로 IMC 아이템은?** (히어로 슬롯당 1 타일: 이름, 이미지/아이콘, 아이템 타입)
4. **`fashion-season-strategy`의 각 필러가 어떤 월에 매핑되는가?** (하단 롤아웃 트랙)

`fashion-season-strategy`의 하위 바인딩: 필러가 월이 됨.

## 환경 호환성

이 스킬은 모든 LLM 환경에서 동일하게 사용할 수 있습니다.

- **Claude 환경(Claude.ai · Claude Code)**: 결과물을 `<artifact>` 태그로 감싸 출력합니다.
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 HTML 코드 블록으로 출력합니다.
- **OpenDesign 환경**: frontmatter의 `od:` 블록과 본문에서 권장하는 `data-od-id` 속성을 활용하면 인라인 코멘트·미리보기 기능을 사용할 수 있습니다. 다른 환경에서는 일반 `id` 속성으로 대체하거나 생략 가능합니다.

본문 작업 흐름은 모든 LLM이 자력으로 따라할 수 있도록 명시적으로 작성되어 있습니다. 디자인 시스템 파일이 자동 주입되지 않는 환경이라면, 사용자에게 `DESIGN.md` 경로나 기본 톤을 묻고 진행하세요.

## 출력 언어 정책

사용자가 한국어로 작성하거나 브랜드/맥락이 한국 K-패션이라면, 산출물 카피는 **한국 패션 비즈니스 등록(register)**을 따릅니다.

- 유지하는 용어: SKU · 생산금액 · 비중 · 필러 · 캐리오버 · QR · SPOT · 판기 · S1~S4 · BTA · UNI/WOMEN/ACC/KIDS · 사입가율 · 정상판매율 · 룩북 · IMC · KV · 인플루언서 · 앰배서더 · 팝업 · 라이브커머스.
- 카테고리 밴드 이름은 영문 그대로: BAG / CAP / SHOES / TOP / OUTER / KNIT / DENIM / SETUP / DRESS.
- 한국어 표현: `히어로 육성`, `주력상품-콘텐츠-VM-프로모션 일원화`, `리뉴얼 신학기`, `신상 발매`, `팝업 일정`, `룩북 발매`.
- 본문 카피, 표 해석, HTML 주석은 **명사구 종결** 선호. 예: `IMC 점화 시점`, `판기 정합`, `owner 확인`, `LOCK 완료`.

## 타이포그래피

프로젝트 루트의 `DESIGN.md` 타이포그래피 토큰 사용. 본문·테이블·UI 기본 폰트는 **Pretendard Variable**. IMC 캘린더는 **운영 덱 성격**이므로 디스플레이 폰트는 `--font-display-report`를 기본값으로 사용합니다.

테이블 본문, 캘린더 셀, KPI 수치, owner/by 필드에는 디스플레이 폰트를 쓰지 말고 `--font-sans` 또는 `--font-mono` 유지.

## 폴더 구조

```
fashion-imc-calendar/
├── SKILL.md              ← 이 파일
├── assets/
│   └── template.html
└── references/
    ├── layouts.md        ← 레이아웃 3종
    └── checklist.md      ← 자체 검수 기준
```

## 작업 흐름

### Step 0 — 사전 점검

1. 이 스킬 폴더의 `assets/template.html`을 처음부터 끝까지 읽으세요.
2. `references/layouts.md`를 읽고 레이아웃을 가늠하세요.
3. `references/checklist.md`를 읽으세요.
4. 프로젝트 루트의 `DESIGN.md`(또는 등가 디자인 토큰 파일)를 읽으세요.
5. 이 시즌의 `fashion-season-strategy` 파일이 있으면 읽으세요 — IMC 캘린더는 시즌 전략의 택틱 확장, 독립 문서 아님. 파일이 자동 주입되지 않는 환경이라면 사용자에게 경로를 물어 진행합니다.
6. 히어로 IMC 아이템 아이콘 이미지 생성은 환경별 가용 도구 사용. 미생성 시 폴백 텍스트로 자연스럽게 대체.

### Step 1 — 캘린더 정보 수집

다음이 빠지면 첫 발견 폼에서 물어보세요.

- 시즌 코드 (예: 27SS)
- 라인 / 세그먼트 — UNI / WOMEN / ACC / KIDS
- 커버 월 — 일반 SS = 1~7월, FW = 8월~다음해 1월
- 카테고리 밴드 — 2~5행 (BAG / CAP / SHOES / TOP / OUTER / …). 각각 SKU 수, YoY 델타, 생산금액, 비중, YoY 비중 델타, 1줄 전략적 무브
- 히어로 IMC 슬롯 — 5~9 타일, 월 spanning. 각각: 이름, 아이템 타입 태그, 아이콘 또는 아이템 썸네일 imagegen 프롬프트
- 하단 롤아웃 트랙 — 시즌 IMC 헤드라인 단일 배너 (예: `판기별 주력상품-콘텐츠-VM-프로모션 등의 '히어로 육성' 집중`)

### Step 2 — 레이아웃 선택

`references/layouts.md`에서 **1개** 선택:

- **리듬 A · 밴드 상단 + 월 트랙 하단 (기본)** — 카테고리 밴드 상단 스택 + KPI 스트립; 월 트랙 하단 + 히어로 타일
- **리듬 B · 월-퍼스트 매트릭스** — 월을 컬럼, 카테고리를 행, 히어로 아이템을 셀로. `*이번* 월에 카테고리 간 무엇이 일어나는가` 질문 시
- **리듬 C · 택틱-레일 형식** — 좌측 레일에 밴드별 (KPI 포함), 우측에 월 타임라인. 컴팩트 A4 가로용

선택 레이아웃 한 문장 선언.

### Step 3 — 캘린더 구성

`assets/template.html`을 `index.html`로 복사. `[REPLACE]` 토큰 치환, `DESIGN.md` 토큰을 `:root`에 바인딩, 선택 리듬을 `references/layouts.md`에서 `<main id="imc-calendar">` 안에 붙임.

**필수 섹션 (순서대로):**

1. **헤더 스트립** — 시즌 + 라인 + 상태 + LOCK 일자
2. **카테고리 밴드 블록** — 2~5 밴드. 각각 KPI 라인(SKU, 생산금액, 비중 + 델타) + 짧은 전략 칩 + 2~4 bullet 택틱
3. **월 트랙** — 1~7월 타임라인 + 슬롯당 1 히어로 IMC 타일 (5~9 타일). 각 타일: 이미지/아이콘, 이름, 아이템 타입 태그
4. **롤아웃 트랙 배너** — IMC 헤드라인 재진술 풀 폭 배너
5. **Open / Next Decisions** — LOCK 필요한 것, owner, by when

**OpenDesign 환경에서 사용 시:** 각 섹션에 `data-od-id` 속성을 추가하면 인라인 코멘트 모드를 사용할 수 있습니다.

### Step 4 — 자체 검수

`references/checklist.md`의 기준을 한 항목씩 직접 확인하세요. 밴드의 비중 총합이 ≥100% (반올림 허용). 히어로 타일 수가 Step 1에서 선언된 슬롯 수와 일치. 하단 롤아웃 트랙이 캘린더 시각적 풋에 위치.

## 한국 K-패션 채널 사례 (참고)

IMC 캘린더의 채널·이벤트 매핑 시 참고할 한국 K-패션 채널 생태계.

| 채널 / 이벤트 | 시점 패턴 | 활용 사례 |
|---|---|---|
| **무신사 무진장 세일** | 매년 4월, 11월 | 시즌 중후반 디스카운트 점화 |
| **무신사 라이브** | 신상 발매 첫 주 | 첫 IMC 노출, 매진 유도 |
| **29CM 에디토리얼** | 시즌 시작 +1개월 | 큐레이션 콘텐츠 + 매거진 톤 |
| **자사몰 신상 발매** | 매월 첫째 주 | 드롭 캠페인 (마뗑킴 등) |
| **카카오톡 알림톡** | 신상 발매·세일 시점 | 회원 전용 사전 알림 |
| **인스타그램 캐러셀** | 룩북 공개 동시 | 신상 KV + 스타일링 |
| **인스타 릴스 / 숏폼** | 신상 발매 +1주 | 인플루언서 협업, 스타일링 영상 |
| **팝업스토어** | 시즌 중반 (2~3개월차) | 오프라인 브랜드 경험 |
| **플래그십 윈도우 디스플레이** | 매월 1일 교체 | VMD 시즌 키비주얼 |
| **유튜브 채널** | 시즌 시작 직후 | 룩북 비하인드, 디자이너 인터뷰 |

위 사례는 IMC 슬롯 매핑 참고용입니다.

## 한국 K-패션 브랜드 사례 (참고)

| 브랜드 | IMC 패턴 | 시그니처 무브 |
|---|---|---|
| **마뗑킴** | 매월 드롭 + 대표 직접 SNS 소통 | 매진 유도 드롭, 친근 알림톡 |
| **마르디 메크르디** | 셀럽 콜라보 캠페인 (안유진, 김고은 등) | 캡슐 콜렉션 IMC 집중 |
| **아더에러** | 시즌 1~2개 메이저 캠페인 + 글로벌 모델 | 글로벌 신비감 KV |
| **키르시** | 1020 인플루언서 콜라보 + 팝업 빈번 | 영 컬처 라이브 |
| **와키윌리** | 캐릭터 IP 캠페인 + K-팝 콜라보 | 팬덤 IMC, 키링 굿즈 |
| **무신사 스탠다드** | 무신사 플랫폼 통합 IMC + 가성비 KV | 베이직 매스 마케팅 |

## 한국 패션기업 조직 R&R 메모

IMC 캘린더는 **마케팅실(IMC 디렉터)**이 작성하는 한국 패션기업 표준 흐름.

- **마케팅 실장 / IMC 디렉터**: 캘린더 LOCK, 월별 히어로 슬롯 결정, 채널 mix 결정
- **MD실**: 카테고리 밴드 KPI 데이터 제공 (SKU, 생산금액, 비중)
- **영업기획실**: 채널별 IMC 점화 일정 협의, 무신사·29CM·자사몰 일정 정합
- **디자인실 그래픽팀**: 월별 KV 콘텐츠 제작
- **VMD**: 플래그십·팝업 윈도우 디스플레이 일정
- **외부 에이전시**: 인플루언서 협업, 룩북 촬영 일정

## 시즌 사이클 내 위치

IMC 캘린더는 **시즌 시작 약 2개월 전** 작성 (라인업 LOCK + 룩북 촬영 일정 LOCK 직후).

```
[시즌 시작 6~7개월 전] fashion-season-strategy (필러 정의)
       ↓
[시즌 시작 3개월 전] fashion-new-lineup, fashion-key-item-sheet (히어로 아이템 LOCK)
       ↓
[시즌 시작 2~3개월 전] fashion-graphic-direction (KV 그래픽 LOCK)
       ↓
[시즌 시작 2개월 전] ★ fashion-imc-calendar (이 문서)
                      → 마케팅·VMD·영업 정렬, 인플루언서 캐스팅
       ↓
[시즌 시작 1~2개월 전] fashion-lookbook (KV 화보 완성)
       ↓
[시즌 시작 1개월 전] 채널 입점, 상세페이지 제작, 알림톡 시나리오 설정
       ↓
[시즌 시작] S1 판기 진입, 첫 드롭, IMC 점화
       ↓
[시즌 중반] 위클리 매출 리뷰 → QR/SPOT 결정 → IMC 슬롯 추가/조정
```

## 출력 규약

단일 HTML 문서를 결과물로 출력하세요.

- **Claude 환경**: `<artifact>` 태그로 감싸세요.
  ```
  <artifact identifier="fashion-imc-calendar-slug" type="text/html" title="시즌 IMC 캘린더 제목">
  <!doctype html>
  <html>...</html>
  </artifact>
  ```
- **그 외 환경**: 표준 마크다운 HTML 코드 블록으로 출력하세요.

출력 앞에 한 문장 요약을, 뒤에는 아무것도 덧붙이지 마세요.
