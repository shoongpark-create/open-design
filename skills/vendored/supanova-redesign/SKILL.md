---
name: supanova-redesign
description: 기존 랜딩페이지를 프리미엄으로 업그레이드. AI 느낌 제거, 타이포그래피·컬러·레이아웃·모션 전면 개선. 트리거 "리디자인해줘", "업그레이드해줘", "이 페이지 좀 고급스럽게", "supanova-redesign".
---

# Supanova Redesign — 랜딩페이지 프리미엄 업그레이드

> 기존 HTML 랜딩페이지를 감사(audit)하고 $150k 에이전시급으로 업그레이드합니다.

## When to Use

- "이 랜딩페이지 리디자인해줘", "이 페이지 좀 고급스럽게 만들어줘"
- "AI 느낌 좀 빼줘", "템플릿 느낌 제거해줘"
- "이 HTML 업그레이드해줘", "supanova-redesign"
- 기존 랜딩페이지의 디자인 품질 개선이 필요한 모든 상황

## Execution

**반드시 아래 3개 레퍼런스 파일을 순서대로 Read한 뒤 작업에 착수:**

1. `system/skills/design/supanova/redesign-engine.md` — 리디자인 감사 체크리스트 & 업그레이드 기법
2. `system/skills/design/supanova/soft-engine.md` — 프리미엄 미학 (Creative Variance, 마이크로 인터랙션, 모션 안무)
3. `system/skills/design/supanova/output-enforcement.md` — 완전 출력 강제 (생략/트렁케이션 절대 금지)

**3개 파일의 모든 규칙을 동시에 적용하여 리디자인합니다.**

## Process

1. **Scan** — 대상 HTML 파일을 Read. 스타일링 방식, 폰트, 컬러, 레이아웃 파악
2. **Diagnose** — redesign-engine.md 감사 체크리스트로 문제점 목록 작성 → 사용자에게 요약 보고
3. **Fix** — 우선순위 순서로 개선 적용:
   - Pretendard 폰트 스왑 → 컬러 팔레트 정리 → 한국어 콘텐츠 리라이트
   - 호버/액티브 상태 → 레이아웃 다양화 → 스크롤 애니메이션 → 스페이싱 폴리시

## Quick Rules (레퍼런스 로드 전 즉시 적용)

- **구조 유지**: 기존 페이지 구조를 존중하며 점진적 개선. 완전 재작성 금지
- **출력**: 단독 HTML 파일 유지
- **금지 폰트**: Inter, Noto Sans KR, Roboto, Arial, Open Sans → Pretendard로 교체
- **금지 패턴**: AI 보라색 그라디언트, 이모지, 3열 균등 카드, h-screen, Unsplash URL
- **완전 출력**: 생략/placeholder/TODO 절대 금지

## Output

업그레이드된 HTML 파일을 원본과 같은 위치에 저장하거나, 사용자 지정 경로에 저장합니다.
