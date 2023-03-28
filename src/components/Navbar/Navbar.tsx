import { Icon } from "@iconify/react";
import { Drawer, Portal, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MagneticButton from "../MagneticButton/MagneticButton";
import Stripe from "../Stripe/Stripe";
import "./Navbar.css";
import nameblack from "src/assets/images/navbar/nameblack.png";
import name from "src/assets/images/navbar/namewhite.png";

interface Props {
  black?: boolean;
}

const Navbar = (props: Props) => {
  const [show, setShow] = useState(false);
  const [expand, setExpand] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      setShow(window.scrollY > 300);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [show]);

  return (
    <div className="navbar">
      <div className={`title${props.black ? " black" : ""}`}>
        <MagneticButton variant="text">
          <Link to="/">
            <img src={props.black ? nameblack : name} height={45} />
          </Link>
        </MagneticButton>
      </div>

      <div className={`options${props.black ? " black" : ""}`}>
        <MagneticButton disableRipple variant="text">
          <Link to="/works">Trabalhos</Link>
        </MagneticButton>
        <MagneticButton disableRipple variant="text">
          <Link to="/about">Sobre</Link>
        </MagneticButton>
        <MagneticButton disableRipple variant="text">
          <Link to="/contact">Contato</Link>
        </MagneticButton>
      </div>

      <div className={`options mobile${props.black ? " black" : ""}`}>
        <MagneticButton
          onClick={() => setExpand(!expand)}
          disableRipple
          variant="text"
        >
          Menu
        </MagneticButton>
      </div>

      <Portal>
        <div
          className="btnController"
          style={{
            transform: `scale(${show || expand ? "1" : "0"})`,
          }}
        >
          <MagneticButton
            className={`scrolledNavBtn${expand ? " active" : ""}`}
            onClick={() => setExpand(!expand)}
          >
            <div className={`nav-icon${expand ? " active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </MagneticButton>
        </div>
        <Drawer
          anchor="right"
          open={expand}
          onClose={() => {
            setExpand(false);
          }}
          slotProps={{
            backdrop: {
              style: {
                backdropFilter: "blur(8px)",
              },
            },
          }}
        >
          <div className="title">NAVEGAÇÃO</div>
          <Stripe />
          <div className="options">
            <MagneticButton
              onClick={() => setExpand(false)}
              disableRipple
              variant="text"
            >
              <Link to="/">Início</Link>
            </MagneticButton>
            <MagneticButton
              onClick={() => setExpand(false)}
              disableRipple
              variant="text"
            >
              <Link to="/works">Trabalhos</Link>
            </MagneticButton>
            <MagneticButton
              onClick={() => setExpand(false)}
              disableRipple
              variant="text"
            >
              <Link to="/about">Sobre</Link>
            </MagneticButton>
            <MagneticButton
              onClick={() => setExpand(false)}
              disableRipple
              variant="text"
            >
              <Link to="/contact">Contato</Link>
            </MagneticButton>
          </div>

          <div className="socials">
            <div className="title">REDES SOCIAIS</div>
            <div className="links">
              <Link
                to={{
                  pathname:
                    "https://wa.me/5518997361645?text=Ol%C3%A1%2C%20Abner.%20Venho%20por%20meio%20do%20seu%20portfolio%20e%20gostaria%20de%20falar%20contigo!",
                }}
                target="_blank"
              >
                <MagneticButton variant="text">
                  <Icon icon="akar-icons:whatsapp-fill" />
                </MagneticButton>
              </Link>
              <Link
                to={{ pathname: "https://www.instagram.com/eae.abner/" }}
                target="_blank"
              >
                <MagneticButton variant="text">
                  <Icon icon="mdi:instagram" />
                </MagneticButton>
              </Link>
              <Link
                to={{ pathname: "https://gitHub.com/abnerjs" }}
                target="_blank"
              >
                <MagneticButton variant="text">
                  <Icon icon="mdi:github" />
                </MagneticButton>
              </Link>
              <Link
                to={{ pathname: "https://www.linkedin.com/in/abner-j-silva/" }}
                target="_blank"
              >
                <MagneticButton variant="text">
                  <Icon icon="ri:linkedin-fill" />
                </MagneticButton>
              </Link>
              <Link
                to={{ pathname: "https://www.behance.net/abnerjsilva" }}
                target="_blank"
              >
                <MagneticButton variant="text">
                  <Icon icon="ri:behance-fill" />
                </MagneticButton>
              </Link>
            </div>
          </div>
        </Drawer>
      </Portal>
    </div>
  );
};

export default Navbar;
