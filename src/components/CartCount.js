import { useState } from "react";
import "./CartCount.css";
import { useCart } from "../context/CartContext";

export const CartCount = ({ item }) => {
  const cart = useCart();

  const [productQty, setProductQty] = useState(item.quantity);

  const addOnCart = () => {
    if (productQty < item.stock) {
      setProductQty(productQty + 1);
      const index = cart.cart.findIndex((element) => element.id === item.id);
      cart.cart[index].quantity++;
      cart.updateCartQty();
    } else {
      alert("No hay stock");
    }
  };

  const removeOnCart = () => {
    if (productQty > 1) {
      setProductQty(productQty - 1);
      let index = cart.cart.findIndex((element) => element.id === item.id);
      cart.cart[index].quantity--;
      cart.updateCartQty();
    }
  };

  const removeItemFromCounter = () => {
    let index = cart.cart.findIndex((element) => element.id === item.id);
    cart.cart.splice(index, 1);
    cart.updateCartQty();
  };

  return (
    <>
      <button onClick={removeOnCart}>-</button>
      <span>{productQty}</span>
      <button onClick={addOnCart}>+</button>
      <div>
        <button onClick={removeItemFromCounter}>Eliminar del carrito</button>
      </div>
    </>
  );
};
