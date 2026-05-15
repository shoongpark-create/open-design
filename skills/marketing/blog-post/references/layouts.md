# K-패션 매거진 컬럼 레이아웃 (4종)

네 가지 리듬 중 **하나**를 Step 2에서 선택해 `<article>` 안에 붙여 넣으세요. 모든 리듬은 다음 공통 요소를 포함합니다.

**필수**: 카테고리 아이브로우 + 헤드라인 + 데크 + 바이라인 / 히어로 이미지 + 캡션 / 본문 600자 이상 + 4~6개 H2 / **풀쿼트 1개 + 피겨 1개 + 리스트 1개 + 인라인 인용 1개** / 저자 풋터.

플레이스홀더(`lorem ipsum`)는 절대 사용하지 않습니다. 진짜 매거진 글을 씁니다.

OpenDesign 환경에서 인라인 코멘트 모드를 사용하려면 주요 섹션에 `data-od-id` 속성을 추가하세요. 다른 환경에서는 일반 `id` 속성으로 충분합니다.

---

## 리듬 A — 시즌 컨셉 비하인드 (마뗑킴·시야쥬 톤 · 기본값)

"27SS의 무드는 어떻게 탄생했는가". 1인칭 또는 3인칭 차분한 에세이 톤.

```html
<header class="article-header" data-od-id="article-header">
  <p class="category">SEASON STORY · 27SS</p>
  <h1 class="headline">봄, 가장 조용한 옷에 대하여.</h1>
  <p class="deck">매트 김이 27SS의 무드를 정한 자리. 외치지 않고 머무는 봄, 그 한 벌의 시작.</p>

  <div class="byline">
    <span class="author">매트 김</span>
    <span class="dot">·</span>
    <span>브랜드 디렉터</span>
    <span class="dot">·</span>
    <span class="meta">2027.04.10</span>
  </div>
</header>

<figure class="hero-figure" data-od-id="hero">
  <div class="hero-img">[ 27SS LOOKBOOK · 메인 컷 ]</div>
  <p class="caption">27SS LOOKBOOK · 모델 김혜준 · 사진 이호인</p>
</figure>

<div class="body dropcap" data-od-id="body">
  <p>이번 시즌이 어디서 시작됐는지 묻는다면, 나는 늘 같은 답을 한다. 작년 12월, 도쿄 시부야의 어느 작은 카페에서 마신 한 잔의 호지차. 그 따뜻함이 27SS의 첫 호흡이 됐다. 외치지 않아도, 천천히 번지는 것들이 있다.</p>

  <h2>첫번째 — 외치지 않는 봄</h2>
  <p>봄은 보통 화려한 시즌으로 여겨진다. 꽃, 색, 밝음. 그러나 우리는 그 반대편을 골랐다. 봄의 가장 조용한 순간 — 아침 햇살이 커튼을 비치는 그 짧은 5분, 또는 비가 그친 뒤 정원의 공기가 천천히 가라앉는 순간. 그 자리에 매트 김의 27SS가 있길 바랐다.</p>

  <div class="pullquote" data-od-id="pullquote">
    <p>"봄은 외치는 시즌이 아니라, 머금는 시즌이다."</p>
    <cite>— 매트 김, 27SS 디자인 노트 中</cite>
  </div>

  <h2>두번째 — 컬러웨이 세 가지</h2>
  <p>컬러 팔레트는 단 세 가지로 정했다. 너무 많은 색은 시즌의 무드를 흐린다.</p>

  <ol>
    <li><strong>Ivory</strong> — 빛이 가장 부드럽게 닿는 색. 봄의 시작.</li>
    <li><strong>Sage</strong> — 정원의 잔향. 27SS 시즌 키 컬러.</li>
    <li><strong>Ash</strong> — 비가 그친 뒤의 공기. 봄의 그늘.</li>
  </ol>

  <h2>세번째 — 한 벌의 약속</h2>
  <p>27SS의 키 아이템은 '플로럴 빅 셔츠'다. 옥스포드 코튼이 아닌 100% 리넨, 그것도 Cool Linen 가공으로 — 4월부터 7월까지 입을 수 있도록. 시즌이 끝나도 옷장 한 켠에 머무는 옷을 만들고 싶었다.</p>

  <figure class="figure" data-od-id="figure">
    <div class="figure-img">[ 플로럴 빅 셔츠 · sage 컬러웨이 디테일 ]</div>
    <p class="caption">FLORAL BIG SHIRT · sage · 100% LINEN · 27SS</p>
  </figure>

  <p>옷이 옷장에 머무는 시간을 길게 만드는 일, 그것이 우리의 책임이라고 생각한다. 외치는 옷은 한 시즌으로 끝난다. 머무는 옷은 다음 봄, 그 다음 봄까지 함께 간다.</p>

  <blockquote>봄의 가장 조용한 순간을 입는 일 — 그것이 우리의 27SS다.</blockquote>

  <h2>네번째 — 매장에서, 그리고 옷장에서</h2>
  <p>27SS 컬렉션은 4월 22일 회원 사전예약을 시작한다. 4월 22일부터 5월 6일까지는 성수동에 BLOOM 팝업스토어를 연다. 직접 만져보고, 입어보고, 빛이 어떻게 닿는지 확인해 주시면 좋겠다.</p>

  <p>봄이 천천히 피어나는 것처럼, 옷도 천천히 옷장에 자리잡길 바란다.</p>
</div>

<footer class="author-foot" data-od-id="author-foot">
  <div class="avatar">MK</div>
  <div>
    <p class="author-name">매트 김</p>
    <p class="author-bio">마뗑킴(MATIN KIM)의 창업자이자 브랜드 디렉터. 컨템포러리 미니멀 톤의 한국 디자이너 브랜드를 2018년 출범. 자사몰과 무신사·29CM 입점 동시 운영. 매 시즌 직접 디자인 노트를 작성한다.</p>
  </div>
</footer>
```

