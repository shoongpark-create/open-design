# K-패션 앱 온보딩 — 3번째 스크린 레이아웃 패턴

이 스킬의 1·2번 스크린(스플래시 / 밸류프롭)은 `assets/template.html`에 고정 구조로 들어있습니다. **변형은 주로 3번째 스크린**에서 발생합니다 — 사인인이냐, 스타일 취향 진단이냐, 다국어 선택이냐.

**작업 흐름**: 아래 4개 패턴 중 하나를 골라, `<div class="phone phone-3">` 안의 `.phone-body` 내부를 통째로 교체하세요. 시드의 `<div class="statusbar">`, `<div class="phone-top">`, `<div class="home-indicator">`는 절대 건드리지 마세요.

OpenDesign 환경에서는 `data-od-id` 속성을 추가해 인라인 코멘트 모드를 사용할 수 있습니다. 그 외 환경에서는 일반 `id` 속성으로 대체 가능합니다.

## 클래스 인벤토리

> `phone-body` `phone-top` `skip` `hero` `art` `copy` `pager` `cta` `cta.accent` `signin-options` `opt` `opt.kakao` `opt.apple` `opt.naver` `opt.email` `glyph` `terms` `chip-grid` `chip` `chip.on` `num`

이 목록에 없는 클래스가 필요하면 시드의 `<style>` 블록에 먼저 정의하세요.

---

## 패턴 A — 사인인 (한국 표준, 카카오 첫 번째)

가장 보편적. 자사몰 앱, 멤버십 라운지 앱, 정기배송 앱 모두 기본값. 카카오 → Apple → 네이버 → 이메일 순서가 한국 표준.

K-패션 활용: **마뗑킴 자사몰**, **무신사 스탠다드**, **시야쥬 자사몰**, **사일런트 단톤** — 멤버십 우선 진입 톤.

```html
<div style="padding: 18px 0 6px;" data-od-id="copy-3">
  <h2 style="font-family: var(--font-display); font-size: 28px; margin: 0 0 8px; letter-spacing: -0.01em; line-height: 1.1; font-weight: 700;">자리를 마련해 두었어요.</h2>
  <p style="margin: 0; color: var(--muted); font-size: 14.5px;">기기 간 위시리스트와 주문 내역이 함께. 알림은 회원님이 원할 때만.</p>
</div>

<div class="signin-options" data-od-id="signin-options">
  <div class="opt kakao"><span class="glyph">K</span>카카오로 시작하기</div>
  <div class="opt apple"><span class="glyph"></span>Apple로 계속하기</div>
  <div class="opt naver"><span class="glyph">N</span>네이버로 계속하기</div>
  <div class="opt email"><span class="glyph">@</span>이메일로 계속하기</div>
</div>

<div style="flex: 1;"></div>
<div class="terms">계속하면 <a>이용약관</a>과 <a>개인정보처리방침</a>에 동의하게 됩니다.</div>
<div class="pager"><span></span><span></span><span class="active"></span></div>
```

**언제 쓰나**: 자사몰·멤버십 일반. 신규 회원 가입 흐름이 명확하고, 카카오톡 연동을 적극 활용하는 브랜드.

**바꾸는 부분**: 헤드라인 카피(브랜드 톤), CTA 라벨(`카카오로 시작하기` vs `카카오로 가입`).

---

## 패턴 B — 스타일 취향 진단 (취향 키워드 선택)

사용자가 좋아하는 무드/컬러/실루엣 키워드를 2~6개 선택. 매칭 룩 큐레이션을 사용하는 디자이너 브랜드(마르디, 키르시, 아더에러)에서 자주 등장.

K-패션 활용: **마르디 메크르디** (좋아하는 꽃/컬러 패턴), **키르시** (스타일 키워드 키치/베이직/스트릿), **무신사 스탠다드** (사이즈 + 핏 선호도).

