# Example: SNS 브랜딩 포트레이트 (원샷 모드)

## 사용자 요청

> "카페 창가에 앉은 여성 상반신, 브랜딩용, 담백하고 밝은 무드"

## Claude 내부 추론 → selections

| 스텝 | 선택 | 근거 |
|---|---|---|
| detail | `portrait-sns` (SNS 브랜딩 인물) | "브랜딩용" |
| people | `people-female` (여성 1명) | "여성" |
| appearance | `look-clean` (깨끗하고 담백한 인상) | "담백" |
| styling | `style-casual` (캐주얼 / 일상복) | 카페 맥락 |
| pose | `portrait-pose-window` (창가에 기대서 빛 받기) | "창가" |
| expression | `gaze-gentle` (부드럽고 차분한 표정) | "담백하고 밝은" |
| composition | `comp-bust` (바스트 샷) | "상반신" |
| mood | `mood-bright` (밝고 친근하게) | "밝은 무드" |

`extraRequest`: "coffee cafe window backdrop, bright daylight"

## 최종 출력

```
Option 1
A woman in a soft cream knit seated by a tall cafe window, shoulders angled three quarters toward the camera, calm gentle smile, bust crop from waist to head, daylight streaming in from the right with soft gradation on the cheek, blurred cafe interior with warm wooden tones, natural skin rendering, 50mm lens feel, clean personal brand portrait.
크림 니트와 자연광으로 따뜻한 브랜딩 인물컷.

Option 2
Bust-framed SNS brand portrait of a woman beside a large cafe window, hands loosely around a latte mug, relaxed calm gaze, clean daytime lighting with subtle window reflections, minimal wardrobe in off-white, muted cafe bokeh behind her, balanced composition for profile imagery.
머그잔과 부드러운 창가 빛으로 일상감을 살린 브랜딩컷.

Option 3
Bright personal brand headshot, young woman leaning gently against a window frame inside a minimal cafe, soft diffused light wrapping her face, bust-length crop, open friendly expression, neutral cream top, quiet modern cafe backdrop with warm neutrals, airy and clean finish.
창틀에 기대 환한 채광을 받는 깔끔한 브랜딩 인물컷.
```
