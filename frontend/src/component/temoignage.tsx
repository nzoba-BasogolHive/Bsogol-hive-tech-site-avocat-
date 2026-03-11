import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import backgroundImg from "../assets/image3.webp";
import femme from "../assets//image (12).webp";

const testimonials = [
  {
    text: "leur expliquant comment les lois familiales de cet État s'appliquent à eux et à leur famille.",
    name: "CAMILLE",
  },
  {
    text: "Un cabinet très professionnel qui m'a accompagné dans une période difficile.",
    name: "JEAN",
  },
  {
    text: "Des avocats très à l'écoute et une défense remarquable.",
    name: "SARAH",
  },
];

export default function Temoignages() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full py-40 bg-cover bg-center flex justify-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* BLOC FLOTTANT */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-[1200px] w-full bg-white shadow-2xl grid grid-cols-2"
      >
        {/* PARTIE GAUCHE */}
        <div className="bg-[#140a66] text-white">

          <img
            src={femme}
            alt="cliente"
            className="w-full h-[250px] object-cover"
          />

          <div className="p-10">

            <p
              className="text-2xl leading-relaxed"
              style={{ fontFamily: "Garamond" }}
            >
              Appelez-nous dès aujourd'hui pour tout type d'affaire de droit
            </p>

          </div>

        </div>

        {/* PARTIE DROITE */}
        <div className="p-14">

          <h2
            className="text-4xl mb-10 text-[#140a66]"
            style={{ fontFamily: "Garamond" }}
          >
            Ce que disent nos clients !
          </h2>

          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#9f9bbf] text-white p-8 rounded-lg w-[420px]"
          >
            <p
              className="mb-4"
              style={{ fontFamily: "Garamond" }}
            >
              {testimonials[index].text}
            </p>

            {/* étoiles animées */}
            <div className="flex text-yellow-300 text-xl mb-4 animate-pulse">
              ★★★★★
            </div>

            <p
              className="text-[#140a66] font-bold"
              style={{ fontFamily: "Garamond" }}
            >
              {testimonials[index].name}
            </p>

          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}