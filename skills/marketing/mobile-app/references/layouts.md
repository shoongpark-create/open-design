# K-패션 의류 쇼핑 앱 화면 레이아웃

**6가지 K-패션 화면 아키타입.** `assets/template.html`의 `<main class="content">` 안에 붙여넣으세요. 화면을 처음부터 쓰지 말고 — 가장 가까운 아키타입을 골라 붙이고, 카피만 K-패션 컨텍스트로 바꿉니다.

## 사전 점검

1. **`assets/template.html`을 적어도 `<style>` 블록까지 읽으세요** — 아래 사용된 모든 클래스가 거기 정의되어 있습니다. Dynamic Island, 상태 바, 홈 인디케이터, 탭 바는 이미 그려져 있으니 인라인으로 다시 구현하지 마세요.
2. **정확히 한 아키타입 선택.** 모바일 화면은 한 가지 일을 합니다. "피드 + 체크아웃 + 프로필"을 한 모크에 섞는 것이 모바일 프로토타입이 가짜 같아 보이는 이유 1위입니다.
3. **아키타입이 탭 바를 함의하면 유지, 아니면 `<nav class="tabbar">` 블록 전체 삭제.** 온보딩, 상세, 체크아웃 화면은 보통 탭 바가 없습니다.

## 클래스 인벤토리

> `pad` `stack` `row` `row-between` `grid-2` `grid-3` `header` `greeting` `h2` `h3` `meta` `num` `card` `card.accent` `card.flat` `list-row` `avatar` `tag` `pill` `tabbar` `tab` `tab.active` `btn-primary` `btn-secondary` `ph-img` `progress`

이 목록에 없는 클래스가 필요하면 시드의 `<style>`에 먼저 정의하세요.

---

## 아키타입 A — Feed (자사몰 메인 / 신상 알림함 / 신상 디스커버리)

상단: 인사 + 화면 제목. 본문: 4~6개 리스트 행, 헤어라인 구분. 탭 바: 있음.

K-패션 활용: **자사몰 앱 메인 피드 (회원 알림함)**, **무신사 스타일 신상 디스커버리**, **카테고리 별 인기 상품 리스트**, **VIP 회원 라운지 알림**.

```html
<div class="header" data-od-id="header">
  <div>
    <p class="greeting">화요일 · 4월 22일</p>
    <h1>27SS 알림</h1>
  </div>
  <button class="icon-btn" aria-label="검색">
    <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
  </button>
</div>

<section class="pad" data-od-id="filters" style="margin-bottom: 8px;">
  <div class="row" style="overflow-x: auto; padding-bottom: 4px;">
    <span class="pill">전체 · 14</span>
    <span class="tag">신상</span>
    <span class="tag">사전예약</span>
    <span class="tag">매거진</span>
    <span class="tag">VIP</span>
  </div>
</section>

<section class="pad" data-od-id="feed">
  <div class="list-row">
    <div class="avatar"></div>
    <div class="body">
      <div class="title">MATIN KIM · 27SS Floral Big Shirt 사전예약 시작</div>
      <div class="sub">"오늘 밤 10시 회원 사전예약 시작. ivory · sage · ash 3종."</div>
    </div>
    <span class="meta">2분</span>
  </div>
  <div class="list-row">
    <div class="avatar"></div>
    <div class="body">
      <div class="title">매트 김 인터뷰 · 27SS 컨셉 비하인드 · 새 글</div>
      <div class="sub">"봄은 외치는 시즌이 아니라 머금는 시즌이다."</div>
    </div>
    <span class="meta">14분</span>
  </div>
  <div class="list-row">
    <div class="avatar"></div>
    <div class="body">
      <div class="title">BLOOM 팝업 안내 · 성수동</div>
      <div class="sub">04.22 → 05.06 · 성수동 · 매트 김 사인회 예약 접수.</div>
    </div>
    <span class="meta">1시간</span>
  </div>
  <div class="list-row">
    <div class="avatar"></div>
    <div class="body">
      <div class="title">회원 등급 업데이트 · GOLD 도달</div>
      <div class="sub">총 누적 구매 ₩680,000 · 다음 등급까지 ₩220,000.</div>
    </div>
    <span class="meta">3시간</span>
  </div>
  <div class="list-row">
    <div class="avatar"></div>
    <div class="body">
      <div class="title">27SS LOOKBOOK · 5 LOOKS 공개</div>
      <div class="sub">모델 김혜준, 사진 이호인. 룩 5개 + 매거진 동시 공개.</div>
    </div>
    <span class="meta">5시간</span>
  </div>
</section>
```

## 아키타입 B — Detail (상품 상세 / 룩북 디테일 / 매거진 컬럼)

