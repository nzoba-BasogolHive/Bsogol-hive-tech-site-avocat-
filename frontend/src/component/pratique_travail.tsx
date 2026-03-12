import { FaCheckCircle } from "react-icons/fa";
import Reveal from "./Reveal";

export default function TravailPractice() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-8">

        {/* TEXTE GAUCHE */}
        <Reveal>
          <div>

            <h2 className="text-3xl font-bold text-[#1A237E] mb-6">
              Notre Pratique En Droit du Travail
            </h2>

            <p className="text-gray-700 leading-8 mb-8">
              Notre cabinet accompagne employeurs et salariés dans la gestion
              des relations de travail. Nous intervenons dans la rédaction et
              la sécurisation des contrats de travail, la gestion des conflits
              sociaux ainsi que dans la défense des intérêts de nos clients
              devant les juridictions compétentes, notamment le Conseil de
              prud’hommes.
            </p>

            {/* bouton */}
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
              En droit du travail, chaque situation nécessite une analyse
              précise des relations professionnelles et des obligations
              légales. Notre cabinet privilégie une approche stratégique
              visant à prévenir les conflits et à défendre efficacement
              vos intérêts en cas de litige.
            </p>

            <ul className="space-y-4 text-gray-700">

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Analyse approfondie de votre situation professionnelle
              </li>

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Conseil stratégique pour employeurs et salariés
              </li>

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Assistance devant le Conseil de prud’hommes
              </li>

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Accompagnement juridique personnalisé
              </li>

            </ul>

          </div>
        </Reveal>

      </div>

    </section>
  );
}