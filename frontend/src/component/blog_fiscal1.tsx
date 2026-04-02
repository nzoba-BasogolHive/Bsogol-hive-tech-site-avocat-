import { FaCalendarAlt, FaUser } from "react-icons/fa";

import img5 from "/src/assets/image (28).webp";

export default function ArticlePage() {

  return (
  
      <section className="bg-gray-100 py-10 md:py-20">
        <div className="max-w-screen-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={img5}
              alt="Fiscalité locale et développement économique"
              className="w-full h-[220px] md:h-[320px] object-cover"
            />
            <span className="absolute bottom-4 left-4 bg-red-700 text-white px-4 py-1 rounded-full text-xs md:text-sm">
              Droit fiscal
            </span>
          </div>

          {/* CONTENU */}
          <div className="p-6 md:p-10">

            {/* META */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-500 text-xs md:text-sm mb-6">
              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                <span>05 mai 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser />
                <span>Analyste fiscal</span>
              </div>
            </div>

            {/* TITRE */}
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">
              Fiscalité locale et développement économique
            </h1>

            {/* CITATION */}
            <div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8 text-sm md:text-base">
              Comprendre l’impact de la fiscalité locale sur les collectivités et le développement économique.
            </div>

            {/* TEXTE AVEC SOUS-TITRES */}
            <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">

              {/* Contexte */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Contexte et enjeux</h2>
                <p>
                  La fiscalité locale joue un rôle stratégique dans le financement des collectivités territoriales au Cameroun. La récente réforme vise à clarifier les règles de perception, améliorer la transparence et soutenir le développement économique local.
                </p>
                <p>
                  Les communes et régions dépendent désormais davantage des recettes locales pour financer les infrastructures, les services publics et les programmes de développement. Une gestion efficace de cette fiscalité est essentielle pour promouvoir la croissance économique et attirer les investisseurs.
                </p>
              </section>

              {/* Principales dispositions de la loi */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Principales dispositions de la loi</h2>
                <p>
                  La nouvelle loi sur la fiscalité locale introduit plusieurs mesures importantes :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Définition claire des taxes locales et de leurs taux applicables aux entreprises et particuliers.</li>
                  <li>Mécanismes pour assurer la transparence et l’imputabilité dans la collecte des recettes.</li>
                  <li>Procédures simplifiées pour le paiement et le suivi des impôts locaux.</li>
                  <li>Encouragement des collectivités à utiliser les ressources fiscales pour le développement économique et social.</li>
                </ul>
              </section>

              {/* Implications pour les collectivités et entreprises */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Implications pratiques</h2>
                <p>
                  Pour les collectivités locales, la loi implique une meilleure planification budgétaire et une utilisation efficiente des ressources fiscales. Les entreprises et investisseurs doivent se conformer aux nouvelles obligations et intégrer les taxes locales dans leur stratégie financière.
                </p>
                <p>
                  Une gestion proactive de la fiscalité locale permet non seulement de respecter la loi, mais aussi de contribuer au développement économique de la région et à l’amélioration des services publics pour les citoyens.
                </p>
              </section>

              {/* Recommandations */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Recommandations</h2>
                <p>
                  Les experts fiscaux recommandent de :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Se familiariser avec les nouvelles dispositions légales et les obligations locales.</li>
                  <li>Mettre en place un suivi comptable précis pour anticiper le paiement des taxes.</li>
                  <li>Former le personnel des collectivités et des entreprises à la gestion et au contrôle des recettes fiscales.</li>
                  <li>Utiliser les recettes fiscales de manière transparente et stratégique pour favoriser le développement local.</li>
                </ul>
                <p>
                  Une approche proactive et structurée permet de maximiser l’impact positif de la fiscalité locale sur le développement économique.
                </p>
              </section>

            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-gray-600 text-sm md:text-base">
                Vous avez une question sur ce sujet ?
              </p>
              <button className="bg-[#1E1671] text-white px-6 py-3 rounded-md hover:bg-[#151057] transition w-full md:w-auto">
                Consulter un avocat →
              </button>
            </div>

          </div>
        </div>
      </section>
  
  );
}