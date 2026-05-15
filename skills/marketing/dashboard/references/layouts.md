# K-패션 운영 대시보드 레이아웃 (4종)

네 가지 리듬 중 **하나**를 Step 2에서 선택하여 `<main id="content">` 안에 붙여 넣으세요. 모든 리듬은 상단바 → KPI 4종 → 차트/패널 → 하단 테이블 순서를 유지합니다.

OpenDesign 환경에서는 주요 영역에 `data-od-id`, 그 외에는 `id` 속성으로 대체합니다.

---

## 리듬 A — 시즌 개요 대시보드 (기본값)

영업기획팀이 매일 아침 띄워놓는 표준 화면. KPI 4종 + 매출 추이 라인 + BTA 도넛 + 카테고리 회전율 표.

```html
<header class="topbar" data-od-id="topbar">
  <div>
    <div class="crumb">WACKYWILLY · 27SS · S1 판기 (5-6월)</div>
    <h1>27SS 시즌 개요 — S1 D+18</h1>
  </div>
  <div class="right">
    <button class="btn-secondary">최근 30일 ▾</button>
    <button class="btn-primary">+ 위클리 리포트</button>
  </div>
</header>

<!-- KPI 4종 -->
<section class="kpis" data-od-id="kpis">
  <div class="kpi"><div class="label">정상판매율 (정판율)</div><div class="value">78.4%</div><div class="delta up">▲ 6.2 pp vs 26SS</div><div class="sub">시즌 누적 · 정상가 기준</div></div>
  <div class="kpi"><div class="label">재고자산회전율</div><div class="value">8.2회</div><div class="delta up">▲ 1.8회 YoY</div><div class="sub">시즌 환산 · 카테고리 가중평균</div></div>
  <div class="kpi"><div class="label">시즌 GMV</div><div class="value">12.4억</div><div class="delta up">▲ 34.6% YoY</div><div class="sub">S1 5/1 ~ 6/14 누적</div></div>
  <div class="kpi"><div class="label">AOV (객단가)</div><div class="value">98,400원</div><div class="delta up">▲ 7,200원 MoM</div><div class="sub">자사몰 + 무신사 가중평균</div></div>
</section>

<!-- 메인 차트 + BTA 도넛 -->
<section class="panels-row" data-od-id="row-revenue">
  <div class="panel">
    <h3>일별 GMV · 5/1 ~ 6/14<span class="meta">단위: 만원 · 정상가 기준</span></h3>
    <div class="chart">
      <svg viewBox="0 0 640 220" preserveAspectRatio="none">
        <defs>
          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="var(--accent)" stop-opacity="0.22"/>
            <stop offset="100%" stop-color="var(--accent)" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <polygon fill="url(#g1)" points="0,180 32,170 64,150 96,160 128,140 160,120 192,130 224,110 256,90 288,100 320,80 352,70 384,80 416,60 448,50 480,60 512,40 544,30 576,40 608,20 640,15 640,220 0,220"/>
        <polyline fill="none" stroke="var(--accent)" stroke-width="2" points="0,180 32,170 64,150 96,160 128,140 160,120 192,130 224,110 256,90 288,100 320,80 352,70 384,80 416,60 448,50 480,60 512,40 544,30 576,40 608,20 640,15"/>
      </svg>
    </div>
    <div class="legend">
      <span><span class="sw" style="background: var(--accent);"></span>일별 GMV</span>
      <span><span class="sw" style="background: var(--muted-2);"></span>전년 동기 (26SS)</span>
    </div>
  </div>
  <div class="panel">
    <h3>BTA 비중<span class="meta">시즌 누적</span></h3>
    <div class="donut-row">
      <svg viewBox="0 0 100 100" width="140" height="140">
        <circle cx="50" cy="50" r="38" fill="none" stroke="var(--basic)" stroke-width="14" stroke-dasharray="103 240" transform="rotate(-90 50 50)"/>
        <circle cx="50" cy="50" r="38" fill="none" stroke="var(--trend)" stroke-width="14" stroke-dasharray="84 240" stroke-dashoffset="-103" transform="rotate(-90 50 50)"/>
        <circle cx="50" cy="50" r="38" fill="none" stroke="var(--accent-bta)" stroke-width="14" stroke-dasharray="52 240" stroke-dashoffset="-187" transform="rotate(-90 50 50)"/>
      </svg>
      <ul class="donut-legend">
        <li><span><span class="sw" style="background: var(--basic);"></span>Basic</span> <b>43%</b></li>
        <li><span><span class="sw" style="background: var(--trend);"></span>Trend</span> <b>35%</b></li>
        <li><span><span class="sw" style="background: var(--accent-bta);"></span>Accent</span> <b>22%</b></li>
      </ul>
    </div>
  </div>
</section>

<!-- 카테고리별 회전율·정판율 테이블 -->
<section class="panels-row full" data-od-id="row-category">
  <div class="panel">
    <h3>카테고리별 회전율 · 정판율 · 대표 SKU<span class="meta">S1 누적</span></h3>
    <table>
      <thead><tr><th>카테고리</th><th>BTA</th><th>대표 SKU</th><th>판매 수량</th><th>GMV</th><th>회전율</th><th>정판율</th></tr></thead>
      <tbody>
        <tr><td>WOMEN · 원피스</td><td><span class="pill trend">T</span></td><td>플라워 와키 원피스</td><td class="num">3,420</td><td class="num">2.1억</td><td class="num">14.2회</td><td><span class="pill good">82%</span></td></tr>
        <tr><td>UNI · 그래픽 티</td><td><span class="pill accent">A</span></td><td>윌리 캐릭터 반팔티</td><td class="num">5,180</td><td class="num">1.8억</td><td class="num">11.8회</td><td><span class="pill good">87%</span></td></tr>
        <tr><td>UNI · 셋업</td><td><span class="pill basic">B</span></td><td>워시드 데님 셋업</td><td class="num">1,640</td><td class="num">1.4억</td><td class="num">6.4회</td><td><span class="pill good">71%</span></td></tr>
        <tr><td>ACC · 백</td><td><span class="pill trend">T</span></td><td>윌리 미니 토트</td><td class="num">2,210</td><td class="num">1.1억</td><td class="num">9.6회</td><td><span class="pill good">76%</span></td></tr>
        <tr><td>WOMEN · 아우터</td><td><span class="pill basic">B</span></td><td>크롭 셔켓</td><td class="num">620</td><td class="num">0.5억</td><td class="num">3.2회</td><td><span class="pill bad">58%</span></td></tr>
      </tbody>
    </table>
  </div>
</section>
```

