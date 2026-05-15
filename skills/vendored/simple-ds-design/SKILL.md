---
name: simple-ds-design
description: Use this skill to generate well-branded interfaces and assets for the Simple Design System Kit, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

The kit covers two systems:

1. **Simple Design System (primary)** — a full general-purpose UI language: neutral near-black text, warm-pink accent, Inter type, Feather icons, 8 px radii, flat soft shadows. Use this for anything that isn't a chart.
2. **Data Viz Kit (secondary)** — bar/line/donut/area chart primitives. Use **only** inside charts; never style UI chrome with data-viz colors.

### Where to look
- `colors_and_type.css` — every token you need (colors, type scale, radii, spacing, shadows, motion). Import it at the top of any HTML artifact.
- `assets/icons/` — ~35 Feather SVGs. For anything else, link Lucide from CDN (`https://unpkg.com/lucide@latest`) — it's a drop-in Feather replacement.
- `ui_kits/simple-ds/` — JSX components for buttons, tags, inputs, cards, nav, AI chat. Read these for component anatomy before hand-rolling anything.
- `ui_kits/data-viz/` — chart JSX components.
- `preview/` — small HTML specimens you can eyeball for exact styling of tokens and components.

### Rules of the system
- Sentence case everywhere. No emoji. No exclamation marks.
- Inter for UI, Roboto Mono for code, Space Grotesk for display (Whyte substitute).
- 8 px default radius; 9999 px pills for tags/chips.
- Borders do most of the structural work; shadows are reserved for floating surfaces.
- Single brand accent (`--c-brand` warm pink). Use semantic colors (success/warning/danger/info) for state, never for decoration.

### Workflow
- If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out of this kit and create static HTML files for the user to view. Import `colors_and_type.css`; reuse tokens.
- If working on production code, you can copy assets and read the rules here to become an expert in designing with this system.
- If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts *or* production code, depending on the need.
