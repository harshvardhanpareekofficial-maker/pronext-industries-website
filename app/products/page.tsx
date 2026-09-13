import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { IconArrow } from "@/components/Icons";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Scaffolding and formwork products",
  description:
    "Scaffolding and formwork components from ProNext Industries, Chakan — realized to drawing, coated when specified, packed for the voyage.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        drawing="PN-PRD-001"
        title="Products"
        lede="Two families leave this works: scaffolding components and formwork components. We do not sell another house’s named system. We make the parts on your drawing."
      />
      <section className="section">
        <div className="shell">
          {products.map((product) => (
            <article key={product.slug} id={product.slug} style={{ marginBottom: "4rem" }}>
              <h2>{product.title}</h2>
              <p className="lede">{product.lead}</p>
              <p>{product.body}</p>
              <ul className="point-list">
                {product.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
          <p>
            <Link className="btn" href="/contact/">
              Request these parts <IconArrow />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
