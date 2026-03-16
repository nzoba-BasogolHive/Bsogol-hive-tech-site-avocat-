import ouragan from "../assets/clay-banks-BgjiQXpPZIY-unsplash.webp";
import penal from "../assets/juneteenth-celebration-with-symbolic-representation-end-slavery-united-states.webp";
import planning from "../assets/image (9).webp";
import blessure from "../assets/closeup-young-man-with-knee-injury.webp";
import immigration from "../assets/image (7).webp";
import Reveal from "./Reveal";

export default function ActualitesAccueil() {
  return (
<section className="w-full bg-[#f4f4f4] py-16 md:py-24 relative overflow-hidden">

<div className="max-w-[1600px] mx-auto px-6 md:px-10">

<Reveal>

<h2
className="mb-12 md:mb-16 font-bold text-[#0f1545]"
style={{
fontFamily:"Garamond, serif",
fontSize:"clamp(32px,5vw,64px)",
letterSpacing:"3px"
}}
>
ACTUALITES RECENTS
</h2>


<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">


<div className="flex justify-center lg:justify-start">
<img
src={ouragan}
alt="ouragan"
className="w-[260px] h-[260px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] object-cover rounded-full"
/>
</div>


<div>

<h3
className="mb-6 text-[#0f1545]"
style={{
fontFamily:"Garamond, serif",
fontSize:"clamp(26px,4vw,48px)",
fontWeight:"600"
}}
>
Dégâts causés par l'ouragan
</h3>

<p
className="mb-6 text-gray-700"
style={{
fontFamily:"Garamond, serif",
fontSize:"clamp(16px,2.5vw,28px)",
lineHeight:"1.6"
}}
>
Consultez des informations précieuses sur les demandes
d'indemnisation pour dommages causés par un ouragan,
avec la possibilité de contacter directement un avocat.
</p>

<button
className="flex items-center gap-3 text-[#0f1545] font-semibold hover:gap-6 transition-all"
style={{
fontFamily:"Garamond, serif",
fontSize:"clamp(16px,2vw,22px)"
}}
>
EN SAVOIR PLUS
<span>→</span>
</button>

</div>

</div>


<p
className="text-center mt-16 md:mt-20 mb-12 md:mb-16 text-gray-800"
style={{
fontFamily:"Garamond, serif",
fontSize:"clamp(18px,3vw,30px)"
}}
>
Sujets d'actualité en matière d'aide juridique
</p>


<div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 text-center">


<div>
<img src={penal} className="w-[120px] h-[120px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px] object-cover rounded-full mx-auto mb-6"/>
<h4 style={{fontFamily:"Garamond, serif",fontSize:"20px"}}>DEFENSE PÉNALE</h4>
</div>

<div>
<img src={planning} className="w-[120px] h-[120px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px] object-cover rounded-full mx-auto mb-6"/>
<h4 style={{fontFamily:"Garamond, serif",fontSize:"20px"}}>PLANIFICATION</h4>
</div>

<div>
<img src={blessure} className="w-[120px] h-[120px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px] object-cover rounded-full mx-auto mb-6"/>
<h4 style={{fontFamily:"Garamond, serif",fontSize:"20px"}}>BLESSURES CORPORELLES</h4>
</div>

<div>
<img src={immigration} className="w-[120px] h-[120px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px] object-cover rounded-full mx-auto mb-6"/>
<h4 style={{fontFamily:"Garamond, serif",fontSize:"20px"}}>DROIT DE L'IMMIGRATION</h4>
</div>

</div>

</Reveal>

</div>
</section>
);
}