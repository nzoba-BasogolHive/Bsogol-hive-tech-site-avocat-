
import heroImg from "../assets/image (4) (1).webp";
import icone1 from "../assets/family (1) 1.webp";
import icone2 from "../assets/scale-of-justice 1.webp";
import icone3 from "../assets/badge 1.webp";
import NavbarComponent from "./Navbar";

export default function Hero() {
  return (
    <>

      {/* HERO */}
      <section className="relative w-full max-w-[1980px] mx-auto h-[989px] overflow-hidden ">

        {/* Image de fond */}
        <img
          src={heroImg}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay couleur */}
        <div className="absolute inset-0 bg-[#110767]/75"></div>

        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-20">
          <div className="pt-8 px-12">
            <NavbarComponent />
          </div>
        </div>

        {/* Contenu texte */}
        <div className="relative z-10 h-full">

          <h1
            className="absolute text-white font-bold leading-tight"
            style={{
              fontFamily: "Garamond, serif",
              fontSize: "96px",
              left: "312px",
              top: "402px",
            }}
          >
            La Justice au Service de Vos Droits
          </h1>

          <p
            className="absolute text-white font-bold"
            style={{
              fontFamily: "Garamond, serif",
              fontSize: "40px",
              left: "293px",
              top: "607px",
              width: "1485px",
              height: "190px",
            }}
          >
            Notre cabinet d'avocats vous accompagne avec rigueur et détermination dans toutes vos démarches juridiques.
            Une expertise reconnue, un engagement sans faille.
          </p>

          {/* Contact */}
          <div
            className="absolute flex items-center gap-4 text-white font-bold cursor-pointer group"
            style={{
              fontFamily: "Garamond, serif",
              fontSize: "40px",
              left: "111px",
              top: "850px",
              width: "403px",
              height: "49px",
            }}
          >
            <span className="group-hover:underline">
              NOUS CONTACTEZ
            </span>

            <span className="transition-transform group-hover:translate-x-6">
              →
            </span>
          </div>

        </div>
      </section>


      {/* ===== SECTION 3 BLOCS ===== */}
      <section className="w-full flex justify-center mt-20 px-6">

        <div className="relative w-full max-w-[1600px] bg-white rounded-[20px] shadow-xl py-12 px-16">

          <div className="grid grid-cols-3 items-center">

            {/* BLOC 1 */}
            <div className="flex items-center gap-6 pr-12">

              <img
                src={icone1}
                alt="icone1"
                className="w-[90px] h-[90px] object-contain"
              />

              <p
                className="text-[#110767]"
                style={{
                  fontFamily: "Garamond, serif",
                  fontSize: "24px",
                  width: "196px",
                  height: "100px",
                }}
              >
                Respect et Diginty
                <b> Nos clients sont comme une famille</b>
              </p>

            </div>

            <div className="pointer-events-none absolute left-1/3 top-6 bottom-6 w-px bg-gray-200"></div>

            {/* BLOC 2 */}
            <div className="flex items-center justify-center gap-6 px-12">

              <img
                src={icone2}
                alt="icon"
                className="w-[90px] h-[90px] object-contain"
              />

              <p
                className="text-[#110767]"
                style={{
                  fontFamily: "Garamond, serif",
                  fontSize: "24px",
                  width: "196px",
                  height: "100px",
                }}
              >
                Chaque cas est unique
                <b> Représentation juridique de haut niveau</b>
              </p>

            </div>

            <div className="pointer-events-none absolute left-2/3 top-6 bottom-6 w-px bg-gray-200"></div>

            {/* BLOC 3 */}
            <div className="flex items-center justify-end gap-6 pl-12">

              <img
                src={icone3}
                alt="icon"
                className="w-[90px] h-[90px] object-contain"
              />

              <p
                className="text-[#110767]"
                style={{
                  fontFamily: "Garamond, serif",
                  fontSize: "24px",
                  width: "196px",
                  height: "100px",
                }}
              >
                Équipe expérimentée
                <b> Avocats dévoués et primés</b>
              </p>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}