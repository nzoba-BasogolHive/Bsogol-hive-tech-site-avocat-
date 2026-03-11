import { FaCheckCircle } from "react-icons/fa";
import Reveal from "./Reveal";

export default function AffairesPractice() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-8">

        {/* TEXTE GAUCHE */}
        <Reveal>
          <div>

            <h2 className="text-3xl font-bold text-[#1A237E] mb-6">
              Notre Pratique En Droit Des Affaires
            </h2>

            <p className="text-gray-700 leading-8 mb-8">
              Notre cabinet accompagne les entreprises, dirigeants et
              entrepreneurs dans toutes les dimensions du droit des affaires.
              Nous intervenons aussi bien en conseil qu'en contentieux afin
              de sécuriser vos opérations juridiques, structurer vos projets
              et défendre vos intérêts économiques.
            </p>

            {/* bouton premium */}
            <button className="bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-medium 
            hover:bg-red-800 transition transform hover:scale-105 shadow-lg">
              Nous consulter →
            </button>

          </div>
        </Reveal>


        {/* BLOC APPROCHE */}
        <Reveal>
          <div className="bg-[#E8DADA] p-10 rounded-xl shadow-lg">

            <h3 className="font-bold text-lg mb-4">
              Notre Approche
            </h3>

            <p className="text-gray-700 mb-6 leading-7">
              En droit des affaires, chaque décision stratégique peut avoir
              des conséquences majeures pour l’entreprise. Nous privilégions
              une approche proactive et sécurisée afin d’anticiper les risques
              et d’accompagner durablement la croissance de nos clients.
            </p>

            <ul className="space-y-4 text-gray-700">

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Analyse juridique approfondie de vos projets
              </li>

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Conseil stratégique pour les dirigeants
              </li>

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Accompagnement dans les opérations commerciales
              </li>

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Défense des intérêts de l’entreprise
              </li>

            </ul>

          </div>
        </Reveal>

      </div>

    </section>
  );
}