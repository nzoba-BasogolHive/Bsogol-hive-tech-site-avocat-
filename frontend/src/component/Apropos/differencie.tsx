import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Difference() {
  const { lang } = useLanguage();

  const text = {
    fr: {
      label: "Ce Qui Nous Différencie",
      title1: "Une approche",
      title2: "holistique",
      title3: "du droit",
      desc: "Chez Justice à Tout Prix, nous fournissons des services juridiques adaptés à chaque client, en respectant ses valeurs et sa situation personnelle avec rigueur et humanité.",
      experience: "Ans d'expérience",
      justice: "Justice à Tout Prix",
      cabinet: "Cabinet d'Avocats",
       cta: "NOS ACTUALITÉS",
      phone: "Appelez-nous",
      question: "Vous avez des questions ?",
      questionDesc:
        "Notre équipe est disponible pour vous accompagner.",
      contact: "NOUS CONTACTER",
      points: [
        {
          num: "01",
          title: "Approche Personnalisée",
          desc: "Services juridiques adaptés à chaque client, respectant ses valeurs et sa situation personnelle.",
        },
        {
          num: "02",
          title: "Dignité & Intégrité",
          desc: "Respect de la dignité de chaque personne, attentifs aux besoins uniques de nos clients.",
        },
        {
          num: "03",
          title: "Solutions Amiables",
          desc: "Recherche d'une résolution amiable à tout litige lorsque cela est possible.",
        },
      ],
    },

    en: {
      label: "What Makes Us Different",
      title1: "A",
      title2: "holistic",
      title3: "approach to law",
      desc: "At Justice At All Costs, we provide legal services tailored to each client, respecting their values and personal situation with rigor and humanity.",
      experience: "Years of experience",
      justice: "Justice At All Costs",
      cabinet: "Law Firm",
        cta: "OUR NEWS",
      phone: "Call us",
      question: "Do you have questions?",
      questionDesc:
        "Our team is available to support and assist you.",
      contact: "CONTACT US",
      points: [
        {
          num: "01",
          title: "Personalized Approach",
          desc: "Legal services tailored to each client while respecting their values and personal circumstances.",
        },
        {
          num: "02",
          title: "Dignity & Integrity",
          desc: "Respect for the dignity of every person while being attentive to our clients' unique needs.",
        },
        {
          num: "03",
          title: "Amicable Solutions",
          desc: "Seeking amicable resolution for disputes whenever possible.",
        },
      ],
    },
  };

  const t = text[lang];

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative bg-[#0d1b2a] py-24 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-radial-gradient(ellipse 700px 350px at 20% 50%, transparent 0, transparent 58px, #4a7fa5 59px, transparent 60px)",
          }}
        />

        <div className="absolute left-0 top-16 bottom-16 w-[3px] bg-gradient-to-b from-transparent via-[#d1b986] to-transparent opacity-50" />

        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d1b986] to-transparent opacity-60" />

        <div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-12 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <div className="absolute -bottom-5 -left-5 w-full h-full border border-[#d1b986]/30 pointer-events-none" />

            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                alt="Legal Team"
                className="w-full h-[380px] md:h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-[#0d1b2a]/60 via-transparent to-transparent" />

              <div className="absolute top-6 right-6 bg-[#d1b986] px-5 py-4 text-center">
                <p className="font-serif text-3xl text-[#0d1b2a] font-bold leading-none">
                  25+
                </p>

                <p className="text-[9px] tracking-[0.2em] text-[#0d1b2a]/80 uppercase mt-1">
                  {t.experience}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-[#0d1b2a]/80 backdrop-blur-sm px-6 py-4 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-[#d1b986]/50 flex items-center justify-center text-[#d1b986] flex-shrink-0">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>

                <div>
                  <p className="text-white text-sm font-serif leading-none mb-1">
                    {t.justice}
                  </p>

                  <p className="text-[#d1b986]/70 text-[10px] tracking-[0.2em] uppercase">
                    {t.cabinet}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="order-1 md:order-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="h-px w-10 bg-[#d1b986]" />

              <p className="text-xs tracking-[0.3em] font-semibold text-[#d1b986] uppercase">
                {t.label}
              </p>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-serif text-4xl sm:text-5xl leading-[1.1] mb-6 text-white"
            >
              {t.title1} <br />
              <span className="italic text-[#d1b986]">{t.title2}</span>{" "}
              {t.title3}
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-px bg-[#d1b986] mb-8"
            />

            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
              className="text-white/60 text-[15px] leading-7 mb-10"
            >
              {t.desc}
            </motion.p>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
              viewport={{ once: true }}
              className="space-y-6 mb-10"
            >
              {t.points.map((point, i) => (
                <motion.li
                  key={i}
                  variants={textVariants}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                  className="flex items-start gap-5 group"
                >
                  <span className="font-serif text-3xl text-[#d1b986]/20 group-hover:text-[#d1b986]/50 transition-colors duration-300 leading-none mt-1 min-w-[36px]">
                    {point.num}
                  </span>

                  <div className="border-l border-white/10 pl-5 group-hover:border-[#d1b986]/40 transition-colors duration-300">
                    <p className="font-serif text-white text-lg mb-1">
                      {point.title}
                    </p>

                    <p className="text-white/50 text-sm leading-6">
                      {point.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Link
                to="/actualites"
                className="inline-flex items-center gap-4 bg-[#d1b986] text-[#0d1b2a] px-8 py-4 font-bold text-[11px] tracking-[0.28em] uppercase transition-all duration-300 hover:bg-white group/cta"
              >
                {t.cta}

                <span className="h-px w-6 bg-current group-hover/cta:w-10 transition-all duration-500" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}