import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Role } from "./types";

interface LoginProps {
  onLogin: (loggedIn: boolean, userRole: Role | null) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role | "">("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email && password && role) {
      localStorage.setItem("auth", "true");
      localStorage.setItem("role", role);
      onLogin(true, role);
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-md border border-white/10">
        <h2 className="text-3xl font-semibold mb-6 text-center">Espace Client Sécurisé</h2>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-black/40 border border-white/10 text-white"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-black/40 border border-white/10 text-white"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as Role)}
          className="w-full mb-6 p-3 rounded-lg bg-black/40 border border-white/10 text-white"
        >
          <option value="">-- Sélectionnez votre rôle --</option>
          <option value="administrateur">Administrateur</option>
          <option value="avocat">Avocat</option>
          <option value="secretaire">Secrétaire</option>
        </select>
        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-lg bg-blue-600 via-pink-600 to-red-600 font-semibold hover:scale-105 transition"
        >
          Connexion
        </button>
      </div>
    </div>
  );
}