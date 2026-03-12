import icon1 from "../assets/droit-des-contrats.webp";
import icon2 from "../assets/droit-immobilier.webp";
import icon3 from "../assets/droit-penal.webp";
import icon4 from "../assets/conformite-fiscale.webp";
import icon5 from "../assets/droit-du-travail.webp";
import icon6 from "../assets/droit-civil.webp";
import Reveal from "./Reveal";
const expertises = [
  {
    icon: icon1,
    title: "Droit des affaires",
    subtitle: "Conseil et accompagnement juridique",
  },
  {
    icon: icon2,
    title: "Droit immobilier",
    subtitle: "Gestion et sécurisation de vos biens",
  },
  {
    icon: icon3,
    title: "Droit pénal",
    subtitle: "Défense et représentation efficace",
  },
  {
    icon: icon4,
    title: "Droit fiscal",
    subtitle: "Optimisation et conformité fiscale",
  },
  {
    icon: icon5,
    title: "Droit social",
    subtitle: "Relations employeurs salariés",
  },
  {
    icon: icon6,
    title: "Contentieux",
    subtitle: "Résolution de litiges complexes",
  },
];

export default function Expertiseaccueil() {
  return (
    <section className="relative w-full py-40 bg-white overflow-hidden -mt-48">
<Reveal>
  <section className="py-28">
    
      {/* CONTENU */}
      <div className="relative z-10 max-w-[1600px] mx-auto">

        {/* TITRE */}
        <div className="text-center mb-20">

          <p
            className="text-[#9f1d1d]"
            style={{ fontFamily: "Garamond", fontSize: "22px" }}
          >
            NOS EXPERTISES
          </p>

          <h2
            className="font-bold text-[#110767]"
            style={{ fontFamily: "Garamond", fontSize: "38px" }}
          >
            Domaines de Compétences
          </h2>

          {/* barre animée */}
          <div className="w-24 h-1 bg-red-700 mx-auto mt-4 rounded-full"></div>

          <p
            className="max-w-3xl mx-auto mt-6 text-gray-700"
            style={{ fontFamily: "Garamond", fontSize: "20px" }}
          >
           Une équipe d'avocats spécialisés pour répondre à l'ensemble de vos besoins juridiques avec précision et efficacité.
          </p>

        </div>

      </div>

      {/* CARDS */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">

          {expertises.map((item, index) => (
            <a
              key={index}
              href="#"
              className="group block bg-white rounded-xl shadow-lg p-10 border border-gray-100 hover:border-red-700 hover:-translate-y-4 hover:shadow-2xl transition duration-500"
            >

              {/* ICON */}
              <div className="w-[70px] h-[70px] mb-6 transition-transform duration-500 group-hover:scale-110">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h4
                className="font-bold text-[#110767] mb-4"
                style={{ fontFamily: "Garamond", fontSize: "28px" }}
              >
                {item.title}
              </h4>

              <p
                className="mb-6 text-gray-700"
                style={{ fontFamily: "Garamond", fontSize: "18px" }}
              >
                {item.subtitle}
              </p>

              {/* bouton */}
              <span className="text-red-700 flex items-center gap-2 font-semibold transition-all group-hover:gap-4">
                En savoir plus →
              </span>

            </a>
          ))}

        </div>

      </div>
     
  </section>
</Reveal>

    </section>
  );
}