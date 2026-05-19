import { useState } from "react";
import type { User, Role } from "../types";

export default function Utilisateurs() {
  const [users, setUsers] = useState<User[]>([]);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("secretaire");

  const addUser = () => {
    if (!nom || !email) return;

    const newUser: User = {
      nom,
      email,
      role,
    };

    setUsers((prev) => [...prev, newUser]);

    setNom("");
    setEmail("");
    setRole("secretaire");
  };

  return (
    <div className="min-h-screen bg-blue-400/20 text-white flex items-center justify-center p-6">

      <div className="w-full max-w-2xl">

        {/* TITRE */}
        <h2 className="text-4xl font-bold mb-8 text-center bg-blue-400 bg-clip-text text-transparent">
          Gestion des utilisateurs
        </h2>

        {/* FORMULAIRE */}
        <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 mb-8">

          <input
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="w-full mb-3 p-3 rounded-xl bg-white/5 border border-white/10 text-black  placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className="w-full mb-4 p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-purple-500 outline-none"
          >
            <option value="avocat">Avocat</option>
            <option value="administrateur">Administrateur</option>
            <option value="secretaire">Secrétaire</option>
          </select>

          <button
            onClick={addUser}
            className="w-full p-3 rounded-xl font-semibold text-white 
            bg-blue-400
            shadow-lg hover:shadow-blue-500/30 transition"
          >
            Ajouter utilisateur
          </button>
        </div>

        {/* LISTE */}
        <div className="space-y-3">

          {users.map((u, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-xl border border-white/10 
              p-4 rounded-xl flex justify-between items-center 
              hover:shadow-blue-500/20 transition"
            >

              <div>
                <p className="font-semibold">{u.nom}</p>
                <p className="text-sm text-white/60">{u.email}</p>
              </div>

              {/* ROLE BADGE */}
              <span className={`
                px-3 py-1 rounded-full text-sm
                ${u.role === "avocat" && "bg-blue-500/20 text-blue-300"}
                ${u.role === "administrateur" && "bg-purple-500/20 text-purple-300"}
                ${u.role === "secretaire" && "bg-green-500/20 text-green-300"}
              `}>
                {u.role}
              </span>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}