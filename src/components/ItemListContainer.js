import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const database = useDatabase();

  const { categoryId } = useParams();
  if (!categoryId) {
    return (
      <>
        <ItemList items={database.stock} />
      </>
    );
  } else {
    return (
      <>
        {database.stock && (
          <ItemList
            items={database.stock.filter(
              (element) => element.category === categoryId
            )}
          />
        )}
      </>
    );
  }
};
