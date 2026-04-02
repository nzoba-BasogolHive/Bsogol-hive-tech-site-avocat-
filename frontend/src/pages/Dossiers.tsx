import { useState } from "react";
import { motion } from "framer-motion";
import StatusBadge from "../component/StatusBadge";
import Timeline from "../component/Timeline";
import type { DossierClient, Status, Branche } from "../types";

export default function Dossiers() {
  // Données initiales avec description et avocatAssigné
  const initialData: DossierClient[] = [
    {
      nomClient: "Jean Dupont",
      telephone: "0654321098",
      dateEnregistrement: "2026-03-01",
      titreDossier: "Vol",
      branche: "Pénal",
      status: "En cours",
      description: "Dossier pénal concernant un vol",
      avocatAssigné: "Me. Durand",
    },
    {
      nomClient: "Marie Curie",
      telephone: "0678912345",
      dateEnregistrement: "2026-02-20",
      titreDossier: "Divorce",
      branche: "Civil",
      status: "Audience",
      description: "Dossier civil divorce",
      avocatAssigné: "Me. Lefevre",
    },
    {
      nomClient: "Paul Martin",
      telephone: "0667788990",
      dateEnregistrement: "2026-01-15",
      titreDossier: "Contrat",
      branche: "Commercial",
      status: "Terminé",
      description: "Dossier commercial contrat",
      avocatAssigné: "Me. Bernard",
    },
  ];

  const [dossiers, setDossiers] = useState<DossierClient[]>(initialData);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
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
    // Réinitialisation complète du formulaire
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

  // Grouper par branche
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
        <h3 className="text-xl mb-4">{editingIndex !== null ? "Modifier le dossier" : "Ajouter un dossier"}</h3>
        <input name="nomClient" placeholder="Nom Client" value={form.nomClient} onChange={handleChange} className="w-full mb-2 p-2 rounded bg-black/40" />
        <input name="telephone" placeholder="Téléphone" value={form.telephone} onChange={handleChange} className="w-full mb-2 p-2 rounded bg-black/40" />
        <input type="date" name="dateEnregistrement" value={form.dateEnregistrement} onChange={handleChange} className="w-full mb-2 p-2 rounded bg-black/40" />
        <input name="titreDossier" placeholder="Titre Dossier" value={form.titreDossier} onChange={handleChange} className="w-full mb-2 p-2 rounded bg-black/40" />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full mb-2 p-2 rounded bg-black/40" />
        <input name="avocatAssigné" placeholder="Avocat assigné" value={form.avocatAssigné} onChange={handleChange} className="w-full mb-2 p-2 rounded bg-black/40" />
        <select name="branche" value={form.branche} onChange={handleChange} className="w-full mb-2 p-2 rounded bg-black/40">
          <option value="Pénal">Pénal</option>
          <option value="Civil">Civil</option>
          <option value="Commercial">Commercial</option>
        </select>
        <select name="status" value={form.status} onChange={handleChange} className="w-full mb-2 p-2 rounded bg-black/40">
          <option value="En cours">En cours</option>
          <option value="Audience">Audience</option>
          <option value="Terminé">Terminé</option>
        </select>
        <button onClick={handleAddOrUpdate} className="bg-purple-600 py-2 px-4 rounded text-white mt-2 w-full">
          {editingIndex !== null ? "Mettre à jour" : "Ajouter"}
        </button>
      </div>

      {/* LISTE DES DOSSIERS */}
      {Object.keys(grouped).map(branche => (
        <div key={branche} className="mb-6">
          <h3 className="text-xl mb-4">{branche}</h3>
          <div className="space-y-4">
            {grouped[branche as Branche].map((d, i) => {
              const globalIndex = dossiers.indexOf(d);
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.02 }} className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <p className="text-lg font-semibold">{d.titreDossier} - {d.nomClient}</p>
                      <p className="text-gray-400">Tel: {d.telephone} | Enregistrement: {d.dateEnregistrement}</p>
                      <p className="text-gray-400">{d.description}</p>
                      <p className="text-gray-400">Avocat: {d.avocatAssigné}</p>
                    </div>
                    <StatusBadge status={d.status} />
                  </div>
                  <Timeline status={d.status} />
                  <div className="mt-4 flex gap-2">
                    <button onClick={() => handleEdit(globalIndex)} className="px-3 py-1 rounded bg-yellow-600/50 hover:bg-yellow-600">Modifier</button>
                    <button onClick={() => handleDelete(globalIndex)} className="px-3 py-1 rounded bg-red-600/50 hover:bg-red-600">Supprimer</button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}