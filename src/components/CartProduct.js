import { useState } from "react";
import { CartCount } from "./CartCount";
import { EliminateFromCartModal } from "./EliminateFromCartModal";
import { useCart } from "../context/CartContext";

export const CartProduct = ({ item }) => {
  const cart = useCart();

  const removeItemFromCounter = () => {
    let index = cart.cart.findIndex((element) => element.id === item.id);
    cart.cart.splice(index, 1);
    cart.updateCartTotalQty();
    toggleModal();
  };

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="cart__products" key={item.id}>
        <div className="products-img">
          <img src={item.image} alt={item.alt} />
        </div>
        <div className="products-description">
          <h3>{item.title}</h3>
          <span className={`${item.className}`}>Stock: {item.stock}</span>
          <span className="products-description-total">
            Total: ${item.quantity * item.price}
          </span>
          <div className="products-description__quantity">
            Cantidad: <CartCount item={item} />
            <button onClick={toggleModal}>Eliminar del carrito</button>
          </div>
        </div>
      </div>
      {showModal ? (
        <EliminateFromCartModal
          removeItemFromCounter={removeItemFromCounter}
          toggleModal={toggleModal}
        />
      ) : null}
    </>
  );
};
