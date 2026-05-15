# 패션 이미지 생성 — 공용 정책

이 문서는 K-패션 스킬 전체가 **프로젝트 로컬 래스터 이미지**를 생성할 때 따르는 **단일 진실의 원천(single source of truth)**입니다.

LLM-agnostic 정책으로, Claude/GPT/Gemini/Grok/OpenDesign/Codex 등 어떤 환경에서도 동작하도록 작성되어 있습니다.

## 환경별 권장 이미지 생성 도구

사용자가 `imagegen`, `$imagegen`을 언급하거나 패션 스킬에 이미지 생성을 요청하면, **현재 LLM 환경에서 사용 가능한 인증된 이미지 생성 도구**를 사용하세요.

| 환경 | 권장 도구 |
|---|---|
| **Claude 환경 (Claude.ai · Claude Code)** | Claude의 이미지 생성 기능 (사용 가능 시) 또는 사용자가 지정한 외부 도구 |
| **ChatGPT (GPT-4o/GPT-4 with vision)** | DALL-E 3 (내장) 또는 GPT image_gen tool |
| **Gemini (Google)** | Imagen 3 또는 사용자가 지정한 외부 도구 |
| **Grok (xAI)** | Aurora 또는 사용자가 지정한 외부 도구 |
| **OpenDesign** | ComfyUI 워크플로우 또는 OpenDesign의 내장 imagegen API |
| **Codex 환경** | built-in `image_gen` tool (인증된 세션) |
| **Cursor / Continue / 기타 IDE 통합** | IDE의 통합 도구 또는 사용자 지정 외부 도구 |

이미지 생성 도구가 명확하지 않으면 사용자에게 어떤 도구를 사용할지 물어보세요.

## 공용 출력 규칙

모든 환경에서 동일하게 적용됩니다.

1. 생성된 이미지는 **프로젝트 루트의 `images/` 폴더**에 의미 있는 파일명으로 저장:
   - `cover-look.png`, `look-01.png`, `look-02.png`, … (룩북)
   - `lineup-tee-01.png`, `lineup-knit-01.png`, … (신규 라인업)
   - `look-01-basic.png`, `look-02-newbasic.png`, … (스타일링 보드)
   - `concept-mood-01.png`, `concept-keyword-bg.png`, … (컨셉 보드)
   - `fabric-functional-01.png`, … (패브릭 보드)
   - `palette-anchor.png`, … (컬러 스토리)
2. **최종 HTML에서 임시 폴더, 외부 URL, base64 blob 참조 금지**:
   - 금지: `$CODEX_HOME/...`, `/tmp/...`, `https://cdn.openai.com/...`, `data:image/png;base64,...`
   - 허용: `images/look-01.png` (프로젝트 내 상대 경로만)
3. 생성된 원본 이미지(임시 폴더 내)는 변경 없이 유지하고, 프로젝트 폴더로 **복사**하세요. 이동 금지.
4. 이미지 생성이 불가능하거나 실패하면, HTML 산출물의 **폴백 블록**(CSS 그라데이션, 인라인 SVG 실루엣, `data-fallback` 메시지)으로 자동 대체. 사용자에게 어떤 자산이 누락됐는지 알려주세요.

## 기본값

스킬 단위에서 다른 크롭을 명시하지 않는 한, 모든 패션 스킬에 다음 기본값을 적용:

```
engine      = 환경별 권장 도구
size_mood   = 정사각형 또는 정사각형 근접 무드 이미지 (1024x1024)
size_look   = 수직 4:5 에디토리얼 / 풀바디 피규어 (1024x1280 또는 1024x1536)
out_dir     = images/ (index.html 옆)
quality     = 고품질 에디토리얼 프롬프트 — API 품질 플래그는 사용 안 함
```

이미지 도구가 정확히 일치하는 dimension을 반환하지 않을 수 있습니다. 생성된 이미지를 보존하고, 레이아웃에 일관된 프레임이 필요하면 CSS `object-fit: cover` 또는 비파괴 로컬 복사본을 사용하세요.

## 투명 배경 이미지

투명 배경 요청 시 환경별 워크플로우:

