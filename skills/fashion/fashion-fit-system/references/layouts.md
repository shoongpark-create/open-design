# 핏 시스템 레이아웃 (3종)

세 가지 리듬 중 **하나**를 Step 2에서 선택하여 `<main id="fit-system">` 안에 붙여 넣으세요.

OpenDesign 환경에서 인라인 코멘트 모드를 사용하려면 주요 섹션에 `data-od-id` 속성을 추가하세요. 다른 환경에서는 일반 `id` 속성으로 충분합니다.

---

## 리듬 A — 현재 vs. 향후 나란히 (1차 시점 기본)

```html
<header class="fs-header">
  <div class="fs-meta">
    <span class="brand">[REPLACE 와키윌리]</span>
    <span class="version">[REPLACE v2.0]</span>
    <span class="status">[REPLACE locked]</span>
    <span class="date">[REPLACE 2026-04-29]</span>
  </div>
  <h1 class="title">[REPLACE 핏 기준 현황 및 문제점 / 핏 체계 재정비]</h1>
  <p class="thesis">[REPLACE 한 단락: 해결되는 이슈와 변경 방향. 예: "UNI/WOMEN 라인 간 동일 실루엣이 3가지 다른 이름으로 운영되어 패턴팀·MD·공급사 간 혼선 발생. 통합 핏 사다리 LOCK으로 정리"]</p>
</header>

<div class="fs-grid fs-grid--two-col">
  <section class="fs-state fs-state--current" aria-label="현재 상태">
    <h2>현재</h2>
    <table class="fit-matrix fit-matrix--current">
      <thead>
        <tr><th rowspan="2">Line</th><th colspan="3">반팔</th><th colspan="3">롱슬리브</th><th colspan="3">스웻</th></tr>
        <tr><th>fit</th><th>fit</th><th>fit</th><th>fit</th><th>fit</th><th>fit</th><th>fit</th><th>fit</th><th>fit</th></tr>
      </thead>
      <tbody>
        <tr><th>UNI</th><td>[REPLACE 세미오버]</td><td>[REPLACE 오버]</td><td>—</td><td>[REPLACE 세미오버]</td><td>[REPLACE 오버]</td><td>—</td><td>[REPLACE 세미오버]</td><td>[REPLACE 오버]</td><td class="flag">[REPLACE 크롭오버]</td></tr>
        <tr><th>WOMEN</th><td>[REPLACE 크롭]</td><td>[REPLACE 세미크롭]</td><td>[REPLACE 레귤러]</td><td>[REPLACE 슬림]</td><td>[REPLACE 스탠다드]</td><td>[REPLACE 레귤러]</td><td class="flag">[REPLACE 크롭]</td><td>[REPLACE 레귤러]</td><td>[REPLACE 세미오버]</td></tr>
      </tbody>
    </table>
  </section>

  <section class="fs-state fs-state--future" aria-label="향후 상태">
    <h2>향후</h2>
    <table class="fit-matrix fit-matrix--future">
      <thead>
        <tr><th rowspan="2">Line</th><th colspan="3">반팔</th><th colspan="3">롱슬리브</th><th colspan="3">스웻</th></tr>
        <tr><th>슬림</th><th>레귤러</th><th>오버</th><th>슬림</th><th>레귤러</th><th>오버</th><th>슬림</th><th>레귤러</th><th>오버</th></tr>
      </thead>
      <tbody>
        <tr><th>UNI</th>
          <td><div class="image-frame" data-fallback="images/uni-short-slim.png 이미지 생성 필요"><img src="images/uni-short-slim.png" alt="UNI 반팔 슬림" /></div></td>
          <td><div class="image-frame" data-fallback="images/uni-short-regular.png 이미지 생성 필요"><img src="images/uni-short-regular.png" alt="UNI 반팔 레귤러" /></div></td>
          <td><div class="image-frame" data-fallback="images/uni-short-oversize.png 이미지 생성 필요"><img src="images/uni-short-oversize.png" alt="UNI 반팔 오버" /></div></td>
          <td><div class="image-frame" data-fallback="images/uni-long-slim.png 이미지 생성 필요"><img src="images/uni-long-slim.png" alt="UNI 롱 슬림" /></div></td>
          <td><div class="image-frame" data-fallback="images/uni-long-regular.png 이미지 생성 필요"><img src="images/uni-long-regular.png" alt="UNI 롱 레귤러" /></div></td>
          <td><div class="image-frame" data-fallback="images/uni-long-oversize.png 이미지 생성 필요"><img src="images/uni-long-oversize.png" alt="UNI 롱 오버" /></div></td>
          <td>—</td>
          <td><div class="image-frame" data-fallback="images/uni-sweat-regular.png 이미지 생성 필요"><img src="images/uni-sweat-regular.png" alt="UNI 스웻 레귤러" /></div></td>
          <td><div class="image-frame" data-fallback="images/uni-sweat-oversize.png 이미지 생성 필요"><img src="images/uni-sweat-oversize.png" alt="UNI 스웻 오버" /></div></td>
        </tr>
        <tr><th>WOMEN</th>
          <td><div class="image-frame" data-fallback="images/women-short-slim-baby.png 이미지 생성 필요"><img src="images/women-short-slim-baby.png" alt="WOMEN 반팔 슬림 베이비" /></div></td>
          <td><div class="image-frame" data-fallback="images/women-short-regular.png 이미지 생성 필요"><img src="images/women-short-regular.png" alt="WOMEN 반팔 레귤러" /></div></td>
          <td><div class="image-frame" data-fallback="images/women-short-semi-oversize.png 이미지 생성 필요"><img src="images/women-short-semi-oversize.png" alt="WOMEN 반팔 세미오버" /></div></td>
          <td><div class="image-frame" data-fallback="images/women-long-slim.png 이미지 생성 필요"><img src="images/women-long-slim.png" alt="WOMEN 롱 슬림" /></div></td>
          <td><div class="image-frame" data-fallback="images/women-long-regular.png 이미지 생성 필요"><img src="images/women-long-regular.png" alt="WOMEN 롱 레귤러" /></div></td>
          <td><div class="image-frame" data-fallback="images/women-long-semi-oversize.png 이미지 생성 필요"><img src="images/women-long-semi-oversize.png" alt="WOMEN 롱 세미오버" /></div></td>
          <td>—</td>
          <td><div class="image-frame" data-fallback="images/women-sweat-regular.png 이미지 생성 필요"><img src="images/women-sweat-regular.png" alt="WOMEN 스웻 레귤러" /></div></td>
          <td><div class="image-frame" data-fallback="images/women-sweat-semi-oversize.png 이미지 생성 필요"><img src="images/women-sweat-semi-oversize.png" alt="WOMEN 스웻 세미오버" /></div></td>
        </tr>
      </tbody>
    </table>
  </section>
</div>
```

