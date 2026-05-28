import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaBalanceScale,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  fr: {
    label: "Contact",
    title: "Parlons de votre situation",
    subtitle:
      "Notre équipe vous répond rapidement pour vous orienter vers la meilleure stratégie juridique.",
    infoTitle: "Informations de contact",
    formTitle: "Demande de consultation",
    formText:
      "Remplissez le formulaire ci-dessous et nous vous contacterons rapidement.",
    address: "Adresse",
    phone: "Téléphone",
    email: "Email",
    hours: "Horaires",
    consultation: "Première consultation",
    consultationText:
      "Bénéficiez d’une première consultation pour évaluer votre situation et définir une stratégie adaptée.",
    namePlaceholder: "Nom complet",
    emailPlaceholder: "Email",
    phonePlaceholder: "Téléphone",
    areaPlaceholder: "Domaine juridique",
    subjectPlaceholder: "Sujet",
    messagePlaceholder: "Décrivez brièvement votre situation",
    send: "Envoyer votre demande",
    officeTitle: "Notre cabinet",
    officeText:
      "Retrouvez notre cabinet situé au cœur de la ville de Douala, Cameroun.",
    legalAreas: [
      "Droit civil",
      "Droit pénal",
      "Droit fiscal",
      "Droit des affaires",
    ],
  },
  en: {
    label: "Contact",
    title: "Let’s discuss your situation",
    subtitle:
      "Our team responds quickly to guide you toward the right legal strategy.",
    infoTitle: "Contact information",
    formTitle: "Consultation request",
    formText: "Fill out the form below and we will contact you shortly.",
    address: "Address",
    phone: "Phone",
    email: "Email",
    hours: "Opening hours",
    consultation: "First consultation",
    consultationText:
      "Benefit from an initial consultation to assess your situation and define a suitable strategy.",
    namePlaceholder: "Full name",
    emailPlaceholder: "Email",
    phonePlaceholder: "Phone",
    areaPlaceholder: "Legal field",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Briefly describe your situation",
    send: "Send your request",
    officeTitle: "Our office",
    officeText: "Find our office in the heart of Douala, Cameroon.",
    legalAreas: ["Civil law", "Criminal law", "Tax law", "Business law"],
  },
};

