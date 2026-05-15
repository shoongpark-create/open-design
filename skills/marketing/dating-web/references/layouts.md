# K-패션 VIP 라운지 / 스타일 매칭 대시보드 — 본문 패턴 변형

이 스킬의 기본 구조(상단 티커 + 좌측 레일 + KPI 9개 + 차트 + 트렌드 패널)는 `assets/template.html`에 고정되어 있습니다. 변형은 주로 **본문 컨텍스트**(VIP 라운지 / 스타일 매칭 / 인플루언서 매칭)와 **KPI 카드 셀렉션**에서 발생합니다.

**작업 흐름**: 시드의 구조를 그대로 두고, KPI 9개 카드의 라벨·수치·노트를 아래 패턴으로 교체하세요.

OpenDesign 환경에서는 `data-od-id` 속성으로 인라인 코멘트 모드. 그 외 환경에서는 `id` 속성 사용.

**하드 룰 (모든 패턴 공통)**:
- 데이팅 클리셰 절대 금지 (하트·불꽃·match/spark/perfect)
- 매거진 에디토리얼 톤 — 차분, 관조적
- 액센트 3~4회만
- 숫자는 세리프 디스플레이, 라벨은 mono

## 클래스 인벤토리

> `ticker` `layout` `rail` `brand` `user` `avatar` `nav-today` `nav-you` `nav-archive` `status` `live` `grid` `stat` `label` `value` `value.good` `value.bad` `value.accent` `note` `arrow` `arrow.down` `panel` `panel-head` `lower-panel` `lede` `axis` `badge` `badge.gray` `num`

이 목록에 없는 클래스가 필요하면 시드의 `<style>` 블록에 먼저 정의하세요.

---

## 패턴 A — VIP 멤버 라운지 (기본값, 마뗑킴/마르디 톤)

PLATINUM/VVIP 등급 회원 전용. **회원의 누적 활동**을 보여주는 9개 KPI. 데이팅이 아닌 큐레이션 톤.

K-패션 활용: **마뗑킴 VIP 라운지**, **마르디 VIP 페이지**, **W컨셉 PLUS**, **29CM VIP**.

### KPI 9개 (3×3) — 회원의 누적 활동

| 행 | 좌 | 가운데 | 우 |
|---|---|---|---|
| 1 | `Wishlist items` (142, 이번 주 +12) | `Matched looks` (47, good) | `Collections` (14, 4 활성/7 저장/3 후보) |
| 2 | `Match rate` (62%, good) | `Repurchase` (3 / 7 시즌) | `Discounted only` (4, bad — 시즌오프 의존) |
| 3 | `Shared with friends` (214) | `Avg basket` (₩214K) | `Store visits` (4, bad — 매장 12회 초대) |

```html
<section class="grid" data-od-id="kpis">
  <div class="stat">
    <div class="label">Wishlist items</div>
    <div class="value"><em>142</em></div>
    <p class="note"><span class="arrow">↑</span> 이번 주 +12 · 건강한 증가.</p>
  </div>
  <!-- 나머지 8개 KPI 동일 구조, 시드 참조 -->
</section>
```

**티커 슬로건**: `당신의 취향이 만든 라운지 · 매주 월요일 큐레이션 리뉴얼` + `REVIEWED WEEKLY`.

**네비**: `TODAY`(오늘의 추천·위시리스트·최근 본·알림함) · `YOU`(매칭 룩 active·회원 정보·포인트 내역·설정) · `ARCHIVE`(과거 룩북·만료 쿠폰).

**언제 쓰나**: 상시 운영되는 VIP 마이페이지. 회원이 자사몰 로그인 후 곧바로 보는 페이지.

**바꾸는 부분**: 회원 핸들, 등급 + 누적 금액, 9개 KPI의 수치(이번 시즌 실제 값), 차트 30일 막대(시즌 데이터 반영).

---

## 패턴 B — 퍼스널 스타일 매칭 결과 (가입 직후 진단 결과)

신규 가입 직후 스타일 진단 결과를 보여주는 페이지. **회원이 처음 보는 매칭 대시보드**. 가입 후 3일 ~ 1주차 톤.

