export const ItemCount = ({ value, stock, onAdd, onSubstract }) => {
    return (
        <div className="counterContainer">
            <div className="counter">
                <button onClick={onSubstract}>-</button>
                <span>{value}</span>
                <button onClick={onAdd}>+</button>
            </div>
            <button className="addProducts">Agregar al carrito</button>
            <span>Stock: {stock}</span>
        </div>
    )
}