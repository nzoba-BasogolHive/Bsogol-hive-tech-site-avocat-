import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import image7 from "../assets/image (7).webp";
import Reveal from "./Reveal";

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = Math.ceil(target / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(start);
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function GoldDivider({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-px flex-1 max-w-12" style={{ background: "#C9A84C" }} />
      <div className="w-1.5 h-1.5 rotate-45" style={{ background: "#C9A84C" }} />
      <div className="h-px flex-1 max-w-12" style={{ background: "#C9A84C" }} />
    </div>
  );
}

export default function AproposAccueil() {
  const [hovered, setHovered] = useState(false);

  const stats = [
    { value: 127, suffix: "+", label: "Dossiers gagnés" },
    { value: 84, suffix: "%", label: "Taux de réussite" },
    { value: 134, suffix: "+", label: "Clients accompagnés" },
    { value: 15, suffix: "ans", label: "D'expérience" },
  ];

  const pillars = [
    { icon: "⚖", label: "Rigueur juridique" },
    { icon: "🤝", label: "Écoute & Conseil" },
    { icon: "🛡", label: "Discrétion absolue" },
  ];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Top accent line */}
      <div className="w-full h-0.5" style={{ background: "linear-gradient(90deg, transparent, #C9A84C 30%, #C9A84C 70%, transparent)" }} />

      {/* Background decorative geometry */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
          style={{ border: "1px solid rgba(10,8,20,0.06)" }}
        />
        <div
          className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full"
          style={{ border: "1px solid rgba(10,8,20,0.04)" }}
        />
        <div
          className="absolute bottom-24 left-12 w-3 h-3 rotate-45 opacity-20"
          style={{ background: "#C9A84C" }}
        />
        <div
          className="absolute bottom-40 left-6 w-1.5 h-1.5 rotate-45 opacity-10"
          style={{ background: "#C9A84C" }}
        />
        <div className="absolute top-0 left-1/3 w-px h-full opacity-[0.03]" style={{ background: "#0a0814" }} />
        <div className="absolute top-0 right-1/3 w-px h-full opacity-[0.03]" style={{ background: "#0a0814" }} />
      </div>

      <Reveal>
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-6">
            <GoldDivider />
            <span
              className="text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: "#C9A84C", fontFamily: "Garamond, serif" }}
            >
              À propos du cabinet
            </span>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — Text */}
            <div>
              <h2
                className="font-bold leading-tight mb-6 text-4xl md:text-5xl lg:text-[3.5rem]"
                style={{ fontFamily: "Garamond, serif", color: "#0a0814", lineHeight: "1.15" }}
              >
                Un cabinet bâti sur
                <br />
                <span style={{ color: "#C9A84C" }}>l'excellence</span>{" "}
                et la confiance
              </h2>

              {/* Accent underline */}
              <div className="flex gap-1 mb-7">
                <div className="h-0.5 w-16" style={{ background: "#0a0814" }} />
                <div className="h-0.5 w-4" style={{ background: "#C9A84C" }} />
              </div>

              <p
                className="text-base md:text-lg leading-relaxed mb-8"
                style={{ fontFamily: "Garamond, serif", color: "#6b6b7b", lineHeight: "1.9" }}
              >
                Depuis plus de quinze ans, notre cabinet accompagne particuliers
                et entreprises avec une exigence de haut niveau. Chaque dossier
                est traité avec la même rigueur : celle d'avocats engagés,
                disponibles et reconnus pour leur expertise multidisciplinaire.
              </p>

              {/* Pillars */}
              <div className="flex flex-wrap gap-3 mb-8">
                {pillars.map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold"
                    style={{
                      borderColor: "rgba(10,8,20,0.15)",
                      color: "#0a0814",
                      fontFamily: "Garamond, serif",
                      background: "rgba(10,8,20,0.03)",
                    }}
                  >
                    <span className="text-base">{p.icon}</span>
                    {p.label}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-4">
                <Link
                  to="/Apropos"
                  className="inline-flex items-center gap-3 px-7 py-3.5 text-white text-sm font-bold rounded-xl transition-all hover:opacity-90 active:scale-95"
                  style={{
                    background: "#0a0814",
                    fontFamily: "Garamond, serif",
                    letterSpacing: "0.04em",
                  }}
                >
                  <span>Découvrir le cabinet</span>
                  <svg width="14" height="10" fill="none" viewBox="0 0 14 10">
                    <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold transition-all"
                  style={{ color: "#C9A84C", fontFamily: "Garamond, serif", letterSpacing: "0.04em" }}
                >
                  <span>Nous contacter</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right — Image */}
            <div
              className="relative"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div
                className="absolute -top-3 -right-3 w-full h-full rounded-3xl transition-all duration-500"
                style={{
                  border: "1px solid rgba(201,168,76,0.3)",
                  transform: hovered ? "translate(6px, 6px)" : "translate(4px, 4px)",
                  borderRadius: "1.5rem",
                }}
              />
              <div
                className="absolute -top-1.5 -left-1.5 w-8 h-8 rounded-tl-2xl border-t-2 border-l-2"
                style={{ borderColor: "#C9A84C" }}
              />
              <div
                className="absolute -bottom-1.5 -right-1.5 w-8 h-8 rounded-br-2xl border-b-2 border-r-2"
                style={{ borderColor: "#C9A84C" }}
              />

              <div
                className="relative rounded-3xl overflow-hidden transition-all duration-500"
                style={{
                  aspectRatio: "4/5",
                  maxHeight: "520px",
                  transform: hovered ? "scale(1.01)" : "scale(1)",
                  boxShadow: hovered
                    ? "0 24px 64px rgba(10,8,20,0.2)"
                    : "0 16px 48px rgba(10,8,20,0.12)",
                }}
              >
                <img
                  src={image7}
                  alt="Cabinet d'avocats"
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(0deg, rgba(10,8,20,0.65) 0%, rgba(10,8,20,0.1) 50%, transparent 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p
                    className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ fontFamily: "Garamond, serif" }}
                  >
                    Cabinet juridique
                  </p>
                  <p
                    className="text-white text-xl font-bold"
                    style={{ fontFamily: "Garamond, serif", letterSpacing: "0.04em" }}
                  >
                    LexOffice — Yaoundé
                  </p>
                  <div className="flex gap-1 mt-2">
                    <div className="h-0.5 w-10" style={{ background: "#C9A84C" }} />
                    <div className="h-0.5 w-3" style={{ background: "rgba(201,168,76,0.4)" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-16 pt-10 border-t" style={{ borderColor: "rgba(10,8,20,0.08)" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {stats.map((s, i) => (
                <div key={s.label} className="text-center py-8 relative">
                  {i < stats.length - 1 && (
                    <div className="absolute right-0 top-1/4 bottom-1/4 w-px" style={{ background: "rgba(10,8,20,0.1)" }} />
                  )}
                  <p
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{ fontFamily: "Garamond, serif", color: "#0a0814" }}
                  >
                    <Counter target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A84C" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote strip */}
          <div
            className="mt-10 rounded-2xl px-8 py-6 relative overflow-hidden"
            style={{ background: "#0a0814" }}
          >
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: "repeating-linear-gradient(45deg, #C9A84C 0px, #C9A84C 1px, transparent 0, transparent 50%)",
              backgroundSize: "24px 24px"
            }} />
            <div className="relative flex items-center gap-6">
              <div className="flex-shrink-0">
                <div className="text-5xl font-bold leading-none" style={{ color: "#C9A84C", fontFamily: "Garamond, serif", opacity: 0.6 }}>"</div>
              </div>
              <div>
                <p
                  className="text-white text-base md:text-lg leading-relaxed"
                  style={{ fontFamily: "Garamond, serif", letterSpacing: "0.01em" }}
                >
                  La justice est l'art du bon et de l'équitable. Notre cabinet
                  en fait sa raison d'être — au service de chaque client,
                  sans compromis.
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="h-px w-10" style={{ background: "#C9A84C" }} />
                  <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "rgba(201,168,76,0.8)" }}>
                    Maître Adjobi Martial — Avocat fondateur
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Reveal>

      {/* Bottom accent line */}
      <div className="w-full h-0.5" style={{ background: "linear-gradient(90deg, transparent, rgba(10,8,20,0.12) 30%, rgba(10,8,20,0.12) 70%, transparent)" }} />
    </section>
  );
}