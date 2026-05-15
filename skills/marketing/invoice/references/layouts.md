# K-패션 발주서·거래명세서 양식 (4종)

네 가지 양식 중 **하나**를 Step 2에서 골라 `<div class="sheet">` 안에 붙여 넣으세요. 모든 양식은 7개 섹션 순서(브랜드 바 → 공급자/공급받는자 → 참조 스트립 → 라인 아이템 표 → 합계 → 결제 정보 → 사인 라인)를 동일하게 유지합니다.

OpenDesign 환경에서는 주요 섹션에 `data-od-id` 속성을 추가하면 인라인 코멘트가 가능합니다. 다른 환경에서는 일반 `id`로 대체합니다.

---

## 양식 A — 발주서(P/O) 1차 본생산 (기본값 · 와키윌리 27SS 톤)

**시즌 시작 2~3개월 전** 본생산 발주. MOQ 200~500, 결제 40% 선급 / 60% 입고 시.

```html
<header class="brandbar" data-od-id="brandbar">
  <div>
    <div class="brand">
      <div class="brand-mark">W</div>
      <div>
        <div class="brand-name">[REPLACE WACKYWILLY]</div>
        <div class="brand-meta">[REPLACE 의류·잡화 · 영캐주얼 · est. 2021]</div>
      </div>
    </div>
  </div>
  <div class="invoice-block">
    <div class="invoice-label">발주서 · Purchase Order</div>
    <div class="invoice-num">[REPLACE PO-27SS-W001]</div>
    <div class="invoice-dates">
      <strong>발행일</strong> [REPLACE 2026.05.14]
      · <strong>입고 예정</strong> [REPLACE 2026.06.28]
    </div>
  </div>
</header>

<section class="parties" data-od-id="parties">
  <div class="party">
    <h4>공급받는자 · 발주처</h4>
    <div class="name">(주)[REPLACE 와키윌리]</div>
    <div class="lines">
      대표 [REPLACE 강윤] · 사업자등록번호 [REPLACE 123-45-67890]<br>
      [REPLACE 서울특별시 성동구 성수일로 12, 7층]<br>
      업태 도소매 · 종목 의류·잡화<br>
      담당 <a href="mailto:po@wackywilly.kr">생산실 [REPLACE 김도하] · [REPLACE po@wackywilly.kr]</a>
    </div>
  </div>
  <div class="party">
    <h4>공급자 · 수주처</h4>
    <div class="name">[REPLACE 한국어패럴(OEM 공장 A)]</div>
    <div class="lines">
      대표 [REPLACE 이성호] · 사업자등록번호 [REPLACE 542-87-01234]<br>
      [REPLACE 경상남도 합천군 야로면 야로공단로 233]<br>
      업태 제조 · 종목 의류 봉제<br>
      담당 <a href="mailto:sales@korapparel.co.kr">영업팀 [REPLACE 박진우] · [REPLACE sales@korapparel.co.kr]</a>
    </div>
  </div>
</section>

<div class="ref-strip" data-od-id="ref">
  <div><div class="label">프로젝트</div><div class="value">[REPLACE 27SS WOMEN 라인 1차 본생산]</div></div>
  <div><div class="label">시즌·차수</div><div class="value">[REPLACE 27SS · 1차 발주 (MOQ 200)]</div></div>
  <div><div class="label">결제 조건</div><div class="value">[REPLACE 40% 선급 / 60% 입고 시 · KRW]</div></div>
</div>

<table data-od-id="lines">
  <thead>
    <tr>
      <th>품명 · 카테고리 · 컬러웨이</th>
      <th class="num">수량(장)</th>
      <th class="num">사입단가(원)</th>
      <th class="num">공급가액(원)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="desc">
        <strong>[REPLACE WOMEN 린넨 블레이저 · CW01 OAT]</strong>
        <small>SKU [REPLACE 27SS-W001] · LOT-[REPLACE 27SS-W001] · 사이즈 S/M/L 어소트 [REPLACE 2:3:2] · 사입가율 [REPLACE 28%]</small>
      </td>
      <td class="num">[REPLACE 680]</td>
      <td class="num">[REPLACE 42,000]</td>
      <td class="num">[REPLACE 28,560,000]</td>
    </tr>
    <!-- 추가 3~9행: 라인업의 다른 SKU. WOMEN 블라우스, 와이드 팬츠, 니트 등 -->
  </tbody>
</table>

<div class="totals" data-od-id="totals">
  <div class="terms">
    <h5>결제 조건</h5>
    [REPLACE MSA(공급계약서) 2026.02.14 기준. 40% 선급금은 발주 확정 후 7영업일 내 입금, 60% 잔금은 입고 검수 통과 후 30일 내 결제. 견본 컨퍼(CON) 2026.05.28 완료 예정 · 본생산 시작 2026.06.02.]
  </div>
  <div class="totals-block">
    <div class="total-row"><span>공급가액 합계</span><span>[REPLACE 72,700,000원]</span></div>
    <div class="total-row tax"><span>부가세 (10%)</span><span>[REPLACE 7,270,000원]</span></div>
    <div class="total-row subtotal"><span>합계금액 (VAT 포함)</span><span>[REPLACE 79,970,000원]</span></div>
    <div class="total-row discount"><span>선급금 (40%)</span><span>[REPLACE 31,988,000원]</span></div>
    <div class="total-row grand"><span>잔금 (입고 시 60%)</span><span>[REPLACE 47,982,000원]</span></div>
  </div>
</div>

<div class="pay" data-od-id="pay">
  <div>
    <h4>입금 계좌 (선급금)</h4>
    <div class="row"><span>은행</span><span>[REPLACE 국민은행]</span></div>
    <div class="row"><span>계좌번호</span><span>[REPLACE 123456-04-789012]</span></div>
    <div class="row"><span>예금주</span><span>[REPLACE 한국어패럴(주)]</span></div>
    <div class="row"><span>입금 마감</span><span>[REPLACE 2026.05.21]</span></div>
    <div class="row"><span>입금메모</span><span>[REPLACE PO-27SS-W001]</span></div>
  </div>
  <div>
    <h4>세금계산서 발행</h4>
    <div class="row"><span>발행 방식</span><span>홈택스 전자세금계산서</span></div>
    <div class="row"><span>발행 시점</span><span>선급 입금 후 익일</span></div>
    <div class="row"><span>담당</span><span>회계팀 [REPLACE 박서진]</span></div>
    <div class="row"><span>이메일</span><span>[REPLACE tax@wackywilly.kr]</span></div>
  </div>
</div>

<div class="signoff" data-od-id="signoff">
  <p>[REPLACE 본 발주는 27SS 시즌 본생산의 핵심 1차 발주입니다. 견본 컨퍼·납기·품질 약속을 함께 지켜주시면 감사하겠습니다.]</p>
  <div class="signature">
    <div class="scribble">[REPLACE 김도하]</div>
    <div class="name">[REPLACE 김도하] · 생산실 PD, (주)[REPLACE 와키윌리]</div>
  </div>
</div>
```

