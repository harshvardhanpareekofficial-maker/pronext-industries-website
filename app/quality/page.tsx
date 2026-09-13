import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { IconArrow } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quality and delivery",
  description:
    "Zero PPM commitment, CMM on request, export packing for Germany, Mauritius, Latin America, Philippines, Dubai, and Pakistan.",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        drawing="PN-QA-001"
        title="Quality and delivery"
        lede="The plant already states a zero-PPM commitment. We will not invent ISO numbers to dress that sentence. Write inspection and packing on the order."
      />
      <section className="section">
        <div className="shell">
          <h2>What we will stand behind</h2>
          <p>
            {site.qualityClaim} — the wording on the incumbent ProNext site. Incoming inspection still belongs to the
            buyer. Ask for CMM sheets when the hole pattern or fold is the acceptance criterion.
          </p>
          <p>
            Coating is CED plus powder when specified. Export lots are packed to the criteria on the purchase order, not
            to a generic factory wrap.
          </p>
          <h2 style={{ marginTop: "2.8rem" }}>Where lots already travel</h2>
          <p>
            Destinations named by ProNext: {site.exports.join(", ")}. That is a footprint statement, not a claim of
            owned offices in each city.
          </p>
          <h2 style={{ marginTop: "2.8rem" }}>Hours and dispatch talk</h2>
          <p>
            Office: {site.hours}. Phones {site.phones.map((p) => p.display).join(" / ")}. Lead time is quoted per drawing
            and quantity — this site does not invent a standard week.
          </p>
          <p style={{ marginTop: "2rem" }}>
            <Link className="btn" href="/contact/">
              Put QA terms on the RFQ <IconArrow />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
