export default function Utilisateurs(){

  const users = [
    {nom:"Secrétaire Anna", role:"Secrétaire"},
    {nom:"Maître Dupont", role:"Avocat"}
  ];

  return(

    <div className="p-10">

      <h2 className="text-2xl font-bold mb-6">
        Utilisateurs
      </h2>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-gray-100">

          <tr>
            <th className="p-3 text-left">Nom</th>
            <th>Role</th>
          </tr>

        </thead>

        <tbody>

          {users.map((u,index)=>(
            <tr key={index} className="border-b">
              <td className="p-3">{u.nom}</td>
              <td>{u.role}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>

  )
}