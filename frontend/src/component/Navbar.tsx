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

    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-8">

      <Navbar
        fluid
        rounded
        className="

        w-[92%] max-w-7xl
        px-12 py-5

        bg-white/60
        backdrop-blur-xl

        border border-white/40
        rounded-2xl

        shadow-[0_8px_30px_rgba(0,0,0,0.08)]

        transition-all duration-300
        "

      >

        {/* LOGO */}

        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-gray-900"
        >
          LOGO
        </Link>


        {/* MENU */}

        <div
          className="flex items-center ml-auto space-x-10 text-[15px] font-medium"
          ref={menuRef}
        >

          {/* ACCUEIL */}

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-black border-b-2 border-red-600 pb-1"
                : "text-gray-700 hover:text-black transition duration-300"
            }
          >
            Accueil
          </NavLink>


          {/* A PROPOS */}

          <NavLink
            to="/apropos"
            className={({ isActive }) =>
              isActive
                ? "text-black border-b-2 border-red-600 pb-1"
                : "text-gray-700 hover:text-black transition duration-300"
            }
          >
            À propos
          </NavLink>


          {/* SERVICES */}

          <button
            onClick={() => setOpen(true)}
            className="text-gray-700 hover:text-black transition duration-300"
          >
            Services
          </button>

          <ServicesOverlay open={open} setOpen={setOpen} />


          {/* ACTUALITES */}

          <NavLink
            to="/actualites"
            className={({ isActive }) =>
              isActive
                ? "text-black border-b-2 border-red-600 pb-1"
                : "text-gray-700 hover:text-black transition duration-300"
            }
          >
            Actualités
          </NavLink>


          {/* EQUIPE */}

          <NavLink
            to="/equipe"
            className={({ isActive }) =>
              isActive
                ? "text-black border-b-2 border-red-600 pb-1"
                : "text-gray-700 hover:text-black transition duration-300"
            }
          >
            Équipe
          </NavLink>


          {/* CONTACT */}

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-black border-b-2 border-red-600 pb-1"
                : "text-gray-700 hover:text-black transition duration-300"
            }
          >
            Contact
          </NavLink>

        </div>

      </Navbar>

    </div>

  );

}