import { motion } from "framer-motion";
import hero from "../assets/image3.webp";

export default function DroitPenalSection() {
  return (
    <section className="relative w-full">

      {/* HERO */}
      <div className="relative h-[480px] md:h-[600px] lg:h-[650px] overflow-hidden">

        {/* IMAGE */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero})` }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#110767]/40"></div>

        {/* TEXTE */}
        <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6 text-white">

          <div>

            <motion.h1
              initial={{ opacity:0, y:40 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{ fontFamily: "Garamond" }}
            >
              Droit Pénal
            </motion.h1>

            <motion.p
              initial={{ opacity:0, y:40 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.3, duration:0.8 }}
              className="text-base sm:text-lg md:text-xl max-w-xl md:max-w-2xl"
              style={{ fontFamily: "Garamond" }}
            >
              Une expertise engagée au service de vos droits,
              de vos ambitions et de votre sécurité juridique.
            </motion.p>

          </div>

        </div>

      </div>


      {/* BLOC SOUS BRANCHES */}
      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:80}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.7}}
          className="relative md:absolute md:-top-24 md:right-0 bg-[#110767] text-white p-6 md:p-10 w-full md:w-[520px] shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
        >

          <h3 className="mb-6 opacity-70 text-sm">
            Sous-Branches
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

            <p className="hover:text-gray-300 cursor-pointer">Droit pénal général</p>
            <p className="hover:text-gray-300 cursor-pointer">Droit pénal spécial</p>
            <p className="hover:text-gray-300 cursor-pointer">Procédure pénale</p>
            <p className="hover:text-gray-300 cursor-pointer">Droit pénal international</p>
            <p className="hover:text-gray-300 cursor-pointer">Droit pénal des affaires</p>
            <p className="hover:text-gray-300 cursor-pointer">Droit pénal des mineurs</p>

          </div>

        </motion.div>

      </div>


      {/* SECTION VUE D'ENSEMBLE */}
      <div className="max-w-6xl mx-auto pt-16 md:pt-40 pb-20 md:pb-24 px-6">

        <p className="text-red-600 mb-4">
          Vue d'ensemble
        </p>

        <p className="text-gray-700 leading-relaxed max-w-3xl text-sm sm:text-base md:text-lg">
          Le droit pénal regroupe l’ensemble des règles relatives
          aux infractions et aux sanctions applicables. Notre cabinet
          assure la défense de ses clients devant les juridictions
          pénales et les accompagne à chaque étape de la procédure,
          de l’enquête jusqu’au jugement.
        </p>

      </div>

    </section>
  );
}