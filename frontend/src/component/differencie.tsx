import { motion } from "framer-motion";
import image11 from "../assets/image11.webp";
import { Link } from "react-router-dom";

export default function Difference() {

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white to-[#f3f6ff] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* TEXTE */}
        <div className="space-y-6">
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-blue-400 font-semibold tracking-widest text-sm md:text-base"
          >
            CE QUI NOUS DIFFÉRENCIE
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug"
          >
            Chez <span className="text-blue-300">Justice à Tout Prix</span>, nous adoptons une approche holistique.
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-700 text-base md:text-lg leading-relaxed"
          >
            Nous fournissons des services juridiques adaptés à chaque client, en respectant ses valeurs et sa situation personnelle.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-700 text-base md:text-lg leading-relaxed"
          >
            Nous respectons la dignité et l'intégrité de chaque personne et restons attentifs aux besoins uniques de nos clients.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-700 text-base md:text-lg leading-relaxed"
          >
            Lorsque cela est possible, nous aidons à trouver une solution amiable à tout litige.
          </motion.p>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden shadow-2xl"
        >
          <img
            src={image11}
            alt="Discussion avocat"
            className="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover rounded-xl"
          />
        </motion.div>

      </div>

      {/* CARD CONTACT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16 px-6"
      >
        <div className="bg-white shadow-lg flex flex-col md:flex-row justify-between items-center p-6 md:p-10 gap-6 md:gap-8 rounded-lg">
          <div className="text-center md:text-left">
            <p className="text-lg md:text-xl font-semibold">Vous avez des questions ?</p>
            <p className="text-gray-700 text-base md:text-lg">Appelez le +237 000 000 000</p>
          </div>
          <Link
            to="/contact"
            className="bg-blue-300 text-white px-8 md:px-10 py-3 md:py-4 rounded-md font-semibold transition hover:scale-105 flex items-center gap-2"
          >
            NOUS CONTACTER <span className="text-white">→</span>
          </Link>
        </div>
      </motion.div>

    </section>
  );
}