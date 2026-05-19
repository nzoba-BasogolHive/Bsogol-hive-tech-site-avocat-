import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaBalanceScale } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const DOMAINES: string[] = [
  "Domaine Juridique",
  "Droit Civil",
  "Droit Pénal",
  "Droit Fiscal",
  "Droit des Affaires",
  "Droit du Travail",
  "Droit de la Famille",
  "Droit Immobilier",
];

interface FormData {
  nom: string;
  email: string;
  telephone: string;
  domaine: string;
  sujet: string;
  message: string;
}

interface Demande extends FormData {
  id: string;
  date: string;
  statut: "Nouvelle";
}

const EMPTY_FORM: FormData = {
  nom: "",
  email: "",
  telephone: "",
  domaine: "Domaine Juridique",
  sujet: "",
  message: "",
};

function genId(prefix: string, n: number): string {
  return `${prefix}-${String(n).padStart(3, "0")}`;
}

export default function ContactSection(): React.JSX.Element {
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [sent, setSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  // ── Soumission via onClick sur le bouton (pas de <form> onSubmit) ──
  const handleSubmit = (): void => {

    // Validation
    if (!form.nom.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Veuillez remplir les champs obligatoires : nom, email et message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Adresse email invalide.");
      return;
    }
    if (form.domaine === "Domaine Juridique") {
      setError("Veuillez sélectionner un domaine juridique.");
      return;
    }

    setLoading(true);

    try {
      const existantes: Demande[] = JSON.parse(
        localStorage.getItem("lexoffice_demandes") ?? "[]"
      );

      const nouvelleDemande: Demande = {
        id: genId("DEM", existantes.length + 1),
        nom: form.nom.trim(),
        email: form.email.trim(),
        telephone: form.telephone.trim(),
        domaine: form.domaine,
        sujet: form.sujet.trim(),
        message: form.message.trim(),
        date: new Date().toISOString().split("T")[0],
        statut: "Nouvelle",
      };

      localStorage.setItem(
        "lexoffice_demandes",
        JSON.stringify([nouvelleDemande, ...existantes])
      );

      // Déclenche l'event storage pour que le dashboard détecte immédiatement
      window.dispatchEvent(new Event("storage"));

      setTimeout(() => {
        setLoading(false);
        setSent(true);
        setForm(EMPTY_FORM);
      }, 800);

    } catch (err) {
      console.error("Erreur:", err);
      setLoading(false);
      setError("Une erreur est survenue, veuillez réessayer.");
    }
  };

  const handleNewMessage = (): void => setSent(false);

  return (
    <div>
      {/* SECTION CONTACT */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* INFOS CONTACT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-[#1E1671] mb-8">
              Informations de Contact
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition flex gap-4">
                <div className="bg-gray-100 p-3 rounded-lg"><FaMapMarkerAlt /></div>
                <div>
                  <h4 className="text-red-600 font-semibold">Adresse</h4>
                  <p className="text-gray-600 text-sm">
                    123 Avenue des Champs-Élysées<br />75008 Paris, France
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition flex gap-4">
                <div className="bg-gray-100 p-3 rounded-lg"><FaPhone /></div>
                <div>
                  <h4 className="text-red-600 font-semibold">Téléphone</h4>
                  <p className="text-gray-600 text-sm">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition flex gap-4">
                <div className="bg-gray-100 p-3 rounded-lg"><FaEnvelope /></div>
                <div>
                  <h4 className="text-red-600 font-semibold">Email</h4>
                  <p className="text-gray-600 text-sm">contact@cabinet-avocat.fr</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition flex gap-4">
                <div className="bg-gray-100 p-3 rounded-lg"><FaClock /></div>
                <div>
                  <h4 className="text-red-600 font-semibold">Horaires</h4>
                  <p className="text-gray-600 text-sm">
                    Lundi - Vendredi : 9h00 - 19h00<br />Samedi : Sur rendez-vous
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-700 text-white p-6 rounded-xl mt-8 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaBalanceScale />
                <h4 className="font-semibold">Première Consultation</h4>
              </div>
              <p className="text-sm">
                Bénéficiez d'une première consultation offerte pour
                évaluer votre situation et définir la meilleure stratégie.
              </p>
            </div>
          </motion.div>

          {/* FORMULAIRE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-xl shadow-md relative overflow-hidden"
          >
            <AnimatePresence mode="wait">

              {/* ── Message de succès ── */}
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center py-10 h-full"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "rgba(30,22,113,0.08)" }}
                  >
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="20" fill="#1E1671" opacity="0.12" />
                      <motion.path
                        d="M12 20.5L17.5 26L28 14"
                        stroke="#1E1671"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    </svg>
                  </motion.div>

                  <h3 className="text-xl font-semibold text-[#1E1671] mb-3">
                    Demande envoyée !
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    Votre demande a bien été reçue.
                  </p>
                  <p className="text-gray-400 text-sm mb-8">
                    Notre équipe vous contactera dans les plus brefs délais.
                  </p>

                  <button
                    onClick={handleNewMessage}
                    className="px-6 py-2.5 border border-[#1E1671] text-[#1E1671] rounded-md text-sm hover:bg-[#1E1671] hover:text-white transition"
                  >
                    Envoyer une autre demande
                  </button>
                </motion.div>

              ) : (

                /* ── Formulaire ── */
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold text-red-700 mb-2">
                    Demande de Consultation
                  </h2>
                  <p className="text-gray-600 text-sm mb-6">
                    Remplissez le formulaire ci-dessous et nous vous contacterons rapidement.
                  </p>

                  {/* ── div au lieu de form — évite le rechargement de page ── */}
                  <div className="space-y-4">

                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="nom"
                        value={form.nom}
                        onChange={handleChange}
                        placeholder="Nom complet *"
                        className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1E1671] w-full"
                      />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email *"
                        className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1E1671] w-full"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="telephone"
                        value={form.telephone}
                        onChange={handleChange}
                        placeholder="Téléphone"
                        className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1E1671] w-full"
                      />
                      <select
                        name="domaine"
                        value={form.domaine}
                        onChange={handleChange}
                        title="Sélectionner un domaine juridique"
                        aria-label="Domaine juridique"
                        className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1E1671] w-full"
                      >
                        {DOMAINES.map((d: string) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>

                    <input
                      type="text"
                      name="sujet"
                      value={form.sujet}
                      onChange={handleChange}
                      placeholder="Sujet"
                      className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#1E1671]"
                    />

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Décrivez brièvement votre situation *"
                      rows={4}
                      className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#1E1671] resize-none"
                    />

                    {/* Message d'erreur */}
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-4 py-3"
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                            <circle cx="8" cy="8" r="7.5" stroke="#C0392B" strokeWidth="1" />
                            <path d="M8 4.5V8.5" stroke="#C0392B" strokeWidth="1.5" strokeLinecap="round" />
                            <circle cx="8" cy="11" r="0.75" fill="#C0392B" />
                          </svg>
                          {error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bouton avec onClick — pas de submit form */}
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={loading}
                      className="w-full bg-[#1E1671] text-white py-3 rounded-md hover:bg-[#151057] transition flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" opacity="0.3" />
                            <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                          </svg>
                          Envoi en cours…
                        </>
                      ) : (
                        "Envoyer votre demande"
                      )}
                    </button>

                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[#1E1671] text-center mb-6">
            Notre Cabinet
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Retrouvez notre cabinet situé au cœur de la ville de Douala-Cameroun.
          </p>
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <iframe
              title="Localisation du cabinet juridique"
              src="https://www.google.com/maps?q=Makepe%20Douala%20Cameroon&output=embed"
              className="w-full h-[420px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
