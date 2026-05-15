# 컴포넌트 매뉴얼 (Components)

guizang-ppt 스킬의 컴포넌트 매뉴얼. CSS·HTML 구조는 원본 `marketing/guizang-ppt/references/components.md`와 동일. 이 K-패션 판은 **사용 시 K-패션 카피 가이드**만 추가.

상세 컴포넌트 코드는 원본 참조. 아래는 K-패션 등록(register) 적용 가이드.

---

## 1. 폰트 시스템

### 디스플레이 (대제목·부제·매니페스토)
- **한글**: Hahmlet, Grandiflora One, Noto Serif KR (브랜드 톤 따라)
- **영문**: Playfair Display, Source Serif 4
- 변수: `--serif-zh` (한글), `--serif-en` (영문)

### 본문 (리드·body)
- **한글**: Pretendard Variable (K-패션 표준), Noto Sans KR
- **영문**: Inter, system fonts
- 변수: `--sans-zh` (한글 + 영문 혼용)

### 메타 (kicker·foot·chrome·라벨·LOT·SKU)
- **모노**: IBM Plex Mono
- 변수: `--mono`

### K-패션 사용 패턴
- 시즌 표기 (27SS / 26FW), SKU 코드 (`27SS-W001`), LOT 번호 (`LOT-27SS-W023`) → 항상 `--mono`
- 한글 대제목은 5자 이하 + `white-space:nowrap` (한 글자 한 줄 방지)
- 영문 단어가 5자 초과면 줄바꿈 가능, 한글은 압축

---

## 2. 컬러 시스템

5개 테마 프리셋만 사용 (`references/themes.md` 참조). 자유 hex 금지.

### 시즌·캠페인 강조 컬러
- 본 스킬의 5개 테마는 **베이스 톤**
- 시즌 시그니처 (와키 RED, 27SS BLOOM, 26FW EMBER 등)는 별도 액센트로 사용
- 액센트 변경은 `tweaks` 스킬의 `ACCENT_PRESETS` 통해 별도 오버라이드

### 사용 위치
- 메인 잉크 (`--ink`): 본문, 대제목, 일반 텍스트
- 페이퍼 (`--paper`): 배경
- 잉크 틴트 (`--ink-tint`): 카드 배경, 호버 상태
- 페이퍼 틴트 (`--paper-tint`): 보조 영역, 라인

---

## 3. 그리드 시스템

### 기본 그리드 클래스
- `grid-2-7-5`: 좌 20% / 우 50% / 여백 (좌문 우상 레이아웃용)
- `grid-2-6-6`: 좌 16% / 양쪽 42% (Before/After)
- `grid-2-8-4`: 좌 16% / 우 66% (도판+사이드 텍스트)
- `grid-3-3`: 50:50
- `grid-3` / `grid-4` / `grid-6`: 3·4·6 균등 분할

### K-패션 사용 패턴
- 데이터 대자보 (시즌 KPI 6종): `grid-6`
- BTA 라인업 비교: `grid-3-3`
- 26SS vs 27SS: `grid-2-6-6`
- 룩 4장 비교: `grid-4` 또는 이미지 그리드 골격

---

## 4. Stat-card (데이터 카드)

K-패션 사용 패턴:

```html
<div class="stat-card">
  <div class="stat-label">정상판매율 목표</div>
  <div class="stat-nb">75%</div>
  <div class="stat-note">26SS 67% → +8pp</div>
</div>
```

- `stat-label`: 영문 모노 + 한글 짧은 명사구 ("총 SKU", "1차 발주 PCS", "사입금액")
- `stat-nb`: 큰 숫자 + 단위 (`80 SKU`, `7.2 억`, `75%`, `24,500 PCS`)
- `stat-note`: 부연 ("UNI 42 + WOMEN 38", "+18% YoY", "사입가율 28%")

### 한국 단위 사용
- 통화: 원 / 만원 / 억 (`7.2억`, `12.4억`)
- 수량: 장 / PCS (`24,500 PCS`)
- 비율: % / pp (`75%`, `+8pp`)
- 변동: YoY / QoQ / MoM (`+18% YoY`)

