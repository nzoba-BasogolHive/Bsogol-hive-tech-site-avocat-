import { useState } from "react";
import { motion } from "framer-motion";
import StatusBadge from "../component/StatusBadge";
import Timeline from "../component/Timeline";
import type { DossierClient, Branche } from "../types";


interface Props {
  dossiers: DossierClient[];
  setDossiers: React.Dispatch<React.SetStateAction<DossierClient[]>>;
}

export default function Dossiers({ dossiers, setDossiers }: Props) {

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [form, setForm] = useState<DossierClient>({
    nomClient: "",
    telephone: "",
    dateEnregistrement: "",
    titreDossier: "",
    branche: "Pénal",
    status: "En cours",
    description: "",
    avocatAssigné: "",
  });

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]:
      name === "status"
        ? (value as DossierClient["status"])
        : name === "branche"
        ? (value as DossierClient["branche"])
        : value,
  }));
};
  const handleAddOrUpdate = () => {
    if (editingIndex !== null) {
      const updated = [...dossiers];
      updated[editingIndex] = form;
      setDossiers(updated);
      setEditingIndex(null);
    } else {
      setDossiers([form, ...dossiers]);
    }

    setForm({
      nomClient: "",
      telephone: "",
      dateEnregistrement: "",
      titreDossier: "",
      branche: "Pénal",
      status: "En cours",
      description: "",
      avocatAssigné: "",
    });
  };

  const handleEdit = (index: number) => {
    setForm(dossiers[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index: number) => {
    const updated = dossiers.filter((_, i) => i !== index);
    setDossiers(updated);
    if (editingIndex === index) setEditingIndex(null);
  };

  const grouped = dossiers.reduce<Record<Branche, DossierClient[]>>((acc, d) => {
    if (!acc[d.branche]) acc[d.branche] = [];
    acc[d.branche].push(d);
    return acc;
  }, {} as Record<Branche, DossierClient[]>);

  return (
  
  <div className="min-h-screen bg-[#0B1220] text-white p-10">

    {/* TITRE */}
    <h2 className="text-4xl font-bold tracking-tight mb-10 bg-blue-400 bg-clip-text text-transparent">
      Gestion des dossiers
    </h2>

    {/* FORMULAIRE */}
    <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-6 text-white/90">
        {editingIndex !== null ? "Modifier le dossier" : "Ajouter un dossier"}
      </h3>

      {/* NOM CLIENT */}
      <input
        id="nomClient"
        name="nomClient"
        value={form.nomClient}
        onChange={handleChange}
        placeholder="Nom du client"
        className="w-full mb-4 p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* TELEPHONE */}
      <input
        id="telephone"
        name="telephone"
        value={form.telephone}
        onChange={handleChange}
        placeholder="Téléphone"
        className="w-full mb-4 p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* DATE */}
      <input
        type="date"
        id="dateEnregistrement"
        name="dateEnregistrement"
        value={form.dateEnregistrement}
        onChange={handleChange}
        className="w-full mb-4 p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-purple-500"
      />

      {/* TITRE DOSSIER */}
      <input
        id="titreDossier"
        name="titreDossier"
        value={form.titreDossier}
        onChange={handleChange}
        placeholder="Titre du dossier"
        className="w-full mb-4 p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
      />

      {/* DESCRIPTION */}
      <input
        id="description"
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full mb-4 p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
      />

      {/* AVOCAT */}
      <input
        id="avocatAssigné"
        name="avocatAssigné"
        value={form.avocatAssigné}
        onChange={handleChange}
        placeholder="Avocat assigné"
        className="w-full mb-4 p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
      />

      {/* BRANCHE */}
      <select
        id="branche"
        name="branche"
        value={form.branche}
        onChange={handleChange}
        className="w-full mb-4 p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-purple-500"
      >
        <option value="Pénal">Pénal</option>
        <option value="Civil">Civil</option>
        <option value="Commercial">Commercial</option>
      </select>

      {/* STATUS */}
      <select
        id="status"
        name="status"
        value={form.status}
        onChange={handleChange}
        className="w-full mb-6 p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-blue-500"
      >
        <option value="En cours">En cours</option>
        <option value="Audience">Audience</option>
        <option value="Terminé">Terminé</option>
        <option value="Suspendu">Suspendu</option>
      </select>

      {/* BUTTON */}
      <button
        onClick={handleAddOrUpdate}
        className="w-full p-3 rounded-xl font-semibold text-white 
        bg-blue-400
        shadow-lg hover:shadow-blue-500/30 transition"
      >
        {editingIndex !== null ? "Mettre à jour" : "Ajouter"}
      </button>
    </div>

    {/* LISTE GROUPÉE */}
    {Object.entries(grouped).map(([branche, items]) => (
      <div key={branche} className="mb-10">

        <h3 className="text-xl font-semibold mb-4 text-white/80">
          {branche}
        </h3>

        <div className="space-y-4">
          {items.map((d, index) => {
            const globalIndex = dossiers.indexOf(d);

            return (
              <motion.div
                key={globalIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 
                p-6 rounded-2xl shadow-xl hover:shadow-blue-500/20 transition"
              >
                <p className="font-bold text-lg">
                  {d.titreDossier} - {d.nomClient}
                </p>

                <p className="text-white/70 mt-1">{d.description}</p>

                {/* STATUS BADGE */}
                <span className={`
                  inline-block mt-3 px-3 py-1 rounded-full text-sm
                  ${d.status === "En cours" && "bg-blue-500/20 text-blue-300"}
                  ${d.status === "Audience" && "bg-purple-500/20 text-purple-300"}
                  ${d.status === "Terminé" && "bg-green-500/20 text-green-300"}
                  ${d.status === "Suspendu" && "bg-red-500/20 text-red-300"}
                `}>
                  {d.status}
                </span>

                {/* ACTIONS */}
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(globalIndex)}
                    className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-lg hover:bg-yellow-500/30 transition"
                  >
                    Modifier
                  </button>

                  <button
                    onClick={() => handleDelete(globalIndex)}
                    className="bg-red-500/20 text-red-300 px-3 py-1 rounded-lg hover:bg-red-500/30 transition"
                  >
                    Supprimer
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    ))}
  </div>
)};