import React from 'react';
import './contact.css';
import Navbar from 'src/components/Navbar/Navbar';
import Footer from 'src/components/Footer/Footer';
import { Avatar, TextField } from '@mui/material';
import Stripe from 'src/components/Stripe/Stripe';
import Field from 'src/components/Field/Field';
import MagneticButton from 'src/components/MagneticButton/MagneticButton';

const Contact = () => {
    return (
        <div className="contact">

            <Navbar />

            <div className="form">
                <div className="header">
                    <div className="title">
                        Vamos começar<br />
                        um projeto juntos?
                    </div>
                    <div className="avatar">
                        <Avatar>
                            asd
                        </Avatar>
                    </div>
                </div>

                <div className="row">
                    <div className="content">
                        <Stripe margin={0} />
                        <Field label='Qual o seu nome?' placeholder='Fulano da Silva *' />
                        <Stripe margin={0} />
                        <Field label='Qual o seu email?' placeholder='fulano@email.com *' />
                        <Stripe margin={0} />
                        <Field label='Sua mensagem' multiline placeholder='Olá, Abner. Vi seu portfólio e gostaria de... *' />
                        <Stripe margin={0} />
                        <div className="sendMailController">
                            <MagneticButton className='sendMail'>Enviar</MagneticButton>
                        </div>
                    </div>
                    <div className="side-info">
                        <div className="section">
                            <div className="title">CONTATO</div>
                            <MagneticButton variant='text'>abner.js05@gmail.com</MagneticButton>
                            <MagneticButton variant='text'>+55 18 99736-1645</MagneticButton>
                        </div>
                        <div className="section">
                            <div className="title">DETALHES</div>
                            <MagneticButton variant='text'>Presidente Epitácio</MagneticButton>
                            <MagneticButton variant='text'>Brasil</MagneticButton>
                        </div>
                        <div className="section">
                            <div className="title">REDES SOCIAIS</div>
                            <MagneticButton variant='text'>Whatsapp</MagneticButton>
                            <MagneticButton variant='text'>Instagram</MagneticButton>
                            <MagneticButton variant='text'>LinkedIn</MagneticButton>
                            <MagneticButton variant='text'>Behance</MagneticButton>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;