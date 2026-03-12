import { FaBalanceScale, FaUser } from "react-icons/fa";

export default function ArticlesSection() {

const categories = [
"Tous",
"Droit civil",
"Droit pénal",
"Droit fiscal",
"Droit du travail",
"Droit des affaires"
];

return (

<section className="bg-gray-100 py-10">

<div className="max-w-7xl mx-auto px-6">

{/* FILTRES */}

<div className="flex flex-wrap gap-3 mb-6">

{categories.map((cat,index)=>(

<button
key={index}
className={`px-5 py-1.5 rounded-full border text-sm
${index === 0
? "bg-[#1E1671] text-white"
: "bg-white border-gray-300 hover:bg-gray-200"
}`}
>
{cat}
</button>

))}

</div>


{/* ARTICLE */}

<div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">

{/* IMAGE */}

<div className="md:w-1/2">
<img
src="/src/assets/image3.webp"
alt="article"
className="w-full h-[260px] object-cover"
/>
</div>


{/* CONTENU */}

<div className="md:w-1/2 p-6 flex flex-col justify-between">

<div>

{/* META */}

<div className="flex items-center gap-4 text-sm text-gray-500 mb-3">

<div className="flex items-center gap-2">
<FaBalanceScale />
<span>Droit civil</span>
</div>

<span>15 février 2025</span>

</div>

{/* TITRE */}

<h3 className="text-xl font-semibold mb-3">
Les nouvelles règles du divorce par consentement mutuel
</h3>

{/* TEXTE */}

<p className="text-gray-600 text-sm leading-relaxed mb-4">
Depuis la réforme de 2017, le divorce par consentement mutuel peut
se faire sans passage devant le juge. Quelles sont les implications
pratiques ?
</p>

</div>


{/* FOOTER */}

<div className="flex justify-between items-center text-sm">

<div className="flex items-center gap-2 text-gray-600">
<FaUser />
<span>Maître Sophie Martin</span>
</div>

<button className="text-red-600 font-medium hover:underline">
Lire l'article →
</button>

</div>

</div>

</div>

</div>

</section>

);
}