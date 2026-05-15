# 품질 체크리스트 (Checklist)

이 체크리스트는 K-패션 시즌 합본 덱 / 콜라보 제안서 / IR 자료의 5회 이상 반복 출시에서 도출. 각 항목은 실제 검증된 함정. 중요도 순.

생성 전 한 번 통독, 생성 후 한 항목씩 자가 점검.

---

## 🔴 P0 · 절대 안 됨

### 0. 생성 전 필수 클래스명 검증 (가장 중요)

**현상**: `layouts.md` 골격을 새 HTML에 페이스트했더니 스타일이 전부 사라짐 — 대제목이 산세리프, 데이터 대자보 글자가 본문 크기, pipeline이 한 줄로 뭉침, 이미지가 페이지 하단으로 쌓임.

**근인**: `template.html`의 `<style>`에 해당 클래스 정의가 없어 브라우저 fallback 발생.

**대응**:
- **생성 전 반드시 `assets/template.html` Read**, `layouts.md`에서 사용할 클래스가 모두 정의됐는지 확인
- 자주 누락되는 클래스: `h-hero / h-xl / h-sub / h-md / lead / meta-row / stat-card / stat-label / stat-nb / stat-unit / stat-note / pipeline-section / pipeline-label / pipeline / step / step-nb / step-title / step-desc / grid-2-7-5 / grid-2-6-6 / grid-2-8-4 / grid-3-3 / frame / img-cap / callout-src`
- 누락된 클래스 있으면 **template.html의 `<style>`에 추가**, 페이지 inline 재정의 금지

### 1. 이모지 사용 금지

**현상**: 매거진 톤 K-패션 덱에 이모지(🎯 💡 ✅) 사용 시 즉시 톤 망가짐.

**대응**: Lucide 아이콘 라이브러리, CDN 사용:

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="shopping-bag" class="ico-md"></i>
<script>lucide.createIcons();</script>
```

K-패션 자주 쓰는 아이콘: `shopping-bag / palette / tag / truck / factory / trending-up / users / sparkles / crown / star`

### 2. 이미지는 하단만 자르기, 좌우·상단 절대 금지

**현상**: `aspect-ratio`로 이미지 늘리면, 부모 컨테이너 부족 시 쌓이거나 핵심 정보 절단 (예: 룩 컷의 모델 상의 자름).

**대응**: 이미지 컨테이너에 **고정 height + overflow hidden**, 이미지는 `object-fit:cover + object-position:top`:

```html
<figure class="frame-img" style="height:26vh">
  <img src="images/lookbook/look-01.jpg">
</figure>
```

CSS의 `.frame-img img`에 `object-position:top` 사전 설정 — 하단만 자름.

**절대 금지** (그리드 컨테이너 깨짐):
```html
<!-- 잘못된 예 -->
<figure class="frame-img" style="aspect-ratio: 16/9">...</figure>
```

**예외**: 단장 키비주얼(그리드 외) 은 `aspect-ratio + max-height` 가능 — 부모 컨테이너가 안전 영역 확보.

### 3. 라이트 페이지에 어두운 WebGL = 회색 처짐 (테마 전환 안 됨)

**현상**: 모든 light 페이지 배경이 회색 막 씌운 듯, hero light도 회색.

**근인**: JS가 slide 테마에 따라 두 canvas의 opacity 전환. deck 시작이 hero dark면, body가 `light-bg` 클래스를 안 받아 `canvas#bg-dark`가 계속 위에 노출.

**대응**:
- 템플릿의 `go()` 함수가 `classList`로 테마 추론(`light` / `dark`) — **모든 slide에 `light` 또는 `dark` 명시 필수**. 다른 커스텀 테마명 금지
- hero 페이지는 `hero light` / `hero dark`, 본문은 `light` / `dark`. `hero`만 쓰면 안 됨
- 한 deck에 반드시 **비-hero light 페이지** 1개 이상 — body가 `light-bg` 받을 기회 확보

### 4. 전체 deck이 light만, 리듬 없음

**현상**: 표지 `hero dark` 외 모든 페이지가 기본 `light` — 시각 평탄, 호흡 없음.

**근인**: `layouts.md` 골격이 기본 `light`, 페이스트만 하고 테마 조정 안 함.

**대응**:
- **생성 전 "테마 리듬 표" 작성**: 페이지별 `hero dark` / `hero light` / `light` / `dark` 명시
- 3페이지 연속 동일 테마 금지
- 8페이지 이상이면 hero dark 1개 + hero light 1개 이상 필수
- 본문 light만 또는 dark만 금지 — 양쪽 모두 사용

