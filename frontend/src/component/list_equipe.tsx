import Reveal from "./Reveal";

import img1 from "../assets/image (20).webp";
import img2 from "../assets/image (21).webp";
import img3 from "../assets/image (16).webp";
import img4 from "../assets/image (19).webp";
import img5 from "../assets/image (18).webp";
import img6 from "../assets/image_6.webp";

type TeamMember = {
  name: string;
  role: string;
  specialite: string;
  desc: string;
  image: string;
};

export default function EquipeCabinet() {

const team: TeamMember[] = [

{
name: "Maître Jean-Pierre Durand",
role: "Associé Fondateur",
specialite: "Droit Pénal & Droit des Affaires",
desc: "Fondateur du cabinet en 1998, Maître Durand est reconnu pour son expertise en droit pénal des affaires et la défense de dirigeants d'entreprise.",
image: img1
},

{
name: "Maître Sophie Martin",
role: "Associée",
specialite: "Droit Civil & Droit de la Famille",
desc: "Spécialiste des contentieux familiaux complexes, Maître Martin accompagne ses clients avec empathie et rigueur.",
image: img2
},

{
name: "Maître Alexandre Petit",
role: "Associé",
specialite: "Droit Fiscal & Droit des Sociétés",
desc: "Expert en optimisation fiscale et restructuration d’entreprises. Il conseille les groupes internationaux.",
image: img3
},

{
name: "Maître Claire Dubois",
role: "Associée",
specialite: "Droit du Travail",
desc: "Défenseur des droits des salariés et conseil des employeurs. Expertise reconnue en droit social.",
image: img4
},

{
name: "Maître Thomas Bernard",
role: "Collaborateur",
specialite: "Droit Immobilier",
desc: "Spécialiste des opérations immobilières complexes et du contentieux locatif.",
image: img5
},

{
name: "Maître Isabelle Moreau",
role: "Collaborateur",
specialite: "Droit Administratif",
desc: "Intervient dans les litiges avec l'administration et les collectivités publiques.",
image: img6
}

];

return (

<section className="py-16 md:py-24 bg-gray-100">

<div className="section-container mx-auto px-6">

{/* GRID */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

{team.map((member,index)=>(

<Reveal key={index}>

<div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

{/* IMAGE */}

<div className="relative group overflow-hidden">

<img
src={member.image}
alt={member.name}
className="w-full aspect-[4/3] object-cover object-top group-hover:scale-105 transition duration-500"
/>

{/* OVERLAY */}

<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">

<h3 className="text-white font-semibold text-sm sm:text-base">
{member.name}
</h3>

<p className="text-yellow-400 text-xs sm:text-sm font-medium">
{member.role}
</p>

</div>

</div>

{/* CONTENU */}

<div className="p-5">

<h4 className="font-semibold mb-2 text-gray-800 text-sm sm:text-base">
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