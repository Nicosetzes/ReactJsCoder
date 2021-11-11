import logo from "../media/cart.svg";
import { Link } from "react-router-dom";
import "./CartWidget.css";

export const CartWidget = () => {
  return (
    <Link to={`/cart`}>
      <div className="cartContainer">
        <img className="cart" alt="cart" src={logo} />
        <span id="productsQty">0</span>
      </div>
    </Link>
  );
};
