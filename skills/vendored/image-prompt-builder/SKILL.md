---
name: image-prompt-builder
description: "이미지 생성 AI(GPT, Gemini, Grok, ComfyUI)에 바로 쓸 영어 프롬프트를 3가지 옵션으로 설계합니다. 21개 카테고리(썸네일, 포트레이트, 셀카, 그룹, 패션, 프로필, 제품, 음식, 차량, 공간, 건축, 풍경, 여행, 동물, 업무, 서비스, 포스터, 판타지, 일러스트, 행사, 배경) × 1180개 프리셋(포즈·구도·무드·스타일·배경·표정) 조합으로 '영어 프롬프트 + 한국어 설명' 형식 출력. 사용자가 '이미지 프롬프트', '프롬프트 만들어줘', 'ComfyUI 프롬프트', 'Gemini/GPT/Grok에 쓸 프롬프트', '썸네일 프롬프트', '포트레이트 프롬프트', '제품 컷 프롬프트', 'AI 이미지 프롬프트', '이미지 생성' 등을 언급하면 반드시 사용하세요. 막연한 요청('아이폰 제품컷 프롬프트')은 대화형 가이드로, 구체적 요청('카페 창가 여자 바스트샷')은 바로 조립으로 하이브리드 동작합니다."
---

# Image Prompt Builder

AI 이미지 생성용 영어 프롬프트를 **21개 카테고리 × 5~8 단계 × 1180개 프리셋**에서 조합해 **Option 1 / 2 / 3 영어 프롬프트 + 한국어 한 줄 설명** 형식으로 출력하는 스킬.

원본 레퍼런스: `https://deno2026.github.io/Deno-Image-Prompt-builder/image.html` (Simple Prompt Master).
그 웹페이지의 데이터 · 조건부 필터링 · 프롬프트 조립 규칙을 1:1로 포팅한 `scripts/builder.js` 엔진을 호출합니다.

## 핵심 원칙

1. **데이터의 진실은 builder.js** — 옵션 이름·조합 규칙·출력 포맷은 절대 지어내지 말고 항상 엔진 호출로 얻기. (Evidence before assertion)
2. **사용자 선택을 절대 무시·수정하지 말 것** — LLM이 "더 나은 선택"이라고 판단하더라도 바꾸지 말 것.
3. **최종 출력은 Option 1/2/3 영어 프롬프트 + 한국어 한 줄 설명** — 코드블록 금지. 인사·부연 금지.
4. **하이브리드 인터랙션** — 정보 부족이면 단계별 질문, 충분하면 바로 조립.

## 엔진: scripts/builder.js

모든 데이터 조회 · 조건부 필터링 · 프롬프트 조립은 이 스크립트로 수행합니다.

```bash
# 1. 전체 21개 카테고리 목록
node scripts/builder.js list-subjects

# 2. 특정 카테고리의 단계 흐름 (5~8 스텝)
node scripts/builder.js list-steps <subjectKey>

# 3. 현재 단계의 옵션 (이전 선택에 따라 동적 좁힘)
node scripts/builder.js list-options <subjectKey> <stepKey> '<selectionsJson>'

# 4. 카테고리별 자동 고려 사항 (knowledge profile)
node scripts/builder.js knowledge <subjectKey>

# 5. 최종 프롬프트 조립 (LLM에 넘길 전체 텍스트)
node scripts/builder.js assemble '<configJson>'
```

**selectionsJson 형식** (list-options / assemble 공통):
```json
{
  "<stepKey>": {"key": "...", "title": "한글 제목", "desc": "한글 설명", "kicker": "..."},
  "<anotherStepKey>": {"manual": "사용자 직접 입력 문장"}
}
```
`manual`이 있으면 프리셋 대신 그 문장을 그대로 사용합니다(웹의 "직접 입력" 버튼).

**assemble configJson 형식**:
```json
{
  "subjectKey": "portrait",
  "subjectLabel": "인물 사진",          // 선택(직접 입력 시 사용)
  "selections": { ...위 형식... },
  "extraRequest": "soft window light" // 선택, 자유 추가 키워드
}
```

## Subject 카테고리 (21개)

