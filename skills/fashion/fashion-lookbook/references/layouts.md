# 패션 룩북 레이아웃 (섹션 7종)

`assets/template.html`의 `<main id="lookbook">` 안에 이 섹션들을 붙여 넣으세요. 클래스 이름은 변경하지 말고, 카피·이미지 경로·표 행만 수정합니다.

OpenDesign 환경에서 인라인 코멘트 모드를 사용하려면 주요 섹션에 `data-od-id` 속성을 추가하세요. 다른 환경에서는 일반 `id` 속성으로 충분합니다.

---

## 1. 커버 (Cover)

시즌명 + 컬렉션 명제 + drop + 채널 + 히어로 이미지.

```html
<section class="section hero-grid" data-od-id="cover">
  <div>
    <p class="kicker">[REPLACE 27SS] · [REPLACE WOMEN 캡슐]</p>
    <h1 class="display">[REPLACE Seoul Lightness]</h1>
    <p class="lead" style="margin-top: 22px;">[REPLACE 컬렉션 명제 1문장 — 청중 + 실루엣 + 소재 무드 + 지금 왜 이 컬렉션인지]</p>
    <p class="meta" style="margin-top: 28px;">[REPLACE Drop 01] · [REPLACE 자사몰 / 무신사 동시] · [REPLACE 6 looks]</p>
  </div>
  <figure class="image-frame cover-image" data-fallback="images/cover-look.png를 생성하세요">
    <img src="images/cover-look.png" alt="[REPLACE 컬렉션 히어로 룩]" />
  </figure>
</section>
```

---

## 2. 스토리 스프레드 (Story Spread)

컬렉션의 무드/실루엣/소재 단락 + 캠페인 라인(quote).

```html
<section class="section story-grid" data-od-id="story">
  <div>
    <p class="kicker">Collection story</p>
    <h2 class="h2">[REPLACE 에디토리얼 헤드라인 — 예: "날씨가 정해지기 전에 입는 부드러운 구조"]</h2>
  </div>
  <div class="story-copy">
    <p class="lead">[REPLACE 소비자 모멘트, 스타일링 태도, 캡슐이 움직일 때 어떻게 보일지]</p>
    <p>[REPLACE 실루엣 단락 — 비례, 핏, 길이, 레이어링 로직]</p>
    <p>[REPLACE 소재 단락 — 패브릭 핸드필, 텍스처, 피니쉬, 기후, 케어/가치 큐]</p>
    <p class="quote">[REPLACE 캠페인 라인 — 짧고 시각적인 카피, 바이어 친화적인 인용구]</p>
  </div>
</section>
```

---

## 3. 6 룩 그리드 (Six-Look Grid)

룩 6개. 각 룩은 이미지 + 룩 번호 + 아이템 패밀리 + MD 노트(컬러/소재/핏/occasion 포함).

