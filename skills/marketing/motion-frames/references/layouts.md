# K-패션 시즌 키비주얼 모션 — 컴포지션 패턴

이 스킬의 모션은 **4가지 표준 컴포지션 패턴** 중 하나를 선택합니다. 시드의 레이어 구조(스테이지 + 동심원 링 + 포컬 마크 + 링 라벨 + 헤드라인 + 크롬)는 그대로 두고, **포컬 마크와 헤드라인 톤**만 패턴별로 교체합니다.

**작업 흐름**: 시드를 복사 후, 아래 패턴 1개를 골라 `<div class="focal">` 안의 SVG와 헤드라인, 링 라벨 키워드를 교체.

OpenDesign 환경에서는 `data-od-id` 속성으로 인라인 코멘트. 그 외 환경에서는 `id` 속성 사용.

**하드 룰 (모든 패턴 공통)**:
- JavaScript 절대 금지 (`@keyframes` only)
- 외부 이미지 URL 금지 (인라인 SVG + CSS만)
- 최소 3개 레이어가 다른 속도로 회전
- 핵심 요소는 가운데 70% 안 (9:16 재크롭 대응)
- 액센트는 헤드라인 이탤릭 단어 1개에만
- 루프 길이 8~16s (권장 12s)

## 클래스 인벤토리

> `chrome` `chrome.top` `chrome.bot` `meta-tl` `issue` `stage` `composition` `ring` `ring.r2~r4` `ring-labels` `focal` `focal-dot` `headline` `headline.em` `headline.accent` `baseline`

이 목록에 없는 클래스가 필요하면 시드의 `<style>` 블록에 먼저 정의하세요.

---

## 패턴 A — 시즌 키비주얼 모션 (기본값)

시즌 키워드들이 링 위에서 회전, 중앙에는 추상 모노그램 또는 식물 모티프. **자사몰 메인 슬라이드**, **인스타 릴스 인트로** 표준.

K-패션 활용: **마뗑킴 27SS BLOOM**, **마르디 봄 시즌 KV**, **시야쥬 정제된 시즌 영상**.

```html
<!-- 포컬 마크 — 추상 globe 또는 시즌 모티프 (시드 기본값 그대로) -->
<div class="focal" data-od-id="focal">
  <svg viewBox="0 0 200 200" aria-hidden="true">
    <!-- 시드의 globe SVG 그대로 -->
  </svg>
</div>

<!-- 링 라벨 — 시즌 키워드 8개 (한국어 + 영문 + 다국어 혼용) -->
<div class="ring-labels" aria-hidden="true">
  <span class="l1"><i>봄</i></span>
  <span class="l2"><i>BLOOM</i></span>
  <span class="l3"><i>Quietly</i></span>
  <span class="l4"><i>ivory</i></span>
  <span class="l5"><i>sage</i></span>
  <span class="l6"><i>ash</i></span>
  <span class="l7"><i>Linen</i></span>
  <span class="l8"><i>27SS</i></span>
</div>

<!-- 헤드라인 -->
<div class="headline">
  <span class="em">Bloom</span> <span class="accent">Quietly.</span> 봄, 천천히 피어나다.
</div>
```

**언제 쓰나**: 시즌 시작 1~2개월 전. 자사몰 메인 슬라이드, 인스타 릴스, 무신사 라이브 인트로로 다용도 활용.

**바꾸는 부분**: 헤드라인(영문 슬로건 + 한국어 1줄), 링 라벨 키워드 5~8개(시즌 컨셉 키워드).

**디스플레이 폰트 권장**: `--font-display-romance` (Hahmlet, Cormorant Garamond) — 미니멀·로맨틱 톤.

---

## 패턴 B — 캠페인 영상 포스터 (모델 실루엣 중심)

중앙에 모델 실루엣 (인라인 SVG로 단순화), 캠페인 카피를 회전 라벨로. **룩북 영상 / 캠페인 영상의 포스터 프레임**.

K-패션 활용: **마뗑킴 룩북 영상 인트로**, **아더에러 글로벌 캠페인**, **마르디 비주얼 캠페인**.

