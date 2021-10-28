import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import "./components/NavBar.css";
import { ItemListContainer } from "./components/ItemListContainer";
import "./components/ItemListContainer.css";
import { ItemCount } from "./components/ItemCount";

function App() {
  const stock = 10;

  const [count, setCount] = useState(1);

  const add = () => {
    if (count >= stock) {
      alert("No puedes agregar más, supera el stock");
    } else {
      setCount(count + 1);
    }
  };

  const remove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const onAdd = (x) => {
    const productsQty = x;
    console.log(productsQty);
    document.getElementById("productsQty").innerHTML = productsQty;
  };

  // PROMISES

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("La promise funcionó");
      }, 3000);
    });

    task.then(
      (result) => {
        console.log(result);
      },
      (err) => {
        console.log(`El error es ${err}`);
      }
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting="JSX" />
        <ItemCount
          value={count}
          stock={10}
          add={add}
          remove={remove}
          onAdd={onAdd}
        />
      </main>
    </div>
  );
}

export default App;
