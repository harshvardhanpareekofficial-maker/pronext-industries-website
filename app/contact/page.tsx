import type { Metadata } from "next";
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
      <section className="contact-stage">
        <div className="contact-stage-media">
          <img
            src="/images/plant.jpg"
            alt="A quiet industrial hall — atmospheric, not a photograph of the Chakan works."
          />
        </div>
        <div className="contact-panel">
          <h1>Get in touch</h1>
          <p className="lede" style={{ color: "color-mix(in srgb, #f6f3ee 80%, transparent)" }}>
            Five fields. Office {site.hoursShort}.
          </p>
          <RfqForm glass />
          <div className="contact-pills">
            <a href={site.phones[0].href}>Call {site.phones[0].display}</a>
            <a href={`mailto:${site.email}`}>Email us</a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <h2>Works contact</h2>
          <p>
            {site.phones.map((phone) => (
              <span key={phone.raw}>
                <a href={phone.href}>{phone.display}</a>
                <br />
              </span>
            ))}
          </p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
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
        </div>
      </section>
    </>
  );
}
