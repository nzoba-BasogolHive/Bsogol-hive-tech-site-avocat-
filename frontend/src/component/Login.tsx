import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Role } from "../types";

interface LoginProps {
  onLogin: (loggedIn: boolean, role: Role | null) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("secretaire");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Bloquer accès si déjà connecté
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth === "true") {
      onLogin(true, localStorage.getItem("role") as Role);
    }
  }, []);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async () => {
    // Validation stricte
    if (!email || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }
    if (!validateEmail(email)) {
      setError("Email invalide");
      return;
    }
    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });

      if (!response.ok) {
        throw new Error("Email ou mot de passe incorrect");
      }

      const data = await response.json();

      // Stockage sécurisé dans localStorage
      localStorage.setItem("auth", "true");
      localStorage.setItem("role", data.role);
      localStorage.setItem("token", data.token);

      onLogin(true, data.role as Role);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Erreur lors de la connexion");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-white">
      <motion.div
        className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Espace Client Sécurisé
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-black/40 text-white placeholder-white"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-black/40 text-white placeholder-white"
        />

        <select
          value={role}
          onChange={e => setRole(e.target.value as Role)}
          className="w-full mb-6 p-3 rounded-lg bg-black/40 text-white"
        >
          <option value="avocat">Avocat</option>
          <option value="administrateur">Administrateur</option>
          <option value="secretaire">Secrétaire</option>
        </select>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-red-600 disabled:opacity-50"
        >
          {loading ? "Connexion..." : "Connexion"}
        </button>

        {/* Bouton Déconnexion pour test */}
        {localStorage.getItem("auth") === "true" && (
          <button
            onClick={() => {
              localStorage.clear();
              setError("");
              onLogin(false, null);
            }}
            className="mt-4 w-full py-2 rounded-lg bg-[#110767]"
          >
            Déconnexion
          </button>
        )}
      </motion.div>
    </div>
  );
}