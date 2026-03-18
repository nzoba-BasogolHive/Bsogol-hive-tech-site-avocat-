import { motion } from "framer-motion";
import hero from "../assets/image3.webp";

export default function DroitAffairesSection() {
  return (
    <section className="relative w-full">

      {/* HERO */}

      <div className="relative min-h-screen overflow-hidden">

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

        <div className="relative z-10 max-w-6xl mx-auto min-h-screen flex items-center px-6 text-white">

          <div>

            <motion.h1
              initial={{ opacity:0, y:40 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{ fontFamily: "Garamond" }}
            >
              Droit des Affaires
            </motion.h1>

            <motion.p
              initial={{ opacity:0, y:40 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.3, duration:0.8 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl md:max-w-2xl"
              style={{ fontFamily: "Garamond" }}
            >
              Un accompagnement juridique stratégique pour sécuriser
              vos activités, développer votre entreprise et protéger
              vos intérêts économiques.
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
          viewport={{once:true}}
          className="relative md:absolute md:-top-24 md:right-0 bg-[#110767] text-white p-6 md:p-10 w-full md:max-w-[520px] shadow-[0_30px_60px_rgba(0,0,0,0.25)] mt-8 md:mt-0"
        >

          <h3 className="mb-6 opacity-70 text-sm">
            Sous-Branches
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

            <p className="hover:text-gray-300 cursor-pointer">
              Droit des sociétés
            </p>

            <p className="hover:text-gray-300 cursor-pointer">
              Droit des contrats commerciaux
            </p>

            <p className="hover:text-gray-300 cursor-pointer">
              Droit commercial
            </p>

            <p className="hover:text-gray-300 cursor-pointer">
              Fusions & acquisitions
            </p>

            <p className="hover:text-gray-300 cursor-pointer">
              Contentieux des affaires
            </p>

            <p className="hover:text-gray-300 cursor-pointer">
              Concurrence & distribution
            </p>

          </div>

        </motion.div>

      </div>

      {/* SECTION SUIVANTE */}

      <div className="max-w-6xl mx-auto pt-20 md:pt-40 pb-16 md:pb-24 px-6">

        <p className="text-red-600 mb-4 text-sm md:text-base">
          Vue d'ensemble
        </p>

        <p className="text-gray-700 leading-relaxed max-w-3xl text-sm md:text-base">
          Le droit des affaires regroupe l'ensemble des règles juridiques
          applicables aux entreprises et aux activités commerciales.
          Notre cabinet accompagne les dirigeants, entrepreneurs et sociétés
          dans leurs opérations juridiques, leurs stratégies de développement
          et la gestion des litiges commerciaux.
        </p>

      </div>

    </section>
  );
}