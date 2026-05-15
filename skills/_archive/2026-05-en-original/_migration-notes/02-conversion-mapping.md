# LLM-agnostic 변환 매핑

> 모든 LLM(Claude Code, GPT, Gemini, Grok, Claude 웹, OpenDesign 등)에서 SKILL.md를 그대로 읽고 따라할 수 있도록 변환하는 규칙
> 핵심 원칙: vendor-specific 표현은 "선택적 악세서리"로 표시하고, 본문 워크플로는 일반 LLM이 따라할 수 있게 작성

## 1. Claude Code 자동 컨텍스트 주입 → 명시적 파일 경로

### 변환 ① — DESIGN.md 참조

| Before (Vendor-lock) | After (LLM-agnostic) |
|---|---|
| `Read the active DESIGN.md (injected above).` | `프로젝트의 디자인 시스템 문서(보통 프로젝트 루트의 \`DESIGN.md\` 또는 \`design-tokens.json\`)를 먼저 읽으세요. 환경에 따라 이 파일이 자동 주입되지 않을 수 있으니, 파일이 컨텍스트에 보이지 않으면 사용자에게 경로를 물어보거나 프로젝트 루트에서 찾으세요.` |
| `Read the active \`DESIGN.md\` (injected above). Bind type and color tokens.` | `프로젝트 루트의 \`DESIGN.md\`(또는 등가 디자인 토큰 파일)를 읽고, 정의된 색상·타이포그래피 토큰을 \`:root\` CSS 변수로 바인딩하세요.` |
| `the active DESIGN.md` | `프로젝트의 디자인 시스템 문서` |
| `(injected above)` | (삭제하거나 "환경에 따라 자동 주입될 수 있음"으로 명시) |

### 변환 ② — Pre-flight 파일 읽기

`Step 0 — Pre-flight`에서 자동 주입을 가정하지 않고, 어떤 파일을 어디서 읽을지 명시.

**Before:**
```
### Step 0 — Pre-flight
1. Read `assets/template.html` end-to-end.
2. Read `references/layouts.md` and pick a rhythm.
3. Read `references/checklist.md`.
4. Read the active `DESIGN.md`. Bind type and color tokens.
```

**After:**
```
### Step 0 — 사전 점검
1. 이 스킬 폴더의 `assets/template.html`을 처음부터 끝까지 읽으세요. (시작 템플릿)
2. `references/layouts.md`를 읽고 사용할 레이아웃 리듬을 하나 선택하세요.
3. `references/checklist.md`를 읽어 자체 검수 기준을 인지하세요.
4. 프로젝트 루트의 `DESIGN.md`(또는 등가 디자인 토큰 파일)를 읽고, 색상·타이포 토큰을 `:root` CSS 변수로 바인딩하세요. 파일이 없으면 사용자에게 디자인 시스템 위치나 기본 톤을 묻고 진행하세요.
```

## 2. Claude artifact 표준 → LLM-agnostic 출력 규약

### 변환 ③ — Output contract

**Before:**
```
## Output contract

Emit between `<artifact>` tags:

\`\`\`
<artifact identifier="email-slug" type="text/html" title="Email — Subject Line">
<!doctype html>
<html>...</html>
</artifact>
\`\`\`

One sentence before the artifact, nothing after.
```

**After:**
```
## 출력 규약

단일 HTML 문서(`<!doctype html>`부터 `</html>`까지)를 결과물로 출력하세요.

- **Claude 환경(Claude.ai / Claude Code)**: 결과물을 아래와 같이 `<artifact>` 태그로 감싸세요.
  \`\`\`
  <artifact identifier="email-slug" type="text/html" title="Email — Subject Line">
  <!doctype html>
  <html>...</html>
  </artifact>
  \`\`\`
- **그 외 환경(GPT / Gemini / Grok / 일반 채팅)**: 표준 마크다운 HTML 코드 블록으로 출력하세요.
  \`\`\`html
  <!doctype html>
  <html>...</html>
  \`\`\`

출력 앞에 한 문장 요약, 뒤에는 아무것도 덧붙이지 마세요.
```

## 3. OpenDesign 전용 속성 → 선택적 악세서리

### 변환 ④ — data-od-id 속성

**Before:**
```
- `data-od-id` on the masthead, hero, headline, CTA, specs.
```

