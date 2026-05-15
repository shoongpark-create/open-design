# K-패션 발주·생산 운영 매뉴얼(런북) 레이아웃 (4종)

네 가지 리듬 중 **하나**를 Step 2에서 선택하여 `<div class="page" id="content">` 안에 붙여 넣으세요. 모든 리듬은 7개 섹션 순서(헤더 → 발주 개요 → 의존성 → 알람 표 → 절차 → 로테이션 → 사고 대응 → 푸터)를 동일하게 유지합니다.

OpenDesign 환경에서는 주요 영역에 `data-od-id`, 그 외에는 `id` 속성으로 대체합니다.

---

## 리듬 A — 시즌 1차 발주 SOP (기본값)

시즌 시작 3개월 전, 라인업 LOCK 직후 발행되는 메인 본생산 발주 매뉴얼. 생산실 PD가 작성.

```html
<!-- 01. 헤더 -->
<header class="head" data-od-id="head">
  <div class="head-left">
    <div class="crumb">[REPLACE WACKYWILLY] / 27SS / 1차 발주</div>
    <h1>27SS · 1차 발주 SOP</h1>
    <div class="head-meta">생산실 <span>@생산-1팀</span> · v1.2 · 최종 검토 2026-05-14</div>
  </div>
  <span class="pill tier"><span class="dot"></span>Tier 0 · 시즌 메인 발주</span>
</header>

<!-- 01. 발주 개요 -->
<section data-od-id="overview">
  <h2><span class="index">01</span>발주 개요</h2>
  <div class="summary">
    <div class="panel">
      <p><strong>27SS 1차 발주</strong>는 와키윌리 봄여름 시즌의 메인 본생산 발주입니다. UNI 라인 42 SKU + WOMEN 라인 38 SKU, 총 80 SKU / 24,500 PCS / 사입금액 7.2억 규모. S1 판기(5-6월) 매장 입고를 위해 <strong>6월 28일 입고 마감</strong> 필수.</p>
      <p>본 발주가 지연되면 S1 판기 매출 직접 타격 — 정상판매율 60% 기준 약 4.3억 매출 영향. 캐리오버 SKU는 별도 라인업으로 운영하며 본 SOP 대상 외.</p>
    </div>
    <div class="panel deps">
      <h3>의존성</h3>
      <ul>
        <li><span>대구 인견 (메인 원단)</span><span class="ok">정상</span></li>
        <li><span>서울 단추 거래처</span><span class="ok">정상</span></li>
        <li><span>OEM 공장 A · 우먼 외피</span><span class="ok">정상</span></li>
        <li><span>OEM 공장 B · 유니 니트</span><span class="warn">납기 지연 3일</span></li>
        <li><span>QC 외주실 · 동대문</span><span class="ok">정상</span></li>
        <li><span>3PL · 굿스플로 평택센터</span><span class="ok">정상</span></li>
      </ul>
    </div>
  </div>
</section>

<!-- 02. 알람 표 -->
<section data-od-id="alarms">
  <h2><span class="index">02</span>알람 — 발주 중 발생할 수 있는 이슈</h2>
  <table>
    <thead><tr><th>알람</th><th>심각도</th><th>의미</th><th>1차 대응</th></tr></thead>
    <tbody>
      <tr>
        <td class="code">color.deltaE &gt; 1.5</td>
        <td><span class="sev sev-2">SEV-2</span></td>
        <td>컬러 락 대비 색차 ΔE 1.5 초과. 매장 행거 톤 안 맞음.</td>
        <td>공장에 재염색 요청. 견본 재제출 요구. RMD에 컬러 락 변경 검토 보고.</td>
      </tr>
      <tr>
        <td class="code">size.spec_drift &gt; ±0.5cm</td>
        <td><span class="sev sev-2">SEV-2</span></td>
        <td>그레이딩 어긋남. 사이즈별 핏 일관성 깨짐.</td>
        <td>재단 재검 지시. 사이즈 재측정. 재단실 패턴 재확인.</td>
      </tr>
      <tr>
        <td class="code">delivery.lag &gt; 3d</td>
        <td><span class="sev sev-2">SEV-2</span></td>
        <td>OEM 공장 납기 지연 3일 초과. 매장 입고 일정 위협.</td>
        <td>공장에 사유 요청. 예비 공장 검토. MD에게 캐리오버 전환 가능 여부 보고.</td>
      </tr>
      <tr>
        <td class="code">fabric.shortage</td>
        <td><span class="sev sev-1">SEV-1</span></td>
        <td>원단 결품으로 본생산 정지. 라인 전체 영향.</td>
        <td>대구 인견에 즉시 연락. 가용 LOT 확인. 대체 원단 협의 — 컬러 락 변경 동의 필수.</td>
      </tr>
      <tr>
        <td class="code">qc.defect_rate &gt; 5%</td>
        <td><span class="sev sev-1">SEV-1</span></td>
        <td>봉제 결함률 5% 초과. 본생산 품질 문제.</td>
        <td>본생산 즉시 정지. QC 외주실 전수 검사 의뢰. 공장 책임자에 클레임 등록.</td>
      </tr>
      <tr>
        <td class="code">claim.field_return</td>
        <td><span class="sev sev-3">SEV-3</span></td>
        <td>입고 후 매장·소비자 클레임 발생. 컴플라이언스 이슈.</td>
        <td>클레임 시트 등록. A품/B품 재분류 지시. 영업기획 공유.</td>
      </tr>
    </tbody>
  </table>
</section>

<!-- 03. 표준 절차 -->
<section data-od-id="procs">
  <h2><span class="index">03</span>표준 절차</h2>
  <div class="procs">
    <div class="proc">
      <div class="proc-head"><h3>본생산 발주 진행</h3><span class="when">라인업 LOCK 직후 · 1차 발주 시</span></div>
      <p>견본 컨퍼(CON) 완료 후 OEM 공장에 본생산 P/O를 제출합니다. ERP에서 발주서 발행 후 공장 단톡방에 동시 전달.</p>
<pre><span class="cmt"># 27SS WOMEN 라인 1차 발주를 OEM 공장 A에 제출</span>
$ po submit --season <span class="var">27SS</span> --line <span class="var">WOMEN-1</span> --factory <span class="var">OEM-A</span>

<span class="cmt"># P/O 번호 발급 후 거래명세서 자동 생성 (40% 선급 / 60% 입고 시)</span>
$ po confirm <span class="var">PO-27SS-W001</span>
<span class="ok">→ P/O 발행 완료 · LOT-27SS-W001 ~ W038 · 1.8억 / 40% 선급금 7,200만원</span></pre>
    </div>
    <div class="proc">
      <div class="proc-head"><h3>컬러 락 변경 (Color Re-lock)</h3><span class="when">색차 ΔE 1.5 초과 시 · MD 사인오프 필수</span></div>
<pre><span class="cmt"># 견본 색차 발생 → 재염색 vs 컬러 락 변경 의사결정 후 실행</span>
$ color relock --sku <span class="var">27SS-W014</span> --from <span class="var">CW01-OAT</span> --to <span class="var">CW01-OAT-v2</span>
<span class="ok">→ 컬러 락 변경 등록 · 디자인실장 + MD 실장 사인 필요</span>

<span class="cmt"># 변경 후 그래픽 디렉션·룩북 어셋 일괄 업데이트 알림</span>
$ asset notify --type <span class="var">color-change</span> --sku <span class="var">27SS-W014</span></pre>
    </div>
    <div class="proc">
      <div class="proc-head"><h3>클레임 처리</h3><span class="when">QC 결함률 5% 초과 또는 입고 후 매장 클레임 발생 시</span></div>
<pre><span class="cmt"># 1. 클레임 등록 · 사유 코드 + 사진 첨부 + 영향 LOT 범위</span>
$ claim open --lot <span class="var">LOT-27SS-W023</span> --code <span class="var">sewing-defect</span> --rate <span class="var">7.2%</span>

<span class="cmt"># 2. A품/B품 재분류 후 거래명세서 차감액 산출</span>
$ claim grade --lot <span class="var">LOT-27SS-W023</span> --a-grade <span class="var">820</span> --b-grade <span class="var">68</span>
<span class="ok">→ 차감액 1,360만원 (B품 68장 × 20만원)</span>

<span class="cmt"># 3. 공장 책임자에 클레임 공문 발송 + 재발주 결정 보고</span>
$ claim notify --factory <span class="var">OEM-B</span> --next <span class="var">re-order-or-credit</span></pre>
    </div>
    <div class="proc">
      <div class="proc-head"><h3>입고 검수 (3PL 도착 후)</h3><span class="when">매 입고일 · QC 외주실 동행 필수</span></div>
<pre><span class="cmt"># 입고 즉시 SKU 수량 · LOT 코드 · 박스 단위 일치 확인</span>
$ inbound check --po <span class="var">PO-27SS-W001</span> --location <span class="var">3PL-PYEONGTAEK</span>
<span class="ok">→ 24,420 PCS 입고 · 견본 80 PCS 부족 · 공장에 추가 출고 요청</span></pre>
    </div>
  </div>
</section>

<!-- 04. 담당자 로테이션 -->
<section data-od-id="rota">
  <h2><span class="index">04</span>담당자 로테이션 · 이번 발주 사이클</h2>
  <table class="rota">
    <thead><tr><th>주차</th><th>PD (생산 담당)</th><th>RMD (머천다이저)</th><th>QC (검수 책임)</th></tr></thead>
    <tbody>
      <tr><td>5월 1주 · 발주 진행</td><td>김도하</td><td>박지연</td><td>이수민</td></tr>
      <tr><td>5월 2-3주 · 견본 CON</td><td>김도하</td><td>박지연</td><td>이수민</td></tr>
      <tr><td>5월 4주 ~ 6월 2주 · 본생산</td><td>장하늘</td><td>박지연</td><td>최서연</td></tr>
      <tr><td>6월 3-4주 · 입고 검수</td><td>장하늘</td><td>윤재민</td><td>최서연</td></tr>
    </tbody>
  </table>
</section>

<!-- 05. 사고 대응 -->
<section data-od-id="incident">
  <h2><span class="index">05</span>사고 대응 — 첫 30분</h2>
  <div class="checklist">
    <div class="step">
      <div class="step-num">1</div>
      <div><h4>5분 내 알람 확인 (Ack)</h4><p>슬랙 <code>#생산-27ss</code> 채널에 <code>/ack</code> 입력. 봇이 재알람 멈추고 담당 PD 태깅.</p></div>
    </div>
    <div class="step">
      <div class="step-num">2</div>
      <div><h4>이슈 채널 개설</h4><p><code>/incident open 27SS "공장명·이슈요약"</code> 실행. 전용 채널 자동 생성, 백업 PD에 호출.</p></div>
    </div>
    <div class="step">
      <div class="step-num">3</div>
      <div><h4>상태 스냅샷 게시</h4><p>매장 영향 한 줄, 현재 파악된 사실, 다음 확인 항목. 10분마다 재게시.</p></div>
    </div>
    <div class="step">
      <div class="step-num">4</div>
      <div><h4>진단보다 우선 대응</h4><p>색차·납기 지연이면 예비 공장·캐리오버 전환 먼저 검토. 원단 결품이면 컬러 락 변경 협의가 우선 — 본생산 정지는 <em>최후</em>의 카드.</p></div>
    </div>
    <div class="step">
      <div class="step-num">5</div>
      <div><h4>인수인계 또는 종료</h4><p>30분 내 해결 못 하면 백업 PD에 인계. 정상화 시 <code>/incident close</code>. 사후 리포트는 5영업일 내.</p></div>
    </div>
  </div>
</section>

<footer>
  <span>WACKYWILLY 생산실 · 발주 SOP v3.2</span>
  <span>Source: 생산-매뉴얼/27ss-po1.md</span>
</footer>
```

