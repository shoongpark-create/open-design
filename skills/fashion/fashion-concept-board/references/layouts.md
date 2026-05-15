# 컨셉 보드 레이아웃 (12개 섹션)

이 섹션들을 `assets/template.html`의 `<main id="concept-board">` 안에 붙여 넣으세요. 클래스 이름은 유지하고, 카피·이미지 경로·표 행만 편집합니다. **순서는 하중 부담(load-bearing)** — 컨셉 보드는 emotion → evidence → exploration → discipline 시퀀스 필수.

OpenDesign 환경에서 인라인 코멘트 모드를 사용하려면 주요 섹션에 `data-od-id` 속성을 추가하세요. 다른 환경에서는 일반 `id` 속성으로 충분합니다.

## 1. 커버 (Cover)

```html
<section class="section cover-grid" data-od-id="cover">
  <div>
    <p class="kicker">[시즌 코드 — 예: 27SS] · CONCEPT BOARD</p>
    <h1 class="display">[REPLACE 시즌 타이틀 — 예: HUMID COMMUTE]</h1>
    <p class="thesis">[REPLACE 한 문장 영역 thesis. 예: "27SS는 습한 6시 출근길에 산다, 드라이 인더스트리얼 더스티 팝과 함께."]</p>
    <p class="meta cover-meta">[브랜드] · [작성자] · [YYYY-MM-DD] · [상태: v1 / v2 / locked]</p>
  </div>
  <figure class="image-frame cover-image" data-fallback="images/cover-mood.png 이미지 생성 필요">
    <img src="images/cover-mood.png" alt="[커버 무드 이미지]" />
  </figure>
</section>
```

## 2. 키워드 클라우드 (Keyword Cloud)

`kw-loud / kw-mid / kw-soft`로 강조 가중치. Loud = 시즌의 load-bearing 키워드.

```html
<section class="section keyword-cloud" data-od-id="keywords">
  <p class="kicker">Season keywords</p>
  <div class="kw-grid">
    <span class="kw kw-loud">[키워드 1 — 예: 습한 출근길]</span>
    <span class="kw kw-loud">[키워드 2 — 예: 드라이 팝]</span>
    <span class="kw kw-mid">[키워드 3]</span>
    <span class="kw kw-mid">[키워드 4]</span>
    <span class="kw kw-soft">[키워드 5]</span>
    <span class="kw kw-soft">[키워드 6]</span>
    <span class="kw kw-soft">[키워드 7]</span>
  </div>
</section>
```

## 3. Thesis Statement

```html
<section class="section thesis-block" data-od-id="thesis">
  <div>
    <p class="kicker">Territory</p>
    <h2 class="h2">[영역 헤드라인 — 1 에디토리얼 문장, 기업체 톤 아님]</h2>
  </div>
  <div class="thesis-copy">
    <p class="lead">[단락 1: 이번 시즌의 고객, 그들이 어디에 있는지, 컬렉션이 어떤 모먼트 안에 사는지]</p>
    <p>[단락 2: primary 톤과 contrast/tension 톤이 무엇인지, 평이한 언어로]</p>
    <p>[단락 3: 왜 지금 — 27SS 구체에 이 영역이 의미 있는 문화 / 상업 / 브랜드 내부 사유]</p>
  </div>
</section>
```

## 4. 무드 그리드 (12장, 역할 태그)

`data-image-role`로 각 이미지를 scene / gesture / texture / light / garment-fragment / anti 태그.

