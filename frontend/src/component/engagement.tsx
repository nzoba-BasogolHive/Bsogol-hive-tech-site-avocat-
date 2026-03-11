import { motion } from "framer-motion";
import Reveal from "./Reveal";
export default function Piliers() {

  const cards = [
    {
      title: "Intégrité",
      text: "Une éthique irréprochable au cœur de notre pratique quotidienne",
      icon: "⚖️"
    },
    {
      title: "Excellence",
      text: "Une approche rigoureuse et un niveau d’expertise élevé",
      icon: "🏛️"
    },
    {
      title: "Expertise",
      text: "Des avocats expérimentés dédiés à la défense de vos droits",
      icon: "📜"
    }
  ];

  return (
    <section className="py-32 bg-[#f6f6f8]">
        <Reveal>
  <section className="py-28">
   

      {/* TITRE */}
      <div className="text-center mb-24">

        <motion.h2
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.7}}
          className="text-5xl mb-6"
          style={{fontFamily:"Garamond"}}
        >
          Les Piliers de Notre Engagement
        </motion.h2>

        {/* Ligne décorative */}
        <motion.div
          initial={{width:0}}
          whileInView={{width:"120px"}}
          transition={{duration:0.8}}
          className="h-[3px] bg-[#110767] mx-auto"
        ></motion.div>

      </div>


      {/* CARTES */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-6">

        {cards.map((card,i)=>(
          <motion.div
            key={i}
            initial={{opacity:0,y:80}}
            whileInView={{opacity:1,y:0}}
            transition={{delay:i*0.2,duration:0.6}}
            whileHover={{y:-14,scale:1.03}}
            className="relative bg-white rounded-xl p-12 text-center shadow-lg overflow-hidden"
          >

            {/* Effet lumière */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-transparent via-[#11076710] to-transparent"></div>

            {/* Icône */}
            <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center rounded-full bg-[#e8ecf5] text-4xl shadow-inner">
              {card.icon}
            </div>

            {/* Titre */}
            <h3
              className="text-3xl font-bold mb-6"
              style={{fontFamily:"Garamond"}}
            >
              {card.title}
            </h3>

            {/* Texte */}
            <p className="text-gray-600 leading-relaxed">
              {card.text}
            </p>

          </motion.div>
        ))}

      </div>
      
  </section>
</Reveal>

    </section>
  );
}