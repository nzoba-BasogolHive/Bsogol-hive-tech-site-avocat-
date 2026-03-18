import { motion } from "framer-motion";
import hero from "../assets/image3.webp";

export default function DroitTravailSection() {
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
              Droit du Travail
            </motion.h1>

            <motion.p
              initial={{ opacity:0, y:40 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.3, duration:0.8 }}
              className="text-base sm:text-lg md:text-xl max-w-xl md:max-w-2xl"
              style={{ fontFamily: "Garamond" }}
            >
              Une expertise juridique dédiée aux relations
              entre employeurs et salariés pour sécuriser
              les contrats de travail et prévenir les litiges sociaux.
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

            <p className="hover:text-gray-300 cursor-pointer">Contrat de travail</p>
            <p className="hover:text-gray-300 cursor-pointer">Licenciement</p>
            <p className="hover:text-gray-300 cursor-pointer">Rupture conventionnelle</p>
            <p className="hover:text-gray-300 cursor-pointer">Contentieux prud’homal</p>
            <p className="hover:text-gray-300 cursor-pointer">Relations collectives</p>
            <p className="hover:text-gray-300 cursor-pointer">Santé et sécurité au travail</p>

          </div>

        </motion.div>

      </div>


      {/* SECTION SUIVANTE */}
      <div className="max-w-6xl mx-auto pt-16 md:pt-40 pb-20 md:pb-24 px-6">

        <p className="text-red-600 mb-4">
          Vue d'ensemble
        </p>

        <p className="text-gray-700 leading-relaxed max-w-3xl text-sm sm:text-base md:text-lg">
          Le droit du travail encadre les relations entre employeurs et salariés.
          Notre cabinet accompagne les entreprises et les particuliers dans la
          rédaction des contrats de travail, la gestion des relations sociales
          et la résolution des litiges devant les juridictions compétentes,
          notamment le Conseil de prud’hommes.
        </p>

      </div>

    </section>
  );
}