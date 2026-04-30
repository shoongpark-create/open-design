# Fashion Color Story Layouts

Paste these sections into `<main id="color-story">` in
`assets/template.html`. Keep class names unchanged; edit color codes,
fabric pairings, and matrix cells only. Section order is load-bearing —
the document must sequence intent → glance → structure → detail → plan →
QC → discipline → continuity.

## 1. Cover

```html
<section class="section cover-grid" data-od-id="cover">
  <div>
    <p class="kicker">[SEASON] · COLOR STORY</p>
    <h1 class="display">[Palette Name]</h1>
    <p class="thesis">[One-sentence palette thesis: "27SS palette holds the humid commute mood with three brand-main carryovers, four dusty season tones, and one dry pop accent."]</p>
    <p class="meta cover-meta">[Brand] · [Author] · Lock date [Date] · Status [v1 / v2 / locked]</p>
  </div>
  <figure class="palette-preview">
    <div class="preview-strip">
      <span class="preview-chip" style="background:[HEX-1];"></span>
      <span class="preview-chip" style="background:[HEX-2];"></span>
      <span class="preview-chip" style="background:[HEX-3];"></span>
      <span class="preview-chip" style="background:[HEX-4];"></span>
      <span class="preview-chip" style="background:[HEX-5];"></span>
      <span class="preview-chip" style="background:[HEX-6];"></span>
      <span class="preview-chip" style="background:[HEX-7];"></span>
      <span class="preview-chip" style="background:[HEX-8];"></span>
    </div>
    <p class="meta preview-caption">[N] colors · [main count] main · [season count] season · [accent count] accent</p>
  </figure>
</section>
```

## 2. Thesis

```html
<section class="section thesis-block" data-od-id="thesis">
  <div>
    <p class="kicker">Why this palette</p>
    <h2 class="h2">[Palette thesis headline — one sentence.]</h2>
  </div>
  <div class="thesis-copy">
    <p class="lead">[Paragraph 1: link back to concept board territory — what the palette is *for*.]</p>
    <p>[Paragraph 2: hierarchy logic — why main/season/accent split this way.]</p>
    <p>[Paragraph 3: what changes vs. previous season; channel/customer rationale.]</p>
  </div>
</section>
```

## 3. Master Grid

```html
<section class="section" data-od-id="master-grid">
  <p class="kicker">Master palette · all colors</p>
  <h2 class="h2" style="margin-bottom: 28px;">[N] colors at a glance.</h2>
  <div class="master-grid">
    <article class="master-chip" data-tier="main">
      <div class="chip-swatch" style="background:[HEX];"></div>
      <div class="chip-info">
        <h3 class="chip-name">[emotional name]</h3>
        <p class="meta chip-code">[HEX] · [TCX code]</p>
        <p class="meta chip-tier">main</p>
      </div>
    </article>
    <article class="master-chip" data-tier="main">
      <div class="chip-swatch" style="background:[HEX];"></div>
      <div class="chip-info"><h3 class="chip-name">[name]</h3><p class="meta chip-code">[HEX] · [TCX]</p><p class="meta chip-tier">main</p></div>
    </article>
    <article class="master-chip" data-tier="main">
      <div class="chip-swatch" style="background:[HEX];"></div>
      <div class="chip-info"><h3 class="chip-name">[name]</h3><p class="meta chip-code">[HEX] · [TCX]</p><p class="meta chip-tier">main</p></div>
    </article>
    <article class="master-chip" data-tier="season">
      <div class="chip-swatch" style="background:[HEX];"></div>
      <div class="chip-info"><h3 class="chip-name">[name]</h3><p class="meta chip-code">[HEX] · [TCX]</p><p class="meta chip-tier">season</p></div>
    </article>
    <article class="master-chip" data-tier="season">
      <div class="chip-swatch" style="background:[HEX];"></div>
      <div class="chip-info"><h3 class="chip-name">[name]</h3><p class="meta chip-code">[HEX] · [TCX]</p><p class="meta chip-tier">season</p></div>
    </article>
    <article class="master-chip" data-tier="season">
      <div class="chip-swatch" style="background:[HEX];"></div>
      <div class="chip-info"><h3 class="chip-name">[name]</h3><p class="meta chip-code">[HEX] · [TCX]</p><p class="meta chip-tier">season</p></div>
    </article>
    <article class="master-chip" data-tier="season">
      <div class="chip-swatch" style="background:[HEX];"></div>
      <div class="chip-info"><h3 class="chip-name">[name]</h3><p class="meta chip-code">[HEX] · [TCX]</p><p class="meta chip-tier">season</p></div>
    </article>
    <article class="master-chip" data-tier="accent">
      <div class="chip-swatch" style="background:[HEX];"></div>
      <div class="chip-info"><h3 class="chip-name">[name]</h3><p class="meta chip-code">[HEX] · [TCX]</p><p class="meta chip-tier">accent</p></div>
    </article>
  </div>
</section>
```

