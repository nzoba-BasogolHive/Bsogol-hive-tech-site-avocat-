import { useNavigate } from "react-router-dom";

export default function ContactCTA() {

const navigate = useNavigate();

return (

<section className="py-20 bg-gray-100 flex justify-center">

<div className="bg-[#9A97B8] text-white max-w-2xl text-center rounded-lg shadow-lg p-10">

<h2 className="text-2xl font-semibold mb-4">
Prêt À Nous Confier Votre Dossier ?
</h2>

<p className="text-lg leading-relaxed mb-8">
Contactez-Nous Pour Une Première Consultation Et
Découvrez Comment Nous Pouvons Vous Accompagner.
</p>

<button
onClick={() => navigate("/contact")}
className="flex items-center justify-center gap-3 text-xl tracking-widest hover:gap-5 transition-all mx-auto"
>

NOUS CONTACTEZ

<span className="text-2xl">
→
</span>

</button>

</div>

</section>

);
}