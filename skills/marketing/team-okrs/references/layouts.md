# K-패션 시즌 OKR 트래커 레이아웃 (4종)

네 가지 리듬 중 **하나**를 Step 2에서 선택하여 `<main id="okrs">`와 `<aside id="sidebar">` 안에 붙여 넣으세요. 모든 리듬은 시즌 배너 → Objective 카드 → KR 행 → 사이드바 구조를 유지합니다.

---

## 리듬 A — 시즌 OKR (기본값 · Obj × 3 · KR × 9)

한국 영캐주얼 시즌 운영 표준. 상품(MD실+디자인실) / 채널(영업기획+이커머스) / 브랜드·IP(마케팅실).

```html
<!-- 시즌 배너 -->
<section class="banner" data-od-id="banner">
  <div>
    <div class="crumb">WACKYWILLY · 27SS · S/S 시즌 · S1 판기</div>
    <h1>27SS S/S 시즌 OKR — D-42</h1>
    <p class="lede">3개 Objective · 9개 Key Result · 오너 4인 · 시즌 시작 5/1 ~ 종료 10/31. S1 판기는 5-6월, 현재 진행률 36%.</p>
  </div>
  <div class="progress-block">
    <div class="num">62%</div>
    <div class="sub">시즌 OKR 종합 진척</div>
  </div>
</section>

<!-- Objective 1 — 상품력 -->
<article class="objective" data-od-id="obj-1">
  <div class="obj-head">
    <div>
      <div class="num">Objective 01 · 상품</div>
      <h2>27SS 시즌 상품력을 마뗑킴 수준의 정판율 80%대로 끌어올린다.</h2>
      <div class="owner"><span class="av-small">민재</span>MD 실장 · 디자인 실장 공동 · 35주 잔여</div>
    </div>
    <span class="pill good">정상 · On track</span>
  </div>
  <div class="kr">
    <div class="meta">
      <b>KR 1.1 · 정상판매율 (정판율) 78% 달성</b>
      <span class="baseline">베이스라인 72% (26SS) → 목표 78% · 사내 ERP</span>
    </div>
    <div class="progress"><i style="width: 92%;"></i></div>
    <div class="right">77.4% <small>vs 78% 목표</small></div>
  </div>
  <div class="kr">
    <div class="meta">
      <b>KR 1.2 · 재고자산회전율 8회/시즌</b>
      <span class="baseline">베이스라인 6.4회 (26SS) → 목표 8회</span>
    </div>
    <div class="progress"><i style="width: 88%;"></i></div>
    <div class="right">7.1회 <small>vs 8회 목표</small></div>
  </div>
  <div class="kr">
    <div class="meta">
      <b>KR 1.3 · 시즌 QR 비중 30%</b>
      <span class="baseline">베이스라인 18% (26SS) → 목표 30%</span>
    </div>
    <div class="progress warn"><i style="width: 70%;"></i></div>
    <div class="right">21% <small>vs 30% 목표</small></div>
  </div>
</article>

<!-- Objective 2 — 채널 다각화 -->
<article class="objective" data-od-id="obj-2">
  <div class="obj-head">
    <div>
      <div class="num">Objective 02 · 채널</div>
      <h2>자사몰·무신사 양축에 더해 29CM·지그재그 신규 진입으로 채널 분산을 만든다.</h2>
      <div class="owner"><span class="av-small">서연</span>영업기획팀장 · 이커머스팀장 공동</div>
    </div>
    <span class="pill warn">주의 · At risk</span>
  </div>
  <div class="kr">
    <div class="meta">
      <b>KR 2.1 · 무신사 시즌 GMV 30억</b>
      <span class="baseline">베이스라인 22억 (26SS) → 목표 30억 · 셀러센터</span>
    </div>
    <div class="progress"><i style="width: 78%;"></i></div>
    <div class="right">23.4억 <small>vs 30억 목표</small></div>
  </div>
  <div class="kr">
    <div class="meta">
      <b>KR 2.2 · 29CM 비중 15%</b>
      <span class="baseline">베이스라인 11% (26SS) → 목표 15% · 입점관리자</span>
    </div>
    <div class="progress warn"><i style="width: 60%;"></i></div>
    <div class="right">9% <small>vs 15% 목표</small></div>
  </div>
  <div class="kr">
    <div class="meta">
      <b>KR 2.3 · 자사몰 신규 회원 +12,000명</b>
      <span class="baseline">베이스라인 +8,400 (26SS) → 목표 +12,000 · 카페24</span>
    </div>
    <div class="progress"><i style="width: 84%;"></i></div>
    <div class="right">+10,080 <small>vs 12,000 목표</small></div>
  </div>
</article>

<!-- Objective 3 — 브랜드·IP -->
<article class="objective" data-od-id="obj-3">
  <div class="obj-head">
    <div>
      <div class="num">Objective 03 · 브랜드·IP</div>
      <h2>윌리 캐릭터 IP를 시즌 매출 자산으로 확장하고 매거진·SNS 노출을 늘린다.</h2>
      <div class="owner"><span class="av-small">윤서</span>마케팅 실장 · 브랜드 디렉터</div>
    </div>
    <span class="pill bad">이탈 · Off track</span>
  </div>
  <div class="kr">
    <div class="meta">
      <b>KR 3.1 · 윌리 굿즈 매출 5억</b>
      <span class="baseline">베이스라인 2.8억 (26SS) → 목표 5억 · 굿즈 라인</span>
    </div>
    <div class="progress bad"><i style="width: 38%;"></i></div>
    <div class="right">1.9억 <small>vs 5억 목표</small></div>
  </div>
  <div class="kr">
    <div class="meta">
      <b>KR 3.2 · 인스타그램 팔로워 +60,000</b>
      <span class="baseline">베이스라인 +42K (26SS) → 목표 +60K</span>
    </div>
    <div class="progress"><i style="width: 80%;"></i></div>
    <div class="right">+48K <small>vs +60K 목표</small></div>
  </div>
  <div class="kr">
    <div class="meta">
      <b>KR 3.3 · 매거진 노출 8건 (VOGUE KOREA / W KOREA / DAZED KOREA / ELLE KOREA)</b>
      <span class="baseline">베이스라인 5건 (26SS) → 목표 8건</span>
    </div>
    <div class="progress warn"><i style="width: 50%;"></i></div>
    <div class="right">4건 <small>vs 8건 목표</small></div>
  </div>
</article>

<!-- 사이드바 -->
<h2>시즌 한눈에 · W12</h2>
<div class="stats">
  <div class="stat"><div class="label">Obj 정상 비율</div><div class="value">1 / 3</div><div class="delta">전주 동일</div></div>
  <div class="stat"><div class="label">KR 그린 비율</div><div class="value">5 / 9</div><div class="delta">+1 WoW</div></div>
  <div class="stat"><div class="label">시즌 잔여일</div><div class="value">169</div><div class="delta">~10/31 종료</div></div>
  <div class="stat"><div class="label">리스크 스코어</div><div class="value">3.4 / 5</div><div class="delta down">▲ 0.2 WoW</div></div>
</div>

<div class="section">
  <h3>이번 주 movers</h3>
  <ul>
    <li><span>정판율 (KR 1.1)</span><span class="pill good">▲ 1.4 pp</span></li>
    <li><span>무신사 GMV (KR 2.1)</span><span class="pill good">▲ 1.2억</span></li>
    <li><span>윌리 굿즈 매출 (KR 3.1)</span><span class="pill bad">▼ 0.3억</span></li>
  </ul>
</div>

<div class="blocker">
  <h4>블로커 · 1건</h4>
  <p><b>KR 3.1 윌리 굿즈 매출</b> — 키링·머플러 시즌 라인 OEM 입고 지연(+14일). 매출 데드라인 6/30까지 0.8억 회복 필요.</p>
  <span class="small">담당: 윤서 · 결정: MD실 SPOT 발주 검토 5/22</span>
</div>
```

