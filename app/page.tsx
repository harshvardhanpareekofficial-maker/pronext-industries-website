import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Frame } from "@/components/Frame";
import { IconArrow } from "@/components/Icons";
import { Ornament } from "@/components/Ornament";
import { Reveal } from "@/components/Reveal";
import { movements, processes, products, proofs, reviews } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = reviews[0];

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <Ornament />
          <h1 className="hero-in" style={{ "--d": "0.1s" } as CSSProperties}>
            Scaffolding and formwork,
            <br />
            made in Chakan.
          </h1>
          <p className="lede hero-in" style={{ "--d": "0.24s" } as CSSProperties}>
            ProNext Industries produces and markets scaffolding and formwork components from Kharabwadi, Tal-Khed.
            Manufacturing since {site.founded}. One works: drawing to coat to crate.
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
            The sequence
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
            <Reveal key={item.label} variant="fade" delay={index * 70} className="proof-item">
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
            <h2>How a lot moves</h2>
            <p className="lede">
              Four movements, then the full plant sequence. The numbers are the order work actually travels.
            </p>
          </Reveal>
          <div className="steps">
            {movements.map((step, i) => (
              <Reveal key={step.name} variant="line" delay={i * 90} className="step">
                <p className="label">{String(i + 1).padStart(2, "0")}</p>
                <h3>{step.name}</h3>
                <p>{step.detail}</p>
              </Reveal>
            ))}
          </div>
          <div className="index">
            {processes.map((step, i) => (
              <Reveal key={step.code} variant="line" delay={Math.min(i * 40, 200)}>
                <Link className="index-row" href="/manufacturing/">
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 style={{ fontSize: "1.45rem", margin: 0 }}>{step.name}</h3>
                  <p>{step.detail}</p>
                </Link>
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

      <section className="invite">
        <div className="shell invite-grid">
          <span className="invite-glyph" aria-hidden="true">
            {site.founded}
          </span>
          <Reveal variant="enter">
            <Ornament />
            <h2>Send the drawing.</h2>
            <p className="lede">
              Name, company, email, phone, need. Or call {site.phones[0].display} / {site.phones[1].display} during{" "}
              {site.hoursShort}.
            </p>
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
            <p className="quiet">
              {site.addressSingle}
              <br />
              <br />
              {site.email}
            </p>
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
