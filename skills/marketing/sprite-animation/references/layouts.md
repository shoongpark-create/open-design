# K-패션 스프라이트 애니메이션 — 컴포지션 패턴

이 스킬은 **한 응집된 모션 장면**입니다. 3가지 표준 패턴 중 하나를 선택하세요. 시드의 레이어 구조(스테이지 + 토프바 + 큰 디스플레이 + 스프라이트 카드 + 키네틱 한글 + 캡션 + 리본)는 그대로 두고, **시그니처 모티프(스프라이트 카드 SVG)와 큰 디스플레이 컨텐츠**를 패턴별로 교체합니다.

**작업 흐름**: 시드를 복사 후, 아래 패턴 1개를 골라 `.sprite-card` SVG와 `.year` 디스플레이 카피, 리본 일정을 교체.

OpenDesign 환경에서는 `data-od-id` 속성으로 인라인 코멘트. 그 외 환경에서는 `id` 속성 사용.

**하드 룰 (모든 패턴 공통)**:
- JavaScript 절대 금지 (`@keyframes` only)
- 외부 이미지 URL 금지
- 최소 3개 독립 루핑 애니메이션 동시 가시 (글리치 + bobbing + kana-in + ticker + blink 중 3개 이상)
- 컬러 팔레트 = 크림 + 단일 액센트 + 잉크
- 한글 키네틱 1~3자
- 시즌 코드 정확 (`27SS`, `27FW`)

## 클래스 인벤토리

> `stage` `reg` `reg.tl/tr/bl/br` `topbar` `slug` `progress` `dots` `rec` `kana` `year` `year-label` `glitch` `kr-suffix` `sprite-stack` `sprite-card` `sprite-tag` `caption` `ribbon` `ribbon-track` `tick` `dot` `label` `note` `num`

이 목록에 없는 클래스가 필요하면 시드의 `<style>` 블록에 먼저 정의하세요.

---

## 패턴 A — 시즌 키비주얼 모션 (시즌 코드 큰 디스플레이)

큰 시즌 코드(27SS) 또는 연도(2027)가 좌하단을 지배. 우상단에 시즌 키워드 키네틱 한글(1~3자), 우측에 시그니처 스프라이트, 하단 리본에 시즌 일정.

K-패션 활용: **마뗑킴 27SS BLOOM 시즌 영상**, **마르디 봄 시즌 KV**, **시야쥬 정제된 시즌 모션**.

```html
<!-- 큰 디스플레이: 시즌 코드 -->
<div class="year-label">CHAPTER 01 · 27SS BLOOM · 봄 시즌</div>
<div class="year">
  <span class="num">
    27SS
    <span class="glitch" aria-hidden="true">27SS</span>
  </span><span class="kr-suffix">·</span>
</div>

<!-- 키네틱 한글: 1~3자 시즌 키워드 -->
<div class="kana">
  <span>봄</span><span>꽃</span>
</div>

<!-- 스프라이트 카드: 시즌 모티프 (꽃·식물·달 등) -->
<div class="sprite-card">
  <svg width="120" height="160" viewBox="0 0 24 32" ...>
    <!-- 추상 식물/꽃 픽셀 아트 -->
  </svg>
  <div class="sprite-tag">BLOOM<small>SPRING · 27SS</small></div>
</div>

<!-- 리본: 시즌 발매 일정 -->
<div class="ribbon-track">
  <div class="tick"><span class="dot"></span><span class="label">02.20</span><span class="note">시즌 LOOKBOOK 공개</span></div>
  <div class="tick"><span class="dot"></span><span class="label">03.01</span><span class="note">S1 판기 시작</span></div>
  <div class="tick"><span class="dot"></span><span class="label">03.15</span><span class="note">신상 사전예약</span></div>
  <div class="tick"><span class="dot"></span><span class="label">04.05</span><span class="note">S2 판기 시작</span></div>
  <div class="tick"><span class="dot"></span><span class="label">04.22</span><span class="note">BLOOM 팝업 오픈</span></div>
  <div class="tick"><span class="dot"></span><span class="label">05.10</span><span class="note">시즌 매거진 발행</span></div>
  <div class="tick"><span class="dot"></span><span class="label">05.30</span><span class="note">시즌 종료</span></div>
</div>
```

**언제 쓰나**: 시즌 시작 1~2개월 전 시즌 KV 모션. 자사몰 메인 스플래시, 인스타 릴스, 매장 입구 디스플레이.

**바꾸는 부분**: 시즌 코드(27SS/27FW), 키네틱 한글(시즌 단어 1~3자), 스프라이트 모티프(식물/달/추상), 리본 7~8개 항목(시즌 사이클 일정).

**디스플레이 폰트 권장**: `--font-display-romance` (Hahmlet) — 미니멀 시즌 톤.

---

## 패턴 B — 신상 발매 카운트다운 (D-day 디스플레이)

