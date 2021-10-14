import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import './components/Counter.css'
import { NavBar } from './components/NavBar'
import './components/NavBar.css'
import { ItemListContainer } from './components/ItemListContainer'
import './components/ItemListContainer.css'

function App() {

  const [count, setCount] = useState(0)

  const add = () => { setCount(count + 1) }

  const substract = () => { setCount(count - 1) }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting="JSX" />
        <Counter value={count} onAdd={add} onSubstract={substract} />
      </main>
    </div>
  );
}

export default App;
