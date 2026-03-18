import React from "react";

export default function StatusBadge({ status }: { status: "En cours" | "Audience" | "Terminé" }) {
  const colors: Record<string, string> = {
    "En cours": "bg-yellow-500/20 text-yellow-400",
    "Audience": "bg-blue-500/20 text-blue-400",
    "Terminé": "bg-green-500/20 text-green-400"
  };
  return <span className={`px-3 py-1 rounded-full text-sm font-semibold ${colors[status]}`}>{status}</span>;
}