import { motion } from "framer-motion";
import NavbarComponent from "./Navbar";
import imageHero from "../assets/image (23).webp";

export default function Hero_contact() {
  return (

<section className="relative w-full h-[480px] md:h-[560px] lg:h-[640px] overflow-hidden">

{/* IMAGE BACKGROUND */}
<img
src={imageHero}
alt="contact"
className="absolute inset-0 w-full h-full object-cover"
/>

{/* OVERLAY */}
<div className="absolute inset-0 bg-gradient-to-r from-[#0c0c3c]/80 to-[#0c0c3c]/40"></div>


{/* NAVBAR GLASS */}
<div className="absolute top-0 left-0 w-full z-20">
<div className="max-w-[1300px] mx-auto px-4 md:px-6 pt-4 md:pt-6">
<div className="backdrop-blur-md bg-white/10 rounded-xl px-4 md:px-6 py-3">
<NavbarComponent />
</div>
</div>
</div>


{/* CONTENU HERO */}
<div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 h-full flex flex-col justify-center text-white">

<motion.p
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}}
className="text-sm md:text-lg mb-3 md:mb-4"
>
Nous Contacter
</motion.p>


<motion.h1
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 md:mb-6"
>
Prenez Rendez-vous
</motion.h1>


<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.3}}
className="text-gray-200 text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mb-6 md:mb-8"
>
Notre équipe est à votre écoute pour étudier votre situation
et vous proposer un accompagnement adapté à vos besoins.
</motion.p>


{/* BOUTONS */}
<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:0.5}}
className="flex flex-col sm:flex-row gap-4"
>

<button className="bg-[#7B2E39] hover:bg-[#65262f] text-white px-6 py-3 rounded-md transition shadow-lg">
Prendre rendez-vous
</button>

<button className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#0c0c3c] transition">
Nous appeler
</button>

</motion.div>

</div>

</section>

  );
}