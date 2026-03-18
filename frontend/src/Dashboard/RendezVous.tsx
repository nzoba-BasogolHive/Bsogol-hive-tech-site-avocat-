import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNotification } from "./NotificationContext";

export default function RendezVous({ addAppointment }: any) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const { addNotification } = useNotification();

  const handleConfirm = () => {
    if (!date || !time || !title) return;
    addAppointment({ date, time, title });
    addNotification(`Rendez-vous ajouté: ${title} à ${time}`, "success");
    setDate(""); setTime(""); setTitle("");
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-6 font-bold">Prendre un rendez-vous sécurisé</h2>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 p-6 rounded-2xl border border-white/10 max-w-lg shadow-md flex flex-col gap-4">
        <input type="text" placeholder="Titre du rendez-vous" value={title} onChange={e => setTitle(e.target.value)} className="p-3 rounded bg-black/40 text-white placeholder-gray-400"/>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} className="p-3 rounded bg-black/40 text-white placeholder-gray-400"/>
        <input type="time" value={time} onChange={e => setTime(e.target.value)} className="p-3 rounded bg-black/40 text-white placeholder-gray-400"/>
        <motion.button onClick={handleConfirm} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold transition">Confirmer</motion.button>
      </motion.div>
    </div>
  );
}