```html
<section class="section" data-od-id="looks">
  <p class="kicker">Key looks</p>
  <h2 class="h2" style="margin-bottom: 28px;">[REPLACE 캡슐을 정의하는 6개 룩]</h2>
  <div class="look-grid">
    <article class="look-card" data-od-id="look-01"
             data-item-family="[REPLACE Tailoring]"
             data-color="[REPLACE chalk]"
             data-material="[REPLACE paper-touch cotton]"
             data-fit="[REPLACE relaxed]"
             data-occasion="[REPLACE commute]">
      <figure class="image-frame" data-fallback="images/look-01.png를 생성하세요"><img src="images/look-01.png" alt="Look 01" /></figure>
      <div class="look-info">
        <div class="look-head"><h3 class="look-title">Look 01</h3><span class="meta">[REPLACE Tailoring]</span></div>
        <p class="look-note">[REPLACE 의류, 컬러, 패브릭, 핏, occasion, 스타일링 노트, MD 역할]</p>
      </div>
    </article>
    <article class="look-card" data-od-id="look-02"
             data-item-family="[REPLACE Dress]"
             data-color="[REPLACE iced blue]"
             data-material="[REPLACE washed poplin]"
             data-fit="[REPLACE column]"
             data-occasion="[REPLACE weekend]">
      <figure class="image-frame" data-fallback="images/look-02.png를 생성하세요"><img src="images/look-02.png" alt="Look 02" /></figure>
      <div class="look-info">
        <div class="look-head"><h3 class="look-title">Look 02</h3><span class="meta">[REPLACE Dress]</span></div>
        <p class="look-note">[REPLACE 의류, 컬러, 패브릭, 핏, occasion, 스타일링 노트, MD 역할]</p>
      </div>
    </article>
    <article class="look-card" data-od-id="look-03"
             data-item-family="[REPLACE Layering]"
             data-color="[REPLACE tonal]"
             data-material="[REPLACE sheer cotton]"
             data-fit="[REPLACE oversized]"
             data-occasion="[REPLACE all-day]">
      <figure class="image-frame" data-fallback="images/look-03.png를 생성하세요"><img src="images/look-03.png" alt="Look 03" /></figure>
      <div class="look-info">
        <div class="look-head"><h3 class="look-title">Look 03</h3><span class="meta">[REPLACE Layering]</span></div>
        <p class="look-note">[REPLACE]</p>
      </div>
    </article>
    <article class="look-card" data-od-id="look-04"
             data-item-family="[REPLACE Knit]"
             data-color="[REPLACE butter]"
             data-material="[REPLACE light wool blend]"
             data-fit="[REPLACE cropped]"
             data-occasion="[REPLACE evening]">
      <figure class="image-frame" data-fallback="images/look-04.png를 생성하세요"><img src="images/look-04.png" alt="Look 04" /></figure>
      <div class="look-info">
        <div class="look-head"><h3 class="look-title">Look 04</h3><span class="meta">[REPLACE Knit]</span></div>
        <p class="look-note">[REPLACE]</p>
      </div>
    </article>
    <article class="look-card" data-od-id="look-05"
             data-item-family="[REPLACE Denim]"
             data-color="[REPLACE washed indigo]"
             data-material="[REPLACE soft denim]"
             data-fit="[REPLACE wide-leg]"
             data-occasion="[REPLACE travel]">
      <figure class="image-frame" data-fallback="images/look-05.png를 생성하세요"><img src="images/look-05.png" alt="Look 05" /></figure>
      <div class="look-info">
        <div class="look-head"><h3 class="look-title">Look 05</h3><span class="meta">[REPLACE Denim]</span></div>
        <p class="look-note">[REPLACE]</p>
      </div>
    </article>
    <article class="look-card" data-od-id="look-06"
             data-item-family="[REPLACE Accent]"
             data-color="[REPLACE sangria]"
             data-material="[REPLACE satin]"
             data-fit="[REPLACE bias-cut]"
             data-occasion="[REPLACE statement]">
      <figure class="image-frame" data-fallback="images/look-06.png를 생성하세요"><img src="images/look-06.png" alt="Look 06" /></figure>
      <div class="look-info">
        <div class="look-head"><h3 class="look-title">Look 06</h3><span class="meta">[REPLACE Accent]</span></div>
        <p class="look-note">[REPLACE]</p>
      </div>
    </article>
  </div>
</section>
```

룩 6개의 역할 분배 권장: **히어로** (시즌 명제 대표) · **커머셜** (정상판매 견인) · **레이어링** (시즌 이행) · **스테이트먼트** (액센트) · **엔트리** (가격대 진입) · **클로징** (룩북 마무리 무드).

---

## 4. 에디토리얼 디테일 스트립 (Fit / Styling Proof)

핏 / 무브먼트 / 액세서리 — 컬렉션이 상업적으로 명확함을 증명하는 1~3개 단서.

```html
<section class="section detail-strip" data-od-id="fit-styling-proof">
  <div>
    <p class="kicker">Fit / styling proof</p>
    <h2 class="h2">[REPLACE 컬렉션을 상업적으로 명확하게 만드는 핏 또는 스타일링 1가지]</h2>
  </div>
  <div class="detail-grid">
    <article class="detail-card"><span class="meta">Fit</span><p>[REPLACE 허리, 어깨, 길이, 볼륨, 조정 가능성]</p></article>
    <article class="detail-card"><span class="meta">Movement</span><p>[REPLACE 의류가 움직이거나 레이어드되거나 휴대되는 방식, 하루 동안의 변형]</p></article>
    <article class="detail-card"><span class="meta">Accessory</span><p>[REPLACE 주얼리, 벨트, 슈즈, 백, 스마트 프레임 또는 스타일링 추가 기회]</p></article>
  </div>
</section>
```

---

## 5. 팔레트 & 소재 (Palette And Materials)

컬러 칩 + 소재 노트. **컬러명을 의류/패브릭처럼** 명명("chalk cotton", "iced blue poplin"). UI 토큰처럼 명명 금지.

