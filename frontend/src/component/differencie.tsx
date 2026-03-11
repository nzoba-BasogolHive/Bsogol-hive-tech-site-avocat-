import { useEffect, useRef, useState } from "react";
import image11 from "../assets/image11.webp";
import Reveal from "./Reveal";
export default function Difference() {

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();

  }, []);

  return (
    <section className="relative py-32 bg-[#e8dddd] overflow-hidden">
      <Reveal>
  <section className="py-28">
   
      {/* BLOC BLEU */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-[#1b0f6b]"></div>

      {/* CONTENU */}
      <div
        ref={ref}
        className={`relative max-w-[1400px] mx-auto px-8 grid md:grid-cols-2 gap-20 items-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >

        {/* TEXTE */}
        <div>

          <p
            className="text-[#1b0f6b] font-semibold mb-4 tracking-widest"
            style={{ fontFamily: "Garamond", fontSize: "18px" }}
          >
            CE QUI NOUS DIFFÉRENCIE
          </p>

          <h2
            className="text-4xl font-bold text-black mb-6 leading-snug"
            style={{ fontFamily: "Garamond" }}
          >
            Chez Justice à Tout Prix, <br />
            nous adoptons une approche holistique de la prestation de services juridiques.
          </h2>

          <p className="text-gray-800 leading-8">
            Nous nous efforçons de fournir des services juridiques qui tiennent
            compte du caractère unique de chaque client, notamment de ses valeurs,
            de ses émotions et de sa situation familiale particulière.
          </p>

          <p className="text-gray-800 leading-8 mt-4">
            Nous respectons la dignité et l'intégrité de chaque personne impliquée
            dans une affaire et nous sommes à l'écoute afin de bien comprendre les
            besoins de nos clients.
          </p>

          <p className="text-gray-800 leading-8 mt-4">
            Lorsque cela est possible, nous les aidons à trouver une solution
            amiable à tout litige qui pourrait survenir.
          </p>

        </div>

        {/* IMAGE */}
        <div className="relative">

          {/* image qui dépasse */}
          <div className="relative z-10 shadow-2xl group">

            <img
              src={image11}
              alt="Discussion avocat"
              className="w-full h-[450px] object-cover transition duration-700 group-hover:scale-105"
            />

          </div>

        </div>

      </div>

      {/* CARD CONTACT */}
      <div className="relative max-w-[1100px] mx-auto mt-24">

        <div className="bg-white shadow-2xl flex flex-col md:flex-row justify-between items-center p-10 gap-8">

          <div>
            <p className="text-lg font-semibold">
              Vous avez des questions ?
            </p>

            <p className="text-gray-700">
              Appelez le +237 000 000 000
            </p>
          </div>

          {/* bouton animé */}
          <button className="group bg-[#1b0f6b] text-white px-10 py-4 rounded-md font-semibold flex items-center gap-3 transition">

            NOUS CONTACTEZ

            <span className="transform transition group-hover:translate-x-2">
              →
            </span>

          </button>

        </div>

      </div>
      
  </section>
</Reveal>


    </section>
  );
}