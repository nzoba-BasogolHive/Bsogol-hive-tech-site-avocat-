import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="w-full bg-[#0B0F2F] py-16 md:py-24 lg:py-32 flex justify-center px-4">

      {/* Bloc intérieur */}
      <div className="bg-white max-w-6xl w-full rounded-xl shadow-2xl px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 text-center">

        <h2
          className="font-bold mb-6 md:mb-8 text-2xl md:text-3xl lg:text-4xl"
          style={{
            fontFamily: "Garamond, serif",
            color: "#110767",
          }}
        >
          Besoin d’une assistance juridique ?
        </h2>

        <p
          className="mb-8 md:mb-10 mx-auto text-base md:text-lg lg:text-xl max-w-3xl"
          style={{
            fontFamily: "Garamond, serif",
            color: "#333",
          }}
        >
          Notre cabinet d’avocats vous accompagne avec expertise et rigueur
          dans toutes vos démarches juridiques. Contactez-nous pour une
          consultation personnalisée.
        </p>

        <Link
          to="/formulaires"
          className="inline-block bg-[#110767] text-white px-8 md:px-10 py-3 md:py-4 rounded-lg text-sm md:text-lg hover:scale-105 transition"
        >
          NOUS CONTACTER
        </Link>

      </div>

    </section>
  );
}