**언제 쓰나**: 시즌 시작 2~3개월 전, 라인업 LOCK 직후 본생산 발주 시작 시점에 발행. 발주 사이클 전체 동안 참조 문서로 사용.

**바꾸는 부분**: 발주 규모(SKU·PCS·사입금액), OEM 공장 명단, 입고 마감일, 담당자 이름.

---

## 리듬 B — QR / SPOT 발주 매뉴얼 (시즌 진행 중)

시즌 진행 중 발생하는 추가 발주(Quick Response, SPOT) 대응 매뉴얼. MD실 RMD가 매주 월요일 참조.

```html
<header class="head" data-od-id="head">
  <div class="head-left">
    <div class="crumb">[REPLACE WACKYWILLY] / 27SS / QR · SPOT</div>
    <h1>27SS QR · SPOT 발주 매뉴얼</h1>
    <div class="head-meta">MD실 <span>@MD-1팀</span> · v2.1 · 매주 갱신</div>
  </div>
  <span class="pill tier"><span class="dot"></span>Tier 1 · 시즌 추가 발주</span>
</header>

<!-- 01. 발주 개요 -->
<section data-od-id="overview">
  <h2><span class="index">01</span>QR / SPOT 발주 개요</h2>
  <div class="summary">
    <div class="panel">
      <p><strong>QR(Quick Response)</strong>는 시즌 진행 중 정판율 80%+ 달성한 SKU의 추가 발주. <strong>SPOT</strong>은 시즌 외 트렌드 급부상 시 새로 기획·발주하는 SKU.</p>
      <p>의사결정 데드라인 — 매주 월요일 14시 MD실 미팅에서 QR/SPOT 결정 사인. 발주서 발행은 화요일, OEM 본생산은 3주 후 입고 기준 역산.</p>
    </div>
    <div class="panel deps">
      <h3>의존성</h3>
      <ul>
        <li><span>대구 인견 · QR 전용 LOT</span><span class="ok">정상</span></li>
        <li><span>OEM 공장 A · QR 우선순위</span><span class="ok">정상</span></li>
        <li><span>SPOT 신규 OEM 후보 3곳</span><span class="warn">컨택 중</span></li>
        <li><span>이커머스팀 정판율 데이터</span><span class="ok">자동</span></li>
      </ul>
    </div>
  </div>
</section>

<!-- 02. 알람 표 -->
<section data-od-id="alarms">
  <h2><span class="index">02</span>QR 결정 알람</h2>
  <table>
    <thead><tr><th>알람</th><th>심각도</th><th>의미</th><th>1차 대응</th></tr></thead>
    <tbody>
      <tr><td class="code">sellrate &gt; 85% / 4w</td><td><span class="sev sev-3">SEV-3</span></td><td>발매 4주 내 정판율 85% 초과 — QR 후보</td><td>RMD가 추가 발주 시뮬레이션, 월요일 미팅 발의</td></tr>
      <tr><td class="code">musinsa.best.rank &lt; 30</td><td><span class="sev sev-3">SEV-3</span></td><td>무신사 베스트 TOP 30 진입 — QR 강한 후보</td><td>발주 수량 +50% 검토, 컬러웨이 추가 검토</td></tr>
      <tr><td class="code">stock_days &lt; 14</td><td><span class="sev sev-2">SEV-2</span></td><td>현재 회전율 기준 재고 14일 미만 — sell-out 임박</td><td>당주 QR 결정 필수, 자사몰 노출 조정</td></tr>
      <tr><td class="code">trend.spike</td><td><span class="sev sev-2">SEV-2</span></td><td>SNS·검색량 급상승 트렌드 발견</td><td>SPOT 신규 기획 검토 — 디자인실 + MD 공동</td></tr>
    </tbody>
  </table>
</section>

<!-- 03. 표준 절차 -->
<section data-od-id="procs">
  <h2><span class="index">03</span>QR / SPOT 표준 절차</h2>
  <div class="procs">
    <div class="proc">
      <div class="proc-head"><h3>QR 발주 사인</h3><span class="when">매주 월요일 MD실 미팅</span></div>
<pre><span class="cmt"># 정판율·재고 데이터 기반 QR 후보 SKU 시뮬레이션</span>
$ qr simulate --sku <span class="var">27SS-OUT-014</span> --window <span class="var">4w</span>
<span class="ok">→ 추가 발주 1,500장 / 컬러 +1 (라임) / ROI 추정 +2.4억</span>

<span class="cmt"># MD실장 사인 후 발주 진행</span>
$ qr commit --sku <span class="var">27SS-OUT-014</span> --qty <span class="var">1500</span> --sign <span class="var">MH-MDLEAD</span></pre>
    </div>
    <div class="proc">
      <div class="proc-head"><h3>SPOT 신규 기획 → 발주</h3><span class="when">트렌드 급부상 발견 시 · 디자인실 + MD 공동</span></div>
<pre><span class="cmt"># SPOT 컨셉 LOCK 후 4주 내 입고 목표로 발주</span>
$ spot kickoff --trend <span class="var">"플라워-자수-가디건"</span> --owner <span class="var">SY-DESIGN</span>
$ spot po --season <span class="var">27SS-SPOT01</span> --qty <span class="var">800</span> --factory <span class="var">OEM-A</span></pre>
    </div>
    <div class="proc">
      <div class="proc-head"><h3>QR 출고 후 채널 노출 조정</h3><span class="when">QR 입고 직후</span></div>
<pre><span class="cmt"># 자사몰·무신사·29CM 동시 노출 갱신</span>
$ channel push --sku <span class="var">27SS-OUT-014</span> --channels <span class="var">smartstore,musinsa,29cm</span></pre>
    </div>
  </div>
</section>

<!-- 04. 로테이션 · 05. 사고 대응은 리듬 A 구조 그대로. 단, 사고 = QR 결정 실수 시 환수 절차. -->
```

