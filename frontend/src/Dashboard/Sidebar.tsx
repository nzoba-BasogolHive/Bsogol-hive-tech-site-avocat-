import { Link } from "react-router-dom";
import { FaHome, FaFolder, FaCalendar, FaUsers } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#110767] text-white p-6">

      <h1 className="text-2xl font-bold mb-10">
        Cabinet Avocat
      </h1>

      <nav className="flex flex-col gap-6">

        <Link to="/dashboard" className="flex items-center gap-3 hover:text-yellow-300">
          <FaHome />
          Dashboard
        </Link>

        <Link to="/dashboard/dossiers" className="flex items-center gap-3 hover:text-yellow-300">
          <FaFolder />
          Dossiers
        </Link>

        <Link to="/dashboard/rendezvous" className="flex items-center gap-3 hover:text-yellow-300">
          <FaCalendar />
          Rendez-vous
        </Link>

        <Link to="/dashboard/utilisateurs" className="flex items-center gap-3 hover:text-yellow-300">
          <FaUsers />
          Utilisateurs
        </Link>

        <Link to="/dashboard/agenda" className="flex items-center gap-3 hover:text-yellow-300">
          📅 Agenda
        </Link>

      </nav>
    </div>
  );
}