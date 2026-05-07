# Open Design — K-young-casual Fashion Season Design System

> **A local-first, agent-agnostic design engine aligned to the fashion business.**
>
> Auto-detects whichever code-agent CLI you already have installed (Claude Code, Cursor, Copilot, Codex, Gemini, OpenCode, Qwen) and turns it into a design engine. Type a design brief, and the agent streams production-ready HTML artifacts into a sandboxed browser preview.
>
> This fork goes one step beyond the upstream Open Design: a **15-skill fashion season-design pipeline** (concept → color → fabric → fit/graphic → lineup → styling → lookbook → IMC → master deck) and a **5-gate `quality-gate`** (BTA/3B/Logo/Preset/Evidence) are integrated into `main`, tuned for K-young-casual brands such as WACKYWILLY.

[**English**](./README.md) · [한국어](./README.ko.md) · [中文](./README.zh-CN.md) · [Deep guide (Korean)](./docs/open-design-overview.ko.md)

---

## Quick start

```bash
# Install dependencies (Node ~24, pnpm >=10.33.2)
pnpm install

# Start daemon + web UI in one go (browser opens automatically)
pnpm tools-dev
```

Whichever code-agent CLI you have installed is auto-detected. If none are found, it falls back to the Anthropic API (BYOK).

**To bootstrap a fresh machine from scratch**, follow [docs/setup.ko.md](./docs/setup.ko.md) (Korean) — a step-by-step guide that clones all 3 sibling repos, installs deps, regenerates symlinks, and starts the daemon.
See [QUICKSTART.md](./QUICKSTART.md) for setup details and [AGENTS.md](./AGENTS.md) for the agent contract.

---

## At a glance

| | |
|---|---|
| Fashion season-design skills | **15** (concept → master deck, end-to-end) |
| Marketing / general skills | **31** (landing, dashboard, deck, document, mobile, …) |
| UI master skill | **1** (`impeccable` — design / redesign / critique / audit) |
| Brand design systems | **72** (Linear, Stripe, Apple, Nike, Xiaohongshu, …) |
| Code-agent CLIs | **7 + Anthropic API fallback** |
| `quality-gate` gates | **5** (BTA / 3B / Logo+Color / Preset / Evidence) |
| Visual schools (Direction) | **5** (Editorial / Modern Minimal / Tech / Brutalist / Soft Warm) |
| Self-critique dimensions | **5** (philosophy / hierarchy / execution / specificity / restraint) |
| License | Apache-2.0 |

---

## What makes it different

1. **Bring your own agent (BYOA)** — auto-wires whichever CLI you have, no proprietary agent, BYOK fallback.
2. **K-young-casual season calendar built in** — S1~S4 selling periods × BTA (Basic / Trend / Accent) × four-axis styling are encoded in fashion-skill metadata.
3. **Brand Guidelines as Code** — `quality-gate` 5 gates block policy violations (BTA ratios, 3B-only outfits, logo distortion, preset truthfulness, evidence) before publish.
4. **Deterministic guided workflow** — Discovery form → direction picker → todo plan → 5-D self-critique → artifact. User decisions drive output, not model whim.
5. **One-click season master deck** — `fashion-season-deck` rolls 13 fashion modules into a single horizontal-swipe deck.
6. **72 brand design systems** — pick one, the entire output renders in that brand's palette / typography / spacing. Switch mid-project for instant re-render.
7. **Local-first, no lock-in** — SQLite persistence, self-hostable, Vercel-deployable, Apache-2.0.

---

## Deterministic workflow

```
Turn 1  Discovery form     Surface / Audience / Tone / Brand / Scale / constraints
            ↓
Turn 2  Direction picker   1 of 5 visual schools (when no brand chosen)
            ↓
Turn 3  TodoWrite plan     Read DESIGN.md → seed template → color mapping → P0 checks
            ↓
Turn 4+ Self-critique +    5-D score ≥ pass → emits <artifact type="text/html">
        artifact
            ↓
        UI: srcdoc iframe render, download / switch design system / export PDF / PPTX / ZIP
```

---

## Fashion-business workflow (summary)

### Season design dependency graph

```
brand-roadmap (perpetual, refreshed yearly)
  └→ season-strategy
        └→ concept-board → color-story (the base for everything downstream)
                 ↓
                 ├→ fabric-board
                 ├→ graphic-direction
                 ├→ key-item-sheet
                 └→ fit-system
                      ↓
                 ├→ new-lineup, accessory-lineup
                      ↓
                 └→ styling-board (4 axes × S1~S4)
                      ├→ lookbook (marketing asset)
                      └→ imc-calendar (monthly hero × 7-step alignment)
                           ↓
                      season-deck ◀── absorbs all 13 modules into one deck
```

