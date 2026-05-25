import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import ServicesOverlay from "./ServicesOverlay";

const languages = [
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "en", label: "EN", flag: "🇬🇧" },
];

export default function NavbarComponent() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState(languages[0]);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: lang.code === "fr" ? "Accueil" : "Home" },
    { to: "/apropos", label: lang.code === "fr" ? "À propos" : "About" },
    { to: "/actualites", label: lang.code === "fr" ? "Actualités" : "News" },
    { to: "/equipe", label: lang.code === "fr" ? "Équipe" : "Team" },
  ];

  const navBase = scrolled
    ? "bg-[#0a0814]/95 backdrop-blur-xl border-[#1b0f6b] shadow-2xl"
    : "bg-white/10 backdrop-blur-lg border-white/20 shadow-xl";

  const linkBase = scrolled
    ? "text-[#a89cc8] hover:text-[#c9a84c]"
    : "text-white/90 hover:text-[#c9a84c]";

  const activeLink = "text-[#c9a84c] border-b-2 border-[#c9a84c] pb-0.5";

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 md:pt-6">
      <nav
        className={`w-[95%] max-w-7xl px-5 md:px-10 py-3 md:py-4 rounded-2xl border transition-all duration-500 ${navBase}`}
      >
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold tracking-widest transition-all duration-300 hover:scale-105"
            style={{ color: "#c9a84c" }}
          >
            LOGO
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-8 text-[14px] font-medium">

            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `transition-all duration-300 ${isActive ? activeLink : linkBase}`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* SERVICES */}
            <button
              onClick={() => setOpen(true)}
              className={`transition-all duration-300 ${linkBase}`}
            >
              {lang.code === "fr" ? "Services" : "Services"}
            </button>
            <ServicesOverlay open={open} setOpen={setOpen} />

            {/* SÉLECTEUR LANGUE */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-lg border transition-all duration-300 ${
                  scrolled
                    ? "border-[#1b0f6b] text-[#a89cc8] hover:border-[#c9a84c] hover:text-[#c9a84c]"
                    : "border-white/30 text-white/80 hover:border-[#c9a84c] hover:text-[#c9a84c]"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {langOpen && (
                <div
                  className="absolute right-0 mt-2 w-28 rounded-xl border overflow-hidden shadow-xl"
                  style={{ backgroundColor: "#0a0814", borderColor: "#1b0f6b" }}
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-all duration-200 hover:bg-[#1b0f6b] ${
                        lang.code === l.code ? "text-[#c9a84c] font-semibold" : "text-[#a89cc8]"
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* BOUTON CONTACT */}
            <NavLink
              to="/contact"
              className="px-5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "#c9a84c", color: "#0a0814" }}
            >
              {lang.code === "fr" ? "Contactez-nous" : "Contact us"}
            </NavLink>

          </div>

          {/* BOUTON HAMBURGER MOBILE */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-all duration-300"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              style={{ backgroundColor: "#c9a84c" }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
              style={{ backgroundColor: "#c9a84c" }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              style={{ backgroundColor: "#c9a84c" }}
            />
          </button>

        </div>

        {/* MENU MOBILE */}
        {mobileOpen && (
          <div
            className="md:hidden mt-4 rounded-xl border overflow-hidden"
            style={{ backgroundColor: "#0a0814", borderColor: "#1b0f6b" }}
          >
            <div className="flex flex-col text-sm font-medium">

              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-5 py-3.5 border-b transition-all duration-200 ${
                      isActive
                        ? "text-[#c9a84c] bg-[#1b0f6b]/40"
                        : "text-[#a89cc8] hover:text-[#c9a84c] hover:bg-[#1b0f6b]/20"
                    }`
                  }
                  style={{ borderColor: "#1b0f6b" }}
                >
                  {item.label}
                </NavLink>
              ))}

              <button
                onClick={() => { setOpen(true); setMobileOpen(false); }}
                className="px-5 py-3.5 text-left border-b text-[#a89cc8] hover:text-[#c9a84c] hover:bg-[#1b0f6b]/20 transition-all duration-200"
                style={{ borderColor: "#1b0f6b" }}
              >
                {lang.code === "fr" ? "Services" : "Services"}
              </button>

              {/* LANGUE MOBILE */}
              <div
                className="px-5 py-3.5 flex items-center gap-3 border-b"
                style={{ borderColor: "#1b0f6b" }}
              >
                <span className="text-xs uppercase tracking-wider" style={{ color: "#c9a84c" }}>
                  Langue :
                </span>
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l)}
                    className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold transition-all duration-200 ${
                      lang.code === l.code
                        ? "text-[#0a0814] bg-[#c9a84c]"
                        : "text-[#a89cc8] border border-[#1b0f6b] hover:border-[#c9a84c]"
                    }`}
                  >
                    {l.flag} {l.label}
                  </button>
                ))}
              </div>

              {/* CONTACT MOBILE */}
              <NavLink
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mx-4 my-4 py-3 rounded-xl text-center text-sm font-bold uppercase tracking-wider transition-all duration-300"
                style={{ backgroundColor: "#c9a84c", color: "#0a0814" }}
              >
                {lang.code === "fr" ? "Contactez-nous" : "Contact us"}
              </NavLink>

            </div>
          </div>
        )}

      </nav>
    </div>
  );
}