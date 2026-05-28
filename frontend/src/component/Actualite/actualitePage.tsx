import { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaPhone,
  FaChevronRight,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import PageTransition from "../PageTransition";
import { useLanguage } from "../../context/LanguageContext";
import { articles, blogTexts } from "../../data/blogData";
import type { Article, ArticleContent, Lang } from "../../data/blogData";
import { useLocation } from "react-router-dom";
const pageTexts = {
  fr: {
    all: "Tout voir",
    noArticle: "Aucun article trouvé.",
    resolvedCases: "Affaires résolues liées",
    search: "Rechercher",
    searchPlaceholder: "Rechercher un article…",
    categories: "Catégories",
    allArticles: "Tous les articles",
    recentPosts: "Articles récents",
    tags: "Tags",
    consultation: "Consultation gratuite",
    consultationDesc: "Parlez à un avocat dès aujourd'hui",
    call: "Nous appeler 24/7",
  },
  en: {
    all: "All",
    noArticle: "No articles found.",
    resolvedCases: "Related resolved cases",
    search: "Search",
    searchPlaceholder: "Search an article…",
    categories: "Categories",
    allArticles: "All articles",
    recentPosts: "Recent posts",
    tags: "Tags",
    consultation: "Get Free Advice",
    consultationDesc: "Speak to a lawyer today",
    call: "Call Us 24/7",
  },
};

const resolvedCases: Record<
  string,
  {
    fr: { title: string; outcome: string }[];
    en: { title: string; outcome: string }[];
  }
> = {
  "Droit pénal": {
    fr: [
      {
        title: "Défense d'un ressortissant expulsé illégalement",
        outcome: "Annulation de l'arrêté d'expulsion",
      },
      {
        title: "Recours contre une garde à vue abusive",
        outcome: "Indemnisation obtenue",
      },
    ],
    en: [
      {
        title: "Defence of an illegally deported national",
        outcome: "Deportation order annulled",
      },
      {
        title: "Appeal against unlawful police custody",
        outcome: "Compensation obtained",
      },
    ],
  },
  "Criminal law": { fr: [], en: [] },

  "Droit des affaires": {
    fr: [
      {
        title: "Redressement fiscal contesté pour une PME de Douala",
        outcome: "Réduction de 60 % du montant dû",
      },
      {
        title: "Litige contractuel entre associés",
        outcome: "Accord amiable signé",
      },
    ],
    en: [
      {
        title: "Tax reassessment challenged for a Douala SME",
        outcome: "Amount reduced by 60%",
      },
      {
        title: "Partnership contract dispute",
        outcome: "Amicable agreement signed",
      },
    ],
  },
  "Business law": { fr: [], en: [] },

  "Droit fiscal": {
    fr: [
      {
        title: "Contrôle fiscal de 3 ans annulé pour vice de forme",
        outcome: "Procédure annulée",
      },
      {
        title: "Optimisation fiscale pour un groupe immobilier",
        outcome: "Économie de 40 % d'impôts",
      },
    ],
    en: [
      {
        title: "3-year tax audit cancelled on procedural grounds",
        outcome: "Procedure cancelled",
      },
      {
        title: "Tax optimisation for a property group",
        outcome: "40% tax saving",
      },
    ],
  },
  "Tax law": { fr: [], en: [] },
};

function getCategories(lang: Lang): string[] {
  const cats = new Set(articles.map((a) => a.content[lang].categorie));
  return Array.from(cats);
}

export default function ActualitePage() {
  const { lang } = useLanguage() as { lang: Lang };
  const t = blogTexts[lang];
  const p = pageTexts[lang];
const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [search, setSearch] = useState("");


useEffect(() => {
  const selectedSlug = location.state?.selectedSlug;

  if (selectedSlug) {
    const foundArticle = articles.find(
      (article) => article.slug === selectedSlug
    );

    if (foundArticle) {
      setSelectedArticle(foundArticle);

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }

    window.history.replaceState({}, document.title);
  }
}, [location.state]);
     
const articlesPerPage = 4;
const [currentPage, setCurrentPage] = useState(1);
  const categories = getCategories(lang);
  const recentArticles = articles.slice(0, 3);

  const filtered = articles.filter((a) => {
    const c: ArticleContent = a.content[lang];

    const matchCat = activeCategory ? c.categorie === activeCategory : true;

    const matchSearch = search
      ? c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.resume.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchCat && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / articlesPerPage);

const paginatedArticles = filtered.slice(
  (currentPage - 1) * articlesPerPage,
  currentPage * articlesPerPage
);

useEffect(() => {
  setCurrentPage(1);
}, [activeCategory, search]);

  if (selectedArticle) {
    const c: ArticleContent = selectedArticle.content[lang];
    const cases = resolvedCases[c.categorie]?.[lang] ?? [];



    return (
      <PageTransition>
       <section className="bg-[#f7f4ef] min-h-screen pt-4 pb-10 md:pt-6 md:pb-20 font-serif">
          <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex items-center gap-3 text-[10px] tracking-[0.28em] uppercase text-[#c98f52] font-semibold mb-8 md:mb-12">
              <button
                onClick={() => setSelectedArticle(null)}
                className="hover:text-[#0d1b2a] transition"
              >
                {t.allArticles}
              </button>

              <FaChevronRight className="text-[8px] opacity-60" />

              <span className="text-[#0d1b2a]">{c.categorie}</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 xl:gap-14 items-start">
              <article className="flex-1 min-w-0 bg-white border border-[#e2dbd0] p-5 sm:p-8 lg:p-10">
                <span className="inline-block bg-[#0d1b2a] text-[#c98f52] text-[10px] tracking-[0.28em] uppercase font-bold px-4 py-2 mb-6">
                  {c.categorie}
                </span>

                <h1 className="font-serif text-[30px] sm:text-[42px] lg:text-[54px] leading-tight font-semibold text-[#0d1b2a] mb-6">
                  {c.title}
                </h1>

                <div className="flex flex-wrap gap-5 text-sm text-[#7b7168] mb-8 pb-8 border-b border-[#0d1b2a]/10 italic">
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-[#c98f52] text-xs" />
                    {c.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaUser className="text-[#c98f52] text-xs" />
                    {c.auteur}
                  </span>
                </div>

                <div className="relative h-[220px] sm:h-[340px] lg:h-[430px] overflow-hidden mb-8 bg-[#0d1b2a]">
                  <img
                    src={selectedArticle.image}
                    alt={c.title}
                    className="w-full h-full object-cover opacity-85"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/40 to-transparent" />
                </div>

                <blockquote className="border-l-[3px] border-[#c98f52] bg-[#c98f52]/5 pl-5 pr-4 py-4 italic text-[#4a3f35] text-base sm:text-lg leading-8 mb-10">
                  {c.citation}
                </blockquote>

                <div className="space-y-10">
                  {c.sections.map((section, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-[42px_1fr] sm:grid-cols-[64px_1fr] gap-4 sm:gap-7 pb-10 border-b border-[#0d1b2a]/10 last:border-0"
                    >
                      <div className="hidden sm:flex flex-col items-start gap-3 pt-1">
                        <span className="font-serif text-4xl text-[#c98f52]/60 leading-none">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <div className="w-px flex-1 min-h-8 bg-[#0d1b2a]/10" />
                      </div>

                      <div className="col-span-2 sm:col-span-1">
                        <h2 className="font-serif text-2xl sm:text-3xl text-[#0d1b2a] font-semibold mb-4">
                          {section.title}
                        </h2>

                        <div className="space-y-4 text-[#4a3f35] text-sm sm:text-base leading-8">
                          {section.paragraphs.map((paragraph, j) => (
                            <p key={j}>{paragraph}</p>
                          ))}

                          {section.list && (
                            <ul className="space-y-3 pt-2">
                              {section.list.map((item, k) => (
                                <li key={k} className="flex gap-3">
                                  <span className="mt-3 h-1.5 w-1.5 rotate-45 bg-[#c98f52] shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {cases.length > 0 && (
                  <div className="mt-12 bg-[#0d1b2a] p-6 sm:p-8">
                    <h2 className="font-serif text-xl sm:text-2xl text-white font-semibold mb-6 flex items-center gap-4">
                      <span className="w-8 h-px bg-[#c98f52]" />
                      {p.resolvedCases}
                    </h2>

                    <div className="space-y-3">
                      {cases.map((cas, i) => (
                        <div
                          key={i}
                          className="border border-white/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                        >
                          <p className="text-white/75 text-sm leading-6">
                            {cas.title}
                          </p>

                          <span className="w-fit bg-[#c98f52]/15 text-[#c98f52] text-xs px-3 py-1 font-semibold tracking-widest">
                            ✓ {cas.outcome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="mt-10 inline-flex items-center gap-3 border border-[#0d1b2a] px-6 py-3 text-[10px] tracking-[0.28em] uppercase font-bold text-[#0d1b2a] hover:bg-[#0d1b2a] hover:text-[#c98f52] transition"
                >
                  <FaTimes className="text-[#c98f52]" />
                  {t.closeArticle}
                </button>
              </article>

              <BlogSidebar
                lang={lang}
                labels={p}
                recentArticles={recentArticles}
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={(cat) => {
                  setActiveCategory(cat);
                  setSelectedArticle(null);
                }}
                onSelectArticle={setSelectedArticle}
              />
            </div>
          </div>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="relative bg-[#f7f4ef] min-h-screen py-10 md:py-20 font-serif overflow-hidden">
        <div className="absolute top-0 right-0 w-[280px] md:w-[420px] h-[280px] md:h-[420px] bg-[#ede8e0] rounded-bl-full opacity-40 pointer-events-none" />

        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14 pb-8 border-b border-[#0d1b2a]/10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-9 h-px bg-[#c98f52]" />
                <span className="w-1.5 h-1.5 rotate-45 bg-[#c98f52]" />

                <span className="text-[#c98f52] text-[10px] tracking-[0.38em] uppercase font-semibold">
                  {t.label}
                </span>
              </div>

              <h2 className="font-serif text-[34px] sm:text-[46px] lg:text-[58px] leading-tight text-[#0d1b2a] font-semibold">
                {t.title}
              </h2>
            </div>

            {activeCategory && (
              <button
                onClick={() => setActiveCategory(null)}
                className="w-fit inline-flex items-center gap-2 border border-[#c98f52] text-[#c98f52] px-4 py-2 text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#c98f52] hover:text-white transition"
              >
                <FaTimes className="text-[9px]" />
                {p.all}
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-8 lg:hidden">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setActiveCategory(activeCategory === cat ? null : cat)
                }
                className={`text-[10px] tracking-[0.18em] uppercase px-3 py-2 border font-semibold transition ${
                  activeCategory === cat
                    ? "bg-[#0d1b2a] text-[#c98f52] border-[#0d1b2a]"
                    : "text-[#4a3f35] border-[#0d1b2a]/20 hover:text-[#c98f52] hover:border-[#c98f52]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-10 xl:gap-14 items-start">
            <div className="flex-1 min-w-0 w-full">
              {filtered.length === 0 ? (
                <p className="text-[#9a8f82] italic py-10">{p.noArticle}</p>
              ) : (
                <div className="flex flex-col">
                  {paginatedArticles.map((article, idx) => {
                    const c = article.content[lang];
                    const isFeatured = idx === 0 && !activeCategory && !search;

                    return isFeatured ? (
                      <ArticleFeatured
                        key={article.slug}
                        article={article}
                        c={c}
                        t={t}
                        onSelect={setSelectedArticle}
                      />
                    ) : (
                      <ArticleRow
                        key={article.slug}
                        article={article}
                        c={c}
                        t={t}
                        onSelect={setSelectedArticle}
                      />
                    );
                  })}
                </div>
              )}

              {totalPages > 1 && (
  <div className="flex items-center gap-2 mt-12 pt-8 border-t border-[#0d1b2a]/10">
    <button
      type="button"
      disabled={currentPage === 1}
      onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
      className="w-10 h-10 flex items-center justify-center text-sm font-bold border border-[#0d1b2a]/15 text-[#4a3f35] hover:text-[#c98f52] hover:border-[#c98f52] transition disabled:opacity-30 disabled:cursor-not-allowed"
    >
      ‹
    </button>

    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <button
        key={page}
        type="button"
        onClick={() => setCurrentPage(page)}
        className={`w-10 h-10 flex items-center justify-center text-sm font-bold border transition ${
          currentPage === page
            ? "bg-[#c98f52] text-white border-[#c98f52]"
            : "text-[#4a3f35] border-[#0d1b2a]/15 hover:text-[#c98f52] hover:border-[#c98f52]"
        }`}
      >
        {page}
      </button>
    ))}

    <button
      type="button"
      disabled={currentPage === totalPages}
      onClick={() =>
        setCurrentPage((page) => Math.min(page + 1, totalPages))
      }
      className="w-10 h-10 flex items-center justify-center text-sm font-bold border border-[#0d1b2a]/15 text-[#4a3f35] hover:text-[#c98f52] hover:border-[#c98f52] transition disabled:opacity-30 disabled:cursor-not-allowed"
    >
      ›
    </button>
  </div>
)}
            </div>

            <BlogSidebar
              lang={lang}
              labels={p}
              recentArticles={recentArticles}
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              onSelectArticle={setSelectedArticle}
              search={search}
              setSearch={setSearch}
            />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function ArticleFeatured({
  article,
  c,
  t,
  onSelect,
}: {
  article: Article;
  c: ArticleContent;
  t: (typeof blogTexts)["fr"];
  onSelect: (a: Article) => void;
}) {
  return (
    <div
      onClick={() => onSelect(article)}
      className="grid grid-cols-1 xl:grid-cols-[minmax(420px,0.95fr)_1fr] bg-white border border-[#0d1b2a]/10 shadow-[0_12px_48px_rgba(13,27,42,0.07)] overflow-hidden cursor-pointer group"
    >
      <div className="relative min-h-[260px] sm:min-h-[340px] xl:min-h-[430px] bg-[#0d1b2a] overflow-hidden">
        <img
          src={article.image}
          alt={c.title}
          className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a]/40 to-transparent" />

        <span className="absolute top-5 left-5 bg-[#0d1b2a] text-[#c98f52] text-[10px] tracking-[0.22em] uppercase font-bold px-4 py-2">
          {c.categorie}
        </span>

        <span className="hidden sm:block absolute bottom-5 right-5 font-serif text-7xl text-[#c98f52]/30 leading-none">
          01
        </span>
      </div>

      <div className="relative p-6 sm:p-9 lg:p-12 flex flex-col justify-center">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c98f52] to-transparent" />

        <div className="flex flex-wrap gap-4 text-xs text-[#7b7168] italic mb-5">
          <span className="flex items-center gap-2">
            <FaCalendarAlt className="text-[#c98f52]" />
            {c.date}
          </span>

          <span className="hidden sm:inline-block w-1 h-1 bg-[#c98f52] rounded-full self-center" />

          <span className="flex items-center gap-2">
            <FaUser className="text-[#c98f52]" />
            {c.auteur}
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0d1b2a] font-semibold leading-tight mb-5 group-hover:text-[#c98f52] transition">
          {c.title}
        </h3>

        <div className="flex items-center gap-2 mb-5">
          <span className="w-7 h-px bg-[#c98f52]" />
          <span className="w-1 h-1 bg-[#c98f52] rotate-45" />
        </div>

        <blockquote className="border-l-2 border-[#c98f52] bg-[#c98f52]/5 pl-4 pr-3 py-3 italic text-[#4a3f35] text-sm sm:text-base leading-8 mb-7">
          {c.citation}
        </blockquote>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(article);
          }}
          className="w-fit inline-flex items-center gap-3 border border-[#0d1b2a] px-6 py-3 text-[10px] tracking-[0.28em] uppercase font-bold text-[#0d1b2a] hover:bg-[#0d1b2a] hover:text-[#c98f52] transition"
        >
          {t.readArticle}
          <span className="text-base">→</span>
        </button>
      </div>
    </div>
  );
}

function ArticleRow({
  article,
  c,
  t,
  onSelect,
}: {
  article: Article;
  c: ArticleContent;
  t: (typeof blogTexts)["fr"];
  onSelect: (a: Article) => void;
}) {
  return (
    <div
      onClick={() => onSelect(article)}
      className="grid grid-cols-1 sm:grid-cols-[180px_1fr] xl:grid-cols-[220px_1fr] bg-white border-x border-t border-[#0d1b2a]/10 overflow-hidden cursor-pointer hover:shadow-[0_8px_32px_rgba(13,27,42,0.08)] transition group"
    >
      <div className="hidden sm:block relative min-h-[160px] bg-[#0d1b2a] overflow-hidden">
        <img
          src={article.image}
          alt={c.title}
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-700"
        />
      </div>

      <div className="relative p-5 sm:p-7 border-l border-[#0d1b2a]/10">
        <span className="flex items-center gap-2 text-[#c98f52] text-[10px] tracking-[0.2em] uppercase font-semibold mb-3">
          <FaTag className="text-[9px]" />
          {c.categorie}
        </span>

        <h3 className="font-serif text-xl sm:text-2xl text-[#0d1b2a] font-semibold leading-snug mb-3 group-hover:text-[#c98f52] transition">
          {c.title}
        </h3>

        <p className="text-[#4a3f35] text-sm leading-7 mb-5 line-clamp-2">
          {c.resume}
        </p>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex gap-4 text-xs text-[#9a8f82] italic">
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#c98f52]" />
              {c.date}
            </span>

            <span className="hidden md:flex items-center gap-2">
              <FaUser className="text-[#c98f52]" />
              {c.auteur}
            </span>
          </div>

          <span className="text-[10px] tracking-[0.2em] uppercase text-[#0d1b2a] font-bold">
            {t.readArticle}{" "}
            <span className="text-[#c98f52] text-sm">→</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function BlogSidebar({
  lang,
  labels,
  recentArticles,
  categories,
  activeCategory,
  setActiveCategory,
  onSelectArticle,
  search,
  setSearch,
}: {
  lang: Lang;
  labels: (typeof pageTexts)["fr"];
  recentArticles: Article[];
  categories: string[];
  activeCategory: string | null;
  setActiveCategory: (c: string | null) => void;
  onSelectArticle: (a: Article) => void;
  search?: string;
  setSearch?: (s: string) => void;
}) {
  return (
    <aside className="hidden lg:flex w-[300px] xl:w-[340px] shrink-0 flex-col gap-5">
      {setSearch && (
        <SidebarBox title={labels.search}>
          <div className="flex border border-[#0d1b2a]/15 overflow-hidden">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={labels.searchPlaceholder}
              className="flex-1 min-w-0 px-3 py-3 text-sm text-[#0d1b2a] bg-transparent outline-none"
            />

            <div className="bg-[#c98f52] px-4 flex items-center">
              <FaSearch className="text-white text-xs" />
            </div>
          </div>
        </SidebarBox>
      )}

      <SidebarBox title={labels.categories}>
        <ul>
          {[null, ...categories].map((cat, i) => {
            const label = cat ?? labels.allArticles;
            const isActive = cat === activeCategory;

            return (
              <li key={i}>
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full flex items-center gap-3 px-3 py-3 text-sm text-left border-b border-[#0d1b2a]/5 transition ${
                    isActive
                      ? "text-[#c98f52] bg-[#c98f52]/5 font-semibold"
                      : "text-[#4a3f35] hover:text-[#c98f52] hover:bg-[#c98f52]/5"
                  }`}
                >
                  <FaChevronRight className="text-[#c98f52] text-[8px] shrink-0" />
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </SidebarBox>

      <SidebarBox title={labels.recentPosts}>
        <div className="flex flex-col gap-4">
          {recentArticles.map((a) => {
            const c = a.content[lang];

            return (
              <button
                key={a.slug}
                onClick={() => onSelectArticle(a)}
                className="flex gap-3 text-left group"
              >
                <div className="w-16 h-14 shrink-0 overflow-hidden bg-[#0d1b2a]">
                  <img
                    src={a.image}
                    alt={c.title}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div>
                  <p className="font-serif text-sm font-semibold text-[#0d1b2a] leading-snug line-clamp-2 group-hover:text-[#c98f52] transition">
                    {c.title}
                  </p>

                  <p className="text-xs text-[#c98f52] mt-1 italic">
                    {c.date}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </SidebarBox>

      <SidebarBox title={labels.tags}>
        <div className="flex flex-wrap gap-2">
          {[
            "Fiscalité",
            "Contrat",
            "Migration",
            "Immobilier",
            "Pénal",
            "PME",
            "Audit",
            "Avocat",
            "Douala",
          ].map((tag) => (
            <span
              key={tag}
              className="text-[11px] border border-[#0d1b2a]/15 text-[#4a3f35] px-3 py-1.5 hover:border-[#c98f52] hover:text-[#c98f52] cursor-pointer transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </SidebarBox>

      <div className="bg-[#0d1b2a] p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#c98f52] to-transparent" />

        <div className="font-serif text-5xl text-[#c98f52] mb-4">⚖</div>

        <p className="font-serif text-xl font-semibold text-white mb-3">
          {labels.consultation}
        </p>

        <p className="text-white/55 text-xs mb-6 italic">
          {labels.consultationDesc}
        </p>

        <a
          href="tel:+237600000000"
          className="flex items-center justify-center gap-2 bg-[#c98f52] text-[#0d1b2a] px-5 py-3 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-[#b07d42] transition"
        >
          <FaPhone className="text-xs" />
          {labels.call}
        </a>
      </div>
    </aside>
  );
}

function SidebarBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-[#0d1b2a]/10 p-6 relative">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c98f52] to-transparent" />

      <h3 className="font-serif text-xl font-semibold text-[#0d1b2a] mb-5">
        {title}
      </h3>

      {children}
    </div>
  );
}