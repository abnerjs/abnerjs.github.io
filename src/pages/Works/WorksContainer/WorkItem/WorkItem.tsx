import React, { useEffect, useRef, useState } from "react";
import "./work-item.css";
import Stripe from "src/components/Stripe/Stripe";
import MenuContext from "src/components/MenuContext/MenuContext";

interface Props {
  title: string;
  description: string;
  dev: string;
  year: string;
  setScale: Function;
  panel?: any;
  onClick?: Function;
  link?: string;
}

const WorkItem = (props: Props) => {
  const el = useRef<HTMLDivElement>(null)
  return (
    <div
      ref={el}
      className="work-item"
      onMouseEnter={() => props.setScale(1)}
      onMouseOver={() => props.setScale(1)}
      onMouseLeave={() => props.setScale(0)}
      onClick={() => {
        props.onClick ? props.onClick() : props.link && window.open(props.link);
      }}
      onMouseDown={(e) => {
        if (e.button === 1) props.link && window.open(props.link, "_blank");
      }}
    >
      <MenuContext
        targetId={el.current!}
        open={props.onClick}
        link={props.link}
      />
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
