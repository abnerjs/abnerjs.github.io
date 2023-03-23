import React, { ReactNode, useContext, useEffect, useRef } from "react";
import "./custom-cursor.css";
import CustomCursorContext from "./Context/CustomCursorContext";

interface Props {
  scale?: number;
  children?: ReactNode;
}

const CustomCursor = ({children, ...props}: Props) => {
  const { type } = useContext(CustomCursorContext);
  const secondaryCursor = useRef<HTMLDivElement>(null);
  
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      if (secondaryCursor.current) {
        positionRef.current.mouseX =
          mouseX - secondaryCursor.current.clientWidth / 2;
      }

      if (positionRef.current && secondaryCursor.current) {
        positionRef.current.mouseY =
          mouseY - secondaryCursor.current.clientHeight / 2;
      }
    });

    return () => {};
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);

      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      if (secondaryCursor.current)
        secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, []);
  return (
    <div className={`cursor-wrapper ${type}`}>
      <div className="secondary-cursor" ref={secondaryCursor}>
        <div className="cursor-background"
          style={{
            transform: `scale(${props.scale ?? 1})`
          }}
        >{children}</div>
      </div>
    </div>
  );
};

export default CustomCursor;