export default function ContactSection() {
  const { lang } = useLanguage();
  const t = content[lang];

  const contactItems = [
    {
      icon: <FaMapMarkerAlt />,
      title: t.address,
      text: "Makèpe, Douala\nCameroun",
    },
    {
      icon: <FaPhone />,
      title: t.phone,
      text: "+237 656 413 387",
    },
    {
      icon: <FaEnvelope />,
      title: t.email,
      text: "contact@cabinet-avocat.fr",
    },
    {
      icon: <FaClock />,
      title: t.hours,
      text:
        lang === "fr"
          ? "Lundi - Vendredi : 9h00 - 19h00\nSamedi : Sur rendez-vous"
          : "Monday - Friday: 9:00 AM - 7:00 PM\nSaturday: By appointment",
    },
  ];

  return (
    <div>
      <section
        id="contact-form"
        className="relative overflow-hidden bg-[#faf8f5] py-24 md:py-28"
      >
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#f4eee8] rounded-bl-full opacity-70 pointer-events-none" />
        <div className="absolute left-0 top-24 bottom-24 w-[3px] bg-gradient-to-b from-transparent via-[#c98f52] to-transparent opacity-60" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="mb-16 max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-10 bg-[#c98f52]" />
              <p className="text-[#c98f52] text-xs tracking-[0.3em] uppercase font-medium">
                {t.label}
              </p>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-[58px] text-[#0d1b2a] leading-[1.08] mb-5">
              {t.title}
            </h2>

            <p className="text-[#777] leading-8 max-w-2xl">{t.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-serif text-3xl text-[#0d1b2a] mb-8">
                {t.infoTitle}
              </h3>

              {contactItems.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white border border-[#e8e3db] p-6 flex gap-5 hover:shadow-[0_14px_40px_rgba(0,0,0,0.07)] transition-all duration-500"
                >
                  <div className="w-12 h-12 shrink-0 bg-[#0d1b2a] text-[#c98f52] flex items-center justify-center group-hover:bg-[#c98f52] group-hover:text-white transition">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-[#0d1b2a] font-semibold mb-2">
                      {item.title}
                    </h4>

                    <p className="text-[#777] text-sm leading-7 whitespace-pre-line">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}

              <div className="relative overflow-hidden bg-[#0d1b2a] text-white p-8 mt-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,143,82,0.22),transparent_40%)]" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 border border-[#c98f52]/50 flex items-center justify-center text-[#c98f52]">
                      <FaBalanceScale />
                    </div>

                    <h4 className="font-serif text-2xl">
                      {t.consultation}
                    </h4>
                  </div>

                  <p className="text-white/70 leading-7 text-sm">
                    {t.consultationText}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-white border border-[#e8e3db] p-7 md:p-10 lg:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.08)]"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c98f52] to-transparent" />

              <h3 className="font-serif text-3xl md:text-4xl text-[#0d1b2a] mb-3">
                {t.formTitle}
              </h3>

              <p className="text-[#777] text-sm leading-7 mb-8">
                {t.formText}
              </p>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder={t.namePlaceholder}
                    className="w-full border border-[#e8e3db] bg-[#faf8f5] px-5 py-4 text-sm focus:outline-none focus:border-[#c98f52]"
                  />

                  <input
                    type="email"
                    placeholder={t.emailPlaceholder}
                    className="w-full border border-[#e8e3db] bg-[#faf8f5] px-5 py-4 text-sm focus:outline-none focus:border-[#c98f52]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder={t.phonePlaceholder}
                    className="w-full border border-[#e8e3db] bg-[#faf8f5] px-5 py-4 text-sm focus:outline-none focus:border-[#c98f52]"
                  />

                  <select className="w-full border border-[#e8e3db] bg-[#faf8f5] px-5 py-4 text-sm text-[#777] focus:outline-none focus:border-[#c98f52]">
                    <option>{t.areaPlaceholder}</option>
                    {t.legalAreas.map((area) => (
                      <option key={area}>{area}</option>
                    ))}
                  </select>
                </div>

                <input
                  type="text"
                  placeholder={t.subjectPlaceholder}
                  className="w-full border border-[#e8e3db] bg-[#faf8f5] px-5 py-4 text-sm focus:outline-none focus:border-[#c98f52]"
                />

                <textarea
                  rows={6}
                  placeholder={t.messagePlaceholder}
                  className="w-full border border-[#e8e3db] bg-[#faf8f5] px-5 py-4 text-sm resize-none focus:outline-none focus:border-[#c98f52]"
                />

                <button className="group w-full bg-[#0d1b2a] text-white py-4 text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#c98f52] transition flex items-center justify-center gap-4">
                  {t.send}
                  <FaPaperPlane className="group-hover:translate-x-1 transition" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-10 bg-[#c98f52]" />
              <p className="text-[#c98f52] text-xs tracking-[0.3em] uppercase font-medium">
                Localisation
              </p>
              <span className="h-px w-10 bg-[#c98f52]" />
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-[#0d1b2a] mb-4">
              {t.officeTitle}
            </h2>

            <p className="text-[#777]">{t.officeText}</p>
          </div>

          <div className="relative overflow-hidden border border-[#e8e3db] shadow-[0_16px_50px_rgba(0,0,0,0.08)]">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c98f52] to-transparent z-10" />

            <iframe
              title="map"
              src="https://www.google.com/maps?q=Makepe%20Douala%20Cameroon&output=embed"
              className="w-full h-[340px] md:h-[460px] border-0 grayscale-[20%]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}