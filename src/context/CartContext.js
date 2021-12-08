import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [cartTotalQty, setCartTotalQty] = useState(0);

  const [cartElementQty, setCartElementQty] = useState(0);

  const [totalCash, setTotalCash] = useState(0);

  const [itemCountStatus, setItemCountStatus] = useState(true);

  const hideItemCount = () => {
    setItemCountStatus(false);
  };

  const displayItemCount = () => {
    setItemCountStatus(true);
  };

  const addItem = (item, quantity) => {
    const productToAdd = { ...item, quantity: quantity };
    const productFoundArray = cart.filter((element) => element.id === item.id);

    if (productFoundArray.length === 0) {
      setCart([...cart, productToAdd]);
      hideItemCount();
    } else {
      if (productFoundArray[0].quantity + quantity <= item.stock) {
        productFoundArray[0].quantity += quantity;
        const auxCart = [...cart];
        setCart(auxCart);
        hideItemCount();
      } else {
        const stockSpan = document.getElementById("stockSpan");
        stockSpan.classList.add("alert");
      }
    } 
  };

  const removeItem = (item) => {
    const cartFiltered = cart.filter((element) => element.id !== item.id);
    setCart(cartFiltered);
    if (cartFiltered.length === 0) {
      setCartTotalQty(0);
    } 
  };

  useEffect(() => {
    if (cart.length > 0) {
      const qty = cart.map((element) => element.quantity);
      setCartTotalQty(qty.reduce((a, b) => a + b));
    }
  }, [cart]); 

  const clearItems = () => {
    setCart([]);
    setCartTotalQty(0);
  };

  const isItemInCart = (item) => {
    const filteredCart = cart.filter((element) => element.id === item.id);
    if (filteredCart.length === 0) return false;
    else {
      return true;
    }
  };

  const updateCartTotalQty = () => {
    const totalAmount = cart.map((element) => element.quantity);
    totalAmount.length >= 1
      ? setCartTotalQty(totalAmount.reduce((a, b) => a + b))
      : setCartTotalQty(0);
  };

  const calculateCartElementQty = (item) => {
    const totalQty = cart.filter((element) => element.id === item.id);
    totalQty.length !== 0
      ? setCartElementQty(totalQty[0].quantity)
      : setCartElementQty(0);
  };

  const calculateTotalPrice = () => {
    const totalCashCalculation = cart.map(
      (element) => element.quantity * element.price
    );
    totalCashCalculation.length >= 1
      ? setTotalCash(totalCashCalculation.reduce((a, b) => a + b))
      : setTotalCash(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotalQty,
        itemCountStatus,
        cartElementQty,
        totalCash,
        displayItemCount,
        hideItemCount,
        addItem,
        removeItem,
        clearItems,
        isItemInCart,
        updateCartTotalQty,
        calculateCartElementQty,
        calculateTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};