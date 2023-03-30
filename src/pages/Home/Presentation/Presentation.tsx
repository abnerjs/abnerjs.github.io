import React from "react";
import "./presentation.css";
import { Icon } from "@iconify/react";
import { Button } from "@mui/material";
import Waves from "./Waves/Waves";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import eu from "src/assets/images/eu.png";

const Presentation = () => {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `AbnerCurriculumVitae.pdf`;
    link.href = './AbnerCurriculumVitae.pdf';
    link.click();
  };

  return (
    <div className="presentation">
      <ParallaxBanner style={{ aspectRatio: "1 / 1" }}>
        <ParallaxBannerLayer>
          <div className="containerBlobs">
            
          </div>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer>
          <div className="backdrop">
          </div>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer>
          <div className="eu">
            <div className="img-eu">
              <img src={eu} alt="" />
            </div>
          </div>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer>
          <Waves />
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <div className="curriculum">
        <Button
          variant="contained"
          disableElevation
          onClick={onDownload}
          endIcon={<Icon icon="fluent:arrow-download-16-filled" />}
        >
          BAIXAR
          <br />
          CURRÍCULO
        </Button>
      </div>

      <div className="marquee">
        <div className="track">
          <div className="content">
            Abner José da Silva • Abner José da Silva • Abner José da Silva •
            Abner José da Silva • Abner José da Silva • Abner José da Silva •
            Abner José da Silva • Abner José da Silva •{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
