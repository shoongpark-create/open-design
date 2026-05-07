# Open Design — K-young-casual 时装季节设计系统

> **本地优先、不绑定特定 agent、面向时装业务的设计引擎。**
>
> 自动检测你已安装的代码 agent CLI（Claude Code、Cursor、Copilot、Codex、Gemini、OpenCode、Qwen），把它变成设计引擎。输入设计 brief，agent 会把可上线的 HTML 产物以流式渲染到沙箱化的浏览器预览中。
>
> 本 fork 在上游 Open Design 的基础上更进一步：将 **15 个时装季节设计 skill 流水线**（concept → color → fabric → fit/graphic → lineup → styling → lookbook → IMC → 综合 deck）和 **5 道 `quality-gate` 闸门**（BTA / 3B / Logo / Preset / Evidence）正式合并到 `main`，专为 WACKYWILLY 等 K-young-casual 品牌调优。

[English](./README.md) · [한국어](./README.ko.md) · **中文** · [深度指南（韩文）](./docs/open-design-overview.ko.md)

---

## 快速开始

```bash
# 安装依赖（Node ~24, pnpm >=10.33.2）
pnpm install

# 同时启动 daemon + web UI（自动打开浏览器）
pnpm tools-dev
```

任何已安装的 code-agent CLI 都会被自动检测。如果一个都没有，自动回退到 Anthropic API（BYOK）。

**在新机器上从零搭建环境**请参考 [docs/setup.ko.md](./docs/setup.ko.md)（韩文）：3 个 sibling 仓库 clone + 依赖 + symlink 重建 + daemon 启动的逐步指南。
详细安装/运行见 [QUICKSTART.md](./QUICKSTART.md)；agent 协议见 [AGENTS.md](./AGENTS.md)。

---

## 一览

| | |
|---|---|
| 时装季节设计 skill | **15 个**（concept → 综合 deck，端到端） |
| 营销/通用 skill | **31 个**（landing、dashboard、deck、文档、移动端等） |
| UI 大师 skill | **1 个**（`impeccable` — 设计 / 重设计 / 评审 / 审计） |
| 品牌设计系统 | **72 个**（Linear、Stripe、Apple、Nike、小红书……） |
| 代码 agent CLI | **7 种 + Anthropic API 回退** |
| `quality-gate` 闸门 | **5**（BTA / 3B / Logo+Color / Preset / Evidence） |
| 视觉学派（Direction） | **5**（Editorial / Modern Minimal / Tech / Brutalist / Soft Warm） |
| 自我评审维度 | **5**（哲学 / 层级 / 执行 / 具体性 / 克制） |
| License | Apache-2.0 |

---

## 核心差异

1. **不绑定 agent（BYOA）** — 自动接入你已有的任何 CLI，无自带 agent，BYOK 回退。
2. **K-young-casual 季节日历内建** — S1~S4 selling period × BTA（Basic/Trend/Accent）× 四轴 styling 已编码到时装 skill 的元数据中。
3. **Brand Guidelines as Code** — `quality-gate` 5 道闸门用代码拦截政策违规（BTA 比例、3B 着装、logo 变形、preset 真实性、Evidence），发布前自动检查。
4. **决定性引导工作流** — Discovery 表单 → 方向选择 → todo 计划 → 5 维自评 → 产物。用户决策驱动产出，而非模型即兴。
5. **季节综合发布自动化** — `fashion-season-deck` 把 13 个时装模块整合为单一横向滑动 deck。
6. **72 套品牌设计系统** — 一选定，所有产物用该品牌的色板/字体/间距渲染；项目中途切换可即时重渲染。
7. **本地优先、零锁定** — SQLite 持久化、可自托管、可部署到 Vercel、Apache-2.0。

---

## 决定性工作流

```
Turn 1  Discovery 表单    Surface / Audience / Tone / Brand / Scale / 约束
            ↓
Turn 2  方向选择          5 种视觉学派中选 1（无 brand 时）
            ↓
Turn 3  TodoWrite 计划    读 DESIGN.md → 种子模板 → 颜色映射 → P0 自检
            ↓
Turn 4+ 自评 + 产物        5 维分数 ≥ 通过线 → 发出 <artifact type="text/html">
            ↓
        UI: srcdoc iframe 渲染、下载 / 切设计系统 / 导出 PDF·PPTX·ZIP
```

---

## 时装业务工作流（摘要）

### 季节设计依赖图

```
brand-roadmap （永久，每年刷新一次）
  └→ season-strategy
        └→ concept-board → color-story（一切下游的基底）
                 ↓
                 ├→ fabric-board
                 ├→ graphic-direction
                 ├→ key-item-sheet
                 └→ fit-system
                      ↓
                 ├→ new-lineup, accessory-lineup
                      ↓
                 └→ styling-board（4 轴 × S1~S4）
                      ├→ lookbook（营销资产）
                      └→ imc-calendar（月度 hero × 7 步整合）
                           ↓
                      season-deck ◀── 把 13 个模块全部吸收
```

