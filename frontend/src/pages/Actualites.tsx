import Hero_actualite from "../component/hero_actualite";
import Article from "../component/article";
import List_actualite from "../component/list_actualite";
import Connecter_actualite from "../component/connecter_actualite";
import Footer from "../component/footer";

export default function Actualites() {
  return (
    <div className="bg-gray-100">

      <Hero_actualite/>

      {/* ARTICLE PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <Article/>
      </section>

      {/* LISTE ARTICLES */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <List_actualite/>
      </section>

      {/* NEWSLETTER */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <Connecter_actualite/>
      </section>

      <Footer/>

    </div>
  );
}