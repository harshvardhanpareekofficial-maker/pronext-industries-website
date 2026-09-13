import Link from "next/link";
import { IconArrow } from "@/components/Icons";
import { processes, products, reviews } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <svg className="bayline" viewBox="0 0 1200 640" aria-hidden="true">
          <path d="M80 72 V568 M280 72 V568 M480 72 V568 M680 72 V568 M880 72 V568 M1080 72 V568 M80 168 H1080 M80 264 H1080 M80 360 H1080 M80 456 H1080 M80 552 H1080 M80 168 L280 72 M880 72 L1080 168 M80 552 L280 456" />
        </svg>
        <div className="shell hero-grid">
          <div>
            <h1>Scaffolding and formwork, made in Chakan.</h1>
            <p className="lede">
              ProNext Industries produces and markets scaffolding and formwork components from Kharabwadi, Tal-Khed.
              Manufacturing since {site.founded}. One works: drawing to coat to crate.
            </p>
            <div className="hero-actions">
              <Link className="btn" href="/contact/">
                Request a quote <IconArrow />
              </Link>
              <a className="btn btn-ghost" href={site.phones[0].href}>
                Call {site.phones[0].display}
              </a>
            </div>
          </div>
          <div className="process-register" aria-label="Plant process">
            {processes.map((step) => (
              <Link key={step.code} href="/manufacturing/">
                <span className="data">{step.code}</span>
                <span>{step.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="shell trust-row">
          <p>Manufacturing scaffolding and formwork components since {site.founded}.</p>
          <p>{site.qualityClaim} — the sentence the plant already publishes.</p>
          <p>Lots packed for {site.exports.join(", ")}.</p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <h2>Who writes the RFQ</h2>
            <p className="lede">
              Procurement, site engineers, and export desks — people who buy steel and plywood that has to assemble
              without a morning of dressing.
            </p>
          </div>
          <div className="legend">
            <div>
              <h3>Procurement</h3>
              <p>
                Quantity, finish, packing list, and a date. The plant answers in office hours with a number that
                belongs to a person, not a ticket queue.
              </p>
            </div>
            <div>
              <h3>Site &amp; formwork</h3>
              <p>
                Dimensional fit, plywood edges, and whether a revision can move before the crane slot. Process evidence
                lives on the Plant page, not in a brochure paragraph.
              </p>
            </div>
            <div>
              <h3>Export desks</h3>
              <p>
                Named destinations already on record: {site.exports.join(", ")}. Packing follows the order, not the
                factory gate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="section-head">
            <h2>What leaves the bay</h2>
          </div>
          <div className="split">
            {products.map((product) => (
              <article key={product.slug}>
                <h3>{product.title}</h3>
                <p>{product.lead}</p>
                <ul className="point-list">
                  {product.points.slice(0, 3).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link className="btn btn-line" href="/products/">
                  Product notes <IconArrow />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--field)" }}>
        <div className="shell">
          <div className="section-head">
            <h2>What buyers repeat</h2>
            <p className="lede">
              Persona statements written for this site — India and the named export regions. Not verified reviews from
              named companies. Topics that decide a reorder: coating, fit, packing, lead time, a phone that answers.
            </p>
          </div>
          <div className="quote-river">
            {reviews.slice(0, 6).map((review) => (
              <figure key={review.id}>
                <blockquote>
                  <p>“{review.quote}”</p>
                </blockquote>
                <figcaption>
                  {review.persona} · {review.context} · {review.topic}
                </figcaption>
              </figure>
            ))}
          </div>
          <Link className="btn btn-line" href="/about/#reviews">
            All buyer notes <IconArrow />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="shell contact-grid">
          <div>
            <h2>Send the drawing.</h2>
            <p className="lede">
              Name, company, email, phone, need. Or call {site.phones[0].display} / {site.phones[1].display} during{" "}
              {site.hoursShort}.
            </p>
            <p>
              <Link href="/contact/">Open the quote sheet</Link> · <Link href="/faq/">FAQ</Link> ·{" "}
              <Link href="/quality/">Quality &amp; delivery</Link>
            </p>
          </div>
          <p className="data">
            {site.addressSingle}
            <br />
            <br />
            {site.email}
          </p>
        </div>
      </section>
    </>
  );
}
