import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaBalanceScale, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <div>

      {/* SECTION CONTACT */}
      <section className="py-20 md:py-24 bg-white relative overflow-hidden">

        {/* FOND DÉCORATIF SUBTIL */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-5"
            style={{ background: "radial-gradient(circle, #c9a84c, transparent)" }} />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-5"
            style={{ background: "radial-gradient(circle, #1b0f6b, transparent)" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-[4px] font-semibold mb-3 block"
              style={{ color: "#c9a84c" }}>
              Nous contacter
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0a0814" }}>
              Parlons de votre <span style={{ color: "#c9a84c" }}>situation</span>
            </h2>
            <div className="w-16 h-px mx-auto" style={{ backgroundColor: "#c9a84c" }} />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* INFOS CONTACT — 2/5 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2 flex flex-col gap-4"
            >

              {[
                { icon: <FaMapMarkerAlt />, title: "Adresse", content: "Makèpe, Douala\nCameroun" },
                { icon: <FaPhone />, title: "Téléphone", content: "+237 656 413 387" },
                { icon: <FaEnvelope />, title: "Email", content: "contact@cabinet-avocat.fr" },
                { icon: <FaClock />, title: "Horaires", content: "Lun – Ven : 9h00 – 19h00\nSamedi : Sur rendez-vous" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#c9a84c] transition-all duration-300 bg-white group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-sm group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "#f5f0ff", color: "#c9a84c" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1" style={{ color: "#c9a84c" }}>
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed whitespace-pre-line text-gray-500">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}

              {/* CARD CONSULTATION */}
              <div
                className="p-6 rounded-xl mt-2 border"
                style={{
                  background: "linear-gradient(135deg, #fffbf0, #f5f0ff)",
                  borderColor: "#c9a84c55",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaBalanceScale style={{ color: "#c9a84c" }} />
                  <h4 className="font-semibold text-sm" style={{ color: "#0a0814" }}>
                    Première Consultation
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-gray-500">
                  Bénéficiez d'une première consultation{" "}
                  <span style={{ color: "#c9a84c" }} className="font-semibold">offerte</span>{" "}
                  pour évaluer votre situation et définir la meilleure stratégie juridique.
                </p>
              </div>

            </motion.div>


            {/* FORMULAIRE — 3/5 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-3 rounded-2xl p-8 md:p-10 border border-gray-100 shadow-lg bg-white"
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-1" style={{ color: "#0a0814" }}>
                  Demande de Consultation
                </h3>
                <p className="text-sm text-gray-500">
                  Remplissez le formulaire ci-dessous et nous vous répondrons sous 24h.
                </p>
                <div className="w-10 h-0.5 mt-4" style={{ backgroundColor: "#c9a84c" }} />
              </div>

              <form className="space-y-5">

                {/* NOM + EMAIL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#c9a84c" }}>
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      placeholder="Jean Dupont"
                      className="rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-300 outline-none border border-gray-200 focus:border-[#c9a84c] transition-all duration-200 bg-gray-50"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#c9a84c" }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="jean@exemple.com"
                      className="rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-300 outline-none border border-gray-200 focus:border-[#c9a84c] transition-all duration-200 bg-gray-50"
                    />
                  </div>
                </div>

                {/* TÉLÉPHONE + DOMAINE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#c9a84c" }}>
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      placeholder="+237 6XX XXX XXX"
                      className="rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-300 outline-none border border-gray-200 focus:border-[#c9a84c] transition-all duration-200 bg-gray-50"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#c9a84c" }}>
                      Domaine juridique
                    </label>
                    <div className="relative">
                      <select
  aria-label="Choisir un domaine juridique"
  className="w-full appearance-none rounded-lg px-4 py-3 text-sm text-white outline-none border transition-all duration-200 focus:border-[#c9a84c]"
  style={{
    borderColor: "#1b0f6b",
    backgroundColor: "#0a0814",
    color: "#a89cc8",
  }}
>
  <option value="">Choisir un domaine</option>
  <option>Droit Civil</option>
  <option>Droit Pénal</option>
  <option>Droit Fiscal</option>
  <option>Droit des Affaires</option>
  <option>Droit du Travail</option>
</select>
                      <FaChevronDown
                        className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs"
                        style={{ color: "#c9a84c" }}
                      />
                    </div>
                  </div>
                </div>

                {/* SUJET */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#c9a84c" }}>
                    Sujet *
                  </label>
                  <input
                    type="text"
                    placeholder="Objet de votre demande"
                    className="rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-300 outline-none border border-gray-200 focus:border-[#c9a84c] transition-all duration-200 bg-gray-50 w-full"
                  />
                </div>

                {/* MESSAGE */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#c9a84c" }}>
                    Votre message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Décrivez brièvement votre situation juridique..."
                    className="rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-300 outline-none border border-gray-200 focus:border-[#c9a84c] transition-all duration-200 resize-none bg-gray-50 w-full"
                  />
                </div>

                {/* BOUTON */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-lg font-semibold text-sm uppercase tracking-widest transition-all duration-300 hover:opacity-90 hover:scale-[1.01]"
                  style={{ backgroundColor: "#c9a84c", color: "#0a0814" }}
                >
                  Envoyer la demande
                </button>

                <p className="text-center text-xs text-gray-400">
                  Vos données sont confidentielles et ne seront jamais partagées.
                </p>

              </form>
            </motion.div>

          </div>
        </div>
      </section>


      {/* GOOGLE MAP */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-xs uppercase tracking-[4px] font-semibold block mb-3"
              style={{ color: "#c9a84c" }}>
              Localisation
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#0a0814" }}>
              Notre Cabinet
            </h2>
            <p className="text-sm text-gray-500">
              Retrouvez notre cabinet situé au cœur de la ville de Douala, Cameroun.
            </p>
          </motion.div>

          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <iframe
              title="Localisation Cabinet"
              src="https://www.google.com/maps?q=Makepe%20Douala%20Cameroon&output=embed"
              className="w-full h-[320px] md:h-[440px] border-0"
              loading="lazy"
            />
          </div>

        </div>
      </section>

    </div>
  );
}