# Simple Design System Kit

A design-system kit sourced from two Community Figma files:

1. **Simple Design System (Community)** — *primary*. Provides the core UI language: color, type, layout, buttons, tags, inputs, cards, avatars, menus, navigation, dialogs, AI-chat, forms, tooltips, and more.
2. **Data Visualization Graphs & Charts Kit (Community)** — *secondary*. Used **only** for chart primitives (bars, lines, donuts, surfaces) when a design needs data viz.

This kit exists so a design agent can produce well-branded interfaces, prototypes, and throwaway mocks that feel consistent with the Simple DS community aesthetic — without starting from scratch each time.

> **Note on provenance:** both files are community-licensed Figma files. The project does not represent a real brand or product; it's a utility kit for generic, well-crafted B2B/SaaS-ish UI surfaces.

---

## Source files

- **Simple Design System (Community).fig** — 25 pages, 55 frames. Pages include Cover, Foundations, Icons, Examples, Composition-guide, Accordion, AI-Chat, Avatars, Buttons, Calendar, Cards, Dialog, Inputs, Menu, Navigation, Notification, Pagination, Tabs, Tags, Text, Tooltip, Forms, Sections, Utilities, Component-Playground.
- **Data Visualization Graphs & Charts Kit (Community).fig** — 3 pages, 54 frames. Welcome-Tutorial, Data-Viz-Kit, Cover.

Both were provided as mounted virtual filesystems at authoring time. Downstream readers will **not** have access to the originals; this kit is self-contained.

---

## Content fundamentals

The two source files are pure design kits — no marketing copy, product voice, or tone guide. What copy *does* appear in components (AI-Chat, Notification, Accordion, etc.) is intentionally neutral and pragmatic.

**Voice & tone**

- **Clear, literal, task-focused.** Example labels from components: *"Email address", "Password", "Forgot password?", "Sign in", "Continue with Google"*. No marketing language.
- **Sentence case for everything** — buttons, labels, headings, menu items. Title Case is avoided.
- **Second person ("you") for instructions**, first-person for the user speaking to AI (*"Summarize this email"*). First-person plural ("we") is avoided.
- **No exclamation marks.** Errors and warnings are matter-of-fact: *"Please enter a valid email address."*
- **No emoji.** Never. The kit uses Feather icon glyphs for any expressive signal.
- **Numbers over adjectives.** Notification says *"3 new messages"*, not *"Some new messages!"*.

**Copywriting examples**

| Surface | Copy |
|---|---|
| Primary button | `Continue` · `Save changes` · `Create account` |
| Destructive button | `Delete` · `Remove member` |
| Empty state | `No results` · `Nothing here yet` |
| Tag label | `New` · `Beta` · `Updated` · `Deprecated` |
| Error | `This field is required.` · `Invalid date.` |
| AI prompt placeholder | `Ask anything…` |

---

## Visual foundations

### Color

- **Monochrome base.** Text is near-black `rgb(30, 30, 30)`; secondary `rgb(117, 117, 117)`; borders `rgb(217, 217, 217)`; backgrounds either white or `rgb(250, 250, 250)`. Very tight neutral ramp.
- **One brand accent — warm pink/magenta.** Primary `rgb(138, 34, 111)` on `rgb(250, 225, 250)` subtle. Used on primary buttons, focus rings, and the occasional highlight. Never as a large background.
- **Semantic colors** follow a `base / subtle / fg` trio pattern: success green, warning amber, danger red, info blue. Each has a strong variant (icons, pills) and a subtle variant (backgrounds).
- **Charts** use their own categorical palette (10 hues starting with `#1F77B4` — Tableau-ish) and must not bleed into UI chrome.

### Type

- **Inter** for all UI (400 / 500 / 600 / 700).
- **Roboto Mono** for code, metrics, timestamps.
- **Whyte** for display-scale headlines. ⚠️ Whyte is a licensed face and is **not** bundled; we substitute **Space Grotesk** from Google Fonts. See the *Substitutions* section below.
- Sentence-case always. Tight tracking (`-0.02em`) on display sizes, zero on body.

### Layout & spacing

- **4 px base, 8 px rhythm.** Most gaps are 8/12/16/24/32.
- **Generous padding on containers** — cards use 24 px, dialogs 32 px. Content breathes.
- **Max content width around 1200** for marketing surfaces; apps often use a two-column shell (sidebar + fluid content).
- No hero illustrations or full-bleed imagery in the source. The system is text-and-component first.

### Borders, radii, shadows

- **Default radius: 8 px** on buttons, cards, tags, inputs. **Pills (9999 px)** on tags, avatars, chips, some inputs.
- **1 px solid borders** do most of the structural work. Shadows are used sparingly — dialogs, menus, tooltips.
- **Shadow ramp is soft and flat:** xs / sm / md / lg / xl. No neon glows, no colored shadows except the brand-pink focus ring.

