import { motion } from "framer-motion";

interface TimelineProps {
  status: "En cours" | "Audience" | "Terminé";
}

export default function Timeline({ status }: TimelineProps) {
  const steps: TimelineProps["status"][] = ["En cours", "Audience", "Terminé"];
  return (
    <div className="flex items-center space-x-4 mt-4">
      {steps.map((step,i)=>{
        const active = steps.indexOf(status) >= i;
        return (
          <div key={i} className="flex items-center">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={`w-4 h-4 rounded-full ${active ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-gray-700"}`}/>
            {i<steps.length-1 && <div className={`w-10 h-1 ${active ? "bg-purple-500" : "bg-gray-700"}`} />}
          </div>
        );
      })}
    </div>
  );
}