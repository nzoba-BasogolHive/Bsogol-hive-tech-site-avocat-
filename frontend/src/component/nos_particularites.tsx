import Reveal from "./Reveal";
import { useEffect, useState } from "react";

export default function Nos_particularites() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full flex justify-center mt-24 px-6">
      <div className="section-container w-full max-w-7xl">
        <Reveal>
          <section className="py-16 md:py-24">
            <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24">

              {/* IMAGE */}
              <div className="relative w-full max-w-[520px] flex-shrink-0 h-[420px] md:h-[500px] lg:h-[580px]">

                {/* Cadre doré décalé */}
                <div className="absolute top-6 left-6 w-full h-full rounded-3xl border border-[#c9a84c]/40 z-0" />

                {/* Image */}
                <div
  className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl z-10 transition-transform duration-700 hover:scale-[1.02]"
  style={{
    transform: `translateY(${offsetY * 0.04}px)`,
  }}
>
                  <img
                    src="/images/image_6.webp"
                    alt="Cabinet d'avocats"
                    className="w-full h-full object-cover"
                  />
                  {/* Léger vignettage */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Badge expérience */}
                <div className="absolute -bottom-5 right-8 z-20 bg-white border border-[#c9a84c]/50 rounded-2xl px-6 py-4 shadow-lg">
                  <p className="text-[#c9a84c] text-3xl font-bold leading-none font-serif">
  25+
</p>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">
                    Ans d'expérience
                  </p>
                </div>
              </div>

              {/* TEXTE */}
              <div className="lg:max-w-xl space-y-7 pt-6">

                {/* Eyebrow */}
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span className="block w-8 h-px bg-[#c9a84c]" />
                    <span
                      className="text-[#c9a84c] text-xs uppercase tracking-[0.22em] font-semibold"
                    >
                      Notre approche
                    </span>
                  </div>
                </Reveal>

                {/* Titre */}
                <Reveal>
                  <h2 className="text-[#110767] font-extrabold text-3xl md:text-4xl lg:text-5xl leading-[1.15] font-serif">
  Nos Particularités
</h2>
                </Reveal>

                {/* Séparateur */}
                <Reveal>
                  <div className="w-10 h-[2px] bg-[#c9a84c] rounded-full" />
                </Reveal>

                {/* Paragraphes */}
                <Reveal>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                    Nous accompagnons nos clients avec une approche{" "}
                    <span className="font-semibold text-gray-700">rigoureuse</span>,{" "}
                    <span className="font-semibold text-gray-700">confidentielle</span>{" "}
                    et orientée vers les résultats.
                  </p>
                </Reveal>

                <Reveal>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                    Notre cabinet se distingue par sa capacité à allier{" "}
                    <span className="font-semibold text-gray-700">expertise juridique</span>,
                    précision et organisation moderne.
                  </p>
                </Reveal>

                <Reveal>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                    Nous garantissons un suivi structuré, une communication
                    transparente et une disponibilité constante.
                  </p>
                </Reveal>

                <Reveal>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                    Notre engagement est de protéger vos intérêts avec{" "}
                    <span className="font-semibold text-gray-700">
                      professionnalisme, intégrité et détermination
                    </span>.
                  </p>
                </Reveal>

              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </section>
  );
}