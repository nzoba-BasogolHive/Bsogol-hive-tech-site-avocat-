import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, FolderOpen, CalendarClock, Users, Calendar,
  Bell, UserCog, BarChart2, LogOut, Search, X, Check, Pencil,
  Trash2, Plus, ChevronLeft, ChevronRight, Scale, Paperclip,
  Image, FileText, Phone, Globe, Eye, EyeOff, Lock, ShieldCheck,
  TrendingUp, Award, Briefcase, Clock, CheckCircle, AlertCircle,
  BookOpen, Building2, User as UserIcon, Mail, MapPin,
  Hash, ChevronDown,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface PieceJointe {
  nom: string;
  type: "image" | "pdf" | "autre";
  url: string;
}

interface Dossier {
  id: string;
  client: string;
  tel: string;
  titre: string;
  date: string;
  branche: string;
  avocat: string;
  statut: string;
  piecesJointes?: PieceJointe[];
}

interface Rdv {
  id: string;
  client: string;
  indicatif: string;
  tel: string;
  pays: string;
  date: string;
  heure: string;
  motif: string;
  avocat: string;
  statut: string;
}

interface User {
  id: string;
  prenom: string;
  nom: string;
  email: string;
  indicatif: string;
  tel: string;
  pays: string;
  role: string;
  specialite: string;
  adresse: string;
  barreau: string;
  color: string;
  mdp: string;
  avocat?: string;
  isTitulaire?: boolean;
}

interface Notif {
  id: string;
  txt: string;
  time: string;
  type: "success" | "info";
}

