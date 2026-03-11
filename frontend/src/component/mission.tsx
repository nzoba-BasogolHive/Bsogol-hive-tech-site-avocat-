import missionImg from "../assets/image11.webp";
import Reveal from "./Reveal";

export default function Mission() {
  return (
    <section className="w-full py-24 bg-[#f6f6f6]">

      <div className="max-w-[1300px] mx-auto px-6">

        <Reveal>

          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* TEXTE GAUCHE */}
            <div className="flex-1">

              <h2
                className="text-4xl mb-4"
                style={{ fontFamily: "Garamond" }}
              >
                NOTRE MISSION
              </h2>

              <h3
                className="text-xl font-semibold mb-6"
                style={{ fontFamily: "Garamond" }}
              >
                La mission de justice à tout prix
              </h3>

              <p
                className="text-gray-800 leading-relaxed"
                style={{ fontFamily: "Garamond", fontSize: "19px" }}
              >
                Nous offrons à nos clients une représentation juridique de haut niveau
                afin que chacun se sente soutenu et préparé face au système judiciaire
                familial. Nous comprenons l'impact des décisions auxquelles ils sont
                confrontés et nous nous efforçons de les aider à mieux appréhender
                leur situation en droit familial.
              </p>

            </div>

            {/* IMAGE DROITE */}
            <div className="flex-1">
              <img
                src={missionImg}
                alt="Notre mission"
                className="w-full h-[520px] object-cover rounded-lg shadow-lg"
              />
            </div>

          </div>

        </Reveal>

      </div>

    </section>
  );
}