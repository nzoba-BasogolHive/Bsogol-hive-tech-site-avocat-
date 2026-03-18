import React, { useState } from "react";
import Calendar from "react-calendar";
import type { CalendarProps } from "react-calendar";
import { motion } from "framer-motion";
import 'react-calendar/dist/Calendar.css';

export default function Agenda({ appointments }: { appointments: { date: string; time: string; title: string }[] }) {
  const [value, setValue] = useState<Date | null>(new Date());

  const handleChange: CalendarProps['onChange'] = (newValue) => {
    // newValue peut être Date | Date[] | null
    if (newValue instanceof Date) {
      setValue(newValue);
    } else if (Array.isArray(newValue) && newValue[0] instanceof Date) {
      setValue(newValue[0]);
    }
  };

  const todayAppointments = appointments.filter(
    a => value && new Date(a.date).toDateString() === value.toDateString()
  );

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-6 font-bold">Agenda</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <Calendar
          onChange={handleChange}
          value={value ?? new Date()}
          className="bg-white/5 text-white rounded-2xl border border-white/10 p-4 shadow-md hover:scale-105 transition-transform duration-300"
        />
        <div className="flex-1 bg-white/5 p-6 rounded-2xl border border-white/10 shadow-md">
          <h3 className="text-xl font-semibold mb-4">Rendez-vous du {value?.toLocaleDateString()}</h3>
          {todayAppointments.length === 0 ? <p className="text-gray-400">Aucun rendez-vous prévu</p> :
            todayAppointments.map((a,i) => (
              <motion.div key={i} initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{delay:i*0.1}} className="mb-3 p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:scale-105 transition-transform duration-200">
                <p className="font-semibold">{a.title}</p>
                <p>{a.time}</p>
              </motion.div>
            ))
          }
        </div>
      </div>
    </div>
  );
}