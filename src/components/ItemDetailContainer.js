import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { useDatabase } from "../context/DatabaseContext";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState();

  const database = useDatabase();

  const { itemId } = useParams();

  useEffect(() => {
    if (database.stock !== null) {
      const filtered = database.stock.filter(
        (product) => product.id === itemId
      );
      setProduct(filtered[0]);
    }
  }, [itemId, database]);

  return <>{product && <ItemDetail item={product} key={product.id} />}</>;
};
