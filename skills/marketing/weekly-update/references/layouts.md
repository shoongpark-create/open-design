# K-패션 위클리 매출 리포트 레이아웃 (4종)

네 가지 리듬 중 **하나**를 Step 2에서 선택하여 `<div class="deck">` 안에 8개 `<section class="slide">` 를 붙여 넣으세요. 모든 리듬은 8장 슬라이드 + 가로 스냅 스크롤 구조를 유지합니다.

---

## 리듬 A — 표준 위클리 (기본값 · 8장)

영업기획팀이 매주 월요일 오전 발행하는 한국 패션기업 표준 양식.

```html
<!-- 01 표지 -->
<section class="slide" data-od-id="cover">
  <span class="slide-num">01 / 08</span>
  <div class="slide-eyebrow">WACKYWILLY · 27SS · WEEKLY</div>
  <h1>27SS W12<br/>주간 매출 리포트.</h1>
  <p>27년 5월 셋째 주 (5/13 ~ 5/19) 매출 현황 · 무신사 베스트 · QR/SPOT 결정 1건.</p>
  <p>발행: 27년 5월 20일 (월) 09:30 · 영업기획팀</p>
  <div class="author">
    <span class="av-small">지훈</span>
    <div>영업기획팀 박지훈 매니저<br/><span style="font-size: 11px; font-family: var(--font-mono); color: var(--muted-2); text-transform: uppercase; letter-spacing: 0.06em;">jihoon@wackywilly.kr</span></div>
  </div>
</section>

<!-- 02 헤드라인 숫자 -->
<section class="slide" data-od-id="headline">
  <span class="slide-num">02 / 08</span>
  <div class="slide-eyebrow">이번 주 헤드라인</div>
  <h1>주간 GMV.</h1>
  <p>27SS W12, 시즌 진척 36%. 전주 대비 매출 큰 폭 상승.</p>
  <div class="headline-num">+28%<small>WoW · 주간 GMV 2.8억 (전주 2.18억)</small></div>
</section>

<!-- 03 무신사 베스트 -->
<section class="slide" data-od-id="best">
  <span class="slide-num">03 / 08</span>
  <div class="slide-eyebrow">무신사 베스트 TOP 30 · 5/19 기준</div>
  <h2>이번 주 진입 2 · 이탈 1</h2>
  <table>
    <thead>
      <tr><th>SKU</th><th>아이템</th><th>BTA</th><th>전주 랭킹</th><th>이번 주</th><th>상태</th></tr>
    </thead>
    <tbody>
      <tr><td>WW-27SS-UNI-014</td><td>윌리 캐릭터 후디</td><td><span class="pill accent">A</span></td><td>34</td><td><b>12</b></td><td><span class="pill in">▲ 진입</span></td></tr>
      <tr><td>WW-27SS-WOM-022</td><td>플라워 와키 원피스</td><td><span class="pill trend">T</span></td><td>—</td><td><b>27</b></td><td><span class="pill in">▲ 신규 진입</span></td></tr>
      <tr><td>WW-27SS-UNI-008</td><td>그래픽 반팔티 (윌리 IP)</td><td><span class="pill accent">A</span></td><td>18</td><td>21</td><td><span class="pill warn">▼ 3</span></td></tr>
      <tr><td>WW-27SS-ACC-009</td><td>윌리 미니 토트</td><td><span class="pill trend">T</span></td><td>22</td><td>19</td><td><span class="pill good">▲ 3</span></td></tr>
      <tr><td>WW-26FW-OUT-031</td><td>오버사이즈 셔켓 (캐리오버)</td><td><span class="pill basic">B</span></td><td>28</td><td>—</td><td><span class="pill out">▼ 이탈</span></td></tr>
    </tbody>
  </table>
</section>

<!-- 04 인기 SKU TOP 5 -->
<section class="slide" data-od-id="popular">
  <span class="slide-num">04 / 08</span>
  <div class="slide-eyebrow">이번 주 인기 SKU · 전체 채널 합산</div>
  <h2>TOP 5 — QR 후보 2건 마킹</h2>
  <table>
    <thead>
      <tr><th>#</th><th>SKU</th><th>BTA</th><th>판매 수량</th><th>GMV</th><th>정판율</th><th>QR 후보</th></tr>
    </thead>
    <tbody>
      <tr><td>1</td><td>윌리 캐릭터 후디 (WW-27SS-UNI-014)</td><td><span class="pill accent">A</span></td><td class="num">980</td><td class="num">1.4억</td><td><span class="pill good">91%</span></td><td><span class="pill lock">QR 1,500장</span></td></tr>
      <tr><td>2</td><td>플라워 와키 원피스 (WW-27SS-WOM-022)</td><td><span class="pill trend">T</span></td><td class="num">620</td><td class="num">0.8억</td><td><span class="pill good">88%</span></td><td><span class="pill lock">SPOT 600장</span></td></tr>
      <tr><td>3</td><td>그래픽 반팔티 (WW-27SS-UNI-008)</td><td><span class="pill accent">A</span></td><td class="num">1,420</td><td class="num">0.5억</td><td><span class="pill good">84%</span></td><td>—</td></tr>
      <tr><td>4</td><td>윌리 미니 토트 (WW-27SS-ACC-009)</td><td><span class="pill trend">T</span></td><td class="num">340</td><td class="num">0.4억</td><td><span class="pill good">79%</span></td><td>—</td></tr>
      <tr><td>5</td><td>워시드 데님 셋업 (WW-27SS-UNI-003)</td><td><span class="pill basic">B</span></td><td class="num">218</td><td class="num">0.3억</td><td><span class="pill good">72%</span></td><td>—</td></tr>
    </tbody>
  </table>
</section>

<!-- 05 QR / SPOT 결정 -->
<section class="slide" data-od-id="decision">
  <span class="slide-num">05 / 08</span>
  <div class="slide-eyebrow">이번 주 결정 · MD실 사인 필요</div>
  <h2>QR 결정 1 · SPOT 결정 1</h2>

  <div class="decision">
    <h3>결정 1 · QR</h3>
    <h4>윌리 캐릭터 후디 (WW-27SS-UNI-014)</h4>
    <p>무신사 베스트 TOP 12 진입, 정판율 91%. 현재 재고 142장, 6월 1주차 품절 예상. 컬러 +1 (라임) 추가 검토.</p>
    <div class="meta"><span>발주 수량: <b>1,500장</b></span><span>데드라인: <b>5/27 (화)</b></span><span>오너: <b>MD실 민재 실장</b></span></div>
  </div>

  <div class="decision">
    <h3>결정 2 · SPOT</h3>
    <h4>플라워 와키 원피스 (WW-27SS-WOM-022)</h4>
    <p>자사몰 TOP 3, 정판율 88%. 사이즈 S 재고 우선 소진. SPOT 발주로 사이즈 S 보강 필요.</p>
    <div class="meta"><span>발주 수량: <b>600장</b></span><span>데드라인: <b>5/30 (금)</b></span><span>오너: <b>MD실 + 생산실</b></span></div>
  </div>
</section>

<!-- 06 KPI 차트 -->
<section class="slide" data-od-id="kpis">
  <span class="slide-num">06 / 08</span>
  <div class="slide-eyebrow">주간 KPI 추이</div>
  <h2>정판율 · 일별 GMV</h2>
  <div class="charts">
    <div class="chart-card">
      <h4>정상판매율 추이<small>W08 ~ W12 · 시즌 누적</small></h4>
      <svg viewBox="0 0 320 160" width="100%" height="160">
        <polyline fill="none" stroke="var(--accent)" stroke-width="2.4" points="0,90 64,84 128,76 192,68 256,62 320,56" />
        <g font-family="var(--font-mono)" font-size="9" fill="var(--muted)">
          <text x="0" y="155">W08</text><text x="64" y="155">W09</text><text x="128" y="155">W10</text><text x="192" y="155">W11</text><text x="256" y="155">W12</text>
        </g>
      </svg>
    </div>
    <div class="chart-card">
      <h4>일별 GMV<small>5/13 ~ 5/19 (이번 주)</small></h4>
      <svg viewBox="0 0 320 160" width="100%" height="160">
        <rect x="10" y="80" width="32" height="60" fill="var(--accent)" opacity="0.65"/>
        <rect x="52" y="60" width="32" height="80" fill="var(--accent)" opacity="0.7"/>
        <rect x="94" y="50" width="32" height="90" fill="var(--accent)" opacity="0.75"/>
        <rect x="136" y="40" width="32" height="100" fill="var(--accent)" opacity="0.8"/>
        <rect x="178" y="30" width="32" height="110" fill="var(--accent)" opacity="0.85"/>
        <rect x="220" y="20" width="32" height="120" fill="var(--accent)" opacity="0.9"/>
        <rect x="262" y="36" width="32" height="104" fill="var(--accent)"/>
        <g font-family="var(--font-mono)" font-size="9" fill="var(--muted)">
          <text x="26" y="155" text-anchor="middle">월</text><text x="68" y="155" text-anchor="middle">화</text><text x="110" y="155" text-anchor="middle">수</text><text x="152" y="155" text-anchor="middle">목</text><text x="194" y="155" text-anchor="middle">금</text><text x="236" y="155" text-anchor="middle">토</text><text x="278" y="155" text-anchor="middle">일</text>
        </g>
      </svg>
    </div>
  </div>
</section>

<!-- 07 다음 주 액션 -->
<section class="slide" data-od-id="actions">
  <span class="slide-num">07 / 08</span>
  <div class="slide-eyebrow">다음 주 액션 · 부서별 요청</div>
  <h2>W13 (5/20 ~ 5/26)</h2>
  <div class="actions">
    <div class="action-card">
      <h4>요청 1 · 디자인실</h4>
      <h5>윌리 후디 컬러 +1</h5>
      <ul>
        <li>QR 발주에 라임 컬러 추가 검토</li>
        <li>그래픽 위치 동일, 컬러만 변경</li>
        <li>샘플 5/25까지 픽업 요청</li>
      </ul>
      <div class="owner">오너 · 디자인실 민재 실장</div>
    </div>
    <div class="action-card">
      <h4>요청 2 · 마케팅실</h4>
      <h5>인스타 광고 예산 +500만원</h5>
      <ul>
        <li>윌리 후디 키 비주얼 광고 집행</li>
        <li>Meta CPM 단가 ↑, ROAS 4.2x 회복</li>
        <li>예산 승인 5/22까지 필요</li>
      </ul>
      <div class="owner">오너 · 마케팅실 윤서 실장</div>
    </div>
    <div class="action-card">
      <h4>요청 3 · 생산실</h4>
      <h5>SPOT 발주 일정 사이즈 S</h5>
      <ul>
        <li>플라워 와키 원피스 사이즈 S 600장</li>
        <li>OEM 협력사 컨펌 5/30까지</li>
        <li>6/12 입고 목표</li>
      </ul>
      <div class="owner">오너 · 생산실 수민 PM</div>
    </div>
  </div>
</section>

<!-- 08 클로징 -->
<section class="slide" data-od-id="closing">
  <span class="slide-num">08 / 08</span>
  <div class="slide-eyebrow">다음 리포트</div>
  <h1>W13 리포트 발행 5/27 (월) 09:30.</h1>
  <p>이번 주 결정 2건은 화요일 5/21 16:00 MD실 결정 미팅에서 확정 예정. 다음 주 W13 리포트는 QR / SPOT 입고 진척과 함께 발행됩니다.</p>
  <p style="color: var(--accent); font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase;">Confidential · WACKYWILLY 영업기획팀 내부 자료</p>
  <div class="author">
    <span class="av-small">지훈</span>
    <div>박지훈 매니저 · 영업기획팀<br/><span style="font-size: 11px; font-family: var(--font-mono); color: var(--muted-2); text-transform: uppercase; letter-spacing: 0.06em;">27.05.20 · WACKYWILLY</span></div>
  </div>
</section>
```

