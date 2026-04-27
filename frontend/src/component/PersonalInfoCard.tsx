import { motion } from "framer-motion";
import type { AvocatUser, SecretaireUser } from "../types";

interface Props {
  user: AvocatUser | SecretaireUser;
  onEdit: () => void;
}

export default function PersonalInfoCard({ user, onEdit }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-white rounded-xl shadow-sm border p-6 mt-6"
    >
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold text-gray-900">
          Informations personnelles
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
          <p className="text-gray-500">Nom</p>
          <p>{user.nom}</p>
        </div>

        <div>
          <p className="text-gray-500">Email</p>
          <p>{user.email}</p>
        </div>

        <div>
          <p className="text-gray-500">Téléphone</p>
          <p>{user.telephone}</p>
        </div>

        <div>
          <p className="text-gray-500">Adresse</p>
          <p>{user.adresse}</p>
        </div>

        {/* 🔥 AVOCAT */}
        {"specialite" in user && (
          <>
            <div>
              <p className="text-gray-500">Spécialité</p>
              <p>{user.specialite}</p>
            </div>

            <div>
              <p className="text-gray-500">Barreau</p>
              <p>{user.barreau}</p>
            </div>
          </>
        )}

        {/* 🔥 SECRÉTAIRE */}
        {"poste" in user && (
          <div className="md:col-span-2">
            <p className="text-gray-500">Poste</p>
            <p>{user.poste}</p>
          </div>
        )}

      </div>
    </motion.div>
  );
}