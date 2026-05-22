import { FaPhoneAlt, FaPaperPlane, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full relative overflow-hidden bg-[#0a0814] text-white pt-20 pb-10">

      {/* GLOW BACKGROUND */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[250px] bg-[#1b0f6b]/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[300px] h-[200px] bg-[#c9a84c]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* LOGO */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#c9a84c]" />

              <h3
                className="text-xl font-bold text-white"
                style={{ fontFamily: "Garamond, serif" }}
              >
                Logo
              </h3>
            </div>

            <p className="font-semibold mb-4 text-[#c9a84c] tracking-wide uppercase text-sm">
              Cabinet Avocats
            </p>

            <p className="text-white/55 text-sm leading-8">
              Un cabinet d'avocats d'excellence, dédié à la défense
              de vos intérêts avec rigueur et professionnalisme
              depuis plus de 25 ans.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="font-semibold mb-6 uppercase tracking-[0.2em] text-[#c9a84c] text-sm">
              Navigation
            </h3>

            <ul className="space-y-4 text-white/60">

              <li>
                <Link
                  to="/"
                  className="hover:text-white transition duration-300"
                >
                  Accueil
                </Link>
              </li>

              <li>
                <Link
                  to="/apropos"
                  className="hover:text-white transition duration-300"
                >
                  A Propos
                </Link>
              </li>

              <li>
                <Link
                  to="/equipe"
                  className="hover:text-white transition duration-300"
                >
                  Equipe
                </Link>
              </li>

              <li>
                <Link
                  to="/actualite"
                  className="hover:text-white transition duration-300"
                >
                  Actualités
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* DOMAINES */}
          <div>
            <h3 className="font-semibold mb-6 uppercase tracking-[0.2em] text-[#c9a84c] text-sm">
              Nos Domaines
            </h3>

            <ul className="space-y-4 text-white/60">
              <li>Droit Pénal</li>
              <li>Droit Civil</li>
              <li>Droit des Affaires</li>
              <li>Droit du Travail</li>
              <li>Droit Fiscal</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-6 uppercase tracking-[0.2em] text-[#c9a84c] text-sm">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-4 text-white/60">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <FaPaperPlane className="text-[#c9a84c]" />
                </div>

                <p>Makèpe, Douala</p>
              </div>

              <div className="flex items-center gap-4 text-white/60">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <FaPhoneAlt className="text-[#c9a84c]" />
                </div>

                <p>+237 656413387</p>
              </div>

              <p className="text-white/60 pl-1">
                contact@cabinet-avocat.fr
              </p>

            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">

          <p>
            © 2024 Cabinet Avocats Associés. Tous droits réservés.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <Link
              to="/mentions-legales"
              className="hover:text-white transition duration-300"
            >
              Mentions Légales
            </Link>

            <Link
              to="/confidentialite"
              className="hover:text-white transition duration-300"
            >
              Politique de confidentialité
            </Link>

          </div>
        </div>
      </div>

      {/* SCROLL TOP */}
      <button
        onClick={scrollTop}
        className="
          absolute
          right-8
          bottom-8
          w-14
          h-14
          rounded-full
          bg-[#c9a84c]
          text-[#0a0814]
          flex
          items-center
          justify-center
          shadow-[0_10px_40px_rgba(201,168,76,0.35)]
          hover:scale-110
          transition-all
          duration-300
        "
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}