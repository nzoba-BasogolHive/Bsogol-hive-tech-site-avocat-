import { motion } from "framer-motion";
import hero from "../assets/image3.webp";

export default function DroitAffairesSection() {
  return (
    <section className="relative w-full">

      {/* HERO */}
      <div className="relative h-[650px] overflow-hidden">

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
              className="text-7xl font-bold mb-6"
              style={{ fontFamily: "Garamond" }}
            >
              Droit des Affaires
            </motion.h1>

            <motion.p
              initial={{ opacity:0, y:40 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.3, duration:0.8 }}
              className="text-2xl max-w-2xl"
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
      <div className="relative max-w-6xl mx-auto">

        <motion.div
          initial={{opacity:0,y:80}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.7}}
          className="absolute -top-24 right-0 bg-[#110767] text-white p-10 w-[520px] shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
        >

          <h3 className="mb-6 opacity-70 text-sm">
            Sous-Branches
          </h3>

          <div className="grid grid-cols-2 gap-6">

            <p className="hover:text-gray-300 cursor-pointer">Droit des sociétés</p>
            <p className="hover:text-gray-300 cursor-pointer">Droit des contrats commerciaux</p>
            <p className="hover:text-gray-300 cursor-pointer">Droit commercial</p>
            <p className="hover:text-gray-300 cursor-pointer">Fusions & acquisitions</p>
            <p className="hover:text-gray-300 cursor-pointer">Contentieux des affaires</p>
            <p className="hover:text-gray-300 cursor-pointer">Concurrence & distribution</p>

          </div>

        </motion.div>

      </div>


      {/* SECTION SUIVANTE */}
      <div className="max-w-6xl mx-auto pt-40 pb-24 px-6">

        <p className="text-red-600 mb-4">
          Vue d'ensemble
        </p>

        <p className="text-gray-700 leading-relaxed max-w-3xl">
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