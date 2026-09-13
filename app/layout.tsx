import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { StickyCall } from "@/components/StickyCall";
import { site } from "@/lib/site";
import "./globals.css";

const display = localFont({
  src: [
    {
      path: "./fonts/archivo-latin-wdth-wght-normal.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/archivo-latin-wdth-wght-italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: [
    {
      path: "./fonts/source-sans-3-latin-wght-normal.woff2",
      weight: "200 900",
      style: "normal",
    },
    {
      path: "./fonts/source-sans-3-latin-wght-italic.woff2",
      weight: "200 900",
      style: "italic",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

const data = localFont({
  src: [{ path: "./fonts/ibm-plex-mono-latin-500-normal.woff2", weight: "500", style: "normal" }],
  variable: "--font-data",
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
    <html lang="en" className={`${display.variable} ${body.variable} ${data.variable}`}>
      {/*
        THESIS: Ivory monograph for a Chakan works — Webild calm + industrial-energy craft, not a shop-drawing and not a SaaS page.
        OWN-WORLD: Ivory ground, charcoal type, terracotta on CTAs, Archivo display + Source Sans 3 + IBM Plex Mono labels.
        STORY: Buyer sees what is made, the process, 2014 / zero PPM / named exports, then requests a quote or calls.
        FIRST VIEWPORT: Punchy H1, one thesis, rounded plate, quote + call.
        FORM: Webild luxury-RE whitespace + Kailash-style proof/process/FAQ/invite rhythm. User-pinned polish.
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
