# 심플 덱 슬라이드 레이아웃

**8개 paste-ready 슬라이드 스켈레톤.** `assets/template.html`의 `<body>`에 붙여 넣습니다. 슬라이드를 처음부터 쓰지 마세요 — 가장 가까운 레이아웃을 골라 붙이고 카피만 K-패션 사례로 교체합니다.

## 사전 점검

1. **`assets/template.html`을 처음부터 끝까지 읽으세요** — 아래 모든 클래스는 씨드의 `<style>` 블록에 정의되어 있습니다. 고정 카운터, 진행 바, 힌트, 하단의 5-룰 nav 스크립트는 이미 연결됨 — 다시 구현하지 마세요.
2. **슬라이드 리스트와 테마 리듬을 슬라이드 붙이기 전에 먼저 계획하세요.** "테마 리듬" 섹션 참조 — 덱이 생동감 있냐 졸리냐를 가르는 가장 큰 요인.
3. **프로젝트 `DESIGN.md`를 읽으세요** — 씨드의 6개 `:root` 변수에 토큰을 매핑합니다.

## 테마 리듬 — 6슬라이드 졸음을 막는 규칙

모든 `<section class="slide">`은 반드시 정확히 하나의 클래스를 포함해야 합니다:

- `light` — 기본 화이트 페이퍼 표면
- `dark` — 인버트, fg-on-bg
- `hero light` — light + 추가 패딩 (표지, 빅스탯, 빅쿼트)
- `hero dark` — dark + 추가 패딩

**규칙:**

- 같은 테마 3개 이상 연속 금지. `light light light` → 지루.
- **8슬라이드 이상**: 최소 1개 `hero dark` + 최소 1개 `hero light`. 길게 라이트만 있으면 졸리고, 다크만 있으면 무거움.
- 3~4 슬라이드마다 `dark`로 호흡 주면 다음 라이트가 더 강하게 들어옵니다.
- 표지는 거의 항상 `hero light`. 마무리는 `hero dark` 또는 `hero light`.

emit 전, 머릿속으로 슬라이드 1~N의 클래스를 나열해 보세요. `light × 5 연속`이면 한 개를 `dark`로 바꿉니다.

## 클래스 인벤토리

> `slide` `light` `dark` `hero` `center` `eyebrow` `h-hero` `h-xl` `h-md` `lead` `meta` `stat-num` `unit` `stat-caption` `quote-mark` `quote-text` `quote-author` `pt-grid` `pt` `pipeline` `step` `nb` `ba-grid` `ba-col` `ba-label` `ph-img` `wide` `tall`

이 리스트에 없는 클래스가 필요하면 씨드의 `<style>`에 먼저 정의하세요.

---

## Layout 1 — 표지 (슬라이드 1)

`hero light center`. 키커 1개(브랜드/시즌/날짜), 큰 디스플레이 헤드라인 1개(≤ 8 단어로 임팩트), lead 한 줄.

```html
<section class="slide hero light center" data-screen-label="01 표지">
  <div class="eyebrow">WACKYWILLY · 27SS · IMC 결과 보고</div>
  <h1 class="h-hero">윌리가 봄을 데려왔습니다.</h1>
  <p class="lead">캐릭터 IP 캡슐 + 채널 동시 발매. 정판율 78.4%, 시즌 GMV +34.6% YoY.</p>
</section>
```

## Layout 2 — 본문 슬라이드 (키커 + 헤드라인 + lead)

워크호스. 덱당 3~6번 사용. 리듬을 위해 `light` / `dark` 교대.

```html
<section class="slide light" data-screen-label="02 캠페인 개요">
  <p class="eyebrow">캠페인 개요</p>
  <h2 class="h-xl">윌리 캐릭터 IP를 27SS 시즌 전체에 풀었습니다.</h2>
  <p class="lead">5월 1일 LOOKBOOK 공개부터 6월 20일 시즌2 캡슐 예고까지 6주간 멀티채널 IMC. 자사몰·무신사·29CM 동시 발매와 성수 팝업, 인플루언서 협업 12건.</p>
</section>
```

