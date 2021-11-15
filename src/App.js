import "./App.css";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Cart } from "./components/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <header className="App-header">
            <NavBar />
          </header>
          <Switch>
            <Route exact path="/">
              <ItemListContainer greeting="JSX" />
            </Route>
            <Route exact path="/category/:categoryId">
              <ItemListContainer greeting="JSX" />
            </Route>
            <Route exact path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