```html
<!-- 포컬 마크 — 모델 실루엣 (단순화된 인라인 SVG) -->
<div class="focal" data-od-id="focal" style="animation-duration: 60s; animation-direction: alternate;">
  <svg viewBox="0 0 200 280" aria-hidden="true">
    <!-- 단순화된 인체 실루엣 -->
    <path d="M 100 30 Q 88 30 88 44 L 88 56 Q 80 60 80 76 L 80 120
             Q 76 130 76 150 L 76 200 Q 80 220 88 240 L 92 270
             L 108 270 L 112 240 Q 120 220 124 200 L 124 150
             Q 124 130 120 120 L 120 76 Q 120 60 112 56 L 112 44
             Q 112 30 100 30 Z"
          fill="rgba(26,24,22,0.65)" stroke="rgba(26,24,22,0.85)" stroke-width="0.8"/>
    <!-- 흐르는 천 -->
    <path d="M 80 120 Q 60 160 70 220 Q 78 240 76 200 Z"
          fill="rgba(26,24,22,0.18)"/>
    <path d="M 120 120 Q 140 160 130 220 Q 122 240 124 200 Z"
          fill="rgba(26,24,22,0.18)"/>
  </svg>
</div>

<!-- 링 라벨 — 캠페인 카피의 일부 절을 회전 -->
<div class="ring-labels" aria-hidden="true">
  <span class="l1"><i>봄의 가장 조용한 옷</i></span>
  <span class="l2"><i>QUIET ENERGY</i></span>
  <span class="l3"><i>27SS CAMPAIGN</i></span>
  <span class="l4"><i>한 호흡</i></span>
  <span class="l5"><i>같은 자리</i></span>
  <span class="l6"><i>SS27</i></span>
</div>

<!-- 헤드라인 -->
<div class="headline">
  <span class="em">Quiet</span> <span class="accent">Energy.</span> 정제된 하루, 그 자체.
</div>
```

**언제 쓰나**: 룩북 촬영 직후, 시즌 캠페인 영상 인트로. 모델 실루엣이 핵심 비주얼.

**바꾸는 부분**: 실루엣 SVG(어깨/허리 라인을 시즌 키 룩에 맞춤), 회전 라벨(캠페인 카피의 절·구), 헤드라인(이탤릭 + 한국어).

**디스플레이 폰트 권장**: `--font-display-clean` (Instrument Serif) — 매거진 톤.

---

## 패턴 C — 브랜드 인트로 (워드마크 중심)

워드마크가 중앙, 브랜드 슬로건이 회전. **자사몰 첫 진입 영상**, **무신사 라이브 인트로 5초 컷**.

K-패션 활용: **마뗑킴 워드마크 인트로**, **와키윌리 캐릭터 IP 인트로**, **키르시 체리 워드마크**.

```html
<!-- 포컬 마크 — 워드마크 (디스플레이 폰트 큰 텍스트) -->
<div class="focal" data-od-id="focal" style="display: grid; place-items: center; animation: none;">
  <div style="font: italic 700 64px/1 var(--font-display); color: var(--ink); letter-spacing: -0.01em; text-align: center;">
    [REPLACE matin kim]<span style="color: var(--accent);">.</span>
  </div>
</div>

<!-- 링 라벨 — 브랜드 슬로건 키워드 6~8개 -->
<div class="ring-labels" aria-hidden="true">
  <span class="l1"><i>쿨하게</i></span>
  <span class="l2"><i>매일</i></span>
  <span class="l3"><i>EVERYDAY</i></span>
  <span class="l4"><i>한 호흡</i></span>
  <span class="l5"><i>QUIET</i></span>
  <span class="l6"><i>27SS</i></span>
  <span class="l7"><i>seoul</i></span>
  <span class="l8"><i>since 2015</i></span>
</div>

<!-- 헤드라인 -->
<div class="headline">
  <span class="em">쿨하게,</span> <span class="accent">매일.</span> Daily, in your way.
</div>
```

**언제 쓰나**: 브랜드 인트로 영상 5~8초. 자사몰 첫 진입, 무신사 입점 페이지 첫 컷, 매장 입구 디스플레이.

**바꾸는 부분**: 워드마크 텍스트(브랜드명, `.dot` 액센트 위치), 슬로건 키워드, 헤드라인 한 줄.

**디스플레이 폰트 권장**: 브랜드 워드마크 폰트 (마뗑킴 = Hahmlet 이탤릭, 와키윌리 = Black Han Sans, 마르디 = Hahmlet 또는 본명조).

---

## 패턴 D — 팝업 입구 디스플레이 (장소·시간 카운트다운)

팝업 일자·장소·키워드를 회전, 중앙은 팝업 그래픽 또는 매장 좌표. **팝업 입구 모니터**, **인스타 릴스 팝업 안내**.

K-패션 활용: **성수동 BLOOM 팝업 입구 디스플레이**, **더현대 마뗑킴 팝업 안내 영상**.

```html
<!-- 포컬 마크 — 팝업 좌표/지도 또는 시그니처 그래픽 -->
<div class="focal" data-od-id="focal">
  <svg viewBox="0 0 200 200" aria-hidden="true">
    <!-- 단순화된 지도 좌표 / 핀 -->
    <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(26,24,22,0.4)" stroke-width="0.7" stroke-dasharray="2 4"/>
    <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(26,24,22,0.5)" stroke-width="0.7"/>
    <circle cx="100" cy="100" r="30" fill="rgba(192,86,59,0.10)" stroke="var(--accent)" stroke-width="1.2"/>
    <!-- 중앙 핀 -->
    <path d="M 100 80 Q 86 80 86 96 Q 86 110 100 120 Q 114 110 114 96 Q 114 80 100 80 Z"
          fill="var(--accent)"/>
    <circle cx="100" cy="96" r="5" fill="white"/>
    <!-- 격자 -->
    <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(26,24,22,0.2)" stroke-width="0.5"/>
    <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(26,24,22,0.2)" stroke-width="0.5"/>
  </svg>
</div>

<!-- 링 라벨 — 팝업 일정 + 장소 + 키워드 -->
<div class="ring-labels" aria-hidden="true">
  <span class="l1"><i>04.22 → 05.06</i></span>
  <span class="l2"><i>SEOUL</i></span>
  <span class="l3"><i>성수동</i></span>
  <span class="l4"><i>BLOOM</i></span>
  <span class="l5"><i>HYUNDAI</i></span>
  <span class="l6"><i>15 DAYS</i></span>
  <span class="l7"><i>27SS</i></span>
  <span class="l8"><i>한정</i></span>
</div>

<!-- 헤드라인 -->
<div class="headline">
  <span class="em">15 Days.</span> <span class="accent">Seoul.</span> 봄이 오는 자리, 성수동.
</div>
```

