import { Link, useLocation } from "react-router-dom";
import { FaHome, FaFolder, FaCalendar, FaUsers } from "react-icons/fa";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { path: "/dashboard", name: "Dashboard", icon: <FaHome /> },
    { path: "/dashboard/dossiers", name: "Dossiers", icon: <FaFolder /> },
    { path: "/dashboard/rendezvous", name: "Rendez-vous", icon: <FaCalendar /> },
    { path: "/dashboard/utilisateurs", name: "Utilisateurs", icon: <FaUsers /> },
    { path: "/dashboard/agenda", name: "Agenda", icon: "📅" },
  ];

  return (
    <div className="w-64 h-screen bg-[#110767] text-white p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-10">Cabinet Avocat</h1>
      <nav className="flex flex-col gap-4">
        {links.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center gap-3 p-2 rounded-lg hover:bg-yellow-300 hover:text-[#110767] transition 
              ${location.pathname === link.path ? "bg-yellow-300 text-[#110767]" : ""}`}
          >
            {link.icon} {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}