---
name: tweaks
description: |
  K-패션 산출물(룩북 페이지·자사몰 메인·콜라보 랜딩·시즌 합본 덱 등)을
  **시즌별/캠페인별 디자인 토큰 오버라이드 패널**과 함께 묶어 사이드 패널의
  실시간 토글로 시즌 컬러 팔레트·타이포 스케일·여백·라이트/다크·모션을
  즉시 전환할 수 있게 해주는 스킬입니다. 27SS · 26FW · 마뗑킴 콜라보 ·
  와키윌리 단독 등 다양한 시즌·캠페인 토큰을 미리 정의해두면, 디자이너·
  MD가 룩북 페이지 한 장으로 변종을 확인하고 LOCK 전 의사결정을 빠르게
  내릴 수 있습니다. 변경값은 localStorage에 영속화. 사용자가 "시즌 토큰
  오버라이드", "콜라보 컬러 적용", "라이브 디자인 노브", "디자인 변종 확인",
  "tweaks", "토큰 패널"을 언급하면 활성화하세요.
triggers:
  - "tweaks"
  - "토큰 패널"
  - "시즌 토큰 오버라이드"
  - "콜라보 토큰"
  - "라이브 디자인 노브"
  - "디자인 변종"
  - "컬러 팔레트 적용"
  - "variants"
  - "live controls"
  - "디자인 노브"
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  upstream: "https://github.com/alchaincyf/huashu-design"
  preview:
    type: html
    entry: index.html
  design_system:
    requires: false
  example_prompt: "와키윌리 27SS 룩북 페이지를 tweaks 패널로 감싸주세요. 시즌 컬러 팔레트 5종 (27SS BLOOM / 26FW EMBER / 와키x마뗑킴 콜라보 PASTEL / 와키 시그니처 RED / 모노 GRAPHITE), 타이포 스케일 3단, 여백 3단, 라이트/다크 토글, 모션 3단. 변경값은 localStorage에 영속화. 디자인실장이 룩북 보면서 컬러 락 LOCK 전 결정 내릴 수 있게."
---

# 패션 시즌·캠페인 토큰 오버라이드 패널 스킬

K-패션 산출물에 **시즌·캠페인 토큰 오버라이드 사이드 패널**을 추가해, 디자이너·MD가 동일한 룩북·자사몰·콜라보 페이지를 다양한 시즌 컬러 팔레트와 톤으로 즉시 미리보기할 수 있게 만드는 스킬입니다. *huashu-design*의 tweak 패턴을 K-패션 시즌 운영에 맞춰 재해석한 버전.

## 만드는 것

두 레이어로 구성된 단일 HTML 파일.

1. **스테이지** — 원본 산출물(룩북 페이지 / 자사몰 메인 / 콜라보 랜딩 / 시즌 합본 덱)의 모든 시각 결정을 CSS 커스텀 프로퍼티로 재키잉: `--accent`, `--scale`, `--density`, `--mode`, `--motion`.
2. **패널** — 시즌·캠페인 토큰을 토글하는 우측 사이드바(또는 좁은 화면에서 슬라이드인 드로어). 변경값은 산출물 식별자를 키로 `localStorage`에 영속화.

사용자는:

- 페이지 열면 저장된 시즌 톤(또는 기본값)으로 렌더링된 스테이지를 봅니다.
- 패널에서 시즌 컬러 / 타이포 스케일 / 여백 / 라이트·다크 / 모션을 조정하면 스테이지가 즉시 반영(재렌더 없음).
- <kbd>T</kbd> 키로 패널 토글, <kbd>R</kbd> 키로 리셋.
- 새로고침해도 모든 선택이 유지.

## 사용 시점 (K-패션 맥락)

- **컬러 락 LOCK 직전**: 디자인실장과 MD가 동일한 룩북 페이지를 27SS 시그니처 컬러 / 26FW 캐리오버 / 콜라보 톤 세 가지로 토글하며 마지막 결정을 빠르게 내리고 싶을 때
- **콜라보 제안서 단계**: 마뗑킴×와키윌리 / 와키윌리×아더에러처럼 두 브랜드의 시그니처 톤을 동일한 페이지에서 비교하여 협의할 때
- **자사몰 시즌 전환 시뮬레이션**: 같은 메인 페이지에서 26FW → 27SS 톤 전환을 미리 보고 캠페인 락업 결정
- **외부 발표/투자자 미팅**: 동일한 IR 자료를 다크/라이트로 즉석에서 토글하며 발표

## 사용하지 않을 시점

- 1회용 산출물 (예: 발주서·거래명세서 — 토큰 변경이 의미 없음)
- 컬러·여백 비율이 핵심 가치인 산출물 (예: 컬러 스토리 — 변경 시 의미 손실)

## 5가지 표준 노브 — K-패션 맥락 재해석

> 산출물에 어울리는 부분 집합만 선택. 5개 모두 노출은 과잉. 3개가 sweet spot.

### 1. `--accent` — 시즌 시그니처 컬러 / 캠페인 톤