**언제 쓰나**: 시즌 진행 중 매주 월요일 오전 9:30 발행. MD실·디자인실·마케팅실·대표 공유.

**바꾸는 부분**: W주차·날짜·SKU 리스트·결정 콜아웃·액션 카드 3종.

---

## 리듬 B — 위기 위클리 (이탈 / 정판율 부진)

이탈 SKU 중심. 디스카운트 결정, 마케팅 강화 요청 톤. 정판율 떨어진 주에 사용.

```html
<!-- 표지: 헤드라인 = "주간 GMV -12% WoW · 캐리오버 잔존 ↑" -->
<!-- 헤드라인: 빨간 톤 음수 강조 (var(--bad)) -->
<!-- 무신사 베스트: 이탈 3 · 진입 0 -->
<!-- TOP5: 정판율 60% 이하 SKU 표시 -->
<!-- 결정 슬라이드: '디스카운트 10% / SPOT 보류' 결정 -->
<!-- 다음 주 액션: 마케팅실에 광고 +1,500만원 · 디자인실에 컬러 정리 -->
```

**언제 쓰나**: 시즌 중반 매출 부진 주. 톤은 결단력 있게.

**바꾸는 부분**: 헤드라인 색상을 `var(--bad)`로, 이탈 SKU 중심 표.

