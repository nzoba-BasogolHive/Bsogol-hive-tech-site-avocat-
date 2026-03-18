// src/PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface Props {
  children: any; // enfants du route
}

export default function PrivateRoute({ children }: Props) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return children;
}