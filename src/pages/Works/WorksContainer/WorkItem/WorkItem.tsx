import React from "react";
import "./work-item.css";
import Stripe from "src/components/Stripe/Stripe";

interface Props {
  title: string;
  description: string;
  dev: string;
  year: string;
  setScale: Function;
  panel?: any;
}

const WorkItem = (props: Props) => {
  return (
    <div
      className="work-item"
      onMouseEnter={() => props.setScale(1)}
      onMouseOver={() => props.setScale(1)}
      onMouseLeave={() => props.setScale(0)}
    >
      <div className="panel">
        <div
          className="img"
          style={{
            backgroundImage: `url(${props.panel})`,
          }}
        ></div>
      </div>
      <div className="title">{props.title}</div>
      <Stripe margin={20} />
      <div className="description">
        <div>{props.description}</div>
        <div>
          {props.dev} • <span>{props.year}</span>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