## 4. Hierarchy + Proportion Bar

```html
<section class="section hierarchy" data-od-id="hierarchy">
  <p class="kicker">Hierarchy</p>
  <h2 class="h2" style="margin-bottom: 28px;">[Main %] / [Season %] / [Accent %] — palette weight.</h2>
  <div class="proportion-bar" role="img" aria-label="Palette proportion bar">
    <div class="proportion-segment" data-tier="main" style="--share: 60%;"><span class="meta">main · 60%</span></div>
    <div class="proportion-segment" data-tier="season" style="--share: 30%;"><span class="meta">season · 30%</span></div>
    <div class="proportion-segment" data-tier="accent" style="--share: 10%;"><span class="meta">accent · 10%</span></div>
  </div>
  <div class="tier-blocks">
    <div class="tier-block" data-tier="main">
      <h3 class="tier-title">Main · [count] colors</h3>
      <p class="lead tier-desc">[One line: brand-safe carryover, basics-friendly, anchors the entire collection.]</p>
      <div class="tier-chips">
        <span class="tier-chip" style="background:[HEX];" title="[name]"></span>
        <span class="tier-chip" style="background:[HEX];" title="[name]"></span>
        <span class="tier-chip" style="background:[HEX];" title="[name]"></span>
      </div>
    </div>
    <div class="tier-block" data-tier="season">
      <h3 class="tier-title">Season · [count] colors</h3>
      <p class="lead tier-desc">[One line: this season's mood colors, the new bets.]</p>
      <div class="tier-chips">
        <span class="tier-chip" style="background:[HEX];" title="[name]"></span>
        <span class="tier-chip" style="background:[HEX];" title="[name]"></span>
        <span class="tier-chip" style="background:[HEX];" title="[name]"></span>
        <span class="tier-chip" style="background:[HEX];" title="[name]"></span>
      </div>
    </div>
    <div class="tier-block" data-tier="accent">
      <h3 class="tier-title">Accent · [count] colors</h3>
      <p class="lead tier-desc">[One line: the dry pop / Musinsa thumbnail anchor / one decisive contrast.]</p>
      <div class="tier-chips">
        <span class="tier-chip" style="background:[HEX];" title="[name]"></span>
      </div>
    </div>
  </div>
</section>
```

## 5. Per-Color Detail Spread

Repeat one block per color. Use `data-tier` to color-code the section
border / accent.

