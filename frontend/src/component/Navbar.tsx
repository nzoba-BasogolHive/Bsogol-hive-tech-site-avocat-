import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import ServicesOverlay from "./ServicesOverlay";

export default function NavbarComponent() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/",           label: "Accueil" },
    { to: "/apropos",    label: "À propos" },
    { to: "/actualites", label: "Actualités" },
    { to: "/equipe",     label: "Équipe" },
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
      <nav className={`w-[95%] max-w-7xl px-5 md:px-10 py-3 md:py-4 rounded-2xl border transition-all duration-500 ${navBase}`}>
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl md:text-xl font-bold tracking-widest transition-all duration-300 hover:scale-105"
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

            <button
              onClick={() => setOpen(true)}
              className={`transition-all duration-300 ${linkBase}`}
            >
              Services
            </button>
            <ServicesOverlay open={open} setOpen={setOpen} />

            <NavLink
              to="/contact"
              className="px-5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "#c9a84c", color: "#0a0814" }}
            >
              Contactez-nous
            </NavLink>

          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-all duration-300"
            aria-label="Menu"
          >
            <span
  className={`block w-6 h-0.5 bg-[#c9a84c] transition-all duration-300 ${
    mobileOpen ? "rotate-45 translate-y-2" : ""
  }`}
/>

<span
  className={`block w-6 h-0.5 bg-[#c9a84c] transition-all duration-300 ${
    mobileOpen ? "opacity-0" : ""
  }`}
/>

<span
  className={`block w-6 h-0.5 bg-[#c9a84c] transition-all duration-300 ${
    mobileOpen ? "-rotate-45 -translate-y-2" : ""
  }`}
/>
          </button>

        </div>

        {/* MENU MOBILE */}
        {mobileOpen && (
          <div className="md:hidden mt-4 rounded-xl border overflow-hidden bg-[#0a0814] border-[#1b0f6b]">
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
  className="px-5 py-3.5 text-left border-b border-[#1b0f6b] text-[#a89cc8] hover:text-[#c9a84c] hover:bg-[#1b0f6b]/20 transition-all duration-200"
>
  Services
</button>
              <NavLink
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mx-4 my-4 py-3 rounded-xl text-center text-sm font-bold uppercase tracking-wider transition-all duration-300"
                style={{ backgroundColor: "#c9a84c", color: "#0a0814" }}
              >
                Contactez-nous
              </NavLink>

            </div>
          </div>
        )}

      </nav>
    </div>
  );
}