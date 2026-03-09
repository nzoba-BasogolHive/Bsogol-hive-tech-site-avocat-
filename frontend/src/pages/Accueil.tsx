import NavbarComponent from "../component/Navbar";
import heroImg from "../assets/image (4) (1).webp"; // adapte le nom si besoin
/*import slantedImg from "../assets/image (5).webp"; // adapte le nom
import expertiseBg from "../assets/image_6.webp"; // adapte le nom
import { Link } from "react-router-dom";*/

import icon1 from "../assets/droit-des-contrats.webp";
/*import icone1 from "../assets/family (1) 1.webp";
import icone2 from "../assets/scale-of-justice 1.webp";
import icone3 from "../assets/badge 1.webp";*/
import icon2 from "../assets/droit-immobilier.webp";
import icon3 from "../assets/droit-penal.webp";
import icon4 from "../assets/conformite-fiscale.webp";
import icon5 from "../assets/droit-du-travail.webp";
import icon6 from "../assets/droit-civil.webp";
import avocat from "../assets/image (7).webp";
import avocat1 from "../assets/image (8).webp";
import { useState, useEffect } from "react";
import ouragan from "../assets/clay-banks-BgjiQXpPZIY-unsplash.webp";
import penal from "../assets/juneteenth-celebration-with-symbolic-representation-end-slavery-united-states.webp";
import planning from "../assets/image (9).webp";
import blessure from "../assets/closeup-young-man-with-knee-injury.webp";
import immigration from "../assets/image (7).webp";
import CTASection from "../component/CTASection";
import FooterSection from "../component/FooterSection";



export default function Accueil() {
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
const testimonials = [
  {
    name: "Claire",
    text: "Excellent avocat. Matt et son équipe sont très réactifs et maîtrisent parfaitement le système. Nous avons collaboré sur de nombreux dossiers et je continuerai à faire appel à lui.",
  },
  {
    name: "Jean Dupont",
    text: "Une expertise remarquable et une réactivité exceptionnelle. Le cabinet a su défendre nos intérêts avec professionnalisme et efficacité.",
  },
  {
    name: "Sophie Martin",
    text: "Un accompagnement juridique sérieux et humain. L'équipe est toujours disponible et apporte des solutions adaptées.",
  },
];
const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);
  return (
    <div className="w-full min-h-screen bg-white">
      {/* HERO */}
      <section className="relative w-full max-w-[1980px] mx-auto h-[989px] overflow-hidden rounded-[20px]">

        {/* Image de fond */}
        <img
          src={heroImg}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay couleur */}
        <div className="absolute inset-0 bg-[#110767]/75"></div>

        {/* Navbar DANS le hero */}
        <div className="absolute top-0 left-0 w-full z-20">
          <div className="pt-8 px-12">
            <NavbarComponent />
          </div>
        </div>

        {/* Contenu texte */}
        <div className="relative z-10 h-full">

          {/* Titre principal */}
          <h1
            className="absolute text-white font-bold leading-tight"
            style={{
              fontFamily: "Garamond, serif",
              fontSize: "96px",
              left: "312px",
              top: "402px",
            }}
          >
           La Justice au Service de Vos Droits
          </h1>

          {/* Sous-texte */}
          <p
            className="absolute text-white font-bold"
            style={{
              fontFamily: "Garamond, serif",
              fontSize: "40px",
              left: "293px",
              top: "607px",
              width: "1485px",
              height: "190px",
            }}
          >
           Notre cabinet d'avocats vous accompagne avec rigueur et détermination dans toutes vos démarches juridiques.
            Une expertise reconnue, un engagement sans faille.
          </p>

          {/* Contactez-nous */}
          <div
            className="absolute flex items-center gap-4 text-white font-bold cursor-pointer group"
            style={{
              fontFamily: "Garamond, serif",
              fontSize: "40px",
              left: "111px",
              top: "850px",
              width: "403px",
              height: "49px",
            }}
          >
            <span className="group-hover:underline">
              NOUS CONTACTEZ 
            </span>

            <span className="transition-transform group-hover:translate-x-6">
              →
            </span>
          </div>

        </div>
      </section>
      {/* ===== SECTION 3 BLOCS ===== */}
