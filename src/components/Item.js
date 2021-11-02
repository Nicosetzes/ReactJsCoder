import React, { useState } from "react";
import { ItemCount } from "./ItemCount";

export const Item = ({ item }) => {
  const stock = 10;

  const [count, setCount] = useState(1);

  const add = () => {
    if (count >= stock) {
      alert("No puedes agregar más, supera el stock");
    } else {
      setCount(count + 1);
    }
  };

  const remove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const onAdd = (x) => {
    const productsQty = x;
    console.log(productsQty);
    document.getElementById("productsQty").innerHTML = productsQty;
  };

  return (
    <div className="itemBody">
      <h3>{item.title}</h3>
      <img alt={item.alt} src={item.image} />
      <span>Editorial: {item.publisher}</span>
      <span>${item.price}</span>
      <ItemCount
        value={count}
        stock={10}
        add={add}
        remove={remove}
        onAdd={onAdd}
      />
    </div>
  );
};
