// types.ts (ou en haut de Layout.tsx)
export type Role = "avocat" | "administrateur" | "secretaire";

export interface DossierClient {
  nomClient: string;
  telephone: string;
  dateEnregistrement: string;
  titreDossier: string;
  branche: string;
  status: string;
  description: string;
  avocatAssigné: string;
  rendezVous?: string;
}

export const initialDossiers: DossierClient[] = [
  {
    nomClient: "Jean Dupont",
    telephone: "0654321098",
    dateEnregistrement: "2026-03-01",
    titreDossier: "Vol",
    branche: "Pénal",
    status: "En cours",
    description: "Dossier vol avec témoin",
    avocatAssigné: "Me Martin",
    rendezVous: "2026-04-05T10:00"
  },
  {
    nomClient: "Marie Curie",
    telephone: "0678912345",
    dateEnregistrement: "2026-02-20",
    titreDossier: "Divorce",
    branche: "Civil",
    status: "Audience",
    description: "Divorce à l'amiable",
    avocatAssigné: "Me Durand",
    rendezVous: "2026-04-03T14:00"
  },
  {
    nomClient: "Paul Martin",
    telephone: "0667788990",
    dateEnregistrement: "2026-01-15",
    titreDossier: "Contrat",
    branche: "Commercial",
    status: "Terminé",
    description: "Litige contrat",
    avocatAssigné: "Me Dupont"
  }
];