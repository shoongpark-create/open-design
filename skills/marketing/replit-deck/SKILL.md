---
name: replit-deck
description: |
  K-패션 브랜드의 **시즌 기획 덱 / 디자인실 내부 공유 덱 / 라인업 리뷰 덱**을
  단일 파일 가로 스와이프 HTML 덱으로 생성하는 스킬입니다. Replit Slides
  랜딩 페이지 갤러리에서 캡처한 8가지 시각 시스템(helix, holm, vance, bevel,
  world-dark, world-mint, atlas, bluehouse) 중 하나를 골라 시즌 기획안의
  성격에 맞춥니다. 디자인실 내부 공유용 27SS 디자인 기획 합본, 1차 품평회
  리뷰, MD 사업 회의 자료, 콜라보 제안서 등 한 가지 디자인 색을 가진
  공식 덱이 필요할 때 사용합니다.
  사용자가 "시즌 기획 덱", "디자인 기획 합본", "품평회 리뷰", "라인업 리뷰",
  "MD 사업 회의", "replit deck", "helix deck", "holm memo"를 언급하면 활성화하세요.
triggers:
  - "시즌 기획 덱"
  - "디자인 기획 합본"
  - "품평회 리뷰 덱"
  - "라인업 리뷰"
  - "MD 사업 회의 덱"
  - "콜라보 제안 덱"
  - "replit deck"
  - "replit slides"
  - "helix deck"
  - "holm memo"
  - "atlas chapter"
  - "bluehouse"
  - "bevel campaign"
od:
  mode: deck
  scenario: product
  category: fashion
  preview:
    type: html
    entry: index.html
  design_system:
    requires: false
  inputs:
    - name: theme
      type: enum
      required: true
      default: helix
      values:
        - helix         # 모던 미니멀 · 밝은 회색 · 잉크 + 일렉트릭 블루 · SaaS 매트릭스 / 사업 보고
        - holm          # 에디토리얼 세리프 · 크림 · 잉크 + 딥 체스넛 · IR / 사업 메모 / 콜라보 제안
        - vance         # 갤러리 · 크림 · 크림 세리프 on 블랙 바 · 룩북 인덱스 / 화보 카탈로그
        - bevel         # Y2K 에디토리얼 · 블랙 · 디스플레이 + 룩북 그리드 · 시즌 캠페인
        - world-dark    # 파이낸스 그린 다크 · 딥 그린 · 민트 + 네온 옐로우 · 매출 결산
        - world-mint    # 파이낸스 그린 라이트 · 민트 · 딥 그린 + 네온 옐로우 · ESG / 지속가능
        - atlas         # 미술관 · 블랙 · 세리프 + 버밀리언 · 시즌 합본 / 챕터 내러티브
        - bluehouse     # 컨슈머 카드 · 딥 네이비 · 그라데이션 카드 + 피치 → 코랄 · 컨슈머 제품 쇼케이스
    - name: slide_count
      type: integer
      default: 6
      min: 3
      max: 20
      # 6은 사업 보고 베이스라인. 메모와 캠페인 덱은 보통 3~4 (helix/holm/bluehouse).
      # 시즌 합본 (atlas) 은 8~12. 디폴트 맞추려고 padding 하지 마세요.
---

# K-패션 Replit 덱 스킬

K-패션 브랜드의 **시즌 기획 덱 / 디자인실 내부 공유 덱 / 라인업 리뷰 덱**을 8가지 시각 시스템 중 하나로 생성합니다. 각 테마는 완성된 시각 시스템이며, 덱 안에서 테마를 섞지 마세요.

이 산출물의 청중은 **디자인 실장, MD 실장, 마케팅 실장, 대표/CFO, 콜라보 파트너, IR**입니다. 한국 패션기업에서는 디자인실이 시즌 기획 합본 덱을 작성하고 MD실 + 마케팅실과 합의하는 흐름. 콜라보 제안서는 브랜드 디렉터가 작성합니다.

## 환경 호환성

이 스킬은 모든 LLM 환경에서 동일하게 사용할 수 있습니다.

