import { useLocation, useNavigate } from "react-router-dom";
import ProfileAvocat from "../component/ProfileAvocat";
import ProfileSecretaire from "../component/ProfileSecretaire";

export default function ProfilePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const user = location.state;

  if (!user) {
    return <div>Aucun utilisateur</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* RETOUR */}
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        ⬅ Retour dashboard
      </button>

      {/* ROLE SYSTEM */}
      {user.role === "avocat" && (
        <ProfileAvocat user={user} />
      )}

      {user.role === "secretaire" && (
        <ProfileSecretaire user={user} />
      )}

    </div>
  );
}