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
    { path: "./fonts/big-shoulders-display-latin-800-normal.woff2", weight: "800" },
    { path: "./fonts/big-shoulders-display-latin-900-normal.woff2", weight: "900" },
  ],
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: [
    { path: "./fonts/barlow-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/barlow-latin-500-normal.woff2", weight: "500" },
    { path: "./fonts/barlow-latin-600-normal.woff2", weight: "600" },
    { path: "./fonts/barlow-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-body",
  display: "swap",
});

const data = localFont({
  src: [{ path: "./fonts/azeret-mono-latin-500-normal.woff2", weight: "500" }],
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
        THESIS: A shop-drawing issued by a Chakan works, not a brochure and not a SaaS hero-metric page.
        OWN-WORLD: Concrete/sheet grounds, oxide primer bands, olive-black ink, Big Shoulders Display + Barlow + Azeret Mono, ruled title blocks.
        STORY: Buyer sees what is made, the process, 2014 / zero PPM / named exports, then requests a quote or calls.
        FIRST VIEWPORT: Dark steel bay, huge condensed offer, process register, quote + call. One bayline draw.
        FORM: Title-block / shop-drawing. User-pinned industrial precision; unattended build.
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
