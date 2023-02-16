import { Button } from '@mui/material';
import React from 'react';
import Navbar from 'src/components/Navbar/Navbar';
import './home.css';
import { Icon } from '@iconify/react';

const Home = () => {
    return (
        <div className="home">
            <Navbar />

            <div className="landing">
                BLABLA
            </div>

            <div className="curriculum">
                <Button variant='contained' disableElevation endIcon={<Icon icon="fluent:arrow-download-16-filled" />}>
                    BAIXAR<br/>CURRICULO
                </Button>
            </div>

            <div className="marquee">
                <div className="track">
                    <div className="content">&nbsp;Abner José da Silva • Abner José da Silva • Abner José da Silva • Abner José da Silva • </div>
                </div>
            </div>

            <div className="about">
                <div className="paragraph">
                    Desenvolvedor React pronto pra ajudar a projetar e/ou desenvolver o software que você precisa.
                    <br />
                    Possui experiência em desenvolvimento web (Full-Stack) e UI/UX.
                </div>
                <div className="about-btn">
                    <div className="text">
                        A combinação da minha paixão por design, código e interações.
                    </div>
                    <Button variant='contained' disableElevation>
                        Sobre mim
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Home;