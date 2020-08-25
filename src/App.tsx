import * as React from "react";
import "./styles.css";
import { Card } from "./components/Card";
import s from "./App.module.css";
import { v1 } from "uuid";

export type ProductsTypes = {
  id: string;
  title: string;
  desc: string;
  portion: string;
  weight: number | string;
itemName: string
text: string
selected: boolean


};
export default function App() {

  const selectHandler = (id: string) => {
   
     let selectedItem = product.find(p => p.id === id)
    if(selectedItem) {
      selectedItem.selected = !selectedItem.selected
    }
     setProduct([...product])
  }
  const [product, setProduct] = React.useState<Array<ProductsTypes>>([
    {
      id: v1(),
      title: "Нямушка",
      desc: "с фуа-гра",
      portion: "10 порций мышь в подарок",
      weight: "0,5",
      itemName: "Сказочное заморское яство",
      text:"Чего сидишь? Порадуй котэ,",
    
      selected:false
    },
    {
      id: v1(),
      title: "Нямушка",
      desc: "с рыбой",
      portion: "40 порций 2 мыши в подарок",
      weight: 2,
      itemName: "Сказочное заморское яство",
      text:"Головы щучьи с чесноком да свежайшая сёмгушка.",
      
      selected:false
    },
    {
      id: v1(),
      title: "Нямушка",
      desc: "с курой",
      portion: "100 порций 5 мышей в подарок заказчик доволен",
      weight: 5,
      itemName: "Сказочное заморское яство",
      text:"Печалька, с курой закончился.",
     
      selected:false
    }
  ]);

  return (
    <div className={s.App}>
      <h2 className={s.title}>Ты сегодня покормил кота?</h2>
      {product.map(p => {
return <Card  key={p.id} selectHandler={selectHandler} id={p.id} title={p.title} selected={p.selected} desc={p.desc} text={p.text} portion={p.portion}itemName={p.itemName}  weight={p.weight}  />



})}
    </div>
  );
}
