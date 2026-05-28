import NavbarComponent from "../Navbar";
import { useLanguage } from "../../context/LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();

  const text = {
    fr: {
      label: "Blog Juridique",
      title: "Actualités",
      titleItalic: "Juridiques",
      desc: "Restez informé des dernières évolutions du droit et découvrez les conseils pratiques de nos avocats pour mieux comprendre vos droits.",
      breadcrumb: ["Accueil", "Actualités"],
    },

    en: {
      label: "Legal Blog",
      title: "Legal",
      titleItalic: "Updates",
      desc: "Stay informed about the latest legal developments and discover practical advice from our attorneys.",
      breadcrumb: ["Home", "News"],
    },
  };

  const t = text[lang];

  return (
    <section className="relative w-full h-[500px] sm:h-[580px] md:h-[660px] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[#0d1b2a]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 60px, #c98f52 60px, #c98f52 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, #c98f52 60px, #c98f52 61px)",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/50 via-[#0d1b2a]/30 to-[#0d1b2a]/70" />

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c98f52] to-transparent opacity-70" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c98f52]/50 to-transparent" />

      {/* Decorative background number */}
      <div
        className="absolute right-14 bottom-12 text-[160px] font-serif font-semibold leading-none select-none pointer-events-none hidden md:block"
        style={{ color: "rgba(201,143,82,0.04)", letterSpacing: "-8px" }}
      >
        24
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-30">
        <NavbarComponent />
      </div>

      {/* Centered content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-5 pt-[80px] sm:pt-[100px]">

        {/* Label */}
        <div className="flex items-center gap-4 mb-5">
          <span className="h-px w-10 bg-[#c98f52]" />

          <p className="text-[#c98f52] text-xs tracking-[0.3em] uppercase font-medium">
            {t.label}
          </p>

          <span className="h-px w-10 bg-[#c98f52]" />
        </div>

        {/* Title */}
        <h1 className="font-serif text-[42px] sm:text-[58px] md:text-[72px] leading-[1.05] mb-5">
          {t.title}
          <br />

          <span className="italic text-white/85">
            {t.titleItalic}
          </span>
        </h1>

        {/* Gold separator */}
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-[#c98f52]/50" />
          <span className="w-2 h-2 rounded-full bg-[#c98f52]" />
          <span className="h-px w-8 bg-[#c98f52]/50" />
        </div>

        {/* Description */}
        <p className="font-serif text-base sm:text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-10 font-light">
          {t.desc}
        </p>

        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-white/40">
          {t.breadcrumb.map((crumb, i) => (
            <span key={i} className="flex items-center gap-3">
              {i > 0 && (
                <span className="text-[#c98f52]">—</span>
              )}

              <span
                className={
                  i === t.breadcrumb.length - 1
                    ? "text-[#c98f52]"
                    : "hover:text-white/70 cursor-pointer transition-colors"
                }
              >
                {crumb}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-[#c98f52]/30 hidden md:block" />

      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-[#c98f52]/30 hidden md:block" />

    </section>
  );
}