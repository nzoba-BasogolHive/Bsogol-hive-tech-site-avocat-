import { Navbar, NavbarBrand } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function NavbarComponent() {

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // fermeture automatique quand on clique ailleurs
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

    <div className="pt-8 px-12">

      <Navbar className="bg-[#E8E8E8] rounded-[15px] px-10 py-4 shadow-md max-w-5xl ml-auto mr-12">

        {/* Logo */}
       <Link to="/" className="text-xl font-bold text-gray-900">
  LOGO
</Link>
        {/* Menu */}
        <div className="flex items-center ml-auto space-x-12" ref={menuRef}>

          {/* ACCUEIL */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-red-600 pb-1 font-medium"
                : "text-gray-800 hover:text-black"
            }
          >
            Accueil
          </NavLink>

          {/* A PROPOS */}
          <NavLink
            to="/apropos"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-red-600 pb-1 font-medium"
                : "text-gray-800 hover:text-black"
            }
          >
            À propos
          </NavLink>


          {/* SERVICES */}
          <div className="relative">

            <button
              onClick={() => setOpen(!open)}
              className="text-gray-800 font-medium hover:text-black"
            >
              Services
            </button>

            <div
              className={`absolute left-0 top-10 bg-white shadow-lg w-52 p-4 space-y-3 rounded-lg
              transition-all duration-300
              ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}
            >

              <NavLink to="/droit-penal" onClick={() => setOpen(false)} className="block hover:text-red-600">
                Droit pénal
              </NavLink>

              <NavLink to="/droit-civil" onClick={() => setOpen(false)} className="block hover:text-red-600">
                Droit civil
              </NavLink>

              <NavLink to="/droit-affaires" onClick={() => setOpen(false)} className="block hover:text-red-600">
                Droit des affaires
              </NavLink>

              <NavLink to="/droit-travail" onClick={() => setOpen(false)} className="block hover:text-red-600">
                Droit du travail
              </NavLink>

              <NavLink to="/droit-fiscal" onClick={() => setOpen(false)} className="block hover:text-red-600">
                Droit fiscal
              </NavLink>

            </div>

          </div>


          {/* ACTUALITES */}
          <NavLink
            to="/actualites"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-red-600 pb-1 font-medium"
                : "text-gray-800 hover:text-black"
            }
          >
            Actualités
          </NavLink>


          {/* CONTACT */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-red-600 pb-1 font-medium"
                : "text-gray-800 hover:text-black"
            }
          >
            Contact
          </NavLink>

        </div>

      </Navbar>

    </div>
  );
}