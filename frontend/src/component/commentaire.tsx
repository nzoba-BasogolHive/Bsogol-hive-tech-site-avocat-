import { useState, useEffect } from "react";
import image6 from "../assets/image_6.webp";

const testimonials = [
  {
    name: "Claire",
    text: "Excellent avocat. Matt et son équipe sont très réactifs et maîtrisent parfaitement le système. Nous avons collaboré sur de nombreux dossiers et je continuerai à faire appel à lui.",
  },
  {
    name: "Jean Dupont",
    text: "Une expertise remarquable et une réactivité exceptionnelle. Le cabinet a su défendre nos intérêts avec professionnalisme et efficacité.",
  },
  {
    name: "Sophie Martin",
    text: "Un accompagnement juridique sérieux et humain. L'équipe est toujours disponible et apporte des solutions adaptées.",
  },
  {
    name: "Marc Bernard",
    text: "Un cabinet d’avocats très compétent. Les conseils juridiques fournis ont été clairs, précis et ont permis de résoudre notre dossier rapidement.",
  },
  {
    name: "Isabelle Laurent",
    text: "Professionnalisme, écoute et efficacité. Nous avons été parfaitement accompagnés tout au long de la procédure. Je recommande vivement ce cabinet.",
  },
];

export default function Commentaire() {
  const [index, setIndex] = useState(0);

  // carousel automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage: `url(${image6})`,
          filter: "brightness(0.8)"
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENU */}
      <div className="relative z-10 max-w-5xl mx-auto text-center text-white px-6">

        <h2
          className="mb-8 md:mb-10"
          style={{
            fontFamily: "Garamond, serif",
            fontSize: "clamp(28px,5vw,42px)"
          }}
        >
          Pourquoi Les Entreprises Choisissent Notre Cabinet
        </h2>

        {/* étoiles */}
        <div className="flex justify-center gap-2 text-2xl md:text-3xl mb-8 md:mb-10">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="animate-pulse text-yellow-300">★</span>
          ))}
        </div>

        {/* CAROUSEL */}
        <div className="relative overflow-hidden">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-full px-4 md:px-10">

                <p
                  className="leading-relaxed max-w-3xl mx-auto"
                  style={{
                    fontSize: "clamp(16px,2.5vw,18px)",
                    fontFamily: "Georgia, serif"
                  }}
                >
                  {t.text}
                </p>

                <h3
                  className="mt-10 md:mt-12 text-2xl md:text-4xl font-semibold"
                  style={{
                    fontFamily: "Garamond, serif"
                  }}
                >
                  {t.name}
                </h3>

              </div>
            ))}
          </div>

          {/* FLECHE GAUCHE */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 text-2xl md:text-4xl bg-white/20 hover:bg-white/40 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
          >
            ‹
          </button>

          {/* FLECHE DROITE */}
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 text-2xl md:text-4xl bg-white/20 hover:bg-white/40 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
          >
            ›
          </button>

        </div>

        {/* INDICATEURS */}
        <div className="flex justify-center gap-3 mt-8 md:mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}