import { useState } from "react";
import "./CartCount.css";
import { useCart } from "../context/CartContext";

export const CartCount = ({ item }) => {
  const cart = useCart();

  const [productQty, setProductQty] = useState(item.quantity);

  // const addItem = (item, quantity) => {
  //   if (quantity >= 1 && item.stock > 0) {
  //     const productToAdd = { ...item, quantity: quantity };
  //     const productFoundArray = cart.filter(
  //       (element) => element.id === item.id
  //     );

  //     if (productFoundArray.length === 0) {
  //       setCart([...cart, productToAdd]);
  //     } else {
  //       const auxCart = [...cart];
  //       productFoundArray[0].quantity += quantity;
  //       setCart(auxCart);
  //     }
  //     displayItemCount();
  //   }
  // };

  const addOnCart = () => {
    if (productQty < item.stock) {
      setProductQty(productQty + 1);
      const index = cart.cart.findIndex((element) => element.id === item.id);
      cart.cart[index].quantity++;
      cart.updateCartQty();
      console.log(cart.cartQty);
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
      console.log(cart.cartQty);
    }
  };

  const removeItemFromCounter = () => {
    let index = cart.cart.findIndex((element) => element.id === item.id);
    cart.cart.splice(index, 1);
    cart.updateCartQty();
  };

  console.log(cart.cart);

  // var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
  // var removed = myFish.splice(3, 1);

  // removed is ["mandarin"]

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
