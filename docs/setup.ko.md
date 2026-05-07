# Open Design 환경 셋업 가이드 (한국어)

> **다른 머신에서 동일한 작업 환경을 처음부터 구축하는 단계별 가이드.**
>
> 이 환경은 **3개의 sibling git 리포**가 한 부모 디렉토리에 나란히 있어야 정상 작동합니다. 본 가이드는 클론부터 데몬 실행, 검증까지 풀 셋업을 다룹니다. (`workspace/`는 사용자 자유 작업 공간이라 GitHub에 없으며 본 가이드에서 다루지 않습니다.)

---

## 1. 최종 디렉토리 구조

```
~/14. open design/                          ← 부모 디렉토리 (이름은 자유)
├── system/                                 ← shoongpark-create/open-design
│   └── …
├── .claude/                                ← shoongpark-create/open-design-skills
│   ├── skills/                             ← 19 vendored + 47 심링크 (재생성)
│   ├── skills.manifest.json
│   └── scripts/link.mjs
├── .codex/                                 ← shoongpark-create/open-design-codex
│   ├── skills/                             ← 66 심링크 (47 system + 19 vendored, 재생성)
│   ├── skills.manifest.json
│   └── scripts/link.mjs
└── workspace/                              ← (선택) 사용자 자유 작업물 — 본 가이드 범위 밖
```

**핵심**: `.claude/`와 `.codex/`의 심링크는 `system/`과 `.claude/`가 정확히 sibling 위치에 있어야 작동합니다. 다른 위치에 두려면 환경변수 override (§6 참조).

---

## 2. 사전 요구사항

| 도구 | 버전 | 비고 |
|---|---|---|
| **Node.js** | `~24` | `package.json`의 `engines.node` 핀 |
| **pnpm** | `>=10.33.2 <11` | Corepack 권장 (자동 픽업) |
| **Git** | 최신 | — |
| **GitHub CLI** (`gh`) | 선택 | 인증 편의용 (private 리포 사용 시 필수) |
| **코드 에이전트 CLI** | 선택, 1개 이상 | Claude Code, Cursor, Copilot, Codex, Gemini, OpenCode, Qwen 중 |
| **Anthropic API key** | 선택 | 위 CLI가 하나도 없을 때 BYOK 폴백 |
| **Python** | 3.11+ | `excalidraw-diagram` 스킬 사용 시 (선택) |

```bash
# Corepack으로 pnpm 자동 활성화
corepack enable
corepack prepare pnpm@10.33.2 --activate

# Node 버전 확인
node --version    # v24.x.x 이어야 함
pnpm --version    # 10.33.2+ 이어야 함

# (선택) GitHub CLI 인증
gh auth status || gh auth login
```

---

## 3. 단계별 셋업

### Step 1 — 부모 디렉토리 생성

```bash
mkdir -p ~/"14. open design"
cd ~/"14. open design"
```

> 부모 디렉토리 이름은 자유롭게 변경 가능. 단, 한 번 정하면 그 안에서 sibling 구조 유지.

### Step 2 — 3개 리포 클론 (sibling 위치)

```bash
git clone https://github.com/shoongpark-create/open-design.git           system
git clone https://github.com/shoongpark-create/open-design-skills.git    .claude
git clone https://github.com/shoongpark-create/open-design-codex.git     .codex
```

클론 후 디렉토리 확인:
```bash
ls -la
# .claude/  .codex/  system/  (3개 폴더가 보여야 함)
```

### Step 3 — `system/` 의존성 설치

```bash
cd system
pnpm install                    # node_modules 복원 (~1.3GB, 처음엔 5–10분)
```

설치 검증:
```bash
pnpm typecheck                  # 타입체크 + daemon 빌드 + 잔여 JS 검증
```
모든 워크스페이스 패키지가 통과해야 함.

### Step 4 — `.claude/` 심링크 47개 재생성

```bash
cd ../.claude
node scripts/link.mjs           # 기본 (../system/skills 가정)
```

검증:
```bash
node scripts/link.mjs --dry-run
# → done: created=0 replaced=0 skipped=47 broken=0
```

### Step 5 — `.codex/` 심링크 66개 재생성

```bash
cd ../.codex
node scripts/link.mjs           # 기본 (../system/skills + ../.claude/skills 가정)
```

