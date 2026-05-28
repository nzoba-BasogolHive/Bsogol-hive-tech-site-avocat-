import imageHero from "../../assets/photo-1589829545856-d10d557cf95f.jpg";
import NavbarComponent from "../Navbar";
import { useLanguage } from "../../context/LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();

  const text = {
    fr: {
      label: "Notre Cabinet",
      title: "À propos",
      desc: "Nous offrons à nos clients une représentation juridique de haut niveau",
      breadcrumb: ["Accueil", "À propos"],
    },
    en: {
      label: "Our Firm",
      title: "About Us",
      desc: "We provide our clients with high-level legal representation",
      breadcrumb: ["Home", "About Us"],
    },
  };

  const t = text[lang];

  return (
    <section className="relative w-full h-[400px] sm:h-[480px] md:h-[560px] overflow-hidden">

      {/* Image */}
      <img
        src={imageHero}
        alt={t.title}
        className="absolute inset-0 w-full h-full object-cover scale-105"
        style={{ transformOrigin: "center center" }}
      />

      {/* Overlay dégradé */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/80 via-[#0d1b2a]/60 to-[#0d1b2a]/80" />

      {/* Motif topo subtil */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-radial-gradient(ellipse 600px 300px at 50% 50%, transparent 0, transparent 58px, #c98f52 59px, transparent 60px)",
        }}
      />

      {/* Lignes décoratives */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c98f52] to-transparent opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c98f52]/40 to-transparent" />

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-30">
        <NavbarComponent />
      </div>

      {/* Contenu centré */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-5 pt-[80px] sm:pt-[100px]">

        {/* Label */}
        <div className="flex items-center gap-4 mb-5">
          <span className="h-px w-10 bg-[#c98f52]" />
          <p className="text-[#c98f52] text-xs tracking-[0.3em] uppercase font-medium">
            {t.label}
          </p>
          <span className="h-px w-10 bg-[#c98f52]" />
        </div>

        {/* Titre */}
        <h1 className="font-serif text-[42px] sm:text-[58px] md:text-[72px] leading-[1.05] mb-5">
          {t.title}
        </h1>

        {/* Séparateur doré */}
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-[#c98f52]/50" />
          <span className="w-2 h-2 rounded-full bg-[#c98f52]" />
          <span className="h-px w-8 bg-[#c98f52]/50" />
        </div>

        {/* Description */}
        <p className="font-serif text-base sm:text-lg md:text-xl text-white/75 max-w-xl leading-relaxed mb-10">
          {t.desc}
        </p>

        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-white/40">
          {t.breadcrumb.map((crumb, i) => (
            <span key={i} className="flex items-center gap-3">
              {i > 0 && (
                <span className="text-[#c98f52]">—</span>
              )}
              <span className={i === t.breadcrumb.length - 1 ? "text-[#c98f52]" : "hover:text-white/70 cursor-pointer transition-colors"}>
                {crumb}
              </span>
            </span>
          ))}
        </div>

      </div>

      {/* Coins décoratifs */}
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-[#c98f52]/30 hidden md:block" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-[#c98f52]/30 hidden md:block" />

    </section>
  );
}