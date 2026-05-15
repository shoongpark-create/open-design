---
name: md-to-image
description: .md 파일을 PNG/SVG로 변환(브라우저 X, marknative). 트리거 "이미지로 만들어줘", "카드 이미지", "PNG 변환".
---

# md-to-image v1

마크다운을 브라우저 없이 PNG/SVG 이미지로 변환한다.

## When to Use

**전체 트리거 키워드** (description 외 추가):
- '이미지로 만들어줘', 'PNG으로 변환', '카드 이미지', '마크다운 이미지'
- 'md to png', 'md to image', '공유용 이미지', '카드로 만들어줘'
- '마크다운을 이미지로', '마크다운 렌더링', '페이지 이미지'

**자동 발동 컨텍스트**:
- 사용자가 `.md` 파일을 업로드하면서 '이미지', 'PNG', 'SVG', '카드' 등을 요청하는 경우
- 다른 스킬(tweet-trend-analyzer 등)이 생성한 `.md` 파일을 이미지로 변환해야 하는 경우
- 마크다운을 이미지로 변환하는 모든 요청에서 **적극적으로** 트리거할 것

기존 방식: Markdown → HTML → DOM/CSS → 브라우저 스크린샷
이 스킬: Markdown → 자체 레이아웃 엔진 → skia-canvas → PNG Buffer

한글, 영문, CJK 모두 지원. GFM(테이블, 체크리스트, 취소선) 포함.

## 의존성 설치 (최초 1회)

marknative는 npm 패키지 + skia-canvas 네이티브 바이너리가 필요하다.
스킬 디렉토리 하위 `.marknative/` 폴더에 설치한다.

```bash
SKILL_DIR="$(dirname "$(readlink -f "$0")")"  # 스킬 위치 자동 감지
# 또는 직접 지정:
SKILL_DIR="/path/to/md-to-image"

INSTALL_DIR="$SKILL_DIR/.marknative"

if [ ! -d "$INSTALL_DIR/node_modules" ]; then
  git clone https://github.com/liyown/marknative.git "$INSTALL_DIR"
  cd "$INSTALL_DIR"
  npm install   # skia-canvas 네이티브 바이너리 포함
fi
```

Bun도 필요하다:
```bash
which bun || curl -fsSL https://bun.sh/install | bash
export BUN_INSTALL="/root/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
```

## 사용법

### 기본 (와이드 프리셋 — 1600×1000)

```bash
export BUN_INSTALL="/root/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

bun run scripts/render.ts input.md /mnt/user-data/outputs/
```

### 프리셋 선택

| 프리셋 | 크기 | 용도 |
|--------|------|------|
| `card` | 1080×1440 | SNS 카드, 인스타그램, 세로형 공유 |
| `wide` | 1600×1000 | 기본값. 가로형 리포트, 뉴스레터 |
| `slide` | 1920×1080 | 프레젠테이션, 16:9 슬라이드 |

```bash
bun run scripts/render.ts input.md ./out --preset card
bun run scripts/render.ts input.md ./out --preset slide
```

### 커스텀 크기 + 폰트 스케일

```bash
# 커스텀 크기
bun run scripts/render.ts input.md ./out --width 2400 --height 1200

# 폰트 확대 (1.2배)
bun run scripts/render.ts input.md ./out --preset wide --font-scale 1.2

# SVG 출력
bun run scripts/render.ts input.md ./out --format svg
```

### 코드에서 직접 호출

다른 스킬이나 스크립트에서 marknative를 직접 import할 수도 있다:

```ts
import { renderMarkdown } from '/path/to/.marknative/src/index.ts'

const pages = await renderMarkdown(markdownString, { format: 'png' })
// pages[0].data → Buffer (PNG)
```

테마를 바꾸려면 `.marknative/src/theme/default-theme.ts`를 렌더 전에 수정한다.
`scripts/render.ts`가 이 작업을 `--preset`/`--width`/`--font-scale` 옵션으로 자동 수행한다.

## 워크플로우 예시

### 1. 트렌드 요약 → 카드 이미지

```
[tweet-trend-analyzer가 AI_trend_summary_2026-04-02.md 생성]
      ↓
bun run scripts/render.ts AI_trend_summary_2026-04-02.md /mnt/user-data/outputs/ --preset wide
      ↓
[trend_page_01.png ~ trend_page_05.png 생성]
```

### 2. 업로드된 .md → 공유용 카드

```
사용자: "이 md 파일 카드 이미지로 만들어줘"
      ↓
bun run scripts/render.ts /mnt/user-data/uploads/document.md /mnt/user-data/outputs/ --preset card
```

## 알려진 제약

- **커스텀 폰트 미지원** — 시스템 기본 sans-serif/monospace만 사용 (marknative 로드맵에 있음)
- **이미지 인라인 미지원** — 마크다운 내 이미지 URL은 렌더링되지 않음 (placeholder 표시)
- **skia-canvas 네이티브 의존** — Bun만으로는 설치 실패할 수 있음, npm install 필요
- **링크 비활성** — PNG이므로 하이퍼링크는 텍스트로만 표시
- **페이지 분할** — 긴 문서는 자동으로 여러 페이지로 분할됨 (고정 높이 기준)

## 출력 파일명 규칙

`{입력파일명}_{페이지번호}.png` 형식.
예: `AI_trend_summary_2026-04-02.md` → `AI_trend_summary_2026-04-02_01.png`, `..._02.png`, ...

/mnt/user-data/outputs/ 출력 시 반드시 영문 파일명 사용 (한글 파일명은 claude.ai에서 로드 실패).
