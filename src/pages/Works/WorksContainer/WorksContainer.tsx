import React from "react";
import "./works-container.css";
import Stripe from "src/components/Stripe/Stripe";
import WorkItem from "./WorkItem/WorkItem";
import integra from "src/assets/images/integra30.png";

const WorksContainer = () => {
  return (
    <div className="works-container">
      <WorkItem
        title="Portal de Relatórios"
        description="Design & Desenvolvimento"
        dev="React"
        year="2022"
        panel={undefined}
        i={0}
      />
      <WorkItem
        title="iWorkOff"
        description="Design & Desenvolvimento"
        dev="React"
        year="2021"
        panel={undefined}
        i={1}
      />
      <WorkItem
        title="Material Design"
        description="Design & Desenvolvimento"
        dev="Java Swing"
        year="2019"
        panel={undefined}
        i={2}
      />
      <WorkItem
        title="SIGAM"
        description="Design & Desenvolvimento de interface"
        dev="Java Swing"
        year="2019"
        panel={undefined}
        i={3}
      />
      <WorkItem
        title="Sistema de Ponto"
        description="Design & Interação"
        dev="Figma"
        year="2022"
        panel={undefined}
        i={4}
      />
      <WorkItem
        title="Identidade Visual"
        description="Design"
        dev="Photoshop"
        year="2020"
        panel={integra}
        i={5}
      />
      <div className="hover-button">
        
      </div>
    </div>
  );
};

export default WorksContainer;
