---
type: skill
id: sales-analysis
name: sales-analysis
description: "매출 분석, KPI 리뷰, 채널별 매출 비교, 카테고리 성과, 고객 분석, 월간/주간 실적 확인에 사용."
display_name: 매출 분석 & KPI
agency: data-intelligence
role: 트렌드 애널리스트 (Trend Analyst)
phase: check
triggers:
  - 매출 분석해줘
  - KPI 어때?
  - 이번 달 실적은?
  - 채널별 매출 비교해줘
  - 카테고리별 성과 분석
  - 고객 분석해줘
presets:
  - channels.json
  - brand.config.json
  - personas.json
outputs:
  - "output/[시즌]/check/sales-analysis.md"
  - "output/[시즌]/check/kpi-dashboard.md"
---

# 매출 분석 & KPI

> 트렌드 애널리스트가 매출 데이터를 분석하고 KPI 대시보드를 작성하는 전문 매뉴얼

## 언제 사용
- "매출 분석해줘", "KPI 리뷰해줘", "실적 어때?"
- PDCA Check 단계 진입 시

## 사전 준비
1. `presets/wacky-willy/channels.json` → 채널별 목표 매출
2. `presets/wacky-willy/brand.config.json` → 5대 경영목표 KPI 기준
3. `presets/wacky-willy/personas.json` → 고객 세그먼트 기준
4. `output/[시즌]/plan/season-concept.md` → 기획 대비 실적 비교 기준
5. 사용자 제공 매출 데이터

## 실행 절차

### Step 1: 전체 매출 요약
| 지표 | 목표 | 실적 | 달성률 | 전기 대비 |
|------|------|------|--------|----------|
| 총 매출 | | | | |
| 매출총이익 | | | | |
| 판매 수량 | | | | |
| 객단가 | | | | |

