
import { motion } from "framer-motion";
import StatusBadge from "./StatusBadge";
import Timeline from "./Timeline";

export default function Dossiers() {
  type Status = "En cours" | "Audience" | "Terminé";

const data: { type: string; status: Status }[] = [
  { type: "Pénal", status: "En cours" },
  { type: "Civil", status: "Audience" },
  { type: "Commercial", status: "Terminé" }
];

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-6 font-bold">Mes Dossiers Juridiques</h2>
      <div className="space-y-6">
        {data.map((d, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.02 }} className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xl shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold">Affaire {d.type}</p>
                <p className="text-gray-400">Suivi en temps réel</p>
              </div>
              <StatusBadge status={d.status} />
            </div>
            <Timeline status={d.status} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}