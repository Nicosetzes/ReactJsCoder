import { createContext, useState, useEffect, useContext } from "react";
import { getFirestore } from "../firebase";
import { collection, query, getDocs } from "firebase/firestore";

const DatabaseContext = createContext();

export const useDatabase = () => useContext(DatabaseContext);

export const DatabaseProvider = ({ children }) => {
  const [stock, setStock] = useState(null);

  useEffect(() => {
    const database = getFirestore();
    const q = query(collection(database, "products"));
    getDocs(q).then((snapshot) => {
      setStock(
        snapshot.docs.map((doc) => {
          const newDoc = { ...doc.data(), id: doc.id };
          return newDoc;
        })
      );
    });
  }, []); 

  return (
    <DatabaseContext.Provider
      value={{
        stock,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};