```html
<section class="section" data-od-id="mood-grid">
  <p class="kicker">Mood territory</p>
  <h2 class="h2" style="margin-bottom: 28px;">시즌 무드를 매핑하는 12장 — 12개 아웃핏 프리뷰가 아님.</h2>
  <div class="mood-grid">
    <figure class="mood-card" data-image-role="scene">
      <div class="image-frame" data-fallback="images/mood-01.png 이미지 생성 필요">
        <img src="images/mood-01.png" alt="[scene]" />
      </div>
      <figcaption><span class="role-tag">scene</span><p>[1줄: 어디, 언제, 날씨]</p></figcaption>
    </figure>
    <figure class="mood-card" data-image-role="scene"><div class="image-frame" data-fallback="images/mood-02.png 이미지 생성 필요"><img src="images/mood-02.png" alt="[scene]" /></div><figcaption><span class="role-tag">scene</span><p>[1줄]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="gesture"><div class="image-frame" data-fallback="images/mood-03.png 이미지 생성 필요"><img src="images/mood-03.png" alt="[gesture]" /></div><figcaption><span class="role-tag">gesture</span><p>[1줄]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="gesture"><div class="image-frame" data-fallback="images/mood-04.png 이미지 생성 필요"><img src="images/mood-04.png" alt="[gesture]" /></div><figcaption><span class="role-tag">gesture</span><p>[1줄]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="texture"><div class="image-frame" data-fallback="images/mood-05.png 이미지 생성 필요"><img src="images/mood-05.png" alt="[texture]" /></div><figcaption><span class="role-tag">texture</span><p>[1줄]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="texture"><div class="image-frame" data-fallback="images/mood-06.png 이미지 생성 필요"><img src="images/mood-06.png" alt="[texture]" /></div><figcaption><span class="role-tag">texture</span><p>[1줄]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="light"><div class="image-frame" data-fallback="images/mood-07.png 이미지 생성 필요"><img src="images/mood-07.png" alt="[light]" /></div><figcaption><span class="role-tag">light</span><p>[1줄]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="light"><div class="image-frame" data-fallback="images/mood-08.png 이미지 생성 필요"><img src="images/mood-08.png" alt="[light]" /></div><figcaption><span class="role-tag">light</span><p>[1줄]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="texture"><div class="image-frame" data-fallback="images/mood-09.png 이미지 생성 필요"><img src="images/mood-09.png" alt="[texture]" /></div><figcaption><span class="role-tag">texture</span><p>[1줄]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="garment-fragment"><div class="image-frame" data-fallback="images/mood-10.png 이미지 생성 필요"><img src="images/mood-10.png" alt="[fragment]" /></div><figcaption><span class="role-tag">fragment</span><p>[1줄]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="garment-fragment"><div class="image-frame" data-fallback="images/mood-11.png 이미지 생성 필요"><img src="images/mood-11.png" alt="[fragment]" /></div><figcaption><span class="role-tag">fragment</span><p>[1줄]</p></figcaption></figure>
    <figure class="mood-card" data-image-role="gesture"><div class="image-frame" data-fallback="images/mood-12.png 이미지 생성 필요"><img src="images/mood-12.png" alt="[gesture]" /></div><figcaption><span class="role-tag">gesture</span><p>[1줄]</p></figcaption></figure>
  </div>
</section>
```

## 5. 레퍼런스 셸프 (Reference Shelf)

```html
<section class="section" data-od-id="references">
  <p class="kicker">Reference shelf</p>
  <h2 class="h2" style="margin-bottom: 28px;">이 영역이 임의로 만들어진 것이 아님을 증명하는 문화 앵커.</h2>
  <div class="reference-shelf">
    <article class="reference-card"><span class="meta">[시대 / 연도]</span><h3 class="ref-title">[레퍼런스 이름 — 예: 안성수 25SS]</h3><p>[1문장 — 왜 이것이 영역을 앵커링하는지]</p></article>
    <article class="reference-card"><span class="meta">[시대 / 연도]</span><h3 class="ref-title">[레퍼런스 이름 — 예: 함머쇼이 인테리어]</h3><p>[1문장]</p></article>
    <article class="reference-card"><span class="meta">[시대 / 연도]</span><h3 class="ref-title">[레퍼런스 이름 — 예: 90년대 후반 압구정 거리]</h3><p>[1문장]</p></article>
    <article class="reference-card"><span class="meta">[시대 / 연도]</span><h3 class="ref-title">[레퍼런스 이름]</h3><p>[1문장]</p></article>
    <article class="reference-card"><span class="meta">[시대 / 연도]</span><h3 class="ref-title">[레퍼런스 이름]</h3><p>[1문장]</p></article>
    <article class="reference-card"><span class="meta">[시대 / 연도]</span><h3 class="ref-title">[레퍼런스 이름]</h3><p>[1문장]</p></article>
  </div>
</section>
```

## 6. 톤 다이얼 (Tone Dials)

각 다이얼이 단일 축 결정. `--dial-pos` (0~100) 인라인 style로 마커 위치. 50 = 균형, <50 좌측 기움, >50 우측 기움.

