import Reveal from "./Reveal";

export default function ProcessusFiscal() {

const steps = [
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

<section className="bg-[#1E1671] py-24 text-white">
<div className="max-w-7xl mx-auto px-8">

<p className="text-center uppercase tracking-widest text-gray-300 mb-4">
Méthodologie
</p>

<h2 className="text-4xl font-bold text-center mb-16">
Notre processus d'intervention
</h2>

<div className="grid md:grid-cols-4 gap-12 text-center">

{steps.map((step, index) => (

<Reveal key={index}>

<div className="flex flex-col items-center">

<div className="w-20 h-20 flex items-center justify-center border-4 border-red-500 rounded-full text-xl font-bold mb-6 hover:scale-110 transition">
{step.number}
</div>

<h3 className="font-semibold mb-2">
{step.title}
</h3>

<p className="text-sm text-gray-300 max-w-xs">
{step.text}
</p>

</div>

</Reveal>

))}

</div>

</div>

</section>
);
}