import React from "react";
import "./stripe.css";

interface Props {
  margin?: number;
  height?: string;
}

const Stripe = (props: Props) => {
  return (
    <div
      className="stripe"
      style={{
        margin: props.margin + "px 0" || "32px 0",
        height: `${props.height ? props.height + "px" : "1px"}`,
      }}
    ></div>
  );
};

export default Stripe;
