# 레이아웃 · replit-deck (K-패션)

10개 paste-ready `<section class="slide">` 블록. 각 레이아웃에는 **테마 페어링** 노트가 있습니다 — 일부 레이아웃은 특정 테마에서만 보기 좋습니다. 블록 복사 → `[REPLACE]`를 실제 K-패션 카피로 교체 → `data-screen-label` 태그.

모든 레이아웃은 `<body data-theme="…">`이 이미 설정되어 있다고 가정합니다.

원본 영문 레이아웃 라이브러리는 `/Users/sherman/14. open design/system/skills/marketing/replit-deck/references/layouts.md`를 참조하세요. 본 문서는 K-패션 시나리오 매핑과 카피 가이드만 담습니다.

---

## L01 · cover-hero (모든 테마)

덱 시작. 상단 절반에 큰 디스플레이, 상단 메타 바.

**K-패션 카피 예시 (와키윌리 27SS 디자인 기획 합본 · helix)**:
- 메타: "WACKYWILLY · 27SS · 디자인 기획 합본" / "S1 판기 / 디자인실"
- eyebrow: "디자인실 내부 합의용"
- h-hero: "27SS, 윌리가 봄을 데려옵니다."
- lead: "캐릭터 IP 캡슐 + 멀티채널 동시 발매. 정판율 목표 75%+, 시즌 GMV 12억 목표."

**테마 노트**:
- `helix`: 헤드라인 타이트, muted 서브헤드, 장식 없음.
- `holm`: 키커는 영문 대문자 모노 `var(--accent)`. 헤드라인 `--font-serif-display`. K-패션 콜라보 제안에 최적.
- `vance`: 일반 메타 바 대신 `.vance-top`로 3-컬럼 메타.
- `bevel`: 헤드라인을 `<span class="h-display-y2k">…</span>`로 감싸기 (이탤릭 Y2K).
- `atlas`: 표지에는 L09 `chapter-plate` 사용.
- `bluehouse`: 표지에 L10 `pill-headline-cards-row` 사용 — 표지가 카드 row 자체.

---

## L02 · kpi-row-6 (helix · atlas · world-*)

6개 큰 숫자를 3×2 그리드.

**K-패션 카피 예시 (와키윌리 27SS 시즌 KPI)**:
- 시즌 GMV `12.4억` ▲ 34.6% YoY
- 정상판매율 `78.4%` ▲ 6.2 pp YoY
- 재고자산회전율 `8.2회` ▲ 1.8회 YoY
- AOV `98,400원` ▲ 7,200원
- 신규 SKU `48종` (Basic 18 / Trend 22 / Accent 8)
- 회원 비중 `54%` ▲ 22 pp YoY

**테마 노트**:
- `helix`: 모든 delta는 `var(--accent)` 블루, 모노 패밀리. 가장 적합.
- `atlas`: `num` 폰트를 세리프 디스플레이로. delta 도트 → 버밀리언. 행 사이 hairline 디바이더.
- `world-dark` / `world-mint`: 라벨 컬러를 `var(--accent)` 옐로우로. 한 표준 라벨 앞에 `<span class="world-marker"></span>` 추가.

---

## L03 · split-hero-metric (helix)

좌측 다크 카드(시즌 GMV), 우측 5개 라인 매트릭. `helix` 전용.

**K-패션 카피 예시**:
- 좌측 큰 카드: `시즌 GMV` `12.4억` ▲ 34.6% YoY, 진행률 바 `26SS / TARGET 13.5억`
- 우측 라인:
  - 정상판매율 — `78.4%` ▲ 6.2 pp
  - 재고자산회전율 — `8.2회` ▲ 1.8회
  - 신규 회원 — `+4,820명` ▲ 244%
  - 캐리오버 비중 — `18%` ▼ 8 pp
  - 카카오 채널 친구 — `+1.8만` ▲ 320%

다른 테마로 포팅 금지 — 다크 카드 + 블루는 helix 특유의 잉크 + 일렉트릭 블루에 의존.

---

## L04 · memo-hero-statement (holm)

세리프 진술 좌측, 충분한 호흡. 팀 명 좌하단, 도메인 우하단.

