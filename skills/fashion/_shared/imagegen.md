# Fashion Image Generation — Project Policy

This document is the **single source of truth** for how every fashion skill in
this project generates project-local raster imagery.

## Project override

When the user mentions `imagegen`, `$imagegen`, or asks a fashion skill to
generate images, use the Codex built-in `image_gen` tool through the current
authenticated session.

Do **not** use any of these paths in this project:

- OpenAI API / CLI fallback, including `scripts/image_gen.py`
- `OPENAI_API_KEY` setup or direct SDK runners
- `ima2` daemon bridge or `ima2` CLI
- local ComfyUI / SD / SDXL / Flux HTTP workflows
- one-off shell scripts that call external image APIs

If the user explicitly asks for API, CLI, `ima2`, or ComfyUI, state that this
project's imagegen policy is built-in authenticated generation only, then ask
for confirmation before using any non-built-in path.

## Built-in workflow

1. Generate each distinct asset with one built-in `image_gen` call.
2. Treat model names such as `gpt-image-2`, `gpt-image-2.0`, or "Image 2.0" as
   a quality/style target in the prompt. The built-in tool does not expose a
   model-selection argument.
3. Use compact, production-oriented prompts from the per-skill `SKILL.md`.
4. After generation, copy the selected output from
   `$CODEX_HOME/generated_images/...` into the current project. Leave the
   original generated file in place.
5. Save final project assets under `<project>/images/` using stable semantic
   filenames such as `cover-look.png`, `look-01.png`, or `mood-03.png`.
6. Never reference `$CODEX_HOME`, temporary folders, external URLs, or base64
   blobs from the final HTML artifact.

## Defaults

These defaults apply across all fashion skills unless the per-skill `SKILL.md`
needs a different crop for the artifact.

```
engine      = built-in image_gen authenticated path
size_mood   = square or near-square mood image
size_look   = vertical 4:5 editorial / full-body figure
out_dir     = images/ beside index.html
quality     = high editorial prompt quality; no API quality flag
```

The built-in tool may return dimensions that are not exact matches to the
requested crop. Preserve the generated image and use CSS `object-fit: cover`
or non-destructive local copies when layout needs a consistent frame.

## Transparent images

For transparent-background requests, follow the `imagegen` skill's built-in
first chroma-key workflow:

1. Generate the subject on a perfectly flat chroma-key background.
2. Copy the generated image into the project or `tmp/imagegen/`.
3. Use the installed
   `$CODEX_HOME/skills/.system/imagegen/scripts/remove_chroma_key.py` helper to
   produce a PNG/WebP with alpha.
4. Validate transparent corners and no obvious fringe before referencing the
   result.

Do not switch to native transparent CLI output in this project unless the user
explicitly confirms a policy exception.

## Prompt shape

Image-generation prompts may be written in English for model quality. However,
when the user writes in Korean or the brand/context is Korean, visible artifact
copy derived from those prompts — captions, fallback cards, prompt-register
summaries, alt text, and section labels — should use a Korean fashion-business
register, not full translation. Use Korean noun-phrase report structure with
accepted English terms such as mood, lookbook, styling, fit, silhouette,
colorway, carryover, bridge, SKU, target lot, item, category,
BASIC/TREND/ACCENT, and UNI/WOMEN when those terms are the natural working
language. Keep filenames and model parameters in English. Prefer noun-phrase
endings for visible report copy, prompt registers, fallback cards, and revision
notes, for example `생성 완료`, `로고 사용 금지`, `styling reference`,
`owner 확인`, `대체 프롬프트 유지`, or `Local ComfyUI 미사용`.

Each fashion skill defines its own per-asset prompt shape, but all prompts
should keep these shared constraints:

- `Use case:` use `ads-marketing`, `product-mockup`, or another exact
  `imagegen` taxonomy slug when useful.
- `Asset type:` name the project use, for example `fashion lookbook image`.
- `Composition/framing:` specify full body, three-quarter, square mood image,
  or detail crop, plus usable margins.
- `Constraints:` include `no logos, no readable text, no watermark, no
  distorted hands, no extra limbs`.
- `Avoid:` include a specific anti-direction for the asset, for example
  `runway crowd`, `busy background`, or `cropped shoes`.
- `Color palette:` translate active `DESIGN.md` tokens into physical apparel
  colors.
- `Materials/textures:` use the active fabric board if present; otherwise pull
  from the user brief.

## Failure behavior

If the built-in `image_gen` tool is unavailable or the image generation fails:

1. Do not fall back to API, `ima2`, or ComfyUI.
2. Keep the HTML artifact shippable by rendering the existing styled fallback
   block with the original prompt in `data-fallback`.
3. Tell the user which asset failed and that no non-built-in engine was used.

## Project-bound gates

Before finishing any artifact that references generated imagery, verify:

- Every `<img src="...">` resolves to a file under the project.
- Every generated deliverable was copied into `<project>/images/`.
- No final artifact references `$CODEX_HOME`, temporary folders, external
  image URLs, or base64 blobs.
- No API key, `ima2`, or ComfyUI setup was requested or used.
