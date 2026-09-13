import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { processes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Manufacturing and capabilities",
  description:
    "ProNext plant sequence in Chakan: design, 2D/3D laser, CNC press brake, profile cutting, fixtures, MIG/MAG, CED + powder, plywood work, CMM.",
};

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        title="The plant sequence"
        lede="Capabilities in the order a lot actually moves."
        image={{
          src: "/images/plant.jpg",
          alt: "A single scaffold tower in a quiet industrial hall — atmospheric, not a photograph of the Chakan works.",
        }}
      />
      <section className="section">
        <div className="shell">
          <div className="index">
            {processes.map((step, i) => (
              <div className="index-row" key={step.code}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.name}</h3>
                  <p>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "2.4rem" }}>
            Visit the works when a first order needs to be seen, not described.{" "}
            <Link href="/contact/">Arrange a visit or send the drawing</Link>
          </p>
        </div>
      </section>
    </>
  );
}
