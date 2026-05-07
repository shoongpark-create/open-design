# Open Design 시스템 종합 가이드

> 이 문서는 `/Users/sherman/14. open design/` 작업 디렉토리에 구축된 **Open Design** 환경의 전체 구조와 활용 방법을, **K-young-casual 패션 비즈니스(예: WACKYWILLY) 시즌 디자인 파이프라인**을 중심으로 정리한 것입니다.
>
> 이 가이드는 다음을 함께 다룹니다:
> - 무엇이 들어 있고 어떻게 연결되어 한 체계로 작동하는지
> - 패션 비즈니스의 어느 의사결정 단계에 어느 스킬이 붙는지
> - 시스템 정합성 점검 결과 및 알려진 이슈

---

## 0. 한눈에 보는 요약

| 구분 | 값 |
|---|---|
| 본체 (자체 호스팅 가능) | `system/` — Open Design daemon + web + 47 skills + 72 design systems |
| 클라이언트 마운트 | `.claude/` — Claude Code 프로젝트 레벨 스킬 디렉토리 (vendored 19 + 심링크 47 = 66) |
| 자유 작업 공간 | `workspace/` — git 미추적 |
| 패션 시즌 디자인 스킬 | **15개** (정식 main 반영 완료, 2026-05-08) |
| 마케팅/일반 스킬 | **31개** |
| UI 마스터 스킬 | **1개** (`impeccable`) |
| 코드 에이전트 지원 | 7종 CLI + Anthropic API 폴백 |
| 디자인 시스템 | **72개** (Linear, Stripe, Apple, Figma, …) |
| 핵심 차별점 | 결정론적 가이드 워크플로우 + 5차원 자기비평 + 5게이트 quality-gate |

---

## 1. Open Design이란

**Open Design (OD)** 은 로컬 우선(local-first) 멀티 에이전트 디자인 시스템입니다. 사용자가 이미 설치해둔 코드 에이전트 CLI(Claude Code, Cursor, Copilot, Codex, Gemini, OpenCode, Qwen)를 자동 감지해 디자인 엔진으로 변환합니다. 사용자가 디자인 브리프를 입력하면, 에이전트가 **샌드박스된 브라우저 미리보기에 프로덕션 가능한 HTML 산출물**을 스트리밍합니다.

### 이 환경의 차별점 — 패션 비즈니스에 정렬된 fork
이 작업 디렉토리는 일반 Open Design fork에서 한 걸음 더 나아간 구성입니다.

- **K-young-casual 패션 시즌 디자인 파이프라인 정식 반영** — 15개 패션 스킬이 main에 통합되어 컨셉 → 컬러 → 원단 → 핏/그래픽 → 라인업 → 스타일링 → 룩북 → IMC → 종합 덱까지 풀 커버
- **WACKYWILLY 등 K-young-casual 브랜드의 시즌 의사결정 사이클**(연 2회 SS/FW × 4 selling period S1~S4)에 정확히 정렬된 산출물 카탈로그
- **Brand Guidelines as Code 패턴** — `quality-gate` 스킬이 BTA(Basic/Trend/Accent), 3B 착장 금지, 로고 변형 금지, 프리셋 진실성, Evidence 5개 게이트를 코드로 강제

### 핵심 가치 제안
- **에이전트 종속성 없음(BYOA)** — 설치된 CLI 자동 감지, 없으면 Anthropic API(BYOK)
- **47개 + 19개 즉시 사용 가능 스킬** — 디자인/문서/UI 리뷰 워크플로우 사전 구축
- **72개 브랜드 디자인 시스템** — 즉시 비주얼 언어 적용
- **인터랙티브 발견(Discovery) 폼** — 모델 즉흥성 대신 사용자 결정으로 품질 고정
- **5차원 자기비평 내장** — 철학/위계/실행/구체성/절제 자체 점검 후 출력
- **실제 파일시스템 + 실제 도구** — `Read`/`Write`/`Bash`/`WebFetch`로 시드 템플릿 읽고 헥스 코드 grep, 이미지 생성, .pptx/.pdf/.zip 익스포트
- **로컬 SQLite 영속성** — `.od/app.sqlite`에 프로젝트·대화·메시지 저장
- **자체 호스팅** — Apache-2.0, Vercel 배포 가능, 클라우드 잠금 없음

