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
    title: "PRS International",
    description: "",
    button: "Saber más"
  },

  about: {
    title: "La experiencia francesa en exportación, al servicio de los profesionales exigentes.",
    desc: "",
    overlayTitle: "Rendimiento,\nCalidad y\nFiabilidad",
    stats: {
      years: "Años de experiencia",
      projects: 25
    },

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
    description: "Con décadas de experiencia en el sector, nuestro equipo utiliza métodos comprobados y logística moderna para garantizar productos conformes, rastreables y entregados puntualmente — siempre.",
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
    pageTitle: "",
    intro: `Con más de 25 años de experiencia directa en ventas internacionales y suministro industrial, PRS International se fundó sobre una base sólida de conocimiento del mercado y saber hacer operativo. Aplicamos décadas de prácticas comprobadas para ofrecer soluciones inteligentes, fiables y listas para exportar, adaptadas a mercados de alto crecimiento.<br/><br/>

Operamos con un enfoque claro: precios competitivos, abastecimiento confiable, logística fluida y comunicación ágil. Nuestro compromiso no es hacer promesas vacías, sino entregar resultados constantes — con transparencia, rendimiento y eficacia en cada etapa.<br/><br/>

Trabajamos en estrecha colaboración con fabricantes de confianza en Europa, proveedores conformes en Asia y transitarios especializados en envíos hacia Oriente Medio y África. Nuestra prioridad es simple: Garantizar productos fiables, entregas puntuales, documentación completa — y siempre los mejores precios posibles.<br/><br/>`,
    sections: networkSections
  },
  featureHero: {
    eyebrow: "La energía no tiene fronteras. La experiencia lleva una firma.",
    title: "Todo comienza con una exigencia: el dominio del detalle técnico, perfeccionado en Francia.\n En PRS International, no solo enviamos material eléctrico; llevamos una promesa de fiabilidad a escala mundial."
  },

  footer: {
    bannerTitleLine1: "Proveedores de productos innovadores y fiables",
    bannerTitleLine2: "PRS International",
    email: "info@prsint.fr",
    about: "Sobre Nosotros",
    services: "Nuestros Servicios",
    logoAlt: "PRS International",
    contact: "Contáctenos"
  },
  contact: {
  title: "Contáctenos",
  subtitle: "",
  description:
    "¿Desea obtener más información sobre alguno de nuestros productos? \n ¿Tiene preguntas sobre un pedido en curso? \n Nuestro equipo está a su disposición — no dude en escribirnos.",
  emailLabel: "info@prsint.fr",
  form: {
    name: "Nombre",
    phone: "Teléfono",
    email: "Correo electrónico",
    subject: "Asunto",
    message: "¿Cómo podemos ayudarle? No dude en ponerse en contacto con nosotros.",
    submit: "Enviar",
  },

  }
};
