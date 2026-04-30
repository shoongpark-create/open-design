# Fashion Color Story Trend Research

This is the *color discipline filter* for season palette lock documents.
Different from the concept board's research (which is about mood territory),
the color story's research is about **the practical realities of locking a
palette for a Korean young-casual brand**: what trend data exists, how to
translate it into Seoul-coded colors, what Pantone systems to use, and how
dyeing tolerance actually works in the field.

A color story is downstream of mood and upstream of production. Its
research must serve both directions.

## How to use this file

1. Use the **27SS Trend Inputs** section to anchor the palette in actual
   season data — WGSN/Coloro key colors are the global default.
2. Use the **K-DTC Color Reality** section to translate global trend signals
   into Seoul-coded saturations.
3. Use the **Pantone Systems** section to pick TCX vs. TPG correctly and
   write supplier-grade documentation.
4. Use the **Dyeing & QC Reality** section to set realistic tolerance and
   lot-approval expectations.

## 27SS Trend Inputs (factual season data)

### WGSN / Coloro 27 Key Colors

[WGSN/Coloro press release][wgsn-27]:

| Color | Coloro code | Tone direction |
| --- | --- | --- |
| **Luminous Blue** | 125-28-38 | Mid-blue, digital optimism. Color of the Year 2027. |
| **Energy Orange** | (Coloro varies by year) | High-saturation activating orange. |
| **Pop Pink** | (Coloro varies) | Clean cool pink. |
| **Meadowland Green** | (Coloro varies) | Yellow-base mid-green. |
| **Clay** | (Coloro varies) | Warm earthy neutral. |

These are the global *defaults*. K-young-casual rarely uses them at full
saturation. See K-DTC Color Reality below.

### Spring/Summer 26 Runway Color Anchors

For 27SS you are translating from 25SS/26SS continuity, not jumping
ahead. Useful runway color anchors carrying through:

- **Soft, sun-faded brights** — terracotta, washed orange, dusty mango.
- **Cold-pastels paired with deep navy / charcoal** — icy blue, powder
  cream alongside saturated dark anchor.
- **One-color total looks** — head-to-toe single color story, the inverse
  of mixed-palette trend.
- **Monochrome neutral layering** — bleached sand, pristine, oat, cream
  layered together, no contrast color.

These are anchors, not commands. A color story can deliberately reject
runway directions with a clear thesis.

## K-DTC Color Reality

Korean young-casual brands rarely run global key colors at the WGSN/Coloro
saturation. The pattern is **one step dustier / muted** for primary
season colors, with the saturated version reserved for a small dry-pop
accent.

| Global key | Typical K-DTC translation |
| --- | --- |
| Luminous Blue (125-28-38) | dusty mid-blue, ~16-4109 TCX *Stone Blue* tone |
| Energy Orange | weathered terracotta, ~17-1340 TCX *Tawny Orange* tone |
| Pop Pink | powder blush, ~14-1907 TCX *Cradle Pink* tone |
| Meadowland Green | sage, ~16-0220 TCX *Dried Herb* tone |
| Clay | warm taupe, ~16-1212 TCX *Almond Buff* tone |

Brand-safe Korean young-casual carryover colors that almost always anchor
the main tier:

- White / Off-white — cotton ivory, bleached sand, pristine
- Black — true black or soft black (dyed cotton has slight warmth)
- Navy — brand main for many K-DTC brands
- Charcoal / dark grey
- Oat / camel
- Light blue (denim companion)

These compose the **main tier**. Season colors are added on top. Every
season's color story **must include the brand main carryover** unless the
brand has explicitly retired it.

## Channel Color Behavior (Korean DTC)

Different channels render colors differently. The color story should note
which channel a tone risks washing out on.

| Channel | Behavior | Risk |
| --- | --- | --- |
| **Musinsa app thumbnails** | High contrast / saturated wins | Pastels, dusty mid-tones lose impact |
| **29CM editorial** | Muted, paper-feel rendering | Saturated neon clashes with editorial layout |
| **W컨셉 grid** | Curated neutral leaning | Loud accents need editorial framing |
| **Own DTC (D2C)** | Brand-controlled, lighting flexible | Best place for nuanced mid-tones |
| **Instagram feed** | Saturated cool tones outperform | Warm tones look dated; cool blues / pinks pop |

For 27SS, the practical decision: dusty mid-tones for the season tier are
safer for editorial channels but risk Musinsa thumbnail flatness. Solution
is the dry-pop accent — one Musinsa-friendly saturated color per palette
to anchor thumbnail click-through.

## Pantone Systems (working knowledge)

### TCX (Textile Cotton Extended)

**The standard for dyed fabric.** Each TCX swatch is a 100% cotton chip
dyed to spec. There are ~2,625 colors in the TCX system (Pantone Fashion,
Home + Interiors). Every color story for fabric production should cite
TCX codes.

