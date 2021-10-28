import "./App.css";
import { NavBar } from "./components/NavBar";
import "./components/NavBar.css";
import { ItemListContainer } from "./components/ItemListContainer";
import "./components/ItemListContainer.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting="JSX" />
      </main>
    </div>
  );
}

export default App;
