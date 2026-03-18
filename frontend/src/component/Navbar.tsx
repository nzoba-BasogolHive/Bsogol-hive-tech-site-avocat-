import { Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import ServicesOverlay from "./ServicesOverlay";

export default function NavbarComponent() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-12">
      <Navbar
        fluid
        rounded
        className="
          w-[95%] max-w-7xl
          px-12 py-5

          bg-white/20
          backdrop-blur-lg
          border border-white/30
          rounded-xl

          shadow-xl
          transition-all duration-500
        "
      >
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-gray-900 transition-all duration-300 hover:text-blue-600 hover:scale-105"
        >
        LOGO
        </Link>

        {/* MENU */}
        <div
          className="flex items-center ml-auto space-x-10 text-[15px] font-medium"
          ref={menuRef}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600 transition-all duration-300"
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/apropos"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600 transition-all duration-300"
            }
          >
            À propos
          </NavLink>

          <button
            onClick={() => setOpen(true)}
            className="text-gray-700 hover:text-blue-600 transition-all duration-300"
          >
            Services
          </button>
          <ServicesOverlay open={open} setOpen={setOpen} />

          <NavLink
            to="/actualites"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600 transition-all duration-300"
            }
          >
            Actualités
          </NavLink>

          <NavLink
            to="/equipe"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600 transition-all duration-300"
            }
          >
            Équipe
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600 transition-all duration-300"
            }
          >
            Contact
          </NavLink>
        </div>
      </Navbar>
    </div>
  );
}