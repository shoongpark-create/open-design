# K-패션 품평회 노트 / 시즌 회의록 레이아웃 (4종)

네 가지 리듬 중 **하나**를 Step 2에서 선택하여 `<div class="page" id="content">` 안에 붙여 넣으세요. 모든 리듬은 5개 섹션 순서(헤더 → 아젠다 → 결정 → 액션 → 미결/다음)를 동일하게 유지합니다.

OpenDesign 환경에서는 주요 영역에 `data-od-id`, 그 외에는 `id` 속성으로 대체합니다.

---

## 리듬 A — 1차 품평회 회의록 (시즌 4개월 전 · 기본값)

시즌 시작 4개월 전, 1차 샘플 SKU 전체 OK/NG 결정 회의. 디자인실 + MD실 + 대표 참석.

```html
<!-- 헤더 -->
<header class="head" data-od-id="head">
  <div class="crumb">[REPLACE WACKYWILLY] / 27SS / 1차 품평회</div>
  <h1>27SS 1차 품평회 · UNI 라인 22 SKU</h1>
  <div class="meta-row">
    <span><strong>일시</strong>27년 1월 25일 (월) 14:00 – 17:00</span>
    <span><strong>장소</strong>본사 디자인실 (3F)</span>
    <span><strong>샘플</strong>22 SKU (UNI 14 / WOMEN 6 / ACC 2)</span>
    <span><strong>작성자</strong>민혜 (MD실)</span>
  </div>
  <div class="attendees">
    <span class="attendees-label">참석</span>
    <div class="av-row">
      <span class="av a-ceo" title="대표 강윤">대표</span>
      <span class="av a-ds" title="박경 디자인 실장">PK</span>
      <span class="av a-md" title="민혜 MD 실장">MH</span>
      <span class="av a-d1" title="장원 수석 디자이너 (그래픽)">JW</span>
      <span class="av a-d2" title="수영 수석 디자이너 (WOMEN)">SY</span>
    </div>
    <span class="away">결석 — 영업기획 지훈 (회의록 사후 송부)</span>
  </div>
</header>

<!-- 아젠다 -->
<section data-od-id="agenda">
  <h2>아젠다</h2>
  <div class="agenda">
    <div class="agenda-item done"><div class="check">✓</div><div class="body"><strong>오프닝 · 시즌 키 아이템 우선 검토 합의</strong><small>윌리 후디 + 와이드 데님 + 코튼 티 라인 먼저</small></div><div class="time">14:00 · 15분</div></div>
    <div class="agenda-item done"><div class="check">✓</div><div class="body"><strong>UNI 라인 14 SKU 1차 OK/NG 결정</strong><small>핏 시착 + 원가표 + 크로스 코디 확인</small></div><div class="time">14:15 · 75분</div></div>
    <div class="agenda-item done"><div class="check">✓</div><div class="body"><strong>WOMEN 라인 6 SKU OK/NG 결정</strong><small>플리츠 스커트 + 크롭 가디건 + 미니 원피스</small></div><div class="time">15:30 · 45분</div></div>
    <div class="agenda-item done"><div class="check">✓</div><div class="body"><strong>ACC 라인 2 SKU 결정</strong><small>윌리 메쉬 캡 + 윌리 키링</small></div><div class="time">16:15 · 20분</div></div>
    <div class="agenda-item done"><div class="check">✓</div><div class="body"><strong>2차 샘플 발주 SKU + 일정 합의</strong><small>재샘플 3 SKU + LOCK 일정 2월 5일</small></div><div class="time">16:35 · 20분</div></div>
    <div class="agenda-item"><div class="check"></div><div class="body"><strong>오픈 토픽 — 컬러웨이 추가 검토</strong><small>린넨 셔츠 5컬러 확장 안건은 2차 품평회로 이월</small></div><div class="time">16:55 · 5분</div></div>
  </div>
</section>

<!-- 결정 사항 -->
<section data-od-id="decisions">
  <h2>결정 사항</h2>
  <div class="decisions">
    <h3>SKU별 1차 품평 결과 (22 SKU 기준)</h3>
    <ul>
      <li><strong>OK 결정 · 18 SKU</strong> — 핏 적정 + 목표 원가 준수 + 시즌 컬러 적합. 2차 샘플 발주 진행. 컬러웨이는 디자인실(SY) 1주 내 확정 후 2차 품평회에서 LOCK.</li>
      <li><strong>WW-27SS-SET-003 (시어서커 셋업) · 수정 후 재샘플</strong> — 셔츠 사이드 다트 위치 1cm 위 조정 + 쇼츠 인심 2cm 늘림. 재샘플 일정 2월 1일.</li>
      <li><strong>WW-27SS-OPS-005 (셔링 미니 원피스) · 수정 후 재샘플</strong> — 셔링 디테일 과도, 단정한 무드로 1단계 축소. 컬러 발색 미흡 (라이트 핑크 → 페일핑크로 변경).</li>
      <li><strong>WW-27SS-TOP-018 (윌리 캐릭터 티) · 수정 후 재샘플</strong> — 캐릭터 그래픽 크기 후면도 추가, 단가 8% 절감 OEM 협의(현 단가 목표 초과).</li>
      <li><strong>WW-27SS-BTM-019 (플리츠 미디 스커트) · NG 결정</strong> — 시즌 코디 매칭 부적합 + 목표 원가 12% 초과. 27FW 시즌 이월 검토.</li>
      <li><strong>LOCK 일정</strong> — 2월 5일 (목) 2차 품평회 직후 라인업 LOCK. 발주서 발행 2월 7일. OEM 본생산 시작 2월 12일.</li>
    </ul>
  </div>
</section>

<!-- 액션 아이템 (상태 칩 4종 모두 등장) -->
<section data-od-id="actions">
  <h2>액션 아이템</h2>
  <table>
    <thead><tr><th>액션</th><th>오너</th><th>기한</th><th>상태</th></tr></thead>
    <tbody>
      <tr><td>2차 샘플 발주서 작성 (3 SKU · OEM 합천)</td><td class="owner"><span class="av a-md">MH</span>민혜 MD</td><td>27/01/27 (수)</td><td><span class="pill pill-progress">진행 중</span></td></tr>
      <tr><td>윌리 티 그래픽 단가 8% 절감 OEM 협의</td><td class="owner"><span class="av a-d1">JW</span>장원</td><td>27/01/29 (금)</td><td><span class="pill pill-todo">미진행</span></td></tr>
      <tr><td>OK SKU 18장 컬러웨이 확정 + 컬러 카드 송부</td><td class="owner"><span class="av a-d2">SY</span>수영</td><td>27/02/01 (월)</td><td><span class="pill pill-todo">미진행</span></td></tr>
      <tr><td>플리츠 스커트 27FW 시즌 재기획 (NG SKU 이월)</td><td class="owner"><span class="av a-d2">SY</span>수영</td><td>27/11월</td><td><span class="pill pill-todo">미진행</span></td></tr>
      <tr><td>재샘플 입고 검수 (3 SKU · 2/1~2/3)</td><td class="owner"><span class="av a-ds">PK</span>박경 디자인 실장</td><td>27/02/04 (목)</td><td><span class="pill pill-blocked">블락 · OEM 일정 확인</span></td></tr>
      <tr><td>1차 품평회 회의록 슬랙/노션 공유</td><td class="owner"><span class="av a-md">MH</span>민혜 MD</td><td>27/01/26 (화) 오전</td><td><span class="pill pill-done">완료</span></td></tr>
    </tbody>
  </table>
</section>

<!-- 미결 + 다음 미팅 -->
<section data-od-id="open-next">
  <h2>미결 이슈 &amp; 다음 미팅</h2>
  <div class="grid">
    <div class="panel">
      <h3>미결 이슈</h3>
      <p>린넨 셔츠 (WW-27SS-TOP-009) 컬러웨이 — 현재 3컬러 → 5컬러 확장 검토. 사입가율 영향 + S2 판기 적합성 확인 후 2차 품평회에서 결정.</p>
      <p style="margin-top: 8px;">캐리오버 SKU 4장 (26FW 베스트) — 27SS 컬러 추가만 진행 vs 핏 일부 수정 진행 결정 필요.</p>
    </div>
    <div class="panel">
      <h3>다음 미팅 · 2차 품평회</h3>
      <div class="next-meeting"><strong>일시</strong>27년 2월 5일 (목) 14:00 – 18:00</div>
      <div class="next-meeting"><strong>장소</strong>본사 디자인실 (3F)</div>
      <div class="next-meeting"><strong>아젠다</strong>재샘플 OK/NG · 컬러웨이 LOCK · 발주 수량 합의 · 라인업 LOCK</div>
      <div class="next-meeting"><strong>추가 참석</strong>지훈 (영업기획) · 생산실장</div>
      <div class="next-meeting"><strong>작성자</strong>장원 디자이너 (로테이션)</div>
    </div>
  </div>
</section>

<footer>
  <span>WACKYWILLY 디자인실 · 회의록 v1</span>
  <span>저장 위치 · 노션 / 27SS 시즌 폴더 · 27.01.26</span>
</footer>
```

