import { FaFileContract, FaHome, FaUsers, FaBalanceScale, FaHandshake, FaLandmark } from "react-icons/fa";
import Reveal from "./Reveal";

export default function DomainesInterventionCivil() {

const domaines = [

{
title: "Droit des contrats",
icon: <FaFileContract />,
points: [
"Rédaction et analyse de contrats",
"Sécurisation juridique",
"Gestion des litiges contractuels"
]
},

{
title: "Responsabilité civile",
icon: <FaBalanceScale />,
points: [
"Réparation des préjudices",
"Responsabilité contractuelle",
"Responsabilité délictuelle"
]
},

{
title: "Droit de la famille",
icon: <FaUsers />,
points: [
"Divorce et séparation",
"Garde des enfants",
"Pension alimentaire"
]
},

{
title: "Droit immobilier",
icon: <FaHome />,
points: [
"Litiges immobiliers",
"Conflits propriétaires / locataires",
"Transactions immobilières"
]
},

{
title: "Médiation et règlement des conflits",
icon: <FaHandshake />,
points: [
"Négociation amiable",
"Médiation juridique",
"Résolution des litiges"
]
},

{
title: "Successions et patrimoine",
icon: <FaLandmark />,
points: [
"Gestion des successions",
"Partage du patrimoine",
"Conseil juridique familial"
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
