import Reveal from "./Reveal";

export default function ProcessusCivil() {

const steps = [
{
number: "01",
title: "Prise de contact",
text: "Vous nous contactez pour exposer votre situation et obtenir un premier échange."
},
{
number: "02",
title: "Analyse juridique",
text: "Étude détaillée de votre dossier et des documents juridiques."
},
{
number: "03",
title: "Stratégie juridique",
text: "Définition d’une stratégie adaptée pour défendre vos intérêts."
},
{
number: "04",
title: "Accompagnement",
text: "Assistance dans les négociations ou représentation devant les juridictions civiles."
}
];

return (

<section className="relative bg-[#110767] py-16 md:py-24 text-white overflow-hidden">

{/* pattern discret */}

<div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />

<div className="relative section-container mx-auto px-6">

{/* TITRE */}

<p className="text-center uppercase tracking-widest text-gray-300 mb-4 text-xs md:text-sm">
Méthodologie
</p>

<h2 className="text-2xl md:text-4xl font-bold text-center mb-12 md:mb-16">
Notre processus d'intervention
</h2>

{/* GRID */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 text-center">

{steps.map((step,index)=>(

<Reveal key={index}>

<div className="flex flex-col items-center group">

{/* NUMERO */}

<div className="relative mb-6">

<div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-4 border-[#c9a227] rounded-full text-lg md:text-xl font-bold transition duration-500 group-hover:scale-110 group-hover:bg-[#c9a227] group-hover:text-[#110767]">

{step.number}

</div>

</div>

{/* TITRE */}

<h3 className="font-semibold mb-3 text-base md:text-lg">
{step.title}
</h3>

{/* TEXTE */}

<p className="text-sm text-gray-300 max-w-xs leading-relaxed">
{step.text}
</p>

</div>

</Reveal>

))}

</div>

</div>

</section>

)

}