**언제 쓰나**: 시즌 룩북 공개 시점(시즌 시작 1~2개월 전). 디자이너 1인칭 또는 브랜드 디렉터 시선으로.

**바꾸는 부분**: 시즌 코드, 시즌 무드 키워드, 컬러 팔레트, 키 아이템, 발매·팝업 일자.

---

## 리듬 B — 디자이너 인터뷰 (Q&A 형식)

질문-답변 구조. 인터뷰어 이름 + 디자이너 이름. 매거진 W Korea·Dazed Korea 톤.

```html
<header class="article-header">
  <p class="category">DESIGNER NOTE · INTERVIEW</p>
  <h1 class="headline">매트 김, "옷장에 머무는 옷."</h1>
  <p class="deck">27SS를 앞두고, 마뗑킴의 디자이너 매트 김을 성수동 스튜디오에서 만났다.</p>
  <div class="byline">
    <span class="author">이서윤</span>
    <span class="dot">·</span>
    <span>에디터</span>
    <span class="dot">·</span>
    <span class="meta">2027.04.05</span>
  </div>
</header>

<figure class="hero-figure">
  <div class="hero-img">[ 매트 김 인터뷰 컷 · 성수동 스튜디오 ]</div>
  <p class="caption">매트 김 · 성수동 마뗑킴 스튜디오 · 사진 박지영</p>
</figure>

<div class="body">
  <p>27SS의 컬렉션 노트를 받았을 때, 가장 먼저 눈에 들어온 단어는 '머무는'이었다. 시즌의 옷이라기보다 옷장의 옷. 그 결심이 어디서 왔는지 물었다.</p>

  <h2>Q. 27SS의 첫 무드 키워드를 정한 자리는 어디였나.</h2>
  <p><strong>A.</strong> 작년 12월, 도쿄에서였다. 시부야의 어느 작은 카페에서 호지차 한 잔을 마시면서. 외부의 시즌이 아니라 내 옷장의 시즌을 생각하게 됐다. 봄이 와서 새 옷을 입는 게 아니라, 늘 입던 옷이 봄 안에서 다시 보이는 일.</p>

  <div class="pullquote">
    <p>"옷장은 매 시즌 새로 채우는 곳이 아니라, 다시 발견하는 곳이다."</p>
    <cite>— 매트 김</cite>
  </div>

  <h2>Q. 컬러 팔레트가 3개로 좁아졌다.</h2>
  <p><strong>A.</strong> 처음엔 7개였다. 디자인실에서 8주 동안 압축했다. ivory, sage, ash — 결국 세 가지 색만 남았다. 색이 많으면 옷이 시즌을 외친다. 우리는 그 반대를 원했다.</p>

  <ol>
    <li><strong>Ivory</strong> — 아침 햇살.</li>
    <li><strong>Sage</strong> — 정원의 잔향.</li>
    <li><strong>Ash</strong> — 비 그친 공기.</li>
  </ol>

  <h2>Q. 키 아이템 '플로럴 빅 셔츠'에 대해.</h2>
  <p><strong>A.</strong> 리넨을 골랐다. 4월부터 7월까지 입을 수 있는 옷. Cool Linen 가공으로 통기성을 높였다. 가격도 시즌 한 벌이 아니라 옷장 한 자리를 의식해서 책정했다. ₩128,000 — 정상가, 회원 사전예약은 15% 할인.</p>

  <figure class="figure">
    <div class="figure-img">[ 플로럴 빅 셔츠 · 패브릭 디테일 ]</div>
    <p class="caption">FLORAL BIG SHIRT · 100% LINEN · Cool Linen 가공</p>
  </figure>

  <h2>Q. 마지막으로, 27SS를 한 줄로 말하면.</h2>
  <p><strong>A.</strong> "봄을 외치지 않고, 머금는 옷."</p>

  <blockquote>다음 봄에도, 그 다음 봄에도 같은 옷이 옷장에 있길 바란다. — 매트 김</blockquote>

  <h2>27SS 컬렉션 일정</h2>
  <p>회원 사전예약 4월 22일 22:00, 정식 발매 5월 6일. 성수동 BLOOM 팝업스토어 4월 22일 ~ 5월 6일.</p>
</div>

<footer class="author-foot">...</footer>
```

