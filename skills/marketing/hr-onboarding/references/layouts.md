# K-패션 신입 온보딩 레이아웃 (4종)

네 가지 리듬 중 **하나**를 Step 2에서 선택하여 `<div class="wrap" id="content">` 안에 붙여 넣으세요. 모든 리듬은 6개 섹션 순서(커버 → 1일차 → 1주차 → 30/60/90 → 리소스 → 체크리스트)를 동일하게 유지합니다.

OpenDesign 환경에서는 주요 영역에 `data-od-id`, 그 외에는 `id` 속성으로 대체합니다.

---

## 리듬 A — 디자이너 신입 (시즌 컨셉 단계 입사 · 기본값)

6월 입사 → 28FW 컨셉 보드 참여 사이클. 디자인실장 + 시니어 디자이너 버디.

```html
<!-- 커버 배너 -->
<div class="cover" data-od-id="cover">
  <div>
    <div class="eyebrow">온보딩 플랜 · 30/60/90일</div>
    <h1>서연 디자이너, [REPLACE WACKYWILLY]에 오신 것을 환영합니다.</h1>
    <div class="meta">
      <div><strong>직무</strong>우먼 라인 디자이너</div>
      <div><strong>입사일</strong>2026년 6월 3일 (월)</div>
      <div><strong>디자인실장</strong>김도하</div>
      <div><strong>온보딩 버디</strong>박지연 디자이너</div>
    </div>
  </div>
  <div class="cover-art">서</div>
</div>

<!-- 1일차 시간표 -->
<section data-od-id="day-one">
  <h2>1일차 · 6월 3일 (월)</h2>
  <p class="section-sub">차분하게 시작하세요. 디렉터와의 킥오프, 셋업 완료, 라인업 시트 한 번 훑어보기 — 그 정도면 충분합니다.</p>
  <div class="day-one">
    <div class="schedule">
      <div class="schedule-row"><div class="time">09:00</div><div class="item"><strong>디자인실장 킥오프</strong><span>김도하 실장과 환영 + 1주차 가이드 + 라인업 우선순위. 8층 디자인룸.</span></div></div>
      <div class="schedule-row"><div class="time">10:00</div><div class="item"><strong>IT·계정 셋업 (HR 윤주리)</strong><span>노트북, 사번, 노션, 슬랙, 피그마 라이브러리, ERP, 무신사 파트너센터. 신분증 2종 지참.</span></div></div>
      <div class="schedule-row"><div class="time">11:30</div><div class="item"><strong>박지연 버디와 커피</strong><span>팀의 암묵 규칙, 누구에게 무엇을 물어보면 되는지, 사무실 옆 좋은 점심집.</span></div></div>
      <div class="schedule-row"><div class="time">12:30</div><div class="item"><strong>우먼 라인 팀 점심</strong><span>우먼 라인 전체와 합석. 안건 없음, 그냥 인사.</span></div></div>
      <div class="schedule-row"><div class="time">14:00</div><div class="item"><strong>라인업 시트 + 27SS 룩북 투어</strong><span>27SS WOMEN 라인업 시트, 1차 발주 컬러 락, 룩북 1차 컷. 박지연이 동행.</span></div></div>
      <div class="schedule-row"><div class="time">16:00</div><div class="item"><strong>"안녕하세요" 등록</strong><span>노션 디자인실 팀 페이지에 자기소개 한 줄 + 사진. 사내 첫 산출물.</span></div></div>
      <div class="schedule-row"><div class="time">17:00</div><div class="item"><strong>디렉터 EOD 체크인</strong><span>15분. 무엇이 혼란스럽고 무엇이 명확했는지. 1주차 동안 매일 반복 가능.</span></div></div>
    </div>
  </div>
</section>

<!-- 1주차 타임라인 (현장 활동 포함) -->
<section data-od-id="week-one">
  <h2>1주차 타임라인</h2>
  <p class="section-sub">하루 두 가지면 충분합니다. 공장 견학과 견본 컨퍼 참관이 1주차의 핵심.</p>
  <div class="week">
    <div class="day">
      <div class="day-head"><div class="day-name">월</div><div class="day-date">6/3</div></div>
      <div class="activity"><span class="dot"></span><div><strong>킥오프 + 셋업</strong><small>김도하 실장 · 09:00</small></div></div>
      <div class="activity"><span class="dot"></span><div><strong>노션 자기소개 등록</strong><small>박지연이 검수</small></div></div>
    </div>
    <div class="day">
      <div class="day-head"><div class="day-name">화</div><div class="day-date">6/4</div></div>
      <div class="activity"><span class="dot"></span><div><strong>피그마 디자인 시스템 투어</strong><small>이지호 시니어 · 10:00</small></div></div>
      <div class="activity"><span class="dot"></span><div><strong>견본 컨퍼(CON) 참관</strong><small>14:00 OEM 공장 A</small></div></div>
    </div>
    <div class="day">
      <div class="day-head"><div class="day-name">수</div><div class="day-date">6/5</div></div>
      <div class="activity"><span class="dot"></span><div><strong>디자인실 위클리</strong><small>09:30</small></div></div>
      <div class="activity"><span class="dot"></span><div><strong>대구 인견 공장 견학</strong><small>장하늘 PD 동행 · 13:00 출발</small></div></div>
    </div>
    <div class="day">
      <div class="day-head"><div class="day-name">목</div><div class="day-date">6/6</div></div>
      <div class="activity"><span class="dot"></span><div><strong>27SS 2차 품평회 참관</strong><small>14:00. 청취만 해도 충분.</small></div></div>
      <div class="activity"><span class="dot"></span><div><strong>대표 1:1</strong><small>강윤 대표 · 16:00</small></div></div>
    </div>
    <div class="day">
      <div class="day-head"><div class="day-name">금</div><div class="day-date">6/7</div></div>
      <div class="activity"><span class="dot"></span><div><strong>1주차 회고</strong><small>실장에게 15분 노트</small></div></div>
      <div class="activity"><span class="dot"></span><div><strong>매장 라운드 (선택)</strong><small>17:00 성수 플래그십</small></div></div>
    </div>
  </div>
</section>

<!-- 30/60/90 마일스톤 (시즌 산출물 단위) -->
<section data-od-id="milestones">
  <h2>30 · 60 · 90일 마일스톤</h2>
  <p class="section-sub">각 시점의 1:1에서 김도하 실장과 함께 점검. 코드 PR이 아니라 시즌 산출물 단위로 측정합니다.</p>
  <div class="milestones">
    <div class="milestone">
      <span class="badge">Day 30 · 7월</span>
      <h3>발 디디기</h3>
      <ul>
        <li>28FW 컨셉 보드에 첫 코멘트 제출 (참여 단계).</li>
        <li>주요 반복 회의를 파악하고 각 회의의 존재 이유 정리.</li>
        <li>유관 부서(MD실·생산실·마케팅실·이커머스팀) 각 1명씩 1:1 완료.</li>
      </ul>
    </div>
    <div class="milestone">
      <span class="badge">Day 60 · 8월</span>
      <h3>한 아이템 책임</h3>
      <ul>
        <li>28FW 키 아이템 1건 단독 디자인 — 컬러 락까지 책임.</li>
        <li>첫 디자인 리뷰에서 발표자로 등판.</li>
        <li>디자인실 프로세스 개선 한 가지 제안 — 노션에 게시.</li>
      </ul>
    </div>
    <div class="milestone">
      <span class="badge">Day 90 · 9월</span>
      <h3>팀을 앞으로</h3>
      <ul>
        <li>28FW 라인업 기획 참여 — 본인이 디자인한 아이템 라인업 등록 완료.</li>
        <li>주니어 인턴 1명에게 비공식 멘토 — 디자인 시스템 안내.</li>
        <li>전체 회의에서 본인 관점 한 번 발표.</li>
      </ul>
    </div>
  </div>
</section>

<!-- 북마크 + 준비 완료 신호 -->
<section data-od-id="bookmarks">
  <h2>북마크 — 열어두고 잊어버리세요</h2>
  <p class="section-sub">한 번 열어 두면 그다음에는 이 페이지를 다시 안 봐도 됩니다.</p>
  <div class="grid-2">
    <div class="panel">
      <h3>리소스</h3>
      <div class="resource"><div class="icon">B</div><div><strong>WACKYWILLY 브랜드 가이드라인</strong></div><div class="meta">notion/brand</div></div>
      <div class="resource"><div class="icon">#</div><div><strong>#디자인-우먼</strong></div><div class="meta">슬랙</div></div>
      <div class="resource"><div class="icon">F</div><div><strong>WACKY 디자인 시스템 v3.4</strong></div><div class="meta">피그마</div></div>
      <div class="resource"><div class="icon">M</div><div><strong>27SS 시즌 보드</strong></div><div class="meta">notion/27ss</div></div>
      <div class="resource"><div class="icon">$</div><div><strong>급여·복지</strong></div><div class="meta">사람인 ATS</div></div>
      <div class="resource"><div class="icon">@</div><div><strong>무신사 파트너센터</strong></div><div class="meta">partners.musinsa</div></div>
    </div>
    <div class="panel">
      <h3>준비 완료 신호</h3>
      <div class="check done"><div class="box">✓</div><div><strong>노트북, 사번, 사내 시스템 모두 작동.</strong><span>슬랙·피그마·노션·ERP·무신사 파트너센터·1Password 포함.</span></div></div>
      <div class="check done"><div class="box">✓</div><div><strong>우먼 라인 모든 동료와 인사.</strong><span>커피, 짧은 산책, 15분 줌 — 본인이 편한 방식으로.</span></div></div>
      <div class="check"><div class="box"></div><div><strong>첫 디자인 산출물 제출 완료.</strong><span>작은 컨셉 코멘트도 카운트. 박지연 버디가 도와줍니다.</span></div></div>
      <div class="check"><div class="box"></div><div><strong>주요 회의를 캘린더에서 찾을 수 있음.</strong><span>그리고 어떤 회의를 빠져도 되는지 안다.</span></div></div>
      <div class="check"><div class="box"></div><div><strong>"바보같은 질문"이 편안해짐.</strong><span>가장 중요한 항목. 진심입니다.</span></div></div>
    </div>
  </div>
</section>

<footer>
  <span>WACKYWILLY People Ops · 온보딩 템플릿 v3.1</span>
  <span>업데이트 2026-05</span>
</footer>
```

