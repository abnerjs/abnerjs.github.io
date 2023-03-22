import React, { ReactNode, useState } from "react";
import CustomCursorContext, {
  CursorLookType,
} from "./CustomCursorContext";

interface Props {
  children?: ReactNode;
}

const CustomCursorManager = ({ children, ...props }: Props) => {
  const [type, setType] = useState<CursorLookType>("default");

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  );
};

export default CustomCursorManager;