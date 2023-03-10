import React from 'react';
import './about.css';
import MagneticButton from 'src/components/MagneticButton/MagneticButton';
import { useParallax } from 'react-scroll-parallax';

const About = () => {
    const parallax = useParallax<HTMLDivElement>({
        easing: 'easeOutQuad',
        translateY: [50, -25],
    });
    const parallaxTxt = useParallax<HTMLDivElement>({
        easing: 'easeOutQuad',
        translateY: [50, -25],
    });


    return (
        <div className="about">
            <div className="paragraph" ref={parallaxTxt.ref}>
                Desenvolvedor React pronto pra ajudar a projetar e/ou desenvolver o software que você precisa.
                <br />
                Possui experiência em desenvolvimento web (Full-Stack) e UI/UX.
            </div>
            <div className="about-btn" ref={parallaxTxt.ref}>
                <div className="text">
                    A combinação da minha paixão por design, código e interações.
                </div>
                <div className="div" ref={parallax.ref}><MagneticButton>Sobre mim</MagneticButton></div>
            </div>
        </div>
    );
}

export default About;