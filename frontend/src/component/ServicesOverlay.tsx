import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ServicesOverlay({ open, setOpen }: Props) {

const navigate = useNavigate();

if (!open) return null;

const services = [
{
title:"Droit pénal",
desc:"Défense pénale, garde à vue, tribunaux",
link:"/droit-penal"
},
{
title:"Droit civil",
desc:"Contrats, famille, responsabilité civile",
link:"/droit-civil"
},
{
title:"Droit des affaires",
desc:"Entreprises, contrats commerciaux",
link:"/droit-affaires"
},
{
title:"Droit du travail",
desc:"Licenciement, contrats, conflits sociaux",
link:"/droit-travail"
},
{
title:"Droit fiscal",
desc:"Fiscalité, optimisation, contentieux",
link:"/droit-fiscal"
}
];

return (

<motion.div
initial={{ y:"100%" }}
animate={{ y:0 }}
transition={{ duration:0.6 }}
className="fixed inset-0 bg-white z-50 overflow-y-auto"
>

{/* HEADER */}

<div className="bg-[#2E247E] text-white p-12 flex justify-between items-center">

<h2 className="text-5xl font-bold">
Nos Domaines d'Expertise
</h2>

<button
onClick={()=>setOpen(false)}
className="text-4xl hover:scale-110 transition"
>
✕
</button>

</div>


{/* SERVICES */}

<div className="max-w-7xl mx-auto p-16 grid md:grid-cols-3 gap-10">

{services.map((service,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{delay:index*0.1}}
onClick={()=>{
navigate(service.link)
setOpen(false)
}}
className="group border p-8 shadow cursor-pointer hover:shadow-2xl transition rounded-lg"
>

<h3 className="text-2xl font-semibold text-[#1A237E] flex items-center justify-between">

{service.title}

<span className="text-red-600 transform group-hover:translate-x-2 transition">
→
</span>

</h3>

<p className="text-gray-600 mt-4">
{service.desc}
</p>

</motion.div>

))}

</div>

</motion.div>

);
}