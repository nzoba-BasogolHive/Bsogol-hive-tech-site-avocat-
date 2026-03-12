import { FaCalendarAlt, FaUser } from "react-icons/fa";

export default function ArticlePage() {

return (

<section className="bg-gray-100 py-16">

<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

{/* IMAGE */}

<div className="relative">

<img
src="/src/assets/image (25).webp"
alt="article droit penal"
className="w-full h-[320px] object-cover"
/>

<span className="absolute bottom-4 left-4 bg-red-700 text-white px-4 py-1 rounded-full text-sm">
Droit Pénal
</span>

</div>


{/* CONTENU */}

<div className="p-10">

{/* META */}

<div className="flex items-center gap-6 text-gray-500 text-sm mb-6">

<div className="flex items-center gap-2">
<FaCalendarAlt />
<span>20 Mars 2018</span>
</div>

<div className="flex items-center gap-2">
<FaUser />
<span>Maître Alexandre Petit</span>
</div>

</div>


{/* TITRE */}

<h1 className="text-3xl font-semibold mb-6">
La garde à vue : comprendre vos droits et les étapes de la procédure
</h1>


{/* CITATION */}

<div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8">
Toute personne placée en garde à vue dispose de droits fondamentaux :
être assistée par un avocat, être informée des faits reprochés et
pouvoir prévenir un proche.
</div>


{/* TEXTE */}

<div className="space-y-6 text-gray-700 leading-relaxed">

<p>
La garde à vue constitue une mesure privative de liberté décidée par
les autorités judiciaires dans le cadre d'une enquête pénale. Elle
permet aux enquêteurs de procéder aux investigations nécessaires
lorsqu'il existe des raisons plausibles de soupçonner qu'une personne a
commis ou tenté de commettre une infraction.
</p>

<p>
Durant cette procédure, la personne concernée bénéficie de garanties
essentielles destinées à protéger ses droits. Elle peut notamment être
assistée par un avocat dès le début de la mesure, consulter certains
éléments du dossier et faire prévenir un proche ou son employeur.
</p>

<p>
L’intervention d’un avocat pénaliste est souvent déterminante afin de
s'assurer du respect de la procédure et de préparer efficacement la
défense du justiciable. Notre cabinet accompagne ses clients à chaque
étape afin de préserver leurs droits et défendre leurs intérêts devant
les juridictions compétentes.
</p>

</div>


{/* CTA */}

<div className="mt-10 flex items-center justify-between">

<p className="text-gray-600">
Vous êtes concerné par une procédure pénale ?
</p>

<button className="bg-[#1E1671] text-white px-6 py-3 rounded-md hover:bg-[#151057] transition">
Consulter un avocat →
</button>

</div>

</div>

</div>

</section>

);

}