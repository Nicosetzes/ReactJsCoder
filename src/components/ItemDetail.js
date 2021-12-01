import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import { ItemCount } from "./ItemCount";
import { useCart } from "../context/CartContext";

export const ItemDetail = ({ item }) => {
  const cart = useCart();

  const itemCountStatus = cart.itemCountStatus;

  const cartElementQty = cart.cartElementQty;

  const [count, setCount] = useState(1);

  const stockSpan = document.getElementById("stockSpan");

  const add = () => {
    if (count >= item.stock) {
      stockSpan.classList.add("alert");
    } else {
      setCount(count + 1);
    }
  };

  const remove = () => {
    if (count > 1) {
      stockSpan.classList.remove("alert");
      setCount(count - 1);
    }
  };

  useEffect(() => {
    cart.calculateCartElementQty(item);
  }, [cart, item]);

  const isItemInCart = cart.isItemInCart(item);

  if (!isItemInCart || itemCountStatus) {
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
            <span id="stockSpan" className="stock">
              Stock: {item.stock}
            </span>
            <span className="price">${item.price}</span>
          </div>
          <div className="cont__bottom">
            <ItemCount
              count={count}
              item={item}
              add={add}
              remove={remove}
              itemCountStatus={cart.itemCountStatus}
              isItemInCart={isItemInCart}
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
              Este producto ha sido agregado al carrito
              <span className="bold"> {`(${cartElementQty} unidades)`}</span>.
              Desea
              <Link to={"/cart"}> ir al carrito</Link> o{" "}
              <a href="#cont__top" onClick={cart.displayItemCount}>
                seguir comprando
              </a>
              ?
            </p>
          </div>
          <div className="cont__top" id="cont__top">
            <span className="publisher">Editorial: {item.publisher}</span>
            <span className="condition">Estado: {item.condition}</span>
            <span className="price">${item.price}</span>
            <span id="stockSpan" className="stock">
              Stock: {item.stock}
            </span>
          </div>
          <div className="cont__bottom">
            <ItemCount
              count={count}
              item={item}
              add={add}
              remove={remove}
              itemCountStatus={cart.itemCountStatus}
              isItemInCart={isItemInCart}
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
