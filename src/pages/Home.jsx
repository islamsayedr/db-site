import JoinUs from "../comp/JoinUs";
import Hero from "../comp/Hero";
import LatestProjects from "../comp/LatestProjects";
import Process from "../comp/Process";
import Whydb from "../comp/Whydb";
import Pricing from "../comp/Priceing";
import Review from "../comp/Review";
import LatestArticles from "../comp/LatestArticles";
import FAQ from "../comp/FAQ.jsx";
import ApplyNow from "./ApplyNow.jsx";

export default function Home({baseURL}) {
  return (
    <>
      <Hero />
      <Whydb />
      {/* <Process /> */}
      <LatestProjects baseURL = {baseURL}/>
      {/* <JoinUs /> */}
      {/* <Pricing /> */}
      {/* <Review baseURL={baseURL}/> */}
      {/* <LatestArticles baseURL = {baseURL} /> */}
      {/* <FAQ baseURL = {baseURL}/> */}
      {/* < ApplyNow /> */}
    </>
  );
}
