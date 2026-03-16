import { FaCalendarAlt, FaUser } from "react-icons/fa";
import PageTransition from "../component/PageTransition";

export default function ArticlePage() {

return (

<PageTransition>

<section className="bg-gray-100 py-12 md:py-16">

<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">


<div className="relative">

<img
src="/src/assets/image (24).webp"
className="w-full h-[220px] md:h-[320px] object-cover"
/>

<span className="absolute bottom-4 left-4 bg-red-700 text-white px-4 py-1 rounded-full text-sm">
Droit Des Affaires
</span>

</div>


<div className="p-6 md:p-10">

<div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-6">

<div className="flex items-center gap-2">
<FaCalendarAlt/>
<span>15 février 2025</span>
</div>

<div className="flex items-center gap-2">
<FaUser/>
<span>Maître Alexandre Petit</span>
</div>

</div>


<h1 className="text-2xl md:text-3xl font-semibold mb-6">
Protection des données personnelles : les obligations des entreprises
</h1>


<div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8">
Le RGPD impose des obligations strictes aux entreprises.
Tour d'horizon des principales mesures à mettre en place.
</div>


<div className="space-y-6 text-gray-700 leading-relaxed">

<p>
Notre cabinet d'avocats suit de près les évolutions législatives et
jurisprudentielles dans ce domaine.
</p>

<p>
Les professionnels du droit doivent adapter leurs pratiques aux
nouvelles règles en vigueur.
</p>

<p>
Nos avocats spécialisés sont à votre disposition pour vous accompagner.
</p>

</div>


<div className="mt-10 flex flex-col md:flex-row gap-4 md:justify-between md:items-center">

<p className="text-gray-600">
Vous avez une question sur ce sujet ?
</p>

<button className="bg-[#1E1671] text-white px-6 py-3 rounded-md hover:bg-[#151057] transition">
Consulter un avocat →
</button>

</div>

</div>

</div>

</section>

</PageTransition>

);
}