**언제 쓰나**: 시즌 시작 4개월 전 1차 샘플 입고 직후. 한국 패션기업 시즌 사이클의 핵심 결정 포인트.

**바꾸는 부분**: SKU 코드(`WW-27SS-XXX-NNN`), 재샘플 일정, NG 결정 사유(원가/핏/컬러/코디 적합성).

---

## 리듬 B — 2차 품평회 + 발주 회의 (시즌 3개월 전 · LOCK)

재샘플 OK/NG + 컬러웨이 LOCK + 발주 수량 확정. MD실장 + 디자인실장 + 생산실장 + 대표 참석.

```html
<header class="head" data-od-id="head">
  <div class="crumb">[REPLACE WACKYWILLY] / 27SS / 2차 품평회 + 발주 회의</div>
  <h1>27SS 2차 품평회 — 라인업 LOCK + 발주 수량 합의</h1>
  <div class="meta-row">
    <span><strong>일시</strong>27년 2월 5일 (목) 14:00 – 18:00</span>
    <span><strong>장소</strong>본사 디자인실 + 회의실 A (생산실 합석)</span>
    <span><strong>SKU</strong>22 SKU 최종 결정 + 발주 수량 + LOT</span>
    <span><strong>작성자</strong>장원 디자이너 (로테이션)</span>
  </div>
  <div class="attendees">
    <span class="attendees-label">참석</span>
    <div class="av-row">
      <span class="av a-ceo">대표</span>
      <span class="av a-ds">PK</span>
      <span class="av a-md">MH</span>
      <span class="av a-d1">JW</span>
      <span class="av a-d2">SY</span>
      <span class="av a-mfg">생산</span>
    </div>
    <span class="away">결석 — 없음</span>
  </div>
</header>

<!-- 아젠다 -->
<!-- 1. 재샘플 3 SKU OK/NG 최종 결정 -->
<!-- 2. 컬러웨이 LOCK (18 OK SKU 전체) -->
<!-- 3. 발주 수량·LOT·OEM 배정 합의 -->
<!-- 4. 발주서 발행 일정 (2/7) + 본생산 시작 (2/12) 확정 -->
<!-- 5. 시즌 IMC 캘린더 1차 공유 -->

<!-- 결정 사항 -->
<div class="decisions">
  <h3>라인업 LOCK 결정 (22 SKU)</h3>
  <ul>
    <li><strong>최종 라인업 21 SKU 확정</strong> — 1차 OK 18 + 재샘플 OK 3. WW-27SS-BTM-019 (NG)는 27FW 이월.</li>
    <li><strong>발주 수량 총합 24,500 PCS / 사입금액 7.2억</strong> — UNI 14,200 PCS / WOMEN 8,400 PCS / ACC 1,900 PCS.</li>
    <li><strong>컬러웨이 LOCK</strong> — 윌리 후디 4컬러 (옐로/네이비/차콜/베이지), 페일핑크는 27FW로 이월.</li>
    <li><strong>OEM 배정</strong> — 합천(WOMEN 외피·셋업), 진주(UNI 니트·후디), 안양(ACC).</li>
    <li><strong>입고 마감</strong> — 4월 28일 (S1 판기 시작 1주 전).</li>
  </ul>
</div>

<!-- 액션 아이템 + 미결/다음 미팅은 리듬 A 구조 그대로 -->
```

