import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom';
import MagneticButton from 'src/components/MagneticButton/MagneticButton';
import { Avatar } from '@mui/material';
import photo from 'src/assets/images/imgLanding.png';

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
            <div className="footer">
                <div className="copy">
                    © 2023 - Desenvolvido por Abner J. Silva
                </div>
                <div className="socials">
                    <div className="title">REDES SOCIAIS</div>
                    <div className="links">
                        <Link to={{ pathname: 'https://wa.me/5518988189353' }} target="_blank">WhatsApp</Link>
                        <Link to={{ pathname: 'https://www.instagram.com/eae.abner/' }} target="_blank">Instagram</Link>
                        <Link to={{ pathname: 'https://www.linkedin.com/in/abner-j-silva/' }} target="_blank">LinkedIn</Link>
                        <Link to={{ pathname: 'https://www.behance.net/abnerjsilva' }} target="_blank">Behance</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;