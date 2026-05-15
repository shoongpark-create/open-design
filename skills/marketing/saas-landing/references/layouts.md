# K-패션 랜딩 페이지 레이아웃 (4종)

네 가지 리듬 중 **하나**를 Step 2에서 선택하여 `<main id="landing">` 안에 붙여 넣으세요. 모든 리듬은 7개 섹션 순서(헤더 → 히어로 → 시그니처 3종 → 소셜프루프 → 가격/등급 → 클로징 CTA → 푸터)를 동일하게 유지합니다.

OpenDesign 환경에서 인라인 코멘트 모드를 사용하려면 주요 섹션에 `data-od-id` 속성을 추가하세요. 다른 환경에서는 일반 `id` 속성으로 충분합니다.

---

## 리듬 A — 콜라보 발매 (와키윌리 × SANRIO 톤 · 기본값)

콜라보 카운트다운 + 컬렉션 3종 + 회원 등급 사전예약 우선권. **콜라보 발표일 ~ 발매일 사이**에 사용.

```html
<div class="wrap">
  <header class="topnav" data-od-id="topnav">
    <span class="wordmark">◰ [REPLACE WACKYWILLY]</span>
    <nav class="topnav-links">
      <a href="#collection">COLLECTION</a>
      <a href="#lookbook">LOOKBOOK</a>
      <a href="#store">STORE</a>
      <button class="btn-secondary" style="margin-left: 12px;">로그인</button>
    </nav>
  </header>

  <section class="hero" data-od-id="hero">
    <p class="eyebrow">[REPLACE COLLAB · DROP 02 · 27SS]</p>
    <h1>[REPLACE 오늘의 즐거움이 내일의 시그니처로.]</h1>
    <p class="lede">[REPLACE WACKYWILLY × SANRIO. 27SS 콜라보 캡슐 컬렉션. 후디·백·키링 3종. 3월 14일 사전예약 시작, 4월 11일 정식 발매.]</p>
    <div class="cta">
      <button class="btn-primary">사전예약 시작</button>
      <button class="btn-link">LOOKBOOK 보기 →</button>
    </div>
  </section>
</div>

<section class="features" id="collection" data-od-id="features">
  <div class="wrap feature-grid">
    <div class="feature">
      <span class="num">01 · HOODIE</span>
      <div class="item-img">[ COLLAB HOODIE CUT ]</div>
      <h3>[REPLACE COLLAB HOODIE — 산리오 자수 후드]</h3>
      <p>[REPLACE 옥스포드 코튼 12oz. 산리오 캐릭터 자수 6종. 유니 사이즈 1·2·3. ₩148,000.]</p>
    </div>
    <div class="feature">
      <span class="num">02 · BAG</span>
      <div class="item-img">[ COLLAB CROSS BAG CUT ]</div>
      <h3>[REPLACE COLLAB CROSS BAG — 캐릭터 패치 백]</h3>
      <p>[REPLACE 나일론 + 가죽 트림. 핸드페인팅 캐릭터 패치 4종 어소트. ₩98,000.]</p>
    </div>
    <div class="feature">
      <span class="num">03 · KEYRING</span>
      <div class="item-img">[ COLLAB KEYRING CUT ]</div>
      <h3>[REPLACE COLLAB KEYRING — 캐릭터 키링 세트]</h3>
      <p>[REPLACE 아크릴 키링 + 메탈 후크. 캐릭터 6종 랜덤 + 시크릿 1종. ₩28,000.]</p>
    </div>
  </div>
</section>

<section class="proof wrap" data-od-id="proof">
  <h2>RECOMMENDED BY</h2>
  <div class="logos">
    <span>VOGUE KOREA</span>
    <span>W KOREA</span>
    <span>DAZED KOREA</span>
    <span>ELLE KOREA</span>
    <span>HARPER'S BAZAAR KR</span>
  </div>
</section>

<section class="pricing wrap" id="pricing" data-od-id="pricing">
  <h2>회원 등급 · 사전예약 혜택</h2>
  <p class="lede">콜라보 컬렉션은 회원 전용 사전예약. 등급에 따라 우선 발송 순서가 달라집니다.</p>
  <div class="tiers">
    <!-- SILVER 셀 -->
    <div class="tier">
      <h3>SILVER</h3>
      <div class="price">1<small>% 적립</small></div>
      <p style="color: var(--muted); margin: 0;">신규 가입 ~ 누적 ₩200,000.</p>
      <ul>
        <li>사전예약 일반 순서 발송</li>
        <li>신규 가입 ₩5,000 쿠폰</li>
        <li>이메일 / 카카오톡 알림</li>
      </ul>
      <button class="btn-secondary" style="width: 100%;">SILVER 시작</button>
    </div>
    <!-- GOLD 셀 (featured) -->
    <div class="tier featured">
      <h3>GOLD</h3>
      <div class="price">3<small>% 적립</small></div>
      <p style="color: var(--muted); margin: 0;">누적 ₩200,000 ~ ₩800,000.</p>
      <ul>
        <li>사전예약 24시간 우선 오픈</li>
        <li>콜라보 사은품(엽서 세트)</li>
        <li>5만원 이상 무료배송</li>
        <li>생일 ₩10,000 쿠폰</li>
      </ul>
      <button class="btn-primary" style="width: 100%;">GOLD 사전예약</button>
    </div>
    <!-- PLATINUM 셀 -->
    <div class="tier">
      <h3>PLATINUM</h3>
      <div class="price">5<small>% 적립</small></div>
      <p style="color: var(--muted); margin: 0;">누적 ₩800,000 이상.</p>
      <ul>
        <li>사전예약 48시간 최우선 오픈</li>
        <li>시크릿 캐릭터 확정 1종</li>
        <li>전 상품 무료배송</li>
        <li>VIP 룩북 PDF + 매장 초대</li>
      </ul>
      <button class="btn-secondary" style="width: 100%;">PLATINUM 안내</button>
    </div>
  </div>
</section>

<section class="closing" data-od-id="closing">
  <div class="wrap">
    <p class="countdown">D-28 · 사전예약 진행 중</p>
    <h2>[REPLACE 3월 14일 14:00 · 사전예약 오픈.]</h2>
    <p>[REPLACE 회원만 사전예약 가능. 4월 11일 11:00 정식 발매.]</p>
    <button class="btn-on-accent">회원 사전예약 시작</button>
  </div>
</section>

<footer class="pagefoot wrap" data-od-id="footer">
  © [REPLACE WACKYWILLY] · 개인정보처리방침 · 이용약관 · CS · INSTAGRAM
</footer>
```