- Format: `19-3911 TCX · Iron`
- Cost: ~$10–15 per chip (loose), ~$1,000+ for the full FHI book
- Use case: dyeing-supplier briefs, lab-dip approval, lot acceptance

### TPG (Textile Paper Green)

The paper version of TCX, printed on coated paper instead of dyed cotton.

- Same 7-digit codes as TCX (`19-3911 TPG · Iron`)
- Cost: ~40–60% cheaper than TCX
- TPG runs about **15% lighter** than TCX on the same code due to substrate
  difference ([Adstronaut][adstronaut], [Trimsbest][trimsbest])
- Use case: printed lookbooks, paper presentations, designer-in-room mood
  boards. **Never** for fabric matching.

### When to use which

- **Fabric brief / dyeing supplier / lab-dip** → TCX always.
- **Printed paper deliverables** → TPG is acceptable and cheaper.
- **Digital screen reference** → HEX is the working format. TCX/TPG are
  reference only on screen — both shift on different monitors.

### Coloro

WGSN's color system, 7-digit format `BBB-DD-CC` (B=brightness, D=depth,
C=chroma). Designed to be color-trend-research-aligned. Not a fabric
standard — Coloro codes need translation to TCX for production.

When the brand uses WGSN trend data, recording Coloro codes alongside TCX
makes future trend-back-references easier.

## Dyeing & QC Reality (for K-DTC + Korean factories)

### Tolerance — ΔE

ΔE (delta E) measures color difference. The dyeing supplier needs an
explicit tolerance:

| ΔE range | Industry interpretation |
| --- | --- |
| ΔE ≤ 1.0 | Excellent — only critical brand-main colors require this |
| ΔE ≤ 1.5 | Very good — typical for season main colors |
| ΔE ≤ 2.0 | Good — acceptable for season / accent |
| ΔE ≤ 3.0 | Visible difference — reject for fashion |

Practical: brand-main carryover colors (navy, ivory) usually require ΔE ≤
1.0; season colors ΔE ≤ 1.5; accent colors ΔE ≤ 2.0 if no other option.

### Lab-dip approval flow

Standard 3-strike lab-dip flow:

1. **Strike 1** — first dye attempt, supplier sends 3 small swatches with
   slight variations (lighter, target, darker).
2. Designer / QC compares vs. master TCX swatch under D65 (daylight) and
   TL84 (store fluorescent) light boxes.
3. Designer approves one strike or requests Strike 2 with directional
   correction.
4. **Strike 2** — narrowed range based on Strike 1 feedback.
5. **Strike 3** — final lab-dip; if approved, supplier proceeds to bulk.
6. **Bulk lot approval** — every bulk-dyed lot must be compared head-to-
   head vs. the approved Strike under both light sources.

A complete strike round takes 5–10 working days. Two-strike approval is
common; three-strike is the safety net before re-tooling.

### What goes wrong

- **Lot drift** — the same TCX code dyed in different lots can drift
  visibly. A color story should note that "lot QC required for every bulk".
- **Supplier substitution** — when a supplier silently changes dye source,
  ΔE jumps. Lock supplier in writing.
- **Substrate variation** — same TCX on cotton vs. linen vs. polyester
  reads differently. The color story's fabric pairings list is what
  prevents brief-to-fabric mismatch.

## Anti-palette logic (why "no" matters)

Color stories that omit anti-palette section produce drift in trim,
embroidery, accessory, and packaging decisions later. Common anti-palette
entries:

- **Channel anti** — colors that wash out on Musinsa thumbnails
- **Recently-used anti** — last season's hero color that customers will
  perceive as "old stock"
- **Brand-clash anti** — colors that conflict with logo / hangtag
- **Print anti** — colors that don't reproduce well in the season's
  primary printing process (digital vs. screen)
- **Dye-cost anti** — colors that exceed dye-cost ceiling for entry tier

Make these explicit. Brief the team once; reference forever.

## Sequencing rule

The strongest color stories sequence the lock:

1. Thesis (linked to concept board)
2. Master grid (everything at a glance)
3. Hierarchy + proportion (the structure)
4. Per-color detail (the codes + pairings + rules)
5. Distribution matrix (the merchandising plan)
6. QC notes (the supplier-facing brief)
7. Anti-palette (what to reject)
8. Carryover (continuity with prior seasons)
9. Open questions (what still needs to be locked)

This order takes the viewer from intent → glance → structure → detail →
plan → tooling → discipline → continuity → next-action, which is how a
color review meeting is structured.

[wgsn-27]: https://www.wgsn.com/en/wgsn/press/press-releases/wgsn-and-coloro-reveal-colour-year-2027-luminous-blue-and-s-s-27-key
[adstronaut]: https://www.adstronaut.net/blog/pantone-color-matching-fashion
[trimsbest]: https://www.trimsbest.com/pantone-tcx-vs-tpg-difference-explained-complete-guide/
