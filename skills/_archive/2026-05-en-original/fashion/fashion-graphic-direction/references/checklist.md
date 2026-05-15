# Graphic Direction Checklist

Run before emitting `<artifact>`. P0 are hard gates.

## P0 — Hard gates

- [ ] Header carries season, brand, status (v1 / v2 / locked), and lock
  date.
- [ ] Direction thesis paragraph names the connection back to the
  concept board territory.
- [ ] Theme block carries 3–8 themes — not 0, not 10+.
- [ ] Each theme card carries: theme name + 1-line thesis + ≥1
  application-surface tag + 4–6 reference tiles + carryover note.
- [ ] Every reference tile's `<img>` resolves to a file the agent wrote
  in `images/`. No orphan references.
- [ ] If any image generation failed, the matching `<figure>` falls
  back to the styled placeholder block.
- [ ] Theme × surface matrix exists and lists every chosen theme.
- [ ] Anti-direction lists ≥ 3 explicit "no" entries.
- [ ] No external image URLs, no base64, no absolute paths.
- [ ] No real-world third-party brand logos / brand text are reproduced
  in the imagegen output (verify the prompt's `Constraints:` line was
  honored).

## P1 — Quality bars

- [ ] Each theme uses a name that is brand-internal and concrete — not
  "Modern Cool" or "Minimal Chic".
- [ ] Application-surface tags use the canonical surface names (tee
  print, sweat print, embroidery, all-over pattern, sticker, point
  label, woven tag, hardware engraving). No invented surface names.
- [ ] No more than 2 themes carry the same dominant color cluster — if
  three themes lean Pop Pink, the season is one-note.
- [ ] Carryover notes for "carried from [season]" use a real prior
  season code; do not write "carried from last season".
- [ ] If the Symbol & Wordmark block is present, it carries all three
  sub-clusters (symbol / wordmark / lockup).

## P2 — Polish

- [ ] Anti-direction items are concrete ("no AI-slop chrome glitter"),
  not generic ("no bad design").
- [ ] Open / next decisions list has owner + date for every entry, or
  the section is omitted entirely.
- [ ] Theme cluster tiles share lighting / framing within a theme so
  they read as one set.
- [ ] No two theme names are synonyms (e.g. "Vintage cartoon" and
  "Retro cartoon" — pick one).
