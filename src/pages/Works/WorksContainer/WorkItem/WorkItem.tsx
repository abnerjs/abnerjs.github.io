import React from "react";
import "./work-item.css";
import Stripe from "src/components/Stripe/Stripe";

interface Props {
  title: string;
  description: string;
  dev: string;
  year: string;
  i: number;
  panel?: any;
}

const colours = [
  '#EDDBC7',
  '#A7727D',
  '#FFDCA9',
  '#E8F3D6',
  '#B08BBB',
  '#BDCDD6',
  '#E5E3C9',
  '#AC7D88',
];

const WorkItem = (props: Props) => {
  return (
    <div className="work-item">
      <div className="panel"
      style={{
        backgroundColor: colours[props.i % 8],
      }}>
        <div className="img"
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