### Selling period × skill map

| Period | Timing | Core activity | Skills |
|---|---|---|---|
| Pre-planning | 6–9 mo before season | Direction refresh, season strategy | `brand-roadmap` → `positioning-map` → `season-strategy` |
| Concept lock | 3–5 mo before | Mood/direction → color/fabric/graphic lock | `concept-board` → `color-story` → `fabric-board` → `graphic-direction` → `fit-system` |
| Product design | 2–3 mo before | Hero items + lineup confirmed | `key-item-sheet` → `new-lineup` → `accessory-lineup` |
| **S1** (Jan–Feb / Jul–Aug) | New semester / FW kickoff | Backpacks, light setups / functional outerwear | `styling-board` (S1) → `lookbook` (S1 campaign) |
| **S2** (Mar–Apr / Sep–Oct) | Full sell-through | Full line expansion | `styling-board` (S2) + `imc-calendar` push |
| **S3** (May / Nov) | Season peak | Bestseller push | `imc-calendar` content + ads |
| **S4** (Jun–Jul / Dec–Jan) | Clearance / next-season tease | Sell down + next-season hint | `imc-calendar` |
| Master review | End of season / next kickoff | Exec + company-wide presentation | `season-deck` |

### By role

| Role | Skills used most |
|---|---|
| Designer | `concept-board`, `color-story`, `fabric-board`, `graphic-direction`, `key-item-sheet`, `fit-system` |
| Merchandiser (MD) | `new-lineup`, `accessory-lineup`, `season-strategy`, `key-item-sheet`, `quality-gate` |
| Marketing | `imc-calendar`, `lookbook`, `social-carousel`, `email-marketing`, `magazine-poster` |
| Brand director / CEO | `brand-roadmap`, `positioning-map`, `season-strategy`, `season-deck` |
| Production / pattern room | `fit-system`, `fabric-board`, `key-item-sheet` |
| QA / review | `quality-gate` (5 gates), `critique` (design review) |

The full dependency graph, a worked 27SS cycle example, and the 15-stage decision-to-artifact map are in [the deep guide §6 (Korean)](./docs/open-design-overview.ko.md).

---

## 47 skills

### Fashion (15)

| Skill | Role |
|---|---|
| `fashion-color-story` | Lock seasonal palette (Pantone TCX, 60/30/10, category × color matrix) |
| `fashion-concept-board` | Concept / mood board (exploration *before* lock) |
| `fashion-lookbook` | Collection lookbook (season campaign, AI-generated looks, product cards) |
| `fashion-styling-board` | Season styling board (4 axes × selling period) |
| `fashion-key-item-sheet` | Key-item 5-slice sheet (Color/Detail/Pattern/Fabric/Artwork) |
| `fashion-graphic-direction` | Season graphic direction (tee prints, embroidery, symbol) |
| `fashion-fabric-board` | Season fabric board (UNI/WOMEN split, hangtag, point label) |
| `fashion-new-lineup` | New series / lineup expansion |
| `fashion-positioning-map` | 2×2 brand positioning map |
| `fashion-brand-roadmap` | 4-tier brand pyramid (North Star → Foundation) |
| `fashion-season-strategy` | Season's 3 strategic pillars + category heroes |
| `fashion-imc-calendar` | IMC calendar (monthly hero, 7-step alignment) |
| `fashion-fit-system` | Fit system (UNI/WOMEN, per category) |
| `fashion-accessory-lineup` | Accessory lineup (bags / hats / shoes) |
| `fashion-season-deck` | **Season master deck** (13-module rollup) |

> All have `category: fashion`. Only `season-deck` uses `mode: deck` (horizontal-swipe deck); the other 14 use `mode: prototype` (single HTML).
> All reference the shared image engine `_shared/imagegen.md` (ima2 → ComfyUI → CSS placeholder, 4-tier fallback).

### Marketing / general (31)

- **Prototypes (8)**: `web-prototype`, `saas-landing`, `dashboard`, `pricing-page`, `docs-page`, `blog-post`, `mobile-app`, `social-carousel`
- **Decks (3)**: `guizang-ppt` (magazine horizontal-swipe), `simple-deck`, `replit-deck` (8 themes)
- **Document / work artifacts (10)**: `pm-spec`, `weekly-update`, `meeting-notes`, `eng-runbook`, `finance-report`, `hr-onboarding`, `invoice`, `kanban-board`, `team-okrs`, `magazine-poster`
- **Specialized / power tools (10)**: `wireframe-sketch`, `critique` (5-D review), `tweaks` (live CSS controls), `digital-eguide`, `email-marketing`, `motion-frames`, `gamified-app`, `dating-web`, `mobile-onboarding`, `sprite-animation`

