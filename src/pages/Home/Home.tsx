import React, { useEffect } from "react";
import Navbar from "src/components/Navbar/Navbar";
import "./home.css";
import ContactFooter from "../../components/ContactFooter/ContactFooter";
import Works from "./Works/Works";
import AboutHome from "./About/AboutHome";
import useTransitionStore from "src/store/storeConfig";
import Base from "./Presentation/Base";

const Home = () => {
  const changeTransition = useTransitionStore((state) => state.change);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      changeTransition(0);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home">
      <Navbar />

      <Base />

      <AboutHome />

      <Works />

      <ContactFooter />
    </div>
  );
};

export default Home;
