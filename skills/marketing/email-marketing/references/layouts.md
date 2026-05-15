# K-패션 이메일 마케팅 레이아웃 (4종)

네 가지 리듬 중 **하나**를 Step 2에서 선택해 `<div class="email">` 안에 붙여 넣고, 카카오톡 알림톡 카피 2~3안을 페이지 아래 `.alimtalk` 블록(또는 별도 마크다운)으로 함께 제안합니다.

모든 리듬은 다음 섹션 순서를 유지: **마스트헤드 → 히어로 블록 → 아이브로우 → 헤드라인 락업 → 본문 → 메인 CTA → 스펙 그리드 → 푸터**.

OpenDesign 환경에서 인라인 코멘트 모드를 사용하려면 주요 섹션에 `data-od-id` 속성을 추가하세요. 다른 환경에서는 일반 `id` 속성으로 충분합니다.

---

## 리듬 A — 단일 키 아이템 발매 (마뗑킴 신상 드롭 톤 · 기본값)

키 아이템 1개 + 컬러웨이 3종 + 회원 사전예약 우선. 마뗑킴·시야쥬 같은 컨템포러리 미니멀 톤.

```html
<header class="masthead" data-od-id="masthead">
  <span class="wordmark"><span class="mark" aria-hidden></span>[REPLACE MATIN KIM]</span>
  <nav>
    <span>SHOP</span>
    <span>LOOKBOOK</span>
    <span>MEMBERS</span>
  </nav>
</header>

<div class="hero" data-od-id="hero">
  <span class="stamp">[REPLACE MATIN · NO. 27SS]</span>
  <div class="colorway">
    <span>IVORY</span>
    <span>SAGE</span>
    <span>ASH</span>
  </div>
  <span class="drop">[REPLACE DROP 02 · 04—2027]</span>
</div>

<div class="body" data-od-id="body">
  <p class="eyebrow">[REPLACE NEW DROP · LINEN SHIRT · SPRING 27]</p>
  <h1 class="headline">
    [REPLACE Bloom Quietly.<br />봄,] <span class="accent">[REPLACE 천천히]</span> [REPLACE 피어나다.]
  </h1>
  <p class="lede">
    [REPLACE 정원의 잔향이 머무는 봄날의 셔츠. 햇살에 천천히 번지는 플로럴 프린트와 여유로운 빅 핏 실루엣 — 봄의 첫 호흡을 가장 가까이 입는 한 벌.]
  </p>
</div>

<div class="cta-block" data-od-id="cta">
  <a class="cta" href="[REPLACE ${shop_link}]">[REPLACE 회원 사전예약 시작]</a>
</div>

<div class="specs" data-od-id="specs">
  <div class="cell">
    <p class="num">3 COLORS</p>
    <p class="label">컬러웨이 3종</p>
  </div>
  <div class="cell">
    <p class="num">XS — XL</p>
    <p class="label">사이즈 5단계</p>
  </div>
  <div class="cell">
    <p class="num">₩108,800</p>
    <p class="label">회원가 · 정상가 −15%</p>
  </div>
  <div class="cell">
    <p class="num">LINEN 100%</p>
    <p class="label">Cool Linen 가공 · MADE IN KOREA</p>
  </div>
</div>

<footer class="pagefoot" data-od-id="footer">
  <span class="wordmark">[REPLACE MATIN KIM]</span>
  사업자등록번호 [REPLACE 000-00-00000] · 통신판매업신고 [REPLACE 제2024-서울성동-00000호] · 서울 성동구 성수동<br />
  발송 대상: [REPLACE 회원 전체] · 발송 일자: [REPLACE 2027-04-22 22:00]<br />
  <a href="[REPLACE ${browser_view}]">브라우저에서 보기</a> · <a href="[REPLACE ${unsubscribe}]">수신거부</a>
</footer>
```

**카카오톡 알림톡 카피 예시 (3안)**:

```
매트 김 회원님, 안녕하세요.
27SS의 첫 호흡, 플로럴 빅 셔츠가 오늘 밤 10시 회원 사전예약을 시작합니다.
컬러웨이 ivory · sage · ash 3종.

▶ 사전예약 바로가기: ${shop_link}
```

**언제 쓰나**: 신상 1개 SKU 발매. 회원 사전예약 24시간 우선 패턴. 시즌 시작 1~2개월 전, 룩북 촬영 직후.

**바꾸는 부분**: 브랜드 워드마크, 시즌 코드(27SS), 키 아이템 영문명, 컬러웨이 3종, 가격, 사이즈 단계, 회원 사전예약 일자.

