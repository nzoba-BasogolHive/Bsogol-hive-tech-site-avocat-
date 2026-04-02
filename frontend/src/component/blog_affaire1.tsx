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
              alt="Imposition des revenus locatifs au Cameroun"
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
              Imposition des revenus locatifs au Cameroun
            </h1>

            {/* CITATION */}
            <div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8 text-sm md:text-base">
              Comprendre la fiscalité des revenus locatifs pour anticiper ses obligations et éviter les sanctions.
            </div>

            {/* TEXTE AVEC SOUS-TITRES */}
            <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">

              {/* Contexte */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Contexte fiscal des revenus locatifs</h2>
                <p>
                  Les revenus générés par la location de biens immobiliers au Cameroun sont soumis à une imposition spécifique. Qu’il s’agisse de particuliers ou d’entreprises, ces revenus doivent être déclarés et intégrés dans les obligations fiscales annuelles. Une bonne compréhension des règles fiscales permet d’éviter des pénalités ou redressements.
                </p>
                <p>
                  La fiscalité des revenus locatifs s’inscrit dans le cadre global de l’impôt sur le revenu et des contributions locales, et peut varier selon la nature du bien et le statut du propriétaire.
                </p>
              </section>

              {/* Types de revenus locatifs et taxation */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Types de revenus et régime fiscal</h2>
                <p>
                  Les revenus locatifs peuvent inclure : 
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Les loyers perçus pour des habitations résidentielles.</li>
                  <li>Les loyers provenant de locaux commerciaux ou industriels.</li>
                  <li>Les revenus accessoires liés à la location, comme le stationnement ou les services fournis aux locataires.</li>
                </ul>
                <p>
                  Chaque type de revenu est soumis à un régime fiscal précis. Les particuliers peuvent bénéficier d’abattements ou de déductions, tandis que les entreprises doivent comptabiliser ces revenus dans leurs résultats imposables.
                </p>
              </section>

              {/* Obligations des contribuables */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Obligations fiscales des propriétaires</h2>
                <p>
                  Les propriétaires doivent : 
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Déclarer tous les revenus locatifs dans la déclaration annuelle de revenus.</li>
                  <li>Conserver les justificatifs de loyers perçus et charges déductibles.</li>
                  <li>Payer les impôts et contributions locales dans les délais légaux.</li>
                  <li>Se conformer aux règles de retenue à la source le cas échéant pour les revenus locatifs versés à des tiers.</li>
                </ul>
              </section>

              {/* Recommandations */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Recommandations pratiques</h2>
                <p>
                  Pour bien gérer la fiscalité des revenus locatifs, il est conseillé de : 
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Tenir une comptabilité claire et structurée pour tous les revenus et charges.</li>
                  <li>Consulter régulièrement un expert-comptable ou un cabinet d’avocats spécialisé en fiscalité pour anticiper les obligations.</li>
                  <li>Se tenir informé des évolutions législatives pour adapter la gestion fiscale des biens immobiliers.</li>
                  <li>Planifier les paiements et déclarations pour éviter les pénalités ou majorations de retard.</li>
                </ul>
                <p>
                  Une approche proactive garantit la conformité fiscale et optimise la gestion des revenus locatifs.
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