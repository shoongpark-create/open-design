# K-패션 멤버십 가격 페이지 변형 (4종)

네 가지 변형 중 **하나**를 Step 2에서 골라 `<main class="wrap">` 안에 붙여 넣으세요. 모든 변형은 5섹션 순서(헤더 → 등급 카드 → 혜택 비교표 → FAQ → 푸터 CTA)를 유지합니다.

OpenDesign 환경에서는 주요 섹션에 `data-od-id` 속성을 추가하세요. 다른 환경에서는 일반 `id`로 대체합니다.

---

## 변형 A — 4단 영구 멤버십 (기본값 · 마뗑킴 자사몰 톤)

**가장 흔한 형식.** 자사몰 메인 / 마이페이지 / 신규 가입 직후 안내. GOLD 추천 강조.

```html
<header class="hero" data-od-id="hero">
  <div class="eyebrow">[REPLACE MATIN KIM] · MEMBERS</div>
  <h1>[REPLACE 오래 머무를수록, 더 가까이.]</h1>
  <p class="lede">[REPLACE 마뗑킴 회원은 매 시즌 가장 먼저 만납니다. 누적 구매액에 따라 자동으로 등급이 부여됩니다.]</p>
  <div class="toggle">
    <button class="active">최근 12개월 기준</button>
    <button>연 누적 기준</button>
  </div>
</header>

<section class="tiers" data-od-id="tiers">
  <!-- BASIC -->
  <div class="tier" data-tier="basic">
    <div class="tier-color"></div>
    <h2>BASIC</h2>
    <p class="desc">가입 즉시.</p>
    <div class="price">₩0
      <small>누적 ₩0 ~ ₩299,999</small>
    </div>
    <ul>
      <li>구매액 0.5% 적립</li>
      <li>₩50,000 이상 무료 배송</li>
      <li>생일 쿠폰 ₩5,000</li>
      <li>매거진 / 룩북 온라인</li>
    </ul>
    <button class="cta cta-secondary">BASIC으로 시작</button>
  </div>

  <!-- SILVER -->
  <div class="tier" data-tier="silver">
    <div class="tier-color"></div>
    <h2>SILVER</h2>
    <p class="desc">12개월 누적 ₩30만 이상.</p>
    <div class="price">자동 부여
      <small>누적 ₩300,000 ~ ₩999,999</small>
    </div>
    <ul>
      <li>구매액 1% 적립</li>
      <li>₩30,000 이상 무료 배송</li>
      <li>시즌 사전예약 12시간 우선</li>
      <li>생일 쿠폰 ₩10,000</li>
    </ul>
    <button class="cta cta-secondary">SILVER 자세히</button>
  </div>

  <!-- GOLD (FEATURED) -->
  <div class="tier featured" data-tier="gold">
    <span class="featured-pill">MOST POPULAR</span>
    <div class="tier-color"></div>
    <h2>GOLD</h2>
    <p class="desc">12개월 누적 ₩100만 이상.</p>
    <div class="price">자동 부여
      <small>누적 ₩1,000,000 ~ ₩2,999,999</small>
    </div>
    <ul>
      <li>구매액 2% 적립</li>
      <li>전 상품 무료 배송</li>
      <li>시즌 사전예약 24시간 우선</li>
      <li>시즌 룩북 우편 발송</li>
      <li>생일 쿠폰 ₩20,000</li>
    </ul>
    <button class="cta cta-primary">GOLD 혜택 보기</button>
  </div>

  <!-- PLATINUM -->
  <div class="tier" data-tier="platinum">
    <div class="tier-color"></div>
    <h2>PLATINUM</h2>
    <p class="desc">12개월 누적 ₩300만 이상.</p>
    <div class="price">초대제
      <small>매 시즌 자체 심사 후 안내</small>
    </div>
    <ul>
      <li>구매액 3% 적립</li>
      <li>전 상품 익일 배송</li>
      <li>시즌 사전예약 48시간 우선</li>
      <li>매장 시즌 행사 초대 (+1 동반)</li>
      <li>전용 CS 라인</li>
    </ul>
    <button class="cta cta-secondary">PLATINUM 안내 신청</button>
  </div>
</section>

<section class="compare" data-od-id="compare">
  <h3>등급별 혜택 비교</h3>
  <table>
    <thead>
      <tr><th>혜택</th><th>BASIC</th><th>SILVER</th><th>GOLD</th><th>PLATINUM</th></tr>
    </thead>
    <tbody>
      <tr class="group-head"><td colspan="5">적립 · 할인</td></tr>
      <tr><td>구매액 적립률</td><td>0.5%</td><td>1%</td><td class="has">2%</td><td class="has">3%</td></tr>
      <tr><td>생일 쿠폰</td><td>₩5,000</td><td>₩10,000</td><td>₩20,000</td><td>₩50,000</td></tr>
      <tr><td>첫 구매 쿠폰</td><td>₩5,000</td><td class="no">—</td><td class="no">—</td><td class="no">—</td></tr>

      <tr class="group-head"><td colspan="5">배송 · CS</td></tr>
      <tr><td>무료 배송</td><td>₩50,000~</td><td>₩30,000~</td><td class="has">전 상품</td><td class="has">전 상품 익일</td></tr>
      <tr><td>전용 CS 라인</td><td class="no">—</td><td class="no">—</td><td class="no">—</td><td class="has">✓</td></tr>

      <tr class="group-head"><td colspan="5">시즌 혜택</td></tr>
      <tr><td>시즌 사전예약 우선</td><td class="no">—</td><td>12시간</td><td class="has">24시간</td><td class="has">48시간</td></tr>
      <tr><td>시즌 룩북 우편 발송</td><td class="no">—</td><td class="no">—</td><td class="has">✓</td><td class="has">✓ + 한정 카드</td></tr>
      <tr><td>매장 시즌 행사 초대</td><td class="no">—</td><td class="no">—</td><td class="no">—</td><td class="has">✓ (+1 동반)</td></tr>
      <tr><td>등급 유지 조건</td><td>—</td><td>12개월 ₩30만</td><td>12개월 ₩100만</td><td>12개월 ₩300만</td></tr>
    </tbody>
  </table>
</section>

<section class="faq" data-od-id="faq">
  <h3>자주 묻는 질문</h3>
  <details><summary>등급은 언제 갱신되나요?</summary><p>최근 12개월 누적 구매액 기준으로 매월 1일 자동 갱신됩니다. 등급이 올라가면 즉시 적용되고, 내려가는 경우에도 다음 1일까지는 기존 등급이 유지됩니다.</p></details>
  <details><summary>27SS 시즌 사전예약은 며칠 전부터 가능한가요?</summary><p>정식 발매 기준 PLATINUM 48시간 전, GOLD 24시간 전, SILVER 12시간 전에 사전예약이 시작됩니다. 사전예약 시작 시 카카오톡 알림톡과 이메일로 알려드립니다.</p></details>
  <details><summary>등급이 떨어질 수 있나요?</summary><p>최근 12개월 누적 구매액이 등급 기준 아래로 떨어지면 한 단계씩 조정됩니다. 단, 떨어진 등급의 혜택(쿠폰·룩북 등)이 이미 발급된 경우 만료일까지 유지됩니다.</p></details>
  <details><summary>PLATINUM은 어떻게 초대되나요?</summary><p>매 시즌 시작 시점에 12개월 누적 ₩300만 이상 회원을 대상으로 심사 후 카카오톡 알림톡으로 안내드립니다. 자동 부여가 아닌 초대제로 운영합니다.</p></details>
</section>

<section class="closing" data-od-id="closing">
  <h2>[REPLACE 오늘부터 BASIC 회원, 다음 시즌엔 가장 먼저.]</h2>
  <p>[REPLACE 신규 가입 즉시 ₩5,000 쿠폰. 카카오톡으로 신상·룩북·사전예약을 가장 먼저 받아보세요.]</p>
  <button>회원 가입 시작</button>
</section>
```

