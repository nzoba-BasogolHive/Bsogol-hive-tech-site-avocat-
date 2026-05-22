import icon1 from "../assets/droit-des-contrats.webp";
import icon2 from "../assets/droit-immobilier.webp";
import icon3 from "../assets/droit-penal.webp";
import icon4 from "../assets/conformite-fiscale.webp";
import icon5 from "../assets/droit-du-travail.webp";
import icon6 from "../assets/droit-civil.webp";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";

const expertises = [
  {
    num: "01",
    icon: icon1,
    title: "Droit des affaires",
    subtitle: "Conseil et accompagnement juridique pour vos transactions et opérations commerciales.",
    link: "/droit-affaires",
  },
  {
    num: "02",
    icon: icon2,
    title: "Droit immobilier",
    subtitle: "Gestion et sécurisation de vos biens, transactions et contentieux locatifs.",
    link: "/droit-immobilier",
  },
  {
    num: "03",
    icon: icon3,
    title: "Droit pénal",
    subtitle: "Défense et représentation efficace devant toutes les juridictions pénales.",
    link: "/droit-penal",
  },
  {
    num: "04",
    icon: icon4,
    title: "Droit fiscal",
    subtitle: "Optimisation et conformité fiscale pour entreprises et particuliers.",
    link: "/droit-fiscal",
  },
  {
    num: "05",
    icon: icon5,
    title: "Droit social",
    subtitle: "Relations employeurs-salariés, négociations et litiges de droit du travail.",
    link: "/droit-travail",
  },
  {
    num: "06",
    icon: icon6,
    title: "Contentieux",
    subtitle: "Résolution de litiges complexes et stratégie judiciaire sur mesure.",
    link: "/contentieux",
  },
];

export default function Expertiseaccueil() {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden" style={{ background: "#F8F6F1" }}>

      {/* Filigrane décoratif */}
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(80px, 20vw, 200px)",
          fontWeight: 700,
          color: "rgba(17,7,103,0.04)",
          letterSpacing: "0.15em",
          whiteSpace: "nowrap",
        }}
      >
        DROIT
      </span>

      <Reveal>
        <div className="relative max-w-6xl mx-auto px-6 md:px-10">


        <div className="section-container mx-auto px-6 md:px-8">

          {/* TITRE */}

=======
          {/* EN-TÊTE */}

          <div className="text-center mb-14 md:mb-20">
            <p className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.25em] uppercase mb-4"
               style={{ color: "#8B1A2F" }}>
              <span style={{ width: 28, height: 0.5, background: "#8B1A2F", opacity: 0.6, display: "inline-block" }} />
              Nos expertises
              <span style={{ width: 28, height: 0.5, background: "#8B1A2F", opacity: 0.6, display: "inline-block" }} />
            </p>

            <h2
              className="font-bold text-4xl md:text-5xl lg:text-[52px] leading-tight tracking-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif", color: "#110767" }}
            >
              Domaines de Compétences
            </h2>

            <p className="max-w-lg mx-auto text-sm md:text-base leading-relaxed font-light" style={{ color: "#666" }}>
              Une équipe d'avocats spécialisés pour répondre à l'ensemble de vos
              besoins juridiques avec précision et efficacité.
            </p>
          </div>

          {/* GRILLE */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
            style={{ border: "0.5px solid rgba(17,7,103,0.12)" }}
          >
            {expertises.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="group relative flex flex-col bg-white p-8 md:p-9 transition-colors duration-300 hover:bg-[#FDFCFA]"
                style={{
                  borderRight: (i + 1) % 3 !== 0 ? "0.5px solid rgba(17,7,103,0.1)" : "none",
                  borderBottom: i < 3 ? "0.5px solid rgba(17,7,103,0.1)" : "none",
                  textDecoration: "none",
                }}
              >
                {/* Barre rouge au survol */}
                <span
                  className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 ease-out"
                  style={{ background: "#8B1A2F" }}
                />

                {/* Numéro */}
                <span
                  className="text-[11px] font-medium tracking-[0.12em] mb-5 transition-all duration-300"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "rgba(17,7,103,0.3)",
                  }}
                >
                  {item.num}
                </span>

                {/* Icône */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
                  style={{ background: "#F0EEF8" }}
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="w-6 h-6 object-contain"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(9%) sepia(62%) saturate(1200%) hue-rotate(225deg)",
                    }}
                  />
                </div>

                {/* Titre */}
                <h3
                  className="text-xl font-bold mb-2 leading-snug"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#110767" }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="flex-1 text-sm leading-relaxed font-light mb-6" style={{ color: "#777" }}>
                  {item.subtitle}
                </p>

                {/* Lien */}
                <span
                  className="inline-flex items-center gap-1.5 text-[11.5px] font-medium tracking-[0.1em] uppercase transition-all duration-200"
                  style={{ color: "#8B1A2F" }}
                >
                  En savoir plus
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>

        </div>
       </div>
      </Reveal>
    </section>
  );
}     
