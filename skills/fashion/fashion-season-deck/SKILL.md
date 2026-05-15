---
name: fashion-season-deck
description: |
  K-패션 브랜드의 **시즌 디자인 기획안 덱**을 단일 HTML 파일로 생성하는 스킬입니다.
  시즌의 전체 디자인 플랜(브랜드 로드맵 → 포지셔닝 → 시즌 전략 → IMC → 컨셉 →
  컬러 → 소재 → 스타일링 → 키 아이템 → 신규 라인업 → 그래픽 → 핏 / 라벨 정비 →
  브랜드 전략)을 슬라이드 덱 형식으로 묶습니다. 와키윌리 27SS 내부 리뷰 덱
  스타일. 작은 패션 모듈들을 모두 합본하는 마스터 산출물입니다.
  사용자가 "시즌 덱", "디자인 기획안", "27SS 디자인 기획안", "시즌 종합 덱",
  "브랜드 시즌 합본", "season deck", "design plan deck"을 언급하면 활성화하세요.
triggers:
  - "시즌 덱"
  - "디자인 기획안"
  - "시즌 디자인 기획안"
  - "27SS 디자인 기획안"
  - "시즌 종합 덱"
  - "브랜드 시즌 합본"
  - "season deck"
  - "season design plan"
  - "design plan deck"
  - "season planbook"
  - "design concept deck"
od:
  mode: deck
  platform: desktop
  scenario: design
  category: fashion
  featured: 24
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
  example_prompt: "와키윌리(WACKYWILLY) 27SS 디자인 기획안 덱을 만들어주세요. 커버 + 컨텐츠 + 브랜드 로드맵 + 포지셔닝 맵 + 시즌 전략(UNI + ACC) + IMC 캘린더 + 시즌 컨셉 '90s STREET RAW' + 컬러 스토리 + 패브릭 보드(UNI/WOMEN/Functional) + 스타일링 보드 4개(S1-S4) × 라인 + 키 아이템 시트 7개 + 그래픽 디렉션 6 테마 + 핏 체계 정비 + 라벨 가이드 + 브랜드 볼륨 전략 + E.O.D."
---

# 패션 시즌 덱 스킬

K-패션 브랜드의 **시즌 디자인 기획안 덱**을 단일 HTML 파일로 생성합니다. 한국 어패럴 디자인 스튜디오가 시즌 시작 시점에 조립하는 커버-투-EOD 슬라이드 프레젠테이션입니다. 각 슬라이드는 패션 모듈 스킬(컨셉 보드, 컬러 스토리, 패브릭 보드, 스타일링 보드, 키 아이템 시트 등)을 재사용하거나 링크합니다. 덱은 **묶음(binder)**일 뿐, 새 산출물 세트가 아닙니다.

덱은 두 가지 질문을 답합니다.

1. **이 시즌의 전체 디자인 플랜은 무엇인가?** (슬라이드 순서대로)
2. **모듈 간 연결은?** (어느 슬라이드가 어느 산출물을 인용하는지, 상속된 토큰이 어떻게 흐르는지)

K-young-casual 시즌 기획 구조에 특화된 **`simple-deck` / `guizang-ppt`의 패션 도메인 아날로그**입니다. 덱 모드(수직 스크롤-스냅 또는 가로 키 내비게이션)와 인쇄용 섹션 분할을 사용합니다.

## 환경 호환성

이 스킬은 모든 LLM 환경에서 동일하게 사용할 수 있습니다.

- **Claude 환경(Claude.ai · Claude Code)**: 결과물을 `<artifact>` 태그로 감싸 출력합니다.
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 HTML 코드 블록으로 출력합니다.
- **OpenDesign 환경**: frontmatter의 `od:` 블록과 `data-od-id` 속성을 활용하면 인라인 코멘트·미리보기 기능을 사용할 수 있습니다.

이미지 생성 도구는 환경에 따라 다릅니다. 슬라이드별 이미지는 각 모듈 스킬의 기본 정책을 따릅니다(`../_shared/imagegen.md` 참고).

## 출력 언어 정책

