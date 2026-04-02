import { FaCalendarAlt, FaUser } from "react-icons/fa";
import PageTransition from "../component/PageTransition";
import img5 from "../assets/image3.webp"; 
import { Link } from "react-router-dom";
export default function ActualitePage() {
  return (
    <PageTransition>
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
             <h2
className="mb-12 md:mb-16 font-bold text-[#0f1545]"
style={{
fontFamily:"Garamond, serif",
fontSize:"clamp(32px,5vw,64px)",
letterSpacing:"3px"
}}
>
NOS ACTUALITES RECENTS
</h2>
          <div className="flex flex-col md:flex-row bg-white shadow-md rounded-xl overflow-hidden">
           
            {/* IMAGE À GAUCHE */}
            <div className="md:w-1/2 h-[200px] md:h-auto relative">
              <img
                src={img5}
                alt="Actualité Droit Civil"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TRAIT VERTICAL */}
            <div className="hidden md:block w-px bg-gray-300"></div>

            {/* DESCRIPTION À DROITE */}
            <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
              
              {/* Catégorie et date */}
              <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt /> <span>25 février 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUser /> <span>Maître Alexandre Petit</span>
                </div>
              </div>

              {/* Titre */}
              <h1 className="text-2xl md:text-3xl font-semibold mb-6">
                Les nouvelles règles du divorce par consentement mutuel
              </h1>

              {/* Description */}
              <div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-8">
                Depuis la réforme de 2017, le divorce par consentement mutuel peut se faire sans passage devant le juge. Quelles sont les implications pratiques ?
              </div>

               {/* CTA */}
                <Link
              to="/blog_civil"
                  className="text-red-600 font-medium hover:underline"
                >
                  Lire l'article →
                </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}