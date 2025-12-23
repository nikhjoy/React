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
    description: "",
    button: "En savoir plus"
  },
  about: {
    title: "L’expertise française en export, au service des professionnels exigeants.",
    desc: "",
    overlayTitle: "Performance,\nQualité et\nFiabilité",
    stats: {
      years: "Années d’expérience",
      projects: 25
    },

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
    description: "Fort de plusieurs décennies d’expertise sectorielle, notre équipe applique des méthodes éprouvées et une logistique moderne pour garantir des produits conformes, traçables et livrés dans les délais — à chaque fois.",
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
    eyebrow: "L’énergie n’a pas de frontières. L’expertise a une signature.",
    title: "Tout commence par une exigence : celle du détail technique maîtrisé en France.\nChez PRS International, nous ne livrons pas uniquement du matériel électrique ; nous portons une promesse de fiabilité à l’échelle mondiale."
  },
  footer: {
    bannerTitleLine1: "Fournisseurs de produits innovants et fiables",
    bannerTitleLine2: "PRS International",
    email: "info@prsint.fr",
    about: "À propos de nous",
    services: "Nos Services",
    logoAlt: "PRS International",
    contact: "Contactez-nous"
  },
  network: {
    pageTitle: "",
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
        id: "cable-trays",
        title: "Cable tray and accessories",
        description: "Pour tout ce qui concerne les accessoires ...",
        logos: [
          { src: "/assets/logos/klauke.png", alt: "Klauke" },
          { src: "/assets/logos/cembre.png", alt: "Cembre" },
          { src: "/assets/logos/te.png", alt: "TE Connectivity" },
          { src: "/assets/logos/legrand.png", alt: "Legrand" },
          { src: "/assets/logos/schneider.png", alt: "Schneider Electric" },
          { src: "/assets/logos/panduit.png", alt: "Panduit" },
          { src: "/assets/logos/sicame.png", alt: "sicame" },
          { src: "/assets/logos/Atkore.png", alt: "Atkore" },
          { src: "/assets/logos/BasorLogo.jpg", alt: "BasorLogo" },
          { src: "/assets/logos/efapel.jpg", alt: "efapel" },
          { src: "/assets/logos/courant.png", alt: "courant" },
          { src: "/assets/logos/sapiselco.png", alt: "sapiselco" },
          { src: "/assets/logos/panduit-logo.jpg", alt: "panduit-logo" },
          { src: "/assets/logos/3MLogo.jpg", alt: "3MLogo" },
          { src: "/assets/logos/PrysmianLogo.jpg", alt: "PrysmianLogo" },
          { src: "/assets/logos/CellpackLogo.jpg", alt: "CellpackLogo" },
        ]
      },
      {
        id: "automation-lv",
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
      },
    ]
  },
  network: {
    pageTitle: "Matériel de ligne de distribution électrique",
    intro: `Forte de plus de 25 ans d’expérience concrète dans la vente internationale et l’approvisionnement industriel, PRS International s’appuie sur une connaissance approfondie du marché et un savoir-faire opérationnel solide. L’entreprise met à profit des pratiques éprouvées pour proposer des solutions intelligentes, fiables et prêtes à l’export, adaptées aux marchés en forte croissance.<br/><br/>

Nous opérons avec une méthode claire : des prix compétitifs, des sources fiables, une logistique fluide et une communication réactive. Notre engagement : ne pas faire de promesses excessives, mais livrer avec constance — dans la transparence, la performance et des résultats mesurables.<br/><br/>

Nous travaillons en étroite collaboration avec des fabricants de confiance en Europe, des fournisseurs conformes en Asie, et des transitaires spécialisés dans les expéditions vers le Moyen-Orient et l’Afrique. Notre priorité est simple : Garantir des produits fiables, des livraisons ponctuelles, une documentation complète — et toujours les meilleurs prix possibles.<br/><br/>`,
    sections: networkSections
  },
  contact: {
    title: "Contact",
    subtitle: "",
    description:
      "Vous souhaitez en savoir plus sur l’un de nos produits ? \n Vous avez une question concernant une commande en cours ? \n Notre équipe est à votre écoute — n’hésitez pas à nous écrire.",
    emailLabel: "info@prsint.fr",
    form: {
      name: "Nom",
      phone: "Téléphone",
      email: "Adresse e-mail",
      subject: "Objet",
      message: "Comment pouvons-nous vous aider ? N’hésitez pas à nous contacter.",
      submit: "Envoyer",
    },
  }
};
