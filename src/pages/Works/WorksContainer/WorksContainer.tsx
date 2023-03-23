import React, { useState } from "react";
import "./works-container.css";
import Stripe from "src/components/Stripe/Stripe";
import WorkItem from "./WorkItem/WorkItem";
import integra from "src/assets/images/integra30.png";
import CustomCursor from "src/components/CustomCursor/CustomCursor";

const WorksContainer = () => {
  const [scale, setScale] = useState(0);

  return (
    <div className="works-container">
      <CustomCursor scale={scale}>
        <div className="btn-hover-view">
          <div className="text">Ver</div>
        </div>
      </CustomCursor>
      <WorkItem
        title="Portal de Relatórios"
        description="Design & Desenvolvimento"
        dev="React"
        year="2022"
        panel={undefined}
        setScale={setScale}
      />
      <WorkItem
        title="iWorkOff"
        description="Design & Desenvolvimento"
        dev="React"
        year="2021"
        panel={undefined}
        setScale={setScale}
      />
      <WorkItem
        title="Material Design"
        description="Design & Desenvolvimento"
        dev="Java Swing"
        year="2019"
        panel={undefined}
        setScale={setScale}
      />
      <WorkItem
        title="SIGAM"
        description="Design & Desenvolvimento de interface"
        dev="Java Swing"
        year="2019"
        panel={undefined}
        setScale={setScale}
      />
      <WorkItem
        title="Sistema de Ponto"
        description="Design & Interação"
        dev="Figma"
        year="2022"
        panel={undefined}
        setScale={setScale}
      />
      <WorkItem
        title="Identidade Visual"
        description="Design"
        dev="Photoshop"
        year="2020"
        panel={integra}
        setScale={setScale}
      />
      <WorkItem
        title="Insumos"
        description="Design & Interação"
        dev="Figma"
        year="2022"
        panel={undefined}
        setScale={setScale}
      />
    </div>
  );
};

export default WorksContainer;
