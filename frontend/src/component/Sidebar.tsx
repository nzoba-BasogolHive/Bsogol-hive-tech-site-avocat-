import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Role } from "../types";

interface SidebarProps {
  role: Role;
  isOpen: boolean;
  toggle: () => void;
}

export default function Sidebar({ role, isOpen, toggle }: SidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{x:-300}} animate={{x:0}} exit={{x:-300}} transition={{type:"spring", stiffness:200, damping:30}}
         className="w-72 h-screen bg-black/90 text-white p-6 border-r border-white/10">
          <button onClick={toggle} className="text-white mb-6 px-2 py-1 border border-white/20 rounded hover:bg-white/10 transition">Fermer</button>
          <h1 className="text-xl font-bold mb-10">Cabinet Luxe</h1>
          <nav className="flex flex-col gap-4">
            <Link to="/dashboard" className="hover:text-purple-400 transition">Dashboard</Link>
            <Link to="/dashboard/dossiers" className="hover:text-purple-400 transition">Mes Dossiers</Link>
            <Link to="/dashboard/rendezvous" className="hover:text-purple-400 transition">Rendez-vous</Link>
            <Link to="/dashboard/agenda" className="hover:text-purple-400 transition">Agenda</Link>
            {(role==="administrateur" || role==="avocat") && <Link to="/dashboard/utilisateurs" className="hover:text-purple-400 transition">Gestion utilisateurs</Link>}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}