**K-패션 카피 예시 (콜라보 제안서 표지 · holm)**:
- 워드마크: `WACKYWILLY`
- 메타: `메모 04 / 2027.05`
- 키커: `— 27SS 콜라보 제안 — 사전 검토용`
- h-xl: "윌리 캐릭터 IP와 [PARTNER] 시그니처의 만남, 27SS 콜라보 캡슐 제안."
- lead: "본 제안서는 양사 검토용 사전 자료입니다. 매출 시뮬레이션, 비용 분담, 일정 합의는 후속 미팅에서."
- 푸터: `김도현 — 브랜드 디렉터 · 박서연 — 디자인 실장 · WACKYWILLY.CO.KR`

---

## L05 · two-column-ask (holm)

콜라보 제안 / IR / 사업 메모에서 "요청 / 제안" 슬라이드. 좌측 자금/자원 할당, 우측 팀 카드.

**K-패션 카피 예시 (콜라보 비용 분담 · holm)**:
- 키커: `04 — 콜라보 비용 분담`
- h-xl: "27SS 콜라보 캡슐 — 양사 균등 분담 · 발매 7월 1일."
- USE OF FUNDS:
  - `52%` — 디자인 & 샘플 (양사 디자인실 공동 작업, 와키윌리 디자인 주도)
  - `28%` — 캠페인 & 인플루언서
  - `12%` — 발주 & 생산
  - `8%` — 룩북 / 화보 촬영
- TEAM 카드: `김도현 — 브랜드 디렉터` / `박서연 — 디자인 실장` / Direct 연락처

---

## L06 · gallery-plate (vance)

블랙 상단 바, 룩 / 화보 / 의상 컷, 블랙 하단 바. 룩북 인덱스 / 카탈로그.

**K-패션 카피 예시 (룩북 인덱스 · vance)**:
- 상단 바: `WACKYWILLY 27SS LOOKBOOK · II OF V · FEATURED · © 2027 WACKYWILLY`
- 키커: `CATALOG — LOOK 12`
- h-hero (세리프): "Untitled<br><em>(윌리, 봄)</em>"
- 화보 영역: [4:5 룩 이미지]
- 하단 바: "Untitled (윌리, 봄), 2027. 워시드 데님 셋업, 시그니처 그래픽 티. 168 × 92 × 92 cm." / `PHOTOGRAPHY — 김해은`

---

## L07 · campaign-cover (bevel)

거대한 Y2K 디스플레이 워드마크, 제품 사진 우측, 대시드 네온 프레임.

**K-패션 카피 예시 (27SS 시즌 캠페인 · bevel)**:
- 메타: `CAMPAIGN 27SS / 01 / 05`
- 거대한 워드마크: `wackywilly` (Y2K 이탤릭)
- 가는 선 + eyebrow: `— SHOT ON FILM`
- lead: "성수 × 도쿄. 스타일링 김유진. 9가지 캐릭터 IP 캡슐, 27SS 시즌 캠페인."
- eyebrow 좌하단: `@WACKYWILLY.OFFICIAL`
- 우측 bevel-frame: [캠페인 이미지 4:5]

---

## L08 · finance-hero-grid (world-dark / world-mint)

좌측 타이틀, 우측 3개 사진 타일, 하단 3-셀 매출 스트립 (옐로우 라벨).

**K-패션 카피 예시 (27SS 시즌 결산 · world-dark)**:
- 메타: `결산 · 27SS · 영업기획 · 2027.10`
- h-hero: "27SS 시즌<br>결산 리포트"
- lead: "한국 영캐주얼 시장 컨템포러리 영역, 27SS 시즌 종합 결산. 정판율과 회전율 호조, S4 판기 캐리오버 의사결정 완료."
- 우측 3 타일: `상의 +24%` / `아우터 -8%` / `ACC +56%`
- 하단 스트립:
  - `총 GMV` `42.8억`
  - `정상판매율` `+78.4%`
  - `TOP 카테고리` "WOMEN 원피스 `+34%` | UNI 그래픽 `+62%`"

---

## L09 · chapter-plate (atlas)

2-컬럼 챕터 오프너, 거대한 세리프 타이틀 좌측, 아카이브 화보 우측, 데이터 스트립 하단.

