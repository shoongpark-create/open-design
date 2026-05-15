# 예시 (K-패션 시나리오)

서로 다른 테마에서 `replit-deck`이 K-패션 컨텍스트로 어떻게 보이는지 보여주는 손으로 쓴 예시. 각 파일은 self-contained HTML — 브라우저에서 바로 열어 ← / → 로 네비게이션.

| 파일 | 테마 | K-패션 시나리오 |
|---|---|---|
| [`example-helix.html`](example-helix.html) | `helix` | 와키윌리 27SS S1 판기 디자인 기획 합본 · 6개 시즌 KPI |

원본 영문 예시 4종 (helix · holm · atlas · bluehouse)는 `/Users/sherman/14. open design/system/skills/marketing/replit-deck/examples/`에 있습니다. K-패션 버전은 helix 1종만 우선 제공하며, 다른 테마(`holm` 콜라보 제안서, `atlas` 브랜드 히스토리, `bluehouse` VIP 멤버십 등)는 작업 진행에 따라 추가될 예정입니다.

다른 테마를 시도하려면:

1. `../assets/template.html`을 `example-<테마>.html`로 복사
2. `<body data-theme="helix">`를 원하는 테마로 변경
3. `../references/layouts.md`에서 그 테마에 맞는 레이아웃 paste
4. K-패션 카피로 `[REPLACE]` 토큰 교체

> **노트**: 예시의 숫자는 illustrative입니다. 실제 사용 시 스킬 워크플로(질문 폼 → 브리프 → 사용자의 진짜 매트릭)를 따릅니다.

## K-패션 시나리오별 추천 시작점

| 만들고 싶은 덱 | 추천 테마 | 시작 레이아웃 |
|---|---|---|
| 디자인실 시즌 기획 합본 | `helix` | L01 cover-hero → L02 kpi-row-6 → 본문 |
| 콜라보 제안서 | `holm` | L04 memo-hero-statement → L05 two-column-ask |
| 룩북 인덱스 / 화보 카탈로그 | `vance` | L06 gallery-plate × N |
| 시즌 캠페인 발표 | `bevel` | L07 campaign-cover → 본문 |
| 매출 결산 / IR 자료 | `world-dark` | L08 finance-hero-grid → L02 kpi-row-6 |
| ESG / 지속가능 리포트 | `world-mint` | section-divider → L02 kpi-row-6 |
| 시즌 합본 챕터 / 브랜드 히스토리 | `atlas` | L09 chapter-plate × N |
| 컨슈머 제품 쇼케이스 / VIP 라운지 | `bluehouse` | L10 pill-headline-cards-row |
