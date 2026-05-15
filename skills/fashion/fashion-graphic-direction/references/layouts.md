# 그래픽 디렉션 레이아웃 (2종)

두 가지 리듬 중 **하나**를 Step 2에서 선택하여 `<main id="graphic-direction">` 안에 붙여 넣으세요. 항상 꼬리 블록으로 마무리.

OpenDesign 환경에서 인라인 코멘트 모드를 사용하려면 주요 섹션에 `data-od-id` 속성을 추가하세요. 다른 환경에서는 일반 `id` 속성으로 충분합니다.

---

## 리듬 A — 테마 스택 (기본, 3~6 테마)

테마가 세로 스택, 각 테마 카드가 풀 폭 + 헤더 스트립, thesis, 표면 태그, 4~6 타일 클러스터.

```html
<header class="gd-header">
  <div class="gd-meta">
    <span class="season">[REPLACE 27SS]</span>
    <span class="brand">[REPLACE 와키윌리]</span>
    <span class="status">[REPLACE v1]</span>
    <span class="date">[REPLACE 2026-04-29]</span>
  </div>
  <h1 class="thesis">[REPLACE 1문장 디렉션 thesis. 예: "27SS 그래픽은 빈티지 카툰 + 캔디 카모로 위트와 영캐주얼 무드 양립"]</h1>
  <p class="thesis-body">[REPLACE 한 단락 — 이 그래픽 자세가 컨셉 보드 영역과 어떻게 연결되는지]</p>
</header>

<section class="theme-stack" aria-label="테마">
  <article class="theme-card" data-theme-index="01">
    <header class="theme-header">
      <h2 class="theme-name">[REPLACE 빈티지 카툰 그래픽 티셔츠]</h2>
      <p class="theme-thesis">[REPLACE 1줄 thesis. 예: "90년대 카툰 그래픽 + 페이드 워시드 코튼 = 위트 + 노스탤지어"]</p>
      <ul class="surface-tags" aria-label="적용 표면">
        <li class="tag">tee print</li>
        <li class="tag">sweat print</li>
        <li class="tag">patch</li>
      </ul>
      <div class="theme-meta">
        <span class="carry">[carryover: new]</span>
        <span class="studio">[studio: TBD]</span>
      </div>
    </header>
    <div class="theme-cluster">
      <figure class="theme-tile">
        <div class="image-frame" data-fallback="images/theme-01-cartoon-01.png 이미지 생성 필요"><img src="images/theme-01-cartoon-01.png" alt="cartoon 01" /></div>
        <figcaption>[REPLACE 1줄 노트]</figcaption>
      </figure>
      <!-- 4~6 theme-tile 반복 -->
    </div>
  </article>

  <!-- 테마당 .theme-card 반복 -->
</section>
```

**언제 쓰나**: 3~6 테마, 디테일 풍부, 시즌 디렉션 1차 발표.

---

## 리듬 B — 테마 그리드 (5~8 테마, 더 밀집)

테마 카드 2 컬럼 그리드, 각 카드 더 컴팩트, 클러스터 4 타일로 축소. 디렉션이 5+ 테마 보유 + 스택이 페이지 너무 길어질 때.

```html
<section class="theme-grid" aria-label="테마">
  <article class="theme-card theme-card--compact" data-theme-index="01">
    <header class="theme-header">
      <h2 class="theme-name">[REPLACE 테마 이름]</h2>
      <p class="theme-thesis">[REPLACE 1줄 thesis]</p>
      <ul class="surface-tags"><!-- 태그 칩 --></ul>
    </header>
    <div class="theme-cluster theme-cluster--quad"><!-- 4 theme-tile --></div>
  </article>
  <!-- 5~8 카드 반복 -->
</section>
```

**언제 쓰나**: 5~8 테마, 정보 밀도 우선, A4 인쇄 출력.

---

## Symbol & Wordmark 블록 (선택)

Step 4 트리거 시 테마 블록 다음에 삽입. 시즌이 신규 심볼 / 워드마크 트리트먼트 없으면 전체 생략.

```html
<section class="symbol-wordmark" aria-label="Symbol & Wordmark">
  <h2>Symbol & Wordmark — [REPLACE 트리트먼트, 예: Jelly]</h2>
  <p>[REPLACE 1줄 락업 thesis. 예: "27SS는 브랜드 심볼·워드마크에 젤리 트리트먼트 적용. Y2K가 아닌 90s 따스함 기반 젤리"]</p>

  <div class="sw-grid">
    <div class="sw-cluster">
      <h3>Symbol study</h3>
      <div class="sw-tiles">
        <figure><div class="image-frame" data-fallback="images/symbol-01.png 이미지 생성 필요"><img src="images/symbol-01.png" alt="symbol 01" /></div></figure>
        <!-- 3~6 타일 -->
      </div>
    </div>
    <div class="sw-cluster">
      <h3>Wordmark study</h3>
      <div class="sw-tiles">
        <figure><div class="image-frame" data-fallback="images/wordmark-01.png 이미지 생성 필요"><img src="images/wordmark-01.png" alt="wordmark 01" /></div></figure>
      </div>
    </div>
    <div class="sw-cluster">
      <h3>Lockup variants</h3>
      <div class="sw-tiles">
        <figure><div class="image-frame" data-fallback="images/lockup-01.png 이미지 생성 필요"><img src="images/lockup-01.png" alt="lockup 01" /></div></figure>
      </div>
    </div>
  </div>
</section>
```

---

## 공통 꼬리 블록

```html
<section class="surface-matrix" aria-label="적용 표면 매트릭스">
  <h2>Theme × Surface matrix</h2>
  <table>
    <thead><tr><th>Theme</th><th>Tee</th><th>Sweat</th><th>Embroidery</th><th>All-over</th><th>Sticker</th><th>Point label</th><th>Woven tag</th><th>Hardware</th></tr></thead>
    <tbody>
      <tr><td>[테마 01 — 빈티지 카툰]</td><td>●</td><td>●</td><td></td><td></td><td>●</td><td></td><td></td><td></td></tr>
      <!-- 테마당 1행. ● 또는 빈칸으로 마킹 -->
    </tbody>
  </table>
</section>

<section class="anti-direction" aria-label="Anti-direction">
  <h2>Anti-direction</h2>
  <ul>
    <li>[Y2K chrome glitter 금지]</li>
    <li>[AI-슬롭 sparkle 배경 금지]</li>
    <li>[제너릭 이모지 아이콘 금지]</li>
    <li>[브랜드 영구 로고 변형 금지 (시즌 트리트먼트 외)]</li>
    <li>[로고-앞면 머치 티 금지]</li>
    <!-- 3~7 bullet -->
  </ul>
</section>

<section class="open-decisions" aria-label="오픈 결정">
  <h2>Open / Next Decisions</h2>
  <ul>
    <li>[결정 사항 — 예: 빈티지 카툰 IP 라이선스 확보] · owner: [그래픽 팀장] · by: [YYYY-MM-DD]</li>
    <li>[자카드 공장 발주 LOCK] · owner: [생산실장] · by: [YYYY-MM-DD]</li>
  </ul>
</section>
```
