# K-패션 와이어프레임 v0.1 변형 (4종)

네 가지 변형 중 **하나**를 Step 2에서 골라 `<div class="page">` 안에 붙여 넣으세요. 모든 변형은 8개 섹션 골격(head → tabs → canvas[section-label + URL + 사이드바 + 메인] → KPI + 차트 + 이벤트/next-step → 스티커 메모)을 유지합니다.

OpenDesign 환경에서는 주요 요소에 `data-od-id` 속성(`head`, `tabs`, `canvas`, `sidebar`, `kpis`, `chart`, `bars`, `sticky-1`, `sticky-2`)을 추가하세요. 다른 환경에서는 일반 `id`로 대체합니다.

---

## 변형 A — 상세페이지 와이어프레임 (기본값 · 와키윌리 27SS 톤)

**시즌 시작 2~3개월 전**. 무신사 / 29CM / 자사몰 상세페이지의 4탭 시안 (정보형 / 매거진형 / 룩북형 / 스토리형). 활성 = B 매거진형.

```html
<!-- 페이지 헤더 -->
<div class="head" data-od-id="head">
  <h1>
    <em>[REPLACE WACKYWILLY · 27SS]</em>
    <span class="pin"><span class="x"></span>WIREFRAME v0.1</span>
  </h1>
  <div class="sub">[REPLACE 그래픽 티셔츠 상세페이지 — 4탭 시안 + 무신사 입점 기준]</div>
  <div class="meta">
    <b>DATE</b> [REPLACE 2026-05-15] ·
    <b>DEVICE</b> DESKTOP 1440 ·
    <b>STAGE</b> v0.1 ·
    <b>FIDELITY</b> LOW
  </div>
</div>

<!-- 4탭 시안 (활성 = 02 B·매거진형) -->
<div class="tabs" data-od-id="tabs">
  <div class="tab"><span class="glyph"></span><span class="num">00</span>ALL</div>
  <div class="tab"><span class="glyph"></span><span class="num">01</span>A · 정보형 (무신사 기본)</div>
  <div class="tab active"><span class="glyph"></span><span class="num">02</span>B · 매거진형 (29CM 톤)</div>
  <div class="tab"><span class="glyph"></span><span class="num">03</span>C · 룩북형 (자사몰 톤)</div>
  <div class="tab"><span class="glyph"></span><span class="num">04</span>D · 스토리형 (디자이너 노트)</div>
</div>

<div class="canvas" data-od-id="canvas">
  <div class="section-label">
    <h2>[REPLACE B · 매거진형 — 29CM 톤]</h2>
    <span class="pill">EDITORIAL-FORWARD</span>
  </div>
  <p class="lede">[REPLACE 모델컷 + 디자이너 의도를 최상단에. 스펙·사이즈 가이드는 아래로 → 매거진 호흡으로 읽히게.]</p>

  <!-- 가짜 URL 바 -->
  <div class="browser" data-od-id="browser">
    <div class="dots"><span></span><span></span><span></span></div>
    <div class="url">[REPLACE musinsa.com / products / wackywilly-27ss-graphic-tee]</div>
    <div class="user">[REPLACE graphic.kim]</div>
  </div>

  <div class="layout">
    <!-- 사이드바: 상세페이지 메뉴, 활성 = 모델/룩 -->
    <aside class="nav" data-od-id="sidebar">
      <span class="brand">[REPLACE WACKYWILLY]</span>
      <ul>
        <li><span class="square"></span>상품 정보</li>
        <li class="active"><span class="square"></span>모델 / 룩</li>
        <li><span class="square"></span>소재 / 케어</li>
        <li><span class="square"></span>사이즈 가이드</li>
        <li><span class="square"></span>리뷰</li>
        <li><span class="square"></span>Q&A</li>
        <li><span class="square"></span>배송 / 반품</li>
      </ul>
    </aside>

    <!-- 메인 영역 -->
    <div data-od-id="main">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;gap:12px;flex-wrap:wrap;">
        <div>
          <div class="greeting">[REPLACE 27SS · KEY ITEM]</div>
          <div class="name">[REPLACE CHARACTER GRAPHIC TEE] <span style="font-size:18px;color:var(--pencil);">[REPLACE (UNI)]</span></div>
        </div>
        <div class="toggle-row">
          <span class="tag">정가</span>
          <span class="tag active">프리오더</span>
          <span class="tag">VIP가</span>
        </div>
      </div>

      <!-- KPI 4개: K-패션 등록 -->
      <div class="kpis" data-od-id="kpis">
        <div class="kpi tilt-1"><div class="label">발매가</div><div class="value">[REPLACE ₩69K]</div><div class="small">프리오더 ₩49K (~05/22)</div></div>
        <div class="kpi tilt-2"><div class="label">정상판매율 타겟</div><div class="value ink" style="color:#3b6e8e;">[REPLACE 75%]</div><div class="small">↑ +12% vs 26SS 베이스</div></div>
        <div class="kpi tilt-3"><div class="label">LOT 1차</div><div class="value">[REPLACE 800]</div><div class="small">컬러 × 사이즈 = [REPLACE 18 셀]</div></div>
        <div class="kpi tilt-4"><div class="label">발매일</div><div class="value ink" style="color:#3b6e8e;">D-12</div><div class="small">[REPLACE 05/27 KO 11:00]</div></div>
      </div>

      <div class="panels" data-od-id="panels">
        <!-- 손그림 차트: 정상판매율 추이 -->
        <div class="panel" data-od-id="chart">
          <h3><span class="dot"></span>CHART · 정상판매율 추이 (그래픽 티 카테고리)</h3>
          <svg class="scribble" viewBox="0 0 480 160" aria-hidden="true">
            <path d="M 14 142 L 460 142" stroke="#4d473d" stroke-width="1.6" fill="none"/>
            <path d="M 14 14 L 14 142" stroke="#4d473d" stroke-width="1.6" fill="none"/>
            <path d="M 18 110 C 80 96, 130 102, 180 92 S 280 60, 340 50 S 440 32, 460 22"
                  stroke="#d8482b" stroke-width="2.4" fill="none"
                  stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="80"  cy="98" r="4" fill="#d8482b"/>
            <circle cx="200" cy="86" r="4" fill="#d8482b"/>
            <circle cx="320" cy="56" r="4" fill="#d8482b"/>
            <circle cx="440" cy="28" r="4" fill="#d8482b"/>
          </svg>
        </div>
        <!-- 해치 막대 차트: 컬러웨이별 사전 관심도 -->
        <div class="panel" data-od-id="bars">
          <h3><span class="dot"></span>COLORWAY · 컬러별 사전 관심도</h3>
          <svg class="scribble" viewBox="0 0 320 160" aria-hidden="true">
            <defs>
              <pattern id="hatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="6" stroke="#2b2620" stroke-width="1.6"/>
              </pattern>
            </defs>
            <path d="M 14 142 L 306 142" stroke="#4d473d" stroke-width="1.6" fill="none"/>
            <rect x="30"  y="60" width="38" height="82"  fill="url(#hatch)" stroke="#2b2620" stroke-width="1.4"/>
            <rect x="86"  y="38" width="38" height="104" fill="url(#hatch)" stroke="#2b2620" stroke-width="1.4"/>
            <rect x="142" y="78" width="38" height="64"  fill="url(#hatch)" stroke="#2b2620" stroke-width="1.4"/>
            <rect x="198" y="22" width="38" height="120" fill="url(#hatch)" stroke="#2b2620" stroke-width="1.4"/>
            <rect x="254" y="50" width="38" height="92"  fill="url(#hatch)" stroke="#2b2620" stroke-width="1.4"/>
            <text x="14" y="158" font-family="IBM Plex Mono, monospace" font-size="11" fill="#4d473d">[REPLACE 아이보리 / 블랙 / 오트밀 / 라임 / 시그니처 오렌지]</text>
          </svg>
        </div>
      </div>

      <div class="events" data-od-id="events">
        <div class="label">📣 디자인 메모 (직근 3건)</div>
        <div class="lines"><span></span><span></span><span></span></div>
      </div>

      <div class="next-step" data-od-id="next-step">
        <div class="head">● NEXT STEP / 다음 단계</div>
        <ul>
          <li>[REPLACE v0.5 시안 리뷰 (디자인실 + MD실 + 마케팅실 합동, 05/20)]</li>
          <li>[REPLACE 활성 시안 1개 선택 후 v1.0 픽셀 디자인 착수 (web-prototype 스킬)]</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- 스티커 메모 (활성 시안 위에 흩뿌림) -->
  <div class="sticky sn1" data-od-id="sticky-1">
    <div class="tape"></div>
    [REPLACE 여백은 무신사 톤 +20% — 매거진 호흡]
  </div>
  <div class="sticky sn2" data-od-id="sticky-2">
    <div class="tape"></div>
    <b>[REPLACE p.1 / 5]</b><br/>
    [REPLACE B안 선호.<br/>MD 검토 후 LOCK.]
  </div>
</div>
```

