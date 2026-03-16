import {
FaBriefcase,
FaUserTie,
FaBalanceScale,
FaFileContract,
FaHandshake,
FaUsers
} from "react-icons/fa";

import Reveal from "./Reveal";

export default function DomainesInterventionTravail() {

const domaines = [

{
title: "Contrat de travail",
icon: <FaFileContract />,
points: [
"Rédaction et sécurisation des contrats",
"Clauses spécifiques (non-concurrence, mobilité)",
"Conseil juridique aux employeurs et salariés"
]
},

{
title: "Licenciement",
icon: <FaUserTie />,
points: [
"Analyse de la procédure de licenciement",
"Contestations devant le Conseil de prud’hommes",
"Accompagnement stratégique"
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
title: "Relations collectives",
icon: <FaUsers />,
points: [
"Relations avec les représentants du personnel",
"Conflits collectifs",
"Accords collectifs"
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
title: "Droit social de l’entreprise",
icon: <FaBriefcase />,
points: [
"Conseil aux dirigeants",
"Gestion des obligations sociales",
"Prévention des litiges"
]
}

];

return (

<section className="py-16 md:py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-6 md:px-10">

{/* TITRE */}

<p className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-800">
Nos compétences
</p>

<h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-[#1A237E]">

Domaines d'intervention

<div className="w-20 h-1 bg-red-700 mx-auto mt-4"></div>

</h2>

{/* GRID */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

{domaines.map((item,index)=> (

<Reveal key={index}>

<div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full">

{/* ICON */}

<div className="text-red-700 text-3xl md:text-4xl mb-4">
{item.icon}
</div>

{/* TITLE */}

<h3 className="text-lg md:text-xl font-semibold mb-4 text-[#1A237E]">
{item.title}
</h3>

{/* LIST */}

<ul className="space-y-2 text-gray-600 text-sm md:text-base">

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

);

}