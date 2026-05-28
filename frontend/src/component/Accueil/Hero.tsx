import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  // Play,
  UsersRound,
  UserRoundCheck,
  ShieldCheck,
  HandCoins,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

import bg1 from "../../assets/photo-1589829545856-d10d557cf95f.jpg";
import bg2 from "../../assets/photo-1555848962-6e79363ec58f.jpg";
import bg3 from "../../assets/photo-1479142506502-19b3a3b7ff33.jpg";

const slides = [{ bg: bg1 }, { bg: bg2 }, { bg: bg3 }];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const { lang } = useLanguage();

  const text = {
    fr: {
      title1: "Notre indépendance",
      title2: "fait la différence",
      subtitle: "Établi nationalement. Reconnu internationalement",
      button: "Consultation",
      plans: [
        { small: "Plan droit familial", title: "Droit familial" },
        { small: "Plan dommage corporel", title: "Dommage corporel" },
        { small: "Plan droit pénal", title: "Droit pénal" },
        { small: "Plan droit des affaires", title: "Droit des affaires" },
      ],
    },
    en: {
      title1: "Our Independence",
      title2: "Makes the Difference",
      subtitle: "Nationally Established. Internationally Recognized",
      button: "Consultation",
      plans: [
        { small: "Family Law plan", title: "Family Law" },
        { small: "Personal injury plan", title: "Personal Injury" },
        { small: "Criminal plan", title: "Criminal Law" },
        { small: "Business law plan", title: "Business Law" },
      ],
    },
  };

  const icons = [UsersRound, UserRoundCheck, ShieldCheck, HandCoins];
  const t = text[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[900px] sm:min-h-[880px] md:min-h-[820px] text-white overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${slide.bg})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[#0d1b2a]/55" />

      <div className="relative z-10 max-w-[1180px] mx-auto px-5 pt-[150px] sm:pt-[180px] md:pt-[250px]">
        <h1 className="font-serif text-[38px] sm:text-[50px] md:text-[64px] leading-[1.08] max-w-[650px]">
          {t.title1} <br />
          {t.title2}
        </h1>

        <p className="mt-6 md:mt-8 text-base md:text-lg font-semibold max-w-[520px]">
          {t.subtitle}
        </p>

        <Link to="/contact">
  <button className="mt-8 md:mt-10 bg-[#d1b986] text-white px-7 md:px-10 py-4 md:py-5 font-bold hover:bg-[#0d1b2a] transition-all duration-300">
    {t.button}
  </button>
</Link>
{/* 
        <button
          type="button"
          className="hidden lg:flex absolute right-[70px] top-[360px] w-[82px] h-[82px] rounded-full border-4 border-white/80 items-center justify-center"
        >
          <span className="w-[62px] h-[62px] rounded-full bg-white text-[#d1b986] flex items-center justify-center">
            <Play size={30} fill="currentColor" />
          </span>
        </button> */}

        <div className="flex gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-[#d1b986] scale-110" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-[-35px] z-20 w-full md:w-[1180px] md:max-w-[92%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#f4f4f4] text-[#111827] mt-16 md:mt-0">
        {t.plans.map((item, i) => {
          const Icon = icons[i];
          const active = i === current % t.plans.length;

          return (
            <div
              key={item.title}
              onClick={() => setCurrent(i % slides.length)}
              className={`flex items-center gap-5 px-6 md:px-9 py-6 md:py-8 border-b sm:border-r border-gray-300 cursor-pointer transition-colors ${
                active ? "bg-[#d1b986] text-white" : ""
              }`}
            >
              <Icon
                size={44}
                strokeWidth={1.6}
                className={active ? "text-white" : "text-[#1f2937]"}
              />

              <div>
                <p
                  className={`text-sm ${
                    active ? "text-white/90" : "text-[#64748b]"
                  }`}
                >
                  {item.small}
                </p>

                <h3 className="font-serif text-lg md:text-xl font-bold">
                  {item.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}