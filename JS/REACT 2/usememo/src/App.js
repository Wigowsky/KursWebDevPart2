import { useMemo, useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {

  const [state, setState] = useState({x:0, y:0});

  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const increaseX = () => setState({...state, x: state.x + 1});

  const increaseY = () => setState({...state, y: state.y + 1});

  const increaseFirstCounter = () => setFirstCounter(firstCounter + 1);

  const increaseSecondCounter = () => setSecondCounter(secondCounter + 1);

  // const firstCounterComponent = useMemo(() => 
  // <Counter counter={state} index={1}/>, [state.x])

  // const secondCounterComponent = useMemo(() => 
  // <Counter counter={state} index={2}/>, [state.y])

  return (
    <div className="App">
      <Counter counter={firstCounter} index={1}/>
      <button onClick={increaseFirstCounter}>Zwiększ licznik pierwszy</button>
      <Counter counter={secondCounter} index={2}/>
      <button onClick={increaseSecondCounter}>Zwiększ licznik drugi</button>
      
      
      
      {/* <Counter counter={state.x} index={1}/> */}
      {/* {firstCounterComponent}
      <button onClick={increaseX}>Zwiększ licznik pierwszy</button>
      {secondCounterComponent}
      <button onClick={increaseY}>Zwiększ licznik drugi</button> */}
    </div>
  );
}

export default App;
