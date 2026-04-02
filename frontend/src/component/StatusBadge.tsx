interface StatusBadgeProps {
  status: "En cours" | "Audience" | "Terminé";
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const colors: Record<string,string> = {
    "En cours": "bg-yellow-500/20 text-yellow-400",
    "Audience": "bg-purple-500/20 text-purple-400",
    "Terminé": "bg-green-500/20 text-green-400"
  };
  return <span className={`px-3 py-1 rounded-full text-sm ${colors[status]}`}>{status}</span>;
}