import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App: React.FC = (props: any) => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
