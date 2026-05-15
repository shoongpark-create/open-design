---
name: "imagegen"
description: "Project-local image generation policy. Use the built-in image_gen tool through the current authenticated Codex session. Do not use API/CLI fallback, OPENAI_API_KEY, ima2, or local ComfyUI in this project."
---

# Project Imagegen Policy

Use this skill whenever the user mentions `imagegen`, `$imagegen`, "Image 2.0",
or asks to generate/edit raster imagery in this project.

## Hard rule for this project

Use only the built-in `image_gen` tool through the current authenticated Codex
session.

Do **not** use:

- OpenAI API calls, SDK runners, or `OPENAI_API_KEY`
- `scripts/image_gen.py` CLI fallback
- `ima2`, the OD imagegen daemon bridge, or `ima2` CLI
- local ComfyUI / SD / SDXL / Flux HTTP workflows
- one-off shell scripts that call image APIs

If a user explicitly asks for API, CLI, `ima2`, or ComfyUI, say that this
project is configured for built-in authenticated image generation only, then
ask for confirmation before using any other path.

## Model wording

The built-in tool does not expose a model-selection parameter. If the user says
`gpt-image-2`, `gpt-image-2.0`, or "Image 2.0", treat it as a quality target in
the prompt rather than as permission to use API/CLI.

## Save-path policy

Built-in outputs are saved under `$CODEX_HOME/generated_images/...` by default.
For project-bound work:

1. Generate with built-in `image_gen`.
2. Copy the selected output into the project, usually under `images/`.
3. Leave the original generated file in place.
4. Reference only the project-local copy from HTML/CSS/docs.

Do not reference `$CODEX_HOME`, temp paths, external image URLs, or base64 blobs
from final project artifacts.

## Prompt shape

Use compact structured prompts:

```text
Use case: <imagegen taxonomy slug>
Asset type: <where this asset will be used>
Primary request: <main request>
Scene/backdrop: <environment>
Subject: <main subject>
Style/medium: <photo / illustration / 3D / etc>
Composition/framing: <crop, camera, margins>
Lighting/mood: <lighting and mood>
Color palette: <palette notes>
Materials/textures: <surface and garment details>
Constraints: <must keep / must avoid>
Avoid: <negative constraints>
```

For fashion/editorial images, always include `no logos, no readable text, no
watermark, no distorted hands, no extra limbs` unless the user explicitly wants
text or branding.

## Transparent images

For transparent-background requests, use the built-in-first chroma-key workflow:

1. Generate the subject on a flat chroma-key background.
2. Copy the generated source image into the project or `tmp/imagegen/`.
3. Run
   `$CODEX_HOME/skills/.system/imagegen/scripts/remove_chroma_key.py`.
4. Validate alpha, transparent corners, and edge quality.

Do not switch to CLI true-transparent output unless the user explicitly
confirms a policy exception.
