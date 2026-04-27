import type { AvocatUser } from "../types";

interface Props {
  user: AvocatUser;
}

export default function ProfileAvocat({ user }: Props) {
  return (
    <div>
      <h1>Profil Avocat</h1>
      <p>{user.nom}</p>
      <p>{user.specialite}</p>
      <p>{user.barreau}</p>
    </div>
  );
}