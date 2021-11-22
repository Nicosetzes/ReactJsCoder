// import { Link } from "react-router-dom";
import "./Cart.css";
// import { useState } from "react";
import { useCart } from "../context/CartContext";
import { CartCount } from "./CartCount";
// import { useState, useEffect } from "react";

export const Cart = () => {
  const cart = useCart();

  console.log(cart.cart);

  // const [totalCash, setTotalCash] = useState(0);

  // if (cart.length) {
  //   const amounts = cart.map((product) => {
  //     return product.quantity * product.price;
  //   });
  //   setTotalCash(amounts.reduce((a, b) => a + b));
  // }

  // const placeOrder = (userName, userPhone, userEmail, cart, total) => {
  //   const order = {
  //     buyer: { name: userName, phone: userPhone, email: userEmail },
  //     items: { cart, total },
  //   };
  //   console.log(cart?.cart);
  //   console.log(order);
  // };

  return (
    <div className="container__cart">
      <div className="cont__products">
        {cart.cart &&
          cart.cart.map((product) => {
            return (
              <div className="cart__products" key={product.id}>
                <div className="products-img">
                  <img src={product.image} alt={product.alt} />
                </div>
                <div className="products-description">
                  <h3>{product.title}</h3>
                  <span className="products-description-total">
                    Total: ${product.quantity * product.price}
                  </span>
                  <div className="products-description__quantity">
                    Cantidad: <CartCount item={product} />
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="cont__form">
        <form>
          <div className="form-row">
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Apellido" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="E-mail" />
            <input type="number" placeholder="Teléfono" />
          </div>
        </form>
      </div>
    </div>
  );
};
