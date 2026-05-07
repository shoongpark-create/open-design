# Fashion Image Generation — Shared Fallback Chain

This document is the **single source of truth** for how every fashion skill
generates project-local raster imagery. It is referenced from each fashion
`SKILL.md` so the rules stay consistent and CLI-agnostic.

The agent is one of: `claude`, `codex`, `cursor-agent`, `gemini`, `opencode`,
`qwen`, `copilot`, or the Anthropic API fallback. Whichever one is running, it
has the daemon-shared toolset: `Read`, `Write`, `Bash`, `WebFetch`. **Do not**
assume any agent-specific tool — the engine selection below uses only those
four primitives so the same SKILL.md works on every runtime.

## Engine fallback chain (in priority order)

| Tier | Engine | Probe | Why this order |
|---|---|---|---|
| **1** | **ima2 via daemon bridge** (default) | `GET /api/imagegen/ima2/status` returns `ok: true` | Codex/ChatGPT OAuth path — model `gpt-5.5`, best fashion fidelity, project-bound writes, no extra runtime |
| **1b** | **ima2 CLI** (same engine, no daemon) | `command -v ima2` succeeds **and** an `ima2 serve` is up at `127.0.0.1:3333` | Same model and quality as Tier 1; used when running outside the OD daemon |
| **2** | **ComfyUI HTTP** (fallback) | `GET http://127.0.0.1:8188/system_stats` returns 200 | Local SD/SDXL/Flux engine when ima2 is unavailable; no OAuth needed |
| **3** | **Styled fallback block** (no image) | none of the above | Page must still ship; render a CSS placeholder card with the original prompt |

Probe order is strict: Tier 1 → 1b → 2 → 3. Stop at the first success and use
that engine for the entire skill run. Do not mix engines mid-artifact.

## Defaults

These defaults apply across all fashion skills unless the per-skill SKILL.md
overrides them.

```
model       = gpt-5.5         (ima2 default; do not pin to gpt-5.4)
moderation  = low
size        = 1024x1024       (square mood / chips / details)
size_look   = 1024x1536       (vertical 4:5 figure / styling shots)
quality     = medium
out_dir     = images/         (project-local, beside index.html)
```

Per-skill SKILL.md may override `size`, `quality`, or `out_dir`, but **must**
keep `model = gpt-5.5` and `moderation = low` unless the user explicitly asks
otherwise.

## Tier 1 — ima2 via daemon bridge (default)

**Probe:**

```bash
# Returns { ok: true, serverUrl: "http://127.0.0.1:3333" } when ready.
curl -s http://127.0.0.1:LOCAL_DAEMON_PORT/api/imagegen/ima2/status
```

The daemon port is the one printed by `pnpm tools-dev`. When the agent runs
under the OD daemon, the project-relative path is sufficient.

**Generate:**

```
POST /api/projects/<projectId>/imagegen/ima2/generate
Content-Type: application/json

{
  "prompt": "...",
  "name": "images/look-01.png",
  "model": "gpt-5.5",
  "quality": "medium",
  "size": "1024x1536",
  "moderation": "low"
}
```

The daemon writes the PNG into the project's `images/` folder and returns
`{ name, path, bytes, ima2: { ... } }`. The artifact references the local
relative path — never an external URL or base64 blob.

## Tier 1b — ima2 CLI (no daemon)

If the daemon bridge is unreachable but the `ima2` binary is on `PATH` and
`ima2 serve` is already running, call the CLI directly. Use the same model and
moderation defaults.

```bash
ima2 gen "<prompt>" \
  -o images/look-01.png \
  --model gpt-5.5 \
  --moderation low \
  --size 1024x1536 \
  --quality medium
```

The agent must be in the project's working directory (the daemon sets
`cwd = .od/projects/<id>`). The output path must be relative to `cwd`.

## Tier 2 — ComfyUI HTTP (fallback)

**Probe:**

```bash
curl -sf http://127.0.0.1:8188/system_stats >/dev/null && echo "comfy ok"
```

ComfyUI is workflow-based, so the agent must POST a complete graph to
`/prompt` and then poll `/history/<prompt_id>` for the output filename. Use
this minimal text-to-image graph (SDXL base; substitute the checkpoint name
the user has installed):

