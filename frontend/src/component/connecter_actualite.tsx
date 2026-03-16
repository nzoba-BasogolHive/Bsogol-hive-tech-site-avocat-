import { useState } from "react";

export default function Newsletter() {

const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const handleSubscribe = () => {

if(email === ""){
setMessage("Veuillez entrer votre adresse email");
return;
}

setMessage("Merci pour votre inscription !");
setEmail("");

};

return (

<section className="bg-gray-100 py-16 md:py-20">

<div className="max-w-7xl mx-auto px-6">

{/* ARTICLES POPULAIRES */}

<h2 className="text-2xl md:text-3xl font-semibold text-red-500 mb-10 text-center md:text-left">
Articles Populaires
</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

<div className="bg-white p-6 rounded-lg shadow-sm">
<h3 className="text-lg md:text-xl font-semibold text-[#1E1671] mb-3">
Divorce et partage des biens
</h3>
<p className="text-sm text-gray-600">
Comprendre les règles juridiques lors d'une séparation.
</p>
</div>

<div className="bg-white p-6 rounded-lg shadow-sm">
<h3 className="text-lg md:text-xl font-semibold text-[#1E1671] mb-3">
Fiscalité des entreprises
</h3>
<p className="text-sm text-gray-600">
Les obligations fiscales des sociétés.
</p>
</div>

<div className="bg-white p-6 rounded-lg shadow-sm">
<h3 className="text-lg md:text-xl font-semibold text-[#1E1671] mb-3">
Procédure pénale
</h3>
<p className="text-sm text-gray-600">
Les droits de la défense en procédure pénale.
</p>
</div>

</div>


{/* NEWSLETTER */}

<div className="bg-[#1E5F8A] text-white rounded-xl py-12 md:py-14 px-6 md:px-10 text-center">

<h2 className="text-2xl md:text-3xl font-semibold mb-4">
Restez Informé
</h2>

<p className="max-w-2xl mx-auto text-gray-200 mb-8 text-sm md:text-base">
Inscrivez-vous à notre newsletter pour recevoir nos dernières
actualités juridiques et conseils pratiques directement dans votre
boîte mail.
</p>


{/* FORMULAIRE */}

<div className="flex flex-col md:flex-row justify-center gap-4">

<input
type="email"
placeholder="Votre adresse email"
value={email}
onChange={(e) => setEmail(e.target.value)}
className="px-5 py-3 rounded-md w-full md:w-96 bg-[#2E6E98] placeholder-gray-200 focus:outline-none"
/>

<button
onClick={handleSubscribe}
className="bg-[#7B2E39] px-6 py-3 rounded-md hover:bg-[#68262f] transition w-full md:w-auto"
>
S’inscrire
</button>

</div>


{/* MESSAGE */}

{message && (
<p className="mt-6 text-sm text-green-200">
{message}
</p>
)}

</div>

</div>

</section>

);

}