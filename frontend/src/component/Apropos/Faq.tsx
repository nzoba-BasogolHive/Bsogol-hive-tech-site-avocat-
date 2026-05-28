import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  fr: {
    label: "Questions Fréquentes",
    title: "Tout ce que vous",
    titleItalic: "devez savoir",
    subtitle: "Retrouvez les réponses aux questions les plus fréquemment posées par nos clients.",
    col1Title: "Services Juridiques",
    col2Title: "Cabinet & Procédures",
    col1: [
      {
        q: "Quels types de cas prenez-vous en charge ?",
        a: "Notre cabinet traite un large éventail de dossiers : droit des affaires, droit pénal, droit immobilier, droit du travail, droit fiscal et contentieux civil. Chaque dossier est examiné avec attention pour une prise en charge adaptée.",
      },
      {
        q: "Comment se déroule une première consultation ?",
        a: "La première consultation dure environ 45 minutes. Nous analysons votre situation, vous expliquons vos droits et vous proposons une stratégie juridique adaptée. Elle peut se faire en présentiel ou à distance.",
      },
      {
        q: "La première consultation est-elle gratuite ?",
        a: "Oui, nous offrons une première consultation gratuite de 30 minutes pour évaluer votre dossier et vous orienter vers la meilleure solution juridique.",
      },
      {
        q: "Quels sont vos honoraires ?",
        a: "Nos honoraires varient selon la complexité du dossier. Nous proposons des forfaits transparents, des honoraires à l'heure ou au résultat selon les cas. Un devis détaillé vous est remis dès la première consultation.",
      },
    ],
    col2: [
      {
        q: "Dans quels délais pouvez-vous intervenir en urgence ?",
        a: "Notre cabinet dispose d'une ligne d'urgence disponible 24h/24 et 7j/7. En cas de garde à vue, d'expulsion ou de litige urgent, un avocat peut intervenir dans les heures qui suivent votre appel.",
      },
      {
        q: "Comment se passe le suivi de mon dossier ?",
        a: "Vous disposez d'un accès à un espace client sécurisé pour suivre l'avancement de votre dossier en temps réel. Votre avocat référent vous tient informé à chaque étape clé de la procédure.",
      },
      {
        q: "Travaillez-vous avec des clients à l'international ?",
        a: "Oui, notre cabinet accompagne des clients en France, en Afrique et à l'international. Nous maîtrisons plusieurs juridictions et travaillons en français, anglais et espagnol.",
      },
      {
        q: "Proposez-vous des arrangements de paiement ?",
        a: "Absolument. Nous sommes conscients que les frais juridiques peuvent être conséquents. Nous proposons des facilités de paiement échelonné et étudions chaque situation individuellement pour trouver une solution adaptée.",
      },
    ],
  },
  en: {
    label: "Frequently Asked Questions",
    title: "Everything you",
    titleItalic: "need to know",
    subtitle: "Find answers to the most frequently asked questions by our clients.",
    col1Title: "Legal Services",
    col2Title: "Firm & Procedures",
    col1: [
      {
        q: "What types of cases do you handle?",
        a: "Our firm handles a wide range of cases: business law, criminal law, real estate law, labor law, tax law, and civil litigation. Each case is carefully reviewed for appropriate representation.",
      },
      {
        q: "How does an initial consultation work?",
        a: "The first consultation lasts approximately 45 minutes. We analyze your situation, explain your rights, and propose a tailored legal strategy. It can be done in person or remotely.",
      },
      {
        q: "Is the first consultation free?",
        a: "Yes, we offer a free 30-minute initial consultation to assess your case and guide you toward the best legal solution.",
      },
      {
        q: "What are your fees?",
        a: "Our fees vary depending on the complexity of the case. We offer transparent flat rates, hourly rates, or contingency fees depending on the situation. A detailed quote is provided at the first consultation.",
      },
    ],
    col2: [
      {
        q: "How quickly can you intervene in an emergency?",
        a: "Our firm has an emergency line available 24/7. In cases of custody, eviction, or urgent disputes, an attorney can intervene within hours of your call.",
      },
      {
        q: "How is my case monitored?",
        a: "You have access to a secure client portal to track the progress of your case in real time. Your dedicated attorney keeps you informed at every key stage of the process.",
      },
      {
        q: "Do you work with international clients?",
        a: "Yes, our firm assists clients in France, Africa, and internationally. We are familiar with multiple jurisdictions and work in French, English, and Spanish.",
      },
      {
        q: "Do you offer payment arrangements?",
        a: "Absolutely. We understand that legal fees can be significant. We offer installment payment plans and assess each situation individually to find a suitable solution.",
      },
    ],
  },
};