**언제 쓰나**: 콜라보 발표일~발매일 사이 D-day 카운트다운. 캐릭터 IP·시그니처 콜라보 발매에 기본.

**바꾸는 부분**: 브랜드명·콜라보 파트너명·시그니처 아이템 3종·D-day·가격 등급.

**디스플레이 폰트 권장**: `--font-display-play` (Bagel Fat One) 또는 `--font-display-street` (Black Han Sans).

---

## 리듬 B — 시즌 사전예약 (마뗑킴·마르디 27SS 톤)

미니멀, 텍스트 절제, 키 비주얼 한 장 + 시즌 키 아이템 3종. **시즌 시작 3~4주 전 (S1 판기 직전)**에 사용.

```html
<div class="wrap">
  <header class="topnav" data-od-id="topnav">
    <span class="wordmark">MATIN KIM</span>
    <nav class="topnav-links">
      <a href="#new">NEW</a>
      <a href="#lookbook">LOOKBOOK</a>
      <a href="#store">STORE</a>
      <button class="btn-secondary" style="margin-left: 12px;">로그인</button>
    </nav>
  </header>

  <section class="hero" data-od-id="hero">
    <p class="eyebrow">[REPLACE SPRING 27 · PRE-ORDER]</p>
    <h1>[REPLACE Bloom Quietly.<br />봄, 천천히 피어나다.]</h1>
    <p class="lede">[REPLACE 정원의 잔향이 머무는 봄날의 옷. 27SS S1 판기 — 5 LOOKS · 14 STYLES. 회원 사전예약 24시간 우선 오픈.]</p>
    <div class="cta">
      <button class="btn-primary">사전예약 시작</button>
      <button class="btn-link">LOOKBOOK 보기 →</button>
    </div>
  </section>
</div>

<!-- features / proof / pricing / closing / footer 섹션은 리듬 A와 동일 구조 -->
<!-- 시그니처 아이템 3종은 시즌 키 아이템(셔츠/원피스/스커트 등)으로 교체 -->
<!-- 회원 등급명은 WELCOME / REGULAR / VIP 또는 신규 / 단골 / VIP 사용 가능 -->
```

**언제 쓰나**: S1 판기 시작 3~4주 전 사전예약 모집. 시즌 룩북 공개와 병행.

**바꾸는 부분**: 영문 슬로건 직역 금지 — `Bloom Quietly`는 그대로 두고 한국어 데크를 별행으로. 시그니처 아이템은 시즌 키 아이템 3종 (셔츠·블라우스·스커트 등).

**디스플레이 폰트 권장**: `--font-display-romance` (Hahmlet, Instrument Serif).

---

## 리듬 C — 자사몰 메인 (무신사 스탠다드·시야쥬 톤)

