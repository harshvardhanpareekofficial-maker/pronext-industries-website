# Design

<!-- impeccable:design-schema 1 -->

## World

Editorial luxury, translated for a Chakan works. The site is a quiet monograph — ivory ground, magazine measure, hairline rules, photography treated as rounded plates — not a shop-drawing title block and not a real-estate listing. Calm authority for procurement: Webild-luxury silence and space, with industrial-energy craft borrowed as pattern only (punchy offer, labeled proof chips, four-step process, roadmap rows, accordion FAQ, a dark invitation).

Terracotta is the one committed accent. It appears on primary actions, labels, and short ornaments. It does not own bands, bars, or chrome.

## Surfaces

- `--ivory` `#f7f2ea` — page ground
- `--bone` `#f4eee6` — warm paper
- `--alabaster` `#fbf7f1` — raised passage
- `--linen` `#e8dfd2` — photograph matte
- `--charcoal` `#1b1714` — display ink
- `--ink` `#2c2722` — body
- `--muted` `#5c554c` — secondary type (≥4.5:1 on ivory)
- `--terracotta` `#8b3f2f` — CTAs, labels, ornaments
- `--night` `#12100e` — footer and closing invitation

Neutrals are tinted toward warm dust and paper. No energy-company green, no oxide primer fields.

## Type

- Display: **Archivo** (variable wdth + wght, italic) — high-end grotesque. Headlines ~750–800, slight stretch (108–112%), tracking about -0.025em. Short punchy H1.
- Body / UI: **Source Sans 3** (variable wght) — exceptional humanist sans. `font-optical-sizing: auto`. Measure 70ch.
- Labels: **IBM Plex Mono** (500) — proof chips, process numbers, FAQ plus, brand subtitle only.

Self-hosted woff2, `font-display: swap`. No Inter, Arial, Fraunces, Cormorant, Big Shoulders, or system UI as the brand voice. English only — no Devanagari flourish.

## Form

Hairlines, not frames. Photography is rounded (`1.6rem`). Primary actions are pills; ghost secondary sits beside them. No nested cards. No icon-heading-text grids as structure. A three-stroke terracotta marker (thin, not a copied logo) may precede a heading.

Craft cues adapted from a premium industrial-energy monograph (not its brand): four-up proof chips (Since 2014 / Zero PPM / Export markets / Process depth), a four-step process narrative, drawing/bay/desk roadmap rows, accordion FAQ, large phone and email on a dark invitation. Logo, name, and assets from that reference are not used.

## Motion

Hero: staggered rise, image fade + ken-burns-lite. In-view reveals vary (rise, fade, enter). Step cards stagger and grow a left-origin rule. FAQ plus rotates; open panel eases height. CTA hover lifts 2px. Ornament bars grow in sequence. Ease: `cubic-bezier(0.16, 1, 0.3, 1)`. `prefers-reduced-motion: reduce` cancels transform, delay, and loop.

## Chrome

Selection: linen on charcoal. Focus: 2px terracotta outline, 3px offset. Scrollbars: night track, muted thumb. Caret: terracotta.

## Layout grammar

Compact sticky nav on ivory. First viewport: short H1, one thesis, rounded plate, quote + call. Then proof chips, asymmetric intro, two collections, four steps plus a short roadmap, quote journal, FAQ, night invitation with prominent phones and email.

## Anti-references

Incumbent Pronext WordPress brochure. Shop-drawing / title-block world. Purple-to-blue SaaS. Inter. Icon-card triads. Copied third-party marks. Suburban house listings.