**언제 쓰나**: 시즌 시작 2~3개월 전. 디자인실 그래픽팀이 1차 품평회 / 기획 회의에서 4탭 시안 공유.

**바꾸는 부분**: 브랜드명·시즌 코드, 4탭 시안 라벨 (정보형 / 매거진형 / 룩북형 / 스토리형), 활성 시안, 사이드바 메뉴, KPI 4개, 스티커 메모.

---

## 변형 B — 룩북 페이지 와이어프레임 (자사몰)

**시즌 시작 4~5개월 전**. 자사몰 룩북 페이지의 그리드 vs 스크롤 시네마 vs 매거진 vs 페이지별 룩 4안.

### 변경점

1. **head h1** = `[브랜드] · 27SS LOOKBOOK`
2. **head .sub** = `5 LOOKS · 38 SKUs · 룩북 페이지 4탭 시안`
3. **tabs** = `00 ALL` / `01 A · 그리드 (베이직)` / `02 B · 스크롤 시네마 (활성)` / `03 C · 매거진형` / `04 D · 페이지별 룩`
4. **사이드바 메뉴** = `히어로` / `LOOK 01-05` (각 룩 하위) / `BTS` / `COLOR STORY` / `CREDITS`
5. **KPI 4개** = `룩 수 5`, `SKU 수 38`, `컬러웨이 3`, `발매일 D-90`
6. **차트 자리** = `LOOK별 SKU 어소트` (5축 막대), `컬러웨이별 비중` (3색 도넛 자리표시)
7. **스티커 메모** = `스크롤 시네마 톤 — 마르디 27SS 참고`, `BTS 페이지 추가 검토`

