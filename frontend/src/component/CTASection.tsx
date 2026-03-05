export default function CTASection() {
  return (
    <section className="w-full bg-[#0B0F2F] py-32 flex justify-center">

      {/* Bloc intérieur agrandi */}
      <div className="bg-white max-w-6xl w-full rounded-xl shadow-2xl px-16 py-20 text-center">

        <h2
          className="font-bold mb-8"
          style={{
            fontFamily: "Garamond, serif",
            fontSize: "42px",
            color: "#110767",
          }}
        >
          Besoin d’une assistance juridique ?
        </h2>

        <p
          className="mb-10 mx-auto"
          style={{
            fontFamily: "Garamond, serif",
            fontSize: "22px",
            maxWidth: "900px",
            color: "#333",
          }}
        >
          Notre cabinet d’avocats vous accompagne avec expertise et rigueur
          dans toutes vos démarches juridiques. Contactez-nous pour une
          consultation personnalisée.
        </p>

        <button className="bg-[#110767] text-white px-10 py-4 rounded-lg text-lg hover:scale-105 transition">
          NOUS CONTACTER
        </button>

      </div>
    </section>
  );
}