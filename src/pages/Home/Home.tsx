import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Navbar from 'src/components/Navbar/Navbar';
import './home.css';
import { Icon } from '@iconify/react';
import photo from 'src/assets/images/imgLanding.png';
import { Link } from 'react-router-dom';
import MagneticButton from 'src/components/MagneticButton/MagneticButton';
import Waves from './Presentation/Waves/Waves';
import { Parallax } from 'react-scroll-parallax';
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