**언제 쓰나**: 시즌 시작 4~5개월 전. 룩북 촬영 전 페이지 구조 시안.

**바꾸는 부분**: 5 LOOK 라벨, 스크롤 시네마 vs 그리드 결정, 룩별 SKU 수, BTS 페이지 포함 여부.

---

## 변형 C — 캠페인 페이지 와이어프레임 (콜라보)

**시즌 시작 1~2개월 전**. 콜라보 발매 캠페인 페이지의 3~4안.

### 변경점

1. **head h1** = `[브랜드] × [파트너] · 27SS COLLAB`
2. **head .sub** = `콜라보 발매 캠페인 페이지 — 3탭 시안 + D-day 카운트다운`
3. **tabs** = `00 ALL` / `01 A · 키비주얼 우선 (활성)` / `02 B · 라인업 우선` / `03 C · 매거진 우선`
4. **사이드바 메뉴** = `히어로 키비주얼` / `콜라보 스토리` / `컬렉션 3종` / `사전예약` / `D-day`
5. **KPI 4개** = `D-day 28`, `한정 SKU 12`, `사전예약 시작 D-7`, `한정 컬러웨이 3`
6. **차트 자리** = `D-day 진행률 게이지`, `채널별 사전예약 비중` (자사몰/무신사/29CM 막대)
7. **스티커 메모** = `D-day 카운트다운 위치 검토`, `콜라보 파트너 로고 사이즈 — A안 검토 필요`

