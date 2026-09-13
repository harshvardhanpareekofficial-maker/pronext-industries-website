import type { Metadata } from "next";
import Link from "next/link";
import { Frame } from "@/components/Frame";
import { PageHero } from "@/components/PageHero";
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
        title="Products"
        lede="Two families leave this works: scaffolding components and formwork components. We do not sell another house’s named system. We make the parts on your drawing."
      />
      <section className="section">
        <div className="shell">
          {products.map((product) => (
            <article className="product-detail" id={product.slug} key={product.slug}>
              <Frame className="listing-media" src={product.image} alt={product.imageAlt} />
              <div>
                <h2>{product.title}</h2>
                <p className="lede">{product.lead}</p>
                <p>{product.body}</p>
                <ul className="point-list">
                  {product.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
          <p style={{ marginTop: "1.4rem" }}>
            <Link className="btn" href="/contact/">
              Request these parts
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
