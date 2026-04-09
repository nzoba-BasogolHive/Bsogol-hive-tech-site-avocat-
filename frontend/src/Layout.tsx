// src/Layout.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardWithCalendar from "./pages/DashboardWithCalendar"; 
import Dossiers from "./pages/Dossiers";
import RendezVous from "./pages/RendezVous";
import Utilisateurs from "./pages/Utilisateurs";
import type { DossierClient, Role } from "./types"; // type-only import

interface LayoutProps {
  role: Role;
  onLogout: () => void; // pour bouton déconnexion
}

// Si tu n'as pas initialDossiers, tu peux définir un initial directement ici :
const initialDossiers: DossierClient[] = [
  {
    nomClient: "Jean Dupont",
    telephone: "0654321098",
    dateEnregistrement: "2026-03-01",
    titreDossier: "Vol",
    branche: "Pénal",
    status: "En cours",
    description: "Dossier vol avec témoin",
    avocatAssigné: "Me Martin",
  },
  {
    nomClient: "Marie Curie",
    telephone: "0678912345",
    dateEnregistrement: "2026-02-20",
    titreDossier: "Divorce",
    branche: "Civil",
    status: "Audience",
    description: "Divorce à l'amiable",
    avocatAssigné: "Me Durand",
  },
];

export default function Layout({ role, onLogout }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState<"dashboard"|"dossiers"|"rendezvous"|"utilisateurs">("dashboard");

  const [dossiers, setDossiers] = useState<DossierClient[]>(initialDossiers);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="fixed top-0 left-0 w-72 h-screen bg-black/90 text-white p-6 border-r border-white/10 z-50"
          >
            <h1 className="text-xl font-bold mb-6">Cabinet Luxe</h1>
            <nav className="flex flex-col gap-4">
              <button onClick={()=>setActiveSection("dashboard")} className="hover:text-purple-400">Dashboard</button>
              <button onClick={()=>setActiveSection("dossiers")} className="hover:text-purple-400">Dossiers</button>
              <button onClick={()=>setActiveSection("rendezvous")} className="hover:text-purple-400">Rendez-vous</button>
              {(role==="administrateur"||role==="avocat") && <button onClick={()=>setActiveSection("utilisateurs")} className="hover:text-purple-400">Utilisateurs</button>}
              <button onClick={onLogout} className="mt-10 bg-purple-600 py-2 px-4 rounded">Déconnexion</button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenu principal */}
      <div className="flex-1 bg-gradient-to-br from-black via-gray-900 to-black text-white p-6 ml-72">
        {activeSection === "dashboard" && (
          <DashboardWithCalendar dossiers={dossiers} setDossiers={setDossiers} />
        )}
        {activeSection === "dossiers" && <Dossiers />}
        {activeSection === "rendezvous" && <RendezVous />}
        {activeSection === "utilisateurs" && <Utilisateurs />}
      </div>
    </div>
  );
}