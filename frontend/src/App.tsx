// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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
import DashboardWithCalendar from "./pages/DashboardWithCalendar";

/* Layout pour le site public */
function PublicLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isDashboard = location.pathname === "/DashboardWithCalendar";

  return (
    <div>
      {!isDashboard && <NavbarComponent />}
      <main>{children}</main>
    </div>
  );
}

/* Contenu principal avec gestion des routes */
function AppContent() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
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
                <Route path="DashboardWithCalendar" element={<DashboardWithCalendar />} />
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

