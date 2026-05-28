import { motion } from "framer-motion";
import { FaCalendarAlt} from "react-icons/fa";
import imageHero from "../../assets/image (23).webp";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  fr: {
    label: "Nous contacter",
    title: "Prenez rendez-vous",
    italic: "avec notre cabinet",
    desc: "Notre équipe vous accompagne avec rigueur, confidentialité et réactivité afin d’analyser votre situation et vous proposer une stratégie juridique adaptée.",
    primary: "Prendre rendez-vous",
    secondary: "Nous appeler",
    badge: "Consultation confidentielle",
  },
  en: {
    label: "Contact us",
    title: "Schedule a meeting",
    italic: "with our firm",
    desc: "Our team supports you with rigor, confidentiality, and responsiveness to assess your situation and provide a tailored legal strategy.",
    primary: "Book appointment",
    secondary: "Call us",
    badge: "Confidential consultation",
  },
};

export default function Hero_contact() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="relative w-full min-h-[720px] md:min-h-[780px] overflow-hidden bg-[#0d1b2a]">
      <img
        src={imageHero}
        alt={t.label}
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#071827]/95 via-[#0d1b2a]/88 to-[#0d1b2a]/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,143,82,0.12),transparent_38%)]" />

      <div className="absolute left-0 top-20 bottom-20 w-[3px] bg-gradient-to-b from-transparent via-[#c98f52] to-transparent opacity-60" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 min-h-[720px] md:min-h-[780px] flex items-center">
        <div className="max-w-4xl pt-24 md:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-[#c98f52]" />
              <p className="text-[#c98f52] text-xs tracking-[0.35em] uppercase font-medium">
                {t.label}
              </p>
            </div>

            <span className="inline-flex items-center gap-3 border border-[#c98f52]/40 bg-[#0d1b2a]/55 backdrop-blur-md text-white/85 px-5 py-2 text-xs tracking-[0.22em] uppercase mb-7">
              <FaCalendarAlt className="text-[#c98f52]" />
              {t.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-white text-4xl sm:text-5xl lg:text-[74px] leading-[1.05] mb-7"
          >
            {t.title}
            <br />
            <span className="italic text-white/90">{t.italic}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-white/75 text-base md:text-lg leading-8 max-w-2xl mb-10"
          >
            {t.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* <a
              href="#contact-form"
              className="bg-[#0d1b2a] border border-[#c98f52] text-white px-8 py-4 text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#c98f52] transition"
            >
              {t.primary}
            </a>

            <a
              href="tel:+08653695698"
              className="group border border-white/25 bg-white/5 text-white px-8 py-4 text-xs tracking-[0.25em] uppercase font-bold hover:border-[#c98f52] hover:text-[#c98f52] transition inline-flex items-center gap-4"
            >
              <FaPhoneAlt className="text-[#c98f52]" />
              {t.secondary}
              <span className="h-px w-7 bg-current group-hover:w-12 transition-all duration-500" />
            </a> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}