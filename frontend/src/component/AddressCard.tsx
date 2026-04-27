import { motion } from "framer-motion";
import type { AvocatUser as User } from "../types";

interface Props {
  user: User;
  onEdit: () => void;
}

export default function AddressCard({ user, onEdit }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-white rounded-xl shadow-sm border p-6 mt-6"
    >
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold text-gray-900">
          Adresse & Statut
        </h2>

        <button
          onClick={onEdit}
          className="text-blue-600 hover:underline"
        >
          Modifier
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Adresse</p>
          <p>{user.adresse}</p>
        </div>

        <div>
          <p className="text-gray-500">Statut</p>
          <p>{user.statut}</p>
        </div>
      </div>
    </motion.div>
  );
}