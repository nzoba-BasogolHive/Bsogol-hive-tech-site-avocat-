import Reveal from "./Reveal";

type Step = {
number: string;
title: string;
text: string;
};

export default function ProcessusFiscal() {

const steps: Step[] = [
{
number: "01",
title: "Prise de contact",
text: "Vous nous exposez votre situation fiscale afin d'obtenir un premier avis juridique."
},
{
number: "02",
title: "Analyse fiscale",
text: "Étude approfondie de votre situation et des documents fiscaux afin d'identifier les enjeux."
},
{
number: "03",
title: "Stratégie fiscale",
text: "Mise en place d'une stratégie adaptée pour optimiser votre fiscalité ou préparer votre défense."
},
{
number: "04",
title: "Assistance & défense",
text: "Accompagnement lors d’un contrôle fiscal ou représentation devant les juridictions compétentes."
}
];

return (

<section className="bg-[#1E1671] py-16 md:py-24 text-white">

<div className="max-w-7xl mx-auto px-6">

{/* TITRE */}

<div className="text-center mb-14">

<p className="uppercase tracking-widest text-gray-300 mb-3 text-xs sm:text-sm">
Méthodologie
</p>

<h2 className="text-3xl sm:text-4xl font-bold">
Notre processus d'intervention
</h2>

</div>

{/* GRID */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

{steps.map((step,index)=>(

<Reveal key={index}>

<div className="flex flex-col items-center">

{/* NUMBER */}

<div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border-4 border-red-500 rounded-full text-lg sm:text-xl font-bold mb-6 hover:scale-110 transition duration-300">
{step.number}
</div>

{/* TITLE */}

<h3 className="font-semibold mb-2 text-base sm:text-lg">
{step.title}
</h3>

{/* TEXT */}

<p className="text-sm text-gray-300 max-w-xs">
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