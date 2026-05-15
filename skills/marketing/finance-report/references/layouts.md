# K-패션 시즌 결산 보고서 레이아웃 (4종)

네 가지 리듬 중 **하나**를 Step 2에서 선택하여 `<main id="report">` 안에 붙여 넣으세요. 모든 리듬은 마스트헤드 → lede → KPI → 매출 추이 → 비용 분해 → P&L 표 → TOP SKU → 아웃룩 + 사인오프 순서를 유지합니다.

---

## 리듬 A — 판기 결산 (기본값 · S1 / S2 / S3 / S4)

영업기획팀이 매판기 종료 시점에 발행. CFO·CEO 보고용.

```html
<!-- 마스트헤드 -->
<header class="masthead" data-od-id="masthead">
  <div>
    <h1 class="brand">◐ WACKYWILLY</h1>
    <div class="crumb">27SS · S1 판기 매출 결산 · 27.07.05 발행</div>
    <div class="title">27SS S1 판기 결산<br/>— 5월·6월 매출 12.4억, 정판율 78.4%.</div>
  </div>
  <div class="right">
    <span class="badge-confidential">Confidential</span><br/>
    영업기획팀<br/>
    27.07.05 발행
  </div>
</header>

<!-- 시즌 요약 lede -->
<p class="lede">27SS S1 판기는 <b>매출 12.4억 (계획 대비 +13%)</b>과 <b>정상판매율 78.4% (계획 79%)</b>을 동시에 달성. 윌리 캐릭터 IP를 활용한 그래픽 라인이 시즌 GMV의 28% 견인, 무신사 베스트 TOP 30 진입 SKU 7개 확보. 다음 S2 판기(7월)는 여름 SKU 18종 입고와 BLOOM IMC 캠페인을 중심으로 운영 예정.</p>

<!-- KPI 4종 -->
<section class="kpis">
  <div class="kpi"><div class="label">시즌 GMV · S1</div><div class="value">12.4억</div><div class="delta up">▲ 34.6% YoY</div><div class="sub">26SS S1 9.2억 / 계획 11.0억</div></div>
  <div class="kpi"><div class="label">정상판매율</div><div class="value">78.4%</div><div class="delta up">▲ 6.2 pp YoY</div><div class="sub">26SS S1 72.2% / 계획 79%</div></div>
  <div class="kpi"><div class="label">재고자산회전율</div><div class="value">7.1회</div><div class="delta up">▲ 1.4회 YoY</div><div class="sub">시즌 환산 가중평균</div></div>
  <div class="kpi"><div class="label">AOV</div><div class="value">98,400원</div><div class="delta up">▲ 7,200원 YoY</div><div class="sub">자사몰 + 무신사 가중평균</div></div>
</section>

<!-- 매출 추이 -->
<section class="section" data-od-id="revenue">
  <h2>매출 추이 · S1 판기<small>주별 GMV · 만원</small></h2>
  <div class="chart">
    <svg viewBox="0 0 720 220" preserveAspectRatio="none">
      <defs>
        <linearGradient id="rev" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="var(--accent)" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="var(--accent)" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <polygon fill="url(#rev)" points="0,170 90,150 180,135 270,115 360,95 450,80 540,65 630,55 720,40 720,220 0,220"/>
      <polyline fill="none" stroke="var(--accent)" stroke-width="2.4" points="0,170 90,150 180,135 270,115 360,95 450,80 540,65 630,55 720,40"/>
      <polyline fill="none" stroke="var(--muted-2)" stroke-width="1.2" stroke-dasharray="4 4" points="0,180 90,170 180,160 270,150 360,140 450,130 540,120 630,110 720,100"/>
      <g font-family="var(--font-mono)" font-size="10" fill="var(--muted)">
        <text x="0" y="212">W18</text><text x="90" y="212">W19</text><text x="180" y="212">W20</text><text x="270" y="212">W21</text><text x="360" y="212">W22</text><text x="450" y="212">W23</text><text x="540" y="212">W24</text><text x="630" y="212">W25</text><text x="720" y="212" text-anchor="end">W26</text>
      </g>
    </svg>
  </div>
  <p style="margin-top: 10px; font-size: 12px; color: var(--muted);">• 실선: 27SS S1 주별 GMV · 점선: 26SS S1 동기간 비교 · 시즌 후반 가속 (W23~W26)</p>
</section>

<!-- 비용 분해 -->
<section class="section" data-od-id="costs">
  <h2>비용 분해 · S1 판기<small>매출 대비 % · 금액 만원</small></h2>
  <div class="cost-bar">
    <span class="name">사입원가 (COGS)</span>
    <div class="track"><i style="width: 64%;"></i></div>
    <span class="value">3.84억 <small>31.0%</small></span>
  </div>
  <div class="cost-bar">
    <span class="name">마케팅비</span>
    <div class="track"><i style="width: 24%;"></i></div>
    <span class="value">1.42억 <small>11.5%</small></span>
  </div>
  <div class="cost-bar">
    <span class="name">물류비</span>
    <div class="track"><i class="alt" style="width: 14%;"></i></div>
    <span class="value">0.84억 <small>6.8%</small></span>
  </div>
  <div class="cost-bar">
    <span class="name">인건비</span>
    <div class="track"><i class="alt" style="width: 18%;"></i></div>
    <span class="value">1.08억 <small>8.7%</small></span>
  </div>
  <div class="cost-bar">
    <span class="name">시스템 / SaaS / 임차료</span>
    <div class="track"><i class="alt" style="width: 8%;"></i></div>
    <span class="value">0.48억 <small>3.9%</small></span>
  </div>
</section>

<!-- P&L 요약 -->
<section class="section" data-od-id="pnl">
  <h2>P&L 요약<small>단위: 만원 · 27SS S1 vs 26SS S1 vs 26FW S1</small></h2>
  <table>
    <thead>
      <tr><th>항목</th><th class="num">27SS S1</th><th class="num">26SS S1</th><th class="num">YoY</th><th class="num">26FW S1</th><th class="num">QoQ</th></tr>
    </thead>
    <tbody>
      <tr><td>매출 (Revenue)</td><td class="num">124,000</td><td class="num">92,000</td><td class="num"><span class="pill good">▲ 34.8%</span></td><td class="num">108,000</td><td class="num"><span class="pill good">▲ 14.8%</span></td></tr>
      <tr><td>사입원가 (COGS)</td><td class="num">(38,400)</td><td class="num">(31,200)</td><td class="num">▲ 23.1%</td><td class="num">(35,600)</td><td class="num">▲ 7.9%</td></tr>
      <tr class="subtotal"><td>매출총이익 (Gross Profit)</td><td class="num">85,600</td><td class="num">60,800</td><td class="num"><span class="pill good">▲ 40.8%</span></td><td class="num">72,400</td><td class="num"><span class="pill good">▲ 18.2%</span></td></tr>
      <tr><td>마진율 (GPM)</td><td class="num">69.0%</td><td class="num">66.1%</td><td class="num">▲ 2.9 pp</td><td class="num">67.0%</td><td class="num">▲ 2.0 pp</td></tr>
      <tr><td>마케팅비</td><td class="num">(14,200)</td><td class="num">(11,800)</td><td class="num">▲ 20.3%</td><td class="num">(13,400)</td><td class="num">▲ 6.0%</td></tr>
      <tr><td>물류비</td><td class="num">(8,400)</td><td class="num">(6,800)</td><td class="num">▲ 23.5%</td><td class="num">(7,800)</td><td class="num">▲ 7.7%</td></tr>
      <tr><td>인건비</td><td class="num">(10,800)</td><td class="num">(9,200)</td><td class="num">▲ 17.4%</td><td class="num">(10,400)</td><td class="num">▲ 3.8%</td></tr>
      <tr><td>시스템 / 임차료</td><td class="num">(4,800)</td><td class="num">(4,200)</td><td class="num">▲ 14.3%</td><td class="num">(4,600)</td><td class="num">▲ 4.3%</td></tr>
      <tr class="total"><td>영업이익 (Operating Income)</td><td class="num">47,400</td><td class="num">28,800</td><td class="num"><span class="pill good">▲ 64.6%</span></td><td class="num">36,200</td><td class="num"><span class="pill good">▲ 30.9%</span></td></tr>
      <tr><td>영업이익률 (OPM)</td><td class="num">38.2%</td><td class="num">31.3%</td><td class="num">▲ 6.9 pp</td><td class="num">33.5%</td><td class="num">▲ 4.7 pp</td></tr>
    </tbody>
  </table>
</section>

<!-- TOP SKU -->
<section class="section" data-od-id="top-sku">
  <h2>TOP 5 SKU · S1 판기<small>GMV 기준</small></h2>
  <table>
    <thead>
      <tr><th></th><th>#</th><th>SKU</th><th>카테고리</th><th>BTA</th><th class="num">판매수량</th><th class="num">GMV</th><th>정판율</th></tr>
    </thead>
    <tbody>
      <tr><td><span class="sku-logo">WW</span></td><td>1</td><td>윌리 캐릭터 후디 (WW-27SS-UNI-014)</td><td>UNI · 후디</td><td><span class="pill accent">A</span></td><td class="num">3,420</td><td class="num">2.1억</td><td><span class="pill good">91%</span></td></tr>
      <tr><td><span class="sku-logo">WW</span></td><td>2</td><td>플라워 와키 원피스 (WW-27SS-WOM-022)</td><td>WOMEN · 원피스</td><td><span class="pill trend">T</span></td><td class="num">2,180</td><td class="num">1.8억</td><td><span class="pill good">88%</span></td></tr>
      <tr><td><span class="sku-logo">WW</span></td><td>3</td><td>그래픽 반팔티 (WW-27SS-UNI-008)</td><td>UNI · 그래픽 티</td><td><span class="pill accent">A</span></td><td class="num">5,180</td><td class="num">1.4억</td><td><span class="pill good">87%</span></td></tr>
      <tr><td><span class="sku-logo">WW</span></td><td>4</td><td>워시드 데님 셋업 (WW-27SS-UNI-003)</td><td>UNI · 셋업</td><td><span class="pill basic">B</span></td><td class="num">1,180</td><td class="num">1.1억</td><td><span class="pill good">72%</span></td></tr>
      <tr><td><span class="sku-logo">WW</span></td><td>5</td><td>윌리 미니 토트 (WW-27SS-ACC-009)</td><td>ACC · 백</td><td><span class="pill trend">T</span></td><td class="num">2,210</td><td class="num">0.9억</td><td><span class="pill good">79%</span></td></tr>
    </tbody>
  </table>
</section>

<!-- 아웃룩 -->
<div class="outlook" data-od-id="outlook">
  <h3>S2 판기 (7월) 아웃룩</h3>
  <p>S1 판기의 호조세를 잇기 위해 S2 판기는 <b>여름 SKU 18종 입고 + BLOOM IMC 캠페인 4주 집행</b>으로 운영. 무신사 베스트 TOP 30 진입 SKU를 현재 7개에서 10개로 확장 목표. 윌리 캐릭터 후디 QR 발주 1,500장 입고 6/12 완료 예정으로 S2 매출 2.1억 기여 전망.</p>
  <p>리스크 — <b>여름 시즌 폭염 대비 린넨·코튼 SKU 재고 부족 가능성 (현 재고 60%)</b>. 6/15까지 SPOT 발주 결정 필요. 마케팅비는 S1 11.5% 수준 유지, 매출 13.5억 목표.</p>
</div>

<!-- 사인오프 -->
<footer class="signoff">
  <div>
    <div class="signer">박지훈 매니저</div>
    <div class="dept">영업기획팀 · WACKYWILLY</div>
  </div>
  <div>
    <div>검토 · 민재 MD 실장</div>
    <div>승인 · 대표</div>
    <div style="margin-top: 4px;">27.07.05 발행</div>
  </div>
</footer>
```

