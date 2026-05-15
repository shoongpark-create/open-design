# K-패션 상품 기획서 레이아웃 (4종)

네 가지 리듬 중 **하나**를 Step 2에서 선택하여 `<div class="page" id="content">` 안에 붙여 넣으세요. 모든 리듬은 7개 섹션 순서(헤더 → H1/요약 → 메타 → 시장·문제 → 목표·비목표 → 성공 지표 → 페르소나 → 마일스톤 → 미결 → 푸터)를 동일하게 유지합니다.

OpenDesign 환경에서는 주요 영역에 `data-od-id`, 그 외에는 `id` 속성으로 대체합니다.

---

## 리듬 A — 신상품 기획서 (시즌 키 아이템 · 기본값)

MD가 시즌 시작 4~5개월 전 작성하는 표준 기획서. 1차 품평회 전 결재 완료.

```html
<!-- 상단 헤더 -->
<header class="top" data-od-id="top">
  <div class="top-left">
    <span class="crumb">[REPLACE WACKYWILLY] / [REPLACE 27SS] / 키 아이템 / 기획서</span>
    <span class="pill draft"><span class="dot"></span>Draft v0.3 · MD실장 검토 중</span>
  </div>
  <div class="top-actions">
    <span>작성 · [REPLACE 민혜 MD]</span>
    <span>수정 · 27/01/12</span>
    <span>검토 · 4명</span>
  </div>
</header>

<!-- H1 + 3줄 요약 -->
<h1>[REPLACE 27SS 시즌 헤드 아이템 · 윌리 그래픽 후디.]</h1>
<p class="summary">[REPLACE 윌리 캐릭터 IP를 시즌 키 아이템 1번으로 끌어올려, 27SS S1 판기 무신사 베스트 TOP30 진입과 자사몰 D2C 신규 회원 확보를 동시에 노린다. 캐리오버가 아닌 시즌 한정 그래픽으로 희소성·팬덤 화제성 확보.]</p>

<!-- 메타 행 -->
<div class="meta-row">
  <span><strong>라인</strong>UNI · 아우터</span>
  <span><strong>디자이너</strong>장원 (그래픽 수석)</span>
  <span><strong>디자인 리드</strong>박경 디자인실장</span>
  <span><strong>발매 일정</strong>27SS S1 · 5월 둘째 주</span>
  <span><strong>예상 LOT</strong>10,000장 (1차 6,000 · QR 4,000)</span>
</div>

<!-- 시장·문제 -->
<section data-od-id="problem">
  <h2>시장 · 문제<small>왜 지금, 왜 이 아이템인가.</small></h2>
  <div class="problem">
    <div class="panel">
      <p>26FW 시즌 정상판매율이 72%(목표 75% 대비 −3pp)에 머무는 동안, 캐릭터 IP가 있는 와키윌리·키르시·스튜시 같은 브랜드는 시즌 정판 85%+를 기록했다. 26FW 자사 데이터로도 윌리 캐릭터 적용 SKU 4종이 적용 없는 SKU 대비 회전율 1.6배.</p>
      <p>또한 K-아이돌 팬덤이 무신사·29CM에서 캐릭터 굿즈성 의류를 매주 검색 상위에 올리는 패턴 확인 (네이버 데이터랩, 26년 4분기). 시즌 한정 그래픽 + 멤버 친화 마케팅 push를 결합해 무신사 베스트 진입 노립니다.</p>
    </div>
    <div class="quote">
      <div class="body">"윌리 그래픽이 들어간 후드를 시즌마다 기다리는 회원이 있다는 게 와키윌리만의 강점. 26FW 무신사 리뷰 1,200건 중 24%가 캐릭터 언급."</div>
      <div class="author">— Dazed Korea · 27년 1월호 · "K-IP 패션의 부상"</div>
    </div>
  </div>
</section>

<!-- 목표·비목표 -->
<section data-od-id="goals">
  <h2>목표 &amp; 비목표<small>이번 기획에서 다루는 것, 미루는 것.</small></h2>
  <div class="goals">
    <div class="goal-list">
      <h3><span class="tick yes">✓</span>목표</h3>
      <ul>
        <li>27SS S1 판기 1만장 판매 (시즌 누적).</li>
        <li>정상판매율 85% 이상 (시즌 종료 시점).</li>
        <li>무신사 베스트 TOP30 진입 (발매 후 4주 이내).</li>
        <li>자사몰 D2C 비중 40% 유지 (마진율 35% 이상 채널).</li>
        <li>인스타 #WACKYWILLY 해시태그 +5,000건.</li>
      </ul>
    </div>
    <div class="goal-list">
      <h3><span class="tick no">×</span>비목표</h3>
      <ul>
        <li>27FW 캐리오버 — 그래픽은 시즌 한정 (희소성 유지).</li>
        <li>WOMEN 라인 단독 핏 — UNI 라인으로 통합.</li>
        <li>글로벌 채널 직접 발매 — 일본·동남아는 28SS부터.</li>
        <li>콜라보 그래픽 추가 — 27FW 별도 기획서로 분리.</li>
      </ul>
    </div>
  </div>
</section>

<!-- 성공 지표 표 -->
<section data-od-id="metrics">
  <h2>성공 지표<small>발매 후 30 / 60 / 90일 시점에서 측정한다.</small></h2>
  <table>
    <thead><tr><th>지표</th><th>베이스라인</th><th>목표 (시즌 종료)</th><th>측정 방법</th></tr></thead>
    <tbody>
      <tr><td>판매 수량 (시즌 누적)</td><td>26FW 캐릭터 SKU 6,200장</td><td class="target">10,000장</td><td>사내 ERP · 자사몰 + 무신사 + 29CM 합산</td></tr>
      <tr><td>정상판매율 (정판율)</td><td>26FW 72%</td><td class="target">85% 이상</td><td>사내 ERP · 시즌 종료 시 정상가 판매 / 총 입고</td></tr>
      <tr><td>무신사 베스트 순위</td><td>미진입</td><td class="target">TOP30 진입 (4주 내)</td><td>무신사 셀러센터 · 후디 카테고리</td></tr>
      <tr><td>자사몰 D2C 비중</td><td>26FW 35%</td><td class="target">40% 이상</td><td>자사몰 어드민 · 채널별 GMV 합산</td></tr>
      <tr><td>제품 리뷰 평점</td><td>26FW 4.4점</td><td class="target">4.6점 이상</td><td>무신사 셀러센터 · 리뷰 50건 누적 후</td></tr>
    </tbody>
  </table>
</section>

<!-- 페르소나 -->
<section data-od-id="persona">
  <h2>페르소나 / 코디 스토리<small>3개 타겟, 3가지 동기.</small></h2>
  <div class="stories">
    <div class="story">
      <div class="story-num">1</div>
      <div class="story-text"><strong>지유 (24세 · K-아이돌 팬)</strong>는 멤버 비공식 굿즈성 의류를 무신사에서 매주 검색하는 영캐주얼 회원으로서, 윌리 그래픽 후디를 친구들과 공유하고 인스타에 인증하기 위해 구매한다 — 시즌 한정성 + 굿즈 화제성 동기.</div>
    </div>
    <div class="story">
      <div class="story-num">2</div>
      <div class="story-text"><strong>민준 (27세 · 디자인 감도 우선)</strong>는 무신사 스탠다드·인사일런스·슬로우애시드를 입는 회원으로서, 윌리 후디의 핏·소재·컬러 균형을 좋아해 베이지 컬러웨이만 1장 구매한다 — 베이직 컬러웨이 동시 운영 필요.</div>
    </div>
    <div class="story">
      <div class="story-num">3</div>
      <div class="story-text"><strong>서연 (22세 · 친구 추천)</strong>는 친구 추천 + 인플루언서 착용 컷을 보고 자사몰에 첫 가입하는 신규 회원으로서, 시즌 키 아이템을 사면서 신규 가입 쿠폰 + 알림톡 가입을 모두 진행한다 — 자사몰 D2C 신규 회원 확보 동력.</div>
    </div>
  </div>
</section>

<!-- 마일스톤 -->
<section data-od-id="timeline">
  <h2>마일스톤<small>4단계 · 각 단계 LOCK 또는 발주 결정 포인트.</small></h2>
  <div class="timeline">
    <div class="step">
      <span class="badge">M1 · 1월</span>
      <h4>1차 샘플 · 1차 품평회</h4>
      <div class="meta">1월 4주차</div>
      <ul><li>1차 샘플 입고</li><li>그래픽 컬러 4종</li><li>OK/NG 결정</li></ul>
    </div>
    <div class="step">
      <span class="badge">M2 · 2월</span>
      <h4>2차 샘플 · 라인업 LOCK</h4>
      <div class="meta">2월 1주차</div>
      <ul><li>핏 수정 반영</li><li>컬러웨이 LOCK</li><li>발주 수량 결정</li></ul>
    </div>
    <div class="step">
      <span class="badge">M3 · 3월</span>
      <h4>발주 · 본생산</h4>
      <div class="meta">3월 1주~말</div>
      <ul><li>OEM 합천 발주</li><li>본생산 진행</li><li>QC 외주 검수</li></ul>
    </div>
    <div class="step">
      <span class="badge">M4 · 5월</span>
      <h4>입고 + 룩북 · 캠페인</h4>
      <div class="meta">5월 둘째 주</div>
      <ul><li>전 채널 입고</li><li>인스타 캠페인 push</li><li>무신사 상세 노출</li></ul>
    </div>
  </div>
</section>

<!-- 미결 -->
<section data-od-id="open">
  <h2>미결 질문<small>1차 품평회 (1/25)까지 답이 있어야 LOCK 일정을 지킨다.</small></h2>
  <div class="questions">
    <div class="question">
      <p>컬러웨이 — 4컬러(옐로·네이비·차콜·베이지) vs 5컬러(+페일핑크). 신규 영캐주얼 회원 유입 효과 vs 사입가율 영향.</p>
      <span class="assignee"><span class="avatar">MD</span>민혜 MD · 1/22</span>
    </div>
    <div class="question">
      <p>그래픽 단가 8% 절감 OEM 협의 — 합천 공장 vs 진주 공장. 진주는 단가 절감 가능하지만 납기 1주 지연 가능성.</p>
      <span class="assignee"><span class="avatar">JW</span>장원 · 1/24</span>
    </div>
    <div class="question">
      <p>인플루언서 사전 시딩 — 마이크로 인플루언서 30명 vs 셀럽 1명. 둘 다 진행할지, 1가지만 진행할지.</p>
      <span class="assignee"><span class="avatar">MK</span>예진 마케팅실장 · 1/25</span>
    </div>
  </div>
</section>

<footer>
  <span>WACKYWILLY 27SS · 키 아이템 · 윌리 후디 기획서</span>
  <span>v0.3 · 27년 1월 12일</span>
</footer>
```