```bash
PROMPT='editorial fashion lookbook image, full-body fashion model wearing relaxed boxy shirt and washed denim, studio backdrop, vertical 4:5, no logos, no readable text, no watermark'

curl -s -X POST http://127.0.0.1:8188/prompt \
  -H 'Content-Type: application/json' \
  -d @- <<JSON
{
  "prompt": {
    "3":  { "class_type": "KSampler", "inputs": { "seed": 0, "steps": 28, "cfg": 6, "sampler_name": "dpmpp_2m", "scheduler": "karras", "denoise": 1, "model": ["4", 0], "positive": ["6", 0], "negative": ["7", 0], "latent_image": ["5", 0] } },
    "4":  { "class_type": "CheckpointLoaderSimple", "inputs": { "ckpt_name": "sd_xl_base_1.0.safetensors" } },
    "5":  { "class_type": "EmptyLatentImage", "inputs": { "width": 1024, "height": 1536, "batch_size": 1 } },
    "6":  { "class_type": "CLIPTextEncode", "inputs": { "text": "$PROMPT", "clip": ["4", 1] } },
    "7":  { "class_type": "CLIPTextEncode", "inputs": { "text": "logos, readable text, watermark, distorted hands, extra limbs, runway crowd, beauty-shot framing", "clip": ["4", 1] } },
    "8":  { "class_type": "VAEDecode", "inputs": { "samples": ["3", 0], "vae": ["4", 2] } },
    "9":  { "class_type": "SaveImage", "inputs": { "filename_prefix": "od_fashion", "images": ["8", 0] } }
  }
}
JSON
```

Then poll `/history/<prompt_id>` until the entry exists, read
`outputs.<node_id>.images[].filename`, and copy the file from
`<comfy_root>/output/` into the project's `images/` folder with a stable name
(`images/look-01.png` etc.). If `<comfy_root>` is unknown, ask the user once
and then cache it in `.od/projects/<id>/.imagegen-comfy.json`.

The negative prompt above is the fashion default. Add user-supplied "avoid"
items by appending them; do not remove the defaults.

When the user has a different checkpoint installed (e.g. `flux1-dev.safetensors`
or `juggernautXL_v9.safetensors`), substitute the `ckpt_name` field. The
agent may probe `GET /object_info` to list installed checkpoints.

## Tier 3 — Styled fallback block (no image)

If Tier 1, 1b, and 2 all fail (or the user ran with `--no-imagegen`), every
`<figure class="image-frame">` slot falls back to a styled placeholder card
that displays the original imagegen prompt. The page must still render. Use:

```html
<figure class="image-frame" data-fallback="...prompt...">
  <!-- <img> intentionally omitted; CSS shows the prompt text -->
</figure>
```

The shared `assets/template.html` of every fashion skill ships with the
fallback CSS already wired. Do not invent new fallback markup.

## Prompt shapes

Each fashion skill defines its own per-asset prompt shape, but all of them
share these constraints:

- `Constraints:` — `no logos, no readable text, no watermark, no distorted hands, no extra limbs`
- `Avoid:` — at least one explicit "what we are not" line per image; mood
  boards add `catalog-pose, runway crowd, studio backdrop seamless white`;
  lookbook shots add `cropped shoes unless specified, busy background`
- `Color palette:` — translate active DESIGN.md tokens to physical color names
  (the agent never invents colors from memory)
- `Materials/textures:` — pull from the active fabric board if the skill has
  read one; otherwise pull from the user brief

See per-skill `SKILL.md` Step 3 for the exact prompt shape.

## Project-bound writes

All images live under `<project>/images/` with stable, semantic names. Never
use a tmp folder, an absolute path, or a non-deterministic name. The same
artifact, re-rendered, must point at the same files.

## Gates

Before emitting `<artifact>`, the agent must verify:

- Every `<img src="...">` resolves to a file the agent actually wrote in
  `images/`.
- Every `images/*.png` referenced in the artifact has been written this run
  (no orphan references).
- If any image generation failed, the matching `<figure>` falls back to the
  styled placeholder rather than rendering a broken `<img>`.

These gates apply to every skill that uses this guide.
