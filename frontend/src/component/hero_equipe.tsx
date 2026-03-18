import image10 from "../assets/image (23).webp";
import NavbarComponent from "./Navbar";

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1980px] mx-auto h-[420px] md:h-[520px] lg:h-[620px] overflow-hidden">

      {/* Image de fond */}
      <img
        src={image10}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#110767]/40"></div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="pt-6 md:pt-8 px-6 md:px-12">
          <NavbarComponent />
        </div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-6xl mx-auto px-6 text-white">

          {/* Petit titre */}
          <p
            className="text-lg md:text-2xl mb-2"
            style={{ fontFamily: "Garamond, serif" }}
          >
            Notre Cabinet
          </p>

          {/* Grand titre */}
          <h1
            className="font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4"
            style={{ fontFamily: "Garamond, serif" }}
          >
            Notre Équipe
          </h1>

          {/* Description */}
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl"
            style={{ fontFamily: "Garamond, serif" }}
          >
            Des avocats passionnés, chacun expert dans son domaine,
            unis par une exigence commune d'excellence.
          </p>

        </div>

      </div>

    </section>
  );
}