### Motion & state

- **Fades and color swaps, not bounces.** Transitions are 120–320 ms on `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- **Hover:** buttons darken (subtract ~15% L), tags get a slightly darker border, links switch to the hover color. No scale transforms.
- **Press:** same color shift as hover plus a 1 px inset. No shrink.
- **Focus:** brand-pink 3 px ring with 20% alpha, always visible on keyboard focus.
- **Disabled:** 40% opacity, pointer-events: none.

### Imagery

- The source file has **no photography**. What little imagery exists is placeholder portrait avatars and a monochrome logo tile on the cover.
- If a design needs imagery, prefer **neutral, warm-lit, slightly-desaturated** stock — or stay with color blocks and type.

### Transparency, blur, gradients

- **No gradients** in the component set. The cover uses flat near-black.
- **Transparency** only in overlays (dialog backdrop ~40% black) and subtle scrim on image cards.
- **No backdrop blur.**

---

## Iconography

- **Feather Icons** is the system. Every glyph in Simple DS is a Feather icon — 1.33-px stroke on a 16×16 base, scaling up at 20/24/32/40/48.
- **SVG-first.** We've copied ~35 of the most common Feather SVGs to `assets/icons/`. For everything else, link Feather/Lucide from CDN:
  ```html
  <script src="https://unpkg.com/lucide@latest"></script>
  ```
  Lucide is a maintained fork of Feather with the same visual language, and works as a drop-in replacement.
- **Never emoji.** Never ad-hoc SVG icons. If a glyph is missing, substitute the closest Feather/Lucide match.
- **Stroke color** inherits from CSS `color`; always pair icon color with text color.

Logo: the source file's cover uses an abstract 5-shape mark on a `rgb(31, 31, 31)` tile. We haven't extracted it as a separate logo — the kit is brand-agnostic. Use your own wordmark.

---

## Substitutions (flag for user)

| Original | Substitute | Why |
|---|---|---|
| **Whyte** display font | Space Grotesk (Google Fonts) | Whyte is licensed and can't be bundled. Space Grotesk is the closest free geometric grotesk with a similar tight counter / soft terminal. |
| **Geist** (appears in a few frames) | Inter | Geist is free but adds a third family; Inter covers the same range at every weight used. |

→ **Please provide the real font files** (`Whyte-*.woff2`, `Geist-*.woff2`) if this kit is going to production, and I'll swap them in.

---

## Index / manifest

```
Simple Design System Kit/
├── README.md                   ← you are here
├── SKILL.md                    ← Agent Skill manifest (Claude Code-compatible)
├── colors_and_type.css         ← all CSS tokens (colors, type, spacing, radii, shadows)
├── fonts/                      ← Pretendard OTFs (legacy; Inter is CDN-loaded)
├── assets/
│   └── icons/                  ← ~35 Feather SVGs for direct <img> or inline use
├── preview/                    ← small HTML cards registered in the Design System tab
│   ├── colors-neutrals.html        tokens: neutrals ramp
│   ├── colors-brand.html           tokens: brand + semantic
│   ├── colors-data.html            tokens: data-viz palette (secondary)
│   ├── type-display.html           specimen: display / hero
│   ├── type-body.html              specimen: body / headings
│   ├── type-weights.html           specimen: Inter weights
│   ├── radii.html                  spacing: corner radii ramp
│   ├── shadows.html                spacing: shadow ramp
│   ├── spacing.html                spacing: scale ramp
│   ├── buttons.html                components: button family
│   ├── tags.html                   components: tag/badge family
│   ├── inputs.html                 components: text inputs + states
│   ├── icons.html                  brand: Feather icon sample
│   └── chart-*.html                secondary: data-viz specimens
├── ui_kits/
│   ├── simple-ds/              ← PRIMARY UI kit
│   │   ├── README.md
│   │   ├── index.html          ← clickable demo app
│   │   ├── Button.jsx
│   │   ├── Tag.jsx
│   │   ├── Input.jsx
│   │   ├── Card.jsx
│   │   ├── Nav.jsx
│   │   └── AIChat.jsx
│   └── data-viz/               ← SECONDARY chart kit
│       ├── README.md
│       ├── index.html
│       ├── LineChart.jsx
│       ├── BarChart.jsx
│       ├── DonutChart.jsx
│       ├── AreaChart.jsx
│       └── Pieces.jsx
```

## Caveats

- **Whyte / Geist fonts substituted** — flag above.
- **No logo** — source is brand-agnostic. Use your own.
- **AI-Chat, Forms, Dialog, Menu** components from the source are partially represented in the UI kit; the full Figma file has more variants than we've recreated.
- **Data viz kit** covers the 4 core chart types; the source has ~48 more specialized variants we haven't built.
