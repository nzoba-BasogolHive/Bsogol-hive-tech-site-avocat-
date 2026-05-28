import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const popularArticles = [
  {
    title: "Divorce et partage des biens",
    text: "Comprendre les règles juridiques lors d'une séparation.",
    category: "Droit civil",
    content: [
      "Lors d’un divorce, la question du partage des biens est souvent l’un des points les plus sensibles.",
      "Il est essentiel de distinguer les biens propres, les biens communs et les obligations financières de chaque époux.",
      "Un accompagnement juridique permet d’éviter les conflits et de protéger les intérêts de chaque partie.",
    ],
  },
  {
    title: "Fiscalité des entreprises",
    text: "Les obligations fiscales essentielles des sociétés.",
    category: "Droit fiscal",
    content: [
      "Les entreprises doivent respecter plusieurs obligations fiscales : déclarations, paiement des impôts, conservation des pièces comptables.",
      "Une mauvaise gestion fiscale peut entraîner des pénalités, des contrôles ou des redressements.",
      "Une stratégie fiscale claire permet d’anticiper les risques et d’assurer la conformité de l’entreprise.",
    ],
  },
  {
    title: "Procédure pénale",
    text: "Les droits de la défense en procédure pénale.",
    category: "Droit pénal",
    content: [
      "La procédure pénale encadre les droits des personnes poursuivies et les pouvoirs des autorités.",
      "Le droit à un avocat, le respect de la présomption d’innocence et l’accès au dossier sont des garanties fondamentales.",
      "Une défense bien préparée peut avoir un impact déterminant sur l’issue de la procédure.",
    ],
  },
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedArticle, setSelectedArticle] =
    useState<(typeof popularArticles)[number] | null>(null);

  const handleSubscribe = () => {
    if (email.trim() === "") {
      setMessage("Veuillez entrer votre adresse email");
      return;
    }

    setMessage("Merci pour votre inscription !");
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-[#f4eee8] rounded-bl-full opacity-50 pointer-events-none" />
      <div className="absolute left-0 top-20 bottom-20 w-[3px] bg-gradient-to-b from-transparent via-[#c98f52] to-transparent opacity-50" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-10 bg-[#c98f52]" />
            <p className="text-[#c98f52] text-xs tracking-[0.3em] uppercase font-medium">
              Sélection juridique
            </p>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-[#0d1b2a] leading-tight">
            Articles <span className="italic text-[#c98f52]">Populaires</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {popularArticles.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#faf8f5] border border-[#e8e3db] p-8 overflow-hidden hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c98f52] to-transparent" />

              <span className="font-serif text-6xl text-[#0d1b2a]/5 absolute top-5 right-6">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-[#c98f52] text-[10px] tracking-[0.25em] uppercase mb-4">
                {item.category}
              </p>

              <h3 className="font-serif text-2xl text-[#0d1b2a] leading-tight mb-4 group-hover:text-[#c98f52] transition-colors">
                {item.title}
              </h3>

              <p className="text-[#777] text-sm leading-7 mb-8">{item.text}</p>

              <button
                onClick={() => setSelectedArticle(item)}
                className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-[#0d1b2a]/40 group-hover:text-[#c98f52] transition-colors"
              >
                Lire plus
                <span className="h-px w-7 bg-current group-hover:w-12 transition-all duration-500" />
              </button>
            </div>
          ))}
        </div>

        <div className="relative bg-[#0d1b2a] text-white px-7 py-12 md:px-14 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,143,82,0.22),transparent_38%)]" />
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c98f52] to-transparent" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-[#c98f52] text-xs tracking-[0.3em] uppercase mb-4">
              Newsletter
            </p>

            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-5">
              Restez <span className="italic text-[#c98f52]">Informé</span>
            </h2>

            <p className="text-white/70 leading-8 mb-10">
              Inscrivez-vous pour recevoir nos dernières actualités juridiques
              et conseils pratiques directement dans votre boîte mail.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/10 border border-white/15 px-5 py-4 text-white placeholder-white/50 focus:outline-none focus:border-[#c98f52] transition"
              />

              <button
                onClick={handleSubscribe}
                className="bg-[#c98f52] text-white px-8 py-4 text-xs tracking-[0.25em] uppercase font-bold hover:bg-white hover:text-[#0d1b2a] transition"
              >
                S’inscrire
              </button>
            </div>

            {message && <p className="mt-6 text-sm text-[#c98f52]">{message}</p>}
          </div>
        </div>
      </div>

      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-[#0d1b2a]/70 backdrop-blur-sm flex items-center justify-center px-5">
          <div className="relative bg-[#faf8f5] max-w-2xl w-full border border-[#e8e3db] shadow-2xl p-8 md:p-10">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 text-[#0d1b2a]/50 hover:text-[#c98f52] transition"
            >
              <FaTimes />
            </button>

            <p className="text-[#c98f52] text-[10px] tracking-[0.3em] uppercase mb-4">
              {selectedArticle.category}
            </p>

            <h3 className="font-serif text-3xl md:text-4xl text-[#0d1b2a] leading-tight mb-6">
              {selectedArticle.title}
            </h3>

            <div className="w-12 h-px bg-[#c98f52] mb-7" />

            <div className="space-y-5 text-[#555] leading-8">
              {selectedArticle.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <button
              onClick={() => setSelectedArticle(null)}
              className="mt-8 bg-[#0d1b2a] text-white px-7 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-[#c98f52] transition"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
  );
}