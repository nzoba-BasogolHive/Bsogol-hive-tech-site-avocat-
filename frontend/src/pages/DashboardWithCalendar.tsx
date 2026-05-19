import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, FolderOpen, CalendarClock, Users, Calendar,
  Bell, UserCog, BarChart2, LogOut, Search, X, Check, Pencil,
  Trash2, Plus, ChevronLeft, ChevronRight, Scale, Paperclip,
  Image, FileText, Phone, Globe, Eye, EyeOff, Lock, ShieldCheck,
  TrendingUp, Award, Briefcase, Clock, CheckCircle, AlertCircle,
  BookOpen, Building2, User as UserIcon, Mail, MapPin,
  Hash, ChevronDown, Camera, MessageSquare,
} from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────────────────────
interface Dossier {
  id: string; client: string; tel: string; titre: string;
  date: string; branche: string; avocat: string; statut: string;
  piecesJointes: PieceJointe[];
}
interface PieceJointe { nom: string; type: string; url: string; }
interface Rdv {
  id: string; client: string; indicatif: string; tel: string;
  pays: string; date: string; heure: string; motif: string;
  avocat: string; statut: string;
}
interface User {
  id: string; prenom: string; nom: string; email: string;
  indicatif: string; tel: string; pays: string; role: string;
  specialite: string; adresse: string; barreau: string;
  color: string; mdp: string; photo?: string;
  isTitulaire?: boolean; avocat?: string;
}
interface Notif { id: string; txt: string; time: string; type: string; vue?: boolean; }
interface Toast { id: number; msg: string; type: string; }

interface DemandePublique {
  id: string; nom: string; email: string; telephone: string;
  domaine: string; sujet: string; message: string;
  date: string; statut: "Nouvelle" | "En cours" | "Traitée";
}


type PageId =
  | "login" | "dashboard" | "dossiers" | "rdv"
  | "clients" | "calendrier" | "notifications"
  | "utilisateurs" | "statistiques" | "profil" | "demandes";

// ─── Data ──────────────────────────────────────────────────────────────────────
const COLORS: string[] = ["#110767","#1a0f7a","#1E1671","#0d0655","#2d1b8e","#16086e"];
const BRANCHES: string[] = ["Droit du travail","Droit pénal","Droit des sociétés","Droit de la famille","Droit immobilier","Droit fiscal","Droit civil"];
const STATUTS_DOS: string[] = ["En cours","En attente","Plaidoirie","Urgent","Gagné","Perdu","Classé"];
const ROLES: string[] = ["Avocat","Secrétaire","Stagiaire","Associé"];
const PAYS_INDICATIFS: { pays: string; indicatif: string }[] = [
  { pays:"Cameroun", indicatif:"+237" },{ pays:"France", indicatif:"+33" },
  { pays:"Côte d'Ivoire", indicatif:"+225" },{ pays:"Sénégal", indicatif:"+221" },
  { pays:"Gabon", indicatif:"+241" },{ pays:"Congo", indicatif:"+242" },
  { pays:"Belgique", indicatif:"+32" },{ pays:"Canada", indicatif:"+1" },
  { pays:"Nigeria", indicatif:"+234" },{ pays:"Ghana", indicatif:"+233" },
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
  { id:"USR-001", prenom:"Martial", nom:"Adjobi", email:"m.adjobi@lexoffice.cm", indicatif:"+237", tel:"6 91 23 45 67", pays:"Cameroun", role:"Avocat", specialite:"Droit pénal, Droit du travail", adresse:"Av. Kennedy, Yaoundé", barreau:"1427", color:"#110767", mdp:"password", isTitulaire:true },
  { id:"USR-002", prenom:"Sylvie", nom:"Kamga", email:"s.kamga@lexoffice.cm", indicatif:"+237", tel:"6 80 11 22", pays:"Cameroun", role:"Avocat", specialite:"Droit de la famille", adresse:"Rue Nachtigal, Yaoundé", barreau:"1389", color:"#1a0f7a", mdp:"password123", avocat:"Maître Adjobi Martial" },
  { id:"USR-003", prenom:"Paul", nom:"Ondoua", email:"p.ondoua@lexoffice.cm", indicatif:"+237", tel:"6 70 33 44", pays:"Cameroun", role:"Secrétaire", specialite:"—", adresse:"Bvd de la Réunification", barreau:"—", color:"#2d1b8e", mdp:"secretpass", avocat:"Maître Adjobi Martial" },
];
const initNotifs: Notif[] = [
  { id:"N001", txt:"Rendez-vous confirmé — Kofi Atta, 11 mai 09h00", time:"Aujourd'hui 09:12", type:"success", vue:false },
  { id:"N002", txt:"Nouveau dossier assigné — DOS-2024-006 (Droit fiscal)", time:"Aujourd'hui 09:05", type:"info", vue:false },
  { id:"N003", txt:"Audience demain — Kofi Atta, Tribunal de Yaoundé 9h", time:"Aujourd'hui 07:30", type:"info", vue:false },
  { id:"N004", txt:"Paiement reçu — 350 000 FCFA, dossier DOS-003", time:"Hier 16:42", type:"success", vue:false },
];
const initDemandes: DemandePublique[] = [
  { id:"DEM-001", nom:"Jean Mbarga", email:"j.mbarga@gmail.com", telephone:"6 77 11 22 33", domaine:"Droit Civil", sujet:"Litige successoral", message:"Je souhaite consulter un avocat concernant une dispute de succession familiale.", date:"2026-05-17", statut:"Nouvelle" },
  { id:"DEM-002", nom:"Céleste Fouda", email:"c.fouda@yahoo.fr", telephone:"6 55 99 88 77", domaine:"Droit des Affaires", sujet:"Création SARL", message:"Besoin d'assistance pour la création d'une SARL avec deux associés.", date:"2026-05-16", statut:"Nouvelle" },
];

// ─── Helpers ───────────────────────────────────────────────────────────────────
function genId(prefix: string, n: number): string { return `${prefix}-${String(n).padStart(3,"0")}`; }
function initials(p: string, n: string): string { return `${p[0]}${n[0]}`.toUpperCase(); }
function nowStr(): string {
  const d = new Date();
  return `Aujourd'hui ${d.getHours()}:${d.getMinutes()<10?"0":""}${d.getMinutes()}`;
}

// ─── Status styles ─────────────────────────────────────────────────────────────
const statusStyle: Record<string,string> = {
  "En cours":"bg-blue-50 text-blue-900 border border-blue-200",
  "Plaidoirie":"bg-amber-50 text-amber-900 border border-amber-200",
  "Gagné":"bg-emerald-50 text-emerald-800 border border-emerald-200",
  "Urgent":"bg-red-50 text-red-800 border border-red-300",
  "En attente":"bg-slate-50 text-slate-600 border border-slate-200",
  "Classé":"bg-gray-50 text-gray-500 border border-gray-200",
  "Perdu":"bg-stone-50 text-stone-600 border border-stone-200",
  "Confirmé":"bg-emerald-50 text-emerald-800 border border-emerald-200",
  "Annulé":"bg-red-50 text-red-600 border border-red-200",
  "Nouvelle":"bg-red-50 text-red-700 border border-red-200",
  "Traitée":"bg-emerald-50 text-emerald-700 border border-emerald-200",
};
const statusDot: Record<string,string> = {
  "En cours":"bg-blue-400","Plaidoirie":"bg-amber-500","Gagné":"bg-emerald-500",
  "Urgent":"bg-red-500","En attente":"bg-slate-400","Classé":"bg-slate-300",
  "Perdu":"bg-slate-500","Confirmé":"bg-emerald-500","Annulé":"bg-red-400",
  "Nouvelle":"bg-red-500","Traitée":"bg-emerald-500",
};

// ─── Micro Components ──────────────────────────────────────────────────────────
function Badge({ s }: { s: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide ${statusStyle[s]||"bg-gray-100 text-gray-600 border border-gray-200"}`}>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${statusDot[s]||"bg-gray-400"}`} />
      {s}
    </span>
  );
}

interface AvatarProps { p: string; n: string; color: string; photo?: string; size?: "sm"|"md"|"lg"; }
function Avatar({ p, n, color, photo, size="sm" }: AvatarProps) {
  const sz = size==="sm"?"w-8 h-8 text-xs":size==="md"?"w-10 h-10 text-sm":"w-14 h-14 text-lg";
  if (photo) return <img src={photo} alt={`Photo de ${p} ${n}`} className={`${sz} rounded-full flex-shrink-0 object-cover`} />;
  return (
    <div className={`${sz} rounded-full flex-shrink-0 font-bold text-white`}
      style={{ background:color, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"Garamond, serif", letterSpacing:"0.05em" }}>
      {initials(p,n)}
    </div>
  );
}

interface StatCardProps { icon: React.ReactNode; label: string; value: string|number; trend?: string; color: string; onClick?: ()=>void; }
function StatCard({ icon, label, value, trend, color, onClick }: StatCardProps) {
  return (
    <motion.div whileHover={{ y:-3, boxShadow:"0 12px 32px rgba(17,7,103,0.12)" }} onClick={onClick}
      className="bg-white border border-slate-100 rounded-2xl p-5 cursor-pointer transition-all relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background:color }} />
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white" style={{ background:color }}>{icon}</div>
      <div className="text-2xl font-bold text-slate-800" style={{ fontFamily:"Garamond, serif" }}>{value}</div>
      <div className="text-xs text-slate-500 mt-1 font-medium uppercase tracking-wider">{label}</div>
      {trend && <div className="text-xs mt-2 font-semibold" style={{ color }}>{trend}</div>}
    </motion.div>
  );
}

function ToastContainer({ toasts }: { toasts: Toast[] }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div key={t.id} initial={{ opacity:0,y:16,x:16 }} animate={{ opacity:1,y:0,x:0 }} exit={{ opacity:0,x:16 }}
            className="flex items-center gap-3 bg-white border rounded-2xl shadow-xl px-5 py-3 text-sm min-w-[260px] pointer-events-auto border-l-4"
            style={{ borderLeftColor:t.type==="success"?"#10b981":"#110767" }}>
            <span style={{ color:t.type==="success"?"#10b981":"#110767" }}>
              {t.type==="success"?<Check size={15}/>:<Bell size={15}/>}
            </span>
            <span className="text-slate-700 text-xs font-medium">{t.msg}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

interface ModalProps { open:boolean; onClose:()=>void; title:string; children:React.ReactNode; footer?:React.ReactNode; }
function Modal({ open, onClose, title, children, footer }: ModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
          onClick={(e)=>e.target===e.currentTarget&&onClose()}>
          <motion.div initial={{ scale:0.95,opacity:0,y:12 }} animate={{ scale:1,opacity:1,y:0 }} exit={{ scale:0.95,opacity:0 }}
            transition={{ type:"spring",stiffness:320,damping:28 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-slate-100">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-1 h-5 rounded-full" style={{ background:"#110767" }} />
                <h2 className="text-sm font-bold text-slate-800" style={{ fontFamily:"Garamond, serif",letterSpacing:"0.02em" }}>{title}</h2>
              </div>
              <button onClick={onClose} aria-label="Fermer" className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"><X size={15}/></button>
            </div>
            <div className="px-6 py-5">{children}</div>
            {footer&&<div className="flex gap-2 justify-end px-6 py-4 border-t border-slate-100">{footer}</div>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label&&<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</label>}
      {children}
    </div>
  );
}

const inputCls = "border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-700 outline-none focus:border-[#110767] focus:ring-2 focus:ring-[#110767]/10 bg-white w-full transition-all";
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputCls} ${props.className||""}`} />;
}
interface SelectElProps extends React.SelectHTMLAttributes<HTMLSelectElement> { options: string[]; }
function SelectEl({ options, ...props }: SelectElProps) {
  return <select {...props} className={inputCls}>{options.map(o=><option key={o} value={o}>{o}</option>)}</select>;
}
function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${inputCls} resize-none h-20`} />;
}
function BtnPrimary({ onClick, children }: { onClick:()=>void; children:React.ReactNode }) {
  return <button onClick={onClick} className="px-5 py-2.5 text-white text-sm rounded-xl font-semibold transition-all hover:opacity-90 active:scale-95" style={{ background:"#110767",fontFamily:"Garamond, serif",letterSpacing:"0.03em" }}>{children}</button>;
}
function BtnSecondary({ onClick, children }: { onClick:()=>void; children:React.ReactNode }) {
  return <button onClick={onClick} className="px-5 py-2.5 border border-slate-200 text-slate-600 text-sm rounded-xl hover:bg-slate-50 transition-all font-medium">{children}</button>;
}

