# K-패션 5차원 비평 보고서 리듬 (4종)

네 가지 리듬 중 **하나**를 Step 5에서 골라 `<div class="wrap">` 안에 붙여 넣으세요. 모든 리듬은 6개 섹션 골격(헤더 → 레이더+점수표 → 5차원 카드 → 액션 리스트 → (옵션) 품평회 평가표 → 푸터)을 동일하게 유지합니다.

OpenDesign 환경에서는 주요 섹션에 `data-od-id` 속성을 추가하면 인라인 코멘트가 가능합니다. 다른 환경에서는 일반 `id` 속성으로 대체하세요.

---

## 리듬 A — 룩북 1차 비평 (기본값 · 와키윌리 27SS 톤)

룩북 1차 컷 촬영 직후, 2차 진행 전 의사결정용. **시즌 시작 2~3개월 전** 사용.

```html
<header class="hd" data-od-id="hd">
  <div>
    <div class="hd-meta">
      <span>5차원 비평</span>
      <span>·</span>
      <span>[REPLACE 2026.05.14]</span>
      <span>·</span>
      <span>디자인실장 + OD critique skill</span>
    </div>
    <h1>[REPLACE WACKYWILLY]<br>[REPLACE 27SS 룩북 1차 컷]</h1>
  </div>
  <p class="hd-verdict">
    <strong>종합 [REPLACE 7.4] / 10.</strong>
    [REPLACE 브랜드 톤 정합성과 디테일은 강함 — 룩 01-12가 한 시즌 한 시선으로 촬영됨. 시즌 차별성은 의도적 보수, 콘텐츠 기능성은 사이즈 가이드 부재로 점수 깎임. 2차 컷 진행 전 Fix 3건 권장.]
  </p>
</header>

<section class="top" data-od-id="radar">
  <div class="radar-card">
    <div class="lbl">SCORE RADAR</div>
    <!-- references/checklist.md의 "레이더 좌표 계산" 섹션 참조 -->
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" aria-label="Score radar">
      <!-- 그리드(4겹), 5축, 점수 영역(polygon class="area"), 점수 닷, 축 라벨 -->
    </svg>
    <div class="overall">종합 · <span class="n">[REPLACE 7.4]</span> / 10 · 등급 <em>강함 (Strong)</em></div>
  </div>

  <div class="scores">
    <!-- 5행. 각 행: 차원명 + 한글/영문 + score-bar(width = 점수×10%) + 점수 + band 라벨 -->
    <div class="score-row">
      <div class="score-name">브랜드 톤 정합성<span class="en">Brand tone</span></div>
      <div class="score-bar"><span class="score-bar-fill" style="width:80%"></span></div>
      <div class="score-num">8<span class="denom">/10</span></div>
      <div class="score-band band-strong">강함</div>
    </div>
    <!-- 시각 위계, 디테일 실행, 콘텐츠 기능성, 시즌 차별성 4행 추가 -->
  </div>
</section>

<h2 class="section-title">차원별 근거 보고<span class="en">5 dimensions · [REPLACE 산출물]</span></h2>

<div class="dim-grid" data-od-id="dim-grid">
  <article class="dim">
    <div class="dim-head">
      <div class="dim-name">브랜드 톤 정합성<span class="en">Brand-tone consistency</span></div>
      <div class="dim-score">8<span class="denom">/10</span></div>
    </div>
    <p class="dim-evidence">
      [REPLACE 30-80단어 근거. 룩 번호·SKU 코드·페이지·클래스명 인용 필수.
      예: 12장의 룩 컷이 한 시즌 한 시선으로 일관됨 — 와키 톤이 모델 표정·자세에서 반복.
      미세 표류는 룩 09에서 — <em>"슬렁슬렁"</em> 같은 SNS 톤이 한 룩에만 등장.]
    </p>
    <div class="dim-tags">
      <div class="tag-row"><span class="tag tag-keep">Keep</span><span>[REPLACE 유지할 1건. 룩 번호·SKU 인용.]</span></div>
      <div class="tag-row"><span class="tag tag-fix">Fix</span><span>[REPLACE 수정할 1건. 한 줄.]</span></div>
    </div>
  </article>

  <!-- 4개 차원 카드 추가: 시각 위계 / 디테일 실행 / 콘텐츠 기능성 / 시즌 차별성 -->
  <!-- 시즌 차별성 카드에는 Quick win 1건 권장 -->
</div>

<h2 class="section-title">액션 리스트<span class="en">Keep · Fix · Quick wins</span></h2>

<div class="lists-grid" data-od-id="actions">
  <section class="list-card">
    <div class="list-head keep"><span>Keep</span><span class="ct">2차 컷에서 망가뜨리지 말 것</span></div>
    <ul>
      <li>[REPLACE 룩 01-12의 4:5 프레임 비율 + 정면 시선 일관 — 시즌 톤 자체.]</li>
      <li>[REPLACE SKU + 컬러웨이 매칭 — MD 발주 결정 가능.]</li>
      <li>[REPLACE 모노 라벨 자간 룰(<code>.16em</code>) — 변경 금지.]</li>
    </ul>
  </section>
  <section class="list-card">
    <div class="list-head fix"><span>Fix</span><span class="ct">P0 — 시각 비용 큰 항목</span></div>
    <ul>
      <li>[REPLACE 모든 룩에 핏 정보 한 줄 추가 — 영업·이커머스팀 역질문 차단.]</li>
      <li>[REPLACE 룩 09 캡션 톤 정리 — 명사구 일관.]</li>
      <li>[REPLACE 룩 03 사이즈 박스 위계 분리.]</li>
    </ul>
  </section>
  <section class="list-card">
    <div class="list-head qw"><span>Quick wins</span><span class="ct">5-15분, 시그널 큰 작업</span></div>
    <ul>
      <li>[REPLACE 키 룩 1장에 캐릭터 IP 인서트 — 시즌 식별 모먼트.]</li>
      <li>[REPLACE 컬러웨이 스와치 모바일 사이즈 +20% — 가독성.]</li>
      <li>[REPLACE 인쇄용 스타일시트 추가 — PDF 추출 톤 유지.]</li>
    </ul>
  </section>
</div>
```

