import Hero from "../component/Hero";
import Aproposaccueil from "../component/aproposaccueil";
import Actualitesaccueil from "../component/actualitesacceuil";
import Commentaire from "../component/commentaire";
import Expertiseaccueil from "../component/expertiseaccueil";
import Nos_particularites from "../component/nos_particularites";
import CTASection from "../component/CTASection";
import FooterSection from "../component/FooterSection";

export default function Accueil() {
  return (
    <div>
       <Hero/>
       <Nos_particularites />

      <Aproposaccueil />

      <Expertiseaccueil />

      <Actualitesaccueil />

      <Commentaire /> <br /> <br />

      <CTASection /> <br /><br /><br /> <br /><br />

      <FooterSection />

    </div>
  );
}