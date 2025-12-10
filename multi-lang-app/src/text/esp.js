// src/text/esp.js
import { networkSections } from "./networkSections";
import eiffel from "../assets/images/eiffel.svg";
import engineering from "../assets/images/engineering.svg";
import store from "../assets/images/store.svg";

export default {
  header: {
    navHome: "Inicio",
    navAbout: "Sobre nosotros",
    navServices: "Servicios",
    navNetwork: "Red",
    navContact: "Contacto",
    logoAlt: "PRS International"
  },

  hero: {
    title: "Power Refurbishment Solutions",
    description: "PRS International es una empresa francesa fundada con una misión clara...",
    button: "Saber más"
  },

  about: {
    title: "La experiencia francesa en exportación, al servicio de los profesionales exigentes.",
    desc: "",
    // optional overlayTitle if you use it in About.jsx
    overlayTitle: "Performance,\nQualité et\nFiabilité",

    // structured details for About section (Spanish)
    details: {
      labels: {
        who: "¿Quiénes somos?",
        mission: "Nuestra misión",
        strengths: "Nuestros puntos fuertes",
        vision: "Nuestra visión",
        values: "Nuestros valores"
      },

      who: `PRS International es una empresa francesa fundada con una misión clara: facilitar, estructurar y asegurar la exportación de material eléctrico industrial hacia mercados en expansión. Nuestra ambición es ser una plataforma de confianza que conecte fabricantes fiables de Europa y Asia con una clientela exigente, principalmente en Oriente Medio y África.`,

      mission: `Ofrecer a clientes industriales, tanto públicos como privados, soluciones de abastecimiento fiables y conformes. Gracias a nuestra experiencia en logística y procedimientos de exportación, simplificamos el proceso de compra garantizando una alta calidad en los productos entregados.`,

      strengths: [
        "Base operativa en Francia, en el corazón de la Unión Europea",
        "Red amplia de contactos industriales en Europa y Asia",
        "Conocimiento profundo de los requisitos técnicos y normativos en Oriente Medio y África (certificaciones, logística, plazos, documentación)"
      ],

      vision: `Actuar como un puente entre los productores industriales de Europa y Asia y las necesidades específicas de las regiones en desarrollo. PRS International no solo vende productos: ofrece soluciones de exportación escalables, personalizadas y conformes.`,

      values: [
        "Fiabilidad: compromisos cumplidos en todas las etapas",
        "Transparencia: procesos claros y trazables",
        "Rapidez: respuestas ágiles y plazos respetados",
        "Conformidad: productos y procesos alineados con los estándares internacionales"
      ]
    }
  },
  services: {
    title: "⚙️ Nuestros servicios",
    description: "Nuestro equipo de especialistas utiliza procesos probados y logística moderna para garantizar entregas conformes y puntuales.",
    intro: "",
    cards: [
      {
        icon: eiffel,
        title: "Suministro de material eléctrico",
        desc: "PRS International ofrece una gama completa de productos eléctricos industriales, seleccionados por su fiabilidad y conformidad.",
        link: "/services"
      },
      {
        icon: engineering,
        title: "Logística y cumplimiento de exportación",
        desc: "Preparación documental, coordinación con transitarios y seguimiento en tiempo real.",
        link: "/services"
      },
      {
        icon: store,
        title: "Representación comercial internacional",
        desc: "Conexión con fabricantes fiables y apoyo en licitaciones.",
        link: "/services"
      }
    ],
    long: [
      {
        heading: "1. Suministro de material eléctrico",
        paragraph:
          "PRS International ofrece una gama completa de productos eléctricos industriales, seleccionados por su fiabilidad, conformidad con las normas internacionales y precios competitivos. Actualizamos constantemente nuestro catálogo según las necesidades específicas de nuestros clientes en los sectores de energía, construcción, industria e infraestructuras.",
        bullets: [
          "Cables eléctricos: BT, MT, AT, armados, subterráneos, solares, de mando, de control, de instrumentación, ignífugos",
          "Sistemas de canalización: tubos EMT, GI, flexibles, bandejas perforadas o tipo rejilla, abrazaderas, varillas roscadas, accesorios de fijación",
          "Accesorios de cableado: prensaestopas, terminales, conectores, manguitos, bornas, kits de empalme y terminación",
          "Cuadros eléctricos y distribución: cuadros modulares, armarios industriales, disyuntores, interruptores diferenciales, contactores, relés, contadores",
          "Equipos de potencia: transformadores secos o en aceite, celdas MT, barras, baterías de condensadores",
          "Puesta a tierra y protección: picas de tierra, cables desnudos, trenzas, pararrayos, protectores de sobretensión, conectores de tierra",
          "Iluminación técnica: proyectores LED, iluminación ATEX, balizas de emergencia, iluminación de mantenimiento",
          "Herramientas especializadas: alicates, pelacables, probadores, herramientas de crimpado"
        ]
      },

      {
        heading: "2. Logística y cumplimiento de exportación",
        paragraph:
          "Nos encargamos de la preparación completa de la documentación y la coordinación logística, garantizando operaciones de exportación seguras, transparentes y eficaces.",
        bullets: [
          "Preparación de todos los documentos: facturas, certificados de origen, listas de embalaje, fichas técnicas, certificados de conformidad",
          "Coordinación con transitarios marítimos, aéreos y terrestres",
          "Seguimiento en tiempo real y actualización proactiva sobre plazos"
        ]
      },

      {
        heading: "3. Representación comercial internacional",
        paragraph:
          "PRS International conecta a los clientes con fabricantes fiables y facilita procesos comerciales y técnicos en mercados internacionales.",
        bullets: [
          "Conexión con fabricantes fiables de Europa y Asia",
          "Participación en licitaciones: identificación de necesidades, selección de productos, documentación y ofertas",
          "Apoyo local personalizado bajo demanda: visitas, muestras, asistencia documental"
        ]
      }
    ]
  },
  network: {
    pageTitle: "Equipos de línea de distribución",
    intro: "Trabajamos con socios...",
    sections: networkSections
  },
  featureHero: {
  eyebrow: "POWER, OIL & GAS",
  title: "Precisión en la demostración de la excelencia en energía,\npetóleo y gas"
},

footer: {
  bannerTitleLine1: "Proveedores de servicios innovadores y fiables",
  bannerTitleLine2: "PRS International",
  email: "info@prsint.fr"
}
};
