# K-패션 내부 위키 / 운영 매뉴얼 레이아웃 (4종)

네 가지 리듬 중 **하나**를 Step 2에서 선택하여 좌측 `<nav class="sidebar">` + 중앙 `<article>` + 우측 `<aside class="toc">`를 모두 갱신하세요.

모든 리듬은 동일한 본문 구조를 따릅니다: 크럼 + H1 + lede + H2 4~5개 + 코드 블록 + 표 + 콜아웃 + 페이저.

OpenDesign 환경에서는 주요 영역에 `data-od-id`, 그 외에는 `id` 속성으로 대체합니다.

---

## 리듬 A — 무신사·29CM 입점 매뉴얼 (기본값)

신규 디자이너 · MD · 영업기획 입사자가 1주차에 끝까지 읽는 공식 운영 문서. 영업기획팀이 작성·운영.

### 좌측 사이드바 (4 그룹)

```html
<div class="group">
  <div class="group-label">시작하기</div>
  <a href="#">위키 사용법</a>
  <a href="#" class="active">무신사 입점 매뉴얼</a>
  <a href="#">29CM 입점 매뉴얼</a>
  <a href="#">W컨셉 입점 매뉴얼</a>
</div>
<div class="group">
  <div class="group-label">상품 등록</div>
  <a href="#">SKU 명명 규칙</a>
  <a href="#">상세페이지 가이드</a>
  <a href="#">키워드 표준</a>
  <a href="#">카테고리 매핑</a>
</div>
<div class="group">
  <div class="group-label">운영</div>
  <a href="#">베스트 진입 로직</a>
  <a href="#">리뷰 응대 SOP</a>
  <a href="#">Q&amp;A 응대 톤</a>
  <a href="#">QR / SPOT 발주</a>
</div>
<div class="group">
  <div class="group-label">정산</div>
  <a href="#">수수료 구조</a>
  <a href="#">정산 일정</a>
  <a href="#">세금 계산서</a>
</div>
```

### 중앙 article (본문 + 5개 H2)

