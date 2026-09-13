import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: [site.brand, site.short, "Pro-Next Industries"],
    url: site.url,
    email: site.email,
    telephone: site.phones.map((p) => p.href.replace("tel:", "")),
    foundingDate: String(site.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: "357/16/1, 357/17/1, Kharabwadi, Tal-Khed",
      addressLocality: "Chakan, Pune",
      addressRegion: "Maharashtra",
      postalCode: "410501",
      addressCountry: "IN",
    },
    openingHours: "Mo-Fr 09:00-18:00",
    areaServed: site.exports,
    description:
      "Scaffolding and formwork production and marketing from Chakan, Pune. Manufacturing since 2014.",
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
