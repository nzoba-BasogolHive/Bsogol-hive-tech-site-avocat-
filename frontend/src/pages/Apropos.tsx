import Hero_apropos from "../component/Hero_apropos";
import Notre_histoire from "../component/notre_histoire";
import Differencie from "../component/differencie";
import Mission from "../component/mission";
import PHILOSOPHIE from "../component/philosophie";
import Temoignages from "../component/temoignage";
import Engagement from "../component/engagement";
import FlooterSection  from "../component/FooterSection";
export default function Apropos () {
  return (
  <div>
    <Hero_apropos/>
    <Notre_histoire/>
    <Differencie/>
    <Mission/>
    <PHILOSOPHIE/>
    <Temoignages/>
    <Engagement/>
    <FlooterSection/>
  </div>
  );
}