import React, { useState } from "react";
import "./contact-footer.css";
import { Link, useNavigate } from "react-router-dom";
import MagneticButton from "src/components/MagneticButton/MagneticButton";
import { Avatar } from "@mui/material";
import photo from "src/assets/images/abnerig.jpg";
import Footer from "src/components/Footer/Footer";
import { Parallax } from "react-scroll-parallax";

const ContactFooter = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="contact-footer">
      <div
        className="parallaxDivider"
        style={{
          height: `${200 * (1 - progress)}px`,
          marginBottom: `calc(100vh - ${200 * (1 - progress) + 9}px)`,
          borderRadius: `50%/0 0 ${200 * (1 - progress)}px ${
            200 * (1 - progress)
          }px`,
        }}
      ></div>
      <Parallax
        onProgressChange={(progress) => setProgress(progress * 2.7)}
        speed={-20}
      >
        <div className="container">
          <div className="title">
            <h2>
              <div>
                <Avatar
                  alt="Abner Silva"
                  src={photo}
                  sx={{
                    bgcolor: "darkgrey",
                    marginRight: 4,
                  }}
                />
                Vamos
              </div>
              <div>trabalhar juntos!</div>
            </h2>
          </div>
          <hr />
          <div className="contact-btn">
            <div className="float-btn">
              <MagneticButton
                onClick={() => navigate("/contact")}
                className="elementBtn"
              >
                Contate-me
              </MagneticButton>
            </div>
          </div>
          <div className="infos">
            <MagneticButton
              onClick={(e: any) => {
                window.location.href = "mailto:abner.js05@gmail.com";
                e.preventDefault();
              }}
              variant="outlined"
            >
              abner.js05@gmail.com
            </MagneticButton>
            <MagneticButton
              onClick={(e: any) => {
                navigate(
                  "https://wa.me/5518997361645?text=Ol%C3%A1%2C%20Abner.%20Venho%20por%20meio%20do%20seu%20portfolio%20e%20gostaria%20de%20falar%20contigo!"
                );
                e.preventDefault();
              }}
              variant="outlined"
            >
              +55 18 99736-1645
            </MagneticButton>
          </div>
        </div>
      </Parallax>
      <Footer />
    </div>
  );
};

export default ContactFooter;