**언제 쓰나**: 본생산 1차 발주. 시즌 시작 2~3개월 전.

**바꾸는 부분**: SKU 라인 4~9건, 수량·사입단가, 합계 자동 계산, OEM 공장명·주소 (합천·진주·안양·안산 권역).

**부서 R&R**: 생산실 PD 작성 → MD 실장 승인 → 회계팀 입금 → CFO 1억+ 컨펌.

---

## 양식 B — 거래명세서 (입고 검수 후 발행)

**입고 검수 통과 후 30일 내** 발행. 발주서와 동일 구조에서 라벨·결제 흐름만 교체.

### 변경점

1. **invoice-label** = `거래명세서 · Statement` (기존 `발주서 · Purchase Order`)
2. **invoice-num** = `STM-27SS-W001` (기존 `PO-27SS-W001`. 같은 시즌·라인이면 같은 차수)
3. **invoice-dates** = `<strong>거래일</strong> 2026.06.28 · <strong>지급 마감</strong> 2026.07.28` (60% 잔금 지급일)
4. **ref-strip 결제 조건** = `잔금 60% · 입고 검수 완료 · Net 30`
5. **라인 아이템 표** — *실제 입고 수량* 기준 (발주 수량과 ±차이 있는 경우 비고에 `발주 대비 -2% 감산 (불량 검수)` 등 명시)
6. **totals 블록 → 잔금 그랜드 라인만 강조** — 선급금은 `이미 입금 (40%) -31,988,000원` 마이너스로 표기
7. **terms** — `MSA 기준 잔금 결제 약관. 입고 검수 통과 = 검수 합격품 95% 이상. 합격 미달 시 클레임 별도 처리.`
8. **signoff** = `회계팀 박서진` 사인 (생산실 PD가 아닌 회계팀)

