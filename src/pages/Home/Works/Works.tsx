import React, { useState } from "react";
import "./works.css";
import { Icon } from "@iconify/react";
import { Parallax } from "react-scroll-parallax";
import MagneticButton from "src/components/MagneticButton/MagneticButton";
import CustomCursor from "src/components/CustomCursor/CustomCursor";
import { Link, useNavigate } from "react-router-dom";
import integra from "src/assets/images/works/integra30.png";
import ponto from "src/assets/images/works/ponto.png";
import swingmd from "src/assets/images/works/swingmd.gif";
import insumos from "src/assets/images/works/insumos.png";
import iworkoff from "src/assets/images/works/iworkoff.gif";
import portalRelat from "src/assets/images/works/portalRelat.gif";
import useTransitionStore from "src/store/storeConfig";

const HoverPanel = (props: any) => {
  return (
    <div
      className="hover-panel"
      style={{
        width: 500,
        height: 500,
        overflow: "hidden",
      }}
    >
      <MagneticButton className="access">Acessar</MagneticButton>
      <div
        className="panel"
        style={{
          width: "100%",
          height: "400%",
          transform: `translateY(-${25 * props.hoverIndex}%)`,
          transition: "all ease 0.4s",
        }}
      >
        <div
          className="subPanel"
          style={{
            width: "100%",
            height: "25%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#C3CCE1",
          }}
        >
          <img
            src={portalRelat}
            style={{
              width: "80%",
            }}
          />
        </div>
        <div
          className="subPanel"
          style={{
            width: "100%",
            height: "25%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#D4B492",
          }}
        >
          <img
            src={swingmd}
            style={{
              width: "80%",
            }}
          />
        </div>
        <div
          className="subPanel"
          style={{
            width: "100%",
            height: "25%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#D4CAC6",
          }}
        >
          <img
            src={ponto}
            style={{
              width: "80%",
            }}
          />
        </div>
        <div
          className="subPanel"
          style={{
            width: "100%",
            height: "25%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#57A6A2",
          }}
        >
          <img
            src={integra}
            style={{
              width: "80%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const WorksContent = (props: any) => {
  return (
    <>
      <div
        className="content"
        onMouseEnter={() => {
          props.setHoverIndex(0);
          props.setScale(1);
        }}
        onMouseLeave={() => props.setScale(0)}
      >
        <div className="text">Portal de Relatórios</div>
        <div className="info">
          <div className="type">React + .NET</div>
          <div className="dev">Design & Desenvolvimento</div>
        </div>
        <div className="container"></div>
      </div>
      <hr />
      <div
        className="content"
        onMouseEnter={() => {
          props.setHoverIndex(1);
          props.setScale(1);
        }}
        onMouseLeave={() => props.setScale(0)}
      >
        <div className="text">Material Design</div>
        <div className="info">
          <div className="type">Java Swing</div>
          <div className="dev">Desenvolvimento de Componentes</div>
        </div>
      </div>
      <hr />
      <div
        className="content mobile"
        onMouseEnter={() => {
          props.setHoverIndex(2);
          props.setScale(1);
        }}
        onMouseLeave={() => props.setScale(0)}
      >
        <div className="text">Sistema de Ponto</div>
        <div className="info">
          <div className="type">Figma</div>
          <div className="dev">Design & Interação</div>
        </div>
      </div>
      <hr className="mobile" />
      <div
        className="content mobile"
        onMouseEnter={() => {
          props.setHoverIndex(3);
          props.setScale(1);
        }}
        onMouseLeave={() => props.setScale(0)}
      >
        <div className="text">Identidade Visual</div>
        <div className="info">
          <div className="type">Photoshop</div>
          <div className="dev">Design</div>
        </div>
      </div>
      <hr className="mobile" />
    </>
  );
};

const Works = () => {
  const changeTransition = useTransitionStore((state) => state.change);
  const changeLabel = useTransitionStore((state) => state.changeLabel);
  const navigate = useNavigate();
  const [scale, setScale] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);

  const handlerGoToWorks = () => {
    changeTransition(1);
    changeLabel("• TRABALHOS •");

    const timer = setTimeout(() => {
      navigate("/works");
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <>
      <div className="works">
        <div className="title">Principais trabalhos</div>
        <hr />

        <CustomCursor scale={scale}>
          <HoverPanel hoverIndex={hoverIndex} />
        </CustomCursor>

        <WorksContent setScale={setScale} setHoverIndex={setHoverIndex} />

        <div className="more-work">
          <MagneticButton
            className="moreWork"
            variant="outlined"
            endIcon={<Icon icon="fluent:arrow-right-48-regular" />}
            onClick={handlerGoToWorks}
          >
            Mais trabalhos
          </MagneticButton>
        </div>
      </div>

      <div className="works-grid">
        <Parallax translateX={["0%", "-20%"]}>
          <div className="row">
            <div className="work"></div>
            <div className="work">
              <img src={insumos} />
            </div>
            <div className="work"></div>
            <div className="work"></div>
          </div>
        </Parallax>
        <Parallax translateX={["0%", "20%"]}>
          <div className="row reverse">
            <div className="work"></div>
            <div className="work"></div>
            <div className="work">
            <img src={iworkoff} />
            </div>
            <div className="work"></div>
          </div>
        </Parallax>
      </div>
    </>
  );
};

export default Works;
