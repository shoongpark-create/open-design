# Example: YouTube 썸네일 (조건부 필터링 하이라이트)

## 사용자 요청

> "유튜브 설명형 영상 썸네일, 여성 한 명, 왼쪽에 제목 들어갈 공간"

## 조건부 필터링이 핵심 동작하는 케이스

detail = `thumb-explain` (설명 / 강의형) 선택 시:
- **people** 스텝이 8개 → **6개**로 좁아짐 (thumb-one-female, thumb-one-male, thumb-host-screen, thumb-host-product, thumb-senior, thumb-solo-wide)
- **pose** 스텝이 24개 → **12개**로 좁아짐 (설명형에 어울리는 point/openhand/seated/keyboard/laptop 위주)
- text=`text-left` 선택 시 **composition**이 `THUMBNAIL_COMPOSITION_LEFT_OPTIONS`로 교체됨

```bash
# people 옵션 축소 확인
node scripts/builder.js list-options thumbnail-person people \
  '{"detail":{"key":"thumb-explain"}}'

# pose 옵션 축소 확인 (detail + people 둘 다 반영)
node scripts/builder.js list-options thumbnail-person pose \
  '{"detail":{"key":"thumb-explain"},"people":{"key":"thumb-one-female"}}'

# text-left일 때 composition 셋 자체가 바뀌는 것 확인
node scripts/builder.js list-options thumbnail-person composition \
  '{"text":{"key":"text-left"}}'
```

## 최종 selections

```json
{
  "detail":      {"key": "thumb-explain",    "title": "설명 / 강의형"},
  "people":      {"key": "thumb-one-female", "title": "여성 1명"},
  "pose":        {"key": "thumb-pose-openhand", "title": "한 손으로 설명하기"},
  "reaction":    {"key": "react-confident",  "title": "자신감 있게"},
  "text":        {"key": "text-left",        "title": "왼쪽 제목 여백"},
  "composition": {"key": "thumb-comp-left-half", "title": "우측 인물 / 좌측 여백형"},
  "mood":        {"key": "mood-clean",       "title": "깨끗하고 맑게"}
}
```

## 최종 출력

```
Option 1
Clean YouTube tutorial thumbnail, confident young woman on the right half of the frame, one open hand gesturing toward the left, friendly self-assured smile, generous empty space on the left for a large title, bright even studio lighting, minimal pale backdrop, sharp edges readable at small sizes, crisp editorial clarity.
우측 인물 + 좌측 여백에 제목이 바로 얹히는 깔끔한 강의형 썸네일.

Option 2
Right-aligned bust-framed woman in a tutorial thumbnail, open-palm explainer gesture, direct confident gaze to camera, soft neutral background, large left-side text area, balanced color contrast between skin tone and backdrop, sharp focus on the face and hand, high readability on mobile.
모바일 가독성까지 잡은 좌측 타이틀형 튜토리얼 썸네일.

Option 3
Instructional YouTube thumbnail, right-side portrait of a self-assured young woman with one gentle explaining hand extended, bright clean color palette, empty negative space on the left, crisp studio light shaping the cheek and jaw, calm brand-safe expression, clearly contrast-separated subject for an easily-legible left title.
여백과 대비로 제목이 선명하게 읽히는 강의형 썸네일.
```
