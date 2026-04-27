import Sidebar from "../component//Sidebar";
import DashboardWithCalendar from "./DashboardWithCalendar";
import { useState } from "react";

export default function DashboardLayout({ dossiers, setDossiers }: any) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">

  {/* SIDEBAR */}
  <div className="w-72 flex-shrink-0">
    <Sidebar
      role="avocat"
      isOpen={true}
      toggle={() => {}}
    />
  </div>

  {/* DASHBOARD */}
  <div className="flex-1 overflow-y-auto bg-white">
    <DashboardWithCalendar
      dossiers={dossiers}
      setDossiers={setDossiers}
    />
  </div>

</div>
  );
}