export type Role = "avocat" | "administrateur" | "secretaire";

export type Branche = "Pénal" | "Civil" | "Travail" | "Commercial";

export type Status =
  | "En cours"
  | "Audience"
  | "Terminé"
  | "Suspendu"
  | "Confirmé"
  | "En attente";

export interface DossierClient {
  nomClient: string;
  telephone: string;
  dateEnregistrement: string;
  titreDossier: string;
  branche: Branche; // ✅ important
  status: Status;   // ✅ important
  description: string;
  avocatAssigné: string;
  rendezVous?: string;
}