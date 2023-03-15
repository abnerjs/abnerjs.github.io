import React from 'react';
import Navbar from 'src/components/Navbar/Navbar';
import './home.css';
import Contact from './Contact/Contact';
import Works from './Works/Works';
import Presentation from './Presentation/Presentation';
import About from './About/About';

const Home = () => {
    return (
        <div className="home">
            <Navbar />

            <Presentation />

            <About />

            <Works />

            <Contact />
        </div>
    );
}

export default Home;