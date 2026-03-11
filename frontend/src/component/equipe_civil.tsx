import Reveal from "./Reveal";

export default function EquipeCivil() {

const team = [

{
name:"Maître Claire Dubois",
role:"Associée fondatrice",
specialite:"Droit civil & droit de la famille",
image:"/src/assets/avocat1.jpg"
},

{
name:"Maître Julien Moreau",
role:"Associé",
specialite:"Droit immobilier & responsabilité civile",
image:"/src/assets/avocat2.jpg"
},

{
name:"Maître Camille Lefèvre",
role:"Avocate",
specialite:"Droit des contrats & contentieux civil",
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
Des Experts en Droit Civil
</h3>

<p className="text-gray-600 max-w-3xl mx-auto mb-16">
Notre équipe d'avocats intervient dans les principaux domaines du droit civil
afin de vous accompagner, vous conseiller et défendre vos intérêts devant les
juridictions civiles.
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