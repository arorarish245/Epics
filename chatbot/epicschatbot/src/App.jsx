import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import ModelExplanation from "./components/ModelExplanation";
import FunFacts from "./components/FunFact";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model" element={<ModelExplanation />} />
        <Route path="/fun-facts" element={<FunFacts />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Chatbot />
      <Footer />
    </Router>
  );
};

export default App;
