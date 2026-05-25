import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import ouragan from "../assets/clay-banks-BgjiQXpPZIY-unsplash.webp";
import penal from "../assets/juneteenth-celebration-with-symbolic-representation-end-slavery-united-states.webp";
import planning from "../assets/image (9).webp";
import blessure from "../assets/closeup-young-man-with-knee-injury.webp";
import immigration from "../assets/image (7).webp";
import Reveal from "./Reveal";

const sujets = [
  { slug: "defense-penale",        label: "Défense Pénale",          image: penal },
  { slug: "planification-succession", label: "Planification",         image: planning },
  { slug: "blessures-corporelles", label: "Blessures Corporelles",   image: blessure },
  { slug: "droit-immigration",     label: "Droit de l'Immigration",  image: immigration },
];

export default function ActualitesAccueil() {
  return (
<<<<<<< HEAD
    <section className="w-full bg-[#f4f4f4] py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <Reveal>

          {/* TITRE PRINCIPAL */}
          <h2 className="mb-12 md:mb-16 font-bold text-[#0f1545] font-serif tracking-[3px] text-[clamp(32px,5vw,64px)]">
            ACTUALITES RECENTES
          </h2>

          {/* SECTION PRINCIPALE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

            <div className="flex justify-center lg:justify-start">
              <img
                src={ouragan}
                alt="ouragan"
                className="w-[260px] h-[260px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] object-cover rounded-full"
              />
            </div>

            <div>
              <h3 className="mb-6 text-[#0f1545] font-semibold font-serif text-[clamp(26px,4vw,48px)]">
                Dégâts causés par l'ouragan
              </h3>

              <p className="mb-6 text-gray-700 font-serif text-[clamp(16px,2.5vw,28px)] leading-relaxed">
                Consultez des informations précieuses sur les demandes
                d'indemnisation pour dommages causés par un ouragan,
                avec la possibilité de contacter directement un avocat.
              </p>

              <button className="flex items-center gap-3 text-[#0f1545] font-semibold font-serif text-[clamp(16px,2vw,22px)] hover:gap-6 transition-all">
                EN SAVOIR PLUS
                <span>→</span>
              </button>
            </div>

          </div>

          {/* SOUS-TITRE */}
          <p className="text-center mt-16 md:mt-20 mb-12 md:mb-16 text-gray-800 font-serif text-[clamp(18px,3vw,30px)]">
            Sujets d'actualité en matière d'aide juridique
          </p>

          {/* CARTES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 text-center">

            <div>
  <img
    src={penal}
    alt="Défense pénale"
    className="w-[120px] h-[120px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px] object-cover rounded-full mx-auto mb-6"
  />
  <h4 className="font-serif text-[20px]">DEFENSE PÉNALE</h4>
</div>

<div>
  <img
    src={planning}
    alt="Planification successorale"
    className="w-[120px] h-[120px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px] object-cover rounded-full mx-auto mb-6"
  />
  <h4 className="font-serif text-[20px]">PLANIFICATION</h4>
</div>

<div>
  <img
    src={blessure}
    alt="Blessures corporelles"
    className="w-[120px] h-[120px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px] object-cover rounded-full mx-auto mb-6"
  />
  <h4 className="font-serif text-[20px]">BLESSURES CORPORELLES</h4>
</div>

<div>
  <img
    src={immigration}
    alt="Droit de l'immigration"
    className="w-[120px] h-[120px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px] object-cover rounded-full mx-auto mb-6"
  />
  <h4 className="font-serif text-[20px]">DROIT DE L'IMMIGRATION</h4>
</div>
=======
    <section className="w-full bg-[#f4f0eb] py-20 md:py-32 relative overflow-hidden">

      {/* bande accent gauche */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#1b0f6b]/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>

          {/* EN-TÊTE */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-8 h-px bg-[#c9a84c]" />
                <p className="text-[#1b0f6b] text-[10px] font-bold tracking-[0.3em] uppercase font-serif">
                  Veille juridique
                </p>
              </div>
              <h2 className="font-bold leading-[1.15] text-[#0f1545] font-serif text-[clamp(32px,5vw,58px)]">
                Actualités Récentes
              </h2>
            </div>

            <Link
              to="/actualites"
              className="group flex-shrink-0 flex items-center gap-3 border border-[#1b0f6b]/25 hover:border-[#1b0f6b] text-[#1b0f6b] text-[11px] font-bold tracking-[0.18em] uppercase px-6 py-3 hover:bg-[#1b0f6b] hover:text-white transition-all duration-300"
            >
              Voir toutes les actualités
              <FaArrowRight size={10} className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>

          {/* ARTICLE À LA UNE */}
          <Link
            to="/actualites/degats-ouragan"
            className="group relative overflow-hidden flex flex-col lg:flex-row bg-white border border-[#e8e0d5] hover:border-[#c9a84c]/40 hover:shadow-2xl shadow-md transition-all duration-500 mb-12 md:mb-16"
          >
            {/* image */}
            <div className="relative overflow-hidden w-full lg:w-1/2 h-[260px] lg:h-[380px] flex-shrink-0">
              <img
                src={ouragan}
                alt="Dégâts causés par l'ouragan"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/30 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-[#c9a84c] text-[#0a0814] text-[9px] font-black tracking-[0.2em] uppercase px-3 py-1">
                À la une
              </div>
              <span className="absolute bottom-4 left-4 bg-[#1b0f6b] text-white text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1">
                Droit Civil
              </span>
            </div>

            {/* contenu */}
            <div className="flex flex-col justify-center p-8 md:p-12 flex-1">
              <div className="flex items-center gap-4 text-gray-400 text-[11px] mb-5">
                <span className="flex items-center gap-1.5">
                  <FaCalendarAlt size={10} />
                  10 janvier 2025
                </span>
              </div>

             <h3 className="font-bold leading-[1.25] mb-4 transition-colors duration-300 group-hover:text-[#1b0f6b] font-serif text-[clamp(22px,3vw,34px)] text-[#0a0814]">
                Dégâts causés par l'ouragan : comment obtenir une indemnisation ?
              </h3>

              <div className="w-10 h-[2px] bg-[#c9a84c] mb-5 group-hover:w-20 transition-all duration-500" />

              <p className="text-[14px] leading-[1.8] mb-8 max-w-lg text-gray-500">
                Consultez des informations précieuses sur les demandes d'indemnisation
                pour dommages causés par des catastrophes naturelles, avec les
                démarches concrètes à suivre pour défendre vos intérêts.
              </p>

              <div className="inline-flex items-center gap-3 bg-[#1b0f6b] text-white text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-3 w-fit group-hover:bg-[#c9a84c] group-hover:text-[#0a0814] transition-all duration-300">
                Lire l'article
                <FaArrowRight size={10} className="transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </div>
          </Link>

          {/* SUJETS D'ACTUALITÉ */}
          <div>
           <p className="text-center mb-10 md:mb-14 font-serif text-[clamp(18px,2.5vw,26px)] tracking-[2px] text-[#0f1545]">
              Sujets d'actualité en matière d'aide juridique
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {sujets.map(({ slug, label, image }) => (
                <Link
                  key={slug}
                  to={`/actualites/${slug}`}
                  className="group flex flex-col items-center text-center gap-4"
                >
                  <div className="relative overflow-hidden rounded-full border-2 border-transparent group-hover:border-[#c9a84c] transition-all duration-400 shadow-md group-hover:shadow-xl w-[130px] h-[130px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px] flex-shrink-0">
                    <img
                      src={image}
                      alt={label}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#1b0f6b]/0 group-hover:bg-[#1b0f6b]/30 transition-all duration-400 flex items-center justify-center">
                      <FaArrowRight
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -rotate-45"
                        size={18}
                      />
                    </div>
                  </div>

                  <div>
                   <h4 className="font-semibold transition-colors duration-300 leading-snug text-sm md:text-base group-hover:text-[#1b0f6b] font-serif text-[#0f1545]">
                      {label}
                    </h4>
                    <div className="w-0 group-hover:w-8 h-[2px] bg-[#c9a84c] mx-auto mt-2 transition-all duration-400" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* LIEN TOUTES LES ACTUALITÉS */}
          <div className="mt-16 md:mt-20 flex justify-center">
            <Link
              to="/actualites"
              className="group flex items-center gap-3 bg-[#0a0814] text-white text-[11px] font-bold tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#1b0f6b] transition-all duration-300"
            >
              Toutes nos actualités
              <FaArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
>>>>>>> Doungue
          </div>

        </Reveal>
      </div>
    </section>
  );
}