- **Claude 환경(Claude.ai · Claude Code)**: 결과물을 `<artifact>` 태그로 감싸 출력합니다.
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 HTML 코드 블록으로 출력합니다.
- **OpenDesign 환경**: frontmatter의 `od:` 블록과 `data-screen-label`, `data-od-id` 속성으로 슬라이드 단위 코멘트·재편집 지원. 그 외에는 일반 `id` 속성으로 대체합니다.

씨드의 `<script>`는 iframe 환경 5가지 nav 버그를 해결합니다. **다시 작성 금지**.

## 출력 언어 정책

K-패션 시즌 기획 덱의 등록(register)을 따릅니다.

- 슬라이드 헤드라인은 한국어 우선, 영문 키워드 혼용 자연스러움 ("27SS, 윌리가 봄을 데려옵니다.", "BLOOM — 시즌 컨셉 리뷰").
- 시즌 코드 영문 유지(27SS, 26FW), 판기 한국어(S1~S4), 통화 원/억/만원.
- 카테고리·라인 라벨 한국 표준: UNI / WOMEN / KIDS / ACC, 상의 / 하의 / 아우터 / 원피스 / 셋업, BTA(Basic / Trend / Accent).
- 메타바 톤: 영문 대문자 + 모노 폰트("WACKYWILLY · 27SS · 디자인 기획 합본 · 디자인실") 자연스러움.
- 풀쿼트는 셀럽·인플루언서·매거진 에디터(Vogue Korea, W Korea, Dazed Korea, Marie Claire Korea, 1st Look) 실명 권장.

## 폴더 구조

```
replit-deck/
├── SKILL.md                ← 이 파일
├── assets/
│   └── template.html       ← 씨드: 8 테마 via [data-theme=*], 검증된 iframe-nav 스크립트 (먼저 읽기)
├── references/
│   ├── themes.md           ← 8 테마: 언제 선택 / Do / Don't / 주요 레이아웃
│   ├── layouts.md          ← 10개 paste-ready 슬라이드 레이아웃, 크로스-테마
│   ├── components.md       ← 공유 프리미티브 (eyebrow, kpi-row, image-grid, meta-bar)
│   └── checklist.md        ← P0/P1/P2 자체 검수 + 테마 락인 게이트
└── examples/               ← 4개 K-패션 시나리오별 참조 덱
    └── example-helix.html       (디자인실 27SS 기획 합본)
```

## 작업 흐름

### Step 0 — 사전 점검 (필수 읽기)

1. `assets/template.html`을 처음부터 끝까지 읽으세요. `[data-theme]` 블록이 토큰을 가지고, 하단 `<script>`가 iframe nav 5가지 버그를 해결합니다 — **다시 작성 금지**.
2. `references/themes.md` → 사용자 브리프에 맞는 **하나** 테마 선택. `od.inputs.theme`로 이미 지정됐으면 그것을 사용.
3. `references/layouts.md` → `<section>` 블록을 여기서 복사.
4. `references/checklist.md` → emit 전 P0 통과 필수.

### Step 1 — 하나의 테마에 커밋

선택한 테마와 이유를 명시(TodoWrite 또는 계획 섹션에). 한 번 정하면 **모든 슬라이드가 그 테마의 토큰만** 사용. 덱 중간 교체 금지. `<body data-theme="helix">` 속성이 단일 진실 소스.

| 테마 | K-패션 적용 시점 |
|---|---|
| `helix` | 디자인실 내부 시즌 기획 합본, 라인업 리뷰, 신규 카테고리 런칭 제안 — 모던 미니멀 |
| `holm` | IR 사전 메모, 콜라보 제안서, 시즌 사업 메모 — 진지 / 기관 톤 |
| `vance` | 룩북 인덱스, 화보 카탈로그, 시즌 아카이브 — 갤러리 톤 |
| `bevel` | 시즌 캠페인 리뷰, 룩북 발표, Y2K 톤 캠페인 덱 |
| `world-dark` | 매출 결산 / 시즌 종합 결산 — 다크 프리미엄 |
| `world-mint` | ESG / 지속가능성 / 윤리 패션 리포트 — 라이트 톤 시그블링 |
| `atlas` | 시즌 합본 / 챕터 내러티브 / 브랜드 히스토리 — 박물관 톤 |
| `bluehouse` | 컨슈머 제품 쇼케이스, 콜라보 발매, VIP 라운지 — 컬러풀 카드 |