### 합계 블록 (거래명세서 예시)

```html
<div class="totals-block">
  <div class="total-row"><span>공급가액 합계</span><span>72,700,000원</span></div>
  <div class="total-row tax"><span>부가세 (10%)</span><span>7,270,000원</span></div>
  <div class="total-row subtotal"><span>합계금액 (VAT 포함)</span><span>79,970,000원</span></div>
  <div class="total-row discount"><span>선급금 이미 입금 (40%)</span><span>−31,988,000원</span></div>
  <div class="total-row grand"><span>잔금 청구 (Net 30)</span><span>47,982,000원</span></div>
</div>
```

**언제 쓰나**: 입고 검수 통과 후. 회계팀이 ERP에서 발행.

**바꾸는 부분**: 문서 번호 prefix(STM), 거래일/지급 마감, 실제 입고 수량, 회계팀 사인.

---

## 양식 C — SPOT P/O (시즌 중 추가 발주, 매출 반등 시)

**시즌 중반** 매출 추이 보고 결정. MOQ가 낮고(50~200장), 납기가 짧음(2~4주). 사입가는 +5~10% 인상되는 게 표준.

### 변경점

1. **invoice-num** = `PO-SPOT-27SS-W001-02` (`SPOT` 명시 + 차수)
2. **ref-strip 결제 조건** = `40% 선급 / 60% 입고 시 · SPOT 단축 납기 4주`
3. **라인 아이템 표** — 보통 1~3행만. 매출 상위 SKU 집중 발주
4. **terms** — `SPOT 추가 발주. 1차 본생산 대비 사입가 +7%. 견본 컨퍼 생략, 본 LOT 컬러 락 코드 기준 본생산. 단축 납기 4주.`
5. **signoff** = MD 실장 + 생산실 PD 공동 사인 (SPOT은 MD실 주도)

```html
<header class="brandbar">
  <div>
    <div class="brand">
      <div class="brand-mark">W</div>
      <div>
        <div class="brand-name">[REPLACE WACKYWILLY]</div>
        <div class="brand-meta">SPOT P/O · 시즌 중 추가 발주</div>
      </div>
    </div>
  </div>
  <div class="invoice-block">
    <div class="invoice-label">발주서 · Purchase Order (SPOT)</div>
    <div class="invoice-num">[REPLACE PO-SPOT-27SS-W001-02]</div>
    <div class="invoice-dates"><strong>발행일</strong> [REPLACE 2026.07.18] · <strong>입고 예정</strong> [REPLACE 2026.08.15]</div>
  </div>
</header>

<!-- parties / ref-strip 동일. 결제 조건만 'SPOT 단축 납기 4주'로 -->

<!-- 라인 아이템 1~3행만 -->
<table>
  <thead>
    <tr><th>품명 · 카테고리 · 컬러웨이</th><th class="num">수량(장)</th><th class="num">사입단가(원)</th><th class="num">공급가액(원)</th></tr>
  </thead>
  <tbody>
    <tr>
      <td class="desc">
        <strong>[REPLACE WOMEN 린넨 블레이저 · CW01 OAT — SPOT 추가]</strong>
        <small>SKU [REPLACE 27SS-W001] · LOT-[REPLACE 27SS-W001]-SPOT-02 · 사이즈 어소트 2:3:2 · 사입가율 [REPLACE 30% (+2%p)] · 매출 반등 트리거: 정상판매율 78% (1차 LOT)</small>
      </td>
      <td class="num">[REPLACE 180]</td>
      <td class="num">[REPLACE 45,000]</td>
      <td class="num">[REPLACE 8,100,000]</td>
    </tr>
  </tbody>
</table>
```

