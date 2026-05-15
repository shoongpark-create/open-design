# K-패션 멤버십 챌린지 앱 — 3개 폰별 패턴 변형

이 스킬의 3개 폰은 각각 다른 목적을 가집니다 — **표지 / 대시보드 / 디테일**. 같은 화면 3번 반복하면 안 됩니다.

**작업 흐름**: 시드의 3개 폰을 그대로 두고, 각 폰의 본문 마크업을 아래 패턴으로 교체합니다. 시드의 스테이지 바, 폰 프레임(`.phone`), 노치, 상태 바, 탭바는 절대 건드리지 마세요.

OpenDesign 환경에서는 `data-od-id` 속성으로 인라인 코멘트 모드. 그 외 환경에서는 `id` 속성 사용.

## 클래스 인벤토리

> `stage-bar` `phones` `phone` `screen` `status` `cover` `eyebrow` `next-peek` `swatch` `home` `level-ribbon` `lv` `bar` `quests` `q` `q1~q6` `glyph` `xp` `pill` `sub` `detail` `topbar` `back` `hero` `badge` `stamp` `steps` `step` `step.done` `check` `tabbar` `tab` `tab.active` `tab.center` `start` `num`

이 목록에 없는 클래스가 필요하면 시드의 `<style>` 블록에 먼저 정의하세요.

---

## 폰 1 — 표지 (시즌 캠페인 포스터)

### 패턴 1-A — 일반 시즌 멤버십 캠페인 (기본값)

다크 배경 + 시즌 코드 eyebrow + 큰 세리프 헤드라인(이탤릭, 핵심 단어 1개에 액센트) + 본문 + mono 팁 + 하단 `NEXT` 피크.

K-패션 활용: **와키윌리 27SS 멤버십**, **마뗑킴 27SS 라운지**, **무신사 골드 챌린지**.

```html
<div class="screen cover">
  <div class="status"><span class="num">9:41</span><span class="right num">·· 5G · 100%</span></div>
  <div class="body">
    <span class="eyebrow"><span class="dot"></span>27SS · MEMBERSHIP</span>
    <h1>오늘의 스타일을 인증하고 <span class="accent">리워드</span>를 받으세요.</h1>
    <p class="lede">매일의 작은 인증이 모여 시즌이 끝날 즈음엔 사전예약 우선권으로 돌아옵니다.</p>
    <p class="tip">타일을 탭하면 챌린지 상세. 7일 연속 인증 시 <b>BONUS +200pt</b>.</p>
    <div class="next-peek"><div class="swatch"></div>NEXT — 오늘의 챌린지</div>
  </div>
</div>
```

**언제 쓰나**: 시즌 출시 1~2주 전, 챌린지 캠페인 첫 진입. 신규 회원이 처음 보는 포스터.

**바꾸는 부분**: eyebrow(시즌 + 캠페인), 헤드라인(20~26자 이내, 액센트 단어 1개만), 본문(2~3문장), 팁(보너스 조건).

---

### 패턴 1-B — D-day 카운트다운 (사전예약 임박)

큰 D-day 숫자가 메인. 시즌 챌린지 활성화까지 남은 일수를 강조. **시즌 시작 D-7 ~ D-1** 사용.

K-패션 활용: **사전예약 24시간 우선 오픈 D-1**, **콜라보 발매 D-3**.

```html
<div class="screen cover">
  <div class="status"><span class="num">9:41</span><span class="right num">·· 5G · 100%</span></div>
  <div class="body">
    <span class="eyebrow"><span class="dot"></span>27SS DROP 02 · D-DAY</span>
    <p style="font: 11px/1.2 var(--font-mono); color: rgba(254,249,238,0.5); letter-spacing: 0.16em; text-transform: uppercase; margin: 0 0 12px;">사전예약 우선 오픈까지</p>
    <div class="num" style="font: 600 120px/1 var(--font-mono); color: var(--accent); letter-spacing: -0.04em; margin-bottom: 6px;">02:15:42</div>
    <p class="lede" style="margin-top: 14px;">GOLD 등급 이상 멤버는 24시간 우선 사전예약. 알림을 켜두세요.</p>
    <div class="next-peek"><div class="swatch"></div>NEXT — 알림 설정</div>
  </div>
</div>
```