```html
<section class="section color-detail" data-od-id="color-[slug]" data-tier="[main|season|accent]">
  <div class="color-head">
    <div class="color-swatch-large" style="background:[HEX];" aria-label="[name]"></div>
    <div class="color-meta">
      <p class="meta">[tier] · [carryover|new]</p>
      <h3 class="h3 color-name">[emotional name]</h3>
      <p class="lead color-tagline">[one-line use rule — "pair with brass hardware", "never with satin pop"]</p>
    </div>
  </div>
  <div class="color-codes">
    <table class="code-table">
      <tbody>
        <tr><th>HEX</th><td>[#XXXXXX]</td></tr>
        <tr><th>RGB</th><td>[R, G, B]</td></tr>
        <tr><th>Pantone TCX</th><td>[19-3911 TCX · Iron]</td></tr>
        <tr><th>Pantone TPG</th><td>[19-3911 TPG] (paper / lookbook only)</td></tr>
        <tr><th>Coloro</th><td>[125-28-38] (optional)</td></tr>
      </tbody>
    </table>
  </div>
  <div class="color-fabric">
    <p class="kicker">Fabric pairings</p>
    <ul class="fabric-list">
      <li>[Material name] — [hand / drape note]</li>
      <li>[Material name] — [hand / drape note]</li>
      <li>[Material name] — [hand / drape note]</li>
    </ul>
  </div>
  <div class="color-rules">
    <p class="kicker">Use rules</p>
    <ul class="rule-list">
      <li><span class="rule-tag rule-do">use</span>[when this color is the right choice]</li>
      <li><span class="rule-tag rule-dont">avoid</span>[when this color must not be used]</li>
      <li><span class="rule-tag rule-do">pair</span>[hardware / trim / stitching pair-up]</li>
    </ul>
  </div>
</section>
```

## 6. Category × Color Matrix

```html
<section class="section" data-od-id="category-matrix">
  <p class="kicker">Category × color distribution</p>
  <h2 class="h2" style="margin-bottom: 28px;">How colors land across categories.</h2>
  <div class="matrix-wrap">
    <table class="matrix">
      <thead>
        <tr>
          <th class="matrix-corner">Category</th>
          <th class="matrix-color"><span class="matrix-chip" style="background:[HEX];"></span><span class="meta">[name]</span></th>
          <th class="matrix-color"><span class="matrix-chip" style="background:[HEX];"></span><span class="meta">[name]</span></th>
          <th class="matrix-color"><span class="matrix-chip" style="background:[HEX];"></span><span class="meta">[name]</span></th>
          <th class="matrix-color"><span class="matrix-chip" style="background:[HEX];"></span><span class="meta">[name]</span></th>
          <th class="matrix-color"><span class="matrix-chip" style="background:[HEX];"></span><span class="meta">[name]</span></th>
          <th class="matrix-color"><span class="matrix-chip" style="background:[HEX];"></span><span class="meta">[name]</span></th>
          <th class="matrix-color"><span class="matrix-chip" style="background:[HEX];"></span><span class="meta">[name]</span></th>
          <th class="matrix-color"><span class="matrix-chip" style="background:[HEX];"></span><span class="meta">[name]</span></th>
          <th class="matrix-total">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr><th>Shirts</th><td>[N]</td><td>[N]</td><td>[N]</td><td></td><td>[N]</td><td>[N]</td><td>[N]</td><td>[N]</td><td class="matrix-total">[sum]</td></tr>
        <tr><th>Outer</th><td>[N]</td><td></td><td></td><td>[N]</td><td></td><td></td><td>[N]</td><td></td><td class="matrix-total">[sum]</td></tr>
        <tr><th>Pants</th><td>[N]</td><td>[N]</td><td>[N]</td><td></td><td>[N]</td><td></td><td></td><td></td><td class="matrix-total">[sum]</td></tr>
        <tr><th>Knits</th><td>[N]</td><td>[N]</td><td></td><td>[N]</td><td>[N]</td><td>[N]</td><td></td><td></td><td class="matrix-total">[sum]</td></tr>
        <tr><th>Skirts / Dresses</th><td>[N]</td><td>[N]</td><td></td><td></td><td>[N]</td><td></td><td></td><td>[N]</td><td class="matrix-total">[sum]</td></tr>
        <tr><th>Accessories</th><td>[N]</td><td></td><td></td><td>[N]</td><td></td><td></td><td>[N]</td><td></td><td class="matrix-total">[sum]</td></tr>
        <tr class="matrix-totals"><th>Total per color</th><td>[sum]</td><td>[sum]</td><td>[sum]</td><td>[sum]</td><td>[sum]</td><td>[sum]</td><td>[sum]</td><td>[sum]</td><td class="matrix-grand">[grand]</td></tr>
      </tbody>
    </table>
  </div>
  <p class="meta matrix-note">Empty cell = color not used in this category. Cell number = colorway count for that category × color pair.</p>
</section>
```

