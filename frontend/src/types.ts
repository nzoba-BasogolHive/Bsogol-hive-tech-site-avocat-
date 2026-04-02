export type Role = "avocat" | "administrateur" | "secretaire";
export type Status = "En cours" | "Audience" | "Terminé";
export type Branche = "Pénal" | "Civil" | "Commercial";

export interface DossierClient {
  nomClient: string;
  telephone: string;
  dateEnregistrement: string;
  titreDossier: string;
  branche: Branche;
  status: Status;
  description: string;
  avocatAssigné: string;
  rendezVous?: string; // optionnel
}

export interface User {
  nom: string;
  email: string;
  role: Role;
}