**언제 쓰나**: 시즌 진행 중 매일 띄우는 표준 운영 화면. 영업기획팀·MD실 공통 시야.

**바꾸는 부분**: KPI 값(시즌 가중평균), BTA 도넛 비율, 카테고리 5~6개.

---

## 리듬 B — 채널 다각화 대시보드

채널별 GMV / AOV / 신규회원 / 광고 ROAS 비교. 이커머스팀이 매주 들여다보는 화면.

```html
<header class="topbar" data-od-id="topbar">
  <div>
    <div class="crumb">WACKYWILLY · 27SS · 채널 분석</div>
    <h1>채널별 GMV — 27SS S1 누적</h1>
  </div>
  <div class="right">
    <button class="btn-secondary">자사몰 + 입점 ▾</button>
    <button class="btn-primary">CSV 내보내기</button>
  </div>
</header>

<!-- KPI는 채널 합산 -->
<section class="kpis">
  <div class="kpi"><div class="label">자사몰 비중</div><div class="value">42%</div><div class="delta up">▲ 4 pp MoM</div><div class="sub">5.2억 / 회원 D2C</div></div>
  <div class="kpi"><div class="label">무신사 GMV</div><div class="value">3.8억</div><div class="delta up">▲ 28% WoW</div><div class="sub">베스트 진입 SKU 7</div></div>
  <div class="kpi"><div class="label">29CM 비중</div><div class="value">14%</div><div class="delta down">▼ 3 pp MoM</div><div class="sub">큐레이션 노출 감소</div></div>
  <div class="kpi"><div class="label">신규회원 / 주</div><div class="value">+4,820</div><div class="delta up">▲ 1,140 WoW</div><div class="sub">알림톡 가입 비중 38%</div></div>
</section>

<!-- 채널별 비교 -->
<section class="panels-row three">
  <div class="panel">
    <h3>채널별 GMV<span class="meta">시즌 누적</span></h3>
    <svg viewBox="0 0 280 180" width="100%" height="180">
      <rect x="20" y="40" width="36" height="120" fill="var(--accent)"/>
      <rect x="76" y="70" width="36" height="90" fill="var(--accent)" opacity="0.7"/>
      <rect x="132" y="110" width="36" height="50" fill="var(--accent)" opacity="0.5"/>
      <rect x="188" y="118" width="36" height="42" fill="var(--accent)" opacity="0.4"/>
      <rect x="244" y="138" width="36" height="22" fill="var(--accent)" opacity="0.3"/>
      <g font-family="var(--font-mono)" font-size="9" fill="var(--muted)">
        <text x="38" y="174" text-anchor="middle">자사몰</text>
        <text x="94" y="174" text-anchor="middle">무신사</text>
        <text x="150" y="174" text-anchor="middle">29CM</text>
        <text x="206" y="174" text-anchor="middle">W컨셉</text>
        <text x="262" y="174" text-anchor="middle">지그재그</text>
      </g>
    </svg>
  </div>
  <div class="panel">
    <h3>채널별 AOV<span class="meta">원 · 30일</span></h3>
    <table>
      <thead><tr><th>채널</th><th>AOV</th><th>전월 대비</th></tr></thead>
      <tbody>
        <tr><td>자사몰</td><td class="num">112,400</td><td><span class="pill good">▲ 4.2%</span></td></tr>
        <tr><td>무신사</td><td class="num">86,200</td><td><span class="pill good">▲ 1.1%</span></td></tr>
        <tr><td>29CM</td><td class="num">94,800</td><td><span class="pill bad">▼ 2.4%</span></td></tr>
        <tr><td>W컨셉</td><td class="num">128,600</td><td><span class="pill good">▲ 6.0%</span></td></tr>
      </tbody>
    </table>
  </div>
  <div class="panel">
    <h3>광고 ROAS<span class="meta">7일 평균</span></h3>
    <table>
      <thead><tr><th>플랫폼</th><th>ROAS</th><th>비고</th></tr></thead>
      <tbody>
        <tr><td>Meta (IG/FB)</td><td class="num">4.2x</td><td><span class="pill good">정상</span></td></tr>
        <tr><td>Google PMax</td><td class="num">3.1x</td><td><span class="pill warn">주의</span></td></tr>
        <tr><td>네이버 GFA</td><td class="num">2.4x</td><td><span class="pill bad">이탈</span></td></tr>
        <tr><td>카카오 알림톡</td><td class="num">7.8x</td><td><span class="pill good">최고</span></td></tr>
      </tbody>
    </table>
  </div>
</section>
```

