# 47개 SKILL.md 패턴 분석 보고서

> 작업 기준일: 2026-05-14
> 대상: `system/skills/fashion/` (16개 스킬 + `_shared/imagegen.md`) + `system/skills/marketing/` (31개 스킬)
> 목적: K-패션 비즈니스 맥락 + 한국어 + LLM-agnostic 일괄 변환 규칙 도출

## 1. Frontmatter 공통 구조

모든 스킬은 YAML frontmatter로 다음을 선언합니다.

| 필드 | 타입 | 비고 |
|---|---|---|
| `name` | string | kebab-case 식별자 |
| `description` | string\|block | 1~3문장 용도 설명 + 트리거 힌트 |
| `triggers` | list[string] | 사용자가 입력하는 키워드. 영어 + 일부 중국어/한국어 |
| `od:` | object | OpenDesign 확장 메타데이터 |

`od:` 블록 표준 필드:
- `mode`: 거의 모두 `prototype`
- `platform`: `desktop` 또는 `mobile`
- `scenario`: `design` / `marketing` / `operations` / `personal`
- `category`: `fashion` (fashion 전용) — marketing 폴더는 별도 카테고리 없음
- `featured`: 정렬 우선순위 (숫자)
- `preview`: `{ type: "html", entry: "index.html" }`
- `design_system`: `{ requires: true, sections: [color, typography, layout, components] }`
- `example_prompt`: 예시 입력 (선택)

### Fashion vs Marketing 차이
| 항목 | Fashion 16개 | Marketing 31개 |
|---|---|---|
| `category: fashion` | 명시 | 없음 |
| `triggers` 한국어 키워드 | 있음 (브랜드 로드맵, 시즌 전략, 룩북 등) | 거의 없음 (중국어 키워드 일부만: 邮件营销, 三连发 등) |
| `example_prompt` 한국어 | 일부 (WACKYWILLY, 27SS 등) | 없음 (전 영어) |

## 2. 본문 공통 섹션 패턴

### Fashion 스킬 표준 구조 (5섹션)
1. **`## Output language`** — 한국어 등록 가이드 (SKU, BTA, 판기, 시즌 코드, 룩북 등 혼용 규칙)
2. **`## Typography`** — DESIGN.md WACKYWILLY 타입 시스템 + `--font-display-*` 토큰 바인딩
3. **`## Resource map`** — 폴더 구조 트리 (assets/, references/)
4. **`## Workflow`** — Step 0 (Pre-flight) → Step N (Self-check), 4~9단계
5. **`## Output contract`** — `<artifact>` 태그 형식

### Marketing 스킬 느슨한 구조 (2섹션)
1. **`## Workflow`** — Step 1~5 (또는 번호 없는 단순 단계). 일관성 부족.
2. **`## Output contract`** — `<artifact>` 태그 형식

### Workflow 단계 패턴
- **Fashion**: 항상 `Step 0 — Pre-flight` (assets/template.html 읽기 + references/ 읽기 + DESIGN.md 바인딩) → 마지막 `Step N — Self-check` (references/checklist.md 실행)
- **Marketing**: 1단계가 보통 "Read the active DESIGN.md", 중간에 "Pick", "Layout", "Write" 등, 마지막이 "Self-check"

## 3. LLM-agnostic화가 필요한 vendor-lock 표현

### Claude Code 자동 컨텍스트 주입 가정
| 원본 표현 | 등장 위치 | 문제점 |
|---|---|---|
| `Read the active DESIGN.md (injected above)` | 모든 스킬 | Claude Code의 SKILL 시스템이 DESIGN.md를 자동 컨텍스트에 주입한다고 가정. GPT/Gemini/Grok에서는 동작하지 않음 |
| `(injected above)` | 모든 스킬 | 위와 동일 |
| `the active DESIGN.md` | 모든 스킬 | 자동 "활성화" 가정 |