### Impeccable (1)

UI work master skill. 35 reference docs + 15 scripts. Sub-commands:
```
craft / shape / audit / animate / bolder / quieter / overdrive / colorize /
delight / layout / typeset / harden / onboard / optimize / polish / teach /
document / extract / live
```

---

## 72 design systems

| Category | Systems | Fashion use |
|---|---|---|
| AI / LLM (10) | claude, cohere, mistral-ai, minimax, together-ai, replicate, runwayml, elevenlabs, ollama, x-ai | AI-agency-toned lookbooks |
| Developer tools (19) | cursor, vercel, linear-app, framer, expo, clickhouse, mongodb, supabase, hashicorp, posthog, sentry, warp, webflow, sanity, mintlify, lovable, composio, opencode-ai, voltagent | Internal dashboard, runbook |
| Productivity (10) | notion, figma, miro, airtable, superhuman, intercom, zapier, cal, clay, raycast | Internal reports, exec decks |
| Fintech (7) | stripe, coinbase, binance, kraken, mastercard, revolut, wise | Pricing pages, invoices |
| **E-commerce (6)** | shopify, **airbnb**, uber, **nike**, starbucks, **pinterest** | **★ Lookbook, PDP, campaign** |
| **Media (6)** | spotify, playstation, wired, theverge, meta, **xiaohongshu** | **★ Magazine lookbook, social carousel** |
| Automotive (6) | tesla, bmw, ferrari, lamborghini, bugatti, renault | Luxury season campaigns |
| Other (6) | apple, ibm, nvidia, vodafone, resend, spacex | Minimal / exec |
| Starters (2) | default (Neutral Modern), warm-editorial | **★ Default for fashion editorial** |

**Recommended fashion combos**: `nike` / `airbnb` / `pinterest` (activewear / lifestyle / curation) · `xiaohongshu` (key K-young-casual social) · `warm-editorial` (editorial baseline) · `apple` (minimal exec presentation).

---

## Supported code-agent CLIs

| CLI | Binary | Tier |
|---|---|---|
| Claude Code | `claude` | **First-class** (`stream-json` typed events) |
| GitHub Copilot CLI | `copilot` | First-class (`json` typed events) |
| Cursor Agent | `cursor-agent` | Standard (line-buffered) |
| Gemini CLI | `gemini` | Standard |
| OpenCode | `opencode` | Standard |
| Qwen Code | `qwen` | Standard |
| Codex CLI | `codex` | Standard |
| (fallback) | Anthropic API | BYOK |

---

## quality-gate — 5 gates (Brand Guidelines as Code)

| # | Gate | Applies to | On fail |
|---|---|---|---|
| 1 | **BTA explicit** (Basic/Trend/Accent + ratio bands) | sku, capsule, line_sheet, costing, volume_plan | block |
| 2 | **No 3B outfit** (all-basic + black/white + matching) | look, visual, lookbook, campaign, ad_creative | block |
| 3a | **Logo shape/color distortion** | visual, merchandise, packaging | block |
| 3b | **Context-aware color allowlist** | visual, lookbook, ad_creative, pdp, social, packaging, deck, doc, report, briefing | warn |
| 4 | **Preset truthfulness** (model / generation tool stated) | copy, doc, deck, press_release | block |
| 5 | **Evidence before assertions** (in completion reports) | any_completion_report | warn |

> ⚠ **Known issue (2026-05-08)**: `quality-gate/rules.json` references `presets/wacky-willy/design-tokens.json`, which is not yet present in the repo. Some gates (BTA ratio bands, etc.) need this file to perform real validation. See [the deep guide §11 (Korean)](./docs/open-design-overview.ko.md).

---

## Monorepo layout