**언제 쓰나**: 팝업 오픈 2~3주 전 + 팝업 운영 중 입구 디스플레이. 인스타 릴스 안내 영상.

**바꾸는 부분**: 일자(`04.22 → 05.06`), 장소(`SEOUL · 성수동`), 한정 일수(`15 DAYS`), 헤드라인(장소·기간 강조).

**디스플레이 폰트 권장**: `--font-display-clean` (Instrument Serif) 또는 브랜드 톤에 맞춰.

---

## 브리프에서 패턴 선택하기

| 브리프 표현 | 사용 |
|---|---|
| 시즌 KV 모션, 시즌 시작 영상, 룩북 인트로 | **A — 시즌 키비주얼** |
| 캠페인 영상 포스터, 모델 실루엣, 룩북 영상 | **B — 캠페인 영상** |
| 브랜드 인트로, 워드마크 영상, 자사몰 첫 컷 | **C — 브랜드 인트로** |
| 팝업 안내, 매장 입구 디스플레이, 장소·일자 카운트다운 | **D — 팝업 입구 디스플레이** |

두 개가 맞으면 **이 영상의 1차 활용 채널**로 결정: 인스타 릴스 = A or C, 매장 입구 = D, 룩북 영상 인트로 = B.

---

## 브랜드별 톤 가이드

| 브랜드 | `--accent` | `--font-display` | 포컬 모티프 |
|---|---|---|---|
| **마뗑킴 (Matin Kim)** | `#c0563b` (구릿빛) | Hahmlet | 추상 globe, 식물 |
| **마르디 메크르디** | `#e85a8b` (핑크) | Hahmlet, Cormorant | 시그니처 꽃 |
| **아더에러 (ADER ERROR)** | `#2a4ad9` (블루) | Instrument Serif | 왜곡된 그리드 |
| **와키윌리 (WACKYWILLY)** | `#e98425` (오렌지) | Black Han Sans (시드에 토큰 추가) | 캐릭터 IP |
| **키르시 (KIRSH)** | `#d92b1c` (체리 레드) | Black Han Sans | 체리 심볼 |
| **시야쥬 (CHYAJU)** | `#7a766c` (워밍 그레이) | Cormorant Garamond | 추상 원형 |

---

## 링 라벨 키워드 시즌별 예시

- **마뗑킴 27SS BLOOM**: `봄 · BLOOM · Quietly · ivory · sage · ash · Linen · 27SS`
- **마뗑킴 27FW QUIET**: `Quiet · 27FW · wool · 한 호흡 · ash · charcoal · 겨울 · seoul`
- **와키윌리 27SS DROP 02**: `Wacky · Willy · 즐거움 · IP · 캐릭터 · K-팝 · 27SS · DROP02`
- **마르디 27SS**: `Bonjour · 꽃 · Mardi · Mercredi · Spring · 봄날 · 27SS · Paris`
- **아더에러 글로벌 27SS**: `Post-Minimalism · Blue · Distortion · 27SS · Berlin · Tokyo · Seoul · 8/8`
- **시야쥬 27SS**: `정제 · QUIET · 한 호흡 · 27SS · ivory · 본명조 · 차분 · seoul`

링 라벨은 5~8개. 4개 이하는 빈 듯, 9개 이상은 산만함.

---

## 키프레임 속도 가이드

| 레이어 | 속도 | 방향 |
|---|---|---|
| 가장 큰 링 (r3, dashed) | 180s | 정방향 |
| 중간 링 (r2) | 90s | 역방향 |
| 작은 링 (r1) | 60s | 정방향 |
| 빠른 링 (r4) | 36s | 정방향 |
| 포컬 마크 (focal) | 38s | 역방향 (또는 alternate 60s) |
| 링 라벨 그룹 (ring-labels) | 60s (r1과 동기화) | 정방향 |
| 포컬 닷 (focal-dot pulse) | 2.6s | ease-in-out |
| 헤드라인 (type-in) | 1.4s | 1회 (페이드 인) |

최소 3개 다른 속도가 동시에 보여야 깊이감이 생깁니다.