상단 히어로 이미지, 아이브로우 + 제목 + 메타, 본문, 하단 메인 액션. 탭 바: 없음.

K-패션 활용: **상품 상세 페이지**, **룩북 한 룩 디테일**, **매거진 컬럼**, **캠페인 디테일**.

```html
<div class="ph-img wide" style="border-radius: 0; aspect-ratio: 4/5;" data-od-id="hero">[ 상품 컷 / 룩북 컷 ]</div>

<section class="pad" style="padding-top: 18px;" data-od-id="meta">
  <span class="pill">NEW · 27SS DROP 02</span>
  <h1 class="h2" style="margin: 10px 0 6px;">Floral Big Shirt — 봄, 가장 조용한 한 벌.</h1>
  <p class="meta">MATIN KIM · 27SS · 회원 사전예약 24시간 한정</p>
</section>

<section class="pad stack" style="margin-top: 18px; gap: 14px;" data-od-id="body">
  <p>정원의 잔향이 머무는 봄날의 셔츠. 햇살에 천천히 번지는 플로럴 프린트와 여유로운 빅 핏 실루엣 — 봄의 첫 호흡을 가장 가까이 입는 한 벌.</p>
  <p>컬러웨이: ivory · sage · ash. 사이즈: XS · S · M · L · XL. 100% 리넨, Cool Linen 가공. MADE IN KOREA.</p>
</section>

<section class="pad" data-od-id="price" style="margin-top: 18px;">
  <div class="card row-between" style="padding: 16px;">
    <div>
      <div class="meta">정상가 · 회원 사전예약 15% OFF</div>
      <div class="num" style="font-size: 24px;">₩108,800</div>
    </div>
    <span class="meta" style="text-decoration: line-through;">₩128,000</span>
  </div>
</section>

<section class="pad" style="padding-top: 24px; padding-bottom: 8px;" data-od-id="cta">
  <button class="btn-primary">사전예약 시작</button>
</section>
```

## 아키타입 C — Onboarding (회원가입 / 스타일 취향 진단)

일러스트 블록 + 헤드라인 + 부제 + 페이지 인디케이터 + 메인 CTA. 탭 바: 없음. 상태 바는 그대로 표시.

K-패션 활용: **자사몰 첫 진입 환영 화면**, **회원가입 플로우**, **스타일 취향 진단 (스타일 키워드 선택)**.

```html
<section class="pad stack" style="height: 100%; padding-top: 24px; padding-bottom: 24px; gap: 24px;" data-od-id="onboarding">
  <div class="ph-img square" style="aspect-ratio: 1/1; max-width: 240px; margin: 0 auto;">[ 스타일 일러스트 / 시즌 비주얼 ]</div>

  <div style="text-align: center;">
    <p class="meta" style="margin: 0 0 6px;">STEP 2 OF 4</p>
    <h1 style="font-family: var(--font-display); font-size: 26px; margin: 0 0 10px; letter-spacing: -0.02em; line-height: 1.2;">당신의 스타일을 알려주세요.</h1>
    <p style="margin: 0 auto; max-width: 26ch; color: var(--muted); font-size: 14px; line-height: 1.6;">선호하는 무드 3가지를 골라주세요. 27SS 신상 중에서 가장 맞는 룩을 골라 추천해 드립니다.</p>
  </div>

  <!-- 페이지 인디케이터 -->
  <div class="row" style="justify-content: center; gap: 6px;">
    <span style="width: 6px; height: 6px; border-radius: 50%; background: var(--border);"></span>
    <span style="width: 18px; height: 6px; border-radius: 999px; background: var(--accent);"></span>
    <span style="width: 6px; height: 6px; border-radius: 50%; background: var(--border);"></span>
    <span style="width: 6px; height: 6px; border-radius: 50%; background: var(--border);"></span>
  </div>

  <div class="stack" style="gap: 10px; margin-top: auto;">
    <button class="btn-primary">다음</button>
    <button class="btn-secondary" style="border: 0; color: var(--muted);">건너뛰기</button>
  </div>
</section>
```

> 이 아키타입에서는 시드의 `<nav class="tabbar">` 블록 전체 삭제.

## 아키타입 D — Profile (마이페이지 / VIP 라운지 / 회원 등급)

아바타 + 이름 + 메타 행. 통계 행. 그 아래 탭 콘텐츠. 탭 바: 있음.

K-패션 활용: **마이페이지**, **VIP 라운지**, **회원 등급 (실버/골드/플래티넘/VIP)**, **OOTD 챌린지 프로필**, **인플루언서 매칭 프로필**.