<section className="w-full flex justify-center mt-20 px-6">
  <div className="relative w-full max-w-[1600px] bg-white rounded-[20px] shadow-xl py-12 px-16">

    {/* Conteneur horizontal */}
    <div className="grid grid-cols-3 items-center">

      {/* ===== BLOC 1 ===== */}
      <div className="flex items-center gap-6 pr-12">
        <img
          src="/src/assets/family (1) 1.webp"
          alt="icone1"
          className="w-[90px] h-[90px] object-contain"
        />
        <p
          className="text-[#110767]"
          style={{
            fontFamily: "Garamond, serif",
            fontSize: "24px",
            width: "196px",
            height: "100px",
          }}
        >
          Respect et Diginty
<b>Nos clients sont comme une famille</b>
        </p>
      </div>

      {/* séparateur (ne touche pas les bords) */}
      <div className="pointer-events-none absolute left-1/3 top-6 bottom-6 w-px bg-gray-200"></div>

      {/* ===== BLOC 2 ===== */}
      <div className="flex items-center justify-center gap-6 px-12">
        <img
          src="/src/assets/scale-of-justice 1.webp"
          alt="icon"
          className="w-[90px] h-[90px] object-contain"
        />
        <p
          className="text-[#110767]"
          style={{
            fontFamily: "Garamond, serif",
            fontSize: "24px",
            width: "196px",
            height: "100px",
          }}
        >
          Chaque cas est unique
          <b>Représentation juridique de haut niveau</b>
        </p>
      </div>

      {/* séparateur */}
      <div className="pointer-events-none absolute left-2/3 top-6 bottom-6 w-px bg-gray-200"></div>

      {/* ===== BLOC 3 ===== */}
      <div className="flex items-center justify-end gap-6 pl-12">
        <img
          src="/src/assets/badge 1.webp"
          alt="icon"
          className="w-[90px] h-[90px] object-contain"
        />
        <p
          className="text-[#110767]"
          style={{
            fontFamily: "Garamond, serif",
            fontSize: "24px",
            width: "196px",
            height: "100px",
          }}
        >
         Équipe expérimentée
        <b> Avocats dévoués et primés</b>
        </p>
      </div>

    </div>
  </div>
</section>
{/* ===== SECTION IMAGE + TEXTE ===== */}
<section className="w-full flex justify-center mt-32 px-6">
  <div className="w-full max-w-[1700px] grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

    {/* IMAGE GAUCHE */}
    <div className="flex justify-center lg:justify-start">
       <img src="/src/assets/image (6).webp"
        alt="illustration"
        className="w-[546px] h-[740px] object-cover rounded-[20px] shadow-lg"
      />
    </div>

    {/* TEXTE DROITE */}
    <div className="text-[#110767]">

      {/* TITRE */}
      <h2
        className="font-bold leading-tight mb-8"
        style={{
          fontFamily: "Garamond, serif",
          fontSize: "55px",
        }}
      >
       NOTRE  PARTICULARITES 
      </h2>

      {/* PARAGRAPHE */}
      <p
        style={{
          fontFamily: "Garamond, serif",
          fontSize: "36px",
          maxWidth: "1133px",
          lineHeight: "1.4",
        }}
      >
        Nous accompagnons nos clients avec une approche rigoureuse, confidentielle et orientée vers les résultats.
        Chaque dossier fait l’objet d’une analyse approfondie afin de construire une stratégie juridique claire et efficace.
         Notre cabinet se distingue par sa capacité à allier expertise juridique, précision et organisation moderne.
        Nous garantissons un suivi structuré, une communication transparente et une disponibilité constante.
        Notre engagement est de protéger vos intérêts avec professionnalisme, intégrité et détermination.
        Nous apportons des solutions fiables et adaptées aux exigences du monde juridique actuel.
      </p>

    </div>
  </div>
  </section>
