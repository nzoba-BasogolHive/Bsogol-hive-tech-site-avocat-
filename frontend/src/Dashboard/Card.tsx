import React from "react";
import { motion } from "framer-motion";

export default function Card({ title, value }: { title: string; value: string | number }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xl shadow-md">
      <h3 className="text-gray-400">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </motion.div>
  );
}