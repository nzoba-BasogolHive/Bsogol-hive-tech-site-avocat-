import Reveal from "./Reveal";

export default function ProcessusCivil() {

const steps = [
{
number: "01",
title: "Prise de contact",
text: "Vous nous contactez pour exposer votre situation et obtenir un premier échange."
},
{
number: "02",
title: "Analyse juridique",
text: "Étude détaillée de votre dossier et des documents juridiques."
},
{
number: "03",
title: "Stratégie juridique",
text: "Définition d’une stratégie adaptée pour défendre vos intérêts."
},
{
number: "04",
title: "Accompagnement",
text: "Assistance dans les négociations ou représentation devant les juridictions civiles."
}
];

return (

  <section className="bg-[#1E1671] py-24 text-white">
    <div className="max-w-7xl mx-auto px-8">

```
  <p className="text-center uppercase tracking-widest text-gray-300 mb-4">
    Méthodologie
  </p>

  <h2 className="text-4xl font-bold text-center mb-16">
    Notre processus d'intervention
  </h2>

  <div className="grid md:grid-cols-4 gap-12 text-center">

    {steps.map((step, index) => (

      <Reveal key={index}>

        <div className="flex flex-col items-center">

          <div className="w-20 h-20 flex items-center justify-center border-4 border-red-500 rounded-full text-xl font-bold mb-6 hover:scale-110 transition">
            {step.number}
          </div>

          <h3 className="font-semibold mb-2">
            {step.title}
          </h3>

          <p className="text-sm text-gray-300 max-w-xs">
            {step.text}
          </p>

        </div>

      </Reveal>

    ))}

  </div>

</div>
```

  </section>
);
}