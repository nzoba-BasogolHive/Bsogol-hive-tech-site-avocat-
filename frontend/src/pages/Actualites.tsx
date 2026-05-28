import Hero_actualite from "../component/Actualite/hero_actualite";
import Article from "../component/Actualite/article";
import ActualitePage from "../component/Actualite/actualitePage";
import Connecter_actualite from "../component/Actualite/connecter_actualite";
import Footer from "../component/Accueil/footer";

export default function Actualites() {
  return (
    <div className="bg-gray-100">
      <Hero_actualite />
      <Article />
      <ActualitePage />
      <Connecter_actualite />
      <Footer />

    </div>
  );
}