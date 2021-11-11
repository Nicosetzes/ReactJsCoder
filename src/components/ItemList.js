import { Item } from "./Item";
import "./ItemList.css";

export const ItemList = ({ items }) => {
  return (
    <div className="itemListGroup">
      {items ? (
        items.map((element) => {
          return <Item item={element} key={element.id} />;
        })
      ) : (
        <h1>Se están cargando los productos, aguarde...</h1>
      )}
    </div>
  );
};