**언제 쓰나**: 디자이너 신입 입사일 1주 전 발행. 디자인실장 + 온보딩 버디가 함께 작성.

**바꾸는 부분**: 이름·직무·입사일·디렉터·버디, 30/60/90 마일스톤 시즌(입사 시점에 따라 27SS / 27FW / 28SS), 1주차 활동의 현장 활동 1개.

---

## 리듬 B — MD 신입 (시즌 본생산·발주 단계 입사)

1월 입사 → 27SS 본생산 단계 합류. MD실장 + 시니어 MD 버디. 30/60/90이 발주 사이클에 맞춤.

```html
<!-- 커버: 직무 = MD / 담당 라인 = UNI 또는 WOMEN -->
<div class="cover">
  <div>
    <div class="eyebrow">온보딩 플랜 · 30/60/90일 (MD)</div>
    <h1>준영 MD, [REPLACE WACKYWILLY] 시즌 사이클에 합류합니다.</h1>
    <div class="meta">
      <div><strong>직무</strong>UNI 라인 MD (어시스턴트)</div>
      <div><strong>입사일</strong>2027년 1월 8일 (월)</div>
      <div><strong>MD실장</strong>민혜</div>
      <div><strong>온보딩 버디</strong>장하늘 시니어 MD</div>
    </div>
  </div>
  <div class="cover-art">준</div>
</div>

<!-- 1일차 시간표: MD실장 킥오프 + ERP 셋업 + 사입 데이터 투어 + 1차 품평회 다음 주 안내 -->
<!-- 1주차 타임라인:
     월 — 킥오프 + ERP 셋업
     화 — 라인업 시트 + 사입가율 분석 시연
     수 — OEM 합천 공장 견학 (장하늘 동행)
     목 — 27SS 1차 품평회 참관 (큰 사건)
     금 — 1주차 회고 + 2주차 발주서 작성 보조 시작 -->

<!-- 30/60/90 — MD 사이클 -->
<div class="milestones">
  <div class="milestone">
    <span class="badge">Day 30 · 2월</span>
    <h3>발주 사이클 진입</h3>
    <ul>
      <li>27SS 1차 발주 시트 검토 보조 — 사입가율 시뮬레이션 1건.</li>
      <li>2차 품평회 회의록 작성 (로테이션).</li>
      <li>OEM 단톡방 운영 매너 학습.</li>
    </ul>
  </div>
  <div class="milestone">
    <span class="badge">Day 60 · 3월</span>
    <h3>견본 CON 참관 + 단가 협상 보조</h3>
    <ul>
      <li>견본 CON 3회 참관, 컬러 락 코멘트 1건.</li>
      <li>OEM 단가 협상 1건 보조 (시니어 동행).</li>
      <li>QR 후보 시뮬레이션 시작.</li>
    </ul>
  </div>
  <div class="milestone">
    <span class="badge">Day 90 · 4월</span>
    <h3>시즌 결산 보조</h3>
    <ul>
      <li>27SS S1 판기 첫 주 매출 추적, 정판율 리포트 작성.</li>
      <li>첫 QR 발주 결정 보조 (시니어 사인).</li>
      <li>27FW 라인업 기획 1차 회의 참여.</li>
    </ul>
  </div>
</div>
```

