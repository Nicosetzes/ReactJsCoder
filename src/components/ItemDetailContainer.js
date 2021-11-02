import { useState } from "react";
import { useEffect } from "react";

import { productsList } from "../products";

import { ItemDetail } from "./ItemDetail";

import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Esto emula la importación de un único producto");
      }, 2000);
    });

    task.then(
      (result) => {
        setProduct(productsList[2]);
      },
      (err) => {
        console.log(`El error es ${err}`);
      }
    );
  }, []);
  return (
    <>
      <div className="itemDetailContainer">
        {product && <ItemDetail item={product} key={product.id} />}
      </div>
    </>
  );
};
