import "./Cart.css";
import { useCart } from "../context/CartContext";
import { CartCount } from "./CartCount";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFirestore } from "../firebase";
import { collection, doc, addDoc, writeBatch } from "firebase/firestore";

export const Cart = () => {
  const showModal = () => {
    const modalContainerSuccess = document.getElementById(
      "modalContainerSuccess"
    );
    modalContainerSuccess.classList.add("show");
  };

  const closeModal = () => {
    const modalContainerSuccess = document.getElementById(
      "modalContainerSuccess"
    );
    modalContainerSuccess.classList.remove("show");
    cart.clearItems();
  };

  const cart = useCart();

  const [purchaseId, setPurchaseId] = useState(null);

  useEffect(() => {
    cart.calculateTotalPrice();
  }, [cart]);

  const placeOrder = (evt) => {
    evt.preventDefault();
    const order = {
      buyer: {
        name: formFields.userName,
        surname: formFields.userSurname,
        phone: formFields.userPhone,
        email: formFields.userEmail,
      },
      items: { cart: cart.cart, total: cart.totalCash },
    };

    const dataBase = getFirestore();

    const ordersCollection = collection(dataBase, "orders");

    addDoc(ordersCollection, order).then(({ id }) => setPurchaseId(id));

    showModal();

    updateStocksFromFirebase(dataBase, cart.cart);
  };

  const updateStocksFromFirebase = (dataBase, cart) => {
    const batch = writeBatch(dataBase);

    const itemIdsAndNewStock = cart.map((element) => {
      return { id: element.id, newStock: element.stock - element.quantity };
    });

    itemIdsAndNewStock.forEach((item) => {
      const docRef = doc(dataBase, "products", item.id);
      batch.update(docRef, { stock: item.newStock });
    });
    batch.commit();
  };

  const [formFields, setFormFields] = useState({
    userName: "",
    userSurname: "",
    userPhone: "",
    userEmail: "",
  });

  const handleChange = (evt) => {
    setFormFields({ ...formFields, [evt.target.name]: evt.target.value });
  };

  if (cart.cart.length) {
    return (
      <div className="container__cart">
        <div className="cont__products">
          {cart.cart &&
            cart.cart.map((product) => {
              return (
                <div className="cart__products" key={product.id}>
                  <div className="products-img">
                    <img src={product.image} alt={product.alt} />
                  </div>
                  <div className="products-description">
                    <h3>{product.title}</h3>
                    <span className="products-description-total">
                      Total: ${product.quantity * product.price}
                    </span>
                    <div className="products-description__quantity">
                      Cantidad: <CartCount item={product} />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="cont__form">
          <span className="totalPrice">Total: ${cart.totalCash}</span>
          <form>
            <div className="form-row">
              <input
                type="text"
                placeholder="Nombre"
                name="userName"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Apellido"
                name="userSurname"
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                placeholder="Teléfono"
                name="userPhone"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="E-mail"
                name="userEmail"
                onChange={handleChange}
              />
            </div>
            <button
              onClick={placeOrder}
              disabled={
                !(
                  formFields.userName &&
                  formFields.userSurname &&
                  formFields.userPhone &&
                  formFields.userEmail
                )
              }
            >
              Finalizar compra
            </button>
          </form>
        </div>
        <div id="modalContainerSuccess" className="modalContainer">
          <div className="modal">
            <p>
              <span className="modalTitle bold">Resumen de su compra</span>:
            </p>
            <p>
              Nombre y apellido:{" "}
              <span className="bold">
                {formFields.userName} {formFields.userSurname}
              </span>
            </p>
            <p>
              Productos comprados:{" "}
              <ul>
                {cart.cart.map((product, index) => (
                  <li key={index} className="bold">
                    {product.title}, ${product.price} x {product.quantity}{" "}
                    unidades.
                  </li>
                ))}
              </ul>
            </p>
            <p>
              Monto total abonado:{" "}
              <span className="bold">${cart.totalCash}</span>
            </p>
            <p>
              {purchaseId ? (
                <span>
                  Su número de orden es:{" "}
                  <span className="bold">{purchaseId}</span>
                </span>
              ) : (
                <span className="bold">
                  Aguarde mientras se genera el número de orden...
                </span>
              )}
            </p>
            <button className="modalClose" onClick={closeModal}>
              Volver
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="emptyCart">
          <span>¡El carrito está vacío!</span>
          <button>
            <Link to={"/"}>Volver al home</Link>
          </button>
        </div>
      </>
    );
  }
};