**언제 쓰나**: MD 신입 입사가 시즌 본생산 단계와 겹칠 때. 발주 사이클 학습이 30/60/90일의 핵심.

**바꾸는 부분**: 시즌 사이클 위치(본생산 / 입고 / 시즌 종료), 발주 보조 첫 산출물 일자.

---

## 리듬 C — 마케팅 / 콘텐츠 신입

룩북 촬영·인스타·인플루언서 시점 합류. 마케팅 실장 + 콘텐츠 디렉터 버디.

```html
<!-- 커버: 직무 = 콘텐츠 에디터 / 인스타 운영 / 룩북 디렉터 보조 -->
<div class="cover">
  <div>
    <div class="eyebrow">온보딩 플랜 · 30/60/90일 (마케팅)</div>
    <h1>지유 에디터, [REPLACE WACKYWILLY] 콘텐츠 룸에 오신 것을 환영합니다.</h1>
    <div class="meta">
      <div><strong>직무</strong>브랜드 콘텐츠 에디터</div>
      <div><strong>입사일</strong>2027년 3월 18일 (월)</div>
      <div><strong>마케팅 실장</strong>예진</div>
      <div><strong>온보딩 버디</strong>한설 콘텐츠 디렉터</div>
    </div>
  </div>
  <div class="cover-art">지</div>
</div>

<!-- 1주차 타임라인 — 룩북 촬영 현장 동행 + 인스타 운영 시연 + 인플루언서 시팅 -->

<!-- 30/60/90 -->
<!-- Day 30 · 27SS 인스타 운영 보조 → Day 60 · 27SS 캠페인 카피 1건 단독 → Day 90 · 27FW 룩북 촬영 기획 참여 -->
```

