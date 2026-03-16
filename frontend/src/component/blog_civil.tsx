import { FaCalendarAlt, FaUser } from "react-icons/fa";
import PageTransition from "../component/PageTransition";

export default function ArticlePage() {

return (

<PageTransition>

<section className="bg-gray-100 py-10 md:py-16">

<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

{/* IMAGE */}

<div className="relative">

<img
src="/src/assets/image (29).webp"
alt="article droit civil"
className="w-full h-[220px] md:h-[320px] object-cover"
/>

<span className="absolute bottom-4 left-4 bg-red-700 text-white px-4 py-1 rounded-full text-xs md:text-sm">
Droit Civil
</span>

</div>


{/* CONTENU */}

<div className="p-6 md:p-10">

{/* META */}

<div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-500 text-xs md:text-sm mb-6">

<div className="flex items-center gap-2">
<FaCalendarAlt />
<span>20 février 2025</span>
</div>

<div className="flex items-center gap-2">
<FaUser />
<span>Maître Alexandre Petit</span>
</div>

</div>


{/* TITRE */}

<h1 className="text-2xl md:text-3xl font-semibold mb-6">
Les nouvelles règles du divorce par consentement mutuel
</h1>


{/* CITATION */}

<div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8 text-sm md:text-base">
Depuis plusieurs années, la procédure de divorce par consentement mutuel
a évolué afin de simplifier et d’accélérer la séparation des époux tout
en garantissant la protection des intérêts de chacun.
</div>


{/* TEXTE */}

<div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">

<p>
Le divorce par consentement mutuel permet aux époux de se séparer
à l’amiable lorsqu’ils sont d’accord sur les conséquences du divorce :
partage des biens, garde des enfants, pension alimentaire ou encore
résidence familiale. Cette procédure est aujourd’hui largement
privilégiée car elle est plus rapide et moins conflictuelle qu’un
divorce judiciaire classique.
</p>

<p>
Depuis la réforme récente, ce type de divorce peut être réalisé
sans passer devant un juge, sauf dans certains cas particuliers.
Les époux doivent chacun être assistés par leur propre avocat,
et une convention de divorce est ensuite rédigée afin de fixer
l’ensemble des modalités de la séparation.
</p>

<p>
Une fois la convention signée par les deux parties et leurs avocats,
elle est déposée chez un notaire qui lui donne force exécutoire.
Cette procédure permet de réduire les délais et d’éviter une
procédure judiciaire longue et coûteuse.
</p>

<p>
Toutefois, il reste essentiel d’être accompagné par un professionnel
du droit afin de garantir que la convention protège correctement
vos droits et ceux de votre famille.
</p>

</div>


{/* CTA */}

<div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

<p className="text-gray-600 text-sm md:text-base">
Vous souhaitez être accompagné dans une procédure de divorce ?
</p>

<button className="bg-[#1E1671] text-white px-6 py-3 rounded-md hover:bg-[#151057] transition w-full md:w-auto">
Consulter un avocat →
</button>

</div>

</div>

</div>

</section>

</PageTransition>

);
}