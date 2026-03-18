export default function RendezVous(){ const rdv = [ {heure:"10:00", client:"Jean Dupont"},
     {heure:"14:00", client:"Marie Nkou"} ]; return( <div className="p-10"> 
     <h2 className="text-2xl font-bold mb-6"> Rendez-vous </h2>
      <ul className="space-y-3">
         {rdv.map((r,index)=>( <li key={index} className="bg-white p-4 shadow rounded flex justify-between"> 
            <span>{r.client}</span> <span>{r.heure}</span> </li> ))} </ul> </div> ) }