### 업스트림 관계
- 원본 upstream: [`nexu-io/open-design`](https://github.com/nexu-io/open-design)
- 본 fork: [`shoongpark-create/open-design`](https://github.com/shoongpark-create/open-design) — main에 패션 파이프라인 정식 통합 (2026-05-08)
- 클라이언트 마운트: [`shoongpark-create/open-design-skills`](https://github.com/shoongpark-create/open-design-skills) — vendored 19 + manifest 기반 심링크 47

---

## 2. 시스템 아키텍처 (monorepo)

```
/Users/sherman/14. open design/
├── system/                     ← Open Design 본체 (open-design fork)
│   ├── apps/                   ← 런타임 애플리케이션
│   │   ├── daemon/             ← Express 서버, SQLite, 에이전트 spawn
│   │   ├── web/                ← Next.js 16 프론트엔드 UI
│   │   ├── desktop/            ← Electron 셸 (선택)
│   │   └── packaged/           ← 패키징 런처 (실험적)
│   ├── packages/               ← 공유 모듈 (contracts, sidecar, sidecar-proto, platform)
│   ├── tools/                  ← dev (`pnpm tools-dev`), pack
│   ├── e2e/                    ← Playwright UI 테스트
│   ├── skills/                 ← 47개 디자인 스킬 (★ 핵심)
│   │   ├── fashion/            ← 15개 패션 스킬 + _shared/
│   │   ├── marketing/          ← 31개 범용 스킬
│   │   └── impeccable/         ← 1개 UI 마스터 스킬
│   ├── design-systems/         ← 72개 브랜드 시스템 (DESIGN.md)
│   ├── assets/frames/          ← iPhone/Pixel/iPad/MacBook/브라우저 프레임
│   ├── templates/              ← deck-framework 등
│   ├── scripts/                ← sync-design-systems, postinstall
│   └── .od/                    ← 런타임 데이터 (gitignore)
│
├── .claude/                    ← Claude Code 스킬 마운트 (open-design-skills)
│   ├── skills/                 ← 19 vendored + 47 심링크
│   ├── skills.manifest.json    ← 심링크 정의
│   ├── scripts/link.mjs        ← 심링크 재생성
│   └── README.md
│
└── workspace/                  ← 사용자 자유 작업 공간 (git 미추적)
```

### 앱별 역할

| 앱 | 역할 | 스택 |
|---|---|---|
| **daemon** | 단일 권한 프로세스 — 에이전트 spawn, `/api/*` 라우트, SSE 스트리밍, SQLite | Node 24 + TS + Express + better-sqlite3 |
| **web** | 채팅 UI, 스킬/디자인시스템 픽커, srcdoc iframe 렌더러, 파일 워크스페이스 | Next.js 16 App Router + React 18 |
| **desktop** | web URL 래핑 + 사이드카 IPC | Electron |
| **packaged** | 패키징 바이너리 사이드카 + `od://` 진입 글루 | Node + Electron |

### 데몬 코어 파일 (`apps/daemon/src/`)
```
cli.ts                  ← bin 진입점 (od)
server.ts               ← Express 앱, /api/* 라우트, SSE
agents.ts               ← PATH 스캐너, 에이전트별 argv 빌더
skills.ts               ← SKILL.md 프론트매터 로더
design-systems.ts       ← DESIGN.md 프론트매터 로더
claude-stream.ts        ← Claude Code 타입드 이벤트 파서
copilot-stream.ts       ← Copilot CLI 타입드 이벤트 파서
db.ts                   ← SQLite 스키마
projects.ts             ← 프로젝트 CRUD
runs.ts                 ← 채팅 런 관리
artifact-manifest.ts    ← 산출물 추적
prompts/
  ├── system.ts         ← BASE + DISCOVERY + DESIGN.md + SKILL.md 합성
  ├── discovery.ts      ← Turn-1 폼 + 5D 비평
  ├── directions.ts     ← 5가지 비주얼 스쿨
  ├── official-system.ts
  └── deck-framework.ts
```

---

## 3. 지원하는 코드 에이전트 CLI

| CLI | 바이너리 | 스트리밍 | 지원 |
|---|---|---|---|
| **Claude Code** | `claude` | `--output-format stream-json` | **1급** |
| **GitHub Copilot CLI** | `copilot` | `--output-format json` | 1급 |
| Cursor Agent | `cursor-agent` | 라인 버퍼 | 표준 |
| Gemini CLI | `gemini` | 라인 버퍼 | 표준 |
| OpenCode | `opencode` | 라인 버퍼 | 표준 |
| Qwen Code | `qwen` | 라인 버퍼 | 표준 |
| Codex CLI | `codex` | 라인 버퍼 | 표준 |
| (폴백) | Anthropic API | `@anthropic-ai/sdk` | BYOK |

### Spawn 전략 + 샌드박싱
- 데몬이 `child_process.spawn(cliName, [...args], { cwd: .od/projects/<id>, stdio: 'pipe' })`
- `cwd` 잠금으로 Read/Write/Bash가 프로젝트 폴더 안에서만 작동
- 비대화형/자동 승인 플래그 강제 (UI에 터미널 없음)
- Claude Code는 `--add-dir`로 스킬·디자인시스템 외부 파일 읽기 허용

---

## 4. 결정론적 작업 흐름 (User Workflow)

### Turn 1 — Discovery 폼
```
사용자: "이번 시즌 컬러 스토리 만들어줘"
   ↓
에이전트가 코드 작성 *전에* 질문 폼 발행:
  <question-form id="discovery">
    - Surface (desktop / mobile / tablet)
    - Audience (구매자 / 내부 / MD / 일반)
    - Tone (밝음 / 진지함 / 편집)
    - Brand context (DESIGN.md 또는 "아직 없음")
    - Scale (소형 / 중형 / 대형)
    - 제약 (색상 / 소재 / 타임라인)
  </question-form>
```

### Turn 2 — 브랜드 방향 선택 (브랜드 미정 시)
```
5가지 큐레이션 비주얼 스쿨 중 선택:
  1. Editorial          (Monocle / FT)
  2. Modern Minimal     (Linear / Vercel)
  3. Tech Utility       (Bloomberg / Bauhaus)
  4. Brutalist          (raw, 거대 타입)
  5. Soft Warm          (Notion / Apple Health)

→ 결정론적 OKLch 팔레트 + 폰트 스택 + 자세 큐 부여
→ 모델 즉흥성 차단
```

### Turn 3 — TodoWrite 계획
```
<todo-write>
  ✓ DESIGN.md 읽기
  ✓ assets/template.html 읽기
  ✓ references/checklist.md 읽기
  ↓ :root에 색상 매핑
  ↓ Pantone TCX 코드 검증
  ↓ 60/30/10 비율 적용
  ↓ 카테고리×컬러 매트릭스 작성
  ↓ P0 항목 자기 검증
</todo-write>
```

### Turn 4+ — 자기비평 + 산출물
```
에이전트(내부): "철학 4/5, 위계 5/5, 실행 4/5, 구체성 5/5, 절제 3/5 = 4.2/5 → 통과"
   ↓
<artifact type="text/html" title="...">
  <!doctype html><html>...</html>
</artifact>
   ↓
UI: srcdoc iframe 렌더, 다운로드/디스크 저장/디자인시스템 전환/PDF·PPTX·ZIP 익스포트
```

---

## 5. 47개 스킬 카탈로그

### A. 패션 (Fashion) — 15개

각 스킬은 **SKILL.md 프론트매터** + `assets/template.html` 시드 + `references/` 보조 + `_shared/imagegen.md` 공유 이미지 엔진(ima2 → ComfyUI → CSS 폴백 4-tier 체인) 으로 구성됩니다.

| 스킬 | 역할 | mode | featured 우선순위 |
|---|---|---|---|
| `fashion-color-story` | 시즌 팔레트 잠금 (Pantone TCX, 60/30/10, 카테고리×컬러 매트릭스) | prototype | 10 |
| `fashion-concept-board` | 컨셉/무드 보드 (잠금 *전* 탐색) | prototype | 11 |
| `fashion-lookbook` | 컬렉션 룩북 (시즌 캠페인, AI 룩, 제품 카드) | prototype | 12 |
| `fashion-styling-board` | 시즌 스타일링 보드 (4축 × 판기별 분배) | prototype | 13 |
| `fashion-key-item-sheet` | 키 아이템 5-슬라이스 (Color/Detail/Pattern/Fabric/Artwork) | prototype | 14 |
| `fashion-graphic-direction` | 시즌 그래픽 방향성 (티셔츠 프린트, 자수, 심볼) | prototype | 15 |
| `fashion-fabric-board` | 시즌 패브릭 보드 (구조/기능 원단, UNI/WOMEN 분리) | prototype | 16 |
| `fashion-new-lineup` | 신규 시리즈/라인업 확장 | prototype | 17 |
| `fashion-positioning-map` | 2×2 브랜드 포지셔닝 맵 (BASIC↔ACCENT × NEW BASIC↔TREND) | prototype | 18 |
| `fashion-brand-roadmap` | 4티어 브랜드 피라미드 (North Star → Foundation) | prototype | 19 |
| `fashion-season-strategy` | 시즌 3대 전략 축 + 카테고리별 히어로 | prototype | 20 |
| `fashion-imc-calendar` | IMC 캘린더 (월별 히어로, SKU/생산금액/비중, 7단계 일원화) | prototype | 21 |
| `fashion-fit-system` | 핏 체계 (UNI/WOMEN, 카테고리별 핏 명명) | prototype | 22 |
| `fashion-accessory-lineup` | 액세서리 라인업 (가방/모자/신발, 셰이프 패밀리) | prototype | 23 |
| `fashion-season-deck` | **시즌 종합 덱** (모든 모듈 통합 발표 자료) | **deck** | 24 |
| `_shared/imagegen.md` | 공유 이미지 엔진 폴백 체인 | (공유) | — |

> **모두 `category: fashion`, `scenario: design`** (단 `fashion-lookbook`은 `scenario: marketing` — 룩북은 마케팅 자산임).

### B. 마케팅/일반 (Marketing) — 31개

#### B-1. 프로토타입/디자인 표면 (8)
`web-prototype` · `saas-landing` · `dashboard` · `pricing-page` · `docs-page` · `blog-post` · `mobile-app` · `social-carousel`

#### B-2. 덱/프레젠테이션 (3)
`guizang-ppt` (매거진 스타일 가로 스와이프, WebGL 히어로) · `simple-deck` · `replit-deck` (8테마)

#### B-3. 문서/업무 산출물 (10)
`pm-spec` · `weekly-update` · `meeting-notes` · `eng-runbook` · `finance-report` · `hr-onboarding` · `invoice` · `kanban-board` · `team-okrs` · `magazine-poster`

#### B-4. 특수/파워 도구 (10)
`wireframe-sketch` · `critique` (5차원 디자인 리뷰) · `tweaks` (라이브 CSS 컨트롤) · `digital-eguide` · `email-marketing` · `motion-frames` · `gamified-app` · `dating-web` · `mobile-onboarding` · `sprite-animation`

### C. Impeccable — 1개 마스터 스킬

UI 작업 전반 마스터. 35 reference + 15 scripts 보유. 서브 명령 모드:
```
craft / shape / audit / animate / bolder / quieter / overdrive / colorize /
delight / layout / typeset / harden / onboard / optimize / polish / teach /
document / extract / live
```

---

## 6. ★ 패션 비즈니스 워크플로우 — 시즌 디자인 파이프라인

### 6.1. 시즌 디자인 의존 그래프

`SKILL.md`의 상호 참조에서 추출한 **실측 의존 관계** (어느 스킬이 어느 스킬의 산출물을 입력으로 사용하는지):

```
                ┌─────────────────────┐
                │  fashion-brand-     │  (영구, 연간 1회 갱신)
                │  roadmap            │
                └──────────┬──────────┘
                           │
                ┌──────────▼──────────┐
                │  fashion-season-    │  (시즌 시작 — 3대 전략축, 히어로)
                │  strategy           │
                └──────────┬──────────┘
                           │
                ┌──────────▼──────────┐    ┌─────────────────────┐
                │  fashion-           │    │  fashion-           │
                │  concept-board      │───▶│  color-story        │ ◀── (모든 후속의 베이스)
                └──────────┬──────────┘    └──────┬──────────────┘
                           │                      │
              ┌────────────┼──────────────────────┼────────────┐
              ▼            ▼                      ▼            ▼
    ┌──────────────┐ ┌──────────────┐ ┌────────────────┐ ┌──────────────┐
    │ fabric-      │ │ graphic-     │ │ key-item-      │ │ fit-system   │
    │ board        │ │ direction    │ │ sheet          │ │              │
    └──────┬───────┘ └──────┬───────┘ └────────┬───────┘ └──────────────┘
           │                │                  │
           └────────┬───────┴──────────────────┘
                    ▼
         ┌──────────────────────────────┐
         │  fashion-new-lineup          │  (시리즈/라인업 확장)
         │  fashion-accessory-lineup    │  (액세서리 카테고리별)
         └─────────────┬────────────────┘
                       │
              ┌────────▼─────────┐
              │ styling-board    │  (4축 × 판기별)
              └────────┬─────────┘
                       │
        ┌──────────────┼──────────────┐
        ▼                             ▼
┌──────────────┐                ┌──────────────────┐
│ lookbook     │                │ imc-calendar     │  (월별 히어로 + 7단계 일원화)
│ (마케팅 자산)│                └──────────────────┘
└──────┬───────┘                        │
       │                                │
       └──────────────┬─────────────────┘
                      ▼
       ┌────────────────────────────────────┐
       │ fashion-season-deck                │  ◀── 시즌 모든 모듈 통합 발표
       │ (브랜드 로드맵 + 포지셔닝 + 전략 + │
       │  컨셉 + 컬러 + 소재 + 스타일링 +  │
       │  키 아이템 + 라인업 + 그래픽 +    │
       │  핏 + IMC) — 13개 모듈 흡수        │
       └────────────────────────────────────┘

(영구) ◀──── (시즌 단위) ────▶ (마케팅 자산)
```

### 6.2. 한국 selling period(S1~S4) × 스킬 매핑

K-young-casual은 SS/FW 각 시즌을 4개 selling period로 잘게 나눕니다. 패션 SKILL.md 본문에 총 39회 언급되는 캘린더 정렬:

| Period | 시기 | 핵심 활동 | 어울리는 스킬 |
|---|---|---|---|
| **사전 기획** | 시즌 6~9개월 전 | 브랜드 방향성 갱신, 시즌 전략 수립 | `fashion-brand-roadmap` (연 1회) → `fashion-positioning-map` → `fashion-season-strategy` |
| **컨셉 잠금** | 시즌 3~5개월 전 | 무드/방향 탐색 → 컬러/원단/그래픽 잠금 | `fashion-concept-board` → `fashion-color-story` → `fashion-fabric-board` → `fashion-graphic-direction` → `fashion-fit-system` |
| **상품 디자인** | 시즌 2~3개월 전 | 키 아이템·라인업 확정, 패턴실 브리프 | `fashion-key-item-sheet` → `fashion-new-lineup` → `fashion-accessory-lineup` |
| **S1 (1~2월 / 7~8월)** | 시즌 시작 | 신학기/봄·여름 입학 (백팩, 가벼운 셋업) 또는 가을·겨울 시작 (기능 외투) | `fashion-styling-board` (S1 묶음) → `fashion-lookbook` (S1 캠페인) |
| **S2 (3~4월 / 9~10월)** | 본격 판매 | 전체 라인 확산, 스타일링 다양화 | `styling-board` (S2) + `imc-calendar` 주력 |
| **S3 (5월 / 11월)** | 시즌 정점 | 베스트셀러 푸시, 프리세일 | `fashion-imc-calendar` 콘텐츠 + 광고 |
| **S4 (6~7월 / 12~1월)** | 시즌 마감 | 클리어런스, 다음 시즌 티저 | `fashion-imc-calendar` (소진 + 차기 시즌 hint) |
| **종합 리뷰** | 시즌 종료 / 다음 시즌 킥오프 | 임원·전사 발표 | `fashion-season-deck` (13개 모듈 흡수) |

### 6.3. 역할별 사용 시나리오

| 역할 | 주요 용도 | 자주 사용하는 스킬 |
|---|---|---|
| **디자이너** | 컨셉 → 컬러 → 원단 → 키아이템 → 그래픽 → 핏 디테일 | `concept-board`, `color-story`, `fabric-board`, `graphic-direction`, `key-item-sheet`, `fit-system` |
| **MD (머천다이저)** | 라인업 분배, BTA 비율, 시즌 히어로 선정, 가격 라인 | `new-lineup`, `accessory-lineup`, `season-strategy`, `key-item-sheet`, `quality-gate` |
| **마케팅** | IMC 캘린더, 룩북, 캠페인 일원화, 소셜 콘텐츠 | `imc-calendar`, `lookbook`, `social-carousel`, `email-marketing`, `magazine-poster` |
| **브랜드 디렉터 / CEO** | 시즌 전체 방향, 포지셔닝, 임원 발표, 연간 로드맵 | `brand-roadmap`, `positioning-map`, `season-strategy`, `season-deck` |
| **생산팀 / 패턴실** | 핏/사이즈 매트릭스, 원단 사양, 행택/포인트 라벨 | `fit-system`, `fabric-board`, `key-item-sheet` |
| **품질/검수** | 산출물 발행 전 게이트 | `quality-gate` (5게이트), `critique` (디자인 리뷰) |

### 6.4. WACKYWILLY 컨텍스트와 quality-gate 5게이트

`quality-gate`는 본 fork의 핵심 차별화 스킬로, **Brand Guidelines as Code** 패턴을 K-young-casual 브랜드(WACKYWILLY)에 맞게 코드화한 검증 엔진입니다. Audi/Skoda/Polaris의 가이드라인-as-code 모델을 차용했습니다.

**5게이트** (`rules.json` 정의, 적용 대상별 `block` / `warn`):

| # | Gate ID | 제목 | 적용 대상 | 실패 시 |
|---|---|---|---|---|
| **#1** | `bta` | **BTA 명시** — Basic / Trend / Accent 태그 + 비율 밴드 준수 | sku, capsule, line_sheet, costing, volume_plan | **block** |
| **#2** | `3b` | **3B 착장 금지** — 모든 SKU가 basic + 흑백 + 매칭이면 차단 | look, visual, lookbook, campaign, ad_creative | **block** |
| **#3a** | `logo` | **로고 형태/색상 변형 금지** | visual, merchandise, packaging | **block** |
| **#3b** | `color-context` | **컨텍스트 인식 컬러 allowlist** | visual, lookbook, ad_creative, pdp, social, packaging, deck, doc, report, briefing | warn |
| **#4** | `preset` | **프리셋 진실성** — 모델/생성 도구 프리셋 명시 | copy, doc, deck, press_release | **block** |
| **#5** | `evidence` | **Evidence before Assertions** — 완성 보고에 근거 첨부 | any_completion_report | warn |

→ 모든 패션 산출물(SKU/룩/카피/비주얼/캠페인)은 발행 전 본 게이트 통과 필수.

> ⚠ **알려진 이슈**: `rules.json`이 참조하는 `system/presets/wacky-willy/design-tokens.json`이 현재 시스템에 없습니다. quality-gate가 `block` 판정을 내리려면 이 파일을 먼저 생성해야 합니다. 자세한 내용은 §11 참조.

### 6.5. 비즈니스 의사결정 단계 → 산출물 매핑

| 의사결정 단계 | 인풋 | 산출물 | 사용 스킬 |
|---|---|---|---|
| **연간 브랜드 방향 갱신** | 전년 실적, 시장 변화 | 브랜드 4티어 피라미드 | `brand-roadmap` |
| **신시즌 포지셔닝 검토** | 경쟁사, 고객 세그먼트 | 2×2 포지셔닝 맵 | `positioning-map` |
| **시즌 3대 축 + 히어로 결정** | 매출 목표, 카테고리 우선순위 | 1페이지 전략 카드 | `season-strategy` |
| **시즌 무드 방향 잠금** | 트렌드 리서치, 인스피레이션 | 컨셉 보드 (무드, 키워드, 시드 시그널) | `concept-board` |
| **컬러 잠금** | 컨셉 보드 출력 + Pantone | 60/30/10 팔레트 + 카테고리×컬러 매트릭스 + QC 노트 | `color-story` |
| **원단 잠금 + 공장 브리프** | 컬러 + 컨셉 | 구조/기능 원단 + 행택 + 포인트 라벨 | `fabric-board` |
| **그래픽/심볼 방향 잠금** | 컬러 + 컨셉 | 프린트/자수/심볼/워드마크 가이드 | `graphic-direction` |
| **핏/사이즈 통합** | 카테고리별 패턴 데이터 | UNI/WOMEN 핏 명명 + 매트릭스 | `fit-system` |
| **키 아이템 5-슬라이스 작성** | 컬러 + 원단 + 컨셉 | 단일 아이템 사진+슬라이스 시트 | `key-item-sheet` |
| **신규 라인업 / 시리즈 확장** | 키 아이템 + 컬러 | 5장 이상 그리드, SKU 계획, 브리지 라인 역할 | `new-lineup` |
| **액세서리 카테고리별 라인업** | 시즌 전략 | 셰이프 패밀리별 그리드 | `accessory-lineup` |
| **시즌 룩 균형 검토** | 모든 라인업 | 4축 × S1~S4 구성 표 | `styling-board` |
| **룩북 캠페인 비주얼화** | 스타일링 보드 | AI 룩 이미지 + 컬러/소재 노트 + 제품 카드 | `lookbook` |
| **월별 마케팅 캘린더** | 시즌 전략 + 룩북 | 7단계 일원화 (히어로 → 콘텐츠 → VM → 프로모션) | `imc-calendar` |
| **임원/전사 발표** | 위 모든 산출물 | 13모듈 통합 가로 스와이프 덱 | `season-deck` |
| **발행 전 검증** | 산출물 어떤 형식이든 | block/warn 게이트 5종 | `quality-gate` |
| **5차원 디자인 리뷰** | HTML 산출물 | 철학/위계/디테일/기능/혁신 0~10점 + 레이더 | `critique` |

### 6.6. 한 시즌 풀 사이클 예시 (가상의 27SS WACKYWILLY)

```
[시즌 6개월 전 — 26FW 진행 중] 
  brand-roadmap 작성 (연 1회) → 27SS 포지셔닝 맵 → 27SS 시즌 전략 (3축, 히어로)

[시즌 4개월 전]
  concept-board "신학기 × 정원" → color-story 락 (Sage 60 / Cream 30 / Coral 10)
  → fabric-board (waffle, slub, Sorona Cool, 기능 메쉬)
  → graphic-direction (서체 + 캐릭터 + 워드마크 시즌 변형)
  → fit-system (UNI: slim/regular/oversize, WOMEN: crop/regular/relaxed)

[시즌 3개월 전]
  key-item-sheet × 5개 (코튼 집업, 그래픽 티, 데님 셋업, 백팩, 가디건)
  → new-lineup ("폴카도트 시리즈", "에센셜 라인 확장")
  → accessory-lineup (백팩 3 셰이프 + 캡 2 셰이프 + 슈즈 2)
  → styling-board (4축 × S1~S4)

[시즌 2개월 전]
  lookbook (S1 신학기 캠페인) → imc-calendar (1~2월 신학기 / 3~4월 봄 / 5월 정점 / 6~7월 클리어런스)

[시즌 1개월 전 — 발행 전]
  quality-gate 5게이트 통과 → critique 5차원 리뷰 통과
  → season-deck 통합 발표 (CEO + 전사 킥오프)

[시즌 진행 중 (27SS S1~S4)]
  imc-calendar 따라 콘텐츠/VM/프로모션 일원화 실행
  필요 시 critique으로 라이브 산출물 점검
```

---

## 7. 72개 디자인 시스템 카탈로그

각 시스템은 단일 `DESIGN.md` 파일로 9섹션 스키마를 따릅니다:
**Color → Typography → Spacing → Layout → Components → Motion → Voice → Brand → Anti-patterns**

| 카테고리 | 시스템 | 패션 비즈니스 활용 |
|---|---|---|
| **AI / LLM (10)** | claude, cohere, mistral-ai, minimax, together-ai, replicate, runwayml, elevenlabs, ollama, x-ai | AI 에이전시 톤의 룩북·매거진 |
| **개발자 도구 (19)** | cursor, vercel, linear-app, framer, expo, clickhouse, mongodb, supabase, hashicorp, posthog, sentry, warp, webflow, sanity, mintlify, lovable, composio, opencode-ai, voltagent | 사내 dashboard, eng-runbook |
| **생산성 (10)** | notion, figma, miro, airtable, superhuman, intercom, zapier, cal, clay, raycast | 내부 보고서, 임원 덱 |
| **핀테크 (7)** | stripe, coinbase, binance, kraken, mastercard, revolut, wise | 가격 페이지, 인보이스 |
| **이커머스 (6)** | shopify, **airbnb**, uber, **nike**, starbucks, **pinterest** | **★ 패션 룩북, 제품 PDP, 캠페인** |
| **미디어 (6)** | spotify, playstation, wired, theverge, meta, **xiaohongshu** | **★ 매거진 룩북, 소셜 카루셀** |
| **자동차 (6)** | tesla, bmw, ferrari, lamborghini, bugatti, renault | 럭셔리 시즌 캠페인 |
| **기타 (6)** | apple, ibm, nvidia, vodafone, resend, spacex | 미니멀 / 임원 발표 |
| **스타터 (2)** | default (Neutral Modern), warm-editorial | **★ 패션 에디토리얼 기본값** |

> **패션 비즈니스 추천 조합**: `nike` / `airbnb` / `pinterest` (액티브웨어/라이프스타일/큐레이션) · `xiaohongshu` (K-young-casual 핵심 SNS) · `warm-editorial` (편집 기본) · `apple` (미니멀 발표) · `ferrari/bugatti` (프리미엄 캠페인).

---

## 8. 템플릿 & 에셋

- `templates/deck-framework.html` — 덱 모드 기본 골격 (화살표 키/하단 도트/스와이프, X of Y 카운터, 스크롤 페이지네이션, PDF print 스타일시트)
- `assets/frames/` — 디바이스 크롬 5종
  - `iphone-15-pro.html` (Dynamic Island, 상태 바 SVG)
  - `android-pixel.html`, `ipad-pro.html`, `macbook.html`, `browser-chrome.html`
  - → `mobile-app`, `mobile-onboarding`, `gamified-app`이 참조

---

## 9. .claude 클라이언트 마운트 환경

이 작업 디렉토리에는 **두 개의 git 리포 + 한 개의 자유 영역**이 공존하며 동기 동작합니다:

| 위치 | 리포 | 기본 브랜치 | 역할 |
|---|---|---|---|
| `system/` | [`shoongpark-create/open-design`](https://github.com/shoongpark-create/open-design) | **main (= port/local-ima2-fashion 흡수)** | Open Design 본체. 패션 파이프라인 정식 통합. |
| `.claude/` | [`shoongpark-create/open-design-skills`](https://github.com/shoongpark-create/open-design-skills) | main | Claude Code 프로젝트 레벨 스킬 마운트 |
| `workspace/` | (git 미추적) | — | 사용자 자유 작업 공간 |

### `.claude/skills/` — 두 종류
- **A. Vendored 스킬 (19개, 실제 콘텐츠 직접 추적)**
  `canvas-design`, `docx`, `excalidraw-diagram`, `executive-summary`, `frontend-slides`, `image-prompt-builder`, `interview-analyzer`, `json-canvas`, `md-to-image`, `pdf`, `pptx`, **`quality-gate`**, `simple-ds-design`, `skill-creator`, `supanova`, `supanova-redesign`, `theme-factory`, `web-artifacts-builder`, `xlsx`
- **B. 시스템 심링크 (47개, manifest 관리)**
  - 15 fashion + 1 impeccable + 31 marketing → `../system/skills/...` 가리킴
  - `skills.manifest.json` + `scripts/link.mjs`로 어느 머신에서든 재생성
  - `OD_SYSTEM_SKILLS` 환경변수로 system 위치 override 가능

→ Claude Code 세션 시작 시 vendored 19 + 심링크 47 = **66개 스킬 즉시 사용 가능**.

### Claude Code 트리거 예시
| 사용자 발화 | 활성 스킬 |
|---|---|
| "이 시즌 컬러 스토리 만들어줘" / "시즌 팔레트" | `fashion-color-story` |
| "27SS 컨셉 보드" / "무드보드" | `fashion-concept-board` |
| "원단 보드" / "패브릭 방향성" | `fashion-fabric-board` |
| "핏 체계 정리" / "사이즈 가이드" | `fashion-fit-system` |
| "27SS 디자인 기획안" / "시즌 종합 덱" | `fashion-season-deck` |
| "신학기 백팩 라인업" | `fashion-accessory-lineup` |
| "월별 IMC" / "히어로 캘린더" | `fashion-imc-calendar` |
| "QC 검수" / "게이트" / "검증" | `quality-gate` |
| "디자인 리뷰" / "5 차원 평가" | `critique` |
| "이 사이트 리디자인해줘" | `impeccable` |
| "랜딩페이지 만들어줘" | `supanova` 또는 `saas-landing` |
| "주간 보고" / "임원 보고" | `executive-summary` |
| "면접 정리" | `interview-analyzer` |

---

## 10. 로컬 데이터 / 영속성

```
.od/ (gitignore, 자동 생성)
├── app.sqlite                      ← projects, conversations, messages, tabs
├── projects/<uuid>/                ← 프로젝트별 작업 디렉토리 (에이전트 cwd)
│   ├── index.html                  ← 에이전트 산출물
│   ├── design.md                   ← 사용자 업로드 디자인 스펙
│   ├── brand-spec.md               ← 패션 워크플로우 추출 브랜드 컬러
│   └── <에이전트가 쓴 모든 파일>
└── artifacts/<timestamp>-<slug>/   ← "디스크에 저장" 다운로드
```

→ **다음날 같은 프로젝트를 열면 에이전트의 todo 카드가 정확히 그 자리.** SQLite 덕분.

---

## 11. ★ 시스템 정합성 점검 결과 (2026-05-08)

### 11.1. 통과 항목 ✓

| 점검 | 결과 |
|---|---|
| `system/` git 동기화 | ✓ `origin/main` = 로컬 main 일치 (시나리오 B 후) |
| `.claude/` git 동기화 | ✓ `origin/main` = 로컬 main 일치 |
| 47개 심링크 무결성 | ✓ broken=0 (모두 정상 타겟) |
| 카운트 정합성 | ✓ system fashion 15 + marketing 31 + impeccable 1 = manifest 47 = 실제 47 |
| 디자인 시스템 카운트 | ✓ 72개 |
| `_shared/imagegen.md` | ✓ ima2 → ComfyUI → CSS 폴백 4-tier 체인 동작 |
| 패션 메타데이터 일관성 | ✓ 모두 `category: fashion`, mode prototype/deck, scenario design/marketing |
| 패션 의존 그래프 | ✓ 추출 완료 — `fashion-season-deck`이 13개 모듈 흡수 |
| Selling period(S1~S4) 정렬 | ✓ 패션 SKILL.md 본문에 39회 명시적 언급 |
| `quality-gate` 5게이트 정의 | ✓ `rules.json`에 BTA/3B/Logo/Preset/Evidence 정의 완료 |

### 11.2. 알려진 이슈 ⚠

#### 이슈 1 — `design-tokens.json` 누락
- **현상**: `quality-gate/rules.json`이 `system/presets/wacky-willy/design-tokens.json` 참조 (`$tokens_ref`)하나, 작업 디렉토리 어디에도 그 파일이 없음.
- **영향**: BTA 비율 검증, 컬러 컨텍스트 allowlist, 프리셋 진실성 게이트가 **실제로 검증을 수행하지 못함** (block 판정 불가).
- **권장 조치**: `system/presets/wacky-willy/design-tokens.json` 신규 생성. 최소 스키마:
  ```json
  {
    "bta": {
      "ratio": { "basic": [0.45, 0.6], "trend": [0.25, 0.35], "accent": [0.10, 0.20] }
    },
    "colors": {
      "core": ["#000000", "#FFFFFF", "..."],
      "season_27ss": ["#...", "..."]
    },
    "logo": { "approved_variants": ["primary", "monochrome", "stacked"] },
    "presets": { "approved": ["..."] }
  }
  ```

#### 이슈 2 — 중복 브랜치 (정리 권장)
- `port/local-ima2-fashion`, `feat/local-ima2-fashion` 브랜치가 main과 동일 또는 stale 상태로 남아있음.
- **권장 조치**:
  ```bash
  cd "/Users/sherman/14. open design/system"
  git branch -d port/local-ima2-fashion
  git push origin --delete port/local-ima2-fashion
  git branch -D feat/local-ima2-fashion           # 또는 보존
  git push origin --delete feat/local-ima2-fashion
  ```

#### 이슈 3 — 역할 분리 명확화 필요 (운영 가이드)
- **`quality-gate`** (vendored 스킬) ≠ **`critique`** (system/skills/marketing 심링크 스킬). 둘 다 "검증"이지만 의미가 다름:
  | 스킬 | 검증 대상 | 점수 체계 | 트리거 |
  |---|---|---|---|
  | `quality-gate` | **WACKYWILLY 산출물 (SKU/룩/카피)**의 가이드라인 위반 | 5게이트 block/warn | "QC", "검수", "게이트", "검증", "lint" |
  | `critique` | **HTML 산출물 일반**의 디자인 품질 | 5차원 0~10점 + 레이더 | "디자인 리뷰", "design audit", "5 维度评审" |
- **운영 권장**: 패션 산출물은 발행 전 **두 스킬 모두 통과** (quality-gate = 정책 위반 차단, critique = 일반 디자인 품질).

### 11.3. 향후 강화 후보 (필수 아님)

| 후보 | 이유 |
|---|---|
| `_shared/` 확장 | 현재 `imagegen.md` 1개. 컬러 토큰 헬퍼, BTA 분류 헬퍼 등 추가 시 패션 패밀리 일관성 강화 |
| `quality-gate` ↔ `season-deck` 자동 연계 | `season-deck` 발행 시 `quality-gate` 자동 호출 훅 |
| `critique` ↔ `tweaks` 연계 | critique 점수가 낮은 항목을 tweaks로 라이브 수정하는 워크플로우 |
| `presets/` 디렉토리 신설 | `wacky-willy/`, `brand-x/`, `brand-y/` 다중 브랜드 지원 |

---

## 12. 빠른 시작 (개발자용)

### 본체 실행
```bash
cd "/Users/sherman/14. open design/system"
pnpm install                        # Node ~24, pnpm >=10.33.2
pnpm tools-dev                      # daemon + web 동시 시작
                                    # → 브라우저 UI 자동 오픈
```

### 주요 스크립트
```bash
pnpm build             # web 정적 빌드
pnpm typecheck         # 전체 타입체크 + daemon 빌드 + 잔여 JS 검증
pnpm test              # 워크스페이스 테스트
pnpm test:e2e:live     # 라이브 E2E
pnpm test:ui           # Playwright UI
```

### `.claude` 심링크 재생성
```bash
cd "/Users/sherman/14. open design/.claude"
node scripts/link.mjs                                          # 기본
OD_SYSTEM_SKILLS="/path/to/system/skills" node scripts/link.mjs # 다른 위치
node scripts/link.mjs --dry-run                                # 미리보기
node scripts/link.mjs --force                                  # 기존 링크 교체
```

### 디자인 시스템 동기화 (upstream `awesome-design-md`)
```bash
cd "/Users/sherman/14. open design/system"
node --experimental-strip-types scripts/sync-design-systems.ts
```

### `design-tokens.json` 신규 생성 (이슈 1 해결)
```bash
mkdir -p "/Users/sherman/14. open design/system/presets/wacky-willy"
# 위 §11.2 이슈 1의 최소 스키마를 design-tokens.json으로 작성
```

---

## 13. 주요 파일 위치 참조

| 목적 | 경로 |
|---|---|
| 데몬 서버 | `system/apps/daemon/src/server.ts` |
| 에이전트 감지/spawn | `system/apps/daemon/src/agents.ts` |
| 스킬 로더 | `system/apps/daemon/src/skills.ts` |
| 디자인시스템 로더 | `system/apps/daemon/src/design-systems.ts` |
| 시스템 프롬프트 합성 | `system/apps/daemon/src/prompts/system.ts` |
| Discovery + 5D 비평 | `system/apps/daemon/src/prompts/discovery.ts` |
| 5가지 비주얼 스쿨 | `system/apps/daemon/src/prompts/directions.ts` |
| 덱 프레임워크 | `system/apps/daemon/src/prompts/deck-framework.ts` |
| 패션 스킬 카탈로그 | `system/skills/fashion/<name>/SKILL.md` |
| 패션 공유 이미지 엔진 | `system/skills/fashion/_shared/imagegen.md` |
| Marketing 스킬 카탈로그 | `system/skills/marketing/<name>/SKILL.md` |
| Impeccable | `system/skills/impeccable/SKILL.md` |
| 디자인 시스템 | `system/design-systems/<name>/DESIGN.md` |
| 디바이스 프레임 | `system/assets/frames/` |
| 덱 기본 골격 | `system/templates/deck-framework.html` |
| 런타임 데이터 | `system/.od/` (gitignore) |
| `.claude` 매니페스트 | `.claude/skills.manifest.json` |
| `.claude` 링크 스크립트 | `.claude/scripts/link.mjs` |
| `quality-gate` 규칙 | `.claude/skills/quality-gate/rules.json` |
| 누락 (이슈 1) | `system/presets/wacky-willy/design-tokens.json` ⚠ |

---

## 14. 핵심 통계

| 항목 | 값 |
|---|---|
| 본체 앱 | 4 (daemon, web, desktop, packaged) |
| 공유 패키지 | 4 (contracts, sidecar, sidecar-proto, platform) |
| 시스템 스킬 | 47 (15 fashion + 31 marketing + 1 impeccable) |
| 클라이언트 vendored 스킬 | 19 |
| 클라이언트 가용 스킬 합계 | 66 |
| 디자인 시스템 | 72 |
| 디바이스 프레임 | 5 |
| 코드 에이전트 CLI | 7 + Anthropic API |
| `quality-gate` 게이트 | 5 (BTA/3B/Logo+Color/Preset/Evidence) |
| 비주얼 스쿨 (Direction) | 5 |
| Self-critique 차원 | 5 (철학/위계/실행/구체성/절제) |
| Selling period 분할 | 4 (S1~S4) |
| 라이선스 | Apache-2.0 |

---

## 15. 핵심 차별점 요약

1. **자율적 코드 에이전트 통합** — 설치된 어떤 CLI든 디자인 워크플로우에 자동 연결. 자체 에이전트 없음. BYOK 폴백.
2. **47 + 19 = 66개 스킬** — 패션 시즌 디자인 풀 커버 + 일반 마케팅/문서/UI 리뷰 + 와키윌리 quality-gate.
3. **72개 브랜드 디자인 시스템** — 한 번의 픽으로 산출물 비주얼 언어 통일, 프로젝트 진행 중 즉시 전환.
4. **결정론적 가이드 워크플로우** — Discovery 폼 → 방향 선택 → todo 진행 → 5차원 자기비평 → 산출물.
5. **K-young-casual 시즌 캘린더 정렬** — S1~S4 selling period × BTA(Basic/Trend/Accent) × 4축 스타일링이 패션 스킬 메타데이터에 인코딩됨.
6. **Brand Guidelines as Code** — `quality-gate` 5게이트가 정책 위반을 코드로 차단. 발행 전 자동 검수.
7. **시즌 종합 발표 자동화** — `fashion-season-deck`이 13개 패션 모듈을 단일 가로 스와이프 덱으로 통합.
8. **로컬 영속성 + 잠금 없음** — SQLite 영구 저장, 자체 호스트, Vercel 배포 가능, Apache-2.0.

**핵심 혁신**: 발견 규칙 + 디자인 철학 + 디자인 시스템 + 스킬 워크플로우 + 프로젝트 메타데이터 + Brand Guidelines as Code를 결정론적 합성형 시스템 프롬프트로 쌓는 프롬프트 스택. 사용자 결정과 정책이 산출물 품질을 만들고, 모델의 임의성이 만들지 않습니다.

---

## 부록 — 변경 이력

| 날짜 | 사건 |
|---|---|
| 2026-04-30 | 본 fork(`shoongpark-create/open-design`) main에 Vercel self deploy flow 머지 (`454e837`) |
| 2026-04-30 | `port/local-ima2-fashion` 브랜치에서 패션 파이프라인 작업 시작 |
| 2026-05-01 | `fashion-color-story`, `fashion-concept-board` 추가 |
| 2026-05-07 | 13개 패션 스킬 + `_shared/imagegen.md` + `impeccable` 추가 → port에 push |
| 2026-05-07 | `.claude/` 별도 리포(`open-design-skills`) 신설 — manifest + 심링크 47 + vendored 19 |
| 2026-05-08 | **시나리오 B 실행** — `port/local-ima2-fashion` HEAD를 `main`으로 force push (`454e837` → `1eeec10`). 패션 파이프라인이 main 정식 반영. |
| 2026-05-08 | 본 종합 가이드 작성 (시스템 점검 + 패션 비즈니스 매핑 통합) |
