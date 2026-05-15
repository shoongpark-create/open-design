# 시즌 덱 레이아웃 (3종)

세 가지 리듬 중 **하나**를 Step 2에서 선택해 슬라이드를 조립하세요. 슬라이드 순서는 `slide-order.md`에서 고정되며, 이 파일은 각 슬라이드의 *표현 방식*만 정의합니다.

---

## 리듬 A — Vertical scroll-snap (기본값)

슬라이드가 수직으로 쌓이며, 풀스크린 + 스크롤-스냅 정렬. 화살표 키(↑ ↓)와 스페이스로 내비게이션.

```html
<body class="deck deck--scroll-vertical">
  <nav class="deck-nav" aria-label="Deck navigation">
    <button data-cmd="prev" aria-label="Previous slide">↑</button>
    <span class="deck-counter"><span data-current>1</span> / <span data-total>44</span></span>
    <button data-cmd="next" aria-label="Next slide">↓</button>
  </nav>

  <section class="slide slide--cover">
    <header class="cover-header"><span class="brand-mark">[REPLACE 와키윌리]</span><h1>[REPLACE 27SS 디자인 기획안]</h1></header>
    <footer><p>[REPLACE 와키윌리 디자인실] · [REPLACE 2026.04.29]</p></footer>
  </section>

  <section class="slide slide--toc">
    <h2>CONTENTS</h2>
    <ol class="toc-list">
      <li>로드맵 / 포지셔닝 맵</li>
      <li>시즌 컨셉 / 무드 보드</li>
      <li>컬러 / 소재</li>
      <li>스타일링</li>
      <li>키 아이템</li>
      <li>신규 라인업</li>
      <li>그래픽</li>
      <li>브랜드 구조 점검 및 재정비</li>
      <li>브랜드 전략</li>
    </ol>
  </section>

  <section class="slide slide--divider" data-chapter="color-material">
    <h2>컬러 / 소재</h2>
  </section>

  <section class="slide slide--embed"
           data-source="fashion-color-story"
           data-source-version="v2-locked"
           data-source-artifact-id="fashion-color-story-27ss">
    <header class="slide-header"><span class="slide-num">9</span><h2>컬러 구성</h2></header>
    <div class="slide-body">
      <!-- 컬러 스토리 산출물의 <main> 내용을 스코프해서 붙여넣기 -->
    </div>
    <footer class="slide-footer">
      <span class="slide-attribution">via <code>fashion-color-story</code></span>
      <span class="page-num">09</span>
    </footer>
  </section>

  <!-- slide-order.md에 따라 슬라이드 반복 -->

  <section class="slide slide--placeholder" data-missing-source="fashion-key-item-sheet">
    <h2>키 아이템 시트 (대기)</h2>
    <p>소스 산출물 없음: <code>fashion-key-item-sheet · 코튼 집업 점퍼</code>. 프로젝트 폴더에서 스킬을 실행한 뒤 재바인딩하세요.</p>
  </section>

  <section class="slide slide--end">
    <h1>E.O.D.</h1>
    <p>감사합니다</p>
  </section>
</body>
```

**언제 쓰나**: 내부 디자인 리뷰, 분기 검토. 기본 선택.

---

## 리듬 B — Horizontal scroll-snap (키노트 느낌)

슬라이드 마크업은 동일. 덱 컨테이너가 `overflow-x: auto;` + `scroll-snap-type: x mandatory;` 사용.

```html
<body class="deck deck--scroll-horizontal">
  <!-- 리듬 A와 동일한 슬라이드 -->
</body>
```

화살표 키는 ← / → 로 매핑(↑ / ↓ 대신). 에이전트가 30줄 정도의 바닐라 JS 핸들러를 인라인 추가해야 합니다.

**언제 쓰나**: 외부 발표(이사회, 투자자, 글로벌 미팅). 키노트/슬라이드 룸과 비슷한 톤이 필요할 때.

---

## 리듬 C — Print-A4-landscape (PDF 의도)

각 슬라이드가 정확히 A4 가로 1페이지. 출력 또는 PDF 내보내기용.

```html
<body class="deck deck--print">
  <section class="slide slide--print">
    <!-- ... -->
  </section>
  <!-- ... -->
</body>
```

CSS에서 `@page { size: A4 landscape; margin: 0; }` 설정 + `.slide--print`에 `width: 297mm; height: 210mm; page-break-after: always`.

**언제 쓰나**: PDF로 외부 공유, 인쇄본 검토회, 글로벌 협력사 발송용.

---

## 공통 슬라이드 종류

모든 슬라이드는 다음 `data-kind` 속성(또는 클래스 모디파이어)을 가집니다:

| `data-kind` | 클래스 | 용도 |
|---|---|---|
| `cover` | `slide--cover` | 슬라이드 1번만 |
| `toc` | `slide--toc` | 슬라이드 2번만 |
| `divider` | `slide--divider` | 섹션 그룹 앞 챕터 브레이크 |
| `embed` | `slide--embed` | 상위 모듈 산출물 본문 래핑 |
| `inline` | `slide--inline` | 프로젝트 자체 콘텐츠 (라벨 가이드, 브랜드 전략 등) |
| `placeholder` | `slide--placeholder` | 상위 모듈 산출물이 없을 때 |
| `end` | `slide--end` | 최종 E.O.D. 슬라이드 |

## 임베드 슬라이드 항상 필요한 메타데이터

모든 임베드 슬라이드는 다음 속성을 가집니다:

```html
<section class="slide slide--embed"
         data-source="<skill-name>"
         data-source-version="<산출물 락 버전, 예: v2-locked>"
         data-source-artifact-id="<산출물 식별자, 예: fashion-color-story-27ss>">
```

이 메타데이터를 통해 슬라이드 attribution chip → 독립 산출물 추적이 가능하며, 향후 소스 산출물이 재생성될 때 자동 갱신을 지원합니다.

---

## 리듬 선택 가이드 요약

| 시나리오 | 권장 리듬 |
|---|---|
| 내부 디자인 리뷰, 분기 검토 (기본) | **A — Vertical scroll-snap** |
| 외부 발표 (이사회, 투자자, 글로벌 미팅) | **B — Horizontal scroll-snap** |
| PDF 공유 / 인쇄본 검토회 / 글로벌 협력사 발송 | **C — Print-A4-landscape** |

선택한 리듬을 Step 2에서 한 문장으로 선언하세요.
