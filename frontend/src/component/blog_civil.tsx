import { FaCalendarAlt, FaUser } from "react-icons/fa";
import PageTransition from "../component/PageTransition";
import img2 from "/src/assets/image (25).webp";

export default function ArticlePage() {

  return (
    <PageTransition>
      <section className="bg-gray-100 py-10 md:py-20">
        <div className="max-w-screen-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={img2}
              alt="MTN Cameroon"
              className="w-full h-[220px] md:h-[320px] object-cover"
            />
            <span className="absolute bottom-4 left-4 bg-red-700 text-white px-4 py-1 rounded-full text-xs md:text-sm">
              Droit Civil
            </span>
          </div>

          {/* CONTENU */}
          <div className="p-6 md:p-10">

            {/* META */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-500 text-xs md:text-sm mb-6">
              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                <span>02 févr. 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser />
                <span>Rédaction juridique</span>
              </div>
            </div>

            {/* TITRE */}
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">
              MTN Cameroon gagne en appel contre la saisie d’actifs
            </h1>

            {/* CITATION */}
            <div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8 text-sm md:text-base">
              Une décision judiciaire majeure qui clarifie les règles entourant les saisies bancaires au Cameroun et renforce la protection des entreprises.
            </div>

            {/* TEXTE AVEC SOUS-TITRES */}

            <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">

              {/* Contexte */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Contexte de l’affaire</h2>
                <p>
                  MTN Cameroon avait fait l’objet d’une saisie de certains de ses comptes bancaires dans le cadre d’un litige lié à un prêt contracté par l’entreprise. Les saisies ont été effectuées rapidement et sans que toutes les garanties procédurales soient respectées. L’entreprise a alors contesté ces mesures, estimant qu’elles étaient illégales et préjudiciables à son fonctionnement.
                </p>
                <p>
                  Cette situation a mis en lumière un problème récurrent : la nécessité pour les créanciers et les autorités judiciaires de respecter scrupuleusement les procédures légales lors de saisies d’actifs d’entreprises afin de protéger l’équilibre économique et la légitimité des mesures coercitives.
                </p>
              </section>

              {/* Décision de la Cour */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Décision de la cour d’appel</h2>
                <p>
                  Après examen du dossier, la cour d’appel camerounaise a constaté que la procédure initiale comportait des manquements importants. Certaines étapes obligatoires n’avaient pas été respectées, ce qui rendait la saisie juridiquement contestable.
                </p>
                <p>
                  La cour a donc ordonné la libération immédiate des fonds saisis, réaffirmant le droit des entreprises à bénéficier d’un traitement légal et équitable. Cette décision constitue un rappel crucial que les saisies bancaires doivent être strictement encadrées par la loi pour éviter des abus ou des préjudices injustifiés.
                </p>
              </section>

              {/* Implications juridiques */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Implications pour les entreprises</h2>
                <p>
                  Cette décision a des conséquences importantes pour les entreprises et les créanciers. Elle clarifie que les mesures coercitives, comme la saisie de comptes bancaires, ne peuvent être mises en œuvre qu’en respectant toutes les étapes légales. Les entreprises peuvent désormais invoquer cette jurisprudence pour contester toute saisie similaire non conforme.
                </p>
                <p>
                  Les implications vont au-delà de MTN Cameroon : la jurisprudence renforce la sécurité juridique pour toutes les entreprises opérant au Cameroun, en soulignant l’importance d’un cadre procédural clair et équitable.
                </p>
              </section>

              {/* Conseils pratiques */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Conseils pratiques</h2>
                <p>
                  Pour les entreprises et leurs conseils juridiques, il est essentiel de : 
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Analyser systématiquement la légalité des saisies et autres mesures coercitives.</li>
                  <li>Assurer la conformité des procédures pour éviter toute contestation judiciaire.</li>
                  <li>Anticiper les risques financiers et prévoir des stratégies de protection de trésorerie.</li>
                  <li>Consulter des avocats spécialisés en droit civil et en droit des affaires pour des conseils adaptés à chaque situation.</li>
                </ul>
                <p>
                  Cette approche proactive permet aux entreprises de sécuriser leurs activités et de réagir efficacement face à des litiges financiers.
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