### Step 2 — 슬라이드 리듬 계획 (HTML 쓰기 전)

기본 6슬라이드. HTML 쓰기 전 리듬을 먼저 정합니다. 예시 — 와키윌리 27SS 디자인 기획 합본 helix 6슬라이드:

```
01  cover           히어로 + 시즌 코드 + 디자인 기획 합본
02  kpi-row-6       시즌 KPI 6개 (목표 SKU / 회전율 / 정판율 / GMV / 신규 SKU 수 / 캐리오버 비중)
03  split-insight   좌측: 시즌 컨셉 / 우측: 캐릭터 IP 도입 배경
04  chapter-plate   섹션 디바이더 — "라인업 미리보기"
05  three-up        BTA × 3 컬럼 (Basic / Trend / Accent 핵심 SKU)
06  closing         다음 단계 (1차 품평회 일정)
```

사용자에게 보여주세요. 이 단계에서의 재조정이 저렴.

### Step 3 — 씨드 복사, 테마 바인딩

1. `assets/template.html`을 프로젝트 루트의 `index.html`로 복사.
2. `<body data-theme="<선택한_테마>">` 설정.
3. `<title>` 한국어 K-패션 사례로 교체.
4. 씨드에 있는 3개 데모 슬라이드 삭제. 크롬(counter / progress / hint) 유지.

### Step 4 — 레이아웃 붙이기, 한국 사례로 채우기

계획된 각 슬라이드에 대해 `references/layouts.md`에서 적합한 `<section>` 복사. `[REPLACE]`를 모두 구체적인 K-패션 카피로 교체 — 플레이스홀더 절대 금지, lorem 금지.

각 슬라이드에 `data-screen-label="01 표지"`, `"02 시즌 KPI"` 같은 한국어 라벨 부여.

### Step 5 — 자체 검수

`references/checklist.md`를 emit 전 묵묵히 실행: **P0 테마 락 게이트**와 5차원 1~5 평가(Philosophy / Hierarchy / Execution / Specificity / Restraint). 어느 차원이라도 ≤ 3이면 emit 전 재작업.

P0 테마 락 grep은 협상 불가:

```
grep -E 'data-theme|style="--' index.html | head
```

개별 슬라이드에 `style="--accent:..."` 같은 테마 오버라이드가 나타나면 되돌리세요. **덱당 테마 하나**.

### Step 6 — 출력

산출물을 출력 규약대로 emit합니다.

## 핵심 규칙

- **덱당 테마 하나.** `data-theme`는 `<body>`에 설정 — 슬라이드별 오버라이드 금지.
- **숫자는 진짜이거나 부재.** 만든 매트릭 금지. `—` 또는 회색 블록을 정직한 플레이스홀더로 사용.
- **디스플레이 페이스는 테마를 따름.** helix/world-dark/world-mint/bluehouse = sans 디스플레이; holm/vance/atlas = serif 디스플레이; bevel = Y2K 디스플레이. 교체 금지.
- **슬라이드당 액센트 1~2회.** 그라데이션 스팸 금지.
- **nav 스크립트 재작성 금지.** iframe 5가지 버그 해결됨.
- **단일 HTML 파일.** 모든 CSS 인라인. 외부 폰트 금지 — 각 테마의 시스템 스택이 의도적.
- **모든 슬라이드에 `data-screen-label`.** 한국어 라벨 권장.
- **Replit 로고 / 브랜드 락업 금지.** 템플릿 스타일이지 Replit 브랜드 덱이 아님.

---

## K-패션 시나리오별 테마 매핑

| K-패션 시나리오 | 추천 테마 | 톤 |
|---|---|---|
| **시즌 기획 합본 (디자인실 내부)** | `helix` 또는 `atlas` | 미니멀 또는 챕터 내러티브 |
| **콜라보 제안서** | `holm` 또는 `bluehouse` | 진지 메모 또는 컨슈머 카드 |
| **룩북 인덱스 / 화보 카탈로그** | `vance` | 갤러리 |
| **시즌 캠페인 리뷰** | `bevel` | Y2K 에디토리얼 |
| **매출 결산 / IR 자료** | `world-dark` 또는 `holm` | 파이낸스 / 사업 메모 |
| **ESG / 지속가능 리포트** | `world-mint` | 라이트 파이낸스 |
| **브랜드 히스토리 / 챕터 발표** | `atlas` | 박물관 |
| **컨슈머 제품 쇼케이스 (직원/소비자 발표)** | `bluehouse` | 컬러풀 카드 |
| **VIP 라운지 / 멤버십 리뉴얼** | `bluehouse` | 컨슈머 카드 |
| **1차 품평회 리뷰 (디자인실)** | `helix` 또는 `vance` | 데이터 또는 갤러리 |

