import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import ModelExplanation from "./components/ModelExplanation";
import FunFacts from "./components/FunFact";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/model-explanation" element={<ModelExplanation />} />
        <Route path="/fun-facts" element={<FunFacts />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Footer />
      </Routes>
    </Router>
  );
};

export default App;
