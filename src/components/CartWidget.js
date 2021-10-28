import logo from "../media/cart.svg";

export const CartWidget = () => {
    return (
        <div className="cartContainer">
            <img className="cart" alt="cart" src={logo} />
            <span id="productsQty">0</span>
        </div>
    )
}