K-패션 활용: **마르디 스타일 진단 결과**, **무신사 스타일 키워드 진단 결과**, **자사몰 가입 직후 매칭 페이지**.

### KPI 9개 — 진단 결과 + 첫 추천

| 행 | 좌 | 가운데 | 우 |
|---|---|---|---|
| 1 | `Style keywords` (5, em — 미니멀/데일리/레트로/뉴트럴/소프트) | `Best match` (37 looks, accent) | `Color palette` (3, em — ivory/sage/ash) |
| 2 | `Top brand` (em — MATIN KIM) | `Body fit` (slim · 165cm) | `Budget band` (₩100~200K) |
| 3 | `Recommended drops` (8 시즌, accent) | `Saved lookbooks` (em — 0 · 첫 저장 권장) | `Match confidence` (78%, good) |

```html
<section class="grid" data-od-id="kpis">
  <div class="stat">
    <div class="label">Style keywords</div>
    <div class="value"><em>5</em></div>
    <p class="note">미니멀 · 데일리 · 레트로 · 뉴트럴 · 소프트.</p>
  </div>
  <div class="stat">
    <div class="label">Best match</div>
    <div class="value accent">37</div>
    <p class="note">looks · 27SS 컬렉션 안에서.</p>
  </div>
  <!-- ... -->
</section>
```

**티커 슬로건**: `당신만의 스타일이 처음 정리되었습니다 · 진단 완료 D+3`.

**차트**: 최근 30일 → **최근 14일 진단 후 활동** (저장한 룩북, 위시 추가, 매칭 조회). 처음 회원이라 30일 데이터가 없음.

**언제 쓰나**: 회원 가입 후 첫 1주차. 진단 결과를 보고 첫 사전예약/위시 등록을 유도.

**바꾸는 부분**: 진단 결과 키워드 5개, 추천 컬러 팔레트, 첫 추천 룩북 개수, `Match confidence` 신뢰도 수치.

---

## 패턴 C — 인플루언서 매칭 대시보드 (브랜드 ↔ 인플루언서)

브랜드의 인플루언서 협업 페이지. 인플루언서별 매칭 룩, 시즌 캠페인 일정, ROI 지표. **브랜드 매니저가 보는 대시보드**.

K-패션 활용: **와키윌리 캐릭터 IP 협업**, **마르디 메크르디 셀럽 매칭**, **키르시 K-팝 콜라보 대시보드**.

### KPI 9개 — 인플루언서별 협업 성과

| 행 | 좌 | 가운데 | 우 |
|---|---|---|---|
| 1 | `Active influencers` (12) | `Matched looks` (87, accent) | `IG reach` (2.4M, em) |
| 2 | `Avg engagement` (5.8%, good) | `Saved looks` (1,402, good) | `Conv rate` (3.1%, bad — 코호트 -1.2%) |
| 3 | `Top influencer` (em — @jenniepark) | `Avg budget` (₩3.2M) | `Next drop` (D-12, accent) |

**티커**: `27SS 캐릭터 IP 콜라보 · 12명 인플루언서 매칭 진행 중`.

**네비**: `TODAY`(오늘의 매칭·캠페인 일정·메시지함) · `YOU`(active 인플루언서·계약·정산) · `ARCHIVE`(과거 캠페인·만료 NDA).

**언제 쓰나**: 시즌 캠페인 기획~실행 기간. 마케팅실 협업 매니저가 보는 페이지.

**바꾸는 부분**: 인플루언서 핸들(`@jenniepark` 등), 캠페인 코드(`27SS 캐릭터 IP`), 12명 인플루언서 수.

---

## 패턴 D — 1:1 스타일링 채널톡 진입 라운지 (VVIP 한정)

VVIP 회원 전용. **1:1 스타일링 상담 진입점**을 메인으로. 채널톡/카카오톡 채널 연동.

K-패션 활용: **마뗑킴 VVIP 라운지**, **마르디 VVIP 1:1 스타일링**, **W컨셉 디자이너 사전예약 페이지**.