<section className="relative bg-white py-40 overflow-hidden">

  {/* TITRE */}
  <h2
    className="absolute left-24 top-10 z-40 font-bold"
    style={{
      fontFamily: "Garamond, serif",
      fontSize: "64px",
      color: "#110767",
    }}
  >
    A PROPOS
  </h2>

  {/* CONTENAIRE */}
  <div className="relative h-[600px] flex items-center justify-center">

    {/* CONTENAIRE ROTÉ */}
    <div className="absolute w-[120%] h-[500px] bg-white rotate-[6deg] overflow-hidden flex items-center justify-center">

      {/* IMAGE */}
      <img
        src="/src/assets/image (7).webp"
        alt=""
        className="
          absolute
          w-[140%]
          max-w-none
          object-cover
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          rotate-[-6deg]
        "
      />

    </div>

    {/* CARTE TEXTE */}
    <div className="relative z-30 bg-white shadow-xl p-12 w-[900px] text-center">

      <h3
        className="mb-4 font-bold"
        style={{ fontFamily: "Garamond, serif", fontSize: "30px" }}
      >
        Renforcement des lois sur la protection des données personnelles
      </h3>

      <p
        className="text-gray-600 mb-6"
        style={{ fontFamily: "Garamond, serif", fontSize: "18px" }}
      >
        De nouvelles lois modifient les règles de protection des données personnelles
        afin de mieux encadrer leur utilisation et protéger les droits des citoyens.
      </p>

      <button
        className="font-semibold hover:underline"
        style={{ fontFamily: "Garamond, serif", color: "#110767" }}
      >
        EN SAVOIR PLUS
      </button>

    </div>

  </div>

</section>
  {/* ===== NOS EXPERTISES ===== */}
     <section className="relative w-full py-40 bg-white overflow-hidden">


        {/* IMAGE DIAGONALE */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${avocat})`,
            filter: "brightness(0.85)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            
            clipPath: "polygon(55% 0, 100% 0, 100% 100%, 35% 100%)"
          }}
        />
        {/* CONTENU */}
  <div className="relative z-10 max-w-[1600px] mx-auto">


        {/* TITRE */}
        <div className="relative z-10 text-center mb-20">

          <p className="text-[#9f1d1d]" style={{ fontFamily: "Garamond", fontSize: "22px" }}>
            NOS EXPERTISES
          </p>

          <h2 className="font-bold text-[#110767]" style={{ fontFamily: "Garamond", fontSize: "38px" }}>
            Domaines de Compétences
          </h2>

          <p className="max-w-3xl mx-auto mt-4 text-gray-700"
             style={{ fontFamily: "Garamond", fontSize: "20px" }}>
            Une équipe d'avocats spécialisés pour répondre à l'ensemble de vos besoins juridiques avec précision et efficacité.
          </p>

        </div> 
        </div>

        {/* CARDS */}
        <div className="relative z-10 max-w-7xl mx-auto px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {expertises.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-10 hover:-translate-y-3 hover:shadow-2xl transition duration-500"
              >

                <div className="w-[70px] h-[70px] mb-6">
                  <img src={item.icon} alt={item.title} className="w-full h-full object-contain"/>
                </div>

                <h4 className="font-bold text-[#110767] mb-4"
                    style={{ fontFamily: "Garamond", fontSize: "28px" }}>
                  {item.title}
                </h4>

                <p className="mb-6 text-gray-700"
                   style={{ fontFamily: "Garamond", fontSize: "18px" }}>
                  {item.subtitle}
                </p>

                <button className="text-red-700 flex items-center gap-2 font-semibold hover:gap-4 transition-all">
                  En savoir plus →
                </button>

              </div>
            ))}

          </div>

        </div>

      </section>
     <section className="relative py-32 overflow-hidden">

  {/* IMAGE BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${avocat1})`,
      filter: "brightness(0.8)"
    }}
  />

  {/* overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* CONTENU */}
  <div className="relative z-10 max-w-5xl mx-auto text-center text-white px-6">

    <h2
      className="mb-10"
      style={{
        fontFamily: "Garamond, serif",
        fontSize: "42px",
      }}
    >
      Pourquoi Les Entreprises Choisissent Notre Cabinet
    </h2>

    {/* étoiles */}
    <div className="flex justify-center gap-2 text-3xl mb-10">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="animate-pulse">★</span>
      ))}
    </div>

    {/* CAROUSEL */}
    <div className="overflow-hidden">

      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >

        {testimonials.map((t, i) => (

          <div
            key={i}
            className="min-w-full px-10"
          >
            <p
              className="leading-relaxed max-w-3xl mx-auto"
              style={{
                fontSize: "18px",
                fontFamily: "Georgia, serif"
              }}
            >
              {t.text}
            </p>

            <h3
              className="mt-12 text-4xl font-semibold"
              style={{
                fontFamily: "Garamond, serif"
              }}
            >
              {t.name}
            </h3>
          </div>

        ))}

      </div>

    </div>

    {/* indicateurs */}
    <div className="flex justify-center gap-3 mt-10">

      {testimonials.map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={`w-3 h-3 rounded-full ${
            i === index ? "bg-white" : "bg-white/40"
          }`}
        />
      ))}

    </div>

  </div>