상시 운영 메인. 시즌 키비주얼 + 베스트셀러 3종 + 매거진 추천 + 회원 등급 안내.

```html
<div class="wrap">
  <header class="topnav" data-od-id="topnav">
    <span class="wordmark">[REPLACE CHYAJU]</span>
    <nav class="topnav-links">
      <a href="#new">NEW</a>
      <a href="#best">BEST</a>
      <a href="#journal">JOURNAL</a>
      <a href="#store">STORE</a>
    </nav>
  </header>

  <section class="hero" data-od-id="hero">
    <p class="eyebrow">[REPLACE 27SS · S2 판기 시작]</p>
    <h1>[REPLACE 정제된 하루,<br />그 자체.]</h1>
    <p class="lede">[REPLACE 봄의 가장 조용한 옷. 시야쥬 27SS S2 판기 입고 — 베스트셀러 3종 회원가 안내.]</p>
    <div class="cta">
      <button class="btn-primary">BEST 보기</button>
      <button class="btn-link">신상 LOOKBOOK →</button>
    </div>
  </section>
</div>

<!-- 시그니처 아이템 = 베스트셀러 TOP 3 (정상가 / 회원가 / 적립률) -->
<!-- 회원 등급 = WELCOME / SILVER / GOLD / VIP. 적립률·무료배송 횟수로 차등 -->
<!-- 클로징 CTA = '회원가입 + ₩5,000 쿠폰' 같은 신규 회원 모집 -->
```

**언제 쓰나**: 시즌 전환 시점(S1→S2, S3→S4) 자사몰 메인 키비주얼 교체. 상시 운영.

**바꾸는 부분**: 시즌 코드(`27SS`), 베스트셀러 3종, 회원 등급 적립률, 신규 가입 혜택.

**디스플레이 폰트 권장**: `--font-display-romance` (시야쥬 톤) 또는 `--font-display-report` (무신사 스탠다드 톤).

---

## 리듬 D — 팝업스토어 안내

위치·시간 + 한정 아이템 + 사전예약 + 매장 지도. **팝업 오픈 2~3주 전**에 사용.

```html
<div class="wrap">
  <header class="topnav" data-od-id="topnav">
    <span class="wordmark">[REPLACE WACKYWILLY]</span>
    <nav class="topnav-links">
      <a href="#popup">POP-UP</a>
      <a href="#lookbook">LOOKBOOK</a>
      <a href="#store">STORE</a>
    </nav>
  </header>

  <section class="hero" data-od-id="hero">
    <p class="eyebrow">[REPLACE BLOOM POP-UP · SEOUL · 04.22 → 05.06]</p>
    <h1>[REPLACE 봄이 오는 자리.<br />성수동, 15일.]</h1>
    <p class="lede">[REPLACE 27SS BLOOM 팝업스토어. 성수동 더현대 1F · 04.22 오픈. 한정 아이템 3종 + 매트 김 사인회 예약 접수.]</p>
    <div class="cta">
      <button class="btn-primary">방문 예약</button>
      <button class="btn-link">매장 지도 →</button>
    </div>
  </section>
</div>

<!-- 시그니처 아이템 = 팝업 한정 아이템 3종 (팝업 익스클루시브) -->
<!-- 회원 등급 → '방문 시간대 예약' 3개 슬롯 (오전 / 오후 / 저녁) -->
<!-- 클로징 CTA = '방문 예약 시작' + 위치 메타 (주소 + 운영 시간) -->
```

**언제 쓰나**: 팝업 오픈 2~3주 전. 위치 / 시간 / 한정 아이템 / 사인회 예약을 한 페이지에 모음.

**바꾸는 부분**: 팝업명(BLOOM)·위치·기간 (D-day 형식)·한정 아이템·시간대 슬롯.

**디스플레이 폰트 권장**: 팝업 톤에 따라 `--font-display-romance` 또는 `--font-display-play`.

---

## 리듬 선택 가이드 요약

| 랜딩 성격 | 권장 리듬 | 디스플레이 폰트 |
|---|---|---|
| 콜라보 발매 (D-day 카운트다운) | **A — 콜라보 발매** | play / street |
| 시즌 사전예약 (마뗑킴·마르디 톤) | **B — 시즌 사전예약** | romance |
| 자사몰 메인 / 무신사 입점 페이지 | **C — 자사몰 메인** | romance / report |
| 팝업스토어 안내 | **D — 팝업 안내** | romance / play |
| 신규 브랜드 런칭 | **B** (사전예약 톤) 또는 **A** (콜라보 톤) | 브랜드 정체성에 맞춰 |

선택한 리듬을 작업 흐름 Step 2에서 한 문장으로 선언하세요. 예: "리듬 A 콜라보 발매를 선택했습니다."
