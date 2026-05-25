import image10 from "../assets/image (23).webp";
import NavbarComponent from "./Navbar";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0a0814]">
      
      {/* ───────── BACKGROUND IMAGE ───────── */}
      <img
        src={image10}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* ───────── DARK OVERLAY ───────── */}
      <div className="absolute inset-0 bg-[#0a0814]/75" />

      {/* ───────── GRID EFFECT ───────── */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ───────── GLOW EFFECTS ───────── */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[#1b0f6b]/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[200px] bg-[#c9a84c]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* ───────── LIGHT RADIAL ───────── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />

      {/* ───────── NAVBAR ───────── */}
      <div className="absolute top-0 left-0 w-full z-30">
        <NavbarComponent />
      </div>

      {/* ───────── HERO CONTENT ───────── */}
      <div className="relative z-20 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
          
          {/* TOP LABEL */}
          <div className="flex items-center gap-4 mb-7">
            <span className="block w-10 h-px bg-[#c9a84c]" />

            <span className="text-[#c9a84c] text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase">
              Blog Juridique Premium
            </span>

            <span className="block w-10 h-px bg-[#c9a84c]" />
          </div>

          {/* TITLE */}
          <h1
            className="max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8"
            style={{ fontFamily: "Garamond, serif" }}
          >
            Actualités{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,#c9a84c,#f5deb3,#c9a84c)",
              }}
            >
              Juridiques
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-white/60 text-[15px] md:text-lg leading-8 max-w-2xl mb-10">
            Restez informé des dernières évolutions du droit, des analyses
            stratégiques et des conseils pratiques de nos avocats spécialisés
            pour protéger efficacement vos intérêts.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5">
            
            {/* PRIMARY BUTTON */}
            <Link
              to="/Actualites"
              className="group relative overflow-hidden bg-[#c9a84c] hover:bg-[#d8ba65] text-[#0a0814] px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-[0_10px_40px_rgba(201,168,76,0.25)]"
            >
              <span className="relative z-10">
                Lire les articles
              </span>

              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>

            {/* SECONDARY BUTTON */}
            <Link
              to="/contact"
              className="border border-white/15 bg-white/5 backdrop-blur-md text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#0a0814] transition-all duration-300"
            >
              Contacter un avocat
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-16 flex flex-wrap gap-10">
            
            <div>
              <p
                className="text-[#c9a84c] text-3xl md:text-4xl font-black"
                style={{ fontFamily: "Garamond, serif" }}
              >
                250+
              </p>

              <p className="text-white/40 text-sm mt-1">
                Articles juridiques
              </p>
            </div>

            <div>
              <p
                className="text-[#c9a84c] text-3xl md:text-4xl font-black"
                style={{ fontFamily: "Garamond, serif" }}
              >
                10+
              </p>

              <p className="text-white/40 text-sm mt-1">
                Domaines d’expertise
              </p>
            </div>

            <div>
              <p
                className="text-[#c9a84c] text-3xl md:text-4xl font-black"
                style={{ fontFamily: "Garamond, serif" }}
              >
                24/7
              </p>

              <p className="text-white/40 text-sm mt-1">
                Veille juridique
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}