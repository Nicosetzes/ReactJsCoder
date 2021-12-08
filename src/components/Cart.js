import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { CartProduct } from "./CartProduct";
import { useCart } from "../context/CartContext";
import { getFirestore } from "../firebase";
import { collection, doc, addDoc, writeBatch } from "firebase/firestore";
import "./Cart.css";

export const Cart = () => {
  const cart = useCart();

  const [purchaseId, setPurchaseId] = useState(null);

  useEffect(() => {
    cart.calculateTotalPrice();
  }, [cart]);

  const placeOrder = (evt) => {
    evt.preventDefault();

    const date = new Date();
    const order = {
      buyer: {
        name: formFields.userName,
        surname: formFields.userSurname,
        phone: formFields.userPhone,
        email: formFields.userEmail,
      },
      items: { cart: cart.cart, total: cart.totalCash },
      date: {
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString(),
      },
    };

    const firestoreDatabase = getFirestore();

    const ordersCollection = collection(firestoreDatabase, "orders");

    addDoc(ordersCollection, order).then(({ id }) => setPurchaseId(id));

    showModal();

    updateStocksFromFirebase(firestoreDatabase, cart.cart);
  };

  const updateStocksFromFirebase = (database, cart) => {
    const batch = writeBatch(database);

    const itemIdsAndNewStock = cart.map((element) => {
      return { id: element.id, newStock: element.stock - element.quantity };
    });

    itemIdsAndNewStock.forEach((item) => {
      const docRef = doc(database, "products", item.id);
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

  if (cart.cart.length) {
    return (
      <div className="container__cart">
        <div className="cont__products">
          {cart.cart &&
            cart.cart.map((product, index) => {
              return <CartProduct item={product} key={index} />;
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
                type="number"
                placeholder="Teléfono"
                name="userPhone"
                onChange={handleChange}
              />
              <input
                type="email"
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
            <p className="modalTitle">
              <span className="bold">Resumen de su compra</span>:
            </p>
            <p>
              Nombre y apellido:{" "}
              <span className="bold">
                {formFields.userName} {formFields.userSurname}
              </span>
            </p>
            <p>
              Monto total abonado:{" "}
              <span className="bold">${cart.totalCash}</span>
            </p>
            <span>
              Productos comprados:{" "}
              <ul>
                {cart.cart.map((product, index) => (
                  <li key={index} className="bold">
                    {product.title}, ${product.price} x {product.quantity}{" "}
                    unidades.
                  </li>
                ))}
              </ul>
            </span>
            <p>
              {purchaseId ? (
                <span>
                  Su número de orden es:{" "}
                  <span className="bold">{purchaseId}</span>
                </span>
              ) : (
                <BeatLoader color={"green"} />
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
          <Link to={"/"}>
            <button>Volver al home</button>
          </Link>
        </div>
      </>
    );
  }
};