**After:**
```
- 주요 섹션(masthead, hero, headline, CTA, specs)에 식별용 속성을 추가하세요.
  - **OpenDesign 환경에서 사용**: `data-od-id="<section-name>"` 형태로 추가하면 인라인 코멘트 모드를 사용할 수 있습니다.
  - **그 외 환경**: 일반 `id="<section-name>"` 속성으로 충분합니다.
```

### 변환 ⑤ — frontmatter `od:` 블록 유지 + 본문에 설명

`od:` frontmatter 블록 자체는 유지 (OpenDesign 환경에서 메타데이터로 사용). 본문에 한 줄 설명 추가:

```yaml
od:
  mode: prototype
  platform: desktop
  scenario: design
  category: fashion
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
```

본문 어딘가에 (예: `## 환경 호환성` 섹션):
```
## 환경 호환성

이 스킬은 OpenDesign에서 우선 설계되었지만, 어떤 LLM 환경(Claude, GPT, Gemini, Grok 등)에서도
사용할 수 있습니다. frontmatter의 `od:` 블록은 OpenDesign 환경에서만 의미를 가지며, 다른 환경에서는
무시됩니다. 본문의 워크플로는 모든 LLM이 따라할 수 있도록 작성되어 있습니다.
```

## 4. Codex 환경 전용 → 일반 이미지 생성 도구

### 변환 ⑥ — imagegen.md 정책

**Before** (Codex 전용):
```
When the user mentions `imagegen`, use the Codex built-in `image_gen` tool through the current authenticated session.

Do not use:
- OpenAI API / CLI fallback, including `scripts/image_gen.py`
- `OPENAI_API_KEY` setup or direct SDK runners
- ...

After generation, copy the selected output from `$CODEX_HOME/generated_images/...` into the current project.
```

**After** (환경별 매핑):
```
## 이미지 생성 정책

사용자가 `imagegen` 또는 이미지 생성을 요청하면, **현재 LLM 환경에서 사용 가능한 인증된 이미지 생성 도구**를 사용하세요.

환경별 권장 도구:
- **Claude 환경**: Claude의 이미지 생성 기능 (사용 가능 시) 또는 사용자가 지정한 외부 도구
- **ChatGPT/GPT API**: DALL-E (내장) 또는 사용자가 지정한 외부 도구
- **Gemini**: Imagen 또는 사용자가 지정한 외부 도구
- **OpenDesign**: ComfyUI 워크플로우 또는 OpenDesign의 내장 imagegen API
- **Codex 환경**: built-in `image_gen` 도구

### 공통 출력 규칙
- 생성된 이미지는 프로젝트 루트의 `images/` 폴더에 의미 있는 파일명(`cover-look.png`, `look-01.png`, `mood-03.png` 등)으로 저장
- 최종 HTML에서 임시 폴더(`$CODEX_HOME`, `/tmp` 등), 외부 URL, base64 blob을 참조하지 마세요. 반드시 프로젝트 내 상대 경로 사용
- 이미지 생성이 불가능하거나 실패하면, HTML 산출물의 폴백 블록(CSS 그라데이션, 인라인 SVG 실루엣 등)으로 대체하고, 사용자에게 어떤 자산이 누락됐는지 알려주세요
```

## 5. 디자인 시스템 토큰 → 일반화

### 변환 ⑦ — WACKYWILLY type system

**Before:**
```
Use the active `DESIGN.md` WACKYWILLY type system. Keep `Pretendard Variable`
as the default body, table, UI, and decision-log font. Choose exactly one point
font token per artifact and bind `--font-display` to it: `--font-display-report`
for operational decks, `--font-display-romance` for romantic editorial, ...
```

