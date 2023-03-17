import React from 'react';
import './works.css';
import Navbar from 'src/components/Navbar/Navbar';

const Works = () => {
    return (
        <div className="works">
            <Navbar black />

            <div className="header">
                <div className="title">
                    Criando produtos digitais<br />fora da caixa
                </div>
            </div>
        </div>
    );
}

export default Works;