검증:
```bash
node scripts/link.mjs --dry-run
# → done: created=0 replaced=0 skipped=66 broken=0
```

### Step 6 — 데몬 + 웹 UI 시작

```bash
cd ../system
pnpm tools-dev                  # 브라우저 자동 오픈
```

콘솔에 `daemon ready` / `web ready`가 보이면 정상. 브라우저에 채팅 UI가 떠야 함.

종료: `Ctrl+C` 또는 다른 터미널에서 `pnpm tools-dev stop`.

---

## 4. 검증 체크리스트

위 6단계를 마친 후 **모두 ✓** 가 나와야 정상:

```bash
# 1) 3 리포 SHA 확인 — 각자 main의 최신 commit
cd ~/"14. open design/system"  && git rev-parse --short main      # 예: 2b0ce41
cd ~/"14. open design/.claude" && git rev-parse --short main      # 예: ceadc96
cd ~/"14. open design/.codex"  && git rev-parse --short main      # 예: <첫 커밋>

# 2) 심링크 무결성
cd ~/"14. open design/.claude" && node scripts/link.mjs --dry-run
# 47/47 정상

cd ~/"14. open design/.codex" && node scripts/link.mjs --dry-run
# 66/66 정상

# 3) system 빌드 + 타입체크
cd ~/"14. open design/system" && pnpm typecheck

# 4) 데몬 상태
pnpm tools-dev status --json
# daemon, web 둘 다 running 이어야 함

# 5) 스킬 로딩 확인 (데몬이 떠 있는 동안)
curl -s http://127.0.0.1:$(pnpm tools-dev status --json | grep -oE '"daemonPort":[0-9]+' | grep -oE '[0-9]+$')/api/skills | head -50
# 47개 스킬 (fashion 15 + marketing 31 + impeccable 1)이 보여야 함
```

---

## 5. 선택 사항 (필요시 추가 설치)

### 5.1. excalidraw-diagram 스킬 — Python venv 복원

```bash
cd ~/"14. open design/.claude/skills/excalidraw-diagram/references"
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt    # requirements 파일이 있다면
# 또는 첫 사용 시 스킬 안내에 따라 의존성 설치
```

### 5.2. md-to-image 스킬 — marknative 캐시

별도 작업 불필요. 첫 호출 시 `.marknative/`가 자동 생성됩니다 (~65MB).

### 5.3. ima2 이미지 엔진 (선택)

`_shared/imagegen.md` 참조. ima2 CLI 또는 ComfyUI 로컬 실행 시 fashion 스킬의 이미지 생성 품질이 향상됩니다. 없어도 CSS 폴백으로 산출물은 정상 발행됩니다.

### 5.4. quality-gate 활성화 — `design-tokens.json` 생성

`quality-gate` 스킬의 BTA 비율 등 일부 게이트는 `system/presets/wacky-willy/design-tokens.json` 파일이 있어야 실제 검증을 수행합니다. 없어도 게이트는 로드되지만 일부 검증이 noop이 됩니다.

```bash
mkdir -p ~/"14. open design/system/presets/wacky-willy"
# design-tokens.json 작성 — 최소 스키마는 docs/open-design-overview.ko.md §11.2 참조
```

### 5.5. desktop 앱 (선택)

```bash
cd ~/"14. open design/system"
pnpm tools-dev inspect desktop status --json
```
GUI 환경에서만 의미 있음. 헤드리스 서버에서는 web만 사용.

---

## 6. 환경변수 override

`.claude/`와 `.codex/`가 `system/`과 sibling이 아닌 다른 위치에 있다면 환경변수로 경로 override 가능합니다. 모두 **각 리포 root 기준 상대경로** 또는 **절대경로**로 해석됩니다.

| 리포 | 환경변수 | 기본값 |
|---|---|---|
| `.claude/` | `OD_SYSTEM_SKILLS` | `../system/skills` |
| `.codex/` | `OD_SYSTEM_SKILLS` | `../system/skills` |
| `.codex/` | `OD_VENDORED_SKILLS` | `../.claude/skills` |
| `system/` | `OD_DATA_DIR` | `<repo>/.od/` (런타임 데이터 위치) |