| 키 | 제목 | 대표 용도 |
|---|---|---|
| `thumbnail-person` | 유튜브 썸네일 인물 | 클릭 유도형 YouTube 썸네일 |
| `portrait` | 인물 사진 | 프로필, 화보, SNS, 브랜딩 |
| `selfie-sns` | 셀카 / SNS 사진 | 인스타, 거울셀카, 일상 |
| `group-family` | 커플 / 가족 / 그룹 | 관계·단체 사진 |
| `fashion-beauty` | 패션 / 뷰티 / 룩북 | 의상·메이크업·헤어 중심 |
| `profile-id` | 증명 / 프로필 사진 | 이력서, 강사, 팀 소개 |
| `product` | 제품 사진 | 상세페이지, 광고, 브랜드 |
| `food-drink` | 음식 / 음료 사진 | 카페, 메뉴, 디저트 |
| `vehicle` | 차량 / 모빌리티 | 자동차, 바이크 |
| `space` | 공간 / 인테리어 | 거실, 카페, 작업실 |
| `architecture` | 건축 / 외관 | 건물 외관, 상업공간 |
| `landscape` | 풍경 / 자연 / 도시 | 자연, 전경, 야경 |
| `travel` | 여행 / 브이로그 장면 | 인트로, 여행 컷 |
| `animal` | 반려동물 / 동물 | 강아지, 고양이 |
| `workspace` | 업무 참고 이미지 | 발표자료, 기획안 |
| `service` | 서비스 / 앱 설명 이미지 | 웹·앱·AI 소개 |
| `poster` | 포스터 / 커버 / 키비주얼 | 행사, 앨범, 메인 비주얼 |
| `fantasy` | 판타지 / SF / 세계관 | 미래도시, 게임 콘셉트 |
| `illustration` | 캐릭터 / 일러스트 | 애니풍, 귀여운 캐릭터 |
| `event` | 행사 / 공연 / 무대 | 콘서트, 강연, 축제 |
| `broll` | 배경 / B-roll 장면 | 중간 삽입컷, 전환컷 |

## 하이브리드 플로우

### 1) 의도 파싱 — 사용자 요청에서 어디까지 특정됐는지 판단

사용자 요청에서 다음 중 몇 개가 추출되는지 카운트:
- **Subject** (카테고리 — 제품? 인물? 풍경?)
- **핵심 속성** (포즈·구도·무드·배경·스타일 등)

판단 기준:
- **0개** → 뭘 만들고 싶은지 물어보기
- **Subject만** → subject 확정 → **대화형 모드**로 진입
- **Subject + 1~2개 속성** → subject 확정 + 매칭되는 속성 미리 채우고 **대화형 모드**로 남은 스텝만 질문
- **Subject + 3개 이상 속성** → 전체 추론 후 **원샷 조립**

### 2) Subject 매핑

사용자 문장에서 subject 키워드를 찾아 21개 중 하나로 매핑. 모호하면 두세 개 후보를 제시하고 선택받기.

예:
- "아이폰 제품컷" → `product`
- "카페 창가 인물사진" → `portrait`
- "강아지 사진" → `animal`
- "브이로그 인트로" → `travel`
- "앨범 커버" → `poster`
- "채널 메인 썸네일" → `thumbnail-person`

### 3) 대화형 모드

```
node scripts/builder.js list-steps <subject>
```
로 단계 목록 획득 → 첫 단계부터 순차 질문:

```
node scripts/builder.js list-options <subject> <stepKey> '<누적 selections>'
```
로 **현재 스텝의 옵션**을 얻고 사용자에게 제시:

```
다음 스텝: [포즈] 어떤 포즈가 좋을까요?

  1. 얼굴 가까이 — 얼굴과 표정이 먼저 보이는 셀카
  2. 상반신 중심 — 옷과 표정이 함께 보이는 구도
  3. 전신 거울샷 — 스타일 전체가 보이는 셀카
  ...
  0. 직접 입력 (원하는 장면을 문장으로)
```

숫자 선택 또는 문장 입력 받기 → `selections`에 추가 → 다음 스텝.
**중요**: 매 스텝마다 `list-options`를 다시 호출해야 이전 선택에 따라 좁혀진 옵션이 나옵니다(조건부 필터링 — 원본 웹과 동일).

모든 스텝 완료 후 "추가 요청사항이 있나요?" 1회 물어보고 `extraRequest`에 저장.

### 4) 원샷 모드

사용자 요청에 충분한 정보가 있으면 대화 없이 Claude가 각 단계에 매칭되는 옵션을 선택. 단계마다:
- 옵션 리스트를 `list-options`로 받아보기
- 사용자 표현과 가장 가까운 옵션을 선택, 또는 `manual` 문장으로 직접 입력
- 애매한 스텝(예: mood, styling)은 **가장 중립적인 선택**을 고르기

**주의**: 원샷 모드에서 Claude가 옵션 키를 지어내지 말 것. 반드시 `list-options` 결과에 있는 실제 `key`를 사용.

### 5) 최종 조립

```bash
node scripts/builder.js assemble '<configJson>'
```

결과는 **LLM에 넘길 full prompt text**입니다 — SYSTEM_PROMPT + [User Input] + [Final Extra Request] + [Category Knowledge] + [Contextual Expansion Rules].

### 6) LLM 호출 → Option 1/2/3 생성

조립된 프롬프트를 Claude 본인이 그대로 해석하여 **Option 1 / Option 2 / Option 3 영어 프롬프트 + 한국어 한 줄 설명**을 생성합니다. 내부 로직:

