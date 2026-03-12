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

]

return (

<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-8">

{/* TITRE */}

<p className="text-4xl font-bold text-center mb-4">
Nos compétences
</p>

<br /><br /><br />

<h2 className="text-4xl font-bold text-center mb-16">
Domaines d'intervention
<div className="w-20 h-1 bg-red-700 mx-auto mt-4"></div>
</h2>

{/* GRID */}

<div className="grid md:grid-cols-3 gap-10">

{domaines.map((item,index)=> (

<Reveal key={index}>

<div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">

{/* ICON */}

<div className="text-red-700 text-3xl mb-4">
{item.icon}
</div>

{/* TITLE */}

<h3 className="text-lg font-semibold mb-4 text-[#1A237E]">
{item.title}
</h3>

{/* LIST */}

<ul className="space-y-2 text-gray-600">

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