import "./footer.css";
import { Link } from "react-router-dom";
import MagneticButton from "../MagneticButton/MagneticButton";
import signal from 'src/assets/images/navbar/sigWhite.png';

const Footer = () => {
  return (
    <div className="footer">
      <img src={signal} className='img-footer' alt="Ajs" />
      <div className="copy">© 2023 - Code by Abner J. Silva | Design by Dennis Snellenberg</div>
      <div className="socials">
        <div className="title">REDES SOCIAIS</div>
        <div className="links">
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
            <Link
              to={{ pathname: "https://gitHub.com/abnerjs" }}
              target="_blank"
            >
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
    </div>
  );
};

export default Footer;
