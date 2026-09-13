# ProNext Industries website

Marketing site for **Pro Next Industries Private Limited** — scaffolding and formwork production from Chakan, Pune. Next.js App Router, TypeScript, static export.

Product truth, visual system, and category research live in `PRODUCT.md`, `DESIGN.md`, and `RESEARCH.md`.

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

Writes a static site to `out/`. Preview with `npm start` (serves `out/`).

Node 20+.

## RFQ

The quote form sends **name, company, email, phone, need**.

- Default: opens a `mailto:` draft to `sumit.b@pronextindustries.com`.
- Formspree: set `NEXT_PUBLIC_FORMSPREE_ID` (see `.env.example`). The form POSTs to `https://formspree.io/f/<id>`.

Phones stay on every page and as a sticky mobile call control: `+91 94225 13045` / `+91 74477 91684`.

## Render (static site, free plan)

Blueprint: `render.yaml`.

| Field | Value |
| --- | --- |
| Type | Static Site (`runtime: static`) |
| Plan | free |
| Build | `npm ci && npm run build` |
| Publish | `out` |

Optional dashboard env: `NEXT_PUBLIC_FORMSPREE_ID`.

If you create the service in the dashboard instead of Blueprint: New → Static Site, same build and publish path. Static export does not need `next start`.

## Routes

| Path | Content |
| --- | --- |
| `/` | Offer, process register, trust, products, reviews, close |
| `/products/` | Scaffolding and formwork |
| `/manufacturing/` | Plant sequence |
| `/quality/` | Zero PPM, packing, named export regions |
| `/about/` | Works, MD, all buyer notes |
| `/contact/` | RFQ + phones + map |
| `/faq/` | Buyer questions |

Buyer notes on the site are personas, not verified company endorsements. No ISO numbers are invented.
