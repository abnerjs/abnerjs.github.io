import React from 'react';
import Navbar from 'src/components/Navbar/Navbar';
import './home.css';
import ContactFooter from '../../components/ContactFooter/ContactFooter';
import Works from './Works/Works';
import Presentation from './Presentation/Presentation';
import AboutHome from './About/AboutHome';

const Home = () => {
    return (
        <div className="home">
            <Navbar />

            <Presentation />

            <AboutHome />

            <Works />

            <ContactFooter />
        </div>
    );
}

export default Home;