import { FaPhoneAlt, FaPaperPlane, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {

const scrollTop = () => {
window.scrollTo({ top: 0, behavior: "smooth" });
};

return (

<footer className="w-full bg-[#0B0F3F] text-white pt-20 pb-10 relative">

<div className="max-w-7xl mx-auto px-6">

{/* GRID */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

{/* LOGO */}

<div>

<h3 className="text-xl font-semibold mb-6">Logo</h3>

<p className="font-semibold mb-3 text-gray-200">
CABINET AVOCATS
</p>

<p className="text-gray-400 text-sm leading-relaxed">
Un cabinet d'avocats d'excellence, dédié à la défense de vos
intérêts avec rigueur et professionnalisme depuis plus de
25 ans.
</p>

</div>


{/* NAVIGATION */}

<div>

<h3 className="font-semibold mb-6 uppercase tracking-wider">
Navigation
</h3>

<ul className="space-y-3 text-gray-300">

<li>
<Link to="/" className="hover:text-white transition">
Accueil
</Link>
</li>

<li>
<Link to="/apropos" className="hover:text-white transition">
A Propos
</Link>
</li>

<li>
<Link to="/equipe" className="hover:text-white transition">
Equipe
</Link>
</li>

<li>
<Link to="/actualite" className="hover:text-white transition">
Actualités
</Link>
</li>

<li>
<Link to="/contact" className="hover:text-white transition">
Contact
</Link>
</li>

</ul>

</div>


{/* DOMAINES */}

<div>

<h3 className="font-semibold mb-6 uppercase tracking-wider">
Nos Domaines
</h3>

<ul className="space-y-3 text-gray-300">

<li>Droit Pénal</li>
<li>Droit Civil</li>
<li>Droit des Affaires</li>
<li>Droit du Travail</li>
<li>Droit Fiscal</li>

</ul>

</div>


{/* CONTACT */}

<div>

<div className="flex items-center gap-3 mb-4 text-gray-300">

<FaPaperPlane />

<p>Makèpe, Douala</p>

</div>

<div className="flex items-center gap-3 mb-4 text-gray-300">

<FaPhoneAlt />

<p>+237 656413387</p>

</div>

<p className="text-gray-300">
contact@cabinet-avocat.fr
</p>

</div>

</div>


{/* FOOTER BOTTOM */}

<div className="border-t border-gray-700 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

<p>
© 2024 Cabinet Avocats Associés. Tous droits réservés.
</p>

<div className="flex gap-6 mt-4 md:mt-0">

<Link to="/mentions-legales" className="hover:text-white transition">
Mentions Légales
</Link>

<Link to="/confidentialite" className="hover:text-white transition">
Politique de confidentialité
</Link>

</div>

</div>

</div>


{/* BOUTON SCROLL TOP */}

<button
onClick={scrollTop}
className="absolute right-8 bottom-8 w-12 h-12 bg-white text-[#0B0F3F] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
>

<FaArrowUp />

</button>

</footer>

);
}