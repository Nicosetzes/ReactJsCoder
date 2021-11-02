// import { ItemCount } from "./ItemCount";

import "./ItemDetail.css";

const seeDetails = () => {
  const itemDetailModal = document.getElementById("itemDetailModal");
  itemDetailModal.classList.add("show");
};

const closeDetails = () => {
  const itemDetailModal = document.getElementById("itemDetailModal");
  itemDetailModal.classList.remove("show");
};

export const ItemDetail = ({ item }) => {
  return (
    <div className="itemBody">
      <h3>{item.title}</h3>
      <img alt={item.alt} src={item.image} />
      <span>Editorial: {item.publisher}</span>
      <span>${item.price}</span>
      <button className="seeDetails" onClick={() => seeDetails()}>
        Ver descripción
      </button>
      <div id="itemDetailModal" className="modalContainer">
        <div className="modal">
          <h3>{item.title}</h3>
          <div className="modal__innerCont">
            <img alt={item.alt} src={item.image} />
            <p>{item.description}</p>
          </div>
          <span className="publisher">Editorial: {item.publisher}</span>
          <span className="condition">Estado: {item.condition}</span>
          <span className="price">${item.price}</span>
          <button
            onClick={() => closeDetails()}
            id="itemDetailModalClose"
            className="modalClose"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};
