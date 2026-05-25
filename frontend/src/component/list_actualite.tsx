import { useState, useEffect } from "react";
import { FaCalendarAlt, FaUser, FaArrowRight, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageTransition from "../component/PageTransition";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
interface Article {
  id: number;
  slug: string;
  categorie: string;
  date: string;
  auteur: string;
  titre: string;
  extrait: string;
  citation: string;
  contenu: string[];
  ctaQuestion: string;
  image: string;
  featured?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// DONNÉES — 10 articles avec contenu complet
// ─────────────────────────────────────────────────────────────────────────────
const articles: Article[] = [
  {
    id: 1,
    slug: "protection-donnees-personnelles",
    categorie: "Droit Des Affaires",
    date: "15 février 2025",
    auteur: "Maître Alexandre Petit",
    titre: "Protection des données personnelles : les obligations des entreprises",
    extrait: "Le RGPD impose des obligations strictes aux entreprises. Tour d'horizon des principales mesures à mettre en place pour assurer la conformité.",
    citation: "Le RGPD impose des obligations strictes aux entreprises. Tour d'horizon des principales mesures à mettre en place.",
    contenu: [
      "Notre cabinet d'avocats suit de près les évolutions législatives et jurisprudentielles dans ce domaine. Les implications pratiques pour nos clients sont significatives, et il est essentiel de comprendre les mécanismes juridiques en jeu pour mieux défendre vos intérêts.",
      "Les professionnels du droit et les justiciables doivent adapter leurs pratiques aux nouvelles règles en vigueur. Une analyse approfondie de la situation permet d'identifier les risques et les opportunités que présente cette évolution juridique.",
      "Nos avocats spécialisés sont à votre disposition pour vous accompagner dans cette démarche et vous proposer des solutions adaptées à votre situation personnelle ou professionnelle.",
    ],
    ctaQuestion: "Vous avez une question sur ce sujet ?",
    image: "/src/assets/image (24).webp",
    featured: true,
  },
  {
    id: 2,
    slug: "degats-ouragan",
    categorie: "Droit Civil",
    date: "10 janvier 2025",
    auteur: "Maître Jean-Pierre Durand",
    titre: "Dégâts causés par l'ouragan : comment obtenir une indemnisation ?",
    extrait: "Des informations précieuses sur les demandes d'indemnisation pour dommages causés par des catastrophes naturelles, avec les démarches à suivre.",
    citation: "Consultez des informations précieuses sur les demandes d'indemnisation pour dommages causés par un ouragan, avec la possibilité de contacter directement un avocat.",
    contenu: [
      "Les catastrophes naturelles, notamment les ouragans, peuvent causer des dommages considérables aux biens immobiliers et mobiliers. La procédure d'indemnisation implique plusieurs étapes clés qu'il convient de respecter scrupuleusement pour obtenir une réparation juste et intégrale.",
      "Il est impératif de déclarer le sinistre à votre assureur dans les délais légaux prévus par votre contrat, généralement cinq à dix jours ouvrés. Un constat amiable précis, accompagné de photos et de tout document justificatif, renforcera considérablement votre dossier.",
      "En cas de litige avec votre compagnie d'assurance ou si l'indemnisation proposée ne couvre pas l'intégralité de votre préjudice, notre cabinet peut vous accompagner pour contester la décision et défendre efficacement vos intérêts devant les juridictions compétentes.",
    ],
    ctaQuestion: "Vous avez subi des dégâts et souhaitez être indemnisé ?",
    image: "/src/assets/clay-banks-BgjiQXpPZIY-unsplash.webp",
  },
  {
    id: 3,
    slug: "controle-fiscal",
    categorie: "Droit Fiscal",
    date: "02 février 2021",
    auteur: "Maître Alexandre Petit",
    titre: "Contrôle fiscal : comment bien se préparer et protéger ses intérêts",
    extrait: "Le contrôle fiscal permet à l'administration de vérifier la conformité des déclarations. Une bonne préparation est essentielle pour éviter les sanctions.",
    citation: "Le contrôle fiscal permet à l'administration de vérifier la conformité des déclarations fiscales. Une bonne préparation est essentielle pour éviter les sanctions et sécuriser votre situation.",
    contenu: [
      "Le contrôle fiscal est une procédure par laquelle l'administration vérifie l'exactitude des déclarations effectuées par les contribuables, qu'il s'agisse de particuliers ou d'entreprises. Cette procédure peut porter sur différents impôts, notamment l'impôt sur le revenu, la TVA ou l'impôt sur les sociétés.",
      "Lorsqu'un contrôle est engagé, il est important de connaître ses droits et obligations. Le contribuable dispose notamment du droit d'être informé des vérifications effectuées et de présenter ses observations face aux conclusions de l'administration fiscale.",
      "L'accompagnement par un avocat en droit fiscal permet d'anticiper les risques, de préparer les éléments justificatifs nécessaires et de défendre efficacement vos intérêts en cas de redressement fiscal ou de contentieux avec l'administration.",
    ],
    ctaQuestion: "Vous faites l'objet d'un contrôle fiscal ?",
    image: "/src/assets/image (27).webp",
  },
  {
    id: 4,
    slug: "investissement-locatif",
    categorie: "Droit Immobilier",
    date: "06 janvier 2021",
    auteur: "Maître Alexandre Petit",
    titre: "Investissement locatif : les pièges juridiques à éviter",
    extrait: "L'investissement immobilier peut être très rentable, mais certaines erreurs juridiques peuvent entraîner des litiges coûteux pour les propriétaires.",
    citation: "L'investissement immobilier peut être très rentable, mais certaines erreurs juridiques peuvent entraîner des litiges coûteux pour les propriétaires.",
    contenu: [
      "L'investissement locatif attire de nombreux particuliers souhaitant constituer un patrimoine et générer des revenus complémentaires. Toutefois, cette opération nécessite une bonne connaissance du cadre juridique afin d'éviter certains risques.",
      "La rédaction du bail, le respect des obligations du bailleur, la gestion des loyers impayés ou encore les règles relatives aux travaux et aux charges locatives sont autant d'éléments pouvant donner lieu à des contentieux entre propriétaires et locataires.",
      "Le recours à un avocat spécialisé en droit immobilier permet d'anticiper ces difficultés, de sécuriser les opérations immobilières et de défendre vos intérêts en cas de litige devant les juridictions compétentes.",
    ],
    ctaQuestion: "Vous avez un projet immobilier ou un litige locatif ?",
    image: "/src/assets/image (26).webp",
  },
  {
    id: 5,
    slug: "garde-a-vue",
    categorie: "Droit Pénal",
    date: "20 mars 2018",
    auteur: "Maître Alexandre Petit",
    titre: "La garde à vue : comprendre vos droits et les étapes de la procédure",
    extrait: "Toute personne placée en garde à vue dispose de droits fondamentaux : être assistée par un avocat, être informée des faits reprochés.",
    citation: "Toute personne placée en garde à vue dispose de droits fondamentaux : être assistée par un avocat, être informée des faits reprochés et pouvoir prévenir un proche.",
    contenu: [
      "La garde à vue constitue une mesure privative de liberté décidée par les autorités judiciaires dans le cadre d'une enquête pénale. Elle permet aux enquêteurs de procéder aux investigations nécessaires lorsqu'il existe des raisons plausibles de soupçonner qu'une personne a commis ou tenté de commettre une infraction.",
      "Durant cette procédure, la personne concernée bénéficie de garanties essentielles destinées à protéger ses droits. Elle peut notamment être assistée par un avocat dès le début de la mesure, consulter certains éléments du dossier et faire prévenir un proche ou son employeur.",
      "L'intervention d'un avocat pénaliste est souvent déterminante afin de s'assurer du respect de la procédure et de préparer efficacement la défense du justiciable. Notre cabinet accompagne ses clients à chaque étape afin de préserver leurs droits et défendre leurs intérêts devant les juridictions compétentes.",
    ],
    ctaQuestion: "Vous êtes concerné par une procédure pénale ?",
    image: "/src/assets/image (25).webp",
  },
  {
    id: 6,
    slug: "licenciement-economique",
    categorie: "Droit du Travail",
    date: "12 avril 2021",
    auteur: "Maître Alexandre Petit",
    titre: "Licenciement économique : comprendre les droits des salariés",
    extrait: "Le licenciement économique doit répondre à des conditions strictes prévues par le droit du travail afin de garantir la protection des salariés.",
    citation: "Le licenciement économique doit répondre à des conditions strictes prévues par le droit du travail afin de garantir la protection des salariés.",
    contenu: [
      "Le licenciement économique intervient lorsqu'une entreprise rencontre des difficultés économiques, des mutations technologiques ou une réorganisation nécessaire à la sauvegarde de sa compétitivité. Cependant, cette procédure est strictement encadrée par le droit du travail.",
      "L'employeur doit notamment respecter plusieurs obligations : informer les représentants du personnel, rechercher des solutions de reclassement et justifier la réalité des difficultés économiques rencontrées par l'entreprise.",
      "Un avocat spécialisé en droit du travail peut accompagner les salariés comme les employeurs afin de vérifier la régularité de la procédure, contester un licenciement abusif ou sécuriser juridiquement les décisions prises par l'entreprise.",
    ],
    ctaQuestion: "Vous êtes confronté à un licenciement ou à un litige avec votre employeur ?",
    image: "/src/assets/image (28).webp",
  },
  {
    id: 7,
    slug: "defense-penale",
    categorie: "Droit Pénal",
    date: "08 juin 2022",
    auteur: "Maître Jean-Pierre Durand",
    titre: "Défense pénale : les clés pour préparer votre dossier",
    extrait: "Une défense pénale efficace repose sur la collecte rigoureuse des preuves, la compréhension des charges et une stratégie d'argumentation solide.",
    citation: "Une défense pénale de qualité commence bien avant l'audience : elle se construit dès les premières heures suivant la mise en cause.",
    contenu: [
      "Faire face à une mise en cause pénale est une épreuve stressante qui exige une réaction rapide et méthodique. La première étape consiste à rassembler tous les éléments factuels et documentaires susceptibles de contredire les accusations ou d'atténuer la responsabilité du justiciable.",
      "La stratégie de défense doit être construite en tenant compte de la nature de l'infraction reprochée, des preuves disponibles et du profil du client. Chaque dossier est unique et nécessite une analyse approfondie avant de choisir l'approche la plus adaptée : contestation des faits, atténuation de la responsabilité ou négociation.",
      "Notre cabinet d'avocats pénalistes accompagne ses clients à chaque étape de la procédure, de la garde à vue jusqu'au jugement, en veillant au strict respect de leurs droits fondamentaux et en défendant leurs intérêts avec rigueur et conviction.",
    ],
    ctaQuestion: "Vous faites l'objet de poursuites pénales ?",
    image: "/src/assets/juneteenth-celebration-with-symbolic-representation-end-slavery-united-states.webp",
  },
  {
    id: 8,
    slug: "blessures-corporelles",
    categorie: "Droit Civil",
    date: "15 septembre 2022",
    auteur: "Maître Alexandre Petit",
    titre: "Blessures corporelles : obtenir la juste réparation de votre préjudice",
    extrait: "Victime d'un accident ? La loi vous permet d'obtenir une réparation intégrale de vos préjudices corporels, moraux et économiques.",
    citation: "La réparation d'un préjudice corporel doit être intégrale : physique, moral, professionnel et économique. Aucun aspect ne doit être négligé.",
    contenu: [
      "Les accidents de la route, du travail ou de la vie quotidienne peuvent entraîner des blessures aux conséquences durables, voire permanentes. La loi prévoit un droit à réparation intégrale du préjudice subi, couvrant les aspects physiques, moraux, professionnels et économiques.",
      "L'évaluation précise du préjudice est une étape déterminante. Elle nécessite l'intervention d'un médecin expert et d'un avocat spécialisé capable d'analyser chaque poste de préjudice : perte de revenus, frais médicaux, pretium doloris, préjudice esthétique et d'agrément.",
      "Face aux assureurs dont l'objectif est de minimiser les indemnités, l'assistance d'un avocat expérimenté est indispensable pour obtenir une offre d'indemnisation juste et complète. Notre cabinet défend vos intérêts avec détermination tout au long de la procédure.",
    ],
    ctaQuestion: "Vous êtes victime d'un accident corporel ?",
    image: "/src/assets/closeup-young-man-with-knee-injury.webp",
  },
  {
    id: 9,
    slug: "droit-immigration",
    categorie: "Droit de l'Immigration",
    date: "03 mars 2023",
    auteur: "Maître Jean-Pierre Durand",
    titre: "Droit de l'immigration : les procédures de régularisation en 2023",
    extrait: "Les voies de régularisation du séjour ont évolué. Découvrez les conditions, délais et documents requis pour sécuriser votre situation administrative.",
    citation: "La régularisation d'un titre de séjour est un parcours complexe qui nécessite une connaissance précise des textes et des pratiques administratives.",
    contenu: [
      "Les procédures de régularisation du titre de séjour ont connu d'importantes évolutions législatives ces dernières années. Les conditions d'éligibilité, les délais de traitement et les pièces justificatives requises varient selon la situation de chaque demandeur et la préfecture compétente.",
      "Parmi les principales voies de régularisation figurent la régularisation par le travail, par les liens familiaux, par la maladie ou encore par la durée de présence sur le territoire. Chaque situation est unique et doit être analysée avec précision pour identifier la procédure la plus adaptée.",
      "Notre cabinet accompagne les étrangers en situation irrégulière ou précaire dans leurs démarches de régularisation, depuis la constitution du dossier jusqu'à l'obtention du titre de séjour, en défendant leurs intérêts en cas de refus ou de recours contentieux.",
    ],
    ctaQuestion: "Vous avez besoin d'aide pour régulariser votre situation ?",
    image: "/src/assets/image (7).webp",
  },
  {
    id: 10,
    slug: "planification-succession",
    categorie: "Droit des Successions",
    date: "22 novembre 2023",
    auteur: "Maître Jean-Pierre Durand",
    titre: "Planification successorale : anticiper pour protéger vos proches",
    extrait: "Un testament bien rédigé et une planification patrimoniale anticipée permettent d'éviter les conflits familiaux et d'optimiser la transmission de vos biens.",
    citation: "Anticiper sa succession, c'est offrir à ses proches la sérénité et éviter des conflits souvent douloureux et coûteux.",
    contenu: [
      "La planification successorale consiste à organiser de son vivant la transmission de son patrimoine afin de protéger ses proches, minimiser les droits de succession et éviter les conflits familiaux. Elle repose sur plusieurs outils juridiques : testament, donation, assurance-vie ou création d'une SCI familiale.",
      "La rédaction d'un testament authentique devant notaire offre une sécurité juridique maximale et permet d'exprimer librement ses dernières volontés dans le respect des règles légales. Il est également possible d'organiser des donations de son vivant pour optimiser la transmission et bénéficier d'abattements fiscaux avantageux.",
      "Notre cabinet vous accompagne dans l'élaboration d'une stratégie successorale personnalisée, tenant compte de votre situation familiale, patrimoniale et fiscale, afin de garantir une transmission sereine et optimisée de votre patrimoine.",
    ],
    ctaQuestion: "Vous souhaitez planifier votre succession ?",
    image: "/src/assets/image (9).webp",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CATÉGORIES & COULEURS
// ─────────────────────────────────────────────────────────────────────────────
const categories = [
  "Toutes",
  "Droit Des Affaires",
  "Droit Civil",
  "Droit Fiscal",
  "Droit Immobilier",
  "Droit Pénal",
  "Droit du Travail",
  "Droit de l'Immigration",
  "Droit des Successions",
];

const categoryColor: Record<string, string> = {
  "Droit Des Affaires":      "bg-[#1b0f6b] text-white",
  "Droit Civil":             "bg-[#2d1e8e] text-white",
  "Droit Fiscal":            "bg-[#c9a84c] text-[#0a0814]",
  "Droit Immobilier":        "bg-[#1b0f6b] text-white",
  "Droit Pénal":             "bg-[#0a0814] text-white",
  "Droit du Travail":        "bg-[#2d1e8e] text-white",
  "Droit de l'Immigration":  "bg-[#c9a84c] text-[#0a0814]",
  "Droit des Successions":   "bg-[#1b0f6b] text-white",
};

// ─────────────────────────────────────────────────────────────────────────────
// MODAL ARTICLE
// ─────────────────────────────────────────────────────────────────────────────
function ArticleModal({
  article,
  onClose,
}: {
  article: Article;
  onClose: () => void;
}) {
  // fermeture clavier Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    // bloquer le scroll du body
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    /* Overlay */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: "rgba(10,8,20,0.85)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      {/* Panneau modal — stoppe la propagation du clic */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl"
        style={{ animation: "modalIn 0.35s cubic-bezier(0.22,1,0.36,1) both" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── IMAGE + BADGE catégorie ── */}
        <div className="relative overflow-hidden">
          <img
            src={article.image}
            alt={article.titre}
            className="w-full h-[200px] md:h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* badge catégorie */}
          <span
            className={`absolute bottom-4 left-5 text-[10px] font-black tracking-[0.15em] uppercase px-4 py-1.5 ${
              categoryColor[article.categorie] ?? "bg-[#1b0f6b] text-white"
            }`}
          >
            {article.categorie}
          </span>

          {/* bouton fermeture */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white transition-all duration-200"
          >
            <FaTimes size={14} />
          </button>
        </div>

        {/* ── CONTENU ── */}
        <div className="p-7 md:p-10">

          {/* META */}
          <div className="flex flex-wrap items-center gap-4 text-gray-400 text-[11px] mb-5">
            <span className="flex items-center gap-1.5">
              <FaCalendarAlt size={10} />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <FaUser size={10} />
              {article.auteur}
            </span>
          </div>

          {/* TITRE */}
          <h2
            className="text-2xl md:text-3xl font-bold text-[#0a0814] leading-[1.25] mb-5"
            style={{ fontFamily: "Garamond, serif" }}
          >
            {article.titre}
          </h2>

          {/* ligne dorée */}
          <div className="w-12 h-[2px] bg-[#c9a84c] mb-6" />

          {/* CITATION */}
          <div className="border-l-4 border-[#c9a84c] pl-5 italic text-gray-600 mb-7 text-[14px] md:text-[15px] leading-[1.75] bg-[#faf7f2] py-4 pr-4">
            {article.citation}
          </div>

          {/* TEXTE */}
          <div className="space-y-5 text-gray-700 leading-[1.9] text-[14px] md:text-[15px]">
            {article.contenu.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-9 pt-7 border-t border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p
              className="text-gray-600 text-[14px] md:text-[15px]"
              style={{ fontFamily: "Garamond, serif" }}
            >
              {article.ctaQuestion}
            </p>
            <Link
              to="/contact"
              onClick={onClose}
              className="group flex-shrink-0 flex items-center gap-3 bg-[#1b0f6b] text-white px-7 py-3 text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-[#c9a84c] hover:text-[#0a0814] transition-all duration-300"
            >
              Consulter un avocat
              <FaArrowRight
                size={10}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* keyframe inline */}
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(32px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)     scale(1);    }
        }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CARD ARTICLE
// ─────────────────────────────────────────────────────────────────────────────
function ArticleCard({
  article,
  onOpen,
}: {
  article: Article;
  onOpen: (a: Article) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(article)}
      className="group text-left flex flex-col bg-white border border-[#e8e0d5] hover:border-[#c9a84c]/40 shadow-sm hover:shadow-xl transition-all duration-400 overflow-hidden w-full"
    >
      {/* image */}
      <div className="relative overflow-hidden h-[210px]">
        <img
          src={article.image}
          alt={article.titre}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <span
          className={`absolute bottom-3 left-3 text-[10px] font-bold tracking-[0.14em] uppercase px-3 py-1 ${
            categoryColor[article.categorie] ?? "bg-[#1b0f6b] text-white"
          }`}
        >
          {article.categorie}
        </span>
      </div>

      {/* contenu */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-4 text-gray-400 text-[11px] mb-4">
          <span className="flex items-center gap-1.5">
            <FaCalendarAlt size={10} />
            {article.date}
          </span>
          <span className="flex items-center gap-1.5">
            <FaUser size={10} />
            {article.auteur}
          </span>
        </div>

        <h3
          className="text-[#0a0814] font-bold leading-[1.35] mb-3 group-hover:text-[#1b0f6b] transition-colors duration-300 text-[17px]"
          style={{ fontFamily: "Garamond, serif" }}
        >
          {article.titre}
        </h3>

        <div className="w-8 h-[2px] bg-[#c9a84c] mb-4 group-hover:w-16 transition-all duration-500" />

        <p className="text-gray-500 text-[13px] leading-[1.75] flex-1">
          {article.extrait}
        </p>

        <div className="mt-5 flex items-center gap-2 text-[#1b0f6b] text-[12px] font-bold tracking-[0.12em] uppercase">
          Lire l'article
          <FaArrowRight
            size={10}
            className="transition-transform duration-300 group-hover:translate-x-2"
          />
        </div>
      </div>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CARD FEATURED
// ─────────────────────────────────────────────────────────────────────────────
function FeaturedCard({
  article,
  onOpen,
}: {
  article: Article;
  onOpen: (a: Article) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(article)}
      className="group text-left relative overflow-hidden col-span-1 lg:col-span-2 flex flex-col md:flex-row min-h-[360px] border border-[#e8e0d5] hover:border-[#c9a84c]/40 shadow-sm hover:shadow-2xl transition-all duration-500 bg-white w-full"
    >
      {/* image */}
      <div className="relative overflow-hidden w-full md:w-1/2 h-[240px] md:h-auto flex-shrink-0">
        <img
          src={article.image}
          alt={article.titre}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
        <div className="absolute top-4 left-4 bg-[#c9a84c] text-[#0a0814] text-[9px] font-black tracking-[0.2em] uppercase px-3 py-1">
          À la une
        </div>
        <span
          className={`absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.14em] uppercase px-3 py-1 ${
            categoryColor[article.categorie] ?? "bg-[#1b0f6b] text-white"
          }`}
        >
          {article.categorie}
        </span>
      </div>

      {/* contenu */}
      <div className="flex flex-col justify-center p-8 md:p-10 flex-1">
        <div className="flex items-center gap-4 text-gray-400 text-[11px] mb-5">
          <span className="flex items-center gap-1.5">
            <FaCalendarAlt size={10} />
            {article.date}
          </span>
          <span className="flex items-center gap-1.5">
            <FaUser size={10} />
            {article.auteur}
          </span>
        </div>

        <h2
          className="text-[#0a0814] font-bold leading-[1.25] mb-4 group-hover:text-[#1b0f6b] transition-colors duration-300 text-2xl md:text-3xl"
          style={{ fontFamily: "Garamond, serif" }}
        >
          {article.titre}
        </h2>

        <div className="w-10 h-[2px] bg-[#c9a84c] mb-5 group-hover:w-20 transition-all duration-500" />

        <p className="text-gray-500 text-[14px] leading-[1.8] mb-8">
          {article.extrait}
        </p>

        <div className="inline-flex items-center gap-3 bg-[#1b0f6b] text-white text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-3 w-fit group-hover:bg-[#c9a84c] group-hover:text-[#0a0814] transition-all duration-300">
          Lire l'article complet
          <FaArrowRight
            size={10}
            className="transition-transform duration-300 group-hover:translate-x-2"
          />
        </div>
      </div>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE PRINCIPALE
// ─────────────────────────────────────────────────────────────────────────────
export default function ActualitesPage() {
  const [filtre, setFiltre] = useState("Toutes");
  const [articleOuvert, setArticleOuvert] = useState<Article | null>(null);

  const featured = articles.find((a) => a.featured) ?? null;
  const reste    = articles.filter((a) => !a.featured);

  const articlesFiltres =
    filtre === "Toutes"
      ? reste
      : reste.filter((a) => a.categorie === filtre);

  return (
    <PageTransition>
      <main className="bg-[#f4f0eb] min-h-screen">

        {/* ══ MODAL ══════════════════════════════════════════════════════ */}
        {articleOuvert && (
          <ArticleModal
            article={articleOuvert}
            onClose={() => setArticleOuvert(null)}
          />
        )}

        

        {/* ══ CONTENU ═════════════════════════════════════════════════════ */}
        <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-16 md:py-24">

          {/* ── À LA UNE ── */}
          {featured && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="block w-8 h-px bg-[#c9a84c]" />
                <p
                  className="text-[#1b0f6b] text-[10px] font-bold tracking-[0.25em] uppercase"
                  style={{ fontFamily: "Garamond, serif" }}
                >
                  Article à la une
                </p>
              </div>
              <FeaturedCard article={featured} onOpen={setArticleOuvert} />
            </div>
          )}

          {/* ── FILTRES ── */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#c9a84c]" />
              <p
                className="text-[#1b0f6b] text-[10px] font-bold tracking-[0.25em] uppercase"
                style={{ fontFamily: "Garamond, serif" }}
              >
                Filtrer par domaine
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFiltre(cat)}
                  className={`text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-2 border transition-all duration-200 ${
                    filtre === cat
                      ? "bg-[#1b0f6b] text-white border-[#1b0f6b]"
                      : "bg-transparent text-[#1b0f6b] border-[#1b0f6b]/25 hover:border-[#1b0f6b] hover:bg-[#1b0f6b]/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* ── GRILLE ── */}
          {articlesFiltres.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articlesFiltres.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onOpen={setArticleOuvert}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400 text-sm">
              Aucun article dans cette catégorie pour le moment.
            </div>
          )}

          {/* ── CTA CABINET ── */}
          <div className="mt-20 relative overflow-hidden bg-[#0a0814] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(201,168,76,1) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,1) 1px,transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c9a84c] via-[#1b0f6b] to-[#c9a84c]" />
            <div className="relative text-center md:text-left">
              <p
                className="text-white text-2xl md:text-3xl font-bold mb-2"
                style={{ fontFamily: "Garamond, serif" }}
              >
                Une question juridique ?
              </p>
              <p className="text-white/40 text-sm">
                Nos avocats sont disponibles pour une consultation confidentielle.
              </p>
            </div>
            <Link
              to="/contact"
              className="relative group flex-shrink-0 bg-[#c9a84c] text-[#0a0814] px-9 py-4 font-bold text-[12px] tracking-[0.15em] uppercase flex items-center gap-3 hover:bg-white transition-all duration-300"
            >
              Consulter un avocat
              <FaArrowRight
                size={11}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

     


