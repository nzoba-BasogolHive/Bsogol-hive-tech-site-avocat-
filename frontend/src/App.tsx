import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./component/ScrollToTop";
import NavbarComponent from "./component/Navbar";

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

function App() {

  const location = useLocation();

  return (

    <div className="container-main">

      {/* NAVBAR FIXE */}
      <NavbarComponent />

         <ScrollToTop />

        <AnimatePresence mode="wait">

          <Routes location={location} key={location.pathname}>

            <Route path="/" element={<Accueil />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/equipe" element={<Equipe />} />

            <Route path="/droit-penal" element={<DroitPenal />} />
            <Route path="/droit-civil" element={<DroitCivil />} />
            <Route path="/droit-affaires" element={<DroitAffaires />} />
            <Route path="/droit-travail" element={<DroitTravail />} />
            <Route path="/droit-fiscal" element={<DroitFiscal />} />

            <Route path="/blog_affaire" element={<Blog_affaire />} />
            <Route path="/blog_penal" element={<Blog_penal />} />
            <Route path="/blog_immobilier" element={<Blog_immobilier />} />
            <Route path="/blog_fiscal" element={<Blog_fiscal />} />
            <Route path="/blog_civil" element={<BlogCivil />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/formulaires" element={<Formulaires />} />

          </Routes>

        </AnimatePresence>

      </div>

   

  );
}

export default App;