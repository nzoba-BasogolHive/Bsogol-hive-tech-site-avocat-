
{/* ===== SECTION IMAGE + TEXTE ===== */}
export default function Nos_particularites() {
  return (
<section className="w-full flex justify-center mt-32 px-6">
  <div className="w-full max-w-[1700px] grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

    {/* IMAGE GAUCHE */}
    <div className="flex justify-center lg:justify-start">
       <img src="/src/assets/image_6.webp"
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
  </section> );
}