자유 컬러 피커는 금지. **K-패션 시즌·캠페인 프리셋 5~8종**을 큐레이션해 노출.

예시 프리셋 (사용자 브랜드에 맞춰 교체):

```js
const ACCENT_PRESETS = [
  { id: '27ss-bloom',     val: '#c96442', label: '27SS BLOOM (Rust)' },
  { id: '26fw-ember',     val: '#7a3f2a', label: '26FW EMBER (Wine)' },
  { id: 'wacky-signature',val: '#d32a2a', label: '와키 시그니처 RED' },
  { id: 'collab-pastel',  val: '#e8b8c4', label: '와키x마뗑킴 PASTEL' },
  { id: 'mono-graphite',  val: '#3a3a3a', label: '모노 GRAPHITE' },
  { id: 'mardi-floral',   val: '#7a3f6a', label: '마르디 FLORAL' },
  { id: 'ader-cobalt',    val: '#2c4d8e', label: '아더 COBALT' },
];
```

산출물의 모든 액센트 영역(보더·링크·풀쿼트 룰·CTA·바이라인 컬러 등)이 `var(--accent)`로 통일.

### 2. `--scale` — 타이포 스케일 (Compact / Normal / Generous)

3단 — 0.85 / 1.0 / 1.15. 모든 `font-size`가 `calc(... * var(--scale))`로 곱연산.

±15% 이상 가지 마세요 — 한글 본문 길이와 그리드 라인이 무너집니다. 한글 디스플레이 폰트(Hahmlet, Grandiflora One 등)는 라틴보다 시각 무게가 큽니다.

### 3. `--density` — 여백 (Tight / Normal / Roomy)

3단 — 0.75 / 1.0 / 1.4. 모든 `padding` / `gap` / `margin`이 `calc(... * var(--density))`. 매거진 톤(여백 Roomy) vs SNS 톤(여백 Tight) 비교에 유용.

가장 영향 큰 노브 — 가장 부서지기 쉬움. 모든 레이아웃 컨테이너의 베이스 여백을 커스텀 프로퍼티로 선언해두세요.

### 4. `--mode` — 라이트 / 다크

2단 토글. `data-mode="light" | "dark"`. K-패션 자사몰은 라이트가 기본, 콜라보 랜딩·아더에러 톤은 다크 선호.

이미 미디어 쿼리 기반 다크 모드가 있다면 `data-attr` 버전으로 대체 — 사용자 선택이 OS 설정보다 우선.

### 5. `--motion` — Off / Subtle / Lively

3단 — 0 / 1.0 / 1.6. `--motion-mult` 변수로 모든 `transition-duration` / `animation-duration` 스케일.

- *Off* — 모션 비활성 (장식용 애니메이션도 정지). 정적 매거진 톤.
- *Subtle* — 기본 시그널 애니메이션.
- *Lively* — 콜라보 랜딩·발매 캐러셀처럼 시선을 끄는 톤.

`prefers-reduced-motion` 존중 — 사용자 OS 설정이 reduce면 기본값 Off.

## 구현 프리미티브

`assets/wrap.html`에 패널 + 바인딩 브리지가 inert 템플릿으로 포함됩니다. 작업 순서:

1. 사용자 기존 산출물 HTML 확보.
2. 액센트 / 모드 / 여백 / 스케일 / 모션을 커스텀 프로퍼티로 리프트 (`#hex` / `Npx` / `Nrem` 검색해서 변환).
3. `wrap.html` 안 마크된 영역에 산출물 내용 붙여넣기.
4. `wrap.html`의 `ACCENT_PRESETS` 배열을 **K-패션 시즌·캠페인 프리셋**으로 교체.
5. `STORAGE_KEY`를 `tweaks-<artifact-slug>`로 고유화 (`tweaks-wackywilly-27ss-lookbook` 등).

## 작업 흐름

### Step 1 — 산출물 확보

세 가지 방법:
1. 프로젝트 파일 (예: 27SS 룩북 `index.html`)
2. 채팅에 붙여넣은 HTML
3. 이 턴에서 직접 생성한 산출물

### Step 2 — 어떤 노브를 적용할지 결정

산출물 CSS를 먼저 읽으세요. 각 노브별로 **yes / no**:

- `--accent` — yes if 액센트 컬러가 3회 이상 등장
- `--scale` — yes if 타입 중심 산출물 (룩북 텍스트 페이지, 매거진형 화보 본문, 가격 페이지)
- `--density` — yes if 여백·그리드 리듬이 있음 (자사몰 메인, 콜라보 랜딩, 시즌 덱). 운영 문서(런북·발주서)는 No
- `--mode` — yes if 라이트/다크 양쪽 톤이 유의미 (콜라보 랜딩, IR 자료). 룩북은 보통 No (시즌 톤이 정해져 있음)
- `--motion` — yes if 트랜지션/애니메이션이 있음 (캐러셀, 발매 페이지). 정적 보고서는 No

기본: **3개 노브가 sweet spot.**

### Step 3 — 하드코딩 값을 커스텀 프로퍼티로 리프트