</section>
{/* ================= ACTUALITES ================= */}

<section className="w-full bg-[#f4f4f4] py-24 relative overflow-hidden">

<div className="max-w-[1600px] mx-auto px-10">

{/* TITRE */}
<h2
className="mb-16 font-bold text-[#0f1545]"
style={{
fontFamily: "Garamond, serif",
fontSize: "64px",
letterSpacing: "3px"
}}
>
ACTUALITES RECENTS
</h2>

{/* ARTICLE PRINCIPAL */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

{/* IMAGE RONDE */}
<div className="flex justify-center lg:justify-start">
<img
src={ouragan}
alt="ouragan"
className="w-[420px] h-[420px] object-cover rounded-full"
/>
</div>

{/* TEXTE */}
<div>

<h3
className="mb-6 text-[#0f1545]"
style={{
fontFamily: "Garamond, serif",
fontSize: "48px",
fontWeight: "600"
}}
>
Dégâts causés par l'ouragan
</h3>

<p
className="mb-6 text-gray-700"
style={{
fontFamily: "Garamond, serif",
fontSize: "28px",
lineHeight: "1.6"
}}
>
Consultez des informations précieuses sur les demandes
d'indemnisation pour dommages causés par un ouragan,
avec la possibilité de contacter directement un avocat.
</p>

<button
className="flex items-center gap-4 text-[#0f1545] font-semibold hover:gap-6 transition-all"
style={{
fontFamily: "Garamond, serif",
fontSize: "22px"
}}
>
EN SAVOIR PLUS
<span>→</span>
</button>

</div>

</div>


{/* SOUS TITRE */}
<p
className="text-center mt-20 mb-16 text-gray-800"
style={{
fontFamily: "Garamond, serif",
fontSize: "30px"
}}
>
Sujets d'actualité en matière d'aide juridique
</p>


{/* ARTICLES SECONDAIRES */}

<div className="grid grid-cols-2 md:grid-cols-4 gap-14 text-center">

{/* ITEM */}
<div>

<img
src={penal}
alt=""
className="w-[200px] h-[200px] object-cover rounded-full mx-auto mb-6"
/>

<h4
style={{
fontFamily: "Garamond, serif",
fontSize: "22px"
}}
>
DEFENSE PÉNALE
</h4>

</div>


<div>

<img
src={planning}
alt=""
className="w-[200px] h-[200px] object-cover rounded-full mx-auto mb-6"
/>

<h4
style={{
fontFamily: "Garamond, serif",
fontSize: "22px"
}}
>
PLANIFICATION
</h4>

</div>


<div>

<img
src={blessure}
alt=""
className="w-[200px] h-[200px] object-cover rounded-full mx-auto mb-6"
/>

<h4
style={{
fontFamily: "Garamond, serif",
fontSize: "22px"
}}
>
BLESSURES
CORPORELLES
</h4>

</div>


<div>

<img
src={immigration}
alt=""
className="w-[200px] h-[200px] object-cover rounded-full mx-auto mb-6"
/>

<h4
style={{
fontFamily: "Garamond, serif",
fontSize: "22px"
}}
>
DROIT DE
L'IMMIGRATION
</h4>

</div>

</div>

</div>

</section>
  <>
      <CTASection /> <br /><br />
      <FooterSection />
    </>

</div>)}