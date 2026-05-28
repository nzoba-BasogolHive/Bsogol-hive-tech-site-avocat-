import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaBalanceScale,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactSection() {
  const { lang } = useLanguage();

  const text = {
    fr: {
      label: "Formulaire de contact",
      title: "Besoin d’un conseil ?",
      title2: "Demandez une consultation gratuite",
      desc: "Remplissez le formulaire ci-dessous et notre cabinet vous contactera rapidement afin d’étudier votre situation.",
      headOffice: "Cabinet principal",
      address: "Makepe, Douala, Cameroun",
      emailTitle: "Adresse email",
      phone: "Téléphone",
      hours: "Horaires",
      hoursText: "Lun - Ven : 9h00 - 19h00",
      name: "Nom complet*",
      email: "Email*",
      phoneInput: "Téléphone*",
      subject: "Domaine juridique",
      message: "Décrivez brièvement votre situation...",
      submit: "Envoyer la demande",
      mapLabel: "Localisation",
      mapTitle: "Notre cabinet",
      mapDesc: "Retrouvez notre cabinet situé au cœur de la ville de Douala, Cameroun.",
      firstConsultation: "Première consultation",
      firstConsultationText:
        "Bénéficiez d’une première analyse afin de définir la meilleure stratégie juridique.",
      options: [
        "Droit civil",
        "Droit pénal",
        "Droit fiscal",
        "Droit des affaires",
      ],
    },
    en: {
      label: "Contact form",
      title: "Need consultancy?",
      title2: "Request a free quote",
      desc: "Fill out the form below and our firm will contact you quickly to review your situation.",
      headOffice: "Head Office",
      address: "Makepe, Douala, Cameroon",
      emailTitle: "Email Address",
      phone: "Telephone",
      hours: "Office Hours",
      hoursText: "Mon - Fri: 9am - 7pm",
      name: "Full name*",
      email: "Email*",
      phoneInput: "Phone*",
      subject: "Legal subject",
      message: "Briefly describe your case...",
      submit: "Submit It Now",
      mapLabel: "Location",
      mapTitle: "Our office",
      mapDesc: "Find our office located in the heart of Douala, Cameroon.",
      firstConsultation: "First consultation",
      firstConsultationText:
        "Get an initial review to define the best legal strategy for your case.",
      options: ["Civil Law", "Criminal Law", "Tax Law", "Business Law"],
    },
  };

  const t = text[lang];

  const infos = [
    { icon: FaMapMarkerAlt, title: t.headOffice, value: t.address },
    {
      icon: FaEnvelope,
      title: t.emailTitle,
      value: "contact@cabinet-avocat.com",
    },
    { icon: FaPhone, title: t.phone, value: "+237 656 413 387" },
    { icon: FaClock, title: t.hours, value: t.hoursText },
  ];

  return (
    <div>
      <section className="relative overflow-hidden bg-[#0d1b2a] py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,143,82,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.07),transparent_35%)]" />
        <div className="absolute inset-0 bg-[#0d1b2a]/92" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-[0.9fr_1.4fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {infos.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="flex items-center gap-6">
                  <div className="w-16 h-16 border border-[#c98f52]/60 text-[#c98f52] flex items-center justify-center text-2xl">
                    <Icon />
                  </div>

                  <div>
                    <h4 className="font-serif text-xl text-white mb-1">
                      {item.title}
                    </h4>

                    <p className="text-white/75 text-sm md:text-base">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="bg-[#c98f52]/10 border border-[#c98f52]/30 p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <FaBalanceScale className="text-[#c98f52]" />

                <h4 className="font-serif text-xl">
                  {t.firstConsultation}
                </h4>
              </div>

              <p className="text-white/70 text-sm leading-relaxed">
                {t.firstConsultationText}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="hidden sm:flex w-16 h-16 rounded-full bg-[#c98f52] text-white items-center justify-center text-3xl border-4 border-white">
                <FaBalanceScale />
              </div>

              <div>
                <p className="text-[#c98f52] text-xs tracking-[0.25em] uppercase font-bold mb-3">
                  {t.label}
                </p>

                <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                  {t.title} <br />
                  {t.title2}
                </h2>

                <p className="text-white/70 mt-6 max-w-2xl leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input className="contact-input" placeholder={t.name} />
                <input className="contact-input" placeholder={t.email} />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input className="contact-input" placeholder={t.phoneInput} />

                <select className="contact-input">
                  <option>{t.subject}</option>
                  {t.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>

              <textarea
                className="contact-input h-44 resize-none"
                placeholder={t.message}
              />

              <button
                type="button"
                className="bg-white text-[#0d1b2a] px-8 py-4 font-bold hover:bg-[#c98f52] hover:text-white transition"
              >
                {t.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-10 bg-[#c98f52]" />

              <p className="text-[#c98f52] text-xs tracking-[0.35em] uppercase font-medium">
                {t.mapLabel}
              </p>

              <span className="h-px w-10 bg-[#c98f52]" />
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-[#0d1b2a] mb-4">
              {t.mapTitle}
            </h2>

            <p className="text-[#6b7280] text-center">
              {t.mapDesc}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden bg-white border border-[#e8e3db] shadow-[0_22px_70px_rgba(13,27,42,0.12)]">
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#c98f52] via-[#c98f52] to-transparent z-10" />

              <iframe
                title="map"
                src="https://www.google.com/maps?q=Makepe%20Douala%20Cameroon&output=embed"
                className="w-full h-[360px] md:h-[470px] border-0 grayscale-[15%]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-input {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.25);
          color: white;
          padding: 16px;
          outline: none;
        }

        .contact-input::placeholder {
          color: rgba(255,255,255,0.65);
        }

        .contact-input:focus {
          border-color: #c98f52;
        }

        .contact-input option {
          color: #0d1b2a;
        }
      `}</style>
    </div>
  );
}