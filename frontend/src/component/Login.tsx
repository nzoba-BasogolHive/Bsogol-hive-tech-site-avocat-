import { useState } from "react";
import { motion } from "framer-motion";
import type { Role } from "../types";

interface LoginProps {
  onLogin: (loggedIn: boolean, role: Role | null) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("secretaire");

  const handleSubmit = () => {
    if (email && password) {
      localStorage.setItem("auth", "true");
      localStorage.setItem("role", role);
      onLogin(true, role);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <motion.div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">Espace Client Sécurisé</h2>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full mb-4 p-3 rounded-lg bg-black/40" />
        <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} className="w-full mb-4 p-3 rounded-lg bg-black/40" />
        <select value={role} onChange={e => setRole(e.target.value as Role)} className="w-full mb-6 p-3 rounded-lg bg-black/40">
          <option value="avocat">Avocat</option>
          <option value="administrateur">Administrateur</option>
          <option value="secretaire">Secrétaire</option>
        </select>
        <button onClick={handleSubmit} className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-red-600">Connexion</button>
      </motion.div>
    </div>
  );
}