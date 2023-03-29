import React from "react";
import "./header.css";
import Lottie from "lottie-react";
import Stripe from "src/components/Stripe/Stripe";
import animation from "src/assets/developer.json";
import { Parallax } from "react-scroll-parallax";
import MagneticButton from "src/components/MagneticButton/MagneticButton";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        Ajudando você a prosperar
        <br />
        no mundo digital.
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