```html
<div class="crumbs">위키 › 시작하기 › 무신사 입점 매뉴얼</div>
<h1>무신사 입점 매뉴얼</h1>
<p class="lede">신규 디자이너 · MD · 영업기획 입사자가 1주차에 끝까지 읽고, 영업기획팀 지훈과 1:1 확인을 마치는 공식 문서. [REPLACE WACKYWILLY]의 무신사 셀러센터 가입부터 정산까지 운영 전 과정을 5개 섹션으로 정리.</p>

<h2 id="signup">1. 무신사 셀러센터 가입 + 초기 설정</h2>
<p>[REPLACE WACKYWILLY]는 2024년 11월 무신사 입점 완료. 사업자등록증 + 통신판매업신고증 + 상표권등록증을 제출하고, 영업기획팀(지훈)이 셀러센터 마스터 계정을 관리한다. 신규 입사자에게는 서브 계정을 발급한다.</p>
<pre><code># 셀러센터 서브 계정 발급 절차 (영업기획팀에 요청)
이메일 · @[REPLACE wackywilly].com 도메인 필수
권한 종류 · 상품 등록(디자이너·MD) · 운영(영업기획) · 정산(재무)
초대 메일 24시간 내 가입 완료</code></pre>
<div class="callout info">
  <div class="label">참고</div>
  무신사 셀러센터는 PC 전용. 모바일 셀러 앱은 알림 확인 용도로만 사용하세요. 상품 등록·수정은 반드시 PC에서 진행.
</div>

<h2 id="register">2. 상품 등록 SOP</h2>
<p>무신사 상품 등록은 자사몰 등록 직후 진행한다. SKU 마스터 데이터는 사내 ERP에서 export 후, 무신사 표준 양식으로 변환 후 일괄 업로드.</p>
<h3>SKU 명명 규칙</h3>
<pre><code># SKU 코드 패턴 — 모든 채널 공통
[브랜드]-[시즌]-[카테고리]-[연번]

WW-27SS-TOP-011    # 27SS 상의 11번
WW-27SS-OUT-005Q   # QR 발주분 (말미 Q)
WW-26FW-BTM-002C   # 캐리오버 SKU (말미 C)</code></pre>
<h3>카테고리 매핑 (무신사 ↔ 자사)</h3>
<table>
  <thead><tr><th>자사 카테고리</th><th>무신사 카테고리</th><th>BTA 권장 분포</th></tr></thead>
  <tbody>
    <tr><td>상의 (TOP)</td><td>상의 &gt; 반팔 / 긴팔 / 셔츠</td><td>B 50% / T 35% / A 15%</td></tr>
    <tr><td>아우터 (OUT)</td><td>아우터 &gt; 후드 / 자켓 / 가디건</td><td>B 40% / T 35% / A 25%</td></tr>
    <tr><td>하의 (BTM)</td><td>하의 &gt; 데님 / 슬랙스 / 쇼츠</td><td>B 60% / T 30% / A 10%</td></tr>
    <tr><td>원피스 (OPS)</td><td>원피스</td><td>T 60% / B 25% / A 15%</td></tr>
    <tr><td>액세서리 (ACC)</td><td>패션 잡화 &gt; 모자 / 가방 / 키링</td><td>A 50% / T 30% / B 20%</td></tr>
  </tbody>
</table>

<h2 id="best">3. 무신사 베스트 진입 로직</h2>
<p>무신사 베스트 알고리즘은 (1) 판매량 + (2) 트래픽 + (3) 리뷰 평점 + (4) 신상품 가중치 조합으로 결정된다. 신상품은 발매 후 4주간 가중치를 받기 때문에, 시즌 키 아이템을 무신사 발매와 동시에 인스타·알림톡 캠페인 push 하는 전략을 사용한다.</p>
<div class="callout warn">
  <div class="label">주의</div>
  베스트 진입 SKU는 자사몰에서 동시 sell-out 위험이 높음. 무신사 베스트 진입 신호가 오면 영업기획팀이 자사몰 노출 비중을 조정(메인 배너 → 하단)해 채널 균형을 맞춘다. <strong>마진율 35%+인 자사몰 비중을 보호하는 운영 표준.</strong>
</div>

<h2 id="reviews">4. 리뷰 · Q&amp;A 응대 SOP</h2>
<p>리뷰는 24시간 내 응답 표준. Q&amp;A는 48시간 내 응답이 무신사 셀러 등급에 영향. 응대 톤은 다음 표준 카피를 참고:</p>
<pre><code># 긍정 리뷰 응답
"○○님, 좋은 리뷰 감사합니다. 27SS 시즌도 함께 해주세요. — WACKYWILLY"

# 부정 리뷰 응답 (사이즈·핏)
"○○님, 불편을 드려 죄송합니다. 사이즈 가이드를 다시 확인 후
교환·환불 안내드리겠습니다. 채널톡으로 별도 컨택 부탁드려요."</code></pre>

<h2 id="settlement">5. 정산 일정 · 수수료 구조</h2>
<p>무신사 정산은 월 1회 · 매월 15일 · 전월 21일 ~ 당월 20일 매출 기준. 수수료는 카테고리별 15~25% + 무신사 PG 수수료 + 적립금 차감 후 입금. QR 발주분(말미 Q)과 캐리오버(말미 C)는 정산 명세서에서 동일 SKU로 합산되므로 ERP에서는 별도 코드로 관리한다.</p>

<div class="pager">
  <a href="#"><small>← 이전</small>위키 사용법</a>
  <a href="#" style="text-align: right;"><small>다음 →</small>29CM 입점 매뉴얼</a>
</div>
```

### 우측 TOC

```html
<div class="toc-label">이 페이지에서</div>
<a href="#signup" class="active">1. 셀러센터 가입</a>
<a href="#register">2. 상품 등록 SOP</a>
<a href="#best">3. 베스트 진입 로직</a>
<a href="#reviews">4. 리뷰 · Q&amp;A 응대</a>
<a href="#settlement">5. 정산 일정 · 수수료</a>
```

**언제 쓰나**: 무신사 / 29CM / W컨셉 신규 입점 직후 + 신규 입사자 1주차 송부 표준 문서.

---

## 리듬 B — 브랜드 가이드라인 (로고·컬러·타이포·그래픽)

브랜드 디렉터 / 디자인실장이 작성. 외주 디자이너 · 협력업체에 송부하는 영구 문서.

### 좌측 사이드바 (4 그룹)

```html
<div class="group">
  <div class="group-label">가이드라인</div>
  <a href="#" class="active">브랜드 정체성</a>
  <a href="#">로고 사용 규칙</a>
  <a href="#">컬러 · 타이포</a>
  <a href="#">그래픽 IP</a>
</div>
<div class="group">
  <div class="group-label">적용</div>
  <a href="#">상세페이지 톤</a>
  <a href="#">인스타그램 톤</a>
  <a href="#">알림톡 톤</a>
  <a href="#">룩북 표준</a>
</div>
<div class="group">
  <div class="group-label">외주 / 협력</div>
  <a href="#">외주 디자이너 패키지</a>
  <a href="#">OEM 송부 양식</a>
</div>
```

### 중앙 article 핵심

