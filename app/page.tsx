import Image from "next/image";
import Link from "next/link";
import { Frame } from "@/components/Frame";
import { IconArrow } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { processes, products, reviews } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = reviews[0];

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>
            Scaffolding and formwork,
            <br />
            made in Chakan.
          </h1>
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
        <div className="hero-media">
          <Image
            src="/images/hero.jpg"
            alt="A building elevation wrapped in scaffolding — atmospheric, not a photograph of the Chakan works."
            fill
            priority
            sizes="(max-width: 960px) 100vw, 48vw"
          />
        </div>
      </section>

      <section className="intro">
        <div className="shell">
          <Reveal className="intro-grid">
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
          <Reveal className="section-head">
            <h2>Two families</h2>
            <p className="lede">
              What leaves the bay. We do not sell another house’s named system. We make the parts on your drawing.
            </p>
          </Reveal>
          {products.map((product, index) => (
            <Reveal key={product.slug}>
              <article className="collection">
                <Frame className="collection-media" src={product.image} alt={product.imageAlt} />
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

      <hr className="rule" />

      <section className="section">
        <div className="shell">
          <Reveal className="section-head">
            <h2>How a lot moves</h2>
            <p className="lede">
              Capabilities in the order work actually travels. The numbers are the sequence, not decoration.
            </p>
          </Reveal>
          <Reveal>
            <div className="index">
              {processes.map((step, i) => (
                <Link className="index-row" key={step.code} href="/manufacturing/">
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 style={{ fontSize: "1.55rem", margin: 0 }}>{step.name}</h3>
                  <p>{step.detail}</p>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section band">
        <div className="shell">
          <Reveal className="section-head">
            <h2>What buyers repeat</h2>
            <p className="lede">
              Persona statements written for this site — India and the named export regions. Not verified reviews from
              named companies. Topics that decide a reorder: coating, fit, packing, lead time, a phone that answers.
            </p>
          </Reveal>
          <Reveal>
            <div className="quote-journal">
              <figure className="quote-feature">
                <blockquote>
                  <p>“{featured.quote}”</p>
                </blockquote>
                <figcaption>
                  {featured.persona} · {featured.context} · {featured.topic}
                </figcaption>
              </figure>
              {reviews.slice(1, 5).map((review) => (
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
            <Link className="text-link" href="/about/#reviews">
              All buyer notes <IconArrow />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell contact-grid">
          <Reveal>
            <h2>Send the drawing.</h2>
            <p className="lede">
              Name, company, email, phone, need. Or call {site.phones[0].display} / {site.phones[1].display} during{" "}
              {site.hoursShort}.
            </p>
            <p>
              <Link className="text-link" href="/contact/">
                Open the quote form <IconArrow />
              </Link>
            </p>
            <p style={{ marginTop: "1.4rem" }}>
              <Link href="/faq/">FAQ</Link>
              {" · "}
              <Link href="/quality/">Quality &amp; delivery</Link>
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="quiet">
              {site.addressSingle}
              <br />
              <br />
              {site.email}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
