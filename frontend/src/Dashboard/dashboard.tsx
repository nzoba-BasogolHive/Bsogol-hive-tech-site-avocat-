import Sidebar from "../Dashboard/Sidebar";
import Navbar from "../Dashboard/Navbar";
import CardStat from "../Dashboard/CardStat";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-8 grid grid-cols-4 gap-6">
          <CardStat title="Dossiers actifs" number={24} />
          <CardStat title="Clients" number={58} />
          <CardStat title="Rendez-vous" number={12} />
          <CardStat title="Utilisateurs" number={3} />
        </div>
      </div>
    </div>
  );
}