**언제 쓰나**: 매주 화요일 이커머스팀 정기 리뷰. 채널 별 광고 예산 재배분 결정에 사용.

**바꾸는 부분**: 채널 5개 (브랜드에 따라 한섬몰·에이블리·SSF샵으로 교체), ROAS 플랫폼.

---

## 리듬 C — QR / SPOT 결정 대시보드

정판율·재고회전율 + QR 후보 SKU 카드 + 블로커 콜아웃. MD실이 매주 월요일 보는 화면.

```html
<header class="topbar" data-od-id="topbar">
  <div>
    <div class="crumb">WACKYWILLY · 27SS · QR / SPOT 결정</div>
    <h1>이번 주 QR 후보 — W12</h1>
  </div>
  <div class="right">
    <button class="btn-secondary">최근 14일 ▾</button>
    <button class="btn-primary">+ 발주 결정 카드</button>
  </div>
</header>

<!-- 블로커 콜아웃: QR 결정이 필요한 핵심 SKU -->
<section data-od-id="callouts">
  <div class="callout">
    <h4>이번 주 결정 1 · QR</h4>
    <p><b>윌리 캐릭터 후디 (WW-27SS-OUT-014)</b> — 무신사 베스트 TOP 12 진입, 정판율 91%, 재고 142장. 추가 발주 <b>1,500장 / 컬러 +1 (라임)</b>. 데드라인 5/27, MOQ 충족.</p>
  </div>
  <div class="callout">
    <h4>이번 주 결정 2 · SPOT</h4>
    <p><b>플라워 와키 원피스 (WW-27SS-WOM-022)</b> — 자사몰 TOP 3, 정판율 88%, 재고 76장. SPOT 발주 <b>600장 / 사이즈 S 보강</b>. 데드라인 5/30, 생산실 컨펌 대기.</p>
  </div>
</section>

<section class="kpis">
  <div class="kpi"><div class="label">정상판매율</div><div class="value">78.4%</div><div class="delta up">▲ 2.1 pp WoW</div></div>
  <div class="kpi"><div class="label">QR 발주 누적</div><div class="value">4,200장</div><div class="delta up">▲ 1,800장 vs 26SS</div></div>
  <div class="kpi"><div class="label">SPOT 회수율</div><div class="value">86%</div><div class="delta up">▲ 8 pp QoQ</div></div>
  <div class="kpi"><div class="label">캐리오버 비중</div><div class="value">28%</div><div class="delta down">▼ 3 pp YoY</div></div>
</section>

<!-- 정판율 추이 + QR 후보 SKU 표 (리듬 A와 같은 구조 차트 + 표) -->
```

