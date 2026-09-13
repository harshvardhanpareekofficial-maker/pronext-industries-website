import type { Metadata } from "next";
import Link from "next/link";
import { IconArrow } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
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
        lede="Capabilities in the order a lot actually moves. Section numbers are the process, not decoration."
        image={{
          src: "/images/plant.jpg",
          alt: "A single scaffold tower in a quiet industrial hall — atmospheric, not a photograph of the Chakan works.",
        }}
      />
      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="index">
              {processes.map((step, i) => (
                <div className="index-row" key={step.code}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <h2 style={{ fontSize: "1.8rem", margin: 0 }}>{step.name}</h2>
                  <p>{step.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
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