사용자가 한국어로 작성하거나 브랜드/맥락이 한국 K-패션이라면, 산출물 카피는 **한국 패션 비즈니스 등록(register)**을 따릅니다.

- 슬라이드 챕터명, 섹션명은 **한국어 우선** (예: `시즌 컨셉`, `컬러 / 소재`, `스타일링`, `키 아이템`, `신규 라인업`, `그래픽`, `브랜드 구조 점검 / 재정비`).
- 슬라이드 메타데이터 라벨은 영문 가능: `data-source`, `data-source-version`, `via fashion-color-story` 등.
- 커버 슬라이드의 시즌명은 영문 표기 권장 (27SS, 27FW). 한글 병기 가능.
- E.O.D. 슬라이드는 한국 패션업계 컨벤션인 "감사합니다" 사용.
- 슬라이드 attribution chip은 영문 (`via fashion-color-story`) — 모듈 추적성 명확.

## 타이포그래피

프로젝트 루트의 `DESIGN.md` 타이포그래피 토큰을 사용하세요. **Pretendard Variable**을 본문·테이블·UI 기본 폰트로 둡니다.

시즌 덱은 **이사회/내부 리뷰 발표용**이므로 `--font-display-report`(Paperlogy, Wanted Sans, SUIT)를 기본값으로 사용합니다.

| 덱 톤 | 권장 디스플레이 폰트 토큰 |
|---|---|
| 내부 리뷰 / 운영 덱 (기본) | `--font-display-report` |
| 캠페인 론칭 덱 (외부 발표) | `--font-display-street` |
| 브랜드 IP / 캐릭터 시즌 | `--font-display-play` |
| 우먼 컨템포러리 / 로맨틱 시즌 | `--font-display-romance` |

임베드 슬라이드(`slide--embed`) 내부의 폰트는 해당 모듈 산출물의 원본 폰트를 **스코프 분리**해서 유지합니다(글로벌 CSS 누수 방지).

## 폴더 구조

```
fashion-season-deck/
├── SKILL.md
├── assets/
│   └── template.html
└── references/
    ├── slide-order.md   ← K-young-casual 시즌 덱 표준 슬라이드 순서
    ├── layouts.md       ← 덱 리듬 3종
    └── checklist.md
```

## 작업 흐름

### Step 0 — 사전 점검

1. `assets/template.html`을 처음부터 끝까지 읽으세요.
2. `../_shared/imagegen.md`를 읽으세요. 슬라이드별 이미지는 각 모듈의 기본 정책을 따릅니다.
3. `references/slide-order.md`를 읽으세요. K-young-casual 시즌 덱의 카노니컬 슬라이드 순서 (와키윌리 27SS 덱 기준).
4. `references/layouts.md`를 읽고 덱 리듬을 선택하세요.
5. `references/checklist.md`를 읽어 검수 기준을 인지하세요.
6. **이 시즌의 모든 활성 패션 산출물을 읽으세요** — 컨셉 보드, 컬러 스토리, 패브릭 보드, 스타일링 보드, 키 아이템 시트, 그래픽 디렉션, 신규 라인업, 핏 체계, 액세서리 라인업, 시즌 전략, IMC 캘린더, 포지셔닝 맵, 브랜드 로드맵. 각각이 하나 이상의 슬라이드가 됩니다.

### Step 1 — 덱 정보 수집

다음 항목이 사용자 입력에 빠져 있으면 첫 발견 폼에서 함께 물어보세요.

- 시즌명 (예: 27SS)
- 브랜드 + 부서 (예: 와키윌리 디자인실 · 통합 액세 & 슈즈 디자인실)
- **슬라이드 순서** — 카노니컬(기본 — `slide-order.md` 참조) 또는 커스텀
- **다루는 라인** — UNI / WOMEN / ACC / KIDS / 브랜드 전체
- **소스 산출물 리스트** — 어떤 기존 프로젝트 산출물을 묶을지. 모듈 산출물이 없다면 덱은 해당 슬라이드를 *스킵*하거나 *최소 슬라이드 + 플레이스홀더*를 생성. 정책 선언.
- **커버 스타일** — 풀블리드 사진 / 브랜드 컬러 블록 / 미니멀 타입
- **푸터 스타일** — 페이지 번호, 부서 표시, 브랜드 마크
- **출력 모드** — 단일 HTML / HTML + PDF 인쇄 의도

