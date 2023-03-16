import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound';
import { ParallaxProvider } from 'react-scroll-parallax';
import About from './pages/About/About';
import ScrollToTop from './ScrollToTop/ScrollToTop';

const App: React.FC = (props: any) => {
  return (
    <div className="App">
      <ParallaxProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ParallaxProvider>
    </div>
  );
}

export default App;
