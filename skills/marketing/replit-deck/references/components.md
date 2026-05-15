# 컴포넌트 · replit-deck (K-패션)

슬라이드를 조립할 작은 공유 프리미티브. 모두 슬라이드 단위로 편집하지 마세요 (`[REPLACE]` 콘텐츠 슬롯 외). 컴포넌트의 CSS를 다시 쓰고 있다면 테마와 싸우는 중 — 다른 레이아웃을 고르세요.

---

## meta-bar

상단 row: 브랜드 / 컨텍스트 / 페이지. 모든 슬라이드가 보유.

```html
<div class="meta-bar">
  <span>[REPLACE] WACKYWILLY · 27SS · 디자인 기획 합본</span>
  <span>[REPLACE] 03 / 12</span>
</div>
```

- 모노, 대문자, 11px, tracked 0.1em, `--muted` 컬러.
- `vance`에서는 블랙 상단 바 (`.vance-top`) 안에 위치, 3-컬럼 메타.

**K-패션 메타 예시**:
- 디자인 기획 합본: `WACKYWILLY · 27SS · 디자인 기획 합본 · 디자인실`
- 콜라보 제안: `WACKYWILLY × MATIN KIM · 27SS 콜라보 제안 · CONFIDENTIAL`
- 시즌 결산: `WACKYWILLY · 27SS · 결산 · 영업기획 · 2027.10`
- 룩북 인덱스: `WACKYWILLY 27SS LOOKBOOK · II OF V · FEATURED`

---

## eyebrow

슬라이드 헤드라인 위 섹션 키커.

```html
<p class="eyebrow">섹션 키커 · 선택적 날짜</p>
<p class="eyebrow accent">컬러 변형</p>
```

- 기본: `--muted`.
- `.eyebrow.accent` → `--accent` 컬러. 슬라이드당 1회, 절제 사용.
- `atlas`/`holm`은 em-대시 프리픽스: `— &nbsp; CHAPTER ONE …`.

**K-패션 eyebrow 예시**:
- "시즌 컨셉"
- "BTA 라인업 미리보기"
- "27SS 시즌 KPI · 6개 지표"
- "— 콜라보 제안 — 사전 검토용"
- "— CHAPTER ONE — 5년의 그래픽 시대"
- "CAMPAIGN 27SS"

---

## 숫자 디스플레이 (`.num`, `.num-label`, `.num-delta`)

helix / world-* / atlas에서 가장 중요한 프리미티브.

```html
<div>
  <div class="num-label">시즌 GMV</div>
  <div class="num">12.4억</div>
  <div class="num-delta">▲ 34.6% YoY</div>
</div>
```

- `.num`은 디스플레이 폰트, 48~84px, line-height 1, 타이트 tracking.
- `.num-delta`는 **모노**, `--accent` 컬러. `▲` / `▼` 유니코드 — 이모지 절대 금지.
- 숫자를 컬러 배경 박스로 감싸지 마세요. 숫자 = 크로마틱 앵커.

**K-패션 숫자 단위**:
- 매출/GMV: `12.4억`, `1,240,000,000원`, `4.8억`
- 회전율: `8.2회`, `20회`
- 정판율: `78.4%`, `▲ 6.2 pp YoY`
- AOV: `98,400원`, `▲ 7,200원`
- 회원/SKU: `4,820명`, `48종`
- 시즌 비교: `▲ 34.6% YoY`, `▲ 14.6% QoQ`, `▲ 22% MoM`

---

## bevel-frame (bevel 전용)

대시드 네온 직사각형 + 코너 도트. 캠페인 / 룩북 이미지 프레이밍.

```html
<div class="bevel-frame">
  <!-- 제품 사진 또는 캠페인 이미지 -->
</div>
```

- 대각 코너에 `::before` / `::after` 네온 도트 이미 적용.
- 프레임을 네온으로 채우지 마세요. 프레임은 1px 대시드 보더; 채움은 이미지 또는 muted 배경.

---

## world-marker (world-* 전용)

섹션 타이틀 옆 인라인 작은 옐로우 사각.

```html
<span class="world-marker"></span>
```

- 14×14px, 플랫 컬러, 애니메이션 없음.
- 한 슬라이드에 최대 2회.

