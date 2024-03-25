import Home from "./pages/Home";
// import Blog from "./pages/Blog";
// import ApplyNow from "./pages/archive/ApplyNow";
import Status from "./pages/general/Status";
import AboutUs from "./pages/AboutUs";
// import Apply from "./pages/ApplyNow";

// import Services from "./pages/Services";
import OurPrices from "./pages/OurPrices";
// import OurProcess from "./pages/OurProcess";
import OurProjects from "./pages/OurProjects";

import "./App.css";
import Header from "./comp/shared/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./comp/shared/Footer";
import WhatsApp from "./comp/shared/WhatsApp";
import FAQs from "./pages/FAQs";
import PlanDetails from "./pages/PlanDetails";
import ApplyForOwnerShip from "./comp/forms/ApplyForOwnerShip";
import ApplyForService from "./comp/forms/ApplyForService";

// import ArticleDetails from "./pages/ArticleDetails";

function App() {
  const baseURL = "https://dreamy-backend.azurewebsites.net/";
  return (
    <>
      <BrowserRouter>
        <Header />
        <div id="headerPlace"></div>
        <Routes>
          <Route index element={<Home baseURL={baseURL} />} />
          {/* <Route path="Services" element={<Services />} /> */}
          <Route path="prices" element={<OurPrices />} />
          <Route
            path="prices/:plan"
            element={<PlanDetails baseURL={baseURL} />}
          />
          {/* <Route path="process" element={<OurProcess />} /> */}
          <Route path="projects" element={<OurProjects baseURL={baseURL} />} />
          {/* <Route path="blogs" element={<Blog  baseURL={baseURL} />} /> */}
          {/* <Route path="blogs/:id" element={<ArticleDetails  baseURL={baseURL} />} /> */}
          <Route path="aboutUs" element={<AboutUs baseURL={baseURL} />} />
          {/* <Route path="applyNow" element={<ApplyNow />} /> */}
          <Route path="ApplyForOwnerShip" element={<ApplyForOwnerShip />} />
          <Route path="ApplyForService" element={<ApplyForService />} />
          {/* <Route path="apply" element={<Apply />} /> */}
          <Route path="faqs" element={<FAQs baseURL={baseURL} />} />
          <Route
            path="*"
            element={
              <Status
                img="/imgs/404.svg"
                message="عذرا, هذة الصفحة غير متوفرة حاليا."
                action ="/"
              />
            }
          />
          <Route
            path="requestConfirmation"
            element={
              <Status
                img="/imgs/confirm.svg"
                message="تم تلقى الطلب بنجاح, يمكنك المتابعة عن طريق الواتس اب"
                action ="/"
              />
            }
          />
          
        </Routes>
        <Footer />
        <WhatsApp />
      </BrowserRouter>
    </>
  );
}

export default App;
