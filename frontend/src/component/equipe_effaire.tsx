import Reveal from "./Reveal";

export default function EquipeAffaires() {

const team = [

{
name:"Maître Laurent Bernard",
role:"Associé fondateur",
specialite:"Droit des sociétés & gouvernance d'entreprise",
image:"/src/assets/avocat1.jpg"
},

{
name:"Maître Sophie Garnier",
role:"Associée",
specialite:"Contrats commerciaux & droit commercial",
image:"/src/assets/avocat2.jpg"
},

{
name:"Maître Nicolas Petit",
role:"Avocat",
specialite:"Contentieux des affaires & fusions-acquisitions",
image:"/src/assets/avocat3.jpg"
}

]

return (

<section className="py-28 bg-white">

<div className="max-w-7xl mx-auto px-8 text-center">

<h2 className="text-5xl font-bold mb-6">
Découvrez Notre Équipe
</h2>

<h3 className="text-xl font-semibold mb-6">
Des Experts en Droit des Affaires
</h3>

<p className="text-gray-600 max-w-3xl mx-auto mb-16">
Notre équipe accompagne les entreprises, dirigeants et investisseurs
dans toutes les problématiques juridiques liées à la vie des sociétés,
aux opérations commerciales et aux litiges économiques.
</p>

{/* GRID */}

<div className="grid md:grid-cols-3 gap-12">

{team.map((member,index)=>(

<Reveal key={index}>

<div className="group">

{/* PHOTO */}

<div className="overflow-hidden rounded-xl shadow-lg">

<img
src={member.image}
alt={member.name}
className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
/>

</div>

{/* INFOS */}

<div className="mt-6">

<h4 className="font-semibold text-lg">
{member.name}
</h4>

<p className="text-red-700 text-sm font-medium">
{member.role}
</p>

<p className="text-gray-600 text-sm mt-1">
{member.specialite}
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