```html
<section class="section board" data-od-id="palette-materials">
  <div>
    <p class="kicker">Palette / materials</p>
    <h2 class="h2">[REPLACE 컬러는 UI 테마가 아니라 패브릭처럼 읽혀야 합니다]</h2>
  </div>
  <div>
    <div class="chips">
      <div class="chip"><div class="swatch" style="background:[HEX];"></div><span class="meta">[REPLACE chalk cotton]</span></div>
      <div class="chip"><div class="swatch" style="background:[HEX];"></div><span class="meta">[REPLACE iced blue poplin]</span></div>
      <div class="chip"><div class="swatch" style="background:[HEX];"></div><span class="meta">[REPLACE butter voile]</span></div>
      <div class="chip"><div class="swatch" style="background:[HEX];"></div><span class="meta">[REPLACE sangria satin]</span></div>
    </div>
    <div class="material-list" style="margin-top: 28px;">
      <div class="material"><span class="meta">[REPLACE paper-touch cotton]</span><p>[REPLACE 핸드필, 드레이프, 피니쉬, 상품 활용]</p></div>
      <div class="material"><span class="meta">[REPLACE washed poplin]</span><p>[REPLACE]</p></div>
      <div class="material"><span class="meta">[REPLACE light wool blend]</span><p>[REPLACE]</p></div>
    </div>
  </div>
</section>
```

---

## 6. 라인업 / 라인 시트 (Line-Up Table)

MD 리뷰용 머신리더블 메타데이터 테이블. 자사몰/무신사 상품 등록의 베이스로 사용 가능.

```html
<section class="section" data-od-id="lineup">
  <p class="kicker">Range plan</p>
  <h2 class="h2" style="margin-bottom: 28px;">[REPLACE MD 리뷰용 라인업]</h2>
  <table class="line-sheet">
    <thead>
      <tr><th>Look</th><th>Hero item</th><th>Color</th><th>Material</th><th>Fit</th><th>Occasion</th><th>Drop</th><th>가격대</th><th>Search tags</th></tr>
    </thead>
    <tbody>
      <tr><td>01</td><td>[REPLACE 셋업 재킷]</td><td>[REPLACE chalk]</td><td>[REPLACE paper-touch cotton]</td><td>[REPLACE relaxed]</td><td>[REPLACE commute]</td><td>[REPLACE Drop 01]</td><td>[REPLACE 25만원대]</td><td>[REPLACE 셋업, 출근룩, 봄재킷]</td></tr>
      <tr><td>02</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td></tr>
      <tr><td>03</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td></tr>
      <tr><td>04</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td></tr>
      <tr><td>05</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td></tr>
      <tr><td>06</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td><td>[REPLACE]</td></tr>
    </tbody>
  </table>
</section>
```

**검색 태그**는 한국 e-커머스(무신사, 29CM)의 검색 키워드를 의식해 작성하세요. 예: `봄재킷`, `출근룩`, `신학기`, `데일리`, `여행룩`.

---

## 7. 클로징 CTA (Closing CTA)

다음 단계 — 샘플 / 바이어 미팅 / 자사몰 일정 / 무신사 입점 일정.

```html
<section class="section cta" data-od-id="closing">
  <div>
    <p class="kicker">Next step</p>
    <h2 class="h2">[REPLACE 승인 / 샘플 / 바이어 미팅 헤드라인]</h2>
    <p class="lead" style="margin-top: 18px;">[REPLACE 이 룩북이 어떤 의사결정을 요청하는지 1줄]</p>
  </div>
  <a class="button" href="#">[REPLACE CTA 라벨 — 예: "샘플 컨펌하기", "무신사 입점 의뢰서로 보내기"]</a>
</section>
```

---

## 스프레드 리듬 선택 가이드 요약

| 시나리오 | 권장 리듬 | 섹션 조합 |
|---|---|---|
| 자사몰 D2C 캡슐 론칭 | **캡슐 프리뷰** (기본) | 커버 → 스토리 → 6 룩 → 디테일 → 팔레트 → 라인업 → CTA |
| 바이어 미팅 / 도매 프리뷰 | **바이어 에디트** | 커버 → MD 노트 → 8 룩 → 라인 시트(확장) → drop 일정 |
| SNS · 무신사 단독 캠페인 | **캠페인 컨셉** | 커버 → 히어로 → 스토리 → 4 룩 → 채널 크롭 → 클로징 |

선택한 리듬을 작업 흐름 Step 2에서 한 문장으로 선언하세요.
