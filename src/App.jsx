import Home from "./pages/Home";
import Blog from "./pages/Blog";
import ApplyNow from "./pages/ApplyNow";
import NoPage from "./pages/NoPage";
import AboutUs from "./pages/AboutUs";

import Services from "./pages/Services";
import OurPrices from "./pages/OurPrices";
import OurProcess from "./pages/OurProcess";
import OurProjects from "./pages/OurProjects";



import "./App.css";
import Header from "./comp/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./comp/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div id="headerPlace"></div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Services" element={<Services />} />
          <Route path="prices" element={<OurPrices />} />
          <Route path="process" element={<OurProcess />} />
          <Route path="projects" element={<OurProjects />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="applyNow" element={<ApplyNow />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
