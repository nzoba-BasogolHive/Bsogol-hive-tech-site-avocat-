import { Footer } from "flowbite-react";

export default function FooterSection() {
  return (
    <Footer container className="bg-[#07073f] text-white">
      <div className="w-full px-10 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* COLONNE 1 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">LOGO</h3>

            <h4 className="font-semibold mb-3">CABINET AVOCATS</h4>

            <p className="text-sm text-gray-300">
              Un cabinet d'avocats d'excellence, dédié à la défense
              de vos intérêts avec rigueur et professionnalisme
              depuis plus de 25 ans.
            </p>
          </div>


          {/* COLONNE 2 */}
          <div>
            <h3 className="mb-4 font-semibold">NAVIGATION</h3>

            <ul className="space-y-2 text-gray-300">
              <li>Accueil</li>
              <li>A Propos</li>
              <li>Equipe</li>
              <li>Actualité</li>
              <li>Contact</li>
            </ul>
          </div>


          {/* COLONNE 3 */}
          <div>
            <h3 className="mb-4 font-semibold">NOS DOMAINES</h3>

            <ul className="space-y-2 text-gray-300">
              <li>Droit Pénal</li>
              <li>Droit Civil</li>
              <li>Droit des Affaires</li>
              <li>Droit du Travail</li>
              <li>Droit Fiscal</li>
            </ul>
          </div>


          {/* COLONNE 4 */}
          <div className="space-y-3 text-gray-300">
            <p>📍 Makèpe, Douala</p>
            <p>📞 +237 656413387</p>
            <p>✉️ contact@cabinet-avocat.fr</p>
          </div>

        </div>


        {/* BAS FOOTER */}

        <div className="border-t border-gray-600 mt-10 pt-6 flex justify-between text-sm text-gray-300">
          <p>© 2024 Cabinet Avocats Associés. Tous droits réservés.</p>

          <div className="flex gap-6">
            <span>Mention Legal</span>
            <span>Politique de confidentialité</span>
          </div>
        </div>

      </div>
    </Footer>
  );
}