**언제 쓰나**: 1차 품평회 + 재샘플 입고 후 1~2주. 라인업 LOCK 직후 발주서 발행 시작.

**바꾸는 부분**: 최종 라인업 수량, OEM 배정, 컬러웨이 LOCK 결정.

---

## 리듬 C — 콜라보 미팅 (협업 브랜드 + 마케팅실)

콜라보 컨셉 합의, 라인업·발매 일정, 채널, 마케팅. 대표 + 협업 브랜드 측 참석.

```html
<header class="head" data-od-id="head">
  <div class="crumb">[REPLACE WACKYWILLY] / 27SS / SANRIO 콜라보 미팅</div>
  <h1>WACKYWILLY × SANRIO 콜라보 1차 합의 미팅</h1>
  <div class="meta-row">
    <span><strong>일시</strong>27년 2월 14일 (수) 10:00 – 12:30</span>
    <span><strong>장소</strong>본사 회의실 A + 산리오 코리아 측 화상</span>
    <span><strong>의제</strong>컨셉 / 라인업 / 발매 일정 / 매출 목표</span>
    <span><strong>작성자</strong>예진 마케팅 실장</span>
  </div>
  <div class="attendees">
    <span class="attendees-label">참석</span>
    <div class="av-row">
      <span class="av a-ceo">대표</span>
      <span class="av a-ds">PK</span>
      <span class="av a-mk">예진</span>
      <span class="av a-md">MH</span>
      <span class="av" style="background: linear-gradient(135deg, #4d4d4d, #909090);">SR</span>
    </div>
  </div>
</header>

<!-- 아젠다 -->
<!-- 1. 콜라보 컨셉 합의 — 산리오 캐릭터 6종 × 윌리 그래픽 톤 -->
<!-- 2. 라인업 합의 — 후디 / 크로스백 / 키링 3 SKU -->
<!-- 3. 발매 일정 — 3/14 사전예약, 4/11 정식 발매 -->
<!-- 4. 채널 배분 — 자사몰 + 무신사 단독 + 성수 팝업 3일 -->
<!-- 5. 라이선스 비용·매출 목표 합의 -->

<!-- 결정 사항 -->
<div class="decisions">
  <h3>1차 합의 결정</h3>
  <ul>
    <li><strong>콜라보 라인업 확정 · 3 SKU</strong> — 후디(₩148,000), 크로스백(₩98,000), 키링(₩28,000).</li>
    <li><strong>발매 일정</strong> — 3/14 사전예약, 4/11 정식 발매. 자사몰 + 무신사 단독 + 성수 팝업 (4/11~4/13).</li>
    <li><strong>라이선스 비용</strong> — 매출의 8% (사전 합의안 7% → 8% 조정, 산리오 측 요구).</li>
    <li><strong>매출 목표</strong> — 15일 내 sell-out, 콜라보 단독 매출 8억 + 본 라인 동반 상승 효과.</li>
    <li><strong>MOU 서명</strong> — 2/20 본사. 디자인 LOCK 일자 2/28.</li>
  </ul>
</div>
```

