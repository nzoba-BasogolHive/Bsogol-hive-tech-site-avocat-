import { useParams } from "react-router-dom";
import { servicesData } from "../../data/servicesData";
import { useLanguage } from "../../context/LanguageContext";

const pageText = {
  fr: {
    expertise: "Expertise",
    method: "Méthode d’intervention",
    newsTitle: "Découvrez nos actualités",
    newsDesc:
      "Consultez nos analyses juridiques, conseils pratiques et dernières actualités liées à nos domaines d’expertise.",
    newsCta: "Nos actualités",
    notFound: "Service introuvable",
  },
  en: {
    expertise: "Expertise",
    method: "Intervention method",
    newsTitle: "Discover our latest news",
    newsDesc:
      "Explore our legal insights, practical advice, and latest news related to our areas of expertise.",
    newsCta: "Our news",
    notFound: "Service not found",
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const { lang } = useLanguage();

  const t = pageText[lang];
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#f7f4ef]">
        <h1 className="font-serif text-4xl text-[#0d1b2a]">{t.notFound}</h1>
      </section>
    );
  }

  const content = service[lang];

  return (
    <div className="bg-[#f7f4ef]">
      <section className="relative h-[680px] md:h-[760px] overflow-hidden">
        <img
          src={service.heroImage}
          alt={content.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#071827]/75" />

        <div className="relative z-10 h-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-center pt-24">
          <p className="text-[#c98f52] uppercase tracking-[0.35em] text-xs mb-5">
            {content.subtitle}
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-7 leading-none">
            {content.title}
          </h1>

          <p className="text-white/70 max-w-2xl text-lg md:text-xl leading-9">
            {content.description}
          </p>
        </div>
      </section>

      <section className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-12 py-20 md:py-28">
        <div className="grid lg:grid-cols-[1fr_360px] gap-14 xl:gap-20">
          <main>
            <div className="mb-14">
              <div className="flex items-center gap-4 mb-5">
                <span className="w-10 h-px bg-[#c98f52]" />
                <span className="text-[#c98f52] text-xs tracking-[0.3em] uppercase">
                  {t.expertise}
                </span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl text-[#0d1b2a] leading-tight max-w-4xl">
                {content.introduction}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
              {content.expertise.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#e8e3db] p-6 hover:border-[#c98f52] hover:shadow-lg transition"
                >
                  <span className="font-serif text-4xl text-[#c98f52]/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-4 text-[#0d1b2a] font-semibold">{item}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start mb-20">
              <img
                src={service.accentImage}
                alt={content.title}
                className="w-full h-[360px] object-cover"
              />

              <div className="space-y-8">
                {content.sections.map((section, i) => (
                  <div key={i} className="bg-white border border-[#e8e3db] p-7">
                    <h3 className="font-serif text-3xl text-[#0d1b2a] mb-4">
                      {section.title}
                    </h3>

                    <p className="text-[#555] leading-8">{section.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0d1b2a] p-7 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-px bg-[#c98f52]" />
                <h3 className="font-serif text-3xl text-white">
                  {t.method}
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {content.process.map((item) => (
                  <div key={item.step} className="border border-white/10 p-6">
                    <span className="font-serif text-5xl text-[#c98f52]/40">
                      {item.step}
                    </span>

                    <h4 className="font-serif text-xl text-white mt-5 mb-3">
                      {item.title}
                    </h4>

                    <p className="text-white/60 text-sm leading-7">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </main>

          <aside className="space-y-6 lg:sticky lg:top-32 h-fit">
            {content.stats.map((stat, i) => (
              <div key={i} className="bg-[#0d1b2a] text-center py-10 px-6">
                <p className="text-5xl font-serif text-[#c98f52] mb-3">
                  {stat.number}
                </p>

                <p className="text-white/70 uppercase tracking-[0.2em] text-xs">
                  {stat.label}
                </p>
              </div>
            ))}

            <div className="bg-white border border-[#e8e3db] p-7">
              <h3 className="font-serif text-2xl text-[#0d1b2a] mb-4">
                {t.newsTitle}
              </h3>

              <p className="text-[#666] leading-7 mb-6">{t.newsDesc}</p>

              <a
                href="/actualites"
                className="block text-center bg-[#c98f52] text-white py-4 text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#0d1b2a] transition"
              >
                {t.newsCta}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}