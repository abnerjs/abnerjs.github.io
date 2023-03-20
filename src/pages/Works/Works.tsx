import React from "react";
import "./works.css";
import Navbar from "src/components/Navbar/Navbar";
import Stripe from "src/components/Stripe/Stripe";
import ContactFooter from "src/components/ContactFooter/ContactFooter";
import Header from "./Header/Header";
import WorksContainer from "./WorksContainer/WorksContainer";

const Works = () => {
  return (
    <div className="works">
      <Navbar black />

      <Header />

      <WorksContainer />

      <ContactFooter />
    </div>
  );
};

export default Works;
