import React from 'react';
import './about.css';
import Navbar from 'src/components/Navbar/Navbar';
import Stripe from 'src/components/Stripe/Stripe';
import animation from 'src/assets/developer.json';
import Lottie from "lottie-react";

const About = () => {
    return (
        <div className="about">
            <Navbar black />

            <div className="header">
                <div className="title">
                    Ajudando você a prosperar<br />no mundo digital
                </div>
                <Stripe />

                <Lottie
                    className="lottie-container"
                    animationData={animation}
                />
            </div>

            <div className="content">
                <div className="text">
                    No mundo da programação desde 2015, sou apaixonado pelo o que faço!
                    <br />
                    Para cada projeto, eu coloco meu trabalho em novos horizontes, sempre prezando pela qualidade.

                    <div className="points">
                        Sempre explorando...
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;