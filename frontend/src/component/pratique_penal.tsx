import { FaCheckCircle } from "react-icons/fa";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";
export default function PenalPractice() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="section-container mx-auto grid md:grid-cols-2 gap-16 px-8">

        {/* TEXTE GAUCHE */}
        <Reveal>
          <div>

            <h2 className="text-3xl font-bold text-[#1A237E] mb-6">
              Notre Pratique En Droit Pénal
            </h2>

            <p className="text-gray-700 leading-8 mb-8">
              Notre équipe de pénalistes de premier rang intervient à tous les
              stades de la procédure pénale. Nous défendons des particuliers,
              des dirigeants d’entreprise et des personnes morales avec une
              stratégie combative fondée sur une maîtrise technique et une
              connaissance fine des juridictions.
            </p>

            {/* bouton premium */}
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
              Notre Approche
            </h3>

            <p className="text-gray-700 mb-6 leading-7">
              En droit pénal, chaque heure compte. Notre réactivité et notre
              maîtrise des procédures d'urgence constituent des atouts
              décisifs. Nous concevons chaque défense comme unique.
            </p>

            <ul className="space-y-4 text-gray-700">

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Analyse approfondie de votre situation
              </li>

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Stratégie sur mesure et personnalisée
              </li>

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Suivi régulier et transparence
              </li>

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Honoraires clairs et justifiés
              </li>

            </ul>

          </div>
        </Reveal>

      </div>

    </section>
  );
}