### Step 2 — 덱 리듬 선택

`references/layouts.md`에서 **1개**를 선택합니다.

- **Slide-stack with scroll-snap** (기본) — 수직 슬라이드 스택, 풀스크린, 화살표/스페이스 키 내비게이션
- **Horizontal scroll-snap** — 가로 슬라이드, 스와이프/화살표 내비게이션. 키노트 느낌
- **Print-A4-landscape** — A4 가로 페이지네이션, PDF 내보내기 최적화

선택한 리듬을 한 문장으로 선언하세요.

### Step 3 — 모듈 슬라이드 바인딩

`slide-order.md`의 모든 섹션에 대해 결정:

- **기존 산출물 사용** — 산출물의 HTML body를 매칭 슬라이드에 임베드. 모듈 CSS는 스코프 래퍼로 보존
- **최소 슬라이드 생성** — 산출물이 없을 때, 무엇이 빠졌는지 + 다음에 실행할 권장 모듈 스킬을 명시한 플레이스홀더 슬라이드
- **섹션 디바이더** — 주요 챕터 브레이크(컨셉 → 상품 → 전략)에 디바이더 슬라이드 삽입

**슬라이드 개수 타겟: 30~50** (풀 시즌 덱 기준). 시즌이 담지 않는 내용을 채우려고 패딩하지 마세요.

### Step 4 — 덱 구성

`assets/template.html`을 `index.html`로 복사한 뒤:

1. `[REPLACE …]` 토큰을 치환합니다.
2. `DESIGN.md` 토큰을 `:root`에 바인딩합니다.
3. 선택한 리듬에 따라 슬라이드를 조립합니다.

**필수 슬라이드 (순서대로 — 해당 시즌에 없으면 스킵):**

1. **커버** — 브랜드 마크 + 시즌 + 부서 + 일자
2. **CONTENTS** — `slide-order.md` 일치 목차
3. **브랜드 로드맵** — `fashion-brand-roadmap` 임베드
4. **포지셔닝 맵** — `fashion-positioning-map` 임베드
5. **시즌 전략** — `fashion-season-strategy` 임베드
6. **시즌 IMC** — `fashion-imc-calendar` 임베드
7. **시즌 컨셉 / 무드보드** — `fashion-concept-board` 임베드
8. **컬러 / 소재 (간지)** — 섹션 디바이더
9. **컬러 구성** — `fashion-color-story` 임베드
10. **컬러 플레이** — 프로젝트 자체 에디토리얼 컬러 스프레드
11. **소재 방향성** — `fashion-fabric-board` 임베드
12. **스타일링 (간지)** — 섹션 디바이더
13. **스타일링 보드** — `fashion-styling-board` 임베드 (S1~S4 × UNI/WOMEN 각각)
14. **키 아이템 (간지)** — 섹션 디바이더
15. **키 아이템 시트** — `fashion-key-item-sheet` 임베드 (아이템당 1슬라이드)
16. **신규 라인업 (간지)** — 섹션 디바이더
17. **신규 라인업** — `fashion-new-lineup` 임베드 (라인업당 1슬라이드)
18. **그래픽 (간지)** — 섹션 디바이더
19. **그래픽 방향성** — `fashion-graphic-direction` 임베드
20. **브랜드 구조 점검 / 재정비 (간지)** — 섹션 디바이더
21. **핏 체계** — `fashion-fit-system` 임베드
22. **메인 택 / 라벨 가이드** — 프로젝트 자체 슬라이드 (현행 vs 미래)
23. **브랜드 볼륨 성장 전략** — 마무리 전략 슬라이드
24. **E.O.D.** — End-of-deck 카드 (감사합니다 + 부서 표시)

### Step 5 — 자체 검수

`references/checklist.md`를 실행. 커버와 EOD는 필수. CONTENTS는 모든 슬라이드를 나열. 섹션 디바이더는 그룹 슬라이드 앞에 배치. 모든 임베드 슬라이드는 attribution chip(어느 소스 스킬에서 왔는지)을 푸터에 표시 → 시청자가 독립 산출물로 추적 가능해야 함.