`wrap.html`의 `<style>` 명명 규칙(`--accent`, `--scale` 등)을 그대로 사용. 산출물에서 해당 값들을 찾아 치환:

- `color: #c96442` → `color: var(--accent)`
- `font-size: 18px` → `font-size: calc(18px * var(--scale))`
- `padding: 24px 32px` → `padding: calc(24px * var(--density)) calc(32px * var(--density))`
- `transition: opacity 200ms` → `transition: opacity calc(200ms * var(--motion-mult))`

`clamp()` 또는 `vw`를 이미 쓰고 있다면 *외부* 값에 곱연산 — `clamp(...)` 안을 뜯지 마세요.

### Step 4 — wrap에 페이스트

산출물의 `<style>`과 `<body>`를 `wrap.html`의 마크된 영역에 복사. 패널 + 브리지는 그대로 유지.

### Step 5 — 루프 테스트

결과 열고, 각 노브를 최소 1번 클릭, 새로고침 후 선택이 유지되는지 확인. 노브가 레이아웃을 깨면 — *제거*하고 출시.

## 한국 K-패션 시즌·캠페인 프리셋 가이드 (참고)

| 프리셋 ID | 톤 | 사용 시점 |
|---|---|---|
| `27ss-bloom` | 봄여름 새싹 톤 (Rust / Coral) | 27SS 룩북·자사몰 |
| `26fw-ember` | 가을겨울 깊은 톤 (Wine / Burgundy) | 26FW 룩북·캠페인 |
| `wacky-signature` | 와키 시그니처 RED | 캐릭터 IP 굿즈, 한정판 |
| `collab-pastel` | 콜라보 페미닌 톤 (Powder Pink) | 마뗑킴·마르디 콜라보 |
| `mono-graphite` | 미니멀 그래파이트 | 베이직 라인, IR 자료 |
| `ader-cobalt` | 아더에러 톤 (Cobalt Blue) | 아더 콜라보 |
| `mardi-floral` | 마르디 플라워 톤 (Plum) | 마르디 콜라보 |

위 프리셋은 예시. 실제 산출물은 사용자 브랜드의 실제 시즌 락 컬러로 작성하세요.

## 출력 언어 정책

사용자가 한국어로 작성하거나 브랜드/맥락이 한국 K-패션이라면, 프리셋 이름·노브 라벨·주석은 **한국 패션 비즈니스 등록(register)**을 따릅니다.

- CSS 커스텀 프로퍼티 토큰명(`--accent`, `--scale`, `--density`, `--mode`, `--motion` 등)은 영문 그대로 유지합니다. 표준 디자인 시스템 호환성 우선.
- 시즌·캠페인 프리셋 이름은 영문/한국어 혼용 허용: `27ss-bloom`, `26fw-ember`, `wacky-red`, `colab-pastel`, `mono-graphite` 등 영문 슬러그 + 한국어 설명.
- 사용자 가시 UI 라벨, 토글 캡션, 노브 설명, 적용 주석은 한국어 명사구 종결 선호: `적용`, `프리셋 전환`, `27SS 락 컬러 적용`, `owner 확인`, `룩북 페이지 토큰 오버라이드` (딱딱한 `~이다`·`~한다` 회피).
- 한국 패션 현장 영어 산업용어는 그대로 혼용: SKU·BTA·룩북·캐리오버·QR/SPOT·LOT·핏·실루엣·컬러웨이·시즌 코드(27SS/26FW)·UNI/WOMEN·S1~S4.
- 카피 예시는 K-패션 브랜드 사례 우선: 마뗑킴·마르디 메크르디·아더에러·키르시·시야쥬·와키윌리·무신사 스탠다드.

## 환경 호환성

이 스킬은 모든 LLM 환경에서 동일하게 사용할 수 있습니다. localStorage는 브라우저 표준이므로 환경 의존성 없음.

## 출력 규약

```
<artifact identifier="tweaks-<artifact-slug>" type="text/html" title="<산출물 제목> · Tweaks">
<!doctype html>
<html>...</html>
</artifact>
```

출력 앞에 한 문장 요약 ("와키윌리 27SS 룩북에 시즌 토큰 패널을 적용했습니다 — 시즌컬러 / 스케일 / 모드 3노브."). `</artifact>` 뒤 멈춤.

## 하드 규칙

- **자유 컬러 피커 금지** — 큐레이션 프리셋만. 사용자가 비추천 컬러를 고르면 결과물 망함.
- **산출물 식별자로 영속화** — `tweaks-<slug>` 키 사용. 두 산출물이 두 탭에 열려도 상태 공유 금지.
- **`prefers-reduced-motion` 존중** — OS 설정이 reduce면 모션 기본값 Off.
- **단일 파일** — 외부 CSS/JS/폰트 금지. 패널 + 브리지 인라인.
- **좁은 화면(< 720px)에서 기본 숨김** — 우상단 T 버튼으로 드로어 슬라이드인.
- **노브 최대 5개**. 3개가 sweet spot. K-패션 룩북은 보통 `accent / scale / density` 3개.
