import NavbarComponent from "../component/Navbar";
import heroImg from "../assets/image (4) (1).webp"; // adapte le nom si besoin
import slantedImg from "../assets/image (5).webp"; // adapte le nom
import expertiseBg from "../assets/image (6) (1).webp"; // adapte le nom

import icon1 from "../assets/droit-des-contrats.webp";
import icone1 from "../assets/family (1) 1.webp";
import icone2 from "../assets/scale-of-justice 1.webp";
import icone3 from "../assets/badge 1.webp";
import icon2 from "../assets/droit-immobilier.webp";
import icon3 from "../assets/droit-penal.webp";
import icon4 from "../assets/conformite-fiscale.webp";
import icon5 from "../assets/droit-du-travail.webp";
import icon6 from "../assets/droit-civil.webp";

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
{/* ================= A PROPOS ================= */}
<section className="relative bg-gray-100 overflow-hidden mt-24">

  {/* ===== ZONE IMAGE INCLINÉE ===== */}
  <div className="relative h-[720px] overflow-visible">

    {/* IMAGE */}
    <img
      src="src/assets/image (7).webp" // ⚠️ remplace par ton image
      alt="A propos"
      className="
        absolute
        left-1/2
        top-[60px]
        -translate-x-1/2
        w-[150%]
        max-w-none
        rotate-[-7.51deg]
        object-cover
        z-10
      "
    />

    {/* OVERLAY EXACT */}
    <div className="absolute inset-0 bg-[#1A0F7D]/[0.17] z-20 pointer-events-none" />

    {/* ===== CARTE CENTRÉE DANS L’IMAGE ===== */}
    <div className="absolute inset-0 flex items-center justify-center z-30">
      <div className="bg-white shadow-2xl w-[917px] max-w-[92vw] p-10 text-center">

        <h3
          className="mb-4 font-bold"
          style={{
            fontFamily: "Garamond, serif",
            fontSize: "32px",
          }}
        >
          Renforcement des lois sur la protection des données personnelles
        </h3>

        <p
          className="mb-6 text-gray-600"
          style={{
            fontFamily: "Garamond, serif",
            fontSize: "18px",
          }}
        >
          De nouvelles lois modifient les règles de protection des données
          personnelles afin de mieux encadrer leur utilisation et protéger
          les droits des citoyens face aux nouvelles technologies.
        </p>

        <button
          className="font-semibold hover:underline"
          style={{
            fontFamily: "Garamond, serif",
            color: "#110767",
          }}
        >
          EN SAVOIR PLUS
        </button>
      </div>
    </div>

    {/* ===== TITRE A PROPOS (ZONE BLANCHE GAUCHE) ===== */}
    <h2
      className="absolute right-24 top-6 z-40 font-bold"
      style={{
        fontFamily: "Garamond, serif",
        fontSize: "64px",
        color: "#110767",
      }}
    >
      A PROPOS
    </h2>

    {/* ===== COUPE BAS POUR RACCORDER EXPERTISE ===== */}
    <div
      className="absolute bottom-0 left-0 w-full h-40 bg-gray-100 z-30"
      style={{
        clipPath: "polygon(0 55%, 100% 0%, 100% 100%, 0% 100%)",
      }}
    />
  </div>
</section>
{/* ================= NOS EXPERTISES ================= */}
<section className="relative bg-gray-100 pt-32 pb-44 overflow-hidden">

  {/* ===== IMAGE DIAGONALE DROITE ===== */}
  <div className="absolute inset-0 pointer-events-none">

    <img
      src={expertiseBg}
      alt=""
      className="
        absolute
        right-[-18%]
        top-[-12%]
        w-[75%]
        h-[145%]
        object-cover
        rotate-[14deg]
        opacity-95
      "
    />

    {/* overlay très léger (image plus claire) */}
    <div className="absolute inset-0 bg-white/20" />
  </div>

  {/* ===== PANNEAU BLANC HAUT (raccord A PROPOS) ===== */}
  <div
    className="absolute top-0 left-0 w-full h-40 bg-gray-100 z-10"
    style={{
      clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 100%)",
    }}
  />

  {/* ===== HEADER ===== */}
  <div className="text-center mb-20 relative z-20 px-6">

    <h2
      className="font-bold mb-4"
      style={{
        fontFamily: "Garamond, serif",
        fontSize: "38px",
        color: "#990f0f",
      }}
    >
      NOS EXPERTISES
    </h2>

    <h3
      className="font-bold mb-6"
      style={{
        fontFamily: "Garamond, serif",
        fontSize: "32px",
        color: "#110767",
      }}
    >
      Domaines de Compétences
    </h3>

    <p
      className="mx-auto max-w-4xl"
      style={{
        fontFamily: "Garamond, serif",
        fontSize: "21px",
        color: "#333",
      }}
    >
      Une équipe d'avocats spécialisés pour répondre à l'ensemble de vos besoins juridiques avec précision et efficacité.
    </p>

  </div>

  {/* ===== GRID CARTES PLUS GRANDES ===== */}
  <div className="relative z-20 max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

      {expertises.map((item, index) => (
        <div
          key={index}
          className="
            bg-white
            rounded-2xl
            shadow-xl
            p-10
            text-center
            hover:shadow-2xl
            transition
            duration-300
            min-h-[320px]
          "
        >
          {/* icone plus grande */}
          <div className="w-[110px] h-[90px] mx-auto mb-7">
            <img
              src={item.icon}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* titre */}
          <h4
            className="font-bold mb-4"
            style={{
              fontFamily: "Garamond, serif",
              fontSize: "30px",
            }}
          >
            {item.title}
          </h4>

          {/* texte */}
          <p
            className="mb-8"
            style={{
              fontFamily: "Garamond, serif",
              fontSize: "22px",
            }}
          >
            {item.subtitle}
          </p>

          {/* bouton */}
          <button className="flex items-center gap-2 text-[#110767] font-semibold mx-auto hover:underline text-lg">
            EN SAVOIR PLUS →
          </button>
        </div>
      ))}

    </div>
  </div>
</section>
</div>)}