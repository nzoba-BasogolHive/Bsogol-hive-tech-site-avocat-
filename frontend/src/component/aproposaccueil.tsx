import Reveal from "./Reveal";
import { Link } from "react-router-dom";
import image7 from "../assets/image (7).webp";

export default function AproposAccueil() {

return (

<section
className="relative w-full py-16 md:py-24 bg-white overflow-hidden"
style={{clipPath:"polygon(0 0,100% 0,100% 80%,0 100%)"}}
>

<Reveal>

<h2
className="absolute left-6 md:left-24 top-10 z-40 font-bold"
style={{
fontFamily:"Garamond, serif",
fontSize:"clamp(36px,5vw,64px)",
color:"#110767"
}}
>
A PROPOS
</h2>


<div className="relative min-h-[300px] md:min-h-[450px] lg:min-h-[550px] flex items-center justify-center">


<div className="absolute w-[120%] h-[320px] md:h-[450px] lg:h-[500px] bg-white rotate-[6deg] overflow-hidden flex items-center justify-center">

<img
src={image7}
className="absolute w-full h-full object-cover rotate-[-6deg]"
/>

</div>


<div className="relative z-30 bg-white shadow-xl p-8 md:p-12 w-[90%] md:w-[700px] lg:w-[900px] text-center">

<h3 className="mb-4 font-bold text-xl md:text-2xl">
Renforcement des lois sur la protection des données personnelles
</h3>

<p className="text-gray-600 mb-6 text-sm md:text-lg">
De nouvelles lois modifient les règles de protection des données personnelles
afin de mieux encadrer leur utilisation et protéger les droits des citoyens.
</p>

<Link
to="/Apropos"
className="font-semibold hover:underline text-[#110767]"
>
EN SAVOIR PLUS
</Link>

</div>

</div>

</Reveal>

</section>

);
}