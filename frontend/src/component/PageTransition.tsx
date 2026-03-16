import { motion } from "framer-motion";

export default function PageTransition({ children }: any) {
  return (

    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen bg-white"
    >
      {children}
    </motion.div>

  );
}