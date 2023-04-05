import "./App.css";
import React from "react";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Works from "./pages/Works/Works";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollToTop from "./utils/ScrollToTop/ScrollToTop";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import useTransitionStore from "./store/storeConfig";

const App: React.FC = () => {
  const transition = useTransitionStore((state) => state.transition);
  const transitionLabel = useTransitionStore((state) => state.transitionLabel);
  
  return (
    <div className="App">
      <ParallaxProvider>
      <CustomCursor transitionLabel={transitionLabel} primary primaryScale={transition} />
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/ponto" element={<Works />} />
            <Route path="/works/sigam" element={<Works />} />
            <Route path="/works/iworkoff" element={<Works />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </ParallaxProvider>
    </div>
  );
};

export default App;