```html
<div class="crumbs">위키 › 가이드라인 › 브랜드 정체성</div>
<h1>[REPLACE WACKYWILLY] 브랜드 가이드라인 v3.4</h1>
<p class="lede">[REPLACE WACKYWILLY]는 캐릭터 IP 기반 K-영캐주얼 브랜드. 본 가이드라인은 디자인실 · 외주 디자이너 · OEM 협력업체가 브랜드 톤·로고·컬러·그래픽을 일관되게 운영하기 위한 영구 문서. 시즌 토큰은 별도, 본 문서는 시즌 사이클과 무관한 영구 요소만 포함.</p>

<h2 id="logo">1. 로고 & 워드마크</h2>
<p>워드마크 표기는 영문 `WACKYWILLY` 단일. 한글 병기 시 띄어쓰기 없이 `와키윌리`. 슬로건 워드마크 `Have a wacky day` 시 메인 워드마크와 동일 라인 또는 하단 정렬.</p>
<div class="callout danger">
  <div class="label">금지</div>
  로고 색상 변경 금지 (블랙 / 화이트 / 시즌 액센트 3종만). 캐릭터 단독 사용 시 워드마크 동반 필수. 외주 인쇄 시 PMS 컬러 코드 사용.
</div>

<h2 id="color">2. 컬러 토큰</h2>
<table>
  <thead><tr><th>토큰</th><th>HEX</th><th>용도</th></tr></thead>
  <tbody>
    <tr><td><code>--ink</code></td><td>#14110E</td><td>본문 텍스트 · 영구 토큰</td></tr>
    <tr><td><code>--paper</code></td><td>#FBF9F4</td><td>배경 · 영구 토큰</td></tr>
    <tr><td><code>--accent-27ss</code></td><td>#C96442</td><td>27SS 시즌 키 컬러</td></tr>
    <tr><td><code>--accent-26fw</code></td><td>#2C5FAE</td><td>26FW 시즌 키 컬러 (캐리오버용)</td></tr>
  </tbody>
</table>

<h2 id="typo">3. 타이포</h2>
<pre><code># 본문 (모든 채널)
font-family: "Pretendard Variable", -apple-system, system-ui, sans-serif

# 디스플레이 (룩북·캠페인)
font-family: "Hahmlet", "Grandiflora One", "Noto Serif KR", serif

# 모노 (코드·SKU)
font-family: "JetBrains Mono", "IBM Plex Mono", monospace</code></pre>

<h2 id="graphic">4. 그래픽 IP — 윌리 캐릭터 사용 규칙</h2>
<!-- 캐릭터 적용 OK/NG 사례, 크기·여백·컬러 -->

<h2 id="channel">5. 채널별 톤매너</h2>
<!-- 인스타그램 / 알림톡 / 룩북 / 상세페이지 별 톤매너 차이 -->
```

**언제 쓰나**: 신규 외주 디자이너 컨택 시 / OEM 그래픽 송부 시 / 콜라보 협업 시작 시 일괄 송부.

---

## 리듬 C — 발주 SOP (시즌 발주 흐름)

생산실 / MD실이 작성. 시즌 시작 3~4개월 전 발주 사이클 진입 시 신입 PD·RMD 송부.

### 좌측 사이드바

```html
<div class="group">
  <div class="group-label">발주 시작</div>
  <a href="#" class="active">시즌 발주 일정</a>
  <a href="#">발주서 양식</a>
  <a href="#">OEM 컨택 정보</a>
</div>
<div class="group">
  <div class="group-label">표준</div>
  <a href="#">MOQ · LOT 표준</a>
  <a href="#">사입가 협상 절차</a>
  <a href="#">납기 협의 SOP</a>
</div>
<div class="group">
  <div class="group-label">QC · 입고</div>
  <a href="#">QC 외주 SOP</a>
  <a href="#">입고 검수 체크</a>
  <a href="#">클레임 처리</a>
</div>
```

### 중앙 article 핵심

