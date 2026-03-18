import image10 from "../assets/image (23).webp";
import NavbarComponent from "./Navbar";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* IMAGE */}
      <img
        src={image10}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#110767]/40 via-[#110767]/40 to-[#110767]/40"></div>

      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full z-20">
        <NavbarComponent />
      </div>

      {/* CONTENU */}
      <div className="relative z-10 flex items-center min-h-screen">

        <div className="max-w-6xl mx-auto px-6 md:px-8 text-white">

          {/* PETIT TITRE */}
          <p className="uppercase tracking-[3px] md:tracking-[4px] text-xs sm:text-sm mb-4 text-gray-200">
            Blog Juridique
          </p>

          {/* TITRE */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Actualités <br />
            <span className="text-red-500">Juridiques</span>
          </h1>

          {/* TEXTE */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-xl md:max-w-2xl mb-8">
            Restez informé des dernières évolutions du droit et découvrez
            les conseils pratiques de nos avocats pour mieux comprendre
            vos droits et défendre vos intérêts.
          </p>

          {/* BOUTONS */}
          <div className="flex flex-col sm:flex-row gap-4">

              <Link
              to="/Actualites" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-medium transition">
              Lire les articles
            </Link>

            <Link
              to="/contact"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Contacter un avocat
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}