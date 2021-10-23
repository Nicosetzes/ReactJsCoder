import React, { useState } from 'react';

const stock = 10;

export const ItemCount = () => {

    const [count, setCount] = useState(1);

    const onAdd = () => {
        if (count >= stock) {
            alert("No puedes agregar más, supera el stock")
        }
        else {
            setCount(count + 1)
        }
    }

    const onSubstract = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className="counterContainer">
            <div className="counter">
                <button onClick={onSubstract}>-</button>
                <span>{count}</span>
                <button onClick={onAdd}>+</button>
            </div>
            <button className="addProducts" onClick={onAdd}>Agregar al carrito</button>
            <span>Stock: {stock}</span>
        </div>
    )
}
