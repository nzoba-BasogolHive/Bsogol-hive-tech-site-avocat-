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
              alt="Cybersécurité et droit pénal"
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
                <span>13 févr. 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser />
                <span>Expert cybersécurité</span>
              </div>
            </div>

            {/* TITRE */}
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">
              Le droit pénal et la cybersécurité : défis à venir
            </h1>

            {/* CITATION */}
            <div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8 text-sm md:text-base">
              Face à l’essor des cybercrimes, le droit pénal camerounais doit évoluer pour combler les lacunes et protéger les individus et les entreprises.
            </div>

            {/* TEXTE AVEC SOUS-TITRES */}
            <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">

              {/* Contexte */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Contexte et enjeux</h2>
                <p>
                  Avec l’expansion rapide de l’internet et des technologies numériques, le Cameroun et l’Afrique sont confrontés à une augmentation significative des cybercrimes, allant du phishing à la fraude financière et aux attaques contre les systèmes d’information. Ces activités illégales posent de nouveaux défis au cadre du droit pénal, qui n’a pas toujours suivi le rythme de la transformation numérique.
                </p>
                <p>
                  Les experts en cybersécurité et en droit pénal soulignent que la protection des citoyens, des entreprises et des institutions nécessite une adaptation rapide des lois existantes et l’élaboration de nouvelles réglementations adaptées aux crimes numériques.
                </p>
              </section>

              {/* Lacunes du droit pénal */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Lacunes identifiées</h2>
                <p>
                  Le droit pénal actuel présente certaines limites : certaines infractions numériques ne sont pas clairement définies, la preuve électronique est difficile à authentifier et la coopération internationale reste limitée face aux cybercriminels opérant à distance.
                </p>
                <p>
                  En conséquence, de nombreux cybercrimes échappent à la sanction, laissant les victimes sans recours efficace. Cette lacune met en évidence la nécessité de réformes législatives et d’une meilleure coordination entre les autorités judiciaires, les forces de l’ordre et les acteurs privés du secteur numérique.
                </p>
              </section>

              {/* Implications pour la cybersécurité */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Implications pour la cybersécurité</h2>
                <p>
                  Pour les entreprises et les particuliers, les conséquences de ces lacunes sont réelles : vols de données, pertes financières, atteinte à la réputation et risques pour la sécurité des systèmes. Une protection juridique insuffisante peut freiner le développement de l’économie numérique et réduire la confiance des citoyens dans les services en ligne.
                </p>
                <p>
                  Les spécialistes recommandent la mise en place de mécanismes de prévention, de détection et de sanction efficaces pour compléter le droit pénal existant. L’adoption de standards internationaux et la coopération transfrontalière sont essentielles pour réduire l’impunité dans le domaine numérique.
                </p>
              </section>

              {/* Recommandations */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Recommandations</h2>
                <p>
                  Les experts suggèrent plusieurs mesures pour renforcer le cadre juridique et la cybersécurité : 
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Actualiser et clarifier les textes législatifs relatifs aux infractions numériques.</li>
                  <li>Renforcer la formation des magistrats et des forces de l’ordre sur la preuve électronique et la criminalité informatique.</li>
                  <li>Promouvoir la coopération régionale et internationale pour enquêter et poursuivre les cybercriminels.</li>
                  <li>Encourager les entreprises à mettre en place des politiques de cybersécurité conformes aux standards légaux et techniques.</li>
                </ul>
                <p>
                  Une approche intégrée entre législation, technologie et formation est essentielle pour faire face aux défis croissants posés par la cybercriminalité.
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