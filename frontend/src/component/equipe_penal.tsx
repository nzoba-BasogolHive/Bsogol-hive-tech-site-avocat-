import Reveal from "./Reveal";
export default function Equipe() {

const team = [

{
name:"Maître Jean-Pierre Durand",
role:"Associé fondateur",
specialite:"Droit pénal & droit des affaires",
image:"/src/assets/image (20).webp"
},

{
name:"Maître Sophie Martin",
role:"Associée",
specialite:"Droit pénal & défense des victimes",
image:"/src/assets/image_6.webp"
},

{
name:"Maître Alexandre Petit",
role:"Associé",
specialite:"Droit des sociétés",
image:"/src/assets/image (16).webp"
}

]

return (

<section className="py-28 bg-white">

<div className="max-w-7xl mx-auto px-8 text-center">

<h2 className="text-5xl font-bold mb-6">
Découvrez Notre Équipe
</h2>

<h3 className="text-xl font-semibold mb-6">
Des Avocats D'Excellence
</h3>

<p className="text-gray-600 max-w-3xl mx-auto mb-16">
Une équipe pluridisciplinaire unie par la passion du droit et le souci
constant de l’excellence pour défendre vos intérêts.
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