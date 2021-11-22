import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [cartQty, setCartQty] = useState(0);

  const [itemCountStatus, setItemCountStatus] = useState(true);

  const displayItemCount = () => {
    setItemCountStatus(!itemCountStatus);
  };

  const addItem = (item, quantity) => {
    if (quantity >= 1 && item.stock > 0) {
      const productToAdd = { ...item, quantity: quantity };
      const productFoundArray = cart.filter(
        (element) => element.id === item.id
      );

      if (productFoundArray.length === 0) {
        setCart([...cart, productToAdd]);
      } else {
        const auxCart = [...cart];
        productFoundArray[0].quantity += quantity;
        setCart(auxCart);
      } // PREGUNTAR ACERCA DE ESTA LÓGICA. FUNCIONA, PERO NO ESPERABA QUE FUNCIONE SIN UN PASO EXTRA.
      displayItemCount();
    }
  };

  console.log(cart, cartQty);

  const removeItem = (item) => {
    const cartFiltered = cart.filter((element) => element.id !== item.id);
    console.log(cartFiltered);
    setCart(cartFiltered);
    if (cartFiltered.length === 0) {
      setCartQty(0);
    } // Con esta linea puedo resetear a 0 la cantidad de productos cuando elimino el único producto que se encontraba en el carrito
    displayItemCount();
  };

  useEffect(() => {
    if (cart.length > 0) {
      const qty = cart.map((element) => element.quantity);
      setCartQty(qty.reduce((a, b) => a + b));
    }
  }, [cart]); // Si no lo hago en useEffect, produce unlimited RERENDERS. PREGUNTAR.

  const clearItems = () => {
    setCart([]);
    setCartQty(0);
    console.log(cart);
  };

  const isItemInCart = (item) => {
    const filteredCart = cart.filter((element) => element.id === item.id);
    if (filteredCart.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const updateCartQty = () => {
    const totalAmount = cart.map((element) => element.quantity);
    setCartQty(totalAmount.reduce((a, b) => a + b));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartQty,
        itemCountStatus,
        displayItemCount,
        addItem,
        removeItem,
        clearItems,
        isItemInCart,
        updateCartQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
