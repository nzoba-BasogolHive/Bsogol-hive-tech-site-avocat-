import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import iconContrats from "../assets/droit-des-contrats.webp";
import iconPenal from "../assets/droit-penal.webp";
import iconFiscal from "../assets/conformite-fiscale.webp";
import iconTravail from "../assets/droit-du-travail.webp";
import iconCivil from "../assets/droit-civil.webp";

type ServicesOverlayProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const icons = [iconPenal, iconCivil, iconContrats, iconTravail, iconFiscal];

const links = [
  "/services/droit-penal",
  "/services/droit-civil",
  "/services/droit-affaires",
  "/services/droit-travail",
  "/services/droit-fiscal",
];
export default function ServicesOverlay({
  open,
  setOpen,
}: ServicesOverlayProps) {
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const text = {
    fr: {
      cabinet: "CABINET D'AVOCATS",
      title: "Nos Domaines d'",
      titleItalic: "Expertise",
      close: "FERMER",
      readMore: "EN SAVOIR PLUS",
      firstStep: "PREMIÈRE ÉTAPE",
    consult: "Consultation",
consultItalic: "spécialisée",
      consultDesc:
        "Exposez votre situation à l'un de nos avocats et obtenez une première analyse sans engagement.",
      contact: "NOUS CONTACTER",
      services: [
        {
          title: "Droit pénal",
          desc: "Défense pénale et représentation devant les juridictions compétentes.",
        },
        {
          title: "Droit civil",
          desc: "Contrats, droit de la famille et responsabilité civile.",
        },
        {
          title: "Droit des affaires",
          desc: "Accompagnement juridique stratégique des entreprises.",
        },
        {
          title: "Droit du travail",
          desc: "Relations employeur-salarié, licenciements et litiges sociaux.",
        },
        {
          title: "Droit fiscal",
          desc: "Fiscalité des personnes et des entreprises, optimisation.",
        },
      ],
    },

    en: {
      cabinet: "LAW FIRM",
      title: "Our Areas of ",
      titleItalic: "Expertise",
      close: "CLOSE",
      readMore: "READ MORE",
      firstStep: "FIRST STEP",
    consult: "Consultation",
consultItalic: "Specialized",
      consultDesc:
        "Share your situation with one of our lawyers and receive an initial analysis with no obligation.",
      contact: "CONTACT US",
      services: [
        {
          title: "Criminal Law",
          desc: "Criminal defense and representation before competent courts.",
        },
        {
          title: "Civil Law",
          desc: "Contracts, family law, and civil liability matters.",
        },
        {
          title: "Business Law",
          desc: "Strategic legal support for companies and entrepreneurs.",
        },
        {
          title: "Employment Law",
          desc: "Employer-employee relations, dismissals, and workplace disputes.",
        },
        {
          title: "Tax Law",
          desc: "Taxation for individuals and businesses, including optimization.",
        },
      ],
    },
  };

  const t = text[lang];

  useEffect(() => {
    if (!open) return;

    const closeWithEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeWithEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [open, setOpen]);

  const goToPage = (link: string) => {
    navigate(link);
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[99999] flex items-start justify-center bg-[#071827]/75 backdrop-blur-sm px-4 py-6 md:py-10">
          <button
            type="button"
            aria-label={t.close}
            onClick={() => setOpen(false)}
            className="absolute inset-0 cursor-default"
          />

          <motion.section
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full max-w-5xl max-h-[calc(100vh-48px)] overflow-y-auto bg-[#faf8f5] border border-[#e8e3db] shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
          >
            <header className="sticky top-0 z-20 flex items-center justify-between gap-4 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e8e3db] px-5 md:px-8 py-5">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-px w-8 bg-[#c98f52]" />
                  <p className="text-[10px] tracking-[0.3em] text-[#c98f52] uppercase">
                    {t.cabinet}
                  </p>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl text-[#0d1b2a]">
                  {t.title}
                  <em className="font-semibold italic text-[#c98f52]">
                    {t.titleItalic}
                  </em>
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="border border-[#c98f52]/50 bg-white px-4 py-2 text-xs tracking-[0.2em] text-[#0d1b2a] hover:bg-[#0d1b2a] hover:text-[#c98f52] transition"
              >
                {t.close} ×
              </button>
            </header>

            <div className="p-5 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {t.services.map((service, index) => (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => goToPage(links[index])}
                    className="group relative text-left bg-white border border-[#e8e3db] p-6 min-h-[220px] hover:border-[#c98f52] hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c98f52] to-transparent opacity-0 group-hover:opacity-100 transition" />

                    <span className="absolute top-5 right-6 font-serif text-5xl text-[#0d1b2a]/5 group-hover:text-[#c98f52]/15 transition">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="mb-5 flex h-12 w-12 items-center justify-center border border-[#e8e3db] bg-[#faf8f5] group-hover:bg-[#0d1b2a] group-hover:border-[#0d1b2a] transition">
                      <img
                        src={icons[index]}
                        alt=""
                        className="h-7 w-7 object-contain"
                      />
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-[#0d1b2a] mb-3 group-hover:text-[#c98f52] transition">
                      {service.title}
                    </h3>

                    <div className="mb-4 h-px w-8 bg-[#c98f52] group-hover:w-14 transition-all duration-500" />

                    <p className="text-sm leading-6 text-[#777] mb-5">
                      {service.desc}
                    </p>

                    <span className="text-[11px] tracking-[0.2em] text-[#0d1b2a]/45 group-hover:text-[#c98f52] transition">
                      {t.readMore} →
                    </span>
                  </button>
                ))}

                <div className="relative bg-[#0d1b2a] border border-[#0d1b2a] p-6 min-h-[220px] flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,143,82,0.22),transparent_42%)]" />

                  <div className="relative z-10">
                    <p className="text-[10px] tracking-[0.3em] text-[#c98f52] mb-4">
                      {t.firstStep}
                    </p>

                    <h3 className="font-serif text-2xl text-white mb-4">
                      {t.consult}{" "}
                      <em className="font-semibold italic text-[#c98f52]">
                        {t.consultItalic}
                      </em>
                    </h3>

                    <p className="text-sm leading-6 text-white/65">
                      {t.consultDesc}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => goToPage("/contact")}
                    className="relative z-10 mt-6 w-full border border-[#c98f52] py-3 text-xs tracking-[0.2em] text-[#c98f52] hover:bg-[#c98f52] hover:text-[#0d1b2a] transition"
                  >
                    {t.contact}
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      )}
    </AnimatePresence>
  );
}