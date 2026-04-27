import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;

    if (dark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-full 
      bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
    >
      {dark ? "☀️" : "🌙"}
    </motion.button>
  );
}