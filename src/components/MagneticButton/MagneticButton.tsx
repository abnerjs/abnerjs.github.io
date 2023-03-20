import { Button } from "@mui/material";
import React, { useState } from "react";
import "./MagneticButton.css";

interface Props {
  onClick?: any;
  className?: string;
  endIcon?: any;
  children?: any;
  variant?: "contained" | "outlined" | "text" | undefined;
  style?: any;
  disableRipple?: boolean;
  disabled?: boolean;
}

const MagneticButton = (props: Props) => {
  const [translate, setTranslate] = useState("translate(0,0)");

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
      onClick={props.onClick}
      endIcon={props.endIcon}
      disableFocusRipple
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