**언제 쓰나**: 자사몰 `/membership` 또는 `/vip` 페이지. 시즌 시작 2~3개월 전 업데이트.

**바꾸는 부분**: 브랜드명, 누적 구매액 기준, 적립률, 등급 컬러.

---

## 변형 B — 5단 멤버십 + VIP 초청 (마르디·아더에러 톤)

GOLD 위에 PLATINUM/VIP 두 단계를 추가. VIP는 초청제로 별도 안내. 등급 카드 5단.

### 변경점

1. **tiers** = 5단 — `repeat(5, 1fr)` 그리드 (또는 모바일에서 2-2-1 스택)
2. **VIP 카드 데코** — 액센트 컬러 + 골드 라인 콤보 (`box-shadow: 0 0 0 4px var(--accent-soft), 0 0 0 5px var(--tier-gold)`)
3. **VIP 혜택** — 한정 콜라보 우선 접근, 디자이너 미팅, 시즌 패션쇼 초청, 1년 전 캡슐 컬렉션 선공개, VIP 라운지
4. **혜택 비교표 5열** — BASIC / SILVER / GOLD / PLATINUM / VIP
5. **FAQ 추가** — `VIP 초청은 어떻게 받나요?` / `VIP가 PLATINUM으로 떨어질 수도 있나요?`