**언제 쓰나**: 시즌 시작 6개월 전 합의 → 시즌 중 매주 업데이트. 매주 월요일 시즌 진척 미팅에서 운영.

**바꾸는 부분**: Objective 본문 3개, KR 메트릭/베이스라인/목표, 오너 이니셜.

---

## 리듬 B — 분기 OKR (Q1~Q4)

시즌 대신 회계 분기 단위. CFO·CEO 보고에 적합.

```html
<section class="banner">
  <div>
    <div class="crumb">WACKYWILLY · FY27 · Q2 (4-6월)</div>
    <h1>Q2 OKR — D-21</h1>
    <p class="lede">3개 Objective · 9개 KR · 회계 Q2는 27SS 시즌 시작과 겹침. Q1 결산 후 갱신된 OKR.</p>
  </div>
  <div class="progress-block">
    <div class="num">58%</div>
    <div class="sub">Q2 OKR 진척</div>
  </div>
</section>

<!-- Obj × 3은 리듬 A와 같은 구조지만 — -->
<!-- Obj 1 = 매출 성장 (분기 매출, 영업이익률, MoM 성장률) -->
<!-- Obj 2 = 운영 효율 (정판율, 회전율, 사입가율) -->
<!-- Obj 3 = 브랜드 강화 (NPS, 재구매율, 매거진 노출) -->
```

