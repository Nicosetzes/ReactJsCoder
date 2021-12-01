import "./ItemCount.css";
import { Link } from "react-router-dom";

export const ItemCount = ({
  onAdd,
  item,
  count,
  add,
  remove,
  itemCountStatus,
  isItemInCart,
  removeItem,
}) => {
  if (itemCountStatus || (!itemCountStatus && !isItemInCart)) {
    return (
      <>
        <div className="cont__bottom-counter">
          <button onClick={remove}>-</button>
          <span>{count}</span>
          <button onClick={add}>+</button>
        </div>
        <button onClick={() => onAdd(item, count)}>Agregar al carrito</button>
      </>
    );
  } else {
    return (
      <>
        <button>
          <Link to={`/cart`}>Finalizar compra</Link>
        </button>
        <button onClick={() => removeItem(item)}>
          Eliminar producto del carrito
        </button>
      </>
    );
  }
};