### Step 2: 채널별 분석
channels.json의 6개 채널별 목표 대비 실적 비교
| 채널 | 목표 | 실적 | 달성률 | 성장률 | 핵심 이슈 |
- 高손익 채널(FSS, 자사몰) 성과 집중 분석
- 글로벌 채널 성장 추이 (경영목표 #5)

### Step 3: 카테고리별 분석
| 카테고리 | 목표 | 실적 | 달성률 | Top 아이템 | Bottom 아이템 |
- 유니섹스 vs 우먼스 vs 용품 비중 변화
- 경영목표 #4(용품 경쟁력) 달성 상태

### Step 4: 히트상품 분석 (경영목표 #2)
| 순위 | 아이템 | 매출 | 판매 수량 | 기여율 | 히트 요인 |
- 상위 20% 매출 기여도: 목표 ≥50%

### Step 5: KPI 대시보드 프레임워크 (PM-Skills 통합)
경영목표별 KPI를 North Star + Input Metrics + Health Metrics + Counter Metrics + Alert 임계값 구조로 설계한다.

**좋은 메트릭의 4가지 기준** (Ben Yoskovitz, *Lean Analytics*):
1. 이해 가능 — 조직 전체가 같은 언어로 이해
2. 비교 가능 — 시간 경과에 따른 추이 파악 (스냅샷 X)
3. 비율/비 — 절대값보다 비율이 더 통찰력 있음
4. 행동 변화 유발 — "이 메트릭이 행동을 바꾸지 않으면 나쁜 메트릭이다"

**메트릭 유형 분류:**
- Vanity vs Actionable (행동 가능한 메트릭만 의사결정에 사용)
- Leading vs Lagging (선행지표로 빠른 학습 사이클 구축)

**대시보드 구조:**
```
┌─────────────────────────────────────────────┐
│  NORTH STAR: [와키윌리 NSM] — [현재 값]       │
│  추이: [↑/↓ X% vs 전기]                      │
├──────────────────┬──────────────────────────┤
│  Input Metric 1  │  Input Metric 2          │
│  [Sparkline]     │  [Sparkline]             │
├──────────────────┼──────────────────────────┤
│  Input Metric 3  │  Input Metric 4          │
│  [Sparkline]     │  [Sparkline]             │
├──────────────────┴──────────────────────────┤
│  HEALTH: [판매율] [재고회전] [CS 문의율]       │
├─────────────────────────────────────────────┤
│  BUSINESS: [매출] [매출총이익] [객단가] [재구매]│
└─────────────────────────────────────────────┘
```

**경영목표별 KPI 대시보드:**
| 경영목표 | KPI | 목표 | 실적 | 상태 | Alert 임계값 |
|----------|-----|------|------|------|-------------|
| 1. 브랜드 아이덴티티 | 코어타겟 매출 비중 | | | | < [X]% 시 경고 |
| 2. 히트상품+IMC | 상위 20% 기여도 | ≥50% | | | < 40% 시 경고 |
| 3. QR 비중 | QR 매출 비중 | | | | < [X]% 시 경고 |
| 4. 용품 경쟁력 | 용품 매출 비중 | | | | < [X]% 시 경고 |
| 5. 글로벌 | 글로벌 매출 달성률 | | | | < [X]% 시 경고 |

**Counter Metrics (역효과 감시):**
| 주요 KPI | Counter Metric | 임계값 | 의미 |
|----------|---------------|--------|------|
| 매출 성장 | 할인율 | > [X]% | 할인 의존 성장 경고 |
| 신규 고객 | 재구매율 | < [X]% | 일회성 구매 경고 |
| QR 비중 | QR 품질 클레임율 | > [X]% | 품질 저하 경고 |

**리뷰 주기:**
- 일간: 판매 속도, 재고 소진율, CS 이슈
- 주간: Input Metrics, 채널별 추이
- 월간: North Star, 경영목표 KPI, OKR 진척
- 분기: 전략 리뷰, 메트릭 재보정

### Step 6: 고객 분석 (선택)
- RFM 분석, 코호트 분석
- 신규 vs 재구매 비율
- 코어타겟(18~25세) vs 비타겟 비중

## 산출물 포맷

```markdown
# [시즌] 매출 분석 리포트

## 작성일: YYYY-MM-DD
## 작성자: Trend Analyst

## 전체 요약
## 채널별 분석
## 카테고리별 분석
## 히트상품 분석
## 경영목표별 KPI
## 핵심 발견 (Top 3)
1.
2.
3.
```

### Step 7: North Star Metric 정의 (PM-Skills 통합)
와키윌리의 비즈니스 게임을 분류하고 North Star Metric을 정의한다.

**비즈니스 게임 분류:**
- **Attention Game:** 고객이 제품에 얼마나 시간을 쏟는가? (예: TikTok, Spotify)
- **Transaction Game:** 고객과 플랫폼 간 거래가 얼마나 발생하는가? (예: Amazon, Uber)
- **Productivity Game:** 고객이 목표를 얼마나 효율적으로 달성하는가? (예: Canva, Notion)
→ 와키윌리는 **Transaction Game** (패션 커머스) + **Attention Game** (IP 기반 팬덤) 하이브리드

**NSM 후보 및 7대 기준 검증:**
| 기준 | NSM 후보 1 | NSM 후보 2 | NSM 후보 3 |
|------|-----------|-----------|-----------|
| 1. 이해 용이성 | | | |
| 2. 고객 중심성 | | | |
| 3. 지속 가능 가치 | | | |
| 4. 비전 정렬 | | | |
| 5. 정량 측정 | | | |
| 6. 행동 가능성 | | | |
| 7. 선행 지표성 | | | |

**NSM 확정:** [선택된 NSM과 정의]

**Input Metrics 설계 (3~5개):**
NSM을 직접적으로 구동하는 선행 지표들:
| # | Input Metric | 정의 | NSM과의 관계 | 단기 레버 |
|---|-------------|------|-------------|----------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

**NSM은 다음이 아니다:**
- 복수의 메트릭 (단일이어야 함)
- 매출/LTV 메트릭 (고객 중심이어야 함)
- OKR (그것은 목표 설정 기법)
- 전략 (하지만 올바른 NSM 선택은 전략적 의사결정)

## 완료 조건
- [ ] 전체/채널별/카테고리별 분석 완성
- [ ] 히트상품 분석 완성
- [ ] KPI 대시보드 작성 (North Star + Input + Health + Counter Metrics)
- [ ] Alert 임계값 설정
- [ ] North Star Metric 정의 및 7대 기준 검증
- [ ] 핵심 발견 3개 도출

## 체크리스트
- [ ] channels.json의 목표치가 정확히 반영되었는가?
- [ ] 5대 경영목표 KPI가 모두 커버되었는가?
- [ ] 데이터 기반 근거가 명시되어 있는가?
- [ ] 인사이트 아키텍트에게 전달할 핵심 발견이 도출되었는가?
- [ ] KPI가 "좋은 메트릭의 4가지 기준"을 충족하는가? (이해 가능/비교 가능/비율/행동 변화)
- [ ] Vanity Metric과 Actionable Metric이 구분되었는가?
- [ ] Counter Metrics로 역효과 감시 체계가 설정되었는가?
- [ ] North Star Metric이 7대 기준을 충족하는가?
- [ ] Input Metrics가 NSM을 직접적으로 구동하는 선행 지표인가?
