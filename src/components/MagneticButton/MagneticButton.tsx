import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./MagneticButton.css";

interface Props {
  onClick?: any;
  link?: string;
  className?: string;
  endIcon?: any;
  children?: any;
  variant?: "contained" | "outlined" | "text" | undefined;
  style?: any;
  disableRipple?: boolean;
  disabled?: boolean;
  type?: any;
  devOrientation?: boolean;
  devOrientationY?: boolean;
  devOrientationX?: boolean;
}

interface devOrientation {
  absolute: boolean;
  alpha: number;
  beta: number;
  gamma: number;
}

const defaultOrientation: devOrientation = {
  alpha: 0,
  beta: 0,
  gamma: 0,
  absolute: false,
};

const MagneticButton = (props: Props) => {
  const [translate, setTranslate] = useState("translate(0,0)");
  useState<devOrientation>(defaultOrientation);

  const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
    props.devOrientationX && setTranslate(`translate(${-e.gamma! * 0.4}px, 0)`);
    props.devOrientationY && setTranslate(`translate(0, ${-e.beta! * 0.5}px)`);
    props.devOrientation &&
      setTranslate(`translate(${-e.gamma! * 0.4}px, ${-e.beta! * 0.5}px)`);
  };

  useEffect(() => {
    window.addEventListener("deviceorientation", handleDeviceOrientation, true);

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.target as HTMLElement;
    const position = btn.getBoundingClientRect();
    const x = e.clientX - position.left - position.width / 2;
    const y = e.clientY - position.top - position.height / 2;
    setTranslate(`translate(${x * 0.3}px, ${y * 0.5}px)`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTranslate("translate(0,0)");
  };

  return (
    <Button
      className={props.className + " follows-btn"}
      variant={props.variant || "contained"}
      disableElevation
      onClick={() => {
        props.onClick ? props.onClick() : props.link && window.open(props.link);
      }}
      onMouseDown={(e) => {
        if (e.button === 1) props.link && window.open(props.link, "_blank");
      }}
      endIcon={props.endIcon}
      disableFocusRipple
      type={props.type}
      disabled={props.disabled}
      disableRipple={props.disableRipple}
      onMouseMove={(e) => handleMouseMove(e)}
      style={{
        ...props.style,
        transform: translate,
      }}
      onMouseLeave={handleMouseLeave}
    >
      {props.children}
    </Button>
  );
};

export default MagneticButton;
