# K-패션 매거진 포스터 레이아웃 (4종)

네 가지 리듬 중 **하나**를 Step 2에서 선택해 `<main class="poster">` 안에 붙여 넣으세요. 모든 리듬은 다음 7개 요소 순서를 유지합니다.

**공통 구조**: 상단 룰 + 데이트라인 → 상단 아이브로우 → 헤드라인 락업 (취소선 1단어 + 이탤릭 액센트 1단어 정확히 1회씩) → 데크 → 액센트 룰 → 6개 번호 섹션 그리드 → 풋터 밴드.

OpenDesign 환경에서 인라인 코멘트 모드를 사용하려면 주요 섹션에 `data-od-id` 속성을 추가하세요. 다른 환경에서는 일반 `id` 속성으로 충분합니다.

---

## 리듬 A — 시즌 매니페스토 (마뗑킴 BLOOM 27SS 톤 · 기본값)

룩북 공개와 함께 발신하는 시즌 매니페스토. 6개 섹션 = COLOR · SILHOUETTE · FABRIC · POP-UP · CAMPAIGN · PROMISE.

```html
<div class="top-rule" data-od-id="top-rule">
  <div class="left">
    <span>01 · A</span>
    <span>MATIN KIM JOURNAL</span>
    <span>BLOOM ISSUE</span>
  </div>
  <span>2027.04.10 · 토요일</span>
</div>

<p class="top-eyebrow">[REPLACE BLOOM 27SS · MANIFESTO]</p>

<div class="lockup" data-od-id="lockup">
  <h1 class="headline">
    [REPLACE 우리는 봄을] <span class="strike">[REPLACE 외치지 않는다.]</span><br />
    <span class="accent-word">[REPLACE 입는다.]</span>
  </h1>
  <p class="deck">[REPLACE 27SS, 마뗑킴이 봄을 가장 조용히 입는 방법.] — <em>그래서, 입는다.</em></p>
  <div class="accent-rule" aria-hidden></div>
</div>

<section class="body-grid" data-od-id="body-grid">
  <div class="cell" data-od-id="cell-1">
    <p class="num-label">01 · COLOR</p>
    <h3>[REPLACE 정원의 잔향, 세 가지.]</h3>
    <p>[REPLACE 봄의 가장 조용한 시간 — 아침 햇살의 ivory, 정원의 sage, 비 그친 후의 ash. 세 가지 색만 남기고 모두 덜어냈다. 외치는 색을 빼면, 머무는 색이 보인다.]</p>
    <div class="callout">[REPLACE 색은 옷의 시간을 정한다.]</div>
  </div>

  <div class="cell" data-od-id="cell-2">
    <p class="num-label">02 · SILHOUETTE</p>
    <h3>[REPLACE 여유로운 빅 핏, 몸을 감싸는.]</h3>
    <p>[REPLACE 27SS는 빅 핏이다. 몸에 닿지 않는 옷, 몸을 천천히 감싸는 옷. 5분 더 머무는 햇살처럼.]</p>
    <div class="callout">[REPLACE 옷이 몸을 외치지 않을 때, 사람이 보인다.]</div>
  </div>

  <div class="cell" data-od-id="cell-3">
    <p class="num-label">03 · FABRIC</p>
    <h3>[REPLACE 100% 리넨, Cool Linen 가공.]</h3>
    <p>[REPLACE 4월부터 7월까지 입을 수 있는 한 벌. 옷장에 머무는 시간을 길게 만드는 일 — 그것이 우리의 책임이다.]</p>
    <div class="callout">[REPLACE 한 시즌의 옷이 아니라, 옷장의 옷.]</div>
  </div>

  <div class="cell" data-od-id="cell-4">
    <p class="num-label">04 · POP-UP</p>
    <h3>[REPLACE 성수동, 15일.]</h3>
    <p>[REPLACE 04.22 → 05.06, 성수동 더현대 1F. 직접 만져보고, 빛이 어떻게 닿는지 확인해 주시기 바란다. 매트 김 사인회 4.26, 4.30.]</p>
    <div class="callout">[REPLACE 옷이 옷장에 가기 전, 한 번 만나는 자리.]</div>
  </div>

  <div class="cell" data-od-id="cell-5">
    <p class="num-label">05 · CAMPAIGN</p>
    <h3>[REPLACE 모델 김혜준, 사진 이호인.]</h3>
    <p>[REPLACE 27SS 캠페인은 5 LOOKS. 다섯 개의 봄, 다섯 개의 옷. 룩북은 04.18 공개, 매거진 W KOREA 5월호 동시 게재.]</p>
    <div class="callout">[REPLACE 다섯 개의 봄이 한 옷장으로.]</div>
  </div>

  <div class="cell" data-od-id="cell-6">
    <p class="num-label">06 · PROMISE</p>
    <h3>[REPLACE 다음 봄에도, 같은 옷.]</h3>
    <p>[REPLACE 외치는 옷은 한 시즌으로 끝난다. 머무는 옷은 다음 봄, 그 다음 봄까지 함께 간다. 그것이 27SS의 약속이다.]</p>
    <div class="callout">[REPLACE 봄을 외치지 않고, 머금는 옷.]</div>
  </div>
</section>

<footer class="pagefoot" data-od-id="footer">
  <span class="plate">BRAND VOICE</span>
  <span class="closing">봄, 천천히 피어나다. — 매트 김.</span>
  <span>EFFECTIVE 27SS</span>
  <span>MATIN KIM</span>
</footer>
```

