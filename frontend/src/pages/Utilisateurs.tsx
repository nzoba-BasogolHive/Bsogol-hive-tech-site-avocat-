import { useState } from "react";
import type { User, Role } from "../types";

export default function Utilisateurs() {
  const [users, setUsers] = useState<User[]>([]);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("secretaire");

  const addUser = () => {
    if (nom && email) {
      setUsers([...users, { nom, email, role }]);
      setNom(""); setEmail(""); setRole("secretaire");
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-6">Gestion des utilisateurs</h2>
      <div className="mb-6 max-w-lg">
        <input placeholder="Nom" value={nom} onChange={e=>setNom(e.target.value)} className="p-2 rounded mb-2 bg-black/40 w-full" />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="p-2 rounded mb-2 bg-black/40 w-full" />
        <select value={role} onChange={e=>setRole(e.target.value as Role)} className="p-2 rounded mb-2 w-full bg-black/40">
          <option value="avocat">Avocat</option>
          <option value="administrateur">Administrateur</option>
          <option value="secretaire">Secretaire</option>
        </select>
        <button onClick={addUser} className="bg-purple-600 py-2 px-4 rounded text-white w-full">Ajouter</button>
      </div>
      <ul className="space-y-2 max-w-lg">
        {users.map((u,i)=>(
          <li key={i} className="bg-white/5 p-3 rounded flex justify-between border border-white/10">
            <span>{u.nom} ({u.role})</span>
            <span>{u.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}