export const Counter = ({value , onAdd , onSubstract}) => {
    return (
        <div className="counter">
            <button onClick={onSubstract}>-</button>
            <span>{value}</span>
            <button onClick={onAdd}>+</button>
        </div>
    )
}