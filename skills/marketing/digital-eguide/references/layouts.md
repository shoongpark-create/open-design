# K-패션 디지털 e-가이드 변형 (4종)

네 가지 변형 중 **하나**를 Step 2에서 골라 표지·스프레드 두 `<article class="page">` 카드 안에 붙여 넣으세요. 모든 변형은 동일한 5섹션 골격(eyebrow → 디스플레이 제목 → 저자/메타 → 본문 → 푸터)을 유지합니다.

OpenDesign 환경에서는 주요 요소에 `data-od-id` 속성(`cover`, `spread`, `toc`, `pullquote`, `exercise`)을 추가하세요. 다른 환경에서는 일반 `id` 속성으로 대체합니다.

---

## 변형 A — 시즌 스타일링 가이드 (마뗑킴·시야쥬 톤 · 기본값)

**시즌 시작 1개월 전** 룩북 공개와 함께 발행. PDF 다운로드 + 자사몰 회원 라운지 + 카카오톡 친구톡 첨부.

### 페이지 1 — 표지

```html
<article class="page left cover" data-od-id="cover">
  <div class="eyebrow">
    <div class="left"><span class="dot"></span>STYLING GUIDE · [REPLACE 27SS] · [REPLACE MATIN KIM]</div>
    <div class="right">[REPLACE 2027 EDITION · DROP 02]</div>
  </div>

  <!-- 디스플레이 제목 — 이탤릭 액센트 1단어 (예: Layering) -->
  <h1 class="title">
    [REPLACE Spring]
    <span class="ital">[REPLACE Layering]</span>
    <span class="amp">·</span>
    <span class="light">[REPLACE 101]</span>
    <span class="light">[REPLACE guide]</span>
  </h1>

  <div class="author">— BY <b>[REPLACE MATIN KIM STYLING DESK]</b> · [REPLACE 매트 김] · [REPLACE 10 / 04 / 2027]</div>

  <!-- 통계 3-셀 -->
  <div class="stats">
    <div class="stat"><div class="num">04</div><div class="lbl">CHAPTERS · 봄의 네 가지 결</div></div>
    <div class="stat"><div class="num">12</div><div class="lbl">LOOKS · 12 룩 매핑</div></div>
    <div class="stat"><div class="num">3</div><div class="lbl">COLORWAYS · ivory · sage · ash</div></div>
  </div>

  <h2 class="inside">What's <em>inside.</em></h2>

  <!-- TOC 2단 — 4~6개 챕터 -->
  <div class="toc" data-od-id="toc">
    <div class="item"><span class="name">STILLNESS — 가장 조용한 한 겹</span><span class="leader"></span><span class="pn">04</span></div>
    <div class="item"><span class="name">LAYER — 봄을 천천히 입는 다섯 단계</span><span class="leader"></span><span class="pn">08</span></div>
    <div class="item"><span class="name">COLOR — ivory · sage · ash</span><span class="leader"></span><span class="pn">12</span></div>
    <div class="item"><span class="name">FIT — 어깨에서 시작하는 핏</span><span class="leader"></span><span class="pn">18</span></div>
    <div class="item"><span class="name">KEY ITEM — Floral Big Shirt</span><span class="leader"></span><span class="pn">24</span></div>
    <div class="item"><span class="name">CARE — 리넨을 오래 입는 법</span><span class="leader"></span><span class="pn">32</span></div>
  </div>

  <div class="sticker">FOR THE QUIET WARDROBE</div>
  <div class="cover-footer"><span>[REPLACE FIND YOUR QUIET STYLE]</span><span>01 / 48</span></div>
</article>
```

### 페이지 2 — 스프레드 (CHAPTER 02 · LAYER)

