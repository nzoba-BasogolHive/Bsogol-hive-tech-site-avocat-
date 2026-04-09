// src/components/DashboardWithCalendar.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export type Role = "avocat" | "administrateur" | "secretaire";

interface DossierClient {
  nomClient: string;
  telephone: string;
  dateEnregistrement: string;
  titreDossier: string;
  branche: string;
  status: string;
  description: string;
  avocatAssigné: string;
  rendezVous?: string;
}

interface Notification {
  id: string;
  message: string;
  date: string;
  lu: boolean;
}

interface User {
  nom: string;
  email: string;
  avatarUrl: string;
  sexe: string;
  pays: string;
  telephone: string;
  adresse: string;
  role: Role;
}

interface AjouterRendezVousProps {
  onAdd: (rdv: DossierClient) => void;
}

const AjouterRendezVous = ({ onAdd }: AjouterRendezVousProps) => {
  const handleAdd = () => {
    onAdd({
      nomClient: "Nouveau Client",
      telephone: "0000000000",
      dateEnregistrement: new Date().toISOString(),
      titreDossier: "Nouveau Dossier",
      branche: "Civil",
      status: "En attente",
      description: "Description",
      avocatAssigné: "Me Test",
      rendezVous: new Date().toISOString(),
    });
  };
  return <button onClick={handleAdd} className="bg-blue-600 px-3 py-1 rounded text-white">Ajouter RDV</button>;
};
interface DashboardProps {
  dossiers: DossierClient[];
  setDossiers: React.Dispatch<React.SetStateAction<DossierClient[]>>;
}