### Claude / GPT / Gemini / Grok
이미지 생성 도구가 투명 배경을 직접 지원하면 그대로 사용. 지원하지 않으면 다음 절차:
1. 평평한 크로마키 배경(예: 형광 그린 #00ff00, 마젠타 #ff00ff)에 피사체 생성
2. 이미지 편집 도구(Photoshop, GIMP, 또는 chroma-key 스크립트)로 크로마키 제거
3. PNG/WebP 알파 채널 출력
4. 투명 모서리 + 프린지 없음 검증

### OpenDesign / Codex 환경
환경의 chroma-key 워크플로우 헬퍼가 있으면 활용:
1. 크로마키 배경에 피사체 생성
2. 환경의 chroma-key 헬퍼로 알파 PNG/WebP 추출
3. 프로젝트 또는 `tmp/imagegen/`로 복사

투명 배경이 필요한 패션 산출물: **스타일링 보드의 풀바디 컷아웃**.

## 프롬프트 형식 (공용)

이미지 생성 프롬프트는 영어로 작성해도 됩니다 (모델 품질을 위해). 그러나 사용자가 한국어로 작성하거나 브랜드/맥락이 한국 K-패션이면, 프롬프트에서 파생되는 *시각적으로 보이는 산출물 카피*(캡션, 폴백 카드, 프롬프트 레지스터 요약, alt 텍스트, 섹션 라벨)는 한국 패션 비즈니스 등록을 따라야 합니다 (영어 산업용어 혼용 유지).

각 패션 스킬은 자체 프롬프트 형식을 정의하지만, 모든 프롬프트는 다음 공유 제약을 따라야 합니다.

### 필수 항목

```
Use case:           예: ads-marketing, product-mockup, design / styling-board, design / new-lineup
Asset type:         프로젝트 용도 명명 (예: fashion lookbook image, full-body cut-out figure)
Composition/framing: 풀바디 / 3/4 / 정사각형 무드 / 디테일 크롭 + 사용 가능 마진
Color palette:      active DESIGN.md 토큰을 물리적 의류 컬러로 번역
                    (예: "chalk cotton", "iced blue poplin")
Materials/textures: active fabric board 있으면 사용. 없으면 브리프에서
Constraints:        "no logos, no readable text, no watermark, 
                     no distorted hands, no extra limbs"
Avoid:              자산별 anti-direction (예: "runway crowd",
                    "busy background", "cropped shoes")
```

### 선택 항목

```
Lookbook 톤:        "editorial fashion photography", "soft daylight"
스타일링 컷아웃:    "editorial cut-out, transparent background, soft even light"
신규 라인업 플랫레이: "editorial flat-lay, consistent lighting across the lineup"
무드 이미지:        "atmospheric, photographic, no AI-slop sparkle"
```

## 실패 처리

이미지 생성 도구를 사용할 수 없거나 생성이 실패한 경우:

1. **외부 API 대체 금지** — 사용자가 명시적으로 다른 도구를 지정하지 않는 한, 환경의 인증된 도구만 사용
2. HTML 산출물은 폴백 블록을 노출해 **출하 가능한 상태 유지** — 원래 프롬프트를 `data-fallback` 속성에 기록
3. 사용자에게 어떤 자산이 실패했는지 + 어떤 도구를 시도했는지 한국어 노트로 알림

## 프로젝트 게이트

생성된 이미지를 참조하는 산출물을 완료하기 전 검증:

- 모든 `<img src="...">`가 프로젝트 내 파일로 해소됨
- 생성된 모든 산출물이 `<project>/images/`로 복사됨
- 최종 산출물이 임시 폴더(`$CODEX_HOME`, `/tmp`), 외부 이미지 URL, base64 blob 참조 없음
- 환경의 인증된 도구만 사용 (API 키, ima2, ComfyUI 같은 다른 도구를 사용자 명시적 요청 없이 사용 금지)

## K-패션 브랜드 톤 가이드

이미지 생성 시 사용자 브랜드 톤에 맞춰 프롬프트 조정:

| 브랜드 톤 | 권장 라이팅 / 무드 | 모델 / 배경 톤 | 예시 브랜드 |
|---|---|---|---|
| **미니멀 시크** | 단일 디렉셔널 라이트, 자연 텍스처 | 깨끗한 스튜디오, 뉴트럴 배경 | 마뗑킴, 무신사 스탠다드 |
| **로맨틱 / 소프트 페미니티** | 자연광, 부드러운 그림자, airy | 빛이 들어오는 인테리어, 정원 | 마르디 메크르디 |
| **위트 / 캐릭터 IP** | 비비드, 컨트라스트 강한 라이팅 | 컬러풀 스튜디오, 그래픽 백드롭 | 와키윌리, 키르시 |
| **컨셉추얼 / 글로벌** | 시어트리컬 라이팅, 의도적 텍스처 | 추상적 세트, 스모키 스튜디오 | 아더에러, IAB STUDIO |
| **스트릿 / 90s** | 직사 플래시, raw 톤 | 도시 거리, 워시드 벽 | 디스이즈네버댓, 와키윌리 STREET 시즌 |
| **K-아이돌 / 팬덤** | 클린 + 비비드, 깨끗한 보디 | 컬러 백드롭, 미니멀 세트 | 키르시, 와키윌리 IP 캡슐 |

프롬프트에 K-패션 컨텍스트 단서가 자연스럽게 들어가도록 작성하세요 ("Seoul studio mood", "Korean youth fashion editorial", "K-pop styling reference"). 단, 가짜 K-팝 아이돌 얼굴 생성은 금지 (initial 또는 이름 없이 generic 모델).