## 언제 `replit-deck` vs 동료 스킬

| 스킬 | 선택 시점 |
|---|---|
| `simple-deck` | 단순한 단일 테마 덱, 프로젝트 `DESIGN.md` 토큰에 바인딩. 덱이 호스트 브랜드와 일치해야 할 때. |
| `magazine-poster` | 에디토리얼 "매거진 × e-ink" 톤 (룩북 단일 페이지, 캠페인 포스터). |
| `replit-deck` | 브리프가 8개 시각 정체성 중 하나를 명시적으로 요구하거나, 다양한 톤의 시즌/콜라보 덱이 필요할 때. `DESIGN.md` 의존성 없음. |

사용자가 "덱 만들어줘"라고만 하고 추가 가이드 없으면 기본은 `simple-deck`. `replit-deck`는 브리프가 시각 톤을 명시할 때.

## 한국 패션기업 조직 R&R 메모

Replit 덱의 작성·발표 흐름.

- **디자인 실장 / 그래픽팀**: 시즌 기획 합본 덱, 1차 품평회 리뷰 덱, 룩북 인덱스
- **MD 실장**: 라인업 리뷰 덱, 신규 카테고리 런칭 제안, MD 사업 회의 덱
- **마케팅 실장**: 시즌 캠페인 리뷰, IMC 결과 덱
- **브랜드 디렉터**: 콜라보 제안서, 브랜드 히스토리 발표
- **영업기획팀**: 매출 결산 / IR 자료 덱
- **대표/CEO**: 최종 컨펌, 외부 IR / 콜라보 협상 시 활용

## 시즌 사이클 내 위치

```
[시즌 시작 6개월 전 — 시즌 전략 단계]
    ↓ replit-deck (helix) — 시즌 기획 사전 합의
[시즌 시작 3~5개월 전 — 컨셉 / 라인업 단계]
    ↓ replit-deck (atlas 또는 helix) — 디자인 기획 합본, 1차 품평회 리뷰
[시즌 시작 1~3개월 전 — 발주 / 캠페인 단계]
    ↓ replit-deck (vance 또는 bevel) — 룩북 인덱스, 캠페인 사전 발표
[시즌 진행 / 종료]
    ↓ replit-deck (world-dark 또는 holm) — 매출 결산, IR 자료
[연중 수시]
    ↓ replit-deck (holm 또는 bluehouse) — 콜라보 제안서, VIP 멤버십 발표
```

---

## 브라우저 / 런타임 지원

- **타겟**: 모던 데스크탑 브라우저 (Chrome 110+ / Safari 16+ / Firefox 115+) 및 모바일 Safari / Chrome.
- **사용 기능**: CSS scroll-snap (가로), `color-mix()`, CSS 커스텀 속성, `text-wrap: balance`. 모두 ≥ 93% Baseline.
- **미지원**: IE 11, Safari < 15, `color-mix()` 없는 브라우저.
- **모바일**: iOS Safari 16+ / Android Chrome에서 가로 scroll-snap 동작. 키보드 nav는 데스크탑 전용.
- **nav 스크립트 동작**: `simple-deck` 동일 스크립트. iframe 임베딩, 듀얼 리스너 레이스, focus loss, 새로고침 위치 복원 모두 처리. **다시 작성 금지**.

## 출력 규약

단일 HTML 문서(`<!doctype html>`부터 `</html>`까지)를 결과물로 출력하세요.

- **Claude 환경(Claude.ai · Claude Code)**: 결과물을 아래와 같이 `<artifact>` 태그로 감싸세요.
  ```
  <artifact identifier="deck-<slug>" type="text/html" title="<덱 제목>">
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
