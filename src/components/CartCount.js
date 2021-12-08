import { useState } from "react";
import { useCart } from "../context/CartContext";

export const CartCount = ({ item }) => {
  const cart = useCart();

  const [productQty, setProductQty] = useState(item.quantity);

  const stockSpanElements = Array.from(
    document.getElementsByClassName("products-description-stock")
  );

  const addOnCart = () => {
    if (productQty < item.stock) {
      setProductQty(productQty + 1);
      const index = cart.cart.findIndex((element) => element.id === item.id);
      cart.cart[index].quantity++;
      cart.updateCartTotalQty();
    } else {
      const stockSpan = stockSpanElements.filter(
        (element) =>
          element.className === item.className ||
          element.className === `${item.className} alert`
      );
      stockSpan[0].classList.add("alert");
    }
  };

  const removeOnCart = () => {
    if (productQty > 1) {
      const stockSpan = stockSpanElements.filter(
        (element) =>
          element.className === item.className ||
          element.className === `${item.className} alert`
      );
      stockSpan[0].classList.remove("alert");
      setProductQty(productQty - 1);
      let index = cart.cart.findIndex((element) => element.id === item.id);
      cart.cart[index].quantity--;
      cart.updateCartTotalQty();
    }
  };

  return (
    <>
      <button onClick={removeOnCart} disabled={productQty === 1}>
        -
      </button>
      <span>{productQty}</span>
      <button onClick={addOnCart}>+</button>
    </>
  );
};