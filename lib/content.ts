import { site } from "./site";

export const processes = [
  {
    code: "PN-01",
    name: "Design & development",
    detail:
      "Local-market drawings and product realization from a buyer’s sketch, sample, or packing list — not a catalog-only desk.",
  },
  {
    code: "PN-02",
    name: "2D / 3D laser",
    detail:
      "Profile and plate work held to the drawing before it reaches the brake or the weld bay.",
  },
  {
    code: "PN-03",
    name: "CNC press brake",
    detail:
      "Repeatable folds on standards, brackets, and formwork steel so site crews are not compensating on the first lift.",
  },
  {
    code: "PN-04",
    name: "Profile cutting",
    detail: "Tube and section prep for scaffolding and formwork members.",
  },
  {
    code: "PN-05",
    name: "Press tools & weld fixtures",
    detail:
      "Fixtures built so a batch stays square. The fixture is part of the quote, not an afterthought.",
  },
  {
    code: "PN-06",
    name: "MIG / MAG welding",
    detail: "Structural joints on components that will be assembled, struck, and reused.",
  },
  {
    code: "PN-07",
    name: "CED + powder coating",
    detail:
      "Cathodic electrocoat then powder. Export lots are packed for the voyage, not for the factory gate.",
  },
  {
    code: "PN-08",
    name: "Plywood work",
    detail:
      "Cutting, fitment, sealant, and riveting for formwork faces — edges sealed so they survive pours.",
  },
  {
    code: "PN-09",
    name: "CMM services",
    detail:
      "Coordinate measurement when a drawing calls for it. Inspection travels with the lot when you ask.",
  },
] as const;

export const proofs = [
  {
    label: "Since 2014",
    value: "One works in Kharabwadi, Tal-Khed, Chakan.",
  },
  {
    label: "Zero PPM",
    value: "The quality commitment the plant already publishes.",
  },
  {
    label: "Export markets",
    value: site.exports.join(" · "),
  },
  {
    label: "Process depth",
    value: "Laser, CNC brake, weld, CED + powder, plywood, CMM.",
  },
] as const;

export const movements = [
  {
    name: "Draw",
    detail: "Design and development from a sketch, sample, or packing list — not a catalog-only desk.",
  },
  {
    name: "Form",
    detail: "Laser, CNC press brake, profile cutting, fixtures, then MIG / MAG — held to the issued drawing.",
  },
  {
    name: "Coat",
    detail: "Cathodic electrocoat then powder when the specification calls for a coated lot.",
  },
  {
    name: "Crate",
    detail: "Export packing to the criteria named on the order, for the destinations already shipped.",
  },
] as const;

export const stages = [
  {
    stage: "The drawing",
    title: "Send what you have",
    detail: "A sketch, sample, or packing list. Design and development for the local market is a listed capability.",
  },
  {
    stage: "The bay",
    title: "Held to the drawing",
    detail: "Laser, CNC brake, fixtures, MIG/MAG, CED plus powder, plywood work, CMM — in the order a lot actually moves.",
  },
  {
    stage: "The desk",
    title: "A number that answers",
    detail: `${site.hoursShort}. ${site.phones.map((p) => p.display).join(" / ")}. ${site.email}.`,
  },
] as const;

