# Design

<!-- impeccable:design-schema 1 -->

## World

Editorial luxury, translated for a Chakan works. The site is a quiet monograph — ivory ground, magazine measure, hairline rules, photography treated as rounded plates — not a shop-drawing title block and not a real-estate listing. Calm authority for procurement: Webild-luxury silence and space, with industrial-energy craft borrowed as pattern only (section rhythm, labeled proof, process rules, a dark invitation).

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

Neutrals are tinted toward warm dust and paper. No pure cool gray, no purple, no sky-blue gradient, no oxide primer fields, no energy-company green.

## Type

- Display: **Fraunces** (variable, opsz + wght; italic for asides and pull quotes) — soft old-style serif at high optical size. Weight 500. Tracking no tighter than -0.02em. Max ~6.6rem.
- Body / UI: **Source Sans 3** (variable wght 200–900, italic) — humanist sans with a real text cut. `font-optical-sizing: auto`. Measure 70ch (65–75ch).

Self-hosted woff2, `font-display: swap`. No Inter, Arial, Geist, Space Grotesk, Libre Franklin, Barlow, Big Shoulders, condensed industrial display, or system UI as the brand voice.

## Form

Hairlines, not frames. Photography is rounded (`1.6rem`). Primary actions are pills. Elevation is a 1px warm rule, not a card shadow. No nested cards. No icon-heading-text grids as structure. Headings carry the section; a short terracotta dash may precede them (not a text kicker).

Icons are 1.5px-stroke SVG in one family. No emoji. The wordmark is type only.

Photographs are atmospheric stills — never presented as the Chakan works, never as client proof.

Craft cues adapted from a premium industrial-energy monograph (not its brand): a four-cell proof register, four-movement process with a growing rule, numbered plant index, FAQ plus-mark, faint year watermark, dark closing invitation. Logo, name, and assets from that reference are not used.

## Motion

Hero: staggered rise on type, image fade + ken-burns-lite. In-view reveals vary — rise, fade, or enter — so cards do not share one entrance. Process rules grow on the left. CTA hover lifts 2px and eases the arrow. Ease: `cubic-bezier(0.16, 1, 0.3, 1)`. `prefers-reduced-motion: reduce` cancels transform, delay, and loop. No bounce, elastic, or stroke-dash theatre.

## Chrome

Selection: linen on charcoal. Focus: 2px terracotta outline, 3px offset. Scrollbars: night track, muted thumb. Caret: terracotta. Underline offset 0.2em.

## Layout grammar

Minimal sticky nav on ivory. First viewport: typography beside a rounded plate, then a labeled proof strip. Later passages alternate density: asymmetric intro, two product collections, four movements plus the plant index, a quote journal, a night invitation. Phone and quote stay in the header; a pill call bar appears on small screens.

## Anti-references

Incumbent Pronext WordPress brochure. The previous shop-drawing / title-block world (Big Shoulders, oxide primer bands). Purple-to-blue SaaS. Glass. Gradient type. Inter. Icon-card triads. Hero-metric templates. Invented ISO badges and client-logo walls. Copied third-party marks. Suburban house listings that would recast the plant as a realtor.