**언제 쓰나**: 시즌 직전·시즌 중. 매거진 W/Dazed 인터뷰 톤. Q&A는 4~6개.

**바꾸는 부분**: 인터뷰어·디자이너 이름, 4~6개 Q, 각 A의 디자이너 실제 멘트.

---

## 리듬 C — 콜라보 비하인드 (와키윌리·아더에러 톤)

"WACKYWILLY × XX의 첫 만남부터 발매까지". 두 브랜드의 만남·작업 과정·발매 일정을 시간 순서로.

```html
<header class="article-header">
  <p class="category">COLLAB BEHIND · WW × SANRIO</p>
  <h1 class="headline">두 캐릭터의 만남, 1년의 기록.</h1>
  <p class="deck">와키윌리와 SANRIO 27SS 콜라보 캡슐 — 첫 미팅에서 발매까지 12개월.</p>
  <div class="byline">
    <span class="author">한지윤</span>
    <span class="dot">·</span>
    <span>마케팅 디렉터</span>
    <span class="dot">·</span>
    <span class="meta">2027.03.01</span>
  </div>
</header>

<figure class="hero-figure">
  <div class="hero-img">[ WACKYWILLY × SANRIO 콜라보 키비주얼 ]</div>
  <p class="caption">WACKYWILLY × SANRIO · 27SS CAPSULE · 사진 김도현</p>
</figure>

<div class="body">
  <h2>2026년 3월 — 첫 미팅</h2>
  <p>도쿄 산리오 본사에서의 첫 미팅은 2026년 3월이었다. 양사 캐릭터 IP의 친근감이 닮았다는 점을 양쪽 모두 첫 줄에 적었다. 우리가 만드는 즐거움과 산리오가 40년을 지킨 즐거움 — 그 교집합을 어디까지 넓힐 수 있을지가 첫 주제였다.</p>

  <div class="pullquote">
    <p>"두 캐릭터가 한 옷장에 들어가는 일 — 그건 캐릭터가 친구가 되는 일이다."</p>
    <cite>— 한지윤, 와키윌리 마케팅 디렉터</cite>
  </div>

  <h2>2026년 5월 — 캐릭터 정합성 확인</h2>
  <p>산리오 측은 8개의 캐릭터를, 와키윌리는 자사 캐릭터 IP인 'WACKY'와 'WILLY'를 제안했다. 양쪽 디자인 팀이 함께 50개 이상의 스케치를 주고받았다.</p>

  <ol>
    <li><strong>HOODIE</strong> — 산리오 캐릭터 6종 자수 + WACKY/WILLY 백자수.</li>
    <li><strong>CROSS BAG</strong> — 핸드페인팅 캐릭터 패치 4종 어소트.</li>
    <li><strong>KEYRING</strong> — 아크릴 키링 6종 + 시크릿 1종.</li>
  </ol>

  <h2>2026년 9월 — 샘플 1차</h2>
  <p>한국 봉제 공장에서 1차 샘플을 받았다. 후드 자수의 결, 옥스포드 코튼 12oz의 밀도, 백 가죽 트림의 광택 — 여섯 차례 수정했다.</p>

  <figure class="figure">
    <div class="figure-img">[ 1차 샘플 vs 최종 샘플 ]</div>
    <p class="caption">2026.09 (좌) vs 2026.12 (우) · 자수 결과 옥스포드 밀도 비교</p>
  </figure>

  <h2>2026년 12월 — 룩북 촬영</h2>
  <p>모델 김혜준, 사진 이호인. 성수동 스튜디오에서 이틀에 걸쳐 촬영했다. 캐릭터 IP를 옷이 어떻게 살리고, 또 자신의 톤으로 어떻게 흡수하는지 — 그 균형을 찾는 작업이었다.</p>

  <h2>2027년 3월 — 사전예약 시작</h2>
  <p>3월 14일 14시 회원 사전예약을 시작한다. 4월 11일 11시 정식 발매. 무신사·29CM 입점 동시 진행. 회원 등급 GOLD 이상은 시크릿 캐릭터 키링 확정 1종 증정.</p>

  <blockquote>1년의 기록이 한 옷장으로 — 그 자리에 누가 함께 서주길 바란다.</blockquote>
</div>

<footer class="author-foot">...</footer>
```