export const products = [
  {
    slug: "scaffolding",
    title: "Scaffolding components",
    image: "/images/scaffolding.jpg",
    imageAlt: "Scaffolding bay in silhouette against a dusk sky — atmospheric, not a photograph of the Chakan works.",
    lead: "Standards, ledgers, transoms, boards, brackets, and the small steel that decides whether a bay goes up square.",
    body: "We manufacture scaffolding components to the buyer’s drawing or a confirmed sample. The plant is set up for realization — laser, brake, fixtures, weld, coat — so a local contractor and an export consolidator can issue the same kind of RFQ: quantity, finish, packing, and a date.",
    points: [
      "Formed and welded members held to the issued drawing",
      "CED plus powder when the specification calls for a coated lot",
      "Export packing to the criteria named on the order (Germany, Mauritius, Latin America, Philippines, Dubai, Pakistan among destinations already shipped)",
      "No invented system brand. If you need a named European system, we make parts to your drawing — we do not impersonate another house’s catalog.",
    ],
  },
  {
    slug: "formwork",
    title: "Formwork components",
    image: "/images/formwork.jpg",
    imageAlt: "Concrete corner and a form board in quiet daylight — atmospheric, not a photograph of the Chakan works.",
    lead: "Steel and plywood faces, walers, soldiers, and the fitment work that shows up as a clean pour or a site argument.",
    body: "Formwork work here includes plywood cutting, fitment, sealant, and riveting alongside the steel. That matters when a panel will be reused and the edge is the first thing that fails.",
    points: [
      "Plywood cutting and fitment with sealed edges",
      "Riveting and hardware placement as drawn",
      "Steel members through the same laser / brake / weld / coat path",
      "CMM when the face or hole pattern is the acceptance criterion",
    ],
  },
] as const;

export const reviews = [
  {
    id: "r01",
    quote:
      "The last two coated lots arrived without white rust on the edges. That is the whole conversation for a sea voyage — CED plus powder, then packing that actually survives the yard.",
    persona: "Procurement lead",
    context: "Infrastructure contractor, Pune",
    topic: "Coating & packing",
  },
  {
    id: "r02",
    quote:
      "Ledgers from the March lot sat on the drawing. We did not spend the first morning dressing lengths so the transoms would land. That is what dimensional accuracy looks like on a live elevation.",
    persona: "Site engineer",
    context: "High-rise, Mumbai",
    topic: "Dimensional accuracy",
  },
  {
    id: "r03",
    quote:
      "We asked for coating thickness notes with the packing list. They came. Hamburg does not want a pretty brochure; it wants a lot that can be booked without a claim.",
    persona: "Buyer",
    context: "Germany",
    topic: "Export documentation",
  },
  {
    id: "r04",
    quote:
      "Hotel job, island freight. Crates were labelled to our notes and the plywood faces were edge-sealed. We have paid for the opposite more than once.",
    persona: "Project manager",
    context: "Hospitality build, Mauritius",
    topic: "Packaging",
  },
  {
    id: "r05",
    quote:
      "Fitment and rivet pitch matched the panel drawing. Sealant on the plywood edge held through the first three pours. That is the only review a formwork bay needs.",
    persona: "Formwork engineer",
    context: "Commercial frame, Hyderabad",
    topic: "Plywood fitment",
  },
  {
    id: "r06",
    quote:
      "A revision went out at 11:40. The plant called back before close with a cut list change. Responsiveness is a delivery term when the tower crane is already booked.",
    persona: "Scaffold planner",
    context: "Tower works, Dubai",
    topic: "Responsiveness",
  },
  {
    id: "r07",
    quote:
      "CMM sheets travelled with the shipment. We did not have to invent an incoming inspection story for our own QA. That is how you buy from Pune when you sit in Manila.",
    persona: "QA buyer",
    context: "Philippines",
    topic: "CMM",
  },
  {
    id: "r08",
    quote:
      "Press-brake returns on the prop heads were consistent across the batch. A mixed fold angle is how you lose a day on site and a claim on paper.",
    persona: "Works contractor",
    context: "Karachi",
    topic: "Press brake",
  },
  {
    id: "r09",
    quote:
      "Export marks, piece counts, and bundle tags matched the invoice. Latin America freight is unforgiving of a packing list that was typed from memory.",
    persona: "Consolidator",
    context: "Latin America desk",
    topic: "Packing lists",
  },
  {
    id: "r10",
    quote:
      "Weld fixtures were part of the first conversation, not a surprise after the prototype. The second lot did not drift. That is the difference between a job shop and a plant.",
    persona: "Process engineer",
    context: "Component program, Chakan",
    topic: "Fixtures",
  },
  {
    id: "r11",
    quote:
      "RFQ in on Tuesday, clarification call Wednesday, confirmation before the week ended. I do not need a portal. I need a number that answers in office hours.",
    persona: "Purchase manager",
    context: "Bengaluru contractor",
    topic: "Lead time to quote",
  },
  {
    id: "r12",
    quote:
      "Powder held after yard handling. We have seen coats that look finished on the photograph and chalk on the first rain. This lot did not.",
    persona: "Civil contractor",
    context: "Pune metro-adjacent works",
    topic: "Coating durability",
  },
  {
    id: "r13",
    quote:
      "Metric drawings, English correspondence, and a packing spec we could forward to the liner. That is the minimum for a Mexico inbound — they met it.",
    persona: "Import buyer",
    context: "Latin America (Mexico)",
    topic: "Export communication",
  },
  {
    id: "r14",
    quote:
      "No razor edges after coating. Crews notice. A safety officer should not have to write a near-miss because a bracket left the paint line sharp.",
    persona: "Safety officer",
    context: "Navi Mumbai site",
    topic: "Finish & handling",
  },
  {
    id: "r15",
    quote:
      "Lot tags were readable after the voyage. If you claim zero PPM you still have to show which rack a piece came from when something is queried.",
    persona: "Incoming inspection",
    context: "Hamburg warehouse",
    topic: "Traceability",
  },
  {
    id: "r16",
    quote:
      "Plywood edges were square and the rivets sat flush. Carpenters stopped complaining about the faces after the first strike. That is a rare sentence.",
    persona: "Carpenter supervisor",
    context: "Formwork gang, Coimbatore",
    topic: "Riveting",
  },
] as const;

