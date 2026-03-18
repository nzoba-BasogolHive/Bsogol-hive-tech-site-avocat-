import Reveal from "./Reveal";
import image6 from "../assets/image_6.webp";

export default function Nos_particularites() {
  return (

<section className="w-full flex justify-center mt-16 md:mt-24 px-6">

<div className="w-full max-w-7xl">

<Reveal>

<section className="py-12 md:py-16">

<div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">

{/* IMAGE */}

<img
src={image6}
alt="illustration"
className="w-full max-w-[420px] md:max-w-[480px] h-[300px] md:h-[420px] lg:h-[520px] object-cover rounded-2xl shadow-lg"
/>

{/* TEXTE */}

<div className="text-[#110767]">

<h2
className="font-bold leading-tight mb-4 text-2xl md:text-3xl lg:text-4xl"
style={{ fontFamily: "Garamond, serif" }}
>
NOTRE PARTICULARITÉS
</h2>

<p
className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg"
style={{ fontFamily: "Garamond, serif" }}
>

Nous accompagnons nos clients avec une approche rigoureuse,
confidentielle et orientée vers les résultats. Chaque dossier
fait l’objet d’une analyse approfondie afin de construire une
stratégie juridique claire et efficace.

<br /><br />

Notre cabinet se distingue par sa capacité à allier expertise
juridique, précision et organisation moderne.

<br /><br />

Nous garantissons un suivi structuré, une communication
transparente et une disponibilité constante.

<br /><br />

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