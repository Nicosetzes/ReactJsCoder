export const EliminateFromCartModal = ({
  toggleModal,
  removeItemFromCounter,
}) => {
  return (
    <div className="modalContainer show">
      <div className="modal">
        <p className="modalTitle">
          <span>
            ¿Está seguro que desea eliminar este producto del carrito?
          </span>
        </p>
        <button onClick={toggleModal}>Cancelar</button>
        <button onClick={removeItemFromCounter}>Eliminar del carrito</button>
      </div>
    </div>
  );
};
