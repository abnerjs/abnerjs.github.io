import { useEffect } from "react";
import "./about.css";
import Navbar from "src/components/Navbar/Navbar";
import Content from "./Content/Content";
import ContactFooter from "src/components/ContactFooter/ContactFooter";
import WorksWith from "./Content/WorksWith/WorksWith";
import useTransitionStore from "src/store/storeConfig";
import animation from "src/assets/developer.json";
import Header from "src/components/Header/Header";

const About = () => {
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
    <div className="about">
      <Navbar black />

      <Header title="Ajudando você a prosperar" secondLine="no mundo digital." animation={animation} />

      <Content />

      <WorksWith />

      <ContactFooter />
    </div>
  );
};

export default About;
