import Hero from "../component/Accueil/Hero";
import Actualitesaccueil from "../component/Accueil/actualitesacceuil";
import Commentaire from "../component/Accueil/commentaire";
import Expertiseaccueil from "../component/Accueil/expertiseaccueil";
import Nos_particularites from "../component/Accueil/nos_particularites";
import FooterSection from "../component/Accueil/FooterSection";
import Footer from "../component/Accueil/footer";
export default function Accueil() {
  return (
    <div>
      <Hero />
      <Nos_particularites />
      <Expertiseaccueil />
      <Actualitesaccueil />
      <Commentaire />
      <FooterSection />
      <Footer />
    </div>
  );
}