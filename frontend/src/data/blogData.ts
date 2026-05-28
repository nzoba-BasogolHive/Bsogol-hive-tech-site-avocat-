import imgCivil from "../assets/image (25).webp";
import imgPenal from "../assets/image3.webp";
import imgAffaire from "../assets/image (8).webp";
import imgFiscal from "../assets/image (28).webp";
import imgImmobilier from "../assets/image (26).webp";

/* ─── Types ─── */
export type Lang = "fr" | "en";

export type ArticleContent = {
  categorie: string;
  date: string;
  auteur: string;
  title: string;
  resume: string;
  citation: string;
  sections: {
    title: string;
    paragraphs: string[];
    list?: string[];
  }[];
};

export type Article = {
  slug: string;
  image: string;
  content: Record<Lang, ArticleContent>;
};

/* ─── Textes UI bilingues ─── */
export const blogTexts = {
  fr: {
    label: "Blog juridique",
    title: "Nos actualités récentes",
    allArticles: "Tous les articles",
    readArticle: "Lire l'article",
    closeArticle: "Fermer l'article",
  },
  en: {
    label: "Legal blog",
    title: "Our latest news",
    allArticles: "All articles",
    readArticle: "Read article",
    closeArticle: "Close article",
  },
};

/* ─── Articles ─── */
export const articles: Article[] = [
  {
    slug: "deportations-droits-migrants",
    image: imgPenal,
    content: {
      fr: {
        categorie: "Droit pénal",
        date: "16 févr. 2026",
        auteur: "Rédaction juridique",
        title: "Déportations controversées et droits des migrants",
        resume:
          "Des cas de renvois forcés soulèvent des questions sur les droits fondamentaux des migrants.",
        citation:
          "Des cas récents de renvois forcés mettent en lumière la nécessité de garantir les droits fondamentaux des migrants et le respect des procédures légales.",
        sections: [
          {
            title: "Contexte de la situation",
            paragraphs: [
              "Dans plusieurs régions, des migrants ont été signalés comme ayant été renvoyés de force vers le Cameroun.",
              "Ces opérations ont suscité de vives critiques de la part d'organisations de défense des droits humains et de juristes.",
            ],
          },
          {
            title: "Implications juridiques",
            paragraphs: [
              "Ces événements soulignent la nécessité de renforcer le cadre légal encadrant les expulsions et les procédures migratoires.",
              "Les autorités doivent veiller à ce que chaque action respecte les droits fondamentaux et les obligations internationales.",
            ],
          },
          {
            title: "Conseils pratiques",
            paragraphs: [
              "Les personnes confrontées à des risques d'expulsion doivent documenter chaque étape de la procédure.",
            ],
            list: [
              "Contacter rapidement un avocat spécialisé.",
              "Conserver les preuves et documents administratifs.",
              "Informer les organisations de défense des droits humains.",
              "Vérifier le respect des garanties procédurales.",
            ],
          },
        ],
      },
      en: {
        categorie: "Criminal law",
        date: "Feb. 16, 2026",
        auteur: "Legal editorial team",
        title: "Controversial deportations and migrants' rights",
        resume:
          "Forced return cases raise important questions about migrants' fundamental rights.",
        citation:
          "Recent forced return cases highlight the need to protect migrants' fundamental rights and ensure due process.",
        sections: [
          {
            title: "Background",
            paragraphs: [
              "In several regions, migrants were reportedly forcibly returned to Cameroon.",
              "These operations drew strong criticism from human rights organizations and legal professionals.",
            ],
          },
          {
            title: "Legal implications",
            paragraphs: [
              "These events show the need to strengthen the legal framework governing deportations and migration procedures.",
              "Authorities must ensure that every action complies with fundamental rights and international obligations.",
            ],
          },
          {
            title: "Practical advice",
            paragraphs: [
              "People facing deportation risks should document every step of the procedure.",
            ],
            list: [
              "Contact a specialized lawyer quickly.",
              "Keep evidence and administrative documents.",
              "Notify human rights organizations.",
              "Check whether procedural guarantees were respected.",
            ],
          },
        ],
      },
    },
  },

  {
    slug: "controle-fiscal-cameroun",
    image: imgAffaire,
    content: {
      fr: {
        categorie: "Droit des affaires",
        date: "24 janv. 2025",
        auteur: "Cabinet Bitanga & Partners",
        title: "Le contrôle fiscal au Cameroun : points clés",
        resume:
          "Une analyse pratique pour comprendre les obligations des entreprises et se préparer efficacement à une vérification fiscale.",
        citation:
          "Comprendre le contrôle fiscal permet aux entreprises d'anticiper les risques et d'éviter les sanctions.",
        sections: [
          {
            title: "Contexte du contrôle fiscal",
            paragraphs: [
              "Le contrôle fiscal permet à l'administration de vérifier la conformité des entreprises avec la législation fiscale.",
              "Il concerne les déclarations fiscales, la comptabilité, la TVA, l'impôt sur les sociétés et les retenues à la source.",
            ],
          },
          {
            title: "Se préparer à une vérification fiscale",
            paragraphs: [
              "Une entreprise bien préparée réduit le risque de redressement fiscal et facilite le déroulement du contrôle.",
            ],
            list: [
              "Maintenir une comptabilité complète et à jour.",
              "Conserver toutes les pièces justificatives.",
              "Vérifier l'exactitude des déclarations fiscales.",
              "Mettre en place des audits internes réguliers.",
            ],
          },
        ],
      },
      en: {
        categorie: "Business law",
        date: "Jan. 24, 2025",
        auteur: "Bitanga & Partners Law Firm",
        title: "Tax audit in Cameroon: key points",
        resume:
          "A practical analysis to understand business obligations and prepare effectively for a tax audit.",
        citation:
          "Understanding tax audits helps companies anticipate risks and avoid penalties.",
        sections: [
          {
            title: "Tax audit background",
            paragraphs: [
              "A tax audit allows the administration to verify whether companies comply with tax legislation.",
              "It covers tax returns, accounting records, VAT, corporate income tax, and withholding taxes.",
            ],
          },
          {
            title: "Preparing for a tax audit",
            paragraphs: [
              "A well-prepared company reduces the risk of reassessment and makes the audit process easier.",
            ],
            list: [
              "Keep complete and up-to-date accounting records.",
              "Store all supporting documents.",
              "Check the accuracy of tax returns.",
              "Set up regular internal audits.",
            ],
          },
        ],
      },
    },
  },

  {
    slug: "revenus-locatifs-cameroun",
    image: imgAffaire,
    content: {
      fr: {
        categorie: "Droit des affaires",
        date: "24 janv. 2025",
        auteur: "Cabinet Bitanga & Partners",
        title: "Imposition des revenus locatifs au Cameroun",
        resume:
          "Comprendre la fiscalité des revenus locatifs pour anticiper ses obligations et éviter les sanctions.",
        citation:
          "Les revenus locatifs doivent être déclarés correctement afin d'éviter les pénalités et redressements fiscaux.",
        sections: [
          {
            title: "Contexte fiscal des revenus locatifs",
            paragraphs: [
              "Les revenus générés par la location de biens immobiliers au Cameroun sont soumis à une imposition spécifique.",
              "La fiscalité peut varier selon la nature du bien et le statut du propriétaire.",
            ],
          },
          {
            title: "Obligations fiscales des propriétaires",
            paragraphs: [
              "Les propriétaires doivent respecter leurs obligations déclaratives et conserver les justificatifs nécessaires.",
            ],
            list: [
              "Déclarer tous les revenus locatifs.",
              "Conserver les justificatifs de loyers et charges.",
              "Payer les impôts dans les délais légaux.",
              "Consulter un spécialiste en cas de doute.",
            ],
          },
        ],
      },
      en: {
        categorie: "Business law",
        date: "Jan. 24, 2025",
        auteur: "Bitanga & Partners Law Firm",
        title: "Taxation of rental income in Cameroon",
        resume:
          "Understanding rental income taxation helps anticipate obligations and avoid penalties.",
        citation:
          "Rental income must be properly declared to avoid tax penalties and reassessments.",
        sections: [
          {
            title: "Tax background of rental income",
            paragraphs: [
              "Income generated from renting property in Cameroon is subject to specific taxation.",
              "The tax treatment may vary depending on the type of property and the owner's status.",
            ],
          },
          {
            title: "Tax obligations of property owners",
            paragraphs: [
              "Property owners must comply with reporting obligations and keep the necessary supporting documents.",
            ],
            list: [
              "Declare all rental income.",
              "Keep rent and expense records.",
              "Pay taxes within legal deadlines.",
              "Consult a specialist when in doubt.",
            ],
          },
        ],
      },
    },
  },

  {
    slug: "controle-fiscal-douala",
    image: imgFiscal,
    content: {
      fr: {
        categorie: "Droit fiscal",
        date: "02 mai 2025",
        auteur: "Expert fiscal",
        title: "Comprendre le contrôle fiscal : conseils pratiques",
        resume:
          "Stratégies fiscales pour les PME et entrepreneurs à Douala face à un audit fiscal.",
        citation:
          "Une bonne préparation permet de mieux gérer un contrôle fiscal et de réduire les risques de sanctions.",
        sections: [
          {
            title: "Contexte et importance du contrôle fiscal",
            paragraphs: [
              "Le contrôle fiscal permet à l'administration de vérifier la conformité des entreprises et entrepreneurs avec leurs obligations fiscales.",
              "À Douala, les PME et entrepreneurs doivent anticiper les demandes de l'administration fiscale.",
            ],
          },
          {
            title: "Se préparer efficacement",
            paragraphs: [
              "Une préparation rigoureuse améliore la coopération avec l'administration fiscale.",
            ],
            list: [
              "Maintenir une comptabilité claire.",
              "Vérifier les déclarations fiscales.",
              "Former le personnel comptable.",
              "Effectuer des audits internes réguliers.",
            ],
          },
        ],
      },
      en: {
        categorie: "Tax law",
        date: "May 02, 2025",
        auteur: "Tax expert",
        title: "Understanding tax audits: practical advice",
        resume:
          "Tax strategies for SMEs and entrepreneurs in Douala facing a tax audit.",
        citation:
          "Good preparation helps manage a tax audit and reduce the risk of penalties.",
        sections: [
          {
            title: "Background and importance of tax audits",
            paragraphs: [
              "A tax audit allows the administration to verify whether companies and entrepreneurs comply with their tax obligations.",
              "In Douala, SMEs and entrepreneurs must anticipate requests from the tax administration.",
            ],
          },
          {
            title: "Preparing effectively",
            paragraphs: [
              "Careful preparation improves cooperation with the tax administration.",
            ],
            list: [
              "Maintain clear accounting records.",
              "Check tax returns.",
              "Train accounting staff.",
              "Carry out regular internal audits.",
            ],
          },
        ],
      },
    },
  },

  {
    slug: "droits-locataires-cameroun",
    image: imgImmobilier,
    content: {
      fr: {
        categorie: "Droit immobilier",
        date: "15 mars 2025",
        auteur: "Cabinet Bitanga & Partners",
        title: "Droits et obligations des locataires au Cameroun",
        resume:
          "Tout ce que vous devez savoir sur vos droits en tant que locataire et les recours disponibles en cas de litige.",
        citation:
          "Connaître ses droits en matière de bail protège le locataire contre les abus et facilite la résolution des litiges.",
        sections: [
          {
            title: "Le contrat de bail",
            paragraphs: [
              "Le contrat de bail est le document fondamental qui régit la relation entre le bailleur et le locataire.",
              "Il doit préciser la durée, le montant du loyer, les charges et les conditions de résiliation.",
            ],
          },
          {
            title: "Recours en cas de litige",
            paragraphs: [
              "En cas de désaccord, le locataire dispose de plusieurs voies de recours légales.",
            ],
            list: [
              "Saisir le tribunal de première instance compétent.",
              "Recourir à la médiation ou à la conciliation.",
              "Contacter une association de défense des locataires.",
              "Consulter un avocat spécialisé en droit immobilier.",
            ],
          },
        ],
      },
      en: {
        categorie: "Property law",
        date: "Mar. 15, 2025",
        auteur: "Bitanga & Partners Law Firm",
        title: "Tenants' rights and obligations in Cameroon",
        resume:
          "Everything you need to know about your rights as a tenant and available remedies in case of dispute.",
        citation:
          "Knowing your tenancy rights protects tenants from abuse and facilitates dispute resolution.",
        sections: [
          {
            title: "The lease agreement",
            paragraphs: [
              "The lease agreement is the fundamental document governing the relationship between landlord and tenant.",
              "It must specify the duration, rent amount, charges, and termination conditions.",
            ],
          },
          {
            title: "Remedies in case of dispute",
            paragraphs: [
              "In case of disagreement, tenants have several legal avenues available.",
            ],
            list: [
              "File a claim with the competent court of first instance.",
              "Use mediation or conciliation.",
              "Contact a tenant rights association.",
              "Consult a lawyer specialising in property law.",
            ],
          },
        ],
      },
    },
  },

  {
    slug: "droit-travail-licenciement",
    image: imgCivil,
    content: {
      fr: {
        categorie: "Droit du travail",
        date: "10 avr. 2025",
        auteur: "Cabinet Bitanga & Partners",
        title: "Licenciement abusif : comment se défendre ?",
        resume:
          "Comprendre les conditions d'un licenciement légal et les recours disponibles pour les salariés lésés.",
        citation:
          "Tout salarié licencié sans motif réel et sérieux a droit à une indemnisation et peut saisir les juridictions compétentes.",
        sections: [
          {
            title: "Qu'est-ce qu'un licenciement abusif ?",
            paragraphs: [
              "Un licenciement est qualifié d'abusif lorsqu'il est prononcé sans motif valable ou en violation des procédures légales.",
              "Le Code du travail camerounais encadre strictement les conditions dans lesquelles un employeur peut mettre fin à un contrat.",
            ],
          },
          {
            title: "Les recours possibles",
            paragraphs: [
              "Le salarié dispose de plusieurs moyens pour contester un licenciement jugé injuste.",
            ],
            list: [
              "Saisir l'inspecteur du travail dans les délais.",
              "Engager une procédure devant le tribunal du travail.",
              "Demander une médiation entre les parties.",
              "Consulter un avocat spécialisé en droit social.",
            ],
          },
        ],
      },
      en: {
        categorie: "Labour law",
        date: "Apr. 10, 2025",
        auteur: "Bitanga & Partners Law Firm",
        title: "Unfair dismissal: how to defend yourself?",
        resume:
          "Understanding the conditions for a lawful dismissal and the remedies available to affected employees.",
        citation:
          "Any employee dismissed without valid reason is entitled to compensation and may bring a claim before the competent courts.",
        sections: [
          {
            title: "What is unfair dismissal?",
            paragraphs: [
              "A dismissal is considered unfair when it is made without a valid reason or in violation of legal procedures.",
              "The Cameroonian Labour Code strictly governs the conditions under which an employer may terminate a contract.",
            ],
          },
          {
            title: "Available remedies",
            paragraphs: [
              "Employees have several means to challenge a dismissal they consider unjust.",
            ],
            list: [
              "File a complaint with the labour inspector within the deadline.",
              "Bring proceedings before the labour tribunal.",
              "Request mediation between the parties.",
              "Consult a lawyer specialising in employment law.",
            ],
          },
        ],
      },
    },
  },
];