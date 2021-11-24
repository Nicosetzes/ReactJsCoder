import cartImage from "../media/cart.svg";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CartWidget.css";

export const CartWidget = () => {
  const cart = useCart();
  return (
    <Link to={`/cart`}>
      <div className="cartContainer">
        <img className="cart" alt="cart" src={cartImage} />
        <span id="productsQty">{cart.cartQty}</span>
      </div>
    </Link>
  );
};
