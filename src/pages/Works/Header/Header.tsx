import React from "react";
import "./header.css";
import Stripe from "src/components/Stripe/Stripe";
import Lottie from "lottie-react";
import animation from "src/assets/webdesign.json";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        Criando produtos digitais
        <br />
        fora da caixa
      </div>
      <Stripe />
      <Lottie className="lottie-container" animationData={animation} />
    </div>
  );
};

export default Header;
