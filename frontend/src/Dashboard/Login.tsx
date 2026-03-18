// src/pages/Login.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("Submit clicked", email, password); // debug
  const success = login(email, password);
  console.log("Login success?", success);
  if (success) navigate("/dashboard");
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#110767] to-[#1b0f6b]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-2xl w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Connexion sécurisée
        </h2>

        <input
          className="w-full border p-2 mb-4 rounded"
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full border p-2 mb-4 rounded"
          placeholder="Mot de passe"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-[#110767] text-white py-3 rounded-lg mt-4 hover:scale-105 transition">
          Se connecter
        </button>
      </form>
    </div>
  );
}