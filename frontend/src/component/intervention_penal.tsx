import { FaGavel, FaUserShield, FaBalanceScale, FaNewspaper, FaLaptopCode, FaHandsHelping } from "react-icons/fa";
import Reveal from "./Reveal";
export default function DomainesIntervention() {

const domaines = [
{
title: "Défense en garde à vue",
icon: <FaUserShield />,
points: [
"Notification immédiate au cabinet",
"Présence dès la 1ère heure",
"Accès au dossier de procédure"
]
},

{
title: "Droit pénal des affaires",
icon: <FaBalanceScale />,
points: [
"Conseil des dirigeants",
"Défense des entreprises",
"Contentieux économiques"
]
},

{
title: "Défense devant les tribunaux",
icon: <FaGavel />,
points: [
"Préparation stratégique",
"Plaidoirie devant les juridictions",
"Suivi complet du dossier"
]
},

{
title: "Assistance aux victimes",
icon: <FaHandsHelping />,
points: [
"Constitution de partie civile",
"Indemnisation",
"Accompagnement judiciaire"
]
},

{
title: "Droit pénal de la presse",
icon: <FaNewspaper />,
points: [
"Diffamation",
"Injure publique",
"Atteinte à la réputation"
]
},

{
title: "Cybercriminalité",
icon: <FaLaptopCode />,
points: [
"Fraude informatique",
"Atteinte aux données",
"Escroquerie en ligne"
]
}

]

return (

<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-8">

{/* TITRE */}
 <p className="text-4xl font-bold text-center mb-4">
          Nos compétences
        </p> <br /><br /><br />

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