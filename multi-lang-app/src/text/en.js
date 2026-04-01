import { networkSections } from "./networkSections";
import eiffel from "../assets/images/1.svg";
import engineering from "../assets/images/2.svg";
import store from "../assets/images/3.svg";


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
    title: "PRS International",
    description: "European exporter of electrical, mechanical and industrial equipment and spare parts",
    button: "Discuss Your Project"
  },
  about: {
    title: "French export expertise, serving demanding professionals.",
    desc: "",
    overlayTitle: "Performance,\nQuality and\nReliability",
    stats: {
      years: "Years of Experience",
      projects: 25,
      note: "Our team brings together over 25 years of hands-on experience in exporting electrical, mechanical and industrial equipment and spare parts worldwide."
    },

    // NEW: details block (use strings and arrays for bullets)
    details: {
      who: `PRS International is a French company founded with a clear mission: to simplify, structure, and secure the export of electrical, mechanical and industrial equipment and spare parts to high-growth markets. Our ambition is to be a trusted platform connecting reliable manufacturers from Europe and Asia with a demanding clientele based primarily in the Middle East and Africa.`,
      mission: `We provide public and private sector clients with reliable and fully compliant sourcing solutions for electrical, mechanical and industrial equipment and spare parts. With deep expertise in logistics and export procedures, we streamline the purchasing process while ensuring the highest product quality.`,
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
    title: " Our Services",
    description: "Backed by decades of industry expertise, our team applies proven methods and modern logistics to ensure every product is compliant, traceable, and delivered on time — every time.",
    intro: "",
    cards: [
      {
        icon: eiffel, // or keep imported asset
        title: "Distribution of Electrical, Industrial Equipment and Spare Parts for Construction",
        desc: "PRS International offers a complete range of electrical, mechanical and industrial equipment and spare parts, carefully selected for their reliability, international compliance, and competitive pricing.",
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
        heading: "1. Distribution of Electrical, Industrial Equipment and Spare Parts for Construction",
        paragraph: "PRS International offers a complete range of electrical, mechanical and industrial equipment and spare parts, including industrial spare parts and technical equipment for construction, mining, and heavy industry worldwide. Carefully selected for their reliability, international compliance, and competitive pricing, our solutions are tailored to meet the specific needs of our clients in the energy, construction, industrial, and infrastructure sectors.",
        bullets: [
          "Industrial Machinery & Spare Parts: Engines, gearboxes, pumps, compressors, hydraulic components, bearings, filters, and OEM or aftermarket spare parts for construction, mining, and heavy industry.",
          "Electrical cables: LV, MV, HV, armored, underground, solar, control, instrumentation, halogen-free/fire-resistant",
          "Conduits and cable routing systems: EMT and GI conduits, flexible conduits, perforated or wire-mesh cable trays, clamps, threaded rods, mounting accessories",
          "Wiring accessories: cable glands, lugs, terminals, connectors, junction kits, cable end sleeves, terminals, and busbars",
          "Distribution equipment: modular panels, industrial enclosures, breakers, residual current devices, contactors, relays, meters",
          "Metering Solutions: Smart water meters, electromagnetic and ultrasonic flow meters, electrical meters, AMR/AMI systems, and related communication modules.",
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
    pageTitle: "",
    intro: `With over 25 years of hands-on experience in international sales and industrial supply, PRS International was founded on deep market insight and operational know-how. Our company draws from decades of field-tested practices to offer smart, reliable, and export-ready solutions for electrical, mechanical and industrial equipment and spare parts, tailored to high-growth markets.<br/><br/>
  We operate with a clear approach: competitive pricing, dependable sourcing, seamless logistics, and responsive communication. Our commitment is not to overpromise, but to consistently deliver — with transparency, performance, and measurable results at every step.<br/><br/>
  We work in close partnership with trusted manufacturers across Europe, compliant suppliers in Asia, and freight forwarders specialized in routes to the Middle East and Africa. Our priority is simple: To guarantee reliable products, timely deliveries, complete documentation — and always the best possible prices.`,
    sectionTitles: {
      industrial: "Industrial Machinery & Spare Parts",
      electric: "Electrical cables",
      safety: "Tools and personal safety equipment",
      trays: "Cable Tray and Accessories",
      medium: "Medium Voltage substation",
      electromechanical: "Electromechanical equipment",
      metering: "Metering Solutions",
      lighting: "Lighting fixtures and fittings",
      automation: "Automation and Low Voltage Equipment",
      medium2: "Medium Voltage Distribution Line Equipment",
      explosion: "Explosion-proof equipment",
      power: "Power source",
    },
    sections: networkSections
  },
  featureHero: {
    eyebrow: "ENERGY KNOWS NO BORDERS. \n EXPERTISE CARRIES A SIGNATURE.",
    // the main hero heading (use \n if you want line breaks like in FR)
    title: "It all starts with a single demand: precise technical detail, mastered in France. At PRS International, we don’t just supply electrical, mechanical and industrial equipment and spare parts — we deliver a global promise of reliability.",
    // optional small subtitle/eyebrow
    // you can keep same structure as fr.js
  },
  footer: {
    bannerTitleLine1: "Precision in Supply. Confidence in Delivery.",
    bannerTitleLine2: "PRS International",
    email: "info@prsint.fr",
    about: "About Us",
    services: "Our Services",
    logoAlt: "PRS International",
    contact: "Contact us"
  },
  contact: {
    title: "Contact Us",
    subtitle: "",
    description:
      "Would you like more information about one of our products? \n Do you have a question about an ongoing order? \n Our team is here to help — feel free to reach out.",
    emailLabel: "info@prsint.fr",
    form: {
      name: "Name",
      phone: "Phone",
      email: "Email Address",
      subject: "Subject",
      message: "How can we help you? Feel free to get in touch!",
      submit: "Get In Touch",
    },

  },


};
