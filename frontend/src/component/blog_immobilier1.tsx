import { FaCalendarAlt, FaUser } from "react-icons/fa";
import PageTransition from "../component/PageTransition";
import img4 from "/src/assets/image (26).webp";

export default function ArticlePage() {

  return (
    <PageTransition>
      <section className="bg-gray-100 py-10 md:py-20">
        <div className="max-w-screen-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={img4}
              alt="Litiges fonciers et droits des populations"
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
                <span>15 juin 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser />
                <span>Juriste foncier</span>
              </div>
            </div>

            {/* TITRE */}
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">
              Litiges fonciers et droits des populations
            </h1>

            {/* CITATION */}
            <div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8 text-sm md:text-base">
              Analyse des conflits fonciers urbains et ruraux et protection des droits des populations.
            </div>

            {/* TEXTE AVEC SOUS-TITRES */}
            <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">

              {/* Contexte */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Contexte des litiges fonciers</h2>
                <p>
                  Les conflits fonciers constituent l’un des principaux enjeux juridiques au Cameroun, touchant à la fois les zones urbaines et rurales. Ces litiges surviennent souvent en raison de documents fonciers incomplets, de recouvrements illégaux ou de conflits d’intérêts entre propriétaires, locataires et autorités locales.
                </p>
                <p>
                  Les populations affectées par ces conflits font face à des incertitudes juridiques importantes, ce qui peut entraver l’accès à la propriété, le développement économique et social, ainsi que la stabilité des communautés.
                </p>
              </section>

              {/* Causes des litiges */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Causes principales des litiges fonciers</h2>
                <p>
                  Les principaux facteurs générant des conflits fonciers incluent :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Absence de titres fonciers clairs ou documents légaux incomplets.</li>
                  <li>Conflits de succession ou héritage entre familles et communautés.</li>
                  <li>Expansion urbaine et appropriation de terres agricoles.</li>
                  <li>Mauvaise gestion ou corruption dans l’administration foncière.</li>
                </ul>
              </section>

              {/* Implications juridiques */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Implications juridiques pour les populations</h2>
                <p>
                  Les litiges fonciers ont des conséquences directes sur les droits des populations : 
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Incertitude juridique sur la propriété et la possession des terres.</li>
                  <li>Risque d’expulsion ou de perte de terres cultivables.</li>
                  <li>Conflits intercommunautaires pouvant entraîner des tensions sociales.</li>
                  <li>Difficulté d’accès au financement et à l’investissement immobilier.</li>
                </ul>
              </section>

              {/* Solutions et recommandations */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Solutions et recommandations</h2>
                <p>
                  Pour réduire les conflits et protéger les droits des populations, les experts recommandent :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Assurer la délivrance de titres fonciers clairs et conformes à la loi.</li>
                  <li>Mise en place de médiation et arbitrage pour résoudre les litiges à l’amiable.</li>
                  <li>Renforcer la transparence et la responsabilité dans l’administration foncière.</li>
                  <li>Former les populations sur leurs droits fonciers et les procédures légales disponibles.</li>
                </ul>
                <p>
                  Une approche proactive permet de protéger les populations, d’assurer la sécurité juridique et de favoriser un développement harmonieux des zones urbaines et rurales.
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