import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { IconArrow } from "@/components/Icons";
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
        drawing="PN-MFG-001"
        title="The plant sequence"
        lede="Capabilities in the order a lot actually moves. Section numbers are the process, not decoration."
      />
      <section className="section">
        <div className="shell">
          <div className="seq">
            {processes.map((step) => (
              <div className="seq-row" key={step.code}>
                <span className="data">{step.code}</span>
                <h2 style={{ fontSize: "1.8rem", margin: 0 }}>{step.name}</h2>
                <p>{step.detail}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "2.4rem" }}>
            Visit the works when a first order needs to be seen, not described.{" "}
            <Link href="/contact/">
              Arrange a visit or send the drawing <IconArrow />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