**언제 쓰나**: S1 (5-6월) / S2 (7월) / S3 (8월) / S4 (9월) 판기 종료 직후 7~10일 내 발행.

**바꾸는 부분**: 판기 코드, KPI 4종 값, 비용 분해 비율, P&L 표 수치, TOP SKU, 아웃룩 문단.

---

## 리듬 B — 월별 매출 리뷰

단일 월 결산. 판기 단위가 아니라 회계 월. 보통 5월·6월·7월 같은 단일 월 분석.

```html
<!-- 마스트헤드: "27년 5월 매출 결산" -->
<!-- KPI: 5월 GMV / 5월 정판율 / 5월 회전율 / 5월 AOV -->
<!-- 매출 추이: 5월 일별 (31일) 차트 -->
<!-- 비용 분해: 5월 P&L -->
<!-- TOP SKU: 5월 한정 -->
<!-- 아웃룩: 6월 전망 -->
```

**언제 쓰나**: 회계 월 종료 시. 영업기획 월간 결산.

**바꾸는 부분**: 시즌 코드 → 월, 차트 X축 = 일별.

---

## 리듬 C — 시즌 종합 결산 (S1~S4 합본)

시즌 종료 시 (27SS 시즌이라면 10월 말~11월 초) 발행. S1·S2·S3·S4 합본.

