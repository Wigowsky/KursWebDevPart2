import { useEffect, useLayoutEffect, useState } from 'react'
import './App.css';
import Triangle from './Triangle';

function App() {

  const [isVisible, setIsVisible] = useState(false);

  const handlerOnClick = () => setIsVisible(prev => !prev);

  const triangleComponent = isVisible ? <Triangle/> : null;
 
  // useEffect(
  //   () => console.log('Po wyrenderowaniu DOM')
  // );

  // useLayoutEffect(
  //   () => console.log('Przed wyrenderowaniem DOM')
  // );


  // console.log('render')

  return (
    <div className="App">
      <button onClick={handlerOnClick}>Toggle</button>
      {triangleComponent}
    </div>
  );
}

export default App;