---

## 5. Pipeline (단계 흐름)

K-패션 사용 패턴:

```html
<div class="pipeline-section">
  <div class="pipeline-label">WOMEN · 38 SKU · BTA 25/55/20</div>
  <div class="pipeline">
    <div class="step">
      <div class="step-nb">01</div>
      <div class="step-title">Basic</div>
      <div class="step-desc">캐리오버 핏 · 9 SKU</div>
    </div>
    ...
  </div>
</div>
```

- `pipeline-label`: 라인 / 단계 그룹 명 (WOMEN · UNI · 발주 단계 등)
- `step-nb`: 번호 (01, 02, ...)
- `step-title`: 영문 짧은 단어 (Basic, Trend, Accent, Distribute)
- `step-desc`: 한글 명사구 ("캐리오버 핏 · 9 SKU")

---

## 6. Callout (인용 / 메시지)

```html
<div class="callout">
  "조금 단정해도, 충분히 와키답다."
  <div class="callout-src">— 디자인실장 김도하</div>
</div>
```

K-패션 인용 출처:
- "— 디자인실장 김도하"
- "— 27SS 시즌 컨셉 보드"
- "— 마뗑킴 대표 김다인 인스타그램"
- "— 무신사 파트너센터 가이드"

---

## 7. Chrome (상단 메타) + Foot (하단 푸터)

K-패션 사용 패턴:

```html
<!-- Chrome (상단) -->
<div class="chrome">
  <div>27SS Season Recap · 2026.05.14</div>
  <div>Vol.01</div>
</div>

<!-- Foot (하단) -->
<div class="foot">
  <div>Page 03 · 시즌 컨셉</div>
  <div>— · —</div>
</div>
```

- 모노 폰트, 작은 사이즈, 자간 `.18em` 이상
- Chrome 좌측: 발표 정보 (받는 사람, 일자, 챕터)
- Chrome 우측: 페이지 또는 Vol 번호
- Foot: 페이지 번호 + 짧은 설명

---

## 8. 아이콘

**Lucide 아이콘 사용. 이모지 금지.**

K-패션에서 자주 쓰는 아이콘:
- `shopping-bag` — 매장·이커머스
- `palette` — 컬러 / 디자인
- `tag` — SKU / 라벨
- `truck` — 입고 / 물류
- `factory` — OEM 공장
- `trending-up` — 매출 / 성장
- `users` — 멤버십 / 팬덤
- `sparkles` — 신상 / 콜라보
- `crown` — VIP / 한정판

```html
<i data-lucide="shopping-bag" class="ico-md"></i>
```

---

## 9. 이미지 처리

### 룩 컷 (4:5 또는 3:4)
- 인물 풀바디 컷, 모델 시선 정면 권장
- 상의 풀샷, 하의는 컷 가능
- 컬러웨이 일관 (같은 SKU 다른 컬러 = 동일 프레임)

### 매장 라운드 (16:10 또는 16:9)
- 매장 전경, 디스플레이 컷
- 자연광 우선

### 키비주얼 (16:9)
- 시즌 캠페인 메인 비주얼
- 풀스크린 또는 풀 width

### 디테일 컷 (1:1 또는 3:2)
- 소재 디테일, 트림, 라벨
- 작은 도판으로 사이드 텍스트와 함께 사용

---

## 10. 텍스트 위계

큰 순서:
1. `h-hero` (디스플레이 세리프, 최대 글자, 표지·챕터 막)
2. `h-xl` (세리프, 본문 페이지 대제목)
3. `h-sub` (세리프, 부제)
4. `h-md` (세리프, 중간 제목)
5. `lead` (산세리프 큰 글씨, 리드 문장)
6. `body` (산세리프 본문)
7. `kicker` (모노, 짧은 라벨)
8. `meta-row` / `chrome` / `foot` (모노, 메타데이터)

**규칙**: 한 페이지에 `h-hero` 또는 `h-xl` 중 하나만 사용. 둘 다 쓰면 위계 충돌.
