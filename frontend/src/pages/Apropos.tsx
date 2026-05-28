import Hero_apropos from "../component/Apropos/Hero_apropos";
import Notre_histoire from "../component/Apropos/notre_histoire";
import Differencie from "../component/Apropos/differencie";
import Faq from "../component/Apropos/Faq.tsx";
import TeamExperts from "../component/Apropos/TeamExperts.tsx";
import Footer from "../component/Accueil/footer";
import Commentaire from "../component/Accueil/commentaire";
export default function Apropos() {
  return (
    <div>
      <Hero_apropos />
      <Notre_histoire />
      <Differencie />
      <Faq />
      <TeamExperts />
      <Commentaire />
      <Footer />
    </div>
  );
}