---

## 리듬 C — 호조 위클리 (캐리오버 결정 + 다음 시즌 미리보기)

매출 호조 주. 다음 시즌 IMC 미리보기 슬라이드 1장 추가.

```html
<!-- 헤드라인: "주간 GMV +45% WoW · 시즌 최고치 갱신" -->
<!-- 다음 주 액션 + 다음 시즌 28FW 컨셉 미리보기 슬라이드 -->
<!-- 캐리오버 결정 — 어느 SKU를 28FW로 캐리오버 할지 마킹 -->
```

**언제 쓰나**: 시즌 후반 + 매출 호조 + 다음 시즌 컨셉 보드 발행 직전.

**바꾸는 부분**: 다음 시즌 미리보기 슬라이드 추가, 캐리오버 결정 카드.

---

## 리듬 D — 시즌 마감 위클리

S1·S2·S3 판기 마지막 주. 결산 톤. dashboard·finance-report로 연결.

```html
<!-- 헤드라인: "S1 판기 종료 · 정판율 78.4% 달성" -->
<!-- 무신사 베스트: 판기 누적 TOP 10 -->
<!-- TOP5: 판기 누적 -->
<!-- 결정: SPOT 발주 중단 / S2 판기 입고 일정 -->
<!-- 액션: finance-report 작성 일정 + S2 판기 IMC 캠페인 -->
<!-- 클로징: 판기 마감 메시지 + S2 판기 시작 알림 -->
```

**언제 쓰나**: S1 6/30, S2 7/31, S3 8/31, S4 9/30 등 판기 마지막 주.

**바꾸는 부분**: 헤드라인 = 판기 누적 KPI, 결정 = 캐리오버 / 시즌오프.

---

## 리듬 선택 가이드 요약

| 주차 성격 | 권장 리듬 | 톤 |
|---|---|---|
| 정상 매출 주 | **A — 표준 위클리** | 중립 |
| 매출 부진 / 정판율 ↓ | **B — 위기 위클리** | 결단 |
| 매출 호조 / 시즌 후반 | **C — 호조 위클리** | 확장 |
| 판기 마지막 주 | **D — 마감 위클리** | 결산 |

선택한 리듬을 Step 2에서 한 문장으로 선언하세요. 예: "리듬 A 표준 위클리를 선택했습니다."
