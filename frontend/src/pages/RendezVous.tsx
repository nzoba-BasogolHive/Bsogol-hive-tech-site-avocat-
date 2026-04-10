import type { DossierClient } from "../types";

interface Props {
  dossiers: DossierClient[];
  setDossiers: React.Dispatch<React.SetStateAction<DossierClient[]>>;
}
interface RendezVousProps {
  dossiers: DossierClient[];
  setDossiers: React.Dispatch<React.SetStateAction<DossierClient[]>>;
}
export default function RendezVous({ dossiers, setDossiers }: RendezVousProps) {
  const rendezVousConfirmes = dossiers.filter(
    d => d.rendezVous && d.status === "Confirmé"
  );
const ajouter = () => {
  setDossiers(prev => [
    ...prev,
    {
      nomClient: "Test",
      telephone: "000",
      dateEnregistrement: new Date().toISOString(),
      titreDossier: "RDV",
      branche: "Civil",
      status: "En attente",
      description: "",
      avocatAssigné: "",
      rendezVous: new Date().toISOString(),
    }
  ]);
};
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        Rendez-vous confirmés
      </h2>

      <table className="w-full border">
        <thead>
          <tr>
            <th>Client</th>
            <th>Motif</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {rendezVousConfirmes.map(d => (
            <tr key={d.nomClient + d.rendezVous}>
              <td>{d.nomClient}</td>
              <td>{d.titreDossier}</td>
              <td>{new Date(d.rendezVous!).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}