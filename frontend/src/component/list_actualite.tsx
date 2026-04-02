import { useState } from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

import img1 from "../assets/image (27).webp";
import img2 from "../assets/image (24).webp";
import img3 from "../assets/image (25).webp";
import img4 from "../assets/image (26).webp";
import img5 from "../assets/image (28).webp";

type Article = {
  categorie: string;
  image: string;
  date: string;
  title: string;
  text?: string;
  auteur: string;
  link: string;
};

export default function Actualites() {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");

  const categories = [
    "Tous",
    "Droit civil",
    "Droit pénal",
    "Droit des affaires",
    "Droit fiscal",
    
    "Droit du travail",
  ];

  const articles: Article[] = [
    // Droit civil
    {
      categorie: "Droit civil",
      image: img2,
      date: "02 févr. 2026",
      title: "MTN Cameroon gagne en appel contre la saisie d’actifs",
      text: "Une cour d’appel camerounaise a ordonné la libération des comptes bancaires saisis de MTN, estimant que la saisie n’était pas légale dans une affaire de prêt. Cela marque une victoire significative pour la multinationale et un jalon dans la jurisprudence camerounaise sur les litiges financiers. :contentReference[oaicite:5]{index=5}",
      auteur: "Rédaction juridique",
      link: "/blog_civil",
    },

    // Droit pénal
    {
      categorie: "Droit pénal",
      image: img3,
      date: "16 févr. 2026",
      title: "Déportations controversées et droits des migrants",
      text: "Aux côtés d’avocats locaux, des juristes ont signalé des cas où des migrants auraient été renvoyés de force vers le Cameroun sans respect de certaines garanties procédurales, suscitant un débat sur le droit à un procès équitable et la protection des droits humains. :contentReference[oaicite:6]{index=6}",
      auteur: "Rédaction juridique",
      link: "/blog_penal2",
    },
    {
      categorie: "Droit pénal",
      image: img3,
      date: "10 avr. 2025",
      title: "L’institutionnalisation de la santé communautaire au Cameroun",
      text: "Les experts juridiques discutent de la santé communautaire comme une nouvelle responsabilité civile et pénale pour les acteurs publics et privés. :contentReference[oaicite:7]{index=7}",
      auteur: "Expert en droit",
      link: "/blog_penal1",
    },
    {
      categorie: "Droit pénal",
      image: img3,
      date: "13 févr. 2026",
      title: "Le droit pénal et la cybersécurité : défis à venir",
      text: "Experts discutent des lacunes du droit pénal face aux cybercrimes croissants au Cameroun et en Afrique. :contentReference[oaicite:8]{index=8}",
      auteur: "Expert cybersécurité",
      link: "/blog_penal",
    },

    // Droit des affaires
    {
      categorie: "Droit des affaires",
      image: img1,
      date: "24 janv. 2025",
      title: "Le contrôle fiscal au Cameroun : points clés",
      text: "Un cabinet d’avocats explique comment se préparer à une vérification fiscale et les obligations des entreprises au Cameroun. :contentReference[oaicite:9]{index=9}",
      auteur: "Cabinet Bitanga & Partners",
      link: "/blog_affaire2",
    },
    {
      categorie: "Droit des affaires",
      image: img1,
      date: "24 janv. 2025",
      title: "Imposition des revenus locatifs au Cameroun",
      text: "Actualité juridique sur la taxation des revenus locatifs et ses implications pour les particuliers et entreprises. :contentReference[oaicite:10]{index=10}",
      auteur: "Cabinet Bitanga & Partners",
      link: "/blog_affaire1",
    },
    {
      categorie: "Droit des affaires",
      image: img1,
      date: "24 janv. 2025",
      title: "Innovation juridique dans les sociétés commerciales",
      text: "Une revue des dernières innovations juridiques en droit des sociétés au Cameroun. :contentReference[oaicite:11]{index=11}",
      auteur: "Cabinet Bitanga & Partners",
      link: "/blog_affaire",
    },

    // Droit fiscal
    {
      categorie: "Droit fiscal",
      image: img5,
      date: "02 mai 2025",
      title: "Comprendre le contrôle fiscal : conseils pratiques",
      text: "Douala : stratégies fiscales pour les PME et entrepreneurs face à un audit fiscal. :contentReference[oaicite:12]{index=12}",
      auteur: "Expert fiscal",
      link: "/blog_fiscal",

    },
    {
      categorie: "Droit fiscal",
      image: img5,
      date: "05 mai 2025",
      title: "Fiscalité locale et développement économique",
      text: "Analyse de la nouvelle loi sur la fiscalité locale et ses effets sur les collectivités. :contentReference[oaicite:13]{index=13}",
      auteur: "Analyste fiscal",
      link: "/blog_fiscal2",
    },
    {
      categorie: "Droit fiscal",
      image: img5,
      date: "15 mai 2025",
      title: "Actualité OHADA : Prix du meilleur écrit juridique",
      text: "La cérémonie du prix du meilleur écrit à Douala met en valeur l’excellence juridique en droit des affaires. :contentReference[oaicite:14]{index=14}",
      auteur: "Organisateurs OHADA",
      link: "/blog_fiscal1",
      
    },

    // Droit immobilier
    {
      categorie: "Droit immobilier",
      image: img4,
      date: "12 juin 2025",
      title: "Marché immobilier et perspectives juridiques",
      text: "Analyse des tendances du marché immobilier dans le contexte légal camerounais. :contentReference[oaicite:15]{index=15}",
      auteur: "Analyste immobilier",
      link: "/blog_immobilier",
    },
    {
      categorie: "Droit immobilier",
      image: img4,
      date: "15 juin 2025",
      title: "Litiges fonciers et droits des populations",
      text: "Les enjeux juridiques des conflits fonciers urbains et ruraux. :contentReference[oaicite:16]{index=16}",
      auteur: "Juriste foncier",
      link: "/blog_immobilier1",
    },
    {
      categorie: "Droit immobilier",
      image: img4,
      date: "20 juin 2025",
      title: "Urbanisme et droit de l’habitat au Cameroun",
      text: "Nouvelles initiatives législatives sur la planification urbaine. :contentReference[oaicite:17]{index=17}",
      auteur: "Urbaniste juridique",
      link: "/blog_immobilier2",
    },
  ];

  const filteredArticles =
    activeCategory === "Tous"
      ? articles
      : articles.filter((a) => a.categorie === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-gray-100 -mx-10 md:-mx-20">
      <div className="max-w-7xl mx-auto  px-6 md:px-16">
        {/* TITRE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0f1545]">
          Actualités juridiques
        </h2>

        {/* FILTRE */}
        <div className="flex flex-wrap gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-800 hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRILLE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-14">
          {filteredArticles.map((article, index) => (
            <Reveal key={index}>
              <div
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className={`w-full ${
                      index === 0
                        ? "h-[320px] md:h-[420px]"
                        : "h-[260px] md:h-[300px]"
                    } object-cover group-hover:scale-105 transition duration-500`}
                  />
                  <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-semibold text-[#1E1671]">
                    {article.categorie}
                  </span>
                </div>

                {/* CONTENU */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-gray-500 text-xs mb-3">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt /> <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUser /> <span>{article.auteur}</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-2 text-base md:text-lg">
                    {article.title}
                  </h3>

                  {article.text && (
                    <p className="text-gray-700 text-sm md:text-base mb-3">
                      {article.text}
                    </p>
                  )}

                  <Link
                    to={article.link}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Lire l’article →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}