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
              alt="Contrôle fiscal et stratégies fiscales à Douala"
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
                <span>02 mai 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser />
                <span>Expert fiscal</span>
              </div>
            </div>

            {/* TITRE */}
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">
              Comprendre le contrôle fiscal : conseils pratiques
            </h1>

            {/* CITATION */}
            <div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8 text-sm md:text-base">
              Stratégies fiscales pour les PME et entrepreneurs à Douala face à un audit fiscal.
            </div>

            {/* TEXTE AVEC SOUS-TITRES */}
            <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">

              {/* Contexte */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Contexte et importance du contrôle fiscal</h2>
                <p>
                  Le contrôle fiscal est un processus par lequel l’administration fiscale vérifie la conformité des entreprises et entrepreneurs avec les obligations fiscales. À Douala, ville économique majeure du Cameroun, les PME et entrepreneurs sont souvent ciblés pour vérifier la régularité des déclarations et paiements d’impôts.
                </p>
                <p>
                  Comprendre le fonctionnement du contrôle fiscal permet de mieux anticiper les demandes de l’administration et de minimiser les risques de pénalités ou redressements.
                </p>
              </section>

              {/* Préparation au contrôle */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Se préparer efficacement</h2>
                <p>
                  Pour se préparer à un audit fiscal, il est recommandé de :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Maintenir une comptabilité rigoureuse et à jour, avec toutes les factures et justificatifs.</li>
                  <li>Vérifier les déclarations fiscales pour s’assurer qu’elles sont exactes et complètes.</li>
                  <li>Former le personnel responsable de la comptabilité aux obligations fiscales et aux procédures de contrôle.</li>
                  <li>Effectuer des audits internes réguliers pour détecter et corriger toute anomalie avant l’arrivée des inspecteurs.</li>
                </ul>
                <p>
                  Une bonne préparation réduit le stress et améliore la coopération avec l’administration fiscale.
                </p>
              </section>

              {/* Obligations et responsabilités */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Obligations des entreprises et entrepreneurs</h2>
                <p>
                  Les entreprises et entrepreneurs doivent :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fournir tous les documents demandés par l’administration dans les délais impartis.</li>
                  <li>Tenir à disposition les livres comptables et les pièces justificatives.</li>
                  <li>Répondre aux questions des inspecteurs de manière transparente et complète.</li>
                  <li>Corriger rapidement toute irrégularité détectée afin de limiter les sanctions financières.</li>
                </ul>
              </section>

              {/* Stratégies et recommandations */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Stratégies fiscales et recommandations</h2>
                <p>
                  Pour optimiser la gestion fiscale et se protéger lors d’un contrôle, il est conseillé de :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Mettre en place un suivi régulier de la comptabilité et des déclarations fiscales.</li>
                  <li>Consulter un expert fiscal ou un cabinet spécialisé pour anticiper les audits.</li>
                  <li>Se tenir informé des évolutions législatives pour rester en conformité avec les obligations fiscales.</li>
                  <li>Planifier les paiements et déclarations afin d’éviter les pénalités pour retard ou omission.</li>
                </ul>
                <p>
                  Une approche proactive permet non seulement de se conformer aux lois fiscales mais également d’optimiser la gestion financière de l’entreprise.
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