```html
<article class="page right spread" data-od-id="spread">
  <div class="eyebrow">
    <div class="left"><span class="dot"></span>[REPLACE CHAPTER 02 · LAYER]</div>
    <div class="right">[REPLACE 4 — STEPS, 1 — EXERCISE]</div>
  </div>

  <!-- 디스플레이 서브타이틀 — 이탤릭 액센트 1단어 -->
  <h2 class="head">
    [REPLACE Layer like you speak —]<br/>
    <span class="accent">[REPLACE only quieter.]</span>
  </h2>
  <p class="deck">
    [REPLACE 봄은 외치는 시즌이 아니라 머금는 시즌입니다. 레이어링은 더 많이 입는 일이 아니라, 가장 가벼운 한 겹을 어디에 놓을지 정하는 일입니다. 27SS, 봄을 천천히 입는 네 단계.]
  </p>

  <div class="columns">
    <!-- 좌 컬럼: 오프닝 단락 (3~4문장) -->
    <p>[REPLACE 가장 잘된 레이어링은 입은 사람의 호흡을 따라갑니다. 어깨에서 시작해, 허리에서 한 번 정제되고, 발목에서 다시 자유로워지는 결. 옷을 더하기보다 빼는 감각 — 그 자리에 봄이 머뭅니다.]</p>

    <!-- 우 컬럼: 4단계 리스트 (영문 + 한국어 혼용) -->
    <div class="steps">
      <div class="row"><span class="n">01</span><span class="body"><b>Drop the shoulder.</b> 어깨를 떨어뜨리세요. 빅 핏 셔츠를 한 사이즈 크게.</span></div>
      <div class="row"><span class="n">02</span><span class="body"><b>Pick the lightest layer first.</b> 가장 가벼운 한 겹을 먼저 — Cool Linen 100%.</span></div>
      <div class="row"><span class="n">03</span><span class="body"><b>Mix sage with ivory.</b> sage 위에 ivory를 한 겹. 채도를 외치지 않기.</span></div>
      <div class="row"><span class="n">04</span><span class="body"><b>Tuck once, leave the rest.</b> 한 번만 넣고, 나머지는 그대로 흐르게.</span></div>
    </div>
  </div>

  <!-- 풀쿼트 -->
  <div class="pullquote" data-od-id="pullquote">
    <span class="open">"</span>
    [REPLACE 가장 잘 입은 봄은 가장 적게 입은 봄입니다.]
    <span class="by">— [REPLACE 매트 김] · [REPLACE CHAPTER 02 · LAYER]</span>
  </div>

  <!-- EXERCISE 콜아웃 -->
  <div class="exercise" data-od-id="exercise">
    <span class="label">EXERCISE</span>
    <span class="text">[REPLACE 옷장에서 가장 가벼운 한 겹을 꺼내, 오늘 가장 <em>조용한</em> 룩으로 입어 보세요. 채도를 외치지 않고, <em>한 번만</em> 넣고 나머지는 그대로.]</span>
  </div>

  <div class="spread-footer"><span>[REPLACE LAYER · 27SS]</span><span>08 / 48</span></div>
</article>
```

**언제 쓰나**: 시즌 시작 1개월 전. 룩북 공개·신상 발매 직전 PDF 다운로드 / 카카오 친구톡.

**바꾸는 부분**: 챕터 4~6개, 통계 3-셀, 풀쿼트 한 줄, EXERCISE 한 문장.

**디스플레이 폰트 권장**: `--serif` (Hahmlet / Cormorant). 마뗑킴은 무게 700 + 이탤릭 1단어.

---

## 변형 B — 데일리 핏 마스터 매뉴얼 (베이직 / 무신사 스탠다드 톤)

**시즌 중반** 발행. 베이직 라인 가독성 + 신뢰감. 색상 톤을 무채색 + 한 점 액센트로 단순화.

### 페이지 1 — 표지

```html
<article class="page left cover" data-od-id="cover">
  <div class="eyebrow">
    <div class="left"><span class="dot"></span>[REPLACE THE DAILY FIT MANUAL · 27SS]</div>
    <div class="right">[REPLACE EDITION 02]</div>
  </div>

  <h1 class="title">
    [REPLACE The]
    <span class="ital">[REPLACE Daily]</span>
    <span class="light">[REPLACE Fit]</span>
    <span class="amp">·</span>
    <span class="light">[REPLACE Manual]</span>
  </h1>

  <div class="author">— BY <b>[REPLACE MUSINSA STANDARD DESK]</b> · [REPLACE 김보경] · [REPLACE 05 / 22 / 2027]</div>

  <div class="stats">
    <div class="stat"><div class="num">05</div><div class="lbl">CHAPTERS · 핏의 다섯 결</div></div>
    <div class="stat"><div class="num">24</div><div class="lbl">LOOKS · 매일 입을 24 룩</div></div>
    <div class="stat"><div class="num">8</div><div class="lbl">KEY ITEMS · 베이직 8종</div></div>
  </div>

  <h2 class="inside">What's <em>inside.</em></h2>

  <div class="toc" data-od-id="toc">
    <div class="item"><span class="name">STAND — 어깨에서 시작하기</span><span class="leader"></span><span class="pn">04</span></div>
    <div class="item"><span class="name">DRAPE — 옷이 몸을 따라오게</span><span class="leader"></span><span class="pn">10</span></div>
    <div class="item"><span class="name">TUCK — 한 번만 넣기</span><span class="leader"></span><span class="pn">16</span></div>
    <div class="item"><span class="name">FOLD — 소매를 거는 방식</span><span class="leader"></span><span class="pn">22</span></div>
    <div class="item"><span class="name">LET GO — 마지막 한 겹 빼기</span><span class="leader"></span><span class="pn">28</span></div>
  </div>

  <div class="sticker" style="background: #1c1b1a;">WEAR IT EVERY DAY</div>
  <div class="cover-footer"><span>FIND YOUR DAILY FIT</span><span>01 / 36</span></div>
</article>
```

