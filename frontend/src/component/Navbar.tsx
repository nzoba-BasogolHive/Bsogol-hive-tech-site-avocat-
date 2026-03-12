import { Navbar, NavbarBrand } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import ServicesOverlay from "./ServicesOverlay";
export default function NavbarComponent() {

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
const [openServices,setOpenServices] = useState(false)

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


         <nav className="flex gap-10">

<button onClick={()=>setOpen(true)}>
Services
</button>
 <ServicesOverlay open={open} setOpen={setOpen} />
</nav>



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