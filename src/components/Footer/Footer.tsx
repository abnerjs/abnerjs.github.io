import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
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
    );
}

export default Footer;