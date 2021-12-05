import { ClipLoader } from "react-spinners";
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
        <div className="emptyHome">
          <div className="loadingDiv">
            Se están cargando los productos, aguarde un momento...
          </div>
          <ClipLoader size={48} color={"green"} />
        </div>
      )}
    </div>
  );
};