**After:**
```
프로젝트의 `DESIGN.md` 타이포그래피 시스템을 사용하세요. 한국 K-패션 브랜드 표준 폰트인 `Pretendard Variable`을 본문·테이블·UI·결정 로그 기본 폰트로 두는 것을 권장합니다.

산출물 종류에 따라 디스플레이 폰트를 하나 골라 `--font-display` CSS 변수로 바인딩하세요.

| 산출물 성격 | 권장 디스플레이 폰트 (예시) |
|---|---|
| 운영 덱, 라인업 문서, 로드맵, 내부 보고 | 산돌고딕네오, Pretendard, 노토산스KR 등 가독성 우선 |
| 룩북, 무드보드, 로맨틱 에디토리얼 | 본명조, 노토세리프, 영문 세리프 (Playfair, Recoleta) |
| 스트릿/캠페인/론칭 키비주얼 | G마켓산스, 영문 산세리프 (Druk, Inter) |
| 캐릭터 IP, 팬덤 굿즈, 위트 캠페인 | 한손글씨 폰트, 디스플레이 폰트 (개성 강한 것) |

프로젝트의 `DESIGN.md`에 이미 디스플레이 토큰이 정의되어 있다면 그대로 사용하세요. 정의되지 않았다면 위 표를 참고해 사용자와 합의 후 결정합니다.

테이블 본문, 긴 노트, 리비전 로그, SKU 행, 코드, 날짜, 파일명, 작성자/시간 필드는 디스플레이 폰트를 쓰지 말고 `--font-sans` 또는 `--font-mono`를 유지하세요.
```

## 6. 자동 컨텍스트 가정 표현 정리

다음 표현은 **모두 제거**하고 명시적으로 대체하세요.

| 제거 대상 | 대체 방법 |
|---|---|
| "the active" | "프로젝트의" 또는 "현재" |
| "(injected above)" | "프로젝트 루트에서 직접 읽으세요" |
| "above" (자동 주입 가정) | "이미 컨텍스트에 있을 수도 있고 없을 수도 있으니 확인하세요" |
| "Pre-flight" 단어 자체는 유지 | 한국어로 "사전 점검" 권장 (혹은 영문 유지 가능) |

## 7. Self-check 일관화

### 변환 ⑧ — references/checklist.md 참조

**Before:**
```
### Step 4 — Self-check

Run `references/checklist.md`. Every tier must carry text content; ...
```

**After:**
```
### Step 4 — 자체 검수

이 스킬 폴더의 `references/checklist.md`에 정의된 체크리스트를 한 항목씩 직접 확인하세요. 산출물의 모든 섹션이 채워졌는지, 데이터가 빠진 곳이 없는지, K-패션 비즈니스 컨텍스트로 적합한지 검토합니다.
```

(LLM이 "Run"이라는 단어를 실행 명령으로 오해할 수 있으므로 "직접 확인" 같은 명시적 표현으로 변경)

## 8. 변환 적용 순서 (스킬 1개당)

1. **frontmatter 보존** — `od:` 블록 유지, `triggers`에 한국어 키워드 보강, `example_prompt`에 K-패션 사례 교체
2. **`description` 한국어화** — 영어 1~3문장을 자연스러운 한국어로
3. **본문 H2 헤더 한국어화** — `## Workflow` → `## 작업 흐름`, `## Output contract` → `## 출력 규약`, `## Resource map` → `## 폴더 구조` 등
4. **Vendor-lock 표현 제거** — 위 변환 ①~⑧ 일괄 적용
5. **K-패션 컨텍스트 보강** — 예시 카피, 톤, 채널 언급, 한국 브랜드 사례 추가
6. **`Output language` 섹션 추가** (Marketing 31개) — Fashion 모델 차용
7. **`환경 호환성` 섹션 추가** — 환경별 사용 방법 명시

## 9. 변환 후 검증 항목

각 스킬 변환 후 다음을 확인:

- [ ] frontmatter `od:` 블록이 보존되어 있음
- [ ] 본문이 자연스러운 한국어로 작성됨 (현장 영어 산업용어 혼용 허용)
- [ ] "the active DESIGN.md", "(injected above)" 같은 자동 주입 가정 표현이 사라짐
- [ ] `<artifact>` 태그는 "Claude 환경" 옵션으로 표시되고, 표준 HTML 코드블록 옵션도 명시
- [ ] `data-od-id`는 "OpenDesign 환경" 옵션으로 표시되고, 일반 `id` 대체 옵션도 명시
- [ ] `$CODEX_HOME` 같은 Codex 전용 경로 제거
- [ ] K-패션 비즈니스 컨텍스트(채널, 브랜드 사례, 한국 산업 용어)가 반영됨
- [ ] LLM이 instruction을 따라할 때 필요한 정보가 모두 명시되어 있음 (자동 주입 가정 없음)
