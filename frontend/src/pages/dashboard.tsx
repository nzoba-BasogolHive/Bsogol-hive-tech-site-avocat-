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
    const newDossier = {
      nomClient: prompt("Nom du client ?") || "Client",
      telephone: "0000000000",
      dateEnregistrement: new Date().toISOString(),
      titreDossier: prompt("Titre du dossier ?") || "Dossier",
      branche: "Civil",
      status: "En attente",
      description: "",
      avocatAssigné: "Me Test",
      rendezVous: new Date().toISOString(),
    };

    onAdd(newDossier);
  };

  return (
    <button onClick={handleAdd} className="bg-blue-600 px-3 py-1 rounded text-white">
      Ajouter
    </button>
  );
};

export default function DashboardWithCalendar() {
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

  const [dossiers, setDossiers] = useState<DossierClient[]>(initialDossiers);
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
const addDossier = (newDossier: DossierClient) => {
  setDossiers(prev => [...prev, newDossier]);
};
  const statusColors: Record<string, string> = {
    "En cours": "bg-yellow-500",
    "Audience": "bg-blue-500",
    "Terminé": "bg-green-500",
    "Suspendu": "bg-gray-500",
    "Confirmé": "bg-purple-500",
  };

  const brancheColors: Record<string, string> = {
    "Pénal": "bg-red-600",
    "Civil": "bg-purple-600",
    "Travail": "bg-indigo-600",
    "Commercial": "bg-green-600",
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center bg-[#0B0F3F] p-4 z-50">
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-1/3 p-2 rounded bg-white/10 text-white placeholder-white"
        />
        <div className="flex items-center gap-4">
          <button onClick={() => setActiveSection("agenda")}>Dashboard</button>
          <button onClick={() => setActiveSection("dossiers")}>Dossiers</button>
          <button onClick={() => setActiveSection("statutDossier")}>Statut Dossier</button>
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
              className={`p-2 rounded ${activeSection === section ? "bg-[#110767] text-white" : "bg-white/10"}`}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Contenu */}
        <div className="col-span-3 space-y-4 mt-4">
         {/* AGENDA */}
{activeSection === "agenda" && (
  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-6">

    <h2 className="text-xl font-bold">Agenda</h2>

    {/* CALENDRIER AGRANDI */}
    <div className="w-full flex justify-center">
      <Calendar
        onChange={(date) => {
          if (date && !Array.isArray(date)) setSelectedDate(date);
        }}
        value={selectedDate}
        className="bg-gradient-to-br from-[#0f172a] to-black text-white rounded-2xl p-5 w-full max-w-[500px] shadow-lg"
      />
    </div>

    {/* TITRE */}
    <h3 className="font-semibold text-lg">
      Rendez-vous pour {selectedDate.toDateString()}
    </h3>

    {/* LISTE RDV */}
    <ul className="space-y-3">
      {dossiersForSelectedDate.map(d => (
        <li
          key={d.nomClient + d.titreDossier}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-black/30 p-3 rounded-lg border border-white/10"
        >
          {/* INFOS */}
          <div>
            📅 <strong>{d.nomClient}</strong> ({d.titreDossier})  
            <br />
            🕒 {new Date(d.rendezVous!).toLocaleTimeString()}
          </div>

          {/* ACTIONS */}
          <div className="flex flex-wrap gap-2">

            {/* MODIFIER DATE */}
            <input
              type="datetime-local"
              value={
                d.rendezVous
                  ? new Date(d.rendezVous).toISOString().slice(0, 16)
                  : ""
              }
              onChange={e =>
                setDossiers(prev =>
                  prev.map(dd =>
                    dd.nomClient === d.nomClient
                      ? { ...dd, rendezVous: e.target.value }
                      : dd
                  )
                )
              }
              className="bg-black/20 text-white px-2 py-1 rounded"
            />

            {/* SUPPRIMER AVEC CONFIRMATION */}
            <button
              onClick={() => {
                if (window.confirm("Voulez-vous vraiment supprimer ce rendez-vous ?")) {
                  setDossiers(prev =>
                    prev.map(dd =>
                      dd.nomClient === d.nomClient
                        ? { ...dd, rendezVous: undefined, status: "En attente" }
                        : dd
                    )
                  );
                }
              }}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white"
            >
              Supprimer
            </button>

            {/* CONFIRMER */}
            {user.role === "avocat" && d.status === "En attente" && (
              <button
                onClick={() => confirmerRendezVous(d.nomClient)}
                className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white"
              >
                Confirmer
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>

    {/* AJOUT RDV */}
    <div className="pt-2">
      <AjouterRendezVous onAdd={addDossier} />
    </div>

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
  onClick={() => {
    if (window.confirm("Voulez-vous vraiment supprimer ce dossier ?")) {
      setDossiers(prev =>
        prev.map(dd =>
          dd.nomClient === d.nomClient
            ? { ...dd, rendezVous: undefined, status: "En attente" }
            : dd
        )
      );
    }
  }}
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
              <select value={statutFilter} onChange={e => setStatutFilter(e.target.value)} className="p-2 rounded bg-black/30 text-black mb-4">
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