import Image from "next/image";
import Link from "next/link";
import { Frame } from "@/components/Frame";
import { listings } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <Image
            className="hero-slide"
            src="/images/hero.jpg"
            alt="A building elevation wrapped in scaffolding — atmospheric, not a photograph of the Chakan works."
            fill
            priority
            sizes="100vw"
          />
          <Image
            className="hero-slide hero-slide-b"
            src="/images/architecture.jpg"
            alt="A quiet modernist elevation — atmospheric, not a finished project claimed by ProNext."
            fill
            sizes="100vw"
          />
        </div>
        <div className="hero-copy">
          <p className="pill">Since {site.founded} · Chakan</p>
          <h1>
            Scaffolding and
            <br />
            formwork, from Chakan.
          </h1>
          <p className="lede">
            ProNext Industries manufactures components from one works in Kharabwadi, Tal-Khed. Drawing to coat to crate.
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
          <h2>One works. The drawing, the finish, the date.</h2>
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
            <h2>Two families</h2>
            <p className="lede">
              What leaves the bay — and the plant path behind it. We make the parts on your drawing.
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
    </>
  );
}
