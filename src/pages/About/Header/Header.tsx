import React from 'react';
import './header.css';
import Lottie from "lottie-react";
import Stripe from 'src/components/Stripe/Stripe';
import animation from 'src/assets/developer.json';

const Header = () => {
    return (
        <div className="header">
            <div className="title">
                Ajudando você a prosperar<br />no mundo digital.
            </div>
            <Stripe />

            <Lottie
                className="lottie-container"
                animationData={animation}
            />
        </div>
    );
}

export default Header;