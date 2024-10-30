import React from "react";
import "./side-info.css";
import MagneticButton from "src/components/MagneticButton/MagneticButton";
import { Link } from "react-router-dom";

const SideInfo = () => {
  return (
    <div className="side-info">
      <div className="section">
        <div className="title">CONTATO</div>
        <MagneticButton variant="text">
          <Link
            to="#"
            onClick={(e: any) => {
              window.location.href = "mailto:abner.js05@gmail.com";
              e.preventDefault();
            }}
          >
            abner.js05@gmail.com
          </Link>
        </MagneticButton>
        <MagneticButton variant="text">
          <Link
            to={{
              pathname:
                "https://wa.me/5518997361645?text=Ol%C3%A1%2C%20Abner.%20Venho%20por%20meio%20do%20seu%20portfolio%20e%20gostaria%20de%20falar%20contigo!",
            }}
            target="_blank"
          >
            +55 18 99736-1645
          </Link>
        </MagneticButton>
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
      <div className="section socials">
        <div className="title">REDES SOCIAIS</div>
        <MagneticButton variant="text">
          <Link
            to={{
              pathname:
                "https://wa.me/5518997361645?text=Ol%C3%A1%2C%20Abner.%20Venho%20por%20meio%20do%20seu%20portfolio%20e%20gostaria%20de%20falar%20contigo!",
            }}
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
          <Link to={{ pathname: "https://gitHub.com/abnerjs" }} target="_blank">
            GitHub
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
