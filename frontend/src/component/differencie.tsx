import { motion } from "framer-motion";
import image11 from "../assets/image11.webp";
import { Link } from "react-router-dom";

export default function Difference() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-20 md:py-28 lg:py-36 bg-[#e8dddd] overflow-hidden">

      {/* BLOC BLEU animé */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="hidden md:block absolute top-0 right-0 w-[45%] h-full bg-[#1b0f6b]"
      />

      {/* CONTENU */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-[1400px] mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 md:gap-20 items-center"
      >

        {/* TEXTE */}
        <div>

          <motion.p
            variants={item}
            className="text-[#1b0f6b] font-semibold mb-4 tracking-widest text-sm md:text-base"
            style={{ fontFamily: "Garamond" }}
          >
            CE QUI NOUS DIFFÉRENCIE
          </motion.p>

          <motion.h2
            variants={item}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 leading-snug"
            style={{ fontFamily: "Garamond" }}
          >
            Chez Justice à Tout Prix, <br />
            nous adoptons une approche holistique de la prestation de services juridiques.
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-800 leading-7 md:leading-8 text-sm md:text-base"
          >
            Nous nous efforçons de fournir des services juridiques qui tiennent
            compte du caractère unique de chaque client, notamment de ses valeurs,
            de ses émotions et de sa situation familiale particulière.
          </motion.p>

          <motion.p
            variants={item}
            className="text-gray-800 leading-7 md:leading-8 mt-4 text-sm md:text-base"
          >
            Nous respectons la dignité et l'intégrité de chaque personne impliquée
            dans une affaire et nous sommes à l'écoute afin de bien comprendre les
            besoins de nos clients.
          </motion.p>

          <motion.p
            variants={item}
            className="text-gray-800 leading-7 md:leading-8 mt-4 text-sm md:text-base"
          >
            Lorsque cela est possible, nous les aidons à trouver une solution
            amiable à tout litige qui pourrait survenir.
          </motion.p>

        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="relative z-10 shadow-2xl group rounded-lg overflow-hidden">

            <img
              src={image11}
              alt="Discussion avocat"
              className="w-full h-[280px] md:h-[380px] lg:h-[450px] object-cover transition duration-700 group-hover:scale-110"
            />

            {/* overlay hover premium */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500"></div>

          </div>

        </motion.div>

      </motion.div>

      {/* CARD CONTACT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-[1100px] mx-auto mt-20 md:mt-28 px-6"
      >

        <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col md:flex-row justify-between items-center p-6 md:p-10 gap-6 md:gap-8 rounded-lg hover:shadow-[0_25px_70px_rgba(0,0,0,0.2)] transition">

          <div className="text-center md:text-left">

            <p className="text-lg md:text-xl font-semibold">
              Vous avez des questions ?
            </p>

            <p className="text-gray-700 text-sm md:text-base">
              Appelez le +237 000 000 000
            </p>

          </div>

          <Link
            to="/contact"
            className="group bg-[#1b0f6b] text-white px-8 md:px-10 py-3 md:py-4 rounded-md font-semibold flex items-center gap-3 transition hover:scale-105"
          >

            NOUS CONTACTER

            <span className="transform transition group-hover:translate-x-2">
              →
            </span>

          </Link>

        </div>

      </motion.div>

    </section>
  );
}