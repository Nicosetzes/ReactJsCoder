import { useState, useEffect } from "react";
import { productsList } from "../products";
import { ItemDetail } from "./ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    const numberedItemId = Number(itemId);
    const filtered = productsList.filter(
      (product) => product.id === numberedItemId
    );
    setProduct(filtered[0]);
  }, [itemId, product]);

  return (
    <>
      <div className="itemDetailContainer">
        {product && <ItemDetail item={product} key={product.id} />}
      </div>
    </>
  );
};
