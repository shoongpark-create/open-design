# 키 아이템 시트 레이아웃 (2종)

두 가지 컴포지션 중 **하나**를 Step 2에서 선택하여 `<main id="key-item-sheet">` 안에 붙여 넣으세요.

양쪽 모두 worn 레퍼런스 콜라주를 **좌측**, 슬라이스 클러스터를 **우측**에 배치. 분할은 한국 의류 스튜디오 컨벤션 — **좌측 = wear, 우측 = build**.

사용 클래스(`.kis-grid`, `.worn-collage`, `.slice-cluster` 등)는 `assets/template.html`에 사전 정의. 새 클래스 이름 발명 금지.

OpenDesign 환경에서 인라인 코멘트 모드를 사용하려면 주요 섹션에 `data-od-id` 속성을 추가하세요. 다른 환경에서는 일반 `id` 속성으로 충분합니다.

---

## 컴포지션 A — 50/50 분할 (기본, 3 슬라이스 이하)

좌측 절반: 5~6 worn figure 콜라주. 우측 절반: 2~3 스택드 슬라이스 클러스터, 각각 라벨 + 3~4 타일.

```html
<header class="kis-header">
  <div class="kis-meta">
    <span class="season">[REPLACE 27SS]</span>
    <span class="family">[REPLACE Outer]</span>
    <span class="period">[REPLACE S1]</span>
    <span class="status">[REPLACE v1]</span>
  </div>
  <h1 class="item-name">[REPLACE 코튼 집업 점퍼]</h1>
  <p class="thesis">[REPLACE 한 단락 아이템 thesis: 왜 이 아이템, 무엇을 대체, 타겟 컬러웨이 수, 타겟 LOT. 예: "27SS S1 판기 신학기 매출 전환을 노리는 코튼 집업 점퍼. 26SS '브러시드 코튼 점퍼'의 시그니처 진화. 4 컬러웨이 × LOT 1,200 SKU."]</p>
</header>

<div class="kis-grid kis-grid--50-50">
  <section class="worn-collage" aria-label="Worn 레퍼런스">
    <h2 class="cluster-title">Worn reference</h2>
    <div class="worn-collage__grid">
      <figure class="worn-tile">
        <div class="image-frame" data-fallback="images/worn-01.png 이미지 생성 필요"><img src="images/worn-01.png" alt="Worn 01" /></div>
        <figcaption>[REPLACE 1줄 takeaway. 예: "relaxed shoulder, hem 힙본 위치"]</figcaption>
      </figure>
      <!-- 총 5~6 worn-tile 반복 -->
    </div>
  </section>

  <section class="slice-stack" aria-label="슬라이스">
    <article class="slice-cluster" data-slice="washing">
      <h3 class="cluster-title">Washing</h3>
      <div class="slice-cluster__grid">
        <figure class="slice-tile">
          <div class="image-frame" data-fallback="images/slice-washing-01.png 이미지 생성 필요"><img src="images/slice-washing-01.png" alt="Washing 01" /></div>
          <figcaption>[REPLACE 1줄 노트. 예: "wash-3 페이드, 콘트라스트 보존"]</figcaption>
        </figure>
        <!-- 3~4 slice-tile 반복 -->
      </div>
    </article>

    <article class="slice-cluster" data-slice="pattern">
      <h3 class="cluster-title">Pattern</h3>
      <div class="slice-cluster__grid"><!-- 3~4 slice-tile --></div>
    </article>

    <article class="slice-cluster" data-slice="artwork">
      <h3 class="cluster-title">Artwork</h3>
      <div class="slice-cluster__grid"><!-- 3~4 slice-tile --></div>
    </article>
  </section>
</div>
```

**언제 쓰나**: 2~3 슬라이스, 표준 시즌 키 아이템.

---

## 컴포지션 B — 40/60 분할 (4 슬라이스, 히어로 아이템)

선택 슬라이스 서브셋이 4개일 때 (예: 니트의 Color · Pattern · Detail · Fabric). 좌측이 더 타이트한 5 figure 컬럼, 우측이 2×2 슬라이스 그리드.

```html
<div class="kis-grid kis-grid--40-60">
  <section class="worn-collage worn-collage--column" aria-label="Worn 레퍼런스">
    <h2 class="cluster-title">Worn reference</h2>
    <div class="worn-collage__grid worn-collage__grid--column">
      <figure class="worn-tile"><!-- ... --></figure>
      <!-- 단일 컬럼 5 worn-tile -->
    </div>
  </section>

  <section class="slice-grid-2x2" aria-label="슬라이스">
    <article class="slice-cluster" data-slice="color">
      <h3 class="cluster-title">Color</h3>
      <div class="slice-cluster__grid"><!-- 3~4 slice-tile --></div>
    </article>
    <article class="slice-cluster" data-slice="pattern">
      <h3 class="cluster-title">Pattern</h3>
      <div class="slice-cluster__grid"></div>
    </article>
    <article class="slice-cluster" data-slice="detail">
      <h3 class="cluster-title">Detail</h3>
      <div class="slice-cluster__grid"></div>
    </article>
    <article class="slice-cluster" data-slice="fabric">
      <h3 class="cluster-title">Fabric</h3>
      <div class="slice-cluster__grid"></div>
    </article>
  </section>
</div>
```

**언제 쓰나**: 4 슬라이스 히어로 아이템 (니트 가디건, 시즌 메인 캐리오버 등).

---

## 공통 꼬리 블록

양쪽 컴포지션 모두 아래 블록 필요. 체크리스트 P0.

```html
<section class="merch-note" aria-label="Production / Merch 노트">
  <h2>Production / merch note</h2>
  <dl>
    <dt>Target colorways</dt>
    <dd>[REPLACE 4 — Light Grey Mel / Navy / Pop Pink / Retro Green]</dd>
    <dt>Target lot</dt>
    <dd>[REPLACE 1,200 / SKU]</dd>
    <dt>Signature detail to keep</dt>
    <dd>[REPLACE 체스트 자수 패치 + 컬러 웨빙 드로코드]</dd>
    <dt>Expected supplier</dt>
    <dd>[REPLACE 동대문 OEM 공장 A]</dd>
    <dt>Proto deadline</dt>
    <dd>[REPLACE YYYY-MM-DD]</dd>
  </dl>
</section>

<section class="open-decisions" aria-label="오픈 결정">
  <h2>Open / Next Decisions</h2>
  <ul>
    <li>[결정 사항 — 예: Pop Pink 컬러웨이 워싱 강도 확정] · owner: [디자인실장] · by: [YYYY-MM-DD]</li>
    <li>[자수 패치 사이즈·위치 LOCK] · owner: [그래픽팀장] · by: [YYYY-MM-DD]</li>
  </ul>
</section>
```

## 컴포지션 선택 가이드 요약

| 상황 | 권장 컴포지션 |
|---|---|
| 2~3 슬라이스 표준 키 아이템 | **A — 50/50 분할** |
| 4 슬라이스 히어로 아이템 (니트, 셋업 등) | **B — 40/60 분할** |
