import { Icon } from '@iconify/react';
import { Portal, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MagneticButton from '../MagneticButton/MagneticButton';
import './Navbar.css'

const Navbar = () => {
    const [show, setShow] = useState(false);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > 300) {
                setShow(false);
            } else {
                setShow(true);
            }
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [show]);


    return (
        <div className="navbar">
            <div className="title">
                <MagneticButton variant='text'>Abner<b>Silva</b></MagneticButton>
            </div>

            <div className="options">
                <MagneticButton variant='text'>Trabalhos</MagneticButton>
                <MagneticButton variant='text'>Contato</MagneticButton>
            </div>

            <Portal>
                <div className="ham"
                    style={{
                        transform: `scale(${!show ? '1' : '0'})`
                    }}
                >
                    <MagneticButton className='scrolledNav'><Icon icon="ci:menu-duo-lg" /></MagneticButton>
                </div>
            </Portal>
        </div>
    );
}

export default Navbar;