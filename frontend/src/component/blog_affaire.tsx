import { FaCalendarAlt, FaUser } from "react-icons/fa";
import PageTransition from "../component/PageTransition";
import img1 from "/src/assets/image (8).webp";

export default function ArticlePage() {

  return (
    <PageTransition>
      <section className="bg-gray-100 py-10 md:py-20">
        <div className="max-w-screen-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={img1}
              alt="Contrôle fiscal au Cameroun"
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
              Le contrôle fiscal au Cameroun : points clés
            </h1>

            {/* CITATION */}
            <div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8 text-sm md:text-base">
              Une analyse pratique pour comprendre les obligations des entreprises et se préparer efficacement à une vérification fiscale.
            </div>

            {/* TEXTE AVEC SOUS-TITRES */}
            <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">

              {/* Contexte */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Contexte du contrôle fiscal</h2>
                <p>
                  Le contrôle fiscal est un outil essentiel pour l’administration fiscale camerounaise afin de vérifier la conformité des entreprises avec la législation fiscale. Il concerne différents aspects : déclarations fiscales, tenue des livres comptables, respect des obligations de TVA, impôt sur les sociétés et retenues à la source.
                </p>
                <p>
                  Pour les entreprises, comprendre le cadre légal et se préparer à une vérification est indispensable afin d’éviter des pénalités financières et des sanctions administratives.
                </p>
              </section>

              {/* Préparation au contrôle */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Se préparer à une vérification fiscale</h2>
                <p>
                  La préparation passe par plusieurs étapes : 
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Maintenir une comptabilité complète et à jour, avec toutes les pièces justificatives.</li>
                  <li>Vérifier les déclarations fiscales pour s’assurer qu’elles sont exactes et conformes aux normes.</li>
                  <li>Former le personnel en charge des finances et de la comptabilité pour répondre aux demandes de l’administration fiscale.</li>
                  <li>Mettre en place un audit interne régulier pour identifier et corriger les anomalies avant la visite des inspecteurs.</li>
                </ul>
                <p>
                  Une entreprise bien préparée réduit le risque de redressement fiscal et facilite le déroulement du contrôle.
                </p>
              </section>

              {/* Obligations légales */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Obligations légales des entreprises</h2>
                <p>
                  Les entreprises doivent respecter plusieurs obligations lors d’un contrôle fiscal : 
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fournir toutes les informations demandées par l’administration fiscale dans les délais impartis.</li>
                  <li>Tenir à disposition les documents comptables et fiscaux pour consultation.</li>
                  <li>Collaborer avec les inspecteurs et répondre aux questions avec transparence.</li>
                  <li>Corriger rapidement toute anomalie ou omission détectée lors du contrôle pour éviter les pénalités supplémentaires.</li>
                </ul>
              </section>

              {/* Recommandations */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Recommandations pratiques</h2>
                <p>
                  Les experts conseillent aux entreprises : 
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>De documenter toutes les opérations financières et fiscales de manière claire et organisée.</li>
                  <li>D’anticiper les contrôles fiscaux en effectuant des audits internes réguliers.</li>
                  <li>De consulter un cabinet d’avocats ou un expert-comptable spécialisé pour accompagner le contrôle fiscal.</li>
                  <li>De mettre en place une veille réglementaire pour rester à jour sur les obligations fiscales.</li>
                </ul>
                <p>
                  Une approche proactive et structurée permet de réduire les risques de sanctions et d’assurer la conformité avec le droit fiscal camerounais.
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
    </PageTransition>
  );
}