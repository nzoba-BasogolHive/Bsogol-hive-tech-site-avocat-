import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaBalanceScale } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {

  return (
    <div>

      {/* SECTION CONTACT */}

      <section className="bg-gray-100 py-14 md:py-16">

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">

          {/* INFOS CONTACT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h2 className="text-xl md:text-2xl font-semibold text-[#1E1671] mb-8">
              Informations de Contact
            </h2>

            <div className="space-y-5">

              {/* Adresse */}

              <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition flex gap-4">

                <div className="bg-gray-100 p-3 rounded-lg text-red-700">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="text-red-600 font-semibold">
                    Adresse
                  </h4>

                  <p className="text-gray-600 text-sm">
                    Makèpe, Douala <br />
                    Cameroun
                  </p>
                </div>

              </div>


              {/* Telephone */}

              <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition flex gap-4">

                <div className="bg-gray-100 p-3 rounded-lg text-red-700">
                  <FaPhone />
                </div>

                <div>
                  <h4 className="text-red-600 font-semibold">
                    Téléphone
                  </h4>

                  <p className="text-gray-600 text-sm">
                    +237 656 413 387
                  </p>
                </div>

              </div>


              {/* Email */}

              <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition flex gap-4">

                <div className="bg-gray-100 p-3 rounded-lg text-red-700">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="text-red-600 font-semibold">
                    Email
                  </h4>

                  <p className="text-gray-600 text-sm">
                    contact@cabinet-avocat.fr
                  </p>
                </div>

              </div>


              {/* Horaires */}

              <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition flex gap-4">

                <div className="bg-gray-100 p-3 rounded-lg text-red-700">
                  <FaClock />
                </div>

                <div>
                  <h4 className="text-red-600 font-semibold">
                    Horaires
                  </h4>

                  <p className="text-gray-600 text-sm">
                    Lundi - Vendredi : 9h00 - 19h00 <br />
                    Samedi : Sur rendez-vous
                  </p>
                </div>

              </div>

            </div>


            {/* Consultation */}

            <div className="bg-red-700 text-white p-6 rounded-xl mt-8 shadow-lg">

              <div className="flex items-center gap-3 mb-3">
                <FaBalanceScale />
                <h4 className="font-semibold">
                  Première Consultation
                </h4>
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
            className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md"
          >

            <h2 className="text-lg md:text-xl font-semibold text-red-700 mb-2">
              Demande de Consultation
            </h2>

            <p className="text-gray-600 text-sm mb-6">
              Remplissez le formulaire ci-dessous et nous vous contacterons rapidement.
            </p>


            <form className="space-y-4">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="Nom complet"
                  className="border rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E1671]"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E1671]"
                />

              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="Téléphone"
                  className="border rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E1671]"
                />

                <select className="border rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E1671]">

                  <option>Domaine Juridique</option>
                  <option>Droit Civil</option>
                  <option>Droit Pénal</option>
                  <option>Droit Fiscal</option>
                  <option>Droit des Affaires</option>

                </select>

              </div>


              <input
                type="text"
                placeholder="Sujet"
                className="border rounded-md p-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#1E1671]"
              />


              <textarea
                rows={5}
                placeholder="Décrivez brièvement votre situation"
                className="border rounded-md p-3 w-full text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#1E1671]"
              />


              <button className="w-full bg-[#1E1671] text-white py-3 rounded-md hover:bg-[#151057] transition">
                Envoyer votre demande
              </button>

            </form>

          </motion.div>

        </div>

      </section>


      {/* GOOGLE MAP */}

      <section className="bg-white py-14 md:py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-xl md:text-2xl font-semibold text-[#1E1671] text-center mb-4">
            Notre Cabinet
          </h2>

          <p className="text-gray-600 text-center mb-8 md:mb-10">
            Retrouvez notre cabinet situé au cœur de la ville de Douala - Cameroun.
          </p>


          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">

            <iframe
              title="map"
              src="https://www.google.com/maps?q=Makepe%20Douala%20Cameroon&output=embed"
              className="w-full h-[300px] md:h-[420px] border-0"
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </section>

    </div>
  );
}