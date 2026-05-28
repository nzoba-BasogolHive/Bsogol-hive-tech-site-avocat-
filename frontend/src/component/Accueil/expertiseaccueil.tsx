import icon1 from "../../assets/droit-des-contrats.webp";
import icon2 from "../../assets/droit-immobilier.webp";
import icon3 from "../../assets/droit-penal.webp";
import icon4 from "../../assets/conformite-fiscale.webp";
import icon5 from "../../assets/droit-du-travail.webp";
import icon6 from "../../assets/droit-civil.webp";
import Reveal from "../Reveal";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const icons = [icon1, icon2, icon3, icon4, icon5, icon6];

const photos = [
   "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
   "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
  "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?w=600&q=80",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
  "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=600&q=80",
];

const links = [
  "/services/droit-affaires",
  "/services/droit-immobilier",
  "/services/droit-penal",
  "/services/droit-fiscal",
  "/services/droit-travail",
   "/services/droit-civil",
];

export default function Expertiseaccueil() {
  const { lang } = useLanguage();

  const text = {
    fr: {
      label: "Nos Expertises",
      title1: "Domaines de",
      title2: "Compétences",
      description:
        "Une équipe d'avocats spécialisés pour répondre à l'ensemble de vos besoins juridiques avec précision et efficacité.",
      readMore: "En savoir plus",
      expertises: [
        {
          title: "Droit des affaires",
          cases: "1240 DOSSIERS TRAITÉS",
          desc: "Conseil stratégique et accompagnement juridique pour vos projets d'entreprise et contrats commerciaux.",
        },
        {
          title: "Droit immobilier",
          cases: "980 DOSSIERS TRAITÉS",
          desc: "Sécurisation de vos transactions, baux et litiges immobiliers avec expertise et rigueur.",
        },
        {
          title: "Droit pénal",
          cases: "760 DOSSIERS TRAITÉS",
          desc: "Défense pénale rigoureuse et représentation efficace devant toutes les juridictions.",
        },
        {
          title: "Droit fiscal",
          cases: "1100 DOSSIERS TRAITÉS",
          desc: "Optimisation fiscale, conformité et gestion des contentieux avec l'administration fiscale.",
        },
        {
          title: "Droit social",
          cases: "850 DOSSIERS TRAITÉS",
          desc: "Accompagnement des relations employeurs-salariés, contrats de travail et litiges sociaux.",
        },
        {
          title: "Droit civil",
          cases: "920 DOSSIERS TRAITÉS",
          desc: "Contrats, responsabilité civile, litiges familiaux et protection des intérêts privés.",
        },
      ],
    },
    en: {
      label: "Our Expertise",
      title1: "Areas of",
      title2: "Practice",
      description:
        "A team of specialized lawyers ready to meet all your legal needs with precision and efficiency.",
      readMore: "Read More",
      expertises: [
        {
          title: "Business Law",
          cases: "1240 CASES HANDLED",
          desc: "Strategic advice and legal support for your business projects and commercial contracts.",
        },
        {
          title: "Real Estate Law",
          cases: "980 CASES HANDLED",
          desc: "Securing your transactions, leases, and real estate disputes with expertise and rigor.",
        },
        {
          title: "Criminal Law",
          cases: "760 CASES HANDLED",
          desc: "Strong criminal defense and effective representation before all courts.",
        },
        {
          title: "Tax Law",
          cases: "1100 CASES HANDLED",
          desc: "Tax optimization, compliance, and management of disputes with tax authorities.",
        },
        {
          title: "Employment Law",
          cases: "850 CASES HANDLED",
          desc: "Support for employer-employee relations, employment contracts, and labor disputes.",
        },
        {
          title: "Civil Law",
          cases: "920 CASES HANDLED",
          desc: "Contracts, civil liability, family disputes, and protection of private interests.",
        },
      ],
    },
  };

  const t = text[lang];

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-[#0d1b2a]">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-radial-gradient(ellipse 800px 400px at 50% 50%, transparent 0, transparent 58px, #4a7fa5 59px, transparent 60px)",
        }}
      />

      <Reveal>
        <div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-14 md:mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-10 bg-[#c98f52]" />
              <p className="text-[#c98f52] text-xs tracking-[0.3em] uppercase font-medium">
                {t.label}
              </p>
              <span className="h-px w-10 bg-[#c98f52]" />
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-white leading-[1.1] mb-6">
              {t.title1}{" "}
              <span className="italic text-[#c98f52]">{t.title2}</span>
            </h2>

            <p className="max-w-2xl mx-auto text-white/60 text-base md:text-lg leading-relaxed">
              {t.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {t.expertises.map((item, index) => (
              <Link
                key={index}
                to={links[index]}
                className="group block bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={photos[index]}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-[#0d1b2a]/0 group-hover:bg-[#0d1b2a]/20 transition-all duration-500" />
                </div>

                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-serif text-xl md:text-2xl text-[#0d1b2a] leading-tight">
                      {item.title}
                    </h4>

                    <div className="w-10 h-10 flex-shrink-0 ml-3 mt-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <img
                        src={icons[index]}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <p className="text-[10px] tracking-[0.2em] text-[#c98f52] uppercase mb-4 font-medium">
                    ({item.cases})
                  </p>

                  <div className="w-full h-px bg-[#e8e3db] mb-4" />

                  <p className="text-[#666] text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <span className="flex items-center gap-3 text-[11px] tracking-[0.22em] text-[#0d1b2a] uppercase font-bold">
                    {t.readMore}
                    <span className="h-px w-8 bg-[#c98f52] group-hover:w-14 transition-all duration-500" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}