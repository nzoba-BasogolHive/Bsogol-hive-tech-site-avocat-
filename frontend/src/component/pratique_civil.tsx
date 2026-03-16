import { FaCheckCircle } from "react-icons/fa";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";

export default function CivilPractice() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-8">

        {/* TEXTE GAUCHE */}
        <Reveal>
          <div>
            <h2 className="text-3xl font-bold text-[#1A237E] mb-6">
              Notre pratique en droit civil
            </h2>

            <p className="text-gray-700 leading-8 mb-8">
              Notre cabinet accompagne les particuliers et les entreprises
              dans la gestion de leurs litiges civils et dans la sécurisation
              de leurs relations juridiques : contrats, responsabilité civile,
              droit de la famille et gestion du patrimoine.
            </p>

               <Link
to="/contact"className="bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-medium 
            hover:bg-red-800 transition transform hover:scale-105 shadow-lg">
              Nous consulter →
            </Link>
          </div>
        </Reveal>


        {/* BLOC APPROCHE */}
        <Reveal>
          <div className="bg-[#E8DADA] p-10 rounded-xl shadow-lg">

            <h3 className="font-bold text-lg mb-4">
              Notre approche
            </h3>

            <p className="text-gray-700 mb-6 leading-7">
              Chaque dossier civil nécessite une analyse précise et une
              stratégie adaptée afin de protéger efficacement les intérêts
              de nos clients.
            </p>

            <ul className="space-y-4 text-gray-700">

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Analyse complète de votre dossier
              </li>

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Rédaction et sécurisation des contrats
              </li>

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Gestion des litiges et médiation
              </li>

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Défense devant les juridictions civiles
              </li>

            </ul>

          </div>
        </Reveal>

      </div>

    </section>
  );
}