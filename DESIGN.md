# Design

<!-- impeccable:design-schema 1 -->

## World

Shop-drawing title block. The site is a measured sheet issued by a Chakan works — thick and thin rules, a data register, condensed industrial lettering — not a SaaS landing page and not a timid SME template. Oxide primer is the committed color: it owns whole bands (header underbar, hero close, RFQ slab), not scattered chips. Ground is cast concrete and drawing-sheet gray-green, forced by fluorescent plant light on dusty slab, not a cream editorial desk.

## Surfaces

- `--sheet` `#e4e5de` — drawing paper
- `--concrete` `#b7bbb3` — wet-cast slab, cool dust
- `--ink` `#131610` — olive-black
- `--steel` `#1c211d` — dark bay
- `--primer` `#a32c12` — oxide red, committed field color
- `--zinc` `#8e9588` — muted steel-green
- `--mark` `#c4a12a` — crane yellow for selection, focus, and the one motion stroke
- `--field` `#f1f2ec` — raised sheet inside the frame

Neutrals are tinted toward olive-dust. No pure gray, no purple, no sky-blue gradient.

## Type

- Display: **Big Shoulders Display** (800/900) — highway/industrial condensed. Tracking no tighter than -0.035em. Max 5.6rem.
- Body / UI: **Barlow** (400/500/600) — workhorse with a construction-catalog stance. Measure 65–75ch.
- Data: **Azeret Mono** (500) — phones, hours, drawing numbers, process codes only.

No Inter, Arial, Geist, Space Grotesk, or system UI as the brand voice.

## Form

Orthogonal. Square corners on editorial slabs and title blocks. 2px radius only on form controls and the mobile call chip. Elevation is a 1px ink/steel rule, not a soft card shadow. No nested cards. No icon-heading-text grids as structure. No kickers or eyebrows; the heading carries the section.

Icons are 1.5px-stroke SVG in one family (arrows, phone, mail, plant marks). No emoji.

## Motion

One authored moment: the hero bayline (SVG) draws once on load, `stroke-dashoffset`, `cubic-bezier(0.16, 1, 0.3, 1)`, ~1.1s. Content is visible before the stroke finishes. `prefers-reduced-motion: reduce` cancels it. No bounce, elastic, or per-section fade-up.

## Chrome

Selection: mark on ink. Focus: 2px mark outline, 3px offset. Scrollbars: steel track, primer thumb. Caret: primer. Underline offset 0.18em.

## Layout grammar

Every route sits in a ruled sheet. The first viewport is a dark steel bay with a huge condensed offer and a process register — not a metric row. Subsequent passages alternate density: split product slabs, a sequential plant line (numbers earned because order is the information), a quote river, a closing RFQ title block. Phone and quote stay in the header; a sticky call bar appears on small screens.

## Anti-references

Incumbent Pronext WordPress brochure. Purple-to-blue SaaS. Glass. Gradient type. Inter. Icon-card triads. Hero-metric templates. Invented ISO badges and client-logo walls.
