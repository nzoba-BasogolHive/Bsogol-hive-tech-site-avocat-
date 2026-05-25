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

<div className="section-container mx-auto px-6">

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

<div className="relative overflow-hidden bg-[#0f0b22] text-white rounded-[28px] py-12 md:py-16 px-6 md:px-10 text-center border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">

  {/* GRID EFFECT */}
  <div
    className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(201,168,76,1) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,1) 1px,transparent 1px)",
      backgroundSize: "60px 60px",
    }}
  />

  {/* GLOW */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#1b0f6b]/40 blur-[100px] rounded-full pointer-events-none" />

  <div className="relative z-10">

    {/* MINI LABEL */}
    <div className="flex justify-center items-center gap-4 mb-5">
      <span className="block w-10 h-px bg-[#c9a84c]" />

      <span className="text-[#c9a84c] text-[10px] font-bold tracking-[0.3em] uppercase">
        Newsletter Premium
      </span>

      <span className="block w-10 h-px bg-[#c9a84c]" />
    </div>

    <h2
      className="text-3xl md:text-5xl font-black mb-5"
      style={{ fontFamily: "Garamond, serif" }}
    >
      Restez Informé
    </h2>

    <p className="max-w-2xl mx-auto text-white/60 mb-10 text-sm md:text-base leading-8">
      Inscrivez-vous à notre newsletter pour recevoir nos dernières
      actualités juridiques et conseils pratiques directement dans votre
      boîte mail.
    </p>

    {/* FORMULAIRE */}

    <div className="flex flex-col md:flex-row justify-center gap-4 max-w-3xl mx-auto">

      <input
        type="email"
        placeholder="Votre adresse email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="
          px-6
          py-4
          rounded-xl
          w-full
          md:w-96
          bg-[#18112d]
          border
          border-white/10
          text-white
          placeholder:text-white/30
          focus:outline-none
          focus:border-[#c9a84c]/50
          transition-all
        "
      />

      <button
        onClick={handleSubscribe}
        className="
          group
          relative
          overflow-hidden
          bg-[#c9a84c]
          hover:bg-[#d8ba65]
          text-[#0a0814]
          px-8
          py-4
          rounded-xl
          font-semibold
          transition-all
          duration-300
          shadow-[0_10px_40px_rgba(201,168,76,0.25)]
          w-full
          md:w-auto
        "
      >
        <span className="relative z-10">
          S’inscrire
        </span>

        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      </button>

    </div>

    {/* MESSAGE */}

    {message && (
      <p className="mt-6 text-sm text-[#c9a84c]">
        {message}
      </p>
    )}

  </div>
</div>
</div>
</section>)}