**언제 쓰나**: 시즌 D-day, 콜라보 발매 직전. 카운트다운이 메인 메시지인 경우.

**바꾸는 부분**: 카운트다운 숫자(`HH:MM:SS` 또는 `D-3` 형식), 액션 문구(`알림을 켜두세요` / `사전예약 우선 오픈`).

---

## 폰 2 — 오늘의 챌린지 대시보드 (히어로 화면)

### 패턴 2-A — 멤버십 등급 + 6개 챌린지 타일 (기본값)

레벨 리본(등급 + 누적 포인트 + 진척바 66%) + 6개 챌린지 타일(3×2). 가장 보편적.

K-패션 활용: **자사몰 마이페이지 진입 후 첫 화면**, **시즌 챌린지 활성 기간 메인 화면**.

```html
<div class="screen home">
  <div class="status"><span class="num">9:41</span><span class="right num">·· 5G · 100%</span></div>
  <div class="head">
    <h2>안녕하세요, @minji 님</h2>
    <div class="bell num">×3</div>
  </div>
  <div class="level-ribbon">
    <div class="lv">GOLD</div>
    <div class="meta"><div class="label">MEMBERSHIP</div><div class="name">GOLD · 단골 회원</div></div>
    <div class="xp">1,648 / 2,480 pt</div>
    <div class="bar"><span></span></div>
  </div>
  <div class="sub">8개 챌린지 진행 가능 · 오늘 최대 <span class="pill">+430 pt</span> 적립</div>
  <div class="quests">
    <!-- 6개 .q .q1~.q6 타일 — 각 다른 파스텔 컬러 -->
    <!-- 시드 기본값 그대로 두고 카피만 교체 -->
  </div>
  <div class="tabbar">…</div>
</div>
```

**6개 챌린지 카피 예시** (브랜드별):