**언제 쓰나**: 콜라보 발표 직후 ~ 발매 1~2개월 전. 캠페인 페이지 구조 시안.

**바꾸는 부분**: 콜라보 파트너명, D-day, 한정 SKU 수, 카운트다운 위치.

---

## 변형 D — 팝업 안내 페이지 와이어프레임

**팝업 오픈 2~3개월 전**. 팝업 안내 페이지의 정보형 / 카운트다운 / 매거진형 3안.

### 변경점

1. **head h1** = `[브랜드] · 27SS POP-UP · [위치]`
2. **head .sub** = `팝업 안내 페이지 — 3탭 시안 + 위치·운영 시간·라인업·예약·SNS`
3. **tabs** = `00 ALL` / `01 A · 정보형 (지도 우선)` / `02 B · 카운트다운 (활성)` / `03 C · 매거진형 (포토존 강조)`
4. **사이드바 메뉴** = `위치 / 지도` / `운영 시간` / `라인업` / `방문 예약` / `SNS 인증 가이드` / `픽업 / 배송`
5. **KPI 4개** = `오픈 D-14`, `운영 기간 15일`, `한정 SKU 8`, `방문 예약 슬롯 3`
6. **차트 자리** = `방문 시간대 예약 현황` (오전 / 오후 / 저녁 막대), `라인업 어소트` (UNI/WOMEN/잡화)
7. **스티커 메모** = `포토존 위치 = 매장 입구 vs 매장 안쪽`, `SNS 인증 가이드 = 별도 페이지로 분리?`

**언제 쓰나**: 팝업 오픈 2~3개월 전. 팝업 안내 페이지 구조 시안.

**바꾸는 부분**: 팝업 위치 (성수동·서촌·홍대·강남 등), 운영 기간, 방문 예약 슬롯 수.

---

## 변형 선택 가이드 요약

| 페이지 종류 | 권장 변형 | 시즌 사이클 위치 |
|---|---|---|
| 무신사/29CM/자사몰 상세페이지 | **A — 상세페이지 4탭** | 시즌 -2 ~ -3개월 |
| 자사몰 룩북 페이지 | **B — 룩북 4탭** | 시즌 -4 ~ -5개월 |
| 콜라보 캠페인 페이지 | **C — 캠페인 3탭** | 콜라보 -1 ~ -2개월 |
| 팝업 안내 페이지 | **D — 팝업 3탭** | 팝업 -1 ~ -3개월 |
| 신규 브랜드 런칭 페이지 | **A** 변형 (사이드바 = `소개 / 시즌 / 매장 / SNS`) | 런칭 -2개월 |
| 자사몰 메인 시즌 전환 | **B** 변형 (사이드바 = `히어로 / 베스트 / 신상 / 매거진`) | 시즌 전환 -1주 |

선택한 변형을 작업 흐름 Step 2에서 한 문장으로 선언하세요. 예: "변형 A 상세페이지 4탭을 선택했습니다."

## 디스플레이 폰트 선택 (마커톤)

와이어프레임 디스플레이 폰트는 톤에 따라 1개 선택:

- **`--serif-display`** (DM Serif Display / Hahmlet) — 기본값. 디자이너 노트 톤
- **`--display-play`** (Bagel Fat One) — 와키 / 콜라보 / 캐릭터 IP 변형 C
- **`--display-street`** (Black Han Sans) — 스트리트·무신사 톤 변형 A·B
- 시스템 폴백을 항상 포함 — 회의에서 빠르게 띄울 때 폰트 미로드 대비