**언제 쓰나**: 1차 시점 핏 시스템 작성·재정비. 변경 가독성이 핵심.

---

## 리듬 B — 향후 상태 매트릭스만

시스템 LOCK 후 개정용. 현재 상태 컬럼 드롭, 향후 매트릭스만 풀 폭으로 표시.

리듬 A의 `fs-state--future` 섹션만 사용.

**언제 쓰나**: 핏 시스템 v2.0 LOCK 이후 시즌별 부분 개정.

---

## 리듬 C — 카테고리별 시트

매우 와이드 커버리지(10+ 카테고리)용. 카테고리당 1 섹션, 핏 사다리를 가로 worn figure 스트립으로 표시.

```html
<section class="category-section" data-category="short-sleeve">
  <h2>반팔</h2>
  <div class="fit-strip">
    <figure class="fit-fig">
      <div class="image-frame"><img src="images/uni-short-slim.png" alt="" /></div>
      <figcaption>슬림 · UNI</figcaption>
    </figure>
    <!-- 라인 × 핏 사다리 figure 반복 -->
  </div>
</section>
```

**언제 쓰나**: 카테고리 수가 10개 이상, 또는 핏 칼리브레이션을 카테고리별로 깊이 분석 필요한 경우.

---

## 공통 꼬리 블록 (3종 모두 동일 사용)

```html
<section class="naming-rules" aria-label="Naming rules">
  <h2>Naming rules · 통합 기준</h2>
  <ul>
    <li><strong>Body length</strong> — 크롭 / 레귤러 / 롱 (사용 금지: 스탠다드)</li>
    <li><strong>Sleeve length</strong> — 반팔 / 롱슬리브 / 라글란</li>
    <li><strong>Banned synonym</strong> — "크롭핏" → "슬림 베이비핏"으로 통합</li>
    <li><strong>Supplier equivalent</strong> — 우먼 "슬림 베이비" = 공급사 "Tight Crop". 발주서에 두 명칭 병기</li>
    <li><strong>UNI / WOMEN 페어링</strong> — UNI 오버 = WOMEN 세미오버 (동일 실루엣 다른 명칭)</li>
    <li><strong>핏 단계 일관성</strong> — 슬림 → 레귤러 → 오버 순서 유지, 중간 단계 추가 시 `슬림 세미` 같은 명칭 사용</li>
    <!-- 5~10개 통합 규칙 -->
  </ul>
</section>

<section class="open-decisions" aria-label="Open decisions">
  <h2>Open / Next Decisions</h2>
  <ul>
    <li>[결정 사항 — 예: 데님 카테고리 핏 사다리 추가] · owner: [패턴실장] · by: [YYYY-MM-DD]</li>
    <li>[공급사 발주서 양식 신규 명명 반영] · owner: [생산실장] · by: [YYYY-MM-DD]</li>
  </ul>
</section>
```

## 리듬 선택 가이드 요약

| 상황 | 권장 리듬 |
|---|---|
| 1차 핏 시스템 작성·재정비, 변경 강조 | **A — 현재 vs. 향후** |
| LOCK 후 개정, 향후 상태만 | **B — 매트릭스만** |
| 카테고리 10개 이상 와이드 커버리지 | **C — 카테고리별 시트** |

선택 리듬을 작업 흐름 Step 2에서 한 문장으로 선언하세요.