### Selling period × skill 映射

| Period | 时间 | 核心活动 | Skills |
|---|---|---|---|
| 预企划 | 季前 6~9 个月 | 方向刷新、季节策略 | `brand-roadmap` → `positioning-map` → `season-strategy` |
| Concept 锁定 | 季前 3~5 个月 | 调性 / 方向 → 颜色 / 面料 / 图形锁定 | `concept-board` → `color-story` → `fabric-board` → `graphic-direction` → `fit-system` |
| 商品设计 | 季前 2~3 个月 | Hero 单品 + lineup 确认 | `key-item-sheet` → `new-lineup` → `accessory-lineup` |
| **S1**（1~2 月 / 7~8 月） | 新学期 / FW 起跑 | 双肩包、轻装 / 功能性外套 | `styling-board`(S1) → `lookbook`(S1 campaign) |
| **S2**（3~4 月 / 9~10 月） | 全速售卖 | 全线扩展 | `styling-board`(S2) + `imc-calendar` 主推 |
| **S3**（5 月 / 11 月） | 季节高峰 | 爆款冲量 | `imc-calendar` 内容 + 广告 |
| **S4**（6~7 月 / 12~1 月） | 清仓 / 下季预告 | 销库 + 下季暗示 | `imc-calendar` |
| 综合复盘 | 季末 / 下季 kickoff | 高管 + 全员发布 | `season-deck` |

### 角色用法

| 角色 | 高频 skill |
|---|---|
| 设计师 | `concept-board`, `color-story`, `fabric-board`, `graphic-direction`, `key-item-sheet`, `fit-system` |
| 商品企划（MD） | `new-lineup`, `accessory-lineup`, `season-strategy`, `key-item-sheet`, `quality-gate` |
| 市场营销 | `imc-calendar`, `lookbook`, `social-carousel`, `email-marketing`, `magazine-poster` |
| 品牌总监 / CEO | `brand-roadmap`, `positioning-map`, `season-strategy`, `season-deck` |
| 生产 / 版型间 | `fit-system`, `fabric-board`, `key-item-sheet` |
| QA / 检审 | `quality-gate`（5 闸门）, `critique`（设计评审） |

完整依赖图、27SS 全周期演示、15 个决策→产物映射详见 [深度指南 §6（韩文）](./docs/open-design-overview.ko.md)。

---

## 47 个 Skill 目录

### 时装（15）

| Skill | 作用 |
|---|---|
| `fashion-color-story` | 锁定季节色板（Pantone TCX、60/30/10、品类×颜色矩阵） |
| `fashion-concept-board` | Concept / 调性板（锁定 *之前* 的探索） |
| `fashion-lookbook` | 系列 lookbook（季节 campaign、AI look、商品卡） |
| `fashion-styling-board` | 季节穿搭板（4 轴 × selling period） |
| `fashion-key-item-sheet` | Key item 5 切片（Color/Detail/Pattern/Fabric/Artwork） |
| `fashion-graphic-direction` | 季节图形方向（T 恤印花、刺绣、symbol） |
| `fashion-fabric-board` | 季节面料板（UNI/WOMEN 分线、吊牌、point label） |
| `fashion-new-lineup` | 新系列 / lineup 扩展 |
| `fashion-positioning-map` | 2×2 品牌定位图 |
| `fashion-brand-roadmap` | 品牌 4 层金字塔（North Star → Foundation） |
| `fashion-season-strategy` | 季节 3 大战略支柱 + 各品类 hero |
| `fashion-imc-calendar` | IMC 日历（月度 hero、7 步整合） |
| `fashion-fit-system` | Fit 体系（UNI/WOMEN，分品类） |
| `fashion-accessory-lineup` | 配饰 lineup（包 / 帽 / 鞋） |
| `fashion-season-deck` | **季节综合 deck**（13 模块汇总） |

> 全部 `category: fashion`。仅 `season-deck` 为 `mode: deck`（横向滑动 deck），其余 14 个 `mode: prototype`（单 HTML）。
> 全部引用共享图像引擎 `_shared/imagegen.md`（ima2 → ComfyUI → CSS placeholder，4 级回退）。

### 营销 / 通用（31）

- **原型（8）**：`web-prototype`、`saas-landing`、`dashboard`、`pricing-page`、`docs-page`、`blog-post`、`mobile-app`、`social-carousel`
- **Deck（3）**：`guizang-ppt`（杂志风横向滑动）、`simple-deck`、`replit-deck`（8 主题）
- **文档/工作（10）**：`pm-spec`、`weekly-update`、`meeting-notes`、`eng-runbook`、`finance-report`、`hr-onboarding`、`invoice`、`kanban-board`、`team-okrs`、`magazine-poster`
- **特殊/重型工具（10）**：`wireframe-sketch`、`critique`（5 维评审）、`tweaks`（实时 CSS 调参）、`digital-eguide`、`email-marketing`、`motion-frames`、`gamified-app`、`dating-web`、`mobile-onboarding`、`sprite-animation`

