import { FaCalendarAlt, FaUser } from "react-icons/fa";

export default function ArticlePage() {

return (

<section className="bg-gray-100 py-16">

<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

{/* IMAGE */}

<div className="relative">

<img
src="/src/assets/image (28).webp"
alt="article droit du travail"
className="w-full h-[320px] object-cover"
/>

<span className="absolute bottom-4 left-4 bg-red-700 text-white px-4 py-1 rounded-full text-sm">
Droit du Travail
</span>

</div>


{/* CONTENU */}

<div className="p-10">

{/* META */}

<div className="flex items-center gap-6 text-gray-500 text-sm mb-6">

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

<h1 className="text-3xl font-semibold mb-6">
Licenciement économique : comprendre les droits des salariés
</h1>


{/* CITATION */}

<div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8">
Le licenciement économique doit répondre à des conditions strictes
prévues par le droit du travail afin de garantir la protection des
salariés.
</div>


{/* TEXTE */}

<div className="space-y-6 text-gray-700 leading-relaxed">

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

<div className="mt-10 flex items-center justify-between">

<p className="text-gray-600">
Vous êtes confronté à un licenciement ou à un litige avec votre employeur ?
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