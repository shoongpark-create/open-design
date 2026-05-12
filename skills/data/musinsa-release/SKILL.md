---
type: skill
id: musinsa-release
name: musinsa-release
description: "무신사 발매판, 신상 발매 일정, 단독 발매, 스니커즈 발매 캘린더, 경쟁 브랜드 신상품 모니터링에 사용."
display_name: 무신사 발매 수집
agency: data-intelligence
role: 트렌드 애널리스트 (Trend Analyst)
phase: any
triggers:
  - 무신사 발매 뭐 있어
  - 이번 주 무신사 신상 뭐 나와
  - 무신사 발매 일정 가져와
  - 발매 예정 상품 수집해줘
  - 무신사 단독 발매 뭐 있어
  - 스니커즈 발매 캘린더 뽑아줘
  - 경쟁 브랜드 신상 발매 모니터링
  - 무신사 발매판 크롤링
presets:
  - brand.config.json
  - categories.json
scripts:
  - system/scripts/musinsa-release-crawler/crawler.py
outputs:
  - "workspace/musinsa-release/release_YYYYMMDD/"
---

# 무신사 발매 수집

> 무신사 발매판 API를 통해 브랜드별 신상품 발매 정보를 수집한다.
> 발매일시·D-Day·가격·이미지를 포함한 엑셀을 생성하고,
> 와키윌리 관점에서 시장 변화와 신규 유형 적용 제안을 제공한다.

## 언제 사용

- "무신사 발매 뭐 있어?", "이번 주 신상 발매 체크해줘"
- "경쟁 브랜드 신상 모니터링해줘"
- "스니커즈 발매 일정 뽑아줘", "무신사 단독 발매 확인해줘"
- "발매 예정 상품 수집해줘", "재발매 인기 상품 뭐 있어?"
- "무신사 발매판 크롤링"

---

## Step 1: 필터 선택 (AskUserQuestion)

크롤링 전 반드시 AskUserQuestion으로 필터를 확인한다.

```json
{
  "questions": [
    {
      "question": "어떤 발매 탭을 수집할까요?",
      "header": "발매 탭",
      "multiSelect": false,
      "options": [
        {"label": "NOW — 현재 발매 중", "description": "지금 발매가 열린 상품"},
        {"label": "예정 — 발매 예정", "description": "앞으로 발매될 상품 (D-Day 계산 포함)"},
        {"label": "인기 재발매", "description": "재발매 요청이 많은 인기 상품"},
        {"label": "무신사 단독", "description": "무신사 플랫폼 단독 발매 상품"},
        {"label": "스니커즈 캘린더", "description": "스니커즈 특화 발매 일정"}
      ]
    },
    {
      "question": "성별 필터는 어떻게 할까요?",
      "header": "성별",
      "multiSelect": false,
      "options": [
        {"label": "전체 (A)", "description": "남녀 통합"},
        {"label": "여성 (F)", "description": "와키윌리 우먼스 타겟"},
        {"label": "남성 (M)", "description": "남성 발매"}
      ]
    },
    {
      "question": "정렬 순서는?",
      "header": "정렬",
      "multiSelect": false,
      "options": [
        {"label": "최신순 (latest)", "description": "가장 최근 등록 순"},
        {"label": "인기순 (popular)", "description": "좋아요/관심 많은 순"}
      ]
    }
  ]
}
```

### 탭 → 파라미터 매핑

| 사용자 선택       | --tab         | sectionId |
|-----------------|---------------|-----------|
| NOW             | now           | 91        |
| 예정            | upcoming      | 92        |
| 인기 재발매      | popular-re    | 93        |
| 무신사 단독      | exclusive     | 94        |
| 스니커즈 캘린더  | sneakers      | 95        |

---

## Step 2: 크롤러 실행

```bash
cd "{PROJECT_ROOT}/system/scripts/musinsa-release-crawler" && \
python3 crawler.py \
  --tab "{탭코드}" \
  --gender "{성별코드}" \
  --sort "{정렬코드}" \
  --format xlsx \
  2>&1
```

### sectionId 탐색 실패 시 대응

API 응답이 비어있으면 sectionId를 직접 지정해 재시도한다:

```bash
python3 crawler.py --section-id 91 --gender A --sort latest --format xlsx
```

91~95 범위에서 순서대로 시도하고, 데이터가 나오는 sectionId를 사용한다.
실패가 반복되면 `--list-tabs`로 목록을 확인하거나 API 구조 변경을 의심한다.

---

## Step 3: 결과 보고

크롤링 완료 후 사용자에게 보고한다:

