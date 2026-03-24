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
    <section className="  w-full flex justify-center mt-24 px-6">
      <div className="section-container w-full max-w-7xl">
        <Reveal>
          <section className="py-16 md:py-24">
            <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-20">

              {/* IMAGE PREMIUM PARALLAX */}
              <div className="relative w-full max-w-[560px] flex justify-center h-[400px] md:h-[500px] lg:h-[560px]">
                <div
                  className="absolute w-full h-full rounded-3xl shadow-2xl overflow-hidden transition-transform duration-700 hover:scale-105 hover:-translate-y-2"
                  style={{ transform: `translateY(${offsetY * 0.05}px)` }}
                >
                  <img
  src="/images/image_6.webp"
  alt="hero premium"
  className="w-full h-full object-cover rounded-3xl shadow-lg"
/>
           
                </div>
              </div>

              {/* TEXTE PREMIUM */}
              <div className="text-[#110767] lg:max-w-xl space-y-6">
                <Reveal>
                  <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl mb-6"
                      style={{ fontFamily: "Garamond, serif", lineHeight: 1.2 }}>
                    NOS PARTICULARITÉS
                  </h2>
                </Reveal>

                <Reveal>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Nous accompagnons nos clients avec une approche <span className="font-semibold">rigoureuse</span>,
                    <span className="font-semibold">confidentielle</span> et orientée vers les résultats.
                  </p>
                </Reveal>

                <Reveal>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Notre cabinet se distingue par sa capacité à allier <span className="font-semibold">expertise juridique</span>,
                    précision et organisation moderne.
                  </p>
                </Reveal>

                <Reveal>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Nous garantissons un suivi structuré, une communication transparente et une disponibilité constante.
                  </p>
                </Reveal>

                <Reveal>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Notre engagement est de protéger vos intérêts avec <span className="font-semibold">professionnalisme, intégrité et détermination</span>.
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