import Reveal from "./Reveal";
import { Link } from "react-router-dom";
import image7 from "../assets/image (7).webp";
import { useState } from "react";

export default function AproposAccueil() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="relative w-full py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden perspective-1000"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
    >
      <Reveal>
        {/* Titre premium */}
        <h2
          className="absolute left-6 md:left-24 top-10 z-40 font-extrabold tracking-tight"
          style={{
            fontFamily: "Garamond, serif",
            fontSize: "clamp(36px,5vw,64px)",
            color: "#110767",
          }}
        >
          A PROPOS
        </h2>

        <div
          className="relative min-h-[350px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center px-6"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Background image avec effet 3D / parallax */}
          <div
            className={`absolute w-[120%] h-[350px] md:h-[500px] lg:h-[600px] bg-gradient-to-r from-[#f5f5f5] to-white rotate-[6deg] overflow-hidden flex items-center justify-center shadow-2xl transition-transform duration-700`}
            style={{
              transform: hovered
                ? "rotateY(5deg) rotateX(3deg) scale(1.03)"
                : "rotateY(0deg) rotateX(0deg) scale(1)",
            }}
          >
            <img
              src={image7}
              alt="Illustration fintech"
              className="absolute w-full h-full object-cover rotate-[-6deg] opacity-90 transition-transform duration-700"
              style={{
                transform: hovered ? "scale(1.05)" : "scale(1)",
              }}
            />
          </div>

          {/* Carte centrale premium */}
          <div className="relative z-30 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-16 w-full max-w-[900px] text-center border border-gray-200 transform transition-all duration-700 hover:-translate-y-2">
            <h3 className="mb-4 font-bold text-2xl md:text-3xl text-gray-900 transition-transform duration-500 hover:translate-y-1">
              Renforcement des lois sur la protection des données personnelles
            </h3>

            <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
              De nouvelles lois encadrent l'utilisation des données personnelles
              pour garantir la sécurité et la confidentialité des citoyens, en
              alignement avec les standards les plus élevés du secteur fintech.
            </p>

            <Link
              to="/Apropos"
              className="inline-block px-8 py-3 font-semibold text-white bg-[#110767] rounded-full shadow-lg hover:bg-[#0d0655] hover:shadow-[0_0_20px_rgba(17,7,103,0.6)] transition-all duration-300"
            >
              EN SAVOIR PLUS
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}