예시:
```bash
# system이 별도 위치에 있을 때
cd ~/projects/.claude
OD_SYSTEM_SKILLS="/work/open-design/skills" node scripts/link.mjs

# .codex가 셋 다 별도 위치
cd ~/elsewhere/.codex
OD_SYSTEM_SKILLS="/path/system/skills" \
OD_VENDORED_SKILLS="/path/.claude/skills" \
  node scripts/link.mjs
```

---

## 7. 흔한 트러블슈팅

| 증상 | 원인 / 해결 |
|---|---|
| `link.mjs`가 `broken=N` (N>0) | `system/`이나 `.claude/`가 sibling 위치에 없음. §6 환경변수 사용 또는 디렉토리 구조 확인 |
| `pnpm install` 실패 | Node 버전 확인 (`node --version` → v24.x). pnpm 버전 (`pnpm --version` → 10.33.2+). Corepack 활성 (`corepack enable`) |
| `pnpm tools-dev` 시작 안 됨 | `pnpm tools-dev status --json` 으로 기존 인스턴스 확인 후 `pnpm tools-dev stop`. 포트 충돌 시 `--daemon-port`/`--web-port` 지정 |
| 코드 에이전트 미감지 | `which claude` / `which copilot` 등으로 PATH 확인. 없으면 Anthropic API key를 환경변수 `ANTHROPIC_API_KEY`로 설정 (BYOK 폴백) |
| 심링크가 깨진 채로 git에 들어감 | `.gitignore`에 심링크 이름이 있는지 확인. `git status`로 심링크가 추적 안 되는지 확인. 추적된다면 `git rm --cached <name>` 후 `.gitignore`에 추가 |
| `Co-authored-by` 트레일러 거부 | `system/AGENTS.md` 정책. 본 fork는 commit에 co-author 트레일러 금지. 일반 commit으로 다시 작성 |

---

## 8. 다음 단계

셋업 완료 후 다음 문서를 참고하세요:

- **[심화 가이드](./open-design-overview.ko.md)** — 패션 비즈니스 매핑, 의사결정 단계, 시스템 정합성 점검
- **[architecture.md](./architecture.md)** — 시스템 아키텍처
- **[skills-protocol.md](./skills-protocol.md)** — 스킬 작성 프로토콜
- **[agent-adapters.md](./agent-adapters.md)** — 에이전트 어댑터 작성법
- **[../AGENTS.md](../AGENTS.md)** — 에이전트 진입 가이드 (single source of truth)
- **[../QUICKSTART.md](../QUICKSTART.md)** — 빠른 시작 가이드

---

## 9. 백업 권장 (워크스테이션 이전 전)

본 가이드의 3개 리포는 모두 GitHub에 있어 어느 머신에서든 복원 가능합니다. 그러나 다음은 **GitHub에 없으므로 별도 백업이 필요**합니다:

| 영역 | 백업 방법 |
|---|---|
| `workspace/` (사용자 자유 작업물) | rsync, iCloud, 외부 드라이브, 별도 git 리포로 변환 등 |
| `system/.od/` (런타임 DB) | 실험·세션 기록을 보존하려면 별도 백업. 그렇지 않으면 무시 가능 |
| `system/.tmp/` | 임시 파일, 무시 가능 |
| 코드 에이전트 CLI 설정 | 각 CLI의 사용자 설정 파일 (`~/.claude.json`, `~/.codex/`, `~/.cursor/`, `~/.config/gh/`, …) |
| `ANTHROPIC_API_KEY` 등 | 1Password / Doppler 등 비밀 관리 도구 |

---

## 10. 요약 명령 (한 번에 보기)

```bash
# 사전: corepack enable && corepack prepare pnpm@10.33.2 --activate

mkdir -p ~/"14. open design" && cd ~/"14. open design"

git clone https://github.com/shoongpark-create/open-design.git           system
git clone https://github.com/shoongpark-create/open-design-skills.git    .claude
git clone https://github.com/shoongpark-create/open-design-codex.git     .codex

cd system && pnpm install && pnpm typecheck && cd ..
cd .claude && node scripts/link.mjs && cd ..
cd .codex  && node scripts/link.mjs && cd ..

cd system && pnpm tools-dev
```

위 10줄로 풀 셋업 완료.
