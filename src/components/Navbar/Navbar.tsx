import { Tab, Tabs } from '@mui/material';
import React from 'react';
import './Navbar.css'

const Navbar = () => {
    const [value, setValue] = React.useState('home');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className="navbar">
            <div className="title" onClick={(e) => {
                handleChange(e, 'home');
            }}>Abner<b>Silva</b></div>

            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="tabs"
            >
                <Tab value="works" label="Trabalhos" />
                <Tab value="contact" label="Contato" />
            </Tabs>
        </div>
    );
}

export default Navbar;