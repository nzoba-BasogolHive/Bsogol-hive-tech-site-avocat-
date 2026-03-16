import {
FaFileContract,
FaBuilding,
FaBalanceScale,
FaHandshake,
FaChartLine,
FaLandmark
} from "react-icons/fa";

import Reveal from "./Reveal";

export default function DomainesInterventionAffaires() {

const domaines = [

{
title: "Droit des sociétés",
icon: <FaBuilding />,
points: [
"Création et structuration des sociétés",
"Conseil aux dirigeants",
"Modification des statuts"
]
},

{
title: "Contrats commerciaux",
icon: <FaFileContract />,
points: [
"Rédaction de contrats commerciaux",
"Négociation contractuelle",
"Gestion des litiges contractuels"
]
},

{
title: "Contentieux des affaires",
icon: <FaBalanceScale />,
points: [
"Litiges commerciaux",
"Conflits entre associés",
"Représentation devant les juridictions"
]
},

{
title: "Fusions et acquisitions",
icon: <FaChartLine />,
points: [
"Audit juridique",
"Structuration des opérations",
"Accompagnement stratégique"
]
},

{
title: "Négociation et médiation",
icon: <FaHandshake />,
points: [
"Résolution amiable des conflits",
"Négociation commerciale",
"Médiation entre partenaires"
]
},

{
title: "Droit bancaire et financier",
icon: <FaLandmark />,
points: [
"Relations avec les établissements bancaires",
"Conseil en financement",
"Gestion des litiges financiers"
]
}

];

return (

<section className="py-16 md:py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-6 md:px-10">

{/* TITRE */}

<p className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
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

<div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 h-full">

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