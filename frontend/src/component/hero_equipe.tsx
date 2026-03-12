
import image10 from "../assets/image (23).webp";

import NavbarComponent from "./Navbar";

export default function Hero() {
  return (
    <>

      {/* HERO */}
      <section className="relative w-full max-w-[1980px] mx-auto h-[611px] overflow-hidden ">

        {/* Image de fond */}
        <img
          src={ image10}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay couleur */}
        <div className="absolute inset-0 bg-[#110767]/75"></div>

        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-20">
          <div className="pt-8 px-12">
            <NavbarComponent />
          </div>
        </div>

        {/* Contenu texte */}
        <div className="relative z-10 h-full">
              <h1
            className="absolute text-white font-bold leading-tight"
            style={{
              fontFamily: "Garamond, serif",
              fontSize: "50px",
              left: "312px",
              top: "402px",
            }}
          >
         Notre Cabinet
          </h1>

          <h1
            className="absolute text-white font-bold leading-tight"
            style={{
              fontFamily: "Garamond, serif",
              fontSize: "96px",
              left: "312px",
              top: "402px",
            }}
          >
          Notre Équipe
          </h1>

          <p
            className="absolute text-white font-bold"
            style={{
              fontFamily: "Garamond, serif",
              fontSize: "40px",
              left: "293px",
              top: "607px",
              width: "1485px",
              height: "190px",
            }}
          >
          Des avocats passionnés, chacun expert dans 
          son domaine, unis par une exigence commune d'excellence.
          </p>

          {/* Contact */}
          <div
            className="absolute flex items-center gap-4 text-white font-bold cursor-pointer group"
            style={{
              fontFamily: "Garamond, serif",
              fontSize: "40px",
              left: "111px",
              top: "850px",
              width: "403px",
              height: "49px",
            }}
          >
           
          </div>

        </div>
      </section>


     </>);}