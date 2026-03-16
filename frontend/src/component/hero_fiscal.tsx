import { motion } from "framer-motion";
import hero from "../assets/image3.webp";

export default function DroitFiscalSection() {
  return (
    <section className="relative w-full">

      {/* HERO */}
      <div className="relative h-[480px] md:h-[600px] lg:h-[650px] overflow-hidden">

        {/* IMAGE PARALLAX */}
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
              initial={{ opacity:0, y:40 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{ fontFamily: "Garamond" }}
            >
              Droit Fiscal
            </motion.h1>

            <motion.p
              initial={{ opacity:0, y:40 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.3, duration:0.8 }}
              className="text-base sm:text-lg md:text-xl max-w-xl md:max-w-2xl"
              style={{ fontFamily: "Garamond" }}
            >
              Une expertise fiscale pour accompagner les entreprises
              et les particuliers dans l’optimisation, la conformité
              et la gestion des litiges avec l’administration fiscale.
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

            <p className="hover:text-gray-300 cursor-pointer">Fiscalité des entreprises</p>
            <p className="hover:text-gray-300 cursor-pointer">Fiscalité des particuliers</p>
            <p className="hover:text-gray-300 cursor-pointer">Contrôle fiscal</p>
            <p className="hover:text-gray-300 cursor-pointer">Contentieux fiscal</p>
            <p className="hover:text-gray-300 cursor-pointer">Optimisation fiscale</p>
            <p className="hover:text-gray-300 cursor-pointer">TVA et impôts indirects</p>

          </div>

        </motion.div>

      </div>


      {/* SECTION SUIVANTE */}
      <div className="max-w-6xl mx-auto pt-16 md:pt-40 pb-20 md:pb-24 px-6">

        <p className="text-red-600 mb-4">
          Vue d'ensemble
        </p>

        <p className="text-gray-700 leading-relaxed max-w-3xl text-sm sm:text-base md:text-lg">
          Le droit fiscal regroupe l’ensemble des règles relatives aux
          impôts et aux relations entre les contribuables et
          l’administration fiscale. Notre cabinet accompagne les
          entreprises et les particuliers dans la gestion de leurs
          obligations fiscales, l’optimisation de leur fiscalité et la
          défense de leurs intérêts en cas de contrôle ou de contentieux
          fiscal.
        </p>

      </div>

    </section>
  );
}