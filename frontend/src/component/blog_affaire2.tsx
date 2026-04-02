import { FaCalendarAlt, FaUser } from "react-icons/fa";

import img1 from "/src/assets/image (8).webp";

export default function ArticlePage() {

  return (
  
      <section className="bg-gray-100 py-10 md:py-20">
        <div className="max-w-screen-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={img1}
              alt="Innovation juridique dans les sociétés commerciales"
              className="w-full h-[220px] md:h-[320px] object-cover"
            />
            <span className="absolute bottom-4 left-4 bg-red-700 text-white px-4 py-1 rounded-full text-xs md:text-sm">
              Droit des affaires
            </span>
          </div>

          {/* CONTENU */}
          <div className="p-6 md:p-10">

            {/* META */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-500 text-xs md:text-sm mb-6">
              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                <span>24 janv. 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser />
                <span>Cabinet Bitanga & Partners</span>
              </div>
            </div>

            {/* TITRE */}
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">
              Innovation juridique dans les sociétés commerciales
            </h1>

            {/* CITATION */}
            <div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8 text-sm md:text-base">
              Les dernières réformes et pratiques innovantes transforment le droit des sociétés au Cameroun.
            </div>

            {/* TEXTE AVEC SOUS-TITRES */}
            <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">

              {/* Contexte */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Contexte et évolution</h2>
                <p>
                  Le droit des sociétés au Cameroun connaît une période de transformation avec l’émergence de nouvelles pratiques et réformes législatives. Ces innovations visent à moderniser la gouvernance des sociétés commerciales, renforcer la transparence et faciliter la création et la gestion d’entreprises.
                </p>
                <p>
                  L’objectif est d’adapter le cadre juridique aux besoins d’un environnement économique en constante évolution, où la digitalisation et la responsabilisation des actionnaires deviennent des éléments essentiels pour assurer la compétitivité.
                </p>
              </section>

              {/* Réformes législatives */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Réformes et innovations législatives</h2>
                <p>
                  Parmi les principales innovations, on peut citer :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>L’introduction de nouvelles formes de sociétés permettant plus de flexibilité dans la répartition des parts et le capital social.</li>
                  <li>La simplification des formalités administratives pour la création et l’enregistrement des sociétés.</li>
                  <li>Des mécanismes renforcés de gouvernance et de contrôle interne, pour protéger les actionnaires et les tiers.</li>
                  <li>L’encouragement à l’utilisation des technologies numériques dans la gestion et la communication des informations légales.</li>
                </ul>
              </section>

              {/* Implications pratiques */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Implications pour les entreprises</h2>
                <p>
                  Les entreprises doivent s’adapter à ces changements pour rester compétitives. Cela inclut la mise en conformité avec les nouvelles obligations légales, la révision des statuts et règlements internes, ainsi que l’adoption de pratiques modernes de gouvernance et de reporting.
                </p>
                <p>
                  Pour les investisseurs et actionnaires, ces innovations offrent plus de sécurité juridique et renforcent la transparence dans les opérations des sociétés commerciales.
                </p>
              </section>

              {/* Recommandations */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Recommandations</h2>
                <p>
                  Les experts conseillent aux entreprises et investisseurs de :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Se tenir informés des réformes législatives et des nouvelles pratiques en droit des sociétés.</li>
                  <li>Adapter les statuts et règlements internes aux nouvelles exigences pour bénéficier des innovations juridiques.</li>
                  <li>Former les dirigeants et le personnel à la gouvernance moderne et aux outils numériques.</li>
                  <li>Consulter des cabinets spécialisés pour sécuriser les transactions et opérations commerciales.</li>
                </ul>
                <p>
                  Une approche proactive garantit la conformité légale et optimise les performances et la crédibilité des sociétés commerciales au Cameroun.
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