큰 D-day 또는 발매 일시 디스플레이. 시그니처 IP 또는 캡슐 컬렉션 모티프 스프라이트. 리본에 발매 단계별 일정.

K-패션 활용: **와키윌리 27SS 캐릭터 IP 캡슐 발매**, **마뗑킴 27SS DROP 02 사전예약**, **콜라보 발매 카운트다운**.

```html
<!-- 큰 디스플레이: 시즌 + D-day 또는 발매 시간 -->
<div class="year-label">CHAPTER 02 · 캐릭터 IP · 캡슐 발매</div>
<div class="year">
  <span class="num">
    27SS
    <span class="glitch" aria-hidden="true">27SS</span>
  </span><span class="kr-suffix">·</span>
</div>

<!-- 키네틱 한글: 1~3자 액션 키워드 -->
<div class="kana">
  <span>윌리</span><span>등장</span>
</div>

<!-- 스프라이트 카드: 캐릭터 IP 또는 시그니처 모티프 -->
<div class="sprite-card">
  <svg width="120" height="160" viewBox="0 0 24 32" ...>
    <!-- 캐릭터 IP 픽셀 아트 (시드 기본값) -->
  </svg>
  <div class="sprite-tag">윌리<small>WILLY · 캐릭터 IP</small></div>
</div>

<!-- 캡션: 발매 정보 -->
<div class="caption">
  <strong>윌리, 27SS에 등장합니다.</strong>
  와키윌리 시그니처 캐릭터 IP가 그래픽 티 · 미니 토트백 · 모자 9가지 아이템으로 돌아옵니다.
  회원 사전예약 5월 10일 오픈.
</div>

<!-- 리본: 발매 단계별 일정 -->
<div class="ribbon-track">
  <div class="tick"><span class="dot"></span><span class="label">04.25</span><span class="note">LOOKBOOK 공개</span></div>
  <div class="tick"><span class="dot"></span><span class="label">05.01</span><span class="note">자사몰 티저 오픈</span></div>
  <div class="tick"><span class="dot"></span><span class="label">05.10</span><span class="note">회원 사전예약</span></div>
  <div class="tick"><span class="dot"></span><span class="label">05.15</span><span class="note">전체 발매</span></div>
  <div class="tick"><span class="dot"></span><span class="label">05.22</span><span class="note">성수 팝업 오픈</span></div>
  <div class="tick"><span class="dot"></span><span class="label">06.05</span><span class="note">무신사 단독 컬러</span></div>
  <div class="tick"><span class="dot"></span><span class="label">06.20</span><span class="note">시즌2 캡슐 예고</span></div>
</div>
```

**언제 쓰나**: 신상 발매 2~3주 전. 발매 단계 카운트다운, 사전예약 모집.

**바꾸는 부분**: 캡슐 컬렉션명(`윌리`, `BLOOM`, `CHERRY`), 캡션 핵심 카피(`X, 시즌Y에 등장합니다.`), 리본 발매 단계 7개.

**디스플레이 폰트 권장**: `--font-display-street` (Black Han Sans) — 위트·팬덤 톤. 마뗑킴 케이스는 `--font-display-clean` (Pretendard 굵게).

---

## 패턴 C — 로딩 페이지 / 캠페인 인트로 (브랜드 워드마크)

브랜드 워드마크가 큰 디스플레이. 캠페인 슬로건이 키네틱. **자사몰 첫 진입 로딩 페이지**, **앱 스플래시 모션**.

K-패션 활용: **마뗑킴 자사몰 로딩**, **와키윌리 앱 스플래시**, **키르시 캠페인 인트로**.

```html
<!-- 큰 디스플레이: 브랜드 워드마크 또는 캠페인명 -->
<div class="year-label">— EVERYDAY MATIN KIM</div>
<div class="year" style="font-size: 140px;">
  <span class="num">
    matin
    <span class="glitch" aria-hidden="true">matin</span>
  </span><span class="kr-suffix" style="color: var(--accent);">.</span>
</div>

<!-- 키네틱 한글: 브랜드 슬로건 키워드 -->
<div class="kana">
  <span>쿨</span><span>매일</span>
</div>

<!-- 스프라이트 카드: 워드마크 카드 또는 시그니처 그래픽 -->
<div class="sprite-card" style="background: var(--ink); color: var(--paper);">
  <svg width="120" height="160" viewBox="0 0 120 160" ...>
    <!-- 추상 그래픽 또는 워드마크 시각화 -->
    <rect x="20" y="40" width="80" height="60" fill="none" stroke="#f5efe2" stroke-width="3"/>
    <text x="60" y="80" fill="#f5efe2" font-family="serif" font-style="italic" font-size="20" text-anchor="middle">kim.</text>
  </svg>
  <div class="sprite-tag" style="color: var(--paper);">kim<small style="color: var(--paper); opacity: 0.7;">SINCE 2015</small></div>
</div>

<!-- 캡션: 브랜드 슬로건 -->
<div class="caption">
  <strong>쿨하게, 매일.</strong>
  매일 입는 옷이 가장 가치 있는 옷. matin kim 자사몰에 오신 것을 환영합니다.
</div>

<!-- 리본: 브랜드 시그니처 키워드 또는 시즌 이벤트 -->
<div class="ribbon-track">
  <div class="tick"><span class="dot"></span><span class="label">SINCE 2015</span><span class="note">SEOUL</span></div>
  <div class="tick"><span class="dot"></span><span class="label">27SS</span><span class="note">BLOOM 시즌 진행 중</span></div>
  <div class="tick"><span class="dot"></span><span class="label">MEMBERSHIP</span><span class="note">멤버 사전예약 우선</span></div>
  <div class="tick"><span class="dot"></span><span class="label">STORE</span><span class="note">성수 플래그십 운영</span></div>
  <div class="tick"><span class="dot"></span><span class="label">JOURNAL</span><span class="note">매주 화요일 매거진 발행</span></div>
  <div class="tick"><span class="dot"></span><span class="label">CHANNEL</span><span class="note">카카오톡 채널 친구 추가</span></div>
</div>
```

