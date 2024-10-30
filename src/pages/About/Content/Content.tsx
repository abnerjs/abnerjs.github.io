import React from "react";
import "./content.css";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import me from "src/assets/images/sociable.jpg";

const Content = () => {
  return (
    <div className="content">
      <div className="text">
        No mundo da programação desde 2015, sou apaixonado pelo que faço!
        <br />
        <br />A cada projeto, busco expandir meus horizontes e aprimorar meu
        trabalho, mantendo sempre o foco na qualidade.
        <div className="points">Sempre explorando&nbsp;</div>
      </div>
      <ParallaxBanner className="parallaxImg">
        <ParallaxBannerLayer
          expanded={false}
          speed={-20}
          opacity={[0.9, 1]}
          className="imgLayer"
        >
          <img src={me} alt="me" />
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
};

export default Content;
