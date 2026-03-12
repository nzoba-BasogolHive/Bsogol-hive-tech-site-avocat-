import { Routes, Route } from "react-router-dom";

import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";

import DroitPenal from "./pages/Droit_penal";
import DroitCivil from "./pages/Droit_civil";
import DroitAffaires from "./pages/Droit_affaires";
import DroitTravail from "./pages/Droit_travail";
import DroitFiscal from "./pages/Droit_fiscal";



function App() {
  return (
    <>
      {/* Navbar */}
     

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />

        <Route path="/droit-penal" element={<DroitPenal />} />
        <Route path="/droit-civil" element={<DroitCivil />} />
        <Route path="/droit-affaires" element={<DroitAffaires />} />
        <Route path="/droit-travail" element={<DroitTravail />} />
        <Route path="/droit-fiscal" element={<DroitFiscal />} />
      </Routes>

      {/* Footer */}
     
    </>
  );
}

export default App;