**언제 쓰나**: 룩북 1차 컷 촬영 직후. 디자인실장이 2차 진행 결정.

**바꾸는 부분**: 브랜드명·시즌 코드·종합 점수·차원별 점수·근거 단락·액션 항목.

**디스플레이 폰트 권장**: `--serif`(Hahmlet) 기본. 와키 톤은 글자 무게를 약간 더 두껍게.

---

## 리듬 B — 상세페이지 검수 (무신사·29CM·자사몰 입점 직전)

상세페이지 1차 디자인 완료 시, 매장 입고/자사몰 등록 전 검수. **시즌 시작 1개월 전** 사용.

```html
<header class="hd" data-od-id="hd">
  <div>
    <div class="hd-meta">
      <span>상세페이지 검수</span>
      <span>·</span>
      <span>채널: [REPLACE 무신사 / 29CM / 자사몰]</span>
      <span>·</span>
      <span>[REPLACE 2026.06.10]</span>
    </div>
    <h1>[REPLACE MATIN KIM]<br>[REPLACE 27SS 린넨 셔츠 · W012 상세페이지]</h1>
  </div>
  <p class="hd-verdict">
    <strong>종합 [REPLACE 6.8] / 10.</strong>
    [REPLACE 무신사 패스 게이트 4건 중 3건 통과. 사이즈 가이드 표 정렬 어긋남(P0), 후기 영역 placeholder 남아 있음. 자사몰은 매거진 톤 강하나, 무신사 입점은 정보형으로 보강 필요.]
  </p>
</header>

<!-- top: 레이더 + 점수표 (리듬 A와 동일 구조) -->

<!-- 차원 카드 5개. 각 카드 근거에 채널별 패스/페일 명시:
     예) "무신사 톤 = 기능적, 29CM 톤 = 강함, 자사몰 톤 = 강함 — 한 채널 톤에 맞춘 컷이 다른 채널에서 미끄러짐" -->

<!-- 액션 리스트 3개 카드 + 추가: 채널별 패스 게이트 표 -->
<h2 class="section-title">채널별 패스 게이트<span class="en">Channel pass gates</span></h2>
<div class="review-grid" data-od-id="channels">
  <div class="review-cell">
    <div class="crit">무신사 · MUSINSA</div>
    <div class="verdict">정보형 톤 — 사이즈 가이드·핏 정보·후기 슬롯 정렬 필요.</div>
    <span class="badge revise">REVISE</span>
  </div>
  <div class="review-cell">
    <div class="crit">29CM · 29CM</div>
    <div class="verdict">매거진 톤 — 디자이너 의도·룩북 컷 비율 적합.</div>
    <span class="badge ok">OK</span>
  </div>
  <div class="review-cell">
    <div class="crit">자사몰 · OWN-MALL</div>
    <div class="verdict">스토리 톤 — 후크 카피·VIP 우선 슬롯 강.</div>
    <span class="badge ok">OK</span>
  </div>
  <div class="review-cell">
    <div class="crit">모바일 · MOBILE</div>
    <div class="verdict">컬러웨이 스와치 모바일 사이즈 미달 — 320px 폭에서 손가락 터치 영역 부족.</div>
    <span class="badge ng">NG</span>
  </div>
</div>
```

