import Reveal from "../Reveal";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { articles } from "../../data/blogData";

const text = {
  fr: {
    label: "Actualités",
    title1: "Actualités",
    title2: "Récentes",
    viewAll: "Voir tout",
    featured: "À la Une",
    readMore: "En savoir plus",
    separator: "Sujets d'actualité en matière d'aide juridique",
    read: "Lire",
  },
  en: {
    label: "News",
    title1: "Recent",
    title2: "Updates",
    viewAll: "View all",
    featured: "Featured",
    readMore: "Read more",
    separator: "Trending legal aid topics",
    read: "Read",
  },
};

export default function ActualitesAccueil() {
  const { lang } = useLanguage();
  const t = text[lang];

  const featuredArticle = articles[0];
  const featured = featuredArticle.content[lang];

  const latestArticles = articles.slice(1, 5);

  return (
    <section className="w-full bg-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[280px] md:w-[420px] h-[280px] md:h-[420px] bg-[#f4eee8] rounded-bl-full opacity-40 pointer-events-none" />

      <div className="absolute left-0 top-20 bottom-20 w-[3px] bg-gradient-to-b from-transparent via-[#c98f52] to-transparent opacity-50" />

      <div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-10 bg-[#c98f52]" />

                <p className="text-[#c98f52] text-xs tracking-[0.3em] uppercase font-medium">
                  {t.label}
                </p>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-[58px] text-[#0d1b2a] leading-[1.08]">
                {t.title1}{" "}
                <span className="italic text-[#c98f52]">{t.title2}</span>
              </h2>
            </div>

            <Link
              to="/actualites"
              className="flex items-center gap-3 text-[#0d1b2a]/50 hover:text-[#c98f52] text-sm tracking-[0.2em] uppercase transition-all duration-300 group self-start md:self-auto"
            >
              {t.viewAll}
              <span className="h-px w-8 bg-current group-hover:w-14 transition-all duration-500" />
            </Link>
          </div>

          <Link
            to="/actualites"
            state={{ selectedSlug: featuredArticle.slug }}
            className="grid grid-cols-1 lg:grid-cols-2 mb-16 md:mb-20 shadow-[0_8px_40px_rgba(0,0,0,0.08)] group cursor-pointer lg:h-[460px] overflow-hidden"
          >
            <div className="relative overflow-hidden h-[300px] md:h-[420px] lg:h-full">
              <img
                src={featuredArticle.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/40 to-transparent" />

              <div className="absolute top-6 left-6">
                <span className="bg-[#c98f52] text-white text-[10px] tracking-[0.2em] uppercase px-4 py-2 font-medium">
                  {t.featured}
                </span>
              </div>
            </div>

            <div className="bg-[#faf8f5] p-6 sm:p-10 md:p-14 flex flex-col justify-center relative border border-[#e8e3db] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c98f52] to-transparent" />

              <p className="text-[10px] tracking-[0.3em] text-[#c98f52] uppercase mb-4 font-medium">
                {featured.date} — {featured.categorie}
              </p>

              <h3 className="font-serif text-3xl md:text-[40px] text-[#0d1b2a] leading-[1.15] mb-5">
                {featured.title}
              </h3>

              <div className="w-12 h-px bg-[#c98f52] mb-6" />

              <p className="text-[#777] text-base leading-relaxed mb-10">
                {featured.resume}
              </p>

              <span className="flex items-center gap-4 text-[11px] tracking-[0.25em] text-[#0d1b2a] uppercase font-bold group/btn self-start">
                {t.readMore}
                <span className="h-px w-8 bg-[#c98f52] group-hover/btn:w-16 transition-all duration-500" />
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-6 mb-12 md:mb-16">
            <span className="h-px flex-1 bg-[#e8e3db]" />

            <p className="text-[#aaa] text-[10px] sm:text-xs tracking-[0.18em] md:tracking-[0.25em] uppercase whitespace-nowrap">
              {t.separator}
            </p>

            <span className="h-px flex-1 bg-[#e8e3db]" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {latestArticles.map((article, i) => {
              const item = article.content[lang];

              return (
                <Link
                  key={article.slug}
                  to="/actualites"
                  state={{ selectedSlug: article.slug }}
                  className="group/card cursor-pointer"
                >
                  <div className="relative mx-auto mb-5 w-fit">
                    <div className="absolute -inset-2 rounded-full border border-[#c98f52]/0 group-hover/card:border-[#c98f52]/60 transition-all duration-500" />
                    <div className="absolute -inset-4 rounded-full border border-dashed border-[#c98f52]/0 group-hover/card:border-[#c98f52]/20 transition-all duration-700" />

                    <img
                      src={article.image}
                      alt={item.title}
                      className="w-[115px] h-[115px] sm:w-[130px] sm:h-[130px] md:w-[160px] md:h-[160px] object-cover rounded-full transition-transform duration-500 group-hover/card:scale-105"
                    />

                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#c98f52] flex items-center justify-center shadow-md">
                      <span className="text-white text-[11px] font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <p className="text-center text-[#c98f52] text-[10px] tracking-[0.2em] uppercase mb-2">
                    {item.date}
                  </p>

                  <h4 className="font-serif text-center text-[#0d1b2a] text-base md:text-lg group-hover/card:text-[#c98f52] transition-colors duration-300 leading-tight mb-3">
                    {item.title}
                  </h4>

                  <div className="flex justify-center">
                    <span className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-[#0d1b2a]/30 uppercase group-hover/card:text-[#c98f52] transition-colors duration-300">
                      {t.read}
                      <span className="h-px w-4 bg-current group-hover/card:w-8 transition-all duration-500" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}