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
    <div className="p-8">
      <h2 className="text-2xl mb-6">Gestion des dossiers</h2>

      {/* FORMULAIRE */}
      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8 max-w-lg">
        <h3 className="text-xl mb-4">
          {editingIndex !== null ? "Modifier le dossier" : "Ajouter un dossier"}
        </h3>

        <label htmlFor="nomClient">Nom Client</label>
        <input id="nomClient" name="nomClient" value={form.nomClient} onChange={handleChange} className="w-full mb-2 p-2 rounded bg-black/40" />

        <label htmlFor="telephone">Téléphone</label>
        <input id="telephone" name="telephone" value={form.telephone} onChange={handleChange} className="w-full mb-2 p-2 rounded bg-black/40" />

        <label htmlFor="dateEnregistrement">Date d'enregistrement</label>
        <input id="dateEnregistrement" type="date" name="dateEnregistrement" value={form.dateEnregistrement} onChange={handleChange} className="w-full mb-2 p-2 rounded bg-black/40" />

        <label htmlFor="titreDossier">Titre Dossier</label>
        <input id="titreDossier" name="titreDossier" value={form.titreDossier} onChange={handleChange} className="w-full mb-2 p-2 rounded bg-black/40" />

        <label htmlFor="description">Description</label>
        <input id="description" name="description" value={form.description} onChange={handleChange} className="w-full mb-2 p-2 rounded bg-black/40" />

        <label htmlFor="avocatAssigné">Avocat assigné</label>
        <input id="avocatAssigné" name="avocatAssigné" value={form.avocatAssigné} onChange={handleChange} className="w-full mb-2 p-2 rounded bg-black/40" />

        <label htmlFor="branche">Branche</label>
        <select id="branche" name="branche" value={form.branche} onChange={handleChange} className="w-full mb-2 p-2 rounded bg-black/40">
          <option value="Pénal">Pénal</option>
          <option value="Civil">Civil</option>
          <option value="Commercial">Commercial</option>
        </select>

        <label htmlFor="status">Statut</label>
        <select id="status" name="status" value={form.status} onChange={handleChange} className="w-full mb-2 p-2 rounded bg-black/40">
          <option value="En cours">En cours</option>
          <option value="Audience">Audience</option>
          <option value="Terminé">Terminé</option>
          <option value="Suspendu">Suspendu</option>
        </select>

        <button onClick={handleAddOrUpdate} className="bg-purple-600 py-2 px-4 rounded text-white mt-2 w-full">
          {editingIndex !== null ? "Mettre à jour" : "Ajouter"}
        </button>
      </div>

      {/* LISTE */}
      {Object.keys(grouped).map((branche) => (
        <div key={branche} className="mb-6">
          <h3 className="text-xl mb-4">{branche}</h3>

          {grouped[branche as Branche].map((d) => {
            const globalIndex = dossiers.indexOf(d);

            return (
              <motion.div
                key={globalIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-4"
              >
                <p className="font-bold">{d.titreDossier} - {d.nomClient}</p>
                <p>{d.description}</p>

                <StatusBadge status={d.status} />
                <Timeline status={d.status} />

                <div className="mt-3 flex gap-2">
                  <button onClick={() => handleEdit(globalIndex)} className="bg-yellow-500 px-3 py-1 rounded">
                    Modifier
                  </button>
                  <button onClick={() => handleDelete(globalIndex)} className="bg-red-500 px-3 py-1 rounded">
                    Supprimer
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      ))}
    </div>
  );
}