- 수집된 발매 상품 수 (예정 / 오늘 발매 / 발매 완료 분류)
- 저장 경로
- 발매 예정 상품 중 D-Day가 가까운 상위 5개 (브랜드, 상품명, 발매일, D-Day)
- 오늘 발매 중인 상품 목록

---

## Step 4: 와키윌리 인사이트 (자동 분석)

수집 데이터를 바탕으로 아래 3가지 관점의 인사이트를 생성한다.
`brand.config.json`과 `categories.json` 프리셋을 반드시 참조한다.

### 4-1. 시장 변화 분석

발매 데이터에서 다음 패턴을 읽는다:

| 분석 항목 | 확인 포인트 |
|----------|-----------|
| **브랜드 동향** | 발매 활동이 활발한 브랜드, 신규 진입 브랜드 |
| **가격대 변화** | 주류 발매 가격대, 고가/저가 발매 비율 |
| **발매 주기** | 단일 출시 vs 시리즈/컬렉션 연속 발매 패턴 |
| **품절 속도** | 빠른 품절 상품 → 수요 집중 아이템 식별 |
| **재발매 인기** | 인기 재발매 탭 기반 → 소비자가 다시 찾는 카테고리 |

### 4-2. 신규 유형 분석

발매 상품에서 아래 기준으로 새로운 유형을 추출한다:

- **카테고리 신유형**: 기존 카테고리에서 보기 드문 소재·실루엣·기법
- **IP·캐릭터 콜라보**: 협업 브랜드 유형, 어떤 IP가 활발한지
- **발매 방식**: 선착순 vs 응모 방식 (상품 상세에서 확인 가능하면 포함)
- **단독/한정 발매 패턴**: 무신사 플랫폼을 통한 독점 전략 브랜드

### 4-3. 와키윌리 적용 제안

BTA 프레임워크 기반으로 구체적인 적용 포인트를 제안한다:

```
[Accent] ← 발매 데이터에서 포착된 아이캐칭 요소 → 와키윌리 적용 가능성
[Trend]  ← 시장에서 부상 중인 트렌드 유형 → 브랜드화된 방식으로 해석
[Basic]  ← 재발매 요청이 많은 상품 유형 → 안정 매출 아이템 힌트
```

제안은 와키윌리 DNA(Kitsch Street & IP Universe), 코어타겟(18~25세), 비전(K-컬처 기반 글로벌)을
기준으로 필터링하여 구체적으로 작성한다.

---

## 저장 경로

```
workspace/musinsa-release/
└── release_YYYYMMDD/
    ├── musinsa_release_{tab}_{gender}_{timestamp}.xlsx
    ├── musinsa_release_{tab}_{gender}_{timestamp}.json  (--format both 시)
    └── _result.json                                      (시스템용)
```

### 엑셀 컬럼 구성

| 열 | 컬럼명   | 내용 |
|----|---------|------|
| A  | 이미지   | 상품 썸네일 (셀 삽입) |
| B  | 브랜드   | 브랜드명 |
| C  | 상품명   | 발매 상품명 |
| D  | 발매일시 | YYYY-MM-DD HH:MM |
| E  | D-Day   | D-3, D-Day, D+2 (색상 강조) |
| F  | 발매상태 | 예정(파랑) / 오늘 발매(노랑) / 발매 완료(회색) |
| G  | 원가     | 정가 (₩) |
| H  | 할인율   | % |
| I  | 판매가   | 최종가 (₩) |
| J  | 품절     | 품절 시 빨간 표시 |
| K  | 상품 URL | 무신사 상품 페이지 |
| L  | 이미지 URL | 원본 이미지 링크 |

---

## 에러 대응

| 에러 | 원인 | 해결 |
|------|------|------|
| 수집 0개 | sectionId 불일치 | `--section-id 91~95` 순서대로 시도 |
| API 403 | IP 차단·헤더 문제 | User-Agent 변경 후 재시도 |
| openpyxl 미설치 | 패키지 누락 | `pip install openpyxl pillow requests` |
| 이미지 삽입 안 됨 | Pillow 미설치 | `pip install pillow` (데이터는 저장됨) |
| releaseTargetDate 없음 | 배너 타입 상품 | sub_title 텍스트로 날짜 대체 표시 |

## 주의사항

- 무신사 발매 API는 비공식이므로 구조가 변경될 수 있다. sectionId가 바뀌면 discover_tabs()가 자동 탐색을 시도한다.
- 수집 데이터는 내부 MD 기획·경쟁 분석 용도로만 사용한다.
- 응모/선착순 발매 방식은 상품 상세 페이지에서만 확인 가능하다 (API 미노출).
