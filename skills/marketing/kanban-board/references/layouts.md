# K-패션 시즌 진척 보드 레이아웃 (4종)

네 가지 리듬 중 **하나**를 Step 2에서 선택하여 `.columns`와 `aside.pulse` 안에 붙여 넣으세요. 모든 리듬은 컬럼 + 카드 + 사이드바 펄스 구조를 유지합니다.

OpenDesign 환경에서는 주요 영역에 `data-od-id`, 그 외에는 `id` 속성으로 대체합니다.

---

## 리듬 A — 시즌 진척 보드 (기본값 · 6단 컬럼)

한국 영캐주얼 표준 사이클 6단 — 컨셉 → 1차 샘플 → 품평회 → LOCK → 발주·생산 → 입고·판매.

```html
<!-- .columns 내부 -->
<section class="col">
  <div class="col-head">
    <h3><span class="step-num">1</span>컨셉</h3>
    <span class="count">3</span>
  </div>
  <article class="card">
    <div class="row"><span class="sku">WW-27SS-WOM-019</span><span class="bta T">T</span></div>
    <h4>플라워 시폰 블라우스</h4>
    <div class="meta"><span class="av-small">은지</span><span>S2 판기 예정</span></div>
    <div class="progress"><i style="width: 35%;"></i></div>
  </article>
  <article class="card">
    <div class="row"><span class="sku">WW-27SS-ACC-006</span><span class="bta A">A</span></div>
    <h4>윌리 캐릭터 키링 V2</h4>
    <div class="meta"><span class="av-small">지훈</span><span>S1 판기 예정</span></div>
    <div class="progress"><i style="width: 20%;"></i></div>
  </article>
  <article class="card">
    <div class="row"><span class="sku">WW-27SS-UNI-031</span><span class="bta B">B</span></div>
    <h4>스트라이프 면 셔츠 (캐리오버)</h4>
    <div class="meta"><span class="av-small">수민</span><span>캐리오버</span></div>
  </article>
</section>

<section class="col">
  <div class="col-head"><h3><span class="step-num">2</span>1차 샘플</h3><span class="count">5</span></div>
  <article class="card">
    <div class="row"><span class="sku">WW-27SS-WOM-022</span><span class="bta T">T</span></div>
    <h4>플라워 와키 원피스</h4>
    <div class="meta"><span class="av-small">은지</span><span class="pill warn">핏 보강</span></div>
    <div class="progress"><i style="width: 55%;"></i></div>
  </article>
  <article class="card blocked">
    <div class="row"><span class="sku">WW-27SS-WOM-024</span><span class="bta A">A</span></div>
    <h4>러플 미니 원피스</h4>
    <div class="meta"><span class="av-small">하늘</span><span class="pill bad">원단 미입고</span></div>
  </article>
  <article class="card">
    <div class="row"><span class="sku">WW-27SS-UNI-014</span><span class="bta A">A</span></div>
    <h4>윌리 캐릭터 후디</h4>
    <div class="meta"><span class="av-small">지훈</span><span>샘플 2차</span></div>
    <div class="progress"><i style="width: 60%;"></i></div>
  </article>
  <article class="card">
    <div class="row"><span class="sku">WW-27SS-UNI-016</span><span class="bta B">B</span></div>
    <h4>워시드 데님 셋업 — 자켓</h4>
    <div class="meta"><span class="av-small">수민</span><span>핏 OK</span></div>
    <div class="progress"><i style="width: 70%;"></i></div>
  </article>
  <article class="card">
    <div class="row"><span class="sku">WW-27SS-ACC-009</span><span class="bta T">T</span></div>
    <h4>윌리 미니 토트</h4>
    <div class="meta"><span class="av-small">은지</span><span>샘플 OK</span></div>
    <div class="progress"><i style="width: 75%;"></i></div>
  </article>
</section>

<section class="col">
  <div class="col-head"><h3><span class="step-num">3</span>품평</h3><span class="count">4</span></div>
  <article class="card">
    <div class="row"><span class="sku">WW-27SS-UNI-008</span><span class="bta T">T</span></div>
    <h4>그래픽 반팔티 — 윌리 IP</h4>
    <div class="meta"><span class="av-small">지훈</span><span class="pill good">대표 OK</span></div>
    <div class="progress"><i style="width: 80%;"></i></div>
  </article>
  <article class="card">
    <div class="row"><span class="sku">WW-27SS-WOM-011</span><span class="bta B">B</span></div>
    <h4>린넨 셔츠 드레스</h4>
    <div class="meta"><span class="av-small">은지</span><span class="pill warn">컬러 재검토</span></div>
    <div class="progress"><i style="width: 75%;"></i></div>
  </article>
  <article class="card">
    <div class="row"><span class="sku">WW-27SS-UNI-021</span><span class="bta B">B</span></div>
    <h4>워시드 데님 셋업 — 팬츠</h4>
    <div class="meta"><span class="av-small">수민</span><span class="pill good">컬러웨이 OK</span></div>
    <div class="progress"><i style="width: 82%;"></i></div>
  </article>
  <article class="card">
    <div class="row"><span class="sku">WW-27SS-ACC-014</span><span class="bta A">A</span></div>
    <h4>윌리 캐릭터 머플러 (S4 판기)</h4>
    <div class="meta"><span class="av-small">하늘</span><span>대표 컨펌 대기</span></div>
    <div class="progress"><i style="width: 70%;"></i></div>
  </article>
</section>

<section class="col locked">
  <div class="col-head"><h3><span class="step-num">4</span>LOCK</h3><span class="count">6</span></div>
  <article class="card locked">
    <div class="row"><span class="sku">WW-27SS-WOM-001</span><span class="bta T">T</span></div>
    <h4>플라워 와키 원피스 — Pink/Cream</h4>
    <div class="meta"><span class="av-small">은지</span><span class="pill lock">LOCK · 1,800장</span></div>
  </article>
  <article class="card locked">
    <div class="row"><span class="sku">WW-27SS-UNI-002</span><span class="bta A">A</span></div>
    <h4>윌리 캐릭터 반팔티 — 6 컬러</h4>
    <div class="meta"><span class="av-small">지훈</span><span class="pill lock">LOCK · 4,200장</span></div>
  </article>
  <article class="card locked">
    <div class="row"><span class="sku">WW-27SS-UNI-003</span><span class="bta B">B</span></div>
    <h4>워시드 데님 셋업 (자켓+팬츠)</h4>
    <div class="meta"><span class="av-small">수민</span><span class="pill lock">LOCK · 1,200세트</span></div>
  </article>
  <article class="card locked">
    <div class="row"><span class="sku">WW-27SS-ACC-001</span><span class="bta T">T</span></div>
    <h4>윌리 미니 토트 — 4 컬러</h4>
    <div class="meta"><span class="av-small">은지</span><span class="pill lock">LOCK · 2,400장</span></div>
  </article>
  <article class="card locked">
    <div class="row"><span class="sku">WW-27SS-WOM-004</span><span class="bta B">B</span></div>
    <h4>린넨 셔츠 드레스 — 2 컬러</h4>
    <div class="meta"><span class="av-small">은지</span><span class="pill lock">LOCK · 980장</span></div>
  </article>
  <article class="card locked">
    <div class="row"><span class="sku">WW-27SS-UNI-005</span><span class="bta T">T</span></div>
    <h4>크롭 셔켓 — Beige/Olive</h4>
    <div class="meta"><span class="av-small">수민</span><span class="pill lock">LOCK · 1,400장</span></div>
  </article>
</section>

<section class="col">
  <div class="col-head"><h3><span class="step-num">5</span>발주·생산</h3><span class="count">5</span></div>
  <article class="card">
    <div class="row"><span class="sku">WW-27SS-WOM-006</span><span class="bta B">B</span></div>
    <h4>코튼 슬랙스 — 3 컬러</h4>
    <div class="meta"><span class="av-small">수민</span><span class="pill good">OEM 생산 중</span></div>
    <div class="progress"><i style="width: 50%;"></i></div>
  </article>
  <article class="card">
    <div class="row"><span class="sku">WW-27SS-UNI-007</span><span class="bta T">T</span></div>
    <h4>러플 카라 블라우스</h4>
    <div class="meta"><span class="av-small">은지</span><span class="pill warn">QC 보강</span></div>
    <div class="progress"><i style="width: 65%;"></i></div>
  </article>
  <article class="card">
    <div class="row"><span class="sku">WW-27SS-ACC-008</span><span class="bta A">A</span></div>
    <h4>윌리 백 — 핸드페인팅 패치</h4>
    <div class="meta"><span class="av-small">지훈</span><span>4/22 입고 예정</span></div>
    <div class="progress"><i style="width: 80%;"></i></div>
  </article>
  <article class="card">
    <div class="row"><span class="sku">WW-27SS-UNI-009</span><span class="bta B">B</span></div>
    <h4>스트라이프 면 셔츠</h4>
    <div class="meta"><span class="av-small">수민</span><span class="pill good">생산 OK</span></div>
    <div class="progress"><i style="width: 92%;"></i></div>
  </article>
  <article class="card">
    <div class="row"><span class="sku">WW-27SS-WOM-010</span><span class="bta T">T</span></div>
    <h4>러플 미디 스커트</h4>
    <div class="meta"><span class="av-small">하늘</span><span>4/25 입고 예정</span></div>
    <div class="progress"><i style="width: 70%;"></i></div>
  </article>
</section>

<section class="col shipped">
  <div class="col-head"><h3><span class="step-num">6</span>입고·판매</h3><span class="count">3</span></div>
  <article class="card">
    <div class="row"><span class="sku">WW-27SS-UNI-011</span><span class="bta A">A</span></div>
    <h4>윌리 후디 — 1st 입고</h4>
    <div class="meta"><span class="av-small">지훈</span><span class="pill good">5/2 입고 · 무신사 BEST 12</span></div>
  </article>
  <article class="card">
    <div class="row"><span class="sku">WW-27SS-WOM-012</span><span class="bta T">T</span></div>
    <h4>플라워 원피스 — 1st 입고</h4>
    <div class="meta"><span class="av-small">은지</span><span class="pill good">5/8 입고 · 자사몰 TOP 3</span></div>
  </article>
  <article class="card">
    <div class="row"><span class="sku">WW-27SS-ACC-013</span><span class="bta T">T</span></div>
    <h4>윌리 미니 토트 — 1st 입고</h4>
    <div class="meta"><span class="av-small">은지</span><span class="pill good">5/12 입고 · 29CM 입점</span></div>
  </article>
</section>

<!-- aside.pulse 내부 -->
<h2>시즌 펄스</h2>

<div class="stat">
  <div class="label">LOCK 진행률</div>
  <div class="value">75%</div>
  <div class="progress"><i style="width: 75%;"></i></div>
  <div class="sub">전체 32 SKU · LOCK 24 · 잔여 8</div>
</div>

<div class="stat">
  <div class="label">Top 디자이너 (LOCK 기준)</div>
  <ul class="designers">
    <li><span><span class="av-small">은지</span> 은지</span><span class="pill good">7 LOCK</span></li>
    <li><span><span class="av-small">수민</span> 수민</span><span class="pill good">6 LOCK</span></li>
    <li><span><span class="av-small">지훈</span> 지훈</span><span class="pill good">5 LOCK</span></li>
  </ul>
</div>

<div class="blocker">
  <h4>블로커 · 1건</h4>
  <p><b>WW-27SS-WOM-024 · 러플 미니 원피스</b> — 원단 미입고. 협력사 컨펌 5/22, 2차 샘플 일정 +7일 지연 전망.</p>
  <span class="small">담당: 하늘 · 데드라인 6/2</span>
</div>
```

