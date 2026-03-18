import { useState } from "react";

export default function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
    console.log(email,password);
  }

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Connexion Avocat
        </h2>

        <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 mb-4 rounded"
        onChange={(e)=>setEmail(e.target.value)}
        />

        <input
        type="password"
        placeholder="Mot de passe"
        className="w-full border p-2 mb-4 rounded"
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="w-full bg-[#110767] text-white py-2 rounded">
          Se connecter
        </button>

      </form>

    </div>

  );
}