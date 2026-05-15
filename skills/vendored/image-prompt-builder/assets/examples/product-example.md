# Example: 럭셔리 향수병 제품컷 (대화형 모드)

## 사용자 요청

> "향수 제품 사진 프롬프트"

## 대화 흐름

**Claude**: 제품의 세부 방향을 골라주세요.
(list-options product detail 호출 결과 중)
1. 전자기기 / 2. 뷰티 / 화장품 / 3. 식품 / **4. 병 / 용기 제품** / 5. 럭셔리 ...

**User**: 4

**Claude**: 어떻게 보여줄까요?
(detail=product-bottle 기반으로 list-options product presentation 재호출 → 5개로 좁혀짐)
1. 단독 정면 컷 / 2. 45도 히어로 샷 / 3. 손에 들고 사용컷 / **4. 구성품까지 함께** / 5. 물 / 액체 / 입자 연출

**User**: 5 (splash)

**Claude**: 배경은?
1. 흰 배경 스튜디오 / **2. 단색 컬러 배경** / 3. 어두운 프리미엄 배경 / 4. 자연광 테이블 / 5. 브랜드 세트 / 6. 부드러운 그라데이션 ...

**User**: 6 (부드러운 그라데이션)

**Claude**: 강조 포인트는?
1. 브랜드 로고 / **2. 광택 / 반사** / 3. 재질감 / 4. 크기감 ...

**User**: 2

**Claude**: 구도는? 분위기는? (COMMON_COMPOSITIONS, GENERAL_MOODS)

**User**: 정면 대칭 / 고급스럽고 세련되게

**Claude**: 추가 요청사항 있나요?

**User**: "golden liquid splash, amber glass bottle"

## 최종 selections

```json
{
  "detail":       {"key": "product-bottle",  "title": "병 / 용기 제품"},
  "presentation": {"key": "product-splash",  "title": "물 / 액체 / 입자 연출"},
  "background":   {"key": "product-bg-soft", "title": "부드러운 그라데이션"},
  "feature":      {"key": "product-feature-gloss", "title": "광택 / 반사"},
  "composition":  {"key": "comp-symmetry",   "title": "정면 대칭"},
  "mood":         {"key": "mood-luxury",     "title": "고급스럽고 세련되게"}
}
```

## 최종 출력

```
Option 1
An amber glass perfume bottle centered on a soft pastel gradient backdrop, mid-air golden liquid splash wrapping around the bottle, glossy reflections on the curved glass, symmetrical front composition, subtle rim light carving the bottle silhouette, pristine gold accents on the collar and cap, luxurious and polished advertising feel.
앰버 병을 감싸는 황금 물방울과 대칭 구도의 고급 향수 광고컷.

Option 2
Symmetrical luxury perfume advertisement, amber bottle isolated on a cream-to-blush gradient, choreographed droplets and a sweeping golden liquid arc, crystalline highlights on the glass shoulders, seamless diffused lighting with deliberate specular control, refined editorial polish.
액체 아크와 하이라이트가 또렷한 에디토리얼 럭셔리 향수 컷.

Option 3
Hero product shot of an amber perfume bottle, liquid gold splash suspended mid-motion, soft diffused pink-to-beige backdrop, mirrored reflections on the bottle surface, meticulously balanced symmetrical framing, rich cinematic lighting emphasizing the gloss, premium brand campaign aesthetic.
골드 스플래시와 시네마틱 라이팅이 돋보이는 프리미엄 캠페인 컷.
```
