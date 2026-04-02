import { FaCalendarAlt, FaUser } from "react-icons/fa";

import img4 from "/src/assets/image (26).webp";

export default function ArticlePage() {

  return (
   
      <section className="bg-gray-100 py-10 md:py-20">
        <div className="max-w-screen-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={img4}
              alt="Urbanisme et droit de l’habitat au Cameroun"
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
                <span>20 juin 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser />
                <span>Urbaniste juridique</span>
              </div>
            </div>

            {/* TITRE */}
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">
              Urbanisme et droit de l’habitat au Cameroun
            </h1>

            {/* CITATION */}
            <div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8 text-sm md:text-base">
              Nouvelles initiatives législatives sur la planification urbaine et l’habitat.
            </div>

            {/* TEXTE AVEC SOUS-TITRES */}
            <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">

              {/* Contexte */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Contexte et enjeux</h2>
                <p>
                  Le Cameroun connaît une urbanisation rapide, nécessitant une planification urbaine rigoureuse et une adaptation du cadre juridique de l’habitat. Les nouvelles initiatives législatives visent à encadrer la construction, l’aménagement et la sécurité des logements dans les zones urbaines.
                </p>
                <p>
                  L’objectif est de garantir un développement harmonieux des villes, tout en protégeant les droits des habitants et en assurant la durabilité des projets urbains.
                </p>
              </section>

              {/* Réformes législatives */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Réformes législatives en urbanisme</h2>
                <p>
                  Les principales mesures introduites par les nouvelles lois incluent :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Renforcement des règles d’urbanisme pour la construction et l’aménagement du territoire.</li>
                  <li>Encadrement juridique des permis de construire et des autorisations d’occupation du sol.</li>
                  <li>Mesures pour protéger les espaces verts et les zones sensibles.</li>
                  <li>Promotion de logements durables et respectueux des normes de sécurité.</li>
                </ul>
              </section>

              {/* Implications pratiques */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Implications pour les acteurs de l’habitat</h2>
                <p>
                  Les promoteurs immobiliers, architectes et collectivités locales doivent se conformer à ces nouvelles règles pour éviter des sanctions et garantir la conformité des projets. Les habitants bénéficient d’une meilleure sécurité juridique et d’un accès à des logements conformes aux normes.
                </p>
                <p>
                  Une bonne maîtrise du droit de l’urbanisme est donc indispensable pour planifier, construire et gérer des projets immobiliers sûrs et durables.
                </p>
              </section>

              {/* Recommandations */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Recommandations</h2>
                <p>
                  Pour optimiser la conformité et la sécurité des projets urbains, les experts recommandent :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Se tenir informé des nouvelles réglementations en matière d’urbanisme et d’habitat.</li>
                  <li>Collaborer avec des juristes et urbanistes pour sécuriser les projets immobiliers.</li>
                  <li>Respecter les normes de construction, sécurité et environnementales.</li>
                  <li>Assurer la transparence et la conformité administrative pour éviter les litiges.</li>
                </ul>
                <p>
                  Ces mesures contribuent à un urbanisme structuré et à la protection des droits des populations dans les zones urbaines camerounaises.
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