```html
<section class="tiers" data-od-id="tiers" style="grid-template-columns: repeat(5, 1fr);">
  <!-- BASIC / SILVER / GOLD / PLATINUM 카드 (변형 A와 동일) -->

  <!-- VIP (FEATURED + 골드 데코) -->
  <div class="tier featured" data-tier="vip"
       style="box-shadow: 0 0 0 4px var(--accent-soft), 0 0 0 5px var(--tier-gold);">
    <span class="featured-pill" style="background: var(--tier-gold);">INVITATION ONLY</span>
    <div class="tier-color"></div>
    <h2>VIP</h2>
    <p class="desc">[REPLACE 12개월 누적 ₩1,000만 이상 · 본사 초청.]</p>
    <div class="price">초청제
      <small>매년 시즌 시작 본사 안내</small>
    </div>
    <ul>
      <li>구매액 5% 적립</li>
      <li>전 상품 익일 + 새벽 배송</li>
      <li>시즌 사전예약 1주일 우선</li>
      <li>한정 콜라보 우선 접근</li>
      <li>시즌 패션쇼 / 디자이너 미팅 초청</li>
      <li>전용 VIP 라운지 + 1:1 매니저</li>
    </ul>
    <button class="cta cta-primary">VIP 안내 신청</button>
  </div>
</section>
```

**언제 쓰나**: PLATINUM/VIP 분리 운영 브랜드 — 마르디 메크르디, 아더에러, W컨셉 VIP, 백화점 VIP.

**바꾸는 부분**: VIP 누적 기준(보통 ₩1,000만+), VIP 시그니처 혜택 6~8개.

---

## 변형 C — 시즌 프리오더 가격 (얼리버드 / 정상 / VIP 한정)

콜라보 / 시즌 한정 컬렉션의 사전예약 가격 페이지. 등급 = 가격 라인. **시즌 시작 1개월 전** 발행.

### 변경점

1. **heading** = `27SS PRE-ORDER` / 카운트다운
2. **tiers** = 3단 (얼리버드 / 정상 / VIP 한정). 가격이 등급명 자리
3. **price** = 실제 금액 (`₩89,000 / 정가 ₩128,000`)
4. **혜택 비교표** = 가격 라인별 차이 (얼리 사전예약 기간, 한정 컬러웨이, 사은품)
5. **closing CTA** = `D-12 · 사전예약 진행 중` 카운트다운

```html
<header class="hero" data-od-id="hero">
  <div class="eyebrow">[REPLACE WACKYWILLY × SANRIO] · 27SS COLLAB · PRE-ORDER</div>
  <h1>[REPLACE 오늘의 즐거움이<br>내일의 시그니처로.]</h1>
  <p class="lede">[REPLACE 콜라보 캡슐 컬렉션 사전예약. 3월 14일 14:00 ~ 4월 11일 11:00. 회원 등급에 따라 우선 발송과 한정 컬러웨이가 다릅니다.]</p>
</header>

<section class="tiers" data-od-id="tiers" style="grid-template-columns: repeat(3, 1fr);">
  <!-- EARLY BIRD -->
  <div class="tier" data-tier="silver">
    <div class="tier-color"></div>
    <h2>EARLY BIRD</h2>
    <p class="desc">사전예약 첫 48시간.</p>
    <div class="price">₩89,000
      <small>정가 ₩128,000 · 30% OFF</small>
    </div>
    <ul>
      <li>3컬러웨이 중 선택</li>
      <li>일반 배송 (5/15~)</li>
      <li>엽서 사은품 1종</li>
    </ul>
    <button class="cta cta-secondary">EARLY BIRD 신청</button>
  </div>

  <!-- 정상가 (FEATURED) -->
  <div class="tier featured" data-tier="gold">
    <span class="featured-pill">MOST POPULAR</span>
    <div class="tier-color"></div>
    <h2>STANDARD</h2>
    <p class="desc">사전예약 전체 기간.</p>
    <div class="price">₩108,000
      <small>정가 ₩128,000 · 15% OFF</small>
    </div>
    <ul>
      <li>3컬러웨이 + 시즌 한정 1컬러</li>
      <li>일반 배송 (5/15~)</li>
      <li>엽서 사은품 1종</li>
    </ul>
    <button class="cta cta-primary">STANDARD 신청</button>
  </div>

  <!-- VIP 한정 -->
  <div class="tier" data-tier="vip">
    <div class="tier-color"></div>
    <h2>VIP LIMITED</h2>
    <p class="desc">PLATINUM/VIP 회원 한정.</p>
    <div class="price">₩148,000
      <small>VIP 한정 시크릿 컬러 + 사인 카드</small>
    </div>
    <ul>
      <li>시크릿 캐릭터 1종 확정</li>
      <li>익일 배송 (5/14~)</li>
      <li>디렉터 자필 사인 카드</li>
      <li>매장 픽업 또는 우편 발송</li>
    </ul>
    <button class="cta cta-secondary">VIP 한정 신청</button>
  </div>
</section>

<!-- 혜택 비교표는 가격 라인별 차이로 (사전예약 시작 시점·발송 시점·사은품·한정 컬러) -->

<section class="closing" data-od-id="closing">
  <h2 style="font-family: var(--mono); font-size: 14px; letter-spacing: 0.2em; margin-bottom: 16px;">D-12 · 사전예약 진행 중</h2>
  <h2>[REPLACE 4월 11일 11:00 정식 발매.]</h2>
  <p>[REPLACE 사전예약은 등급에 따라 우선 발송됩니다. 회원 가입 후 24시간 내 EARLY BIRD 신청 가능.]</p>
  <button>사전예약 시작</button>
</section>
```

