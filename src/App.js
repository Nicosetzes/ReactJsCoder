import "./App.css";
import { NavBar } from "./components/NavBar";
import "./components/NavBar.css";
import { ItemListContainer } from "./components/ItemListContainer";
import "./components/ItemListContainer.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/">
            <main>
              <ItemListContainer greeting="JSX" />
              <ItemDetailContainer />
            </main>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
