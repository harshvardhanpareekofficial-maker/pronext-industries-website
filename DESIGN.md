# Design

<!-- impeccable:design-schema 1 -->

## World

Editorial luxury, translated for a Chakan works. The site is a quiet monograph — generous bone ground, magazine grids, hairline rules, photography treated as atmosphere — not a shop-drawing title block and not a real-estate listing. Calm authority for procurement: the same restraint a luxury-residence template uses for silence and space, applied to scaffolding and formwork.

Terracotta is the one committed accent. It appears on primary actions only. It does not own bands, bars, or chrome.

## Surfaces

- `--bone` `#f3eee6` — page ground, warm alabaster
- `--alabaster` `#faf6f0` — raised passage
- `--linen` `#e7dfd3` — photograph matte, alternate band
- `--charcoal` `#1b1714` — display ink
- `--ink` `#2c2722` — body
- `--muted` `#5c554c` — secondary type (≥4.5:1 on bone)
- `--terracotta` `#8b3f2f` — CTAs only
- `--night` `#12100e` — footer, cinematic overlay

Neutrals are tinted toward warm dust and paper. No pure cool gray, no purple, no sky-blue gradient, no oxide primer fields, no drawing-sheet green.

## Type

- Display: **Cormorant Garamond** (400/500/600, italic 500) — elegant old-style serif. Weight 500 on headlines. Tracking no tighter than -0.02em. Max ~7rem.
- Body / UI: **Libre Franklin** (400/500/600) — refined humanist sans. Measure 65–75ch.

No Inter, Arial, Geist, Space Grotesk, Barlow, Big Shoulders, condensed industrial display, or system UI as the brand voice. No monospace title-block lettering.

## Form

Hairlines, not frames. Square corners on editorial slabs; 2px radius only on form controls and the mobile call chip. Elevation is a 1px warm rule, not a card shadow. No nested cards. No icon-heading-text grids as structure. No kickers or eyebrows; the heading carries the section.

Icons are 1.5px-stroke SVG in one family. No emoji. The wordmark is type only.

Photographs are atmospheric stills (architecture, scaffold geometry, material) — never presented as the Chakan works, never as client proof.

## Motion

Soft fade and a short upward translate on first reveal, `cubic-bezier(0.16, 1, 0.3, 1)`, ~0.8s. Collection images ease to a slight scale on hover. `prefers-reduced-motion: reduce` cancels transform and delay. No bounce, elastic, stroke-dash drawing, or per-card stagger theatre.

## Chrome

Selection: linen on charcoal. Focus: 2px terracotta outline, 3px offset. Scrollbars: night track, muted thumb. Caret: terracotta. Underline offset 0.2em.

## Layout grammar

Minimal sticky nav on bone. The first viewport is a typography-forward cinematic split: large serif offer, short plant sentence, quote and call — photograph occupying the opposing column. Later passages alternate density: an asymmetric intro, two product collections like curated listings, a numbered plant index, a quote journal, a closing invitation. Phone and quote stay in the header; a sticky call bar appears on small screens.

## Anti-references

Incumbent Pronext WordPress brochure. The previous shop-drawing / title-block world (Big Shoulders, oxide primer bands, process register as a drawing). Purple-to-blue SaaS. Glass. Gradient type. Inter. Icon-card triads. Hero-metric templates. Invented ISO badges and client-logo walls. Suburban house listings and lifestyle interiors that would recast the plant as a realtor.
