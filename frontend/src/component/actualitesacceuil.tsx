import ouragan from "../assets/clay-banks-BgjiQXpPZIY-unsplash.webp";
import penal from "../assets/juneteenth-celebration-with-symbolic-representation-end-slavery-united-states.webp";
import planning from "../assets/image (9).webp";
import blessure from "../assets/closeup-young-man-with-knee-injury.webp";
import immigration from "../assets/image (7).webp";
import Reveal from "./Reveal";

export default function actualitesaccueil() {
  return (
<section className="w-full bg-[#f4f4f4] py-24 relative overflow-hidden">

<div className="max-w-[1600px] mx-auto px-10">
<Reveal>
  <section className="py-28">
  
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
<div className="flex justify-center lg:justify-start ">
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
className="w-[200px] h-[200px] object-cover rounded-full mx-auto mb-6 bg-black/30"
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
className="w-[200px] h-[200px] object-cover rounded-full mx-auto mb-6 bg-black/30"
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
className="w-[200px] h-[200px] object-cover rounded-full mx-auto mb-6 bg-black/30"
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
className="w-[200px] h-[200px] object-cover rounded-full mx-auto mb-6 bg-black/30"
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
  </section>
</Reveal>


</div>
  

</section>
  );
}