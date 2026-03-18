// src/AuthContext.tsx
import { createContext, useContext, useState } from "react";

interface User {
  name: string;
  role: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

// Valeur par défaut pour éviter le null
const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  logout: () => {}
});

// Props enfants typés any pour éviter les erreurs
interface Props {
  children: any;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (email: string, password: string): boolean => {
    let loggedUser: User | null = null;

    if (email === "avocat@test.com" && password === "1234") {
      loggedUser = { role: "avocat", name: "Maître Dupont", email };
    } else if (email === "sec@test.com" && password === "1234") {
      loggedUser = { role: "secretaire", name: "Anna", email };
    }

    if (loggedUser) {
      setUser(loggedUser);
      localStorage.setItem("user", JSON.stringify(loggedUser));
      return true;
    } else {
      alert("Identifiants incorrects");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth doit être utilisé dans AuthProvider");
  return context;
};