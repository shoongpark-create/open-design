# 심플 덱 체크리스트

산출물을 emit하기 전에 확인하세요. P0는 반드시 통과해야 합니다.

## P0 — 반드시 통과

- [ ] **모든 `<section class="slide">`이 테마 클래스를 보유.** 각각 정확히 하나: `light`, `dark`, `hero light`, `hero dark`. 빈 `class="slide"` 금지. 빈 `class="slide hero"` 금지.
- [ ] **같은 테마 3개 이상 연속 금지.** 슬라이드 1부터 N까지 클래스를 머릿속으로 나열해서, `light light light`가 보이면 중간 슬라이드를 교체.
- [ ] **8슬라이드 이상: 최소 1개 `hero dark` + 최소 1개 `hero light`.** 길게 라이트만이면 졸리고, 길게 다크만이면 무거움.
- [ ] **디스플레이 헤드라인은 `var(--font-display)`(serif).** `.h-hero`, `.h-xl`, `.h-md`, `.quote-text`가 모두 강제 — 오버라이드 금지.
- [ ] **`:root` 밖에 raw hex 금지.** 모든 색상은 `var(--bg)` / `--fg` / `--muted` / `--border` / `--accent` / `--surface`. `:root{}` 밖에서 `#[0-9a-fA-F]{3,8}` 검색 결과 없음.
- [ ] **슬라이드당 액센트는 최대 2회.** 빅스탯 슬라이드에서는 숫자 자체가 유일한 액센트. 키커 + 버튼 + 보더 동시 사용 금지.
- [ ] **5-룰 nav 스크립트 보존.** `scroller()`를 `document.body`로 바꾸지 마세요. capture-phase 듀얼 리스너 중 하나 빼지 마세요. `scrollIntoView()` 사용 금지.
- [ ] **`scrollIntoView()` 호출 금지.** iframe 경계 깨짐.
- [ ] **모든 슬라이드에 `data-screen-label`** (예: `"01 표지"`, `"05 빅스탯"`). 채팅에서 "5번 슬라이드 편집"에 사용.
- [ ] **만든 숫자 사용 금지.** 숫자는 브리프 또는 실제 소스에서 옴. 출처 없는 "10× 빠름" / "정판율 99%" 금지.
- [ ] **이모지 아이콘 / 보라색 그라데이션 / 왼쪽 보더 액센트 둥근 박스 금지.** 안티슬롭 트리오.
- [ ] **한국 표기 채택**: 시즌 코드는 영문(27SS, 26FW), 판기는 한국어(S1 판기), 통화는 원/억/만원, 채널은 무신사/29CM/자사몰.

## P1 — 통과 권장

- [ ] **표지는 `hero light center`.** 표지를 다크로 인버트하는 건 덱 전체가 다크일 때만.
- [ ] **표지 h1 ≤ 8 단어.** 긴 표지 헤드라인은 카피의 책임, 디자인의 책임이 아닙니다.
- [ ] **본문 lead 텍스트는 56ch 미만.** `max-width: 56ch`가 강제 — 오버라이드 금지.
- [ ] **빅스탯 슬라이드는 숫자 1개, 3개 아님.** 3개 숫자가 있으면 3개 슬라이드로.
- [ ] **덱당 풀쿼트 1개.** 풀쿼트 슬라이드 2개는 브로셔 느낌, 1개는 마침표 느낌.
- [ ] **마무리 슬라이드는 단정적.** 명확한 요청, 핵심 메시지, 날짜 — "감사합니다" 아님.
- [ ] **숫자는 모노로.** 스탯, 가격, 버전, 날짜는 `font-family: var(--font-mono)` (`.stat-num`이 이미 처리; `.meta`도 처리).
- [ ] **1280×800, 1440×900에서 오버플로 없음.** 브라우저 사이즈를 설정해서 잘리는 부분 없음을 확인.
- [ ] **풀쿼트 어트리뷰션 실명 권장**: 셀럽 / 인플루언서 / 매거진 에디터 (Vogue Korea, W Korea, Dazed Korea, Marie Claire Korea). 실명 없으면 익명 표시.

## P2 — 보너스

- [ ] **새로고침 후 위치 복원** (씨드의 `localStorage` save/restore가 처리).
- [ ] **상단 진행 바가 진행에 따라 채워짐** (이미 씨드에 있음).
- [ ] **카운터 알약이 항상 보임** (이미 씨드에 있음).

## 테마 리듬 spot-check

마쳤으면 실행:

```
grep 'class="slide' index.html
```

클래스 리스트를 한 시퀀스로 읽기. 건강한 패턴:

- `hero light` `light` `hero dark` `light` `dark` `hero light` `light` `hero dark`
- `hero light` `light` `light` `dark` `hero light` `dark` `hero dark`

나쁜 패턴:

- `light light light light light light` — 평탄
- `dark dark dark dark dark dark` — 무거움
- `hero hero hero hero` — 쉼표 없음

시퀀스가 나쁘면 중간 슬라이드 몇 개를 재배치.

## K-패션 시나리오 spot-check

- [ ] **IMC 결과 보고**: 빅스탯에 ROAS·노출·도달 같은 마케팅 KPI가 들어가는가?
- [ ] **콜라보 제안**: 표지에 양사 워드마크 또는 "BRAND A x BRAND B" 형식이 들어가는가?
- [ ] **시즌 합본**: 라인업 비교, 캠페인 결과, 매출 결산이 모두 포함되었는가?
- [ ] **신규 카테고리 런칭**: 시장 분석 + 매출 시뮬레이션 슬라이드가 있는가?
