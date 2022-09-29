import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Components/home/Home";
import Footer from "./Components/footer/Footer";
import Distribution from "./Components/distrubution/Distribution";
import Application from "./Components/application/Application";
import Services from "./Components/services/Services";
import Servicess from "./Components/Service/Services";
import Thanku from "./Components/thanku.js/Thanku";
import Uiguide from "./Components/Uiguide/Uiguide";
import Distributionpage from "./Components/distributionpage/Distributionpage";
import Faqtwo from "./Components/faqtwo/Faqtwo";
import Faqs from "./Components/faq/Faqs";
import News from "./Components/news/News";
import Newshome from "./Components/news/Newshow";
import Publishing from "./Components/publish/Publish";
import Contact from "./Components/contactus/Contact";
import Term from "./Components/Terms/Term.js"
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Distribution" element={<Distribution />} /> */}
          {/* <Route path="/Distribution" element={<Distribution />} /> */}
          <Route path="/Distributionpage" element={<Distributionpage />} />
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/Servicess" element={<Servicess />} />
          <Route path="/Thanku" element={<Thanku />} />
          <Route path="/Uiguide" element={<Uiguide />} />
          <Route path="/Newshome" element={<Newshome />} />
          <Route path="/News" element={<News />} />
          <Route path="/Publishing" element={<Publishing />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Term" element={<Term/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