**언제 쓰나**: 시즌 시작 1~2개월 전 ~ 시즌 진행 중. 룩북 / 캠페인 사이클 합류 시점.

**바꾸는 부분**: 콘텐츠 카테고리(룩북 / 인스타 / 알림톡 / 인플루언서), 첫 카피 산출 시점.

---

## 리듬 D — 외주 디자이너 / 단기 프리랜서 온보딩

시즌 단발 협업(콜라보 그래픽 / 룩북 후보정 / 캐릭터 IP 일러스트). 1주 ~ 8주 단기 협업.

```html
<!-- 커버: 직무 = 외주 그래픽 디자이너 / 단기 협업 -->
<div class="cover">
  <div>
    <div class="eyebrow">외주 협업 가이드 · 4주 미션</div>
    <h1>박은우 외주 그래픽 디자이너, [REPLACE WACKYWILLY] × SANRIO 캡슐에 함께해주세요.</h1>
    <div class="meta">
      <div><strong>직무</strong>외주 그래픽 디자이너 (4주 협업)</div>
      <div><strong>협업 기간</strong>2027년 3월 1일 ~ 3월 28일</div>
      <div><strong>담당 디렉터</strong>박경 디자인 실장</div>
      <div><strong>커뮤니케이션</strong>장원 수석 디자이너</div>
    </div>
  </div>
  <div class="cover-art">박</div>
</div>

<!-- 1일차: 컨셉 브리핑 + 자료 송부 (브랜드 가이드라인·캐릭터 IP 사용 규칙·산리오 IP 라이선스 가이드) -->
<!-- 1주차: 1차 시안 제출 → 디자인 실장 피드백 → 2차 시안 -->
<!-- 마일스톤: 4주 미션 단위 (W1 시안 / W2 컨셉 LOCK / W3 본 작업 / W4 LOCK 송부) -->
```

**언제 쓰나**: 콜라보 / 룩북 / 캐릭터 IP 일러스트 등 시즌 단발 외주. 4주 ~ 8주 협업 표준 가이드.

**바꾸는 부분**: 협업 기간(주 단위), 미션 단계(시안 / LOCK / 최종), 송부 표준(피그마 / 어도비 / 일러스트레이터 파일).

---

## 리듬 선택 가이드 요약

| 상황 | 권장 리듬 | 작성 주체 | 청중 |
|---|---|---|---|
| 정규 디자이너 신입 | **A — 디자이너 신입** | 디자인실장 + 버디 | 신입 + HR + 버디 |
| 정규 MD 신입 | **B — MD 신입** | MD실장 + 시니어 MD | 신입 + HR + MD실 |
| 정규 마케팅·콘텐츠 신입 | **C — 마케팅 신입** | 마케팅 실장 + 콘텐츠 디렉터 | 신입 + HR + 마케팅실 |
| 외주 / 단기 협업 | **D — 외주 디자이너** | 디자인 실장 + 시니어 디자이너 | 외주 + 디자인실 |

선택한 리듬을 Step 2에서 한 문장으로 선언하세요. 예: "리듬 A 디자이너 신입 온보딩을 선택했습니다."