**언제 쓰나**: 시즌 진행 중 매주 월요일 MD실 미팅 직전 참조. 매주 갱신.

**바꾸는 부분**: QR 후보 SKU 목록, 재고일수 임계값, OEM QR 전용 라인.

---

## 리듬 C — 입고 검수 + QC 매뉴얼

3PL 입고 직후 QC 외주실 + 생산실 PD가 동행하는 검수 절차서.

```html
<header class="head" data-od-id="head">
  <div class="head-left">
    <div class="crumb">[REPLACE WACKYWILLY] / 27SS / 입고 · QC</div>
    <h1>27SS 입고 검수 + QC 매뉴얼</h1>
    <div class="head-meta">생산실 + QC외주실 <span>@QC-동대문</span> · v1.0</div>
  </div>
  <span class="pill tier"><span class="dot"></span>Tier 0 · 입고 사이클</span>
</header>

<!-- 01. 입고 개요 — 3PL 위치 · 검수 동선 · A품/B품 분리 -->
<!-- 02. 의존성 — 굿스플로·CJ대한통운·자사 검수실 -->
<!-- 03. 알람 표 — 박스 수 불일치 / 검수 결함률 / 거래명세서 차감 -->
<!-- 04. 절차 — 입고 체크, QC 검수 (10% 샘플링), A품/B품 재분류, 거래명세서 차감 -->
<!-- 05. 로테이션 — 입고일별 QC 검수관 배치 -->
<!-- 06. 사고 대응 — 결함률 5% 초과 시 전수 검사 흐름 -->
```

