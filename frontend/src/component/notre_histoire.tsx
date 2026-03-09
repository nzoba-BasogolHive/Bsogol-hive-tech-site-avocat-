
import { useEffect, useRef, useState } from "react";
import histoireImage from "../assets/histoire-cabinet.webp";

export default function Histoire() {

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-32 bg-[#f6f6f6] overflow-hidden">

      {/* Décor rouge */}
      <div className="absolute top-16 left-16 grid grid-cols-4 gap-4 rotate-12 opacity-80">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-10 h-[3px] bg-[#9f1d1d]"></div>
        ))}
      </div>

      {/* Contenu */}
      <div
        ref={ref}
        className={`max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-8 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >

        {/* IMAGE */}
        <div className="rounded-xl overflow-hidden shadow-xl group">

          <img
            src={histoireImage}
            alt="Notre histoire"
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />

        </div>

        {/* TEXTE */}
        <div>

          <h2
            className="text-4xl font-bold text-black mb-4"
            style={{ fontFamily: "Garamond" }}
          >
            Notre Histoire
          </h2>

          {/* Ligne rouge */}
          <div className="w-24 h-[2px] bg-[#9f1d1d] mb-6"></div>

          <h3
            className="text-xl font-semibold mb-6"
            style={{ fontFamily: "Garamond" }}
          >
            Plus de 10 Ans d'Excellence Juridique
          </h3>

          <p className="text-gray-700 leading-8 mb-6">
            Fondé en 1998 par Maître Jean-Pierre Durand, notre cabinet s'est
            rapidement imposé comme une référence dans le paysage juridique
            parisien. Notre ambition : offrir un service d'excellence
            accessible à tous.
          </p>

          <p className="text-gray-700 leading-8 mb-6">
            Au fil des années, nous avons constitué une équipe d'avocats
            passionnés, chacun expert dans son domaine, unis par une vision
            commune : placer l'intérêt de nos clients au cœur de notre
            pratique.
          </p>

          <p className="text-gray-700 leading-8">
            Aujourd'hui, notre cabinet compte parmi les plus reconnus de la
            capitale, intervenant aussi bien auprès des particuliers que des
            entreprises, des PME et des grandes structures.
          </p>

        </div>

      </div>

    </section>
  );
}