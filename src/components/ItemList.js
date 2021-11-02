import { Item } from "./Item";
import "./Item.css";
import "./ItemList.css";

import { useState } from "react";
import { useEffect } from "react";
import { productsList } from "../products";

export const ItemList = () => {
  const [stock, setStock] = useState(null);

  // PROMISES

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Esto emula la importación del stock");
      }, 2000);
    });

    task.then(
      (result) => {
        setStock(productsList);
      },
      (err) => {
        console.log(`El error es ${err}`);
      }
    );
  }, []);

  return (
    <>
      <div className="itemListGroup">
        {stock &&
          stock.map((element) => {
            return <Item item={element} key={element.id} />;
          })}
      </div>
    </>
  );
};
