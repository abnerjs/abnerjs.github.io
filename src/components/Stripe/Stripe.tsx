import React from 'react';
import './stripe.css';

interface Props {
    margin?: number;
}

const Stripe = (props: Props) => {
    return (
        <div className="stripe"
            style={{
                margin: props.margin + ' 0' || '32px 0'
            }}
        ></div>
    );
}

export default Stripe;