---
type: skill
id: market-intelligence
name: market-intelligence
description: "네이버 데이터랩, 구글 트렌드, 경쟁사 키워드, 주간 마켓 인텔리전스 리포트가 필요할 때 사용."
display_name: MD 마켓 인텔리전스
agency: data-intelligence
role: 마켓 인텔리전스 애널리스트 (Market Intelligence Analyst)
phase: plan
triggers:
  - 마켓 인텔리전스 리포트 뽑아줘
  - 검색 트렌드 어때?
  - 키워드 요즘 어떤 게 떠?
  - 네이버 데이터랩 돌려줘
  - 구글 트렌드 확인해줘
  - 경쟁사 키워드 분석해줘
  - 이번 주 트렌드 리포트
presets:
  - categories.json
  - channels.json
  - brand.config.json
config:
  - config/market-intel-config.json
outputs:
  - "output/[시즌]/_season/plan_market-intel-weekly-YYYY-MM-DD.md"
automation:
  scheduler: "launchd/com.fpof.market-intel.plist"
  pipeline: "scripts/market-intel/run-pipeline.sh"
  on_demand: "/market-intel 슬래시 명령"
---

# MD 마켓 인텔리전스

> 마켓 인텔리전스 애널리스트가 네이버 데이터랩과 구글 트렌드를 자동으로 수집·분석하여
> MD가 즉시 액션할 수 있는 키워드 트렌드 리포트를 주간으로 생성합니다.

## 언제 사용
- "이번 주 어떤 키워드가 뜨고 있어?", "경쟁사 검색량 어때?"
- Plan 단계에서 trend-research.md의 데이터 기반 보완재로 사용
- Check 단계에서 채널 외부 시장 신호 모니터링 시
- 언제든지 `/market-intel` 슬래시 명령으로 즉시 실행 가능

## 사전 준비
1. `.env` 파일에 네이버 API 크리덴셜 설정 (`.env.example` 참조)
2. Python 의존성 설치: `pip3 install -r requirements-market-intel.txt`
3. `config/market-intel-config.json`에서 추적 키워드 확인

## 자동화 파이프라인

### 스케줄 실행
매주 월요일 09:00 자동 실행 (launchd).
결과: `output/[시즌]/_season/plan_market-intel-weekly-YYYY-MM-DD.md` 저장 + Teams 알림

### 온디맨드 실행
```bash
/market-intel                              # 슬래시 명령
./scripts/market-intel/run-pipeline.sh     # 직접 실행
```

## 데이터 소스

### 네이버 데이터랩 쇼핑 인사이트
- **엔드포인트**: `/v1/datalab/shopping/category/keywords`
- **데이터**: 키워드 그룹별 상대 검색량 (주간 단위)
- **연령 분석**: `/v1/datalab/shopping/category/keyword/age` — 10대/20대/30대 비중
- **카테고리**: 50000000 (패션의류)

### Google Trends (pytrends)
- **데이터**: 키워드별 관심도, 급상승 관련 검색어, 경쟁사 비교
- **한국어 + 영어** 키워드 동시 조회
- **geo**: KR (한국) + 글로벌

## 키워드 설정 변경 방법
`config/market-intel-config.json`을 열어 수정한다. 코드 변경 불필요.

```json
{
  "naver_datalab": {
    "keyword_groups": [
      { "group_name": "새키워드", "keywords": ["키워드1", "키워드2"] }
    ]
  }
}
```

## 실행 절차

### Step 1: 데이터 수집
`scripts/market-intel/fetch-data.py` 실행
- 네이버 데이터랩 키워드 트렌드 수집
- 네이버 데이터랩 연령대별 분석 수집
- Google Trends 관심도 + 라이징 쿼리 + 경쟁사 비교 수집
- 결과: `data/market-intel/raw-YYYY-MM-DD.json`

### Step 2: 리포트 생성
`scripts/market-intel/generate-report.py` 실행
- JSON → 마크다운 변환
- 키워드 랭킹 테이블 (순위, 현재 지수, WoW 변화, 스파크라인)
- 20대 코어 타겟 연령 분석
- 구글 트렌드 관심도 + 라이징 쿼리
- 경쟁사 검색 관심도 비교
- MD 즉시 액션 제안 자동 생성
- 결과: `output/[시즌]/_season/plan_market-intel-weekly-YYYY-MM-DD.md`

### Step 3: Teams 알림
`scripts/send-teams-market-intel.sh` 실행
- 핵심 3가지 요약
- 키워드 TOP 3 FactSet
- MD 즉시 액션

### Step 4: 상태 업데이트
`scripts/market-intel/update-state.sh` 실행
- `.fpof-state.json` artifacts 등록

## 에러 핸들링
- **부분 실패 허용**: 네이버 실패 시 구글만으로 리포트 생성
- **인증 실패**: 즉시 중단 + 명확한 에러 메시지
- **Rate limit**: 네이버 429 → 1초 대기 재시도 / pytrends → 5초 대기 재시도
- **Teams 실패**: WARNING 로그만, 파이프라인 계속

## 완료 조건
- [ ] 전체 키워드 그룹 트렌드 지수 수집
- [ ] WoW 변화율 계산 완료
- [ ] 20대 연령 비중 분석 완료
- [ ] 구글 트렌드 라이징 쿼리 추출
- [ ] 경쟁사 비교 완료
- [ ] MD 액션 제안 3개 이상 도출
- [ ] .fpof-state.json artifacts 업데이트

## 체크리스트
- [ ] categories.json의 카테고리와 키워드 그룹이 정합성 있는가?
- [ ] 20대 코어 타겟 신호가 명확히 강조되었는가?
- [ ] WoW 변화율에 데이터 기간이 명시되었는가?
- [ ] 라이징 쿼리가 와키윌리 상품 기획에 연결되었는가?
- [ ] 구글 트렌드와 네이버 데이터랩 두 소스가 모두 포함되었는가?
- [ ] MD 즉시 액션 제안이 포함되었는가?