**언제 쓰나**: 매주 월요일 시즌 진척 미팅. QR / SPOT 결정 카드를 그 자리에서 사인.

**바꾸는 부분**: 콜아웃 결정 1~3건, KPI 값.

---

## 리듬 D — 임원 1페이지 요약

대표·CFO·CEO 대상 위클리 한 장. KPI + 헤드라인 숫자 + 결정 사항만.

```html
<header class="topbar">
  <div>
    <div class="crumb">WACKYWILLY · 27SS · 임원 위클리 W12</div>
    <h1>27SS 시즌 한눈에 — 5월 셋째 주</h1>
  </div>
  <div class="right">
    <button class="btn-secondary">PDF 내보내기</button>
    <button class="btn-primary">전체 대시보드 →</button>
  </div>
</header>

<!-- KPI 4종 (대형) -->
<section class="kpis">
  <div class="kpi"><div class="label">주간 GMV</div><div class="value">2.8억</div><div class="delta up">▲ 28% WoW</div></div>
  <div class="kpi"><div class="label">시즌 누적 GMV</div><div class="value">12.4억 / 25.0억</div><div class="delta up">진행률 49.6%</div></div>
  <div class="kpi"><div class="label">정상판매율</div><div class="value">78.4%</div><div class="delta up">▲ 6.2 pp YoY</div></div>
  <div class="kpi"><div class="label">캐리오버 잔존</div><div class="value">3.6억</div><div class="delta down">▼ 1.2억 vs 계획</div></div>
</section>

<!-- 무신사 베스트 + 결정 콜아웃 -->
<section class="panels-row">
  <div class="panel">
    <h3>무신사 베스트 TOP 30 진입 SKU<span class="meta">5/15 기준</span></h3>
    <!-- 표 7~10행 -->
  </div>
  <div class="panel">
    <h3>이번 주 결정<span class="meta">2건</span></h3>
    <!-- callout 2개 압축형 -->
  </div>
</section>
```

**언제 쓰나**: 매주 금요일 대표 보고용 한 장. dashboard 전체 화면의 헤더 압축판.

**바꾸는 부분**: 무신사 베스트 TOP30 표, 결정 카드 2건.

---

## 리듬 선택 가이드 요약

| 상황 | 권장 리듬 | 청중 |
|---|---|---|
| 매일 운영 (상시) | **A — 시즌 개요** | 영업기획 · MD실 |
| 채널 광고 재배분 회의 | **B — 채널 다각화** | 이커머스팀 |
| 월요일 QR 결정 미팅 | **C — QR / SPOT** | MD실 · 디자인실 |
| 임원 위클리 보고 | **D — 임원 1페이지** | 대표 / CFO |

선택한 리듬을 Step 2에서 한 문장으로 선언하세요. 예: "리듬 A 시즌 개요 대시보드를 선택했습니다."