## 7. Colorway Count per Style

```html
<section class="section" data-od-id="colorway-count">
  <p class="kicker">Colorway count per style</p>
  <h2 class="h2" style="margin-bottom: 28px;">Rule of thumb — how many colors per style by category.</h2>
  <table class="count-table">
    <thead><tr><th>Category</th><th>Colorway count per style</th><th>Reasoning</th></tr></thead>
    <tbody>
      <tr><td>Shirts</td><td>3–4</td><td>Highest carryover; tops drive search/conversion.</td></tr>
      <tr><td>Outer</td><td>1–2</td><td>Higher cost — limit colorway risk.</td></tr>
      <tr><td>Pants</td><td>2–3</td><td>Bottom anchor; brand-main + 1 season color.</td></tr>
      <tr><td>Knits</td><td>3–5</td><td>Knits handle color shifts well; capture range.</td></tr>
      <tr><td>Skirts / Dresses</td><td>1–2</td><td>Statement piece — one or two colors per silhouette.</td></tr>
      <tr><td>Accessories</td><td>2–3</td><td>Thumbnail visibility; can carry season accent.</td></tr>
    </tbody>
  </table>
</section>
```

## 8. TCX vs. TPG Note

```html
<section class="section pantone-note" data-od-id="pantone-note">
  <div>
    <p class="kicker">Pantone systems</p>
    <h2 class="h2">TCX is the working standard. TPG is paper only.</h2>
  </div>
  <div class="pantone-grid">
    <article class="pantone-card">
      <h3 class="h3">TCX · Textile Cotton Extended</h3>
      <p>Dyed-cotton swatches. The standard for fabric matching, lab-dip approval, and lot acceptance. ~2,625 colors. <strong>Use TCX for every supplier brief.</strong></p>
    </article>
    <article class="pantone-card">
      <h3 class="h3">TPG · Textile Paper Green</h3>
      <p>Printed-paper version of TCX. ~40–60% cheaper. Runs ~15% lighter than TCX on the same code. <strong>Use only for printed lookbooks / paper presentations. Never for fabric.</strong></p>
    </article>
  </div>
</section>
```

## 9. Dyeing QC + Tolerance

