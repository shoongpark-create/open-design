# Data Viz UI Kit

High-fidelity React recreation of the Figma chart kit. Drop into your site or copy individual components.

## Files
- `BarChart.jsx` — grouped vertical bars, white inline value readouts
- `LineChart.jsx` — multi-series lines with terminal value labels (4px heavy-outline card variant)
- `DonutChart.jsx` — ring + centered "Legend" + floating pct pills
- `AreaChart.jsx` — single-series smooth area with gradient fill
- `Pieces.jsx` — `StackedBar`, `PercentChip`, `Metric`, `Badge`, `Legend`

## Usage
Include React 18 + Babel (as in `index.html`) and the components via `<script type="text/babel" src="…">`. They attach to `window`, so they work across script boundaries. Pull tokens from `../../colors_and_type.css`.

## Fidelity
Layout / padding / radii / colors follow the Figma source (chart surfaces at 1627×1069 → down-sampled). The kit is cosmetic: it trades production features (tooltips, accessibility, responsive redraw) for matching the static-artwork look.
