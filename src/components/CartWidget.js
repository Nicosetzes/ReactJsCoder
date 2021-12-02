import cartImage from "../media/cart.svg";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CartWidget.css";

export const CartWidget = () => {
  const cart = useCart();
  return (
    <div className="cartContainer">
      <Link to={`/cart`}>
        <img className="cart" alt="cart" src={cartImage} />
        <span id="productsQty">{cart.cartTotalQty}</span>
      </Link>
    </div>
  );
};
