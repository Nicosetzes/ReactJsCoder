import { ItemList } from "./ItemList";

export const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <p className="itemListContainer">Hola {greeting}</p>
      <ItemList />
    </>
  );
};