function AccordionItem({
  q,
  a,
  isOpen,
  onClick,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`border-b border-[#e8e3db] last:border-0 transition-all duration-300 ${
        isOpen ? "bg-[#f4eee8]" : "bg-white hover:bg-[#faf8f5]"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left group"
      >
        {/* Numéro + question */}
        <div className="flex items-center gap-4">
          <span
            className={`font-serif text-2xl leading-none transition-colors duration-300 min-w-[28px] ${
              isOpen ? "text-[#d1b986]" : "text-[#e8e3db] group-hover:text-[#d1b986]/40"
            }`}
          >
            {isOpen ? "—" : "+"}
          </span>
          <span
            className={`font-serif text-[17px] leading-snug transition-colors duration-300 ${
              isOpen ? "text-[#0d1b2a]" : "text-[#333] group-hover:text-[#0d1b2a]"
            }`}
          >
            {q}
          </span>
        </div>
      </button>

      {/* Réponse */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-7 pb-6 pl-[60px]">
          <div className="w-8 h-px bg-[#d1b986] mb-4" />
          <p className="text-[#666] text-[14px] leading-7">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const { lang } = useLanguage();
  const t = content[lang];

  const [open1, setOpen1] = useState<number | null>(0);
  const [open2, setOpen2] = useState<number | null>(1);

  return (
    <section className="relative bg-[#fbfaf8] py-24 md:py-36 overflow-hidden">

      {/* Radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(209,185,134,0.10),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(22,34,56,0.05),transparent_35%)] pointer-events-none" />

      {/* Ligne gauche dorée */}
      <div className="absolute left-0 top-20 bottom-20 w-[3px] bg-gradient-to-b from-transparent via-[#d1b986] to-transparent opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* ── HEADER ── */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="h-px w-10 bg-[#d1b986]" />
            <p className="text-xs tracking-[0.3em] font-semibold text-[#d1b986] uppercase">
              {t.label}
            </p>
            <span className="h-px w-10 bg-[#d1b986]" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#0d1b2a] leading-[1.1] mb-5">
            {t.title} <span className="italic text-[#d1b986]">{t.titleItalic}</span>
          </h2>
          <p className="text-[#888] text-base max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* ── DEUX COLONNES ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Colonne 1 */}
          <div>
            {/* Titre colonne */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#0d1b2a] flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d1b986" strokeWidth="2">
                  <path d="m14 13-8.5 8.5a2.12 2.12 0 0 1-3-3L11 10"/>
                  <path d="m16 16 6-6M8 8l6-6M9 7l8 8M21 11l-8-8"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl text-[#0d1b2a]">{t.col1Title}</h3>
              <span className="flex-1 h-px bg-[#e8e3db]" />
            </div>

            {/* Accordion */}
            <div className="border border-[#e8e3db] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
              {t.col1.map((item, i) => (
                <AccordionItem
                  key={i}
                  q={item.q}
                  a={item.a}
                  isOpen={open1 === i}
                  onClick={() => setOpen1(open1 === i ? null : i)}
                />
              ))}
            </div>
          </div>

          {/* Colonne 2 */}
          <div>
            {/* Titre colonne */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#0d1b2a] flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d1b986" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl text-[#0d1b2a]">{t.col2Title}</h3>
              <span className="flex-1 h-px bg-[#e8e3db]" />
            </div>

            {/* Accordion */}
            <div className="border border-[#e8e3db] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
              {t.col2.map((item, i) => (
                <AccordionItem
                  key={i}
                  q={item.q}
                  a={item.a}
                  isOpen={open2 === i}
                  onClick={() => setOpen2(open2 === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── BLOC BAS CTA ── */}
        <div className="mt-16 bg-[#0d1b2a] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(209,185,134,0.12),transparent_50%)] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#d1b986] via-[#d1b986]/60 to-transparent" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-8">
            <div>
              <p className="font-serif text-xl text-white mb-1">
                {lang === "fr"
                  ? "Vous ne trouvez pas votre réponse ?"
                  : "Can't find your answer?"}
              </p>
              <p className="text-white/50 text-sm">
                {lang === "fr"
                  ? "Contactez-nous directement, nous vous répondons sous 24h."
                  : "Contact us directly, we respond within 24 hours."}
              </p>
            </div>
            
             <a href="/contact"
              className="group flex items-center gap-4 bg-[#d1b986] text-[#0d1b2a] px-8 py-4 font-bold text-[11px] tracking-[0.28em] uppercase hover:bg-white transition-all duration-300 whitespace-nowrap"
            >
              {lang === "fr" ? "NOUS ÉCRIRE" : "CONTACT US"}
              <span className="h-px w-6 bg-current group-hover:w-10 transition-all duration-500" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}