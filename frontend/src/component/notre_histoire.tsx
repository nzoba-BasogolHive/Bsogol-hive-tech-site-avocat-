import { motion } from "framer-motion";
import histoireImage from "../assets/image (13).webp";

export default function Histoire() {
  return (
    <section className="py-20 md:py-28 bg-[#f8f9fc]">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <img src={histoireImage} className="w-full h-[400px] md:h-[500px] object-cover" />
        </motion.div>

        {/* TEXTE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-sm tracking-widest text-[#1b0f6b] mb-3">
            NOTRE HISTOIRE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Plus de 10 ans d’expertise juridique
          </h2>

          <p className="text-gray-600 leading-7 mb-4">
            Fondé en 1998, notre cabinet s’est imposé comme une référence juridique.
          </p>

          <p className="text-gray-600 leading-7">
            Une équipe d’experts dédiée à la défense de vos intérêts.
          </p>

        </motion.div>

      </div>

    </section>
  );
}