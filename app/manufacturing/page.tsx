import type { Metadata } from "next";
import Link from "next/link";
import { IconArrow } from "@/components/Icons";
import { Ornament } from "@/components/Ornament";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { movements, processes } from "@/lib/content";

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
        lede="Capabilities in the order a lot actually moves. Section numbers are the process, not decoration."
        image={{
          src: "/images/plant.jpg",
          alt: "A single scaffold tower in a quiet industrial hall — atmospheric, not a photograph of the Chakan works.",
        }}
      />
      <section className="section">
        <div className="shell">
          <Reveal variant="fade" className="section-head">
            <Ornament />
            <h2>Four movements</h2>
            <p className="lede">A shorter reading of the same plant: draw, form, coat, crate.</p>
          </Reveal>
          <div className="steps">
            {movements.map((step, i) => (
              <Reveal key={step.name} variant="line" delay={i * 90} className="step">
                <p className="label">{String(i + 1).padStart(2, "0")}</p>
                <h3>{step.name}</h3>
                <p>{step.detail}</p>
              </Reveal>
            ))}
          </div>
          <Reveal variant="fade" className="section-head">
            <Ornament />
            <h2>The bay, in order</h2>
          </Reveal>
          <div className="index">
            {processes.map((step, i) => (
              <Reveal key={step.code} variant="line" delay={Math.min(i * 40, 200)}>
                <div className="index-row">
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <h2 style={{ fontSize: "1.8rem", margin: 0 }}>{step.name}</h2>
                  <p>{step.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p style={{ marginTop: "2.8rem" }}>
            Visit the works when a first order needs to be seen, not described.{" "}
            <Link className="text-link" href="/contact/">
              Arrange a visit or send the drawing <IconArrow />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
