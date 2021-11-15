import { Link } from "react-router-dom";
import "./Cart.css";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const cart = useCart();
  return (
    <>
      <div className="container__cart">
        <span>Este será el carrito de compras</span>
        <button onClick={() => cart.clearItems()}>
          Vacíar carrito de compras
        </button>
        <div className="backHome">
          <button>
            <Link to={`/`}>Regresar al home</Link>
          </button>
        </div>
      </div>
    </>
  );
};