**언제 쓰나**: 브랜드 첫 진입 (자사몰 메인 슬라이드, 앱 스플래시, 매장 입구). 영구 자산 — 시즌 사이클과 무관.

**바꾸는 부분**: 워드마크 텍스트(`matin`, `wackywilly` 등), 슬로건 키네틱(`쿨` `매일` 또는 `Wacky` `Willy`), 리본은 브랜드 시그니처 키워드 6개.

**디스플레이 폰트 권장**: 브랜드 워드마크 폰트 (마뗑킴 = Hahmlet 이탤릭, 와키윌리 = Black Han Sans, 마르디 = Hahmlet).

---

## 브리프에서 패턴 선택하기

| 브리프 표현 | 사용 |
|---|---|
| 시즌 KV 모션, 27SS 영상, 시즌 시작 영상 | **A — 시즌 키비주얼** |
| 신상 발매 카운트다운, 캐릭터 IP 발매, 콜라보 발매 D-day | **B — 발매 카운트다운** |
| 자사몰 로딩, 앱 스플래시, 브랜드 인트로 | **C — 브랜드 인트로** |
| 팝업 안내 영상 | **A 또는 B** (시즌이 메시지면 A, 팝업 한정 아이템 발매면 B) |

여러 개가 맞으면 **이 영상의 1차 활용 채널**로 결정.

---

## 브랜드별 톤 가이드

| 브랜드 | `--accent` | `--font-display` | 스프라이트 모티프 | 키네틱 한글 |
|---|---|---|---|---|
| **마뗑킴** | `#c0563b` (구릿빛) | Hahmlet, Pretendard Variable 굵게 | 추상 식물·달 · 워드마크 카드 | `쿨` / `매일` / `오늘` |
| **마르디 메크르디** | `#e85a8b` (핑크) | Hahmlet, DM Serif Display | 꽃 일러스트 픽셀 | `봄` / `꽃` / `원` |
| **아더에러 (ADER ERROR)** | `#2a4ad9` (블루) | Pretendard Variable | 테트라이트 / 블루 그리드 | `왜곡` / `지금` / `새로움` |
| **키르시 (KIRSH)** | `#d92b1c` (체리 레드) | Black Han Sans | 체리 픽셀 | `체리` / `달콤` / `오늘` |
| **와키윌리** | `#e98425` (오렌지) | Black Han Sans, Bagel Fat One | 윌리 캐릭터 픽셀 | `윌리` / `등장` / `오늘` |
| **무신사 스탠다드** | `#1a1a1a` (블랙) | Pretendard Variable 굵게 | 무신사 ◐ 심볼 | `표준` / `데일리` / `지금` |
| **시야쥬 (CHYAJU)** | `#7a766c` (워밍 그레이) | Hahmlet 또는 본명조 | 추상 원형 그래픽 | `정제` / `한 호흡` |

---

## 키프레임 속도 가이드

| 레이어 | 속도 | 동작 |
|---|---|---|
| `glitch` (year) | 4s steps(8) infinite | 4초 주기 중 1초만 깜빡 |
| `bob` (sprite-stack) | 2.4s ease-in-out infinite | ±8px 상하 |
| `kana-in` (kana span) | 4s ease-in-out infinite, 글자별 0.4s stagger | fade-up → 정지 → fade-down |
| `scroll-left` (ribbon-track) | 22s linear infinite | translateX(0 → -50%), 부드러운 무한 스크롤 |
| `blink` (rec dot) | 1.2s steps(2) infinite | 깜빡임 |

3개 이상이 항상 동시 가시. 정지컷에서도 한 응집된 장면으로 읽혀야 함.