**언제 쓰나**: 협업 브랜드 컨택 직후 ~ 발매 3개월 전. 대표 직결재 + 라이선스 협상 진입 시.

**바꾸는 부분**: 협업 브랜드명, 라이선스 비용, 라인업 SKU, 발매 일정.

---

## 리듬 D — 시즌 킥오프 + IMC 캘린더 회의 (시즌 6개월 전)

시즌 6개월 전, 디자인실 + MD실 + 마케팅실 + 영업기획팀 + 대표 합석. 시즌 큰 그림 + 캠페인 일정 합의.

```html
<header class="head" data-od-id="head">
  <div class="crumb">[REPLACE WACKYWILLY] / 27SS / 시즌 킥오프 + IMC 캘린더</div>
  <h1>27SS 시즌 킥오프 미팅</h1>
  <div class="meta-row">
    <span><strong>일시</strong>26년 11월 8일 (금) 14:00 – 18:00</span>
    <span><strong>장소</strong>본사 회의실 + 디자인실 (룩북 톤 시연)</span>
    <span><strong>의제</strong>27SS 시즌 컨셉 + 라인업 후보 + IMC 캘린더 1차</span>
    <span><strong>작성자</strong>민혜 MD</span>
  </div>
  <!-- 참석자 — 전 부서 실장 + 대표 -->
</header>

<!-- 아젠다 -->
<!-- 1. 27SS 시즌 컨셉 발표 (디자인실장) -->
<!-- 2. 시즌 매출 목표 + 카테고리별 BTA 분포 (MD 실장) -->
<!-- 3. 시즌 키 아이템 후보 3개 합의 -->
<!-- 4. 캠페인 일정 (룩북 촬영 / 인스타 / 팝업 / 인플루언서) -->
<!-- 5. 영업기획 채널 배분 가설 -->

<!-- 결정 사항 -->
<div class="decisions">
  <h3>27SS 시즌 합의</h3>
  <ul>
    <li><strong>시즌 컨셉 LOCK</strong> — "WACKY GARDEN" 도시 정원에서 노는 윌리. 컬러 스토리 5색 (옐로·올리브·페일핑크·차콜·라이트베이지).</li>
    <li><strong>시즌 매출 목표</strong> — 25.0억 (전년 +28%). S1 12억 / S2 9억 / S3 4억.</li>
    <li><strong>시즌 키 아이템 3개</strong> — 윌리 그래픽 후디 / 와이드 데님 / 와키 미니 토트.</li>
    <li><strong>캠페인 일정</strong> — 룩북 촬영 1월 4주차, 인스타 사전 티저 3/14 시작, 성수 팝업 5/15~6/04.</li>
    <li><strong>다음 결정 포인트</strong> — 1차 품평회 27/1/25에서 SKU OK/NG 1차 결정.</li>
  </ul>
</div>
```

**언제 쓰나**: 시즌 시작 6개월 전 1회. 전 부서 실장 + 대표 합석으로 시즌 큰 그림 합의.

**바꾸는 부분**: 시즌 컨셉, 시즌 매출 목표, 키 아이템 후보 3개, 캠페인 일정.

---

## 리듬 선택 가이드 요약

| 상황 | 권장 리듬 | 작성자 | 결정 권한 |
|---|---|---|---|
| 1차 샘플 OK/NG 결정 | **A — 1차 품평회** | MD | 디자인실장 + MD실장 |
| 라인업 LOCK + 발주 수량 | **B — 2차 품평회 + 발주 회의** | 디자이너 (로테이션) | 대표 |
| 협업 브랜드 컨택 | **C — 콜라보 미팅** | 마케팅 실장 | 대표 직결재 |
| 시즌 큰 그림 합의 | **D — 시즌 킥오프** | MD | 대표 |

선택한 리듬을 Step 2에서 한 문장으로 선언하세요. 예: "리듬 A 1차 품평회 회의록을 선택했습니다."
