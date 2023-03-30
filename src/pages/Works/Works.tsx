import { useEffect } from "react";
import "./works.css";
import Navbar from "src/components/Navbar/Navbar";
import ContactFooter from "src/components/ContactFooter/ContactFooter";
import Header from "./Header/Header";
import WorksContainer from "./WorksContainer/WorksContainer";
import CustomCursorManager from "src/components/CustomCursor/Context/Manager";
import useTransitionStore from "src/store/storeConfig";

const Works = () => {
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
