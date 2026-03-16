import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import icon1 from "../assets/droit-des-contrats.webp";

import icon3 from "../assets/droit-penal.webp";
import icon4 from "../assets/conformite-fiscale.webp";
import icon5 from "../assets/droit-du-travail.webp";
import icon6 from "../assets/droit-civil.webp";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ServicesOverlay({ open, setOpen }: Props) {

  const navigate = useNavigate();

  const services = [
    {
      title: "Droit pénal",
      desc: "Défense pénale et représentation devant les tribunaux",
      link: "/droit-penal",
      icon: icon3
    },
    {
      title: "Droit civil",
      desc: "Contrats, famille et responsabilité civile",
      link: "/droit-civil",
      icon: icon6
    },
    {
      title: "Droit des affaires",
      desc: "Accompagnement juridique des entreprises",
      link: "/droit-affaires",
      icon: icon1
    },
    {
      title: "Droit du travail",
      desc: "Relations employeur salarié et litiges",
      link: "/droit-travail",
      icon: icon5
    },
    {
      title: "Droit fiscal",
      desc: "Fiscalité et optimisation fiscale",
      link: "/droit-fiscal",
      icon: icon4
    }
  ];

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [setOpen]);

  return (

    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-white min-h-screen flex flex-col"
        >

          {/* HEADER */}

          <div className="bg-[#2E247E] text-white px-10 py-10 flex justify-between items-center">

            <h2 className="text-3xl md:text-4xl font-bold">
              Nos Domaines d'Expertise
            </h2>

            <button
              onClick={() => setOpen(false)}
              className="text-3xl hover:scale-110 transition"
            >
              ✕
            </button>

          </div>

          {/* SERVICES */}

          <div className="flex-1 flex items-center">

            <div className="max-w-7xl mx-auto w-full px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

              {services.map((service, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    navigate(service.link);
                    setOpen(false);
                  }}
                  className="group border p-8 rounded-xl cursor-pointer hover:shadow-2xl transition"
                >

                  {/* ICON */}

                  <div className="w-14 h-14 md:w-[70px] md:h-[70px] mb-6 transition-transform duration-500 group-hover:scale-110">

                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />

                  </div>

                  {/* TITLE */}

                  <h3 className="text-xl font-semibold text-[#1A237E] flex justify-between">

                    {service.title}

                    <span className="text-red-600 group-hover:translate-x-2 transition">
                      →
                    </span>

                  </h3>

                  {/* DESC */}

                  <p className="text-gray-600 mt-3">
                    {service.desc}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>

  );
}