# Open Design — K-young-casual 패션 시즌 디자인 시스템

> **로컬 우선, 에이전트 종속성 없는, 패션 비즈니스에 정렬된 디자인 엔진.**
>
> 이미 설치된 코드 에이전트 CLI(Claude Code, Cursor, Copilot, Codex, Gemini, OpenCode, Qwen)를 자동 감지해 디자인 엔진으로 변환합니다. 사용자가 디자인 브리프를 입력하면, 에이전트가 샌드박스된 브라우저 미리보기에 프로덕션 가능한 HTML 산출물을 스트리밍합니다.
>
> 본 fork는 일반 Open Design에서 한 걸음 더 나아가, **K-young-casual 패션 브랜드(예: WACKYWILLY)의 시즌 디자인 파이프라인**(컨셉 → 컬러 → 원단 → 핏/그래픽 → 라인업 → 스타일링 → 룩북 → IMC → 종합 덱)을 풀 커버하는 15개 패션 스킬과 5게이트 `quality-gate`(BTA/3B/Logo/Preset/Evidence)를 main에 정식 통합했습니다.

[English](./README.md) · **한국어** · [中文](./README.zh-CN.md) · [심화 가이드](./docs/open-design-overview.ko.md)

---

## 빠른 시작

```bash
# 의존성 설치 (Node ~24, pnpm >=10.33.2)
pnpm install

# 데몬 + 웹 UI 동시 시작 (브라우저 자동 오픈)
pnpm tools-dev
```

설치된 어떤 코드 에이전트 CLI든 자동 감지됩니다. 없으면 Anthropic API로 폴백(BYOK).

**다른 머신에서 처음부터 환경을 구축**하려면 [docs/setup.ko.md](./docs/setup.ko.md)를 참고하세요 (3개 sibling 리포 클론 + 의존성 + 심링크 재생성 + 데몬 시작, 한 번에 따라할 수 있는 단계별 가이드).
자세한 설치/실행은 [QUICKSTART.md](./QUICKSTART.md)를, 에이전트 워크플로우 규약은 [AGENTS.md](./AGENTS.md)를 참고하세요.

---

## 한눈에 보는 시스템

| 구분 | 값 |
|---|---|
| 패션 시즌 디자인 스킬 | **15개** (컨셉 → 종합 덱까지 풀 커버) |
| 마케팅/일반 스킬 | **31개** (랜딩, 대시보드, 덱, 문서, 모바일 등) |
| UI 마스터 스킬 | **1개** (`impeccable` — 디자인/리디자인/비평/감사) |
| 디자인 시스템 | **72개** (Linear, Stripe, Apple, Nike, Xiaohongshu, …) |
| 코드 에이전트 CLI | **7종 + Anthropic API 폴백** |
| `quality-gate` 게이트 | **5** (BTA/3B/Logo+Color/Preset/Evidence) |
| 비주얼 스쿨 (Direction) | **5** (Editorial/Modern Minimal/Tech/Brutalist/Soft Warm) |
| Self-critique 차원 | **5** (철학/위계/실행/구체성/절제) |
| 라이선스 | Apache-2.0 |

---

## 핵심 차별점

1. **에이전트 종속성 없음 (BYOA)** — 설치된 어떤 CLI든 디자인 워크플로우에 자동 연결. 자체 에이전트 없음, BYOK 폴백.
2. **K-young-casual 시즌 캘린더 정렬** — S1~S4 selling period × BTA(Basic/Trend/Accent) × 4축 스타일링이 패션 스킬 메타데이터에 인코딩됨.
3. **Brand Guidelines as Code** — `quality-gate` 5게이트가 정책 위반(BTA 비율/3B 착장/로고 변형/프리셋 진실성/Evidence)을 코드로 차단. 발행 전 자동 검수.
4. **결정론적 가이드 워크플로우** — Discovery 폼 → 방향 선택 → todo 진행 → 5차원 자기비평 → 산출물. 모델 즉흥성 차단.
5. **시즌 종합 발표 자동화** — `fashion-season-deck`이 13개 패션 모듈을 단일 가로 스와이프 덱으로 통합.
6. **72개 브랜드 디자인 시스템** — 한 번의 픽으로 산출물 비주얼 언어 통일, 프로젝트 진행 중 즉시 전환.
7. **로컬 영속성 + 잠금 없음** — SQLite 영구 저장, 자체 호스트, Vercel 배포 가능, Apache-2.0.

