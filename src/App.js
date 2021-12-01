import "./App.css";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Cart } from "./components/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DatabaseProvider } from "./context/DatabaseContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <DatabaseProvider>
        <CartProvider>
          <div className="App">
            <header>
              <NavBar />
            </header>
            <Switch>
              <Route exact path="/">
                <ItemListContainer greeting="JSX" />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/category/:categoryId">
                <ItemListContainer greeting="JSX" />
              </Route>
              <Route exact path="/item/:itemId">
                <ItemDetailContainer />
              </Route>
              <Route path="/*">
                <h1>La página solicitada no existe, inténtelo nuevamente...</h1>
              </Route>
            </Switch>
          </div>
        </CartProvider>
      </DatabaseProvider>
    </BrowserRouter>
  );
}

export default App;
