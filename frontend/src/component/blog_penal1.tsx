import { FaCalendarAlt, FaUser } from "react-icons/fa";

import img3 from "/src/assets/image3.webp";

export default function ArticlePage() {

  return (

      <section className="bg-gray-100 py-10 md:py-20">
        <div className="max-w-screen-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={img3}
              alt="Santé communautaire au Cameroun"
              className="w-full h-[220px] md:h-[320px] object-cover"
            />
            <span className="absolute bottom-4 left-4 bg-red-700 text-white px-4 py-1 rounded-full text-xs md:text-sm">
              Droit Pénal
            </span>
          </div>

          {/* CONTENU */}
          <div className="p-6 md:p-10">

            {/* META */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-500 text-xs md:text-sm mb-6">
              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                <span>10 avr. 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser />
                <span>Expert en droit</span>
              </div>
            </div>

            {/* TITRE */}
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">
              L’institutionnalisation de la santé communautaire au Cameroun
            </h1>

            {/* CITATION */}
            <div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8 text-sm md:text-base">
              Une approche qui transforme la santé publique en responsabilité civile et pénale pour les acteurs publics et privés.
            </div>

            {/* TEXTE AVEC SOUS-TITRES */}
            <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">

              {/* Contexte */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Contexte et enjeux</h2>
                <p>
                  La santé communautaire est devenue un sujet central au Cameroun, avec l’émergence de nouvelles réglementations qui visent à responsabiliser les acteurs publics et privés. L’institutionnalisation de cette approche implique que les obligations en matière de prévention, de suivi sanitaire et de sensibilisation ne sont plus seulement morales, mais également encadrées par le droit civil et pénal.
                </p>
                <p>
                  Cette évolution répond à des besoins croissants de protection sanitaire, de gestion des crises et d’amélioration de la qualité de vie des populations locales. Les experts juridiques s’accordent à dire que les conséquences de cette institutionnalisation touchent tant les collectivités locales que les entreprises et ONG intervenant dans le secteur de la santé.
                </p>
              </section>

              {/* Cadre juridique */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Cadre juridique et responsabilités</h2>
                <p>
                  La loi camerounaise, complétée par les recommandations internationales en matière de santé publique, définit désormais des obligations claires pour les différents acteurs. Cela inclut la mise en place de programmes de prévention, la formation du personnel sanitaire, le suivi des indicateurs de santé, ainsi que la notification des incidents sanitaires graves.
                </p>
                <p>
                  Les manquements à ces obligations peuvent entraîner des sanctions civiles, telles que des indemnisations pour préjudice, mais également des sanctions pénales en cas de négligence grave ou de mise en danger de la vie d’autrui. Ce cadre juridique place la santé communautaire au cœur de la responsabilité juridique des acteurs concernés.
                </p>
              </section>

              {/* Implications pratiques */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Implications pratiques pour les acteurs</h2>
                <p>
                  Pour les administrations publiques, les collectivités locales et les entreprises intervenant dans la santé, cela implique :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>La mise en conformité avec les programmes de santé communautaire officiellement reconnus.</li>
                  <li>La documentation et le suivi rigoureux des activités sanitaires.</li>
                  <li>La formation continue du personnel pour réduire les risques de responsabilité civile et pénale.</li>
                  <li>La collaboration avec des experts juridiques et sanitaires pour garantir la légalité et l’efficacité des actions entreprises.</li>
                </ul>
                <p>
                  Une approche proactive permet non seulement de prévenir les sanctions, mais également de renforcer la confiance des populations et de promouvoir une meilleure santé communautaire à long terme.
                </p>
              </section>

              {/* Recommandations */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Recommandations</h2>
                <p>
                  Les experts conseillent aux acteurs concernés de : 
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Évaluer régulièrement la conformité de leurs actions avec les obligations légales et réglementaires.</li>
                  <li>Impliquer les communautés locales dans la conception et le suivi des programmes de santé.</li>
                  <li>Recourir à des audits externes pour identifier les risques potentiels et améliorer la qualité des interventions.</li>
                  <li>Former et sensibiliser le personnel sur les conséquences juridiques de la négligence en matière de santé communautaire.</li>
                </ul>
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