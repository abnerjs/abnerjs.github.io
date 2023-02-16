import { Avatar, Button } from '@mui/material';
import React from 'react';
import Navbar from 'src/components/Navbar/Navbar';
import './home.css';
import { Icon } from '@iconify/react';

const Home = () => {
    return (
        <div className="home">
            <Navbar />

            <div className="landing">

                <div id="waves">
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                        <defs>
                            <path id="gentle-wave"
                                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255, 255, 255,0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255, 255, 255,0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255, 255, 255,0.1)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(255, 255, 255)" />
                        </g>
                    </svg>
                </div>
            </div>

            <div className="curriculum">
                <Button variant='contained' disableElevation endIcon={<Icon icon="fluent:arrow-download-16-filled" />}>
                    BAIXAR<br />CURRICULO
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

            <div className="works">
                <div className="title">Principais trabalhos</div>
                <hr />
                <div className="content">
                    <div className="text">Portal de Relatórios</div>
                    <div className="info">
                        <div className="type">React</div>
                        <div className="dev">Design & Desenvolvimento</div>
                    </div>
                </div>
                <hr />
                <div className="content">
                    <div className="text">iWorkOff</div>
                    <div className="info">
                        <div className="type">React</div>
                        <div className="dev">Design & Desenvolvimento</div>
                    </div>
                </div>
                <hr />
                <div className="content">
                    <div className="text">Sistema de Ponto</div>
                    <div className="info">
                        <div className="type">Figma</div>
                        <div className="dev">Design & Interação</div>
                    </div>
                </div>
                <hr />
                <div className="content">
                    <div className="text">Portal de Relatórios</div>
                    <div className="info">
                        <div className="type">React</div>
                        <div className="dev">Design & Desenvolvimento</div>
                    </div>
                </div>
                <hr />
                <div className="more-work">
                    <Button variant='outlined' className='moreWork' endIcon={<Icon icon="fluent:arrow-right-48-regular" />}>
                        Mais trabalhos
                    </Button>
                </div>


            </div>
            <div className="works-grid">
                <div className="row">
                    <div className="work"></div>
                    <div className="work"></div>
                    <div className="work"></div>
                    <div className="work"></div>
                </div>
                <div className="row">
                    <div className="work"></div>
                    <div className="work"></div>
                    <div className="work"></div>
                    <div className="work"></div>
                </div>
            </div>

            <div className="contact">
                <div className="title">
                    <h2>
                        <span>
                            <Avatar alt="Abner Silva" src="../assets/images/imgLanding.png" />
                            Vamos trabalhar
                        </span>
                        <span>juntos!</span>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Home;