---

## 결정론적 작업 흐름

```
Turn 1  Discovery 폼      Surface / Audience / Tone / Brand / Scale / 제약
            ↓
Turn 2  방향 선택          5가지 비주얼 스쿨 중 1개 (브랜드 미정 시)
            ↓
Turn 3  TodoWrite 계획     DESIGN.md 읽기 → 시드 템플릿 → 색상 매핑 → P0 검증
            ↓
Turn 4+ 자기비평 + 산출물  5차원 점수 ≥ 통과선 → <artifact type="text/html"> 발행
            ↓
        UI: srcdoc iframe 렌더, 다운로드/디자인시스템 전환/PDF·PPTX·ZIP 익스포트
```

---

## 패션 비즈니스 워크플로우 (요약)

### 시즌 디자인 의존 그래프

```
brand-roadmap (영구, 연 1회)
  └→ season-strategy
        └→ concept-board → color-story (모든 후속의 베이스)
                 ↓
                 ├→ fabric-board
                 ├→ graphic-direction
                 ├→ key-item-sheet
                 └→ fit-system
                      ↓
                 ├→ new-lineup, accessory-lineup
                      ↓
                 └→ styling-board (4축 × S1~S4)
                      ├→ lookbook (마케팅 자산)
                      └→ imc-calendar (월별 히어로 7단계 일원화)
                           ↓
                      season-deck ◀── 13개 모듈 통합 발표
```

### Selling period × 스킬 매핑

| Period | 시기 | 핵심 활동 | 스킬 |
|---|---|---|---|
| 사전 기획 | 시즌 6~9개월 전 | 방향성 갱신, 시즌 전략 | `brand-roadmap` → `positioning-map` → `season-strategy` |
| 컨셉 잠금 | 시즌 3~5개월 전 | 무드/방향 → 컬러/원단/그래픽 잠금 | `concept-board` → `color-story` → `fabric-board` → `graphic-direction` → `fit-system` |
| 상품 디자인 | 시즌 2~3개월 전 | 키 아이템 + 라인업 확정 | `key-item-sheet` → `new-lineup` → `accessory-lineup` |
| **S1** (1~2월 / 7~8월) | 신학기 / 가을·겨울 시작 | 백팩, 가벼운 셋업 / 기능 외투 | `styling-board` (S1) → `lookbook` (S1 캠페인) |
| **S2** (3~4월 / 9~10월) | 본격 판매 | 전체 라인 확산 | `styling-board` (S2) + `imc-calendar` 주력 |
| **S3** (5월 / 11월) | 시즌 정점 | 베스트셀러 푸시 | `imc-calendar` 콘텐츠 + 광고 |
| **S4** (6~7월 / 12~1월) | 클리어런스 / 차기 티저 | 소진 + 다음 시즌 hint | `imc-calendar` |
| 종합 리뷰 | 시즌 종료 / 차기 킥오프 | 임원·전사 발표 | `season-deck` |

### 역할별 사용

| 역할 | 자주 쓰는 스킬 |
|---|---|
| 디자이너 | `concept-board`, `color-story`, `fabric-board`, `graphic-direction`, `key-item-sheet`, `fit-system` |
| MD (머천다이저) | `new-lineup`, `accessory-lineup`, `season-strategy`, `key-item-sheet`, `quality-gate` |
| 마케팅 | `imc-calendar`, `lookbook`, `social-carousel`, `email-marketing`, `magazine-poster` |
| 브랜드 디렉터 / CEO | `brand-roadmap`, `positioning-map`, `season-strategy`, `season-deck` |
| 생산팀 / 패턴실 | `fit-system`, `fabric-board`, `key-item-sheet` |
| 품질/검수 | `quality-gate` (5게이트), `critique` (디자인 리뷰) |

자세한 의존 그래프, 가상 27SS 풀 사이클 예시, 15개 의사결정 단계 매핑은 [심화 가이드 §6](./docs/open-design-overview.ko.md) 참조.

---

## 47개 스킬 카탈로그

### 패션 (15)