### Claude artifact 표준 의존
| 원본 표현 | 문제점 |
|---|---|
| `<artifact identifier="..." type="text/html" title="...">...</artifact>` | Claude.ai의 artifact 렌더링에만 동작. 다른 LLM은 일반 코드블록으로 처리 |

### OpenDesign 플랫폼 전용 기능
| 원본 표현 | 문제점 |
|---|---|
| `data-od-id="..."` | OpenDesign의 인라인 코멘트 모드 전용 속성 |
| `od:` frontmatter 블록 | OpenDesign 메타데이터 |
| `od://` 프로토콜 | OpenDesign 데스크탑 앱 전용 |

### Codex 환경 전용
| 원본 표현 | 등장 위치 | 문제점 |
|---|---|---|
| `$CODEX_HOME/generated_images/` | `fashion/_shared/imagegen.md` | OpenAI Codex CLI 환경 변수 |
| "built-in `image_gen` tool" | imagegen.md | OpenAI Codex 내장 도구 |
| `$CODEX_HOME/skills/.system/imagegen/scripts/` | imagegen.md | Codex skill 시스템 경로 |

### 디자인 시스템 특정 토큰
| 원본 표현 | 문제점 |
|---|---|
| `WACKYWILLY type system` | 특정 브랜드 명. 일반 사용자에게 의미 불명 |
| `--font-display-romance/street/play/report` | WACKYWILLY 전용 토큰 이름 |
| `Pretendard Variable` 가정 | 한국 사용자에게는 자연스러우나 명시 필요 |

## 4. 한국어/영어 혼용 현황

### Fashion 스킬 (이미 K-패션 인지)
- 본문 instruction: **거의 100% 영어**
- `Output language` 섹션: **명시적 한국어화 규칙** (SKU/BTA/UNI/WOMEN/S1~S4 등 산업용어 유지, 한국어는 noun-phrase 종결 `적용`, `전환`, `owner 확인` 형식)
- example_prompt: 한국어 사례 포함 (WACKYWILLY, 27SS, 가방/모자/신발 등)
- triggers: 한국어 키워드 풍부

### Marketing 스킬 (영어 중심)
- 본문 instruction: **100% 영어**
- `Output language` 섹션: **없음**
- example_prompt: **100% 영어**
- triggers: 중국어 키워드 일부 (한국어 거의 없음)
- 예시 카피: 서양/중국 D2C 톤 (Jerrod Lew, "input. iterate. ship.", EMBER FLARE 등)

## 5. references/ 폴더 구조

| 구조 패턴 | 스킬 |
|---|---|
| `SKILL.md` + `assets/template.html` + `references/layouts.md` + `references/checklist.md` | **Fashion 전부** |
| `SKILL.md` + `assets/template.html` + `references/layouts.md` + `references/checklist.md` + `references/trend-research.md` | fashion-color-story, fashion-lookbook |
| `SKILL.md` + `example.html` | **Marketing 대부분** (단순 구조) |
| `SKILL.md` + `assets/` + `references/` + `example.html` | marketing/mobile-app, simple-deck, web-prototype, replit-deck, tweaks, guizang-ppt |
| 기타 | guizang-ppt는 LICENSE, README.en.md, README.md 추가 |

## 6. K-패션 적용 거리감 분류 (Marketing 31개)

### 🟢 가까움 (작업량 낮음) — 13개
이미 패션/리테일 콘텐츠에 가까운 스킬. 영어→한국어 번역 + K-패션 예시 카피 교체 + LLM-agnostic화로 충분.

- `blog-post` — 패션 매거진/룩북 컬럼
- `magazine-poster` — 시즌 캠페인 포스터
- `social-carousel` — 인스타그램 캐러셀
- `motion-frames` — 키네틱 비주얼
- `email-marketing` — 신상품 발매 이메일
- `digital-eguide` — 스타일링 가이드 PDF
- `mobile-app` — 의류 쇼핑 앱
- `mobile-onboarding` — 패션 앱 온보딩
- `dashboard` — 시즌 매출 대시보드
- `replit-deck` — 시즌 기획 덱
- `simple-deck` — 캠페인 덱
- `finance-report` — 시즌 매출 보고서
- `sprite-animation` — 시즌 키 비주얼 애니메이션

