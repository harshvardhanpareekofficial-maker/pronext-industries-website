import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { mission, reviews, vision } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the Chakan works",
  description:
    "Pro Next Industries Private Limited, Chakan. Founded manufacturing since 2014. Managing Director Sumitkumar Bagrecha, M.Sc. Global Production Engineering, TU Berlin.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="The works"
        lede="A Chakan plant that makes scaffolding and formwork components — and answers the phone when a drawing changes."
        image={{
          src: "/images/works.jpg",
          alt: "A pale architectural mass against open sky — atmospheric, not a photograph of the Chakan works.",
        }}
      />
      <section className="section">
        <div className="shell product-detail">
          <div>
            <h2>Pro Next Industries Private Limited</h2>
            <p>
              Pronext is the market name for a works that specialises in the production and marketing of scaffolding and
              formwork. Component manufacturing experience since {site.founded}. Visit the office and production
              facility in Kharabwadi, Tal-Khed, Chakan.
            </p>
            <p>{site.addressSingle}</p>
          </div>
          <div>
            <h2>{site.founder.name}</h2>
            <p>
              {site.founder.role}. {site.founder.education}. Automotive-industry experience and more than fifteen years
              around machining solutions — including scaffolding and formwork-related components.
            </p>
            <p>{vision}</p>
            <p>{mission}</p>
          </div>
        </div>
      </section>
      <section className="section" id="reviews">
        <div className="shell">
          <div className="band-intro">
            <h2>Buyer notes</h2>
            <p className="lede">
              Sixteen professional B2B-style statements. Personas only — not endorsements from real named companies.
            </p>
          </div>
          <div className="quote-journal">
            {reviews.map((review) => (
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
          <p>
            <Link href="/contact/">If the note sounds like your job, send the drawing.</Link>
          </p>
        </div>
      </section>
    </>
  );
}