| 스킬 | 역할 |
|---|---|
| `fashion-color-story` | 시즌 팔레트 잠금 (Pantone TCX, 60/30/10, 카테고리×컬러 매트릭스) |
| `fashion-concept-board` | 컨셉/무드 보드 (잠금 *전* 탐색) |
| `fashion-lookbook` | 컬렉션 룩북 (시즌 캠페인, AI 룩, 제품 카드) |
| `fashion-styling-board` | 시즌 스타일링 보드 (4축 × 판기별) |
| `fashion-key-item-sheet` | 키 아이템 5-슬라이스 (Color/Detail/Pattern/Fabric/Artwork) |
| `fashion-graphic-direction` | 시즌 그래픽 방향성 (티셔츠 프린트, 자수, 심볼) |
| `fashion-fabric-board` | 시즌 패브릭 보드 (UNI/WOMEN 분리, 행택, 포인트 라벨) |
| `fashion-new-lineup` | 신규 시리즈/라인업 확장 |
| `fashion-positioning-map` | 2×2 브랜드 포지셔닝 맵 |
| `fashion-brand-roadmap` | 4티어 브랜드 피라미드 (North Star → Foundation) |
| `fashion-season-strategy` | 시즌 3대 전략 축 + 카테고리별 히어로 |
| `fashion-imc-calendar` | IMC 캘린더 (월별 히어로, 7단계 일원화) |
| `fashion-fit-system` | 핏 체계 (UNI/WOMEN, 카테고리별) |
| `fashion-accessory-lineup` | 액세서리 라인업 (가방/모자/신발) |
| `fashion-season-deck` | **시즌 종합 덱** (13개 모듈 통합 발표) |

> 모두 `category: fashion`. `season-deck`만 `mode: deck`(가로 스와이프 덱), 나머지 14개는 `mode: prototype`(단일 HTML).
> 모두 공통 이미지 엔진 `_shared/imagegen.md`(ima2 → ComfyUI → CSS 폴백 4-tier)을 참조.

### 마케팅/일반 (31)

- **프로토타입 (8)**: `web-prototype`, `saas-landing`, `dashboard`, `pricing-page`, `docs-page`, `blog-post`, `mobile-app`, `social-carousel`
- **덱 (3)**: `guizang-ppt` (매거진 가로 스와이프), `simple-deck`, `replit-deck` (8테마)
- **문서/업무 (10)**: `pm-spec`, `weekly-update`, `meeting-notes`, `eng-runbook`, `finance-report`, `hr-onboarding`, `invoice`, `kanban-board`, `team-okrs`, `magazine-poster`
- **특수/파워 도구 (10)**: `wireframe-sketch`, `critique` (5차원 리뷰), `tweaks` (라이브 CSS), `digital-eguide`, `email-marketing`, `motion-frames`, `gamified-app`, `dating-web`, `mobile-onboarding`, `sprite-animation`

### Impeccable (1)

UI 작업 전반 마스터. 35 reference + 15 scripts. 서브 명령:
```
craft / shape / audit / animate / bolder / quieter / overdrive / colorize /
delight / layout / typeset / harden / onboard / optimize / polish / teach /
document / extract / live
```

---

## 72개 디자인 시스템

| 카테고리 | 시스템 | 패션 활용 |
|---|---|---|
| AI / LLM (10) | claude, cohere, mistral-ai, minimax, together-ai, replicate, runwayml, elevenlabs, ollama, x-ai | AI 에이전시 톤 룩북 |
| 개발자 도구 (19) | cursor, vercel, linear-app, framer, expo, clickhouse, mongodb, supabase, hashicorp, posthog, sentry, warp, webflow, sanity, mintlify, lovable, composio, opencode-ai, voltagent | 사내 dashboard, runbook |
| 생산성 (10) | notion, figma, miro, airtable, superhuman, intercom, zapier, cal, clay, raycast | 내부 보고서, 임원 덱 |
| 핀테크 (7) | stripe, coinbase, binance, kraken, mastercard, revolut, wise | 가격 페이지, 인보이스 |
| **이커머스 (6)** | shopify, **airbnb**, uber, **nike**, starbucks, **pinterest** | **★ 룩북, 제품 PDP, 캠페인** |
| **미디어 (6)** | spotify, playstation, wired, theverge, meta, **xiaohongshu** | **★ 매거진 룩북, 소셜 카루셀** |
| 자동차 (6) | tesla, bmw, ferrari, lamborghini, bugatti, renault | 럭셔리 시즌 캠페인 |
| 기타 (6) | apple, ibm, nvidia, vodafone, resend, spacex | 미니멀 / 임원 |
| 스타터 (2) | default (Neutral Modern), warm-editorial | **★ 패션 에디토리얼 기본값** |