```html
<section class="section dials" data-od-id="tone-dials">
  <p class="kicker">Tone dials</p>
  <h2 class="h2" style="margin-bottom: 28px;">이번 시즌이 합의된 축들 위에서 어디에 위치하는지.</h2>
  <div class="dial-list">
    <div class="dial" style="--dial-pos: 28;">
      <div class="dial-axis"><span class="meta dial-left">muted</span><span class="meta dial-right">saturated</span></div>
      <div class="dial-track"><div class="dial-marker"></div></div>
      <p class="dial-note">[1줄: 왜 여기에 위치]</p>
    </div>
    <div class="dial" style="--dial-pos: 65;">
      <div class="dial-axis"><span class="meta dial-left">structured</span><span class="meta dial-right">fluid</span></div>
      <div class="dial-track"><div class="dial-marker"></div></div>
      <p class="dial-note">[1줄]</p>
    </div>
    <div class="dial" style="--dial-pos: 42;">
      <div class="dial-axis"><span class="meta dial-left">quiet</span><span class="meta dial-right">loud</span></div>
      <div class="dial-track"><div class="dial-marker"></div></div>
      <p class="dial-note">[1줄]</p>
    </div>
    <div class="dial" style="--dial-pos: 30;">
      <div class="dial-axis"><span class="meta dial-left">retro</span><span class="meta dial-right">contemporary</span></div>
      <div class="dial-track"><div class="dial-marker"></div></div>
      <p class="dial-note">[1줄]</p>
    </div>
    <div class="dial" style="--dial-pos: 70;">
      <div class="dial-axis"><span class="meta dial-left">romantic</span><span class="meta dial-right">industrial</span></div>
      <div class="dial-track"><div class="dial-marker"></div></div>
      <p class="dial-note">[1줄]</p>
    </div>
  </div>
</section>
```

## 7. 컬러 시드 (Color Seeds)

```html
<section class="section seed-block" data-od-id="color-seeds">
  <div>
    <p class="kicker">Color seeds</p>
    <h2 class="h2">탐색 컬러 — LOCK 팔레트 아님.</h2>
    <p class="lead" style="margin-top: 14px;">최종 팔레트는 fashion-color-story에서 출고. 여기서는 watching 중인 것 선언.</p>
  </div>
  <div class="seed-chips">
    <div class="seed-chip"><div class="swatch" style="background:[HEX];"></div><div class="seed-meta"><span class="seed-name">[감성 이름 — 예: humid linen ivory]</span><span class="meta">[소재 컨텍스트]</span></div></div>
    <div class="seed-chip"><div class="swatch" style="background:[HEX];"></div><div class="seed-meta"><span class="seed-name">[감성 이름]</span><span class="meta">[소재 컨텍스트]</span></div></div>
    <div class="seed-chip"><div class="swatch" style="background:[HEX];"></div><div class="seed-meta"><span class="seed-name">[감성 이름]</span><span class="meta">[소재 컨텍스트]</span></div></div>
    <div class="seed-chip"><div class="swatch" style="background:[HEX];"></div><div class="seed-meta"><span class="seed-name">[감성 이름]</span><span class="meta">[소재 컨텍스트]</span></div></div>
    <div class="seed-chip"><div class="swatch" style="background:[HEX];"></div><div class="seed-meta"><span class="seed-name">[감성 이름]</span><span class="meta">[소재 컨텍스트]</span></div></div>
    <div class="seed-chip"><div class="swatch" style="background:[HEX];"></div><div class="seed-meta"><span class="seed-name">[감성 이름]</span><span class="meta">[소재 컨텍스트]</span></div></div>
  </div>
</section>
```

## 8. 소재 시드 (Material Seeds)

```html
<section class="section seed-block" data-od-id="material-seeds">
  <div>
    <p class="kicker">Material seeds</p>
    <h2 class="h2">패브릭 의도 — 공장 LOCK 아직 아님.</h2>
  </div>
  <ul class="seed-list">
    <li><span class="seed-name">[패브릭 의도 — 예: 워시드 코튼 body감]</span><span class="seed-detail">[핸드필 / 드레이프 / 마감 — 공장 LOCK 아님]</span></li>
    <li><span class="seed-name">[패브릭 의도]</span><span class="seed-detail">[핸드필 / 드레이프 / 마감]</span></li>
    <li><span class="seed-name">[패브릭 의도]</span><span class="seed-detail">[핸드필 / 드레이프 / 마감]</span></li>
    <li><span class="seed-name">[패브릭 의도]</span><span class="seed-detail">[핸드필 / 드레이프 / 마감]</span></li>
    <li><span class="seed-name">[패브릭 의도]</span><span class="seed-detail">[핸드필 / 드레이프 / 마감]</span></li>
    <li><span class="seed-name">[패브릭 의도]</span><span class="seed-detail">[핸드필 / 드레이프 / 마감]</span></li>
  </ul>
</section>
```

