import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import imgMain from "../assets/image (27).webp";
import img1 from "../assets/image (24).webp";
import img2 from "../assets/image (25).webp";
import img3 from "../assets/image (26).webp";
import img4 from "../assets/image (28).webp";

export default function BlogSection() {

const mainArticle = {
categorie:"Droit du Travail",
image: imgMain,
date:"10 févr. 2024",
title:"Licenciement économique : les droits des salariés",
text:"En période de difficultés économiques, quels sont les recours des salariés face à un licenciement ? Analyse des protections légales.",
auteur:"Maître Alexandre Petit",
link:"/blog_travail"
};

const articles = [

{
categorie:"Droit des Affaires",
image: img1,
date:"10 févr. 2024",
title:"Protection des données personnelles",
text:"Le RGPD impose des obligations strictes aux entreprises.",
auteur:"Maître Alexandre Petit",
link:"/blog_affaire"
},

{
categorie:"Droit Pénal",
image: img2,
date:"10 févr. 2024",
title:"Réforme de la justice pénale des mineurs",
text:"Une réforme qui modifie profondément la procédure.",
auteur:"Maître Alexandre Petit",
link: "/blog_penal"
},

{
categorie:"Droit Immobilier",
image: img3,
date:"10 févr. 2024",
title:"Investissement locatif : pièges à éviter",
text:"Les erreurs juridiques fréquentes des investisseurs.",
auteur:"Maître Alexandre Petit",
link:"/blog_immobilier"
},

{
categorie:"Droit Fiscal",
image: img4,
date:"10 févr. 2024",
title:"Contrôle fiscal : comment se préparer",
text:"Les étapes essentielles pour défendre votre dossier.",
auteur:"Maître Alexandre Petit",
link:"/blog_fiscal"
}

];

return (

<section className="bg-gray-100 py-12 md:py-16">

<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

{/* ARTICLE PRINCIPAL */}

<motion.div
initial={{opacity:0, y:40}}
whileInView={{opacity:1, y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="md:col-span-2 bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
>

<div className="relative">

<img
src={mainArticle.image}
className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover"
/>

<span className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-[#1E1671]">
{mainArticle.categorie}
</span>

</div>

<div className="p-5 md:p-6">

<div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm mb-3">
<FaCalendarAlt />
<span>{mainArticle.date}</span>
</div>

<h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
{mainArticle.title}
</h3>

<p className="text-gray-600 text-sm sm:text-base mb-4">
{mainArticle.text}
</p>

<div className="flex justify-between items-center text-sm">

<div className="flex items-center gap-2 text-gray-600">
<FaUser />
<span>{mainArticle.auteur}</span>
</div>

<Link
to={mainArticle.link}
className="text-red-600 font-medium hover:underline"
>
Lire →
</Link>

</div>

</div>

</motion.div>


{/* PETITS ARTICLES */}

{articles.map((article,index)=>(

<motion.div
key={index}
initial={{opacity:0, y:40}}
whileInView={{opacity:1, y:0}}
transition={{duration:0.6, delay:index * 0.1}}
viewport={{once:true}}
className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
>

<div className="relative">

<img
src={article.image}
className="w-full h-[140px] sm:h-[160px] object-cover"
/>

<span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-medium text-[#1E1671]">
{article.categorie}
</span>

</div>

<div className="p-4">

<h4 className="font-semibold text-sm sm:text-base mb-2">
{article.title}
</h4>

<Link
to={article.link}
className="text-red-600 hover:underline text-sm"
>
Lire →
</Link>

</div>

</motion.div>

))}

</div>

</div>

</section>

);

}