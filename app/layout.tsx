import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { StickyCall } from "@/components/StickyCall";
import { site } from "@/lib/site";
import "./globals.css";

const sans = localFont({
  src: [
    { path: "./fonts/plus-jakarta-sans-latin-300-normal.woff2", weight: "300" },
    { path: "./fonts/plus-jakarta-sans-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/plus-jakarta-sans-latin-500-normal.woff2", weight: "500" },
    { path: "./fonts/plus-jakarta-sans-latin-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ProNext Industries — Scaffolding & formwork, Chakan",
    template: "%s — ProNext Industries",
  },
  description:
    "Pro Next Industries Private Limited manufactures scaffolding and formwork components in Chakan, Pune since 2014. Zero PPM commitment. Export packing for Germany, Mauritius, Latin America, Philippines, Dubai, and Pakistan.",
  openGraph: {
    title: "ProNext Industries — Scaffolding & formwork, Chakan",
    description:
      "Plant-made scaffolding and formwork components. Laser, CNC brake, weld, CED + powder, plywood fitment, CMM. Call the Chakan works.",
    type: "website",
    locale: "en_IN",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      {/*
        THESIS: Webild luxury-RE grammar for a Chakan works — photography and ivory, not a shop-drawing.
        OWN-WORLD: Ivory, charcoal pills, espresso overlays, Plus Jakarta Sans, listing cards, glass RFQ.
        STORY: Buyer sees what is made, the process, 2014 / zero PPM / named exports, then requests a quote or calls.
        FIRST VIEWPORT: Full-bleed hero, left overlay, two-line headline, paired pills.
        FORM: Observed Webild template (hero / about plate / properties grid / glass contact / ivory footer).
        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
      */}
      <body>
        <JsonLd />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <div className="sheet">
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </div>
        <StickyCall />
      </body>
    </html>
  );
}