**패션 비즈니스 추천 조합**: `nike` / `airbnb` / `pinterest` (액티브웨어/라이프스타일/큐레이션) · `xiaohongshu` (K-young-casual 핵심 SNS) · `warm-editorial` (편집 기본) · `apple` (미니멀 발표).

---

## 지원 코드 에이전트

| CLI | 바이너리 | 지원 등급 |
|---|---|---|
| Claude Code | `claude` | **1급** (`stream-json` 타입드 이벤트) |
| GitHub Copilot CLI | `copilot` | 1급 (`json` 타입드 이벤트) |
| Cursor Agent | `cursor-agent` | 표준 (라인 버퍼) |
| Gemini CLI | `gemini` | 표준 |
| OpenCode | `opencode` | 표준 |
| Qwen Code | `qwen` | 표준 |
| Codex CLI | `codex` | 표준 |
| (폴백) | Anthropic API | BYOK |

---

## quality-gate 5게이트 (Brand Guidelines as Code)

| # | Gate | 적용 대상 | 실패 시 |
|---|---|---|---|
| 1 | **BTA 명시** (Basic/Trend/Accent + 비율 밴드) | sku, capsule, line_sheet, costing, volume_plan | block |
| 2 | **3B 착장 금지** (전체 basic + 흑백 + 매칭 차단) | look, visual, lookbook, campaign, ad_creative | block |
| 3a | **로고 형태/색상 변형 금지** | visual, merchandise, packaging | block |
| 3b | **컨텍스트 인식 컬러 allowlist** | visual, lookbook, ad_creative, pdp, social, packaging, deck, doc, report, briefing | warn |
| 4 | **프리셋 진실성** (모델/생성 도구 명시) | copy, doc, deck, press_release | block |
| 5 | **Evidence before Assertions** (완성 보고에 근거) | any_completion_report | warn |

> ⚠ **알려진 이슈 (2026-05-08)**: `quality-gate/rules.json`이 참조하는 `presets/wacky-willy/design-tokens.json` 파일이 아직 시스템에 없습니다. BTA 비율 등 일부 게이트가 실제 검증을 수행하려면 이 파일을 먼저 생성해야 합니다. [심화 가이드 §11](./docs/open-design-overview.ko.md) 참조.

---

## 모노레포 구조

```
open-design/
├── apps/
│   ├── daemon/             ← Express + SQLite + 에이전트 spawn (`od` bin)
│   ├── web/                ← Next.js 16 채팅 UI + iframe 렌더러
│   ├── desktop/            ← Electron 셸 (사이드카 IPC로 web URL 발견)
│   └── packaged/           ← 패키징 런처 (`od://` 진입 글루)
├── packages/
│   ├── contracts/          ← 순수 TS 웹/데몬 API 계약 (DTO, SSE 이벤트)
│   ├── sidecar/            ← 사이드카 런타임 프리미티브
│   ├── sidecar-proto/      ← Open Design 사이드카 비즈니스 프로토콜
│   └── platform/           ← OS 프로세스 프리미티브
├── tools/
│   ├── dev/                ← `pnpm tools-dev` (로컬 개발 라이프사이클)
│   └── pack/               ← `pnpm tools-pack` (패키징 빌드/릴리스)
├── e2e/                    ← Playwright UI 테스트 + Vitest 통합 테스트
├── skills/
│   ├── fashion/            ← 15개 패션 스킬 + _shared/imagegen.md
│   ├── marketing/          ← 31개 범용 스킬
│   └── impeccable/         ← UI 마스터 스킬
├── design-systems/         ← 72개 브랜드 시스템 (DESIGN.md)
├── assets/frames/          ← iPhone/Pixel/iPad/MacBook/브라우저
├── templates/              ← deck-framework 등
├── scripts/                ← sync-design-systems, postinstall, check-residual-js
├── docs/                   ← architecture, spec, roadmap, ★ open-design-overview.ko.md
└── .od/                    ← 런타임 데이터 (gitignore, 자동 생성)
```

전체 디렉토리 가이드는 [AGENTS.md](./AGENTS.md) 참조.

---

## 주요 스크립트

```bash
pnpm tools-dev         # daemon + web 동시 시작 (개발용)
pnpm build             # web 정적 빌드
pnpm typecheck         # 타입체크 + daemon 빌드 + 잔여 JS 검증
pnpm test              # 워크스페이스 테스트
pnpm test:e2e:live     # 라이브 E2E
pnpm test:ui           # Playwright UI 테스트
pnpm check:residual-js # TypeScript-first 정책 검증

