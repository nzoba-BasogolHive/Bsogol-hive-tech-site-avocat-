import image10 from "../assets/image (10).webp";
import NavbarComponent from "./Navbar";

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1980px] mx-auto h-[520px] md:h-[700px] lg:h-[900px] overflow-hidden">

      {/* Image de fond */}

      <img
        src={image10}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-[#110767]/20"></div>


      {/* Navbar */}

      <div className="absolute top-0 left-0 w-full z-20">
        <div className="pt-6 md:pt-16 px-6 md:px-12">
          <NavbarComponent />
        </div>
      </div>


      {/* CONTENU */}

      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-6xl mx-auto px-6 md:px-10 text-white">

          {/* TITRE */}

          <h1
            className="font-bold leading-tight mb-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "Garamond, serif" }}
          >
            À PROPOS DE LA JUSTICE <br />
            A TOUT PRIX
          </h1>


          {/* TEXTE */}

          <p
            className="font-medium max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl"
            style={{ fontFamily: "Garamond, serif" }}
          >
            Nous offrons à nos clients une représentation juridique
            de haut niveau afin que chacun se sente soutenu et préparé
            face au système judiciaire familial.
          </p>

        </div>

      </div>

    </section>
  );
}