## 9. 실루엣 시드 (Silhouette Seeds)

```html
<section class="section seed-block" data-od-id="silhouette-seeds">
  <div>
    <p class="kicker">Silhouette seeds</p>
    <h2 class="h2">실루엣 방향 — 카테고리에 핀.</h2>
  </div>
  <ul class="seed-list">
    <li><span class="seed-name">셔츠 (Shirts)</span><span class="seed-detail">[실루엣 키워드 — 예: 어깨 정의된 릴랙스 박시]</span></li>
    <li><span class="seed-name">아우터 (Outer)</span><span class="seed-detail">[실루엣 키워드]</span></li>
    <li><span class="seed-name">팬츠 (Pants)</span><span class="seed-detail">[실루엣 키워드]</span></li>
    <li><span class="seed-name">스커트 / 원피스</span><span class="seed-detail">[실루엣 키워드]</span></li>
    <li><span class="seed-name">니트 (Knit)</span><span class="seed-detail">[실루엣 키워드]</span></li>
    <li><span class="seed-name">[다른 카테고리]</span><span class="seed-detail">[실루엣 키워드]</span></li>
  </ul>
</section>
```

## 10. 디테일 시드 (Detail Seeds)

```html
<section class="section seed-block" data-od-id="detail-seeds">
  <div>
    <p class="kicker">Detail seeds</p>
    <h2 class="h2">시즌이 탐색하는 디테일 무브.</h2>
  </div>
  <ul class="seed-list">
    <li><span class="seed-name">[디테일 카테고리]</span><span class="seed-detail">[무브 — 예: 플라스틱 대신 호른 버튼]</span></li>
    <li><span class="seed-name">[디테일 카테고리]</span><span class="seed-detail">[무브]</span></li>
    <li><span class="seed-name">[디테일 카테고리]</span><span class="seed-detail">[무브]</span></li>
    <li><span class="seed-name">[디테일 카테고리]</span><span class="seed-detail">[무브]</span></li>
    <li><span class="seed-name">[디테일 카테고리]</span><span class="seed-detail">[무브]</span></li>
    <li><span class="seed-name">[디테일 카테고리]</span><span class="seed-detail">[무브]</span></li>
  </ul>
</section>
```

## 11. Anti-Territory

```html
<section class="section anti-territory" data-od-id="anti-territory">
  <div>
    <p class="kicker">Anti-territory</p>
    <h2 class="h2">27SS가 의도적으로 하지 않는 것.</h2>
  </div>
  <ul class="anti-list">
    <li>[Y2K 노스탤지어 없음]</li>
    <li>[Pinterest 코티지코어 없음]</li>
    <li>[로고-앞면 머치 티 없음]</li>
    <li>[형광 컬러 없음]</li>
    <li>[셔츠 카테고리 너머 오버사이즈드 박시 핏 없음]</li>
  </ul>
</section>
```

## 12. Open / Next Decisions

```html
<section class="section open-questions" data-od-id="next-decisions">
  <div>
    <p class="kicker">Open / next</p>
    <h2 class="h2">다음 무엇이 일어나는지, 언제까지.</h2>
  </div>
  <ol class="next-list">
    <li><span class="next-when">[YYYY-MM-DD]</span><span class="next-what">[결정 — 예: fashion-color-story에서 컬러 팔레트 LOCK]</span></li>
    <li><span class="next-when">[YYYY-MM-DD]</span><span class="next-what">[결정 — 예: 동대문 패브릭 트립]</span></li>
    <li><span class="next-when">[YYYY-MM-DD]</span><span class="next-what">[결정 — 예: 1차 샘플 브리프 초안]</span></li>
    <li><span class="next-when">[YYYY-MM-DD]</span><span class="next-what">[결정]</span></li>
  </ol>
</section>
```
