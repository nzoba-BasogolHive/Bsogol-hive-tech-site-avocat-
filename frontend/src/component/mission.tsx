

import { motion } from "framer-motion";
import missionImg from "../assets/image11.webp";

import { useEffect, useRef, useState } from "react";


const points = [
  {
    icon: "⚖️",
    title: "Représentation de haut niveau",
    body: "Chaque client bénéficie d'une défense sur-mesure, préparée avec rigueur et portée par des avocats pleinement engagés.",
  },
  {
    icon: "🎯",
    title: "Clarté & stratégie",
    body: "Nous décryptons les complexités juridiques pour que vous compreniez chaque étape et chaque enjeu de votre dossier.",
  },
  {
    icon: "🤝",
    title: "Accompagnement humain",
    body: "Vous n'êtes jamais seul face au système judiciaire. Nous sommes à vos côtés à chaque moment crucial.",
  },
];


export default function Mission() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (

    <section className="py-20 md:py-28 bg-white">

      <div className="section-container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXTE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-widest text-red-600 mb-3">
            NOTRE MISSION
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Défendre vos droits avec excellence
          </h2>

          <p className="text-gray-600 leading-7">
            Nous offrons une représentation juridique de haut niveau,
            avec un accompagnement humain et stratégique.
          </p>

        </motion.div>

        {/* IMAGE */}
        <motion.img
          src={missionImg}
          className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-xl"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
        />
</div>
    <section className="relative py-28 md:py-40 bg-[#f6f6f6] overflow-hidden">

      {/* ── Bande accent droite ── */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#c9a84c]/30 to-transparent" />

      {/* ── Watermark ── */}
      <div
        className="absolute bottom-0 left-0 text-[clamp(5rem,14vw,12rem)] font-black text-black/[0.03] select-none pointer-events-none leading-none pl-2 pb-0"
        style={{ fontFamily: "Garamond, serif" }}
        aria-hidden
      >
        MISSION
      </div>

      <div
        ref={ref}
        className="max-w-[1300px] mx-auto px-6 md:px-10"
      >
        <div
          className={`flex flex-col md:flex-row items-center gap-16 lg:gap-24 transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"
          }`}
        >
          {/* ── TEXTE GAUCHE ── */}
          <div className="flex-1 order-2 md:order-1">

            {/* eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#c9a84c]" />
              <p
                className="text-[#1b0f6b] text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ fontFamily: "Garamond, serif" }}
              >
                Notre Mission
              </p>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-[#0a0814] leading-[1.15] mb-3"
              style={{ fontFamily: "Garamond, serif" }}
            >
              Justice à Tout Prix
            </h2>

            <h3
              className="text-lg font-semibold text-[#1b0f6b] mb-6"
              style={{ fontFamily: "Garamond, serif" }}
            >
              La mission qui guide chacune de nos actions
            </h3>

            {/* ligne dorée */}
            <div
              className={`h-[2px] bg-[#c9a84c] mb-8 transition-all duration-1000 ease-out ${
                visible ? "w-16" : "w-0"
              }`}
            />

            <p
              className="text-gray-600 leading-[1.9] text-[15px] mb-10"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(12px)",
                transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
              }}
            >
              Nous offrons à nos clients une représentation juridique de haut niveau
              afin que chacun se sente soutenu et pleinement préparé face au système
              judiciaire. Nous comprenons l'impact profond des décisions auxquelles
              ils sont confrontés et nous nous efforçons de les aider à mieux
              appréhender leur situation en droit familial.
            </p>

            {/* ── Points clés ── */}
            <div className="flex flex-col gap-5">
              {points.map(({ icon, title, body }, i) => (
                <div
                  key={title}
                  className="flex items-start gap-4 group"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "none" : "translateX(-16px)",
                    transition: `opacity 0.7s ease ${0.35 + i * 0.12}s, transform 0.7s ease ${0.35 + i * 0.12}s`,
                  }}
                >
                  {/* icône cercle */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1b0f6b]/8 border border-[#1b0f6b]/15 flex items-center justify-center text-lg group-hover:bg-[#1b0f6b] group-hover:border-[#1b0f6b] transition-all duration-300">
                    <span className="group-hover:grayscale-0 transition-all duration-300">{icon}</span>
                  </div>
                  <div>
                    <p
                      className="font-semibold text-[#0a0814] text-sm mb-1"
                      style={{ fontFamily: "Garamond, serif", fontSize: "16px" }}
                    >
                      {title}
                    </p>
                    <p className="text-gray-500 text-[13px] leading-[1.75]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── IMAGE DROITE ── */}
          <div
            className="flex-1 relative order-1 md:order-2"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateX(40px)",
              transition: "opacity 1s ease 0.3s, transform 1s ease 0.3s",
            }}
          >
            {/* cadre décoratif */}
            <div className="absolute -top-5 -right-5 w-full h-full border border-[#c9a84c]/25 rounded-sm pointer-events-none" />
            <div className="absolute -bottom-5 -left-5 w-full h-full border border-[#1b0f6b]/10 rounded-sm pointer-events-none" />

            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl group">
              <img
                src={missionImg}
                alt="Notre mission"
                className="w-full h-[380px] md:h-[500px] lg:h-[580px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              {/* overlay dégradé */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b0f6b]/50 via-transparent to-transparent opacity-60" />
            </div>

            {/* ── Quote card flottante ── */}
            <div
              className="absolute -bottom-8 -left-8 z-20 bg-white border-l-4 border-[#c9a84c] px-6 py-5 shadow-xl max-w-[240px]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(20px)",
                transition: "opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s",
              }}
            >
              <p
                className="text-[#0a0814] text-sm leading-[1.7] italic mb-3"
                style={{ fontFamily: "Garamond, serif", fontSize: "15px" }}
              >
                "Votre dignité est notre priorité absolue."
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-[#c9a84c]" />
                <span className="text-[#1b0f6b] text-[10px] font-bold tracking-[0.18em] uppercase">
                  Notre engagement
                </span>
              </div>
            </div>

            {/* ── Stat badge ── */}
            <div
              className="absolute -top-6 -right-6 z-20 bg-[#1b0f6b] text-white px-5 py-4 shadow-xl text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "scale(0.85)",
                transition: "opacity 0.7s ease 0.9s, transform 0.7s ease 0.9s",
              }}
            >
              <p
                className="text-3xl font-black text-[#c9a84c] leading-none"
                style={{ fontFamily: "Garamond, serif" }}
              >
                98%
              </p>
              <p className="text-[9px] tracking-[0.15em] uppercase text-white/60 mt-1">
                Satisfaction
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
    </section>
  );
};


