import type { SecretaireUser } from "../types";

interface Props {
  user: SecretaireUser;
}

export default function ProfileSecretaire({ user }: Props) {
  return (
    <div>
      <h1>Profil Secrétaire</h1>
      <p>{user.nom}</p>
      <p>{user.poste}</p>
    </div>
  );
}