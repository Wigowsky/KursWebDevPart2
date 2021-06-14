import './App.css';
import { useRef, createRef, useState, useEffect } from 'react';


function App() {

  const [counter, setCounter] = useState(0);

  const textInputRef = useRef();
  // Referencja trzyma się przez cały cykl życia komponentu

  const numberInputRef = createRef();
  // Refernecja traco się przy rerenderze

  useEffect(
    ()=> {

    textInputRef.current.focus();

    }, []
  );

  const focusOnInput = () => textInputRef.current.focus();

  const increaseCounter = () => setCounter(counter + 1);

  return (
    <div className="App">
      <input ref={textInputRef} type="text"/>
      <input ref={numberInputRef} type="number"/>
      <button onClick={focusOnInput}>Ustaw focus na input</button>
      <button onClick={increaseCounter}>Przerenderuj komponent</button>
    </div>
  );
}

export default App;