### Impeccable（1）

UI 工作大师 skill。35 reference + 15 scripts。子命令：
```
craft / shape / audit / animate / bolder / quieter / overdrive / colorize /
delight / layout / typeset / harden / onboard / optimize / polish / teach /
document / extract / live
```

---

## 72 套设计系统

| 类别 | 系统 | 时装应用 |
|---|---|---|
| AI / LLM（10） | claude, cohere, mistral-ai, minimax, together-ai, replicate, runwayml, elevenlabs, ollama, x-ai | AI agency 调性 lookbook |
| 开发者工具（19） | cursor, vercel, linear-app, framer, expo, clickhouse, mongodb, supabase, hashicorp, posthog, sentry, warp, webflow, sanity, mintlify, lovable, composio, opencode-ai, voltagent | 内部 dashboard、runbook |
| 生产力（10） | notion, figma, miro, airtable, superhuman, intercom, zapier, cal, clay, raycast | 内部报告、高管 deck |
| 金融科技（7） | stripe, coinbase, binance, kraken, mastercard, revolut, wise | 价格页、发票 |
| **电商（6）** | shopify, **airbnb**, uber, **nike**, starbucks, **pinterest** | **★ Lookbook、PDP、campaign** |
| **媒体（6）** | spotify, playstation, wired, theverge, meta, **xiaohongshu** | **★ 杂志风 lookbook、社交 carousel** |
| 汽车（6） | tesla, bmw, ferrari, lamborghini, bugatti, renault | 奢华季节 campaign |
| 其他（6） | apple, ibm, nvidia, vodafone, resend, spacex | 极简 / 高管 |
| 起手（2） | default（Neutral Modern）, warm-editorial | **★ 时装编辑默认** |

**时装业务推荐组合**：`nike` / `airbnb` / `pinterest`（运动/生活方式/curation） · `xiaohongshu`（K-young-casual 核心社交） · `warm-editorial`（编辑基线） · `apple`（极简发布）。

---

## 支持的代码 Agent

| CLI | 二进制 | 等级 |
|---|---|---|
| Claude Code | `claude` | **一档**（`stream-json` typed events） |
| GitHub Copilot CLI | `copilot` | 一档（`json` typed events） |
| Cursor Agent | `cursor-agent` | 标准（行缓冲） |
| Gemini CLI | `gemini` | 标准 |
| OpenCode | `opencode` | 标准 |
| Qwen Code | `qwen` | 标准 |
| Codex CLI | `codex` | 标准 |
| （回退） | Anthropic API | BYOK |

---

## quality-gate — 5 道闸门（Brand Guidelines as Code）

| # | 闸门 | 适用对象 | 失败时 |
|---|---|---|---|
| 1 | **BTA 明示**（Basic/Trend/Accent + 比例区间） | sku, capsule, line_sheet, costing, volume_plan | block |
| 2 | **禁 3B 着装**（全 basic + 黑白 + matching） | look, visual, lookbook, campaign, ad_creative | block |
| 3a | **Logo 形状/颜色变形禁止** | visual, merchandise, packaging | block |
| 3b | **场景感知颜色 allowlist** | visual, lookbook, ad_creative, pdp, social, packaging, deck, doc, report, briefing | warn |
| 4 | **Preset 真实性**（必须标注模型/生成工具 preset） | copy, doc, deck, press_release | block |
| 5 | **Evidence before assertions**（完工报告需附依据） | any_completion_report | warn |

> ⚠ **已知问题（2026-05-08）**：`quality-gate/rules.json` 引用的 `presets/wacky-willy/design-tokens.json` 当前不在仓库内。BTA 比例等部分闸门需要该文件才能进行真实校验。详见 [深度指南 §11（韩文）](./docs/open-design-overview.ko.md)。

---

## Monorepo 布局

