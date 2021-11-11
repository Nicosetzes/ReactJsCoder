import React, { useState, useEffect } from "react";
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ item }) => {
  const stock = 10;

  const [count, setCount] = useState(1);

  const [productsQty, setProductsQty] = useState(null);

  const [showItemCount, setShowItemCount] = useState(true);

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

  const onAdd = (quantityAdded) => {
    setProductsQty(quantityAdded);
    setShowItemCount(false);
    console.log(productsQty);
  };

  useEffect(() => {
    setProductsQty(count);
  }, [count]);

  return (
    <div className="itemBody">
      <h3>{item.title}</h3>
      <img alt={item.alt} src={item.image} />
      <span>Editorial: {item.publisher}</span>
      <span>${item.price}</span>
      <button>
        <Link to={`/item/${item.id}`}>Ver detalles del producto</Link>
      </button>
      <ItemCount
        value={count}
        stock={10}
        add={add}
        remove={remove}
        show={showItemCount}
        onAdd={onAdd}
      />
    </div>
  );
};
