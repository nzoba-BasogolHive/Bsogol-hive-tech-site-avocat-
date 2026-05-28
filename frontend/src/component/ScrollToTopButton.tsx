import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
   <button
  type="button"
  onClick={scrollToTop}
  aria-label="Retour en haut"
  className="fixed bottom-6 right-6 z-[9999] w-12 h-12 bg-[#c98f52] text-white border border-[#c98f52] shadow-[0_10px_30px_rgba(13,27,42,0.25)] flex items-center justify-center hover:bg-[#0d1b2a] hover:text-[#c98f52] transition"
>
  <FaArrowUp />
</button>
  );
}