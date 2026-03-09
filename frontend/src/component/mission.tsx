import missionImage from "../assets/mission-avocat.webp";

export default function Mission() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">

      {/* décor rouge */}
      <div className="absolute right-20 bottom-10 grid grid-cols-4 gap-4 rotate-12 opacity-90">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-10 h-[3px] bg-[#9f1d1d]"></div>
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">

        {/* IMAGE */}
        <div className="shadow-xl overflow-hidden">
          <img
            src={missionImage}
            alt="Notre mission"
            className="w-full h-[520px] object-cover"
          />
        </div>

        {/* TEXTE */}
        <div>

          <h2
            className="text-4xl font-bold mb-6"
            style={{ fontFamily: "Garamond" }}
          >
            NOTRE MISSION
          </h2>
<div className="w-20 h-[2px] bg-[#9f1d1d] mb-6"></div>
          <h3
            className="text-xl font-semibold mb-6"
            style={{ fontFamily: "Garamond" }}
          >
            La mission de justice a tout prix
          </h3>

          <p className="text-gray-700 leading-8 mb-6">
            Nous offrons à nos clients une représentation juridique de haut niveau
            afin que chacun se sente soutenu et préparé face au système judiciaire familial.
          </p>

          <p className="text-gray-700 leading-8 mb-6">
            Nous comprenons l'impact des décisions auxquelles ils sont confrontés
            et nous nous efforçons de les aider à mieux appréhender leur situation
            en droit familial de Caroline du Nord.
          </p>

          <p className="text-gray-700 leading-8">
            Nous expliquons comment les lois familiales de cet État s'appliquent
            à eux et à leur famille afin qu'ils puissent prendre des décisions éclairées.
          </p>

        </div>

      </div>

    </section>
  );
}