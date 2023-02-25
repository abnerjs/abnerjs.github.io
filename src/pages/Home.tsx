import { Avatar, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Navbar from 'src/components/Navbar/Navbar';
import './home.css';
import { Icon } from '@iconify/react';
import photo from '../assets/images/imgLanding.png';
import { Link } from 'react-router-dom';
import MagneticButton from 'src/components/MagneticButton/MagneticButton';

const Home = () => {
    const [translate, setTranslate] = useState('translate(0,0)')

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const btn = e.target as HTMLElement;
        const position = btn.getBoundingClientRect();
        const x = e.clientX - position.left - position.width / 2;
        const y = e.clientY - position.top - position.height / 2;
        setTranslate(`translate(${x * 0.3}px, ${y * 0.5}px)`)
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        setTranslate('translate(0,0)')
    }


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
                <Button
                    variant='contained'
                    disableElevation
                    endIcon={<Icon icon="fluent:arrow-download-16-filled" />}
                >
                    <a href="../assets/AbnerCurriculumVitae.pdf" target="_blank" download>
                        BAIXAR<br />CURRÍCULO
                    </a>
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
                    <MagneticButton>Sobre mim</MagneticButton>
                </div>
            </div>

            <div className="works">
                <div className="title">Principais trabalhos</div>
                <hr />
                <div className="content">
                    <div className="text">Portal de Relatórios</div>
                    <div className="info">
                        <div className="type">React + .NET</div>
                        <div className="dev">Design & Desenvolvimento</div>
                    </div>
                    <div className="container"></div>
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
                    <div className="text">Identidade Visual</div>
                    <div className="info">
                        <div className="type">Photoshop</div>
                        <div className="dev">Design</div>
                    </div>
                </div>
                <hr />
                <div className="more-work">                    
                    <MagneticButton 
                        className='moreWork'
                        variant='outlined'
                        endIcon={<Icon icon="fluent:arrow-right-48-regular" />}
                    >
                        Mais trabalhos
                    </MagneticButton>
                </div>


            </div>
            <div className="works-grid">
                <div className="row">
                    <div className="work"></div>
                    <div className="work"></div>
                    <div className="work"></div>
                    <div className="work"></div>
                </div>
                <div className="row reverse">
                    <div className="work"></div>
                    <div className="work"></div>
                    <div className="work"></div>
                    <div className="work"></div>
                </div>
            </div>

            <div className="contact">
                <div className="container">
                    <div className="title">
                        <h2>
                            <div>
                                <Avatar
                                    alt="Abner Silva"
                                    src={photo}
                                    sx={{
                                        bgcolor: 'darkgrey',
                                        width: 100, height: 100,
                                        marginRight: 4
                                    }}
                                />
                                Vamos
                            </div>
                            <div>trabalhar juntos!</div>
                        </h2>
                    </div>
                    <hr />
                    <div className="contact-btn">
                        <div className="float-btn">
                        <MagneticButton className='elementBtn'>Sobre mim</MagneticButton>
                        </div>
                    </div>
                    <div className="infos">
                        <MagneticButton variant='outlined'>abner.js05@gmail.com</MagneticButton>
                        <MagneticButton variant='outlined'>+55 18 99736-1645</MagneticButton>
                    </div>
                </div>
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
            </div>
        </div>
    );
}

export default Home;