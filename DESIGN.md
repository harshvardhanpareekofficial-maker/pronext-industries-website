# Design

<!-- impeccable:design-schema 1 -->

## World

Webild luxury-real-estate grammar, translated for a Chakan works. Photography and ivory whitespace do the work — full-bleed cinematic hero, pill chrome, rounded listing plates, a glass enquiry panel — not a shop-drawing and not a villa brochure. Same UI system as the reference template; scaffolding and formwork copy instead of residences.

Charcoal and cream pills carry actions. Amber is a quiet accent (focus, a hover warmth), never a band.

## Surfaces

- `--ivory` `#f6f3ee` — page ground
- `--cream` `#f3eee6` — pill fill, raised field
- `--charcoal` `#1a1815` — type and dark pills
- `--ink` `#2c2823` — body
- `--muted` `#5e574e` — secondary (≥4.5:1 on ivory)
- `--espresso` `#2a211c` — hero/contact overlays
- `--amber` `#b08a4a` — focus and scarce accent
- `--glass` `color-mix(in srgb, #2a211c 62%, transparent)` — contact panel

No blueprint steel, no oxide primer fields, no purple.

## Type

- **Plus Jakarta Sans** (300/400/500/600) — contemporary geometric, slightly rounded. Headlines 300–400 with generous leading. Body 400, compact. One family.

No Inter, Archivo-as-display-stretch, Cormorant, Fraunces, Big Shoulders, condensed industrial, or mono title-block lettering.

## Form

Large corner radius on photographs (`1.75rem`). Actions are full pills (`999px`). Inputs on the contact stage are pills; the message field is a soft rounded rectangle. No nested cards. No kickers as a system; a single small pill may label a section the way the reference labels “Properties.” No ornament bars.

## Motion

Optional hero image crossfade only (`16s`, ease-out). Everything else is still. `prefers-reduced-motion: reduce` stops the crossfade.

## Chrome

Selection: cream on charcoal. Focus: 2px amber outline, 3px offset. Scrollbars: espresso track, muted thumb. Caret: amber.

## Layout grammar

Minimal header: wordmark left, Quote pill + hamburger right; links live in the drawer. Home first viewport is a full-bleed photograph with a soft espresso gradient on the left, a two-line light headline, a short sentence, and paired charcoal + cream pills. Then: a centered about band with one wide rounded plate; a centered “products” intro and a two-column listing grid; a contact stage (full-bleed dark plate + glass form); an ivory multi-column footer.

## Anti-references

Incumbent Pronext WordPress brochure. Shop-drawing title block. Kailash proof-chip / step-card industrial-energy chrome. Purple SaaS. Inter. Icon-card triads. Copied villa copy or house-for-sale photography presented as the works.
