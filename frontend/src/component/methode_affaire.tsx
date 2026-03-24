import {
FaFileContract,
FaBuilding,
FaBalanceScale,
FaHandshake,
FaChartLine,
FaLandmark
} from "react-icons/fa";

import Reveal from "./Reveal";

type Domaine = {
title: string;
icon: React.ReactNode;
points: string[];
};

export default function DomainesInterventionAffaires() {

const domaines: Domaine[] = [

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

<div className="section-container mx-auto px-6">

{/* TITRE */}

<div className="text-center mb-14">

<p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
Nos compétences
</p>

<h2 className="text-3xl sm:text-4xl font-bold">
Domaines d'intervention
</h2>

<div className="w-20 h-1 bg-red-700 mx-auto mt-4"></div>

</div>

{/* GRID */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

{domaines.map((item,index)=>(

<Reveal key={index}>

<div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100">

{/* ICON */}

<div className="text-red-700 text-3xl mb-4">
{item.icon}
</div>

{/* TITLE */}

<h3 className="text-base sm:text-lg font-semibold mb-4 text-[#1A237E]">
{item.title}
</h3>

{/* LIST */}

<ul className="space-y-2 text-gray-600 text-sm sm:text-base">

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