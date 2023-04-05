import { useState, useRef, useEffect, useLayoutEffect } from "react";
import "./menu-context.css";
import copy from "copy-to-clipboard";

interface Props {
  targetId: HTMLDivElement;
  open?: Function;
  link?: string;
}

const MenuContext = (props: Props) => {
  const [contextData, setContextData] = useState({
    visible: false,
    posX: 0,
    posY: 0,
  });
  const contextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contextMenuEventHandler = (event: any) => {
      const targetElement = props.targetId;
      if (targetElement && targetElement.contains(event.target)) {
        event.preventDefault();
        setContextData({
          visible: true,
          posX: event.pageX,
          posY: event.pageY,
        });
      } else if (
        contextRef.current &&
        !contextRef.current.contains(event.target)
      ) {
        setContextData({ ...contextData, visible: false });
      }
    };

    const offClickHandler = (event: any) => {
      if (contextRef.current && !contextRef.current.contains(event.target)) {
        setContextData({ ...contextData, visible: false });
      }
    };

    document.addEventListener("contextmenu", contextMenuEventHandler);
    document.addEventListener("click", offClickHandler);
    return () => {
      document.removeEventListener("contextmenu", contextMenuEventHandler);
      document.removeEventListener("click", offClickHandler);
    };
  }, [contextData, props.targetId]);

  useLayoutEffect(() => {
    if (
      contextRef.current &&
      contextData.posX + contextRef.current.offsetWidth > window.innerWidth
    ) {
      setContextData({
        ...contextData,
        posX: contextData.posX - contextRef.current.offsetWidth,
      });
    }
  }, [contextData]);

  return (
    <div
      ref={contextRef}
      className="menu-context"
      style={{
        top: contextData.posY,
        left: contextData.posX,
        display: `${contextData.visible ? "block" : "none"}`,
      }}
    >
      <div
        className="menu-item"
        onClick={(e) => {
          props.open && props.open();
          e.stopPropagation();
        }}
      >
        Abrir
      </div>
      <div
        className="menu-item"
        onClick={(e) => {
          props.link && window.open(props.link, "_blank");
          e.stopPropagation();
        }}
      >
        Abrir em nova guia
      </div>
      <div
        className="menu-item"
        onClick={(e) => {
          props.link &&
            (props.link.startsWith("/")
              ? copy("https://abnerjs.vercel.app" + props.link)
              : copy(props.link));
          e.stopPropagation();
        }}
      >
        Copiar link
      </div>
      <div
        className="signal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      ></div>
    </div>
  );
};

export default MenuContext;
