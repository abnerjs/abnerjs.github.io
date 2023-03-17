import React from 'react';
import './about.css';
import Navbar from 'src/components/Navbar/Navbar';
import Header from './Header/Header';
import Content from './Content/Content';
import ContactFooter from 'src/components/ContactFooter/ContactFooter';
import WorksWith from './Content/WorksWith/WorksWith';

const About = () => {
    return (
        <div className="about">
            <Navbar black />

            <Header />

            <Content />

            <WorksWith />

            <ContactFooter />
        </div>
    );
}

export default About;