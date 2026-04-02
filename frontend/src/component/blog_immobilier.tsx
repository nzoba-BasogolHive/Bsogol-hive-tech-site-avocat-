import { FaCalendarAlt, FaUser } from "react-icons/fa";

import img4 from "/src/assets/image (26).webp";

export default function ArticlePage() {

  return (
    
      <section className="bg-gray-100 py-10 md:py-20">
        <div className="max-w-screen-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={img4}
              alt="Marché immobilier et perspectives juridiques"
              className="w-full h-[220px] md:h-[320px] object-cover"
            />
            <span className="absolute bottom-4 left-4 bg-red-700 text-white px-4 py-1 rounded-full text-xs md:text-sm">
              Droit immobilier
            </span>
          </div>

          {/* CONTENU */}
          <div className="p-6 md:p-10">

            {/* META */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-500 text-xs md:text-sm mb-6">
              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                <span>12 juin 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser />
                <span>Analyste immobilier</span>
              </div>
            </div>

            {/* TITRE */}
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">
              Marché immobilier et perspectives juridiques
            </h1>

            {/* CITATION */}
            <div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8 text-sm md:text-base">
              Analyse des tendances et des enjeux juridiques du marché immobilier au Cameroun.
            </div>

            {/* TEXTE AVEC SOUS-TITRES */}
            <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">

              {/* Contexte */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Contexte du marché immobilier</h2>
                <p>
                  Le marché immobilier camerounais connaît une évolution dynamique, influencée par la croissance démographique, l’urbanisation et les investissements étrangers. Les acteurs du secteur doivent naviguer entre opportunités et contraintes réglementaires pour assurer la sécurité juridique de leurs transactions.
                </p>
                <p>
                  Une compréhension approfondie du cadre légal est essentielle pour les promoteurs, investisseurs et particuliers afin d’éviter les litiges et optimiser leurs investissements.
                </p>
              </section>

              {/* Tendances du marché */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Tendances et innovations</h2>
                <p>
                  Les principales tendances observées dans le marché immobilier incluent :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>L’augmentation de la construction de logements résidentiels et mixtes.</li>
                  <li>Le développement des infrastructures urbaines facilitant l’accès à l’immobilier.</li>
                  <li>L’émergence de solutions numériques pour la gestion et la transaction immobilière.</li>
                  <li>La professionnalisation des acteurs juridiques et financiers pour sécuriser les opérations.</li>
                </ul>
              </section>

              {/* Perspectives juridiques */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Perspectives juridiques</h2>
                <p>
                  Les perspectives juridiques portent sur l’adaptation du droit immobilier aux besoins du marché, notamment :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>La simplification des procédures d’enregistrement et de transfert de propriété.</li>
                  <li>Le renforcement des garanties pour les acheteurs et investisseurs.</li>
                  <li>L’encadrement des transactions locatives et commerciales.</li>
                  <li>La mise en conformité des projets immobiliers avec les normes environnementales et urbaines.</li>
                </ul>
              </section>

              {/* Recommandations */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Recommandations pour les acteurs du marché</h2>
                <p>
                  Les experts conseillent :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>De se familiariser avec la législation immobilière et les nouvelles réformes.</li>
                  <li>De sécuriser les transactions par la rédaction de contrats clairs et conformes à la loi.</li>
                  <li>De collaborer avec des professionnels du droit pour éviter litiges et contentieux.</li>
                  <li>De suivre les tendances et innovations pour anticiper les risques et opportunités du marché.</li>
                </ul>
                <p>
                  Une approche proactive et informée permet de maximiser les bénéfices tout en minimisant les risques juridiques dans le secteur immobilier.
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