**언제 쓰나**: 매장 입고 1주 전, 자사몰 등록 직전, 무신사·29CM 입점 직전.

**바꾸는 부분**: SKU·채널 워드마크·패스 게이트 결과·NG 항목.

---

## 리듬 C — 시즌 합본 덱 사전 점검 (대표 발표 전)

시즌 합본 덱 작성 후, 대표 발표 전 사전 점검. **시즌 시작 5개월 전** 사용.

```html
<header class="hd" data-od-id="hd">
  <div>
    <div class="hd-meta">
      <span>시즌 합본 덱 사전 점검</span>
      <span>·</span>
      <span>[REPLACE 27SS 종합 기획안]</span>
      <span>·</span>
      <span>대표 발표 D-3</span>
    </div>
    <h1>[REPLACE WACKYWILLY]<br>[REPLACE 27SS Season Deck v1.2]</h1>
  </div>
  <p class="hd-verdict">
    <strong>종합 [REPLACE 8.0] / 10.</strong>
    [REPLACE 브랜드 톤·시각 위계·디테일 모두 강함. 시즌 차별성은 캐릭터 IP 인서트 한 페이지(P14)가 결정적 모먼트. 결정 사항 한 페이지(P22)에 의사결정 3건 정리되어 발표 흐름 명확.]
  </p>
</header>

<!-- top + 5 dimension cards + actions: 리듬 A와 동일 -->

<!-- 추가 섹션: "발표 시간 흐름" 요약 (옵션) -->
<h2 class="section-title">발표 흐름 점검<span class="en">Deck flow · 20min</span></h2>
<div class="review-grid" data-od-id="flow">
  <div class="review-cell">
    <div class="crit">P01-04 · 표지+시즌 컨셉</div>
    <div class="verdict">컨셉 보드와 일관. 한 thesis로 흐름.</div>
    <span class="badge ok">OK</span>
  </div>
  <div class="review-cell">
    <div class="crit">P05-12 · 키 아이템·라인업</div>
    <div class="verdict">SKU 38개 카탈로그 톤 — 페이지당 4 SKU 일관.</div>
    <span class="badge ok">OK</span>
  </div>
  <div class="review-cell">
    <div class="crit">P13-18 · IMC + 캠페인</div>
    <div class="verdict">캐릭터 IP 인서트(P14) — 시즌 차별 모먼트.</div>
    <span class="badge ok">OK</span>
  </div>
  <div class="review-cell">
    <div class="crit">P19-22 · 의사결정 사항</div>
    <div class="verdict">3건 정리되어 명확. 사인오프 게이트 확인 필요.</div>
    <span class="badge revise">REVISE</span>
  </div>
</div>
```

**언제 쓰나**: 시즌 합본 덱 작성 후 대표 발표 전 (D-3 ~ D-1).

**바꾸는 부분**: 페이지 범위·의사결정 항목·발표 시간 (20분 / 45분).

---

