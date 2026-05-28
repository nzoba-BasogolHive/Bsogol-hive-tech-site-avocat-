export type Lang = "fr" | "en";

export type ServiceData = {
  slug: string;
  heroImage: string;
  accentImage: string;
  fr: ServiceContent;
  en: ServiceContent;
};

export type ServiceContent = {
  title: string;
  subtitle: string;
  description: string;
  introduction: string;
  expertise: string[];
  stats: { number: string; label: string }[];
  sections: { title: string; text: string }[];
  process: { step: string; title: string; text: string }[];
};

export const servicesData: Record<string, ServiceData> = {
  "droit-penal": {
    slug: "droit-penal",
    heroImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80",
    accentImage:
      "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?w=900&q=80",

    fr: {
      title: "Droit pénal",
      subtitle: "Défense & protection juridique",
      description:
        "Une défense pénale rigoureuse pour protéger vos droits à chaque étape de la procédure.",
      introduction:
        "Nous accompagnons les particuliers et les entreprises dans les procédures pénales, de la garde à vue jusqu’au jugement.",
      expertise: [
        "Garde à vue",
        "Comparution immédiate",
        "Crimes et délits",
        "Défense des victimes",
        "Contentieux pénal",
        "Assistance devant les juridictions",
      ],
      stats: [
        { number: "450+", label: "Affaires traitées" },
        { number: "25+", label: "Ans d’expérience" },
        { number: "98%", label: "Clients satisfaits" },
      ],
      sections: [
        {
          title: "Défense stratégique",
          text:
            "Chaque dossier pénal nécessite une analyse précise des faits, des preuves et de la procédure afin de construire une défense solide.",
        },
        {
          title: "Accompagnement complet",
          text:
            "Notre équipe vous assiste avant, pendant et après l’audience afin de garantir une défense cohérente et efficace.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Analyse du dossier",
          text: "Étude des faits, pièces, auditions et risques juridiques.",
        },
        {
          step: "02",
          title: "Stratégie de défense",
          text: "Construction d’une ligne de défense adaptée à votre situation.",
        },
        {
          step: "03",
          title: "Représentation",
          text: "Assistance devant les juridictions compétentes.",
        },
      ],
    },

    en: {
      title: "Criminal Law",
      subtitle: "Defense & legal protection",
      description:
        "Rigorous criminal defense to protect your rights at every stage of the procedure.",
      introduction:
        "We assist individuals and companies in criminal proceedings, from police custody to trial.",
      expertise: [
        "Police custody",
        "Immediate appearance",
        "Crimes and offenses",
        "Victim defense",
        "Criminal litigation",
        "Court representation",
      ],
      stats: [
        { number: "450+", label: "Handled cases" },
        { number: "25+", label: "Years experience" },
        { number: "98%", label: "Satisfied clients" },
      ],
      sections: [
        {
          title: "Strategic defense",
          text:
            "Every criminal case requires a precise analysis of facts, evidence, and procedure to build a strong defense.",
        },
        {
          title: "Full support",
          text:
            "Our team assists you before, during, and after the hearing to ensure consistent and effective defense.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Case analysis",
          text: "Review of facts, documents, hearings, and legal risks.",
        },
        {
          step: "02",
          title: "Defense strategy",
          text: "Building a defense approach adapted to your situation.",
        },
        {
          step: "03",
          title: "Representation",
          text: "Assistance before competent courts.",
        },
      ],
    },
  },

  "droit-civil": {
    slug: "droit-civil",
    heroImage:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=900&q=80",
    accentImage:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=900&q=80",

    fr: {
      title: "Droit civil",
      subtitle: "Protection des intérêts privés",
      description:
        "Un accompagnement clair pour vos litiges civils, contrats, responsabilités et conflits familiaux.",
      introduction:
        "Notre cabinet intervient dans tous les domaines du droit civil afin de défendre vos droits et sécuriser vos démarches.",
      expertise: [
        "Responsabilité civile",
        "Contrats",
        "Litiges civils",
        "Droit de la famille",
        "Succession",
        "Réparation du préjudice",
      ],
      stats: [
        { number: "320+", label: "Dossiers civils" },
        { number: "15+", label: "Experts mobilisés" },
        { number: "90%", label: "Résolutions favorables" },
      ],
      sections: [
        {
          title: "Gestion des litiges",
          text:
            "Nous privilégions les solutions efficaces, qu’elles soient amiables ou judiciaires.",
        },
        {
          title: "Protection des droits",
          text:
            "Nous veillons à préserver vos intérêts personnels, patrimoniaux et familiaux.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Évaluation juridique",
          text: "Analyse de votre situation et des recours disponibles.",
        },
        {
          step: "02",
          title: "Solution adaptée",
          text: "Recherche d’une solution amiable ou contentieuse.",
        },
        {
          step: "03",
          title: "Suivi du dossier",
          text: "Accompagnement jusqu’à la résolution du litige.",
        },
      ],
    },

    en: {
      title: "Civil Law",
      subtitle: "Protection of private interests",
      description:
        "Clear support for civil disputes, contracts, liability, and family matters.",
      introduction:
        "Our firm handles all areas of civil law to defend your rights and secure your legal steps.",
      expertise: [
        "Civil liability",
        "Contracts",
        "Civil disputes",
        "Family law",
        "Inheritance",
        "Compensation claims",
      ],
      stats: [
        { number: "320+", label: "Civil cases" },
        { number: "15+", label: "Experts involved" },
        { number: "90%", label: "Favorable outcomes" },
      ],
      sections: [
        {
          title: "Dispute management",
          text:
            "We prioritize effective solutions, whether amicable or judicial.",
        },
        {
          title: "Rights protection",
          text:
            "We protect your personal, financial, and family interests.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Legal assessment",
          text: "Analysis of your situation and available remedies.",
        },
        {
          step: "02",
          title: "Tailored solution",
          text: "Finding an amicable or litigation-based solution.",
        },
        {
          step: "03",
          title: "Case follow-up",
          text: "Support until the dispute is resolved.",
        },
      ],
    },
  },

  "droit-affaires": {
    slug: "droit-affaires",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
    accentImage:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&q=80",

    fr: {
      title: "Droit des affaires",
      subtitle: "Conseil stratégique aux entreprises",
      description:
        "Un accompagnement juridique pour sécuriser vos contrats, opérations et décisions d’entreprise.",
      introduction:
        "Nous conseillons les entreprises, dirigeants et investisseurs dans leurs enjeux juridiques stratégiques.",
      expertise: [
        "Contrats commerciaux",
        "Création d’entreprise",
        "Fusions-acquisitions",
        "Litiges entre associés",
        "Recouvrement",
        "Conformité juridique",
      ],
      stats: [
        { number: "600+", label: "Entreprises accompagnées" },
        { number: "40+", label: "Opérations sécurisées" },
        { number: "25+", label: "Ans d’expérience" },
      ],
      sections: [
        {
          title: "Sécurisation des affaires",
          text:
            "Nous anticipons les risques juridiques afin de protéger vos activités et vos investissements.",
        },
        {
          title: "Conseil aux dirigeants",
          text:
            "Nous accompagnons les décisions stratégiques avec une approche juridique claire et opérationnelle.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Diagnostic juridique",
          text: "Identification des risques et besoins de votre entreprise.",
        },
        {
          step: "02",
          title: "Plan d’action",
          text: "Mise en place de solutions contractuelles et juridiques.",
        },
        {
          step: "03",
          title: "Suivi stratégique",
          text: "Accompagnement dans la durée.",
        },
      ],
    },

    en: {
      title: "Business Law",
      subtitle: "Strategic legal advice for companies",
      description:
        "Legal support to secure your contracts, operations, and business decisions.",
      introduction:
        "We advise companies, executives, and investors on strategic legal matters.",
      expertise: [
        "Commercial contracts",
        "Company formation",
        "Mergers and acquisitions",
        "Shareholder disputes",
        "Debt recovery",
        "Legal compliance",
      ],
      stats: [
        { number: "600+", label: "Companies assisted" },
        { number: "40+", label: "Secured operations" },
        { number: "25+", label: "Years experience" },
      ],
      sections: [
        {
          title: "Business protection",
          text:
            "We anticipate legal risks to protect your activities and investments.",
        },
        {
          title: "Executive advisory",
          text:
            "We support strategic decisions with a clear and practical legal approach.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Legal diagnosis",
          text: "Identifying your company’s risks and needs.",
        },
        {
          step: "02",
          title: "Action plan",
          text: "Setting up contractual and legal solutions.",
        },
        {
          step: "03",
          title: "Strategic follow-up",
          text: "Long-term legal support.",
        },
      ],
    },
  },


  "droit-immobilier": {
    slug: "droit-immobilier",

    heroImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80",

    accentImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80",

    fr: {
      title: "Droit immobilier",

      subtitle: "Transactions & patrimoine immobilier",

      description:
        "Nous accompagnons particuliers, investisseurs et entreprises dans toutes les opérations et litiges immobiliers.",

      introduction:
        "Notre cabinet intervient en conseil et contentieux immobilier afin de sécuriser vos projets et défendre vos intérêts.",

      expertise: [
        "Vente immobilière",
        "Baux commerciaux",
        "Litiges locatifs",
        "Copropriété",
        "Construction",
        "Transactions immobilières",
      ],

      stats: [
        { number: "540+", label: "Dossiers immobiliers" },
        { number: "30+", label: "Experts partenaires" },
        { number: "95%", label: "Transactions sécurisées" },
      ],

      sections: [
        {
          title: "Sécurisation des opérations",
          text:
            "Nous analysons les risques juridiques liés aux ventes, acquisitions et contrats immobiliers afin de protéger vos investissements.",
        },

        {
          title: "Gestion des litiges",
          text:
            "Notre équipe intervient dans les conflits locatifs, problèmes de copropriété et contentieux liés à la construction.",
        },
      ],

      process: [
        {
          step: "01",
          title: "Analyse du dossier",
          text:
            "Étude des contrats, diagnostics et éléments juridiques liés au bien immobilier.",
        },

        {
          step: "02",
          title: "Stratégie juridique",
          text:
            "Mise en place d’une approche adaptée à votre situation immobilière.",
        },

        {
          step: "03",
          title: "Accompagnement",
          text:
            "Suivi complet jusqu’à la finalisation de l’opération ou du litige.",
        },
      ],
    },

    en: {
      title: "Real Estate Law",

      subtitle: "Real estate transactions & property",

      description:
        "We assist individuals, investors, and companies in all real estate operations and disputes.",

      introduction:
        "Our firm handles both advisory and litigation matters in real estate law to secure your projects and defend your interests.",

      expertise: [
        "Property sales",
        "Commercial leases",
        "Rental disputes",
        "Co-ownership",
        "Construction law",
        "Real estate transactions",
      ],

      stats: [
        { number: "540+", label: "Real estate cases" },
        { number: "30+", label: "Partner experts" },
        { number: "95%", label: "Secured transactions" },
      ],

      sections: [
        {
          title: "Securing operations",
          text:
            "We analyze legal risks related to sales, acquisitions, and real estate contracts to protect your investments.",
        },

        {
          title: "Dispute management",
          text:
            "Our team handles rental disputes, co-ownership conflicts, and construction-related litigation.",
        },
      ],

      process: [
        {
          step: "01",
          title: "Case analysis",
          text:
            "Review of contracts, diagnostics, and legal elements related to the property.",
        },

        {
          step: "02",
          title: "Legal strategy",
          text:
            "Implementation of an approach adapted to your real estate situation.",
        },

        {
          step: "03",
          title: "Support",
          text:
            "Complete assistance until the transaction or dispute is resolved.",
        },
      ],
    },
  },


  "droit-travail": {
    slug: "droit-travail",
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80",
    accentImage:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=80",

    fr: {
      title: "Droit du travail",
      subtitle: "Relations employeurs et salariés",
      description:
        "Un accompagnement en droit social pour prévenir et résoudre les conflits professionnels.",
      introduction:
        "Nous assistons employeurs et salariés dans toutes les problématiques liées au travail.",
      expertise: [
        "Contrats de travail",
        "Licenciement",
        "Conflits sociaux",
        "Harcèlement",
        "Négociation",
        "Contentieux prud’homal",
      ],
      stats: [
        { number: "500+", label: "Dossiers sociaux" },
        { number: "85%", label: "Accords obtenus" },
        { number: "20+", label: "Ans d’expérience" },
      ],
      sections: [
        {
          title: "Prévention des conflits",
          text:
            "Nous aidons à sécuriser les relations de travail avant que les litiges ne surviennent.",
        },
        {
          title: "Défense devant les juridictions",
          text:
            "Nous représentons nos clients dans les contentieux liés au travail.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Analyse contractuelle",
          text: "Étude des contrats, faits et obligations.",
        },
        {
          step: "02",
          title: "Négociation",
          text: "Recherche d’une solution équilibrée.",
        },
        {
          step: "03",
          title: "Contentieux",
          text: "Représentation devant les juridictions compétentes.",
        },
      ],
    },

    en: {
      title: "Employment Law",
      subtitle: "Employer and employee relations",
      description:
        "Legal support in employment law to prevent and resolve workplace conflicts.",
      introduction:
        "We assist employers and employees in all work-related legal matters.",
      expertise: [
        "Employment contracts",
        "Dismissal",
        "Workplace disputes",
        "Harassment",
        "Negotiation",
        "Employment litigation",
      ],
      stats: [
        { number: "500+", label: "Employment cases" },
        { number: "85%", label: "Settlements reached" },
        { number: "20+", label: "Years experience" },
      ],
      sections: [
        {
          title: "Conflict prevention",
          text:
            "We help secure workplace relations before disputes arise.",
        },
        {
          title: "Court defense",
          text:
            "We represent clients in employment-related litigation.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Contract analysis",
          text: "Review of contracts, facts, and obligations.",
        },
        {
          step: "02",
          title: "Negotiation",
          text: "Finding a balanced solution.",
        },
        {
          step: "03",
          title: "Litigation",
          text: "Representation before competent courts.",
        },
      ],
    },
  },

  "droit-fiscal": {
    slug: "droit-fiscal",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80",
    accentImage:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=900&q=80",

    fr: {
      title: "Droit fiscal",
      subtitle: "Fiscalité & conformité",
      description:
        "Un accompagnement fiscal pour sécuriser vos déclarations, contrôles et stratégies patrimoniales.",
      introduction:
        "Nous accompagnons particuliers et entreprises dans leurs obligations fiscales et contentieux.",
      expertise: [
        "Contrôle fiscal",
        "Optimisation fiscale",
        "Déclarations",
        "Contentieux fiscal",
        "Fiscalité d’entreprise",
        "Fiscalité patrimoniale",
      ],
      stats: [
        { number: "380+", label: "Dossiers fiscaux" },
        { number: "60%", label: "Réductions obtenues" },
        { number: "25+", label: "Ans d’expérience" },
      ],
      sections: [
        {
          title: "Conformité fiscale",
          text:
            "Nous vous aidons à respecter vos obligations fiscales tout en sécurisant vos intérêts.",
        },
        {
          title: "Défense en contrôle fiscal",
          text:
            "Nous vous assistons face à l’administration fiscale afin de défendre vos droits.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Audit fiscal",
          text: "Analyse des risques et obligations fiscales.",
        },
        {
          step: "02",
          title: "Optimisation",
          text: "Mise en place de solutions conformes et efficaces.",
        },
        {
          step: "03",
          title: "Défense",
          text: "Assistance en cas de contrôle ou contentieux.",
        },
      ],
    },

    en: {
      title: "Tax Law",
      subtitle: "Taxation & compliance",
      description:
        "Tax support to secure your filings, audits, and asset strategies.",
      introduction:
        "We assist individuals and companies with tax obligations and disputes.",
      expertise: [
        "Tax audit",
        "Tax optimization",
        "Tax filings",
        "Tax litigation",
        "Corporate tax",
        "Wealth taxation",
      ],
      stats: [
        { number: "380+", label: "Tax cases" },
        { number: "60%", label: "Reductions obtained" },
        { number: "25+", label: "Years experience" },
      ],
      sections: [
        {
          title: "Tax compliance",
          text:
            "We help you comply with tax obligations while protecting your interests.",
        },
        {
          title: "Tax audit defense",
          text:
            "We assist you against tax authorities to defend your rights.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Tax audit",
          text: "Analysis of tax risks and obligations.",
        },
        {
          step: "02",
          title: "Optimization",
          text: "Implementation of compliant and efficient solutions.",
        },
        {
          step: "03",
          title: "Defense",
          text: "Assistance during audits or disputes.",
        },
      ],
    },
  },
};