- Option 1/2/3은 **핵심 방향을 유지하되 표현을 달리**합니다.
- 각 옵션 직후에 한국어 한 줄(이 옵션이 어떤 느낌인지) 붙이기.
- 코드블록 · 질문 · 인사말 · 마크다운 헤더 **금지**.
- ComfyUI처럼 약한 텍스트 인코더도 이해할 수 있도록 **구체적인 시각 단어** 사용 (pose nuance, hand placement, lens feel, lighting direction, color palette, texture, depth, focal emphasis).

### 출력 샘플 형식

```
Option 1
A young woman in a minimal cream knit, upper body angled three quarters toward a soft window, calm neutral expression, short bust crop, clean white studio backdrop, soft diffused daylight from camera-left, natural skin tone, sharp focus on eyes, subtle shoulder line, 50mm lens feel.
미니멀 니트와 사선 상체 각도로 차분한 브랜딩 무드를 강조한 버전.

Option 2
Urban bust portrait of a woman in a tailored white shirt, torso rotated lightly, relaxed jaw, direct gaze softened, seamless pale grey backdrop, overhead softbox blended with a silver fill, crisp but gentle contrast, editorial brand headshot feel.
도시적인 화이트 셔츠와 스튜디오 라이팅으로 세련미를 살린 버전.

Option 3
Clean, bright personal brand portrait, woman at 45-degree shoulder turn, understated neutral makeup, bust composition, large soft window light skimming the cheekbone, faint warm ambient bounce, muted off-white wall behind, photographed with a medium-telephoto portrait lens.
자연광과 담백한 톤으로 따뜻함을 얹은 브랜딩 버전.
```

## 예시 호출 시나리오

### A) 원샷: 구체적 요청

사용자: *"카페 창가에 앉은 여자 상반신, 담백한 무드, 웜톤"*

1. Subject 매핑 → `portrait` (단독 인물)
2. 단계별 최적 옵션 선택:
   - detail → `portrait-daily` (일상 감성 인물)
   - people → `people-female` (여성 1명)
   - appearance → `look-soft` (부드럽고 친근한 인상)
   - styling → 사용자가 명시 안함 → `style-casual` (중립)
   - pose → `portrait-pose-window` (창가에 기대서 빛 받기)
   - expression → `gaze-gentle` (부드럽고 차분한 표정)
   - composition → `comp-bust` (바스트 샷)
   - mood → `mood-warm` (따뜻하고 편안하게)
3. `extraRequest`: "cafe window backdrop, warm tone"
4. `assemble` → 최종 프롬프트 조립
5. Claude가 Option 1/2/3 생성

### B) 대화형: 막연한 요청

사용자: *"이미지 프롬프트 하나 만들어줘"*

→ "어떤 이미지인가요? 인물, 제품, 풍경, 썸네일, 포스터... 아니면 구체적으로 뭘 만들고 싶으신지 한 줄로 설명해주세요."

→ 사용자가 "제품 사진" → subject=`product`, 첫 스텝부터 대화형.

### C) 부분 정보: 섞기

사용자: *"포스터 이미지 프롬프트, 행사 이벤트용"*

1. subject → `poster`
2. `detail` 스텝 → 행사/이벤트에 해당하는 옵션이 있으면 미리 선택, 없거나 모호하면 사용자에게 옵션 제시
3. 나머지 스텝은 대화형

## Direct 입력 처리

모든 스텝 옵션 리스트 맨 앞에 `__direct__` (직접 입력)가 포함됩니다. 사용자가 숫자 "0" 또는 "직접 입력"을 고르면, 해당 스텝 값을 `{"manual": "사용자가 입력한 문장"}`으로 저장. `assemble`이 manual 문장을 그대로 사용합니다.

## 검증 규칙 (Evidence before assertion)

최종 Option 1/2/3을 보내기 전 반드시:
1. **모든 사용자 선택이 영어 프롬프트에 반영됐는지** 문장별로 대조 (특히 pose, composition, background).
2. **사용자가 요청하지 않은 텍스트(자막·로고 등)를 넣지 않았는지** 확인.
3. **옵션 간 중복도가 과한지** 확인 — 3개가 거의 같은 문장이면 표현을 더 분산시키기.

검증할 수 없는 요소(예: 사용자가 매우 주관적인 "분위기"만 요청)는 **그 이유를 한 줄 명시**. 가짜 성공 보고 금지.

## 빠른 레퍼런스

- `references/subjects-index.json` — 21개 subject 전체 목록(제목·설명·kicker)
- `references/options/<subjectKey>.json` — subject별 전체 플로우 + 모든 옵션 (빠른 컨텍스트용)
- `references/direct-option.json` — __direct__ 옵션 사양
- `scripts/builder.js` — CLI 엔진 (데이터의 진실)
- `scripts/_data.js` — 원본 HTML에서 가져온 JS 데이터 (수정하지 말 것)
- `assets/examples/` — 출력 샘플

> 옵션 라벨·조건부 필터링·출력 포맷이 필요할 때는 references JSON을 먼저 훑고, 실제 호출은 반드시 `builder.js`로 하세요. JSON은 조회·컨텍스트용, 엔진이 진실 소스입니다.
