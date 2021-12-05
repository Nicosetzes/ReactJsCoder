import { Link } from "react-router-dom";
import "./ItemCount.css";

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
          <button onClick={remove} disabled={count === 0}>
            -
          </button>
          <span>{count}</span>
          <button onClick={add}>+</button>
        </div>
        <button onClick={() => onAdd(item, count)} disabled={count === 0}>
          Agregar al carrito
        </button>
      </>
    );
  } else {
    return (
      <>
        <Link to={`/cart`}>
          <button>Finalizar compra</button>
        </Link>
        <button onClick={() => removeItem(item)}>
          Eliminar producto del carrito
        </button>
      </>
    );
  }
};