```html
<section class="section qc-block" data-od-id="qc">
  <p class="kicker">Dyeing QC + tolerance</p>
  <h2 class="h2" style="margin-bottom: 24px;">Supplier brief — what to send with the TCX codes.</h2>
  <div class="qc-grid">
    <article class="qc-card">
      <p class="kicker">Working standard</p>
      <h3 class="h3">Pantone TCX (fabric)</h3>
      <p>All codes in this color story are TCX. TPG codes — when listed — are reference for printed materials only.</p>
    </article>
    <article class="qc-card">
      <p class="kicker">Tolerance</p>
      <h3 class="h3">ΔE ≤ [1.0–2.0]</h3>
      <ul class="qc-list">
        <li><strong>Brand main</strong> — ΔE ≤ 1.0 (no exceptions).</li>
        <li><strong>Season</strong> — ΔE ≤ 1.5.</li>
        <li><strong>Accent</strong> — ΔE ≤ 2.0.</li>
      </ul>
    </article>
    <article class="qc-card">
      <p class="kicker">Lab-dip</p>
      <h3 class="h3">3-strike approval</h3>
      <p>Strike 1 — supplier sends 3 swatches per color (lighter / target / darker). Compare under D65 + TL84. Strike 2 narrows. Strike 3 final. 5–10 working days per round.</p>
    </article>
    <article class="qc-card">
      <p class="kicker">Bulk lot</p>
      <h3 class="h3">Head-to-head per lot</h3>
      <p>Every bulk-dyed lot compared head-to-head vs. approved Strike under D65 + TL84. Lot drift can exceed ΔE 2.0 even on identical TCX brief — lock supplier in writing.</p>
    </article>
    <article class="qc-card">
      <p class="kicker">On near-miss</p>
      <h3 class="h3">Accept / re-strike / reject</h3>
      <p>Within tolerance — accept. Outside tolerance with directional fix possible — re-strike (5–7 days). Outside tolerance with no fix — reject + re-dye (10–14 days, +cost).</p>
    </article>
    <article class="qc-card">
      <p class="kicker">Light source</p>
      <h3 class="h3">D65 + TL84 minimum</h3>
      <p>D65 for daylight verification, TL84 for typical retail fluorescent. Single light source review hides metamerism. K-DTC retail is mostly TL84.</p>
    </article>
  </div>
</section>
```

## 10. Anti-palette

```html
<section class="section anti-block" data-od-id="anti-palette">
  <div>
    <p class="kicker">Anti-palette</p>
    <h2 class="h2">[Season] is deliberately not these colors.</h2>
  </div>
  <ul class="anti-list">
    <li>[no fluorescents — Musinsa thumbnail wash + brand clash]</li>
    <li>[no powder pink — 26FW already used as hero, customer perceives "old"]</li>
    <li>[no pure black — brand main is soft black 19-1102 TCX]</li>
    <li>[no acid yellow — brand hangtag clash]</li>
    <li>[no resort coral — out of territory]</li>
  </ul>
</section>
```

## 11. Carryover Table

```html
<section class="section" data-od-id="carryover">
  <p class="kicker">Carryover from previous seasons</p>
  <h2 class="h2" style="margin-bottom: 28px;">Continuity check — colors that persist.</h2>
  <table class="carryover-table">
    <thead>
      <tr><th>Color</th><th>TCX</th><th>From</th><th>Sell-through cue</th><th>Status</th></tr>
    </thead>
    <tbody>
      <tr><td><span class="row-chip" style="background:[HEX];"></span>[name]</td><td>[TCX]</td><td>26SS / 26FW</td><td>[%, rank, or note]</td><td>[carryover · main]</td></tr>
      <tr><td><span class="row-chip" style="background:[HEX];"></span>[name]</td><td>[TCX]</td><td>26FW</td><td>[note]</td><td>[carryover · main]</td></tr>
      <tr><td><span class="row-chip" style="background:[HEX];"></span>[name]</td><td>[TCX]</td><td>26SS</td><td>[note]</td><td>[carryover · main]</td></tr>
    </tbody>
  </table>
</section>
```

## 12. Open Questions / Next Decisions

```html
<section class="section open-questions" data-od-id="next-decisions">
  <div>
    <p class="kicker">Open / next</p>
    <h2 class="h2">What still needs to lock, and by when.</h2>
  </div>
  <ol class="next-list">
    <li><span class="next-when">[Date]</span><span class="next-what">[Decision — e.g. confirm dry-pop accent saturation with MD]</span></li>
    <li><span class="next-when">[Date]</span><span class="next-what">[Decision — e.g. supplier lab-dip Strike 1 due]</span></li>
    <li><span class="next-when">[Date]</span><span class="next-what">[Decision — e.g. lock Coloro codes for WGSN trend trace-back]</span></li>
    <li><span class="next-when">[Date]</span><span class="next-what">[Decision]</span></li>
  </ol>
</section>
```
