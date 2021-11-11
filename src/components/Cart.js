import { Link } from "react-router-dom";
import "./Cart.css";

export const Cart = () => {
  return (
    <>
      <div>Este será el carrito de compras</div>
      <div className="backHome">
        <button>
          <Link to={`/`}>Regresar al home</Link>
        </button>
      </div>
    </>
  );
};
