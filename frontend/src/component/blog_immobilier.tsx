import { FaCalendarAlt, FaUser } from "react-icons/fa";
import PageTransition from "../component/PageTransition";

export default function ArticlePage() {

return (

<PageTransition>

<section className="bg-gray-100 py-10 md:py-16">

<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

{/* IMAGE */}

<div className="relative">

<img
src="/src/assets/image (26).webp"
alt="article droit immobilier"
className="w-full h-[220px] md:h-[320px] object-cover"
/>

<span className="absolute bottom-4 left-4 bg-red-700 text-white px-4 py-1 rounded-full text-xs md:text-sm">
Droit Immobilier
</span>

</div>


{/* CONTENU */}

<div className="p-6 md:p-10">

{/* META */}

<div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-500 text-xs md:text-sm mb-6">

<div className="flex items-center gap-2">
<FaCalendarAlt />
<span>06 Janvier 2021</span>
</div>

<div className="flex items-center gap-2">
<FaUser />
<span>Maître Alexandre Petit</span>
</div>

</div>


{/* TITRE */}

<h1 className="text-2xl md:text-3xl font-semibold mb-6">
Investissement locatif : les pièges juridiques à éviter
</h1>


{/* CITATION */}

<div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8 text-sm md:text-base">
L’investissement immobilier peut être très rentable, mais certaines
erreurs juridiques peuvent entraîner des litiges coûteux pour les
propriétaires.
</div>


{/* TEXTE */}

<div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">

<p>
L'investissement locatif attire de nombreux particuliers souhaitant
constituer un patrimoine et générer des revenus complémentaires.
Toutefois, cette opération nécessite une bonne connaissance du cadre
juridique afin d’éviter certains risques.
</p>

<p>
La rédaction du bail, le respect des obligations du bailleur, la gestion
des loyers impayés ou encore les règles relatives aux travaux et aux
charges locatives sont autant d’éléments pouvant donner lieu à des
contentieux entre propriétaires et locataires.
</p>

<p>
Le recours à un avocat spécialisé en droit immobilier permet d’anticiper
ces difficultés, de sécuriser les opérations immobilières et de défendre
vos intérêts en cas de litige devant les juridictions compétentes.
</p>

</div>


{/* CTA */}

<div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

<p className="text-gray-600 text-sm md:text-base">
Vous avez un projet immobilier ou un litige locatif ?
</p>

<button className="bg-[#1E1671] text-white px-6 py-3 rounded-md hover:bg-[#151057] transition w-full md:w-auto">
Consulter un avocat →
</button>

</div>

</div>

</div>

</section>

</PageTransition>

);
}