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
              alt="Prix du meilleur écrit juridique OHADA"
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
                <span>15 mai 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser />
                <span>Organisateurs OHADA</span>
              </div>
            </div>

            {/* TITRE */}
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">
              Actualité OHADA : Prix du meilleur écrit juridique
            </h1>

            {/* CITATION */}
            <div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8 text-sm md:text-base">
              La cérémonie du prix du meilleur écrit à Douala célèbre l’excellence et l’innovation en droit des affaires.
            </div>

            {/* TEXTE AVEC SOUS-TITRES */}
            <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">

              {/* Contexte */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Contexte et objectifs du prix</h2>
                <p>
                  L’Organisation pour l’Harmonisation en Afrique du Droit des Affaires (OHADA) organise chaque année un concours pour récompenser le meilleur écrit juridique. Ce prix vise à encourager la qualité, la rigueur et l’innovation dans la rédaction juridique, en mettant en lumière les contributions des étudiants, jeunes juristes et professionnels du droit.
                </p>
                <p>
                  La cérémonie à Douala constitue une plateforme de reconnaissance et de valorisation des talents juridiques dans la région et contribue à renforcer la culture de l’excellence en droit des affaires.
                </p>
              </section>

              {/* Critères et participation */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Critères et participation</h2>
                <p>
                  Les participants doivent soumettre des écrits juridiques originaux portant sur des thématiques du droit des affaires OHADA. Les critères d’évaluation incluent :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>La clarté et la rigueur de l’argumentation juridique.</li>
                  <li>La pertinence et l’actualité du sujet traité.</li>
                  <li>L’innovation et l’originalité de l’analyse.</li>
                  <li>Le respect des normes de rédaction et de citation juridique.</li>
                </ul>
              </section>

              {/* Impact et importance */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Impact sur le monde juridique</h2>
                <p>
                  Le prix contribue à renforcer la qualité des publications juridiques et encourage les jeunes professionnels à exceller dans leur domaine. Il valorise également les meilleures pratiques et favorise la diffusion de connaissances juridiques innovantes au sein de la communauté OHADA.
                </p>
                <p>
                  Les lauréats bénéficient de visibilité, de reconnaissance professionnelle et souvent d’opportunités de carrière, ce qui renforce l’attractivité et le développement du droit des affaires dans la région.
                </p>
              </section>

              {/* Recommandations et encouragements */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Encouragements et recommandations</h2>
                <p>
                  Les experts recommandent aux étudiants et professionnels intéressés par ce prix de :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Se tenir informés des thématiques actuelles en droit des affaires OHADA.</li>
                  <li>Produire des écrits originaux, bien structurés et argumentés.</li>
                  <li>Consulter régulièrement des mentors ou experts pour améliorer la qualité de leur travail.</li>
                  <li>Participer activement aux concours et événements juridiques pour renforcer leur réseau et visibilité professionnelle.</li>
                </ul>
                <p>
                  Ces initiatives permettent de renforcer l’excellence juridique et de stimuler l’innovation dans le domaine du droit des affaires en Afrique.
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