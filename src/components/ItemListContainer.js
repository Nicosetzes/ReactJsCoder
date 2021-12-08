import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { useDatabase } from "../context/DatabaseContext";
import "./ItemListContainer.css";

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
              (element) => element.category.toLowerCase() === categoryId
            )}
          />
        )}
      </>
    );
  }
};