**언제 쓰나**: 콜라보 발매 D-30 ~ D-1. 정식 발매 직전까지 사전예약 모집.

**바꾸는 부분**: 콜라보 파트너, 발매일, 가격 3단, 컬러웨이 한정.

---

## 변형 D — 정기배송 플랜 (스타킹·이너 정기배송 2~3단)

스타킹·이너·베이직 정기배송 플랜. 등급 = 정기배송 주기. 2~3단.

### 변경점

1. **tiers** = 2~3단 (`MONTHLY` / `BI-MONTHLY` / `QUARTERLY`)
2. **price** = `₩39,000 / 월` 형식
3. **혜택 비교표** = 배송 주기 / 1회당 수량 / 컬러 선택 옵션 / 일시 정지 가능 여부
4. **카피 톤** = `매달, 가장 가벼운 옷장` 같은 정기배송 톤

```html
<section class="tiers" data-od-id="tiers" style="grid-template-columns: repeat(3, 1fr);">
  <div class="tier" data-tier="basic">
    <div class="tier-color"></div>
    <h2>QUARTERLY</h2>
    <p class="desc">3개월에 1회.</p>
    <div class="price">₩29,000<small>/ 회 (3개월)</small></div>
    <ul>
      <li>스타킹 4족 또는 이너 2장</li>
      <li>일반 배송</li>
      <li>2회까지 일시 정지 가능</li>
    </ul>
    <button class="cta cta-secondary">QUARTERLY 시작</button>
  </div>
  <div class="tier featured" data-tier="gold">
    <span class="featured-pill">MOST POPULAR</span>
    <div class="tier-color"></div>
    <h2>MONTHLY</h2>
    <p class="desc">매달 1회 · 가장 인기.</p>
    <div class="price">₩39,000<small>/ 월</small></div>
    <ul>
      <li>스타킹 8족 또는 이너 4장</li>
      <li>무료 배송</li>
      <li>컬러 선택 가능</li>
      <li>3회까지 일시 정지 가능</li>
    </ul>
    <button class="cta cta-primary">MONTHLY 시작</button>
  </div>
  <div class="tier" data-tier="platinum">
    <div class="tier-color"></div>
    <h2>BI-MONTHLY</h2>
    <p class="desc">2개월에 1회.</p>
    <div class="price">₩59,000<small>/ 2개월</small></div>
    <ul>
      <li>스타킹 12족 또는 이너 6장</li>
      <li>익일 배송</li>
      <li>컬러 선택 가능 + 한정 컬러</li>
      <li>무제한 일시 정지</li>
    </ul>
    <button class="cta cta-secondary">BI-MONTHLY 시작</button>
  </div>
</section>
```

**언제 쓰나**: 베이직 정기배송 운영 브랜드 — 무신사 스탠다드, 베이직 라인 위주 브랜드, 이너 전문 브랜드.

**바꾸는 부분**: 배송 주기, 1회 수량, 정기 결제 가격.

---

## 변형 선택 가이드 요약

| 멤버십 성격 | 권장 변형 | 시즌 사이클 위치 |
|---|---|---|
| 자사몰 영구 회원 등급 | **A — 4단 멤버십** | 시즌 -2개월 (정기 업데이트) |
| PLATINUM/VIP 분리 운영 | **B — 5단 + VIP 초청** | 시즌 -1개월 |
| 콜라보 / 시즌 한정 사전예약 | **C — 시즌 프리오더** | 발매 D-30 ~ D-1 |
| 스타킹·이너 정기배송 | **D — 정기배송 플랜** | 상시 |
| 무신사 입점 자사 멤버십 안내 | **A** 변형 (`무신사 멤버스`와 별도 자사 멤버스) | 상시 |
| VIP 단독 안내 (현재 등급 → 다음 등급) | **B** 일부 (PLATINUM/VIP 카드 2개만 노출) | VIP 가입 직후 |

선택한 변형을 작업 흐름 Step 2에서 한 문장으로 선언하세요. 예: "변형 A 4단 영구 멤버십을 선택했습니다."