```html
<!-- 마스트헤드: "27SS 시즌 종합 결산" -->
<!-- lede: 시즌 전체 GMV 누적 · 시즌 평균 정판율 · BTA 분포 결과 -->
<!-- KPI: 시즌 합산 GMV / 시즌 평균 정판율 / 시즌 회전율 / 시즌 AOV -->
<!-- 매출 추이: 판기별(S1·S2·S3·S4) 매출 비교 -->
<!-- 비용 분해: 시즌 합산 -->
<!-- P&L: 27SS 시즌 vs 26SS 시즌 vs 26FW 시즌 -->
<!-- TOP SKU: 시즌 누적 TOP 10 -->
<!-- 아웃룩: 28FW 시즌 전략 -->
```

**언제 쓰나**: 시즌 전체 종료 (S/S = 10월 말 / F/W = 4월 말). fashion-season-deck 직전.

**바꾸는 부분**: KPI = 시즌 합산, P&L 비교 = 시즌 단위.

---

## 리듬 D — 분기 IR 자료

회계 분기(Q1/Q2/Q3/Q4) 단위. 외부 투자자·이사회 보고용.

```html
<!-- 마스트헤드: "FY27 Q2 매출 결산" -->
<!-- 톤은 좀 더 보수적, 숫자 중심 -->
<!-- KPI 4종에 NPS 또는 재구매율 1종 추가 가능 -->
<!-- P&L: 분기 vs 전분기 vs 전년 동기 -->
<!-- 아웃룩: 시즌이 아닌 분기 단위 가이던스 -->
<!-- 사인오프: CFO 검토 / 대표 승인 명시 -->
```

**언제 쓰나**: 회계 분기 종료 후 보통 2~4주 내 발행. 이사회 자료.

**바꾸는 부분**: 시즌 코드 → Q, 톤 보수화, IR 멘트 톤.

---

## 리듬 선택 가이드 요약

| 결산 성격 | 권장 리듬 | 청중 |
|---|---|---|
| 판기 결산 (S1·S2·S3·S4) | **A — 판기 결산** | MD실 + CFO |
| 단일 월 결산 | **B — 월별 리뷰** | 영업기획 + MD실 |
| 시즌 전체 합본 | **C — 시즌 종합 결산** | 대표 + 4실장 |
| 회계 분기 IR | **D — 분기 IR** | CFO + 이사회 |

선택한 리듬을 Step 2에서 한 문장으로 선언하세요. 예: "리듬 A 판기 결산을 선택했습니다."
