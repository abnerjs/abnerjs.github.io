import React, { useEffect, useRef } from "react";
import "./works.css";
import Navbar from "src/components/Navbar/Navbar";
import ContactFooter from "src/components/ContactFooter/ContactFooter";
import Header from "./Header/Header";
import WorksContainer from "./WorksContainer/WorksContainer";
import CustomCursorManager from "src/components/CustomCursor/Context/Manager";

const Works = () => {
  return (
    <div className="works">
      <CustomCursorManager>
        <div className="page-wrapper">
          <Navbar black />

          <Header />

          <WorksContainer />

          <ContactFooter />
        </div>
      </CustomCursorManager>
    </div>
  );
};

export default Works;