---

## 리듬 B — 시즌 룩북 공개 (룩북 5컷 동반)

히어로 블록 + 본문 + **룩북 5컷 갤러리 행** + CTA. 신상 발매 안내가 아니라 룩북 자체를 노출. 마르디 메크르디·아더에러 톤.

```html
<header class="masthead">...</header>

<div class="hero">
  <span class="stamp">[REPLACE MARDI · LOOKBOOK]</span>
  <span class="drop">[REPLACE 27SS · 5 LOOKS]</span>
</div>

<div class="body">
  <p class="eyebrow">[REPLACE 27SS LOOKBOOK · NEW]</p>
  <h1 class="headline">
    [REPLACE Mardi en] <span class="accent">[REPLACE Fleur.]</span><br />
    [REPLACE 꽃이 피는 수요일.]
  </h1>
  <p class="lede">
    [REPLACE 마르디 메크르디 27SS 룩북 공개. 5 LOOKS · 모델 김고은 · 사진 이호인. 봄, 가장 가까운 한 벌부터 가장 빛나는 한 벌까지.]
  </p>

  <!-- 룩북 5컷 가로 스크롤 또는 그리드 -->
  <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; margin: 6px 0 24px;">
    <div style="aspect-ratio: 3/4; background: linear-gradient(135deg, var(--accent-soft), transparent); border-radius: 6px;"></div>
    <div style="aspect-ratio: 3/4; background: linear-gradient(160deg, var(--accent-soft), transparent); border-radius: 6px;"></div>
    <div style="aspect-ratio: 3/4; background: linear-gradient(200deg, var(--accent-soft), transparent); border-radius: 6px;"></div>
    <div style="aspect-ratio: 3/4; background: linear-gradient(240deg, var(--accent-soft), transparent); border-radius: 6px;"></div>
    <div style="aspect-ratio: 3/4; background: linear-gradient(280deg, var(--accent-soft), transparent); border-radius: 6px;"></div>
  </div>
</div>

<div class="cta-block">
  <a class="cta" href="[REPLACE ${lookbook_url}]">LOOKBOOK 보기</a>
</div>

<!-- specs 그리드는 룩 별 메타(모델·사진·스타일링)로 변환하거나 생략 -->
<footer class="pagefoot">...</footer>
```

**알림톡 카피 예시**:
```
27SS 룩북이 오늘 공개됩니다.
김고은 캠페인 · 5 LOOKS · 봄의 한 벌부터.

▶ LOOKBOOK 보기: ${lookbook_url}
```

**언제 쓰나**: 시즌 룩북 공개일. 신상 발매가 아니라 룩북 자체를 노출하는 매거진형 발송. 시즌 시작 2~3주 전.

**바꾸는 부분**: 룩 개수(5/8/10), 모델·사진작가 이름, 룩북 URL.

---

## 리듬 C — VIP 회원 전용 사전예약 (24시간 우선)

회원 등급 (`GOLD`, `VIP`)별 분기 발송. 톤은 친밀, 본문은 짧고 단단하게.

```html
<header class="masthead">
  <span class="wordmark"><span class="mark"></span>[REPLACE MARDI MERCREDI]</span>
  <nav>
    <span>SHOP</span>
    <span>MEMBERS</span>
    <span>VIP LOUNGE</span>
  </nav>
</header>

<div class="hero">
  <span class="stamp">[REPLACE MEMBERS ONLY]</span>
  <span class="drop">[REPLACE VIP PRE-ORDER · 24H]</span>
</div>

<div class="body">
  <p class="eyebrow">[REPLACE FOR VIP MEMBERS ONLY]</p>
  <h1 class="headline">
    [REPLACE 가장 가까이.<br />가장] <span class="accent">[REPLACE 먼저.]</span>
  </h1>
  <p class="lede">
    [REPLACE 매트 김 VIP 회원님께. 27SS 신상 7종이 오늘 밤 10시 VIP 24시간 우선 사전예약을 시작합니다. 일반 회원보다 하루 먼저, 사이즈와 컬러를 골라 받으세요.]
  </p>
</div>

<div class="cta-block">
  <a class="cta" href="[REPLACE ${vip_link}]">VIP 사전예약 시작</a>
</div>

<div class="specs">
  <div class="cell">
    <p class="num">7 STYLES</p>
    <p class="label">VIP 사전예약 대상</p>
  </div>
  <div class="cell">
    <p class="num">−20%</p>
    <p class="label">VIP 한정 할인율</p>
  </div>
  <div class="cell">
    <p class="num">24 H</p>
    <p class="label">우선 오픈 시간</p>
  </div>
  <div class="cell">
    <p class="num">FREE</p>
    <p class="label">VIP 전 상품 무료배송</p>
  </div>
</div>

<footer class="pagefoot">...</footer>
```

