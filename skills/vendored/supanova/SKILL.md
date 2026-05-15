---
name: supanova
description: 프리미엄 랜딩페이지 생성 엔진. 순수 HTML+Tailwind CDN으로 $150k 에이전시급 랜딩페이지를 단독 HTML 파일로 생성. 트리거 "랜딩페이지 만들어줘", "supanova", "랜딩 생성", "웹페이지 만들어줘".
---

# Supanova — 프리미엄 랜딩페이지 생성

> 순수 HTML + Tailwind CSS(CDN)로 $150k 에이전시급 랜딩페이지를 단독 HTML 파일로 생성합니다.

## When to Use

- "랜딩페이지 만들어줘", "홈페이지 만들어줘", "웹페이지 하나 뽑아줘"
- "supanova로 만들어줘", "프리미엄 랜딩 생성"
- "HTML 랜딩페이지", "원페이지 사이트 만들어줘"
- 브랜드/제품/서비스 소개 랜딩페이지가 필요한 모든 상황

## Execution

**반드시 아래 3개 레퍼런스 파일을 순서대로 Read한 뒤 생성에 착수:**

1. `system/skills/design/supanova/taste-engine.md` — 핵심 엔진 (설정값, 디자인 규칙, 섹션 라이브러리, 포뮬러)
2. `system/skills/design/supanova/soft-engine.md` — 프리미엄 미학 (Creative Variance, 마이크로 인터랙션, 모션 안무)
3. `system/skills/design/supanova/output-enforcement.md` — 완전 출력 강제 (생략/트렁케이션 절대 금지)

**3개 파일의 모든 규칙을 동시에 적용하여 랜딩페이지를 생성합니다.**

## Quick Rules (레퍼런스 로드 전 즉시 적용)

- **출력**: 단독 HTML 파일, 브라우저에서 바로 열림
- **스택**: Tailwind CDN + Pretendard 폰트 + Iconify Solar 아이콘
- **언어**: 모든 콘텐츠 한국어 (자연스러운 네이티브 한국어)
- **최소 섹션**: Nav → Hero → Social Proof → Features → Testimonials → CTA → Footer (7개)
- **금지 폰트**: Inter, Noto Sans KR, Roboto, Arial, Open Sans
- **금지 패턴**: AI 보라색 그라디언트, 이모지, 3열 균등 카드, h-screen, Unsplash URL
- **모션**: cubic-bezier(0.16, 1, 0.3, 1) 기본, IntersectionObserver 스크롤 애니메이션
- **완전 출력**: 생략/placeholder/TODO 절대 금지. 토큰 한계 시 [PAUSED] 프로토콜 사용

## Output

생성된 HTML 파일을 `workspace/` 하위에 저장합니다.
파일명: 사용자 요청에 맞는 설명적 이름 (예: `landing_stellarlabs-saas.html`)
