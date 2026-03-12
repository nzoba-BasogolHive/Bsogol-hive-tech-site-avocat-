import { FaCalendarAlt, FaUser } from "react-icons/fa";

export default function ArticlePage() {

return (

<section className="bg-gray-100 py-16">

<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

{/* IMAGE */}

<div className="relative">

<img
src="/src/assets/image (27).webp"
alt="article droit fiscal"
className="w-full h-[320px] object-cover"
/>

<span className="absolute bottom-4 left-4 bg-red-700 text-white px-4 py-1 rounded-full text-sm">
Droit Fiscal
</span>

</div>


{/* CONTENU */}

<div className="p-10">

{/* META */}

<div className="flex items-center gap-6 text-gray-500 text-sm mb-6">

<div className="flex items-center gap-2">
<FaCalendarAlt />
<span>02 février 2021</span>
</div>

<div className="flex items-center gap-2">
<FaUser />
<span>Maître Alexandre Petit</span>
</div>

</div>


{/* TITRE */}

<h1 className="text-3xl font-semibold mb-6">
Contrôle fiscal : comment bien se préparer et protéger ses intérêts
</h1>


{/* CITATION */}

<div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8">
Le contrôle fiscal permet à l’administration de vérifier la conformité
des déclarations fiscales. Une bonne préparation est essentielle pour
éviter les sanctions et sécuriser votre situation.
</div>


{/* TEXTE */}

<div className="space-y-6 text-gray-700 leading-relaxed">

<p>
Le contrôle fiscal est une procédure par laquelle l'administration
vérifie l'exactitude des déclarations effectuées par les contribuables,
qu'il s'agisse de particuliers ou d'entreprises. Cette procédure peut
porter sur différents impôts, notamment l'impôt sur le revenu, la TVA
ou l'impôt sur les sociétés.
</p>

<p>
Lorsqu'un contrôle est engagé, il est important de connaître ses droits
et obligations. Le contribuable dispose notamment du droit d'être
informé des vérifications effectuées et de présenter ses observations
face aux conclusions de l'administration fiscale.
</p>

<p>
L'accompagnement par un avocat en droit fiscal permet d'anticiper les
risques, de préparer les éléments justificatifs nécessaires et de
défendre efficacement vos intérêts en cas de redressement fiscal ou de
contentieux avec l'administration.
</p>

</div>


{/* CTA */}

<div className="mt-10 flex items-center justify-between">

<p className="text-gray-600">
Vous faites l'objet d'un contrôle fiscal ?
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