**알림톡 카피 예시**:
```
매트 김 VIP 회원님.
27SS 신상 7종이 오늘 밤 10시, VIP 24시간 우선 사전예약을 시작합니다.

▶ VIP 사전예약: ${vip_link}
```

**언제 쓰나**: VIP 등급 분기 발송. 일반 회원 발송 24시간 전. 시즌 신상이 7~10종 이상 모일 때.

**바꾸는 부분**: 회원 호칭(`매트 김 VIP 회원님`), 우선 시간(24H/48H), VIP 할인율(−15%/−20%/−25%).

---

## 리듬 D — 콜라보 발매 알림 (D-day 카운트다운)

콜라보 파트너 워드마크 락업 + D-day + 발매 채널 분기. 와키윌리·아더에러 콜라보 톤.

```html
<header class="masthead">
  <span class="wordmark"><span class="mark"></span>[REPLACE WACKYWILLY] × [REPLACE SANRIO]</span>
  <nav>
    <span>COLLAB</span>
    <span>LOOKBOOK</span>
  </nav>
</header>

<div class="hero">
  <span class="stamp">[REPLACE COLLAB · CAPSULE 27SS]</span>
  <div class="colorway">
    <span>D-3</span>
  </div>
  <span class="drop">[REPLACE DROP · 03.14 14:00]</span>
</div>

<div class="body">
  <p class="eyebrow">[REPLACE LIMITED COLLAB · 3 DAYS LEFT]</p>
  <h1 class="headline">
    [REPLACE 오늘의 즐거움이<br />] <span class="accent">[REPLACE 내일의 시그니처로.]</span>
  </h1>
  <p class="lede">
    [REPLACE 와키윌리 × SANRIO 27SS 콜라보 캡슐 컬렉션 — 후디·백·키링 3종. 3월 14일 오후 2시 회원 사전예약 시작. 회원만 사전예약 가능, 일반 발매는 4월 11일 11시.]
  </p>
</div>

<div class="cta-block">
  <a class="cta" href="[REPLACE ${collab_link}]">사전예약 알림 신청</a>
</div>

<div class="specs">
  <div class="cell">
    <p class="num">D-3</p>
    <p class="label">사전예약 시작까지</p>
  </div>
  <div class="cell">
    <p class="num">3 ITEMS</p>
    <p class="label">콜라보 캡슐 컬렉션</p>
  </div>
  <div class="cell">
    <p class="num">LIMITED</p>
    <p class="label">회원 우선 · 수량 한정</p>
  </div>
  <div class="cell">
    <p class="num">WW × SANRIO</p>
    <p class="label">27SS · CAPSULE</p>
  </div>
</div>

<footer class="pagefoot">...</footer>
```

**알림톡 카피 예시**:
```
와키윌리 회원님!
와키윌리 × SANRIO 27SS 콜라보가 3월 14일 오후 2시, 회원 사전예약을 시작합니다.
캐릭터 자수 후디 · 패치 백 · 키링 세트 — 수량 한정, 회원만.

▶ 사전예약 알림 신청: ${collab_link}
```

**언제 쓰나**: 콜라보 발표 ~ 발매일 사이 (보통 1~3주 간격으로 3통 발송 — D-7, D-3, D-day).

**바꾸는 부분**: 콜라보 파트너명, D-day 숫자, 3종 컬렉션 라인업.

---

## 리듬 선택 가이드 요약

| 발송 성격 | 권장 리듬 | 디스플레이 폰트 |
|---|---|---|
| 신상 1 SKU 발매 + 컬러웨이 | **A — 단일 키 아이템** | romance |
| 시즌 룩북 공개 + 5컷 미리보기 | **B — 룩북 공개** | romance |
| VIP 회원 분기 발송 (24시간 우선) | **C — VIP 전용** | romance / report |
| 콜라보 D-day 카운트다운 | **D — 콜라보 발매** | play / street |
| 시즌오프 / 마크다운 안내 | A 변형 (CTA = `SALE 보기`) | report |

선택한 리듬을 작업 흐름 Step 2에서 한 문장으로 선언하세요. 예: "리듬 A 단일 키 아이템 발매를 선택했습니다."