## 리듬 D — 품평회 4기준 평가표

품평회 (디자인실장 + MD 실장 + 대표) 시 활용. 4기준 평가표를 액션 리스트 *위에* 추가하는 변형.

K-패션 품평회 표준 4기준:

1. **목표 원가 / Cost target** — 사입가율·MOQ·LOT 산정 적합?
2. **크로스 코디 / Cross-coordination** — 룩 간 스타일링 매칭, 컬러웨이 공조?
3. **매장 디스플레이 / Store display** — 매장에서 행거·진열 가능한 구성?
4. **시즌 톤 / Seasonal tone** — 시즌 컨셉 보드와 정합?

```html
<header class="hd" data-od-id="hd">
  <div>
    <div class="hd-meta">
      <span>품평회 4기준 평가</span>
      <span>·</span>
      <span>[REPLACE 27SS WOMEN 1차 라인업]</span>
      <span>·</span>
      <span>[REPLACE 2026.04.18]</span>
    </div>
    <h1>[REPLACE WACKYWILLY]<br>[REPLACE 27SS Women 라인업 품평회]</h1>
  </div>
  <p class="hd-verdict">
    <strong>4기준 통과 3/4.</strong>
    [REPLACE 목표 원가·크로스 코디·시즌 톤 OK. 매장 디스플레이는 행거 7개 중 2개에서 컬러웨이 공조 부족 — 재구성 필요.]
  </p>
</header>

<!-- top + 5 dimension cards 그대로 -->

<h2 class="section-title">품평회 4기준 평가<span class="en">Review board · 4 criteria</span></h2>
<div class="review-grid" data-od-id="review">
  <div class="review-cell">
    <div class="crit">목표 원가 · COST</div>
    <div class="verdict">사입가율 28% 평균, MOQ 200 충족. <code>W001</code> 블레이저만 30% 초과.</div>
    <span class="badge revise">REVISE</span>
  </div>
  <div class="review-cell">
    <div class="crit">크로스 코디 · CROSS</div>
    <div class="verdict">UNI 7룩 × WOMEN 7룩 — 6 콤보 + 4 셋업.</div>
    <span class="badge ok">OK</span>
  </div>
  <div class="review-cell">
    <div class="crit">매장 디스플레이 · DISPLAY</div>
    <div class="verdict">행거 7개 중 2개 컬러 공조 부족 — 푸시/풀 재구성.</div>
    <span class="badge ng">NG</span>
  </div>
  <div class="review-cell">
    <div class="crit">시즌 톤 · SEASON</div>
    <div class="verdict">컨셉 보드 `Bloom Quietly` 톤과 정합. 부 컬러 sage 비중 적정.</div>
    <span class="badge ok">OK</span>
  </div>
</div>

<!-- 액션 리스트 3개 카드 (리듬 A와 동일) -->
```

**언제 쓰나**: 품평회 직전 (D-1 ~ 당일) 또는 직후 정리용.

**바꾸는 부분**: 4기준 verdict + 배지 (OK / REVISE / NG).

---

## 리듬 선택 가이드 요약

| 검토 대상 | 권장 리듬 | 시즌 사이클 위치 |
|---|---|---|
| 룩북 1차 컷 (촬영 직후) | **A — 룩북 1차 비평** | 시즌 -2 ~ -3개월 |
| 상세페이지 (입점 직전) | **B — 상세페이지 검수** | 시즌 -1개월 |
| 시즌 합본 덱 (대표 발표) | **C — 시즌 덱 사전 점검** | 시즌 -5개월 |
| 라인업 품평회 (디자인실 내부) | **D — 4기준 평가표** | 시즌 -4 ~ -5개월 |
| 콜라보 제안서 (외부 송부 직전) | **B** 변형 (`채널 = 콜라보 파트너 / 본사`) | 콜라보 발표 -2개월 |
| 자사몰 메인 (시즌 전환) | **B** 변형 (`채널 = 자사몰만`) | 시즌 전환 -1주 |

선택한 리듬을 작업 흐름 Step 5에서 한 문장으로 선언하세요. 예: "리듬 A 룩북 1차 비평을 선택했습니다."
