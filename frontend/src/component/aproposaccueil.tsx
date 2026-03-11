import Reveal from "./Reveal";
export default function aproposaccueil() {
  return (
<section className="relative w-full py-40 bg-white"

  style={{
    clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)"
  }}>
 
<Reveal>
  <section className="py-28">
  
  {/* TITRE */}
  <h2
    className="absolute left-24 top-10 z-40 font-bold"
    style={{
      fontFamily: "Garamond, serif",
      fontSize: "64px",
      color: "#110767",
    }}
  >
    A PROPOS
  </h2>

  {/* CONTENAIRE */}
  <div className="relative h-[600px] flex items-center justify-center">

    {/* CONTENAIRE ROTÉ */}
    <div className="absolute w-[120%] h-[500px] bg-white rotate-[6deg] overflow-hidden flex items-center justify-center">

      {/* IMAGE */}
      <img
        src="/src/assets/image (7).webp"
        alt=""
        className="
          absolute
          w-[140%]
          max-w-none
          object-cover
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          rotate-[-6deg]
        "
      />

    </div>

    {/* CARTE TEXTE */}
    <div className="relative z-30 bg-white shadow-xl p-12 w-[900px] text-center">

      <h3
        className="mb-4 font-bold"
        style={{ fontFamily: "Garamond, serif", fontSize: "30px" }}
      >
        Renforcement des lois sur la protection des données personnelles
      </h3>

      <p
        className="text-gray-600 mb-6"
        style={{ fontFamily: "Garamond, serif", fontSize: "18px" }}
      >
       De nouvelles lois modifient les règles de protection des données personnelles
        afin de mieux encadrer leur utilisation et protéger les droits des citoyens.
      </p>

      <button
        className="font-semibold hover:underline"
        style={{ fontFamily: "Garamond, serif", color: "#110767" }}
      >
        EN SAVOIR PLUS
      </button>

    </div>

  </div>
  
  </section>
</Reveal>

</section>
  );
}