**K-패션 적용 예시**: 결산 리포트의 "총 매출" 옆, ESG 리포트의 "탄소 배출" 옆 등 핵심 지표 라벨 강조.

---

## atlas-dot (atlas 전용)

챕터 마크 또는 리스트 불릿로 사용하는 작은 버밀리언 디스크.

```html
<span class="atlas-dot"></span>
```

- 10×10px. 작은 변형 (6×6)은 인라인 `EXHIBIT 04.B` 태그용으로 수동 사이징.

**K-패션 적용**: 브랜드 히스토리 챕터 메타, 5주년 / 10주년 챕터 발표.

---

## bh-card (bluehouse 전용)

컨슈머-그리드 row의 컬러 카드.

```html
<div class="bh-card peach">…</div>
<div class="bh-card coral">…</div>
<div class="bh-card lavender">…</div>
```

- `peach` = 플랫 따뜻한 샌드.
- `coral` = 코랄→피치 135° 그라데이션.
- `lavender` = 쿨 라벤더→블루 180° 그라데이션.
- 내부: `flex column`, `justify-content: space-between` — 아이콘/메타 상단, 숫자/스탯 하단.
- 항상 `border-radius: 24px`, 4:3 비율 (레이아웃 사유로 명시적 깨기 외).

**K-패션 적용 예시 (VIP 멤버십)**:
- peach 카드: 평균 연 구매액 `280만원`
- coral 카드: VIP LTV `+47%`
- lavender 카드: 마일리지 적립률 `6.2%`
- navy 카드: 멤버십 단계 `4` (실버 / 골드 / 플래티넘 / VIP)

---

## progress + counter 크롬 (자동)

직접 작성하지 마세요. 씨드에 다음이 이미 있음:

```html
<div class="deck-progress" id="deck-progress"></div>
<div class="deck-counter"  id="deck-counter">1 / 3</div>
<div class="deck-hint">← / → · 스크롤 · 스와이프</div>
```

…그리고 `<script>`가 scroll / key에 자동 업데이트. 그대로 두세요.

---

## 콘텐츠 타입 크로스 레퍼런스

| 표현하려는 콘텐츠 | 프리미티브 |
|---|---|
| 단일 숫자 | `.num` 단독, 중앙 정렬 |
| 매트릭 row | `.num-label` + `.num` + `.num-delta`, grid-6 |
| 브랜드 워드마크 | meta-bar 안의 plain `<span>`, 세리프 디스플레이, 22~32px |
| 섹션 디바이더 | 자체 슬라이드의 중앙 정렬 `.h-hero` (같은 테마 — 중간 `data-theme` 교체 금지) |
| 컨텍스트 있는 콜아웃 스탯 | `.num` (큰) + `.lead` (작은) 페어링 |
| 풀쿼트 | `.h-xl` 디스플레이 세리프, `— 어트리뷰션` 모노 small-caps |

---

## 컴포넌트화 **금지** 항목

만들지 마세요: `.card.featured`, `.hero-v2`, `.metric-fancy`. 씨드를 부풀리고 덱이 "shadcn demo" 방향으로 드리프트합니다. 10 레이아웃 × 8 테마는 이미 50개 이상 슬라이드 아키타입으로 조합 — 충분합니다.

## K-패션 카피 토큰 (참고)

자주 쓰이는 K-패션 카피 토큰 예시:

```
시즌: 27SS · 26FW · 27FW
판기: S1 판기 / S2 판기 / S3 판기 / S4 판기
판기 시기: 5-6월 / 7월 / 8월 / 9월
카테고리: UNI · WOMEN · KIDS · ACC
BTA: Basic / Trend / Accent
채널: 무신사 · 29CM · W컨셉 · SSF샵 · 한섬몰 · 자사몰
플랫폼: 카카오톡 · 인스타 · 틱톡 · 유튜브 쇼츠 · 네이버 쇼핑라이브
지표: 정상판매율 / 정판율 / 재고자산회전율 / GMV / AOV / ROAS
조직: 디자인실 / MD실 / 마케팅실 / 영업기획 / 이커머스팀 / 그래픽팀
브랜드 사례: 마뗑킴 · 마르디 메크르디 · 아더에러 · 키르시 · 와키윌리 · 무신사 스탠다드
매거진: Vogue Korea · W Korea · Dazed Korea · Marie Claire Korea · 1st Look
```
