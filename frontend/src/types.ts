export type Role = "avocat" | "administrateur" | "secretaire";

export type Branche = "Pénal" | "Civil" | "Travail" | "Commercial";

export type Status =
  | "En cours"
  | "Audience"
  | "Terminé"
  | "Suspendu"
  | "Confirmé"
  | "En attente";

/* ================= USER SYSTEM ================= */

export interface BaseUser {
  nom: string;
  email: string;
  telephone: string;
  adresse: string;
  statut: string;
  role: Role;
}                                  

export interface AvocatUser extends BaseUser {
  role: "avocat";
  specialite: string;
  barreau: string;
}

export interface SecretaireUser extends BaseUser {
  role: "secretaire";
  poste: string;
}

export interface AdminUser extends BaseUser {
  role: "administrateur";
}

/* 🔥 TYPE FINAL */
export type User = AvocatUser | SecretaireUser | AdminUser;

/* ================= DOSSIERS ================= */

export interface DossierClient {
  nomClient: string;
  telephone: string;
  dateEnregistrement: string;
  titreDossier: string;
  branche: Branche;
  status: Status;
  description: string;
  avocatAssigné: string;
  rendezVous?: string;
}