import React from "react";
import "./header.css";
import Stripe from "src/components/Stripe/Stripe";
import Lottie from "lottie-react";
import MagneticButton from "src/components/MagneticButton/MagneticButton";
import { Parallax } from "react-scroll-parallax";

interface Props {
  title: string;
  animation?: unknown;
  secondLine?: string;
  work?: boolean;
}

const Header = (props: Props) => {
  return (
    <div className="header">
      <div className="title">
        {props.title}
        <br />
        {props.secondLine}
      </div>
      {!props.work && (
        <>
          <Stripe />
          <Parallax
            translateX={[-100, -50]}
            translateY={[-50, -50]}
            className="parallax-lottie"
          >
            <MagneticButton
              onClick={(e: any) => e.preventDefault()}
              className="lottie-container"
              devOrientationX
              disabled={props.animation ? true : false}
            >
              {props.animation && (
                <Lottie
                  className="lottie-comp"
                  animationData={props.animation}
                />
              )}
            </MagneticButton>
          </Parallax>
        </>
      )}
    </div>
  );
};

export default Header;
