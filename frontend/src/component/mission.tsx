import { motion } from "framer-motion";
import missionImg from "../assets/image11.webp";

export default function Mission() {
  return (
    <section className="py-20 md:py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXTE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-widest text-red-600 mb-3">
            NOTRE MISSION
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Défendre vos droits avec excellence
          </h2>

          <p className="text-gray-600 leading-7">
            Nous offrons une représentation juridique de haut niveau,
            avec un accompagnement humain et stratégique.
          </p>

        </motion.div>

        {/* IMAGE */}
        <motion.img
          src={missionImg}
          className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-xl"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
        />

      </div>

    </section>
  );
}