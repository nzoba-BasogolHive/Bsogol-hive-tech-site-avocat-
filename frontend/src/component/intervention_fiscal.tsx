import { FaLandmark, FaBalanceScale, FaFileInvoiceDollar, FaChartPie, FaSearchDollar, FaUniversity } from "react-icons/fa";
import Reveal from "./Reveal";

export default function DomainesInterventionFiscal() {

const domaines = [

{
title: "Fiscalité des entreprises",
icon: <FaLandmark />,
points: [
"Conseil fiscal aux sociétés",
"Optimisation de la fiscalité",
"Structuration fiscale des activités"
]
},

{
title: "Fiscalité des particuliers",
icon: <FaFileInvoiceDollar />,
points: [
"Déclaration fiscale",
"Gestion du patrimoine",
"Optimisation fiscale personnelle"
]
},

{
title: "Contentieux fiscal",
icon: <FaBalanceScale />,
points: [
"Litiges avec l'administration fiscale",
"Représentation devant les juridictions",
"Défense des contribuables"
]
},

{
title: "Contrôle fiscal",
icon: <FaSearchDollar />,
points: [
"Assistance lors des contrôles fiscaux",
"Analyse des redressements",
"Négociation avec l'administration"
]
},

{
title: "Optimisation fiscale",
icon: <FaChartPie />,
points: [
"Stratégies fiscales sécurisées",
"Réduction de la charge fiscale",
"Planification fiscale"
]
},

{
title: "Fiscalité internationale",
icon: <FaUniversity />,
points: [
"Fiscalité des opérations internationales",
"Double imposition",
"Structuration fiscale internationale"
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