### 🟡 중간 (작업량 중간) — 15개
약간의 재해석 필요. K-패션 비즈니스 운영 컨텍스트로 의미 전환.

- `pricing-page` — 멤버십/구독 페이지 (예: 정기배송, VIP 멤버십)
- `web-prototype` — 자사몰/팝업 페이지
- `wireframe-sketch` — 상세페이지 와이어프레임
- `kanban-board` — 시즌 진척 보드
- `team-okrs` — 시즌 OKR / KPI
- `weekly-update` — 위클리 시즌 보고
- `meeting-notes` — 품평회 / 시즌 회의 노트
- `pm-spec` — 신상품 PRD / 상품 기획서
- `docs-page` — 브랜드 내부 위키
- `eng-runbook` — 발주/생산 운영 매뉴얼
- `hr-onboarding` — 디자이너/MD 온보딩 가이드
- `invoice` — 거래명세서 / 발주서
- `tweaks` — 디자인 토큰 변경 도구
- `critique` — 룩북/상세페이지 검토 도구
- `guizang-ppt` — 시즌 합본 덱

### 🔴 멈 (재해석 비용 큼) — 3개
도메인 자체가 K-패션과 다름. 완전 재해석 필요.

- **`saas-landing`** → K-패션 신규 브랜드 런칭 랜딩 페이지 (또는 무신사 입점 페이지 톤)
- **`dating-web`** → K-패션 멤버십 / VIP 매칭 / 스타일 추천 대시보드
- **`gamified-app`** → K-패션 멤버십 마일리지 / 일일 스타일 챌린지 / 출석 리워드

## 7. 일괄 변환 규칙 초안

| 영역 | 원본 | 변환 후 |
|---|---|---|
| Frontmatter | `od:` 블록 유지 | 유지 (선택적 사용 표시) |
| Description | 영어 | 한국어로 번역 (산업 용어는 혼용) |
| Triggers | 영어 + 일부 중국어 | 영어 + 한국어 키워드 우선, 중국어 제거 |
| Workflow 구조 | Marketing은 느슨함 | Fashion 표준(Step 0 Pre-flight ~ Step N Self-check) 차용 |
| 본문 instruction | 영어 | 자연스러운 한국어로 번역 |
| `Output language` 섹션 | Fashion에만 있음 | Marketing 31개에도 도입 |
| `(injected above)` 표현 | 자동 주입 가정 | 명시적 파일 경로 + "환경에 따라 수동 참조" |
| `<artifact>` 태그 | Claude 전용 | "Claude 환경이면 `<artifact>`로 감싸고, 그 외 환경이면 표준 HTML 코드블록" |
| `data-od-id` | OpenDesign 전용 | "OpenDesign 환경에서 사용 시 추가, 그 외 환경에서는 일반 `id` 또는 생략" |
| `$CODEX_HOME` | Codex 전용 | "환경에 따라 사용 가능한 이미지 생성 도구의 출력 경로" |
| 예시 카피 (`example_prompt`) | 영어 + 서양 브랜드 | 한국 K-패션 브랜드 실사례 (마뗑킴, 마르디메크르디, 무신사 스탠다드 등) |

## 8. 결론 및 다음 단계

- Fashion 16개는 이미 K-패션 기반. **한국어화 보강 + LLM-agnostic화 + 일부 표현 정제**로 충분.
- Marketing 31개는 **전면 재구성**. K-패션 운영자 입장에서 즉시 활용 가능하도록.
- 동떨어진 3개(saas-landing, dating-web, gamified-app)도 K-패션 컨텍스트로 재해석 (사용자 합의 완료).

다음 산출물: `02-conversion-mapping.md` (LLM-agnostic 변환 매핑 상세), `03-k-fashion-glossary.md` (용어 사전), `04-marketing-recontextualization.md` (Marketing 31개 K-패션 재해석 가이드).
