import { Navbar, NavbarBrand } from "flowbite-react";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <div className="pt-8 px-12"> {/* espace au-dessus */}

      <Navbar
     
        className="bg-[#D3D3D3] rounded-[15px] px-10 py-4 shadow-md max-w-5xl ml-auto mr-12"
      >
        {/* Logo */}
        <NavbarBrand as={Link} href="/">
          <span className="text-xl font-bold text-gray-900">
            LOGO
          </span>
        </NavbarBrand>

        {/* Menu horizontal */}
        <div className="flex items-center ml-auto space-x-14">
          

          <Link to="/" className="text-gray-800 font-medium hover:text-black">
            Accueil
          </Link>

          <Link to="/apropos" className="text-gray-800 font-medium hover:text-black">
            À propos
          </Link>

          <Link to="/services" className="text-gray-800 font-medium hover:text-black">
            Services
          </Link>

          <Link to="/actualites" className="text-gray-800 font-medium hover:text-black">
            Actualités
          </Link>

          <Link to="/contact" className="text-gray-800 font-medium hover:text-black">
            Contact
          </Link>

        </div>

      </Navbar>

    </div>
  );
}