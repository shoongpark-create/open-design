# K-패션 인스타그램 캐러셀 레이아웃 (4종)

네 가지 패턴 중 **하나**를 Step 3에서 선택해 `<section class="cards">` 안에 카드 3장을 붙여 넣으세요.

**공통 규칙**:
- 3개 헤드라인을 연속해서 읽으면 **하나의 시리즈 문장**이 되어야 함 (예: `Quiet.` → `Steady.` → `Now.`)
- 마지막 카드는 보통 CTA 또는 시즌 코드/발매 정보 (`Shop Now.`, `Pre-order.`, `룩북 보기.`)
- 카드 3장의 도미넌트 컬러가 분명히 달라야 함 (시즌 컬러 3종 또는 새벽/정오/저녁)
- 헤드라인은 디스플레이 폰트, 캡션·인덱스·LOOP 스탬프는 mono

OpenDesign 환경에서 인라인 코멘트 모드를 사용하려면 주요 섹션에 `data-od-id` 속성을 추가하세요. 다른 환경에서는 일반 `id` 속성으로 충분합니다.

---

## 패턴 A — 시즌 컨셉 시리즈 (마뗑킴·시야쥬 톤 · 기본값)

미니멀, 영문 1단어 시리즈, 텍스트 절제. 시즌 무드 → 키 아이템 → CTA 또는 시즌 코드.

```html
<!-- CARD 01 — 시즌 무드 -->
<article class="card" data-index="1" data-od-id="card-1">
  <span class="chip"><span class="dot" aria-hidden></span>[REPLACE MATIN KIM]</span>
  <span class="idx">[REPLACE 27SS · 01 / 03]</span>

  <div class="lockup">
    <h2>[REPLACE Quiet.]</h2>
  </div>

  <span class="caption">
    [REPLACE LOOK 01 · CAMPAIGN STILL]
    <span class="kr">[REPLACE 정제된 하루, 그 자체.]</span>
  </span>
  <span class="loop">1× LOOP</span>
</article>

<!-- CARD 02 — 키 아이템 -->
<article class="card" data-index="2" data-od-id="card-2">
  <span class="chip"><span class="dot" aria-hidden></span>[REPLACE MATIN KIM]</span>
  <span class="idx">[REPLACE 27SS · 02 / 03]</span>

  <div class="lockup">
    <h2>[REPLACE <span class="accent-word">Steady.</span>]</h2>
  </div>

  <span class="caption">
    [REPLACE FLORAL BIG SHIRT · sage]
    <span class="kr">[REPLACE 100% LINEN · COOL LINEN.]</span>
  </span>
  <span class="loop">1× LOOP</span>
</article>

<!-- CARD 03 — CTA / 시즌 코드 -->
<article class="card" data-index="3" data-od-id="card-3">
  <span class="chip"><span class="dot" aria-hidden></span>[REPLACE MATIN KIM]</span>
  <span class="idx">[REPLACE 27SS · 03 / 03]</span>

  <div class="lockup">
    <h2>[REPLACE <span class="accent-word">Now.</span>]</h2>
  </div>

  <span class="caption">
    [REPLACE PRE-ORDER · 04.22 22:00]
    <span class="kr">[REPLACE 회원 사전예약 시작.]</span>
  </span>
  <span class="loop">1× LOOP</span>
</article>
```

**시리즈 문장**: `Quiet.` → `Steady.` → `Now.` ("조용히, 단단히, 지금")

**언제 쓰나**: 시즌 룩북 공개 + 사전예약 모집 + 신상 발매 캐러셀. 컨템포러리 미니멀 브랜드 톤.

**바꾸는 부분**: 시리즈 헤드라인 3개 (마지막은 행동 단어), 시즌 코드, 사전예약 일자, 한국어 보조 자막.

**디스플레이 폰트 권장**: `--font-display-romance` (Instrument Serif).

---

## 패턴 B — 신상 발매 시리즈 (영캐주얼·위트 톤)

발매 일자 → 컬러웨이 → 가격/CTA. 키르시·와키윌리 같은 위트 톤. 헤드라인은 영문 + 위트.

