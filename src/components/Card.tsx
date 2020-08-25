import React from "react";
import s from "./Card.module.css";
import { ProductsTypes } from "../App";

type CardTypes = {
  id: string;
  title: string;
  desc: string;
  portion: string;
  weight: number | string;
  itemName: string;
  text: string;
  selected: boolean;

  selectHandler: (id: string) => void;
};
let selectedStyle = {
  border: "4px solid #D91667"
};
let selectedWeightStyle = {
  backgroundColor: "#D91667"
};
export const Card: React.FC<CardTypes> = (props) => {
  return (
    <div
      onClick={() => props.selectHandler(props.id)}
      style={props.selected ? selectedStyle : {}}
      className={s.Card}
    >
      <div className={`${s.wrep} ${s.align}`}>
        <h6 className={s.itemName}>{props.itemName}</h6>
        <h2 className={s.title}>{props.title}</h2>
        <span className={s.desc}>{props.desc}</span>
        <p className={s.portion}>{props.portion}</p>
      </div>
      <div
        style={props.selected ? selectedWeightStyle : {}}
        className={s.weight}
      >
        {props.weight}
        <div className={s.kg}>кг</div>
      </div>
      <div className={s.text}>
        {props.text}{" "}
        <span
          onClick={() => props.selectHandler(props.id)}
          style={{ color: "#1698d9" }}
        >
          купи.
        </span>{" "}
      </div>
    </div>
  );
};