**언제 쓰나**: 시즌 시작 4~5개월 전, MD가 작성하여 디자인실장 → MD실장 → 대표 순으로 결재. 1차 품평회 직전 결재 완료.

**바꾸는 부분**: 페르소나 3개 인구 통계, 정판율 목표(60~85% 범위), 마일스톤 일자.

---

## 리듬 B — 콜라보 기획서 (협업 브랜드 발매)

브랜드 디렉터 또는 마케팅 실장이 작성, 대표 직결재. 시너지 가설·라인업·일정 중심.

```html
<header class="top" data-od-id="top">
  <div class="top-left">
    <span class="crumb">[REPLACE WACKYWILLY] / 콜라보 / [REPLACE SANRIO] / 기획서</span>
    <span class="pill review"><span class="dot"></span>Review · 대표 결재 대기</span>
  </div>
  <div class="top-actions">
    <span>작성 · 예진 마케팅실장</span>
    <span>수정 · 27/02/14</span>
    <span>검토 · 5명</span>
  </div>
</header>

<h1>[REPLACE WACKYWILLY × SANRIO 콜라보 캡슐 컬렉션.]</h1>
<p class="summary">[REPLACE 산리오 캐릭터 IP 6종을 윌리 그래픽 톤으로 재해석한 캡슐. 후디·크로스백·키링 3종 라인업. 4월 11일 정식 발매, 사전예약 3월 14일. 회원 굿즈 화제성 + 글로벌 PR 트리거.]</p>

<div class="meta-row">
  <span><strong>콜라보 파트너</strong>SANRIO Korea · 라이선스 부서 김지원 차장</span>
  <span><strong>라인업</strong>3 SKU · 후디 / 크로스백 / 키링</span>
  <span><strong>발매 채널</strong>자사몰 + 무신사 단독 + 성수 팝업 (3일)</span>
  <span><strong>예상 사입금액</strong>3.2억 (라이선스 비용 포함)</span>
</div>

<!-- 시장·문제: 캐릭터 IP 협업의 시너지 가설 -->
<section data-od-id="problem">
  <h2>시너지 가설<small>왜 와키윌리 × 산리오인가.</small></h2>
  <div class="problem">
    <div class="panel">
      <p>와키윌리의 캐릭터 IP 운영 노하우 + 산리오의 글로벌 팬덤(특히 일본·동남아)이 결합되면 27SS S2 판기 매출에서 콜라보 단독 매출 8억 + 본 라인 동반 상승 효과 예상. 마뗑킴 × 헬로키티 콜라보 26FW 사례 (15일 만에 sell-out, 자사몰 신규 회원 +12,000) 참고.</p>
      <p>리스크 — 라이선스 비용 사입가율 +3pp 상승. 마진율 보호 위해 정상가 ₩148,000+ 책정 필요.</p>
    </div>
    <div class="quote">
      <div class="body">"K-패션 × 일본 캐릭터 IP는 26년 매거진 픽업 평균 +180%. 산리오 측은 와키윌리의 그래픽 톤을 글로벌 라이선시 후보로 1순위 검토 중."</div>
      <div class="author">— W Korea · 27년 2월호 · IP 패션 기획기사</div>
    </div>
  </div>
</section>

<!-- 목표·비목표 / 성공 지표 / 페르소나 / 마일스톤 / 미결은 리듬 A와 동일 구조.
     단, 마일스톤은 콜라보 사이클: 컨셉 LOCK → 라이선스 컨펌 → 사전예약 → 정식 발매. -->
```

