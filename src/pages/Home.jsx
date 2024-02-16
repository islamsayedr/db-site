import JoinUs from "../comp/JoinUs";
import Hero from "../comp/Hero";
import LatestProjects from "../comp/LatestProjects";
import Process from "../comp/Process";
import Whydb from "../comp/Whydb";
import Pricing from "../comp/Priceing";
import Review from "../comp/Review";
import LatestArticles from "../comp/LatestArticles";

export default function Home() {
  return (
    <>
      <Hero />
      <Whydb />
      <Process />
      <LatestProjects />
      <JoinUs />
      <Pricing />
      <Review />
      <LatestArticles />
    </>
  );
}
