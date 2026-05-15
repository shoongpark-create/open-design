---
name: quality-gate
description: 와키윌리 산출물(SKU/룩/카피/비주얼/캠페인)을 design-tokens.json 기준으로 검증. CRITICAL #1~#5 (BTA/3B/로고/프리셋/Evidence) 자동 게이트. 트리거 "QC", "검수", "게이트", "검증", "review", "lint"
---

# quality-gate — Brand Guidelines as Code

> Audi/Skoda/Polaris 패턴: 가이드라인을 **실행 가능한 검증 규칙**으로 코드화.
> 모든 산출물은 발행 전 본 게이트 통과 필수.

## 사용 시점

- PDCA 단계 산출물 발행 직전 (필수)
- 외부 채널 송출 직전 (필수)
- 사용자가 "검수해줘" / "QC" / "게이트" 호출 시

## 검증 입력

| 산출물 종류 | 입력 형식 |
|------------|----------|
| SKU | `component-library.json` molecule 스키마 JSON |
| Look | organism 스키마 JSON |
| Capsule/Lookbook | template 스키마 JSON |
| 카피/메시지 | text + 채널 메타 |
| 비주얼 (이미지) | 이미지 경로 + 메타 (BTA 태그·컬러 매니페스트) |

## 검증 절차 (5-Gate)

### Gate 1 — BTA 명시 (CRITICAL #1)
- 상품/원가/물량 산출물에 `bta_tag` 또는 `bta_distribution` 필드 존재?
- Capsule이면 분포가 `design-tokens.bta.ratio` 밴드 내?
- **실패 시**: BLOCK + "BTA 누락 — 상단 CRITICAL #1 위반"

### Gate 2 — 3B 금지 (CRITICAL #2)
- Look/비주얼: `all(sku.bta=='basic') AND colorway⊆{black,white} AND coordination=='matching'` → BLOCK
- 비주얼 단독: 컬러 매니페스트가 black/white only + plain item → 경고

### Gate 3 — 로고 형태/색상 (CRITICAL #3)
- 로고 메타 `shape == "circle-only"`?
- 로고 색상 ⊆ `design-tokens.logo.color-allowlist`?
- 변형(stretch/skew/recolor) 메타 0건?
- **실패 시**: BLOCK

### Gate 4 — 프리셋 진실성 (CRITICAL #4)
- 카피/문서에 등장하는 브랜드 명사(컨셉/타겟/카테고리/IP명)가 `system/presets/wacky-willy/*.json`에서 발견 가능?
- 신규 명사 발견 시: BLOCK + "프리셋에 없는 브랜드 정보"

### Gate 5 — Evidence (CRITICAL #5)
- 산출물 파일 경로가 실재? (Read 가능?)
- 보고문이 산출물의 실제 내용과 일치?
- **실패 시**: WARN + "Evidence 미확인 — '검증 불가' 명시 필요"

## 출력 포맷

```json
{
  "verdict": "PASS | WARN | BLOCK",
  "gates": {
    "bta": { "status": "pass|fail", "detail": "..." },
    "3b":  { "status": "pass|fail", "detail": "..." },
    "logo":{ "status": "pass|fail", "detail": "..." },
    "preset": { "status": "pass|fail", "detail": "..." },
    "evidence": { "status": "pass|warn", "detail": "..." }
  },
  "block_reasons": ["..."],
  "warnings": ["..."],
  "next_action": "통과 / 수정 후 재검증 / 사용자 의사결정 필요"
}
```

## 의사결정 규칙

- **BLOCK 1개 이상** → 산출물 발행 금지, 수정 후 재호출
- **WARN만** → 사용자에게 보고 후 진행 여부 확인
- **모두 PASS** → 발행 승인 + `.fpof-state.json`에 게이트 통과 기록

## 참조

- `system/presets/wacky-willy/design-tokens.json` (정본)
- `system/presets/wacky-willy/component-library.json` (스키마)
- `system/presets/bcave/bta-guideline.md` (BTA 룰)
- `system/agents/quality-control/checklists/*.json` (PDCA 단계별 보조 체크리스트)

## 절대 하지 말 것

- 실패 게이트를 "통과"로 기록하기 (CRITICAL #5: 산출물 조작 금지)
- 검증 불가 항목을 묵시적 PASS 처리 (반드시 "검증 불가" 명시)
- 프리셋에 없는 브랜드 정보를 "기존에 있던 것"으로 추정