**언제 쓰나**: 시즌 매니페스토 (시즌 시작 1~2개월 전, 룩북 공개와 동시). 자사몰 JOURNAL 1면, 인쇄 A2/A3 포스터, 인스타그램 첫 장 캐러셀.

**바꾸는 부분**: 6개 섹션의 주제(`COLOR · SILHOUETTE · FABRIC · POP-UP · CAMPAIGN · PROMISE`)와 본문 카피, 헤드라인 취소선·이탤릭 단어.

**디스플레이 폰트 권장**: `--font-display: Hahmlet` 또는 `Instrument Serif`.

---

## 리듬 B — 팝업스토어 안내 (성수동 BLOOM 팝업 톤)

팝업 오픈 2~3주 전 안내. 6개 섹션 = LOCATION · HOURS · LIMITED · SIGNING · CAMPAIGN · ACCESS.

```html
<div class="top-rule">
  <div class="left">
    <span>02 · B</span>
    <span>MATIN KIM POP-UP NOTICE</span>
  </div>
  <span>2027.04.05 · 월요일</span>
</div>

<p class="top-eyebrow">[REPLACE POP-UP SEOUL · 15 DAYS ONLY]</p>

<div class="lockup">
  <h1 class="headline">
    [REPLACE 봄이 오는 자리,] <span class="strike">[REPLACE 15일.]</span><br />
    <span class="accent-word">[REPLACE 성수동.]</span>
  </h1>
  <p class="deck">[REPLACE MATIN KIM × BLOOM 27SS 팝업스토어, 04.22 → 05.06.] — <em>한 자리, 봄의 모든 것.</em></p>
  <div class="accent-rule"></div>
</div>

<section class="body-grid">
  <div class="cell">
    <p class="num-label">01 · LOCATION</p>
    <h3>[REPLACE 성수동 더현대 1F.]</h3>
    <p>[REPLACE 서울 성동구 왕십리로 83. 2호선·수인분당선 성수역 4번 출구 도보 5분.]</p>
    <div class="callout">[REPLACE 봄의 한 자리.]</div>
  </div>
  <div class="cell">
    <p class="num-label">02 · HOURS</p>
    <h3>[REPLACE 11:00 → 21:00, 매일.]</h3>
    <p>[REPLACE 04.22 화 → 05.06 화, 무휴 운영. 04.22 오프닝 18:00 → 21:00.]</p>
    <div class="callout">[REPLACE 15일 동안, 매일.]</div>
  </div>
  <div class="cell">
    <p class="num-label">03 · LIMITED</p>
    <h3>[REPLACE 팝업 한정 3종.]</h3>
    <p>[REPLACE LIMITED Floral Big Shirt · sage, LIMITED Linen Wide Pants · ash, LIMITED Pop-up Tote · ivory. 사전예약 불가, 매장 방문 한정.]</p>
    <div class="callout">[REPLACE 매장 방문, 한정 수량.]</div>
  </div>
  <div class="cell">
    <p class="num-label">04 · SIGNING</p>
    <h3>[REPLACE 매트 김 사인회 2회.]</h3>
    <p>[REPLACE 04.26 토, 04.30 수 — 각 18:00 → 20:00. 사전 예약 GOLD 회원 우선 (자사몰 / 카카오톡 채널 신청).]</p>
    <div class="callout">[REPLACE 직접 만나는 자리.]</div>
  </div>
  <div class="cell">
    <p class="num-label">05 · CAMPAIGN</p>
    <h3>[REPLACE BLOOM 27SS 룩북 5컷.]</h3>
    <p>[REPLACE 팝업 내부 1면 전체에 27SS 룩북 5컷 인쇄 전시. 모델 김혜준, 사진 이호인.]</p>
    <div class="callout">[REPLACE 룩북이 옷장으로 가기 전, 한 자리.]</div>
  </div>
  <div class="cell">
    <p class="num-label">06 · ACCESS</p>
    <h3>[REPLACE 방문 예약 권장.]</h3>
    <p>[REPLACE 카카오톡 채널 @matinkim 친구 추가 → 시간대 예약. 일반 방문도 가능하나 사인회 시간대는 예약자 우선.]</p>
    <div class="callout">[REPLACE 카카오톡 채널, 친구 추가.]</div>
  </div>
</section>

<footer class="pagefoot">
  <span class="plate">POP-UP</span>
  <span class="closing">성수동에서, 4월 22일부터.</span>
  <span>15 DAYS ONLY</span>
  <span>MATIN KIM</span>
</footer>
```

