import {
  FaPhoneAlt,
  FaPaperPlane,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();


  const text = {
    fr: {
      logo: "CABINET AVOCATS",
      desc: "Un cabinet d'avocats d'excellence, dédié à la défense de vos intérêts avec rigueur et professionnalisme depuis plus de 25 ans.",
      navigation: "Navigation",
      domains: "Nos Domaines",
      contact: "Contact",
      newsletter: "Newsletter",
      newsletterText: "Recevez nos actualités juridiques et conseils professionnels.",
      emailPlaceholder: "Votre email",
      subscribe: "S’abonner",
      rights: "© 2025 Cabinet Avocats Associés. Tous droits réservés.",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
      links: ["Accueil", "À propos", "Actualités", "Contact"],
     domainList: [
  { name: "Droit pénal", path: "/services/droit-penal" },
  { name: "Droit civil", path: "/services/droit-civil" },
  { name: "Droit des affaires", path: "/services/droit-affaires" },
  { name: "Droit du travail", path: "/services/droit-travail" },
  { name: "Droit fiscal", path: "/services/droit-fiscal" },
],
    },
    en: {
      logo: "LAW FIRM",
      desc: "A leading law firm dedicated to defending your interests with rigor and professionalism for over 25 years.",
      navigation: "Navigation",
      domains: "Practice Areas",
      contact: "Contact",
      newsletter: "Newsletter",
      newsletterText: "Receive our legal news and professional advice.",
      emailPlaceholder: "Your email",
      subscribe: "Subscribe",
      rights: "© 2025 Associated Law Firm. All rights reserved.",
      legal: "Legal Notice",
      privacy: "Privacy Policy",
      links: ["Home", "About", "News", "Contact"],
     domainList: [
  { name: "Criminal Law", path: "/services/droit-penal" },
  { name: "Civil Law", path: "/services/droit-civil" },
  { name: "Business Law", path: "/services/droit-affaires" },
  { name: "Employment Law", path: "/services/droit-travail" },
  { name: "Tax Law", path: "/services/droit-fiscal" },
],
    },
  };

  const t = text[lang];

  const navLinks = [
    { name: t.links[0], path: "/" },
    { name: t.links[1], path: "/apropos" },
    { name: t.links[2], path: "/actualites" },
    { name: t.links[3], path: "/contact" },
  ];

  return (
    <footer className="relative w-full bg-[#162238] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,185,134,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_35%)]" />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-radial-gradient(ellipse 700px 350px at 50% 50%, transparent 0, transparent 58px, #d1b986 59px, transparent 60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-16 md:pt-20 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border-2 border-[#d1b986] flex items-center justify-center font-serif text-2xl text-[#d1b986]">
                L
              </div>
              <span className="font-serif text-3xl">juristic</span>
            </Link>

            <p className="font-semibold mb-3 text-[#d1b986]">{t.logo}</p>

            <p className="text-white/65 text-sm leading-relaxed max-w-sm">
              {t.desc}
            </p>

            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/70 hover:bg-[#d1b986] hover:text-white hover:border-[#d1b986] transition"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6">{t.navigation}</h3>

            <ul className="space-y-3 text-white/65 text-sm">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-[#d1b986] transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6">{t.domains}</h3>

            <ul className="space-y-3 text-white/65 text-sm">
             {t.domainList.map((item) => (
  <li key={item.path}>
    <Link
      to={item.path}
      className="hover:text-[#d1b986] transition"
    >
      {item.name}
    </Link>
  </li>
))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6">{t.contact}</h3>

            <div className="space-y-4 text-white/65 text-sm">
              <div className="flex items-start gap-3">
                <FaPaperPlane className="text-[#d1b986] mt-1" />
                <p>Makèpe, Douala</p>
              </div>

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-[#d1b986] mt-1" />
                <p>+237 656 413 387</p>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="text-[#d1b986] mt-1" />
                <p>contact@cabinet-avocat.com</p>
              </div>
            </div>

            <div className="mt-7">
              <p className="font-serif text-lg mb-2">{t.newsletter}</p>
              <p className="text-white/55 text-sm mb-4">{t.newsletterText}</p>

              <div className="flex border border-white/15">
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  className="w-full bg-transparent px-4 py-3 text-sm outline-none text-white placeholder:text-white/40"
                />
                <button className="bg-[#d1b986] px-4 text-white">
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p className="text-center md:text-left">{t.rights}</p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link to="#" className="hover:text-[#d1b986] transition">
              {t.legal}
            </Link>

            <Link to="#" className="hover:text-[#d1b986] transition">
              {t.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}