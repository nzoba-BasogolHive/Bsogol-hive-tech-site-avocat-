import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
];

function getGroups<T>(items: T[]) {
  const groups: T[][] = [];

  for (let i = 0; i < items.length; i += 3) {
    groups.push(items.slice(i, i + 3));
  }

  return groups;
}

export default function Commentaire() {
  const [index, setIndex] = useState(0);
  const { lang } = useLanguage();

  const text = {
    fr: {
      label: "Témoignages",
      title1: "L’expérience de",
      title2: "nos meilleurs clients",
      testimonials: [
        {
          name: "Claire",
          role: "Cliente",
          text: "Excellent avocat. Matt et son équipe sont très réactifs et maîtrisent parfaitement le système. Nous avons collaboré sur de nombreux dossiers et je continuerai à faire appel à lui.",
        },
        {
          name: "Jean Dupont",
          role: "Entrepreneur",
          text: "Une expertise remarquable et une réactivité exceptionnelle. Le cabinet a su défendre nos intérêts avec professionnalisme et efficacité.",
        },
        {
          name: "Sophie Martin",
          role: "Directrice RH",
          text: "Un accompagnement juridique sérieux et humain. L'équipe est toujours disponible et apporte des solutions adaptées à chaque situation.",
        },
        {
          name: "Marc Bernard",
          role: "Chef d'entreprise",
          text: "Un cabinet d'avocats très compétent. Les conseils juridiques fournis ont été clairs, précis et ont permis de résoudre notre dossier rapidement.",
        },
        {
          name: "Isabelle Laurent",
          role: "Gérante",
          text: "Professionnalisme, écoute et efficacité. Nous avons été parfaitement accompagnés tout au long de la procédure. Je recommande vivement ce cabinet.",
        },
      ],
    },
    en: {
      label: "Testimonials",
      title1: "From our top clients",
      title2: "experience",
      testimonials: [
        {
          name: "Claire",
          role: "Client",
          text: "Excellent lawyer. Matt and his team are very responsive and understand the system perfectly. We have worked together on many cases and I will continue to rely on him.",
        },
        {
          name: "John Dupont",
          role: "Entrepreneur",
          text: "Remarkable expertise and outstanding responsiveness. The firm defended our interests with professionalism and efficiency.",
        },
        {
          name: "Sophie Martin",
          role: "HR Director",
          text: "Serious and human legal support. The team is always available and provides solutions adapted to every situation.",
        },
        {
          name: "Marc Bernard",
          role: "Business Owner",
          text: "A highly competent law firm. The legal advice provided was clear, precise, and helped us resolve our case quickly.",
        },
        {
          name: "Isabelle Laurent",
          role: "Manager",
          text: "Professionalism, listening, and efficiency. We were perfectly supported throughout the procedure. I highly recommend this firm.",
        },
      ],
    },
  };

  const t = text[lang];
  const groups = getGroups(t.testimonials);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % groups.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [groups.length]);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#fbfaf8] via-[#f7f3ee] to-[#eef2f7]">
      <div className="absolute top-[-120px] left-[-120px] w-[360px] h-[360px] bg-[#162238]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-120px] w-[420px] h-[420px] bg-[#d1b986]/20 rounded-full blur-3xl" />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-radial-gradient(ellipse 700px 350px at 50% 50%, transparent 0, transparent 58px, #162238 59px, transparent 60px)",
        }}
      />

      <div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-14 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-10 bg-[#d1b986]" />
            <p className="text-[#162238] text-xs tracking-[0.3em] uppercase font-bold">
              {t.label}
            </p>
            <span className="h-px w-10 bg-[#d1b986]" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-[58px] text-[#162238] leading-[1.1]">
            {t.title1} <br />
            <span className="italic text-[#d1b986]">{t.title2}</span>
          </h2>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {groups.map((group, gi) => (
              <div
                key={gi}
                className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              >
                {group.map((item, i) => (
                  <div
                    key={i}
                    className="relative bg-white/80 backdrop-blur-sm border border-white/70 rounded-none p-7 md:p-9 flex flex-col group hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(22,34,56,0.12)] transition-all duration-500"
                  >
                    <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-[#162238] via-[#d1b986] to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={avatars[(gi * 3 + i) % avatars.length]}
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#d1b986]/50"
                      />

                      <div>
                        <p className="font-serif text-lg text-[#162238] leading-tight">
                          {item.name}
                        </p>
                        <p className="text-xs text-[#d1b986] tracking-[0.15em] uppercase mt-1 font-bold">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <div className="mb-5">
                      <svg width="46" height="34" viewBox="0 0 52 40" fill="none">
                        <path
                          d="M0 40V24C0 10.745 6.933 3.213 20.8 1.387e-06L23.4 4.8C16.533 6.4 12.533 10.133 11.4 16H20V40H0ZM32 40V24C32 10.745 38.933 3.213 52.8 0L55.4 4.8C48.533 6.4 44.533 10.133 43.4 16H52V40H32Z"
                          fill="#162238"
                          opacity="0.08"
                        />
                      </svg>
                    </div>

                    <p className="text-[#5f6673] text-[15px] leading-relaxed flex-1 mb-8 font-serif italic">
                      “{item.text}”
                    </p>

                    <div className="w-full h-px bg-[#162238]/10 mb-5" />

                    <div className="flex gap-[3px]">
                      {[...Array(5)].map((_, si) => (
                        <svg
                          key={si}
                          width="13"
                          height="13"
                          viewBox="0 0 12 12"
                          fill="#d1b986"
                        >
                          <path d="M6 0l1.5 4H12L8.5 6.5 10 11 6 8.5 2 11l1.5-4.5L0 4h4.5z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {groups.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 h-[6px] bg-[#162238]"
                  : "w-[6px] h-[6px] bg-[#d1b986]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}