**언제 쓰나**: 협업 브랜드 컨택 직후 ~ 발매 3개월 전. 대표 직결재 통과 후 디자인실 + 마케팅실 동시 진행.

**바꾸는 부분**: 콜라보 파트너 정보, 라이선스 비용 가정, 시너지 인용(매거진/플랫폼 데이터).

---

## 리듬 C — 팝업스토어 기획안 (성수·한남·명동)

마케팅 실장 또는 VMD가 작성. 위치·기간·라인업·객수 목표 중심.

```html
<header class="top" data-od-id="top">
  <div class="top-left">
    <span class="crumb">[REPLACE WACKYWILLY] / 팝업 / 성수동 / 기획안</span>
    <span class="pill approved"><span class="dot"></span>Approved · 대표 결재 27/03/02</span>
  </div>
  <div class="top-actions">
    <span>작성 · 예진 마케팅실장</span>
    <span>수정 · 27/03/05</span>
    <span>VMD · 한설</span>
  </div>
</header>

<h1>[REPLACE 27SS · WACKY GARDEN — 성수동 팝업스토어 기획안.]</h1>
<p class="summary">[REPLACE 27SS 컬렉션 키비주얼인 'WACKY GARDEN'을 공간으로 구현. 성수동 연무장 골목 1층 단독 · 3주간 운영 · 일 객수 800명 목표. 한정 SKU 4종 + 컬렉션 풀라인 + 캐릭터 포토존 + 베이커리 협업.]</p>

<div class="meta-row">
  <span><strong>위치</strong>성수동 연무장길 22 · 1F 단독 · 132㎡</span>
  <span><strong>기간</strong>27/05/15 ~ 27/06/04 (3주 · 21일)</span>
  <span><strong>한정 SKU</strong>팝업 단독 4 SKU + 포토 굿즈 2종</span>
  <span><strong>예상 객수</strong>일 800명 · 총 16,800명</span>
  <span><strong>예산</strong>총 2.4억 (공간 1.1억 / VMD 0.6억 / 운영 0.4억 / 마케팅 0.3억)</span>
</div>

<!-- 시장·문제: 왜 성수동, 왜 지금. 인플루언서·인스타 인증 데이터 인용. -->
<!-- 목표·비목표 · 성공 지표(객수, 인스타 해시태그, 자사몰 신규 회원, ROI). -->
<!-- 페르소나 — 성수동 라운드형 영캐주얼 / 콘텐츠 제작 인플루언서 / 외국인 관광객. -->
<!-- 마일스톤 4단계: 공간 LOCK → 시공 → 오픈 → 종료/철수. -->
<!-- 미결 — 대관료 vs 카페 협업 비중, 인플루언서 사전 시딩 규모, 굿즈 한정 수량. -->
```

