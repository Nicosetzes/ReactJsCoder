import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import { ItemCount } from "./ItemCount";
import { useCart } from "../context/CartContext";

export const ItemDetail = ({ item }) => {
  const cart = useCart();

  const [count, setCount] = useState(1);

  const add = () => {
    if (count >= item.stock) {
      alert("No puedes agregar más, supera el stock");
    } else {
      setCount(count + 1);
    }
  };

  const remove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const isItemInCart = cart.isItemInCart(item);

  if (!isItemInCart) {
    return (
      <div className="itemDetail__container">
        <div className="cont__first">
          <h3>{item.title}</h3>
          <img alt={item.alt} src={item.image} />
          <p>{item.description}</p>
        </div>
        <div className="cont__second">
          <div className="cont__top">
            <span className="publisher">Editorial: {item.publisher}</span>
            <span className="condition">Estado: {item.condition}</span>
            <span className="price">${item.price}</span>
          </div>
          <div className="cont__bottom">
            <ItemCount
              count={count}
              item={item}
              add={add}
              remove={remove}
              itemCountStatus={cart.itemCountStatus}
              displayItemCount={cart.displayItemCount}
              onAdd={cart.addItem}
              removeItem={cart.removeItem}
            />
            <button>
              <Link to={"/"}>Volver</Link>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="itemDetail__container">
        <div className="cont__first">
          <h3>{item.title}</h3>
          <img alt={item.alt} src={item.image} />
          <p>{item.description}</p>
        </div>
        <div className="cont__second">
          <div className="alreadyAdded">
            <p>
              Este producto ha sido agregado al carrito. Desea
              <Link to={"/cart"}> ir al carrito</Link> o{" "}
              <a href="#cont__top" onClick={() => cart.displayItemCount()}>
                seguir comprando
              </a>
              ?
            </p>
          </div>
          <div className="cont__top" id="cont__top">
            <span className="publisher">Editorial: {item.publisher}</span>
            <span className="condition">Estado: {item.condition}</span>
            <span className="price">${item.price}</span>
          </div>
          <div className="cont__bottom">
            <ItemCount
              count={count}
              item={item}
              add={add}
              remove={remove}
              itemCountStatus={cart.itemCountStatus}
              displayItemCount={cart.displayItemCount}
              onAdd={cart.addItem}
              removeItem={cart.removeItem}
            />
            <button>
              <Link to={"/"}>Volver</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
};
