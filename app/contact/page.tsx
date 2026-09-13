import type { Metadata } from "next";
import { Ornament } from "@/components/Ornament";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { RfqForm } from "@/components/RfqForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact and RFQ",
  description:
    "Request a scaffolding or formwork quote from ProNext Industries, Chakan. Email sumit.b@pronextindustries.com or call 9422513045 / 7447791684.",
};

export default function ContactPage() {
  const map = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;

  return (
    <>
      <PageHero
        title="Quote or call"
        lede="Five fields. A plant email. Two mobiles. Office Monday to Friday, 9:00 am to 6:00 pm."
      />
      <section className="section">
        <div className="shell contact-grid">
          <Reveal variant="enter">
            <Ornament />
            <h2>Works contact</h2>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p>
              {site.phones.map((phone) => (
                <span key={phone.raw}>
                  <a href={phone.href}>{phone.display}</a>
                  <br />
                </span>
              ))}
            </p>
            <p>{site.hours}</p>
            <p>{site.addressSingle}</p>
            <div className="map-frame">
              <iframe
                title="Map to Pro Next Industries, Chakan"
                src={map}
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, display: "block" }}
              />
            </div>
          </Reveal>
          <Reveal variant="fade" delay={70}>
            <RfqForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