**언제 쓰나**: 회계 분기 결산 직후. fashion-season-strategy의 분기 버전.

**바꾸는 부분**: 시즌 코드 → Q1~Q4, Objective 축이 매출/효율/브랜드.

---

## 리듬 C — 디자인실 단일 OKR (단일 Obj + 5개 KR)

디자인실 한 부서 단일 OKR. KR 5개로 디테일 확장.

```html
<section class="banner">
  <div>
    <div class="crumb">WACKYWILLY · 디자인실 · 27SS</div>
    <h1>디자인실 27SS OKR — 5개 KR</h1>
    <p class="lede">디자인실 단독 OKR. 라인업 LOCK 일정 + BTA 분포 + 캐리오버 비중 + 디자이너 R&R 분산.</p>
  </div>
  <div class="progress-block">
    <div class="num">71%</div>
    <div class="sub">디자인 OKR 진척</div>
  </div>
</section>

<article class="objective">
  <div class="obj-head">
    <div>
      <div class="num">Objective · 디자인실 27SS</div>
      <h2>27SS 라인업의 시각 강도를 BTA 균형 + 캐릭터 IP 통합으로 끌어올린다.</h2>
      <div class="owner"><span class="av-small">민재</span>디자인 실장 + 디자이너 7인</div>
    </div>
    <span class="pill good">정상</span>
  </div>
  <!-- KR 5개:
       1. 라인업 LOCK 32 SKU 완료 (현재 24/32)
       2. BTA 분포 Basic 45% / Trend 35% / Accent 20% 달성
       3. 캐리오버 비중 28% (전 시즌 30% → 28%)
       4. 디자이너 1인당 평균 4 SKU LOCK (균형 분산)
       5. 윌리 캐릭터 IP 통합 SKU 8개 (그래픽 + ACC)
  -->
</article>
```

**언제 쓰나**: 디자인실 부서 OKR. 디자인 실장 단독 운영용.

**바꾸는 부분**: 단일 Obj, KR 5개, 부서별 R&R 명시.

---

## 리듬 D — IMC 캠페인 단일 OKR (마케팅실)

마케팅실 IMC 캠페인 단일 OKR. KR 5개로 캠페인 단위 측정.

```html
<section class="banner">
  <div>
    <div class="crumb">WACKYWILLY · 마케팅실 · 27SS BLOOM 캠페인</div>
    <h1>27SS BLOOM IMC OKR — 캠페인 D-14</h1>
    <p class="lede">시즌 메인 캠페인 BLOOM 한 건의 OKR. ROAS 4.5x · 룩북 인스타 도달 200만 · 매거진 노출 4건.</p>
  </div>
  <div class="progress-block">
    <div class="num">48%</div>
    <div class="sub">캠페인 OKR 진척</div>
  </div>
</section>

<article class="objective">
  <div class="obj-head">
    <div>
      <div class="num">Objective · 27SS BLOOM 캠페인</div>
      <h2>BLOOM 캠페인을 통해 27SS 시즌 매출 + 브랜드 자산을 동시에 끌어올린다.</h2>
      <div class="owner"><span class="av-small">윤서</span>마케팅 실장 · 브랜드 디렉터</div>
    </div>
    <span class="pill warn">주의</span>
  </div>
  <!-- KR 5개:
       1. 광고 ROAS 평균 4.5x (Meta/Google/카카오)
       2. 룩북 인스타 도달 200만
       3. 매거진 노출 4건 (VOGUE KOREA / W KOREA 등)
       4. 자사몰 신규 회원 +4,800 / 캠페인 기간
       5. 캠페인 키 SKU 5종 무신사 베스트 TOP 30 진입
  -->
</article>
```

**언제 쓰나**: 시즌 메인 캠페인 진행 중. fashion-imc-calendar와 직접 연결.

**바꾸는 부분**: 캠페인명, KR 5개, 마케팅 채널 라우팅.

---

## 리듬 선택 가이드 요약

| OKR 성격 | 권장 리듬 | 청중 |
|---|---|---|
| 시즌 전체 종합 OKR | **A — 시즌 OKR** | 대표 + 4실장 |
| 회계 분기 OKR | **B — 분기 OKR** | 대표 + CFO |
| 디자인실 단독 | **C — 부서 단일 OKR** | 디자인 실장 |
| 캠페인 단독 | **D — IMC 단일 OKR** | 마케팅 실장 |

선택한 리듬을 Step 2에서 한 문장으로 선언하세요. 예: "리듬 A 시즌 OKR을 선택했습니다."
