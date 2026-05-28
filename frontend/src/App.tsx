import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import NavbarComponent from "./component/Navbar";
import ArticleDetail from "./pages/ArticleDetail";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Actualites from "./pages/Actualites";
import ServiceDetail from "./pages/ServiceDetailPage";
import Contact from "./pages/contact";
import Formulaires from "./pages/formulaires";
import DashboardWithCalendar from "./pages/DashboardWithCalendar";
import ScrollToTopButton from "./component/ScrollToTopButton";
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.selectedSlug) return;

    window.scrollTo(0, 0);
  }, [location.pathname, location.state]);

  return null;
}

function PublicLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const isDashboard = location.pathname === "/DashboardWithCalendar";

  return (
    <>
      {!isDashboard && <NavbarComponent />}
      <main>{children}</main>
    </>
  );
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
  <ScrollToTopButton />
      <PublicLayout>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/blog/:slug" element={<ArticleDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/formulaires" element={<Formulaires />} />
          <Route path="/services/:slug" element={<ServiceDetail  />} />
          <Route
            path="/DashboardWithCalendar"
            element={<DashboardWithCalendar />}
          />
        </Routes>
      </PublicLayout>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}