### KPI 9개 — VVIP 회원 + 1:1 상담 진행도

| 행 | 좌 | 가운데 | 우 |
|---|---|---|---|
| 1 | `Open sessions` (2, accent — 진행 중인 1:1 채팅) | `Pending replies` (3, bad) | `Avg response` (4분, good) |
| 2 | `Lookbook saves` (28) | `MD recommendations` (12, em) | `Booked sessions` (1 · 다음 주 화) |
| 3 | `Store invitations` (3, accent) | `Avg basket` (₩412K) | `Repurchase` (8 / 12 시즌) |

**티커**: `당신의 1:1 스타일링 채널 · CS팀 평균 응답 4분`.

**네비**: `TODAY`(진행 중 채팅·MD 추천·예약 상담) · `YOU`(VVIP 혜택·매장 초대·시크릿 세일) · `ARCHIVE`(과거 추천·완료 상담).

차트 영역: 30일 차트 대신 **최근 8주 1:1 상담 만족도** 또는 **매장 방문 vs 온라인 구매 비율** 같은 VVIP-specific 데이터.

**언제 쓰나**: VVIP 회원이 채널톡 진입 직전 보는 라운지. 1:1 상담 기록과 MD 추천을 한 화면에.

**바꾸는 부분**: 회원 등급(VVIP 표기), CS 평균 응답 시간, 매장 초대 횟수, MD 추천 룩북 수.

---

## 브리프에서 패턴 선택하기

| 브리프 표현 | 사용 |
|---|---|
| VIP 마이페이지, 자사몰 멤버십 라운지, 누적 활동 대시보드 | **A — VIP 멤버 라운지** |
| 스타일 진단, 가입 후 첫 화면, 신규 회원 매칭 결과 | **B — 퍼스널 스타일 매칭** |
| 인플루언서 협업, 셀럽 매칭, 캠페인 관리, 브랜드 매니저 | **C — 인플루언서 매칭** |
| 1:1 스타일링, 채널톡 연동, VVIP 전용, MD 큐레이션 | **D — 1:1 채널톡 라운지** |

여러 개가 맞으면 **이 페이지의 청중**으로 결정: 일반 VIP 회원 본인 → A, 신규 회원 → B, 브랜드 매니저 → C, VVIP + CS팀 → D.

---

## 차트 데이터 변형

기본 시드는 **최근 30일 매칭 룩** (30개 막대, 마지막 2일 액센트). 패턴별로 차트 의미가 다릅니다.

| 패턴 | 차트 의미 | 막대 개수 | 액센트 위치 |
|---|---|---|---|
| A | 매칭 룩 (좋아요/저장) 일별 | 30개 (최근 30일) | 마지막 2일 |
| B | 진단 후 활동 (저장/위시) 일별 | 14개 (진단 후 14일) | 마지막 3일 |
| C | 인플루언서 게시물 노출 일별 | 30개 | 캠페인 피크 1~2일 |
| D | 1:1 상담 만족도 주별 | 8주 | 마지막 주 |

차트 막대는 SVG `<rect>` 인라인. 외부 차트 라이브러리 금지.

---

## 트렌드 패널 카피 가이드

매거진 에디토리얼 톤. 데이터를 **관조적으로 해석**합니다.

- ✅ `27SS 룩북 한 번의 저장이 4개월간의 위시리스트 편집보다 매칭률을 더 올렸습니다.`
- ✅ `시즌 시작 4주 차에 큰 폭의 매칭 일치율 상승 — 사전예약 우선 오픈이 트리거였습니다.`
- ✅ `시크릿 세일 노출 다음 주, 정상 구매 비중이 8%P 회복되었습니다.`
- ❌ `매칭률이 올랐어요! 대단해요!` (호들갑)
- ❌ `Sparkle your style!` (데이팅 클리셰)
- ❌ `당신의 perfect match가 곧 도착해요!` (데이팅 클리셰)

캡션 mono uppercase 영문 + 본문 한국어 세리프 본문. 두 톤이 같은 패널에 공존해야 매거진 톤이 살아납니다.
