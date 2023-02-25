import { Tab, Tabs } from '@mui/material';
import React from 'react';
import MagneticButton from '../MagneticButton/MagneticButton';
import './Navbar.css'

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="title">
                <MagneticButton variant='text'>Abner<b>Silva</b></MagneticButton>
            </div>

            <div className="options">
                <MagneticButton variant='text'>Trabalhos</MagneticButton>
                <MagneticButton variant='text'>Contato</MagneticButton>
            </div>
        </div>
    );
}

export default Navbar;