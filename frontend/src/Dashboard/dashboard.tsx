import React from "react";
import Card from "./Card";

export default function Dashboard() {
  const stats = [
    { title: "Dossiers actifs", value: 4 },
    { title: "Rendez-vous", value: 2 },
    { title: "Messages", value: 5 },
  ];
  return (
    <div className="p-8">
      <h2 className="text-2xl mb-6 font-bold">Tableau de bord</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, i) => <Card key={i} title={stat.title} value={stat.value} />)}
      </div>
    </div>
  );
}