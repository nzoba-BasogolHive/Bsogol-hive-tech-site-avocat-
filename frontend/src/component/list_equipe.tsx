import Reveal from "./Reveal";

export default function EquipeCabinet() {

const team = [

{
name: "Maître Jean-Pierre Durand",
role: "Associé Fondateur",
specialite: "Droit Pénal & Droit des Affaires",
desc: "Fondateur du cabinet en 1998, Maître Durand est reconnu pour son expertise en droit pénal des affaires et la défense de dirigeants d'entreprise.",
image: "/src/assets/image (20).webp"
},

{
name: "Maître Sophie Martin",
role: "Associée",
specialite: "Droit Civil & Droit de la Famille",
desc: "Spécialiste des contentieux familiaux complexes, Maître Martin accompagne ses clients avec empathie et rigueur.",
image: "/src/assets/image (21).webp"
},

{
name: "Maître Alexandre Petit",
role: "Associé",
specialite: "Droit Fiscal & Droit des Sociétés",
desc: "Expert en optimisation fiscale et restructuration d’entreprises. Il conseille les groupes internationaux.",
image: "/src/assets/image (16).webp"
},

{
name: "Maître Jean-Pierre Durand",
role: "Associé Fondateur",
specialite: "Droit du Travail",
desc: "Défenseur des droits des salariés et conseil des employeurs. Expertise reconnue en droit social.",
image: "/src/assets/image (19).webp"
},

{
name: "Maître Thomas Bernard",
role: "Collaborateur",
specialite: "Droit Immobilier",
desc: "Spécialiste des opérations immobilières complexes et du contentieux locatif.",
image: "/src/assets/image (18).webp"
},

{
name: "Maître Isabelle Moreau",
role: "Collaborateur",
specialite: "Droit Administratif",
desc: "Intervient dans les litiges avec l'administration et les collectivités publiques.",
image: "/src/assets/image_6.webp"
}

];

return (

<section className="py-24 bg-gray-100">

<div className="max-w-7xl mx-auto px-8">

<div className="grid md:grid-cols-3 gap-12">

{team.map((member,index)=>(

<Reveal key={index}>

<div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

{/* IMAGE */}

<div className="relative">

<img
src={member.image}
alt={member.name}
className="w-full h-[260px] object-cover"
/>

<div className="absolute bottom-4 left-4 text-white">

<h3 className="font-semibold">
{member.name}
</h3>

<p className="text-yellow-400 text-sm font-medium">
{member.role}
</p>

</div>

</div>

{/* CONTENU */}

<div className="p-6">

<h4 className="font-semibold mb-2 text-gray-800">
{member.specialite}
</h4>

<p className="text-gray-600 text-sm leading-relaxed">
{member.desc}
</p>

</div>

</div>

</Reveal>

))}

</div>

</div>

</section>

)

}