export const site = {
  legalName: "Pro Next Industries Private Limited",
  brand: "Pronext",
  short: "ProNext Industries",
  tag: "Scaffolding and formwork, made in Chakan.",
  url: "https://www.pronextindustries.com",
  email: "sumit.b@pronextindustries.com",
  phones: [
    { raw: "9422513045", display: "+91 94225 13045", href: "tel:+919422513045" },
    { raw: "7447791684", display: "+91 74477 91684", href: "tel:+917447791684" },
  ],
  hours: "Monday–Friday, 9:00 am – 6:00 pm",
  hoursShort: "Mon–Fri 9:00 am – 6:00 pm",
  addressLines: [
    "M/S. Pro Next Industries Private Limited",
    "357/16/1, 357/17/1, Kharabwadi",
    "Tal-Khed, Chakan, Pune",
    "Maharashtra 410501, India",
  ],
  addressSingle:
    "M/S. Pro Next Industries Private Limited, 357/16/1, 357/17/1, Kharabwadi, Tal-Khed, Chakan, Pune, Maharashtra, 410501",
  mapsQuery:
    "Pro Next Industries Private Limited, 357/16/1 Kharabwadi Tal-Khed Chakan Pune 410501",
  founded: 2014,
  founder: {
    name: "Mr. Sumitkumar Bagrecha",
    also: "Sumit Bagrecha",
    role: "Managing Director",
    education: "M.Sc. Global Production Engineering, Technische Universität Berlin",
  },
  exports: [
    "Germany",
    "Mauritius",
    "Latin America",
    "Philippines",
    "Dubai",
    "Pakistan",
  ],
  qualityClaim: "Zero PPM commitment",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/products/", label: "Products" },
  { href: "/manufacturing/", label: "Plant" },
  { href: "/quality/", label: "Quality" },
  { href: "/about/", label: "About" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Quote" },
] as const;