```
open-design/
├── apps/
│   ├── daemon/             ← Express + SQLite + agent spawn（`od` bin）
│   ├── web/                ← Next.js 16 聊天 UI + iframe 渲染器
│   ├── desktop/            ← Electron 外壳（通过 sidecar IPC 发现 web URL）
│   └── packaged/           ← 打包启动器（`od://` 入口胶水）
├── packages/
│   ├── contracts/          ← 纯 TS web/daemon API 契约（DTO、SSE 事件）
│   ├── sidecar/            ← Sidecar 运行时原语
│   ├── sidecar-proto/      ← Open Design sidecar 业务协议
│   └── platform/           ← OS 进程原语
├── tools/
│   ├── dev/                ← `pnpm tools-dev`（本地开发生命周期）
│   └── pack/               ← `pnpm tools-pack`（打包构建/发版）
├── e2e/                    ← Playwright UI specs + Vitest 集成
├── skills/
│   ├── fashion/            ← 15 个时装 skill + _shared/imagegen.md
│   ├── marketing/          ← 31 个通用 skill
│   └── impeccable/         ← UI 大师 skill
├── design-systems/         ← 72 套品牌系统（DESIGN.md）
├── assets/frames/          ← iPhone/Pixel/iPad/MacBook/浏览器
├── templates/              ← deck-framework 等
├── scripts/                ← sync-design-systems、postinstall、check-residual-js
├── docs/                   ← architecture、spec、roadmap、★ open-design-overview.ko.md
└── .od/                    ← 运行时数据（gitignore，自动生成）
```

完整目录指南：[AGENTS.md](./AGENTS.md)。

---

## 常用脚本

```bash
pnpm tools-dev         # daemon + web（唯一的本地开发入口）
pnpm build             # web 静态构建
pnpm typecheck         # 完整 typecheck + daemon build + 残留 JS 检查
pnpm test              # 工作区测试
pnpm test:e2e:live     # 实时 E2E
pnpm test:ui           # Playwright UI
pnpm check:residual-js # TypeScript-first 政策检查

# 同步设计系统（来自上游 `awesome-design-md`）
node --experimental-strip-types scripts/sync-design-systems.ts

# tools-dev 子命令
pnpm tools-dev start web
pnpm tools-dev run web --daemon-port 17456 --web-port 17573
pnpm tools-dev status --json
pnpm tools-dev logs --json
pnpm tools-dev inspect desktop status --json
pnpm tools-dev stop
```

> ⚠ **不要新增或恢复根 lifecycle 别名**：`pnpm dev`、`pnpm dev:all`、`pnpm daemon`、`pnpm preview`、`pnpm start`。所有本地 lifecycle 流程必须通过 `pnpm tools-dev`。

---

## 环境基线

- **运行时**：Node `~24`、`pnpm@10.33.2`（推荐 Corepack — 自动选用 `package.json` 锁定的 pnpm 版本）
- **TypeScript-first**：新增 entrypoint / 模块 / 脚本 / 测试 / reporter / 配置默认 `.ts`
- **残留 JS 限制**：仅生成的输出、vendored 依赖、明示的兼容性构建产物，以及 `scripts/check-residual-js.ts` allowlist
- **数据位置**：daemon 写入 `.od/`（SQLite 在 `.od/app.sqlite`、agent CWD 在 `.od/projects/<id>/`、保存的 render 在 `.od/artifacts/`）。`OD_DATA_DIR` 可重定位

---

## 文档

| 文档 | 内容 |
|---|---|
| [docs/setup.ko.md](./docs/setup.ko.md) | **★ 搭建指南（韩文）** — 在新机器从零搭建：3 仓库 clone + 依赖 + symlink + daemon |
| [docs/open-design-overview.ko.md](./docs/open-design-overview.ko.md) | **★ 深度指南（韩文）** — 时装业务映射、决策→产物表、系统完整性审计 |
| [docs/architecture.md](./docs/architecture.md) | 系统架构 |
| [docs/spec.md](./docs/spec.md) | Skill / 设计系统规范 |
| [docs/skills-protocol.md](./docs/skills-protocol.md) | Skill 协议 |
| [docs/agent-adapters.md](./docs/agent-adapters.md) | Agent 适配器 |
| [docs/modes.md](./docs/modes.md) | 模式（prototype / deck / template） |
| [docs/references.md](./docs/references.md) | 设计参考资料 |
| [docs/roadmap.md](./docs/roadmap.md) | 路线图 |
| [QUICKSTART.md](./QUICKSTART.md) | 快速开始 |
| [AGENTS.md](./AGENTS.md) | Agent 入口指南（single source of truth） |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | 贡献指南 |

---

## 上游关系

本 fork 基于 [`nexu-io/open-design`](https://github.com/nexu-io/open-design)，针对 K-young-casual 时装业务情景重构。

**灵感来源**：
- [`alchaincyf/huashu-design`](https://github.com/alchaincyf/huashu-design) — 设计哲学、anti-AI-slop 检查清单
- [`op7418/guizang-ppt-skill`](https://github.com/op7418/guizang-ppt-skill) — 杂志风 PPT skill（原样打包）
- [`OpenCoworkAI/open-codesign`](https://github.com/OpenCoworkAI/open-codesign) — 流式 artifact loop、iframe 预览
- [`multica-ai/multica`](https://github.com/multica-ai/multica) — daemon + agent 检测架构

---

## License

Apache-2.0 — 详见 [LICENSE](./LICENSE)。