## 한국 K-패션 브랜드 사례 (참고)

| 브랜드 / 부서 | 시즌 덱 컨벤션 | 슬라이드 개수 |
|---|---|---|
| **와키윌리 디자인실 (27SS)** | 풀 시즌 덱, 25개 챕터, 디바이더 강조 | 44 슬라이드 |
| **무신사 PB 디자인실** | 컨셉 + 라인업 + 가격 + 채널 위주, 운영 중심 | 28~32 슬라이드 |
| **마뗑킴 디자인실** | 미니멀 텍스트 덱, 무드 이미지 최소 | 25~30 슬라이드 |
| **아더에러 시즌 덱** | 컨셉추얼 풀블리드, 글로벌 발표용 | 30~40 슬라이드 |
| **ACC 전담 부서 (모자 / 가방 / 신발)** | ACC-only 변종 (스타일링 보드 단축, 액세서리 라인업 확장) | 20~30 슬라이드 |

위 사례는 슬라이드 개수 / 챕터 구성 참고용입니다. 실제 산출물은 사용자 브랜드의 시즌 산출물 현황에 맞춰 조정하세요.

## 한국 패션기업 조직 R&R 메모

시즌 덱은 **디자인실 전체 + 대표**가 만드는 종합 산출물입니다. 검토 흐름:

- **디자인 실장**: 덱 전체 조립, 챕터 순서, 모듈 산출물 락 상태 확인
- **시즌 디자이너 (UNI/WOMEN/ACC 각 담당)**: 각자 담당 모듈 슬라이드 검증
- **MD 실장**: 시즌 전략 + 라인업 + 가격 슬라이드 정합 검토
- **마케팅 실장**: IMC + 컨셉 보드 + 키비주얼 정합 검토
- **생산 / 소재 담당**: 패브릭 보드 + 핏 체계 + 라벨 가이드 슬라이드 검토
- **대표 / 브랜드 디렉터**: 브랜드 로드맵 + 포지셔닝 + 브랜드 볼륨 성장 전략 최종 승인

산출물 헤더에 `status: locked` 표시 시 모든 부서 실장의 확인 + 대표 승인 완료를 의미합니다.

## 시즌 사이클 내 위치

시즌 덱은 시즌 시작 **1개월 전**, 모든 시즌 산출물 락 이후에 만드는 **합본 마스터 산출물**입니다.

```
[fashion-brand-roadmap] (영구)
[fashion-positioning-map] (시즌 시작 6개월 전)
[fashion-season-strategy] (시즌 시작 6개월 전)
[fashion-concept-board] (시즌 시작 5개월 전)
[fashion-color-story], [fashion-fabric-board] (시즌 시작 4~5개월 전)
[fashion-styling-board] (시즌 시작 3~4개월 전)
[fashion-new-lineup], [fashion-key-item-sheet] (시즌 시작 3개월 전)
[fashion-graphic-direction] (시즌 시작 2~3개월 전)
[fashion-lookbook] (시즌 시작 1~2개월 전)
[fashion-imc-calendar] (시즌 시작 2개월 전)
★ [fashion-season-deck] (시즌 시작 1개월 전 — 모든 산출물 종합 후) ★
```

덱이 락된 후, 시즌 진행 중 변경된 모듈 산출물이 있다면 attribution chip의 `data-source-version`을 업데이트해 추적성을 유지하세요.

## 출력 규약

단일 HTML 문서를 출력하세요.

- **Claude 환경(Claude.ai · Claude Code)**:
  ```
  <artifact identifier="fashion-season-deck-slug" type="text/html" title="시즌 디자인 기획안 덱 제목">
  <!doctype html>
  <html>...</html>
  </artifact>
  ```
- **그 외 환경(ChatGPT · Gemini · Grok · 일반 채팅)**: 표준 마크다운 HTML 코드 블록.

출력 앞에 한 문장 요약(예: "와키윌리 27SS 디자인 기획안 덱을 Slide-stack with scroll-snap 리듬, 44 슬라이드로 작성했습니다."), 뒤에는 아무것도 덧붙이지 마세요.
