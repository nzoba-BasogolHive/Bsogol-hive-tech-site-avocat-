import { Navbar, Button } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import ServicesOverlay from "./ServicesOverlay";

export default function NavbarComponent() {
  const [open, setOpen] = useState(false); // pour services overlay
  const [mobileOpen, setMobileOpen] = useState(false); // pour le menu mobile

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 md:pt-12">
      <Navbar
        fluid
        rounded
        className="w-[95%] max-w-7xl px-4 md:px-12 py-3 md:py-5
                   bg-white/20 backdrop-blur-lg border border-white/30
                   rounded-xl shadow-xl transition-all duration-500"
      >
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-gray-900 transition-all duration-300 hover:text-blue-600 hover:scale-105"
        >
          LOGO
        </Link>

        {/* BOUTON MOBILE */}
        <div className="md:hidden ml-auto">
          <Button
            onClick={() => setMobileOpen(!mobileOpen)}
            color="light"
            className="p-2"
          >
            {/* Trois barres hamburger */}
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center ml-auto space-x-10 text-[15px] font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-700 hover:text-blue-600 transition-all duration-300"}>Accueil</NavLink>
          <NavLink to="/apropos" className={({ isActive }) => isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-700 hover:text-blue-600 transition-all duration-300"}>À propos</NavLink>
          <button onClick={() => setOpen(true)} className="text-gray-700 hover:text-blue-600 transition-all duration-300">Services</button>
          <ServicesOverlay open={open} setOpen={setOpen} />
          <NavLink to="/actualites" className={({ isActive }) => isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-700 hover:text-blue-600 transition-all duration-300"}>Actualités</NavLink>
          <NavLink to="/equipe" className={({ isActive }) => isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-700 hover:text-blue-600 transition-all duration-300"}>Équipe</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-700 hover:text-blue-600 transition-all duration-300"}>Contact</NavLink>
        </div>

        {/* MENU MOBILE */}
        {mobileOpen && (
          <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-lg border-t border-white/30 md:hidden shadow-lg">
            <div className="flex flex-col p-4 space-y-4 text-[16px] font-medium">
              <NavLink to="/" onClick={() => setMobileOpen(false)}>Accueil</NavLink>
              <NavLink to="/apropos" onClick={() => setMobileOpen(false)}>À propos</NavLink>
              <button onClick={() => { setOpen(true); setMobileOpen(false); }}>Services</button>
              <NavLink to="/actualites" onClick={() => setMobileOpen(false)}>Actualités</NavLink>
              <NavLink to="/equipe" onClick={() => setMobileOpen(false)}>Équipe</NavLink>
              <NavLink to="/contact" onClick={() => setMobileOpen(false)}>Contact</NavLink>
            </div>
          </div>
        )}
      </Navbar>
    </div>
  );
}