**언제 쓰나**: 시즌 시작 6개월 전부터 입고 직후까지 상시 운영. 매주 월요일 시즌 진척 미팅에서 띄움.

**바꾸는 부분**: SKU 코드 패턴(WW-27SS-XXX → 브랜드 코드), 디자이너 이니셜, BTA 분포.

---

## 리듬 B — IMC 캠페인 칸반 (5단)

마케팅실 캠페인 진척. 기획 → 자산 제작 → 검수 → 채널 송출 → 효과 측정.

```html
<!-- 5개 컬럼 — Step 1~5 -->
<!-- 카드 메타 = 캠페인 코드, 채널(IG/카카오/네이버), 일정, 담당 -->
<!-- 예시: -->
<article class="card">
  <div class="row"><span class="sku">IMC-27SS-LOOK-01</span><span class="bta T">T</span></div>
  <h4>27SS 룩북 인스타 캐러셀</h4>
  <div class="meta"><span class="av-small">윤서</span><span>IG · 4/22 발행</span></div>
</article>
<!-- 블로커: '광고 소재 검수 지연 (메타 거부)' / 'KOL 컨펌 대기' -->
```

**언제 쓰나**: 시즌 캠페인 IMC 일정 관리. fashion-imc-calendar와 연동.

**바꾸는 부분**: 컬럼 5단, 카드 코드 패턴(IMC-27SS-XXX), 채널 라우팅.

