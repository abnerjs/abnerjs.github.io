import React, { useEffect } from "react";
import "./contact.css";
import Navbar from "src/components/Navbar/Navbar";
import Footer from "src/components/Footer/Footer";
import { Avatar } from "@mui/material";
import photo from "src/assets/images/abnerig.jpg";
import SideInfo from "./SideInfo/SideInfo";
import Form from "./Form/Form";
import useTransitionStore from "src/store/storeConfig";

const Contact = () => {
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
    <div className="contact">
      <Navbar />

      <div className="form">
        <div className="header-contact">
          <div className="title">
            Vamos começar
            <br />
            um projeto juntos?
          </div>
          <div className="avatar">
            <Avatar src={photo} />
          </div>
        </div>

        <div className="row">
          <Form />
          <SideInfo />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