// ─── TelField ──────────────────────────────────────────────────────────────────
interface TelFieldProps { indicatif:string; tel:string; pays:string; onIndicatifChange:(i:string,p:string)=>void; onTelChange:(v:string)=>void; }
function TelField({ indicatif, tel, pays, onIndicatifChange, onTelChange }: TelFieldProps) {
  const [open,setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const h=(e:MouseEvent)=>{ if(ref.current&&!ref.current.contains(e.target as Node))setOpen(false); };
    document.addEventListener("mousedown",h);
    return ()=>document.removeEventListener("mousedown",h);
  },[]);
  return (
    <div className="flex gap-2" ref={ref}>
      <div className="relative">
        <button type="button" onClick={()=>setOpen(o=>!o)}
          aria-label="Choisir l'indicatif pays"
          className="flex items-center gap-1 border border-slate-200 rounded-xl px-2 py-2 text-xs text-slate-700 bg-white hover:bg-slate-50 whitespace-nowrap min-w-[90px] transition-all">
          <Globe size={12} className="text-slate-400"/><span>{indicatif}</span><ChevronDown size={10} className="text-slate-400"/>
        </button>
        {open&&(
          <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 max-h-48 overflow-y-auto">
            {PAYS_INDICATIFS.map(p=>(
              <button key={`${p.pays}-${p.indicatif}`} type="button"
                onClick={()=>{ onIndicatifChange(p.indicatif,p.pays); setOpen(false); }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs hover:bg-slate-50 transition-colors ${pays===p.pays?"font-bold text-[#110767]":"text-slate-600"}`}>
                <span>{p.pays}</span><span className="text-slate-400 font-mono">{p.indicatif}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <Input value={tel} onChange={e=>onTelChange(e.target.value.replace(/[^\d\s]/g,""))} placeholder="6 XX XX XX XX" className="flex-1"/>
    </div>
  );
}

// ─── MiniCalendar ──────────────────────────────────────────────────────────────
function MiniCalendar({ rdvs }: { rdvs:Rdv[] }) {
  const [month,setMonth] = useState(4);
  const [year,setYear] = useState(2026);
  const months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
  const firstDay = new Date(year,month,1).getDay();
  const offset = firstDay===0?6:firstDay-1;
  const daysInMonth = new Date(year,month+1,0).getDate();
  const rdvDays = new Set(rdvs.filter(r=>r.date.startsWith(`${year}-${String(month+1).padStart(2,"0")}`)).map(r=>parseInt(r.date.split("-")[2])));
  const prevMonth = ()=>{ if(month===0){setYear(y=>y-1);setMonth(11);}else setMonth(m=>m-1); };
  const nextMonth = ()=>{ if(month===11){setYear(y=>y+1);setMonth(0);}else setMonth(m=>m+1); };
  const cells:(number|null)[] = [];
  for(let i=0;i<offset;i++)cells.push(null);
  for(let d=1;d<=daysInMonth;d++)cells.push(d);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-bold text-slate-700" style={{ fontFamily:"Garamond, serif" }}>{months[month]} {year}</span>
        <div className="flex gap-1">
          <button onClick={prevMonth} aria-label="Mois précédent" className="w-7 h-7 rounded-lg hover:bg-slate-100 text-slate-400 flex items-center justify-center transition-colors"><ChevronLeft size={12}/></button>
          <button onClick={nextMonth} aria-label="Mois suivant" className="w-7 h-7 rounded-lg hover:bg-slate-100 text-slate-400 flex items-center justify-center transition-colors"><ChevronRight size={12}/></button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-0.5 text-center">
        {["Lu","Ma","Me","Je","Ve","Sa","Di"].map(d=><div key={d} className="text-[10px] text-slate-400 font-bold py-1 uppercase tracking-wider">{d}</div>)}
        {cells.map((d,i)=>d!==null?(
          <div key={i} className={`text-xs py-1.5 rounded-lg cursor-pointer relative transition-all ${d===11&&month===4?"text-white font-bold":"hover:bg-slate-100 text-slate-600"} ${rdvDays.has(d)&&!(d===11&&month===4)?"font-bold text-[#110767]":""}`}
            style={d===11&&month===4?{ background:"#110767" }:{}}>
            {d}
            {rdvDays.has(d)&&!(d===11&&month===4)&&<span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C0392B]"/>}
          </div>
        ):<div key={i}/>)}
      </div>
    </div>
  );
}

// ─── FullCalendar ──────────────────────────────────────────────────────────────
function FullCalendar({ rdvs, onAdd }: { rdvs:Rdv[]; onAdd:()=>void }) {
  const [month,setMonth] = useState(4);
  const [year,setYear] = useState(2026);
  const months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
  const firstDay = new Date(year,month,1).getDay();
  const offset = firstDay===0?6:firstDay-1;
  const daysInMonth = new Date(year,month+1,0).getDate();
  const rdvByDay:Record<number,Rdv[]> = {};
  rdvs.filter(r=>r.date.startsWith(`${year}-${String(month+1).padStart(2,"0")}`))
    .forEach(r=>{ const d=parseInt(r.date.split("-")[2]); if(!rdvByDay[d])rdvByDay[d]=[]; rdvByDay[d].push(r); });
  const prevMonth = ()=>{ if(month===0){setYear(y=>y-1);setMonth(11);}else setMonth(m=>m-1); };
  const nextMonth = ()=>{ if(month===11){setYear(y=>y+1);setMonth(0);}else setMonth(m=>m+1); };
  const cells:{d:number|null;evs?:Rdv[]}[] = [];
  for(let i=0;i<offset;i++)cells.push({d:null});
  for(let d=1;d<=daysInMonth;d++)cells.push({d,evs:rdvByDay[d]||[]});
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <button onClick={prevMonth} aria-label="Mois précédent" className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-500 transition-colors"><ChevronLeft size={14}/></button>
          <span className="text-base font-bold" style={{ fontFamily:"Garamond, serif",color:"#110767" }}>{months[month]} {year}</span>
          <button onClick={nextMonth} aria-label="Mois suivant" className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-500 transition-colors"><ChevronRight size={14}/></button>
        </div>
        <button onClick={onAdd} className="flex items-center gap-2 px-4 py-2 text-white text-sm rounded-xl font-semibold hover:opacity-90" style={{ background:"#110767" }}>
          <Plus size={13}/> Ajouter
        </button>
      </div>
      <div className="border border-slate-100 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-7 border-b border-slate-100" style={{ background:"#110767" }}>
          {["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"].map(d=><div key={d} className="text-xs font-bold text-white/70 text-center py-2.5 uppercase tracking-widest">{d}</div>)}
        </div>
        <div className="grid grid-cols-7 bg-white">
          {cells.map((c,i)=>(
            <div key={i} className={`min-h-[76px] p-2 border-b border-r border-slate-100 last:border-r-0 ${!c.d?"bg-slate-50/40":""}`}>
              {c.d!==null&&<>
                <div className={`text-xs mb-1 w-6 h-6 flex items-center justify-center rounded-full font-bold ${c.d===11&&month===4?"text-white":"text-slate-500"}`}
                  style={c.d===11&&month===4?{ background:"#110767" }:{}}>{c.d}</div>
                {(c.evs||[]).slice(0,2).map((r,j)=>(
                  <div key={j} className="text-[10px] px-2 py-0.5 rounded-lg mb-0.5 truncate font-medium"
                    style={{ color:"#110767",backgroundColor:"rgba(17,7,103,0.08)" }}>{r.client}</div>
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
interface PageDashboardProps { dossiers:Dossier[]; rdvs:Rdv[]; users:User[]; notifs:Notif[]; demandes:DemandePublique[]; setPage:(p:PageId)=>void; }
function PageDashboard({ dossiers, rdvs, users, notifs, demandes, setPage }: PageDashboardProps) {
  const notifNonVues = notifs.filter(n=>!n.vue).length;
  const nouvellesDemandes = demandes.filter(d=>d.statut==="Nouvelle").length;
  return (
    <motion.div initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.3 }}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold" style={{ fontFamily:"Garamond, serif",color:"#110767" }}>Tableau de bord</h1>
        <p className="text-xs text-slate-400 mt-1 font-medium uppercase tracking-wider">Bienvenue, Maître Adjobi — lundi 11 mai 2026</p>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatCard icon={<FolderOpen size={18}/>} label="Dossiers actifs" value={dossiers.length} trend="↑ +4 ce mois" color="#110767" onClick={()=>setPage("dossiers")}/>
        <StatCard icon={<CalendarClock size={18}/>} label="Rendez-vous" value={rdvs.length} trend="2 aujourd'hui" color="#1a0f7a" onClick={()=>setPage("rdv")}/>
        <StatCard icon={<Users size={18}/>} label="Clients" value={new Set(dossiers.map(d=>d.client)).size} trend="↑ +11 ce mois" color="#C0392B" onClick={()=>setPage("clients")}/>
        <StatCard icon={<MessageSquare size={18}/>} label="Demandes publiques" value={nouvellesDemandes} trend={`${nouvellesDemandes} nouvelle(s)`} color="#C9A84C" onClick={()=>setPage("demandes")}/>
      </div>
      {nouvellesDemandes>0&&(
        <button type="button" onClick={()=>setPage("demandes")} className="w-full flex items-center gap-3 mb-5 px-5 py-3.5 rounded-2xl border cursor-pointer hover:opacity-90 transition-all text-left"
          style={{ background:"rgba(201,168,76,0.08)",borderColor:"rgba(201,168,76,0.3)" }}>
          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background:"#C9A84C" }}>
            <MessageSquare size={14}/>
          </div>
          <div>
            <p className="text-xs font-bold" style={{ color:"#C9A84C" }}>{nouvellesDemandes} nouvelle(s) demande(s) reçue(s) depuis le site public</p>
            <p className="text-[10px] text-slate-400">Cliquez pour consulter et traiter</p>
          </div>
        </button>
      )}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1 h-5 rounded-full" style={{ background:"#110767" }}/>
          <h2 className="text-sm font-bold uppercase tracking-wider" style={{ color:"#110767",fontFamily:"Garamond, serif" }}>Rendez-vous récents</h2>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-xs">
            <thead style={{ background:"#110767" }}>
              <tr>{["N°","Client","Date","Motif","Statut"].map(h=><th key={h} className="text-left px-4 py-3 text-white/70 font-bold uppercase tracking-wider text-[10px]">{h}</th>)}</tr>
            </thead>
            <tbody>
              {rdvs.slice(0,5).map(r=>(
                <tr key={r.id} className="border-b border-slate-50 last:border-0 hover:bg-[#110767]/5 transition-colors">
                  <td className="px-4 py-3 font-mono text-[11px] font-bold" style={{ color:"#110767" }}>{r.id}</td>
                  <td className="px-4 py-3 text-slate-800 font-semibold">{r.client}</td>
                  <td className="px-4 py-3 text-slate-500">{r.date} {r.heure}</td>
                  <td className="px-4 py-3 text-slate-600 max-w-[160px] truncate">{r.motif}</td>
                  <td className="px-4 py-3"><Badge s={r.statut}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm"><MiniCalendar rdvs={rdvs}/></div>
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 rounded-full" style={{ background:"#C0392B" }}/>
            <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color:"#110767",fontFamily:"Garamond, serif" }}>Notifications</h3>
            {notifNonVues>0&&<span className="ml-auto text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold" style={{ background:"#C0392B" }}>{notifNonVues}</span>}
          </div>
          <div className="flex flex-col gap-3">
            {notifs.slice(0,4).map(n=>(
              <div key={n.id} className={`flex items-start gap-3 p-3 rounded-xl ${n.vue?"opacity-60":""}`} style={{ background:"rgba(17,7,103,0.03)" }}>
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${n.type==="success"?"bg-emerald-500":"bg-[#110767]"}`}/>
                <div><p className="text-xs text-slate-700 leading-snug font-medium">{n.txt}</p><p className="text-[10px] text-slate-400 mt-0.5">{n.time}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Supprimer l'avertissement "users défini mais non utilisé" */}
      <span className="hidden">{users.length}</span>
    </motion.div>
  );
}

// ─── Page: Dossiers ────────────────────────────────────────────────────────────
interface PageDossiersProps { dossiers:Dossier[]; setDossiers:React.Dispatch<React.SetStateAction<Dossier[]>>; showToast:(m:string,t:string)=>void; addNotif:(t:string,tp:string)=>void; avocatsList:string[]; }
function PageDossiers({ dossiers, setDossiers, showToast, addNotif, avocatsList }: PageDossiersProps) {
  const [modal,setModal] = useState<string|null>(null);
  const [form,setForm] = useState<Partial<Dossier>>({});
  const [dosCount,setDosCount] = useState(6);
  const [selectedDos,setSelectedDos] = useState<Dossier|null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const openAdd = ()=>{ setForm({id:genId("DOS",dosCount),date:new Date().toISOString().split("T")[0],branche:BRANCHES[0],avocat:avocatsList[0]||"",statut:"En cours",piecesJointes:[]}); setModal("add"); };
  const openEdit = (d:Dossier)=>{ setForm({...d}); setModal("edit"); };
  const openPieces = (d:Dossier)=>{ setSelectedDos(d); setModal("pieces"); };
  const save = ()=>{
    if(!form.client||!form.titre){ showToast("Client et titre requis","info"); return; }
    if(modal==="add"){ setDossiers(p=>[...p,form as Dossier]); setDosCount(c=>c+1); showToast(`Dossier ${form.id} créé`,"success"); addNotif(`Dossier ${form.id} — ${form.client} enregistré`,"info"); }
    else{ setDossiers(p=>p.map(d=>d.id===form.id?form as Dossier:d)); showToast("Dossier modifié","success"); }
    setModal(null);
  };
  const del = (id:string)=>{ setDossiers(p=>p.filter(d=>d.id!==id)); showToast("Dossier supprimé","info"); };
  const handleFileUpload = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const files=e.target.files;
    if(!files||!selectedDos)return;
    const newPieces:PieceJointe[]=Array.from(files).map(f=>({ nom:f.name, type:f.type.startsWith("image/")?"image":f.type==="application/pdf"?"pdf":"autre", url:URL.createObjectURL(f) }));
    setDossiers(p=>p.map(d=>d.id===selectedDos.id?{...d,piecesJointes:[...(d.piecesJointes||[]),...newPieces]}:d));
    setSelectedDos(prev=>prev?{...prev,piecesJointes:[...(prev.piecesJointes||[]),...newPieces]}:prev);
    showToast(`${newPieces.length} fichier(s) ajouté(s)`,"success");
    if(fileRef.current)fileRef.current.value="";
  };
  const removePiece = (dosId:string,idx:number)=>{
    setDossiers(p=>p.map(d=>d.id===dosId?{...d,piecesJointes:(d.piecesJointes||[]).filter((_,i)=>i!==idx)}:d));
    setSelectedDos(prev=>prev?{...prev,piecesJointes:(prev.piecesJointes||[]).filter((_,i)=>i!==idx)}:prev);
  };
  const currentPieces = dossiers.find(d=>d.id===selectedDos?.id)?.piecesJointes||[];
  return (
    <motion.div initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.3 }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily:"Garamond, serif",color:"#110767" }}>Dossiers</h1>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Gestion de tous les dossiers du cabinet</p>
        </div>
        <button onClick={openAdd} className="flex items-center gap-2 px-5 py-2.5 text-white text-sm rounded-xl font-semibold hover:opacity-90" style={{ background:"#110767",fontFamily:"Garamond, serif" }}>
          <Plus size={14}/> Nouveau dossier
        </button>
      </div>
      <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-xs">
          <thead style={{ background:"#110767" }}>
            <tr>{["N° Dossier","Client","Titre","Branche","Avocat","Statut","Pièces","Actions"].map(h=><th key={h} className="text-left px-4 py-3 text-white/70 font-bold uppercase tracking-wider text-[10px]">{h}</th>)}</tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {dossiers.map(d=>(
                <motion.tr key={d.id} initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="border-b border-slate-50 last:border-0 hover:bg-[#110767]/5 transition-colors">
                  <td className="px-4 py-3 font-mono text-[11px] font-bold" style={{ color:"#110767" }}>{d.id}</td>
                  <td className="px-4 py-3 text-slate-800 font-semibold">{d.client}</td>
                  <td className="px-4 py-3 text-slate-600 max-w-[140px] truncate">{d.titre}</td>
                  <td className="px-4 py-3 text-slate-500">{d.branche}</td>
                  <td className="px-4 py-3 text-slate-500 truncate max-w-[110px]">{d.avocat}</td>
                  <td className="px-4 py-3"><Badge s={d.statut}/></td>
                  <td className="px-4 py-3">
                    <button onClick={()=>openPieces(d)} aria-label={`Pièces jointes de ${d.id}`} className="flex items-center gap-1.5 px-2.5 py-1 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors font-medium">
                      <Paperclip size={11}/><span>{(d.piecesJointes||[]).length}</span>
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1.5">
                      <button onClick={()=>openEdit(d)} aria-label={`Modifier ${d.id}`} className="p-1.5 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"><Pencil size={11}/></button>
                      <button onClick={()=>del(d.id)} aria-label={`Supprimer ${d.id}`} className="p-1.5 border border-slate-200 rounded-lg text-red-400 hover:bg-red-50 transition-colors"><Trash2 size={11}/></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
      <Modal open={modal==="add"||modal==="edit"} onClose={()=>setModal(null)} title={modal==="add"?"Nouveau dossier":"Modifier le dossier"}
        footer={<><BtnSecondary onClick={()=>setModal(null)}>Annuler</BtnSecondary><BtnPrimary onClick={save}>Enregistrer</BtnPrimary></>}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Nom du client *"><Input value={form.client||""} onChange={e=>setForm(f=>({...f,client:e.target.value}))} placeholder="Ex : Kofi Atta"/></Field>
          <Field label="Téléphone"><Input value={form.tel||""} onChange={e=>setForm(f=>({...f,tel:e.target.value}))} placeholder="+237 6..."/></Field>
          <Field label="Titre du dossier *"><Input value={form.titre||""} onChange={e=>setForm(f=>({...f,titre:e.target.value}))} placeholder="Ex : Litige contrat"/></Field>
          <Field label="Date"><Input type="date" value={form.date||""} onChange={e=>setForm(f=>({...f,date:e.target.value}))}/></Field>
          <Field label="Branche juridique"><SelectEl options={BRANCHES} value={form.branche||""} onChange={e=>setForm(f=>({...f,branche:e.target.value}))}/></Field>
          <Field label="Avocat assigné"><SelectEl options={avocatsList} value={form.avocat||""} onChange={e=>setForm(f=>({...f,avocat:e.target.value}))}/></Field>
          <Field label="Statut"><SelectEl options={STATUTS_DOS} value={form.statut||""} onChange={e=>setForm(f=>({...f,statut:e.target.value}))}/></Field>
          <Field label="N° Dossier"><Input value={form.id||""} disabled className="bg-slate-50 text-slate-400"/></Field>
        </div>
      </Modal>
      <Modal open={modal==="pieces"} onClose={()=>setModal(null)} title={`Pièces jointes — ${selectedDos?.id}`}>
        <div className="space-y-4">
          <label htmlFor="file-upload" className="flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer hover:bg-slate-50 transition-colors" style={{ borderColor:"rgba(17,7,103,0.2)" }}>
            <Paperclip size={24} className="mb-2" style={{ color:"#110767",opacity:0.4 }}/>
            <p className="text-xs text-slate-500 mb-1 font-semibold">Cliquez pour ajouter des fichiers</p>
            <p className="text-[10px] text-slate-400">Images, PDF, documents</p>
            <input ref={fileRef} type="file" multiple accept="image/*,.pdf,.doc,.docx" onChange={handleFileUpload} className="hidden" id="file-upload"/>
          </label>
          {currentPieces.length>0?(
            <div className="space-y-2">
              {currentPieces.map((p,i)=>(
                <div key={i} className="flex items-center justify-between px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2">
                    {p.type==="image"?<Image size={14} style={{ color:"#110767" }}/>:<FileText size={14} style={{ color:"#110767" }}/>}
                    <span className="text-xs text-slate-700 truncate max-w-[220px] font-medium">{p.nom}</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded uppercase" style={{ background:"rgba(17,7,103,0.08)",color:"#110767" }}>{p.type}</span>
                  </div>
                  <button onClick={()=>removePiece(selectedDos!.id,i)} aria-label="Supprimer ce fichier" className="text-slate-400 hover:text-red-500 p-1 transition-colors"><X size={12}/></button>
                </div>
              ))}
            </div>
          ):<p className="text-xs text-slate-400 text-center py-3">Aucune pièce jointe pour ce dossier</p>}
        </div>
      </Modal>
    </motion.div>
  );
}

// ─── Page: RDV ─────────────────────────────────────────────────────────────────
interface PageRdvProps { rdvs:Rdv[]; setRdvs:React.Dispatch<React.SetStateAction<Rdv[]>>; showToast:(m:string,t:string)=>void; addNotif:(t:string,tp:string)=>void; avocatsList:string[]; }
function PageRdv({ rdvs, setRdvs, showToast, addNotif, avocatsList }: PageRdvProps) {
  const [modal,setModal] = useState<string|null>(null);
  const [form,setForm] = useState<Partial<Rdv>>({});
  const [rdvCount,setRdvCount] = useState(6);
  const openAdd = ()=>{ setForm({id:genId("RDV",rdvCount),date:new Date().toISOString().split("T")[0],heure:"09:00",avocat:avocatsList[0]||"",statut:"En attente",indicatif:"+237",pays:"Cameroun",tel:""}); setModal("add"); };
  const openEdit = (r:Rdv)=>{ setForm({...r}); setModal("edit"); };
  const save = ()=>{
    if(!form.client||!form.date){ showToast("Client et date requis","info"); return; }
    if(!form.tel||form.tel.replace(/\s/g,"").length<8){ showToast("Numéro invalide","info"); return; }
    if(modal==="add"){ setRdvs(p=>[...p,form as Rdv]); setRdvCount(c=>c+1); showToast(`Rendez-vous ${form.id} créé`,"success"); }
    else{ setRdvs(p=>p.map(r=>r.id===form.id?form as Rdv:r)); showToast("Rendez-vous modifié","success"); }
    if(form.statut==="Confirmé")addNotif(`Rendez-vous confirmé — ${form.client}, ${form.date} à ${form.heure}`,"success");
    setModal(null);
  };
  const del = (id:string)=>{ setRdvs(p=>p.filter(r=>r.id!==id)); showToast("Rendez-vous supprimé","info"); };
  const confirm = (id:string)=>{
    setRdvs(p=>p.map(r=>r.id===id?{...r,statut:"Confirmé"}:r));
    const r=rdvs.find(x=>x.id===id);
    if(r){ showToast("Rendez-vous confirmé","success"); addNotif(`Rendez-vous confirmé — ${r.client}, ${r.date} à ${r.heure}`,"success"); }
  };
  return (
    <motion.div initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.3 }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily:"Garamond, serif",color:"#110767" }}>Rendez-vous</h1>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Planification et suivi des consultations</p>
        </div>
        <button onClick={openAdd} className="flex items-center gap-2 px-5 py-2.5 text-white text-sm rounded-xl font-semibold hover:opacity-90" style={{ background:"#110767",fontFamily:"Garamond, serif" }}>
          <Plus size={14}/> Nouveau rendez-vous
        </button>
      </div>
      <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-xs">
          <thead style={{ background:"#110767" }}>
            <tr>{["N°","Client","Téléphone","Date & Heure","Motif","Avocat","Statut","Actions"].map(h=><th key={h} className="text-left px-4 py-3 text-white/70 font-bold uppercase tracking-wider text-[10px]">{h}</th>)}</tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {rdvs.map(r=>(
                <motion.tr key={r.id} initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="border-b border-slate-50 last:border-0 hover:bg-[#110767]/5 transition-colors">
                  <td className="px-4 py-3 font-mono text-[11px] font-bold" style={{ color:"#110767" }}>{r.id}</td>
                  <td className="px-4 py-3 text-slate-800 font-semibold">{r.client}</td>
                  <td className="px-4 py-3 text-slate-500 font-mono">{r.indicatif} {r.tel}</td>
                  <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{r.date} {r.heure}</td>
                  <td className="px-4 py-3 text-slate-500 max-w-[130px] truncate">{r.motif}</td>
                  <td className="px-4 py-3 text-slate-500 max-w-[110px] truncate">{r.avocat}</td>
                  <td className="px-4 py-3"><Badge s={r.statut}/></td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1.5">
                      {r.statut==="En attente"&&<button onClick={()=>confirm(r.id)} aria-label="Confirmer le rendez-vous" className="p-1.5 border border-emerald-200 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"><Check size={11}/></button>}
                      <button onClick={()=>openEdit(r)} aria-label={`Modifier RDV ${r.id}`} className="p-1.5 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"><Pencil size={11}/></button>
                      <button onClick={()=>del(r.id)} aria-label={`Supprimer RDV ${r.id}`} className="p-1.5 border border-slate-200 rounded-lg text-red-400 hover:bg-red-50 transition-colors"><Trash2 size={11}/></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
      <Modal open={!!modal} onClose={()=>setModal(null)} title={modal==="add"?"Nouveau rendez-vous":"Modifier le rendez-vous"}
        footer={<><BtnSecondary onClick={()=>setModal(null)}>Annuler</BtnSecondary><BtnPrimary onClick={save}>Enregistrer</BtnPrimary></>}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Nom du client *"><Input value={form.client||""} onChange={e=>setForm(f=>({...f,client:e.target.value}))} placeholder="Ex : Amina Diallo"/></Field>
          <Field label="Téléphone *"><TelField indicatif={form.indicatif||"+237"} tel={form.tel||""} pays={form.pays||"Cameroun"} onIndicatifChange={(ind,p)=>setForm(f=>({...f,indicatif:ind,pays:p}))} onTelChange={v=>setForm(f=>({...f,tel:v}))}/></Field>
          <Field label="Date *"><Input type="date" value={form.date||""} onChange={e=>setForm(f=>({...f,date:e.target.value}))}/></Field>
          <Field label="Heure *"><Input type="time" value={form.heure||""} onChange={e=>setForm(f=>({...f,heure:e.target.value}))}/></Field>
          <div className="col-span-2"><Field label="Motif / Objet"><Textarea value={form.motif||""} onChange={e=>setForm(f=>({...f,motif:e.target.value}))} placeholder="Objet du rendez-vous..."/></Field></div>
          <Field label="Avocat assigné"><SelectEl options={avocatsList} value={form.avocat||""} onChange={e=>setForm(f=>({...f,avocat:e.target.value}))}/></Field>
          <Field label="Statut"><SelectEl options={["En attente","Confirmé","Annulé"]} value={form.statut||""} onChange={e=>setForm(f=>({...f,statut:e.target.value}))}/></Field>
        </div>
      </Modal>
    </motion.div>
  );
}

// ─── Page: Clients ─────────────────────────────────────────────────────────────
function PageClients({ dossiers }: { dossiers:Dossier[] }) {
  const clients = [...new Map(dossiers.map(d=>[d.client,{nom:d.client,tel:d.tel,count:dossiers.filter(x=>x.client===d.client).length}])).values()];
  return (
    <motion.div initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.3 }}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold" style={{ fontFamily:"Garamond, serif",color:"#110767" }}>Clients</h1>
        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Annuaire des clients du cabinet</p>
      </div>
      <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-xs">
          <thead style={{ background:"#110767" }}>
            <tr>{["Nom","Téléphone","Dossiers"].map(h=><th key={h} className="text-left px-4 py-3 text-white/70 font-bold uppercase tracking-wider text-[10px]">{h}</th>)}</tr>
          </thead>
          <tbody>
            {clients.map((c,i)=>(
              <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-[#110767]/5 transition-colors">
                <td className="px-4 py-3 text-slate-800 font-semibold">{c.nom}</td>
                <td className="px-4 py-3 text-slate-500 font-mono">{c.tel}</td>
                <td className="px-4 py-3"><span className="px-2.5 py-1 rounded-lg text-xs font-bold" style={{ background:"rgba(17,7,103,0.08)",color:"#110767" }}>{c.count}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

// ─── Types pour statistiques ───────────────────────────────────────────────────
interface BranchStat { label: string; count: number; }
interface AvocatStat { label: string; count: number; gagnes: number; }
type StatItem = BranchStat | AvocatStat;
function isAvocatStat(item: StatItem): item is AvocatStat { return "gagnes" in item; }

// ─── Page: Statistiques ────────────────────────────────────────────────────────
function PageStatistiques({ dossiers, rdvs }: { dossiers:Dossier[]; rdvs:Rdv[] }) {
  const gagnes = dossiers.filter(d=>d.statut==="Gagné").length;
  const enCours = dossiers.filter(d=>d.statut==="En cours").length;
  const urgents = dossiers.filter(d=>d.statut==="Urgent").length;
  const tauxReussite = dossiers.length>0?Math.round((gagnes/dossiers.length)*100):0;
  const rdvConfirmes = rdvs.filter(r=>r.statut==="Confirmé").length;
  const branchStats: BranchStat[] = BRANCHES.map(b=>({label:b,count:dossiers.filter(d=>d.branche===b).length})).filter(b=>b.count>0).sort((a,b)=>b.count-a.count);
  const avocatStats: AvocatStat[] = [...new Set(dossiers.map(d=>d.avocat))].map(a=>({
    label:a.replace("Maître ",""),
    count:dossiers.filter(d=>d.avocat===a).length,
    gagnes:dossiers.filter(d=>d.avocat===a&&d.statut==="Gagné").length,
  }));
  const maxBranch = Math.max(...branchStats.map(b=>b.count),1);
  const maxAvocat = Math.max(...avocatStats.map(a=>a.count),1);
  const statCards = [
    {icon:<Award size={16}/>,label:"Dossiers gagnés",value:gagnes,sub:`sur ${dossiers.length} dossiers`,color:"#110767"},
    {icon:<TrendingUp size={16}/>,label:"Taux de réussite",value:`${tauxReussite}%`,sub:null as string|null,bar:tauxReussite,color:"#C9A84C"},
    {icon:<Clock size={16}/>,label:"En cours",value:enCours,sub:`${urgents} urgents`,color:"#1a0f7a"},
    {icon:<CheckCircle size={16}/>,label:"RDV confirmés",value:rdvConfirmes,sub:`sur ${rdvs.length} rendez-vous`,color:"#C0392B"},
  ];

  const renderStatGroup = (title: string, icon: React.ReactNode, items: StatItem[], max: number, color: string, showGagnes: boolean) => (
    <div key={title} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
      <h3 className="text-sm font-bold mb-4 flex items-center gap-2 uppercase tracking-wider" style={{ fontFamily:"Garamond, serif",color:"#110767" }}>
        <span style={{ color }}>{icon}</span>{title}
      </h3>
      <div className="space-y-3">
        {items.map(b=>(
          <div key={b.label}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs text-slate-600 font-medium truncate max-w-[160px]">{b.label}</span>
              <span className="text-xs font-bold" style={{ color:"#110767" }}>
                {showGagnes&&isAvocatStat(b)?`${b.count} dos. · ${b.gagnes} gagnés`:b.count}
              </span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full relative">
              <motion.div initial={{ width:0 }} animate={{ width:`${(b.count/max)*100}%`}} transition={{ duration:0.7 }}
                className="h-1.5 rounded-full absolute" style={{ background:"rgba(17,7,103,0.2)" }}/>
              {showGagnes&&isAvocatStat(b)&&(
                <motion.div initial={{ width:0 }} animate={{ width:`${(b.gagnes/max)*100}%`}} transition={{ duration:0.7,delay:0.2 }}
                  className="h-1.5 rounded-full absolute" style={{ background:"#110767" }}/>
              )}
              {!showGagnes&&(
                <motion.div initial={{ width:0 }} animate={{ width:`${(b.count/max)*100}%`}} transition={{ duration:0.7 }}
                  className="h-1.5 rounded-full absolute" style={{ background:"#110767" }}/>
              )}
            </div>
          </div>
        ))}
        {items.length===0&&<p className="text-xs text-slate-400 text-center py-4">Aucune donnée</p>}
      </div>
    </div>
  );

  return (
    <motion.div initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.3 }}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold" style={{ fontFamily:"Garamond, serif",color:"#110767" }}>Statistiques</h1>
        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Analyse de l'activité juridique du cabinet</p>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-5">
        {statCards.map(s=>(
          <div key={s.label} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background:s.color }}/>
            <div className="flex items-center gap-2 mb-3"><div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ background:s.color }}>{s.icon}</div><span className="text-xs font-bold uppercase tracking-wider text-slate-500">{s.label}</span></div>
            <div className="text-2xl font-bold" style={{ fontFamily:"Garamond, serif",color:"#110767" }}>{s.value}</div>
            {s.sub&&<div className="text-xs text-slate-400 mt-1">{s.sub}</div>}
            {s.bar!==undefined&&<div className="mt-2 h-1.5 bg-slate-100 rounded-full"><div className="h-1.5 rounded-full" style={{ width:`${s.bar}%`,background:s.color }}/></div>}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {renderStatGroup("Dossiers par branche",<BookOpen size={14}/>,branchStats,maxBranch,"#110767",false)}
        {renderStatGroup("Performance par avocat",<Briefcase size={14}/>,avocatStats,maxAvocat,"#1a0f7a",true)}
      </div>
      <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-bold mb-4 flex items-center gap-2 uppercase tracking-wider" style={{ fontFamily:"Garamond, serif",color:"#110767" }}>
          <BarChart2 size={14} style={{ color:"#C0392B" }}/> Répartition des statuts
        </h3>
        <div className="grid grid-cols-4 gap-3">
          {STATUTS_DOS.map(s=>{ const cnt=dossiers.filter(d=>d.statut===s).length; return (
            <div key={s} className="flex items-center justify-between px-3 py-2.5 rounded-xl border border-slate-100" style={{ background:"rgba(17,7,103,0.03)" }}>
              <div className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${statusDot[s]||"bg-slate-300"}`}/><span className="text-xs text-slate-600 font-medium">{s}</span></div>
              <span className="text-xs font-bold" style={{ color:"#110767" }}>{cnt}</span>
            </div>
          ); })}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page: Demandes publiques ──────────────────────────────────────────────────
interface PageDemandesProps { demandes:DemandePublique[]; setDemandes:React.Dispatch<React.SetStateAction<DemandePublique[]>>; showToast:(m:string,t:string)=>void; addNotif:(t:string,tp:string)=>void; avocatsList:string[]; setRdvs:React.Dispatch<React.SetStateAction<Rdv[]>>; rdvsCount:number; }
function PageDemandes({ demandes, setDemandes, showToast, addNotif, avocatsList, setRdvs, rdvsCount }: PageDemandesProps) {
  const [selected,setSelected] = useState<DemandePublique|null>(null);
  const [rdvModal,setRdvModal] = useState(false);
  const [rdvForm,setRdvForm] = useState<Partial<Rdv>>({});

  const marquerTraitee = (id:string)=>{ setDemandes(p=>p.map(d=>d.id===id?{...d,statut:"Traitée"}:d)); showToast("Demande marquée comme traitée","success"); };
  const ouvrirRdv = (d:DemandePublique)=>{
    setSelected(d);
    setRdvForm({ id:genId("RDV",rdvsCount+1), client:d.nom, tel:d.telephone, indicatif:"+237", pays:"Cameroun",
      date:new Date().toISOString().split("T")[0], heure:"09:00", motif:`${d.sujet} — ${d.domaine}`,
      avocat:avocatsList[0]||"", statut:"En attente" });
    setRdvModal(true);
  };
  const creerRdv = ()=>{
    if(!rdvForm.client||!rdvForm.date){ showToast("Champs requis manquants","info"); return; }
    setRdvs(p=>[...p,rdvForm as Rdv]);
    if(selected) setDemandes(p=>p.map(d=>d.id===selected.id?{...d,statut:"En cours"}:d));
    showToast(`Rendez-vous créé pour ${rdvForm.client}`,"success");
    addNotif(`RDV créé depuis demande publique — ${rdvForm.client}`,"info");
    setRdvModal(false);
  };

  return (
    <motion.div initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.3 }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily:"Garamond, serif",color:"#110767" }}>Demandes publiques</h1>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">
            Formulaires reçus depuis le site — {demandes.filter(d=>d.statut==="Nouvelle").length} nouvelle(s)
          </p>
        </div>
      </div>
      <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-xs">
          <thead style={{ background:"#110767" }}>
            <tr>{["N°","Nom","Email","Téléphone","Domaine","Sujet","Date","Statut","Actions"].map(h=><th key={h} className="text-left px-4 py-3 text-white/70 font-bold uppercase tracking-wider text-[10px]">{h}</th>)}</tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {demandes.map(d=>(
                <motion.tr key={d.id} initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="border-b border-slate-50 last:border-0 hover:bg-[#110767]/5 transition-colors">
                  <td className="px-4 py-3 font-mono text-[11px] font-bold" style={{ color:"#110767" }}>{d.id}</td>
                  <td className="px-4 py-3 text-slate-800 font-semibold">{d.nom}</td>
                  <td className="px-4 py-3 text-slate-500 truncate max-w-[120px]">{d.email}</td>
                  <td className="px-4 py-3 text-slate-500 font-mono">{d.telephone}</td>
                  <td className="px-4 py-3 text-slate-500">{d.domaine}</td>
                  <td className="px-4 py-3 text-slate-600 max-w-[120px] truncate">{d.sujet}</td>
                  <td className="px-4 py-3 text-slate-400">{d.date}</td>
                  <td className="px-4 py-3"><Badge s={d.statut}/></td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1.5">
                      <button onClick={()=>setSelected(d)} aria-label={`Voir le message de ${d.nom}`} className="p-1.5 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"><Eye size={11}/></button>
                      {d.statut!=="Traitée"&&<button onClick={()=>ouvrirRdv(d)} aria-label={`Créer un rendez-vous pour ${d.nom}`} className="p-1.5 border border-emerald-200 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"><CalendarClock size={11}/></button>}
                      {d.statut!=="Traitée"&&<button onClick={()=>marquerTraitee(d.id)} aria-label="Marquer comme traitée" className="p-1.5 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"><Check size={11}/></button>}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
        {demandes.length===0&&(
          <div className="py-12 text-center">
            <MessageSquare size={28} className="mx-auto mb-3 text-slate-300"/>
            <p className="text-xs text-slate-400 font-medium">Aucune demande reçue pour l'instant</p>
            <p className="text-[10px] text-slate-300 mt-1">Les formulaires du site public apparaîtront ici</p>
          </div>
        )}
      </div>
      {/* Modal: voir message */}
      <Modal open={!!selected&&!rdvModal} onClose={()=>setSelected(null)} title={`Demande — ${selected?.nom}`}>
        {selected&&(
          <div className="space-y-3">
            {[["Nom complet",selected.nom],["Email",selected.email],["Téléphone",selected.telephone],["Domaine juridique",selected.domaine],["Sujet",selected.sujet],["Date de soumission",selected.date]].map(([l,v])=>(
              <div key={l} className="flex justify-between text-xs border-b border-slate-50 pb-2 last:border-0">
                <span className="text-slate-400 font-semibold uppercase tracking-wider">{l}</span>
                <span className="text-slate-700 font-medium text-right max-w-[200px]">{v}</span>
              </div>
            ))}
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Message</p>
              <p className="text-xs text-slate-700 bg-slate-50 rounded-xl p-3 leading-relaxed">{selected.message}</p>
            </div>
            <div className="flex gap-2 pt-2">
              {selected.statut!=="Traitée"&&<button onClick={()=>{ ouvrirRdv(selected); setSelected(null); }} className="flex-1 py-2 text-white text-xs rounded-xl font-semibold hover:opacity-90 flex items-center justify-center gap-1.5" style={{ background:"#110767" }}><CalendarClock size={12}/> Créer un rendez-vous</button>}
              {selected.statut!=="Traitée"&&<button onClick={()=>{ marquerTraitee(selected.id); setSelected(null); }} className="px-4 py-2 border border-slate-200 text-slate-600 text-xs rounded-xl hover:bg-slate-50 font-medium">Marquer traitée</button>}
            </div>
          </div>
        )}
      </Modal>
      {/* Modal: créer RDV */}
      <Modal open={rdvModal} onClose={()=>setRdvModal(false)} title={`Créer un RDV — ${selected?.nom}`}
        footer={<><BtnSecondary onClick={()=>setRdvModal(false)}>Annuler</BtnSecondary><BtnPrimary onClick={creerRdv}>Créer le rendez-vous</BtnPrimary></>}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Client"><Input value={rdvForm.client||""} onChange={e=>setRdvForm(f=>({...f,client:e.target.value}))}/></Field>
          <Field label="Téléphone"><Input value={rdvForm.tel||""} onChange={e=>setRdvForm(f=>({...f,tel:e.target.value}))}/></Field>
          <Field label="Date"><Input type="date" value={rdvForm.date||""} onChange={e=>setRdvForm(f=>({...f,date:e.target.value}))}/></Field>
          <Field label="Heure"><Input type="time" value={rdvForm.heure||""} onChange={e=>setRdvForm(f=>({...f,heure:e.target.value}))}/></Field>
          <div className="col-span-2"><Field label="Motif"><Textarea value={rdvForm.motif||""} onChange={e=>setRdvForm(f=>({...f,motif:e.target.value}))}/></Field></div>
          <Field label="Avocat assigné"><SelectEl options={avocatsList} value={rdvForm.avocat||""} onChange={e=>setRdvForm(f=>({...f,avocat:e.target.value}))}/></Field>
          <Field label="Statut"><SelectEl options={["En attente","Confirmé"]} value={rdvForm.statut||""} onChange={e=>setRdvForm(f=>({...f,statut:e.target.value}))}/></Field>
        </div>
      </Modal>
    </motion.div>
  );
}

// ─── Page: Utilisateurs ────────────────────────────────────────────────────────
interface PageUtilisateursProps { users:User[]; setUsers:React.Dispatch<React.SetStateAction<User[]>>; showToast:(m:string,t:string)=>void; addNotif:(t:string,tp:string)=>void; currentUser:User; }
function PageUtilisateurs({ users, setUsers, showToast, addNotif, currentUser }: PageUtilisateursProps) {
  const [modal,setModal] = useState<string|null>(null);
  const [form,setForm] = useState<Partial<User>>({});
  const [uCount,setUCount] = useState(4);
  const [showPwd,setShowPwd] = useState(false);
  const canManage = !!currentUser.isTitulaire;
  const openAdd = ()=>{
    if(!canManage){ showToast("Seul l'avocat titulaire peut ajouter des utilisateurs","info"); return; }
    setForm({id:genId("USR",uCount),role:"Avocat",color:COLORS[Math.floor(Math.random()*COLORS.length)],indicatif:"+237",pays:"Cameroun",mdp:""});
    setModal("add");
  };
  const openEdit = (u:User)=>{ setForm({...u}); setModal("edit"); };
  const save = ()=>{
    if(!form.prenom||!form.nom||!form.email){ showToast("Prénom, nom et email requis","info"); return; }
    if(modal==="add"&&!form.mdp){ showToast("Mot de passe requis","info"); return; }
    if(modal==="add"){ setUsers(p=>[...p,{...form as User,avocat:`Maître ${currentUser.prenom} ${currentUser.nom}`}]); setUCount(c=>c+1); showToast(`${form.prenom} ${form.nom} ajouté`,"success"); addNotif(`Nouvel utilisateur — ${form.prenom} ${form.nom} (${form.role})`,"info"); }
    else{ setUsers(p=>p.map(u=>u.id===form.id?form as User:u)); showToast("Utilisateur modifié","success"); }
    setModal(null);
  };
  const del = (id:string)=>{
    if(!canManage){ showToast("Action réservée au titulaire","info"); return; }
    if(id===currentUser.id){ showToast("Impossible de supprimer le titulaire","info"); return; }
    setUsers(p=>p.filter(u=>u.id!==id)); showToast("Utilisateur supprimé","info");
  };
  return (
    <motion.div initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.3 }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily:"Garamond, serif",color:"#110767" }}>Utilisateurs</h1>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Gestion de l'équipe du cabinet</p>
        </div>
        {canManage&&<button onClick={openAdd} className="flex items-center gap-2 px-5 py-2.5 text-white text-sm rounded-xl font-semibold hover:opacity-90" style={{ background:"#110767",fontFamily:"Garamond, serif" }}><Plus size={14}/> Ajouter</button>}
      </div>
      {!canManage&&<div className="flex items-center gap-2 mb-4 px-4 py-3 rounded-xl border text-xs font-medium" style={{ background:"rgba(17,7,103,0.05)",borderColor:"rgba(17,7,103,0.15)",color:"#110767" }}><ShieldCheck size={14}/> La gestion des utilisateurs est réservée à l'avocat titulaire.</div>}
      <div className="grid grid-cols-3 gap-4">
        <AnimatePresence>
          {users.map(u=>(
            <motion.div key={u.id} layout initial={{ opacity:0,scale:0.95 }} animate={{ opacity:1,scale:1 }} exit={{ opacity:0,scale:0.95 }}
              className="bg-white border border-slate-100 rounded-2xl p-5 flex flex-col gap-3 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background:u.color }}/>
              <div className="flex items-center gap-3">
                <Avatar p={u.prenom} n={u.nom} color={u.color} photo={u.photo} size="md"/>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <p className="text-sm font-bold truncate" style={{ fontFamily:"Garamond, serif",color:"#110767" }}>{u.prenom} {u.nom}</p>
                    {u.isTitulaire&&<span className="flex-shrink-0 px-1.5 py-0.5 text-white text-[9px] rounded font-bold uppercase tracking-wider" style={{ background:"#110767" }}>TITULAIRE</span>}
                  </div>
                  <p className="text-xs text-slate-400 font-medium">{u.role}</p>
                </div>
              </div>
              <div className="text-xs text-slate-500 space-y-1.5">
                <p className="truncate flex items-center gap-1.5"><Mail size={10} className="text-slate-300 flex-shrink-0"/>{u.email}</p>
                {u.specialite&&u.specialite!=="—"&&<p className="truncate flex items-center gap-1.5"><Scale size={10} className="text-slate-300 flex-shrink-0"/>{u.specialite}</p>}
                {u.avocat&&<p className="truncate flex items-center gap-1.5"><UserIcon size={10} className="text-slate-300 flex-shrink-0"/>Cab. {u.avocat.replace("Maître ","")}</p>}
              </div>
              <div className="flex gap-2 pt-1">
                {(canManage||u.id===currentUser.id)&&<button onClick={()=>openEdit(u)} className="flex-1 py-1.5 border border-slate-200 rounded-xl text-xs font-semibold hover:bg-slate-50 flex items-center justify-center gap-1 transition-colors" style={{ color:"#110767" }}><Pencil size={10}/> Modifier</button>}
                {canManage&&!u.isTitulaire&&<button onClick={()=>del(u.id)} aria-label={`Supprimer ${u.prenom} ${u.nom}`} className="px-3 py-1.5 border border-slate-200 rounded-xl text-xs text-red-400 hover:bg-red-50 transition-colors"><Trash2 size={10}/></button>}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <Modal open={!!modal} onClose={()=>setModal(null)} title={modal==="add"?"Ajouter un utilisateur":"Modifier l'utilisateur"}
        footer={<><BtnSecondary onClick={()=>setModal(null)}>Annuler</BtnSecondary><BtnPrimary onClick={save}>{modal==="add"?"Créer le compte":"Enregistrer"}</BtnPrimary></>}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Prénom *"><Input value={form.prenom||""} onChange={e=>setForm(f=>({...f,prenom:e.target.value}))}/></Field>
          <Field label="Nom *"><Input value={form.nom||""} onChange={e=>setForm(f=>({...f,nom:e.target.value}))}/></Field>
          <Field label="Email *"><Input type="email" value={form.email||""} onChange={e=>setForm(f=>({...f,email:e.target.value}))}/></Field>
          <Field label="Téléphone"><TelField indicatif={form.indicatif||"+237"} tel={form.tel||""} pays={form.pays||"Cameroun"} onIndicatifChange={(ind,p)=>setForm(f=>({...f,indicatif:ind,pays:p}))} onTelChange={v=>setForm(f=>({...f,tel:v}))}/></Field>
          <Field label="Rôle"><SelectEl options={ROLES} value={form.role||""} onChange={e=>setForm(f=>({...f,role:e.target.value}))}/></Field>
          <Field label="Spécialité"><Input value={form.specialite||""} onChange={e=>setForm(f=>({...f,specialite:e.target.value}))}/></Field>
          <div className="col-span-2"><Field label="Adresse"><Input value={form.adresse||""} onChange={e=>setForm(f=>({...f,adresse:e.target.value}))}/></Field></div>
          <Field label="N° Barreau"><Input value={form.barreau||""} onChange={e=>setForm(f=>({...f,barreau:e.target.value}))}/></Field>
          <Field label={modal==="add"?"Mot de passe *":"Nouveau mot de passe"}>
            <div className="relative">
              <Input type={showPwd?"text":"password"} value={form.mdp||""} onChange={e=>setForm(f=>({...f,mdp:e.target.value}))} placeholder="••••••••" className="pr-8"/>
              <button type="button" onClick={()=>setShowPwd(v=>!v)} aria-label={showPwd?"Masquer le mot de passe":"Afficher le mot de passe"} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">{showPwd?<EyeOff size={13}/>:<Eye size={13}/>}</button>
            </div>
          </Field>
        </div>
        {modal==="add"&&<div className="mt-3 flex items-start gap-2 p-3 rounded-xl border text-xs font-medium" style={{ background:"rgba(17,7,103,0.04)",borderColor:"rgba(17,7,103,0.12)",color:"#110767" }}><ShieldCheck size={14} className="flex-shrink-0 mt-0.5"/><p>Un compte de connexion sera automatiquement créé avec cet email et mot de passe.</p></div>}
      </Modal>
    </motion.div>
  );
}

// ─── Page: Notifications ───────────────────────────────────────────────────────
interface PageNotificationsProps { notifs:Notif[]; markAllVue:()=>void; }
function PageNotifications({ notifs, markAllVue }: PageNotificationsProps) {
  useEffect(()=>{ markAllVue(); },[]);  // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <motion.div initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.3 }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily:"Garamond, serif",color:"#110767" }}>Notifications</h1>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Toutes vos alertes et mises à jour</p>
        </div>
        <span className="text-xs text-slate-400 font-medium">{notifs.length} notification(s) — tout est lu</span>
      </div>
      <div className="flex flex-col gap-3 max-w-xl">
        <AnimatePresence>
          {notifs.map(n=>(
            <motion.div key={n.id} initial={{ opacity:0,x:-10 }} animate={{ opacity:1,x:0 }} exit={{ opacity:0 }}
              className="bg-white border border-slate-100 rounded-2xl p-4 flex items-start gap-3 shadow-sm">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-white" style={{ background:n.type==="success"?"#059669":"#110767" }}>
                {n.type==="success"?<CheckCircle size={15}/>:<Bell size={15}/>}
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-700 font-medium leading-snug">{n.txt}</p>
                <p className="text-xs text-slate-400 mt-1">{n.time}</p>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-emerald-50 text-emerald-600 flex-shrink-0">Vue</span>
            </motion.div>
          ))}
        </AnimatePresence>
        {notifs.length===0&&<p className="text-xs text-slate-400 text-center py-8">Aucune notification</p>}
      </div>
    </motion.div>
  );
}

// ─── Page: Calendrier ──────────────────────────────────────────────────────────
function PageCalendrier({ rdvs, onAddRdv }: { rdvs:Rdv[]; onAddRdv:()=>void }) {
  return (
    <motion.div initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.3 }}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold" style={{ fontFamily:"Garamond, serif",color:"#110767" }}>Calendrier</h1>
        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Vue mensuelle de tous les événements</p>
      </div>
      <FullCalendar rdvs={rdvs} onAdd={onAddRdv}/>
    </motion.div>
  );
}

// ─── Page: Profil ──────────────────────────────────────────────────────────────
interface PageProfilProps { currentUser:User; setUsers:React.Dispatch<React.SetStateAction<User[]>>; showToast:(m:string,t:string)=>void; }
function PageProfil({ currentUser, setUsers, showToast }: PageProfilProps) {
  const [editModal,setEditModal] = useState(false);
  const [pwdModal,setPwdModal] = useState(false);
  const [form,setForm] = useState<User>({...currentUser});
  const [pwdForm,setPwdForm] = useState({ ancien:"",nouveau:"",confirm:"" });
  const [showOld,setShowOld] = useState(false);
  const [showNew,setShowNew] = useState(false);
  const photoRef = useRef<HTMLInputElement>(null);

  const handlePhoto = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const file=e.target.files?.[0];
    if(!file)return;
    const url=URL.createObjectURL(file);
    setUsers(p=>p.map(u=>u.id===currentUser.id?{...u,photo:url}:u));
    showToast("Photo de profil mise à jour","success");
  };
  const saveProfile = ()=>{
    if(!form.prenom||!form.nom||!form.email){ showToast("Champs obligatoires manquants","info"); return; }
    setUsers(p=>p.map(u=>u.id===currentUser.id?{...u,...form}:u));
    showToast("Profil mis à jour","success");
    setEditModal(false);
  };
  const savePassword = ()=>{
    if(pwdForm.ancien!==currentUser.mdp){ showToast("Ancien mot de passe incorrect","info"); return; }
    if(pwdForm.nouveau.length<6){ showToast("Minimum 6 caractères","info"); return; }
    if(pwdForm.nouveau!==pwdForm.confirm){ showToast("Mots de passe différents","info"); return; }
    setUsers(p=>p.map(u=>u.id===currentUser.id?{...u,mdp:pwdForm.nouveau}:u));
    showToast("Mot de passe modifié","success");
    setPwdModal(false);
    setPwdForm({ancien:"",nouveau:"",confirm:""});
  };
  const pwdFields:[keyof typeof pwdForm,string,boolean,React.Dispatch<React.SetStateAction<boolean>>][]=[
    ["ancien","Ancien mot de passe",showOld,setShowOld],
    ["nouveau","Nouveau mot de passe (6 car. min.)",showNew,setShowNew],
  ];
  return (
    <motion.div initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.3 }}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold" style={{ fontFamily:"Garamond, serif",color:"#110767" }}>Mon profil</h1>
        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Informations personnelles et professionnelles</p>
      </div>
      <div className="max-w-lg space-y-4">
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background:"linear-gradient(90deg, #110767, #C0392B)" }}/>
          <div className="flex items-center gap-4 mt-2">
            {/* Zone photo */}
            <div className="relative flex-shrink-0 group">
              {currentUser.photo
                ?<img src={currentUser.photo} alt="Photo de profil" className="w-16 h-16 rounded-full object-cover border-2 border-slate-200"/>
                :<div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold border-2 border-slate-200" style={{ background:currentUser.color,fontFamily:"Garamond, serif" }}>{initials(currentUser.prenom,currentUser.nom)}</div>
              }
              <button onClick={()=>photoRef.current?.click()} aria-label="Changer la photo de profil"
                className="absolute inset-0 rounded-full flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <Camera size={16} className="text-white"/>
              </button>
              <input ref={photoRef} type="file" accept="image/*" onChange={handlePhoto} className="hidden" aria-label="Choisir une photo de profil"/>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-base font-bold" style={{ fontFamily:"Garamond, serif",color:"#110767" }}>{currentUser.prenom} {currentUser.nom}</p>
                {currentUser.isTitulaire&&<span className="px-2 py-0.5 text-white text-[9px] rounded font-bold uppercase tracking-wider" style={{ background:"#110767" }}>TITULAIRE</span>}
              </div>
              <p className="text-xs text-slate-400 mt-0.5 font-medium">{currentUser.role}{currentUser.specialite&&currentUser.specialite!=="—"?` · ${currentUser.specialite}`:""}</p>
              <p className="text-[10px] text-slate-300 mt-1 flex items-center gap-1"><Camera size={9}/> Survolez la photo pour changer</p>
            </div>
            <div className="flex flex-col gap-1.5 flex-shrink-0">
              <button onClick={()=>{ setForm({...currentUser}); setEditModal(true); }} className="px-3 py-1.5 border border-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1 hover:bg-slate-50 transition-colors" style={{ color:"#110767" }}><Pencil size={10}/> Modifier</button>
              <button onClick={()=>setPwdModal(true)} className="px-3 py-1.5 border border-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1 hover:bg-slate-50 transition-colors" style={{ color:"#110767" }}><Lock size={10}/> Mot de passe</button>
            </div>
          </div>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-5 space-y-3 shadow-sm">
          {[
            {icon:<Mail size={12}/>,label:"Email",value:currentUser.email},
            {icon:<Phone size={12}/>,label:"Téléphone",value:`${currentUser.indicatif} ${currentUser.tel}`},
            {icon:<MapPin size={12}/>,label:"Adresse",value:currentUser.adresse},
            {icon:<Globe size={12}/>,label:"Pays",value:currentUser.pays},
            {icon:<Hash size={12}/>,label:"N° Barreau",value:currentUser.barreau},
            {icon:<Building2 size={12}/>,label:"Rôle",value:currentUser.role},
          ].map(({icon,label,value})=>(
            <div key={label} className="flex items-center justify-between text-sm border-b border-slate-50 pb-2.5 last:border-0 last:pb-0">
              <span className="text-slate-400 text-xs flex items-center gap-1.5 font-medium">{icon}{label}</span>
              <span className="text-xs font-bold" style={{ color:"#110767" }}>{value}</span>
            </div>
          ))}
        </div>
        {currentUser.isTitulaire&&(
          <div className="grid grid-cols-3 gap-3">
            {[["127","Dossiers gagnés"],["84%","Taux réussite"],["134","Clients actifs"]].map(([v,l])=>(
              <div key={l} className="rounded-2xl p-4 text-center border border-slate-100 bg-white shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background:"#110767" }}/>
                <p className="text-xl font-bold mt-1" style={{ fontFamily:"Garamond, serif",color:"#110767" }}>{v}</p>
                <p className="text-xs text-slate-500 mt-1 font-medium uppercase tracking-wider">{l}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Modal open={editModal} onClose={()=>setEditModal(false)} title="Modifier le profil"
        footer={<><BtnSecondary onClick={()=>setEditModal(false)}>Annuler</BtnSecondary><BtnPrimary onClick={saveProfile}>Enregistrer</BtnPrimary></>}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Prénom *"><Input value={form.prenom||""} onChange={e=>setForm(f=>({...f,prenom:e.target.value}))}/></Field>
          <Field label="Nom *"><Input value={form.nom||""} onChange={e=>setForm(f=>({...f,nom:e.target.value}))}/></Field>
          <Field label="Email *"><Input type="email" value={form.email||""} onChange={e=>setForm(f=>({...f,email:e.target.value}))}/></Field>
          <Field label="Téléphone"><TelField indicatif={form.indicatif||"+237"} tel={form.tel||""} pays={form.pays||"Cameroun"} onIndicatifChange={(ind,p)=>setForm(f=>({...f,indicatif:ind,pays:p}))} onTelChange={v=>setForm(f=>({...f,tel:v}))}/></Field>
          <Field label="Spécialité"><Input value={form.specialite||""} onChange={e=>setForm(f=>({...f,specialite:e.target.value}))}/></Field>
          <Field label="N° Barreau"><Input value={form.barreau||""} onChange={e=>setForm(f=>({...f,barreau:e.target.value}))}/></Field>
          <div className="col-span-2"><Field label="Adresse"><Input value={form.adresse||""} onChange={e=>setForm(f=>({...f,adresse:e.target.value}))}/></Field></div>
        </div>
      </Modal>
      <Modal open={pwdModal} onClose={()=>setPwdModal(false)} title="Changer le mot de passe"
        footer={<><BtnSecondary onClick={()=>setPwdModal(false)}>Annuler</BtnSecondary><BtnPrimary onClick={savePassword}>Confirmer</BtnPrimary></>}>
        <div className="space-y-3">
          {pwdFields.map(([key,label,show,setShow])=>(
            <Field key={key} label={label}>
              <div className="relative">
                <Input type={show?"text":"password"} value={pwdForm[key]} onChange={e=>setPwdForm(f=>({...f,[key]:e.target.value}))} placeholder="••••••••" className="pr-8"/>
                <button type="button" onClick={()=>setShow(v=>!v)} aria-label={show?"Masquer":"Afficher"} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">{show?<EyeOff size={13}/>:<Eye size={13}/>}</button>
              </div>
            </Field>
          ))}
          <Field label="Confirmer le nouveau mot de passe">
            <Input type="password" value={pwdForm.confirm} onChange={e=>setPwdForm(f=>({...f,confirm:e.target.value}))} placeholder="••••••••"/>
          </Field>
        </div>
      </Modal>
    </motion.div>
  );
}

// ─── Sidebar ───────────────────────────────────────────────────────────────────
interface NavItem { id:PageId; label:string; icon:React.ReactNode; }
const NAV:(NavItem|null)[] = [
  {id:"dashboard",label:"Dashboard",icon:<LayoutDashboard size={15}/>},
  {id:"dossiers",label:"Dossiers",icon:<FolderOpen size={15}/>},
  {id:"rdv",label:"Rendez-vous",icon:<CalendarClock size={15}/>},
  {id:"clients",label:"Clients",icon:<Users size={15}/>},
  {id:"calendrier",label:"Calendrier",icon:<Calendar size={15}/>},
  {id:"notifications",label:"Notifications",icon:<Bell size={15}/>},
  {id:"demandes",label:"Demandes",icon:<MessageSquare size={15}/>},
  null,
  {id:"utilisateurs",label:"Utilisateurs",icon:<UserCog size={15}/>},
  {id:"statistiques",label:"Statistiques",icon:<BarChart2 size={15}/>},
];

interface SidebarProps { page:PageId; setPage:(p:PageId)=>void; counts:Record<string,number>; }
function Sidebar({ page, setPage, counts }: SidebarProps) {
  return (
    <div className="w-56 flex flex-col flex-shrink-0 h-full" style={{ background:"#110767" }}>
      <div className="p-5 border-b" style={{ borderColor:"rgba(255,255,255,0.08)" }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center border" style={{ background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.15)" }}><Scale size={16} className="text-white"/></div>
          <div>
            <p className="text-sm font-bold text-white" style={{ fontFamily:"Garamond, serif",letterSpacing:"0.05em" }}>justice a tout prix </p>
            <p className="text-[10px] font-medium uppercase tracking-widest" style={{ color:"rgba(255,255,255,0.4)" }}>Cabinet juridique</p>
          </div>
        </div>
      </div>
      <div className="mx-5 h-px" style={{ background:"#C9A84C",opacity:0.4 }}/>
      <nav className="flex-1 py-4 overflow-y-auto">
        {NAV.map((item,i)=>
          !item?(
            <div key={i} className="my-2 mx-5 border-t" style={{ borderColor:"rgba(255,255,255,0.08)" }}/>
          ):(
            <button key={item.id} onClick={()=>setPage(item.id)}
              className={`w-full flex items-center gap-3 px-5 py-2.5 text-xs transition-all relative ${page===item.id?"text-white":"text-white/40 hover:text-white/70"}`}>
              {page===item.id&&<motion.div layoutId="nav-indicator" className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full" style={{ background:"#C9A84C" }}/>}
              {page===item.id&&<div className="absolute inset-0" style={{ background:"rgba(255,255,255,0.06)",borderRadius:"0 1rem 1rem 0",marginLeft:"2px" }}/>}
              <span className="relative z-10">{item.icon}</span>
              <span className="relative z-10 font-semibold tracking-wide" style={{ fontFamily:"Garamond, serif" }}>{item.label}</span>
              {(counts[item.id]??0)>0&&(
                <span className="ml-auto relative z-10 text-white text-[9px] px-1.5 py-0.5 rounded-full min-w-[16px] text-center font-bold" style={{ background:"#C0392B" }}>
                  {Math.min(counts[item.id],9)}
                </span>
              )}
            </button>
          )
        )}
        <button onClick={()=>setPage("login")}
          className="w-full flex items-center gap-3 px-5 py-2.5 text-xs font-semibold transition-all mt-3"
          style={{ color:"rgba(255,255,255,0.3)",fontFamily:"Garamond, serif" }}
          onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.color="rgba(255,255,255,0.6)";}}
          onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.color="rgba(255,255,255,0.3)";}}>
          <LogOut size={14}/><span>Déconnexion</span>
        </button>
      </nav>
      <div className="mx-5 h-px mb-4" style={{ background:"#C9A84C",opacity:0.2 }}/>
    </div>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────────
interface NavbarProps { notifs:Notif[]; setPage:(p:PageId)=>void; currentUser:User; notifNonVues:number; markAllVue:()=>void; }
function Navbar({ notifs, setPage, currentUser, notifNonVues, markAllVue }: NavbarProps) {
  const [notifOpen,setNotifOpen] = useState(false);
  const [profileOpen,setProfileOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const h=(e:MouseEvent)=>{
      if(notifRef.current&&!notifRef.current.contains(e.target as Node))setNotifOpen(false);
      if(profileRef.current&&!profileRef.current.contains(e.target as Node))setProfileOpen(false);
    };
    document.addEventListener("mousedown",h);
    return ()=>document.removeEventListener("mousedown",h);
  },[]);
  return (
    <div className="h-14 bg-white border-b border-slate-100 flex items-center px-5 gap-3 flex-shrink-0 shadow-sm">
      <div className="flex-1 flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 h-8 max-w-80">
        <Search size={13} style={{ color:"#110767",opacity:0.4 }}/>
        <input className="bg-transparent text-xs text-slate-600 outline-none flex-1 placeholder-slate-400" placeholder="Rechercher un dossier, client..." aria-label="Recherche"/>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <div className="relative" ref={notifRef}>
          <button onClick={()=>{ setNotifOpen(o=>!o); setProfileOpen(false); }} aria-label="Ouvrir les notifications"
            className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 relative transition-colors">
            <Bell size={15} style={{ color:"#110767" }}/>
            {notifNonVues>0&&<span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full text-white text-[8px] flex items-center justify-center font-bold" style={{ background:"#C0392B" }}>{Math.min(notifNonVues,9)}</span>}
          </button>
          <AnimatePresence>
            {notifOpen&&(
              <motion.div initial={{ opacity:0,y:-6,scale:0.97 }} animate={{ opacity:1,y:0,scale:1 }} exit={{ opacity:0,y:-6 }}
                className="absolute right-0 top-11 w-80 bg-white border border-slate-100 rounded-2xl shadow-2xl z-50 overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between" style={{ background:"#110767" }}>
                  <p className="text-xs font-bold text-white" style={{ fontFamily:"Garamond, serif",letterSpacing:"0.05em" }}>Notifications</p>
                  <button onClick={()=>setNotifOpen(false)} aria-label="Fermer" className="text-white/60 hover:text-white transition-colors"><X size={13}/></button>
                </div>
                <div className="py-1 max-h-72 overflow-y-auto">
                  {notifs.slice(0,6).map(n=>(
                    <div key={n.id} onClick={()=>{ setNotifOpen(false); markAllVue(); setPage("notifications"); }}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors">
                      <div className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 text-white" style={{ background:n.type==="success"?"#059669":"#110767" }}>
                        {n.type==="success"?<Check size={11}/>:<Bell size={11}/>}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-slate-700 font-medium leading-snug">{n.txt}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{n.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative" ref={profileRef}>
          <button onClick={()=>{ setProfileOpen(o=>!o); setNotifOpen(false); }} aria-label="Menu utilisateur"
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer border-2 transition-all overflow-hidden"
            style={{ background:currentUser.color,borderColor:"transparent",fontFamily:"Garamond, serif" }}
            onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.borderColor="#C9A84C";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.borderColor="transparent";}}>
            {currentUser.photo
              ?<img src={currentUser.photo} alt="Mon profil" className="w-full h-full object-cover"/>
              :initials(currentUser.prenom,currentUser.nom)
            }
          </button>
          <AnimatePresence>
            {profileOpen&&(
              <motion.div initial={{ opacity:0,y:-6,scale:0.97 }} animate={{ opacity:1,y:0,scale:1 }} exit={{ opacity:0,y:-6 }}
                className="absolute right-0 top-11 w-60 bg-white border border-slate-100 rounded-2xl shadow-2xl z-50 overflow-hidden">
                <div className="px-4 py-4 border-b border-slate-100" style={{ background:"#110767" }}>
                  <p className="text-xs font-bold text-white" style={{ fontFamily:"Garamond, serif" }}>{currentUser.prenom} {currentUser.nom}</p>
                  <p className="text-[10px] text-white/50 mt-0.5 font-medium">{currentUser.role}</p>
                  <p className="text-[10px] text-white/40 truncate">{currentUser.email}</p>
                </div>
                <div className="py-1">
                  {([["profil" as PageId,<UserIcon size={12}/>,<span>Mon profil</span>],["profil" as PageId,<Lock size={12}/>,<span>Changer le mot de passe</span>]] as [PageId,React.ReactNode,React.ReactNode][]).map(([p,icon,label],i)=>(
                    <button key={i} onClick={()=>{ setProfileOpen(false); setPage(p); }} className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold hover:bg-slate-50 transition-colors" style={{ color:"#110767" }}>{icon} {label}</button>
                  ))}
                  <div className="border-t border-slate-100 my-1"/>
                  <button onClick={()=>{ setProfileOpen(false); setPage("login"); }} className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors"><LogOut size={12}/> Déconnexion</button>
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
interface PageLoginProps { onLogin:(u:User)=>void; allUsers:User[]; }
function PageLogin({ onLogin, allUsers }: PageLoginProps) {
  const [email,setEmail] = useState("m.adjobi@lexoffice.cm");
  const [pwd,setPwd] = useState("password");
  const [showPwd,setShowPwd] = useState(false);
  const [error,setError] = useState("");
  const handleLogin = ()=>{
    const user=allUsers.find(u=>u.email.toLowerCase()===email.toLowerCase()&&u.mdp===pwd);
    if(!user){ setError("Email ou mot de passe incorrect"); return; }
    setError(""); onLogin(user);
  };
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background:"linear-gradient(135deg, #0d0655 0%, #110767 50%, #1a0f7a 100%)" }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-5" style={{ background:"#C9A84C",filter:"blur(80px)" }}/>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-5" style={{ background:"#C0392B",filter:"blur(60px)" }}/>
      </div>
      <motion.div initial={{ opacity:0,y:24 }} animate={{ opacity:1,y:0 }} transition={{ type:"spring",stiffness:200 }}
        className="bg-white rounded-3xl shadow-2xl p-8 w-96 relative">
        <div className="text-center mb-7">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mx-auto mb-4" style={{ background:"#110767" }}><Scale size={24}/></div>
          <h1 className="text-xl font-bold" style={{ fontFamily:"Garamond, serif",color:"#110767",letterSpacing:"0.05em" }}>justice a tout prix </h1>
          <div className="flex items-center justify-center gap-2 mt-2 mb-1">
            <div className="h-px w-8" style={{ background:"#C9A84C" }}/><div className="w-1 h-1 rounded-full" style={{ background:"#C9A84C" }}/><div className="h-px w-8" style={{ background:"#C9A84C" }}/>
          </div>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">Espace juridique sécurisé</p>
        </div>
        <div className="space-y-4">
          <Field label="Email"><Input type="email" value={email} onChange={e=>{ setEmail(e.target.value); setError(""); }}/></Field>
          <Field label="Mot de passe">
            <div className="relative">
              <Input type={showPwd?"text":"password"} value={pwd} onChange={e=>{ setPwd(e.target.value); setError(""); }} className="pr-8"/>
              <button type="button" onClick={()=>setShowPwd(v=>!v)} aria-label={showPwd?"Masquer le mot de passe":"Afficher le mot de passe"} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">{showPwd?<EyeOff size={13}/>:<Eye size={13}/>}</button>
            </div>
          </Field>
          {error&&<div className="flex items-center gap-2 text-xs font-medium px-3 py-2.5 rounded-xl border" style={{ color:"#C0392B",background:"rgba(192,57,43,0.06)",borderColor:"rgba(192,57,43,0.2)" }}><AlertCircle size={13}/> {error}</div>}
          <button onClick={handleLogin} className="w-full py-3 text-white text-sm rounded-xl font-bold hover:opacity-90 active:scale-95 flex items-center justify-center gap-2 mt-2" style={{ background:"#110767",fontFamily:"Garamond, serif",letterSpacing:"0.05em" }}>
            <Lock size={14}/> Se connecter
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 mt-5">
          <div className="h-px flex-1" style={{ background:"#C9A84C",opacity:0.3 }}/><p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">Accès membres</p><div className="h-px flex-1" style={{ background:"#C9A84C",opacity:0.3 }}/>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Root App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [page,setPage] = useState<PageId>("login");
  const [dossiers,setDossiers] = useState<Dossier[]>(initDossiers);
  const [rdvs,setRdvs] = useState<Rdv[]>(initRdvs);
  const [users,setUsers] = useState<User[]>(initUsers);
  const [notifs,setNotifs] = useState<Notif[]>(initNotifs);
  const [demandes,setDemandes] = useState<DemandePublique[]>(initDemandes);
  const [toasts,setToasts] = useState<Toast[]>([]);
  const [currentUser,setCurrentUser] = useState<User|null>(null);

  const showToast = (msg:string,type="info")=>{
    const id=Date.now();
    setToasts(t=>[...t,{id,msg,type}]);
    setTimeout(()=>setToasts(t=>t.filter(x=>x.id!==id)),3500);
  };
  const addNotif = (txt:string,type:string)=>
    setNotifs(p=>[{id:`N${Date.now()}`,txt,time:nowStr(),type,vue:false},...p]);
  const markAllVue = ()=>setNotifs(p=>p.map(n=>({...n,vue:true})));

  const avocatsList = users.filter(u=>u.role==="Avocat").map(u=>`Maître ${u.prenom} ${u.nom}`);
  const notifNonVues = notifs.filter(n=>!n.vue).length;
  const nouvellesDemandes = demandes.filter(d=>d.statut==="Nouvelle").length;

  // currentUser toujours synchronisé avec users (photo, etc.)
  const syncedCurrentUser = currentUser?users.find(u=>u.id===currentUser.id)||currentUser:null;

  const counts:Record<string,number> = {
    notifications: notifNonVues,
    demandes: nouvellesDemandes,
  };

  // Polling API site public toutes les 15s
  // Lecture des demandes depuis localStorage (site public)
useEffect(() => {
  if (!syncedCurrentUser) return;

  const lireDemandes = () => {
    try {
      const raw = localStorage.getItem("lexoffice_demandes");
      if (!raw) return;

      const data: DemandePublique[] = JSON.parse(raw);

      setDemandes((prev) => {
        const existingIds = new Set(prev.map((d) => d.id));
        const nouvelles = data.filter((d) => !existingIds.has(d.id));

        if (nouvelles.length > 0) {
          addNotif(
            `${nouvelles.length} nouvelle(s) demande(s) depuis le site public`,
            "info"
          );
          return [...nouvelles, ...prev];
        }
        return prev;
      });
    } catch {
      /* localStorage vide ou invalide — silencieux */
    }
  };

  lireDemandes(); // lecture immédiate au login
  const interval = setInterval(lireDemandes, 5000);
  return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [syncedCurrentUser]);

  if(page==="login"||!syncedCurrentUser){
    return (
      <>
        <PageLogin allUsers={users} onLogin={user=>{ setCurrentUser(user); setPage("dashboard"); }}/>
        <ToastContainer toasts={toasts}/>
      </>
    );
  }

  const pageMap:Record<string,React.ReactNode> = {
    dashboard:<PageDashboard dossiers={dossiers} rdvs={rdvs} users={users} notifs={notifs} demandes={demandes} setPage={setPage}/>,
    dossiers:<PageDossiers dossiers={dossiers} setDossiers={setDossiers} showToast={showToast} addNotif={addNotif} avocatsList={avocatsList}/>,
    rdv:<PageRdv rdvs={rdvs} setRdvs={setRdvs} showToast={showToast} addNotif={addNotif} avocatsList={avocatsList}/>,
    clients:<PageClients dossiers={dossiers}/>,
    calendrier:<PageCalendrier rdvs={rdvs} onAddRdv={()=>setPage("rdv")}/>,
    notifications:<PageNotifications notifs={notifs} markAllVue={markAllVue}/>,
    demandes:<PageDemandes demandes={demandes} setDemandes={setDemandes} showToast={showToast} addNotif={addNotif} avocatsList={avocatsList} setRdvs={setRdvs} rdvsCount={rdvs.length}/>,
    utilisateurs:<PageUtilisateurs users={users} setUsers={setUsers} showToast={showToast} addNotif={addNotif} currentUser={syncedCurrentUser}/>,
    statistiques:<PageStatistiques dossiers={dossiers} rdvs={rdvs}/>,
    profil:<PageProfil currentUser={syncedCurrentUser} setUsers={setUsers} showToast={showToast}/>,
  };

  return (
    <div className="flex h-screen overflow-hidden" style={{ fontFamily:"'DM Sans', sans-serif",background:"#f8f7fc" }}>
      <Sidebar page={page} setPage={setPage} counts={counts}/>
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Navbar notifs={notifs} setPage={setPage} currentUser={syncedCurrentUser} notifNonVues={notifNonVues} markAllVue={markAllVue}/>
        <main className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            <div key={page}>
              {pageMap[page]??<PageDashboard dossiers={dossiers} rdvs={rdvs} users={users} notifs={notifs} demandes={demandes} setPage={setPage}/>}
            </div>
          </AnimatePresence>
        </main>
      </div>
      <ToastContainer toasts={toasts}/>
    </div>
  );
}
