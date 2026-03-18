import { motion } from "framer-motion";
import missionImg from "../assets/image (15).webp";

export default function Philosophie() {
  return (
    <section className="py-24 bg-[#0f172a] text-white">

      <div className="max-w-6xl mx-auto text-center px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Notre Philosophie
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gray-300 max-w-3xl mx-auto leading-7"
        >
          Une approche humaine, stratégique et rigoureuse du droit.
          Chaque client est unique et mérite une attention personnalisée.
        </motion.p>

        <motion.img
          src={missionImg}
          className="mt-10 mx-auto rounded-xl shadow-2xl w-full max-w-4xl h-[300px] md:h-[400px] object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        />

      </div>

    </section>
  );
}