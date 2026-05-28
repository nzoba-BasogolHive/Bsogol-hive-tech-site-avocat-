import { useEffect, useRef, useState } from "react";
import { Scale, ShieldCheck, LockKeyhole, Trophy } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";
import bg1 from "../../assets/ChatGPT.png";
import bg2 from "../../assets/photo-1589829545856-d10d557cf95f.jpg";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function AboutSection() {
  const { ref, visible } = useInView();
  const { lang } = useLanguage();

  const text = {
    fr: {
      badge: "Expérience avocate",
      title1: "Nous sommes là pour",
      title2: "défendre vos droits",
      description:
        "Notre cabinet vous accompagne avec rigueur, confiance et professionnalisme pour vous offrir une assistance juridique adaptée à vos besoins.",
      ceo: "CEO, Avocate",
      learnMore: "En savoir plus",
      aboutLabel: "À propos",
      cardTitle1: "Nous vous défendons",
      cardTitle2: "à chaque étape",
      cardText:
        "Avec une approche moderne et humaine, nous vous guidons dans vos démarches juridiques afin de protéger vos intérêts.",
      since: "Depuis",
      lawJustice: "Droit & Justice",
      marquee1: "Contentieux",
      marquee2: "Droit",
      awards: [
  {
    num: "01",
    icon: ShieldCheck,
    title: "Défense pénale rigoureuse",
    link: "/services/droit-penal",
  },
  {
    num: "02",
    icon: LockKeyhole,
    title: "Protection des droits civils",
    link: "/services/droit-civil",
  },
  {
    num: "03",
    icon: Trophy,
    title: "Accompagnement des entreprises",
    link: "/services/droit-affaires",
  },
],
    },
    en: {
      badge: "Lawyer Experience",
      title1: "We are here to help",
      title2: "you get justice",
      description:
        "Our firm supports you with precision, trust, and professionalism to provide legal assistance adapted to your needs.",
      ceo: "CEO, Lawyer",
      learnMore: "Learn More",
      aboutLabel: "About Us",
      cardTitle1: "Advocating for you",
      cardTitle2: "every step of the way",
      cardText:
        "With a modern and human approach, we guide you through legal procedures to protect your interests.",
      since: "Since year",
      lawJustice: "Law & Justice",
      marquee1: "Litigation",
      marquee2: "Law",
     awards: [
  {
    num: "01",
    icon: ShieldCheck,
    title: "Rigorous defense of your interests",
    link: "/services/droit-penal",
  },
  {
    num: "02",
    icon: LockKeyhole,
    title: "Confidentiality and case security",
    link: "/services/droit-civil",
  },
  {
    num: "03",
    icon: Trophy,
    title: "Tailored legal support",
    link: "/services/droit-affaires",
  },
],
    },
  };

  const t = text[lang];

  return (
    <section
      ref={ref}
      className="relative bg-[#fbfaf8] py-20 md:py-28 lg:py-32 px-5 sm:px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          backgroundImage:
            "repeating-radial-gradient(ellipse 700px 350px at 15% 55%, transparent 0, transparent 58px, #16223814 59px, transparent 60px)",
        }}
      />

      <div
        className={`hidden lg:block absolute left-0 top-32 w-[3px] bg-gradient-to-b from-transparent via-[#162238] to-transparent transition-all duration-1000 ${
          visible ? "opacity-100 h-[60%]" : "opacity-0 h-0"
        }`}
      />

    <div className="relative max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 mb-16 lg:mb-24">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#162238]" />
            <p className="text-xs tracking-[0.3em] text-[#162238] uppercase font-medium">
              {t.badge}
            </p>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[64px] text-[#111] leading-[1.06] mb-7">
            {t.title1} <br />
            <span className="italic text-[#162238]">{t.title2}</span>
          </h2>

          <p className="text-base text-[#666] leading-relaxed max-w-md mb-10 lg:mb-12">
            {t.description}
          </p>

          <div className="w-16 h-px bg-[#162238] mb-8" />

          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#162238]/10 border-2 border-[#162238] flex items-center justify-center">
              <span className="font-serif text-xl text-[#162238] font-bold">
                A
              </span>
            </div>

            <div>
              <p className="font-serif text-3xl italic text-[#162238] leading-none mb-1">
                Alen Hispro
              </p>
              <p className="text-sm text-[#777] tracking-wide">{t.ceo}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          {t.awards.map((item, index) => {
            const Icon = item.icon;

            return (
            <Link
              key={item.num}
              to={item.link}
              className={`group relative flex items-center gap-5 sm:gap-8 py-6 sm:py-8 border-b border-[#e8e3db] last:border-0 cursor-pointer transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
                            <div className="absolute inset-0 bg-[#162238]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mx-4 rounded-lg" />

                <span className="relative font-serif text-4xl sm:text-6xl text-[#d8dbe2] group-hover:text-[#162238]/20 transition-colors duration-300 min-w-[48px] sm:min-w-[70px]">
                  {item.num}
                </span>

                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#162238]/40 group-hover:border-[#162238] flex items-center justify-center text-[#162238] group-hover:bg-[#162238] group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Icon size={26} strokeWidth={1.5} />
                </div>

                <div className="relative flex-1">
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-[#111] mb-2 group-hover:text-[#162238] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <span className="flex items-center gap-3 text-[11px] tracking-[0.25em] text-[#162238] uppercase">
                    {t.learnMore}
                    <span className="h-px w-8 bg-[#162238] group-hover:w-16 transition-all duration-500" />
                  </span>
                </div>

                <div className="hidden sm:block relative opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <span className="text-[#162238] text-xl">→</span>
                </div>
             </Link>
            );
          })}
        </div>
      </div>

<div className="relative max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-12 min-h-[720px] lg:min-h-[580px]">
        <div
          className={`hidden lg:block absolute z-[40] transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{
  bottom: "-35px",
  left: "-40px",
  width: "650px",
  transitionDelay: "400ms",
}}
        >
          <img
            src={bg1}
            alt="Lady Justice statue"
            className="w-full h-auto object-contain statue-slide"
            style={{ transformOrigin: "bottom center", display: "block" }}
          />
        </div>

        <div
          className={`relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "250ms" }}
        >
          <div
            className="hidden lg:block absolute inset-0 bg-[#162238]/10 rounded-sm"
            style={{ transform: "translate(8px, 8px)" }}
          />

          <div className="relative h-full bg-[#f4eee8] rounded-sm overflow-hidden lg:ml-[280px]">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#162238] to-transparent" />

            <div className="absolute inset-4 border border-[#162238]/25 rounded-sm pointer-events-none" />

            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-radial-gradient(ellipse 460px 120px at 50% 50%, transparent 0, transparent 55px, #162238 56px, transparent 57px)",
              }}
            />

            <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-6 bg-[#162238]" />
                <p className="text-xs tracking-[0.3em] text-[#162238] uppercase font-medium">
                  {t.aboutLabel}
                </p>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-[#111] leading-[1.1] mb-5">
                {t.cardTitle1} <br />
                <span className="italic">{t.cardTitle2}</span>
              </h3>

              <p className="text-base text-[#666] leading-relaxed max-w-[520px] mb-10">
                {t.cardText}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-8 lg:gap-10">
                <div className="relative flex-shrink-0 w-fit">
                  <div className="absolute inset-0 bg-[#162238]/10 rounded-sm transform rotate-3" />
                  <img
                    src={bg2}
                    alt="Gavel"
                    className="relative w-24 h-24 object-cover rounded-sm"
                  />
                </div>

                <div className="sm:border-l border-[#162238]/30 sm:pl-8">
                  <p className="text-xs text-[#888] tracking-[0.2em] uppercase mb-1">
                    {t.since}
                  </p>
                  <p className="font-serif text-6xl sm:text-7xl text-[#d8dbe2] leading-none tracking-tight">
                    1992
                  </p>
                </div>

                <div className="sm:ml-auto flex flex-col items-start sm:items-center gap-2">
                  <div className="relative w-20 h-20 rounded-full border-2 border-[#162238]/40 flex items-center justify-center text-[#162238]">
                    <div className="absolute inset-2 rounded-full border border-[#162238]/20" />
                    <Scale size={36} strokeWidth={1.3} />
                  </div>

                  <p className="text-[10px] tracking-[0.2em] text-[#162238] uppercase text-center">
                    {t.lawJustice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div
        className={`mt-14 lg:mt-20 border-t border-[#e8e3db] pt-8 overflow-hidden transition-all duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "800ms" }}
      >
        <div
          className="flex gap-16 whitespace-nowrap"
          style={{
            animation: "marquee 25s linear infinite",
            width: "max-content",
          }}
        >
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <span
                key={i}
                className="flex items-center gap-16 font-serif text-4xl sm:text-5xl text-[#d8dbe2]"
              >
                {i % 2 === 0 ? t.marquee1 : t.marquee2}
                <span className="w-2 h-2 bg-[#162238]/40 rounded-full inline-block" />
              </span>
            ))}
        </div>
      </div>

      <style>{`
        @keyframes statueSlide {
          0%, 100% { transform: translateX(0px) scale(1.02); }
          50% { transform: translateX(-10px) scale(1.02); }
        }

        .statue-slide {
          animation: statueSlide 5s ease-in-out infinite;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.15));
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}