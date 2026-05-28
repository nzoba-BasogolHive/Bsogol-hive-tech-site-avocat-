import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { articles } from "../data/articles";
import { useLanguage } from "../context/LanguageContext";

type ArticleDetailProps = {
  slugFromModal?: string;
};

export default function ArticleDetail({ slugFromModal }: ArticleDetailProps) {
  const params = useParams();
  const slug = slugFromModal ?? params.slug;
  const { lang } = useLanguage();

  const articleData = articles.find((item) => item.slug === slug);

  if (!articleData) {
    return (
      <section
        className="py-24 text-center"
        style={{ background: "#faf7f2", fontFamily: "'EB Garamond', serif" }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.3em",
            color: "#c57b35",
            marginBottom: 16,
          }}
        >
          ERREUR 404
        </p>
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            color: "#07124f",
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          Article introuvable
        </h1>
        <Link
          to="/actualites"
          style={{
            color: "#c57b35",
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderBottom: "1px solid #c57b35",
            paddingBottom: 2,
          }}
        >
          ← Retour aux actualités
        </Link>
      </section>
    );
  }

  const article = articleData.content[lang];

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap"
        rel="stylesheet"
      />

      <article
        style={{
          background: "#faf7f2",
          fontFamily: "'EB Garamond', serif",
          color: "#2a231a",
          width: "100%",
        }}
      >
        {/* ── HERO IMAGE ── */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div
            style={{
              height: "clamp(240px, 45vw, 520px)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={articleData.image}
              alt={article.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                filter: "brightness(0.72) saturate(0.85)",
              }}
            />

            {/* Gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(7,18,79,0.82) 0%, rgba(7,18,79,0.25) 55%, transparent 100%)",
              }}
            />

            {/* Ornement coin haut gauche */}
            <svg
              width="60"
              height="60"
              style={{ position: "absolute", top: 20, left: 20, opacity: 0.5 }}
              viewBox="0 0 60 60"
            >
              <path
                d="M0 0 L60 0 L60 4 L4 4 L4 60 L0 60 Z"
                fill="#c57b35"
              />
            </svg>

            {/* Catégorie + titre sur l'image */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "clamp(20px, 4vw, 48px)",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  background: "#c57b35",
                  color: "#fff",
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  fontFamily: "'EB Garamond', serif",
                  fontWeight: 600,
                  padding: "5px 14px",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                {article.categorie}
              </span>

              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(26px, 4.5vw, 58px)",
                  fontWeight: 300,
                  color: "#ffffff",
                  lineHeight: 1.15,
                  maxWidth: 780,
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                {article.title}
              </h1>
            </div>
          </div>
        </div>

        {/* ── META BAR ── */}
        <div
          style={{
            borderBottom: "1px solid #d6ccc0",
            background: "#f2ede4",
          }}
        >
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              padding: "14px clamp(20px, 5vw, 48px)",
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: "#6b5f52",
                  fontStyle: "italic",
                }}
              >
                <FaCalendarAlt
                  style={{ color: "#c57b35", fontSize: 11, flexShrink: 0 }}
                />
                {article.date}
              </span>

              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: "#6b5f52",
                  fontStyle: "italic",
                }}
              >
                <FaUser
                  style={{ color: "#c57b35", fontSize: 11, flexShrink: 0 }}
                />
                {article.auteur}
              </span>
            </div>

            <Link
              to="/actualites"
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                color: "#07124f",
                textDecoration: "none",
                textTransform: "uppercase",
                fontStyle: "normal",
                opacity: 0.7,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.opacity = "1")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.opacity = "0.7")
              }
            >
              ← Actualités
            </Link>
          </div>
        </div>

        {/* ── CORPS ── */}
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "clamp(32px, 6vw, 72px) clamp(20px, 5vw, 48px)",
          }}
        >
          {/* Trait décoratif */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 36,
            }}
          >
            <div style={{ width: 48, height: 1, background: "#c57b35" }} />
            <div
              style={{
                width: 6,
                height: 6,
                background: "#c57b35",
                transform: "rotate(45deg)",
              }}
            />
            <div style={{ flex: 1, height: 1, background: "#d6ccc0" }} />
          </div>

          {/* Citation */}
          <blockquote
            style={{
              borderLeft: "3px solid #c57b35",
              paddingLeft: "clamp(16px, 3vw, 28px)",
              margin: "0 0 52px 0",
              position: "relative",
            }}
          >
            {/* Guillemet décoratif */}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 80,
                color: "#c57b35",
                opacity: 0.18,
                lineHeight: 1,
                display: "block",
                marginBottom: -24,
                marginLeft: -4,
                fontWeight: 300,
                userSelect: "none",
              }}
            >
              "
            </span>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(18px, 2.2vw, 24px)",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#3f3228",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {article.citation}
            </p>
          </blockquote>

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {article.sections.map((section: { title: string; paragraphs: string[]; list?: string[] }, index: number) => (
              <section
                key={index}
                style={{
                  display: "grid",
                  gridTemplateColumns: "clamp(40px, 8vw, 80px) 1fr",
                  gap: "clamp(16px, 3vw, 36px)",
                  paddingBottom: "clamp(32px, 5vw, 56px)",
                  marginBottom: "clamp(32px, 5vw, 56px)",
                  borderBottom:
                    index < article.sections.length - 1
                      ? "1px solid #d6ccc0"
                      : "none",
                }}
              >
                {/* Numéro en marge */}
                <div
                  style={{
                    paddingTop: 6,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(28px, 4vw, 42px)",
                      fontWeight: 300,
                      color: "#c57b35",
                      lineHeight: 1,
                      opacity: 0.55,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div
                    style={{ width: 1, flex: 1, minHeight: 24, background: "#d6ccc0" }}
                  />
                </div>

                {/* Contenu */}
                <div>
                  <h2
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(20px, 2.8vw, 32px)",
                      fontWeight: 600,
                      color: "#07124f",
                      lineHeight: 1.25,
                      marginBottom: 20,
                      marginTop: 0,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {section.title}
                  </h2>

                  <div
                    style={{ display: "flex", flexDirection: "column", gap: 16 }}
                  >
                    {section.paragraphs.map((paragraph: string, i: number) => (
                      <p
                        key={i}
                        style={{
                          margin: 0,
                          fontSize: "clamp(15px, 1.6vw, 17px)",
                          lineHeight: 1.9,
                          color: "#3f3228",
                          textAlign: "justify",
                        }}
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.list && (
                      <ul
                        style={{
                          margin: "8px 0 0 0",
                          padding: 0,
                          listStyle: "none",
                          display: "flex",
                          flexDirection: "column",
                          gap: 10,
                        }}
                      >
                        {section.list.map((item: string, i: number) => (
                          <li
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 12,
                              fontSize: "clamp(14px, 1.5vw, 16px)",
                              lineHeight: 1.8,
                              color: "#3f3228",
                            }}
                          >
                            <span
                              style={{
                                width: 6,
                                height: 6,
                                background: "#c57b35",
                                transform: "rotate(45deg)",
                                flexShrink: 0,
                                marginTop: 9,
                              }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Pied de page de l'article */}
          <div
            style={{
              marginTop: 16,
              paddingTop: 36,
              borderTop: "1px solid #d6ccc0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: 14 }}
            >
              <div style={{ width: 32, height: 1, background: "#c57b35" }} />
              <div
                style={{
                  width: 5,
                  height: 5,
                  background: "#c57b35",
                  transform: "rotate(45deg)",
                }}
              />
              <div style={{ width: 32, height: 1, background: "#c57b35" }} />
            </div>

            <Link
              to="/actualites"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 24px",
                border: "1px solid #07124f",
                color: "#07124f",
                textDecoration: "none",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "'EB Garamond', serif",
                fontWeight: 600,
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#07124f";
                el.style.color = "#c57b35";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "transparent";
                el.style.color = "#07124f";
              }}
            >
              ← Toutes les actualités
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
