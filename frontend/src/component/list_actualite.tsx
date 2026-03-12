import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function BlogSection() {

const mainArticle = {
categorie:"Droit du Travail",
image:"/src/assets/image (27).webp",
date:"10 févr. 2024",
title:"Licenciement économique : les droits des salariés",
text:"En période de difficultés économiques, quels sont les recours des salariés face à un licenciement ? Analyse des protections légales.",
auteur:"Maître Alexandre Petit"

};

const articles = [

{
categorie:"Droit des Affaires",
image:"/src/assets/image (24).webp",
date:"10 févr. 2024",
title:"Protection des données personnelles",
text:"Le RGPD impose des obligations strictes aux entreprises. Tour d'horizon des principales mesures à mettre en place.",
auteur:"Maître Alexandre Petit"

},

{
categorie:"Droit Pénal",
image:"/src/assets/image (25).webp",
date:"10 févr. 2024",
title:"Réforme de la justice pénale des mineurs",
text:"Une réforme qui modifie profondément la procédure.",
auteur:"Maître Alexandre Petit"

},

{
categorie:"Droit Immobilier",
image:"/src/assets/image (26).webp",
date:"10 févr. 2024",
title:"Investissement locatif : pièges à éviter",
text:"Les erreurs juridiques fréquentes des investisseurs.",
auteur:"Maître Alexandre Petit"

},

{
categorie:"Droit Fiscal",
image:"/src/assets/image (28).webp",
date:"10 févr. 2024",
title:"Contrôle fiscal : comment se préparer",
text:"Les étapes essentielles pour défendre votre dossier.",
auteur:"Maître Alexandre Petit"

}

];

return (

<section className="bg-gray-100 py-14">

<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-3 gap-8">

{/* ARTICLE PRINCIPAL */}

<div className="md:col-span-2 bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">

<div className="relative">

<img
src={mainArticle.image}
className="w-full h-[320px] object-cover"
/>

<span className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-sm font-medium text-[#1E1671]">
{mainArticle.categorie}
</span>

</div>

<div className="p-6">

<div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
<FaCalendarAlt />
<span>{mainArticle.date}</span>
</div>

<h3 className="text-2xl font-semibold mb-3">
{mainArticle.title}
</h3>

<p className="text-gray-600 mb-4">
{mainArticle.text}
</p>

<div className="flex justify-between items-center text-sm">

<div className="flex items-center gap-2 text-gray-600">
<FaUser />
<span>{mainArticle.auteur}</span>
</div>

<Link to="/article">
Lire →
</Link>
</div>

</div>

</div>


{/* PETITS ARTICLES */}

<div className="grid gap-8">

{articles.map((article,index)=>(

<div
key={index}
className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
>

<div className="relative">

<img
src={article.image}
className="w-full h-[140px] object-cover"
/>

<span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-medium text-[#1E1671]">
{article.categorie}
</span>

</div>

<div className="p-4">

<div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
<FaCalendarAlt />
<span>{article.date}</span>
</div>

<h4 className="font-semibold text-sm mb-2">
{article.title}
</h4>

<p className="text-gray-600 text-xs mb-3">
{article.text}
</p>

<div className="flex justify-between items-center text-xs">

<div className="flex items-center gap-1 text-gray-600">
<FaUser />
<span>{article.auteur}</span>
</div>

<Link to="/article" className="text-red-600 hover:underline">
Lire →
</Link>

</div>

</div>

</div>

))}

</div>

</div>

</div>

</section>

)

}