### 5. 한글 대제목 줄바꿈 (1자 1행)

**현상**: 한글 대제목 5자 이상이면 줄바꿈으로 1자 1행 발생.

**대응**:
- 한글 대제목 5자 이하 + `white-space:nowrap`
- 또는 명시적 `<br>`로 줄바꿈 위치 제어
- K-패션 대제목 예: "BLOOM" (5자), "단정" (2자), "27SS" (4자), "와키답다." (5자)

### 6. 폰트 역할 혼란

**현상**: 본문에 세리프, 대제목에 산세리프 → 위계 무너짐.

**대응**:
- 대제목 = 세리프 (Hahmlet, Noto Serif KR)
- 본문 = 산세리프 (Pretendard Variable, Noto Sans KR)
- 메타 = 모노 (IBM Plex Mono)
- 한 페이지에 이 세 역할 모두 등장, 역할별 폰트 일관

---

## 🟡 P1 · 강력 권장

### 7. K-패션 단위 표기 표준화

- 통화: `원` / `만원` / `억` (USD 환산 금지). 예: `7.2억`, `12,400만원`, `98,400원`
- 수량: `장` / `PCS`. 예: `24,500 PCS`, `680장`
- 비율: `%` + `pp` (percentage point). 예: `75%`, `+8pp`
- 변동: `YoY` / `QoQ` / `MoM`. 예: `+18% YoY`, `▲3pp QoQ`
- 시즌: `27SS` / `26FW` / `S1 판기` / `1차 발주`

### 8. SKU·LOT 코드 일관

- SKU: `27SS-W001` (시즌-라인-번호)
- LOT: `LOT-27SS-W001` (LOT + SKU)
- 컬러웨이: `CW01` 또는 컬러명 (`OAT`, `NAVY`, `IVORY`)
- 한 deck에서 동일 SKU의 표기가 페이지마다 다르지 않게 점검

### 9. 호칭 표준

- 직무 + 이름: "디자인실장 김도하", "MD실장 박지연"
- 부서 표기: "디자인실 / MD실 / 마케팅실 / 영업기획팀 / 생산실 / 이커머스팀"
- 외부 인용: "마뗑킴 대표 김다인", "무신사 PB MD 이수진"

---

## 🟢 P2 · 디테일

### 10. Chrome / Foot 카피 일관

- 모노 폰트, 자간 `.18em` 이상
- Chrome 좌측: 발표 정보, 우측: 페이지·Vol 번호
- Foot 좌측: `Page 03 · 시즌 컨셉`, 우측: 짧은 라벨

### 11. 인용 출처 표기

- callout, blockquote 내 인용은 반드시 출처
- 한국 패션 톤: "— 디자인실장 김도하", "— 27SS 시즌 컨셉 보드", "— 마뗑킴 인스타그램 2026.04.21"

### 12. 이미지 그리드 4장 우선

- 룩 컷 그리드는 4장 권장 (큰 이미지)
- 6장 이상은 작아져서 디테일 손실
- 12장 컬렉션 보여줄 땐 페이지 2-3으로 분할

### 13. 인쇄 / PDF 대응

- 시즌 합본 덱은 인쇄·PDF 추출 가능성 높음
- `@media print` 스타일시트 추가 권장
- 슬라이드 1개 = 1페이지 매핑

---

## 🔵 P3 · 선택

### 14. 다크모드 / 라이트모드 OS 설정

- `prefers-color-scheme` 기반 자동 전환은 본 스킬에서는 의도적 비적용
- 사용자가 발표 환경(스크린·프로젝터·인쇄)에 맞춰 테마 직접 선택

### 15. 모바일 대응

- 시즌 합본 덱은 데스크탑 발표 우선
- 모바일 뷰는 종합 미리보기 정도
- 풀 모바일 대응이 필요하면 `mobile-app` 또는 `web-prototype` 스킬 권장

---

## 자가 점검 명령어

생성 후:

```bash
# 테마 리듬 확인
grep 'class="slide' index.html

# 클래스 누락 확인
grep -o 'class="[^"]*"' index.html | sort -u

# K-패션 단위 표기 점검
grep -E '\$|USD|dollar' index.html  # 출력 없어야 함
grep -E '원|만원|억' index.html      # 출력 있어야 함
```