# 디자인 시스템 동기화 (upstream `awesome-design-md`)
node --experimental-strip-types scripts/sync-design-systems.ts

# tools-dev 세부 명령
pnpm tools-dev start web
pnpm tools-dev run web --daemon-port 17456 --web-port 17573
pnpm tools-dev status --json
pnpm tools-dev logs --json
pnpm tools-dev inspect desktop status --json
pnpm tools-dev stop
```

> ⚠ **루트 라이프사이클 별칭 사용 금지**: `pnpm dev`, `pnpm dev:all`, `pnpm daemon`, `pnpm preview`, `pnpm start` 등은 추가/복원하지 마세요. 모든 로컬 라이프사이클은 `pnpm tools-dev`를 통과해야 합니다.

---

## 환경 베이스라인

- **런타임**: Node `~24`, `pnpm@10.33.2` (Corepack 권장 — `package.json`에 핀된 pnpm 버전 자동 사용)
- **TypeScript-first**: 새 entrypoint/모듈/스크립트/테스트/리포터/설정은 `.ts`로 작성
- **잔여 JS 제한**: 생성된 출력, 벤더 의존성, 명시적 호환성 빌드 산출물, `scripts/check-residual-js.ts` allowlist에 한정
- **데이터 위치**: 데몬은 `.od/`에 기록 (SQLite는 `.od/app.sqlite`, 에이전트 cwd는 `.od/projects/<id>/`, 저장된 렌더는 `.od/artifacts/`). `OD_DATA_DIR`로 재배치 가능

---

## 문서

| 문서 | 내용 |
|---|---|
| [docs/setup.ko.md](./docs/setup.ko.md) | **★ 셋업 가이드** — 다른 머신에서 처음부터 환경 구축 (3 리포 클론 + 의존성 + 심링크) |
| [docs/open-design-overview.ko.md](./docs/open-design-overview.ko.md) | **★ 심화 가이드** — 패션 비즈니스 매핑, 의사결정 단계, 시스템 정합성 점검 결과 |
| [docs/architecture.md](./docs/architecture.md) | 시스템 아키텍처 |
| [docs/spec.md](./docs/spec.md) | 스킬·디자인시스템 스펙 |
| [docs/skills-protocol.md](./docs/skills-protocol.md) | 스킬 프로토콜 |
| [docs/agent-adapters.md](./docs/agent-adapters.md) | 에이전트 어댑터 |
| [docs/modes.md](./docs/modes.md) | 모드 (prototype / deck / template) |
| [docs/references.md](./docs/references.md) | 디자인 참고 문헌 |
| [docs/roadmap.md](./docs/roadmap.md) | 로드맵 |
| [QUICKSTART.md](./QUICKSTART.md) | 빠른 시작 가이드 |
| [AGENTS.md](./AGENTS.md) | 에이전트 진입 가이드 (single source of truth) |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | 기여 가이드 |

---

## upstream 관계

본 fork는 [`nexu-io/open-design`](https://github.com/nexu-io/open-design)을 베이스로 K-young-casual 패션 비즈니스 컨텍스트로 재구성된 버전입니다.

**영감받은 프로젝트**:
- [`alchaincyf/huashu-design`](https://github.com/alchaincyf/huashu-design) — 디자인 철학, anti-AI-slop 체크리스트
- [`op7418/guizang-ppt-skill`](https://github.com/op7418/guizang-ppt-skill) — 매거진 PPT 스킬 (그대로 번들)
- [`OpenCoworkAI/open-codesign`](https://github.com/OpenCoworkAI/open-codesign) — 스트리밍 아티팩트 루프, iframe 미리보기
- [`multica-ai/multica`](https://github.com/multica-ai/multica) — 데몬 + 에이전트 감지 아키텍처

---

## 라이선스

Apache-2.0 — [LICENSE](./LICENSE) 참조
