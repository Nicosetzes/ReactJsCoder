import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ item }) => {
  return (
    <div className="itemBody">
      <h3>{item.title}</h3>
      <img alt={item.alt} src={item.image} />
      <span>Editorial: {item.publisher}</span>
      <span>${item.price}</span>
      <button>
        <Link to={`/item/${item.id}`}>Ver detalles del producto</Link>
      </button>
    </div>
  );
};
