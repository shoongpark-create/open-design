---
type: skill
id: musinsa-ranking
name: musinsa-ranking
description: "무신사 랭킹, 인기 상품, 카테고리별/기간별/성별/연령별 순위 데이터 수집과 분석에 사용."
display_name: 무신사 랭킹 수집
agency: data-intelligence
role: 트렌드 애널리스트 (Trend Analyst)
phase: any
triggers:
  - 무신사 랭킹 크롤링해줘
  - 무신사에서 인기 상품 가져와
  - 무신사 트렌드 수집해줘
  - 무신사 순위 데이터 뽑아줘
  - 경쟁사 랭킹 수집
  - 무신사 베스트 상품 분석
  - 무신사 카테고리별 랭킹
presets:
  - brand.config.json
  - categories.json
scripts:
  - system/scripts/musinsa-crawler/crawler.py
outputs:
  - "workspace/musinsa-ranking/ranking_YYYYMMDD/"
---

# 무신사 랭킹 수집

> 무신사 랭킹 API를 통해 카테고리별/기간별/성별/연령별 상품 랭킹을 수집한다.
> Selenium 없이 API 직접 호출 — 빠르고 안정적이며 별도 브라우저 설치 불필요.

## 언제 사용

사용자가 아래와 같이 요청할 때 작동한다:
- "무신사 랭킹 가져와", "무신사 인기 상품 수집해줘"
- "경쟁사 트렌드 분석용 데이터 뽑아줘"
- "요즘 무신사에서 뭐가 잘 팔려?"
- "무신사 상의 카테고리 주간 랭킹"
- "20대 여성 무신사 랭킹 수집"

"무신사", "랭킹", "인기 상품", "경쟁사 데이터", "트렌드 수집" 등의 표현이 있으면
이 스킬에 해당할 가능성이 높다.

---

## Step 1: 필터 선택 (AskUserQuestion — 매번 실행)

크롤링 전 **반드시** AskUserQuestion으로 사용자에게 필터를 확인받는다.
Pinterest 크롤러의 키워드 확인과 동일한 패턴이다.

### 1차 질문 (4개 동시)

```json
{
  "questions": [
    {
      "question": "어떤 카테고리의 랭킹을 수집할까요?",
      "header": "카테고리",
      "multiSelect": true,
      "options": [
        {"label": "전체 (000)", "description": "모든 카테고리 통합 랭킹"},
        {"label": "상의 (001)", "description": "반소매, 긴소매, 셔츠, 맨투맨, 후드 등"},
        {"label": "아우터 (002)", "description": "자켓, 코트, 패딩, 카디건 등"},
        {"label": "바지 (003)", "description": "데님, 슬랙스, 조거, 숏팬츠 등"}
      ]
    },
    {
      "question": "어떤 기간 기준의 랭킹을 가져올까요?",
      "header": "기간",
      "multiSelect": false,
      "options": [
        {"label": "실시간", "description": "지금 이 순간 가장 인기 있는 상품"},
        {"label": "일간 (DAILY)", "description": "오늘 하루 기준 랭킹"},
        {"label": "주간 (WEEKLY)", "description": "최근 1주일 기준 랭킹"},
        {"label": "월간 (MONTHLY)", "description": "최근 1개월 기준 랭킹"}
      ]
    },
    {
      "question": "성별 필터는 어떻게 할까요?",
      "header": "성별",
      "multiSelect": false,
      "options": [
        {"label": "전체 (A)", "description": "남녀 통합 랭킹"},
        {"label": "여성 (F)", "description": "여성 랭킹 — 와키윌리 우먼스 타겟"},
        {"label": "남성 (M)", "description": "남성 랭킹"},
        {"label": "남녀 각각 수집", "description": "M + F 두 번 수집하여 비교"}
      ]
    },
    {
      "question": "연령대 필터는 어떻게 설정할까요?",
      "header": "연령대",
      "multiSelect": false,
      "options": [
        {"label": "전체 연령", "description": "연령 필터 없이 통합 랭킹"},
        {"label": "20-24세", "description": "와키윌리 코어타겟 전반"},
        {"label": "25-29세", "description": "와키윌리 코어타겟 후반"},
        {"label": "코어타겟 각각", "description": "20-24 + 25-29 두 번 수집하여 비교"}
      ]
    }
  ]
}
```

카테고리에서 "상의/아우터/바지" 외 다른 카테고리를 원하면 Other로 입력받는다.
사용 가능한 전체 카테고리:

| 코드 | 카테고리 | 코드 | 카테고리 |
|------|---------|------|---------|
| 000 | 전체 | 100 | 원피스/스커트 |
| 001 | 상의 | 101 | 소품 |
| 002 | 아우터 | 103 | 신발 |
| 003 | 바지 | 104 | 뷰티 |
| 004 | 가방 | 026 | 속옷/홈웨어 |
| | | 017 | 스포츠/키즈 |

### 2차 질문 (선택적)

카테고리에 서브카테고리가 있고, 사용자가 세부 필터를 원할 수 있으면 추가로 물어본다.
단순히 "전체" 또는 단일 대분류를 선택했으면 2차 질문은 생략한다.

---

## Step 2: 크롤러 실행

사용자 선택을 파라미터로 변환하여 크롤러를 실행한다.

```bash
cd "{PROJECT_ROOT}/system/scripts/musinsa-crawler" && \
python3 crawler.py \
  --category "{카테고리코드}" \
  --period "{기간}" \
  --gender "{성별}" \
  --age "{연령대}" \
  --format xlsx \
  2>&1
```

### 파라미터 매핑

| 사용자 선택 | --category | --period | --gender | --age |
|------------|-----------|---------|---------|------|
| 전체 | 000 | REALTIME | A | AGE_BAND_ALL |
| 상의 | 001 | DAILY | M | AGE_BAND_20 |
| 아우터 | 002 | WEEKLY | F | AGE_BAND_25 |
| 바지 | 003 | MONTHLY | | AGE_BAND_30 |
| 복수 카테고리 | 001,002,003 | | | |

### "남녀 각각" / "코어타겟 각각" 처리

사용자가 비교 수집을 선택한 경우, 크롤러를 여러 번 실행한다:
- **남녀 각각**: `--gender M` + `--gender F` 두 번 실행
- **코어타겟 각각**: `--age AGE_BAND_20` + `--age AGE_BAND_25` 두 번 실행
- 결과 파일이 각각 생성되므로 비교 분석이 가능하다.

### 이미지 다운로드 (선택)

사용자가 "이미지도 받아줘"라고 하면 `--download-images` 플래그 추가.
기본적으로는 이미지 URL만 엑셀에 기록하고 다운로드하지 않는다.

---

## Step 3: 결과 보고

크롤링 완료 후 사용자에게 보고:
- 수집된 상품 수
- 저장 경로
- 상위 5~10개 상품 요약 (순위, 브랜드, 상품명, 가격)
- 눈에 띄는 트렌드 (급상승 상품, 할인율 높은 상품 등)

### 와키윌리 인사이트 (자동 분석)

수집 완료 후, 와키윌리 관점에서 간략한 인사이트를 제공한다:
- **경쟁 브랜드 동향**: 유사 포지셔닝 브랜드가 상위에 있는지
- **가격대 분포**: 코어타겟이 선호하는 가격대
- **카테고리 트렌드**: 어떤 아이템이 강세인지
- **BTA 참고**: 베이직/트렌드/악센트 관점에서의 시사점

이 분석은 `brand.config.json`과 `categories.json` 프리셋을 참조한다.

---

## 저장 경로

```
workspace/musinsa-ranking/
└── ranking_YYYYMMDD/
    ├── musinsa_ranking_{category}_{period}_{gender}_{timestamp}.xlsx
    ├── musinsa_ranking_{category}_{period}_{gender}_{timestamp}.json  (선택)
    ├── images/                                                         (선택)
    │   ├── 001_브랜드명_상품ID.jpg
    │   └── ...
    └── _result.json                                                    (시스템용)
```

---

## 에러 대응

| 에러 | 원인 | 해결 |
|------|------|------|
| API 호출 실패 (403) | IP 차단 또는 헤더 문제 | User-Agent 변경 후 재시도 |
| 상품 0개 수집 | 카테고리/필터 조합에 결과 없음 | 필터 조건 완화 (전체 카테고리, 전체 연령) |
| openpyxl 미설치 | 패키지 누락 | `pip install openpyxl` 실행 |
| 타임아웃 | 네트워크 느림 | 30초 대기 후 자동 재시도 |

## 주의사항

- 무신사 API는 비공식이므로 구조가 변경될 수 있다. 에러 발생 시 API 응답을 확인하고 파서를 수정한다.
- 과도한 호출은 IP 차단을 유발할 수 있다. 복수 카테고리 수집 시 카테고리 간 1초 딜레이를 둔다.
- 수집 데이터는 내부 MD 기획 및 경쟁 분석 용도로만 사용한다.
