import { useState } from "react";

interface User {
  nom: string;
  email: string;
  avatarUrl: string;
  sexe: string;
  pays: string;
  telephone: string;
  adresse: string;
  role: string;
}

export default function ProfilePage({ user, onBack, onSave }: any) {
  const [form, setForm] = useState(user);
  const [password, setPassword] = useState("");

  const handleSave = () => {
    if (!password) {
      alert("Veuillez entrer votre mot de passe");
      return;
    }

    onSave(form);
    alert("Profil mis à jour !");
  };

  return (
    <div className="min-h-screen bg-white text-black p-6">

      {/* BOUTON RETOUR */}
      <button
        onClick={onBack}
        className="mb-4 bg-gray-200 px-3 py-1 rounded"
      >
        ← Retour
      </button>

      {/* PROFILE CARD */}
      <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded-xl shadow">

        <div className="flex flex-col items-center mb-4">
          <img
            src={form.avatarUrl}
            className="w-24 h-24 rounded-full mb-2"
          />

          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setForm({
                  ...form,
                  avatarUrl: URL.createObjectURL(file),
                });
              }
            }}
          />
        </div>

        {/* INPUTS */}
        {Object.keys(form).map((key) =>
          key !== "avatarUrl" ? (
            <input
              key={key}
              value={(form as any)[key]}
              onChange={(e) =>
                setForm({ ...form, [key]: e.target.value })
              }
              className="w-full mb-2 p-2 border rounded"
            />
          ) : null
        )}

        {/* MOT DE PASSE */}
        <input
          type="password"
          placeholder="Mot de passe pour confirmer"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />

        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
}