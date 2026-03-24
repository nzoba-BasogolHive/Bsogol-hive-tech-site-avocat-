import { motion } from "framer-motion";
import histoireImage from "../assets/image (13).webp";

export default function Histoire() {
  return (
    <section className=" section-container relative py-24 md:py-32 bg-gradient-to-b from-white to-[#f0f4ff] overflow-hidden">
      
      {/* Décor subtil derrière l'image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE AVEC GLASS EFFECT + ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-700"
        >
          <img
            src={histoireImage}
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          {/* Overlay glass */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        </motion.div>

        {/* TEXTE PREMIUM */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-widest text-[#110767] mb-3 font-semibold">
            NOTRE HISTOIRE
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            Plus de <span className="text-blue-600">10 ans</span> d’expertise juridique
          </h2>

          <p className="text-gray-600 leading-8 mb-4 text-lg">
            Fondé en 1998, notre cabinet s’est imposé comme une <span className="font-semibold text-blue-600">référence juridique</span> auprès de clients exigeants.
          </p>

          <p className="text-gray-600 leading-8 text-lg">
            Une équipe d’experts dédiée à la défense de vos intérêts, avec professionnalisme et innovation.
          </p>
        </motion.div>

      </div>
    </section>
  );
}