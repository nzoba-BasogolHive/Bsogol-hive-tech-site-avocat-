import { FaCalendarAlt, FaUser } from "react-icons/fa";


export default function ArticlePage() {

return (



<section className="bg-gray-100 py-10 md:py-16">

<div className=" section-container  bg-white rounded-xl shadow-md overflow-hidden">

{/* IMAGE */}

<div className="relative">

<img
src="/src/assets/image (28).webp"
alt="article droit du travail"
className="w-full h-[220px] md:h-[320px] object-cover"
/>

<span className="absolute bottom-4 left-4 bg-red-700 text-white px-4 py-1 rounded-full text-xs md:text-sm">
Droit du Travail
</span>

</div>


{/* CONTENU */}

<div className="p-6 md:p-10">

{/* META */}

<div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-500 text-xs md:text-sm mb-6">

<div className="flex items-center gap-2">
<FaCalendarAlt />
<span>12 avril 2021</span>
</div>

<div className="flex items-center gap-2">
<FaUser />
<span>Maître Alexandre Petit</span>
</div>

</div>


{/* TITRE */}

<h1 className="text-2xl md:text-3xl font-semibold mb-6">
Licenciement économique : comprendre les droits des salariés
</h1>


{/* CITATION */}

<div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8 text-sm md:text-base">
Le licenciement économique doit répondre à des conditions strictes
prévues par le droit du travail afin de garantir la protection des
salariés.
</div>


{/* TEXTE */}

<div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">

<p>
Le licenciement économique intervient lorsqu’une entreprise rencontre
des difficultés économiques, des mutations technologiques ou une
réorganisation nécessaire à la sauvegarde de sa compétitivité.
Cependant, cette procédure est strictement encadrée par le droit du
travail.
</p>

<p>
L’employeur doit notamment respecter plusieurs obligations : informer
les représentants du personnel, rechercher des solutions de
reclassement et justifier la réalité des difficultés économiques
rencontrées par l’entreprise.
</p>

<p>
Un avocat spécialisé en droit du travail peut accompagner les salariés
comme les employeurs afin de vérifier la régularité de la procédure,
contester un licenciement abusif ou sécuriser juridiquement les
décisions prises par l’entreprise.
</p>

</div>


{/* CTA */}

<div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

<p className="text-gray-600 text-sm md:text-base">
Vous êtes confronté à un licenciement ou à un litige avec votre employeur ?
</p>

<button className="bg-[#1E1671] text-white px-6 py-3 rounded-md hover:bg-[#151057] transition w-full md:w-auto">
Consulter un avocat →
</button>

</div>

</div>

</div>

</section>



);
}