export default function Dossiers(){

  const dossiers = [
    {client:"Jean Dupont", domaine:"Droit pénal"},
    {client:"Entreprise ABC", domaine:"Droit affaires"}
  ];

  return(

    <div className="p-10">

      <h2 className="text-2xl font-bold mb-6">
        Dossiers Clients
      </h2>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-gray-100">

          <tr>
            <th className="p-3 text-left">Client</th>
            <th>Domaine</th>
          </tr>

        </thead>

        <tbody>

          {dossiers.map((d,index)=>(
            <tr key={index} className="border-b">
              <td className="p-3">{d.client}</td>
              <td>{d.domaine}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>

  )
}