---

## 리듬 C — 룩북 촬영 진척 (4단)

룩북 촬영 단일 프로젝트 진척. 캐스팅 → 스타일링 → 슛 → 리터칭.

```html
<!-- 4개 컬럼 -->
<!-- 카드 = 룩 단위 (LOOK 01 ~ LOOK 14) -->
<!-- 메타: 모델 / 스타일리스트 / 촬영 일자 / 컬렉션 코드 -->
```

**언제 쓰나**: 룩북 촬영 진행 중 3~4주간. fashion-lookbook 산출물 직전.

**바꾸는 부분**: 컬럼 4단(짧음), 카드 LOOK 단위.

---

## 리듬 D — 팝업스토어 준비 (5단)

팝업 오프라인 운영 진척. 컨셉 → 공간 시공 → 자산 인쇄/사이니지 → 운영 매뉴얼 → 사후 리뷰.

```html
<!-- 5개 컬럼 -->
<!-- 카드 = 팝업 운영 항목 (공간 · 인테리어 · 사이니지 · 시즌 한정 SKU · 사인회 · 노벨티) -->
<!-- 블로커: '시공 일정 지연' / '한정 굿즈 입고 늦음' -->
```

**언제 쓰나**: 팝업 오픈 2~3주 전 시공·운영 진척 관리.

**바꾸는 부분**: 컬럼 라벨, 카드 항목.

---

## 리듬 선택 가이드 요약

| 보드 성격 | 권장 리듬 | 청중 |
|---|---|---|
| 시즌 라인업 (컨셉 → 입고) | **A — 시즌 진척 6단** | 디자인실 · MD실 |
| 캠페인 IMC | **B — IMC 칸반 5단** | 마케팅실 |
| 룩북 촬영 단일 프로젝트 | **C — 룩북 4단** | 마케팅실 · 디자인실 |
| 팝업 오프라인 운영 | **D — 팝업 5단** | 마케팅실 · 영업기획 |

선택한 리듬을 Step 2에서 한 문장으로 선언하세요. 예: "리듬 A 시즌 진척 6단을 선택했습니다."
