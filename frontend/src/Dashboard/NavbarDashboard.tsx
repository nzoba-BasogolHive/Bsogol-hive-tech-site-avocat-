import { FaBell, FaUser } from "react-icons/fa";

export default function NavbarDashboard() {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow">

      <h2 className="text-xl font-semibold">
        Tableau de bord
      </h2>

      <div className="flex items-center gap-6">

        <FaBell className="text-xl cursor-pointer hover:text-blue-600" />

        <div className="flex items-center gap-2">
          <FaUser />
          <span>Avocat</span>
        </div>

      </div>
    </div>
  );
}