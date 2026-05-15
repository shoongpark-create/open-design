# 자체 검수 · replit-deck (K-패션)

`<artifact>` emit 전 묵묵히 실행. P0에서 실패하면 회귀(regression) — 고친 후 ship. P1은 emittable이지만 디자이너에게 "AI-generated"로 보임 — pass가 두 번 남았으면 수정. P2는 폴리시.

각 블록을 1~5로 자가 점수. ≤ 3이면 그 차원을 다시 작업.

---

## P0 — 하드 게이트 (협상 불가)

### 테마 락인

- [ ] `<body data-theme="…">`이 enum의 ONE 값으로 설정.
- [ ] 개별 슬라이드에 `style="--bg: …"` 또는 `style="--accent: …"` 없음 (grep으로 확인).
- [ ] `<section>` 내부에 `<style>` 블록 없음.
- [ ] Google / Adobe에서 import한 폰트 없음. 모든 폰트는 테마의 `--font-*` 스택을 통해 resolve.

```
grep -nE 'style="--(bg|fg|accent|surface|border|muted)' index.html && echo FAIL
grep -nE '<style' index.html | wc -l   # 기대값 1
grep -nE '@import|<link.*font' index.html && echo FAIL
```

### 구조

- [ ] 모든 `<section>`이 `class="slide"` 보유 (선택적 `center` 포함).
- [ ] 모든 `<section>`이 유니크 `data-screen-label="NN 이름"` 보유 (한국어 라벨 권장).
- [ ] 덱 크롬이 정확히 한 번 존재: `.deck-progress`, `.deck-counter`, `.deck-hint`.
- [ ] nav `<script>`가 씨드에서 변경되지 않음.

### 정직성

- [ ] 만든 매트릭 금지. 표시된 모든 숫자는 사용자 브리프에서 옴, 또는 illustrative로 라벨.
- [ ] 미완 콘텐츠는 `—` 또는 muted 직사각형 사용, lorem이나 "10× 빠름" 같은 AI 매트릭 금지.
- [ ] 스톡 SaaS 이모지 (🚀 📊 ✨) 금지.

### K-패션 표기

- [ ] 시즌 코드 영문 표기 정확 (27SS, 26FW, 25SS).
- [ ] 판기는 한국어 (S1 판기, S2 판기), 통화는 원/억/만원, USD 없음 (국내 보고 한정).
- [ ] 채널 표기 한국 표준 (무신사 / 29CM / 자사몰 / W컨셉 / SSF샵 / 한섬몰).
- [ ] 카테고리 라벨 한국 표준 (UNI / WOMEN / 상의 / 하의 / 아우터 / 원피스 / ACC).

---

## P1 — 테이스트 게이트

### 타이포그래피

- [ ] 디스플레이 페이스가 테마와 일치:
  - `helix` / `world-*` / `bluehouse` → sans 디스플레이, 600~700.
  - `holm` / `vance` / `atlas` → 세리프 디스플레이.
  - `bevel` → Y2K 이탤릭 디스플레이 (Antonio / Bebas / Impact 폴백).
- [ ] 슬라이드당 정확히 하나의 디스플레이 패밀리. 슬라이드 중간 교체 금지.
- [ ] `.lead` 단락은 body sans, 디스플레이 페이스 아님.
- [ ] 모노는 meta-bar, eyebrow small-caps, `.num-delta`에만. 본문 카피 금지.

### 액센트 절제

- [ ] 액센트 컬러가 슬라이드당 **최대 1~2회**.
- [ ] 액센트를 다음에 절대 사용 안 함:
  - 본문 단락 텍스트,
  - 120×40px 초과 채움 박스 (bluehouse 그라데이션 카드 예외),
  - 인접 요소 다수 ("액센트 체인").
- [ ] `holm` / `atlas`에서 액센트는: 제목의 종결 마침표, em-dash 프리픽스 키커, 진행 세그먼트에만. 그 외는 의도적이지 않으면 금지.

### 레이아웃 리듬

- [ ] 6+ 슬라이드 덱: 최소 1개는 `center`, 1개는 아님.
- [ ] 3개 슬라이드 연속 시각적으로 동일하게 보이지 않음 (같은 레이아웃, 같은 밀도).
- [ ] 8+ 슬라이드: 최소 1개 "호흡" 슬라이드 — 거대한 타이틀 디바이더 또는 단일 스탯 히어로.