### 페이지 2 — 스프레드 (CHAPTER 03 · TUCK)

스프레드는 변형 A 구조와 동일. 4단계 리스트 본문만 핏 매뉴얼 톤으로 교체:

- `01 Find the front centre. — 앞 중심 한 점을 찾으세요.`
- `02 Pinch, don't push. — 잡아 빼되, 밀어 넣지 말 것.`
- `03 Let the back fall. — 뒤는 그대로 떨어뜨리세요.`
- `04 Leave 2cm above the belt. — 벨트 위 2cm 여백.`

**언제 쓰나**: 시즌 중반. 베이직 라인 판매 안정화 시점 데일리 가이드.

**바꾸는 부분**: 5챕터 (STAND/DRAPE/TUCK/FOLD/LET GO), 무채색 톤, 8 KEY ITEMS.

---

## 변형 C — VIP 회원 가이드 (마르디·아더에러 PLATINUM/VIP 톤)

**VIP 가입 직후** 친구톡 첨부 또는 우편 발송. 글로벌 톤 + 영문 100% 톤 가능. 색상 톤은 더 어둡고 절제.

### 페이지 1 — 표지

```html
<article class="page left cover" data-od-id="cover">
  <div class="eyebrow">
    <div class="left"><span class="dot"></span>[REPLACE VIP EDITION · 2027 · MARDI MERCREDI]</div>
    <div class="right">[REPLACE FOR MEMBERS ONLY]</div>
  </div>

  <h1 class="title">
    [REPLACE A Year of]
    <span class="ital">[REPLACE Quiet]</span>
    <span class="amp">·</span>
    <span class="light">[REPLACE Style]</span>
  </h1>

  <div class="author">— BY <b>[REPLACE MARDI MERCREDI ATELIER]</b> · [REPLACE 디렉터 박서영] · [REPLACE 03 / 14 / 2027]</div>

  <div class="stats">
    <div class="stat"><div class="num">06</div><div class="lbl">RITUALS · VIP 여섯 가지 의례</div></div>
    <div class="stat"><div class="num">12</div><div class="lbl">LOOKS · 시즌 12 룩</div></div>
    <div class="stat"><div class="num">∞</div><div class="lbl">PRIORITY · 시즌 1주 전 사전예약</div></div>
  </div>

  <h2 class="inside">What's <em>inside.</em></h2>

  <div class="toc" data-od-id="toc">
    <div class="item"><span class="name">ARRIVAL — VIP 첫 시즌</span><span class="leader"></span><span class="pn">04</span></div>
    <div class="item"><span class="name">WARDROBE — 옷장의 한 결</span><span class="leader"></span><span class="pn">12</span></div>
    <div class="item"><span class="name">RITUAL — 매일의 작은 의례</span><span class="leader"></span><span class="pn">20</span></div>
    <div class="item"><span class="name">TRAVEL — 여행의 옷장</span><span class="leader"></span><span class="pn">26</span></div>
    <div class="item"><span class="name">EVENING — 저녁의 룩</span><span class="leader"></span><span class="pn">34</span></div>
    <div class="item"><span class="name">RETURN — 다음 시즌으로</span><span class="leader"></span><span class="pn">42</span></div>
  </div>

  <div class="sticker">FOR MEMBERS ONLY</div>
  <div class="cover-footer"><span>WELCOME, MEMBER.</span><span>01 / 56</span></div>
</article>
```

### 페이지 2 — 스프레드 (RITUAL 03)

CHAPTER 라벨을 `RITUAL 03 · EVENING`처럼 의례 단위로 표기. 4단계 리스트 대신 **여섯 가지 의례 / 6 RITUALS** 톤으로 글이 더 길어질 수 있음. 풀쿼트는 디렉터 어트리뷰션.

**언제 쓰나**: VIP/PLATINUM 회원 가입 직후 또는 시즌 시작 1주 전 발송.