```html
<!-- CARD 01 — 키비주얼 + 발매 일자 -->
<article class="card" data-index="1">
  <span class="chip"><span class="dot" aria-hidden></span>[REPLACE WACKYWILLY]</span>
  <span class="idx">[REPLACE 27SS · 01 / 03]</span>
  <div class="lockup">
    <h2>[REPLACE Wacky.]</h2>
  </div>
  <span class="caption">
    [REPLACE DROP 02 · 04.22 22:00]
    <span class="kr">[REPLACE 회원 사전예약, 오늘 밤.]</span>
  </span>
  <span class="loop">1× LOOP</span>
</article>

<!-- CARD 02 — 컬러웨이 3종 -->
<article class="card" data-index="2">
  <span class="chip"><span class="dot" aria-hidden></span>[REPLACE WACKYWILLY]</span>
  <span class="idx">[REPLACE 27SS · 02 / 03]</span>
  <div class="lockup">
    <h2>[REPLACE <span class="accent-word">Willy.</span>]</h2>
  </div>
  <span class="caption">
    [REPLACE COLLAB HOODIE · 6 CHARACTERS]
    <span class="kr">[REPLACE 캐릭터 자수 6종 · ₩148,000.]</span>
  </span>
  <span class="loop">1× LOOP</span>
</article>

<!-- CARD 03 — CTA -->
<article class="card" data-index="3">
  <span class="chip"><span class="dot" aria-hidden></span>[REPLACE WACKYWILLY]</span>
  <span class="idx">[REPLACE 27SS · 03 / 03]</span>
  <div class="lockup">
    <h2>[REPLACE <span class="accent-word">오늘도.</span>]</h2>
  </div>
  <span class="caption">
    [REPLACE PRE-ORDER · LINK IN BIO]
    <span class="kr">[REPLACE 회원만, 한정 수량.]</span>
  </span>
  <span class="loop">1× LOOP</span>
</article>
```

**시리즈 문장**: `Wacky.` → `Willy.` → `오늘도.` (브랜드 캐릭터 한 호흡 + 마지막에 한국어 시즌 코드)

**언제 쓰나**: 신상 발매 1~2일 전 또는 발매 당일. 카카오톡 친구톡 이미지로 첫 카드 재활용.

**바꾸는 부분**: 브랜드 캐릭터 IP명, 발매 일자, 컬러웨이·가격, 마지막 한국어 시즌 코드.

**디스플레이 폰트 권장**: `--font-display-play` (Bagel Fat One) 또는 `--font-display-street` (Black Han Sans).

---

## 패턴 C — 콜라보 발매 시리즈 (아더에러·콜라보 톤)

브랜드 락업 → 키 아이템 → 발매 일자. 영문 100%, 컨셉추얼.

```html
<!-- CARD 01 — 콜라보 락업 -->
<article class="card" data-index="1">
  <span class="chip"><span class="dot" aria-hidden></span>[REPLACE WW × SANRIO]</span>
  <span class="idx">[REPLACE 27SS · CAPSULE · 01 / 03]</span>
  <div class="lockup">
    <h2>[REPLACE Two.]</h2>
  </div>
  <span class="caption">
    [REPLACE COLLAB CAPSULE · 27SS]
    <span class="kr">[REPLACE 두 캐릭터, 한 옷장.]</span>
  </span>
  <span class="loop">1× LOOP</span>
</article>

<!-- CARD 02 — 콜라보 키 아이템 -->
<article class="card" data-index="2">
  <span class="chip"><span class="dot" aria-hidden></span>[REPLACE WW × SANRIO]</span>
  <span class="idx">[REPLACE 27SS · CAPSULE · 02 / 03]</span>
  <div class="lockup">
    <h2>[REPLACE <span class="accent-word">Friends.</span>]</h2>
  </div>
  <span class="caption">
    [REPLACE COLLAB HOODIE · 6 CHARACTERS · LIMITED]
    <span class="kr">[REPLACE 캐릭터 자수 6종 · 회원 한정.]</span>
  </span>
  <span class="loop">1× LOOP</span>
</article>

<!-- CARD 03 — 발매 일자 + 발매 채널 -->
<article class="card" data-index="3">
  <span class="chip"><span class="dot" aria-hidden></span>[REPLACE WW × SANRIO]</span>
  <span class="idx">[REPLACE 27SS · CAPSULE · 03 / 03]</span>
  <div class="lockup">
    <h2>[REPLACE <span class="accent-word">03.14.</span>]</h2>
  </div>
  <span class="caption">
    [REPLACE PRE-ORDER · 14:00 · WW.COM]
    <span class="kr">[REPLACE 무신사 · 29CM 동시 발매.]</span>
  </span>
  <span class="loop">1× LOOP</span>
</article>
```

**시리즈 문장**: `Two.` → `Friends.` → `03.14.` (콘셉추얼 → 키 아이템 → 발매 일자)

**언제 쓰나**: 콜라보 발매 1~2주 전 카운트다운 + 발매 당일. 글로벌 톤이 필요한 디자이너 브랜드.

**바꾸는 부분**: 콜라보 파트너 락업, 키 아이템, 발매 일자, 발매 채널 (자사몰 / 무신사 / 29CM).

**디스플레이 폰트 권장**: `--font-display-romance` (Instrument Serif) 또는 `--font-display-report` (Druk 톤).

---

## 패턴 D — 룩북 공개 시리즈 (마르디 메크르디 톤)

