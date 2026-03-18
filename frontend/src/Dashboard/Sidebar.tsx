import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="w-72 bg-black/90 backdrop-blur-xl text-white h-screen p-6 fixed border-r border-white/10 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-10">Cabinet Luxe</h1>
        <nav className="space-y-4">
          <Link to="/dashboard" className="hover:text-purple-400 transition">Dashboard</Link>
          <Link to="/dashboard/dossiers" className="hover:text-purple-400 transition">Mes Dossiers</Link>
          <Link to="/dashboard/rendezvous" className="hover:text-purple-400 transition">Rendez-vous</Link>
          <Link to="/dashboard/agenda" className="hover:text-purple-400 transition">Agenda</Link>
        </nav>
      </div>
      <button onClick={onLogout} className="mt-6 w-full py-2 bg-red-600 rounded-lg hover:bg-red-700 transition">Déconnexion</button>
    </div>
  );
}