import Link from "next/link";
import { Frame } from "@/components/Frame";
import { RfqForm } from "@/components/RfqForm";
import { listings } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <img
            className="hero-slide"
            src="/images/hero.jpg"
            alt="A building elevation wrapped in scaffolding — atmospheric, not a photograph of the Chakan works."
          />
          <img
            className="hero-slide hero-slide-b"
            src="/images/architecture.jpg"
            alt=""
          />
        </div>
        <div className="hero-copy">
          <p className="pill">Since {site.founded} · Chakan</p>
          <h1>
            Scaffolding and
            <br />
            formwork.
          </h1>
          <p className="lede">
            Exclusive plant-made components from one works in Kharabwadi, Tal-Khed. Drawing to coat to crate.
          </p>
          <div className="hero-actions">
            <Link className="btn" href="/products/">
              View products
            </Link>
            <Link className="btn btn-cream" href="/contact/">
              Request a quote
            </Link>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band-intro">
          <h2>For crews who treat the elevation as a craft.</h2>
          <p className="lede">
            {site.qualityClaim}. Lots packed for {site.exports.join(", ")}. No invented offices. No invented
            certificates.
          </p>
        </div>
        <Frame
          className="wide-plate"
          src="/images/works.jpg"
          alt="A pale architectural mass against open sky — atmospheric, not a photograph of the Chakan works."
        />
      </section>

      <section className="section">
        <div className="shell">
          <div className="band-intro">
            <p className="pill">Products</p>
            <h2>Our collections</h2>
            <p className="lede">
              Scaffolding, formwork, and the plant path behind them — each line from one Chakan works.
            </p>
          </div>
          <div className="listings">
            {listings.map((item) => (
              <Link className="listing" key={item.slug} href={item.href}>
                <Frame className="listing-media" src={item.image} alt={item.imageAlt} />
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-stage">
        <div className="contact-stage-media">
          <img
            src="/images/plant.jpg"
            alt="A quiet industrial hall — atmospheric, not a photograph of the Chakan works."
          />
        </div>
        <div className="contact-panel">
          <h2>Get in touch</h2>
          <p className="lede" style={{ color: "color-mix(in srgb, #f6f3ee 80%, transparent)" }}>
            Five fields. Office {site.hoursShort}.
          </p>
          <RfqForm glass />
          <div className="contact-pills">
            <span>Prefer to talk? Book a plant call.</span>
            <a href={`mailto:${site.email}`}>Email us</a>
          </div>
        </div>
      </section>
    </>
  );
}
