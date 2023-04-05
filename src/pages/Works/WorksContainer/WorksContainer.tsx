import { useState } from "react";
import "./works-container.css";
import CustomCursor from "src/components/CustomCursor/CustomCursor";
import WorkItem from "./WorkItem/WorkItem";
import { useLocation, useNavigate } from "react-router-dom";
import integra from "src/assets/images/works/integra30.png";
import insumos from "src/assets/images/works/insumos.png";
import ponto from "src/assets/images/works/ponto.png";
import swingmd from "src/assets/images/works/swingmd.gif";
import iworkoff from "src/assets/images/works/iworkoff.gif";
import portalRelat from "src/assets/images/works/portal.png";
import useTransitionStore from "src/store/storeConfig";
import MenuContext from "src/components/MenuContext/MenuContext";

const WorksContainer = () => {
  const changeTransition = useTransitionStore((state) => state.change);
  const changeLabel = useTransitionStore((state) => state.changeLabel);
  const [scale, setScale] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const handlerGoTo = (url: string, label: string) => {
    if (location.pathname === url) return;
    changeTransition(1);
    changeLabel(`• ${label} •`);

    const timer = setTimeout(() => {
      navigate(url);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  };

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
        panel={portalRelat}
        setScale={setScale}
      />
      <WorkItem
        title="iWorkOff"
        description="Design & Desenvolvimento"
        dev="React"
        year="2021"
        panel={iworkoff}
        setScale={setScale}
      />
      <WorkItem
        title="Material Design"
        description="Design & Desenvolvimento"
        dev="Java Swing"
        year="2019"
        panel={swingmd}
        setScale={setScale}
        link="https://github.com/abnerjs/SwingMaterialDesign"
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
        panel={ponto}
        setScale={setScale}
      />
      <WorkItem
        title="Identidade Visual"
        description="Design"
        dev="Photoshop"
        year="2020"
        panel={integra}
        setScale={setScale}
        link="https://www.behance.net/gallery/95516641/Integra-party-corona"
      />
      <WorkItem
        title="Insumos"
        description="Design & Interação"
        dev="Figma"
        year="2022"
        panel={insumos}
        setScale={setScale}
        link="/works/insumos"
        onClick={() => handlerGoTo("/works/insumos", "INSUMOS")}
      />
    </div>
  );
};

export default WorksContainer;
