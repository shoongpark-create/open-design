# Executive Summary Skill

> 프로젝트/마케팅 보고용 요약 스킬

회의록, 이메일, 마케팅 리포트, 대화 로그 등 긴 텍스트를 **회사 양식에 맞춘 구조화된 요약 보고서**로 변환합니다.

---

## 📦 설치 방법

### Claude Code에서

```bash
# 이 폴더를 스킬로 등록
/skill add .claude/skills/executive-summary
```

### 수동 설치

`.claude/skills/executive-summary` 폴더를 그대로 사용하면 됩니다.

---

## 🚀 사용 방법

### 자동 트리거

다음 키워드가 포함된 요청 시 **자동으로 활성화**됩니다:

- `주간 보고`
- `임원 보고`
- `캠페인 결과 요약`
- `프로젝트 회의 요약`
- `보고용으로 요약`
- `보고서 작성`

### 사용 예시

```
"이 회의록을 주간 보고용으로 정리해 줘"
"마케팅 캠페인 결과를 임원 보고 형식으로 요약해 줘"
"Slack 대화 내용에서 액션 아이템을 뽑아서 보고서로 만들어 줘"
```

---

## 📂 폴더 구조

```
executive-summary/
├── SKILL.md                    # 스킬 정의 (메인)
├── README.md                   # 사용 설명서 (현재 파일)
├── templates/
│   ├── report-template.md      # 보고서 템플릿
│   └── example-good.md         # 좋은 예시
└── references/
    ├── metrics-definition.md   # 지표 정의 사전
    └── trigger-keywords.md     # 트리거 키워드 목록
```

---

## 📋 출력 형식

모든 보고서는 다음 **4개 섹션**으로 구성됩니다:

| 섹션 | 내용 |
|------|------|
| **Summary** | 3줄 이내 핵심 요약 |
| **Key Metrics** | 표 형식의 주요 지표 |
| **Insights** | 결과 분석 및 해석 |
| **Action Items** | 체크박스 형태의 할 일 목록 |

### Action Item 형식

```markdown
- [ ] [할 일] | 담당: [이름] | 마감: YYYY-MM-DD
```

---

## ⚙️ 커스터마이징

### 지표 추가

`references/metrics-definition.md` 파일에 팀 맞춤 지표를 추가하세요.

### 트리거 키워드 추가

`references/trigger-keywords.md` 파일의 "우리 팀 커스텀 트리거" 섹션에 추가하세요.

### 템플릿 수정

`templates/report-template.md` 파일을 팀 양식에 맞게 수정하세요.

---

## 📝 변경 이력

| 버전 | 날짜 | 변경 내용 |
|------|------|----------|
| 1.0.0 | 2026-01-15 | 초기 버전 생성 |

---

## 📄 라이선스

내부 사용 목적. 자유롭게 수정 및 확장 가능.
