import Reveal from "./Reveal";
import image6 from "../assets/image_6.webp";

export default function Nos_particularites() {
  return (

<section className="w-full flex justify-center mt-52 md:mt-40 px-6">

<div className="w-full max-w-7xl">

<Reveal>

<section className="py-20 md:py-28">

<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

{/* IMAGE */}

<img
src={image6}
alt="illustration"
className="w-full max-w-[500px] h-[420px] md:h-[520px] lg:h-[640px] object-cover rounded-2xl shadow-xl"
/>

{/* TEXTE */}

<div className="text-[#110767]">

<h2
className="font-bold leading-tight mb-6 text-3xl md:text-4xl lg:text-5xl"
style={{ fontFamily: "Garamond, serif" }}
>
NOTRE PARTICULARITÉS
</h2>

<p
className="text-gray-700 leading-relaxed space-y-4 text-base md:text-lg lg:text-xl"
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