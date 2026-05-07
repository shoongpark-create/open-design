# Styling Board Layouts

Three rhythm options. Pick **one** in Step 2 and paste its block into
`<main id="styling-board">`. Do not mix rhythms inside a single board.

The classes used here (`.track-strip`, `.look-grid`, `.figure-card`, etc.)
are pre-defined in `assets/template.html`. Do not invent new class names.

---

## Rhythm A — Single-row track (default, ≤14 looks)

Use when the period carries 10–14 looks and the team wants the entire
selling period legible at one glance. Axis labels sit above the row as a
horizontal track strip.

```html
<header class="board-header">
  <div class="board-meta">
    <span class="season">[REPLACE 27SS]</span>
    <span class="period">[REPLACE S1 (JAN-FEB)]</span>
    <span class="line">[REPLACE UNI]</span>
    <span class="status">[REPLACE v1]</span>
  </div>
  <h1 class="thesis">[REPLACE one-sentence period thesis with anchor items]</h1>
</header>

<section class="track-strip" aria-label="Axis track">
  <span class="axis-label" data-axis="basic">BASIC</span>
  <span class="axis-label" data-axis="new-basic">NEW BASIC</span>
  <span class="axis-label" data-axis="trend">TREND</span>
  <span class="axis-label" data-axis="accent">ACCENT</span>
</section>

<section class="look-grid look-grid--row" aria-label="Looks">
  <figure class="figure-card" data-axis="basic">
    <span class="axis-dot" aria-hidden="true"></span>
    <span class="look-number">01</span>
    <div class="image-frame" data-fallback="Generate images/look-01-basic.png with imagegen">
      <img src="images/look-01-basic.png" alt="Look 01" />
    </div>
    <figcaption>[REPLACE anchor item + 1 styling move]</figcaption>
    <div class="chip-strip" aria-label="Look colors">
      <span class="chip" style="background:[hex]"></span>
      <span class="chip" style="background:[hex]"></span>
      <span class="chip" style="background:[hex]"></span>
    </div>
  </figure>
  <!-- repeat .figure-card per look; copy axis dot color via data-axis -->
</section>
```

---

## Rhythm B — Two-row stagger (15–18 looks)

Row 1 carries BASIC + NEW BASIC, row 2 carries TREND + ACCENT. Each row has
its own track strip. Use when the period is busy and a single row would
shrink figures below readable size.

```html
<section class="track-strip track-strip--paired" aria-label="Foundation track">
  <span class="axis-label" data-axis="basic">BASIC</span>
  <span class="axis-label" data-axis="new-basic">NEW BASIC</span>
</section>

<section class="look-grid look-grid--row" aria-label="Foundation looks">
  <!-- 6–10 BASIC + NEW BASIC figure-cards -->
</section>

<section class="track-strip track-strip--paired" aria-label="Direction track">
  <span class="axis-label" data-axis="trend">TREND</span>
  <span class="axis-label" data-axis="accent">ACCENT</span>
</section>

<section class="look-grid look-grid--row" aria-label="Direction looks">
  <!-- 5–8 TREND + ACCENT figure-cards -->
</section>
```

---

## Rhythm C — Quartet sections (axis ≥4 each)

Four named sections stacked vertically, each axis its own block. Use when
each axis carries at least 4 looks and the team wants per-axis caption
density (e.g. internal MD review).

```html
<section class="axis-block" data-axis="basic">
  <header class="axis-header"><h2>BASIC</h2><p class="axis-note">[REPLACE 1-line role of BASIC this period]</p></header>
  <div class="look-grid look-grid--row">
    <!-- BASIC figure-cards only -->
  </div>
</section>

<section class="axis-block" data-axis="new-basic">
  <header class="axis-header"><h2>NEW BASIC</h2><p class="axis-note">[REPLACE]</p></header>
  <div class="look-grid look-grid--row"></div>
</section>

<section class="axis-block" data-axis="trend">
  <header class="axis-header"><h2>TREND</h2><p class="axis-note">[REPLACE]</p></header>
  <div class="look-grid look-grid--row"></div>
</section>

<section class="axis-block" data-axis="accent">
  <header class="axis-header"><h2>ACCENT</h2><p class="axis-note">[REPLACE — keep accent scarce]</p></header>
  <div class="look-grid look-grid--row"></div>
</section>
```

---

## Always-on tail blocks

These sit below whichever rhythm you chose. Required by the checklist.

```html
<section class="axis-summary" aria-label="Axis count">
  <h2>Axis count</h2>
  <table>
    <thead><tr><th>Axis</th><th>Count</th><th>%</th><th>Target</th><th>Δ</th></tr></thead>
    <tbody>
      <tr><td>BASIC</td><td>[n]</td><td>[%]</td><td>[t%]</td><td>[+/-]</td></tr>
      <tr><td>NEW BASIC</td><td>[n]</td><td>[%]</td><td>[t%]</td><td>[+/-]</td></tr>
      <tr><td>TREND</td><td>[n]</td><td>[%]</td><td>[t%]</td><td>[+/-]</td></tr>
      <tr><td>ACCENT</td><td>[n]</td><td>[%]</td><td>[t%]</td><td>[+/-]</td></tr>
      <tr class="total"><td>Total</td><td>[N]</td><td>100%</td><td>100%</td><td>0</td></tr>
    </tbody>
  </table>
</section>

<section class="carryover-map" aria-label="Carryover map">
  <h2>Carryover from previous period</h2>
  <ul>
    <li>Look [NN] ← [previous period code, e.g. 26FW S4 Look 07] · [reason]</li>
  </ul>
</section>

<section class="open-decisions" aria-label="Open decisions">
  <h2>Open / next decisions</h2>
  <ul>
    <li>[Decision] · owner: [name] · by: [YYYY-MM-DD]</li>
  </ul>
</section>
```

If a tail block has no entries (e.g. zero carryover), omit the entire
`<section>` rather than emitting a stub heading.