```html
<div class="crumbs">위키 › 발주 SOP › 시즌 발주 일정</div>
<h1>27SS 시즌 발주 SOP</h1>
<p class="lede">생산실 PD 및 신입 RMD가 시즌 발주 사이클 진입 직후 끝까지 읽는 표준 운영 문서. 라인업 LOCK 직후 본생산 발주, 견본 CON, 본생산, QC, 입고, 클레임까지 6단계 표준 절차를 정리.</p>

<h2 id="schedule">1. 시즌 발주 일정 표준</h2>
<table>
  <thead><tr><th>시점</th><th>단계</th><th>책임</th></tr></thead>
  <tbody>
    <tr><td>시즌 −6개월</td><td>라인업 LOCK</td><td>디자인실 + MD실</td></tr>
    <tr><td>시즌 −5개월</td><td>원단 발주 · 컬러 락</td><td>생산실 PD</td></tr>
    <tr><td>시즌 −3개월</td><td>본생산 1차 발주</td><td>생산실 + MD</td></tr>
    <tr><td>시즌 −2개월</td><td>견본 CON · 사이즈 락</td><td>생산실 PD + 디자인실장</td></tr>
    <tr><td>시즌 −1.5개월</td><td>본생산 · QC 외주 검수</td><td>생산실 PD + QC 외주실</td></tr>
    <tr><td>시즌 −1개월</td><td>3PL 입고 · A품/B품 분리</td><td>생산실 + 물류팀</td></tr>
  </tbody>
</table>

<h2 id="po">2. 발주서(P/O) 표준 양식</h2>
<pre><code># P/O 헤더 (필수 필드)
P/O 번호 · PO-27SS-W001 (W: WOMEN / U: UNI / A: ACC)
시즌 코드 · 27SS / 26FW
공장 코드 · OEM-A (합천) / OEM-B (진주)
사입가 · 단가 × 수량 = 총액 (40% 선급 / 60% 입고 시)</code></pre>
<div class="callout warn">
  <div class="label">주의</div>
  P/O 번호는 ERP에서 자동 발행. 수기 작성 금지. 공장 단톡방 전달 시 PDF + 한국어 명세 동봉.
</div>

<h2 id="moq">3. MOQ · LOT 표준</h2>
<!-- 카테고리별 MOQ 표 + LOT 색·사이즈 분배 표준 -->

<h2 id="qc">4. QC 외주 검수 SOP</h2>
<!-- 검수 항목 체크리스트 + 결함률 기준 + 클레임 등록 절차 -->

<h2 id="claim">5. 클레임 처리</h2>
<!-- 결함률 5%+ 시 본생산 정지, A품/B품 재분류 절차 -->
```

**언제 쓰나**: 시즌 발주 사이클 진입 직후 신입 PD·RMD에 송부 + OEM 신규 거래처 컨택 시.

---

## 리듬 D — 디자인 시스템 문서

디자인실장 작성. 디자이너 · 외주 그래픽 · 룩북 촬영팀이 참조하는 시각 표준 문서.

### 좌측 사이드바

```html
<div class="group">
  <div class="group-label">디자인 토큰</div>
  <a href="#" class="active">컬러 · 타이포</a>
  <a href="#">간격 · 모션</a>
  <a href="#">아이콘 · 일러스트</a>
</div>
<div class="group">
  <div class="group-label">그래픽</div>
  <a href="#">캐릭터 IP 적용</a>
  <a href="#">시즌 그래픽 룰</a>
  <a href="#">콜라보 그래픽</a>
</div>
<div class="group">
  <div class="group-label">시각 자산</div>
  <a href="#">룩북 촬영 표준</a>
  <a href="#">상세페이지 시각</a>
  <a href="#">인스타 콘텐츠</a>
</div>
```

### 중앙 article 핵심

본문은 디자인 토큰 표 + 캐릭터 IP 적용 OK/NG 사례 + 룩북 촬영 표준 (모델 선정·컷 종류·후보정 톤) + 상세페이지 키비주얼 → 디테일 → 사이즈표 → 소재 → 케어 표준 템플릿 등을 H2 5개로 정리합니다. 코드 블록은 토큰 JSON, 표는 디자인 토큰 매트릭스.

**언제 쓰나**: 디자인실 신규 입사자 / 외주 디자이너 컨택 / 룩북 촬영팀 브리핑 시 일괄 송부.

---

## 리듬 선택 가이드 요약

| 상황 | 권장 리듬 | 작성 주체 | 청중 |
|---|---|---|---|
| 신규 입사자 1주차 운영 매뉴얼 | **A — 입점 매뉴얼** | 영업기획팀 | 디자이너 / MD / 영업기획 신입 |
| 외주 디자이너 / 협력업체 송부 | **B — 브랜드 가이드라인** | 디자인실장 | 외주 디자이너 · OEM · 인쇄소 |
| 신입 PD / RMD 발주 사이클 진입 | **C — 발주 SOP** | 생산실 / MD실 | 생산실 PD · RMD · QC 외주실 |
| 디자이너 + 룩북 촬영팀 표준 | **D — 디자인 시스템** | 디자인실장 | 디자이너 · 룩북팀 · 그래픽 외주 |

선택한 리듬을 Step 2에서 한 문장으로 선언하세요. 예: "리듬 A 무신사 입점 매뉴얼을 선택했습니다."
