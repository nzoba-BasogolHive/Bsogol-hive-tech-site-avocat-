import { useState } from "react";
import { motion } from "framer-motion";
import type { DossierClient, Status } from "../types";

export default function Dashboard() {
  const initialDossiers: DossierClient[] = [
    { nomClient: "Jean Dupont", telephone: "0654321098", dateEnregistrement: "2026-03-01", titreDossier: "Vol", branche: "Pénal", status: "En cours", description: "Dossier vol avec témoin", avocatAssigné: "Me Martin", rendezVous: "2026-04-05T10:00" },
    { nomClient: "Marie Curie", telephone: "0678912345", dateEnregistrement: "2026-02-20", titreDossier: "Divorce", branche: "Civil", status: "Audience", description: "Divorce à l'amiable", avocatAssigné: "Me Durand", rendezVous: "2026-04-03T14:00" },
    { nomClient: "Paul Martin", telephone: "0667788990", dateEnregistrement: "2026-01-15", titreDossier: "Contrat", branche: "Commercial", status: "Terminé", description: "Litige contrat", avocatAssigné: "Me Dupont" },
  ];

  const [dossiers] = useState<DossierClient[]>(initialDossiers);
  const [activeSection, setActiveSection] = useState<"notifications" | "agenda" | "dossiers" | "rendezvous">("notifications");

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Menu gauche */}
      <div className="col-span-1 flex flex-col gap-2">
        <button onClick={()=>setActiveSection("notifications")} className={`p-2 rounded ${activeSection==="notifications"?"bg-purple-600 text-white":"bg-white/10"}`}>Notifications</button>
        <button onClick={()=>setActiveSection("agenda")} className={`p-2 rounded ${activeSection==="agenda"?"bg-purple-600 text-white":"bg-white/10"}`}>Agenda</button>
        <button onClick={()=>setActiveSection("dossiers")} className={`p-2 rounded ${activeSection==="dossiers"?"bg-purple-600 text-white":"bg-white/10"}`}>Dossiers</button>
        <button onClick={()=>setActiveSection("rendezvous")} className={`p-2 rounded ${activeSection==="rendezvous"?"bg-purple-600 text-white":"bg-white/10"}`}>Rendez-vous</button>
      </div>

      {/* Contenu droit */}
      <div className="col-span-3 space-y-4">
        {activeSection === "notifications" && (
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <h2 className="text-lg font-bold mb-2">Notifications</h2>
            <ul>
              {dossiers.map(d=>d.rendezVous && <li key={d.nomClient}>📌 Rendez-vous {d.nomClient} à {new Date(d.rendezVous!).toLocaleString()}</li>)}
              <li>📌 Nouvelle audience pour Marie Curie</li>
              <li>📌 Message reçu de Paul Martin</li>
            </ul>
          </div>
        )}

        {activeSection === "agenda" && (
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <h2 className="text-lg font-bold mb-2">Agenda</h2>
            <ul>
              {dossiers.filter(d=>d.rendezVous).map(d=>(
                <li key={d.nomClient}>📅 {d.nomClient} - {new Date(d.rendezVous!).toLocaleString()}</li>
              ))}
            </ul>
          </div>
        )}

        {activeSection === "dossiers" && (
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
            <h2 className="text-lg font-bold mb-2">Dossiers</h2>
            {dossiers.map(d=>(
              <motion.div key={d.nomClient + d.titreDossier} className="p-3 rounded border border-white/10 bg-white/5">
                <p><strong>{d.titreDossier}</strong> - {d.nomClient}</p>
                <p>Branche: {d.branche}</p>
                <p>Status: {d.status}</p>
                <p>Avocat: {d.avocatAssigné}</p>
                {d.rendezVous && <p>Rendez-vous: {new Date(d.rendezVous).toLocaleString()}</p>}
                <p>Tel: {d.telephone}</p>
              </motion.div>
            ))}
          </div>
        )}

        {activeSection === "rendezvous" && (
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <h2 className="text-lg font-bold mb-2">Rendez-vous</h2>
            <ul>
              {dossiers.filter(d=>d.rendezVous).map(d=>(
                <li key={d.nomClient}>🗓 {d.nomClient} ({d.titreDossier}) - {new Date(d.rendezVous!).toLocaleTimeString()}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}