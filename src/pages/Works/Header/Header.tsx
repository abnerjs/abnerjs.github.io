import React from "react";
import "./header.css";
import Stripe from "src/components/Stripe/Stripe";
import Lottie from "lottie-react";
import animation from "src/assets/webdesign.json";
import MagneticButton from "src/components/MagneticButton/MagneticButton";
import { Parallax } from "react-scroll-parallax";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        Criando produtos digitais
        <br />
        fora da caixa
      </div>
      <Stripe />
      <Parallax translateX={[-100, -50]}
        translateY={[-50, -50]}
        className="parallax-lottie"
      >
        <MagneticButton
          onClick={(e: any) => e.preventDefault()}
          className="lottie-container"
          devOrientationX
          disabled
        >
          <Lottie className="lottie-comp" animationData={animation} />
        </MagneticButton>
      </Parallax>
    </div>
  );
};

export default Header;
