import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const ScalesIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M12 3v18M3 9l9-6 9 6M5 11l-2 6h4l-2-6zM19 11l-2 6h4l-2-6zM5 17h4M19 17h-4M8 21h8" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function TeamExperts() {
  const { lang } = useLanguage();

  const text = {
    fr: {
      label: "AVOCATS QUALIFIÉS",
      title1: "Notre",
      title2: "Équipe d'Experts",
      viewProfile: "VOIR LE PROFIL",
      bottomText: "Vous ne savez pas quel avocat consulter ?",
      consultation: "CONSULTATION GRATUITE",
      lawyers: [
        {
          nom: "Jean-Marc Fouda",
          specialite: "DROIT DE LA FAMILLE",
          description:
            "Spécialiste en droit familial et successions avec 18 ans de pratique au barreau.",
          initiales: "JF",
          photo:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
        },
        {
          nom: "Yvette Ngo Mbe",
          specialite: "DROIT PÉNAL",
          description:
            "Défense pénale et libertés individuelles, ancienne magistrate reconvertie au barreau.",
          initiales: "YN",
          photo:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
        },
        {
          nom: "Patrick Essama",
          specialite: "DROIT DES AFFAIRES",
          description:
            "Conseil en fusions-acquisitions, contrats commerciaux et résolution de litiges.",
          initiales: "PE",
           photo:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
        },
        {
          nom: "Sandrine Ateba",
          specialite: "DROIT IMMOBILIER",
          description:
            "Transactions immobilières, baux commerciaux et copropriétés depuis 12 ans.",
          initiales: "SA",
           photo:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
        },
      ],
    },
    en: {
      label: "QUALIFIED LAWYERS",
      title1: "Our",
      title2: "Expert Team",
      viewProfile: "VIEW PROFILE",
      bottomText: "Not sure which lawyer to consult?",
      consultation: "FREE CONSULTATION",
      lawyers: [
        {
          nom: "Jean-Marc Fouda",
          specialite: "FAMILY LAW",
          description:
            "Family law and inheritance specialist with 18 years of practice at the bar.",
          initiales: "JF",
           photo:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
        },
        {
          nom: "Yvette Ngo Mbe",
          specialite: "CRIMINAL LAW",
          description:
            "Criminal defense and individual liberties, former magistrate now practicing as a lawyer.",
          initiales: "YN",
          photo:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
        },
        {
          nom: "Patrick Essama",
          specialite: "BUSINESS LAW",
          description:
            "Advisory services in mergers and acquisitions, commercial contracts, and dispute resolution.",
          initiales: "PE",
           photo:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
        },
        {
          nom: "Sandrine Ateba",
          specialite: "REAL ESTATE LAW",
          description:
            "Real estate transactions, commercial leases, and co-ownership matters for over 12 years.",
          initiales: "SA",
            photo:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
        },
      ],
    },
  };

  const t = text[lang];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#162238]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_50%,rgba(209,185,134,0.08),transparent_55%),radial-gradient(ellipse_at_85%_20%,rgba(209,185,134,0.06),transparent_45%)] pointer-events-none" />

    <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.25em] mb-3 text-[#d1b986]">
            {t.label}
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-light mb-5 text-white tracking-[-0.02em]">
            {t.title1}{" "}
            <em className="italic font-semibold text-[#d1b986]">
              {t.title2}
            </em>
          </h2>

          <div className="mx-auto w-12 h-[2px] bg-[#d1b986]" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {t.lawyers.map((avocat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-[#1e2d3d]"
            >
              <div className="relative flex items-center justify-center overflow-hidden h-[220px] bg-[#223247]">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      rgba(209,185,134,0.3) 0px,
                      rgba(209,185,134,0.3) 1px,
                      transparent 1px,
                      transparent 18px
                    )`,
                  }}
                />

              <img
                src={avocat.photo}
                alt={avocat.nom}
                className="relative z-10 w-32 h-32 object-cover rounded-full border-2 border-[#d1b986]/50"
              />

                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0c1e30]/90">
                  <button
                    type="button"
                    className="flex items-center justify-center rounded-full w-8 h-8 border border-[#d1b986]/50 text-[#d1b986] hover:bg-[#d1b986] hover:text-[#162238] transition"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon />
                  </button>

                  <button
                    type="button"
                    className="flex items-center justify-center rounded-full w-8 h-8 border border-[#d1b986]/50 text-[#d1b986] hover:bg-[#d1b986] hover:text-[#162238] transition"
                    aria-label="Email"
                  >
                    <MailIcon />
                  </button>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start gap-2 mb-1">
                  <div className="mt-1 shrink-0 w-[3px] h-[18px] bg-[#d1b986]" />

                  <h3 className="font-serif text-[17px] font-semibold leading-tight text-white">
                    Me {avocat.nom}
                  </h3>
                </div>

                <p className="text-[10px] tracking-widest mb-3 text-[#d1b986] pl-[11px]">
                  {avocat.specialite}
                </p>

                <p className="text-[13px] leading-6 mb-4 text-white/55">
                  {avocat.description}
                </p>

                <button
                  type="button"
                  className="w-full text-xs tracking-widest py-2.5 border border-[#d1b986]/40 text-[#d1b986] hover:bg-[#d1b986]/10 hover:border-[#d1b986] transition"
                >
                  {t.viewProfile}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm mb-5 text-white/45">
            {t.bottomText}
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-sm tracking-widest px-8 py-4 border border-[#d1b986] text-[#d1b986] bg-[#d1b986]/10 hover:bg-[#d1b986] hover:text-[#162238] transition-all duration-300 group"
          >
            <ScalesIcon />
            <span>{t.consultation}</span>
            <span className="inline-block h-px w-6 bg-current transition-all duration-300 group-hover:w-10" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}