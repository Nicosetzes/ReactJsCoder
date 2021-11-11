import { Item } from "./Item";
import "./Item.css";
import "./ItemList.css";
// import { useState } from "react";
// import { useEffect } from "react";
// import { productsList } from "../products";
// import { useParams } from "react-router-dom";

export const ItemList = ({ items }) => {
  return (
    <div className="itemListGroup">
      {items ? (
        items.map((element) => {
          return <Item item={element} key={element.id} />;
        })
      ) : (
        <h1>Se están cargando los productos, aguarde...</h1>
      )}
    </div>
  );
};
