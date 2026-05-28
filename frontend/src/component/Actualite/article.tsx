import { useState } from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import PageTransition from "../PageTransition";
import { Link } from "react-router-dom";
import { articles } from "../../data/articles";
import { useLanguage } from "../../context/LanguageContext";
import ArticleDetail from "../../pages/ArticleDetail";

const texts = {
  fr: {
    label: "Blog juridique",
    title: "Nos actualités récentes",
    allArticles: "Tous les articles",
    readArticle: "Lire l'article",
    close: "FERMER",
  },
  en: {
    label: "Legal blog",
    title: "Our latest news",
    allArticles: "All articles",
    readArticle: "Read article",
    close: "CLOSE",
  },
};

export default function ActualitePage() {
  const { lang } = useLanguage();
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const t = texts[lang];
  const articleData = articles[0];
  const article = articleData.content[lang];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap"
        rel="stylesheet"
      />

      <PageTransition>
        <section className="w-full bg-[#f7f4ef] py-24 md:py-32 relative overflow-hidden"
          style={{ fontFamily: "'EB Garamond', serif" }}
        >
          {/* Accent déco fond — identique au composant référence */}
          <div className="absolute top-0 right-0 w-[360px] h-[360px] bg-[#ede8e0] rounded-bl-full opacity-40 pointer-events-none" />
          <div className="absolute left-0 top-20 bottom-20 w-[3px] bg-gradient-to-b from-transparent via-[#c98f52] to-transparent opacity-40" />

          {/* ── WRAPPER LARGEUR IDENTIQUE AU RÉFÉRENCE ── */}
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10">

            {/* ── EN-TÊTE ── */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20 pb- md:pb-10 border-b border-[#0d1b2a]/10">

              <div>
                {/* Label ornemental */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-px bg-[#c98f52] block" />
                  <span
                    className="w-[5px] h-[5px] bg-[#c98f52] block flex-shrink-0"
                    style={{ transform: "rotate(45deg)" }}
                  />
                  <span
                    className="text-[#c98f52] text-[10px] tracking-[0.38em] uppercase font-semibold"
                    style={{ fontFamily: "'EB Garamond', serif" }}
                  >
                    {t.label}
                  </span>
                </div>

                <h2
                  className="text-[#0d1b2a] leading-[1.08] m-0"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(30px, 4.5vw, 54px)",
                    fontWeight: 300,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {t.title}
                </h2>
              </div>

              <Link
                to="/actualites"
                className="flex items-center gap-3 text-[#0d1b2a] hover:text-[#c98f52] text-[11px] tracking-[0.28em] uppercase font-bold no-underline transition-colors duration-300 group self-start md:self-auto"
                style={{ fontFamily: "'EB Garamond', serif" }}
              >
                {t.allArticles}
                <span className="h-px w-8 bg-current group-hover:w-14 transition-all duration-500 block" />
              </Link>
            </div>

            {/* ── CARD ARTICLE VEDETTE ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 shadow-[0_20px_64px_rgba(13,27,42,0.10)] group cursor-pointer overflow-hidden border border-[#0d1b2a]/10">

              {/* ── Panneau gauche — visuel ── */}
              <div className="relative overflow-hidden min-h-[300px] md:min-h-[420px] lg:min-h-0 lg:h-auto bg-[#0d1b2a]">

                {/* Image avec blend */}
                <img
                  src={articleData.image}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-[0.22] mix-blend-luminosity transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay dégradé */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(150deg, #0d1b2a 0%, rgba(13,27,42,0.85) 55%, rgba(201,143,82,0.22) 100%)",
                  }}
                />

                {/* Trait horizontal centré décoratif */}
                <div
                  className="absolute left-7 right-7 pointer-events-none"
                  style={{
                    top: "50%",
                    height: 1,
                    background: "linear-gradient(to right, rgba(201,143,82,0.35), rgba(201,143,82,0.12), transparent)",
                    transform: "translateY(-50%)",
                  }}
                />

                {/* Coins ornementaux SVG */}
                <svg
                  width="52" height="52"
                  className="absolute top-5 left-5 opacity-50"
                  viewBox="0 0 52 52"
                >
                  <path d="M0 0 L52 0 L52 2.5 L2.5 2.5 L2.5 52 L0 52 Z" fill="#c98f52" />
                </svg>
                <svg
                  width="52" height="52"
                  className="absolute bottom-5 right-5 opacity-50"
                  viewBox="0 0 52 52"
                >
                  <path d="M52 52 L0 52 L0 49.5 L49.5 49.5 L49.5 0 L52 0 Z" fill="#c98f52" />
                </svg>

                {/* Symbole § central */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span
                    className="select-none"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(90px, 14vw, 160px)",
                      color: "rgba(255,255,255,0.055)",
                      lineHeight: 1,
                      fontWeight: 300,
                    }}
                  >
                    §
                  </span>
                </div>

                {/* Numéro bas-gauche */}
                <div className="absolute bottom-6 left-6 flex items-end gap-3">
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 52,
                      fontWeight: 300,
                      color: "rgba(201,143,82,0.35)",
                      lineHeight: 1,
                    }}
                  >
                    01
                  </span>
                  <div className="w-9 h-px bg-[#c98f52] opacity-70 mb-3" />
                </div>

                {/* Badge catégorie haut-droite */}
                <div className="absolute top-6 right-6">
                  <span
                    className="text-[#0d1b2a] text-[9px] tracking-[0.3em] uppercase font-bold px-3 py-[5px]"
                    style={{
                      background: "#c98f52",
                      fontFamily: "'EB Garamond', serif",
                    }}
                  >
                    {article.categorie}
                  </span>
                </div>
              </div>

              {/* ── Panneau droit — contenu ── */}
              <div
                className="bg-white flex flex-col justify-center relative px-8 py-10 md:px-12 md:py-14 lg:px-14 lg:py-16"
              >
                {/* Filet doré haut */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: "linear-gradient(to right, #c98f52, transparent)" }}
                />

                {/* Meta */}
                <div className="flex flex-wrap gap-5 mb-5">
                  <span
                    className="flex items-center gap-2 text-[#6b6359] italic"
                    style={{ fontSize: 13 }}
                  >
                    <FaCalendarAlt className="text-[#c98f52]" style={{ fontSize: 10 }} />
                    {article.date}
                  </span>
                  <span
                    className="flex items-center gap-2 text-[#6b6359] italic"
                    style={{ fontSize: 13 }}
                  >
                    <FaUser className="text-[#c98f52]" style={{ fontSize: 10 }} />
                    {article.auteur}
                  </span>
                </div>

                {/* Titre */}
                <h1
                  className="text-[#0d1b2a] leading-[1.2] m-0 mb-5"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(22px, 3vw, 40px)",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {article.title}
                </h1>

                {/* Séparateur ornemental */}
                <div className="flex items-center gap-[10px] mb-6">
                  <div className="w-8 h-px bg-[#c98f52]" />
                  <div
                    className="w-1 h-1 bg-[#c98f52] flex-shrink-0"
                    style={{ transform: "rotate(45deg)" }}
                  />
                  <div className="w-3.5 h-px bg-[#c98f52]/40" />
                </div>

                {/* Citation */}
                <blockquote
                  className="m-0 mb-8 italic text-[#4a3f35] leading-[1.85]"
                  style={{
                    borderLeft: "2.5px solid #c98f52",
                    paddingLeft: 20,
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingRight: 12,
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(14px, 1.7vw, 18px)",
                    fontWeight: 400,
                    background: "rgba(201,143,82,0.04)",
                  }}
                >
                  {article.resume}
                </blockquote>

                {/* Bouton */}
                <button
                  type="button"
                  onClick={() => setSelectedSlug(articleData.slug)}
                  className="self-start flex items-center gap-4 text-[#0d1b2a] hover:bg-[#0d1b2a] hover:text-[#c98f52] transition-all duration-300 border border-[#0d1b2a] bg-transparent uppercase font-bold"
                  style={{
                    padding: "13px 32px",
                    fontSize: 10,
                    letterSpacing: "0.3em",
                    fontFamily: "'EB Garamond', serif",
                    cursor: "pointer",
                  }}
                >
                  {t.readArticle}
                  <span style={{ fontSize: 17, lineHeight: 1 }}>→</span>
                </button>
              </div>
            </div>

          </div>
        </section>
      </PageTransition>

      {/* ── MODAL ARTICLE DÉTAIL ── */}
      {selectedSlug && (
        <div
          className="fixed inset-0 z-[999999] overflow-y-auto"
          style={{
            background: "rgba(13,27,42,0.72)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedSlug(null);
          }}
        >
          <div className="min-h-screen px-3 py-4 md:px-6 md:py-12">
            <div className="max-w-[980px] mx-auto relative">

              {/* Bouton fermer sticky */}
              <div className="sticky top-4 z-20 flex justify-end mb-3">
                <button
                  type="button"
                  onClick={() => setSelectedSlug(null)}
                  className="flex items-center gap-[10px] bg-white text-[#0d1b2a] hover:bg-[#0d1b2a] hover:text-[#c98f52] transition-all duration-200 border border-[#0d1b2a]/15 uppercase font-bold shadow-[0_8px_32px_rgba(13,27,42,0.18)]"
                  style={{
                    padding: "10px 22px",
                    fontSize: 10,
                    letterSpacing: "0.28em",
                    fontFamily: "'EB Garamond', serif",
                    cursor: "pointer",
                  }}
                >
                  {t.close}
                  <span style={{ fontSize: 18, lineHeight: 1 }}>×</span>
                </button>
              </div>

              <ArticleDetail slugFromModal={selectedSlug} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
