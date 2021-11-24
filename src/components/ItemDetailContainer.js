import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const database = useDatabase();

  const { itemId } = useParams();

  useEffect(() => {
    const filtered = database.stock.filter((product) => product.id === itemId);
    setProduct(filtered[0]);
  }, [itemId, database.stock]);

  return (
    <>
      <div className="itemDetailContainer">
        {product && <ItemDetail item={product} key={product.id} />}
      </div>
    </>
  );
};