## Layout 3 — 빅스탯 (데이터 빌보드)

`hero light center` 또는 `hero dark center`. 숫자 하나. 한 슬라이드에 3개 숫자 넣지 말고 — 3개 빅스탯 슬라이드로 분리.

```html
<section class="slide hero dark center" data-screen-label="03 빅스탯">
  <div class="stat-num">1.8<span class="unit">억</span></div>
  <p class="stat-caption">총 노출 — 인스타 릴스 + 틱톡 + 유튜브 쇼츠 + 카카오톡 + 자사몰 메인 합산.</p>
</section>
```

## Layout 4 — 3-포인트 row

작은 헤드라인 위 3개 룰-탑 포인트. 각 포인트 ≤ 2 문장.

```html
<section class="slide light" data-screen-label="04 베스트 3-포인트">
  <p class="eyebrow">베스트 결과</p>
  <h2 class="h-xl">세 가지 채널이 결과를 만들었습니다.</h2>
  <div class="pt-grid">
    <div class="pt">
      <h3>인스타 릴스</h3>
      <p>윌리 발매 카운트다운 모션 영상 240만 조회수. 좋아요 +18만, 저장 +6만.</p>
    </div>
    <div class="pt">
      <h3>성수 팝업</h3>
      <p>2주 운영 누적 방문 4,800명, 회원 가입 +2,140명, 오프라인 매출 0.42억.</p>
    </div>
    <div class="pt">
      <h3>인플루언서 12건</h3>
      <p>앰배서더 코디 콘텐츠 평균 ROAS 4.2배. 키 인플루언서 1건 GMV 0.18억 견인.</p>
    </div>
  </div>
</section>
```

## Layout 5 — 파이프라인 (숫자 단계)

캠페인 / 시즌 진행 / 발주 흐름. 최대 4 단계. 더 필요하면 두 슬라이드로 분리.

```html
<section class="slide dark" data-screen-label="05 파이프라인">
  <p class="eyebrow">캠페인 단계</p>
  <h2 class="h-md">4단계로 진행했습니다.</h2>
  <div class="pipeline">
    <div class="step">
      <span class="nb">01</span>
      <h3>티저</h3>
      <p>5월 1일 자사몰 메인 + 릴스 모션 영상 공개.</p>
    </div>
    <div class="step">
      <span class="nb">02</span>
      <h3>사전예약</h3>
      <p>5월 10일 회원 전용 사전예약 오픈. 24시간 내 매진 SKU 3종.</p>
    </div>
    <div class="step">
      <span class="nb">03</span>
      <h3>전체 발매</h3>
      <p>5월 15일 자사몰·무신사·29CM 동시 발매.</p>
    </div>
    <div class="step">
      <span class="nb">04</span>
      <h3>팝업 + 인플루언서</h3>
      <p>5월 22일 성수 팝업 오픈 + 12건 인플루언서 콘텐츠 동시 송출.</p>
    </div>
  </div>
</section>
```

## Layout 6 — 빅쿼트 / 풀쿼트

`hero light center`. 인용문 하나, 어트리뷰션 하나. 셀럽·인플루언서·매거진 에디터 실명 권장.

```html
<section class="slide hero light center" data-screen-label="06 풀쿼트">
  <div class="quote-mark">"</div>
  <p class="quote-text">와키윌리는 위트 있는 K-아이돌 무드를 누구보다 정확하게 만듭니다. 윌리 캐릭터는 일상으로 가져갈 수 있는 IP의 좋은 예입니다.</p>
  <p class="quote-author">— 김단정, 에디터 · Dazed Korea</p>
</section>
```

## Layout 7 — Before / After (비교)

두 컬럼, 같은 모양, 대비되는 상태. 컬럼을 꾸미지 마세요 — 대비는 카피와 한쪽을 액센트 컬러로 표시하는 것에서 나옵니다.

