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
    { path: "./fonts/cormorant-garamond-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-500-italic.woff2", weight: "500", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: [
    { path: "./fonts/libre-franklin-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/libre-franklin-latin-500-normal.woff2", weight: "500" },
    { path: "./fonts/libre-franklin-latin-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-body",
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
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      {/*
        THESIS: A quiet monograph for a Chakan works — editorial luxury, not a shop-drawing and not a SaaS page.
        OWN-WORLD: Warm bone, charcoal type, terracotta on CTAs only, Cormorant Garamond + Libre Franklin, hairline grids.
        STORY: Buyer sees what is made, the process, 2014 / zero PPM / named exports, then requests a quote or calls.
        FIRST VIEWPORT: Typography-forward cinematic split, large serif offer, quote + call.
        FORM: Editorial luxury / curated collections. User-pinned Webild luxury-RE cue adapted to industrial B2B.
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