**언제 쓰나**: 팝업 오픈 2~3주 전. 매장·자사몰·인스타그램·카카오톡 친구톡 이미지로 동시 활용.

**바꾸는 부분**: 팝업 위치·기간·운영시간·한정 아이템·사인회 일정.

---

## 리듬 C — 브랜드 출범 선언 (와키윌리 출범 톤)

신규 브랜드 첫 매니페스토. 6개 섹션 = WHO · WHY · PROMISE · CHARACTER · CHANNEL · OPENING.

```html
<div class="top-rule">
  <div class="left">
    <span>00 · ZERO</span>
    <span>WACKYWILLY MANIFESTO</span>
    <span>FOUNDING</span>
  </div>
  <span>2026.09.01 · 첫 발신</span>
</div>

<p class="top-eyebrow">[REPLACE BRAND LAUNCH · CHAPTER 00]</p>

<div class="lockup">
  <h1 class="headline">
    [REPLACE 즐거움은] <span class="strike">[REPLACE 선택 사항이]</span><br />
    [REPLACE 아니다. 첫] <span class="accent-word">[REPLACE 약속이다.]</span>
  </h1>
  <p class="deck">[REPLACE WACKYWILLY, 캐릭터 IP 기반 영캐주얼 브랜드. 2026년 가을, 첫 발신.] — <em>오늘도, 즐거움.</em></p>
  <div class="accent-rule"></div>
</div>

<section class="body-grid">
  <div class="cell">
    <p class="num-label">01 · WHO</p>
    <h3>[REPLACE WACKY와 WILLY, 두 캐릭터.]</h3>
    <p>[REPLACE 와키윌리는 두 캐릭터로부터 시작했다. 호기심이 많은 WACKY와, 늘 함께 다니는 WILLY. 옷 위에서 살아나는 캐릭터 IP — 그것이 첫 약속이다.]</p>
    <div class="callout">[REPLACE 캐릭터가 옷장으로 들어오는 일.]</div>
  </div>
  <div class="cell">
    <p class="num-label">02 · WHY</p>
    <h3>[REPLACE 즐거움이 디자인의 자리에서.]</h3>
    <p>[REPLACE 한국의 영캐주얼은 진중함을 자주 닮는다. 우리는 그 반대편에 있다. 즐거움이 디자인의 첫 자리이고, 캐릭터가 즐거움의 첫 도구다.]</p>
    <div class="callout">[REPLACE 진중함의 반대편, 즐거움.]</div>
  </div>
  <div class="cell">
    <p class="num-label">03 · PROMISE</p>
    <h3>[REPLACE 캐릭터 IP, 매 시즌.]</h3>
    <p>[REPLACE 매 시즌 WACKY와 WILLY가 새로운 친구를 만난다. 26FW는 첫 만남, 27SS는 SANRIO와의 콜라보. 즐거움은 늘 새 친구로 자란다.]</p>
    <div class="callout">[REPLACE 매 시즌, 새 친구.]</div>
  </div>
  <div class="cell">
    <p class="num-label">04 · CHARACTER</p>
    <h3>[REPLACE 재미있는 · 따라하고 싶은 · 색감 좋은.]</h3>
    <p>[REPLACE 와키윌리의 캐릭터 4단 — 재미있는, 따라하고 싶은, 신뢰할 수 있는, K-아이돌 무드. 매장에서 만나는 친구처럼.]</p>
    <div class="callout">[REPLACE 친구처럼 입는 브랜드.]</div>
  </div>
  <div class="cell">
    <p class="num-label">05 · CHANNEL</p>
    <h3>[REPLACE 자사몰 · 무신사 · 29CM.]</h3>
    <p>[REPLACE 자사몰(카페24), 무신사 입점, 29CM 큐레이션 동시 발신. 카카오톡 채널 @wackywilly로 첫 회원 모집.]</p>
    <div class="callout">[REPLACE 모든 자리에서, 같은 톤.]</div>
  </div>
  <div class="cell">
    <p class="num-label">06 · OPENING</p>
    <h3>[REPLACE 26FW, 첫 발매.]</h3>
    <p>[REPLACE 첫 발매는 26FW S4 판기 — 09.15 사전예약, 10.10 정식 발매. 캐릭터 후드·티셔츠·키링 3종으로 시작한다.]</p>
    <div class="callout">[REPLACE 26FW, 첫 발걸음.]</div>
  </div>
</section>

<footer class="pagefoot">
  <span class="plate">FOUNDING</span>
  <span class="closing">즐거움은 첫 약속이다. — 와키윌리.</span>
  <span>CHAPTER 00</span>
  <span>WACKYWILLY</span>
</footer>
```