**언제 쓰나**: 콜라보 발매 1~2주 전. 콜라보 브랜드 두 곳의 합작 기록을 시간 순서로.

**바꾸는 부분**: 콜라보 파트너명, 12개월 타임라인의 실제 마일스톤, 컬렉션 3종, 발매 채널.

---

## 리듬 D — 룩북 에세이 (룩 5컷 한 장씩 의미 풀이)

룩북의 5개 컷을 각각 한 H2로 풀어내는 시인적 에세이. 마르디 메크르디·시야쥬 톤.

```html
<header class="article-header">
  <p class="category">LOOKBOOK ESSAY · 27SS</p>
  <h1 class="headline">다섯 개의 봄, 다섯 개의 옷.</h1>
  <p class="deck">27SS 룩북의 5개 LOOK을 한 컷씩 풀어낸 에세이.</p>
  <div class="byline">
    <span class="author">이서윤</span>
    <span class="dot">·</span>
    <span>에디터</span>
    <span class="dot">·</span>
    <span class="meta">2027.04.18</span>
  </div>
</header>

<figure class="hero-figure">
  <div class="hero-img">[ LOOK 01 — 메인 컷 ]</div>
  <p class="caption">LOOK 01 · 27SS · 모델 김혜준 · 사진 이호인</p>
</figure>

<div class="body">
  <p>한 시즌은 보통 7~10개의 LOOK으로 정리된다. 27SS는 다섯이었다. 다섯 개의 봄, 다섯 개의 옷 — 각자 다른 시간을, 다른 무게를 입은 한 벌.</p>

  <h2>LOOK 01 — 아침의 옷</h2>
  <p>플로럴 빅 셔츠 · ivory. 커튼이 처음 열리는 시간. 잠에서 깬 직후, 아직 햇살이 부드러운 그 5분. 옷의 결이 빛을 천천히 받아내는 자리.</p>

  <h2>LOOK 02 — 정원의 옷</h2>
  <p>플로럴 빅 셔츠 · sage. 정원에 머무는 시간. 식물의 호흡과 가장 가까운 색. 27SS의 시즌 키 컬러.</p>

  <div class="pullquote">
    <p>"옷은 시간을 입는다. 봄의 옷은 봄의 시간을, 정원의 옷은 정원의 시간을."</p>
    <cite>— 이서윤, 27SS 룩북 에세이</cite>
  </div>

  <h2>LOOK 03 — 비 그친 후의 옷</h2>
  <p>린넨 와이드 팬츠 · ash. 비가 그친 직후 공기의 색. 정원의 잔향이 사라지기 직전, 공기가 가장 맑은 순간.</p>

  <figure class="figure">
    <div class="figure-img">[ LOOK 03 디테일 ]</div>
    <p class="caption">LOOK 03 · ash · LINEN WIDE PANTS</p>
  </figure>

  <h2>LOOK 04 — 저녁의 옷</h2>
  <p>린넨 자켓 · ivory. 햇살이 그늘로 옮겨가는 자리. 빛이 옷의 뒷면을 비추는 시간.</p>

  <ol>
    <li>LOOK 01 · ivory · 아침</li>
    <li>LOOK 02 · sage · 정원</li>
    <li>LOOK 03 · ash · 비 그친 후</li>
    <li>LOOK 04 · ivory · 저녁</li>
    <li>LOOK 05 · sage · 다음 날</li>
  </ol>

  <h2>LOOK 05 — 다음 날의 옷</h2>
  <p>플로럴 미니 셔츠 · sage. 옷장에 두 번째로 손이 가는 옷. 한 번 입고도 다시 입고 싶은 한 벌. 27SS가 옷장에 머무는 자리.</p>

  <blockquote>다섯 개의 봄이 한 옷장으로 모이는 일. 그것이 27SS의 약속이다.</blockquote>
</div>

<footer class="author-foot">...</footer>
```

**언제 쓰나**: 룩북 공개 후 1~2주. 매거진 에디토리얼 톤. 룩 개수만큼 H2 섹션.

**바꾸는 부분**: 룩 개수(5/8/10), 각 룩의 컬러웨이·시간대·심상, 시즌 컬러 키워드.

---

## 리듬 선택 가이드 요약

| 글의 성격 | 권장 리듬 | 드롭 캡 사용 |
|---|---|---|
| 시즌 컨셉 비하인드 (디자이너 1인칭) | **A — 시즌 컨셉** | ✅ |
| 인터뷰 (Q&A 4~6개) | **B — 디자이너 인터뷰** | ❌ |
| 콜라보 작업 기록 (시간 순서) | **C — 콜라보 비하인드** | ❌ |
| 룩북 한 컷씩 의미 풀이 | **D — 룩북 에세이** | ✅ (선택) |

선택한 리듬을 작업 흐름 Step 2에서 한 문장으로 선언하세요. 예: "리듬 A 시즌 컨셉 비하인드를 선택했습니다."
