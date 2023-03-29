import React, { useEffect } from "react";
import Navbar from "src/components/Navbar/Navbar";
import "./home.css";
import ContactFooter from "../../components/ContactFooter/ContactFooter";
import Works from "./Works/Works";
import Presentation from "./Presentation/Presentation";
import AboutHome from "./About/AboutHome";
import useTransitionStore from "src/store/storeConfig";

const Home = () => {
  const changeTransition = useTransitionStore((state) => state.change);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      changeTransition(0);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="home">
      <Navbar />

      <Presentation />

      <AboutHome />

      <Works />

      <ContactFooter />
    </div>
  );
};

export default Home;
