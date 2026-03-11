import { motion } from "framer-motion";
import hero from "../assets/image3.webp";

export default function DroitCivilSection() {
  return (
    <section className="relative w-full">

      {/* HERO */}
      <div className="relative h-[650px] overflow-hidden">

        {/* IMAGE */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero})` }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#110767]/60"></div>

        {/* TEXTE */}
        <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6 text-white">

          <div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-7xl font-bold mb-6"
              style={{ fontFamily: "Garamond" }}
            >
              Droit Civil
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl max-w-2xl"
              style={{ fontFamily: "Garamond" }}
            >
              Une expertise dédiée à la protection de vos droits
              et à la résolution efficace de vos litiges civils.
            </motion.p>

          </div>

        </div>

      </div>


      {/* BLOC SOUS BRANCHES */}
      <div className="relative max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute -top-24 right-0 bg-[#110767] text-white p-10 w-[520px] shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
        >

          <h3 className="mb-6 opacity-70 text-sm">
            Sous-Branches
          </h3>

          <div className="grid grid-cols-2 gap-6">

            <p className="hover:text-gray-300 cursor-pointer">Droit des contrats</p>
            <p className="hover:text-gray-300 cursor-pointer">Responsabilité civile</p>
            <p className="hover:text-gray-300 cursor-pointer">Droit de la famille</p>
            <p className="hover:text-gray-300 cursor-pointer">Droit des biens</p>
            <p className="hover:text-gray-300 cursor-pointer">Successions</p>
            <p className="hover:text-gray-300 cursor-pointer">Droit immobilier</p>

          </div>

        </motion.div>

      </div>


      {/* SECTION VUE D'ENSEMBLE */}
      <div className="max-w-6xl mx-auto pt-40 pb-24 px-6">

        <p className="text-red-600 mb-4">
          Vue d'ensemble
        </p>

        <h2
          className="text-4xl mb-6 text-[#110767]"
          style={{ fontFamily: "Garamond" }}
        >
          Notre accompagnement en droit civil
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-3xl">
          Le droit civil régit les relations entre les personnes.
          Notre cabinet accompagne ses clients dans la gestion
          des litiges civils, la rédaction de contrats et la
          protection de leurs droits patrimoniaux.
        </p>

      </div>

    </section>
  );
}