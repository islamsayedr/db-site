import JoinUs from "../comp/landing/JoinUs";
import Hero from "../comp/landing/Hero.jsx";
import LatestProjects from "../comp/project/LatestProjects";
import Process from "../comp/process/Process";
import Whydb from "../comp/landing/Whydb.jsx";
import Pricing from "../comp/pricing/Priceing.jsx";
import Review from "../comp/landing/Review.jsx";
import LatestArticles from "../comp/blog/LatestArticles.jsx";
import FAQ from "../comp/about/FAQ.jsx";
import ApplyNow from "./ApplyNow.jsx";

export default function Home({ baseURL }) {
  return (
    <>
      <Hero />
      <Whydb />
      {/* <Process /> */}
      <LatestProjects baseURL={baseURL} />
      {/* <JoinUs /> */}
      <Pricing />
      {/* <Review baseURL={baseURL}/> */}
      {/* <LatestArticles baseURL = {baseURL} /> */}
      <FAQ baseURL={baseURL} />
      {/* < ApplyNow /> */}
    </>
  );
}
