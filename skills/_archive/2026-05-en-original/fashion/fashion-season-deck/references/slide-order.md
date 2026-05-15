# Season Deck Slide Order

The canonical slide ordering for a K-young-casual season design plan,
matched to the WACKYWILLY 27SS internal review deck. Follow this
ordering unless the user provides a custom one in Step 1.

| # | Section | Slide kind | Source skill / module |
|---|---|---|---|
| 1 | Cover | cover | (own) |
| 2 | CONTENTS | toc | (own) |
| 3 | 브랜드 로드맵 | embed | `fashion-brand-roadmap` |
| 4 | 브랜드 포지셔닝 맵 | embed | `fashion-positioning-map` |
| 5 | 시즌 전략 | embed | `fashion-season-strategy` |
| 6 | 시즌 IMC | embed | `fashion-imc-calendar` |
| 7 | 시즌 컨셉 / 무드보드 | embed | `fashion-concept-board` |
| 8 | (간지) 컬러 / 소재 | divider | (own) |
| 9 | 컬러 구성 | embed | `fashion-color-story` |
| 10 | 컬러 플레이 | inline editorial spread | (own) |
| 11 | 기능성 / 구조 소재 | embed | `fashion-fabric-board` (functional + structural blocks) |
| 12 | 유니 소재 방향성 | embed slice | `fashion-fabric-board` (UNI block) |
| 13 | 우먼 소재 방향성 | embed slice | `fashion-fabric-board` (WOMEN block) |
| 14 | (간지) 스타일링 | divider | (own) |
| 15 | 유니 스타일링 S1 (Jan-Feb) | embed | `fashion-styling-board` |
| 16 | 유니 스타일링 S2 (Mar-Apr) | embed | `fashion-styling-board` |
| 17 | 유니 스타일링 S3 (May) | embed | `fashion-styling-board` |
| 18 | 유니 스타일링 S4 (Jun-Jul) | embed | `fashion-styling-board` |
| 19 | 우먼 스타일링 S1 | embed | `fashion-styling-board` |
| 20 | 우먼 스타일링 S2 | embed | `fashion-styling-board` |
| 21 | 우먼 스타일링 S3 | embed | `fashion-styling-board` |
| 22 | 우먼 스타일링 S4 | embed | `fashion-styling-board` |
| 23 | (간지) 키 아이템 | divider | (own) |
| 24 | 코튼 집업 점퍼 | embed | `fashion-key-item-sheet` |
| 25 | 시그니처 그래픽 티셔츠 | embed | `fashion-key-item-sheet` |
| 26 | 빈티지 그래픽 티셔츠 | embed | `fashion-key-item-sheet` |
| 27 | 뉴베이직 라인 | embed | `fashion-key-item-sheet` |
| 28 | 데님라이크 스웻 셋업 | embed | `fashion-key-item-sheet` |
| 29 | 이지데님 셋업 | embed | `fashion-key-item-sheet` |
| 30 | 우먼 가디건 | embed | `fashion-key-item-sheet` |
| 31 | (간지) 신규 라인업 | divider | (own) |
| 32 | 폴카 도트 시리즈 | embed | `fashion-new-lineup` |
| 33 | 리본 / 러플 시리즈 확장 | embed | `fashion-new-lineup` |
| 34 | 우먼 에센셜 라인 확장 | embed | `fashion-new-lineup` |
| 35 | 유니 뉴베이직 정의 정립 | embed | `fashion-new-lineup` |
| 36 | 우먼 뉴베이직 러플 확장 | embed | `fashion-new-lineup` |
| 37 | (간지) 그래픽 | divider | (own) |
| 38 | 그래픽 방향성 (themes) | embed | `fashion-graphic-direction` |
| 39 | 심볼 / 워드마크 시즌성 | embed slice | `fashion-graphic-direction` (symbol & wordmark block) |
| 40 | (간지) 브랜드 구조 점검 / 재정비 | divider | (own) |
| 41 | 핏 체계 정비 | embed | `fashion-fit-system` |
| 42 | 메인 택 / 라벨 통합 기준 | inline (current vs. future) | (own) |
| 43 | 브랜드 볼륨 성장 전략 | inline strategy slide | (own) |
| 44 | E.O.D. | end card | (own) |

For an **ACC-only deck** (가방 / 모자 / 신발 only), substitute slides
14–22 with `fashion-accessory-lineup` per category, and adjust the
key-item slides accordingly:

| # | Section | Source |
|---|---|---|
| 14 | 시즌 스타일링 (UNI 적용) | `fashion-styling-board` (single ACC-context) |
| 15 | 가방 라인업 — 신학기 백팩 | `fashion-accessory-lineup` |
| 16 | 가방 라인업 — 데일리 / 크로스 | `fashion-accessory-lineup` |
| 17 | 모자 라인업 | `fashion-accessory-lineup` |
| 18 | 슈즈 라인업 | `fashion-accessory-lineup` |
| 19 | (계속 — 그래픽, 라벨, 전략) | … |

## Embed policy per slide

For each "embed" slide:

1. Read the source artifact's `index.html` from its project folder.
2. Extract the `<main>` content (everything inside `<main>`).
3. Wrap it in `<section class="slide slide--embed" data-source="<skill-name>">`.
4. Scope the source's `<style>` to the wrapper (use a build step or
   prefix selectors with `.slide[data-source="<skill-name>"]`).
5. Add an attribution chip in the slide footer:
   `<div class="slide-attribution">via <code>fashion-styling-board</code></div>`

When a source artifact does not exist, use the **placeholder slide**
template from `layouts.md` (a slide that names the missing module
and the recommended skill to run).
