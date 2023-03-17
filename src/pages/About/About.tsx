import React from 'react';
import './about.css';
import Navbar from 'src/components/Navbar/Navbar';
import Header from './Header/Header';
import Content from './Content/Content';
import ContactFooter from 'src/components/ContactFooter/ContactFooter';
import Stripe from 'src/components/Stripe/Stripe';

const About = () => {
    return (
        <div className="about">
            <Navbar black />

            <Header />

            <Content />

            <div className="works-with">
                <div className="title">Posso te ajudar com</div>
                <div className="row">
                    <div className="section">
                        <div className="number">01</div>
                        <Stripe height='2' />
                        <div className="titleSkill">
                            Design
                        </div>
                        <div className="skillText">
                            Com um sólido histórico na criação de sites e aplicativos, ofereço designs digitais fortes e fáceis de usar. A marca sólida da empresa é a base de qualquer site bem-sucedido.                        
                        </div>
                    </div>
                    <div className="section">
                        <div className="number">02</div>
                        <Stripe height='2' />
                        <div className="titleSkill">
                            Desenvolvimento
                        </div>
                        <div className="skillText">
                            Eu construo sites escaláveis a partir do zero e criação de novas features em sites pré-existentes. Meu foco é o front-end contendo desenvolvimento de conteúdo, micro animações, transições e interação.
                        </div>
                    </div>
                    <div className="section">
                        <div className="number">03</div>
                        <Stripe height='2' />
                        <div className="titleSkill">
                            O pacote completo
                        </div>
                        <div className="skillText">
                            Um site completo desde o conceito até a implementação. Com um grande senso de design e minha habilidade de desenvolvimento, consigo criar projetos que se encaixam perfeitamente no contexto da sua necessidade.
                        </div>
                    </div>
                </div>
            </div>

            <ContactFooter />
        </div>
    );
}

export default About;