**K-패션 카피 예시 (와키윌리 5주년 챕터 · atlas)**:
- 메타: `● THE WACKYWILLY ATLAS · CHAPTER 01 · 04 / 24`
- 키커: `— CHAPTER ONE — 5년의 그래픽 시대`
- h-hero (세리프): "그래픽 IP의<br>시대<span style="color: var(--accent);">.</span>"
- lead: "2022년 첫 캐릭터 발매부터 27SS 윌리 캡슐까지, 와키윌리는 K-아이돌 그래픽 IP를 일상으로 가져오는 브랜드로 자리잡았다."
- 우측 [아카이브 화보] — `PLATE I` 라벨 좌상, `EXHIBIT 04.B` 태그 우상
- 하단 캡션: "첫 캡슐 룩북, 2022년 가을 작업실."
- 하단 데이터 스트립:
  - `시기` `2022–2027` "첫 캡슐부터 5주년까지."
  - `정판율` `78%` (액센트 컬러) "5년 평균, 업계 60% 대비."
  - `시즌` `Twelve` "2022FW부터 27SS까지 12개 시즌."

---

## L10 · pill-headline-cards-row (bluehouse)

굵은 헤드라인 + 인라인 알약, 3-카드 row 하단. 컨슈머 / 콜라보 발매 / VIP 라운지.

**K-패션 카피 예시 (VIP 멤버십 리뉴얼 · bluehouse)**:
- 메타: 와키윌리 ⌂ 워드마크 / `01 / 06`
- h-hero: "VIP 멤버십을<br>새롭게 <span style="background: var(--card-peach);">다듬었습니다</span>"
- 3-카드 row:
  - **peach 카드**: 사진 + `$2.4M → 280만원` / "VIP 등급 평균 연 구매액"
  - **coral 카드** (그라데이션): `+47%` "VIP 멤버 평균 LTV, 일반 회원 대비"
  - **lavender 카드**: `6.2%` "VIP 마일리지 적립률" + **navy 카드**: `4` "단계별 혜택 (실버/골드/플래티넘/VIP)"

---

## Quick-pick 치트 시트

| 만들고 싶은 것 | 사용 레이아웃 |
|---|---|
| 표지, 중립적 | L01 cover-hero |
| 표지, 내러티브 / 히스토리 | L09 chapter-plate |
| 표지, 캠페인 / 룩북 | L07 campaign-cover 또는 L10 pill-cards-row |
| 시즌 KPI 6개 | L02 kpi-row-6 |
| 시즌 GMV 1개 + 보조 매트릭 | L03 split-hero-metric (helix only) |
| 메모형 히어로 진술 (콜라보 제안) | L04 memo-hero-statement (holm) |
| 팀 + 비용 분담 | L05 two-column-ask (holm) |
| 룩 / 화보 / 의상 컷 피처 | L06 gallery-plate (vance) |
| 시즌 결산 데이터-인텐시브 | L08 finance-hero-grid (world-*) |
| 굵은 진술 + 컨슈머 카드 | L10 pill-headline-cards-row (bluehouse) |

## K-패션 시나리오별 슬라이드 시퀀스 예시

**디자인 기획 합본 (helix, 8슬라이드)**
1. L01 cover-hero — "27SS, 디자인 기획 합본"
2. L02 kpi-row-6 — 시즌 KPI 6개
3. 본문 — 시즌 컨셉 / 키워드
4. 챕터 디바이더 — "라인업 미리보기"
5. 본문 3-up — BTA × 3 컬럼
6. L06 (단순화) — 시그니처 룩 미리보기
7. 본문 — 1차 품평회 일정
8. 마무리 — 다음 단계

**콜라보 제안서 (holm, 10슬라이드)**
1. L04 memo-hero-statement — 표지 / 진술
2. 본문 — 양사 소개
3. L09 chapter-plate (단순화) — "왜 이 콜라보"
4. L02 kpi-row-6 — 양사 시너지 KPI
5. 본문 3-up — 콜라보 아이템 3종
6. 본문 — 파이프라인 / 일정
7. L05 two-column-ask — 비용 분담
8. 본문 — 매출 시뮬레이션
9. 본문 — 리스크 / 안전장치
10. 마무리 — 결정 요청 / 일정
