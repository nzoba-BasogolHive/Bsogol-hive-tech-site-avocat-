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
    icon: icon1,
    title: "Droit des affaires",
    subtitle: "Conseil et accompagnement juridique",
    link: "/droit-affaires",
  },
  {
    icon: icon2,
    title: "Droit immobilier",
    subtitle: "Gestion et sécurisation de vos biens",
    link: "/droit-immobilier",
  },
  {
    icon: icon3,
    title: "Droit pénal",
    subtitle: "Défense et représentation efficace",
    link: "/droit-penal",
  },
  {
    icon: icon4,
    title: "Droit fiscal",
    subtitle: "Optimisation et conformité fiscale",
    link: "/droit-fiscal",
  },
  {
    icon: icon5,
    title: "Droit social",
    subtitle: "Relations employeurs salariés",
    link: "/droit-travail",
  },
  {
    icon: icon6,
    title: "Contentieux",
    subtitle: "Résolution de litiges complexes",
    link: "/contentieux",
  },
];

export default function Expertiseaccueil() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-white overflow-hidden md:-mt-40">

      <Reveal>

        <div className="section-container mx-auto px-6 md:px-8">

          {/* TITRE */}

          <div className="text-center mb-14 md:mb-20">

            <p className="text-red-700 text-lg md:text-xl font-medium tracking-wide">
              NOS EXPERTISES
            </p>

            <h2 className="font-bold text-[#110767] text-3xl md:text-4xl lg:text-5xl mt-2">
              Domaines de Compétences
            </h2>

            <div className="w-20 md:w-24 h-1 bg-red-700 mx-auto mt-4 rounded-full"></div>

            <p className="max-w-3xl mx-auto mt-6 text-gray-700 text-base md:text-lg">
              Une équipe d'avocats spécialisés pour répondre à l'ensemble
              de vos besoins juridiques avec précision et efficacité.
            </p>

          </div>

          {/* CARDS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">

            {expertises.map((item, index) => (

              <Link
                key={index}
                to={item.link}
                className="group block bg-white rounded-xl shadow-lg p-8 md:-translate-y-3 hover:shadow-2xl transition duration-500"
              >

                <div className="w-14 h-14 md:w-[70px] md:h-[70px] mb-6 transition-transform duration-500 group-hover:scale-110">

                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />

                </div>

                <h4 className="font-bold text-[#110767] mb-3 text-xl md:text-2xl">
                  {item.title}
                </h4>

                <p className="mb-6 text-gray-700 text-sm md:text-base">
                  {item.subtitle}
                </p>

                <span className="text-red-700 flex items-center gap-2 font-semibold transition-all group-hover:gap-4">
                  En savoir plus →
                </span>

              </Link>

            ))}

          </div>

        </div>

      </Reveal>

    </section>
  );
}