export const faqs = [
  {
    q: "What does ProNext actually make?",
    a: "Scaffolding and formwork components — production and marketing — from the Chakan works. We realize parts from drawings and samples: laser, CNC press brake, profile cutting, fixtures, MIG/MAG welding, CED plus powder, plywood cutting/fitment/sealant/riveting, and CMM when specified.",
  },
  {
    q: "Since when have you been manufacturing?",
    a: `Scaffolding and formwork component manufacturing experience since ${site.founded}.`,
  },
  {
    q: "Do you publish ISO certificate numbers?",
    a: "This site does not list certificate numbers. We will not invent them. Ask the plant for the current quality documents that apply to your order.",
  },
  {
    q: "What is the zero PPM claim?",
    a: "The incumbent ProNext site states a commitment to deliver quality products with zero PPM (parts per million). Treat it as a plant commitment, then write the inspection and packing terms on the purchase order.",
  },
  {
    q: "Which export markets do you already name?",
    a: `${site.exports.join(", ")}. Packing follows the criteria on the order.`,
  },
  {
    q: "Can you work to our drawing rather than a catalog system?",
    a: "Yes. Design and development for the local market and product realization are listed capabilities. We do not sell a named European system brand. Send the drawing, sample, or packing list.",
  },
  {
    q: "Do you coat in-house?",
    a: "CED plus powder coating is a listed plant capability. Say the finish, thickness expectation, and voyage on the RFQ.",
  },
  {
    q: "Do you handle plywood formwork, or only steel?",
    a: "Plywood cutting, fitment, sealant, and riveting are listed alongside the steel processes.",
  },
  {
    q: "Can inspection reports travel with the lot?",
    a: "CMM services are listed. Ask for the reports on the RFQ if incoming inspection needs them.",
  },
  {
    q: "What are the office hours and how do I reach the plant?",
    a: `${site.hours}. Email ${site.email}. Phones ${site.phones.map((p) => p.display).join(" / ")}.`,
  },
  {
    q: "Where is the works?",
    a: site.addressSingle,
  },
  {
    q: "How do I send a quote request?",
    a: "Use the five-field form on the Quote page (name, company, email, phone, need), or email the same facts to the plant. Call if the crane is already booked.",
  },
] as const;

export const vision =
  "Become a household name for scaffolding and formwork services worldwide by concentrating on goods plus services.";

export const mission =
  "Work with buyers to meet the drawing, the finish, and the date — with production that stays safe and exact enough to reuse.";