export default function DashboardWithCalendar({ dossiers, setDossiers }: DashboardProps) {
  const [user, setUser] = useState<User>({
    nom: "Jean Dupont",
    email: "jean.dupont@example.com",
    avatarUrl: "https://i.pravatar.cc/150?img=12",
    sexe: "Homme",
    pays: "France",
    telephone: "0654321098",
    adresse: "12 rue de Paris, Paris",
    role: "avocat",
  });

  const initialDossiers: DossierClient[] = [
    { nomClient: "Jean Dupont", telephone: "0654321098", dateEnregistrement: "2026-03-01", titreDossier: "Vol", branche: "Pénal", status: "En cours", description: "Dossier vol avec témoin", avocatAssigné: "Me Martin", rendezVous: "2026-04-05T10:00" },
    { nomClient: "Marie Curie", telephone: "0678912345", dateEnregistrement: "2026-02-20", titreDossier: "Divorce", branche: "Civil", status: "Audience", description: "Divorce à l'amiable", avocatAssigné: "Me Durand", rendezVous: "2026-04-03T14:00" },
    { nomClient: "Paul Martin", telephone: "0667788990", dateEnregistrement: "2026-01-15", titreDossier: "Contrat", branche: "Commercial", status: "Terminé", description: "Litige contrat", avocatAssigné: "Me Dupont" },
  ];

 
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: "1", message: "Rendez-vous avec Jean Dupont", date: "2026-04-05T10:00", lu: false },
    { id: "2", message: "Nouvelle audience pour Marie Curie", date: "2026-04-03T14:00", lu: false },
  ]);

  const [activeSection, setActiveSection] = useState<"notifications" | "agenda" | "dossiers" | "rendezvous" | "statutDossier">("agenda");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [brancheFilter, setBrancheFilter] = useState<string>("Tous");
  const [statutFilter, setStatutFilter] = useState<string>("Tous");

  const addRendezVous = (rdv: DossierClient) => {
    setDossiers(prev => [...prev, rdv]);
    setNotifications(prev => [...prev, { id: (prev.length + 1).toString(), message: `Nouveau rendez-vous : ${rdv.nomClient}`, date: rdv.rendezVous!, lu: false }]);
  };

  const confirmerRendezVous = (nomClient: string) => {
    setDossiers(prev => prev.map(d => d.nomClient === nomClient ? { ...d, status: "Confirmé" } : d));
    const dossier = dossiers.find(d => d.nomClient === nomClient);
    if (dossier) {
      setNotifications(prev => [...prev, { id: (prev.length + 1).toString(), message: `Rendez-vous confirmé pour ${nomClient}`, date: new Date().toISOString(), lu: false }]);
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, lu: true } : n));
  };

  const updateDossierStatus = (nomClient: string, status: string) => {
    setDossiers(prev => prev.map(d => d.nomClient === nomClient ? { ...d, status } : d));
  };

  const filteredDossiers = dossiers
    .filter(d =>
      (brancheFilter === "Tous" || d.branche === brancheFilter) &&
      (statutFilter === "Tous" || d.status === statutFilter) &&
      (d.nomClient.toLowerCase().includes(searchQuery.toLowerCase()) ||
       d.titreDossier.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  const filteredNotifications = notifications.filter(n =>
    n.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const dossiersForSelectedDate = filteredDossiers.filter(d =>
    d.rendezVous && new Date(d.rendezVous).toDateString() === selectedDate.toDateString()
  );

 const statusColors: Record<string, string> = {
  "En cours": "bg-gray-100 text-gray-800",
  "Audience": "bg-gray-200 text-gray-800",
  "Terminé": "bg-gray-100 text-gray-600",
  "Suspendu": "bg-gray-300 text-gray-700",
  "Confirmé": "bg-gray-200 text-gray-900",
};
 const brancheColors: Record<string, string> = {
  "Pénal": "bg-[#1e3a5f] text-white border border-[#162c46]",
  "Civil": "bg-[#5a2a27] text-white border border-[#3f1d1b]",
  "Travail": "bg-[#2f4f4f] text-white border border-[#223737]",
  "Affaire": "bg-[#3a3a3a] text-white border border-[#2a2a2a]",
};

  return (
  <div className="min-h-screen bg-white text-black">
      {/* NAVBAR */}
     <div className="fixed top-0 left-0 w-full flex justify-between items-center bg-white border-b p-4 z-50">
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
         className="w-1/3 p-2 rounded bg-gray-100 text-black placeholder-gray-500"
        />
        <div className="flex items-center gap-4">
          <button onClick={() => setActiveSection("agenda")}className="text-white px-3 py-1 rounded hover:bg-white/10">Dashboard</button>
          <button onClick={() => setActiveSection("dossiers")}className="text-white px-3 py-1 rounded hover:bg-white/10">Dossiers</button>
          <button onClick={() => setActiveSection("statutDossier")}className="text-white px-3 py-1 rounded hover:bg-white/10">Statut Dossier</button>
          <button className="bg-red-600 px-2 py-1 rounded">Déconnecter</button>

          {/* Notifications */}
          <div className="relative">
            <button onClick={() => setShowNotifications(prev => !prev)}>🔔
              {notifications.some(n => !n.lu) && <span className="absolute -top-1 -right-2 bg-red-500 rounded-full px-1 text-xs">{notifications.filter(n => !n.lu).length}</span>}
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-96 bg-black text-white rounded-xl border border-white/20 p-3 shadow-lg">
                <h3 className="font-semibold mb-2">Notifications</h3>
                {filteredNotifications.map(n => (
                  <div key={n.id} onClick={() => markAsRead(n.id)} className={`p-2 rounded mb-1 cursor-pointer ${!n.lu ? "bg-[#110767]" : ""}`}>
                    {n.message} - {new Date(n.date).toLocaleString()}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Avatar */}
          <div className="relative">
            <img src={user.avatarUrl} alt="avatar" className="w-10 h-10 rounded-full cursor-pointer" onClick={() => setShowUserMenu(prev => !prev)} />
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-black text-white rounded-xl border border-white/20 p-3 shadow-lg space-y-1">
                <p><strong>{user.nom}</strong></p>
                <p>Email: {user.email}</p>
                <p>Sexe: {user.sexe}</p>
                <p>Pays: {user.pays}</p>
                <p>Telephone: {user.telephone}</p>
                <p>Adresse: {user.adresse}</p>
                <p>Role: {user.role}</p>
                <input
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setUser(prev => ({ ...prev, avatarUrl: URL.createObjectURL(file) }));
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-20 px-6">
        {/* Sidebar */}
        <div className="col-span-1 flex flex-col gap-2 mt-4">
          {["notifications", "agenda", "dossiers", "rendezvous", "statutDossier"].map(section => (
            <button key={section} onClick={() => setActiveSection(section as any)}
  className={`p-2 rounded ${activeSection === section ? "bg-blue-600" : "bg-gray-800"} text-white`}>
  {section.charAt(0).toUpperCase() + section.slice(1)}
</button>
          ))}
        </div>

        {/* Contenu */}
        <div className="col-span-3 space-y-4 mt-4">
          {/* AGENDA */}
          {activeSection === "agenda" && (
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-4">
              <h2 className="text-lg font-bold mb-2">Agenda</h2>
              <Calendar
                onChange={(date) => { if (date && !Array.isArray(date)) setSelectedDate(date); }}
                value={selectedDate}
                className="bg-black text-white rounded-lg p-2"
              />
              <h3 className="font-semibold mt-2">Rendez-vous pour {selectedDate.toDateString()}</h3>
              <ul>
                {dossiersForSelectedDate.map(d => (
                  <li key={d.nomClient} className="flex items-center gap-2 mb-2">
                    📅 {d.nomClient} ({d.titreDossier}) - {new Date(d.rendezVous!).toLocaleTimeString()}
                    <input
                      type="datetime-local"
                      value={d.rendezVous ? new Date(d.rendezVous).toISOString().slice(0,16) : ""}
                      onChange={e => setDossiers(prev => prev.map(dd => dd.nomClient === d.nomClient ? { ...dd, rendezVous: e.target.value } : dd))}
                      className="bg-black/20 text-white px-2 py-1 rounded"
                    />
                    <button
                      onClick={() => setDossiers(prev => prev.map(dd => dd.nomClient === d.nomClient ? { ...dd, rendezVous: undefined, status: "En attente" } : dd))}
                      className="bg-red-600 text-white px-2 py-1 rounded"
                    >
                      Supprimer
                    </button>
                    {user.role === "avocat" && d.status === "En attente" && (
                      <button onClick={() => confirmerRendezVous(d.nomClient)} className="bg-green-600 text-white px-2 py-1 rounded">Confirmer</button>
                    )}
                  </li>
                ))}
              </ul>
              <AjouterRendezVous onAdd={addRendezVous} />
            </div>
          )}

          {/* Reste des sections... */}
          {/* RENDEZ-VOUS */}
          {activeSection === "rendezvous" && (
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <ul>
                {filteredDossiers.filter(d => d.rendezVous).map(d => (
                  <li key={d.nomClient} className="flex items-center gap-2 mb-2">
                    🗓 {d.nomClient} ({d.titreDossier}) - {new Date(d.rendezVous!).toLocaleString()}
                    <input
                      type="datetime-local"
                      value={d.rendezVous ? new Date(d.rendezVous).toISOString().slice(0,16) : ""}
                      onChange={e => setDossiers(prev => prev.map(dd => dd.nomClient === d.nomClient ? { ...dd, rendezVous: e.target.value } : dd))}
                      className="bg-black/20 text-white px-2 py-1 rounded"
                    />
                    <button
                      onClick={() => setDossiers(prev => prev.map(dd => dd.nomClient === d.nomClient ? { ...dd, rendezVous: undefined, status: "En attente" } : dd))}
                      className="bg-red-600 text-white px-2 py-1 rounded"
                    >
                      Supprimer
                    </button>
                    {user.role === "avocat" && d.status === "En attente" && (
                      <button onClick={() => confirmerRendezVous(d.nomClient)} className="bg-green-600 text-white px-2 py-1 rounded">Confirmer</button>
                    )}
                  </li>
                ))}
              </ul>
              <AjouterRendezVous onAdd={addRendezVous} />
            </div>
          )}

          {/* NOTIFICATIONS */}
          {activeSection === "notifications" && (
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              {filteredNotifications.map(n => (
                <div key={n.id} onClick={() => markAsRead(n.id)} className={`p-2 rounded mb-1 cursor-pointer ${!n.lu ? "bg-[#110767]" : ""}`}>
                  {n.message} - {new Date(n.date).toLocaleString()}
                </div>
              ))}
            </div>
          )}

          {/* DOSSIERS */}
          {activeSection === "dossiers" && (
            <div className="space-y-4">
              <select value={brancheFilter} onChange={e => setBrancheFilter(e.target.value)} className="p-2 rounded bg-black/30 text-white">
                <option value="Tous">Toutes les branches</option>
                <option value="Pénal">Pénal</option>
                <option value="Civil">Civil</option>
                <option value="Travail">Travail</option>
                <option value="Commercial">Commercial</option>
              </select>

              {filteredDossiers.map(d => (
                <motion.div key={d.nomClient + d.titreDossier} className="p-4 rounded-xl shadow-lg bg-white/5 flex justify-between items-center border border-white/10">
                  <div>
                    <p className="font-bold text-lg">{d.titreDossier}</p>
                    <p>{d.nomClient}</p>
                    <p className={`inline-block px-2 py-1 rounded text-sm ${brancheColors[d.branche]}`}>{d.branche}</p>
                    <p className={`inline-block px-2 py-1 rounded text-sm ${statusColors[d.status]}`}>{d.status}</p>
                    <p>Avocat: {d.avocatAssigné}</p>
                    {d.rendezVous && <p>Rendez-vous: {new Date(d.rendezVous).toLocaleString()}</p>}
                  </div>
                  {["avocat", "secretaire"].includes(user.role) && (
                    <select value={d.status} onChange={e => updateDossierStatus(d.nomClient, e.target.value)} className="p-2 rounded bg-black/20 text-black">
                      {Object.keys(statusColors).map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* STATUT DOSSIER */}
          {activeSection === "statutDossier" && (
            <div className="space-y-4">
              <select value={statutFilter} onChange={e => setStatutFilter(e.target.value)} className="p-2 rounded bg-black/30 text-white mb-4">
                <option value="Tous">Tous les statuts</option>
                <option value="En cours">Dossier en cours</option>
                <option value="Audience">Dossier en audience</option>
                <option value="Terminé">Dossier terminé</option>
                <option value="Suspendu">Dossier suspendu</option>
              </select>

              {filteredDossiers.map(d => (
                <div key={d.nomClient + d.titreDossier} className="p-4 rounded-xl shadow-lg bg-white/5 border border-white/10">
                  <p className="font-bold text-lg">{d.titreDossier}</p>
                  <p>{d.nomClient}</p>
                  <p className={`inline-block px-2 py-1 rounded text-sm ${brancheColors[d.branche]}`}>{d.branche}</p>
                  <p className={`inline-block px-2 py-1 rounded text-sm ${statusColors[d.status]}`}>{d.status}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}