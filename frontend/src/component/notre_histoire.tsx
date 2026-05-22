import { useEffect, useRef, useState } from "react";
import histoireImage from "../assets/image (13).webp";

const milestones = [
  { year: "1998", label: "Fondation du cabinet" },
  { year: "2008", label: "Expansion nationale" },
  { year: "2015", label: "Prix d'excellence juridique" },
  { year: "2024", label: "Leader reconnu" },
];

export default function Histoire() {
  const ref = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);
  const [activeYear, setActiveYear] = useState(0);

  // Observer animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Timeline auto animation
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setActiveYear((prev) => (prev + 1) % milestones.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <section className="relative py-28 md:py-40 bg-[#f6f6f6] overflow-hidden">
      {/* Bande décorative */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#1b0f6b]/30 to-transparent" />

      {/* Watermark */}
      <div
        className="absolute top-0 right-0 text-[clamp(5rem,14vw,12rem)] font-black text-black/[0.03] select-none pointer-events-none leading-none pr-6 pt-4"
        style={{ fontFamily: "Garamond, serif" }}
        aria-hidden
      >
        HISTOIRE
      </div>

      <div
        ref={ref}
        className={`max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-28 items-center transition-all duration-1000 ease-out ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16"
        }`}
      >
        {/* TEXTE */}
        <div>
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-[#c9a84c]" />

            <p
              className="text-[#1b0f6b] text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ fontFamily: "Garamond, serif" }}
            >
              Notre Histoire
            </p>
          </div>

          {/* Title */}
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0a0814] mb-3 leading-[1.15]"
            style={{ fontFamily: "Garamond, serif" }}
          >
            Plus de 26 ans d'Excellence Juridique
          </h2>

          {/* Gold line */}
          <div
            className={`h-[2px] bg-[#c9a84c] mb-8 transition-all duration-1000 ease-out ${
              visible ? "w-20" : "w-0"
            }`}
          />

          {/* Paragraphs */}
          {[
            "Fondé en 1998 par Maître Jean-Pierre Durand, notre cabinet s'est rapidement imposé comme une référence dans le paysage juridique, bâtissant sa réputation sur des dossiers emblématiques.",

            "Au fil des années, nous avons constitué une équipe d'avocats passionnés, chacun expert dans son domaine, unis par une même conviction : la justice ne doit jamais être un privilège.",

            "Aujourd'hui, notre cabinet compte parmi les plus reconnus, fier d'une relation de confiance renouvelée avec des milliers de clients.",
          ].map((text, i) => (
            <p
              key={i}
              className="text-gray-600 leading-[1.9] text-[15px] mb-5 last:mb-0"
              style={{
                transitionDelay: `${0.2 + i * 0.1}s`,
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(16px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              {text}
            </p>
          ))}

          {/* Timeline */}
          <div
            className="mt-10 flex flex-col"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition:
                "opacity 0.9s ease 0.5s, transform 0.9s ease 0.5s",
            }}
          >
            {milestones.map(({ year, label }, i) => (
              <button
                key={year}
                type="button"
                onClick={() => setActiveYear(i)}
                className={`group flex items-center gap-4 py-3 border-l-2 pl-5 text-left transition-all duration-300 ${
                  activeYear === i
                    ? "border-[#c9a84c]"
                    : "border-[#1b0f6b]/15 hover:border-[#1b0f6b]/40"
                }`}
              >
                <span
                  className={`text-lg font-black transition-colors duration-300 ${
                    activeYear === i
                      ? "text-[#c9a84c]"
                      : "text-[#1b0f6b]/40 group-hover:text-[#1b0f6b]/70"
                  }`}
                  style={{ fontFamily: "Garamond, serif" }}
                >
                  {year}
                </span>

                <span
                  className={`text-sm transition-colors duration-300 ${
                    activeYear === i
                      ? "text-[#0a0814] font-semibold"
                      : "text-gray-400"
                  }`}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div
          className="relative"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateX(40px)",
            transition: "opacity 1s ease 0.3s, transform 1s ease 0.3s",
          }}
        >
          {/* Decorative borders */}
          <div className="absolute -top-5 -right-5 w-full h-full border border-[#1b0f6b]/15 rounded-sm pointer-events-none" />

          <div className="absolute -bottom-5 -left-5 w-full h-full border border-[#c9a84c]/20 rounded-sm pointer-events-none" />

          {/* Image container */}
          <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl group">
            <img
              src={histoireImage}
              alt="Notre histoire"
              className="w-full h-[340px] md:h-[460px] lg:h-[540px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0814]/50 via-transparent to-transparent" />

            {/* Bottom label */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
              <div>
                <p className="text-[#c9a84c] text-[10px] tracking-[0.2em] uppercase mb-1">
                  Fondé en
                </p>

                <p
                  className="text-white text-5xl font-black leading-none"
                  style={{ fontFamily: "Garamond, serif" }}
                >
                  1998
                </p>
              </div>

              <div className="text-right">
                <p className="text-white/40 text-[10px] tracking-[0.15em] uppercase mb-1">
                  Dossiers traités
                </p>

                <p
                  className="text-[#c9a84c] text-3xl font-black"
                  style={{ fontFamily: "Garamond, serif" }}
                >
                  2 000+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}