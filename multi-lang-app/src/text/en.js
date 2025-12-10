import { networkSections } from "./networkSections";
import eiffel from "../assets/images/eiffel.svg";
import engineering from "../assets/images/engineering.svg";
import store from "../assets/images/store.svg";

export default {
  header: {
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navNetwork: "Network",
    navContact: "Contact",
    logoAlt: "PRS International"
  },

  hero: {
    title: "Power Refurbishment Solutions",
    description:
      "PRS International is a French company founded with a clear mission...",
    button: "Learn more"
  },
  about: {
    title: "French export expertise, serving demanding professionals.",
    desc: "",
    overlayTitle: "Performance,\nQualité et\nFiabilité",
    stats: { countries: 10, projects: 35 },

    // NEW: details block (use strings and arrays for bullets)
    details: {
      who: `PRS International is a French company founded with a clear mission: to simplify, structure, and secure the export of industrial electrical equipment to high-growth markets. Our ambition is to be a trusted platform connecting reliable manufacturers from Europe and Asia with a demanding clientele based primarily in the Middle East and Africa.`,
      mission: `We provide industrial clients, both public and private, with reliable and fully compliant sourcing solutions. With deep expertise in logistics and export procedures, we streamline the purchasing process while ensuring the highest product quality.`,
      strengths: [
        "Operational base in France, at the heart of the EU",
        "Broad network of trusted industrial contacts in Europe and Asia",
        "In-depth knowledge of customer expectations and regulatory requirements in the Middle East and Africa (certifications, logistics, lead times, documentation)"
      ],
      vision: `To act as a bridge between industrial producers in Europe and Asia and the specific needs of emerging and developing regions. PRS International doesn't just sell products — we provide scalable, customized, and compliant export solutions.`,
      values: [
        "Reliability: Commitments kept at every step",
        "Transparency: Clear and traceable processes",
        "Responsiveness: Timely replies and respected deadlines",
        "Compliance: Products and procedures aligned with international standards"
      ]
    }
  },
  services: {
    title: "⚙️ Our Services",
    description: "Our experienced team of specialists uses proven processes and modern logistics to deliver compliant products on time.",
    intro: "",
    cards: [
      {
        icon: eiffel, // or keep imported asset
        title: "Supply of Electrical Equipment",
        desc: "PRS International offers a complete range of industrial electrical products, carefully selected for their reliability, international compliance, and competitive pricing.",
        link: "/services"
      },
      {
        icon: engineering,
        title: "Logistics & Export Compliance",
        desc: "Full documentation support, carrier coordination and real-time shipment tracking to ensure smooth exports.",
        link: "/services"
      },
      {
        icon: store,
        title: "International Commercial Representation",
        desc: "Connecting clients with trusted manufacturers, tender support and optional local assistance.",
        link: "/services"
      }
    ],
    long: [
      {
        heading: "1. Supply of Electrical Equipment",
        paragraph: "PRS International offers a complete range of industrial electrical products, carefully selected for their reliability, international compliance, and competitive pricing. We constantly adapt our catalog to the specific needs of our clients in the energy, construction, industrial, and infrastructure sectors.",
        bullets: [
          "Electrical cables: LV, MV, HV, armored, underground, solar, control, instrumentation, halogen-free/fire-resistant",
          "Conduits and cable routing systems: EMT and GI conduits, flexible conduits, perforated or wire-mesh cable trays, clamps, threaded rods, mounting accessories",
          "Wiring accessories: cable glands, lugs, terminals, connectors, junction kits, cable end sleeves, terminals, and busbars",
          "Distribution equipment: modular panels, industrial enclosures, breakers, residual current devices, contactors, relays, meters",
          "Power equipment: dry or oil-immersed transformers, medium-voltage switchgear, busbars, capacitor banks",
          "Grounding and surge protection: earth rods, bare copper cables, braids, lightning arresters, surge protection devices, grounding connectors",
          "Technical lighting: LED floodlights, ATEX lighting, safety beacons, emergency lighting, maintenance lighting",
          "Specialized tools: crimping tools, testers, wire strippers, pliers, and installation accessories"
        ]
      },
      {
        heading: "2. Logistics & Export Compliance",
        paragraph: "We provide full documentation and logistics coordination to ensure smooth export and delivery.",
        bullets: [
          "Full documentation support: invoices, certificates of origin, packing lists, data sheets, compliance declarations",
          "Coordination with sea, air, and road freight forwarders",
          "Real-time tracking and proactive lead time updates"
        ]
      },
      {
        heading: "3. International Commercial Representation",
        paragraph: "We act as your commercial representative, connecting you with reliable manufacturers and supporting tenders and local requirements.",
        bullets: [
          "Connecting with trusted manufacturers in Europe and Asia",
          "Tender participation: product identification, offer preparation, technical documentation",
          "Optional localized support: on-site presence, samples, and documentation assistance"
        ]
      }
    ]
  },
  network: {
    pageTitle: "Distribution Line Equipment",
    intro: `PRS International is a newly established company. We believe in full transparency: we don’t have a portfolio of completed projects yet under this brand name.<br/><br/>

What sets us apart is the background of our founder, who brings over 22 years of experience in sales and business management. This includes commercial roles in B2B wholesale, five years managing electrical equipment exports to the MENA region, and over a decade managing four different companies—two of which specialized in electrical material distribution in Qatar.<br/><br/>

PRS International builds on this practical experience with a simple approach: competitive pricing, reliable service, clear communication, and letting our customers decide for themselves. At PRS International, we don’t sell promises — we build real trust on solid ground.<br/><br/>

PRS International works closely with:<br/>

• Manufacturers across Europe (France, Poland, Germany, etc.)<br/>

• Technically compliant suppliers from Asia<br/>

• Freight forwarders specialized in shipping to the Middle East and Africa<br/><br/>

Our priority: To guarantee reliable products, on-time deliveries, complete documentation — and above all, the best possible prices.`,
    sections: networkSections
  },
  featureHero: {
  eyebrow: "POWER, OIL & GAS",
  // the main hero heading (use \n if you want line breaks like in FR)
  title: "Precision in demonstrating excellence in energy,\npetroleum and gas",
  // optional small subtitle/eyebrow
  // you can keep same structure as fr.js
},

footer: {
  bannerTitleLine1: "Trusted, innovative service providers",
  bannerTitleLine2: "PRS International",
  email: "info@prsint.fr"
}

};