```html
<div style="padding: 14px 0 4px;" data-od-id="copy-3">
  <p class="num" style="margin: 0 0 4px; font-size: 11px; letter-spacing: 0.16em; color: var(--muted); text-transform: uppercase;">STEP 2 OF 4</p>
  <h2 style="font-family: var(--font-display); font-size: 26px; margin: 0 0 6px; letter-spacing: -0.01em; line-height: 1.15; font-weight: 700;">당신의 스타일을 알려주세요.</h2>
  <p style="margin: 0; color: var(--muted); font-size: 14px;">선호하는 무드 3가지를 골라주세요. 27SS 신상 중에서 가장 맞는 룩을 추천해 드립니다.</p>
</div>

<div class="chip-grid" style="margin-top: 16px;" data-od-id="chip-grid">
  <div class="chip on">미니멀</div>
  <div class="chip">로맨틱</div>
  <div class="chip on">데일리</div>
  <div class="chip">스트릿</div>
  <div class="chip on">레트로</div>
  <div class="chip">컨템포러리</div>
</div>

<div style="flex: 1;"></div>
<div class="pager"><span></span><span></span><span class="active"></span></div>
<div class="cta accent">다음</div>
<div class="alt"><a>스타일 진단 건너뛰기</a></div>
```

**언제 쓰나**: 매칭 룩 추천, 큐레이션이 핵심인 디자이너 브랜드. 가입 직후 곧바로 추천 룩 페이지로 진입시킬 때.

**바꾸는 부분**: 칩 라벨 6~8개(브랜드 무드 키워드), STEP 표시(`STEP 2 OF 4` 등), 활성 칩 개수(2~4개 권장).

---

## 패턴 C — 다국어 + 사인인 (글로벌 톤)

KR/EN 우선 선택 후 사인인. 글로벌 출시한 디자이너 브랜드(아더에러, 마르디 메크르디 글로벌 도메인) 또는 무신사 글로벌에서 사용.

K-패션 활용: **아더에러 글로벌**, **마르디 메크르디 .com**, **무신사 글로벌 (musinsa.com/en)**.

```html
<div style="padding: 14px 0 8px;" data-od-id="copy-3">
  <h2 style="font-family: var(--font-display); font-size: 26px; margin: 0 0 4px; letter-spacing: -0.01em; line-height: 1.15; font-weight: 700;">Choose your language.</h2>
  <p style="margin: 0; color: var(--muted); font-size: 14px;">언어를 선택해주세요. 가격은 자동으로 현지 통화로 표시됩니다.</p>
</div>

<div class="signin-options" style="margin-top: 14px;" data-od-id="lang-options">
  <div class="opt" style="border-color: var(--accent); color: var(--accent); font-weight: 600;"><span class="glyph" style="background: var(--accent);">KR</span>한국어 · ₩ 원</div>
  <div class="opt"><span class="glyph" style="background: var(--ink);">EN</span>English · $ USD</div>
  <div class="opt"><span class="glyph" style="background: var(--ink);">JP</span>日本語 · ¥ JPY</div>
  <div class="opt"><span class="glyph" style="background: var(--ink);">ZH</span>中文 · ¥ CNY</div>
</div>

<div style="flex: 1;"></div>
<div class="pager"><span></span><span></span><span class="active"></span></div>
<div class="cta">다음 — 사인인</div>
```

**언제 쓰나**: 글로벌 도메인 운영 브랜드. 한국 회원과 해외 회원이 같은 앱을 쓰는 경우.

**바꾸는 부분**: 활성 언어 1개, 통화 표기, 우선 노출 4개 언어. CTA를 `Continue with KR` 같은 영문으로 바꿔도 됨.

---

## 패턴 D — 알림 권한 + 카카오톡 채널 친구추가

신규 가입 직후 카카오톡 알림톡 + 푸시 알림 권한을 동시에 받는 패턴. CRM 강화 브랜드(와키윌리, 무신사 스탠다드, 자사몰 멤버십 풀가동 브랜드)에서 등장.

K-패션 활용: **와키윌리 캐릭터 팬덤** (알림톡 캠페인 빈도 높음), **무신사 스탠다드** (사이즈 알림·재입고 알림 필수), **사일런트 단톤** (시즌 사전예약 알림).

