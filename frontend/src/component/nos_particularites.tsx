import Reveal from "./Reveal";

export default function Nos_particularites() {
  return (

<section className="w-full flex justify-center mt-32 px-6">

<div className="w-full max-w-[1700px]">

<Reveal>

<section className="py-28">

<div className="flex flex-col md:flex-row items-center gap-16">

{/* IMAGE GAUCHE */}

<img
src="/src/assets/image_6.webp"
alt="illustration"
className="w-[546px] h-[740px] object-cover rounded-[20px] shadow-lg"
/>

{/* TEXTE DROITE */}

<div className="text-[#110767]">

<h2
className="font-bold leading-tight mb-8"
style={{
fontFamily: "Garamond, serif",
fontSize: "55px",
}}
>
NOTRE PARTICULARITÉS
</h2>

<p
style={{
fontFamily: "Garamond, serif",
fontSize: "36px",
lineHeight: "1.4",
}}
>
Nous accompagnons nos clients avec une approche rigoureuse,
confidentielle et orientée vers les résultats. Chaque dossier
fait l’objet d’une analyse approfondie afin de construire une
stratégie juridique claire et efficace.

Notre cabinet se distingue par sa capacité à allier expertise
juridique, précision et organisation moderne.

Nous garantissons un suivi structuré, une communication
transparente et une disponibilité constante.

Notre engagement est de protéger vos intérêts avec
professionnalisme, intégrité et détermination.
</p>

</div>

</div>

</section>

</Reveal>

</div>

</section>

);
}