interface Toast {
  id: number;
  msg: string;
  type: "success" | "info";
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

type PageId =
  | "login"
  | "dashboard"
  | "dossiers"
  | "rdv"
  | "clients"
  | "calendrier"
  | "notifications"
  | "utilisateurs"
  | "statistiques"
  | "profil";

// ─── Data ─────────────────────────────────────────────────────────────────────
const COLORS: string[] = ["#1e3a5f","#2d4a6b","#374151","#1f4e3d","#4a1942","#1a3a4a"];

const BRANCHES: string[] = [
  "Droit du travail","Droit pénal","Droit des sociétés","Droit de la famille",
  "Droit immobilier","Droit fiscal","Droit civil",
];

const STATUTS_DOS: string[] = ["En cours","En attente","Plaidoirie","Urgent","Gagné","Perdu","Classé"];
const ROLES: string[] = ["Avocat","Secrétaire","Stagiaire","Associé"];

const PAYS_INDICATIFS: { pays: string; indicatif: string }[] = [
  { pays: "Cameroun", indicatif: "+237" },
  { pays: "France", indicatif: "+33" },
  { pays: "Côte d'Ivoire", indicatif: "+225" },
  { pays: "Sénégal", indicatif: "+221" },
  { pays: "Gabon", indicatif: "+241" },
  { pays: "Congo", indicatif: "+242" },
  { pays: "Belgique", indicatif: "+32" },
  { pays: "Canada", indicatif: "+1" },
  { pays: "USA", indicatif: "+1" },
  { pays: "Nigeria", indicatif: "+234" },
  { pays: "Ghana", indicatif: "+233" },
  { pays: "Tchad", indicatif: "+235" },
];

const initDossiers: Dossier[] = [
  { id:"DOS-001", client:"Kofi Atta", tel:"6 71 22 33", titre:"Litige contrat de travail", date:"2024-01-10", branche:"Droit du travail", avocat:"Maître Adjobi Martial", statut:"En cours", piecesJointes:[] },
  { id:"DOS-002", client:"SARL Lumière", tel:"2 22 45 67", titre:"Assemblée générale litiges", date:"2024-01-22", branche:"Droit des sociétés", avocat:"Maître Adjobi Martial", statut:"Plaidoirie", piecesJointes:[] },
  { id:"DOS-003", client:"Amina Diallo", tel:"6 90 12 34", titre:"Garde d'enfants divorce", date:"2024-02-05", branche:"Droit de la famille", avocat:"Maître Kamga Sylvie", statut:"Gagné", piecesJointes:[] },
  { id:"DOS-004", client:"Bernard Tchoua", tel:"6 55 43 21", titre:"Détournement de fonds", date:"2024-02-18", branche:"Droit pénal", avocat:"Maître Adjobi Martial", statut:"Urgent", piecesJointes:[] },
  { id:"DOS-005", client:"Mme Nguyen", tel:"6 44 55 66", titre:"Acquisition immeuble", date:"2024-03-01", branche:"Droit immobilier", avocat:"Maître Ondoua Paul", statut:"En attente", piecesJointes:[] },
];

const initRdvs: Rdv[] = [
  { id:"RDV-001", client:"Kofi Atta", indicatif:"+237", tel:"6 71 22 33", pays:"Cameroun", date:"2026-05-11", heure:"09:00", motif:"Audience tribunal — DOS-001", avocat:"Maître Adjobi Martial", statut:"Confirmé" },
  { id:"RDV-002", client:"Amina Diallo", indicatif:"+237", tel:"6 90 12 34", pays:"Cameroun", date:"2026-05-11", heure:"14:30", motif:"Consultation droit famille", avocat:"Maître Kamga Sylvie", statut:"Confirmé" },
  { id:"RDV-003", client:"SARL Lumière", indicatif:"+237", tel:"2 22 45 67", pays:"Cameroun", date:"2026-05-12", heure:"10:00", motif:"Bilan dossier sociétés", avocat:"Maître Adjobi Martial", statut:"En attente" },
  { id:"RDV-004", client:"Mme Nguyen", indicatif:"+237", tel:"6 44 55 66", pays:"Cameroun", date:"2026-05-14", heure:"11:00", motif:"Signature compromis de vente", avocat:"Maître Ondoua Paul", statut:"En attente" },
  { id:"RDV-005", client:"Bernard Tchoua", indicatif:"+237", tel:"6 55 43 21", pays:"Cameroun", date:"2026-05-20", heure:"09:30", motif:"Préparation plaidoirie", avocat:"Maître Adjobi Martial", statut:"En attente" },
];

const initUsers: User[] = [
  { id:"USR-001", prenom:"Martial", nom:"Adjobi", email:"m.adjobi@lexoffice.cm", indicatif:"+237", tel:"6 91 23 45 67", pays:"Cameroun", role:"Avocat", specialite:"Droit pénal, Droit du travail", adresse:"Av. Kennedy, Yaoundé", barreau:"1427", color:"#1e3a5f", mdp:"password", isTitulaire:true },
  { id:"USR-002", prenom:"Sylvie", nom:"Kamga", email:"s.kamga@lexoffice.cm", indicatif:"+237", tel:"6 80 11 22", pays:"Cameroun", role:"Avocat", specialite:"Droit de la famille", adresse:"Rue Nachtigal, Yaoundé", barreau:"1389", color:"#2d4a6b", mdp:"password123", avocat:"Maître Adjobi Martial" },
  { id:"USR-003", prenom:"Paul", nom:"Ondoua", email:"p.ondoua@lexoffice.cm", indicatif:"+237", tel:"6 70 33 44", pays:"Cameroun", role:"Secrétaire", specialite:"—", adresse:"Bvd de la Réunification", barreau:"—", color:"#374151", mdp:"secretpass", avocat:"Maître Adjobi Martial" },
];

const initNotifs: Notif[] = [
  { id:"N001", txt:"Rendez-vous confirmé — Kofi Atta, 11 mai 09h00", time:"Aujourd'hui 09:12", type:"success" },
  { id:"N002", txt:"Nouveau dossier assigné — DOS-2024-006 (Droit fiscal)", time:"Aujourd'hui 09:05", type:"info" },
  { id:"N003", txt:"Audience demain — Kofi Atta, Tribunal de Yaoundé 9h", time:"Aujourd'hui 07:30", type:"info" },
  { id:"N004", txt:"Paiement reçu — 350 000 FCFA, dossier DOS-003", time:"Hier 16:42", type:"success" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function genId(prefix: string, n: number): string {
  return `${prefix}-${String(n).padStart(3, "0")}`;
}
function initials(p: string, n: string): string {
  return `${p[0]}${n[0]}`.toUpperCase();
}
function nowStr(): string {
  const d = new Date();
  return `Aujourd'hui ${d.getHours()}:${d.getMinutes() < 10 ? "0" : ""}${d.getMinutes()}`;
}

// Serious, muted status styles
const statusStyle: Record<string, string> = {
  "En cours":   "bg-slate-100 text-slate-700 border border-slate-300",
  "Plaidoirie": "bg-stone-100 text-stone-700 border border-stone-300",
  "Gagné":      "bg-slate-50 text-slate-600 border border-slate-400",
  "Urgent":     "bg-neutral-100 text-neutral-800 border border-neutral-400",
  "En attente": "bg-gray-100 text-gray-600 border border-gray-300",
  "Classé":     "bg-gray-50 text-gray-500 border border-gray-200",
  "Perdu":      "bg-stone-50 text-stone-600 border border-stone-300",
  "Confirmé":   "bg-slate-100 text-slate-700 border border-slate-400",
  "Annulé":     "bg-neutral-100 text-neutral-600 border border-neutral-300",
};

const statusDot: Record<string, string> = {
  "En cours":   "bg-blue-400",
  "Plaidoirie": "bg-amber-500",
  "Gagné":      "bg-emerald-500",
  "Urgent":     "bg-red-500",
  "En attente": "bg-slate-400",
  "Classé":     "bg-slate-300",
  "Perdu":      "bg-slate-500",
  "Confirmé":   "bg-emerald-500",
  "Annulé":     "bg-red-400",
};

// ─── Micro Components ──────────────────────────────────────────────────────────
function Badge({ s }: { s: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-medium tracking-wide ${statusStyle[s] || "bg-gray-100 text-gray-600 border border-gray-200"}`}>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${statusDot[s] || "bg-gray-400"}`} />
      {s}
    </span>
  );
}

function Avatar({ p, n, color, size = "sm" }: { p: string; n: string; color: string; size?: "sm" | "md" | "lg" }) {
  const sz = size === "sm" ? "w-8 h-8 text-xs" : size === "md" ? "w-10 h-10 text-sm" : "w-14 h-14 text-lg";
  return (
    <div className={`${sz} rounded-full flex-shrink-0 font-semibold text-white`}
      style={{ background: color, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {initials(p, n)}
    </div>
  );
}

function StatCard({ icon, label, value, trend, color, onClick }: {
  icon: React.ReactNode; label: string; value: number | string; trend?: string; color: string; onClick?: () => void;
}) {
  return (
    <motion.div whileHover={{ y: -2, boxShadow: "0 6px 24px rgba(0,0,0,0.07)" }} onClick={onClick}
      className="bg-white border border-slate-100 rounded-2xl p-4 cursor-pointer transition-shadow">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: color + "18", color }}>
        {icon}
      </div>
      <div className="text-2xl font-semibold text-slate-800">{value}</div>
      <div className="text-xs text-slate-500 mt-0.5">{label}</div>
      {trend && <div className="text-xs mt-2 text-slate-500 font-medium">{trend}</div>}
    </motion.div>
  );
}

// ─── Toast ─────────────────────────────────────────────────────────────────────
function ToastContainer({ toasts }: { toasts: Toast[] }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div key={t.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
            className={`flex items-center gap-2 bg-white border rounded-xl shadow-lg px-4 py-3 text-sm min-w-[240px] pointer-events-auto ${t.type === "success" ? "border-l-4 border-l-slate-600" : "border-l-4 border-l-slate-400"}`}>
            <span className={t.type === "success" ? "text-slate-600" : "text-slate-400"}>
              {t.type === "success" ? <Check size={14} /> : <Bell size={14} />}
            </span>
            <span className="text-slate-700 text-xs">{t.msg}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// ─── Modal ─────────────────────────────────────────────────────────────────────
function Modal({ open, onClose, title, children, footer }: {
  open: boolean; onClose: () => void; title: string; children: React.ReactNode; footer?: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}>
          <motion.div initial={{ scale: 0.96, opacity: 0, y: 8 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-slate-100">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h2 className="text-sm font-semibold text-slate-800">{title}</h2>
              <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-1 rounded"><X size={16} /></button>
            </div>
            <div className="px-6 py-5">{children}</div>
            {footer && <div className="flex gap-2 justify-end px-6 py-4 border-t border-slate-100">{footer}</div>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-xs font-medium text-slate-500">{label}</label>}
      {children}
    </div>
  );
}

const inputCls = "border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 outline-none focus:border-slate-400 bg-white w-full";

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputCls} ${props.className || ""}`} />;
}
function SelectEl({ options, ...props }: { options: string[] } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className={inputCls}>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}
function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${inputCls} resize-none h-20`} />;
}
function BtnPrimary({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-slate-800 text-white text-sm rounded-lg hover:bg-slate-900 transition-colors font-medium">
      {children}
    </button>
  );
}
function BtnSecondary({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className="px-4 py-2 border border-slate-200 text-slate-600 text-sm rounded-lg hover:bg-slate-50 transition-colors">
      {children}
    </button>
  );
}

// ─── Téléphone avec indicatif pays ────────────────────────────────────────────
function TelField({ indicatif, tel, pays, onIndicatifChange, onTelChange }: {
  indicatif: string; tel: string; pays: string;
  onIndicatifChange: (ind: string, pays: string) => void;
  onTelChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const handleTel = (v: string) => {
    const clean = v.replace(/[^\d\s]/g, "");
    onTelChange(clean);
  };

  return (
    <div className="flex gap-2" ref={ref}>
      <div className="relative">
        <button type="button" onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-1 border border-slate-200 rounded-lg px-2 py-2 text-xs text-slate-700 bg-white hover:bg-slate-50 whitespace-nowrap min-w-[90px]">
          <Globe size={12} className="text-slate-400" />
          <span>{indicatif}</span>
          <ChevronDown size={10} className="text-slate-400" />
        </button>
        {open && (
          <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-48 overflow-y-auto">
            {PAYS_INDICATIFS.map((p) => (
              <button key={`${p.pays}-${p.indicatif}`} type="button"
                onClick={() => { onIndicatifChange(p.indicatif, p.pays); setOpen(false); }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs hover:bg-slate-50 ${pays === p.pays ? "text-slate-800 font-semibold" : "text-slate-600"}`}>
                <span>{p.pays}</span>
                <span className="text-slate-400 font-mono">{p.indicatif}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <Input value={tel} onChange={(e) => handleTel(e.target.value)} placeholder="6 XX XX XX XX" className="flex-1" />
    </div>
  );
}

// ─── Calendriers ───────────────────────────────────────────────────────────────
function MiniCalendar({ rdvs }: { rdvs: Rdv[] }) {
  const [month, setMonth] = useState(4);
  const [year, setYear] = useState(2026);
  const months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
  const firstDay = new Date(year, month, 1).getDay();
  const offset = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const rdvDays = new Set(
    rdvs.filter((r) => r.date.startsWith(`${year}-${String(month + 1).padStart(2, "0")}`))
        .map((r) => parseInt(r.date.split("-")[2]))
  );
  const cells: (number | null)[] = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-slate-700">{months[month]} {year}</span>
        <div className="flex gap-1">
          <button onClick={() => setMonth((m) => { if (m === 0) { setYear((y) => y - 1); return 11; } return m - 1; })}
            className="w-6 h-6 rounded hover:bg-slate-100 text-slate-400 flex items-center justify-center"><ChevronLeft size={12} /></button>
          <button onClick={() => setMonth((m) => { if (m === 11) { setYear((y) => y + 1); return 0; } return m + 1; })}
            className="w-6 h-6 rounded hover:bg-slate-100 text-slate-400 flex items-center justify-center"><ChevronRight size={12} /></button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-0.5 text-center">
        {["Lu","Ma","Me","Je","Ve","Sa","Di"].map((d) => <div key={d} className="text-[10px] text-slate-400 font-medium py-1">{d}</div>)}
        {cells.map((d, i) => d ? (
          <div key={i} className={`text-xs py-1 rounded cursor-pointer relative
            ${d === 11 && month === 4 ? "bg-slate-800 text-white font-semibold" : "hover:bg-slate-100 text-slate-600"}
            ${rdvDays.has(d) && !(d === 11 && month === 4) ? "font-semibold text-slate-800" : ""}`}>
            {d}
            {rdvDays.has(d) && <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${d === 11 && month === 4 ? "bg-white" : "bg-slate-400"}`} />}
          </div>
        ) : <div key={i} />)}
      </div>
    </div>
  );
}

function FullCalendar({ rdvs, onAdd }: { rdvs: Rdv[]; onAdd: () => void }) {
  const [month, setMonth] = useState(4);
  const [year, setYear] = useState(2026);
  const months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
  const firstDay = new Date(year, month, 1).getDay();
  const offset = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const rdvByDay: Record<number, Rdv[]> = {};
  rdvs.filter((r) => r.date.startsWith(`${year}-${String(month + 1).padStart(2, "0")}`))
    .forEach((r) => { const d = parseInt(r.date.split("-")[2]); if (!rdvByDay[d]) rdvByDay[d] = []; rdvByDay[d].push(r); });
  const cells: { d: number | null; evs?: Rdv[] }[] = [];
  for (let i = 0; i < offset; i++) cells.push({ d: null });
  for (let d = 1; d <= daysInMonth; d++) cells.push({ d, evs: rdvByDay[d] || [] });

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <button onClick={() => setMonth((m) => { if (m === 0) { setYear((y) => y - 1); return 11; } return m - 1; })}
            className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-500"><ChevronLeft size={14} /></button>
          <span className="text-sm font-semibold text-slate-800">{months[month]} {year}</span>
          <button onClick={() => setMonth((m) => { if (m === 11) { setYear((y) => y + 1); return 0; } return m + 1; })}
            className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-500"><ChevronRight size={14} /></button>
        </div>
        <button onClick={onAdd} className="flex items-center gap-2 px-3 py-2 bg-slate-800 text-white text-xs rounded-lg hover:bg-slate-900 font-medium">
          <Plus size={12} /> Ajouter
        </button>
      </div>
      <div className="border border-slate-100 rounded-2xl overflow-hidden bg-white">
        <div className="grid grid-cols-7 bg-slate-50 border-b border-slate-100">
          {["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"].map((d) => <div key={d} className="text-xs font-medium text-slate-500 text-center py-2">{d}</div>)}
        </div>
        <div className="grid grid-cols-7">
          {cells.map((c, i) => (
            <div key={i} className={`min-h-[72px] p-2 border-b border-r border-slate-100 last:border-r-0 ${!c.d ? "bg-slate-50/50" : ""}`}>
              {c.d && <>
                <div className={`text-xs mb-1 w-5 h-5 flex items-center justify-center ${c.d === 11 && month === 4 ? "bg-slate-800 text-white rounded-full font-semibold" : "text-slate-500"}`}>{c.d}</div>
                {(c.evs || []).slice(0, 2).map((r, j) => (
                  <div key={j} className="text-[10px] px-1.5 py-0.5 rounded mb-0.5 truncate bg-slate-100 text-slate-600 border border-slate-200">{r.client}</div>
                ))}
              </>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Page: Dashboard ───────────────────────────────────────────────────────────
function PageDashboard({ dossiers, rdvs, users, notifs, setPage }: {
  dossiers: Dossier[]; rdvs: Rdv[]; users: User[]; notifs: Notif[]; setPage: (p: PageId) => void;
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <div className="mb-5">
        <h1 className="text-lg font-semibold text-slate-800">Tableau de bord</h1>
        <p className="text-xs text-slate-400 mt-0.5">Bienvenue, Maître Adjobi — lundi 11 mai 2026</p>
      </div>
      <div className="grid grid-cols-4 gap-3 mb-6">
        <StatCard icon={<FolderOpen size={18} />} label="Dossiers actifs" value={dossiers.length} trend="↑ +4 ce mois" color="#1e3a5f" onClick={() => setPage("dossiers")} />
        <StatCard icon={<CalendarClock size={18} />} label="Rendez-vous" value={rdvs.length} trend="2 aujourd'hui" color="#374151" onClick={() => setPage("rdv")} />
        <StatCard icon={<Users size={18} />} label="Clients" value={new Set(dossiers.map((d) => d.client)).size} trend="↑ +11 ce mois" color="#1f4e3d" onClick={() => setPage("clients")} />
        <StatCard icon={<UserCog size={18} />} label="Utilisateurs" value={users.length} trend="Équipe cabinet" color="#4a1942" onClick={() => setPage("utilisateurs")} />
      </div>
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Rendez-vous récents</h2>
        <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden">
          <table className="w-full text-xs">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>{["N°","Client","Date","Motif","Statut"].map((h) => <th key={h} className="text-left px-4 py-2.5 text-slate-500 font-medium">{h}</th>)}</tr>
            </thead>
            <tbody>
              {rdvs.slice(0, 5).map((r) => (
                <tr key={r.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-2.5 text-slate-600 font-medium font-mono text-[11px]">{r.id}</td>
                  <td className="px-4 py-2.5 text-slate-700">{r.client}</td>
                  <td className="px-4 py-2.5 text-slate-600">{r.date} {r.heure}</td>
                  <td className="px-4 py-2.5 text-slate-600 max-w-[160px] truncate">{r.motif}</td>
                  <td className="px-4 py-2.5"><Badge s={r.statut} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white border border-slate-100 rounded-2xl p-4"><MiniCalendar rdvs={rdvs} /></div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4">
          <h3 className="text-sm font-semibold text-slate-700 mb-3">Notifications récentes</h3>
          <div className="flex flex-col gap-2">
            {notifs.slice(0, 4).map((n) => (
              <div key={n.id} className="flex items-start gap-2">
                <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${n.type === "success" ? "bg-slate-600" : "bg-slate-400"}`} />
                <div>
                  <p className="text-xs text-slate-700 leading-snug">{n.txt}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{n.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page: Dossiers ────────────────────────────────────────────────────────────
function PageDossiers({ dossiers, setDossiers, showToast, addNotif, avocatsList }: {
  dossiers: Dossier[]; setDossiers: React.Dispatch<React.SetStateAction<Dossier[]>>;
  showToast: (msg: string, type?: "success" | "info") => void;
  addNotif: (txt: string, type: "success" | "info") => void;
  avocatsList: string[];
}) {
  const [modal, setModal] = useState<"add" | "edit" | "pieces" | null>(null);
  const [form, setForm] = useState<Partial<Dossier>>({});
  const [dosCount, setDosCount] = useState(6);
  const [selectedDos, setSelectedDos] = useState<Dossier | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const openAdd = () => {
    setForm({ id: genId("DOS", dosCount), date: new Date().toISOString().split("T")[0], branche: BRANCHES[0], avocat: avocatsList[0] || "", statut: "En cours", piecesJointes: [] });
    setModal("add");
  };
  const openEdit = (d: Dossier) => { setForm({ ...d }); setModal("edit"); };
  const openPieces = (d: Dossier) => { setSelectedDos(d); setModal("pieces"); };

  const save = () => {
    if (!form.client || !form.titre) { showToast("Client et titre requis", "info"); return; }
    if (modal === "add") {
      setDossiers((p) => [...p, form as Dossier]);
      setDosCount((c) => c + 1);
      showToast(`Dossier ${form.id} créé`, "success");
      addNotif(`Dossier ${form.id} — ${form.client} enregistré`, "info");
    } else {
      setDossiers((p) => p.map((d) => d.id === form.id ? form as Dossier : d));
      showToast("Dossier modifié", "success");
    }
    setModal(null);
  };

  const del = (id: string) => { setDossiers((p) => p.filter((d) => d.id !== id)); showToast("Dossier supprimé", "info"); };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !selectedDos) return;
    const newPieces: PieceJointe[] = Array.from(files).map((f) => ({
      nom: f.name,
      type: f.type.startsWith("image/") ? "image" : f.type === "application/pdf" ? "pdf" : "autre",
      url: URL.createObjectURL(f),
    }));
    setDossiers((p) => p.map((d) => d.id === selectedDos.id
      ? { ...d, piecesJointes: [...(d.piecesJointes || []), ...newPieces] }
      : d
    ));
    setSelectedDos((prev) => prev ? { ...prev, piecesJointes: [...(prev.piecesJointes || []), ...newPieces] } : prev);
    showToast(`${newPieces.length} fichier(s) ajouté(s)`, "success");
    if (fileRef.current) fileRef.current.value = "";
  };

  const removePiece = (dosId: string, idx: number) => {
    setDossiers((p) => p.map((d) => d.id === dosId
      ? { ...d, piecesJointes: (d.piecesJointes || []).filter((_, i) => i !== idx) }
      : d
    ));
    setSelectedDos((prev) => prev ? { ...prev, piecesJointes: (prev.piecesJointes || []).filter((_, i) => i !== idx) } : prev);
  };

  const currentPieces = dossiers.find((d) => d.id === selectedDos?.id)?.piecesJointes || [];

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <div className="flex items-center justify-between mb-5">
        <div><h1 className="text-lg font-semibold text-slate-800">Dossiers</h1><p className="text-xs text-slate-400">Gestion de tous les dossiers du cabinet</p></div>
        <button onClick={openAdd} className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white text-sm rounded-xl hover:bg-slate-900 font-medium transition-colors">
          <Plus size={14} /> Nouveau dossier
        </button>
      </div>
      <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden">
        <table className="w-full text-xs">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>{["N° Dossier","Client","Titre","Branche","Avocat","Statut","Pièces","Actions"].map((h) => <th key={h} className="text-left px-4 py-3 text-slate-500 font-medium">{h}</th>)}</tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {dossiers.map((d) => (
                <motion.tr key={d.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, height: 0 }}
                  className="border-b border-slate-50 last:border-0 hover:bg-slate-50/40 transition-colors">
                  <td className="px-4 py-3 text-slate-700 font-semibold font-mono text-[11px]">{d.id}</td>
                  <td className="px-4 py-3 text-slate-700">{d.client}</td>
                  <td className="px-4 py-3 text-slate-600 max-w-[150px] truncate">{d.titre}</td>
                  <td className="px-4 py-3 text-slate-600">{d.branche}</td>
                  <td className="px-4 py-3 text-slate-600 truncate max-w-[110px]">{d.avocat}</td>
                  <td className="px-4 py-3"><Badge s={d.statut} /></td>
                  <td className="px-4 py-3">
                    <button onClick={() => openPieces(d)} className="flex items-center gap-1 px-2 py-1 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors">
                      <Paperclip size={11} />
                      <span>{(d.piecesJointes || []).length}</span>
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1">
                      <button onClick={() => openEdit(d)} className="p-1.5 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"><Pencil size={11} /></button>
                      <button onClick={() => del(d.id)} className="p-1.5 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-100 transition-colors"><Trash2 size={11} /></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      <Modal open={modal === "add" || modal === "edit"} onClose={() => setModal(null)}
        title={modal === "add" ? "Nouveau dossier" : "Modifier le dossier"}
        footer={<><BtnSecondary onClick={() => setModal(null)}>Annuler</BtnSecondary><BtnPrimary onClick={save}>Enregistrer</BtnPrimary></>}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Nom du client *"><Input value={form.client || ""} onChange={(e) => setForm((f) => ({ ...f, client: e.target.value }))} placeholder="Ex : Kofi Atta" /></Field>
          <Field label="Téléphone"><Input value={form.tel || ""} onChange={(e) => setForm((f) => ({ ...f, tel: e.target.value }))} placeholder="+237 6..." /></Field>
          <Field label="Titre du dossier *"><Input value={form.titre || ""} onChange={(e) => setForm((f) => ({ ...f, titre: e.target.value }))} placeholder="Ex : Litige contrat" /></Field>
          <Field label="Date d'enregistrement"><Input type="date" value={form.date || ""} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} /></Field>
          <Field label="Branche juridique"><SelectEl options={BRANCHES} value={form.branche || ""} onChange={(e) => setForm((f) => ({ ...f, branche: e.target.value }))} /></Field>
          <Field label="Avocat assigné"><SelectEl options={avocatsList} value={form.avocat || ""} onChange={(e) => setForm((f) => ({ ...f, avocat: e.target.value }))} /></Field>
          <Field label="Statut"><SelectEl options={STATUTS_DOS} value={form.statut || ""} onChange={(e) => setForm((f) => ({ ...f, statut: e.target.value }))} /></Field>
          <Field label="N° Dossier"><Input value={form.id || ""} disabled className="bg-slate-50 text-slate-400" /></Field>
        </div>
      </Modal>

      <Modal open={modal === "pieces"} onClose={() => setModal(null)} title={`Pièces jointes — ${selectedDos?.id}`}>
        <div className="space-y-4">
          <label htmlFor="file-upload" className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-xl p-6 text-center cursor-pointer hover:bg-slate-50 transition-colors">
            <Paperclip size={22} className="text-slate-300 mb-2" />
            <p className="text-xs text-slate-500 mb-1">Cliquez pour ajouter des fichiers</p>
            <p className="text-[10px] text-slate-400">Images, PDF, documents</p>
            <input ref={fileRef} type="file" multiple accept="image/*,.pdf,.doc,.docx" onChange={handleFileUpload} className="hidden" id="file-upload" />
          </label>
          {currentPieces.length > 0 ? (
            <div className="space-y-2">
              {currentPieces.map((p, i) => (
                <div key={i} className="flex items-center justify-between px-3 py-2 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-2">
                    {p.type === "image" ? <Image size={14} className="text-slate-400" /> : <FileText size={14} className="text-slate-400" />}
                    <span className="text-xs text-slate-700 truncate max-w-[220px]">{p.nom}</span>
                    <span className="text-[10px] text-slate-400 bg-slate-200 px-1.5 py-0.5 rounded uppercase">{p.type}</span>
                  </div>
                  <button onClick={() => removePiece(selectedDos!.id, i)} className="text-slate-400 hover:text-slate-600 p-1"><X size={12} /></button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-400 text-center py-2">Aucune pièce jointe pour ce dossier</p>
          )}
        </div>
      </Modal>
    </motion.div>
  );
}

// ─── Page: RDV ─────────────────────────────────────────────────────────────────
function PageRdv({ rdvs, setRdvs, showToast, addNotif, avocatsList }: {
  rdvs: Rdv[]; setRdvs: React.Dispatch<React.SetStateAction<Rdv[]>>;
  showToast: (msg: string, type?: "success" | "info") => void;
  addNotif: (txt: string, type: "success" | "info") => void;
  avocatsList: string[];
}) {
  const [modal, setModal] = useState<"add" | "edit" | null>(null);
  const [form, setForm] = useState<Partial<Rdv>>({});
  const [rdvCount, setRdvCount] = useState(6);

  const openAdd = () => {
    setForm({ id: genId("RDV", rdvCount), date: new Date().toISOString().split("T")[0], heure: "09:00", avocat: avocatsList[0] || "", statut: "En attente", indicatif: "+237", pays: "Cameroun", tel: "" });
    setModal("add");
  };
  const openEdit = (r: Rdv) => { setForm({ ...r }); setModal("edit"); };

  const save = () => {
    if (!form.client || !form.date) { showToast("Client et date requis", "info"); return; }
    if (!form.tel || form.tel.replace(/\s/g, "").length < 8) { showToast("Numéro de téléphone invalide (8 chiffres min.)", "info"); return; }
    if (modal === "add") { setRdvs((p) => [...p, form as Rdv]); setRdvCount((c) => c + 1); showToast(`Rendez-vous ${form.id} créé`, "success"); }
    else { setRdvs((p) => p.map((r) => r.id === form.id ? form as Rdv : r)); showToast("Rendez-vous modifié", "success"); }
    if (form.statut === "Confirmé") addNotif(`Rendez-vous confirmé — ${form.client}, ${form.date} à ${form.heure}`, "success");
    setModal(null);
  };

  const del = (id: string) => { setRdvs((p) => p.filter((r) => r.id !== id)); showToast("Rendez-vous supprimé", "info"); };
  const confirm = (id: string) => {
    setRdvs((p) => p.map((r) => r.id === id ? { ...r, statut: "Confirmé" } : r));
    const r = rdvs.find((x) => x.id === id);
    if (r) { showToast("Rendez-vous confirmé", "success"); addNotif(`Rendez-vous confirmé — ${r.client}, ${r.date} à ${r.heure}`, "success"); }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <div className="flex items-center justify-between mb-5">
        <div><h1 className="text-lg font-semibold text-slate-800">Rendez-vous</h1><p className="text-xs text-slate-400">Planification et suivi des consultations</p></div>
        <button onClick={openAdd} className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white text-sm rounded-xl hover:bg-slate-900 font-medium transition-colors">
          <Plus size={14} /> Nouveau rendez-vous
        </button>
      </div>
      <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden">
        <table className="w-full text-xs">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>{["N°","Client","Téléphone","Date & Heure","Motif","Avocat","Statut","Actions"].map((h) => <th key={h} className="text-left px-4 py-3 text-slate-500 font-medium">{h}</th>)}</tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {rdvs.map((r) => (
                <motion.tr key={r.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="border-b border-slate-50 last:border-0 hover:bg-slate-50/40 transition-colors">
                  <td className="px-4 py-3 text-slate-600 font-mono text-[11px]">{r.id}</td>
                  <td className="px-4 py-3 text-slate-700">{r.client}</td>
                  <td className="px-4 py-3 text-slate-500 whitespace-nowrap font-mono text-[11px]">{r.indicatif} {r.tel}</td>
                  <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{r.date} {r.heure}</td>
                  <td className="px-4 py-3 text-slate-600 max-w-[130px] truncate">{r.motif}</td>
                  <td className="px-4 py-3 text-slate-600 max-w-[110px] truncate">{r.avocat}</td>
                  <td className="px-4 py-3"><Badge s={r.statut} /></td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1">
                      {r.statut === "En attente" && (
                        <button onClick={() => confirm(r.id)} title="Confirmer" className="p-1.5 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"><Check size={11} /></button>
                      )}
                      <button onClick={() => openEdit(r)} className="p-1.5 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"><Pencil size={11} /></button>
                      <button onClick={() => del(r.id)} className="p-1.5 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-100 transition-colors"><Trash2 size={11} /></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      <Modal open={!!modal} onClose={() => setModal(null)} title={modal === "add" ? "Nouveau rendez-vous" : "Modifier le rendez-vous"}
        footer={<><BtnSecondary onClick={() => setModal(null)}>Annuler</BtnSecondary><BtnPrimary onClick={save}>Enregistrer</BtnPrimary></>}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Nom du client *"><Input value={form.client || ""} onChange={(e) => setForm((f) => ({ ...f, client: e.target.value }))} placeholder="Ex : Amina Diallo" /></Field>
          <Field label="Téléphone *">
            <TelField indicatif={form.indicatif || "+237"} tel={form.tel || ""} pays={form.pays || "Cameroun"}
              onIndicatifChange={(ind, pays) => setForm((f) => ({ ...f, indicatif: ind, pays }))}
              onTelChange={(v) => setForm((f) => ({ ...f, tel: v }))} />
          </Field>
          <Field label="Date *"><Input type="date" value={form.date || ""} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} /></Field>
          <Field label="Heure *"><Input type="time" value={form.heure || ""} onChange={(e) => setForm((f) => ({ ...f, heure: e.target.value }))} /></Field>
          <div className="col-span-2"><Field label="Motif / Objet"><Textarea value={form.motif || ""} onChange={(e) => setForm((f) => ({ ...f, motif: e.target.value }))} placeholder="Objet du rendez-vous..." /></Field></div>
          <Field label="Avocat assigné"><SelectEl options={avocatsList} value={form.avocat || ""} onChange={(e) => setForm((f) => ({ ...f, avocat: e.target.value }))} /></Field>
          <Field label="Statut"><SelectEl options={["En attente","Confirmé","Annulé"]} value={form.statut || ""} onChange={(e) => setForm((f) => ({ ...f, statut: e.target.value }))} /></Field>
        </div>
      </Modal>
    </motion.div>
  );
}

// ─── Page: Clients ─────────────────────────────────────────────────────────────
function PageClients({ dossiers }: { dossiers: Dossier[] }) {
  const clients = [...new Map(dossiers.map((d) => [d.client, { nom: d.client, tel: d.tel, count: dossiers.filter((x) => x.client === d.client).length }])).values()];
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <div className="mb-5"><h1 className="text-lg font-semibold text-slate-800">Clients</h1><p className="text-xs text-slate-400">Annuaire des clients du cabinet</p></div>
      <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden">
        <table className="w-full text-xs">
          <thead className="bg-slate-50 border-b border-slate-100"><tr>{["Nom","Téléphone","Dossiers"].map((h) => <th key={h} className="text-left px-4 py-3 text-slate-500 font-medium">{h}</th>)}</tr></thead>
          <tbody>
            {clients.map((c, i) => (
              <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/40">
                <td className="px-4 py-3 text-slate-700 font-medium">{c.nom}</td>
                <td className="px-4 py-3 text-slate-500 font-mono">{c.tel}</td>
                <td className="px-4 py-3"><span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded border border-slate-200 text-xs">{c.count}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

// ─── Page: Statistiques ────────────────────────────────────────────────────────
function PageStatistiques({ dossiers, rdvs }: { dossiers: Dossier[]; rdvs: Rdv[] }) {
  const gagnes = dossiers.filter((d) => d.statut === "Gagné").length;
  const enCours = dossiers.filter((d) => d.statut === "En cours").length;
  const urgents = dossiers.filter((d) => d.statut === "Urgent").length;
  const tauxReussite = dossiers.length > 0 ? Math.round((gagnes / dossiers.length) * 100) : 0;
  const rdvConfirmes = rdvs.filter((r) => r.statut === "Confirmé").length;

  const branchStats = BRANCHES.map((b) => ({ label: b, count: dossiers.filter((d) => d.branche === b).length }))
    .filter((b) => b.count > 0).sort((a, bt) => bt.count - a.count);

  const avocatStats = [...new Set(dossiers.map((d) => d.avocat))].map((a) => ({
    label: a.replace("Maître ", ""),
    count: dossiers.filter((d) => d.avocat === a).length,
    gagnes: dossiers.filter((d) => d.avocat === a && d.statut === "Gagné").length,
  }));

  const maxBranch = Math.max(...branchStats.map((b) => b.count), 1);
  const maxAvocat = Math.max(...avocatStats.map((a) => a.count), 1);

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <div className="mb-5"><h1 className="text-lg font-semibold text-slate-800">Statistiques</h1><p className="text-xs text-slate-400">Analyse de l'activité juridique du cabinet</p></div>

      <div className="grid grid-cols-4 gap-3 mb-5">
        <div className="bg-white border border-slate-100 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2"><Award size={15} className="text-slate-400" /><span className="text-xs text-slate-500 font-medium">Dossiers gagnés</span></div>
          <div className="text-2xl font-bold text-slate-800">{gagnes}</div>
          <div className="text-xs text-slate-400 mt-1">sur {dossiers.length} dossiers</div>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2"><TrendingUp size={15} className="text-slate-400" /><span className="text-xs text-slate-500 font-medium">Taux de réussite</span></div>
          <div className="text-2xl font-bold text-slate-800">{tauxReussite}%</div>
          <div className="mt-2 h-1.5 bg-slate-100 rounded-full"><div className="h-1.5 bg-slate-600 rounded-full transition-all" style={{ width: `${tauxReussite}%` }} /></div>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2"><Clock size={15} className="text-slate-400" /><span className="text-xs text-slate-500 font-medium">En cours</span></div>
          <div className="text-2xl font-bold text-slate-800">{enCours}</div>
          <div className="text-xs text-slate-400 mt-1">{urgents} urgents</div>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2"><CheckCircle size={15} className="text-slate-400" /><span className="text-xs text-slate-500 font-medium">RDV confirmés</span></div>
          <div className="text-2xl font-bold text-slate-800">{rdvConfirmes}</div>
          <div className="text-xs text-slate-400 mt-1">sur {rdvs.length} rendez-vous</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white border border-slate-100 rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2"><BookOpen size={14} />Dossiers par branche</h3>
          <div className="space-y-3">
            {branchStats.map((b) => (
              <div key={b.label}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-slate-600 truncate max-w-[160px]">{b.label}</span>
                  <span className="text-xs font-semibold text-slate-700">{b.count}</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${(b.count / maxBranch) * 100}%` }} transition={{ duration: 0.6, delay: 0.1 }}
                    className="h-1.5 bg-slate-600 rounded-full" />
                </div>
              </div>
            ))}
            {branchStats.length === 0 && <p className="text-xs text-slate-400 text-center py-4">Aucune donnée</p>}
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2"><Briefcase size={14} />Performance par avocat</h3>
          <div className="space-y-4">
            {avocatStats.map((a) => (
              <div key={a.label}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-slate-600">{a.label}</span>
                  <span className="text-xs text-slate-500">{a.count} dos. · {a.gagnes} gagnés</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full relative">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${(a.count / maxAvocat) * 100}%` }} transition={{ duration: 0.6 }}
                    className="h-1.5 bg-slate-300 rounded-full absolute" />
                  <motion.div initial={{ width: 0 }} animate={{ width: `${(a.gagnes / maxAvocat) * 100}%` }} transition={{ duration: 0.6, delay: 0.2 }}
                    className="h-1.5 bg-slate-700 rounded-full absolute" />
                </div>
              </div>
            ))}
            {avocatStats.length === 0 && <p className="text-xs text-slate-400 text-center py-4">Aucune donnée</p>}
          </div>
          <div className="flex items-center gap-4 mt-4 pt-3 border-t border-slate-100">
            <div className="flex items-center gap-1.5"><span className="w-3 h-1.5 bg-slate-700 rounded-full inline-block" /><span className="text-[10px] text-slate-500">Gagnés</span></div>
            <div className="flex items-center gap-1.5"><span className="w-3 h-1.5 bg-slate-300 rounded-full inline-block" /><span className="text-[10px] text-slate-500">Total</span></div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-2xl p-5">
        <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2"><BarChart2 size={14} />Répartition des statuts</h3>
        <div className="grid grid-cols-4 gap-3">
          {STATUTS_DOS.map((s) => {
            const cnt = dossiers.filter((d) => d.statut === s).length;
            return (
              <div key={s} className="flex items-center justify-between px-3 py-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${statusDot[s] || "bg-slate-300"}`} />
                  <span className="text-xs text-slate-600">{s}</span>
                </div>
                <span className="text-xs font-bold text-slate-800">{cnt}</span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page: Utilisateurs ────────────────────────────────────────────────────────
function PageUtilisateurs({ users, setUsers, showToast, addNotif, currentUser }: {
  users: User[]; setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  showToast: (msg: string, type?: "success" | "info") => void;
  addNotif: (txt: string, type: "success" | "info") => void;
  currentUser: User;
}) {
  const [modal, setModal] = useState<"add" | "edit" | null>(null);
  const [form, setForm] = useState<Partial<User>>({});
  const [uCount, setUCount] = useState(4);
  const [showPwd, setShowPwd] = useState(false);

  const canManage = !!currentUser.isTitulaire;

  const openAdd = () => {
    if (!canManage) { showToast("Seul l'avocat titulaire peut ajouter des utilisateurs", "info"); return; }
    setForm({ id: genId("USR", uCount), role: "Avocat", color: COLORS[Math.floor(Math.random() * COLORS.length)], indicatif: "+237", pays: "Cameroun", mdp: "" });
    setModal("add");
  };
  const openEdit = (u: User) => { setForm({ ...u }); setModal("edit"); };

  const save = () => {
    if (!form.prenom || !form.nom || !form.email) { showToast("Prénom, nom et email requis", "info"); return; }
    if (modal === "add" && !form.mdp) { showToast("Mot de passe requis", "info"); return; }
    if (modal === "add") {
      setUsers((p) => [...p, { ...form, avocat: `Maître ${currentUser.prenom} ${currentUser.nom}` } as User]);
      setUCount((c) => c + 1);
      showToast(`${form.prenom} ${form.nom} ajouté — compte créé`, "success");
      addNotif(`Nouvel utilisateur — ${form.prenom} ${form.nom} (${form.role})`, "info");
    } else {
      setUsers((p) => p.map((u) => u.id === form.id ? form as User : u));
      showToast("Utilisateur modifié", "success");
    }
    setModal(null);
  };

  const del = (id: string) => {
    if (!canManage) { showToast("Action réservée au titulaire", "info"); return; }
    if (id === currentUser.id) { showToast("Impossible de supprimer le compte titulaire", "info"); return; }
    setUsers((p) => p.filter((u) => u.id !== id));
    showToast("Utilisateur supprimé", "info");
  };

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-lg font-semibold text-slate-800">Utilisateurs</h1>
          <p className="text-xs text-slate-400">Gestion de l'équipe du cabinet</p>
        </div>
        {canManage && (
          <button onClick={openAdd} className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white text-sm rounded-xl hover:bg-slate-900 font-medium">
            <Plus size={14} /> Ajouter
          </button>
        )}
      </div>
      {!canManage && (
        <div className="flex items-center gap-2 mb-4 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500">
          <ShieldCheck size={14} className="text-slate-400" />
          La gestion des utilisateurs est réservée à l'avocat titulaire du cabinet.
        </div>
      )}
      <div className="grid grid-cols-3 gap-3">
        <AnimatePresence>
          {users.map((u) => (
            <motion.div key={u.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-slate-100 rounded-2xl p-4 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Avatar p={u.prenom} n={u.nom} color={u.color} size="md" />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <p className="text-sm font-semibold text-slate-800 truncate">{u.prenom} {u.nom}</p>
                    {u.isTitulaire && <span className="flex-shrink-0 px-1.5 py-0.5 bg-slate-800 text-white text-[9px] rounded font-medium">TITULAIRE</span>}
                  </div>
                  <p className="text-xs text-slate-400">{u.role}</p>
                </div>
              </div>
              <div className="text-xs text-slate-500 space-y-1">
                <p className="truncate flex items-center gap-1.5"><Mail size={10} className="text-slate-300 flex-shrink-0" />{u.email}</p>
                {u.specialite && u.specialite !== "—" && <p className="truncate flex items-center gap-1.5"><Scale size={10} className="text-slate-300 flex-shrink-0" />{u.specialite}</p>}
                {u.avocat && <p className="truncate flex items-center gap-1.5"><UserIcon size={10} className="text-slate-300 flex-shrink-0" />Cab. {u.avocat.replace("Maître ", "")}</p>}
              </div>
              <div className="flex gap-2 pt-1">
                {canManage && (
                  <button onClick={() => openEdit(u)} className="flex-1 py-1.5 border border-slate-200 rounded-lg text-xs text-slate-500 hover:bg-slate-50 flex items-center justify-center gap-1">
                    <Pencil size={10} /> Modifier
                  </button>
                )}
                {canManage && !u.isTitulaire && (
                  <button onClick={() => del(u.id)} className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs text-slate-400 hover:bg-slate-50">
                    <Trash2 size={10} />
                  </button>
                )}
                {!canManage && u.id === currentUser.id && (
                  <button onClick={() => openEdit(u)} className="flex-1 py-1.5 border border-slate-200 rounded-lg text-xs text-slate-500 hover:bg-slate-50 flex items-center justify-center gap-1">
                    <Pencil size={10} /> Mon profil
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Modal open={!!modal} onClose={() => setModal(null)} title={modal === "add" ? "Ajouter un utilisateur" : "Modifier l'utilisateur"}
        footer={<><BtnSecondary onClick={() => setModal(null)}>Annuler</BtnSecondary><BtnPrimary onClick={save}>{modal === "add" ? "Créer le compte" : "Enregistrer"}</BtnPrimary></>}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Prénom *"><Input value={form.prenom || ""} onChange={(e) => setForm((f) => ({ ...f, prenom: e.target.value }))} placeholder="Ex : Sylvie" /></Field>
          <Field label="Nom *"><Input value={form.nom || ""} onChange={(e) => setForm((f) => ({ ...f, nom: e.target.value }))} placeholder="Ex : Kamga" /></Field>
          <Field label="Email *"><Input type="email" value={form.email || ""} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="sylvie@lexoffice.cm" /></Field>
          <Field label="Téléphone">
            <TelField indicatif={form.indicatif || "+237"} tel={form.tel || ""} pays={form.pays || "Cameroun"}
              onIndicatifChange={(ind, pays) => setForm((f) => ({ ...f, indicatif: ind, pays }))}
              onTelChange={(v) => setForm((f) => ({ ...f, tel: v }))} />
          </Field>
          <Field label="Rôle"><SelectEl options={ROLES} value={form.role || ""} onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))} /></Field>
          <Field label="Spécialité"><Input value={form.specialite || ""} onChange={(e) => setForm((f) => ({ ...f, specialite: e.target.value }))} placeholder="Ex : Droit pénal" /></Field>
          <div className="col-span-2"><Field label="Adresse"><Input value={form.adresse || ""} onChange={(e) => setForm((f) => ({ ...f, adresse: e.target.value }))} placeholder="Adresse professionnelle" /></Field></div>
          <Field label="N° Barreau"><Input value={form.barreau || ""} onChange={(e) => setForm((f) => ({ ...f, barreau: e.target.value }))} placeholder="Ex : 1427" /></Field>
          <Field label={modal === "add" ? "Mot de passe *" : "Nouveau mot de passe"}>
            <div className="relative">
              <Input type={showPwd ? "text" : "password"} value={form.mdp || ""} onChange={(e) => setForm((f) => ({ ...f, mdp: e.target.value }))} placeholder="••••••••" className="pr-8" />
              <button type="button" onClick={() => setShowPwd((v) => !v)} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">
                {showPwd ? <EyeOff size={13} /> : <Eye size={13} />}
              </button>
            </div>
          </Field>
        </div>
        {modal === "add" && (
          <div className="mt-3 flex items-start gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200">
            <ShieldCheck size={14} className="text-slate-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-500">Un compte de connexion sera automatiquement créé avec cet email et mot de passe. L'utilisateur pourra se connecter et modifier son profil.</p>
          </div>
        )}
      </Modal>
    </motion.div>
  );
}

// ─── Page: Notifications ───────────────────────────────────────────────────────
function PageNotifications({ notifs }: { notifs: Notif[] }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <div className="mb-5"><h1 className="text-lg font-semibold text-slate-800">Notifications</h1><p className="text-xs text-slate-400">Toutes vos alertes et mises à jour</p></div>
      <div className="flex flex-col gap-2 max-w-xl">
        <AnimatePresence>
          {notifs.map((n) => (
            <motion.div key={n.id} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
              className="bg-white border border-slate-100 rounded-2xl p-4 flex items-start gap-3">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${n.type === "success" ? "bg-slate-100 text-slate-600" : "bg-slate-50 text-slate-400"}`}>
                {n.type === "success" ? <CheckCircle size={15} /> : <Bell size={15} />}
              </div>
              <div><p className="text-sm text-slate-700 leading-snug">{n.txt}</p><p className="text-xs text-slate-400 mt-1">{n.time}</p></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── Page: Calendrier ──────────────────────────────────────────────────────────
function PageCalendrier({ rdvs, onAddRdv }: { rdvs: Rdv[]; onAddRdv: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <div className="mb-5"><h1 className="text-lg font-semibold text-slate-800">Calendrier</h1><p className="text-xs text-slate-400">Vue mensuelle de tous les événements</p></div>
      <FullCalendar rdvs={rdvs} onAdd={onAddRdv} />
    </motion.div>
  );
}

// ─── Page: Profil ──────────────────────────────────────────────────────────────
function PageProfil({ currentUser, setUsers, showToast }: {
  currentUser: User; setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  showToast: (msg: string, type?: "success" | "info") => void;
}) {
  const [editModal, setEditModal] = useState(false);
  const [pwdModal, setPwdModal] = useState(false);
  const [form, setForm] = useState<Partial<User>>({ ...currentUser });
  const [pwdForm, setPwdForm] = useState({ ancien: "", nouveau: "", confirm: "" });
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);

  const saveProfile = () => {
    if (!form.prenom || !form.nom || !form.email) { showToast("Champs obligatoires manquants", "info"); return; }
    setUsers((p) => p.map((u) => u.id === currentUser.id ? { ...u, ...form } as User : u));
    showToast("Profil mis à jour", "success");
    setEditModal(false);
  };

  const savePassword = () => {
    if (pwdForm.ancien !== currentUser.mdp) { showToast("Ancien mot de passe incorrect", "info"); return; }
    if (pwdForm.nouveau.length < 6) { showToast("Le mot de passe doit contenir au moins 6 caractères", "info"); return; }
    if (pwdForm.nouveau !== pwdForm.confirm) { showToast("Les mots de passe ne correspondent pas", "info"); return; }
    setUsers((p) => p.map((u) => u.id === currentUser.id ? { ...u, mdp: pwdForm.nouveau } : u));
    showToast("Mot de passe modifié avec succès", "success");
    setPwdModal(false);
    setPwdForm({ ancien: "", nouveau: "", confirm: "" });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <div className="mb-5"><h1 className="text-lg font-semibold text-slate-800">Mon profil</h1><p className="text-xs text-slate-400">Informations personnelles et professionnelles</p></div>
      <div className="max-w-lg space-y-4">
        <div className="bg-white border border-slate-100 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-semibold flex-shrink-0" style={{ background: currentUser.color }}>
            {initials(currentUser.prenom, currentUser.nom)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-base font-semibold text-slate-800">{currentUser.prenom} {currentUser.nom}</p>
              {currentUser.isTitulaire && <span className="px-1.5 py-0.5 bg-slate-800 text-white text-[9px] rounded font-medium">TITULAIRE</span>}
            </div>
            <p className="text-xs text-slate-400 mt-0.5">{currentUser.role}{currentUser.specialite && currentUser.specialite !== "—" ? ` · ${currentUser.specialite}` : ""}</p>
          </div>
          <div className="flex flex-col gap-1.5 flex-shrink-0">
            <button onClick={() => { setForm({ ...currentUser }); setEditModal(true); }}
              className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs text-slate-500 hover:bg-slate-50 flex items-center gap-1">
              <Pencil size={10} /> Modifier
            </button>
            <button onClick={() => setPwdModal(true)}
              className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs text-slate-500 hover:bg-slate-50 flex items-center gap-1">
              <Lock size={10} /> Mot de passe
            </button>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-5 space-y-3">
          {[
            { icon: <Mail size={12} />, label: "Email", value: currentUser.email },
            { icon: <Phone size={12} />, label: "Téléphone", value: `${currentUser.indicatif} ${currentUser.tel}` },
            { icon: <MapPin size={12} />, label: "Adresse", value: currentUser.adresse },
            { icon: <Globe size={12} />, label: "Pays", value: currentUser.pays },
            { icon: <Hash size={12} />, label: "N° Barreau", value: currentUser.barreau },
            { icon: <Building2 size={12} />, label: "Rôle", value: currentUser.role },
          ].map(({ icon, label, value }) => (
            <div key={label} className="flex items-center justify-between text-sm border-b border-slate-50 pb-2 last:border-0 last:pb-0">
              <span className="text-slate-400 text-xs flex items-center gap-1.5">{icon}{label}</span>
              <span className="text-slate-700 font-medium text-xs">{value}</span>
            </div>
          ))}
        </div>

        {currentUser.isTitulaire && (
          <div className="grid grid-cols-3 gap-3">
            {[["127", "Dossiers gagnés"], ["84%", "Taux réussite"], ["134", "Clients actifs"]].map(([v, l]) => (
              <div key={l} className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100">
                <p className="text-xl font-semibold text-slate-800">{v}</p>
                <p className="text-xs text-slate-500 mt-1">{l}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Modal open={editModal} onClose={() => setEditModal(false)} title="Modifier le profil"
        footer={<><BtnSecondary onClick={() => setEditModal(false)}>Annuler</BtnSecondary><BtnPrimary onClick={saveProfile}>Enregistrer</BtnPrimary></>}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Prénom *"><Input value={form.prenom || ""} onChange={(e) => setForm((f) => ({ ...f, prenom: e.target.value }))} /></Field>
          <Field label="Nom *"><Input value={form.nom || ""} onChange={(e) => setForm((f) => ({ ...f, nom: e.target.value }))} /></Field>
          <Field label="Email *"><Input type="email" value={form.email || ""} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} /></Field>
          <Field label="Téléphone">
            <TelField indicatif={form.indicatif || "+237"} tel={form.tel || ""} pays={form.pays || "Cameroun"}
              onIndicatifChange={(ind, pays) => setForm((f) => ({ ...f, indicatif: ind, pays }))}
              onTelChange={(v) => setForm((f) => ({ ...f, tel: v }))} />
          </Field>
          <Field label="Spécialité"><Input value={form.specialite || ""} onChange={(e) => setForm((f) => ({ ...f, specialite: e.target.value }))} /></Field>
          <Field label="N° Barreau"><Input value={form.barreau || ""} onChange={(e) => setForm((f) => ({ ...f, barreau: e.target.value }))} /></Field>
          <div className="col-span-2"><Field label="Adresse"><Input value={form.adresse || ""} onChange={(e) => setForm((f) => ({ ...f, adresse: e.target.value }))} /></Field></div>
        </div>
      </Modal>

      <Modal open={pwdModal} onClose={() => setPwdModal(false)} title="Changer le mot de passe"
        footer={<><BtnSecondary onClick={() => setPwdModal(false)}>Annuler</BtnSecondary><BtnPrimary onClick={savePassword}>Confirmer</BtnPrimary></>}>
        <div className="space-y-3">
          <Field label="Ancien mot de passe">
            <div className="relative">
              <Input type={showOld ? "text" : "password"} value={pwdForm.ancien} onChange={(e) => setPwdForm((f) => ({ ...f, ancien: e.target.value }))} placeholder="••••••••" className="pr-8" />
              <button type="button" onClick={() => setShowOld((v) => !v)} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">{showOld ? <EyeOff size={13} /> : <Eye size={13} />}</button>
            </div>
          </Field>
          <Field label="Nouveau mot de passe (6 car. min.)">
            <div className="relative">
              <Input type={showNew ? "text" : "password"} value={pwdForm.nouveau} onChange={(e) => setPwdForm((f) => ({ ...f, nouveau: e.target.value }))} placeholder="••••••••" className="pr-8" />
              <button type="button" onClick={() => setShowNew((v) => !v)} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">{showNew ? <EyeOff size={13} /> : <Eye size={13} />}</button>
            </div>
          </Field>
          <Field label="Confirmer le nouveau mot de passe">
            <Input type="password" value={pwdForm.confirm} onChange={(e) => setPwdForm((f) => ({ ...f, confirm: e.target.value }))} placeholder="••••••••" />
          </Field>
        </div>
      </Modal>
    </motion.div>
  );
}

// ─── Sidebar ───────────────────────────────────────────────────────────────────
const NAV: (NavItem | null)[] = [
  { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={15} /> },
  { id: "dossiers", label: "Dossiers", icon: <FolderOpen size={15} /> },
  { id: "rdv", label: "Rendez-vous", icon: <CalendarClock size={15} /> },
  { id: "clients", label: "Clients", icon: <Users size={15} /> },
  { id: "calendrier", label: "Calendrier", icon: <Calendar size={15} /> },
  { id: "notifications", label: "Notifications", icon: <Bell size={15} /> },
  null,
  { id: "utilisateurs", label: "Utilisateurs", icon: <UserCog size={15} /> },
  { id: "statistiques", label: "Statistiques", icon: <BarChart2 size={15} /> },
];

function Sidebar({ page, setPage, counts }: { page: PageId; setPage: (p: PageId) => void; counts: Record<string, number> }) {
  return (
    <div className="w-52 bg-slate-900 flex flex-col flex-shrink-0 h-full">
      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-slate-700 rounded-lg flex items-center justify-center text-white"><Scale size={14} /></div>
          <div>
            <p className="text-xs font-semibold text-slate-100">LexOffice</p>
            <p className="text-[10px] text-slate-500">Cabinet juridique</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 py-3 overflow-y-auto">
        {NAV.map((item, i) =>
          !item ? (
            <div key={i} className="my-2 mx-4 border-t border-slate-800" />
          ) : (
            <button key={item.id} onClick={() => setPage(item.id as PageId)}
              className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs transition-all relative ${page === item.id ? "text-white bg-slate-700/60" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"}`}>
              {page === item.id && <motion.div layoutId="nav-indicator" className="absolute left-0 top-1.5 bottom-1.5 w-0.5 bg-slate-300 rounded-full" />}
              <span className={page === item.id ? "text-slate-200" : "text-slate-500"}>{item.icon}</span>
              <span>{item.label}</span>
              {(counts[item.id] ?? 0) > 0 && (
                <span className="ml-auto bg-slate-600 text-slate-200 text-[9px] px-1.5 py-0.5 rounded-full min-w-[16px] text-center">{counts[item.id]}</span>
              )}
            </button>
          )
        )}
        <button onClick={() => setPage("login")} className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-all mt-2">
          <LogOut size={14} /><span>Déconnexion</span>
        </button>
      </nav>
    </div>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────────
function Navbar({ notifs, setPage, currentUser }: { notifs: Notif[]; setPage: (p: PageId) => void; currentUser: User }) {
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) setNotifOpen(false);
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setProfileOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <div className="h-12 bg-white border-b border-slate-100 flex items-center px-5 gap-3 flex-shrink-0">
      <div className="flex-1 flex items-center gap-2 bg-slate-50 rounded-lg px-3 h-8 max-w-72">
        <Search size={13} className="text-slate-400" />
        <input className="bg-transparent text-xs text-slate-600 outline-none flex-1 placeholder-slate-400" placeholder="Rechercher..." />
      </div>
      <div className="ml-auto flex items-center gap-2">
        {/* Cloche notifs */}
        <div className="relative" ref={notifRef}>
          <button onClick={() => { setNotifOpen((o) => !o); setProfileOpen(false); }}
            className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 relative">
            <Bell size={14} />
            {notifs.length > 0 && (
              <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-slate-700 rounded-full text-white text-[8px] flex items-center justify-center font-bold">
                {Math.min(notifs.length, 9)}
              </span>
            )}
          </button>
          <AnimatePresence>
            {notifOpen && (
              <motion.div initial={{ opacity: 0, y: -4, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -4 }}
                className="absolute right-0 top-10 w-72 bg-white border border-slate-100 rounded-2xl shadow-xl z-50 overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                  <p className="text-xs font-semibold text-slate-700">Notifications</p>
                  <button onClick={() => setNotifOpen(false)} className="text-slate-400"><X size={13} /></button>
                </div>
                <div className="py-1 max-h-72 overflow-y-auto">
                  {notifs.slice(0, 6).map((n) => (
                    <div key={n.id} onClick={() => { setNotifOpen(false); setPage("notifications"); }}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 cursor-pointer">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${n.type === "success" ? "bg-slate-100 text-slate-600" : "bg-slate-50 text-slate-400"}`}>
                        {n.type === "success" ? <Check size={11} /> : <Bell size={11} />}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-slate-700 leading-snug">{n.txt}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{n.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Avatar profil avec dropdown */}
        <div className="relative" ref={profileRef}>
          <button onClick={() => { setProfileOpen((o) => !o); setNotifOpen(false); }}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold cursor-pointer border-2 border-transparent hover:border-slate-300 transition-all"
            style={{ background: currentUser.color }}>
            {initials(currentUser.prenom, currentUser.nom)}
          </button>
          <AnimatePresence>
            {profileOpen && (
              <motion.div initial={{ opacity: 0, y: -4, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -4 }}
                className="absolute right-0 top-10 w-56 bg-white border border-slate-100 rounded-2xl shadow-xl z-50 overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-100">
                  <p className="text-xs font-semibold text-slate-800">{currentUser.prenom} {currentUser.nom}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{currentUser.role}</p>
                  <p className="text-[10px] text-slate-400 truncate">{currentUser.email}</p>
                </div>
                <div className="py-1">
                  <button onClick={() => { setProfileOpen(false); setPage("profil"); }}
                    className="w-full flex items-center gap-2 px-4 py-2.5 text-xs text-slate-600 hover:bg-slate-50">
                    <UserIcon size={12} /> Mon profil
                  </button>
                  <button onClick={() => { setProfileOpen(false); setPage("profil"); }}
                    className="w-full flex items-center gap-2 px-4 py-2.5 text-xs text-slate-600 hover:bg-slate-50">
                    <Lock size={12} /> Changer le mot de passe
                  </button>
                  <div className="border-t border-slate-100 my-1" />
                  <button onClick={() => { setProfileOpen(false); setPage("login"); }}
                    className="w-full flex items-center gap-2 px-4 py-2.5 text-xs text-red-500 hover:bg-red-50">
                    <LogOut size={12} /> Déconnexion
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ─── Login ─────────────────────────────────────────────────────────────────────
function PageLogin({ onLogin, allUsers }: { onLogin: (user: User) => void; allUsers: User[] }) {
  const [email, setEmail] = useState("m.adjobi@lexoffice.cm");
  const [pwd, setPwd] = useState("password");
  const [role, setRole] = useState(ROLES[0]);
  const [avocat, setAvocat] = useState("Maître Adjobi Martial");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");

  const avocatsLogin = allUsers.filter((u) => u.role === "Avocat").map((u) => `Maître ${u.prenom} ${u.nom}`);

  const handleLogin = () => {
    const user = allUsers.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.mdp === pwd);
    if (!user) { setError("Email ou mot de passe incorrect"); return; }
    setError("");
    onLogin(user);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 200 }}
        className="bg-white rounded-3xl shadow-2xl p-8 w-96">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-white mx-auto mb-3"><Scale size={22} /></div>
          <h1 className="text-base font-semibold text-slate-800">LexOffice</h1>
          <p className="text-xs text-slate-400 mt-1">Connexion à votre espace juridique</p>
        </div>
        <div className="space-y-3">
          <Field label="Rôle">
            <SelectEl options={ROLES} value={role} onChange={(e) => setRole(e.target.value)} />
          </Field>
          {role !== "Avocat" && avocatsLogin.length > 0 && (
            <Field label="Cabinet / Avocat référent">
              <SelectEl options={avocatsLogin} value={avocat} onChange={(e) => setAvocat(e.target.value)} />
            </Field>
          )}
          <Field label="Email">
            <Input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setError(""); }} />
          </Field>
          <Field label="Mot de passe">
            <div className="relative">
              <Input type={showPwd ? "text" : "password"} value={pwd} onChange={(e) => { setPwd(e.target.value); setError(""); }} className="pr-8" />
              <button type="button" onClick={() => setShowPwd((v) => !v)} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">
                {showPwd ? <EyeOff size={13} /> : <Eye size={13} />}
              </button>
            </div>
          </Field>
          {error && (
            <div className="flex items-center gap-2 text-xs text-red-600 bg-red-50 px-3 py-2 rounded-lg border border-red-100">
              <AlertCircle size={12} /> {error}
            </div>
          )}
          <button onClick={handleLogin} className="w-full py-2.5 bg-slate-800 text-white text-sm rounded-xl hover:bg-slate-900 font-medium transition-colors mt-2 flex items-center justify-center gap-2">
            <Lock size={14} /> Se connecter
          </button>
        </div>
        <p className="text-center text-[10px] text-slate-400 mt-4">Accès réservé aux membres du cabinet</p>
      </motion.div>
    </div>
  );
}

// ─── Root App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<PageId>("login");
  const [dossiers, setDossiers] = useState<Dossier[]>(initDossiers);
  const [rdvs, setRdvs] = useState<Rdv[]>(initRdvs);
  const [users, setUsers] = useState<User[]>(initUsers);
  const [notifs, setNotifs] = useState<Notif[]>(initNotifs);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const showToast = (msg: string, type: "success" | "info" = "info") => {
    const id = Date.now();
    setToasts((t) => [...t, { id, msg, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3500);
  };
  const addNotif = (txt: string, type: "success" | "info") => {
    setNotifs((p) => [{ id: `N${Date.now()}`, txt, time: nowStr(), type }, ...p]);
  };

  const avocatsList = users.filter((u) => u.role === "Avocat").map((u) => `Maître ${u.prenom} ${u.nom}`);
  const counts: Record<string, number> = { notifications: notifs.length };

  if (page === "login" || !currentUser) {
    return (
      <>
        <PageLogin allUsers={users} onLogin={(user) => { setCurrentUser(user); setPage("dashboard"); }} />
        <ToastContainer toasts={toasts} />
      </>
    );
  }

  const pageMap: Record<string, React.ReactNode> = {
    dashboard: <PageDashboard dossiers={dossiers} rdvs={rdvs} users={users} notifs={notifs} setPage={setPage} />,
    dossiers: <PageDossiers dossiers={dossiers} setDossiers={setDossiers} showToast={showToast} addNotif={addNotif} avocatsList={avocatsList} />,
    rdv: <PageRdv rdvs={rdvs} setRdvs={setRdvs} showToast={showToast} addNotif={addNotif} avocatsList={avocatsList} />,
    clients: <PageClients dossiers={dossiers} />,
    calendrier: <PageCalendrier rdvs={rdvs} onAddRdv={() => setPage("rdv")} />,
    notifications: <PageNotifications notifs={notifs} />,
    utilisateurs: <PageUtilisateurs users={users} setUsers={setUsers} showToast={showToast} addNotif={addNotif} currentUser={currentUser} />,
    statistiques: <PageStatistiques dossiers={dossiers} rdvs={rdvs} />,
    profil: <PageProfil currentUser={currentUser} setUsers={setUsers} showToast={showToast} />,
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Sidebar page={page} setPage={setPage} counts={counts} />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Navbar notifs={notifs} setPage={setPage} currentUser={currentUser} />
        <main className="flex-1 overflow-y-auto p-5">
          <AnimatePresence mode="wait">
            <div key={page}>
              {pageMap[page] ?? <PageDashboard dossiers={dossiers} rdvs={rdvs} users={users} notifs={notifs} setPage={setPage} />}
            </div>
          </AnimatePresence>
        </main>
      </div>
      <ToastContainer toasts={toasts} />
    </div>
  );
}