**언제 쓰나**: 신규 브랜드 출범 시점. 인쇄 포스터 + 자사몰 매거진 1면 + 인스타그램 첫 장 캐러셀.

**바꾸는 부분**: 브랜드명, 캐릭터/시그니처 IP, 첫 발매 시즌·일정.

---

## 리듬 D — 콜라보 발매 (와키윌리 × SANRIO 톤)

콜라보 발매 1~2주 전 매니페스토. 6개 섹션 = COLLAB · TIMELINE · ITEMS · LOOKBOOK · CHANNEL · RELEASE.

```html
<div class="top-rule">
  <div class="left">
    <span>03 · D</span>
    <span>WACKYWILLY × SANRIO</span>
    <span>27SS CAPSULE</span>
  </div>
  <span>2027.03.01 · 발신</span>
</div>

<p class="top-eyebrow">[REPLACE COLLAB · D-13 TO PRE-ORDER]</p>

<div class="lockup">
  <h1 class="headline">
    [REPLACE 두 캐릭터의] <span class="strike">[REPLACE 첫 만남.]</span><br />
    [REPLACE 1년의] <span class="accent-word">[REPLACE 기록.]</span>
  </h1>
  <p class="deck">[REPLACE WACKYWILLY × SANRIO 27SS 캡슐 컬렉션 — 후디·백·키링 3종.] — <em>한 옷장으로 들어오는 친구들.</em></p>
  <div class="accent-rule"></div>
</div>

<section class="body-grid">
  <div class="cell">
    <p class="num-label">01 · COLLAB</p>
    <h3>[REPLACE 와키윌리 × SANRIO.]</h3>
    <p>[REPLACE 한국 영캐주얼과 일본 캐릭터 IP, 두 브랜드의 첫 합작. 2026년 3월 도쿄 본사 첫 미팅에서 시작.]</p>
    <div class="callout">[REPLACE 캐릭터가 친구가 되는 자리.]</div>
  </div>
  <div class="cell">
    <p class="num-label">02 · TIMELINE</p>
    <h3>[REPLACE 12개월, 50개 스케치.]</h3>
    <p>[REPLACE 2026.03 첫 미팅 → 2026.05 캐릭터 정합성 → 2026.09 1차 샘플 → 2026.12 룩북 → 2027.03 사전예약.]</p>
    <div class="callout">[REPLACE 1년, 그리고 한 옷장.]</div>
  </div>
  <div class="cell">
    <p class="num-label">03 · ITEMS</p>
    <h3>[REPLACE 3종, 한정 수량.]</h3>
    <p>[REPLACE HOODIE · CROSS BAG · KEYRING — 옥스포드 코튼 12oz 후드, 핸드페인팅 패치 백, 시크릿 캐릭터 키링.]</p>
    <div class="callout">[REPLACE 회원 한정, 수량 한정.]</div>
  </div>
  <div class="cell">
    <p class="num-label">04 · LOOKBOOK</p>
    <h3>[REPLACE 모델 김혜준, 사진 김도현.]</h3>
    <p>[REPLACE 27SS 콜라보 룩북 03.07 공개. 5 LOOKS · 캐릭터 IP 6종 등장. 매거진 1stLook, DAZED KOREA 5월호 동시 게재.]</p>
    <div class="callout">[REPLACE 캐릭터가 룩북으로.]</div>
  </div>
  <div class="cell">
    <p class="num-label">05 · CHANNEL</p>
    <h3>[REPLACE 자사몰 · 무신사 동시.]</h3>
    <p>[REPLACE 와키윌리 자사몰(카페24) 회원 사전예약 우선, 무신사 입점 동시 발매. 29CM 큐레이션 04.18 추가.]</p>
    <div class="callout">[REPLACE 어느 자리에서든, 같은 친구.]</div>
  </div>
  <div class="cell">
    <p class="num-label">06 · RELEASE</p>
    <h3>[REPLACE 03.14 14:00 · 04.11 11:00.]</h3>
    <p>[REPLACE 회원 사전예약 03.14 14:00 시작 → 정식 발매 04.11 11:00. GOLD 등급 이상 시크릿 캐릭터 1종 확정.]</p>
    <div class="callout">[REPLACE 14일, 그리고 한 옷장.]</div>
  </div>
</section>

<footer class="pagefoot">
  <span class="plate">CAPSULE</span>
  <span class="closing">두 번째 만남으로, 곧.</span>
  <span>27SS</span>
  <span>WW × SANRIO</span>
</footer>
```

**언제 쓰나**: 콜라보 발매 1~2주 전. 매장·자사몰 매거진·PR 이메일 첨부·인스타그램 첫 장 캐러셀.

**바꾸는 부분**: 콜라보 파트너명, 12개월 타임라인, 발매 일자.

---

## 리듬 선택 가이드 요약

| 발신 성격 | 권장 리듬 | 6개 섹션 주제 |
|---|---|---|
| 시즌 매니페스토 (룩북 공개) | **A — 시즌 매니페스토** | COLOR / SILHOUETTE / FABRIC / POP-UP / CAMPAIGN / PROMISE |
| 팝업스토어 안내 | **B — 팝업 안내** | LOCATION / HOURS / LIMITED / SIGNING / CAMPAIGN / ACCESS |
| 신규 브랜드 출범 | **C — 출범 선언** | WHO / WHY / PROMISE / CHARACTER / CHANNEL / OPENING |
| 콜라보 발매 매니페스토 | **D — 콜라보 발매** | COLLAB / TIMELINE / ITEMS / LOOKBOOK / CHANNEL / RELEASE |

선택한 리듬을 작업 흐름 Step 2에서 한 문장으로 선언하세요. 예: "리듬 A 시즌 매니페스토를 선택했습니다."
