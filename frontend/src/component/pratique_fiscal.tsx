import { FaCheckCircle } from "react-icons/fa";
import Reveal from "./Reveal";

export default function FiscalPractice() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-8">

        {/* TEXTE GAUCHE */}
        <Reveal>
          <div>

            <h2 className="text-3xl font-bold text-[#1A237E] mb-6">
              Notre Pratique En Droit Fiscal
            </h2>

            <p className="text-gray-700 leading-8 mb-8">
              Notre cabinet accompagne les entreprises et les particuliers
              dans la gestion de leurs obligations fiscales. Nous intervenons
              aussi bien en conseil qu’en contentieux afin de sécuriser les
              opérations économiques et défendre les intérêts de nos clients
              face à l’administration fiscale.
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
              En matière fiscale, la rigueur et l’anticipation sont
              essentielles. Nous analysons chaque situation afin de proposer
              des solutions optimisées tout en sécurisant juridiquement
              l’ensemble des opérations fiscales de nos clients.
            </p>

            <ul className="space-y-4 text-gray-700">

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Analyse complète de votre situation fiscale
              </li>

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Stratégie d’optimisation fiscale sécurisée
              </li>

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Assistance en cas de contrôle fiscal
              </li>

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Défense en contentieux fiscal
              </li>

            </ul>

          </div>
        </Reveal>

      </div>

    </section>
  );
}