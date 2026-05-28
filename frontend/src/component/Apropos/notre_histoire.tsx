import { motion } from "framer-motion";
import histoireImage from "../../assets/image (13).webp";
import { useLanguage } from "../../context/LanguageContext";

const ScalesIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 3v18M3 9l9-6 9 6M5 11l-2 6h4l-2-6zM19 11l-2 6h4l-2-6zM5 17h4M19 17h-4M8 21h8" />
  </svg>
);

const GavelIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="m14 13-8.5 8.5a2.12 2.12 0 0 1-3-3L11 10" />
    <path d="m16 16 6-6" />
    <path d="m8 8 6-6" />
    <path d="m9 7 8 8" />
    <path d="m21 11-8-8" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const content = {
  fr: {
    label: "À Notre Sujet",
    title: "Un cabinet d'avocats",
    titleItalic: "de premier ordre",
    p1: "Fondé avec la conviction que chaque client mérite une représentation exceptionnelle, notre cabinet s'est imposé comme une référence incontestée dans le paysage juridique.",
    p2: "Nos avocats conjuguent rigueur académique et expérience du terrain pour vous offrir des solutions juridiques innovantes, adaptées à la complexité de vos enjeux.",
    yearsLabel: "ANS D'EXPÉRIENCE",
    cta: "CONSULTATION",
    features: [
      {
        icon: <GavelIcon />,
        title: "Excellence Juridique",
        desc: "Plus de 25 ans d'expérience au service des particuliers et entreprises pour des solutions sur mesure.",
      },
      {
        icon: <ShieldIcon />,
        title: "Défense Rigoureuse",
        desc: "Une approche stratégique et personnalisée pour défendre vos droits avec intégrité et ténacité.",
      },
    ],
    stats: [
      { number: "30+", label: "AVOCATS" },
      { number: "25+", label: "ANS D'EXPÉRIENCE" },
      { number: "10+", label: "AVOCATS SPÉCIALISÉS" },
      { number: "03",  label: "PRIX JURIDIQUES" },
    ],
    badgeLabel: "CABINET JURIDIQUE",
  },
  en: {
    label: "About Us",
    title: "A law firm of",
    titleItalic: "the highest order",
    p1: "Founded with the conviction that every client deserves exceptional representation, our firm has established itself as an undisputed reference in the legal landscape.",
    p2: "Our attorneys combine academic rigor with field experience to provide innovative legal solutions tailored to the complexity of your challenges.",
    yearsLabel: "YEARS OF EXPERIENCE",
    cta: "CONSULTATION",
    features: [
      {
        icon: <GavelIcon />,
        title: "Legal Excellence",
        desc: "Over 25 years of experience serving individuals and businesses with tailored legal solutions.",
      },
      {
        icon: <ShieldIcon />,
        title: "Rigorous Defense",
        desc: "A strategic and personalized approach to defending your rights with integrity and tenacity.",
      },
    ],
    stats: [
      { number: "30+", label: "ATTORNEYS" },
      { number: "25+", label: "YEARS OF EXPERIENCE" },
      { number: "10+", label: "SPECIALIST LAWYERS" },
      { number: "03",  label: "BEST LAW AWARDS" },
    ],
    badgeLabel: "LAW FIRM",
  },
};