| 글리프 | 마뗑킴 | 와키윌리 | 마르디 메크르디 |
|---|---|---|---|
| O | 오늘의 룩 (OOTD #matinkim) | 오늘의 룩 (#wackywilly_27ss) | 오늘의 룩 (#mardimercredi) |
| L | 룩북 저장 | LOOKBOOK PDF | 봄 룩북 다운로드 |
| I | 친구 초대 (카카오톡) | 친구 초대 (카카오톡) | 친구 초대 |
| S | 매장 방문 (성수 플래그십) | 성수 팝업 QR 스캔 | 매장 방문 |
| T | 인스타 태그 | 인스타 태그 (@wackywilly) | 인스타 태그 (#mardi_flower) |
| W | 위시리스트 3개 추가 | 위시리스트 추가 | 위시리스트 추가 |

**언제 쓰나**: 시즌 챌린지 활성 기간 중 매일 접근. 메인 사용 화면.

**바꾸는 부분**: 회원 핸들(`@minji`), 등급(SILVER/GOLD/PLATINUM/VVIP), 누적/다음 등급 포인트, 6개 챌린지 카피 + 적립 포인트.

---

### 패턴 2-B — 7일 출석 스트릭 (단순 출석 적립)

레벨 리본 대신 큰 출석 스트릭 시각화 (7일 도장판). 챌린지 타일은 줄이거나 생략.

K-패션 활용: **무신사 출석 적립 톤**, **카카오톡 채널 미니샵 일일 출석**.

```html
<div class="screen home">
  <div class="status"><span class="num">9:41</span><span class="right num">·· 5G · 100%</span></div>
  <div class="head">
    <h2>오늘도 출석!</h2>
    <div class="bell num">D+5</div>
  </div>
  <div style="margin: 14px 22px 18px; padding: 18px 14px; background: linear-gradient(135deg, var(--tile-1), var(--tile-2)); border-radius: 16px;">
    <p style="font: 11px/1 var(--font-mono); letter-spacing: 0.18em; color: var(--ink); opacity: 0.6; margin: 0 0 12px;">7-DAY STREAK</p>
    <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; margin-bottom: 14px;">
      <!-- 출석 도장 7개 — 5개 완료, 오늘 활성, 2개 대기 -->
      <div style="aspect-ratio: 1; border-radius: 50%; background: var(--accent); color: white; display: grid; place-items: center; font: 700 14px/1 var(--font-sans);">✓</div>
      <div style="aspect-ratio: 1; border-radius: 50%; background: var(--accent); color: white; display: grid; place-items: center; font: 700 14px/1 var(--font-sans);">✓</div>
      <div style="aspect-ratio: 1; border-radius: 50%; background: var(--accent); color: white; display: grid; place-items: center; font: 700 14px/1 var(--font-sans);">✓</div>
      <div style="aspect-ratio: 1; border-radius: 50%; background: var(--accent); color: white; display: grid; place-items: center; font: 700 14px/1 var(--font-sans);">✓</div>
      <div style="aspect-ratio: 1; border-radius: 50%; background: var(--accent); color: white; display: grid; place-items: center; font: 700 14px/1 var(--font-sans);">✓</div>
      <div style="aspect-ratio: 1; border-radius: 50%; background: var(--ink); color: var(--accent); display: grid; place-items: center; font: 700 14px/1 var(--font-sans); border: 2px solid var(--accent);">6</div>
      <div style="aspect-ratio: 1; border-radius: 50%; background: rgba(0,0,0,0.08); color: var(--muted); display: grid; place-items: center; font: 700 14px/1 var(--font-sans);">7</div>
    </div>
    <div style="display: flex; justify-content: space-between; font: 11px/1 var(--font-mono); color: var(--muted);">
      <span>+50 pt 적립 완료</span>
      <span>7일 BONUS +200 pt</span>
    </div>
  </div>
  <div class="sub">오늘의 챌린지 3개 추가 가능 · <span class="pill">+150 pt</span></div>
  <div class="quests">
    <!-- 3~4개 챌린지 타일만 (.q .q1 ~ .q3) -->
  </div>
  <div class="tabbar">…</div>
</div>
```

**언제 쓰나**: 출석 적립이 메인이고 챌린지는 부수적인 브랜드. 무신사 출석 적립 톤.

**바꾸는 부분**: 7일 도장판 진행도(`D+5` 등), 보너스 조건, 챌린지 개수(3~4개로 축소).

---

## 폰 3 — 챌린지 디테일 (4단계 미션)

### 패턴 3-A — 7일 OOTD 인증 챌린지 (기본값)

상단 그라데이션 히어로(이탤릭 헤드라인 + 우상단 포인트 스탬프) + 4단계 체크리스트(1개 완료 / 3개 대기) + 하단 다크 CTA.

K-패션 활용: **OOTD 7일 인증**, **시즌 룩북 4단계 미션**, **친구 초대 단계별 미션**.

```html
<div class="screen detail">
  <div class="status">…</div>
  <div class="topbar"><div class="back">←</div>CHALLENGE · 03 / 08</div>
  <div class="hero">
    <span class="stamp">+90 pt</span>
    <span class="badge">— DAILY · OOTD</span>
    <h2>7일이 만드는 시그니처 룩.</h2>
    <p>매일 오늘의 룩을 인증하면 7일째 BONUS +200pt + 사전예약 우선권.</p>
  </div>
  <div class="steps">
    <h3>오늘의 미니 미션</h3>
    <div class="step done"><div class="check"></div><div class="name">인스타 공개 계정 설정</div><div class="meta">+5 pt</div></div>
    <div class="step"><div class="check"></div><div class="name">오늘의 룩 사진 1장 업로드</div><div class="meta">+30 pt</div></div>
    <div class="step"><div class="check"></div><div class="name">#wackywilly_27ss 태그 추가</div><div class="meta">+30 pt</div></div>
    <div class="step"><div class="check"></div><div class="name">자사몰 앱에서 인증 확인</div><div class="meta">+25 pt</div></div>
  </div>
  <div class="start">챌린지 시작</div>
  <div class="tabbar">…</div>
</div>
```

**언제 쓰나**: 일일/주간 단계별 챌린지가 메인인 경우. 인증 단계가 명확한 챌린지(인스타 태그, 사진 업로드).

**바꾸는 부분**: 히어로 헤드라인(이탤릭, 12자 이내), 우상단 스탬프 포인트, 4개 미션 카피 + 단계별 포인트, 완료/대기 상태.

---

### 패턴 3-B — 시즌 출석 마일스톤 (7일·14일·30일 보상)

미션 4개가 아닌 **마일스톤 4개** (7일/14일/30일/시즌 종료). 각 마일스톤마다 보상이 다름.

K-패션 활용: **시즌 출석 챌린지**, **마일스톤 누적 보상**.

```html
<div class="screen detail">
  <div class="status">…</div>
  <div class="topbar"><div class="back">←</div>CHALLENGE · 시즌 출석</div>
  <div class="hero">
    <span class="stamp">D+11 / 90</span>
    <span class="badge">— SEASON · STREAK</span>
    <h2>27SS 시즌 출석.</h2>
    <p>매일 1회 앱 방문으로 시즌 마일스톤 4개를 모두 모으면 룩북 PDF + 사전예약 우선권.</p>
  </div>
  <div class="steps">
    <h3>시즌 마일스톤</h3>
    <div class="step done"><div class="check"></div><div class="name">7일 출석 · 룩북 PDF</div><div class="meta">+100 pt</div></div>
    <div class="step"><div class="check"></div><div class="name">14일 출석 · 사은품 쿠폰</div><div class="meta">+200 pt</div></div>
    <div class="step"><div class="check"></div><div class="name">30일 출석 · 시크릿 세일</div><div class="meta">+500 pt</div></div>
    <div class="step"><div class="check"></div><div class="name">90일 출석 · VVIP 시즌 사은품</div><div class="meta">+1,000 pt</div></div>
  </div>
  <div class="start">오늘 출석 체크</div>
  <div class="tabbar">…</div>
</div>
```

**언제 쓰나**: 시즌 전체(3개월) 동안 누적되는 챌린지. 시즌 종료 시점 대형 보상 부여.

**바꾸는 부분**: 우상단 스탬프(`D+11 / 90` 등 누적/총일수), 4개 마일스톤 카피(7/14/30/90일 또는 25%/50%/75%/100%).

---

## 브리프에서 패턴 선택하기

| 브리프 표현 | 폰 1 | 폰 2 | 폰 3 |
|---|---|---|---|
| 시즌 멤버십 챌린지 (기본) | A | A | A |
| D-day 카운트다운 / 사전예약 임박 | B | A | A |
| 무신사 출석 적립 톤 | A | B | A |
| 시즌 출석 마일스톤 (3개월 누적) | A | A 또는 B | B |
| 콜라보 발매 카운트다운 | B | A | A |

3개 폰은 **함께 한 시즌 캠페인**을 구성해야 합니다. 폰별로 시즌·등급·포인트 단위가 다르면 안 됩니다.

---

## 브랜드별 톤 가이드

| 브랜드 | `--accent` | 디스플레이 | 톤 |
|---|---|---|---|
| **마뗑킴** | `#c66e3a` (구릿빛) | Hahmlet | 미니멀, 절제 |
| **와키윌리** | `#e98425` (오렌지) | Black Han Sans | 위트, 팬덤 |
| **마르디 메크르디** | `#e85a8b` (핑크) | Hahmlet, Instrument Serif | 로맨틱 |
| **무신사 스탠다드** | `#1a1a1a` (블랙) | Pretendard Variable | 베이직, 데일리 |
| **키르시** | `#d92b1c` (체리 레드) | Black Han Sans | 비비드 |
| **아더에러** | `#2a4ad9` (블루) | Inter | 컨셉추얼 |

`--tile-1` ~ `--tile-6`은 파스텔로 유지. 브랜드 키컬러를 6번 반복하지 마세요.
