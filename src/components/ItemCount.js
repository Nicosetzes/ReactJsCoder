import "./ItemCount.css";

export const ItemCount = ({ onAdd, value, stock, add, remove }) => {
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
};
