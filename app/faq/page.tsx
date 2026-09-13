import type { Metadata } from "next";
import Link from "next/link";
import { Ornament } from "@/components/Ornament";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "ProNext Industries FAQ: what the Chakan plant makes, zero PPM, export regions, hours, and how to send an RFQ.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Questions buyers actually ask"
        lede="Short answers from published plant facts. If a number is not on the incumbent site, it is not invented here."
      />
      <section className="section">
        <div className="shell faq">
          <Reveal variant="fade">
            <Ornament />
          </Reveal>
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
          <p style={{ marginTop: "2.2rem" }}>
            Still a drawing in your inbox? <Link href="/contact/">Send the RFQ</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
