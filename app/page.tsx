import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Frame } from "@/components/Frame";
import { IconArrow } from "@/components/Icons";
import { Ornament } from "@/components/Ornament";
import { Reveal } from "@/components/Reveal";
import { faqs, movements, products, proofs, reviews, stages } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = reviews[0];

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <Ornament />
          <h1 className="hero-in" style={{ "--d": "0.1s" } as CSSProperties}>
            Parts from Chakan.
          </h1>
          <p className="lede hero-in" style={{ "--d": "0.24s" } as CSSProperties}>
            ProNext Industries manufactures scaffolding and formwork components from one works in Kharabwadi, Tal-Khed.
            Since {site.founded}: drawing to coat to crate.
          </p>
          <div className="hero-actions hero-in" style={{ "--d": "0.38s" } as CSSProperties}>
            <Link className="btn" href="/contact/">
              Request a quote <IconArrow />
            </Link>
            <a className="btn btn-ghost" href={site.phones[0].href}>
              Call {site.phones[0].display}
            </a>
          </div>
          <p className="scroll-cue hero-in" style={{ "--d": "0.54s" } as CSSProperties}>
            How a lot moves
          </p>
        </div>
        <div className="hero-media">
          <span className="hero-glyph" aria-hidden="true">
            {site.founded}
          </span>
          <Image
            className="ken"
            src="/images/hero.jpg"
            alt="A building elevation wrapped in scaffolding — atmospheric, not a photograph of the Chakan works."
            fill
            priority
            sizes="(max-width: 960px) 100vw, 48vw"
          />
        </div>
      </section>

      <section className="proof" aria-label="Plant facts">
        <div className="shell proof-grid">
          {proofs.map((item, index) => (
            <Reveal key={item.label} variant="fade" delay={index * 80} className="proof-item">
              <p className="label">{item.label}</p>
              <strong>{item.value}</strong>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="intro">
        <div className="shell">
          <Reveal variant="enter" className="intro-grid">
            <p className="intro-aside">Since {site.founded}, from one works in Chakan.</p>
            <div>
              <p className="lede">
                Procurement, site engineers, and export desks buy steel and plywood that has to assemble without a
                morning of dressing. The plant answers in office hours with a number that belongs to a person.
              </p>
              <p>
                {site.qualityClaim} — the sentence the plant already publishes. Lots packed for the destinations already
                named. No invented offices, no invented certificates.
              </p>
              <ul className="destinations">
                {site.exports.map((place) => (
                  <li key={place}>{place}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="rule" />

      <section className="section">
        <div className="shell">
          <Reveal variant="fade" className="section-head">
            <Ornament />
            <h2>Two families</h2>
            <p className="lede">
              What leaves the bay. We do not sell another house’s named system. We make the parts on your drawing.
            </p>
          </Reveal>
          {products.map((product, index) => (
            <Reveal key={product.slug} variant={index === 0 ? "rise" : "enter"}>
              <article className={index === 1 ? "collection collection-alt" : "collection"}>
                <Frame ken={index === 0} className="collection-media" src={product.image} alt={product.imageAlt} />
                <div className="collection-copy">
                  <h3>{product.title}</h3>
                  <p>{product.lead}</p>
                  <ul className="point-list">
                    {product.points.slice(0, 3).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <Link className="text-link" href={`/products/#${product.slug}`}>
                    View collection <IconArrow />
                  </Link>
                </div>
              </article>
              {index === 0 ? <hr className="rule" /> : null}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section band">
        <div className="shell">
          <Reveal variant="fade" className="section-head">
            <Ornament />
            <h2>How a lot moves, in four steps</h2>
            <p className="lede">
              A shorter reading of the plant. The full sequence — laser through CMM — sits on the plant page.
            </p>
          </Reveal>
          <div className="steps">
            {movements.map((step, i) => (
              <Reveal key={step.name} variant="step" delay={i * 110} className="step">
                <p className="label">{String(i + 1).padStart(2, "0")}</p>
                <h3>{step.name}</h3>
                <p>{step.detail}</p>
              </Reveal>
            ))}
          </div>
          <div className="roadmap">
            {stages.map((row, i) => (
              <Reveal key={row.stage} variant="enter" delay={i * 70} className="roadmap-row">
                <p className="label">{row.stage}</p>
                <div>
                  <h3>{row.title}</h3>
                  <p>{row.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal variant="fade">
            <p style={{ marginTop: "1.8rem" }}>
              <Link className="text-link" href="/manufacturing/">
                The plant, in order <IconArrow />
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal variant="fade" className="section-head">
            <Ornament />
            <h2>What buyers repeat</h2>
            <p className="lede">
              Persona statements written for this site — India and the named export regions. Not verified reviews from
              named companies. Topics that decide a reorder: coating, fit, packing, lead time, a phone that answers.
            </p>
          </Reveal>
          <div className="quote-journal">
            <Reveal variant="rise" className="quote-feature">
              <figure>
                <blockquote>
                  <p>“{featured.quote}”</p>
                </blockquote>
                <figcaption>
                  {featured.persona} · {featured.context} · {featured.topic}
                </figcaption>
              </figure>
            </Reveal>
            {reviews.slice(1, 5).map((review, index) => (
              <Reveal key={review.id} variant="fade" delay={40 + index * 60}>
                <figure>
                  <blockquote>
                    <p>“{review.quote}”</p>
                  </blockquote>
                  <figcaption>
                    {review.persona} · {review.context} · {review.topic}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal variant="fade">
            <Link className="text-link" href="/about/#reviews">
              All buyer notes <IconArrow />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section faq-band">
        <div className="shell">
          <Reveal variant="fade" className="section-head">
            <Ornament />
            <h2>In plain terms</h2>
            <p className="lede">The questions buyers actually ask, answered from published plant facts.</p>
          </Reveal>
          <div className="faq">
            {faqs.slice(0, 6).map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <p style={{ marginTop: "1.8rem" }}>
            <Link className="text-link" href="/faq/">
              All questions <IconArrow />
            </Link>
          </p>
        </div>
      </section>

      <section className="invite">
        <div className="shell invite-grid">
          <span className="invite-glyph" aria-hidden="true">
            {site.founded}
          </span>
          <Reveal variant="enter">
            <Ornament />
            <h2>Send the drawing.</h2>
            <p className="lede">
              Name, company, email, phone, need. One message reaches the works during {site.hoursShort}.
            </p>
            <div className="invite-contacts">
              <a className="invite-contact" href={site.phones[0].href}>
                {site.phones[0].display}
              </a>
              <a className="invite-contact" href={site.phones[1].href}>
                {site.phones[1].display}
              </a>
              <a className="invite-contact" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
            <div className="hero-actions">
              <Link className="btn" href="/contact/">
                Open the quote form <IconArrow />
              </Link>
              <a className="btn btn-ghost" href={site.phones[0].href}>
                Call the works
              </a>
            </div>
          </Reveal>
          <Reveal variant="fade" delay={90}>
            <p className="quiet">{site.addressSingle}</p>
            <p className="invite-links">
              <Link href="/faq/">FAQ</Link>
              {" · "}
              <Link href="/quality/">Quality &amp; delivery</Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
