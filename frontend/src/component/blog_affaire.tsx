import { FaCalendarAlt, FaUser } from "react-icons/fa";

export default function ArticlePage() {

return (

<section className="bg-gray-100 py-16">

<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

{/* IMAGE */}

<div className="relative">

<img
src="/src/assets/image (24).webp"
alt="article"
className="w-full h-[320px] object-cover"
/>

<span className="absolute bottom-4 left-4 bg-red-700 text-white px-4 py-1 rounded-full text-sm">
Droit Des Affaires
</span>

</div>


{/* CONTENU */}

<div className="p-10">

{/* META */}

<div className="flex items-center gap-6 text-gray-500 text-sm mb-6">

<div className="flex items-center gap-2">
<FaCalendarAlt />
<span>15 février 2025</span>
</div>

<div className="flex items-center gap-2">
<FaUser />
<span>Maître Alexandre Petit</span>
</div>

</div>


{/* TITRE */}

<h1 className="text-3xl font-semibold mb-6">
Protection des données personnelles : les obligations des entreprises
</h1>


{/* CITATION */}

<div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8">
Le RGPD impose des obligations strictes aux entreprises.  
Tour d'horizon des principales mesures à mettre en place.
</div>


{/* TEXTE */}

<div className="space-y-6 text-gray-700 leading-relaxed">

<p>
Notre cabinet d'avocats suit de près les évolutions législatives et
jurisprudentielles dans ce domaine. Les implications pratiques pour nos
clients sont significatives, et il est essentiel de comprendre les
mécanismes juridiques en jeu pour mieux défendre vos intérêts.
</p>

<p>
Les professionnels du droit et les justiciables doivent adapter leurs
pratiques aux nouvelles règles en vigueur. Une analyse approfondie de
la situation permet d'identifier les risques et les opportunités que
présente cette évolution juridique.
</p>

<p>
Nos avocats spécialisés sont à votre disposition pour vous accompagner
dans cette démarche et vous proposer des solutions adaptées à votre
situation personnelle ou professionnelle.
</p>

</div>


{/* CTA */}

<div className="mt-10 flex items-center justify-between">

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

);

}