```html
<section class="pad" style="padding-top: 8px;" data-od-id="head">
  <div class="row" style="gap: 16px;">
    <div class="avatar" style="width: 64px; height: 64px;"></div>
    <div>
      <h1 class="h2" style="margin: 0;">매트 김 회원님</h1>
      <p class="meta" style="margin: 4px 0 0;">GOLD · MATIN KIM 회원 · 2024 가입</p>
    </div>
  </div>
  <div class="row" style="margin-top: 16px; gap: 8px;">
    <button class="btn-secondary" style="flex: 1; min-height: 38px; font-size: 13px;">스타일 매칭</button>
    <button class="btn-secondary" style="flex: 1; min-height: 38px; font-size: 13px;">멤버 혜택</button>
  </div>
</section>

<section class="pad" data-od-id="stats" style="margin-top: 18px;">
  <div class="grid-3">
    <div class="card flat" style="text-align: center;">
      <div class="num" style="font-size: 22px; letter-spacing: -0.02em;">12</div>
      <div class="meta">구매</div>
    </div>
    <div class="card flat" style="text-align: center;">
      <div class="num" style="font-size: 22px; letter-spacing: -0.02em;">3.4k</div>
      <div class="meta">포인트</div>
    </div>
    <div class="card flat" style="text-align: center;">
      <div class="num" style="font-size: 22px; letter-spacing: -0.02em;">680k</div>
      <div class="meta">누적 ₩</div>
    </div>
  </div>
</section>

<section class="pad" data-od-id="tabs" style="margin-top: 12px;">
  <div class="row" style="border-bottom: 1px solid var(--border); gap: 24px;">
    <span style="padding: 12px 0; border-bottom: 2px solid var(--accent); color: var(--fg); font-weight: 500; font-size: 14px;">주문 내역</span>
    <span style="padding: 12px 0; color: var(--muted); font-size: 14px;">위시</span>
    <span style="padding: 12px 0; color: var(--muted); font-size: 14px;">리뷰</span>
  </div>
</section>

<section class="pad" data-od-id="order-list" style="margin-top: 4px;">
  <div class="list-row" style="grid-template-columns: 1fr;">
    <div class="body">
      <div class="title">"27SS Floral Big Shirt · sage · M"</div>
      <div class="sub" style="margin-top: 6px;">3일 전 · 사전예약 · 4월 25일 출고 예정</div>
    </div>
  </div>
  <div class="list-row" style="grid-template-columns: 1fr;">
    <div class="body">
      <div class="title">"26FW Wool Blend Coat · ivory · M"</div>
      <div class="sub" style="margin-top: 6px;">5개월 전 · 정상 구매 · 리뷰 작성 +50P</div>
    </div>
  </div>
</section>
```

## 아키타입 E — Checkout / Form (결제 / 사이즈·컬러 선택 / 사전예약)

스택드 카드 섹션 (아이템 요약 → 디테일 → 합계), 하단 고정 CTA. 탭 바: 없음.

K-패션 활용: **결제 화면**, **사이즈/컬러 선택**, **사전예약 폼**, **정기배송 신청**.

```html
<section class="pad" style="padding-top: 12px;" data-od-id="title">
  <h1 class="h2">사전예약 확인</h1>
</section>

<section class="pad" data-od-id="item">
  <div class="card row" style="gap: 14px; align-items: flex-start;">
    <div class="ph-img square" style="width: 64px; height: 64px; aspect-ratio: 1; border-radius: 10px;"></div>
    <div style="flex: 1;">
      <div class="h3">Floral Big Shirt · 27SS</div>
      <p class="meta" style="margin: 4px 0 0;">sage · M · 회원 사전예약 15% OFF</p>
    </div>
    <span class="num">₩108,800</span>
  </div>
</section>

<section class="pad stack" data-od-id="details" style="margin-top: 14px; gap: 10px;">
  <div class="card flat row-between">
    <span>수량</span>
    <span class="num">1</span>
  </div>
  <div class="card flat row-between">
    <span>배송지</span>
    <span class="meta">서울 성동구 성수 · 매트 김</span>
  </div>
  <div class="card flat row-between">
    <span>결제 수단</span>
    <span class="meta">카카오페이 · 4242</span>
  </div>
  <div class="card flat row-between">
    <span>포인트 사용</span>
    <span class="num">−₩2,000</span>
  </div>
</section>

<section class="pad" data-od-id="totals" style="margin-top: 14px;">
  <div class="card row-between" style="border-top: 1px solid var(--fg); border-radius: 0; padding: 16px 0; background: transparent;">
    <span style="font-weight: 600;">최종 결제</span>
    <span class="num" style="font-size: 22px; letter-spacing: -0.01em;">₩106,800</span>
  </div>
</section>

<section class="pad" style="padding-top: 16px; padding-bottom: 12px;" data-od-id="cta">
  <button class="btn-primary">₩106,800 사전예약 결제</button>
  <p class="meta" style="text-align: center; margin: 12px 0 0;">결제 시 사전예약 약관에 동의하는 것으로 간주됩니다.</p>
</section>
```

