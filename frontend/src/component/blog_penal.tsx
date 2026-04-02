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
              alt="Déportations de migrants"
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
                <span>16 févr. 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser />
                <span>Rédaction juridique</span>
              </div>
            </div>

            {/* TITRE */}
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">
              Déportations controversées et droits des migrants
            </h1>

            {/* CITATION */}
            <div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8 text-sm md:text-base">
              Des cas récents de renvois forcés mettent en lumière la nécessité de garantir les droits fondamentaux des migrants et le respect des procédures légales.
            </div>

            {/* TEXTE AVEC SOUS-TITRES */}
            <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">

              {/* Contexte */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Contexte de la situation</h2>
                <p>
                  Dans plusieurs régions, des migrants ont été signalés comme ayant été renvoyés de force vers le Cameroun. Ces opérations ont suscité de vives critiques de la part d’organisations de défense des droits humains et de juristes, qui dénoncent un non-respect des garanties procédurales et des droits fondamentaux.
                </p>
                <p>
                  L’affaire intervient dans un contexte de migrations transfrontalières accrues et de pressions sur les systèmes d’asile. La question centrale est de savoir si les renvois forcés respectent le droit international et national en matière de protection des migrants.
                </p>
              </section>

              {/* Violations présumées */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Violations présumées des droits</h2>
                <p>
                  Selon les rapports d’avocats locaux et d’organisations juridiques, certains migrants auraient été expulsés sans notification préalable, sans accès à un avocat, ni possibilité de contester leur renvoi. Ces manquements soulèvent des questions sur le droit à un procès équitable et le respect des conventions internationales relatives aux droits humains.
                </p>
                <p>
                  De tels actes peuvent constituer des violations graves des droits fondamentaux, notamment le principe de non-refoulement qui interdit de renvoyer une personne vers un pays où elle risque des persécutions ou des traitements inhumains.
                </p>
              </section>

              {/* Implications juridiques */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Implications juridiques</h2>
                <p>
                  Ces événements soulignent la nécessité de renforcer le cadre légal encadrant les expulsions et les procédures migratoires. Les autorités doivent veiller à ce que chaque action soit conforme aux droits fondamentaux et aux obligations internationales, faute de quoi elles s’exposent à des recours devant les tribunaux nationaux et internationaux.
                </p>
                <p>
                  Pour les juristes et avocats spécialisés, cette situation représente un appel à la vigilance et à l’assistance juridique proactive pour protéger les droits des personnes vulnérables.
                </p>
              </section>

              {/* Conseils pratiques */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Conseils pratiques</h2>
                <p>
                  Les organisations et particuliers confrontés à des risques d’expulsion doivent : 
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Documenter toutes les étapes de la procédure pour identifier d’éventuelles irrégularités.</li>
                  <li>Contacter des avocats spécialisés en droit pénal et en droit des migrations pour obtenir des recours rapides.</li>
                  <li>Informer les organisations de défense des droits humains pour garantir une surveillance et un appui juridique.</li>
                  <li>Se familiariser avec les conventions internationales et les lois nationales régissant les expulsions et le traitement des migrants.</li>
                </ul>
                <p>
                  Une approche proactive et bien documentée est essentielle pour défendre les droits des migrants et garantir le respect de leurs droits fondamentaux.
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