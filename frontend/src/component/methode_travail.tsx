import { FaFileContract, FaUsers, FaBalanceScale, FaHandshake, FaBriefcase, FaUserTie } from "react-icons/fa";
import Reveal from "./Reveal";

export default function DomainesInterventionTravail() {

const domaines = [

{
title: "Contrat de travail",
icon: <FaFileContract />,
points: [
"Rédaction et analyse des contrats",
"Clauses spécifiques (mobilité, non-concurrence)",
"Conseil juridique aux employeurs et salariés"
]
},

{
title: "Relations sociales",
icon: <FaUsers />,
points: [
"Relations avec les représentants du personnel",
"Gestion des conflits collectifs",
"Accompagnement des négociations sociales"
]
},

{
title: "Contentieux prud’homal",
icon: <FaBalanceScale />,
points: [
"Défense des salariés",
"Représentation des employeurs",
"Plaidoirie devant le Conseil de prud’hommes"
]
},

{
title: "Rupture du contrat de travail",
icon: <FaHandshake />,
points: [
"Rupture conventionnelle",
"Négociation des indemnités",
"Transaction et accords amiables"
]
},

{
title: "Gestion des ressources humaines",
icon: <FaBriefcase />,
points: [
"Conseil aux employeurs",
"Gestion disciplinaire",
"Prévention des litiges sociaux"
]
},

{
title: "Licenciement",
icon: <FaUserTie />,
points: [
"Analyse de la procédure de licenciement",
"Contestations et défense",
"Accompagnement stratégique"
]
}

];

return (

<section className="py-16 md:py-24 bg-gray-50">

<div className="section-container mx-auto px-6">

{/* TITRE */}

<p className="text-center text-sm uppercase tracking-widest text-gray-500 mb-3">
Nos compétences
</p>

<h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-[#1A237E]">
Domaines d'intervention
</h2>

<div className="w-20 h-1 bg-red-700 mx-auto mb-12"></div>

{/* GRID */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

{domaines.map((item,index)=> (

<Reveal key={index}>

<div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 group">

{/* ICON */}

<div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-50 text-red-700 text-xl mb-4 group-hover:bg-red-700 group-hover:text-white transition">

{item.icon}

</div>

{/* TITLE */}

<h3 className="text-lg font-semibold mb-4 text-[#1A237E]">
{item.title}
</h3>

{/* LIST */}

<ul className="space-y-2 text-gray-600 text-sm leading-relaxed">

{item.points.map((p,i)=>(

<li key={i}>• {p}</li>

))}

</ul>

</div>

</Reveal>

))}

</div>

</div>

</section>

)

}