import { motion } from "framer-motion";
import imageHero from "../assets/image (23).webp";

export default function Hero_contact() {
  return (
    <section className="relative w-full h-[480px] md:h-[560px] lg:h-[640px] overflow-hidden">

      {/* IMAGE */}
      <motion.img
        src={imageHero}
        alt="contact"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c3c]/90 via-[#0c0c3c]/60 to-[#0c0c3c]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c3c]/40 via-transparent to-transparent" />


{/* OVERLAY */}
<div className="absolute inset-0 bg-gradient-to-r from-[#0c0c3c]/40 to-[#0c0c3c]/40"></div>

      {/* CONTENU */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 h-full flex flex-col justify-center text-white">


        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="block w-6 h-px bg-[#7B2E39]" />
          <p className="text-[#e8a0a8] text-[10px] md:text-xs font-semibold tracking-[0.28em] uppercase">
            Nous Contacter
          </p>
        </motion.div>

        {/* titre */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] mb-4"
          style={{ fontFamily: "Garamond, serif" }}
        >
          Prenez Rendez-vous
        </motion.h1>

        {/* ligne accent rouge animée */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 52 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="h-[3px] bg-[#7B2E39] mb-6 rounded-full"
        />

        {/* sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/65 text-[15px] md:text-[17px] leading-[1.8] max-w-lg mb-10"
        >
          Notre équipe est à votre écoute pour étudier votre situation
          et vous proposer un accompagnement adapté à vos besoins.
        </motion.p>

        {/* BOUTONS */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            type="button"
            className="group flex items-center justify-center gap-3 bg-[#7B2E39] hover:bg-[#65262f] text-white px-8 py-3.5 text-[12px] font-bold tracking-[0.15em] uppercase transition-all duration-300 shadow-lg shadow-[#7B2E39]/30"
          >
            Prendre rendez-vous
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>

          <button
            type="button"
            className="group flex items-center justify-center gap-3 border border-white/40 hover:border-white text-white px-8 py-3.5 text-[12px] font-bold tracking-[0.15em] uppercase transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
          >
            <span className="text-[#e8a0a8] group-hover:scale-110 transition-transform duration-300">✆</span>
            Nous appeler
          </button>
        </motion.div>

        {/* mention bas */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 text-white/25 text-[10px] tracking-[0.2em] uppercase"
        >
          Consultation confidentielle · Sans engagement
        </motion.p>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[#7B2E39]/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}