**바꾸는 부분**: 6 RITUALS, 영문 100% 또는 영불 혼용 (마르디 톤).

---

## 변형 D — 시즌 룩북 인터랙티브 (5 LOOKS, 5 STORIES)

**시즌 시작 1개월 전** 룩북 페이지의 인터랙티브 PDF 버전. 표지 = 시즌 키비주얼, 스프레드 = LOOK 01 한 페이지.

### 페이지 1 — 표지 (시즌 키비주얼 톤)

```html
<article class="page left cover" data-od-id="cover">
  <div class="eyebrow">
    <div class="left"><span class="dot"></span>[REPLACE 27SS LOOKBOOK · 5 LOOKS, 5 STORIES]</div>
    <div class="right">[REPLACE WACKYWILLY]</div>
  </div>

  <h1 class="title">
    [REPLACE Five]
    <span class="ital">[REPLACE Quiet]</span>
    <span class="light">[REPLACE Looks]</span>
    <span class="amp">·</span>
    <span class="light">[REPLACE One Season]</span>
  </h1>

  <div class="author">— BY <b>[REPLACE WACKYWILLY STUDIO]</b> · [REPLACE 강윤 디렉터] · [REPLACE 02 / 18 / 2027]</div>

  <div class="stats">
    <div class="stat"><div class="num">5</div><div class="lbl">LOOKS · 시즌 메인 룩</div></div>
    <div class="stat"><div class="num">38</div><div class="lbl">SKUS · 라인업 SKU</div></div>
    <div class="stat"><div class="num">3</div><div class="lbl">COLORWAYS · ivory·sage·oat</div></div>
  </div>

  <h2 class="inside">Five <em>looks.</em></h2>

  <div class="toc" data-od-id="toc">
    <div class="item"><span class="name">LOOK 01 — Bloom Quietly</span><span class="leader"></span><span class="pn">04</span></div>
    <div class="item"><span class="name">LOOK 02 — Soft Linen Day</span><span class="leader"></span><span class="pn">12</span></div>
    <div class="item"><span class="name">LOOK 03 — Set-up in Oat</span><span class="leader"></span><span class="pn">20</span></div>
    <div class="item"><span class="name">LOOK 04 — Sage Layering</span><span class="leader"></span><span class="pn">28</span></div>
    <div class="item"><span class="name">LOOK 05 — Evening Quiet</span><span class="leader"></span><span class="pn">36</span></div>
  </div>

  <div class="sticker">SS 27 · FIVE LOOKS</div>
  <div class="cover-footer"><span>READ THE SEASON</span><span>01 / 44</span></div>
</article>
```

### 페이지 2 — 스프레드 (LOOK 01 · BLOOM QUIETLY)

CHAPTER 라벨을 `LOOK 01 · BLOOM QUIETLY`로 교체. 4단계 리스트 대신 룩의 SKU 4종(블레이저·셔츠·팬츠·슈즈) 리스트. 풀쿼트는 디자이너 의도. EXERCISE는 `WEAR THIS LOOK — 다음 주말, 가장 조용한 정원에서 입어 보세요.`

**언제 쓰나**: 시즌 시작 1개월 전. 룩북 페이지의 인터랙티브 PDF·태블릿 라운지 비치용.

**바꾸는 부분**: 5 LOOK 제목·SKU 4종 리스트·디자이너 의도 풀쿼트.

---

## 변형 선택 가이드 요약

| 가이드 성격 | 권장 변형 | 발행 시점 |
|---|---|---|
| 시즌 스타일링 가이드 (PDF + 친구톡) | **A — 시즌 스타일링** | 시즌 시작 -1개월 |
| 데일리 핏 매뉴얼 (베이직 라인 톤) | **B — 데일리 핏** | 시즌 중반 |
| VIP/PLATINUM 회원 가이드 | **C — VIP 가이드** | VIP 가입 직후 / 시즌 -1주 |
| 시즌 룩북 인터랙티브 | **D — 5 LOOKS** | 시즌 시작 -1개월 |
| 키 아이템 가이드 (1 아이템 집중) | **A** 변형 (CHAPTER = KEY ITEM 1개) | 신상 발매 직전 |
| 브랜드 스타일 매뉴얼 (연 1~2회) | **C** 변형 (영문 100% 톤) | 연간 |

선택한 변형을 작업 흐름 Step 2에서 한 문장으로 선언하세요. 예: "변형 A 시즌 스타일링 가이드를 선택했습니다."
