import { FaBell, FaUser } from "react-icons/fa";
import { useAuth } from "./AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-lg">
      <h2 className="text-xl font-semibold">Tableau de bord</h2>
      <div className="flex items-center gap-6">
        <FaBell className="text-xl cursor-pointer hover:text-blue-600 transition" />
        <div className="flex items-center gap-2">
          <FaUser />
          <span>{user?.name}</span>
          <button onClick={logout} className="ml-4 text-red-500 hover:underline">Déconnexion</button>
        </div>
      </div>
    </div>
  );
}