```html
<section class="slide light" data-screen-label="07 Before / After">
  <p class="eyebrow">캠페인 전후</p>
  <h2 class="h-md">캐릭터 IP 도입 전과 후, 회원 매출 비중이 바뀌었습니다.</h2>
  <div class="ba-grid">
    <div class="ba-col">
      <p class="ba-label">Before · 26SS</p>
      <h3>회원 매출 비중 32%, 신규 회원 +1,400명.</h3>
      <p>채널 의존도가 높고 자사몰 회원 락업이 약한 구조. 시즌 종료 후 캐리오버 어려움.</p>
    </div>
    <div class="ba-col">
      <p class="ba-label" style="color: var(--accent);">After · 27SS</p>
      <h3>회원 매출 비중 54%, 신규 회원 +4,820명.</h3>
      <p>윌리 캐릭터 IP가 회원 사전예약 트래픽을 만듦. 자사몰 GMV +56% YoY, 카카오 채널 친구 추가 +1.8만.</p>
    </div>
  </div>
</section>
```

## Layout 8 — 마무리 / CTA

`hero dark center` 또는 `hero light center`. 요청 한 문장, 보조 한 줄. 청중이 기억하고 떠납니다.

```html
<section class="slide hero dark center" data-screen-label="08 다음 시즌 방향">
  <div class="eyebrow">다음 시즌 IMC 방향</div>
  <h2 class="h-hero">27FW는 윌리의 친구를 데려옵니다.</h2>
  <p class="lead">캐릭터 IP 시즌2 캡슐 + 글로벌 인플루언서 3건 + 일본 팝업 1회. 시즌 GMV 18억 목표.</p>
</section>
```

---

## 기본 아크

**6슬라이드 IMC 결과 (최소):**
1. `hero light center` — 표지 (Layout 1)
2. `light`            — 캠페인 개요 (Layout 2)
3. `hero dark center` — 빅스탯 (Layout 3)
4. `light`            — 베스트 3-포인트 (Layout 4)
5. `hero light center`— 풀쿼트 (Layout 6)
6. `hero dark center` — 다음 시즌 방향 (Layout 8)

**10슬라이드 콜라보 제안 내러티브:**
1. `hero light center` — 표지 (브랜드 + 콜라보 파트너)
2. `light`            — 콜라보 배경 / 시너지
3. `hero dark center` — 빅스탯 (양사 합산 도달 수)
4. `light`            — 베스트 3-포인트 (양사 강점)
5. `dark`             — 파이프라인 (콜라보 일정)
6. `hero light center`— 풀쿼트 (양사 대표 메시지)
7. `light`            — Before / After (단독 vs 콜라보 시뮬레이션)
8. `hero dark center` — 빅스탯 2 (예상 GMV)
9. `light`            — 팀 / 협업 구조
10. `hero dark center`— 제안 (계약 조건)

레이아웃 후, 클래스 리스트를 시퀀스로 읽어보세요 — `light dark light dark`가 교대로 나타나야 하고, 같은 테마 블록이 나오면 안 됩니다.

## K-패션 시나리오별 권장 아크

| 시나리오 | 추천 슬라이드 | 핵심 슬라이드 |
|---|---|---|
| **IMC 캠페인 결과 보고** | 6 | 표지 / 개요 / 빅스탯 / 3-포인트 / 풀쿼트 / 다음 방향 |
| **콜라보 제안서** | 8~10 | 표지 / 시너지 / 빅스탯 / 3-포인트 / 파이프라인 / 풀쿼트 / 시뮬레이션 / 제안 |
| **시즌 합본 (요약)** | 12~15 | 표지 / 컨셉 / 라인업 / 핵심 KPI / 캠페인 / 결산 / 다음 시즌 |
| **신규 카테고리 런칭 제안** | 8 | 표지 / 시장 분석 / 차별화 / 라인업 미리보기 / 시뮬레이션 / 일정 / 다음 단계 |