### 테마-특정 머스트

- [ ] **helix**: 모든 매트릭 슬라이드가 `.num` 프리미티브 사용, 커스텀 타입 아님.
- [ ] **holm**: 세리프는 헤드라인에만; meta, eyebrow, 본문은 sans + 모노.
- [ ] **vance**: 모든 슬라이드가 상단·하단 블랙 바 (`.vance-top` 2×) OR 풀-블리드 이미지 슬라이드 + 메타 오버레이.
- [ ] **bevel**: Y2K 디스플레이 페이스는 워드마크와 섹션 타이틀에만; 본문은 Inter.
- [ ] **world-dark / world-mint**: 옐로우 마커 최소 1회, 절대 본문 텍스트 컬러로 사용 안 함.
- [ ] **atlas**: 버밀리언은 ① meta dot ② 제목 종결 마침표 ③ 진행 세그먼트. 셋 다? OK. 더? 잘라내기.
- [ ] **bluehouse**: 슬라이드당 정확히 하나의 그라데이션 방향 (135° 코랄→피치 XOR 180° 라벤더→블루, 동일 카드에 둘 다 금지).

### K-패션 카피 테이스트

- [ ] **풀쿼트 어트리뷰션**: 셀럽·인플루언서·매거진 에디터 실명 권장 (Vogue Korea, W Korea, Dazed Korea, Marie Claire Korea, 1st Look). 실명 없으면 익명 표시.
- [ ] **시즌 KPI 매트릭**: 정상판매율은 60~85% 범위 (한국 패션 평균), 재고자산회전율은 카테고리별 3~20회 범위.
- [ ] **카피 톤**: 브랜드 캐릭터를 따름 (마뗑킴 미니멀 / 마르디 사랑스러운 / 아더에러 컨셉추얼 / 와키윌리 위트).

---

## P2 — 폴리시

- [ ] `.num` 값들이 `grid-6` row에서 폭 3자 이내 차이 (row가 셋트로 읽힘).
- [ ] `text-wrap: balance` 효과가 2줄 헤드라인에서 보임 (눈으로 확인).
- [ ] 페이지 카운터가 meta-bar와 `.deck-counter` 일치 (둘 다 "NN / NN").
- [ ] `holm` / `vance` / `atlas`에서 본문 크림/아이보리가 따뜻하게, 차갑지 않게. 차가우면 `--bg` 실수로 오버라이드.
- [ ] `.bh-card` (bluehouse) 외 CSS box-shadow 없음. 그 외 그림자는 SaaS 회귀.
- [ ] `border-radius`는 0 (helix/holm/vance/bevel/world-*/atlas) 또는 16~24px (bluehouse만).

---

## 5-차원 critique (silent, emit 전)

`<artifact>` 작성 전, 이 덱을 각 차원에서 1~5로 점수. 어느 하나라도 **≤ 3**이면 수정 후 재점수.

1. **Philosophy**: replit.com/slides 갤러리처럼 보이는가, 제네릭 shadcn 대시보드 아닌가?
2. **Hierarchy**: 슬라이드당 정확히 하나의 지배적 요소? 각 슬라이드의 가장 큰 것만 봐도 덱을 읽을 수 있나?
3. **Execution**: 테마가 깔끔하게 렌더링됨 — 타입 무게, 간격, 액센트 사용이 모두 테마 일관성?
4. **Specificity**: 카피가 이 프로젝트에 속함 (이름, 숫자, 날짜), 다른 어느 덱에도 살 수 있지 않음?
5. **Restraint**: 사용 가능한 것보다 더 적은 컬러 / 무게 / 아이콘을 쓰고 있는가? (예 = 좋음. "모든 걸 다 썼다" = 나쁨.)

두 번 패스는 정상. 세 번도 괜찮음. 네 번이면 테마를 잘못 골랐다는 뜻 — Step 1로 돌아가세요.

---

## Emission 계약

`</artifact>` 후에 멈추세요. 사후 코멘트 추가 금지.

```
<artifact identifier="deck-<slug>" type="text/html" title="<덱 제목>">
<!doctype html>
<html>…</html>
</artifact>
```
