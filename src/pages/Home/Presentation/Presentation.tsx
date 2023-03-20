import React from "react";
import "./presentation.css";
import { Icon } from "@iconify/react";
import { Button } from "@mui/material";
import Waves from "./Waves/Waves";

const Presentation = () => {
  return (
    <div className="presentation">
      <div className="curriculum">
        <Button
          variant="contained"
          disableElevation
          endIcon={<Icon icon="fluent:arrow-download-16-filled" />}
        >
          <a
            href="src/assets/AbnerCurriculumVitae.pdf"
            target="_blank"
            download
          >
            BAIXAR
            <br />
            CURRÍCULO
          </a>
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

      <Waves />
    </div>
  );
};

export default Presentation;
