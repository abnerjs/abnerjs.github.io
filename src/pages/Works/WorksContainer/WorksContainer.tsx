import React from "react";
import "./works-container.css";
import Stripe from "src/components/Stripe/Stripe";
import WorkItem from "./WorkItem/WorkItem";

const WorksContainer = () => {
  return (
    <div className="works-container">
      <WorkItem
        title="Portal de Relatórios"
        description="Design & Desenvolvimento"
        dev="React"
        year="2022"
        panel={undefined}
      />
      <WorkItem
        title="iWorkOff"
        description="Design & Desenvolvimento"
        dev="React"
        year="2021"
        panel={undefined}
      />
      <WorkItem
        title="Material Design"
        description="Design & Desenvolvimento"
        dev="Java Swing"
        year="2019"
        panel={undefined}
      />
      <WorkItem
        title="SIGAM"
        description="Design & Desenvolvimento de interface"
        dev="Java Swing"
        year="2019"
        panel={undefined}
      />
      <WorkItem
        title="Sistema de Ponto"
        description="Design & Interação"
        dev="Figma"
        year="2022"
        panel={undefined}
      />
      <WorkItem
        title="Identidade Visual"
        description="Design"
        dev="Photoshop"
        year="2020"
        panel={undefined}
      />
    </div>
  );
};

export default WorksContainer;
