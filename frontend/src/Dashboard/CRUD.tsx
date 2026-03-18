import { useState } from "react";

export default function Dossiers() {

  const [search,setSearch] = useState("");
  const [dossiers,setDossiers] = useState([
    {id:1, client:"Jean Dupont", domaine:"Pénal"},
    {id:2, client:"Entreprise ABC", domaine:"Affaires"}
  ]);

  const [newClient,setNewClient] = useState("");
  const [newDomaine,setNewDomaine] = useState("");

  const addDossier = ()=>{
    setDossiers([
      ...dossiers,
      {id:Date.now(), client:newClient, domaine:newDomaine}
    ]);
    setNewClient("");
    setNewDomaine("");
  };

  const deleteDossier = (id:number)=>{
    setDossiers(dossiers.filter(d=>d.id !== id));
  };

  const filtered = dossiers.filter(d =>
    d.client.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="p-8">

      <h2 className="text-2xl font-bold mb-6">
        Gestion des dossiers
      </h2>

      {/* AJOUT */}
      <div className="flex gap-4 mb-6">
        <input placeholder="Client" className="input" value={newClient} onChange={(e)=>setNewClient(e.target.value)} />
        <input placeholder="Domaine" className="input" value={newDomaine} onChange={(e)=>setNewDomaine(e.target.value)} />
        <button onClick={addDossier} className="btn">Ajouter</button>
      </div>

      {/* SEARCH */}
      <input
        placeholder="Rechercher..."
        className="input mb-6 w-full"
        onChange={(e)=>setSearch(e.target.value)}
      />

      {/* TABLE */}
      <table className="w-full bg-white shadow rounded-xl">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Client</th>
            <th>Domaine</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((d)=>(
            <tr key={d.id} className="border-b">

              <td className="p-3">{d.client}</td>
              <td>{d.domaine}</td>

              <td>
                <button
                  onClick={()=>deleteDossier(d.id)}
                  className="text-red-500 hover:underline"
                >
                  Supprimer
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}