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

<section className="bg-gray-100 py-20">

<div className="max-w-5xl mx-auto bg-[#1E5F8A] text-white rounded-xl py-14 px-8 text-center">

{/* TITRE */}

<h2 className="text-3xl font-semibold mb-4">
Restez Informé
</h2>

{/* TEXTE */}

<p className="max-w-2xl mx-auto text-gray-200 mb-10">
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
className="px-6 py-3 rounded-md w-full md:w-96 bg-[#2E6E98] placeholder-gray-200 focus:outline-none"
/>

<button
onClick={handleSubscribe}
className="bg-[#7B2E39] px-6 py-3 rounded-md hover:bg-[#68262f] transition"
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

</section>

);

}