룩북 한 컷씩 + 시즌 무드 + CTA. 셀럽 모델 톤. 컬러풀, 영불/국문 혼용.

```html
<!-- CARD 01 — 룩 01 -->
<article class="card" data-index="1">
  <span class="chip"><span class="dot" aria-hidden></span>[REPLACE MARDI MERCREDI]</span>
  <span class="idx">[REPLACE 27SS · LOOKBOOK · 01 / 03]</span>
  <div class="lockup">
    <h2>[REPLACE Mardi.]</h2>
  </div>
  <span class="caption">
    [REPLACE LOOK 01 · MODEL KIM GOEUN]
    <span class="kr">[REPLACE 김고은 캠페인 · 사진 이호인.]</span>
  </span>
  <span class="loop">1× LOOP</span>
</article>

<!-- CARD 02 — 룩 03 (시즌 키 컷) -->
<article class="card" data-index="2">
  <span class="chip"><span class="dot" aria-hidden></span>[REPLACE MARDI MERCREDI]</span>
  <span class="idx">[REPLACE 27SS · LOOKBOOK · 02 / 03]</span>
  <div class="lockup">
    <h2>[REPLACE <span class="accent-word">en Fleur.</span>]</h2>
  </div>
  <span class="caption">
    [REPLACE LOOK 03 · FLOWER MARDI · KEY VISUAL]
    <span class="kr">[REPLACE 플라워 마르디, 27SS 시그니처.]</span>
  </span>
  <span class="loop">1× LOOP</span>
</article>

<!-- CARD 03 — 룩북 CTA -->
<article class="card" data-index="3">
  <span class="chip"><span class="dot" aria-hidden></span>[REPLACE MARDI MERCREDI]</span>
  <span class="idx">[REPLACE 27SS · LOOKBOOK · 03 / 03]</span>
  <div class="lockup">
    <h2>[REPLACE <span class="accent-word">Lookbook.</span>]</h2>
  </div>
  <span class="caption">
    [REPLACE LINK IN BIO · 5 LOOKS · 27SS]
    <span class="kr">[REPLACE 룩북 보기 · 자사몰 PDF.]</span>
  </span>
  <span class="loop">1× LOOP</span>
</article>
```

**시리즈 문장**: `Mardi.` → `en Fleur.` → `Lookbook.` (브랜드명 → 시즌 키 → CTA)

**언제 쓰나**: 룩북 공개일. 셀럽 모델 발표와 동시. 인스타그램 본 계정 + 카카오톡 친구톡 이미지.

**바꾸는 부분**: 룩 번호, 모델·사진작가 이름, 시즌 시그니처 키 (`en Fleur`, `Mardi en Fleur`).

**디스플레이 폰트 권장**: `--font-display-romance` (Instrument Serif).

---

## 시리즈 헤드라인 사례 (포엣코어 + 한 문장)

3개 카드를 연속해서 읽었을 때 자연스러운 시리즈가 되는 사례.

### 영문 시리즈

- `Quiet.` → `Steady.` → `Now.` (마뗑킴·시야쥬 톤)
- `Onwards.` → `To the next one.` → `Looking ahead.` (브랜드 매니페스토)
- `Wacky.` → `Willy.` → `Always.` (와키윌리 캐릭터 IP)
- `Bloom.` → `Quietly.` → `Spring 27.` (시즌 사전예약)
- `One.` → `By one.` → `Always.` (와키윌리 × 콜라보)

### 영문/국문 혼용

- `시작.` → `이어서.` → `오늘도.` (와키윌리 데일리)
- `Spring.` → `Bloom.` → `봄, 천천히.` (마뗑킴 시즌)
- `Wacky 1.` → `Wacky 2.` → `Wacky 27SS.` (시즌 코드)
- `Mardi.` → `en Fleur.` → `Lookbook.` (마르디 룩북)

마지막 장은 CTA 또는 시즌 코드/발매 정보로 닫는 패턴이 표준.

---

## 패턴 선택 가이드 요약

| 캐러셀 성격 | 권장 패턴 | 디스플레이 폰트 | 도미넌트 컬러 |
|---|---|---|---|
| 시즌 컨셉 시리즈 (룩북 + 사전예약) | **A — 시즌 컨셉** | romance (Instrument Serif) | 시즌 키 컬러 3종 |
| 신상 발매 카운트다운 | **B — 신상 발매** | play / street | 영캐주얼 비비드 |
| 콜라보 발매 카운트다운 | **C — 콜라보 발매** | romance / report | 컬러풀 또는 단색 |
| 룩북 공개 시리즈 | **D — 룩북 공개** | romance | 시즌 무드 톤 |

선택한 패턴을 작업 흐름 Step 4에서 한 문장으로 선언하세요. 예: "패턴 A 시즌 컨셉 시리즈를 선택했습니다."
