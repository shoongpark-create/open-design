# 페이지 레이아웃 (Layouts)

10개의 페이지 골격. 각 골격은 완전한 페이스트 가능한 `<section>` 코드 블록. **새로 작성 금지** — 골격을 선택해서 페이스트하고 카피·이미지 경로만 교체.

> 원본 `guizang-ppt-skill`의 레이아웃 골격을 그대로 사용 — CSS·HTML 구조 그대로 K-패션 시즌 합본 덱·콜라보 제안서·IR 자료에 적용 가능. 이 K-패션 판에서는 **K-패션 사용 시나리오**만 추가.

상세 골격(`<section>` 코드 전문)은 원본 `marketing/guizang-ppt/references/layouts.md` 참조. 아래는 K-패션 사용 가이드.

---

## Pre-flight 클래스 체크리스트

레이아웃 골격을 사용하기 전 **반드시** `assets/template.html`의 `<style>` 블록에 다음 클래스가 정의돼있는지 확인. 누락 시 화면 망가짐.

필수 클래스:
`h-hero` / `h-xl` / `h-sub` / `h-md` / `lead` / `kicker` / `meta-row` / `stat-card` / `stat-label` / `stat-nb` / `stat-unit` / `stat-note` / `pipeline-section` / `pipeline-label` / `pipeline` / `step` / `step-nb` / `step-title` / `step-desc` / `grid-2-7-5` / `grid-2-6-6` / `grid-2-8-4` / `grid-3-3` / `grid-6` / `grid-3` / `grid-4` / `frame` / `frame-img` / `img-cap` / `callout` / `callout-src` / `chrome` / `foot`

## 테마 리듬 계획

**레이아웃 선택 전** 페이지별 테마 클래스 리스트 작성:

- `hero dark` — 표지·챕터 막·중요 페이지 (어두운 배경)
- `hero light` — 표지·챕터 막·중요 페이지 (밝은 배경)
- `light` — 본문 (밝은 배경)
- `dark` — 본문 (어두운 배경)

규칙:
- 3페이지 연속 동일 테마 금지
- 8페이지 이상이면 hero dark 1개 이상 + hero light 1개 이상 필수
- `light`만 또는 `dark`만 금지 — 호흡 위해 양쪽 사용
- 3-4페이지마다 hero 1개 삽입

---

## 10개 레이아웃 — K-패션 사용 매핑

### 1. 표지 (Hero Cover)
- **K-패션 사용**: 시즌 합본 표지, 콜라보 제안서 첫 페이지, IR 자료 표지
- **카피 패턴**: 브랜드 + 시즌 코드 + 받는 사람 + 발행일
- **예시**: "WACKYWILLY 27SS · 봄은 천천히, 그러나 분명히"

### 2. 챕터 막 (Act Divider)
- **K-패션 사용**: "1막 라인업 / 2막 캠페인 / 3막 매출 목표" 구분
- **카피 패턴**: `Act II` + 한 글자 또는 짧은 절 제목
- **예시**: "Act II · 캠페인" / "Act III · 매출 목표"

### 3. 데이터 대자보 (Big Numbers Grid)
- **K-패션 사용**: 시즌 KPI 6종 (SKU / PCS / 사입금액 / 정판율 / GMV / 컬러웨이)
- **stat-label**: 영문 모노 ("총 SKU", "1차 발주 PCS")
- **stat-nb**: 한국 단위 (`80 SKU`, `7.2 억`, `75%`)
- **stat-note**: 부연 (`UNI 42 + WOMEN 38`)

### 4. 좌문 우상 (Quote + Image)
- **K-패션 사용**: 시즌 컨셉 페이지, 키 아이템 페이지, 콜라보 메시지
- **좌측**: kicker + 대제목 + 리드 + callout (인용)
- **우측**: 룩 컷 또는 키비주얼 (16:10 또는 4:3, `max-height:56vh`)

### 5. 이미지 그리드 (Image Grid)
- **K-패션 사용**: 룩 컷 4장 비교, 매장 라운드 사진, 컬러웨이 어소트
- **고정**: `height:26vh` (절대 `aspect-ratio` 금지)
- **권장**: 4장 큰 이미지, 6장 작은 이미지 금지

### 6. 2단 파이프라인 (Pipeline)
- **K-패션 사용**: BTA 라인업 사이클, 발주 → 입고 워크플로우, IMC 캘린더
- **pipeline-label**: 라인 또는 단계명 ("WOMEN · 38 SKU · BTA 25/55/20")
- **step**: 5단계 권장 (3단계도 가능, 데이터 따라)

### 7. 질문 / 의문 페이지 (Hero Question)
- **K-패션 사용**: 챕터 마무리, 다음 시즌 전망, 콜라보 비전
- **카피 패턴**: 큰 질문 한 줄 + 리드 한 줄
- **예시**: "와키의 다음 시즌, 어떤 차별성을 들고 갈 것인가?"

### 8. 대인용 (Big Quote)
- **K-패션 사용**: 시즌 핵심 메시지, 브랜드 매니페스토, 콜라보 가치
- **세리프 큰 글씨**: 한글 우선 (Hahmlet, Noto Serif KR)
- **출처**: 디자인실장·대표·시즌 컨셉 보드 인용

### 9. Before / After (병렬 비교)
- **K-패션 사용**: 26SS vs 27SS, 옛 캠페인 vs 새 캠페인, 콜라보 전후
- **좌측**: 이전 시즌 / 옛 모델 (opacity 낮춤)
- **우측**: 이번 시즌 / 새 모델

### 10. 도판 + 사이드 텍스트 (Lead Image + Side Text)
- **K-패션 사용**: 키 아이템 상세, 매장 라운드 스토리, 디자이너 노트
- **도판**: 좌측 60%, 텍스트 우측 40%

---

## 이미지 비율 표준

원본 이상한 비율(예: 2592/1798) 금지. 표준 비율만 사용:

| 시나리오 | 권장 비율 |
|---|---|
| 좌문 우상 메인 이미지 (룩 컷) | 4:5 또는 16:10 + `max-height:56vh` |
| 이미지 그리드 (룩 4장 비교) | **고정 `height:26vh`** (aspect-ratio 금지) |
| 좌소상 + 우문 (디테일 컷) | 1:1 또는 3:2 |
| 풀스크린 키비주얼 | 16:9 + `max-height:64vh` |
| 도판 + 사이드 (디자이너 노트 톤) | 3:2 또는 3:4 |

**`align-self:end` 절대 금지** — 셀 하단 미끄러져 브라우저 도구바에 가려짐. grid + `align-items:start` 사용.

---

## 골격 코드 위치

10개 레이아웃의 완전 골격 `<section>` 코드는 원본 `guizang-ppt-skill`의 `references/layouts.md` 또는 본 K-패션 판의 `assets/example-slides.html`에서 직접 복사. 카피만 K-패션 톤으로 교체하면 충분.

각 레이아웃에 맞는 K-패션 카피 예시는 본 폴더의 `assets/example-slides.html` (와키윌리 27SS 시즌 합본 9페이지 예시) 참조.