```html
<div style="padding: 18px 0 6px;" data-od-id="copy-3">
  <h2 style="font-family: var(--font-display); font-size: 26px; margin: 0 0 6px; letter-spacing: -0.01em; line-height: 1.15; font-weight: 700;">알림을 받아볼까요?</h2>
  <p style="margin: 0; color: var(--muted); font-size: 14px;">사전예약 오픈, 재입고, 멤버 단독 혜택을 가장 먼저 받아보실 수 있어요. 언제든 끌 수 있습니다.</p>
</div>

<div class="signin-options" style="margin-top: 14px;" data-od-id="notif-options">
  <div class="opt" style="border-color: var(--accent); justify-content: space-between;">
    <span style="display: inline-flex; align-items: center; gap: 12px;">
      <span class="glyph" style="background: #fee500; color: #3c1e1e;">K</span>
      <span><b style="display: block; color: var(--ink); font-weight: 600;">카카오톡 알림톡</b><small style="color: var(--muted); font-size: 12px;">사전예약 · 입고 · 단독 쿠폰</small></span>
    </span>
    <span class="num" style="font-size: 11px; color: var(--accent); letter-spacing: 0.1em;">ON</span>
  </div>
  <div class="opt" style="justify-content: space-between;">
    <span style="display: inline-flex; align-items: center; gap: 12px;">
      <span class="glyph">P</span>
      <span><b style="display: block; color: var(--ink); font-weight: 600;">앱 푸시 알림</b><small style="color: var(--muted); font-size: 12px;">관심 상품 · 위시리스트</small></span>
    </span>
    <span class="num" style="font-size: 11px; color: var(--muted); letter-spacing: 0.1em;">OFF</span>
  </div>
</div>

<div style="flex: 1;"></div>
<div class="pager"><span></span><span></span><span class="active"></span></div>
<div class="cta accent">알림 받기 시작</div>
<div class="alt"><a>나중에 설정</a></div>
```

**언제 쓰나**: 알림톡·푸시 운영이 핵심인 브랜드. 사전예약 우선권을 강조해 알림 권한 수락률을 높이는 패턴.

**바꾸는 부분**: 카카오톡 채널명, 알림 카테고리 라벨, ON/OFF 토글 상태(기본값 ON 권장).

---

## 브리프에서 패턴 선택하기

| 브리프 표현 | 사용 |
|---|---|
| 자사몰 일반, 멤버십 가입, 카카오 사인인 | **A — 사인인** |
| 스타일 추천, 취향 진단, 매칭 룩, 큐레이션 | **B — 스타일 취향 진단** |
| 글로벌, 다국어, 해외 판매, .com | **C — 다국어 + 사인인** |
| 알림톡, 푸시, CRM 강화, 사전예약 우선권 | **D — 알림 권한** |

여러 개가 맞으면 **3번째 스크린에서 사용자가 취하는 메인 액션** 한 가지에 집중하세요. 한 화면에 사인인 + 스타일 진단 + 알림 권한을 모두 넣지 마세요.

---

## 1·2번 스크린 변형 (참고)

대부분의 경우 시드의 기본 1·2번 스크린(스플래시 / 회원 사전예약 안내)을 그대로 두고 카피만 교체합니다. 단, 다음 케이스에는 1·2번 스크린의 히어로 아트도 교체합니다.

- **시즌 키비주얼 변경 시**: 1번 스크린의 `<svg class="art">`를 시즌 KV SVG로 교체
- **캐릭터 IP 브랜드 (와키윌리, 마르디)**: 2번 스크린의 히어로 영역에 캐릭터/꽃 일러스트
- **다국어 우선 브랜드 (아더에러)**: 1번 스크린의 카피를 영문 + 한국어 병기 (`Postmodernism, daily. / 왜곡된 일상, 새로운 시선.`)

**디스플레이 폰트 권장**:

| 브랜드 톤 | 권장 `--font-display` |
|---|---|
| 미니멀 (마뗑킴, 무신사 스탠다드) | `--font-display-clean` (Pretendard Variable 굵게) |
| 로맨틱 (마르디 메크르디, 시야쥬) | `--font-display-romance` (Hahmlet) |
| 컨셉추얼 (아더에러) | `--font-display-clean` 또는 영문 디스플레이 (Instrument Serif) |
| 위트·팬덤 (와키윌리, 키르시) | Bagel Fat One, Black Han Sans (시드에 토큰 추가 필요) |