export default function Histoire() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[#fbfaf8]">

      {/* Radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,34,56,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(209,185,134,0.16),transparent_35%)]" />

      {/* Ligne gauche dorée */}
      <div className="absolute left-0 top-20 bottom-20 w-[3px] bg-gradient-to-b from-transparent via-[#d1b986] to-transparent opacity-40" />

     <div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">

        {/* ── COLONNE GAUCHE ── */}
        <div>

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-5"
          >
            <span className="h-px w-10 bg-[#d1b986]" />
            <p className="text-xs tracking-[0.28em] font-semibold text-[#d1b986] uppercase">
              {t.label}
            </p>
          </motion.div>

          {/* Titre */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-5xl md:text-[3.2rem] leading-[1.15] mb-8 text-[#162238]"
          >
            {t.title} <br />
            <span className="italic text-[#d1b986]">{t.titleItalic}</span>
          </motion.h2>

          {/* Paragraphes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 mb-10"
          >
            <p className="leading-7 text-[15px] text-[#5f6673]">{t.p1}</p>
            <p className="leading-7 text-[15px] text-[#5f6673]">{t.p2}</p>
          </motion.div>

          {/* Image avec badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative max-w-[520px]"
          >
            {/* Bordure décalée */}
            <div className="absolute -top-3 -left-3 w-full h-full border border-[#d1b986]/60 pointer-events-none" />

            <img
              src={histoireImage}
              alt={t.label}
              className="w-full h-[300px] sm:h-[360px] object-cover"
            />

            {/* Badge 25+ ans */}
            <div className="absolute -bottom-5 right-0 sm:-right-5 flex items-center gap-3 px-5 py-4 shadow-xl bg-[#162238] text-[#d1b986]">
              <ScalesIcon />
              <div>
                <div className="font-serif text-2xl font-bold leading-none">25+</div>
                <div className="text-[10px] tracking-widest mt-0.5 text-white/70">
                  {t.yearsLabel}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── COLONNE DROITE — carte sombre ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-[#162238] px-6 sm:px-10 py-10 sm:py-12 flex flex-col justify-center gap-8 shadow-2xl"
        >
          {/* Radial interne */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(209,185,134,0.18),transparent_40%)]" />

          {/* Bande dorée top */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#d1b986] to-transparent" />

          {t.features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              viewport={{ once: true }}
              className="relative z-10 group"
            >
              {/* Bloc image/icône */}
              <div className="w-full h-[150px] sm:h-[160px] mb-5 flex items-center justify-center relative overflow-hidden bg-white/5 border border-white/10 group-hover:border-[#d1b986]/40 transition-colors duration-500">
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 12px)",
                  }}
                />
                <div className="text-[#d1b986] group-hover:scale-110 transition-transform duration-500">
                  {feat.icon}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-center text-[10px] tracking-[0.2em] py-1.5 bg-black/25 text-[#d1b986]">
                  {t.badgeLabel}
                </div>
              </div>

              <h3 className="font-serif text-xl md:text-2xl font-semibold mb-2 text-white">
                {feat.title}
              </h3>
              <p className="text-sm leading-6 text-white/75">{feat.desc}</p>

              {i < t.features.length - 1 && (
                <div className="mt-8 h-px w-full bg-white/15" />
              )}
            </motion.div>
          ))}

          {/* CTA */}
          <motion.a
            href="/contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="relative z-10 inline-flex items-center gap-3 text-sm font-semibold tracking-widest mt-2 text-white group/cta"
          >
            <span>{t.cta}</span>
            <span className="inline-block h-px w-8 bg-[#d1b986] transition-all duration-300 group-hover/cta:w-14" />
          </motion.a>
        </motion.div>
      </div>

      {/* ── STATS ── */}
<div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-12 mt-20 md:mt-28">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-[#e8e3db]">
          {t.stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative text-center cursor-pointer py-10 px-6 overflow-hidden
                ${i < t.stats.length - 1 ? "border-r border-[#e8e3db]" : ""}
                hover:bg-[#162238] transition-colors duration-500`}
            >
              {/* Numéro en filigrane */}
              <span className="absolute inset-0 flex items-center justify-center font-serif text-7xl md:text-8xl text-[#162238]/5 group-hover:text-white/5 transition-colors duration-300 select-none">
                {item.number}
              </span>

              <div className="relative z-10">
                {/* Grand nombre */}
                <p className="font-serif text-4xl md:text-5xl text-[#162238] group-hover:text-white transition-colors duration-300 mb-2 leading-none">
                  {item.number}
                </p>

                {/* Ligne dorée */}
                <span className="block w-10 h-[2px] bg-[#d1b986] mx-auto mb-3 group-hover:w-16 transition-all duration-300" />

                {/* Label */}
                <p className="text-[10px] tracking-[0.28em] font-bold text-[#162238]/60 group-hover:text-white/60 uppercase transition-colors duration-300">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}