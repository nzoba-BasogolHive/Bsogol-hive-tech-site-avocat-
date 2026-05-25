import Reveal from "./Reveal";

export default function Processus() {

const steps = [
{
number:"01",
title:"Contact d'urgence",
text:"Joignez-nous 24h/24. Notre équipe intervient rapidement dès votre appel."
},

{
number:"02",
title:"Analyse du dossier",
text:"Étude approfondie de votre situation et des éléments de procédure."
},

{
number:"03",
title:"Stratégie de défense",
text:"Mise en place d'une stratégie juridique adaptée à votre dossier."
},

{
number:"04",
title:"Défense & suivi",
text:"Assistance complète devant les juridictions et suivi continu."
}
]

return (

<section className="relative overflow-hidden bg-[#0a0814] py-16 md:py-24 text-white">
{/* BACKGROUND PREMIUM */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_45%)]" />

<div className="absolute top-0 left-1/4 w-[400px] h-[250px] bg-[#1b0f6b]/40 blur-[120px] rounded-full pointer-events-none" />

<div className="absolute bottom-0 right-0 w-[300px] h-[200px] bg-[#c9a84c]/10 blur-[100px] rounded-full pointer-events-none" />
<div className="section-container mx-auto px-8">

{/* TITRE */}

<p className="text-center uppercase tracking-widest text-gray-300 mb-4">
Méthodologie
</p>

<h2 className="text-4xl font-bold text-center mb-16">
Notre processus d'intervention
</h2>

{/* GRID */}

<div className="grid md:grid-cols-4 gap-12 text-center">

{steps.map((step,index)=>(

<Reveal key={index}>

<div className="flex flex-col items-center">

{/* CERCLE */}

<div className="w-20 h-20 flex items-center justify-center 
border-4 border-red-500 rounded-full text-xl font-bold mb-6 
hover:scale-110 transition">

{step.number}

</div>

{/* TITLE */}

<h3 className="font-semibold mb-2">
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