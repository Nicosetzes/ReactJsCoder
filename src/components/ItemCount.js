import "./ItemCount.css";
import { Link } from "react-router-dom";

export const ItemCount = ({ onAdd, value, stock, add, remove, show }) => {
  if (show === true) {
    return (
      <div className="counterContainer">
        <div className="counter">
          <button className="removeButton" onClick={remove}>
            -
          </button>
          <span>{value}</span>
          <button className="addButton" onClick={add}>
            +
          </button>
        </div>
        <button className="addProducts" onClick={() => onAdd(value)}>
          Agregar al carrito
        </button>
        <span>Stock: {stock}</span>
      </div>
    );
  } else {
    return (
      <>
        <span>Cantidad de productos: {value}</span>
        <button>
          <Link to={`/cart`}>Ir al carrito</Link>
        </button>
      </>
    );
  }
};