**언제 쓰나**: 팝업 2~3개월 전 작성. 위치·기간·예산을 대표 결재로 확정한 뒤 시공 발주.

**바꾸는 부분**: 위치(성수/한남/명동 등), 기간, 라인업 한정 SKU, 객수·매출 목표.

---

## 리듬 D — 시즌 라인 확장 기획서 (액세서리·신규 카테고리 진입)

기존 라인에 없던 신규 카테고리(액세서리, 슈즈, 키즈, 홈) 진입 결재 문서. MD실 + 디자인실 공동 작성.

```html
<header class="top" data-od-id="top">
  <div class="top-left">
    <span class="crumb">[REPLACE WACKYWILLY] / 27SS / 신규 라인 / 기획서</span>
    <span class="pill draft"><span class="dot"></span>Draft v0.2 · 디자인실 + MD실 공동 작성</span>
  </div>
  <div class="top-actions">
    <span>작성 · 민혜 MD · 박경 디자인실장</span>
    <span>수정 · 27/01/20</span>
  </div>
</header>

<h1>[REPLACE 27SS · 액세서리 라인 진입 기획서.]</h1>
<p class="summary">[REPLACE 의류 라인의 자연스러운 확장으로 액세서리 라인 진입. 백·키링·모자·양말 4 카테고리 · 12 SKU. 27SS S1부터 단계 도입, 27FW 본격 라인업 LOCK. 무신사 ACC 카테고리 진입 + 자사몰 백 등급 신설.]</p>

<div class="meta-row">
  <span><strong>신규 카테고리</strong>액세서리 (백 / 키링 / 모자 / 양말)</span>
  <span><strong>1차 라인업</strong>12 SKU · 27SS 발매</span>
  <span><strong>예상 사입금액</strong>1.8억 (1차 발주)</span>
  <span><strong>BTA 분포</strong>B 30% / T 40% / A 30% (액세서리는 A 강함)</span>
</div>

<!-- 시장·문제: 의류만 보던 회원이 ACC 동반 구매 시 AOV +28% (자사 26FW 데이터). -->
<!-- 목표·비목표 · 성공 지표(ACC 단독 매출, AOV 변화, 카테고리 회전율). -->
<!-- 페르소나 — 의류 단골 회원 / 굿즈 콜렉터 / 선물용 구매자. -->
<!-- 마일스톤 — 카테고리 LOCK → 1차 12 SKU → 27FW 확장 24 SKU → 28SS 본격 라인업. -->
<!-- 미결 — OEM 신규 거래처 컨택, 백 단가 정책, 매장 행거 공간 분배. -->
```

**언제 쓰나**: 시즌 라인업 LOCK 전, 카테고리 확장을 임원 결재로 확정해야 할 때. 신규 OEM 컨택 시작 전 필수.

**바꾸는 부분**: 진입 카테고리, BTA 분포(액세서리는 Accent 비중 30% 이상 자연스러움), 신규 OEM 컨택 일정.

---

## 리듬 선택 가이드 요약

| 상황 | 권장 리듬 | 작성 주체 | 결재선 |
|---|---|---|---|
| 시즌 키 아이템 (헤드 아이템 1~3개) | **A — 신상품 기획서** | MD | 디자인실장 → MD실장 → 대표 |
| 협업 브랜드 발매 | **B — 콜라보 기획서** | 브랜드 디렉터 / 마케팅실장 | 대표 직결재 |
| 성수/한남/명동 팝업 | **C — 팝업 기획안** | 마케팅실장 / VMD | 대표 직결재 |
| 신규 카테고리 (액세서리/슈즈) | **D — 라인 확장 기획서** | MD + 디자인실장 공동 | 대표 직결재 |

선택한 리듬을 Step 2에서 한 문장으로 선언하세요. 예: "리듬 A 신상품 기획서를 선택했습니다."
