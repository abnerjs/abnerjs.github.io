import React from 'react';
import './form.css';
import Field from 'src/components/Field/Field';
import MagneticButton from 'src/components/MagneticButton/MagneticButton';
import Stripe from 'src/components/Stripe/Stripe';

const Form = () => {
    return (
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
    );
}

export default Form;