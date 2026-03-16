import heroImg from "../assets/image (4) (1).webp";
import icone1 from "../assets/family (1) 1.webp";
import icone2 from "../assets/scale-of-justice 1.webp";
import icone3 from "../assets/badge 1.webp";
import NavbarComponent from "./Navbar";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full min-h-screen overflow-hidden">

        {/* IMAGE */}
        <img
          src={heroImg}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#110767]/75"></div>

        {/* NAVBAR */}
        <div className="absolute top-0 left-0 w-full z-20">
          <div className="pt-4 md:pt-8 px-6 md:px-12">
            <NavbarComponent />
          </div>
        </div>

        {/* CONTENU */}
        <div className="relative z-10 min-h-screen flex items-center">

          <div className="max-w-6xl mx-auto px-6 text-white">

            <h1
              className="font-bold leading-tight mb-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: "Garamond, serif" }}
            >
              La Justice au Service <br />
              de Vos Droits
            </h1>

            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-8"
              style={{ fontFamily: "Garamond, serif" }}
            >
              Notre cabinet d'avocats vous accompagne avec rigueur et
              détermination dans toutes vos démarches juridiques.
              Une expertise reconnue, un engagement sans faille.
            </p>

            <Link
              to="/contact"
              className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
            >
              Nous contacter
            </Link>

          </div>

        </div>

      </section>


      {/* SECTION 3 BLOCS */}
      <section className="w-full flex justify-center px-6 -mt-16 md:-mt-24 relative z-30">

        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-6 md:p-10">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* BLOC 1 */}
            <div className="flex items-center gap-4">

              <img
                src={icone1}
                alt="icone"
                className="w-14 h-14 md:w-20 md:h-20 object-contain"
              />

              <p
                className="text-[#110767] text-sm md:text-lg"
                style={{ fontFamily: "Garamond, serif" }}
              >
                Respect et Dignité <br />
                <b>Nos clients sont comme une famille</b>
              </p>

            </div>


            {/* BLOC 2 */}
            <div className="flex items-center gap-4">

              <img
                src={icone2}
                alt="icone"
                className="w-14 h-14 md:w-20 md:h-20 object-contain"
              />

              <p
                className="text-[#110767] text-sm md:text-lg"
                style={{ fontFamily: "Garamond, serif" }}
              >
                Chaque cas est unique <br />
                <b>Représentation juridique de haut niveau</b>
              </p>

            </div>


            {/* BLOC 3 */}
            <div className="flex items-center gap-4">

              <img
                src={icone3}
                alt="icone"
                className="w-14 h-14 md:w-20 md:h-20 object-contain"
              />

              <p
                className="text-[#110767] text-sm md:text-lg"
                style={{ fontFamily: "Garamond, serif" }}
              >
                Équipe expérimentée <br />
                <b>Avocats dévoués et primés</b>
              </p>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}