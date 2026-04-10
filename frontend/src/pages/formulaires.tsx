import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaBalanceScale } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    domaine: "",
    sujet: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Gestion des champs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/clients/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setSuccess("Votre demande a été envoyée avec succès ✅");

      // Reset
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        domaine: "",
        sujet: "",
        message: "",
      });

    } catch (err) {
      setError("Une erreur est survenue ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>

      {/* SECTION CONTACT */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* INFOS */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-[#1E1671] mb-8">
              Informations de Contact
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-5 rounded-xl shadow-sm flex gap-4">
                <FaMapMarkerAlt />
                <div>
                  <h4 className="text-red-600 font-semibold">Adresse</h4>
                  <p className="text-gray-600 text-sm">Douala - Cameroun</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm flex gap-4">
                <FaPhone />
                <div>
                  <h4 className="text-red-600 font-semibold">Téléphone</h4>
                  <p className="text-gray-600 text-sm">+237 6XX XX XX XX</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm flex gap-4">
                <FaEnvelope />
                <div>
                  <h4 className="text-red-600 font-semibold">Email</h4>
                  <p className="text-gray-600 text-sm">contact@cabinet-avocat.cm</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORMULAIRE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-xl shadow-md"
          >

            <h2 className="text-xl font-semibold text-red-700 mb-4">
              Demande de Consultation
            </h2>

            {/* Messages */}
            {success && <p className="text-green-600 mb-3">{success}</p>}
            {error && <p className="text-red-600 mb-3">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  type="text"
                  placeholder="Nom complet"
                  required
                  className="border p-3 rounded-md"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  required
                  className="border p-3 rounded-md"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Téléphone"
                  className="border p-3 rounded-md"
                />

                <select
                  name="domaine"
                  value={formData.domaine}
                  onChange={handleChange}
                  required
                  className="border p-3 rounded-md"
                >
                  <option value="">Domaine Juridique</option>
                  <option>Droit Civil</option>
                  <option>Droit Pénal</option>
                  <option>Droit Fiscal</option>
                  <option>Droit des Affaires</option>
                </select>
              </div>

              <input
                name="sujet"
                value={formData.sujet}
                onChange={handleChange}
                type="text"
                placeholder="Sujet"
                required
                className="border p-3 rounded-md w-full"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrivez votre situation"
                required
                className="border p-3 rounded-md w-full"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1E1671] text-white py-3 rounded-md"
              >
                {loading ? "Envoi..." : "Envoyer votre demande"}
              </button>

            </form>

          </motion.div>

        </div>
      </section>
    </div>
  );
}