```
open-design/
├── apps/
│   ├── daemon/             ← Express + SQLite + agent spawn (`od` bin)
│   ├── web/                ← Next.js 16 chat UI + iframe renderer
│   ├── desktop/            ← Electron shell (web URL via sidecar IPC)
│   └── packaged/           ← Packaged launcher (`od://` entry glue)
├── packages/
│   ├── contracts/          ← Pure TS web/daemon API contracts (DTOs, SSE events)
│   ├── sidecar/            ← Sidecar runtime primitives
│   ├── sidecar-proto/      ← Open Design sidecar business protocol
│   └── platform/           ← OS process primitives
├── tools/
│   ├── dev/                ← `pnpm tools-dev` (local dev lifecycle)
│   └── pack/               ← `pnpm tools-pack` (packaged build/release)
├── e2e/                    ← Playwright UI specs + Vitest integration
├── skills/
│   ├── fashion/            ← 15 fashion skills + _shared/imagegen.md
│   ├── marketing/          ← 31 general skills
│   └── impeccable/         ← UI master skill
├── design-systems/         ← 72 brand systems (DESIGN.md)
├── assets/frames/          ← iPhone/Pixel/iPad/MacBook/browser
├── templates/              ← deck-framework etc.
├── scripts/                ← sync-design-systems, postinstall, check-residual-js
├── docs/                   ← architecture, spec, roadmap, ★ open-design-overview.ko.md
└── .od/                    ← Runtime data (gitignored, auto-created)
```

Full directory guide: [AGENTS.md](./AGENTS.md).

---

## Common scripts

```bash
pnpm tools-dev         # daemon + web (the only local-dev entry point)
pnpm build             # web static build
pnpm typecheck         # full typecheck + daemon build + residual-JS check
pnpm test              # workspace tests
pnpm test:e2e:live     # live E2E
pnpm test:ui           # Playwright UI
pnpm check:residual-js # TypeScript-first policy check

# Sync design systems from upstream `awesome-design-md`
node --experimental-strip-types scripts/sync-design-systems.ts

# tools-dev sub-commands
pnpm tools-dev start web
pnpm tools-dev run web --daemon-port 17456 --web-port 17573
pnpm tools-dev status --json
pnpm tools-dev logs --json
pnpm tools-dev inspect desktop status --json
pnpm tools-dev stop
```

> ⚠ **Do not add or restore root lifecycle aliases**: `pnpm dev`, `pnpm dev:all`, `pnpm daemon`, `pnpm preview`, `pnpm start`. All local lifecycle flows must go through `pnpm tools-dev`.

---

## Environment baseline

- **Runtime**: Node `~24`, `pnpm@10.33.2` (Corepack recommended — picks up the pnpm version pinned in `package.json`)
- **TypeScript-first**: new entrypoints / modules / scripts / tests / reporters / configs default to `.ts`
- **Residual JS limited to**: generated output, vendored deps, explicit compatibility build artifacts, and the allowlist in `scripts/check-residual-js.ts`
- **Data location**: daemon writes to `.od/` (SQLite at `.od/app.sqlite`, agent CWDs under `.od/projects/<id>/`, saved renders under `.od/artifacts/`). `OD_DATA_DIR` can relocate.

---

## Documentation

| Doc | Content |
|---|---|
| [docs/setup.ko.md](./docs/setup.ko.md) | **★ Setup guide (Korean)** — bootstrap a fresh machine: 3-repo clone + deps + symlinks + daemon |
| [docs/open-design-overview.ko.md](./docs/open-design-overview.ko.md) | **★ Deep guide (Korean)** — fashion-business mapping, decision-to-artifact map, system-integrity audit |
| [docs/architecture.md](./docs/architecture.md) | System architecture |
| [docs/spec.md](./docs/spec.md) | Skill / design-system spec |
| [docs/skills-protocol.md](./docs/skills-protocol.md) | Skill protocol |
| [docs/agent-adapters.md](./docs/agent-adapters.md) | Agent adapters |
| [docs/modes.md](./docs/modes.md) | Modes (prototype / deck / template) |
| [docs/references.md](./docs/references.md) | Design references |
| [docs/roadmap.md](./docs/roadmap.md) | Roadmap |
| [QUICKSTART.md](./QUICKSTART.md) | Quick start |
| [AGENTS.md](./AGENTS.md) | Agent entry guide (single source of truth) |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Contribution guide |

---

## Upstream relationship

This fork is rebased on [`nexu-io/open-design`](https://github.com/nexu-io/open-design) and reframed for K-young-casual fashion business contexts.

**Inspired by**:
- [`alchaincyf/huashu-design`](https://github.com/alchaincyf/huashu-design) — design philosophy, anti-AI-slop checklist
- [`op7418/guizang-ppt-skill`](https://github.com/op7418/guizang-ppt-skill) — magazine PPT skill (bundled verbatim)
- [`OpenCoworkAI/open-codesign`](https://github.com/OpenCoworkAI/open-codesign) — streaming artifact loop, iframe preview
- [`multica-ai/multica`](https://github.com/multica-ai/multica) — daemon + agent-detection architecture

---

## License

Apache-2.0 — see [LICENSE](./LICENSE).