**언제 쓰나**: 시즌 중반. 1차 LOT 정상판매율이 사전 타겟 초과(예: 75%+) 시 매출 추이 보고 추가 발주.

**바꾸는 부분**: SPOT 차수, 단축 납기, 사입가율 인상, 매출 트리거.

---

## 양식 D — OEM 계약서 (시즌 시작 4~6개월 전, MSA 본 계약)

**연간 또는 시즌별 MSA(Master Service Agreement)** 본 계약. 발주서·거래명세서와 같은 시트 양식이지만 표 영역이 *계약 조항 리스트*로 교체.

### 변경점

1. **invoice-label** = `OEM 계약서 · MSA Agreement`
2. **invoice-num** = `MSA-2027-A` (연간 단위)
3. **invoice-dates** = `<strong>계약일</strong> 2026.02.14 · <strong>유효 기간</strong> 2026.03.01 ~ 2027.02.28`
4. **ref-strip** = `1년간 누적 발주 예상량 / 사입가율 합의 범위 / MOQ 기준`
5. **라인 아이템 표 대신 계약 조항** — h4 + p 반복 구조:
   - 제1조 (목적), 제2조 (납기), 제3조 (품질 기준), 제4조 (결제), 제5조 (클레임), 제6조 (계약 변경), 제7조 (분쟁 해결)
6. **totals 블록 제거** — 대신 `예상 연간 거래액` 단일 행만 표기
7. **pay 블록** = `MSA 보증금` (1억 미만 OEM은 보통 1,000만원~3,000만원)
8. **signoff** = 양사 대표 자필 서명 (생산실 PD 아님). 도장 위치 표시 (인장 자리)

```html
<!-- 표 대신 계약 조항 리스트 -->
<section data-od-id="clauses" style="padding: 24px 0;">
  <h4 style="font-family: var(--mono); font-size: 11px; letter-spacing: 0.1em; color: var(--muted); text-transform: uppercase; margin: 0 0 14px;">계약 조항</h4>

  <div style="margin-bottom: 18px;">
    <h5 style="font-family: var(--display); font-size: 16px; margin: 0 0 6px;">제1조 (목적)</h5>
    <p style="margin: 0; color: var(--ink); font-size: 13.5px; line-height: 1.7;">
      본 계약은 (주)[REPLACE 와키윌리](이하 "갑")가 [REPLACE 한국어패럴(주)](이하 "을")에 의류 제조를 위탁하고 을이 이를 수행하는 데 필요한 기본 거래 조건을 정함을 목적으로 한다.
    </p>
  </div>

  <!-- 제2조~제7조 반복 -->
</section>
```

**언제 쓰나**: 신규 OEM 거래 시작 시점 또는 연간 갱신.

**바꾸는 부분**: 7개 조항, 보증금 금액, 양사 대표 사인.

**부서 R&R**: 생산실 + 법무팀 + CFO 공동 작성 → 대표 사인.

---

## 양식 선택 가이드 요약

| 발주 성격 | 권장 양식 | 시즌 사이클 위치 |
|---|---|---|
| 1차 본생산 발주 | **A — 발주서(P/O)** | 시즌 시작 -2 ~ -3개월 |
| 입고 후 정산 | **B — 거래명세서** | 입고 검수 후 |
| 시즌 중 추가 발주 (베스트 SKU) | **C — SPOT P/O** | 시즌 중반 |
| 신규 OEM 거래 시작 | **D — OEM 계약서 (MSA)** | 시즌 시작 -4 ~ -6개월 / 연간 갱신 |
| 견본 발주 (CON 직전) | **A** 변형 (수량 = 10~30장, terms = `견본용`) | 시즌 시작 -5개월 |
| 캐리오버 발주 (전 시즌 재발주) | **A** 변형 (사입가율 -2~3%p 협상) | 시즌 시작 -2개월 |

선택한 양식을 작업 흐름 Step 2에서 한 문장으로 선언하세요. 예: "양식 A 발주서(P/O) 1차 본생산을 선택했습니다."