**언제 쓰나**: 매 입고일 (시즌 시작 1개월 전부터). QC 외주실 신규 거래 시작 시 일괄 송부.

**바꾸는 부분**: 3PL 위치, QC 외주실, 박스·LOT 단위 표준.

---

## 리듬 D — 시즌 전환 매뉴얼 (시즌 종료 → 다음 시즌 입고 전환)

시즌 종료 시점에 영업기획팀이 자사몰·입점채널 페이지·캠페인 송출을 일괄 교체하는 사이클 매뉴얼.

```html
<header class="head" data-od-id="head">
  <div class="head-left">
    <div class="crumb">[REPLACE WACKYWILLY] / 27SS → 27FW / 시즌 전환</div>
    <h1>27SS → 27FW 시즌 전환 매뉴얼</h1>
    <div class="head-meta">영업기획팀 <span>@MD-2팀</span> · v3.2</div>
  </div>
  <span class="pill tier"><span class="dot"></span>Tier 1 · 시즌 전환</span>
</header>

<!-- 01. 시즌 전환 개요 — 캐리오버 SKU / 시즌 종료 할인 / 신규 시즌 페이지 교체 -->
<!-- 02. 의존성 — 자사몰(카페24) / 무신사·29CM / 알림톡 / 룩북 -->
<!-- 03. 알람 표 — 재고 잔존율 / 시즌 할인 적용 / 캐리오버 결정 -->
<!-- 04. 절차 — 자사몰 시즌 페이지 교체, 무신사 상세 교체, 캠페인 송출 전환, 캐리오버 SKU 등록 -->
<!-- 05. 로테이션 — 시즌 전환 주차별 영업기획·마케팅·이커머스 책임 -->
<!-- 06. 사고 대응 — 시즌 전환 누락(이전 시즌 노출 잔존) 발견 시 5분 내 대응 -->
```

**언제 쓰나**: 시즌 종료 4주 전부터. 분기마다 1회 반복.

**바꾸는 부분**: 시즌 코드, 캐리오버 SKU 목록, 시즌 할인율, 캠페인 송출 시점.

---

## 리듬 선택 가이드 요약

| 상황 | 권장 리듬 | 작성 주체 | 청중 |
|---|---|---|---|
| 시즌 1차 본생산 발주 | **A — 시즌 발주 SOP** | 생산실 PD | OEM · QC · 3PL |
| 시즌 진행 중 QR/SPOT 결정 | **B — QR/SPOT 발주** | MD실 RMD | MD · 디자인실 · 영업기획 |
| 입고일 검수 | **C — 입고·QC 매뉴얼** | 생산실 + QC외주실 | PD · QC · 3PL |
| 시즌 종료 → 다음 시즌 전환 | **D — 시즌 전환** | 영업기획팀 | 이커머스 · 마케팅실 · MD |

선택한 리듬을 Step 2에서 한 문장으로 선언하세요. 예: "리듬 A 시즌 1차 발주 SOP를 선택했습니다."
