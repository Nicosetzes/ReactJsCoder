import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import { productsList } from "../products";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [stock, setStock] = useState(null);

  const { categoryId } = useParams();

  // PROMISE

  const getProducts = (dataBase) => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (dataBase) {
          resolve(dataBase);
        } else {
          reject("There's no dataBase available");
        }
      }, 2000);
    })
      .then((result) => setStock(result))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts(productsList);
  }, []);

  if (!categoryId) {
    return (
      <>
        <ItemList items={stock} />
      </>
    );
  } else {
    return (
      <>
        {stock && (
          <ItemList
            items={stock.filter((element) => element.category === categoryId)}
          />
        )}
      </>
    );
  }
};
