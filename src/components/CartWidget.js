import logo from "../media/cart.svg";

export const CartWidget = () => {
    return (
        <div className="cartContainer">
            <img className="cart" src={logo} />
            <span>0</span>
        </div>
    )
}