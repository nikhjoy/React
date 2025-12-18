import { networkSections } from "./networkSections";
import eiffel from "../assets/images/eiffel.svg";
import engineering from "../assets/images/engineering.svg";
import store from "../assets/images/store.svg";

export default {
  header: {
    navHome: "Accueil",
    navAbout: "À propos",
    navServices: "Services",
    navNetwork: "Réseau",
    navContact: "Contact",
    logoAlt: "PRS International"
  },
  hero: {
    title: "PRS International",
    description: "PRS International est une société ...",
    button: "En savoir plus"
  },
  about: {
    title: "L’expertise française en export, au service des professionnels exigeants.",
    desc: "",
    overlayTitle: "Performance,\nQualité et\nFiabilité",
    stats: { countries: 10, projects: 35 },

    // new structured details (French)
    details: {
      labels: {
        who: "Qui sommes-nous ?",
        mission: "Notre mission",
        strengths: "Nos forces",
        vision: "Notre vision",
        values: "Nos valeurs"
      },

      who: `PRS International est une société française fondée avec une mission claire : faciliter, structurer et sécuriser l’exportation de matériel électrique industriel vers les marchés en forte croissance. Notre ambition est de devenir une plateforme de confiance, capable de relier les fabricants rigoureux d’Europe et d’Asie à une clientèle exigeante implantée principalement au Moyen-Orient et en Afrique.`,

      mission: `Mettre à disposition des industriels et des acteurs publics ou privés des solutions d’approvisionnement complètes, fiables et conformes aux exigences internationales. Grâce à notre maîtrise des flux logistiques et réglementaires, nous simplifions les processus d’achat pour nos clients, tout en assurant un haut niveau de qualité sur les produits livrés.`,

      strengths: [
        "Une base opérationnelle en France, au cœur de l’Union européenne",
        "Un réseau étendu de contacts industriels en Europe et en Asie, sélectionnés pour leur sérieux, leur savoir-faire et leur capacité à produire selon les normes export",
        "Une connaissance approfondie des attentes et contraintes des marchés du Moyen-Orient et d’Afrique : délais, certifications, logistique, documentation, etc."
      ],

      vision: `Agir comme un trait d’union entre les mondes industriels européens/asiatiques et les besoins spécifiques des pays en développement ou en modernisation. PRS International ne vend pas simplement du matériel : elle conçoit des solutions exportables, personnalisées, évolutives et pérennes.`,

      values: [
        "Fiabilité : des engagements tenus, à toutes les étapes",
        "Transparence : une gestion claire et traçable",
        "Réactivité : des réponses rapides, des délais respectés",
        "Conformité : des produits et procédures toujours en règle"
      ]
    }
  },
  services: {
    title: "⚙️ Nos activités",
    description: "Notre équipe expérimentée de spécialistes utilise une technologie de pointe pour garantir des livraisons conformes et ponctuelles.",
    intro: "",
    cards: [
      {
        icon: eiffel,
        title: "Fourniture de matériel électrique",
        desc: "PRS International propose une offre complète de produits électriques industriels, sélectionnés pour leur fiabilité et conformité.",
        link: "/services"
      },
      {
        icon: engineering,
        title: "Logistique & conformité export",
        desc: "Préparation des documents, coordination des transporteurs et suivi des expéditions.",
        link: "/services"
      },
      {
        icon: store,
        title: "Représentation commerciale internationale",
        desc: "Mise en relation avec des fabricants de confiance et appui aux appels d'offres.",
        link: "/services"
      }
    ],
    long: [
      {
        heading: "1. Fourniture de matériel électrique",
        paragraph:
          "PRS International propose une offre complète de produits électriques industriels, sélectionnés pour leur fiabilité, leur conformité aux normes internationales et leur disponibilité à des prix compétitifs. Nous adaptons continuellement notre catalogue aux besoins spécifiques de nos clients dans les secteurs de l’énergie, du bâtiment, de l’industrie et des infrastructures.",
        bullets: [
          "Câbles électriques : basse tension (BT), moyenne tension (MT), haute tension (HT), câbles armés, souterrains, photovoltaïques, de commande, de contrôle, instrumentation, câbles ignifugés",
          "Systèmes de cheminement : conduits métalliques rigides (EMT, GI), gaines flexibles, chemins de câbles perforés ou grillagés, fixations, colliers, tiges filetées, accessoires de suspension",
          "Accessoires de câblage : presse-étoupes, embouts, cosses, manchons, borniers, connecteurs, kits de jonction et de terminaison",
          "Tableaux et distribution : coffrets modulaires, armoires industrielles, disjoncteurs, interrupteurs différentiels, contacteurs, relais, compteurs",
          "Équipements de puissance : transformateurs secs ou immergés, cellules MT, jeux de barres, batteries de condensateurs",
          "Mise à la terre et protection : piquets de terre, câbles nus, tresses de masse, parafoudres, paratonnerres, connecteurs de terre",
          "Éclairage technique : projecteurs LED, éclairages ATEX, balises de sécurité, éclairage d’urgence",
          "Outillage spécialisé : pinces, testeurs, dénudeurs, outils de sertissage, accessoires d’installation"
        ]
      },

      {
        heading: "2. Logistique & conformité export",
        paragraph:
          "Nous prenons en charge la préparation complète de la documentation export et la coordination logistique, afin de garantir des expéditions conformes, transparentes et ponctuelles.",
        bullets: [
          "Préparation des documents : factures, certificats d’origine, listes de colisage, fiches techniques, attestations de conformité",
          "Coordination avec transitaires (maritime, aérien, routier)",
          "Suivi en temps réel des expéditions et mise à jour proactive des délais"
        ]
      },

      {
        heading: "3. Représentation commerciale internationale",
        paragraph:
          "PRS International agit comme partenaire commercial pour connecter les clients à des fabricants fiables et répondre efficacement aux besoins techniques et documentaires.",
        bullets: [
          "Mise en relation avec des fabricants fiables en Europe et en Asie",
          "Réponses structurées aux appels d’offres (produits, documents, prix)",
          "Appui ponctuel local sur demande (visites, documentation, échantillons)"
        ]
      }
    ]
  },
  featureHero: {
    eyebrow: "POWER, OIL & GAS",
    title: "Précision dans la démonstration de\nl'excellence dans l'énergie..."
  },
  footer: {
    bannerTitleLine1: "Fournisseurs de services innovants et fiables",
    bannerTitleLine2: "PRS International",
    email: "info@prsint.fr",
    about: "À propos de nous",
    services: "Nos Services",
    logoAlt: "PRS International"
  },
  network: {
    pageTitle: "Matériel de ligne de distribution électrique",
    intro: "En matière de ligne de distribution électrique, nous collaborons avec des partenaires de confiance, sélectionnés pour leur expertise technique et la conformité de leurs équipements aux normes les plus strictes.",
    sections: [
      {
        id: "distribution",
        title: "Matériel de ligne de distribution électrique",
        description: "En matière de ligne de distribution électrique, nous collaborons avec des partenaires de confiance, sélectionnés pour leur expertise technique et la conformité de leurs équipements aux normes les plus strictes.",
        logos: [
          { src: "/assets/logos/retis.png", alt: "Retis Solutions" },
          { src: "/assets/logos/sicame.png", alt: "Sicame Group" },
          { src: "/assets/logos/ensto.png", alt: "ENSTO" },
          { src: "/assets/logos/iberapa.png", alt: "Iberapa" },
          { src: "/assets/logos/michaud.png", alt: "Michaud" },
          { src: "/assets/logos/niled.png", alt: "NILED" }
          // add as many as needed
        ]
      },
      {
        id: "cables",
        title: "Cables électriques",
        description: "Nous sélectionnons pour nos câbles électriques des partenaires leaders...",
        logos: [
          { src: "/assets/logos/generalcavi.png", alt: "General Cavi" },
          { src: "/assets/logos/prysmian.png", alt: "Prysmian" },
          { src: "/assets/logos/solidal.png", alt: "Solidal" }
        ]
      },
      {
        id: "accessories",
        title: "Accessoires / Cheminements de câblage",
        description: "Pour tout ce qui concerne les accessoires ...",
        logos: [
          { src: "/assets/logos/klauke.png", alt: "Klauke" },
          { src: "/assets/logos/cembre.png", alt: "Cembre" },
          { src: "/assets/logos/te.png", alt: "TE Connectivity" },
          { src: "/assets/logos/legrand.png", alt: "Legrand" },
          { src: "/assets/logos/schneider.png", alt: "Schneider Electric" },
          { src: "/assets/logos/panduit.png", alt: "Panduit" }
        ]
      }
    ]
  },
  network: {
    pageTitle: "Matériel de ligne de distribution électrique",
     intro: `<b>Forte de plus de 25 ans d’expérience terrain en vente internationale et en direction d’entreprise, PRS International repose sur des bases solides alliant savoir-faire industriel et connaissance approfondie des marchés.</b><br/><br/>

Son fondateur a exercé des responsabilités commerciales dans des secteurs variés — du négoce B2B à l’exportation de matériel électrique vers la région MENA — et a dirigé plusieurs sociétés spécialisées dans l’approvisionnement technique, notamment plus de dix années dans le Golfe.<br/><br/>

Cette expérience guide notre méthode : des prix compétitifs, des sources fiables, une logistique fluide et une communication directe. Nos clients nous choisissent non pas pour des promesses, mais pour des résultats concrets, une transparence totale et une fiabilité constante.<br/><br/>

PRS International collabore étroitement avec :<br/>

• Des fabricants reconnus en Europe (France, Pologne, Allemagne, etc.)<br/>

• Des fournisseurs asiatiques respectant les normes techniques export<br/>

• Des transitaires spécialisés dans les expéditions vers le Moyen-Orient et l’Afrique<br/><br/>

<b>Notre priorité : </b> garantir des produits fiables, des livraisons ponctuelles, une documentation complète et conforme — et surtout, les meilleurs prix du marché.`,
    sections: networkSections
  },
  contact: {

  }
};
