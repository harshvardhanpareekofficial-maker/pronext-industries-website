import type { Metadata } from "next";
import Link from "next/link";
import { Ornament } from "@/components/Ornament";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
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
        <div className="shell split-prose">
          <Reveal variant="enter">
            <Ornament />
            <h2>Pro Next Industries Private Limited</h2>
            <p>
              Pronext is the market name for a works that specialises in the production and marketing of scaffolding and
              formwork. Component manufacturing experience since {site.founded}. The invitation on the incumbent site
              still stands: visit the office and production facility in Kharabwadi, Tal-Khed, Chakan.
            </p>
            <p>{site.addressSingle}</p>
          </Reveal>
          <Reveal variant="fade" delay={80}>
            <Ornament />
            <h2>{site.founder.name}</h2>
            <p>
              {site.founder.role}. {site.founder.education}. The about page also notes automotive-industry experience and
              more than fifteen years around machining solutions — including scaffolding and formwork-related
              components.
            </p>
            <h2 style={{ marginTop: "2.4rem" }}>Intent</h2>
            <p>{vision}</p>
            <p>{mission}</p>
          </Reveal>
        </div>
      </section>
      <section className="section band" id="reviews">
        <div className="shell">
          <Reveal variant="fade">
            <Ornament />
            <h2>Buyer notes</h2>
            <p className="lede">
              Sixteen professional B2B-style statements. Personas only — procurement, contractors, engineers — in India
              and the export regions ProNext already names. They are not endorsements from real named companies.
            </p>
          </Reveal>
          <div className="quote-journal">
            {reviews.map((review, index) => (
              <Reveal key={review.id} variant={index % 3 === 0 ? "rise" : "fade"} delay={(index % 4) * 50}>
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
          <p>
            <Link href="/contact/">If the note sounds like your job, send the drawing.</Link>
          </p>
        </div>
      </section>
    </>
  );
}
