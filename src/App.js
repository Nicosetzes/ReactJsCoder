import React, { useState } from 'react';
import './App.css';
import { ItemCount } from './components/ItemCount';
import './components/ItemCount.css'
import { NavBar } from './components/NavBar'
import './components/NavBar.css'
import { ItemListContainer } from './components/ItemListContainer'
import './components/ItemListContainer.css'

function App() {


  const stock = 10; 

  const [count, setCount] = useState(1)

  const add = () => { 
    if (count >= stock) {
      alert("No puedes agregar más, supera el stock")
    }
    else {
      setCount(count + 1) }
    }

  const substract = () => { 
    if(count > 1) {
      setCount(count - 1) 
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting="JSX" />
        <ItemCount value={count} stock={10} onAdd={add} onSubstract={substract} />
      </main>
    </div>
  );
}

export default App;
