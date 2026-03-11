import missionImg from "../assets/image (15).webp";
import Reveal from "./Reveal";

export default function PHILOSOPHIE() {
  return (
    <section className="w-full py-28 bg-white">
      <div className="max-w-[1300px] mx-auto px-6">

        <Reveal>

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* IMAGE GAUCHE */}
            <div>
              <img
                src={missionImg}
                alt="Notre philosophie"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* TEXTE DROITE */}
            <div>

              <h2
                className="text-4xl mb-6 text-[#110767]"
                style={{ fontFamily: "Garamond" }}
              >
                NOTRE PHILOSOPHIE
              </h2>

              <p
                className="text-gray-800 leading-relaxed mb-6"
                style={{ fontFamily: "Garamond", fontSize: "20px" }}
              >
                Nous offrons à nos clients une représentation juridique
                de haut niveau afin que chacun se sente soutenu et préparé
                face au système judiciaire familial. Nous comprenons l'impact
                des décisions auxquelles ils sont confrontés et nous nous efforçons
                de les aider à mieux appréhender leur situation.
              </p>

            </div>

          </div>

        </Reveal>

      </div>
    </section>
  );
}