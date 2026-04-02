// src/App.tsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Login from "./Login"; // Page login sécurisée
import Layout from "./Layout"; // Dashboard complet
import type { Role } from "./types";

// Navbar site public
import NavbarComponent from "./component/Navbar";

// Pages publiques
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Actualites from "./pages/Actualites";
import Equipe from "./pages/Equipe";
import DroitPenal from "./pages/Droit_penal";
import DroitCivil from "./pages/Droit_civil";
import DroitAffaires from "./pages/Droit_affaires";
import DroitTravail from "./pages/Droit_travail";
import DroitFiscal from "./pages/Droit_fiscal";
import Blog_affaire from "./component/blog_affaire";
import Blog_penal from "./component/blog_penal";
import Blog_immobilier from "./component/blog_immobilier";
import Blog_fiscal from "./component/blog_fiscale";
import BlogCivil from "./component/blog_civil";
import Contact from "./pages/contact";
import Formulaires from "./pages/formulaires";

/* Layout pour le site public */
function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavbarComponent />
      <main>{children}</main>
    </div>
  );
}

/* Contenu principal avec gestion des routes */
function AppContent() {
  const location = useLocation();

  // Auth & rôle stockés dans localStorage
  const [auth, setAuth] = useState<boolean>(localStorage.getItem("auth") === "true");
  const [role, setRole] = useState<Role | null>(localStorage.getItem("role") as Role | null);

  // Fonction de login conforme au type attendu
  const handleLogin = (loggedIn: boolean, userRole: Role | null) => {
    setAuth(loggedIn);
    setRole(userRole);
    if (loggedIn && userRole) {
      localStorage.setItem("auth", "true");
      localStorage.setItem("role", userRole);
    }
  };

  // Fonction de logout
  const handleLogout = () => {
    setAuth(false);
    setRole(null);
    localStorage.removeItem("auth");
    localStorage.removeItem("role");
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* LOGIN */}
        <Route
          path="/login"
          element={auth ? <Navigate to="/dashboard" replace /> : <Login onLogin={handleLogin} />}
        />

        {/* DASHBOARD SÉCURISÉ */}
        <Route
          path="/dashboard/*"
          element={auth && role ? <Layout role={role} onLogout={handleLogout} /> : <Navigate to="/login" replace />}
        />

        {/* SITE PUBLIC */}
        <Route
          path="/*"
          element={
            <PublicLayout>
              <Routes>
                <Route index element={<Accueil />} />
                <Route path="apropos" element={<Apropos />} />
                <Route path="actualites" element={<Actualites />} />
                <Route path="equipe" element={<Equipe />} />
                <Route path="droit-penal" element={<DroitPenal />} />
                <Route path="droit-civil" element={<DroitCivil />} />
                <Route path="droit-affaires" element={<DroitAffaires />} />
                <Route path="droit-travail" element={<DroitTravail />} />
                <Route path="droit-fiscal" element={<DroitFiscal />} />
                <Route path="blog_affaire" element={<Blog_affaire />} />
                <Route path="blog_penal" element={<Blog_penal />} />
                <Route path="blog_immobilier" element={<Blog_immobilier />} />
                <Route path="blog_fiscal" element={<Blog_fiscal />} />
                <Route path="blog_civil" element={<BlogCivil />} />
                <Route path="contact" element={<Contact />} />
                <Route path="formulaires" element={<Formulaires />} />
              </Routes>
            </PublicLayout>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

/* App principal */
export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}