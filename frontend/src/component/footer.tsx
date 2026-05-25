import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaArrowUp, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Accueil", to: "/" },
    { label: "À Propos", to: "/apropos" },
    { label: "Notre Équipe", to: "/equipe" },
    { label: "Actualités", to: "/actualites" },
    { label: "Contact", to: "/contact" },
  ];

  const domaines = [
    "Droit Pénal",
    "Droit Civil",
    "Droit des Affaires",
    "Droit du Travail",
    "Droit Fiscal",
  ];

  const socialLinks = [
    { href: "#", label: "Facebook", icon: <FaFacebookF size={14} /> },
    { href: "#", label: "LinkedIn", icon: <FaLinkedinIn size={14} /> },
    { href: "#", label: "Twitter", icon: <FaTwitter size={14} /> },
  ];

  return (
    <footer className="w-full bg-[#0a0814] text-white pt-16 pb-6 relative">

      {/* BANDE DORÉE */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#c9a84c]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1b0f6b]">

          {/* COLONNE 1 — CABINET */}
          <div>
            <h2 className="text-lg font-bold text-[#c9a84c] uppercase tracking-widest mb-4">
              Cabinet Avocats
            </h2>
            <p className="text-[#a89cc8] text-sm leading-relaxed mb-6">
              Un cabinet d'avocats d'excellence, dédié à la défense de vos
              intérêts avec rigueur et professionnalisme depuis plus de 25 ans.
            </p>
           <div className="flex gap-3">
  {socialLinks.map((s) => (
    <a
      key={s.label}
      href={s.href}
      aria-label={s.label}
      className="w-9 h-9 rounded-full border border-[#1b0f6b] flex items-center justify-center text-[#a89cc8] hover:bg-[#c9a84c] hover:text-[#0a0814] hover:border-[#c9a84c] transition-all duration-300"
    >
      {s.icon}
    </a>
  ))}
</div>
          </div>

          {/* COLONNE 2 — NAVIGATION */}
          <div>
            <h3 className="text-sm font-bold text-[#c9a84c] uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-[#a89cc8] hover:text-[#c9a84c] hover:pl-1 transition-all duration-200 flex items-center gap-2"
                  >
                    <span className="text-[#c9a84c] text-xs">›</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE 3 — DOMAINES */}
          <div>
            <h3 className="text-sm font-bold text-[#c9a84c] uppercase tracking-widest mb-4">
              Nos Domaines
            </h3>
            <ul className="space-y-2 text-sm">
              {domaines.map((domaine) => (
                <li key={domaine} className="text-[#a89cc8] flex items-center gap-2">
                  <span className="text-[#c9a84c] text-xs">›</span>
                  {domaine}
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE 4 — CONTACT */}
          <div>
            <h3 className="text-sm font-bold text-[#c9a84c] uppercase tracking-widest mb-4">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-[#a89cc8]">
                <FaMapMarkerAlt className="text-[#c9a84c] mt-0.5 shrink-0" />
                <span>Makèpe, Douala, Cameroun</span>
              </li>
              <li className="flex items-center gap-3 text-[#a89cc8]">
                <FaPhoneAlt className="text-[#c9a84c] shrink-0" />
                <a href="tel:+237656413387" className="hover:text-[#c9a84c] transition">
                  +237 656 413 387
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#a89cc8]">
                <FaEnvelope className="text-[#c9a84c] shrink-0" />
                <a href="mailto:contact@cabinet-avocat.fr" className="hover:text-[#c9a84c] transition">
                  contact@cabinet-avocat.fr
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#a89cc8]">
          <p>© {currentYear} Cabinet Avocats Associés. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link to="/mentions-legales" className="hover:text-[#c9a84c] transition">
              Mentions légales
            </Link>
            <Link to="/confidentialite" className="hover:text-[#c9a84c] transition">
              Politique de confidentialité
            </Link>
          </div>
        </div>

      </div>

      {/* BOUTON SCROLL TOP */}
      <button
        onClick={scrollTop}
        aria-label="Retour en haut"
        className="absolute right-8 bottom-8 w-11 h-11 bg-[#c9a84c] text-[#0a0814] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-white transition-all duration-300"
      >
        <FaArrowUp size={14} />
      </button>

    </footer>
  );
}