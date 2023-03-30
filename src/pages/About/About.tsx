import { useEffect } from "react";
import "./about.css";
import Navbar from "src/components/Navbar/Navbar";
import Header from "./Header/Header";
import Content from "./Content/Content";
import ContactFooter from "src/components/ContactFooter/ContactFooter";
import WorksWith from "./Content/WorksWith/WorksWith";
import useTransitionStore from "src/store/storeConfig";

const About = () => {
  const changeTransition = useTransitionStore((state) => state.change);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      changeTransition(0);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="about">
      <Navbar black />

      <Header />

      <Content />

      <WorksWith />

      <ContactFooter />
    </div>
  );
};

export default About;