## 아키타입 F — Focus / Hero Card (카운트다운 / 라이브 / 단일 큰 숫자)

단일 액센트 색 히어로 카드가 화면을 지배, 그 아래 보조 콘텐츠. 탭 바: 있음.

K-패션 활용: **신상 발매 카운트다운 시계**, **라이브커머스 라운지 (무신사 라이브 등)**, **일일 출석 적립 (OOTD 챌린지)**, **VIP 마일리지 진척**.

```html
<div class="header" data-od-id="header">
  <div>
    <p class="greeting">화요일 · 4월 22일</p>
    <h1>발매까지 2시간.</h1>
  </div>
  <button class="icon-btn" aria-label="알림">
    <svg viewBox="0 0 24 24"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
  </button>
</div>

<section class="pad" data-od-id="hero-card" style="margin-top: 4px;">
  <div class="card accent" style="padding: 28px 24px; text-align: center;">
    <p class="meta" style="margin: 0 0 6px; color: rgba(255,255,255,0.72);">27SS DROP 02 · 사전예약</p>
    <div class="num" style="font-size: 64px; line-height: 1; letter-spacing: -0.03em; font-weight: 600; margin: 8px 0 18px;">02:15:42</div>
    <div class="progress" style="margin-bottom: 18px;"><span style="width: 38%;"></span></div>
    <div class="row" style="justify-content: center; gap: 8px;">
      <button style="padding: 10px 22px; border: 1px solid rgba(255,255,255,0.4); background: rgba(255,255,255,0.12); color: #fff; border-radius: 999px; font: inherit; font-weight: 500;">알림 받기</button>
      <button style="padding: 10px 22px; border: 0; background: #fff; color: var(--accent); border-radius: 999px; font: inherit; font-weight: 600;">룩북 보기</button>
    </div>
  </div>
</section>

<section class="pad" data-od-id="stats-row" style="margin-top: 18px;">
  <p class="meta" style="margin: 0 0 8px;">오늘의 마일리지</p>
  <div class="grid-3">
    <div class="card"><div class="num" style="font-size: 22px;">3</div><div class="meta">출석 일</div></div>
    <div class="card"><div class="num" style="font-size: 22px;">120</div><div class="meta">획득 P</div></div>
    <div class="card"><div class="num" style="font-size: 22px;">GOLD</div><div class="meta">등급</div></div>
  </div>
</section>

<section class="pad" data-od-id="up-next" style="margin-top: 18px;">
  <p class="meta" style="margin: 0 0 8px;">곧 발매</p>
  <div>
    <div class="list-row" style="grid-template-columns: 22px 1fr auto;">
      <span style="width: 18px; height: 18px; border-radius: 50%; background: var(--accent);"></span>
      <div class="body">
        <div class="title">Floral Big Shirt · ivory</div>
        <div class="sub">22:00 발매 · 회원 사전예약</div>
      </div>
    </div>
    <div class="list-row" style="grid-template-columns: 22px 1fr auto;">
      <span style="width: 18px; height: 18px; border-radius: 50%; border: 1.5px solid var(--border);"></span>
      <div class="body">
        <div class="title">Floral Big Shirt · sage</div>
        <div class="sub">23:30 발매 · 일반 구매</div>
      </div>
    </div>
  </div>
</section>
```

---

## 브리프에서 아키타입 선택하기

| 브리프 표현 | 사용 |
|---|---|
| 메인 피드, 신상 알림, 무신사 스타일 디스커버리, 카테고리 리스트, 매거진 리스트 | A — Feed |
| 상품 상세, 룩북 디테일, 매거진 컬럼, 캠페인 디테일 | B — Detail |
| 회원가입, 첫 진입 환영, 스타일 취향 진단, 온보딩 | C — Onboarding |
| 마이페이지, VIP 라운지, 회원 등급, OOTD 챌린지 프로필 | D — Profile |
| 결제, 사이즈/컬러 선택, 사전예약 폼, 정기배송 신청 | E — Checkout |
| 발매 카운트다운, 라이브커머스, 출석 적립, 단일 큰 숫자 | F — Focus |

두 개가 맞으면, 이 화면에서 사용자가 취하는 **메인 액션**이 더 잘 맞는 쪽을 선택하세요.
