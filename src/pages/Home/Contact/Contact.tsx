import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom';
import MagneticButton from 'src/components/MagneticButton/MagneticButton';
import { Avatar } from '@mui/material';
import photo from 'src/assets/images/abnerig.jpg';
import Footer from 'src/components/Footer/Footer';

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="title">
                    <h2>
                        <div>
                            <Avatar
                                alt="Abner Silva"
                                src={photo}
                                sx={{
                                    bgcolor: 'darkgrey',
                                    width: 100, height: 100,
                                    marginRight: 4
                                }}
                            />
                            Vamos
                        </div>
                        <div>trabalhar juntos!</div>
                    </h2>
                </div>
                <hr />
                <div className="contact-btn">
                    <div className="float-btn">
                        <MagneticButton className='elementBtn'>Sobre mim</MagneticButton>
                    </div>
                </div>
                <div className="infos">
                    <MagneticButton variant='outlined'>abner.js05@gmail.com</MagneticButton>
                    <MagneticButton variant='outlined'>+55 18 99736-1645</MagneticButton>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;