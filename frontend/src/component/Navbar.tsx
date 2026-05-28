import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ServicesOverlay from "./ServicesOverlay";
import { useLanguage } from "../context/LanguageContext";

export default function NavbarComponent() {
  const [open, setOpen] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  const { lang, setLang } = useLanguage();

  const text = {
    fr: {
      call: "Appelez-nous",
      email: "Email",
      address: "Adresse",
      home: "Accueil",
      about: "À propos",
      services: "Services",
      news: "Actualités",
      contact: "Contact",
    },
    en: {
      call: "Call Us",
      email: "Email us",
      address: "Our address",
      home: "Home",
      about: "About",
      services: "Services",
      news: "News",
      contact: "Contact",
    },
  };

  const t = text[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenus = () => {
    setOpen(false);
    setMobileOpen(false);
  };

  const activeClass = ({ isActive }: { isActive: boolean }): string =>
    isActive
      ? "text-[#d1b986]"
      : "text-white hover:text-[#d1b986] transition-all duration-300";

  const mobileActiveClass = ({ isActive }: { isActive: boolean }): string =>
    isActive
      ? "text-[#d1b986] py-3 border-b border-white/10"
      : "text-white py-3 border-b border-white/10 hover:text-[#d1b986] transition-all duration-300";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-300 overflow-x-hidden ${
          scrolled ? "bg-[#162238]/95 shadow-lg backdrop-blur-md" : ""
        }`}
      >
        <div className="bg-[#162238]/85 h-[52px] hidden sm:block">
          <div className="max-w-[1180px] mx-auto px-4 h-full flex items-center justify-between text-sm">
            <div className="hidden lg:flex gap-12">
              <span>{t.call}: +237 656 413 387</span>
              <span>{t.email}: contact@cabinet-avocat.com</span>
              <span>{t.address}:Makepe, Douala, Cameroun</span>
            </div>

            <div className="flex gap-4 font-bold ml-auto">
              <span>f</span>
              <span>t</span>
              <span>in</span>
              <span>p</span>
              <span>sk</span>
            </div>
          </div>
        </div>

        <nav className="border-b border-white/15">
          <div className="max-w-[1180px] mx-auto px-4 h-[78px] lg:h-[94px] flex items-center">
            <Link to="/" onClick={closeMenus} className="flex items-center gap-3 mr-auto min-w-0">
              <div className="shrink-0 w-10 h-10 lg:w-11 lg:h-11 rounded-full border-2 border-[#d1b986] flex items-center justify-center font-serif text-2xl">
                L
              </div>

              <span className="font-serif text-2xl sm:text-4xl truncate">
                juristic
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-9 font-semibold">
              <NavLink to="/" onClick={closeMenus} className={activeClass}>
                {t.home}
              </NavLink>

              <NavLink to="/apropos" onClick={closeMenus} className={activeClass}>
                {t.about}
              </NavLink>

              <button
                type="button"
                onClick={() => {
                  setOpen(true);
                  setMobileOpen(false);
                }}
                className="text-white hover:text-[#d1b986] transition-all duration-300"
              >
                {t.services}
              </button>

              <NavLink to="/actualites" onClick={closeMenus} className={activeClass}>
                {t.news}
              </NavLink>
            </div>

            <div className="hidden lg:flex ml-8 pl-8 h-full border-l border-white/15 items-center gap-5">
              <NavLink to="/contact" onClick={closeMenus} className={activeClass}>
                {t.contact}
              </NavLink>

              <button
                type="button"
                onClick={() => setLang("fr")}
                className={lang === "fr" ? "text-[#d1b986] text-sm" : "text-sm"}
              >
                FR
              </button>

              <button
                type="button"
                onClick={() => setLang("en")}
                className={lang === "en" ? "text-[#d1b986] text-sm" : "text-sm"}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden shrink-0 text-white text-2xl ml-3 w-10 h-10 flex items-center justify-center rounded-full border border-white/20"
            >
              {mobileOpen ? "×" : "☰"}
            </button>
          </div>

          {mobileOpen && (
            <div className="lg:hidden mx-4 mb-4 rounded-2xl bg-[#162238]/95 backdrop-blur-md border border-white/15 px-5 py-4 shadow-xl">
              <div className="flex flex-col font-semibold">
                <NavLink onClick={closeMenus} to="/" className={mobileActiveClass}>
                  {t.home}
                </NavLink>

                <NavLink onClick={closeMenus} to="/apropos" className={mobileActiveClass}>
                  {t.about}
                </NavLink>

                <button
                  type="button"
                  onClick={() => {
                    setOpen(true);
                    setMobileOpen(false);
                  }}
                  className="text-left text-white py-3 border-b border-white/10 hover:text-[#d1b986] transition-all duration-300"
                >
                  {t.services}
                </button>

                <NavLink onClick={closeMenus} to="/actualites" className={mobileActiveClass}>
                  {t.news}
                </NavLink>
                <NavLink onClick={closeMenus} to="/contact" className={mobileActiveClass}>
                  {t.contact}
                </NavLink>
              </div>

              <div className="flex items-center justify-between pt-5">
                <div className="flex gap-4 font-bold text-sm">
                  <span>f</span>
                  <span>t</span>
                  <span>in</span>
                  <span>p</span>
                  <span>sk</span>
                </div>

                <div className="flex gap-4 text-sm font-semibold">
                  <button
                    type="button"
                    onClick={() => setLang("fr")}
                    className={lang === "fr" ? "text-[#d1b986]" : "text-white"}
                  >
                    FR
                  </button>

                  <button
                    type="button"
                    onClick={() => setLang("en")}
                    className={lang === "en" ? "text-[#d1b986]" : "text-white"}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <ServicesOverlay open={open} setOpen={setOpen} />
    </>
  );
}