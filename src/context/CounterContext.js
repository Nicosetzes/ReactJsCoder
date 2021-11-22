import { createContext, useState, useContext } from "react";

const CounterContext = createContext();

export const useCounter = () => useContext(CounterContext);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(1);

  const add = (product) => {
    if (count < product.stock) {
      setCount(count + 1);
    } else {
      alert("No hay stock");
    }
  };

  const remove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <CounterContext.Provider
      value={{
        count,
        add,
        remove,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
