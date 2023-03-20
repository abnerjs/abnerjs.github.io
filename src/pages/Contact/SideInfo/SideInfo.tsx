import React from "react";
import "./side-info.css";
import MagneticButton from "src/components/MagneticButton/MagneticButton";
import { Link } from "react-router-dom";

const SideInfo = () => {
  return (
    <div className="side-info">
      <div className="section">
        <div className="title">CONTATO</div>
        <MagneticButton variant="text">abner.js05@gmail.com</MagneticButton>
        <MagneticButton variant="text">+55 18 99736-1645</MagneticButton>
      </div>
      <div className="section">
        <div className="title">DETALHES</div>
        <MagneticButton disabled variant="text">
          Presidente Epitácio
        </MagneticButton>
        <MagneticButton disabled variant="text">
          São Paulo
        </MagneticButton>
        <MagneticButton disabled variant="text">
          Brasil
        </MagneticButton>
      </div>
      <div className="section">
        <div className="title">REDES SOCIAIS</div>
        <MagneticButton variant="text">
          <Link
            to={{ pathname: "https://wa.me/5518988189353" }}
            target="_blank"
          >
            WhatsApp
          </Link>
        </MagneticButton>
        <MagneticButton variant="text">
          <Link
            to={{ pathname: "https://www.instagram.com/eae.abner/" }}
            target="_blank"
          >
            Instagram
          </Link>
        </MagneticButton>
        <MagneticButton variant="text">
          <Link
            to={{ pathname: "https://www.linkedin.com/in/abner-j-silva/" }}
            target="_blank"
          >
            LinkedIn
          </Link>
        </MagneticButton>
        <MagneticButton variant="text">
          <Link
            to={{ pathname: "https://www.behance.net/abnerjsilva" }}
            target="_blank"
          >
            Behance
          </Link>
        </MagneticButton>
      </div>
    </div>
  );
};

export default SideInfo;
