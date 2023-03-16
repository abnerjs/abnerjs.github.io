import React, { useState } from 'react';
import './works.css';
import { Icon } from '@iconify/react';
import { Parallax } from 'react-scroll-parallax';
import MagneticButton from 'src/components/MagneticButton/MagneticButton';
import { Tooltip } from 'react-tooltip';
import integra from 'src/assets/images/integra.png';
import ponto from 'src/assets/images/ponto.png';
import swingmd from 'src/assets/images/swingmd.gif';

const HoverPanel = (props: any) => {

    return (
        <div className="hover-panel"
            style={{
                width: 500,
                height: 500,
                overflow: 'hidden',
            }}
        >
            <MagneticButton className='access'>Acessar</MagneticButton>
            <div className="panel"
                style={{
                    width: '100%',
                    height: '400%',
                    transform: `translateY(-${25 * props.hoverIndex}%)`,
                    transition: 'all ease 0.4s',
                }}
            >
                <div className="subPanel"
                    style={{
                        width: '100%',
                        height: '25%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#C3CCE1',
                    }}
                >
                    <img src={integra} style={{
                        width: '80%'
                    }} />
                </div>
                <div className="subPanel"
                    style={{
                        width: '100%',
                        height: '25%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#D4B492',
                    }}
                >
                    <img src={swingmd} style={{
                        width: '80%'
                    }} />
                </div>
                <div className="subPanel"
                    style={{
                        width: '100%',
                        height: '25%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#D4CAC6',
                    }}
                >
                    <img src={ponto} style={{
                        width: '80%'
                    }} />
                </div>
                <div className="subPanel"
                    style={{
                        width: '100%',
                        height: '25%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#57A6A2',
                    }}
                >
                    <img src={integra} style={{
                        width: '80%'
                    }} />
                </div>
            </div>
        </div>
    );
}

const WorksContent = (props: any) => {
    return (
        <>
            <div className="content"
                onMouseEnter={() => props.setHoverIndex(0)}
            >
                <div className="text">Portal de Relatórios</div>
                <div className="info">
                    <div className="type">React + .NET</div>
                    <div className="dev">Design & Desenvolvimento</div>
                </div>
                <div className="container"></div>
            </div>
            <hr />
            <div className="content"
                onMouseEnter={() => props.setHoverIndex(1)}
            >
                <div className="text">Material Design</div>
                <div className="info">
                    <div className="type">Java Swing</div>
                    <div className="dev">Desenvolvimento de Componentes</div>
                </div>
            </div>
            <hr />
            <div className="content"
                onMouseEnter={() => props.setHoverIndex(2)}
            >
                <div className="text">Sistema de Ponto</div>
                <div className="info">
                    <div className="type">Figma</div>
                    <div className="dev">Design & Interação</div>
                </div>
            </div>
            <hr />
            <div className="content"
                onMouseEnter={() => props.setHoverIndex(3)}
            >
                <div className="text">Identidade Visual</div>
                <div className="info">
                    <div className="type">Photoshop</div>
                    <div className="dev">Design</div>
                </div>
            </div>
            <hr />
        </>
    );
}

const Works = () => {
    const [hoverIndex, setHoverIndex] = useState(0)

    return (
        <>
            <div className="works">
                <div className="title">Principais trabalhos</div>
                <hr />

                <a id='works-hoverable'
                    data-tooltip-offset={-250}
                >
                    <WorksContent setHoverIndex={setHoverIndex} />
                </a>

                <Tooltip
                    anchorSelect="#works-hoverable"
                    float
                >
                    <HoverPanel hoverIndex={hoverIndex} />
                </Tooltip>


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
                <Parallax
                    translateX={['0%', '-20%']}
                >
                    <div className="row">
                        <div className="work"></div>
                        <div className="work"></div>
                        <div className="work"></div>
                        <div className="work"></div>
                    </div>
                </Parallax>
                <Parallax
                    translateX={['0%', '20%']}
                >
                    <div className="row reverse">
                        <div className="work"></div>
                        <div className="work"></div>
                        <div className="work"></div>
                        <div className="work"></div>
                    </div>
                </Parallax>
            </div>
        </>
    );
}

export default Works;